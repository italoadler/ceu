export type DocExample = {
  title: string;
  description: string;
  code: string;
};

export type DocSection = {
  title: string;
  body: string;
  examples: DocExample[];
};

export const docSections: DocSection[] = [
  {
    title: "Cena e camadas",
    body: "Por padrao, ceu renderiza somente o ceu. Paisagem, mapas, satelites, video e texto entram apenas quando comandos da linguagem ativam essas camadas.",
    examples: [
      {
        title: "Ceu azul limpo",
        description: "Base luminosa, sem cidade, mar ou outras camadas.",
        code: `em fortaleza

limpido .95
azula .95
satura .42

ceu.claro -> clareia
ceu.azul -> azula`
      },
      {
        title: "Poente rosa",
        description: "Paleta de nascer/poente com rosa e calor.",
        code: `em fortaleza

sente tempo fortaleza

limpido .78
rosa .9
satura .54
queima .24

ceu.rosa -> rosa
tempo.calor -> queima`
      },
      {
        title: "Ceu minimo para projecao",
        description: "Somente ceu, com shader limpo e composicao sem chao.",
        code: `em fortaleza

limpido 1
azula .82
contrasta .12
quadricula 0

ceu.claro -> clareia`
      }
    ]
  },
  {
    title: "Paisagem",
    body: "Use mar, dunas, areia, montanhas e cidade de forma explicita. Isso evita que o chao apareca quando a composicao pede somente ceu.",
    examples: [
      {
        title: "Litoral e dunas",
        description: "Mar baixo, dunas claras e vento atuando no ceu.",
        code: `em fortaleza

sente tempo fortaleza

limpido .86
azula .74
mar .68
dunas .76
areia .88

tempo.vento -> ondula
ceu.rosa -> rosa`
      },
      {
        title: "Montanhas azuis",
        description: "Silhueta escura com céu limpo.",
        code: `em fortaleza

limpido .82
azula .5
montanhas .82
contrasta .28
escurece .12`
      },
      {
        title: "Cidade em fluxo",
        description: "Silhueta urbana ativada pela linguagem.",
        code: `em fortaleza

sente ar fortaleza

cidade .82
montanhas .28
azula .35

cidade.movimento -> arrasta
ar.pm25 -> granula`
      },
      {
        title: "Imagem de Fortaleza",
        description: "Foto da cidade como camada visual, misturada com ceu e sinais urbanos.",
        code: `em fortaleza

olha imagem "https://upload.wikimedia.org/wikipedia/commons/7/73/Fortaleza%2C_Brazil_%284%29_%28cropped%29.jpg"
sente tempo fortaleza
sente ar fortaleza

imagem .82
ceu .58
mistura .36
cidade .72
azula .46
contrasta .3

cidade.movimento -> arrasta
ar.pm25 -> granula
tempo.vento -> ondula`
      }
    ]
  },
  {
    title: "Mapas",
    body: "Mapas podem ser imagens externas com olha mapa, ou gerados sem API externa com mapa, ruas, quadras, rotas, contorno, pontos e fluxo.",
    examples: [
      {
        title: "Mapa generativo",
        description: "Malha urbana, rotas e pontos animados.",
        code: `em fortaleza

sente tempo fortaleza

mapa .84
ruas .82
quadras .5
rotas .68
contorno .36
pontos .58
fluxo .78

tempo.vento -> fluxo`
      },
      {
        title: "Imagem de mapa",
        description: "Composicao com imagem local ou autorizada.",
        code: `em fortaleza

olha mapa "/mapas/fortaleza.png"

mapa .76
ceu .68
mistura .42
linhas .18`
      },
      {
        title: "Mapa no poente",
        description: "Rotas sobre ceu rosa com contorno urbano discreto.",
        code: `em fortaleza

mapa .72
ruas .7
rotas .62
contorno .28
rosa .58
satura .36

ceu.rosa -> rosa`
      }
    ]
  },
  {
    title: "Satelites",
    body: "sente satelites fortaleza busca TLE publico e calcula azimute/elevacao local. Se a rede falhar, usa fallback simulado.",
    examples: [
      {
        title: "Passagem orbital",
        description: "Rastros e pontos visiveis no ceu.",
        code: `em fortaleza

sente satelites fortaleza

escurece .35
satelites .9
orbita .78
passagem .86

satelite.visivel -> passagem
satelite.altitude -> clareia`
      },
      {
        title: "Satelite e litoral",
        description: "Passagem ativa mar e dunas quando visivel.",
        code: `em fortaleza

sente satelites fortaleza

limpido .9
azula .8
satelites .75
orbita .6

quando satelite.visivel > .5:
  mar .72
  dunas .68
  areia .9
  escreve "satelite sobre fortaleza"`
      }
    ]
  },
  {
    title: "Video e glitch",
    body: "Videos e YouTube entram como camadas composicionais. O engine de glitch e transversal: os mesmos comandos afetam ceu, midia, mapas e satelites.",
    examples: [
      {
        title: "Glitch transversal",
        description: "Falha aplicada a ceu, mapa e satelites no mesmo arquivo.",
        code: `em fortaleza

sente satelites fortaleza

limpido .72
azula .86
mapa .48
ruas .42
satelites .6
orbita .54

falha .42
linhas .24
croma .34
rasga .2
fantasma .28`
      },
      {
        title: "Video com ecos",
        description: "Camada YouTube, ceu e fantasmas temporais.",
        code: `em fortaleza

olha youtube "WzQSJXY7Zfk"

video .72
ceu .64
mistura .42
ecos .45
fantasma .32
desencaixa .28`
      },
      {
        title: "VHS urbano",
        description: "Linhas, croma, pixelizacao e falha.",
        code: `em fortaleza

ouve microfone

limpido .7
azula .55
linhas .34
vhs .32
croma .28
pixeliza .18

microfone.nivel -> falha`
      },
      {
        title: "Mosaico quebrado",
        description: "Grade, quebra e embaralhamento da midia.",
        code: `em fortaleza

olha youtube "TBikbn5XJhg"

video .76
ceu .58
mistura .36
telas .6
mosaico .48
quebra .56
embaralha .28
rasga .22`
      },
      {
        title: "Stream autorizado",
        description: "Entrada HLS direta para uma fonte propria ou autorizada.",
        code: `em fortaleza

olha stream "https://exemplo.local/ao-vivo.m3u8"

video .74
ceu .62
mistura .38
linhas .14
ecos .22`
      }
    ]
  },
  {
    title: "Texto e condicoes",
    body: "quando avalia sinais normalizados e dispara acoes enquanto a condicao estiver verdadeira.",
    examples: [
      {
        title: "Calor",
        description: "Texto e luz dura quando o calor sobe.",
        code: `em fortaleza

sente tempo fortaleza

tempo.calor -> queima

quando tempo.calor > .75:
  escreve "mormaco"
  grave .7
  rosa .3`
      },
      {
        title: "Chuva perto",
        description: "Ceu pesado com linhas discretas.",
        code: `em fortaleza

sente tempo fortaleza

tempo.chuva -> nubla
tempo.umidade -> borra

quando tempo.chuva > .2:
  escreve "chuva perto"
  linhas .16`
      },
      {
        title: "Contato sonoro",
        description: "Pulso de contato ativando glitch e texto.",
        code: `em fortaleza

toca contato "grade"
ouve microfone

limpido .7
azula .5

contato.batida -> pisca
microfone.nivel -> falha

quando contato.batida > .7:
  escreve "pulso urbano"
  eco .45`
      }
    ]
  }
];
