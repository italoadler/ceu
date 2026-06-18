import type { RuntimeContext } from "../runtime/context";
import type { GlitchState } from "./glitchEngine";
import { withGlitchCanvas } from "./glitchEngine";

export type MapLayer = {
  render(context: RuntimeContext, time: number, glitch?: GlitchState): void;
  resize(): void;
  dispose(): void;
};

type Point = {
  x: number;
  y: number;
};

export function createMapLayer(canvas: HTMLCanvasElement): MapLayer {
  const ctx = canvas.getContext("2d", { alpha: true });

  if (!ctx) {
    throw new Error("Canvas 2D indisponivel para mapa.");
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
        withGlitchCanvas(ctx, glitch, () => renderGenerativeMap(ctx, canvas, context, time));
      } else {
        renderGenerativeMap(ctx, canvas, context, time);
      }
    },
    resize,
    dispose() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };
}

function renderGenerativeMap(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, context: RuntimeContext, time: number): void {
  const visual = context.visual;
  const mapIntensity = Math.max(
    visual.mapa ?? 0,
    (visual.ruas ?? 0) * 0.82,
    (visual.quadras ?? 0) * 0.72,
    (visual.rotas ?? 0) * 0.8,
    (visual.contorno ?? 0) * 0.72,
    (visual.pontos ?? 0) * 0.7,
    (visual.fluxo ?? 0) * 0.82
  );

  canvas.style.opacity = String(clamp01(mapIntensity));
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (mapIntensity <= 0.002) return;

  const width = canvas.width;
  const height = canvas.height;
  const density = 0.72 + (context.sinais["cidade.densidade"] ?? 0) * 0.5 + (visual.quadras ?? 0) * 0.45;
  const road = Math.max(visual.ruas ?? 0, mapIntensity * 0.5);
  const blocks = Math.max(visual.quadras ?? 0, mapIntensity * 0.36);
  const routes = Math.max(visual.rotas ?? 0, visual.fluxo ?? 0);
  const contours = visual.contorno ?? 0;
  const points = Math.max(visual.pontos ?? 0, (context.sinais["cidade.movimento"] ?? 0) * 0.45);
  const flow = Math.max(visual.fluxo ?? 0, (context.sinais["cidade.movimento"] ?? 0) * 0.4);
  const blue = 0.55 + (visual.azula ?? 0) * 0.35;
  const step = Math.max(42, Math.min(width, height) / (8 + density * 11));

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  drawMapWash(ctx, width, height, mapIntensity, blue);
  drawBlocks(ctx, width, height, step, blocks, blue);
  drawContours(ctx, width, height, contours, time);
  drawRoads(ctx, width, height, step, road, time);
  drawRoutes(ctx, width, height, step, routes, flow, time);
  drawPoints(ctx, width, height, step, points, time);
  ctx.restore();
}

