import * as THREE from "three";
import type { RuntimeContext } from "../runtime/context";
import type { GlitchState } from "./glitchEngine";

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTempo;
uniform float uClareia;
uniform float uEscurece;
uniform float uNubla;
uniform float uQueima;
uniform float uFalha;
uniform float uOndula;
uniform float uGranula;
uniform float uApaga;
uniform float uPisca;
uniform float uRastro;
uniform float uEspelha;
uniform float uMultiplica;
uniform float uQuadricula;
uniform float uEntorta;
uniform float uBorra;
uniform float uTreme;
uniform float uLimpido;
uniform float uAzula;
uniform float uRosa;
uniform float uSatura;
uniform float uContrasta;
uniform float uPixeliza;
uniform float uLinhas;
uniform float uCroma;
uniform float uVhs;
uniform float uPosteriza;
uniform float uGlitch;
uniform float uGlitchTear;
uniform float uGlitchChroma;
uniform float uGlitchLines;
uniform float uGlitchGhost;
uniform float uGlitchGrain;
uniform float uGlitchSeed;
uniform float uDia;
uniform float uChuva;
uniform float uUmidade;
uniform float uAzul;
uniform float uCinza;
uniform float uNuvemSinal;
uniform float uMar;
uniform float uDunas;
uniform float uAreia;
uniform float uCidade;
uniform float uMontanhas;
uniform vec2 uResolucao;
varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p *= 2.03;
    a *= 0.52;
  }
  return v;
}

vec3 tonemap(vec3 color) {
  color = max(color, vec3(0.0));
  return color / (color + vec3(1.0));
}

float fortalezaProfile(vec2 uv, float seed) {
  float ridge = fbm(vec2(uv.x * 6.0 + seed * 2.1, seed * 0.4));
  float towers = fbm(vec2(uv.x * 19.0 + seed * 7.7, 4.0 + seed));
  float skyline = 0.07 + ridge * 0.11 + towers * 0.06;
  skyline += smoothstep(0.62, 0.9, uv.x) * 0.04;
  skyline += smoothstep(0.1, 0.28, uv.x) * 0.018;
  return skyline;
}

vec3 atmosphere(vec2 uv, vec2 p, vec2 sunPos, float dayLight, float golden, float overcast) {
  vec3 viewDir = normalize(vec3(p.x, uv.y * 1.55 - 0.18, 1.0));
  vec3 sunDir = normalize(vec3((sunPos.x - 0.5) * 1.25, sunPos.y - 0.08, 0.72));
  float mu = clamp(dot(viewDir, sunDir), -1.0, 1.0);
  float rayleighPhase = 0.75 * (1.0 + mu * mu);
  float miePhase = pow(max(mu, 0.0), 48.0);
  float horizonDepth = exp(-max(uv.y, 0.0) * 2.4);

  vec3 betaRayleigh = mix(vec3(0.12, 0.34, 0.82), vec3(0.06, 0.18, 0.42), 1.0 - uAzul);
  vec3 betaMie = mix(vec3(1.0, 0.82, 0.58), vec3(0.78, 0.80, 0.78), overcast);
  vec3 night = vec3(0.006, 0.010, 0.020) + vec3(0.02, 0.03, 0.055) * horizonDepth;
  vec3 sky = betaRayleigh * rayleighPhase * (0.35 + horizonDepth * 0.65);
  sky += betaMie * miePhase * (0.32 + golden * 0.85);
  sky += vec3(1.0, 0.48, 0.18) * golden * horizonDepth * 0.42;
  sky = mix(night, sky, dayLight);
  return mix(sky, vec3(0.56, 0.60, 0.61) * (0.72 + dayLight * 0.32), overcast * 0.78);
}

