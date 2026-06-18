export class CeuParseError extends Error {
  readonly line: number;

  constructor(line: number, message: string) {
    super(`Linha ${line}: ${message}`);
    this.name = "CeuParseError";
    this.line = line;
  }
}
