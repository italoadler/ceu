import type { ActionStatement, Condition, Program, Statement, Value } from "../language/ast";
import { resetActionState } from "./actions";
import { createRuntimeContext, type RuntimeContext } from "./context";
import { getSignal, setSignal, updateSimulatedSignals } from "./signals";

export function createRuntime(program: Program): RuntimeContext {
  const context = createRuntimeContext();
  loadProgram(context, program);
  return context;
}

export function loadProgram(context: RuntimeContext, program: Program): RuntimeContext {
  context.lugar = undefined;
  context.foco = undefined;
  context.recortes = {};
  context.entradas = [];
  context.directActions = [];
  context.mappings = [];
  context.whens = [];
  context.log = [];

  for (const statement of program.body) {
    configureStatement(context, statement);
  }

  context.log.push({ level: "info", message: "programa carregado" });
  return context;
}

export function tick(context: RuntimeContext, dtSeconds: number): RuntimeContext {
  context.elapsedSeconds += Math.max(0, dtSeconds);
  updateSimulatedSignals(context.sinais, context.elapsedSeconds);
  for (const [key, value] of Object.entries(context.overrides)) {
    setSignal(context.sinais, key, value);
  }
  resetActionState(context);

  for (const action of context.directActions) {
    runAction(context, action);
  }

  for (const mapping of context.mappings) {
    runAction(context, { type: "ActionStatement", action: mapping.action, args: [], line: mapping.line }, getSignal(context.sinais, mapping.signal));
  }

  for (const statement of context.whens) {
    if (evaluateCondition(context, statement.condition)) {
      for (const action of statement.body) {
        runAction(context, action);
      }
    }
  }

  return context;
}

function configureStatement(context: RuntimeContext, statement: Statement): void {
  switch (statement.type) {
    case "PlaceStatement":
      context.lugar = statement.name;
      break;
    case "InputStatement":
      context.entradas.push(statement);
      if (
        statement.verb === "olha" &&
        (statement.source === "video" ||
          statement.source === "imagem" ||
          statement.source === "mapa" ||
          statement.source === "stream" ||
          statement.source === "camera" ||
          statement.source === "youtube")
      ) {
        const source = statement.args[0];
        if (source?.type === "StringLiteral") {
          context.media.kind = resolveMediaKind(statement.source, source.value);
          context.media.source = source.value;
          context.media.opacity = Math.max(context.media.opacity, 0.72);
        }
      }
      break;
    case "ManualStatement":
      setSignal(context.sinais, `manual.${statement.name}`, statement.value);
      break;
    case "FocusStatement":
      context.foco = statement.target;
      break;
    case "CropStatement":
      context.recortes[statement.target] = statement;
      break;
    case "MappingStatement":
      context.mappings.push(statement);
      break;
    case "WhenStatement":
      context.whens.push(statement);
      break;
    case "ActionStatement":
      context.directActions.push(statement);
      break;
  }
}

function resolveMediaKind(source: string, value: string): "video" | "image" | "map" | "stream" | "youtube" {
  if (source === "imagem") return "image";
  if (source === "mapa") return "map";
  if (source === "stream") return "stream";
  if (source === "youtube" || source === "camera" || isYouTubeSource(value)) return "youtube";
  return "video";
}

function isYouTubeSource(value: string): boolean {
  return /(?:youtube\.com|youtu\.be|youtube-nocookie\.com)/i.test(value);
}

function runAction(context: RuntimeContext, statement: ActionStatement, intensity?: number): void {
  const handler = context.acoes[statement.action.name];
  if (!handler) {
    context.log.push({
      level: "erro",
      message: `acao desconhecida "${statement.action.name}"`,
      line: statement.line
    });
    return;
  }

  handler(context, statement.args, intensity);
}

function evaluateCondition(context: RuntimeContext, condition: Condition): boolean {
  const left = getSignal(context.sinais, condition.left);
  const right = resolveNumber(context, condition.right);

  switch (condition.operator) {
    case ">":
      return left > right;
    case "<":
      return left < right;
    case ">=":
      return left >= right;
    case "<=":
      return left <= right;
    case "==":
      return left === right;
    case "!=":
      return left !== right;
  }
}

function resolveNumber(context: RuntimeContext, value: Value): number {
  if (value.type === "NumberLiteral") return value.value;
  if (value.type === "SignalRef") return getSignal(context.sinais, value.value);
  const parsed = Number(value.value);
  return Number.isFinite(parsed) ? parsed : 0;
}
