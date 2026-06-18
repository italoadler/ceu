import {
  degreesToRadians,
  ecfToLookAngles,
  eciToEcf,
  gstime,
  propagate,
  twoline2satrec,
  type EciVec3,
  type GeodeticLocation,
  type Kilometer,
  type SatRec
} from "satellite.js";
import type { SatelliteState, SatelliteTrack } from "../runtime/context";
import { setSignal, type SignalStore } from "../runtime/signals";

export type SatelliteReading = {
  state: SatelliteState;
  fonte: "celestrak" | "simulado";
};

type TleSatellite = {
  name: string;
  line1: string;
  line2: string;
  satrec: SatRec;
};

const fortaleza = {
  latitude: -3.7319,
  longitude: -38.5267,
  heightKm: 0.021,
  label: "fortaleza"
};

const celestrakVisualTleUrl = "https://celestrak.org/NORAD/elements/gp.php?GROUP=visual&FORMAT=tle";

export async function fetchSatellitePasses(place = "fortaleza", endpoint = import.meta.env.VITE_CELESTRAK_VISUAL_TLE_URL): Promise<SatelliteReading> {
  const observer = resolveObserver(place);

  try {
    const response = await fetch(endpoint || celestrakVisualTleUrl);
    if (!response.ok) {
      throw new Error(`CelesTrak respondeu ${response.status}`);
    }

    const text = await response.text();
    const satellites = parseTle(text).slice(0, 180);
    const tracks = computeTracks(satellites, observer);

    return {
      fonte: "celestrak",
      state: {
        observer,
        source: "celestrak",
        updatedAt: new Date().toISOString(),
        tracks
      }
    };
  } catch (error) {
    console.warn("Falha ao consultar CelesTrak, usando satelites simulados.", error);
    return {
      fonte: "simulado",
      state: createSimulatedSatelliteState(observer)
    };
  }
}

export function applySatelliteReading(sinais: SignalStore, target: SatelliteState, reading: SatelliteReading): void {
  target.observer = reading.state.observer;
  target.source = reading.state.source;
  target.updatedAt = reading.state.updatedAt;
  target.tracks = reading.state.tracks;

  const visibleTracks = target.tracks.filter((track) => track.visible);
  const primary = visibleTracks[0] ?? target.tracks[0];

  setSignal(sinais, "satelite.quantidade", Math.min(1, visibleTracks.length / 8));
  setSignal(sinais, "satelite.visivel", visibleTracks.length > 0 ? 1 : 0);

  if (!primary) {
    setSignal(sinais, "satelite.altitude", 0);
    setSignal(sinais, "satelite.azimute", 0);
    setSignal(sinais, "satelite.distancia", 1);
    setSignal(sinais, "satelite.proximo", 0);
    return;
  }

  setSignal(sinais, "satelite.altitude", normalizeElevation(primary.elevation));
  setSignal(sinais, "satelite.azimute", primary.azimuth / 360);
  setSignal(sinais, "satelite.distancia", normalizeRange(primary.rangeKm));
  setSignal(sinais, "satelite.proximo", primary.visible ? normalizeElevation(primary.elevation) : Math.max(0, 1 - Math.abs(primary.elevation) / 45));
}

function parseTle(source: string): TleSatellite[] {
  const lines = source
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const satellites: TleSatellite[] = [];

  for (let index = 0; index < lines.length - 2; index += 3) {
    const name = lines[index];
    const line1 = lines[index + 1];
    const line2 = lines[index + 2];
    if (!line1.startsWith("1 ") || !line2.startsWith("2 ")) continue;

    try {
      satellites.push({ name, line1, line2, satrec: twoline2satrec(line1, line2) });
    } catch {
      // Ignora TLE malformado.
    }
  }

  return satellites;
}

