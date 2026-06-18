import type { SignalRef } from "../language/ast";

export type SignalStore = Record<string, number>;

export function signalKey(signal: SignalRef): string {
  return signal.namespace ? `${signal.namespace}.${signal.name}` : signal.name;
}

export function getSignal(sinais: SignalStore, signal: SignalRef): number {
  return clamp01(sinais[signalKey(signal)] ?? 0);
}

export function setSignal(sinais: SignalStore, key: string, value: number): void {
  sinais[key] = clamp01(value);
}

export function seedBaseSignals(sinais: SignalStore): void {
  const keys = [
    "ceu.claro",
    "ceu.nuvem",
    "ceu.movimento",
    "ceu.azul",
    "ceu.rosa",
    "ceu.cinza",
    "ceu.quente",
    "cidade.movimento",
    "cidade.luz",
    "cidade.densidade",
    "cidade.borda",
    "mar.movimento",
    "mar.luz",
    "mar.linha",
    "microfone.nivel",
    "microfone.grave",
    "microfone.medio",
    "microfone.agudo",
    "microfone.pico",
    "microfone.ruido",
    "contato.nivel",
    "contato.batida",
    "contato.textura",
    "contato.grave",
    "contato.agudo",
    "contato.pulso",
    "contato.movimento",
    "tempo.calor",
    "tempo.umidade",
    "tempo.vento",
    "tempo.chuva",
    "tempo.pressao",
    "tempo.nuvem",
    "tempo.radiacao",
    "ar.pm25",
    "ar.pm10",
    "ar.co",
    "ar.no2",
    "ar.o3",
    "ar.indice",
    "satelite.altitude",
    "satelite.azimute",
    "satelite.distancia",
    "satelite.visivel",
    "satelite.proximo",
    "satelite.quantidade",
    "manual.luz",
    "manual.calor",
    "manual.tensao"
  ];

  for (const key of keys) {
    sinais[key] ??= 0;
  }
}

export function updateSimulatedSignals(sinais: SignalStore, elapsedSeconds: number): void {
  const wave = (speed: number, phase = 0) => (Math.sin(elapsedSeconds * speed + phase) + 1) / 2;
  const pulse = wave(0.42, 1.7) > 0.965 ? wave(8) : 0;

  setSignal(sinais, "ceu.claro", 0.58 + wave(0.012, 0.9) * 0.16);
  setSignal(sinais, "ceu.nuvem", 0.28 + wave(0.018, 2.1) * 0.22);
  setSignal(sinais, "ceu.movimento", wave(0.055, 0.4) * 0.18);
  setSignal(sinais, "ceu.azul", 0.62 + wave(0.01, 0.2) * 0.24);
  setSignal(sinais, "ceu.rosa", Math.max(0, Math.sin(elapsedSeconds * 0.004 + 0.7)) * 0.32);
  setSignal(sinais, "ceu.cinza", 0.14 + wave(0.016, 2.8) * 0.18);
  setSignal(sinais, "ceu.quente", 0.18 + wave(0.012, 1.4) * 0.2);

  setSignal(sinais, "cidade.movimento", 0.18 + wave(0.09, 0.8) * 0.22);
  setSignal(sinais, "cidade.luz", 0.42 + wave(0.025, 0.1) * 0.22);
  setSignal(sinais, "cidade.densidade", 0.48 + wave(0.018, 1.9) * 0.18);
  setSignal(sinais, "cidade.borda", 0.42 + wave(0.04, 2.5) * 0.2);

  setSignal(sinais, "mar.movimento", 0.2 + wave(0.07, 1.1) * 0.18);
  setSignal(sinais, "mar.luz", 0.44 + wave(0.018, 0.6) * 0.18);
  setSignal(sinais, "mar.linha", 0.48 + wave(0.01, 2.2) * 0.14);

  setSignal(sinais, "microfone.nivel", 0.16 + wave(0.18, 0.3) * 0.16);
  setSignal(sinais, "microfone.grave", 0.2 + wave(0.11, 2.2) * 0.18);
  setSignal(sinais, "microfone.medio", 0.18 + wave(0.13, 1.3) * 0.16);
  setSignal(sinais, "microfone.agudo", 0.14 + wave(0.16, 0.5) * 0.14);
  setSignal(sinais, "microfone.pico", pulse);
  setSignal(sinais, "microfone.ruido", 0.12 + wave(0.2, 2.9) * 0.14);

  setSignal(sinais, "contato.nivel", 0.12 + wave(0.16, 1.4) * 0.18);
  setSignal(sinais, "contato.batida", pulse);
  setSignal(sinais, "contato.textura", 0.22 + wave(0.24, 0.7) * 0.24);
  setSignal(sinais, "contato.grave", 0.16 + wave(0.12, 2.8) * 0.16);
  setSignal(sinais, "contato.agudo", 0.18 + wave(0.2, 1.1) * 0.14);
  setSignal(sinais, "contato.pulso", pulse);
  setSignal(sinais, "contato.movimento", 0.18 + wave(0.14, 2.1) * 0.16);

  setSignal(sinais, "tempo.calor", 0.56 + wave(0.006, 1.0) * 0.16);
  setSignal(sinais, "tempo.umidade", 0.48 + wave(0.005, 2.4) * 0.16);
  setSignal(sinais, "tempo.vento", 0.18 + wave(0.025, 0.5) * 0.18);
  setSignal(sinais, "tempo.chuva", wave(0.004, 3.2) * 0.18);
  setSignal(sinais, "tempo.pressao", 0.46 + wave(0.003, 0.1) * 0.08);
  setSignal(sinais, "tempo.nuvem", sinais["ceu.nuvem"] ?? 0);
  setSignal(sinais, "tempo.radiacao", sinais["ceu.claro"] ?? 0);

  setSignal(sinais, "ar.pm25", 0.18 + wave(0.016, 1.2) * 0.14);
  setSignal(sinais, "ar.pm10", 0.2 + wave(0.014, 2.3) * 0.14);
  setSignal(sinais, "ar.co", 0.12 + wave(0.018, 0.4) * 0.12);
  setSignal(sinais, "ar.no2", 0.16 + wave(0.02, 1.7) * 0.12);
  setSignal(sinais, "ar.o3", 0.18 + wave(0.012, 2.8) * 0.12);
  setSignal(sinais, "ar.indice", average([sinais["ar.pm25"], sinais["ar.pm10"], sinais["ar.no2"], sinais["ar.o3"]]));

  const satellitePass = wave(0.018, 2.2);
  const visible = satellitePass > 0.62 ? satellitePass : 0;
  setSignal(sinais, "satelite.altitude", visible);
  setSignal(sinais, "satelite.azimute", wave(0.02, 1.1));
  setSignal(sinais, "satelite.distancia", 1 - visible * 0.45);
  setSignal(sinais, "satelite.visivel", visible > 0 ? 1 : 0);
  setSignal(sinais, "satelite.proximo", satellitePass);
  setSignal(sinais, "satelite.quantidade", visible > 0 ? 0.35 + wave(0.04, 0.2) * 0.45 : wave(0.01, 4.0) * 0.25);
}

export function clamp01(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(1, value));
}

function average(values: Array<number | undefined>): number {
  const safeValues = values.map((value) => value ?? 0);
  return safeValues.reduce((sum, value) => sum + value, 0) / safeValues.length;
}
