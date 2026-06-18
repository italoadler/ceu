export type Program = {
  type: "Program";
  body: Statement[];
};

export type Statement =
  | PlaceStatement
  | InputStatement
  | ManualStatement
  | FocusStatement
  | CropStatement
  | MappingStatement
  | WhenStatement
  | ActionStatement;

export type PlaceStatement = {
  type: "PlaceStatement";
  name: string;
  line: number;
};

export type InputStatement = {
  type: "InputStatement";
  verb: "olha" | "ouve" | "toca" | "sente";
  source: string;
  args: Value[];
  line: number;
};

export type ManualStatement = {
  type: "ManualStatement";
  name: string;
  value: number;
  line: number;
};

export type FocusStatement = {
  type: "FocusStatement";
  target: string;
  line: number;
};

export type CropStatement = {
  type: "CropStatement";
  target: string;
  x: number;
  y: number;
  width: number;
  height: number;
  line: number;
};

export type MappingStatement = {
  type: "MappingStatement";
  signal: SignalRef;
  action: ActionRef;
  line: number;
};

export type WhenStatement = {
  type: "WhenStatement";
  condition: Condition;
  body: ActionStatement[];
  line: number;
};

export type ActionStatement = {
  type: "ActionStatement";
  action: ActionRef;
  args: Value[];
  line: number;
};

export type SignalRef = {
  namespace?: string;
  name: string;
};

export type ActionRef = {
  name: string;
};

export type Condition = {
  left: SignalRef;
  operator: ">" | "<" | ">=" | "<=" | "==" | "!=";
  right: Value;
};

export type Value =
  | { type: "NumberLiteral"; value: number }
  | { type: "StringLiteral"; value: string }
  | { type: "SignalRef"; value: SignalRef };
