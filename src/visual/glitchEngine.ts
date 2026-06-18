import type { RuntimeContext } from "../runtime/context";

export type GlitchMode = "limpo" | "digital" | "vhs" | "rasgo" | "mosaico" | "fantasma";

export type GlitchState = {
  active: boolean;
  intensity: number;
  mode: GlitchMode;
  jitterX: number;
  jitterY: number;
  tear: number;
  scanlines: number;
  chroma: number;
  pixel: number;
  mosaic: number;
  ghost: number;
  grain: number;
  seed: number;
};

export function resolveGlitchState(context: RuntimeContext, time: number): GlitchState {
  const visual = context.visual;
  const media = context.media;
  const falha = visual.falha ?? 0;
  const vhs = visual.vhs ?? 0;
  const rasga = Math.max(visual.rasga ?? 0, media.tear);
  const fere = Math.max(visual.fere ?? 0, media.wound);
  const desencaixa = Math.max(visual.desencaixa ?? 0, media.offset);
  const pixel = visual.pixeliza ?? 0;
  const linhas = visual.linhas ?? 0;
  const croma = visual.croma ?? 0;
  const mosaico = Math.max(visual.mosaico ?? 0, media.mosaic);
  const quebra = Math.max(visual.quebra ?? 0, media.puzzle);
  const embaralha = Math.max(visual.embaralha ?? 0, media.shuffle);
  const ecos = Math.max(visual.ecos ?? 0, media.echoes);
  const fantasma = Math.max(visual.fantasma ?? 0, media.ghost);
  const treme = visual.treme ?? 0;
  const granula = visual.granula ?? 0;
  const rastro = visual.rastro ?? 0;

  const tear = clamp01(Math.max(rasga, fere, desencaixa));
  const scanlines = clamp01(Math.max(linhas, vhs * 0.86));
  const chroma = clamp01(Math.max(croma, vhs * 0.72, tear * 0.4));
  const mosaic = clamp01(Math.max(mosaico, quebra, embaralha * 0.8));
  const ghost = clamp01(Math.max(ecos, fantasma, rastro * 0.72));
  const grain = clamp01(Math.max(granula, falha * 0.58, vhs * 0.5));
  const base = clamp01(Math.max(falha, vhs * 0.9, tear, pixel * 0.72, scanlines * 0.62, chroma * 0.72, mosaic * 0.74, ghost * 0.52, treme * 0.64));
  const seed = hash(time * 0.73 + base * 17.0);
  const burst = hash(Math.floor(time * (7 + base * 18)) + Math.floor(seed * 97));
  const signed = burst * 2 - 1;
  const jitterX = signed * (0.3 + base * 9.5) * Math.max(base, treme);
  const jitterY = Math.sin(time * 18.0 + seed * 9.0) * (0.2 + base * 4.5) * Math.max(base * 0.72, treme);
  const mode = chooseMode({ vhs, tear, mosaic, ghost, pixel, falha, scanlines });

  return {
    active: base > 0.015,
    intensity: base,
    mode,
    jitterX,
    jitterY,
    tear,
    scanlines,
    chroma,
    pixel: clamp01(pixel),
    mosaic,
    ghost,
    grain,
    seed
  };
}

