import type {
  ActionRef,
  ActionStatement,
  Condition,
  CropStatement,
  FocusStatement,
  InputStatement,
  ManualStatement,
  MappingStatement,
  PlaceStatement,
  Program,
  SignalRef,
  Statement,
  Value,
  WhenStatement
} from "./ast";
import { actionNames, inputVerbs, reservedCommands } from "./catalog";
import { CeuParseError } from "./errors";
import { tokenizeLine, type Token } from "./tokenize";

const inputVerbSet = new Set<string>(inputVerbs);
const reservedCommandSet = new Set<string>(reservedCommands);
const actionSet = new Set<string>(actionNames);

type LogicalLine = {
  raw: string;
  line: number;
  indent: number;
  tokens: Token[];
};

export function parse(source: string): Program {
  const lines = toLogicalLines(source);
  const body: Statement[] = [];
  let index = 0;

  while (index < lines.length) {
    const current = lines[index];

    if (current.indent > 0) {
      throw new CeuParseError(current.line, "indentacao inesperada fora de um bloco.");
    }

    if (firstWord(current) === "quando") {
      const parsed = parseWhen(lines, index);
      body.push(parsed.statement);
      index = parsed.nextIndex;
      continue;
    }

    body.push(parseStatement(current));
    index += 1;
  }

  return { type: "Program", body };
}

function toLogicalLines(source: string): LogicalLine[] {
  return source
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((raw, index) => {
      const line = index + 1;
      const trimmedEnd = raw.trimEnd();
      const tokens = tokenizeLine(trimmedEnd, line);
      return {
        raw: trimmedEnd,
        line,
        indent: countIndent(trimmedEnd),
        tokens
      };
    })
    .filter((line) => line.tokens.length > 0);
}

function parseStatement(line: LogicalLine): Statement {
  const command = firstWord(line);

  if (!command) {
    throw new CeuParseError(line.line, "linha vazia inesperada.");
  }

  if (command === "em") return parsePlace(line);
  if (inputVerbSet.has(command)) return parseInput(line);
  if (command === "manual") return parseManual(line);
  if (command === "foco") return parseFocus(line);
  if (command === "recorte") return parseCrop(line);
  if (hasArrow(line.tokens)) return parseMapping(line);
  return parseAction(line);
}

function parsePlace(line: LogicalLine): PlaceStatement {
  expectTokenCount(line, 2, "uso esperado: em lugar.");
  return { type: "PlaceStatement", name: expectWord(line.tokens[1], line.line), line: line.line };
}

function parseInput(line: LogicalLine): InputStatement {
  if (line.tokens.length < 2) {
    throw new CeuParseError(line.line, `uso esperado: ${line.tokens[0]?.value} fonte valor*.`);
  }

  return {
    type: "InputStatement",
    verb: expectWord(line.tokens[0], line.line) as InputStatement["verb"],
    source: expectWord(line.tokens[1], line.line),
    args: line.tokens.slice(2).map((token) => parseValue(token)),
    line: line.line
  };
}

function parseManual(line: LogicalLine): ManualStatement {
  expectTokenCount(line, 3, "uso esperado: manual nome numero.");
  return {
    type: "ManualStatement",
    name: expectWord(line.tokens[1], line.line),
    value: expectNumber(line.tokens[2], line.line),
    line: line.line
  };
}

function parseFocus(line: LogicalLine): FocusStatement {
  expectTokenCount(line, 2, "uso esperado: foco alvo.");
  return { type: "FocusStatement", target: expectWord(line.tokens[1], line.line), line: line.line };
}

function parseCrop(line: LogicalLine): CropStatement {
  expectTokenCount(line, 6, "uso esperado: recorte nome x y largura altura.");
  return {
    type: "CropStatement",
    target: expectWord(line.tokens[1], line.line),
    x: expectNumber(line.tokens[2], line.line),
    y: expectNumber(line.tokens[3], line.line),
    width: expectNumber(line.tokens[4], line.line),
    height: expectNumber(line.tokens[5], line.line),
    line: line.line
  };
}

