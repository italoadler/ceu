import type { RuntimeContext, SatelliteTrack } from "../runtime/context";
import type { GlitchState } from "./glitchEngine";
import { withGlitchCanvas } from "./glitchEngine";

export type SatelliteLayer = {
  render(context: RuntimeContext, time: number, glitch?: GlitchState): void;
  resize(): void;
  dispose(): void;
};

export function createSatelliteLayer(canvas: HTMLCanvasElement): SatelliteLayer {
  const ctx = canvas.getContext("2d", { alpha: true });

  if (!ctx) {
    throw new Error("Canvas 2D indisponivel para satelites.");
  }

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width * window.devicePixelRatio));
    const height = Math.max(1, Math.floor(rect.height * window.devicePixelRatio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
  };

  resize();

  return {
    render(context, time, glitch) {
      resize();
      if (glitch?.active) {
        withGlitchCanvas(ctx, glitch, () => renderSatellites(ctx, canvas, context, time));
      } else {
        renderSatellites(ctx, canvas, context, time);
      }
    },
    resize,
    dispose() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };
}

function renderSatellites(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, context: RuntimeContext, time: number): void {
  const visual = context.visual;
  const intensity = Math.max(visual.satelites ?? 0, (visual.orbita ?? 0) * 0.88, (visual.passagem ?? 0) * 0.88);

  canvas.style.opacity = String(clamp01(intensity));
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (intensity <= 0.002) return;

  const tracks = context.satellites.tracks.length > 0 ? context.satellites.tracks : simulatedTracks(time);
  const activeTracks = tracks.slice(0, 8);

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  drawHorizon(ctx, canvas.width, canvas.height, intensity);

  for (const [index, track] of activeTracks.entries()) {
    drawTrack(ctx, canvas.width, canvas.height, track, intensity, index, time);
  }

  ctx.restore();
}

function drawHorizon(ctx: CanvasRenderingContext2D, width: number, height: number, intensity: number): void {
  const y = height * 0.82;
  const gradient = ctx.createLinearGradient(0, y - height * 0.18, 0, y + height * 0.08);
  gradient.addColorStop(0, `rgba(112, 210, 255, ${0.02 * intensity})`);
  gradient.addColorStop(1, `rgba(255, 245, 176, ${0.12 * intensity})`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, y - height * 0.18, width, height * 0.26);
}

function drawTrack(ctx: CanvasRenderingContext2D, width: number, height: number, track: SatelliteTrack, intensity: number, index: number, time: number): void {
  const path = track.path.length > 1 ? track.path : makeFallbackPath(track, time, index);
  const visiblePath = path.filter((point) => point.elevation > -8);

  if (visiblePath.length > 1) {
    ctx.beginPath();
    visiblePath.forEach((point, pointIndex) => {
      const screen = projectSky(point.azimuth, point.elevation, width, height);
      if (pointIndex === 0) ctx.moveTo(screen.x, screen.y);
      else ctx.lineTo(screen.x, screen.y);
    });
    ctx.lineWidth = 0.4 + intensity * 0.2;
    ctx.strokeStyle = `rgba(170, 226, 255, ${0.16 + intensity * 0.34})`;
    ctx.stroke();
  }

  const screen = projectSky(track.azimuth, track.elevation, width, height);
  const glow = Math.max(track.brightness, track.visible ? 0.42 : 0.16) * intensity;
  const radius = 2 + glow * 8;

  ctx.fillStyle = `rgba(255, 250, 190, ${0.34 + glow * 0.56})`;
  ctx.shadowColor = "rgba(130, 218, 255, 0.92)";
  ctx.shadowBlur = 12 + glow * 22;
  ctx.beginPath();
  ctx.arc(screen.x, screen.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  if (track.visible || index < 3) {
    drawLabel(ctx, screen.x, screen.y, track, intensity);
  }

  drawPulse(ctx, width, height, visiblePath, intensity, index, time);
}

function drawLabel(ctx: CanvasRenderingContext2D, x: number, y: number, track: SatelliteTrack, intensity: number): void {
  const label = `${track.name} ${Math.round(track.elevation)}°`;
  ctx.font = `${Math.max(10, Math.round(11 * window.devicePixelRatio))}px "IBM Plex Mono", monospace`;
  ctx.fillStyle = `rgba(242, 250, 255, ${0.32 + intensity * 0.5})`;
  ctx.fillText(label, x + 10, y - 8);
}

function drawPulse(ctx: CanvasRenderingContext2D, width: number, height: number, path: SatelliteTrack["path"], intensity: number, index: number, time: number): void {
  if (path.length < 2) return;

  const progress = (time * (0.03 + intensity * 0.08) + index * 0.17) % 1;
  const segment = Math.min(path.length - 2, Math.floor(progress * (path.length - 1)));
  const local = progress * (path.length - 1) - segment;
  const a = path[segment];
  const b = path[segment + 1];
  const azimuth = a.azimuth + shortestAngle(a.azimuth, b.azimuth) * local;
  const elevation = a.elevation + (b.elevation - a.elevation) * local;
  const screen = projectSky(azimuth, elevation, width, height);

  ctx.fillStyle = `rgba(255, 255, 235, ${0.16 + intensity * 0.5})`;
  ctx.beginPath();
  ctx.arc(screen.x, screen.y, 1.5 + intensity * 4, 0, Math.PI * 2);
  ctx.fill();
}

function projectSky(azimuth: number, elevation: number, width: number, height: number): { x: number; y: number } {
  const x = (wrapDegrees(azimuth) / 360) * width;
  const normalizedElevation = clamp01((elevation + 10) / 100);
  const y = height * (0.84 - normalizedElevation * 0.72);
  return { x, y };
}

function makeFallbackPath(track: SatelliteTrack, time: number, index: number): SatelliteTrack["path"] {
  return Array.from({ length: 9 }, (_entry, step) => ({
    azimuth: wrapDegrees(track.azimuth + (step - 4) * (9 + index)),
    elevation: track.elevation + Math.sin(time * 0.2 + step * 0.7) * 10 - Math.abs(step - 4) * 2
  }));
}

function simulatedTracks(time: number): SatelliteTrack[] {
  return Array.from({ length: 4 }, (_entry, index) => {
    const phase = time * (0.05 + index * 0.012) + index * 1.4;
    const elevation = Math.sin(phase) * 52 - 6;
    const azimuth = wrapDegrees(phase * 42 + index * 80);
    return {
      name: ["ISS", "HUBBLE", "NOAA 19", "TERRA"][index] ?? `SAT ${index + 1}`,
      azimuth,
      elevation,
      rangeKm: 600 + index * 220,
      visible: elevation > 8,
      brightness: clamp01(elevation / 70),
      path: []
    };
  });
}

function shortestAngle(from: number, to: number): number {
  return ((((to - from) % 360) + 540) % 360) - 180;
}

function wrapDegrees(value: number): number {
  return ((value % 360) + 360) % 360;
}

function clamp01(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(1, value));
}
