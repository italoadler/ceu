import { describe, expect, it } from "vitest";
import { docSections } from "../docsContent";
import { CeuParseError } from "./errors";
import { parse } from "./parser";

const exampleModules = import.meta.glob("../examples/*.ceu", {
  eager: true,
  import: "default",
  query: "?raw"
}) as Record<string, string>;

describe("parser ceu v0.1", () => {
  it("ignora comentarios e linhas vazias", () => {
    const ast = parse(`# comentario

em fortaleza # comentario inline`);

    expect(ast.body).toHaveLength(1);
    expect(ast.body[0]).toMatchObject({ type: "PlaceStatement", name: "fortaleza", line: 3 });
  });

  it("parseia em", () => {
    expect(parse("em fortaleza").body[0]).toMatchObject({ type: "PlaceStatement", name: "fortaleza" });
  });

  it("parseia olha", () => {
    expect(parse('olha video "arquivo.mp4"').body[0]).toMatchObject({
      type: "InputStatement",
      verb: "olha",
      source: "video",
      args: [{ type: "StringLiteral", value: "arquivo.mp4" }]
    });
  });

  it("parseia stream direto/autorizado", () => {
    expect(parse('olha stream "https://exemplo.local/ao-vivo.m3u8"').body[0]).toMatchObject({
      type: "InputStatement",
      verb: "olha",
      source: "stream",
      args: [{ type: "StringLiteral", value: "https://exemplo.local/ao-vivo.m3u8" }]
    });
  });

  it("parseia imagem de mapa", () => {
    expect(parse('olha mapa "/mapas/fortaleza.png"').body[0]).toMatchObject({
      type: "InputStatement",
      verb: "olha",
      source: "mapa",
      args: [{ type: "StringLiteral", value: "/mapas/fortaleza.png" }]
    });
  });

  it("parseia ouve, toca e sente", () => {
    const ast = parse(`
ouve microfone
toca contato "grade"
sente tempo fortaleza
`);

    expect(ast.body.map((statement) => statement.type)).toEqual([
      "InputStatement",
      "InputStatement",
      "InputStatement"
    ]);
  });

  it("parseia manual com numero .75", () => {
    expect(parse("manual calor .75").body[0]).toMatchObject({
      type: "ManualStatement",
      name: "calor",
      value: 0.75
    });
  });

  it("parseia foco", () => {
    expect(parse("foco ceu").body[0]).toMatchObject({ type: "FocusStatement", target: "ceu" });
  });

  it("parseia recorte", () => {
    expect(parse("recorte ceu 0 0 1 .55").body[0]).toMatchObject({
      type: "CropStatement",
      target: "ceu",
      x: 0,
      y: 0,
      width: 1,
      height: 0.55
    });
  });

  it("parseia mapeamento", () => {
    expect(parse("ceu.claro -> clareia").body[0]).toMatchObject({
      type: "MappingStatement",
      signal: { namespace: "ceu", name: "claro" },
      action: { name: "clareia" }
    });
  });

  it("parseia quando com bloco indentado", () => {
    expect(
      parse(`
quando tempo.calor > .75:
  escreve "mormaço"
  grave .7
`)
    ).toMatchObject({
      body: [
        {
          type: "WhenStatement",
          condition: {
            left: { namespace: "tempo", name: "calor" },
            operator: ">",
            right: { type: "NumberLiteral", value: 0.75 }
          },
          body: [
            { type: "ActionStatement", action: { name: "escreve" } },
            { type: "ActionStatement", action: { name: "grave" } }
          ]
        }
      ]
    });
  });

  it("parseia strings com # dentro", () => {
    expect(parse('escreve "ceu # baixo"').body[0]).toMatchObject({
      type: "ActionStatement",
      args: [{ type: "StringLiteral", value: "ceu # baixo" }]
    });
  });

  it("parseia acao direta", () => {
    expect(parse("clareia .5").body[0]).toMatchObject({
      type: "ActionStatement",
      action: { name: "clareia" },
      args: [{ type: "NumberLiteral", value: 0.5 }]
    });
  });

  it("parseia acoes de composicao de video", () => {
    const ast = parse('olha youtube "0FBiyFpV__g"\nvideo .8\nceu .6\nmistura .3\nsome video\nrasga .4\ntelas .6\nmosaico .4\nquebra .5\nembaralha .2\nacelera 1.4\npequena .6\ncheia');

    expect(ast.body.map((statement) => statement.type)).toEqual(Array.from({ length: 13 }, (_, index) => (index === 0 ? "InputStatement" : "ActionStatement")));
  });

  it("parseia acoes esteticas de ceu, glitch e cor", () => {
    const ast = parse("limpido .9\nazula .8\nrosa .5\nsatura .7\ncontrasta .5\npixeliza .4\nlinhas .6\ncroma .5\nvhs .3\nposteriza .4\nceu.rosa -> rosa");

    expect(ast.body).toHaveLength(11);
    expect(ast.body.at(-1)).toMatchObject({ type: "MappingStatement", signal: { namespace: "ceu", name: "rosa" }, action: { name: "rosa" } });
  });

  it("parseia acoes de paisagem explicitas", () => {
    const ast = parse("cidade .8\nmar .7\ndunas .6\nareia .9\nmontanhas .5");

    expect(ast.body).toHaveLength(5);
    expect(ast.body.every((statement) => statement.type === "ActionStatement")).toBe(true);
  });

  it("parseia acoes generativas de mapa", () => {
    const ast = parse("mapa .8\nruas .7\nquadras .5\nrotas .6\ncontorno .4\npontos .5\nfluxo .7\nsome mapa\naparece mapa .9");

    expect(ast.body).toHaveLength(9);
    expect(ast.body.every((statement) => statement.type === "ActionStatement")).toBe(true);
  });

  it("parseia entrada e acoes de satelites", () => {
    const ast = parse("sente satelites fortaleza\nsatelites .8\norbita .7\npassagem .6\nsatelite.visivel -> passagem");

    expect(ast.body.map((statement) => statement.type)).toEqual([
      "InputStatement",
      "ActionStatement",
      "ActionStatement",
      "ActionStatement",
      "MappingStatement"
    ]);
  });

  it("gera erro de sintaxe com linha", () => {
    expect(() => parse("quando tempo.calor > .75")).toThrow(CeuParseError);
    expect(() => parse("quando tempo.calor > .75")).toThrow('Linha 1: bloco "quando" precisa terminar com ":".');
  });

  it("gera erro para acao desconhecida", () => {
    expect(() => parse("explode .5")).toThrow('Linha 1: acao desconhecida "explode".');
  });

  it("parseia todos os exemplos .ceu", () => {
    const files = Object.entries(exampleModules);

    expect(files.length).toBeGreaterThan(10);

    for (const [file, code] of files) {
      expect(() => parse(code), file).not.toThrow();
    }
  });

  it("parseia todos os exemplos da documentacao online", () => {
    const examples = docSections.flatMap((section) => section.examples);

    expect(examples.length).toBeGreaterThan(15);

    for (const example of examples) {
      expect(() => parse(example.code), example.title).not.toThrow();
    }
  });
});