function parseMapping(line: LogicalLine): MappingStatement {
  const arrowIndex = line.tokens.findIndex((token) => token.type === "arrow");
  if (arrowIndex !== 1 || line.tokens.length !== 3) {
    throw new CeuParseError(line.line, "esperado mapeamento no formato sinal -> acao.");
  }

  return {
    type: "MappingStatement",
    signal: parseSignal(expectWord(line.tokens[0], line.line), line.line),
    action: parseActionRef(expectWord(line.tokens[2], line.line), line.line),
    line: line.line
  };
}

function parseWhen(lines: LogicalLine[], index: number): { statement: WhenStatement; nextIndex: number } {
  const header = lines[index];

  if (header.tokens.at(-1)?.type !== "colon") {
    throw new CeuParseError(header.line, 'bloco "quando" precisa terminar com ":".');
  }

  const conditionTokens = header.tokens.slice(1, -1);
  const condition = parseCondition(conditionTokens, header.line);
  const body: ActionStatement[] = [];
  let nextIndex = index + 1;

  while (nextIndex < lines.length && lines[nextIndex].indent > header.indent) {
    body.push(parseAction(lines[nextIndex]));
    nextIndex += 1;
  }

  if (body.length === 0) {
    throw new CeuParseError(header.line, 'bloco "quando" precisa ter pelo menos uma acao indentada.');
  }

  return {
    statement: { type: "WhenStatement", condition, body, line: header.line },
    nextIndex
  };
}

function parseCondition(tokens: Token[], line: number): Condition {
  if (tokens.length !== 3 || tokens[1]?.type !== "operator") {
    throw new CeuParseError(line, "condicao esperada no formato sinal operador valor.");
  }

  return {
    left: parseSignal(expectWord(tokens[0], line), line),
    operator: tokens[1].value,
    right: parseValue(tokens[2])
  };
}

function parseAction(line: LogicalLine): ActionStatement {
  const name = expectWord(line.tokens[0], line.line);

  if (reservedCommandSet.has(name)) {
    throw new CeuParseError(line.line, `comando "${name}" incompleto ou mal formado.`);
  }

  return {
    type: "ActionStatement",
    action: parseActionRef(name, line.line),
    args: line.tokens.slice(1).map((token) => parseValue(token)),
    line: line.line
  };
}

function parseActionRef(name: string, line: number): ActionRef {
  if (!actionSet.has(name)) {
    throw new CeuParseError(line, `acao desconhecida "${name}". Use uma acao registrada ou adicione ao runtime.`);
  }

  return { name };
}

function parseValue(token: Token): Value {
  if (token.type === "number") return { type: "NumberLiteral", value: Number(token.value) };
  if (token.type === "string") return { type: "StringLiteral", value: token.value };
  if (token.type === "word") return { type: "SignalRef", value: parseSignal(token.value, token.line) };
  throw new CeuParseError(token.line, `valor inesperado "${token.value}".`);
}

function parseSignal(value: string, line: number): SignalRef {
  const parts = value.split(".");
  if (parts.length === 1 && parts[0]) return { name: parts[0] };
  if (parts.length === 2 && parts[0] && parts[1]) return { namespace: parts[0], name: parts[1] };
  throw new CeuParseError(line, `sinal invalido "${value}".`);
}

function expectTokenCount(line: LogicalLine, expected: number, message: string): void {
  if (line.tokens.length !== expected) {
    throw new CeuParseError(line.line, message);
  }
}

function expectWord(token: Token | undefined, line: number): string {
  if (!token || token.type !== "word") {
    throw new CeuParseError(line, "esperado identificador.");
  }

  return token.value;
}

function expectNumber(token: Token | undefined, line: number): number {
  if (!token || token.type !== "number") {
    throw new CeuParseError(line, "esperado numero.");
  }

  return Number(token.value);
}

function hasArrow(tokens: Token[]): boolean {
  return tokens.some((token) => token.type === "arrow");
}

function firstWord(line: LogicalLine): string | undefined {
  const token = line.tokens[0];
  return token?.type === "word" ? token.value : undefined;
}

function countIndent(line: string): number {
  const match = line.match(/^[ \t]*/);
  return match?.[0].replaceAll("\t", "  ").length ?? 0;
}
