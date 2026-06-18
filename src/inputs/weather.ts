import { setSignal, type SignalStore } from "../runtime/signals";

export type WeatherReading = {
  calor?: number;
  umidade?: number;
  vento?: number;
  chuva?: number;
  pressao?: number;
  nuvem?: number;
  radiacao?: number;
  fonte: string;
};

const fortaleza = {
  latitude: -3.7319,
  longitude: -38.5267
};

export async function fetchWeatherSignals(place = "fortaleza", endpoint = import.meta.env.VITE_FUNCEME_TEMPO_URL): Promise<WeatherReading> {
  if (endpoint) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`FUNCEME respondeu ${response.status}`);
      }
      return normalizeFuncemePayload(await response.json());
    } catch (error) {
      console.warn("Falha ao consultar FUNCEME, usando fallback publico.", error);
    }
  }

  return fetchOpenMeteoFallback(place);
}

export function applyWeatherReading(sinais: SignalStore, reading: WeatherReading): void {
  if (reading.calor !== undefined) setSignal(sinais, "tempo.calor", reading.calor);
  if (reading.umidade !== undefined) setSignal(sinais, "tempo.umidade", reading.umidade);
  if (reading.vento !== undefined) setSignal(sinais, "tempo.vento", reading.vento);
  if (reading.chuva !== undefined) setSignal(sinais, "tempo.chuva", reading.chuva);
  if (reading.pressao !== undefined) setSignal(sinais, "tempo.pressao", reading.pressao);
  if (reading.nuvem !== undefined) setSignal(sinais, "tempo.nuvem", reading.nuvem);
  if (reading.radiacao !== undefined) setSignal(sinais, "tempo.radiacao", reading.radiacao);
}

function normalizeFuncemePayload(payload: unknown): WeatherReading {
  const data = flattenObject(payload);

  return {
    calor: normalizeRange(pickNumber(data, ["temperatura", "temp", "temperature", "t"]), 18, 38),
    umidade: normalizePercent(pickNumber(data, ["umidade", "humidity", "ur"])),
    vento: normalizeRange(pickNumber(data, ["vento", "velocidade_vento", "wind_speed", "windspeed"]), 0, 45),
    chuva: normalizeRange(pickNumber(data, ["chuva", "precipitacao", "precipitation", "rain"]), 0, 40),
    pressao: normalizeRange(pickNumber(data, ["pressao", "pressure"]), 990, 1025),
    nuvem: normalizePercent(pickNumber(data, ["nuvem", "nebulosidade", "cloud_cover", "cloudcover"])),
    radiacao: normalizeRange(pickNumber(data, ["radiacao", "radiation", "shortwave_radiation"]), 0, 1000),
    fonte: "funceme"
  };
}

async function fetchOpenMeteoFallback(place: string): Promise<WeatherReading> {
  const location = place.toLowerCase() === "fortaleza" ? fortaleza : fortaleza;
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current: "temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,pressure_msl,wind_speed_10m",
    timezone: "America/Fortaleza"
  });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`Open-Meteo respondeu ${response.status}`);
  }

  const payload = (await response.json()) as {
    current?: {
      temperature_2m?: number;
      relative_humidity_2m?: number;
      precipitation?: number;
      rain?: number;
      cloud_cover?: number;
      pressure_msl?: number;
      wind_speed_10m?: number;
    };
  };
  const current = payload.current ?? {};

  return {
    calor: normalizeRange(current.temperature_2m, 18, 38),
    umidade: normalizePercent(current.relative_humidity_2m),
    vento: normalizeRange(current.wind_speed_10m, 0, 45),
    chuva: normalizeRange(Math.max(current.precipitation ?? 0, current.rain ?? 0), 0, 40),
    pressao: normalizeRange(current.pressure_msl, 990, 1025),
    nuvem: normalizePercent(current.cloud_cover),
    radiacao: undefined,
    fonte: "open-meteo"
  };
}

function flattenObject(value: unknown, prefix = "", output: Record<string, unknown> = {}): Record<string, unknown> {
  if (!value || typeof value !== "object") return output;

  for (const [key, entry] of Object.entries(value)) {
    const normalizedKey = normalizeKey(key);
    const path = prefix ? `${prefix}.${normalizedKey}` : normalizedKey;
    output[path] = entry;

    if (entry && typeof entry === "object" && !Array.isArray(entry)) {
      flattenObject(entry, path, output);
    }
  }

  return output;
}

function pickNumber(data: Record<string, unknown>, names: string[]): number | undefined {
  for (const [key, value] of Object.entries(data)) {
    if (!names.some((name) => key.endsWith(normalizeKey(name)))) continue;
    if (typeof value === "number") return value;
    if (typeof value === "string") {
      const parsed = Number(value.replace(",", "."));
      if (Number.isFinite(parsed)) return parsed;
    }
  }

  return undefined;
}

function normalizeKey(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function normalizePercent(value: number | undefined): number | undefined {
  if (value === undefined) return undefined;
  return value > 1 ? value / 100 : value;
}

function normalizeRange(value: number | undefined, min: number, max: number): number | undefined {
  if (value === undefined) return undefined;
  return (value - min) / (max - min);
}
