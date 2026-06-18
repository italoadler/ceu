import { describe, expect, it } from "vitest";
import { parse } from "../language/parser";
import { createRuntime, tick } from "./interpreter";
import { setSignal } from "./signals";

describe("runtime minimo", () => {
  it("configura lugar, entradas, foco e recortes", () => {
    const context = createRuntime(
      parse(`
em fortaleza
olha camera local
ouve microfone
foco ceu
recorte ceu 0 0 1 .55
`)
    );

    expect(context.lugar).toBe("fortaleza");
    expect(context.entradas).toHaveLength(2);
    expect(context.foco).toBe("ceu");
    expect(context.recortes.ceu).toMatchObject({ x: 0, y: 0, width: 1, height: 0.55 });
  });

  it("aplica valores manuais em manual.nome", () => {
    const context = createRuntime(parse("manual calor .6"));

    expect(context.sinais["manual.calor"]).toBe(0.6);
  });

  it("aplica mapeamentos de sinal para acao", () => {
    const context = createRuntime(parse("manual calor .6\nmanual.calor -> queima"));

    tick(context, 0);

    expect(context.visual.queima).toBe(0.6);
  });

  it("avalia bloco quando verdadeiro", () => {
    const context = createRuntime(
      parse(`
quando manual.calor > .75:
  escreve "mormaço"
  grave .7
`)
    );

    setSignal(context.sinais, "manual.calor", 0.8);
    tick(context, 0);

    expect(context.texto.linhas).toEqual(["mormaço"]);
    expect(context.audio.grave).toBe(0.7);
  });

  it("nao aplica bloco quando falso", () => {
    const context = createRuntime(
      parse(`
quando manual.calor > .75:
  escreve "mormaço"
`)
    );

    setSignal(context.sinais, "manual.calor", 0.2);
    tick(context, 0);

    expect(context.texto.linhas).toEqual([]);
  });

  it("reseta estados transitórios a cada tick", () => {
    const context = createRuntime(parse("manual calor .6\nmanual.calor -> queima"));

    tick(context, 0);
    expect(context.visual.queima).toBe(0.6);

    setSignal(context.sinais, "manual.calor", 0.2);
    tick(context, 0);
    expect(context.visual.queima).toBe(0.2);
  });

  it("mantem acoes diretas como parte do programa continuo", () => {
    const context = createRuntime(parse('escreve "ceu baixo"\nclareia .4'));

    tick(context, 0);
    expect(context.texto.linhas).toEqual(["ceu baixo"]);
    expect(context.visual.clareia).toBe(0.4);

    tick(context, 1);
    expect(context.texto.linhas).toEqual(["ceu baixo"]);
    expect(context.visual.clareia).toBe(0.4);
  });

  it("configura camada de video e composicao", () => {
    const context = createRuntime(parse('olha youtube "0FBiyFpV__g"\nvideo .8\nceu .5\nmistura .3\nacelera 1.4\ntelas .6'));

    tick(context, 0);

    expect(context.media).toMatchObject({ kind: "youtube", source: "0FBiyFpV__g" });
    expect(context.visual.video).toBe(0.8);
    expect(context.visual.ceu).toBe(0.5);
    expect(context.visual.mistura).toBe(0.3);
    expect(context.visual.acelera).toBe(1.4);
    expect(context.visual.telas).toBe(0.6);
  });

  it("configura stream e acoes de glitch visual", () => {
    const context = createRuntime(parse('olha stream "https://exemplo.local/ao-vivo.webm"\nvideo .9\nlimpido .8\nazula .9\npixeliza .5\nlinhas .4\ncroma .3\nvhs .2\nposteriza .6'));

    tick(context, 0);

    expect(context.media).toMatchObject({ kind: "stream", source: "https://exemplo.local/ao-vivo.webm" });
    expect(context.visual).toMatchObject({
      video: 0.9,
      limpido: 0.8,
      azula: 0.9,
      pixeliza: 0.5,
      linhas: 0.4,
      croma: 0.3,
      vhs: 0.2,
      posteriza: 0.6
    });
  });

  it("configura imagem de mapa e acoes generativas", () => {
    const context = createRuntime(parse('olha mapa "/mapas/fortaleza.png"\nmapa .82\nruas .7\nquadras .45\nrotas .6\ncontorno .35\npontos .5\nfluxo .72'));

    tick(context, 0);

    expect(context.media).toMatchObject({ kind: "map", source: "/mapas/fortaleza.png" });
    expect(context.visual).toMatchObject({
      mapa: 0.82,
      ruas: 0.7,
      quadras: 0.45,
      rotas: 0.6,
      contorno: 0.35,
      pontos: 0.5,
      fluxo: 0.72
    });
  });

  it("mantem entrada e acoes de satelites", () => {
    const context = createRuntime(parse("sente satelites fortaleza\nsatelites .8\norbita .6\npassagem .7"));

    tick(context, 0);

    expect(context.entradas[0]).toMatchObject({ verb: "sente", source: "satelites" });
    expect(context.visual).toMatchObject({
      satelites: 0.8,
      orbita: 0.6,
      passagem: 0.7
    });
    expect(context.sinais).toHaveProperty("satelite.visivel");
  });

  it("mantem sinais e acoes explicitas de paisagem", () => {
    const context = createRuntime(parse("ceu.rosa -> rosa\ncidade .8\nmar .7\ndunas .6\nareia .9\nmontanhas .5"));

    setSignal(context.overrides, "ceu.rosa", 0.4);
    tick(context, 0);

    expect(context.sinais).toHaveProperty("ceu.rosa");
    expect(context.visual).toMatchObject({
      rosa: 0.4,
      cidade: 0.8,
      mar: 0.7,
      dunas: 0.6,
      areia: 0.9,
      montanhas: 0.5
    });
  });
});