void main() {
  vec2 uv = vUv;
  if (uPixeliza > 0.02) {
    float blocks = mix(220.0, 32.0, uPixeliza);
    uv = (floor(uv * blocks) + 0.5) / blocks;
  }
  float aspect = uResolucao.x / max(uResolucao.y, 1.0);
  vec2 p = vec2((uv.x - 0.5) * aspect, uv.y);
  uv.x = mix(uv.x, 1.0 - uv.x, step(0.5, uEspelha));
  uv += vec2(
    sin(uTempo * 38.0) * uTreme * 0.018,
    cos(uTempo * 31.0) * uTreme * 0.014
  );

  float sharedGlitch = max(uFalha, uGlitch);
  float glitchLine = step(0.985 - sharedGlitch * 0.08, hash(vec2(floor(uv.y * 90.0), floor(uTempo * 16.0) + uGlitchSeed * 19.0)));
  float glitchBand = step(0.975 - uGlitchTear * 0.18, hash(vec2(floor(uv.y * (24.0 + uGlitchTear * 80.0)), floor(uTempo * 10.0) + uGlitchSeed * 37.0)));
  uv.x += (glitchLine - 0.5) * sharedGlitch * 0.12;
  uv.x += (glitchBand - 0.5) * uGlitchTear * 0.18;
  uv.x += sin(uv.y * 16.0 + uTempo * 1.7) * uOndula * 0.018;
  uv.x += sin(uv.y * 30.0 + uTempo * 2.2) * uEntorta * 0.028;
  uv.y += sin(uv.x * 18.0 + uTempo * 1.4) * uEntorta * 0.018;

  float sunArc = sin(uDia * 3.14159265);
  float dayLight = smoothstep(-0.08, 0.42, sunArc);
  float golden = pow(1.0 - abs(uDia - 0.5) * 2.0, 6.0);
  golden += exp(-pow((uDia - 0.24) * 13.0, 2.0)) + exp(-pow((uDia - 0.76) * 13.0, 2.0));
  golden = clamp(golden, 0.0, 1.0);
  float twilight = clamp(exp(-pow((uDia - 0.24) * 10.0, 2.0)) + exp(-pow((uDia - 0.76) * 10.0, 2.0)) + uRosa * 0.9, 0.0, 1.0);
  float cloudAmount = clamp(max(uNubla, uNuvemSinal), 0.0, 1.0);
  float storm = clamp(uChuva * 0.85 + uCinza * 0.55, 0.0, 1.0);
  float overcast = clamp(storm * 0.72 + uUmidade * 0.16 - uLimpido * 0.42, 0.0, 1.0);
  float clearSky = clamp(uClareia * 0.45 + uAzul * 0.55 + uAzula * 0.52 + uLimpido * 0.38 - storm * 0.55, 0.0, 1.0);

  vec3 nightZenith = vec3(0.008, 0.014, 0.028);
  vec3 dayZenith = mix(vec3(0.05, 0.31, 0.82), vec3(0.015, 0.38, 1.18), clearSky);
  dayZenith = mix(dayZenith, vec3(0.34, 0.19, 0.72), twilight * 0.34);
  vec3 grayZenith = vec3(0.54, 0.60, 0.62);
  vec3 zenith = mix(mix(nightZenith, dayZenith, dayLight), grayZenith, overcast);

  vec3 nightHorizon = vec3(0.030, 0.038, 0.052);
  vec3 dayHorizon = mix(vec3(0.45, 0.74, 0.98), vec3(0.76, 0.94, 1.18), clearSky);
  vec3 roseHorizon = mix(vec3(1.0, 0.43, 0.58), vec3(1.0, 0.62, 0.36), golden);
  dayHorizon = mix(dayHorizon, roseHorizon, twilight * 0.72);
  vec3 warmHorizon = mix(vec3(1.0, 0.58, 0.26), vec3(1.0, 0.36, 0.62), uRosa * 0.45);
  vec3 grayHorizon = vec3(0.72, 0.73, 0.70);
  vec3 horizon = mix(mix(nightHorizon, mix(dayHorizon, warmHorizon, golden), dayLight), grayHorizon, overcast);
  vec2 sunPos = vec2(0.18 + uDia * 0.64, 0.08 + sunArc * 0.70);
  vec3 color = mix(mix(horizon, zenith, smoothstep(0.04, 0.95, uv.y)), atmosphere(uv, p, sunPos, dayLight, golden, overcast), 0.72);
  float sunSize = 0.055 + uQueima * 0.035;
  float sun = 1.0 - smoothstep(0.0, sunSize, distance(uv, sunPos));
  float halo = 1.0 - smoothstep(0.0, 0.42 + uQueima * 0.18, distance(uv, sunPos));
  color += vec3(3.6, 2.55, 1.15) * sun * dayLight * (0.25 + uClareia * 0.35 + uQueima * 0.35) * (1.0 - overcast * 0.72);
  color += vec3(1.0, 0.64, 0.34) * halo * dayLight * (golden * 0.42 + uQueima * 0.18) * (1.0 - overcast * 0.52);

  vec2 cloudUv = uv;
  if (uMultiplica > 0.02) {
    cloudUv = fract(uv * (1.0 + floor(uMultiplica * 5.0)));
  }
  vec2 warp = vec2(
    fbm(cloudUv * 2.0 + vec2(uTempo * 0.006, 3.1)),
    fbm(cloudUv * 2.3 + vec2(4.7, -uTempo * 0.005))
  );
  cloudUv += (warp - 0.5) * (0.08 + cloudAmount * 0.28 + uEntorta * 0.12);
  float largeCloud = fbm(vec2(cloudUv.x * 2.05 + uTempo * (0.002 + uOndula * 0.012), cloudUv.y * 2.65));
  float cotton = fbm(vec2(cloudUv.x * 7.5 - uTempo * 0.004, cloudUv.y * 6.2 + 2.0));
  float billow = fbm(vec2(cloudUv.x * 18.0 + 7.0, cloudUv.y * 13.0 - uTempo * 0.006));
  float cloudField = largeCloud * 0.68 + cotton * 0.24 + billow * 0.08;
  float cloudBase = smoothstep(0.58 - cloudAmount * 0.33, 0.82, cloudField);
  float cottonEdges = smoothstep(0.36, 0.78, cotton) * smoothstep(0.18, 0.95, uv.y);
  float cloudMask = clamp(cloudBase * (0.72 + cottonEdges * 0.42), 0.0, 1.0) * smoothstep(0.10, 0.92, uv.y);
  vec3 whiteCloud = mix(vec3(0.92, 0.95, 0.96), vec3(1.0, 0.985, 0.94), clearSky);
  vec3 shadowCloud = mix(vec3(0.72, 0.77, 0.80), vec3(0.46, 0.50, 0.52), storm);
  vec3 cloudColor = mix(shadowCloud, whiteCloud, clamp(cottonEdges + clearSky * 0.55, 0.0, 1.0));
  cloudColor = mix(cloudColor, vec3(1.0, 0.80, 0.58), golden * 0.22 * (1.0 - storm));
  color = mix(color, cloudColor, cloudMask * (0.08 + cloudAmount * 0.78 + storm * 0.18));
  color = mix(color, vec3(0.55, 0.60, 0.61), storm * 0.34 + uUmidade * 0.08);

  float seaTop = mix(0.22, 0.28, uMar * 0.3);
  float seaBottom = mix(0.11, 0.09, uMar * 0.2);
  float seaMask = smoothstep(seaBottom - 0.015, seaBottom + 0.01, uv.y) * (1.0 - smoothstep(seaTop - 0.02, seaTop + 0.015, uv.y)) * uMar;
  float waveA = sin(uv.x * 68.0 + uTempo * 0.75) * 0.5 + 0.5;
  float waveB = sin(uv.x * 121.0 - uTempo * 0.52 + uv.y * 42.0) * 0.5 + 0.5;
  float chop = fbm(vec2(uv.x * 32.0 + uTempo * 0.03, uv.y * 54.0 - uTempo * 0.02));
  float waveMix = clamp(waveA * 0.48 + waveB * 0.34 + chop * 0.3, 0.0, 1.0);
  float horizonFade = smoothstep(seaBottom, seaTop, uv.y);
  vec3 seaDeep = mix(vec3(0.02, 0.08, 0.14), vec3(0.06, 0.20, 0.30), clearSky);
  vec3 seaShallow = mix(vec3(0.07, 0.24, 0.34), vec3(0.12, 0.42, 0.56), clearSky);
  vec3 seaColor = mix(seaDeep, seaShallow, horizonFade + waveMix * 0.18);
  float sunTrack = exp(-pow((uv.x - sunPos.x) * 7.0, 2.0)) * smoothstep(seaBottom, seaTop, uv.y) * dayLight;
  vec3 seaHighlight = vec3(1.0, 0.74, 0.42) * (golden * 0.5 + 0.08) + vec3(0.72, 0.9, 1.0) * clearSky * 0.18;
  color = mix(color, seaColor, seaMask * (0.58 + storm * 0.08));
  color += seaHighlight * sunTrack * seaMask * (0.12 + waveMix * 0.24);

  float horizonBand = smoothstep(0.0, 0.08, 0.28 - uv.y);
  float dunasBase = mix(0.08, 0.11, uDunas * 0.4);
  float dunasSilhouette = smoothstep(dunasBase - 0.01, dunasBase + 0.02, uv.y) * (1.0 - step(seaTop - 0.01, uv.y));
  float dunasWave = fbm(vec2(uv.x * 18.0 + uTempo * 0.08, uv.y * 42.0)) * 0.015;
  dunasSilhouette *= step(uv.y, dunasBase + dunasWave);
  vec3 darkSand = mix(vec3(0.18, 0.12, 0.055), vec3(0.46, 0.32, 0.12), golden * 0.6 + dayLight * 0.3);
  vec3 lightSand = mix(vec3(0.74, 0.61, 0.36), vec3(0.96, 0.82, 0.50), golden * 0.4 + dayLight * 0.5);
  lightSand = mix(lightSand, vec3(0.78, 0.52, 0.72), uRosa * 0.28);
  vec3 dunasColor = mix(darkSand, lightSand, uAreia * 0.8);
  color = mix(color, dunasColor, dunasSilhouette * uDunas * 0.72);

  float mountainBase = 0.12 + uMontanhas * 0.045;
  float mountainProfile = mountainBase + fbm(vec2(uv.x * 4.6, 2.8)) * 0.16 + fbm(vec2(uv.x * 13.0, 8.1)) * 0.035;
  float mountainMask = step(uv.y, mountainProfile) * smoothstep(0.02, 0.35, uv.y) * uMontanhas;
  vec3 mountainNear = vec3(0.010, 0.030, 0.090);
  vec3 mountainFar = vec3(0.020, 0.060, 0.150);
  vec3 mountainColor = mix(mountainNear, mountainFar, smoothstep(0.04, 0.26, uv.y));
  mountainColor = mix(mountainColor, vec3(0.015, 0.025, 0.065), 1.0 - dayLight * 0.3);
  color = mix(color, mountainColor, mountainMask * 0.84);

  float skyline = step(uv.y, fortalezaProfile(uv, 0.0));
  float skylineDetail = step(uv.y, fortalezaProfile(uv, 1.0) + 0.015 * sin(uv.x * 42.0 + uTempo * 0.8));
  float streetGlow = smoothstep(0.22, 0.0, abs(uv.y - 0.08 - sin(uv.x * 8.0 + uTempo * 0.2) * 0.008));
  float towerWindows = step(0.5, hash(vec2(floor(uv.x * 54.0), floor(uv.y * 120.0)))) * skylineDetail;
  vec3 cityDark = mix(vec3(0.018, 0.024, 0.03), vec3(0.045, 0.058, 0.075), golden * 0.32);
  vec3 cityWarm = mix(vec3(0.18, 0.12, 0.06), vec3(1.0, 0.58, 0.24), dayLight * 0.35 + golden * 0.65);
  float cityMask = max(horizonBand * 0.6, skyline * 0.92) * uCidade;
  color = mix(color, cityDark, cityMask);
  color += cityWarm * towerWindows * (0.18 + golden * 0.58) * horizonBand * uCidade;
  color += vec3(0.08, 0.26, 0.48) * streetGlow * (0.12 + clearSky * 0.22) * uCidade;
  float gridLine = max(
    1.0 - smoothstep(0.0, 0.006 + uQuadricula * 0.006, abs(fract(uv.x * (8.0 + uQuadricula * 42.0)) - 0.5)),
    1.0 - smoothstep(0.0, 0.006 + uQuadricula * 0.006, abs(fract(uv.y * (6.0 + uQuadricula * 30.0)) - 0.5))
  );
  color = mix(color, vec3(0.82, 0.92, 0.94), gridLine * uQuadricula * 0.22);

  float grain = hash(uv * uResolucao + uTempo);
  color += (grain - 0.5) * (0.012 + uGranula * 0.24 + sharedGlitch * 0.12 + uVhs * 0.14 + uGlitchGrain * 0.18 - uLimpido * 0.01);
  float scan = sin((uv.y + uTempo * (0.18 + uVhs * 1.8)) * uResolucao.y * 1.65);
  color -= vec3(0.04, 0.055, 0.07) * smoothstep(0.55, 1.0, scan) * (uLinhas * 0.42 + uVhs * 0.34 + uGlitchLines * 0.34);
  color.r += max(uCroma, uGlitchChroma) * sin(uv.y * 52.0 + uTempo * 3.0) * 0.055;
  color.b += max(uCroma, uGlitchChroma) * sin(uv.y * 47.0 - uTempo * 2.2) * 0.075;
  color = mix(color, vec3(dot(color, vec3(0.299, 0.587, 0.114))), uBorra * 0.22);
  color = mix(color, color * vec3(0.72, 0.92, 1.08), max(uRastro, uGlitchGhost) * 0.28);
  color = mix(color, color * vec3(0.74, 0.94, 1.34), uAzula * 0.42);
  color += vec3(1.0, 0.54, 0.24) * uQueima * 0.045;
  float luminance = dot(color, vec3(0.299, 0.587, 0.114));
  color = mix(vec3(luminance), color, 0.9 + clearSky * 0.42 + uSatura * 0.72 - storm * 0.24);
  color = (color - 0.5) * (1.0 + uContrasta * 0.85 + uLimpido * 0.18) + 0.5;
  if (uPosteriza > 0.02) {
    float levels = mix(24.0, 5.0, uPosteriza);
    color = floor(color * levels) / levels;
  }
  color *= 0.74 + dayLight * 0.28 + clearSky * 0.28 + uPisca * abs(sin(uTempo * 18.0)) * 0.72;
  color *= 1.0 - uEscurece * 0.72;
  color *= 1.0 - uApaga * 0.95;

  gl_FragColor = vec4(pow(tonemap(color * 1.35), vec3(0.78)), 1.0);
}
`;

export type SkyScene = {
  render(context: RuntimeContext, time: number, glitch?: GlitchState): void;
  resize(): void;
  dispose(): void;
};

export function createSkyScene(canvas: HTMLCanvasElement): SkyScene {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const uniforms = {
    uTempo: { value: 0 },
    uClareia: { value: 0 },
    uEscurece: { value: 0 },
    uNubla: { value: 0 },
    uQueima: { value: 0 },
    uFalha: { value: 0 },
    uOndula: { value: 0 },
    uGranula: { value: 0 },
    uApaga: { value: 0 },
    uPisca: { value: 0 },
    uRastro: { value: 0 },
    uEspelha: { value: 0 },
    uMultiplica: { value: 0 },
    uQuadricula: { value: 0 },
    uEntorta: { value: 0 },
    uBorra: { value: 0 },
    uTreme: { value: 0 },
    uLimpido: { value: 0 },
    uAzula: { value: 0 },
    uRosa: { value: 0 },
    uSatura: { value: 0 },
    uContrasta: { value: 0 },
    uPixeliza: { value: 0 },
    uLinhas: { value: 0 },
    uCroma: { value: 0 },
    uVhs: { value: 0 },
    uPosteriza: { value: 0 },
    uGlitch: { value: 0 },
    uGlitchTear: { value: 0 },
    uGlitchChroma: { value: 0 },
    uGlitchLines: { value: 0 },
    uGlitchGhost: { value: 0 },
    uGlitchGrain: { value: 0 },
    uGlitchSeed: { value: 0 },
    uDia: { value: 0.5 },
    uChuva: { value: 0 },
    uUmidade: { value: 0 },
    uAzul: { value: 0.6 },
    uCinza: { value: 0 },
    uNuvemSinal: { value: 0 },
    uMar: { value: 0 },
    uDunas: { value: 0 },
    uAreia: { value: 0 },
    uCidade: { value: 0 },
    uMontanhas: { value: 0 },
    uResolucao: { value: new THREE.Vector2(1, 1) }
  };
  const smooth = {
    uClareia: 0,
    uEscurece: 0,
    uNubla: 0,
    uQueima: 0,
    uFalha: 0,
    uOndula: 0,
    uGranula: 0,
    uApaga: 0,
    uPisca: 0,
    uRastro: 0,
    uEspelha: 0,
    uMultiplica: 0,
    uQuadricula: 0,
    uEntorta: 0,
    uBorra: 0,
    uTreme: 0,
    uLimpido: 0,
    uAzula: 0,
    uRosa: 0,
    uSatura: 0,
    uContrasta: 0,
    uPixeliza: 0,
    uLinhas: 0,
    uCroma: 0,
    uVhs: 0,
    uPosteriza: 0,
    uDia: 0.5,
    uChuva: 0,
    uUmidade: 0,
    uAzul: 0.6,
    uCinza: 0,
    uNuvemSinal: 0,
    uMar: 0,
    uDunas: 0,
    uAreia: 0,
    uCidade: 0,
    uMontanhas: 0
  };
  const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(mesh);

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width * window.devicePixelRatio));
    const height = Math.max(1, Math.floor(rect.height * window.devicePixelRatio));
    renderer.setSize(width, height, false);
    uniforms.uResolucao.value.set(width, height);
  };

  resize();

  return {
    render(context, time, glitch) {
      resize();
      const visual = context.visual;
      uniforms.uTempo.value = time;
      uniforms.uClareia.value = approach(smooth, "uClareia", visual.clareia ?? context.sinais["ceu.claro"] ?? 0, 0.045);
      uniforms.uEscurece.value = approach(smooth, "uEscurece", visual.escurece ?? 0, 0.06);
      uniforms.uNubla.value = approach(smooth, "uNubla", visual.nubla ?? 0, 0.035);
      uniforms.uQueima.value = approach(smooth, "uQueima", Math.max(visual.queima ?? 0, context.sinais["tempo.calor"] ?? 0) * 0.72, 0.05);
      uniforms.uFalha.value = approach(smooth, "uFalha", visual.falha ?? 0, 0.08);
      uniforms.uOndula.value = approach(smooth, "uOndula", Math.max(visual.ondula ?? 0, visual.arrasta ?? 0), 0.045);
      uniforms.uGranula.value = approach(smooth, "uGranula", visual.granula ?? 0, 0.055);
      uniforms.uApaga.value = approach(smooth, "uApaga", visual.apaga ?? 0, 0.06);
      uniforms.uPisca.value = approach(smooth, "uPisca", visual.pisca ?? 0, 0.12);
      uniforms.uRastro.value = approach(smooth, "uRastro", visual.rastro ?? 0, 0.045);
      uniforms.uEspelha.value = approach(smooth, "uEspelha", visual.espelha ?? 0, 0.16);
      uniforms.uMultiplica.value = approach(smooth, "uMultiplica", visual.multiplica ?? 0, 0.08);
      uniforms.uQuadricula.value = approach(smooth, "uQuadricula", visual.quadricula ?? 0, 0.08);
      uniforms.uEntorta.value = approach(smooth, "uEntorta", visual.entorta ?? 0, 0.06);
      uniforms.uBorra.value = approach(smooth, "uBorra", visual.borra ?? 0, 0.05);
      uniforms.uTreme.value = approach(smooth, "uTreme", visual.treme ?? 0, 0.12);
      uniforms.uLimpido.value = approach(smooth, "uLimpido", visual.limpido ?? 0.35, 0.035);
      uniforms.uAzula.value = approach(smooth, "uAzula", visual.azula ?? 0, 0.035);
      uniforms.uRosa.value = approach(smooth, "uRosa", Math.max(visual.rosa ?? 0, context.sinais["ceu.rosa"] ?? 0), 0.035);
      uniforms.uSatura.value = approach(smooth, "uSatura", visual.satura ?? 0.12, 0.04);
      uniforms.uContrasta.value = approach(smooth, "uContrasta", visual.contrasta ?? 0.08, 0.04);
      uniforms.uPixeliza.value = approach(smooth, "uPixeliza", visual.pixeliza ?? 0, 0.08);
      uniforms.uLinhas.value = approach(smooth, "uLinhas", visual.linhas ?? 0, 0.08);
      uniforms.uCroma.value = approach(smooth, "uCroma", visual.croma ?? 0, 0.08);
      uniforms.uVhs.value = approach(smooth, "uVhs", visual.vhs ?? 0, 0.08);
      uniforms.uPosteriza.value = approach(smooth, "uPosteriza", visual.posteriza ?? 0, 0.08);
      uniforms.uGlitch.value = glitch?.intensity ?? 0;
      uniforms.uGlitchTear.value = glitch?.tear ?? 0;
      uniforms.uGlitchChroma.value = glitch?.chroma ?? 0;
      uniforms.uGlitchLines.value = glitch?.scanlines ?? 0;
      uniforms.uGlitchGhost.value = glitch?.ghost ?? 0;
      uniforms.uGlitchGrain.value = glitch?.grain ?? 0;
      uniforms.uGlitchSeed.value = glitch?.seed ?? 0;
      uniforms.uDia.value = approach(smooth, "uDia", getLocalDayProgress(), 0.01);
      uniforms.uChuva.value = approach(smooth, "uChuva", context.sinais["tempo.chuva"] ?? 0, 0.03);
      uniforms.uUmidade.value = approach(smooth, "uUmidade", context.sinais["tempo.umidade"] ?? 0, 0.03);
      uniforms.uAzul.value = approach(smooth, "uAzul", context.sinais["ceu.azul"] ?? 0.6, 0.025);
      uniforms.uCinza.value = approach(smooth, "uCinza", Math.max(context.sinais["ceu.cinza"] ?? 0, context.sinais["tempo.chuva"] ?? 0), 0.035);
      uniforms.uNuvemSinal.value = approach(smooth, "uNuvemSinal", Math.max(context.sinais["ceu.nuvem"] ?? 0, context.sinais["tempo.nuvem"] ?? 0), 0.035);
      uniforms.uMar.value = approach(smooth, "uMar", visual.mar ?? 0, 0.045);
      uniforms.uDunas.value = approach(smooth, "uDunas", visual.dunas ?? 0, 0.045);
      uniforms.uAreia.value = approach(smooth, "uAreia", visual.areia ?? 0, 0.045);
      uniforms.uCidade.value = approach(smooth, "uCidade", visual.cidade ?? 0, 0.045);
      uniforms.uMontanhas.value = approach(smooth, "uMontanhas", visual.montanhas ?? 0, 0.045);
      renderer.render(scene, camera);
    },
    resize,
    dispose() {
      material.dispose();
      mesh.geometry.dispose();
      renderer.dispose();
    }
  };
}

function approach(state: Record<string, number>, key: string, target: number, amount: number): number {
  const next = state[key] + (target - state[key]) * amount;
  state[key] = next;
  return next;
}

function getLocalDayProgress(): number {
  const now = new Date();
  return (now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600) / 24;
}
