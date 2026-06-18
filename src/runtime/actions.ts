import type { Value } from "../language/ast";
import { audioActionNames, targetNames, visualActionNames } from "../language/catalog";
import { clamp01, getSignal } from "./signals";
import type { RuntimeContext } from "./context";

export type VisualState = Record<string, number>;
export type AudioState = Record<string, number>;

export type TextState = {
  linhas: string[];
  visivel: boolean;
};

export type ActionHandler = (context: RuntimeContext, args: Value[], intensity?: number) => void;
export type ActionRegistry = Record<string, ActionHandler>;

const unboundedActions = new Set(["acelera"]);
const targetSet = new Set<string>(targetNames);

export function createActionRegistry(): ActionRegistry {
  const registry: ActionRegistry = {};

  for (const name of visualActionNames) {
    registry[name] = (context, args, intensity) => {
      const value = unboundedActions.has(name) ? resolveNumber(context, args, intensity) : resolveIntensity(context, args, intensity);
      context.visual[name] = Math.max(context.visual[name] ?? 0, value);
    };
  }

  for (const name of audioActionNames) {
    registry[name] = (context, args, intensity) => {
      context.audio[name] = Math.max(context.audio[name] ?? 0, resolveIntensity(context, args, intensity));
    };
  }

  registry.escreve = (context, args) => {
    const text = resolveText(context, args[0]);
    if (text && !context.texto.linhas.includes(text)) {
      context.texto.linhas.push(text);
    }
    context.texto.visivel = true;
  };

  registry.some = (context, args, intensity) => {
    const target = resolveTarget(args[0]);
    if (target && targetSet.has(target)) {
      context.visual[target] = 0;
      return;
    }
    context.texto.visivel = resolveIntensity(context, args, intensity) < 0.5;
  };

  registry.aparece = (context, args, intensity) => {
    const target = resolveTarget(args[0]);
    if (target && targetSet.has(target)) {
      context.visual[target] = Math.max(context.visual[target] ?? 0, resolveIntensity(context, args.slice(1), intensity));
      return;
    }
    context.texto.visivel = resolveIntensity(context, args, intensity) >= 0.2;
  };

  return registry;
}

export function resetActionState(context: RuntimeContext): void {
  context.visual = {};
  context.audio = {};
  context.texto = { linhas: [], visivel: true };
}

function resolveIntensity(context: RuntimeContext, args: Value[], intensity?: number): number {
  if (intensity !== undefined) return clamp01(intensity);
  const first = args[0];

  if (!first) return 1;
  if (first.type === "NumberLiteral") return clamp01(first.value);
  if (first.type === "SignalRef") return getSignal(context.sinais, first.value);
  return 1;
}

function resolveNumber(context: RuntimeContext, args: Value[], intensity?: number): number {
  if (intensity !== undefined) return intensity;
  const first = args[0];

  if (!first) return 1;
  if (first.type === "NumberLiteral") return first.value;
  if (first.type === "SignalRef") return getSignal(context.sinais, first.value);
  return 1;
}

function resolveText(context: RuntimeContext, value: Value | undefined): string {
  if (!value) return "";
  if (value.type === "StringLiteral") return value.value;
  if (value.type === "NumberLiteral") return String(value.value);
  return String(getSignal(context.sinais, value.value).toFixed(2));
}

function resolveTarget(value: Value | undefined): string | undefined {
  if (!value || value.type !== "SignalRef" || value.value.namespace) return undefined;
  return value.value.name;
}