function drawMapWash(ctx: CanvasRenderingContext2D, width: number, height: number, intensity: number, blue: number): void {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, `rgba(0, ${Math.round(86 + blue * 72)}, 255, ${0.04 + intensity * 0.08})`);
  gradient.addColorStop(0.48, `rgba(9, ${Math.round(132 + blue * 64)}, 255, ${0.02 + intensity * 0.05})`);
  gradient.addColorStop(1, `rgba(255, 248, 184, ${0.015 + intensity * 0.035})`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawBlocks(ctx: CanvasRenderingContext2D, width: number, height: number, step: number, intensity: number, blue: number): void {
  if (intensity <= 0.01) return;

  ctx.lineWidth = 0.45;
  ctx.strokeStyle = `rgba(115, ${Math.round(188 + blue * 50)}, 255, ${0.08 + intensity * 0.16})`;
  ctx.fillStyle = `rgba(1, 42, 95, ${0.02 + intensity * 0.055})`;

  for (let y = -step; y < height + step; y += step) {
    for (let x = -step; x < width + step; x += step) {
      const n = hash2(Math.floor(x / step), Math.floor(y / step));
      const inset = step * (0.12 + n * 0.16);
      const w = step * (0.68 + hash2(x + 3, y + 9) * 0.18);
      const h = step * (0.56 + hash2(x + 7, y + 5) * 0.22);

      if (n > 0.18) {
        ctx.fillRect(x + inset, y + inset, w, h);
        ctx.strokeRect(x + inset, y + inset, w, h);
      }
    }
  }
}

function drawContours(ctx: CanvasRenderingContext2D, width: number, height: number, intensity: number, time: number): void {
  if (intensity <= 0.01) return;

  ctx.lineWidth = 0.45;
  ctx.strokeStyle = `rgba(255, 244, 180, ${0.08 + intensity * 0.22})`;

  const bands = 5 + Math.round(intensity * 8);
  for (let band = 0; band < bands; band += 1) {
    const y = (band / bands) * height;
    ctx.beginPath();
    for (let x = -20; x <= width + 20; x += 18) {
      const wave = Math.sin(x * 0.008 + band * 1.7 + time * 0.24) * height * 0.025 * intensity;
      const wave2 = Math.sin(x * 0.021 + band * 2.2) * height * 0.012 * intensity;
      const py = y + wave + wave2;
      if (x <= -20) ctx.moveTo(x, py);
      else ctx.lineTo(x, py);
    }
    ctx.stroke();
  }
}

function drawRoads(ctx: CanvasRenderingContext2D, width: number, height: number, step: number, intensity: number, time: number): void {
  if (intensity <= 0.01) return;

  const columns = Math.ceil(width / step) + 4;
  const rows = Math.ceil(height / step) + 4;

  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  for (let xIndex = -2; xIndex < columns; xIndex += 1) {
    const x = xIndex * step + Math.sin(xIndex * 1.8) * step * 0.18;
    ctx.beginPath();
    for (let yIndex = -2; yIndex < rows; yIndex += 1) {
      const y = yIndex * step;
      const offset = Math.sin(yIndex * 0.7 + xIndex * 1.2 + time * 0.08) * step * 0.16;
      if (yIndex === -2) ctx.moveTo(x + offset, y);
      else ctx.lineTo(x + offset, y);
    }
    strokeRoad(ctx, intensity, xIndex % 5 === 0);
  }

  for (let yIndex = -2; yIndex < rows; yIndex += 1) {
    const y = yIndex * step + Math.cos(yIndex * 1.4) * step * 0.16;
    ctx.beginPath();
    for (let xIndex = -2; xIndex < columns; xIndex += 1) {
      const x = xIndex * step;
      const offset = Math.cos(xIndex * 0.9 + yIndex * 1.1 + time * 0.06) * step * 0.14;
      if (xIndex === -2) ctx.moveTo(x, y + offset);
      else ctx.lineTo(x, y + offset);
    }
    strokeRoad(ctx, intensity, yIndex % 4 === 0);
  }
}

function strokeRoad(ctx: CanvasRenderingContext2D, intensity: number, primary: boolean): void {
  ctx.lineWidth = primary ? 0.55 + intensity * 0.05 : 0.4 + intensity * 0.15;
  ctx.strokeStyle = primary ? `rgba(255, 246, 176, ${0.18 + intensity * 0.42})` : `rgba(150, 218, 255, ${0.12 + intensity * 0.3})`;
  ctx.stroke();
}

function drawRoutes(ctx: CanvasRenderingContext2D, width: number, height: number, step: number, intensity: number, flow: number, time: number): void {
  if (intensity <= 0.01) return;

  const routeCount = 2 + Math.round(intensity * 5);
  for (let route = 0; route < routeCount; route += 1) {
    const start = {
      x: hash2(route, 2) * width,
      y: hash2(route, 7) * height
    };
    const points = makeRoute(start, width, height, step, route);

    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.lineWidth = 0.4 + intensity * 0.2;
    ctx.strokeStyle = `rgba(255, 233, 93, ${0.18 + intensity * 0.5})`;
    ctx.stroke();

    drawRoutePulse(ctx, points, route, flow, time);
  }
}

function makeRoute(start: Point, width: number, height: number, step: number, seed: number): Point[] {
  const points: Point[] = [start];
  let current = start;

  for (let index = 0; index < 7; index += 1) {
    const angle = hash2(seed + index * 4, index + 9) * Math.PI * 2;
    const distance = step * (1.2 + hash2(seed + index, index + 3) * 2.2);
    current = {
      x: wrap(current.x + Math.cos(angle) * distance, width),
      y: wrap(current.y + Math.sin(angle) * distance, height)
    };
    points.push(current);
  }

  return points;
}

function drawRoutePulse(ctx: CanvasRenderingContext2D, points: Point[], seed: number, intensity: number, time: number): void {
  if (intensity <= 0.01) return;

  const pathLength = points.length - 1;
  const progress = (time * (0.08 + intensity * 0.35) + seed * 0.19) % 1;
  const segment = Math.min(pathLength - 1, Math.floor(progress * pathLength));
  const local = progress * pathLength - segment;
  const a = points[segment];
  const b = points[segment + 1];
  const x = a.x + (b.x - a.x) * local;
  const y = a.y + (b.y - a.y) * local;

  ctx.fillStyle = `rgba(255, 255, 212, ${0.3 + intensity * 0.58})`;
  ctx.beginPath();
  ctx.arc(x, y, 2 + intensity * 7, 0, Math.PI * 2);
  ctx.fill();
}

function drawPoints(ctx: CanvasRenderingContext2D, width: number, height: number, step: number, intensity: number, time: number): void {
  if (intensity <= 0.01) return;

  const total = 16 + Math.round(intensity * 56);
  for (let index = 0; index < total; index += 1) {
    const x = hash2(index, 12) * width;
    const y = hash2(index, 31) * height;
    const pulse = (Math.sin(time * 1.8 + index) + 1) / 2;
    const radius = Math.max(1.5, step * 0.035) + pulse * intensity * 4;
    ctx.fillStyle = `rgba(255, 248, 180, ${0.16 + pulse * intensity * 0.54})`;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function hash2(x: number, y: number): number {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return value - Math.floor(value);
}

function wrap(value: number, max: number): number {
  return ((value % max) + max) % max;
}

function clamp01(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(1, value));
}
