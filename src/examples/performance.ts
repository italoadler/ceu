export type PerformanceStep = {
  code: string;
  holdMs: number;
};

export const performanceSteps: PerformanceStep[] = [
  {
    code: `em fortaleza

sente tempo fortaleza
sente satelites fortaleza

foco ceu
recorte ceu 0 0 1 .58

ceu.claro -> clareia
tempo.umidade -> nubla
tempo.vento -> ondula
satelites .58
orbita .48
satelite.visivel -> passagem
`,
    holdMs: 1600
  },
  {
    code: `em fortaleza

sente tempo fortaleza
manual calor .72
manual tensao .35

foco ceu
recorte ceu 0 0 1 .58

ceu.claro -> clareia
tempo.umidade -> nubla
tempo.vento -> ondula
manual.calor -> queima
manual.tensao -> granula

quando tempo.chuva > .2:
  escreve "chuva perto"
  nubla .8
`,
    holdMs: 1800
  },
  {
    code: `em fortaleza

olha youtube "WzQSJXY7Zfk"
olha camera local
ouve microfone
toca contato "grade"
sente tempo fortaleza

manual luz .62
manual calor .78
manual tensao .48

foco ceu
recorte ceu 0 0 1 .58
recorte cidade 0 .58 1 .42

ceu.claro -> clareia
ceu.nuvem -> nubla
ceu.movimento -> ondula
manual.calor -> queima
manual.tensao -> granula

microfone.nivel -> falha
contato.batida -> pisca
contato.textura -> entorta
tempo.vento -> arrasta
video .58
ceu .82
mistura .28
ecos .22
fantasma .18

quando manual.calor > .7:
  escreve "mormaço"
  grave .7
  queima .62
`,
    holdMs: 2200
  },
  {
    code: `em fortaleza

olha camera local
ouve microfone
toca contato "grade"
sente tempo fortaleza
sente ar fortaleza

manual luz .82
manual calor .66
manual tensao .72

foco cidade
recorte ceu 0 0 1 .55
recorte cidade 0 .55 1 .45

mapa .58
ruas .72
quadras .42
rotas .5
contorno .28
pontos .38
fluxo .62

manual.luz -> clareia
tempo.umidade -> nubla
tempo.vento -> arrasta
tempo.vento -> fluxo
microfone.nivel -> falha
contato.textura -> granula
ar.pm25 -> apaga

quadricula .22
multiplica .18
rastro .4
mosaico .32
quebra .45
embaralha .18
rasga .22
desencaixa .18
acelera 1.4

quando contato.batida > .72:
  escreve "a cidade vibra"
  pisca .95
  estouro .8

quando manual.tensao > .65:
  escreve "rede quente"
  entorta .5
  chiado .6
`,
    holdMs: 2600
  }
];
