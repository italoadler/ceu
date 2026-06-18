import "./style.css";
import "@fontsource/ibm-plex-mono/latin-ext-400.css";
import "@fontsource/ibm-plex-mono/latin-ext-500.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-500.css";
import "@fontsource/instrument-sans/latin-ext-400.css";
import "@fontsource/instrument-sans/latin-ext-600.css";
import { docSections } from "./docsContent";
import exemploCamera from "./examples/ceu-camera.ceu?raw";
import cidade from "./examples/cidade.ceu?raw";
import contatoGrade from "./examples/contato-grade.ceu?raw";
import fortaleza from "./examples/fortaleza.ceu?raw";
import litoralFortaleza from "./examples/litoral-fortaleza.ceu?raw";
import mapaGenerativo from "./examples/mapa-generativo.ceu?raw";
import { performanceSteps } from "./examples/performance";
import presetCeuAzul from "./examples/preset-ceu-azul.ceu?raw";
import presetCeuRosaPoente from "./examples/preset-ceu-rosa-poente.ceu?raw";
import presetCidadeHorizonte from "./examples/preset-cidade-horizonte.ceu?raw";
import presetCidadeImagem from "./examples/preset-cidade-imagem.ceu?raw";
import presetClimaChuva from "./examples/preset-clima-chuva.ceu?raw";
import presetGlitchVhs from "./examples/preset-glitch-vhs.ceu?raw";
import presetLitoralDunas from "./examples/preset-litoral-dunas.ceu?raw";
import presetMapaRotas from "./examples/preset-mapa-rotas.ceu?raw";
import presetMinimal from "./examples/preset-minimal.ceu?raw";
import presetMontanhasNoturnas from "./examples/preset-montanhas-noturnas.ceu?raw";
import presetMosaicoQuebra from "./examples/preset-mosaico-quebra.ceu?raw";
import presetSatelitesNoite from "./examples/preset-satelites-noite.ceu?raw";
import presetVideoEcos from "./examples/preset-video-ecos.ceu?raw";
import satelitesFortaleza from "./examples/satelites-fortaleza.ceu?raw";
import youtubeExperimental from "./examples/youtube-experimental.ceu?raw";
import { applySatelliteReading, fetchSatellitePasses } from "./inputs/satellites";
import { applyWeatherReading, fetchWeatherSignals } from "./inputs/weather";
import { CeuParseError } from "./language/errors";
import { parse } from "./language/parser";
import type { RuntimeContext } from "./runtime/context";
import { createRuntime, tick } from "./runtime/interpreter";
import { createMapLayer } from "./visual/mapLayer";
import { createSatelliteLayer } from "./visual/satelliteLayer";
import { createSkyScene } from "./visual/skyShader";
import { applyGlitchSurface, resolveGlitchState } from "./visual/glitchEngine";

const examples = {
  "fortaleza.ceu": fortaleza,
  "ceu-camera.ceu": exemploCamera,
  "contato-grade.ceu": contatoGrade,
  "cidade.ceu": cidade,
  "litoral-fortaleza.ceu": litoralFortaleza,
  "mapa-generativo.ceu": mapaGenerativo,
  "satelites-fortaleza.ceu": satelitesFortaleza,
  "youtube-experimental.ceu": youtubeExperimental,
  "preset/ceu-azul.ceu": presetCeuAzul,
  "preset/ceu-rosa-poente.ceu": presetCeuRosaPoente,
  "preset/litoral-dunas.ceu": presetLitoralDunas,
  "preset/montanhas-noturnas.ceu": presetMontanhasNoturnas,
  "preset/cidade-horizonte.ceu": presetCidadeHorizonte,
  "preset/cidade-imagem.ceu": presetCidadeImagem,
  "preset/mapa-rotas.ceu": presetMapaRotas,
  "preset/satelites-noite.ceu": presetSatelitesNoite,
  "preset/video-ecos.ceu": presetVideoEcos,
  "preset/glitch-vhs.ceu": presetGlitchVhs,
  "preset/mosaico-quebra.ceu": presetMosaicoQuebra,
  "preset/clima-chuva.ceu": presetClimaChuva,
  "preset/minimal.ceu": presetMinimal
};

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemento #app nao encontrado.");
}