function computeTracks(satellites: TleSatellite[], observer: SatelliteState["observer"], date = new Date()): SatelliteTrack[] {
  const observerGd: GeodeticLocation = {
    latitude: degreesToRadians(observer.latitude),
    longitude: degreesToRadians(observer.longitude),
    height: observer.heightKm
  };
  const gmst = gstime(date);

  return satellites
    .map((satellite) => {
      const positionAndVelocity = propagate(satellite.satrec, date);
      const positionEci = positionAndVelocity?.position;
      if (!isEciPosition(positionEci)) return undefined;

      const positionEcf = eciToEcf(positionEci, gmst);
      const lookAngles = ecfToLookAngles(observerGd, positionEcf);
      const elevation = radiansToDegrees(lookAngles.elevation);
      const azimuth = wrapDegrees(radiansToDegrees(lookAngles.azimuth));
      const rangeKm = lookAngles.rangeSat;

      return {
        name: satellite.name,
        azimuth,
        elevation,
        rangeKm,
        visible: elevation > 8,
        brightness: Math.max(0, Math.min(1, elevation / 75)),
        path: computePath(satellite.satrec, observerGd, date)
      };
    })
    .filter((track): track is SatelliteTrack => Boolean(track))
    .sort((a, b) => scoreTrack(b) - scoreTrack(a))
    .slice(0, 12);
}

function computePath(satrec: SatRec, observerGd: GeodeticLocation, date: Date): SatelliteTrack["path"] {
  const path: SatelliteTrack["path"] = [];

  for (let minutes = -18; minutes <= 36; minutes += 6) {
    const sampleDate = new Date(date.getTime() + minutes * 60_000);
    const positionAndVelocity = propagate(satrec, sampleDate);
    const positionEci = positionAndVelocity?.position;
    if (!isEciPosition(positionEci)) continue;

    const lookAngles = ecfToLookAngles(observerGd, eciToEcf(positionEci, gstime(sampleDate)));
    path.push({
      azimuth: wrapDegrees(radiansToDegrees(lookAngles.azimuth)),
      elevation: radiansToDegrees(lookAngles.elevation)
    });
  }

  return path;
}

function createSimulatedSatelliteState(observer: SatelliteState["observer"]): SatelliteState {
  const now = Date.now() / 1000;
  const tracks = Array.from({ length: 5 }, (_, index) => {
    const phase = now * (0.018 + index * 0.003) + index * 1.8;
    const elevation = Math.sin(phase) * 54 - 4 + index * 2;
    const azimuth = wrapDegrees((phase * 38 + index * 62) % 360);
    const path = Array.from({ length: 10 }, (_entry, step) => ({
      azimuth: wrapDegrees(azimuth + (step - 4) * (8 + index)),
      elevation: elevation + Math.sin(step * 0.7 + index) * 12 - Math.abs(step - 4) * 2
    }));

    return {
      name: ["ISS", "HUBBLE", "NOAA 19", "TERRA", "AQUA"][index] ?? `SAT ${index + 1}`,
      azimuth,
      elevation,
      rangeKm: 520 + index * 180,
      visible: elevation > 8,
      brightness: Math.max(0, Math.min(1, elevation / 75)),
      path
    };
  }).sort((a, b) => scoreTrack(b) - scoreTrack(a));

  return {
    observer,
    source: "simulado",
    updatedAt: new Date().toISOString(),
    tracks
  };
}

function resolveObserver(place: string): SatelliteState["observer"] {
  if (place.toLowerCase() === "fortaleza") return fortaleza;
  return fortaleza;
}

function scoreTrack(track: SatelliteTrack): number {
  return (track.visible ? 100 : 0) + track.elevation - track.rangeKm / 2000;
}

function normalizeElevation(elevation: number): number {
  return Math.max(0, Math.min(1, elevation / 90));
}

function normalizeRange(rangeKm: number): number {
  return Math.max(0, Math.min(1, 1 - (rangeKm - 350) / 2600));
}

function wrapDegrees(value: number): number {
  return ((value % 360) + 360) % 360;
}

function radiansToDegrees(value: number): number {
  return (value * 180) / Math.PI;
}

function isEciPosition(value: EciVec3<Kilometer> | boolean | undefined): value is EciVec3<Kilometer> {
  return Boolean(value) && typeof value === "object";
}
