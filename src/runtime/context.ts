import type { ActionStatement, CropStatement, InputStatement, MappingStatement, WhenStatement } from "../language/ast";
import { createActionRegistry, type ActionRegistry, type AudioState, type TextState, type VisualState } from "./actions";
import { seedBaseSignals, type SignalStore } from "./signals";

export type RuntimeLogEntry = {
  level: "info" | "erro";
  message: string;
  line?: number;
};

export type RuntimeContext = {
  lugar?: string;
  foco?: string;
  recortes: Record<string, CropStatement>;
  entradas: InputStatement[];
  directActions: ActionStatement[];
  mappings: MappingStatement[];
  whens: WhenStatement[];
  sinais: SignalStore;
  overrides: SignalStore;
  acoes: ActionRegistry;
  visual: VisualState;
  audio: AudioState;
  texto: TextState;
  media: MediaState;
  satellites: SatelliteState;
  log: RuntimeLogEntry[];
  elapsedSeconds: number;
};

export type MediaState = {
  kind?: "video" | "image" | "map" | "stream" | "youtube";
  source?: string;
  opacity: number;
  skyOpacity: number;
  blend: number;
  cut: number;
  speed: number;
  delay: number;
  advance: number;
  tiles: number;
  echoes: number;
  tear: number;
  wound: number;
  offset: number;
  ghost: number;
  scale: number;
  x: number;
  y: number;
  window: number;
  mosaic: number;
  puzzle: number;
  shuffle: number;
};

export type SatelliteTrack = {
  name: string;
  azimuth: number;
  elevation: number;
  rangeKm: number;
  visible: boolean;
  brightness: number;
  path: Array<{ azimuth: number; elevation: number }>;
};

export type SatelliteState = {
  observer: {
    latitude: number;
    longitude: number;
    heightKm: number;
    label: string;
  };
  source: "simulado" | "celestrak";
  updatedAt?: string;
  tracks: SatelliteTrack[];
};

export function createRuntimeContext(): RuntimeContext {
  const sinais: SignalStore = {};
  seedBaseSignals(sinais);

  return {
    recortes: {},
    entradas: [],
    directActions: [],
    mappings: [],
    whens: [],
    sinais,
    overrides: {},
    acoes: createActionRegistry(),
    visual: {},
    audio: {},
    texto: { linhas: [], visivel: true },
    satellites: {
      observer: {
        latitude: -3.7319,
        longitude: -38.5267,
        heightKm: 0.021,
        label: "fortaleza"
      },
      source: "simulado",
      tracks: []
    },
    media: {
      opacity: 0,
      skyOpacity: 1,
      blend: 0,
      cut: 0,
      speed: 1,
      delay: 0,
      advance: 0,
      tiles: 1,
      echoes: 0,
      tear: 0,
      wound: 0,
      offset: 0,
      ghost: 0,
      scale: 1,
      x: 0.5,
      y: 0.5,
      window: 0,
      mosaic: 0,
      puzzle: 0,
      shuffle: 0
    },
    log: [],
    elapsedSeconds: 0
  };
}