app.innerHTML = `
  <section class="app-shell">
    <div class="sky-wrap">
      <canvas id="stage" aria-label="ceu shader"></canvas>
    </div>
    <canvas id="satellite-layer" class="satellite-layer" aria-label="satelites sobre fortaleza"></canvas>
    <canvas id="map-layer" class="map-layer" aria-label="mapa generativo"></canvas>
    <div id="media-layer" class="media-layer" aria-label="camada de video"></div>

    <section class="overlay-layer">
      <header class="topbar">
        <div>
          <h1>ceu</h1>
          <p>live coding urbano</p>
        </div>
        <div class="controls">
          <select id="example-select" aria-label="exemplos"></select>
          <button id="run-button" type="button">rodar</button>
          <button id="file-button" type="button">video</button>
          <button id="performance-button" type="button">performance</button>
          <button id="docs-button" type="button">docs</button>
          <input id="file-input" type="file" accept="video/*,image/*" />
        </div>
      </header>

      <div class="editor-pane">
        <textarea id="editor" spellcheck="false" aria-label="codigo ceu"></textarea>
        <pre id="log" class="log"></pre>
      </div>

      <aside class="signals-pane">
        <h2>sinais</h2>
        <div id="signals"></div>
        <h2>estado</h2>
        <pre id="state"></pre>
      </aside>

      <div id="text-panel" class="text-panel"></div>

      <aside id="docs-panel" class="docs-panel" aria-label="documentacao ceu">
        <div class="docs-header">
          <strong>documentacao</strong>
          <button id="docs-close" type="button">fechar</button>
        </div>
        <div id="docs-content" class="docs-content"></div>
      </aside>
    </section>
  </section>
`;

const select = document.querySelector<HTMLSelectElement>("#example-select");
const editor = document.querySelector<HTMLTextAreaElement>("#editor");
const runButton = document.querySelector<HTMLButtonElement>("#run-button");
const fileButton = document.querySelector<HTMLButtonElement>("#file-button");
const fileInput = document.querySelector<HTMLInputElement>("#file-input");
const performanceButton = document.querySelector<HTMLButtonElement>("#performance-button");
const docsButton = document.querySelector<HTMLButtonElement>("#docs-button");
const docsClose = document.querySelector<HTMLButtonElement>("#docs-close");
const docsPanel = document.querySelector<HTMLElement>("#docs-panel");
const docsContent = document.querySelector<HTMLDivElement>("#docs-content");
const log = document.querySelector<HTMLPreElement>("#log");
const state = document.querySelector<HTMLPreElement>("#state");
const signals = document.querySelector<HTMLDivElement>("#signals");
const textPanel = document.querySelector<HTMLDivElement>("#text-panel");
const canvas = document.querySelector<HTMLCanvasElement>("#stage");
const satelliteCanvas = document.querySelector<HTMLCanvasElement>("#satellite-layer");
const mapCanvas = document.querySelector<HTMLCanvasElement>("#map-layer");
const shell = document.querySelector<HTMLElement>(".app-shell");
const skyWrap = document.querySelector<HTMLDivElement>(".sky-wrap");
const mediaLayer = document.querySelector<HTMLDivElement>("#media-layer");
const overlayLayer = document.querySelector<HTMLElement>(".overlay-layer");

if (
  !select ||
  !editor ||
  !runButton ||
  !fileButton ||
  !fileInput ||
  !performanceButton ||
  !docsButton ||
  !docsClose ||
  !docsPanel ||
  !docsContent ||
  !log ||
  !state ||
  !signals ||
  !textPanel ||
  !canvas ||
  !satelliteCanvas ||
  !mapCanvas ||
  !shell ||
  !skyWrap ||
  !mediaLayer ||
  !overlayLayer
) {
  throw new Error("UI incompleta.");
}

const ui = {
  select,
  editor,
  runButton,
  fileButton,
  fileInput,
  performanceButton,
  docsButton,
  docsClose,
  docsPanel,
  docsContent,
  log,
  state,
  signals,
  textPanel,
  canvas,
  satelliteCanvas,
  mapCanvas,
  shell,
  skyWrap,
  mediaLayer,
  overlayLayer
};