export function applyGlitchSurface(element: HTMLElement, state: GlitchState, scope: string): void {
  element.classList.toggle("glitch-surface", state.active);
  element.classList.toggle("glitch-digital", state.active && state.mode === "digital");
  element.classList.toggle("glitch-vhs", state.active && state.mode === "vhs");
  element.classList.toggle("glitch-rasgo", state.active && state.mode === "rasgo");
  element.classList.toggle("glitch-mosaico", state.active && state.mode === "mosaico");
  element.classList.toggle("glitch-fantasma", state.active && state.mode === "fantasma");
  element.style.setProperty("--glitch", state.intensity.toFixed(4));
  element.style.setProperty("--glitch-x", `${state.jitterX.toFixed(3)}px`);
  element.style.setProperty("--glitch-y", `${state.jitterY.toFixed(3)}px`);
  element.style.setProperty("--glitch-tear", `${(state.tear * 34).toFixed(3)}px`);
  element.style.setProperty("--glitch-chroma", `${(state.chroma * 12).toFixed(3)}px`);
  element.style.setProperty("--glitch-lines", state.scanlines.toFixed(4));
  element.style.setProperty("--glitch-grain", state.grain.toFixed(4));
  element.style.setProperty("--glitch-ghost", state.ghost.toFixed(4));
  element.style.setProperty(`--${scope}-glitch`, state.intensity.toFixed(4));
  element.style.setProperty(`--${scope}-glitch-x`, `${state.jitterX.toFixed(3)}px`);
  element.style.setProperty(`--${scope}-glitch-y`, `${state.jitterY.toFixed(3)}px`);
  element.style.setProperty(`--${scope}-glitch-tear`, `${(state.tear * 34).toFixed(3)}px`);
  element.style.setProperty(`--${scope}-glitch-chroma`, `${(state.chroma * 12).toFixed(3)}px`);
  element.style.setProperty(`--${scope}-glitch-lines`, state.scanlines.toFixed(4));
  element.style.setProperty(`--${scope}-glitch-grain`, state.grain.toFixed(4));
  element.style.setProperty(`--${scope}-glitch-ghost`, state.ghost.toFixed(4));
}

export function withGlitchCanvas(ctx: CanvasRenderingContext2D, state: GlitchState, draw: () => void): void {
  ctx.save();
  if (state.active) {
    ctx.translate(state.jitterX * devicePixelRatio, state.jitterY * devicePixelRatio);
    if (state.mode === "rasgo") {
      ctx.transform(1, 0, state.tear * 0.018, 1, 0, 0);
    }
  }
  draw();
  ctx.restore();

  if (state.active) {
    drawCanvasGlitchOverlay(ctx, state);
  }
}

function drawCanvasGlitchOverlay(ctx: CanvasRenderingContext2D, state: GlitchState): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  if (state.scanlines > 0.02) {
    ctx.fillStyle = `rgba(180, 230, 255, ${0.035 * state.scanlines})`;
    const step = Math.max(3, Math.round(7 * devicePixelRatio));
    for (let y = 0; y < height; y += step) {
      ctx.fillRect(0, y, width, Math.max(1, devicePixelRatio));
    }
  }
  if (state.tear > 0.02) {
    const bands = 2 + Math.round(state.tear * 6);
    for (let index = 0; index < bands; index += 1) {
      const y = Math.floor(hash(index + state.seed * 31) * height);
      const h = Math.max(1, Math.floor((2 + state.tear * 18) * devicePixelRatio));
      const x = (hash(index * 4.7 + state.seed) - 0.5) * state.tear * width * 0.08;
      ctx.fillStyle = `rgba(255, 244, 190, ${0.035 + state.tear * 0.08})`;
      ctx.fillRect(x, y, width, h);
    }
  }
  ctx.restore();
}

function chooseMode(values: { vhs: number; tear: number; mosaic: number; ghost: number; pixel: number; falha: number; scanlines: number }): GlitchMode {
  if (values.vhs >= Math.max(values.tear, values.mosaic, values.ghost, values.falha) && values.vhs > 0.05) return "vhs";
  if (values.tear > 0.05 && values.tear >= Math.max(values.mosaic, values.ghost)) return "rasgo";
  if (values.mosaic > 0.05 && values.mosaic >= values.ghost) return "mosaico";
  if (values.ghost > 0.05) return "fantasma";
  if (values.pixel > 0.05 || values.falha > 0.05 || values.scanlines > 0.05) return "digital";
  return "limpo";
}

function hash(value: number): number {
  const result = Math.sin(value * 127.1) * 43758.5453123;
  return result - Math.floor(result);
}

function clamp01(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(1, value));
}
