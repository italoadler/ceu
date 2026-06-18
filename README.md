# ceu

**ceu** e uma linguagem artistica experimental para live coding urbano. Ela nasce para compor com sinais de cidade, atmosfera, camera, microfone, contato, clima, ar, texto, som e imagem em tempo real.

O objetivo nao e criar uma linguagem de programacao generica. O objetivo e criar uma DSL reativa, performavel e situada, capaz de funcionar como partitura urbana de sinais.

## Motivacao artistica

A cidade nao entra como cenario decorativo. Ela entra como ambiente sensivel e tecnico: calor, luz, nuvem, ruido, vento, umidade, vibracao, superficie, camera, microfone, stream, pixel, compressao, dado, rede, sensor, corpo e infraestrutura.

**ceu** procura abrir modos de atencao: parar, olhar, escutar, tocar, sentir e programar a partir de um lugar.

## Portugues brasileiro

A linguagem visivel ao artista usa portugues brasileiro. Isso nao e uma traducao superficial de uma API em ingles. E parte da pesquisa: disputar a linguagem computacional como territorio de enunciacao.

Internamente, o runtime pode usar nomes tecnicos em TypeScript quando isso simplificar a engenharia. O codigo `.ceu` deve permanecer em portugues brasileiro.

## Instalar e rodar

```bash
npm install
npm run dev
```

Para rodar os testes do parser:

```bash
npm test
```

## API da linguagem

A referencia completa da DSL esta em [`docs/API.md`](docs/API.md).

## Sintaxe v0.1

```ceu
em fortaleza

olha camera local
ouve microfone
toca contato "grade"
sente tempo fortaleza
sente ar fortaleza
sente satelites fortaleza
olha video "/videos/arquivo.mp4"
olha imagem "/imagens/ceu.jpg"
olha youtube "WzQSJXY7Zfk"
olha stream "https://servidor.exemplo/ao-vivo.webm"
olha mapa "/mapas/fortaleza.png"

manual luz .8
foco ceu
recorte ceu 0 0 1 .55

limpido .85
azula .9
satura .5
mapa .75
ruas .7
rotas .55
fluxo .65
satelites .85
orbita .72
passagem .75
ceu.claro -> clareia
microfone.nivel -> chiado
tempo.calor -> queima
satelite.visivel -> passagem

video .8
ceu .7
mistura .35
fere .4
rasga .5
telas .6
mosaico .4
quebra .6
embaralha .25
ecos .4
fantasma .3
pequena .55
cheia
acelera 1.5
desacelera .5
atrasa .4
adianta .4
some video
aparece video .9

quando tempo.calor > .75:
  escreve "mormaço"
  grave .7
  queima .6
```

## Comandos

Comandos reservados iniciais:

```txt
em
olha
ouve
toca
sente
manual
foco
recorte
quando
```

O operador de fluxo e:

```txt
->
```

## Sinais

Sinais devem ser normalizados para `0..1` sempre que possivel.

```txt
ceu.claro
ceu.nuvem
ceu.movimento
ceu.azul
ceu.rosa
ceu.cinza
ceu.quente

cidade.movimento
cidade.luz
cidade.densidade
cidade.borda

mar.movimento
mar.luz
mar.linha

microfone.nivel
microfone.grave
microfone.medio
microfone.agudo
microfone.pico
microfone.ruido

contato.nivel
contato.batida
contato.textura
contato.grave
contato.agudo
contato.pulso
contato.movimento

tempo.calor
tempo.umidade
tempo.vento
tempo.chuva
tempo.pressao
tempo.nuvem
tempo.radiacao

ar.pm25
ar.pm10
ar.co
ar.no2
ar.o3
ar.indice

satelite.altitude
satelite.azimute
satelite.distancia
satelite.visivel
satelite.proximo
satelite.quantidade

manual.luz
manual.calor
manual.tensao
```

## Acoes

Visual:

```txt
clareia
escurece
nubla
queima
borra
falha
treme
ondula
arrasta
granula
pisca
apaga
rastro
espelha
multiplica
quadricula
entorta
limpido
azula
rosa
satura
contrasta
pixeliza
linhas
croma
vhs
posteriza
mapa
ruas
quadras
rotas
contorno
pontos
fluxo
satelites
orbita
passagem
cidade
mar
dunas
areia
montanhas
video
imagem
ceu
mistura
corta
fere
rasga
atrasa
adianta
acelera
desacelera
ecos
telas
mosaico
quebra
embaralha
desencaixa
fantasma
cheia
pequena
janela
posicao
```

Som:

```txt
chiado
grave
zunido
batida
estouro
sopro
grao
ronco
corte
eco
```

Texto:

```txt
escreve
some
aparece
```

## Exemplos e presets

Os exemplos estao em `src/examples` e tambem aparecem no seletor da interface. O botao `docs`
abre uma documentacao online com exemplos clicaveis, que carregam direto no editor e executam a cena.

Exemplos base:

```txt
fortaleza.ceu
ceu-camera.ceu
contato-grade.ceu
cidade.ceu
litoral-fortaleza.ceu
mapa-generativo.ceu
satelites-fortaleza.ceu
youtube-experimental.ceu
```

Presets de composicao:

```txt
preset-ceu-azul.ceu
preset-ceu-rosa-poente.ceu
preset-litoral-dunas.ceu
preset-montanhas-noturnas.ceu
preset-cidade-horizonte.ceu
preset-cidade-imagem.ceu
preset-mapa-rotas.ceu
preset-satelites-noite.ceu
preset-video-ecos.ceu
preset-glitch-vhs.ceu
preset-mosaico-quebra.ceu
preset-clima-chuva.ceu
preset-minimal.ceu
```

`youtube-experimental.ceu` e apenas um exemplo experimental. O MVP nao depende de YouTube, nao burla protecoes tecnicas e nao acessa fontes nao autorizadas.

## Engine de glitch

Os comandos de glitch nao pertencem mais apenas a video ou a um preset especifico. Eles alimentam um
estado visual comum, aplicado ao ceu, imagens, mapas, satelites e videos:

```ceu
falha .42
vhs .3
linhas .24
croma .36
rasga .28
mosaico .44
fantasma .32
pixeliza .18
```

Esse engine escolhe modos como `digital`, `vhs`, `rasgo`, `mosaico` e `fantasma` a partir dos comandos
ativos. Assim qualquer arquivo `.ceu` pode acionar uma estetica de falha sem depender de um preset fechado.

## Deploy no GitHub Pages

O projeto esta preparado para deploy via GitHub Actions. Ao publicar no branch `main`, o workflow
`.github/workflows/deploy-pages.yml` roda testes, gera `dist` e publica no GitHub Pages.

No GitHub, habilite:

```txt
Settings -> Pages -> Source -> GitHub Actions
```

Para repositorios de projeto, o Vite usa automaticamente base `/<nome-do-repo>/`. Para repositorios
do tipo `usuario.github.io`, usa base `/`.

## Arquitetura

Camadas implementadas:

```txt
src/
  language/
    ast.ts
    catalog.ts
    errors.ts
    tokenize.ts
    parser.ts
    parser.test.ts
  runtime/
    actions.ts
    context.ts
    interpreter.ts
    interpreter.test.ts
    scheduler.ts
    signals.ts
  examples/
    fortaleza.ceu
    ceu-camera.ceu
    contato-grade.ceu
    cidade.ceu
    litoral-fortaleza.ceu
    mapa-generativo.ceu
    satelites-fortaleza.ceu
    youtube-experimental.ceu
    preset-*.ceu
  inputs/
    satellites.ts
    weather.ts
  visual/
    glitchEngine.ts
    mapLayer.ts
    satelliteLayer.ts
    skyShader.ts
```

Proximas camadas previstas:

```txt
runtime/
inputs/
vision/
audio/
visual/
text/
  ui/
```

## Seguranca de dados