type EditorSurfaceMode = "off" | "soft" | "solid";
let editorSurfaceMode: EditorSurfaceMode = "off";
const flatDocExamples = docSections.flatMap((section) => section.examples);

const sky = createSkyScene(ui.canvas);
const satelliteLayer = createSatelliteLayer(ui.satelliteCanvas);
const mapLayer = createMapLayer(ui.mapCanvas);
let context: RuntimeContext | undefined;
let lastFrame = performance.now();
let weatherRequestId = 0;
let satelliteRequestId = 0;
let performanceTimer = 0;
let performanceRunning = false;
let performanceStepIndex = 0;
let currentMediaKey = "";
let currentMediaReady = false;
let revealMediaTimer = 0;
let localMediaUrl = "";
let localMediaKind: "video" | "imagem" = "video";
let activeVideo: HTMLVideoElement | undefined;

for (const name of Object.keys(examples)) {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  ui.select.append(option);
}

ui.select.value = "fortaleza.ceu";
ui.editor.value = examples["fortaleza.ceu"];

ui.select.addEventListener("change", () => {
  stopPerformance();
  ui.editor.value = examples[ui.select.value as keyof typeof examples];
  runCode();
});

ui.runButton.addEventListener("click", () => {
  stopPerformance();
  runCode();
});

ui.fileButton.addEventListener("click", () => {
  stopPerformance();
  ui.fileInput.click();
});

ui.fileInput.addEventListener("change", () => {
  const file = ui.fileInput.files?.[0];
  if (!file) return;

  if (localMediaUrl) URL.revokeObjectURL(localMediaUrl);
  localMediaUrl = URL.createObjectURL(file);
  localMediaKind = file.type.startsWith("image/") ? "imagem" : "video";
  injectMediaLine(localMediaUrl, localMediaKind);
  runCode();
});

ui.performanceButton.addEventListener("click", () => {
  if (performanceRunning) {
    stopPerformance();
    return;
  }
  startPerformance();
});

ui.docsButton.addEventListener("click", () => {
  ui.docsPanel.classList.toggle("aberto");
});

ui.docsClose.addEventListener("click", () => {
  ui.docsPanel.classList.remove("aberto");
});

ui.docsContent.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const button = target.closest<HTMLButtonElement>("[data-doc-example]");
  if (!button) return;

  const index = Number(button.dataset.docExample);
  const code = flatDocExamples[index]?.code;
  if (!code) return;

  stopPerformance();
  ui.editor.value = code;
  ui.docsPanel.classList.remove("aberto");
  runCode();
});

ui.editor.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    stopPerformance();
    runCode();
  }
});

ui.editor.addEventListener("input", () => {
  if (performanceRunning) {
    stopPerformance();
  }
});

window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "b") {
    event.preventDefault();
    cycleEditorSurfaceMode();
  }
});

window.addEventListener("resize", () => {
  sky.resize();
  satelliteLayer.resize();
  mapLayer.resize();
});

runCode();
requestAnimationFrame(frame);
window.setTimeout(() => startPerformance(), 650);
applyEditorSurfaceMode();
renderDocs();

function runCode(): void {
  try {
    const program = parse(ui.editor.value);
    context = createRuntime(program);
    currentMediaKey = "";
    ui.log.textContent = "programa rodando";
    requestWeatherIfNeeded(context);
    requestSatellitesIfNeeded(context);
  } catch (error) {
    context = undefined;
    ui.log.textContent = error instanceof CeuParseError || error instanceof Error ? error.message : String(error);
    renderPanels();
  }
}

function injectMediaLine(source: string, kind: "video" | "imagem"): void {
  const lines = ui.editor.value
    .split("\n")
    .filter((line) => !line.trim().startsWith("olha video ") && !line.trim().startsWith("olha imagem "));
  const insertAt = lines.findIndex((line) => line.trim() !== "" && !line.trim().startsWith("em "));
  const mediaLine = `olha ${kind} "${source}"`;

  if (insertAt <= 0) {
    lines.splice(1, 0, "", mediaLine);
  } else {
    lines.splice(insertAt, 0, mediaLine);
  }

  if (!lines.some((line) => line.trim() === "video .82")) {
    lines.push("", "video .82", "ceu .72", "mistura .35");
  }

  ui.editor.value = lines.join("\n");
}

