import { CeuParseError } from "./errors";

export type Operator = ">" | "<" | ">=" | "<=" | "==" | "!=";

export type Token =
  | { type: "word"; value: string; line: number }
  | { type: "number"; value: string; line: number }
  | { type: "string"; value: string; line: number }
  | { type: "arrow"; value: "->"; line: number }
  | { type: "operator"; value: Operator; line: number }
  | { type: "colon"; value: ":"; line: number };

const numberPattern = /^(?:\d+(?:\.\d+)?|\.\d+)/;
const wordPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ_][A-Za-zÀ-ÖØ-öø-ÿ0-9_.-]*/;

export function tokenizeLine(input: string, line: number): Token[] {
  const source = stripComment(input);
  const tokens: Token[] = [];
  let index = 0;

  while (index < source.length) {
    const rest = source.slice(index);
    const char = source[index];

    if (/\s/.test(char)) {
      index += 1;
      continue;
    }

    if (rest.startsWith("->")) {
      tokens.push({ type: "arrow", value: "->", line });
      index += 2;
      continue;
    }

    const operator = matchOperator(rest);
    if (operator) {
      tokens.push({ type: "operator", value: operator, line });
      index += operator.length;
      continue;
    }

    if (char === ":") {
      tokens.push({ type: "colon", value: ":", line });
      index += 1;
      continue;
    }

    if (char === '"') {
      const result = readString(source, index, line);
      tokens.push({ type: "string", value: result.value, line });
      index = result.nextIndex;
      continue;
    }

    const numberMatch = rest.match(numberPattern);
    if (numberMatch) {
      tokens.push({ type: "number", value: numberMatch[0], line });
      index += numberMatch[0].length;
      continue;
    }

    const wordMatch = rest.match(wordPattern);
    if (wordMatch) {
      tokens.push({ type: "word", value: wordMatch[0], line });
      index += wordMatch[0].length;
      continue;
    }

    throw new CeuParseError(line, `token inesperado "${char}".`);
  }

  return tokens;
}

export function stripComment(input: string): string {
  let inString = false;
  let escaped = false;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === "\\") {
      escaped = true;
      continue;
    }

    if (char === '"') {
      inString = !inString;
      continue;
    }

    if (char === "#" && !inString) {
      return input.slice(0, index);
    }
  }

  return input;
}

function readString(source: string, start: number, line: number): { value: string; nextIndex: number } {
  let value = "";
  let escaped = false;

  for (let index = start + 1; index < source.length; index += 1) {
    const char = source[index];

    if (escaped) {
      value += char;
      escaped = false;
      continue;
    }

    if (char === "\\") {
      escaped = true;
      continue;
    }

    if (char === '"') {
      return { value, nextIndex: index + 1 };
    }

    value += char;
  }

  throw new CeuParseError(line, "string precisa terminar com aspas.");
}

function matchOperator(source: string): Operator | undefined {
  if (source.startsWith(">=")) return ">=";
  if (source.startsWith("<=")) return "<=";
  if (source.startsWith("==")) return "==";
  if (source.startsWith("!=")) return "!=";
  if (source.startsWith(">")) return ">";
  if (source.startsWith("<")) return "<";
  return undefined;
}