**ceu** deve usar apenas fontes locais, proprias, publicas, autorizadas ou simuladas.

Permitido:

- camera local via navegador, com permissao do usuario;
- microfone local via navegador, com permissao do usuario;
- video local;
- sensores proprios;
- dados manuais;
- APIs publicas;
- streams publicos quando o uso for permitido.

Nao e objetivo do projeto burlar login, acessar camera privada, quebrar DRM, contornar protecao de stream, violar CORS indevidamente ou depender de acesso nao autorizado.

## Video, imagem, mapa, stream e YouTube

`ceu` trata video, imagem, mapas e streams diretos/autorizados como camadas composicionais sobre o shader:

```ceu
olha video "/videos/arquivo.mp4"
olha imagem "/imagens/ceu.jpg"
olha mapa "/mapas/fortaleza.png"
olha stream "https://servidor.exemplo/ao-vivo.webm"
limpido .85
azula .9
mapa .75
ruas .7
rotas .55
fluxo .65
video .8
ceu .6
mistura .35
telas .5
ecos .4
rasga .3
pixeliza .25
linhas .35
croma .4
acelera 1.4
```

Tambem ha suporte experimental a YouTube publico via embed:

```ceu
olha youtube "WzQSJXY7Zfk"
video .7
ceu .8
```

Para YouTube, o runtime usa iframe embed publico/autorizado. Ele nao tenta capturar pixels, quebrar CORS, contornar DRM ou transformar YouTube em textura WebGL. Analise de pixels e textura ficam para camera local, video local, URLs proprias ou fontes com permissao tecnica adequada.

Para stream, use `olha stream "url"` com uma URL propria, publica ou autorizada que o navegador consiga reproduzir diretamente. O runtime nao contorna CORS, login, DRM ou protecoes de plataforma.

Para mapa, use `olha mapa "url"` com imagem local/propria/autorizada, ou use `mapa`, `ruas`, `quadras`, `rotas`, `contorno`, `pontos` e `fluxo` para gerar uma camada cartografica sem depender de API externa.

Por padrao, a cena renderiza somente o ceu. Paisagem e camadas entram por comando: `mar`, `dunas`, `areia`, `montanhas`, `cidade`, `mapa`, `satelites`, `video` e `imagem`.

Alguns comandos dependem do tipo de fonte:

- `acelera`, `desacelera`, `atrasa` e `adianta` controlam tempo em video local/URL direta.
- Em YouTube embed, esses comandos nao controlam o player interno; continuam funcionando os comandos composicionais de camada como `video`, `ceu`, `mistura`, `telas`, `ecos`, `rasga`, `fere`, `fantasma` e `desencaixa`.

## Satelites sobre Fortaleza

```ceu
em fortaleza

sente satelites fortaleza

satelites .85
orbita .72
passagem .75

satelite.visivel -> passagem
satelite.altitude -> clareia
```

`sente satelites fortaleza` usa TLEs publicos da CelesTrak e calcula azimute/elevacao local no navegador. Se a fonte estiver indisponivel, a camada visual usa fallback simulado para a performance continuar.

## Limites atuais

Esta fase cria a base da linguagem e um runtime minimo:

- AST TypeScript;
- tokenizer por linha;
- parser manual sensivel a indentacao simples;
- erros com linha;
- exemplos `.ceu`;
- testes do parser;
- contexto reativo;
- sinais simulados em `0..1`;
- interpretacao de mapeamentos `sinal -> acao`;
- avaliacao de blocos `quando`;
- estados transitórios de visual, audio e texto.

Ainda nao ha UI performativa completa, camera, microfone real, Web Audio, Canvas ou analise de pixels.

## Proximos passos

1. Criar UI com editor, seletor de exemplos, painel visual, painel textual, sinais e log.
2. Implementar acoes visuais simples em Canvas 2D.
3. Implementar acoes textuais na UI.
4. Adicionar Web Audio para acoes sonoras simples.
5. Implementar camera local opcional com fallback simulado.
6. Implementar microfone local opcional com fallback simulado.