function cycleEditorSurfaceMode(): void {
  editorSurfaceMode = editorSurfaceMode === "off" ? "soft" : editorSurfaceMode === "soft" ? "solid" : "off";
  applyEditorSurfaceMode();
  ui.log.textContent = `fundo: ${editorSurfaceMode === "off" ? "transparente" : editorSurfaceMode === "soft" ? "meio opaco" : "opaco"}`;
}

function applyEditorSurfaceMode(): void {
  ui.overlayLayer.classList.toggle("surface-soft", editorSurfaceMode === "soft");
  ui.overlayLayer.classList.toggle("surface-solid", editorSurfaceMode === "solid");
}

function renderDocs(): void {
  let exampleIndex = 0;
  ui.docsContent.innerHTML = docSections
    .map((section) => {
      const examples = section.examples
        .map((example) => {
          const index = exampleIndex;
          exampleIndex += 1;
          return `
            <article class="doc-example">
              <div class="doc-example-head">
                <div>
                  <h4>${escapeHtml(example.title)}</h4>
                  <p>${escapeHtml(example.description)}</p>
                </div>
                <button type="button" data-doc-example="${index}">usar</button>
              </div>
              <pre>${escapeHtml(example.code)}</pre>
            </article>
          `;
        })
        .join("");

      return `
        <section class="doc-section">
          <h3>${escapeHtml(section.title)}</h3>
          <p>${escapeHtml(section.body)}</p>
          ${examples}
        </section>
      `;
    })
    .join("");
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function tryRunCodeSilently(): void {
  try {
    const program = parse(ui.editor.value);
    const nextContext = createRuntime(program);
    context = nextContext;
    if (!nextContext.media.source) currentMediaKey = "";
    ui.log.textContent = performanceRunning ? "performance escrevendo e executando" : "programa rodando";
    requestWeatherIfNeeded(nextContext);
    requestSatellitesIfNeeded(nextContext);
  } catch {
    // Durante a escrita automatizada, linhas incompletas sao parte do gesto.
  }
}

function startPerformance(): void {
  stopPerformance();
  performanceRunning = true;
  performanceStepIndex = 0;
  ui.performanceButton.textContent = "pausar";
  ui.shell.classList.add("performando");
  ui.select.value = "fortaleza.ceu";
  playPerformanceStep();
}

function stopPerformance(): void {
  performanceRunning = false;
  window.clearTimeout(performanceTimer);
  ui.performanceButton.textContent = "performance";
  ui.shell.classList.remove("performando");
}

function playPerformanceStep(): void {
  if (!performanceRunning) return;

  const step = performanceSteps[performanceStepIndex % performanceSteps.length];
  typeCode(step.code, 0, () => {
    tryRunCodeSilently();
    performanceTimer = window.setTimeout(() => {
      performanceStepIndex += 1;
      playPerformanceStep();
    }, step.holdMs);
  });
}

function typeCode(code: string, index: number, done: () => void): void {
  if (!performanceRunning) return;

  ui.editor.value = code.slice(0, index);
  ui.editor.scrollTop = ui.editor.scrollHeight;

  if (code[index - 1] === "\n" || index === code.length) {
    tryRunCodeSilently();
  }

  if (index >= code.length) {
    done();
    return;
  }

  const char = code[index];
  const delay = char === "\n" ? 110 : char === " " ? 18 : 28 + Math.random() * 26;
  performanceTimer = window.setTimeout(() => typeCode(code, index + 1, done), delay);
}

function requestWeatherIfNeeded(runtime: RuntimeContext): void {
  const weatherInput = runtime.entradas.find((input) => input.verb === "sente" && input.source === "tempo");
  if (!weatherInput) return;

  const requestId = ++weatherRequestId;
  const placeArg = weatherInput.args[0];
  const place = placeArg?.type === "SignalRef" ? placeArg.value.name : runtime.lugar ?? "fortaleza";
  ui.log.textContent = "programa rodando\nbuscando tempo real...";

  fetchWeatherSignals(place)
    .then((reading) => {
      if (requestId !== weatherRequestId || context !== runtime) return;
      applyWeatherReading(runtime.overrides, reading);
      applyWeatherReading(runtime.sinais, reading);
      runtime.log.push({ level: "info", message: `tempo real: ${reading.fonte}` });
      ui.log.textContent = `programa rodando\ntempo real: ${reading.fonte}`;
    })
    .catch((error: unknown) => {
      if (requestId !== weatherRequestId || context !== runtime) return;
      const message = error instanceof Error ? error.message : String(error);
      runtime.log.push({ level: "erro", message: `tempo real indisponivel: ${message}` });
      ui.log.textContent = `programa rodando\ntempo real indisponivel, usando simulacao`;
    });
}

function requestSatellitesIfNeeded(runtime: RuntimeContext): void {
  const satelliteInput = runtime.entradas.find((input) => input.verb === "sente" && (input.source === "satelites" || input.source === "satelite"));
  if (!satelliteInput) return;

  const requestId = ++satelliteRequestId;
  const placeArg = satelliteInput.args[0];
  const place = placeArg?.type === "SignalRef" ? placeArg.value.name : runtime.lugar ?? "fortaleza";
  ui.log.textContent = `${ui.log.textContent}\nbuscando satelites...`;

  fetchSatellitePasses(place)
    .then((reading) => {
      if (requestId !== satelliteRequestId || context !== runtime) return;
      applySatelliteReading(runtime.sinais, runtime.satellites, reading);
      applySatelliteReading(runtime.overrides, runtime.satellites, reading);
      runtime.log.push({ level: "info", message: `satelites: ${reading.fonte}` });
      ui.log.textContent = `programa rodando\nsatelites: ${reading.fonte}`;
    })
    .catch((error: unknown) => {
      if (requestId !== satelliteRequestId || context !== runtime) return;
      const message = error instanceof Error ? error.message : String(error);
      runtime.log.push({ level: "erro", message: `satelites indisponiveis: ${message}` });
      ui.log.textContent = "programa rodando\nsatelites indisponiveis, usando simulacao";
    });
}

function frame(now: number): void {
  const dt = Math.min((now - lastFrame) / 1000, 0.1);
  lastFrame = now;

  if (context) {
    tick(context, dt);
    const time = now / 1000;
    const glitch = resolveGlitchState(context, time);
    applyGlitchSurface(ui.skyWrap, glitch, "sky");
    applyGlitchSurface(ui.mediaLayer, glitch, "media");
    applyGlitchSurface(ui.mapCanvas, glitch, "map");
    applyGlitchSurface(ui.satelliteCanvas, glitch, "satellite");
    renderMedia(context);
    satelliteLayer.render(context, time, glitch);
    mapLayer.render(context, time, glitch);
    sky.render(context, time, glitch);
    renderPanels();
  }

  requestAnimationFrame(frame);
}

function renderMedia(runtime: RuntimeContext): void {
  const source = runtime.media.source;
  const kind = runtime.media.kind;
  const opacity = kind === "map" ? runtime.visual.mapa ?? runtime.visual.imagem ?? runtime.media.opacity : runtime.visual.video ?? runtime.visual.imagem ?? runtime.media.opacity;
  const skyOpacity = runtime.visual.ceu ?? runtime.media.skyOpacity;
  const blend = runtime.visual.mistura ?? runtime.media.blend;
  const cut = runtime.visual.corta ?? runtime.media.cut;
  const speed = resolveMediaNumber(runtime, "acelera", runtime.media.speed);
  const slow = runtime.visual.desacelera ?? 0;
  const delay = runtime.visual.atrasa ?? runtime.media.delay;
  const advance = runtime.visual.adianta ?? runtime.media.advance;
  const tiles = runtime.visual.telas ?? runtime.media.tiles;
  const mosaic = Math.max(runtime.visual.mosaico ?? 0, runtime.media.mosaic);
  const puzzle = Math.max(runtime.visual.quebra ?? 0, runtime.media.puzzle);
  const shuffle = Math.max(runtime.visual.embaralha ?? 0, runtime.media.shuffle);
  const echoes = runtime.visual.ecos ?? runtime.media.echoes;
  const tear = Math.max(runtime.visual.rasga ?? 0, runtime.media.tear);
  const wound = Math.max(runtime.visual.fere ?? 0, runtime.media.wound);
  const offset = Math.max(runtime.visual.desencaixa ?? 0, runtime.media.offset);
  const ghost = Math.max(runtime.visual.fantasma ?? 0, runtime.media.ghost);
  const layout = resolveMediaLayout(runtime);
  const pixelize = runtime.visual.pixeliza ?? 0;
  const scanlines = runtime.visual.linhas ?? 0;
  const chroma = runtime.visual.croma ?? 0;
  const vhs = runtime.visual.vhs ?? 0;
  const posterize = runtime.visual.posteriza ?? 0;
  const saturation = runtime.visual.satura ?? 0;
  const contrast = runtime.visual.contrasta ?? 0;
  const clean = runtime.visual.limpido ?? 0;
  const blue = runtime.visual.azula ?? 0;
  const resolvedKind = source && kind === "video" && isYouTubeSource(source) ? "youtube" : kind;
  const tileCount = Math.max(1, Math.round(1 + Math.max(tiles, mosaic, puzzle) * 2));
  const topology = tileCount > 1 || puzzle > 0.08 || mosaic > 0.08 ? `grid:${tileCount}` : echoes > 0.08 || ghost > 0.08 ? "echo" : "full";
  const mediaKey = source && resolvedKind ? `${resolvedKind}:${source}:${topology}` : "";

  ui.skyWrap.style.opacity = String(Math.max(0, Math.min(1, cut > 0.5 ? 0 : skyOpacity)));
  ui.mediaLayer.style.opacity = String(currentMediaReady ? Math.max(0, Math.min(1, opacity)) : 0);
  ui.mediaLayer.style.mixBlendMode = blend > 0.66 ? "screen" : blend > 0.33 ? "overlay" : "normal";
  ui.mediaLayer.style.setProperty("--media-tiles", String(tileCount));
  ui.mediaLayer.style.setProperty("--media-echoes", String(echoes));
  ui.mediaLayer.style.setProperty("--media-tear", `${tear * 26}px`);
  ui.mediaLayer.style.setProperty("--media-offset", `${offset * 44}px`);
  ui.mediaLayer.style.setProperty("--media-ghost", String(ghost));
  ui.mediaLayer.style.setProperty("--media-shuffle", `${shuffle * 34}px`);
  ui.mediaLayer.style.setProperty("--media-pixel-size", `${1 + Math.round(pixelize * 18)}px`);
  ui.mediaLayer.style.setProperty("--media-lines", String(scanlines));
  ui.mediaLayer.style.setProperty("--media-croma", `${chroma * 10}px`);
  ui.mediaLayer.style.setProperty("--media-vhs", `${vhs * 16}px`);
  ui.mediaLayer.style.setProperty("--media-posterize", String(posterize));
  ui.mediaLayer.style.setProperty("--media-scale", String(layout.scale));
  ui.mediaLayer.style.setProperty("--media-x", `${layout.x * 100}%`);
  ui.mediaLayer.style.setProperty("--media-y", `${layout.y * 100}%`);
  ui.mediaLayer.classList.toggle("matriz", tileCount > 1);
  ui.mediaLayer.classList.toggle("mosaico", mosaic > 0.08);
  ui.mediaLayer.classList.toggle("quebra", puzzle > 0.08);
  ui.mediaLayer.classList.toggle("embaralha", shuffle > 0.08);
  ui.mediaLayer.classList.toggle("ecos", echoes > 0.08 || ghost > 0.08);
  ui.mediaLayer.classList.toggle("rasgado", tear > 0.08 || wound > 0.08 || offset > 0.08);
  ui.mediaLayer.classList.toggle("pixelizado", pixelize > 0.08);
  ui.mediaLayer.classList.toggle("linhas", scanlines > 0.08 || vhs > 0.08);
  ui.mediaLayer.classList.toggle("cromatico", chroma > 0.08 || vhs > 0.08);
  ui.mediaLayer.classList.toggle("vhs", vhs > 0.08);
  ui.mediaLayer.classList.toggle("posterizado", posterize > 0.08);
  ui.mediaLayer.classList.toggle("janela", layout.window > 0.05 || layout.scale < 0.96);
  ui.mediaLayer.style.filter = [
    `contrast(${1 + wound * 0.85 + contrast * 0.9 - clean * 0.12})`,
    `saturate(${1 + wound * 1.2 + saturation * 1.55 + blue * 0.42})`,
    `brightness(${1 + clean * 0.08})`,
    `hue-rotate(${tear * 24 - blue * 8}deg)`
  ].join(" ");

  if (activeVideo) {
    activeVideo.playbackRate = Math.max(0.12, Math.min(4, speed * (1 - slow * 0.74)));
    if (delay > 0.05 && activeVideo.duration > 1) {
      activeVideo.currentTime = Math.max(0, activeVideo.currentTime - delay * 0.055);
    }
    if (advance > 0.05 && activeVideo.duration > 1) {
      activeVideo.currentTime = Math.min(activeVideo.duration - 0.05, activeVideo.currentTime + advance * 0.075);
    }
  }

  if (!source || !resolvedKind || !mediaKey || opacity <= 0.001) {
    if (currentMediaKey) {
      ui.mediaLayer.replaceChildren();
      currentMediaKey = "";
      currentMediaReady = false;
      window.clearTimeout(revealMediaTimer);
    }
    return;
  }

  if (mediaKey === currentMediaKey) return;

  currentMediaKey = mediaKey;
  currentMediaReady = false;
  window.clearTimeout(revealMediaTimer);
  activeVideo = undefined;
  ui.mediaLayer.replaceChildren(...createMediaElements(resolvedKind, source, topology, tileCount));
}

function createMediaElements(kind: "video" | "image" | "map" | "stream" | "youtube", source: string, topology: string, tileCount: number): HTMLElement[] {
  const total = topology.startsWith("grid") ? tileCount * tileCount : topology === "echo" ? 6 : 1;

  return Array.from({ length: total }, (_, index) => {
    const element = createSingleMediaElement(kind, source, index === 0);
    element.classList.toggle("eco", topology === "echo" && index > 0);
    element.classList.toggle("tile", topology.startsWith("grid"));
    element.style.setProperty("--eco-index", String(index + 1));
    element.style.setProperty("--tile-index", String(index));
    element.style.setProperty("--tile-col", String(index % tileCount));
    element.style.setProperty("--tile-row", String(Math.floor(index / tileCount)));
    return element;
  });
}

function createSingleMediaElement(kind: "video" | "image" | "map" | "stream" | "youtube", source: string, primary: boolean): HTMLElement {
  if (kind === "youtube") {
    const iframe = document.createElement("iframe");
    const id = extractYouTubeId(source);
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&mute=1&controls=0&loop=1&playlist=${encodeURIComponent(id)}&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1`;
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.title = "youtube publico";
    iframe.loading = "eager";
    if (!primary) iframe.setAttribute("aria-hidden", "true");
    if (primary) {
      iframe.addEventListener("load", () => revealMediaAfter(1400), { once: true });
    }
    return iframe;
  }

  if (kind === "image" || kind === "map") {
    const image = document.createElement("img");
    image.src = source;
    image.alt = kind === "map" ? "mapa live coding" : "imagem live coding";
    image.classList.toggle("mapa-media", kind === "map");
    if (!primary) image.setAttribute("aria-hidden", "true");
    if (primary) {
      if (image.complete) revealMediaAfter(0);
      image.addEventListener("load", () => revealMediaAfter(0), { once: true });
      image.addEventListener("error", () => {
        ui.log.textContent = "imagem nao carregou";
      }, { once: true });
    }
    return image;
  }

  const video = document.createElement("video");
  video.src = source;
  video.autoplay = true;
  video.muted = true;
  video.loop = kind === "video";
  video.playsInline = true;
  video.crossOrigin = "anonymous";
  video.controls = false;
  video.preload = "auto";
  if (primary) {
    activeVideo = video;
    video.addEventListener("canplaythrough", () => revealMediaAfter(0), { once: true });
    video.addEventListener("playing", () => revealMediaAfter(0), { once: true });
    video.addEventListener("waiting", () => {
      currentMediaReady = false;
    });
    video.addEventListener("error", () => {
      ui.log.textContent = "video nao carregou";
    }, { once: true });
  }
  if (!primary) video.setAttribute("aria-hidden", "true");
  void video.play().catch(() => {
    ui.log.textContent = "video direto aguardando interacao do navegador";
  });
  return video;
}

function revealMediaAfter(delayMs: number): void {
  window.clearTimeout(revealMediaTimer);
  revealMediaTimer = window.setTimeout(() => {
    currentMediaReady = true;
  }, delayMs);
}

function extractYouTubeId(source: string): string {
  try {
    const url = new URL(source);
    if (url.hostname.includes("youtu.be")) return url.pathname.replace("/", "");
    const id = url.searchParams.get("v");
    if (id) return id;
    const embed = url.pathname.match(/\/embed\/([^/?]+)/);
    if (embed?.[1]) return embed[1];
  } catch {
    // ID direto.
  }

  return source;
}

function isYouTubeSource(value: string): boolean {
  return /(?:youtube\.com|youtu\.be|youtube-nocookie\.com)/i.test(value);
}

function resolveMediaNumber(runtime: RuntimeContext, action: string, fallback: number): number {
  return runtime.visual[action] ?? fallback;
}

function resolveMediaLayout(runtime: RuntimeContext): { scale: number; x: number; y: number; window: number } {
  const full = runtime.visual.cheia ?? 0;
  const small = runtime.visual.pequena ?? 0;
  const windowed = runtime.visual.janela ?? runtime.media.window;
  const position = runtime.visual.posicao;
  const baseScale = runtime.media.scale;
  const scale = full > 0.05 ? 1 : Math.max(0.18, Math.min(1, baseScale - small * 0.62 - windowed * 0.38));
  const x = position !== undefined ? position : runtime.media.x;
  const y = position !== undefined ? 1 - position : runtime.media.y;

  return {
    scale,
    x: Math.max(0.08, Math.min(0.92, x)),
    y: Math.max(0.08, Math.min(0.92, y)),
    window: Math.max(windowed, small)
  };
}

function renderPanels(): void {
  if (!context) {
    ui.state.textContent = "{}";
    ui.signals.innerHTML = "";
    ui.textPanel.textContent = "";
    return;
  }

  const visibleSignals = [
    "ceu.claro",
    "ceu.nuvem",
    "ceu.movimento",
    "ceu.rosa",
    "tempo.calor",
    "tempo.umidade",
    "tempo.vento",
    "tempo.chuva",
    "satelite.altitude",
    "satelite.visivel",
    "satelite.quantidade",
    "microfone.nivel",
    "contato.batida"
  ].map((key) => [key, context?.sinais[key] ?? 0] as const);

  ui.signals.innerHTML = visibleSignals
    .map(([key, value]) => {
      const percent = Math.round(value * 100);
      return `<div class="signal-row"><span>${key}</span><meter min="0" max="1" value="${value}"></meter><b>${percent}</b></div>`;
    })
    .join("");

  ui.textPanel.textContent = context.texto.visivel ? context.texto.linhas.join("\n") : "";
  ui.state.textContent = JSON.stringify(
    {
      lugar: context.lugar,
      foco: context.foco,
      visual: context.visual,
      audio: context.audio,
      satelites: {
        fonte: context.satellites.source,
        observador: context.satellites.observer.label,
        visiveis: context.satellites.tracks.filter((track) => track.visible).map((track) => `${track.name} ${Math.round(track.elevation)}°`)
      },
      texto: context.texto,
      log: context.log
    },
    null,
    2
  );
}
