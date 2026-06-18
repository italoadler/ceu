# API da linguagem ceu

Esta pagina descreve a superficie publica da DSL `.ceu`. Os nomes abaixo sao a linguagem visivel da performance; nomes internos em TypeScript nao fazem parte da API artistica.

## Forma geral

```ceu
em fortaleza

olha camera local
ouve microfone
sente tempo fortaleza

foco ceu
recorte ceu 0 0 1 .55

ceu.claro -> clareia
tempo.vento -> arrasta

quando tempo.calor > .75:
  escreve "mormaço"
  queima .6
```

Comentarios começam com `#`.

```ceu
# isto e um comentario
```

Numeros aceitam `0.75`, `.75`, `1`. Sinais ficam em `0..1` sempre que possivel.

## Comandos estruturais

```txt
em lugar
foco alvo
recorte nome x y largura altura
manual nome valor
quando sinal operador valor:
```

Operadores:

```txt
> < >= <= == !=
```

Mapeamento continuo:

```ceu
sinal -> acao
```

## Entradas

Camera local:

```ceu
olha camera local
```

YouTube publico/autorizado via embed:

```ceu
olha youtube "WzQSJXY7Zfk"
olha video "https://www.youtube.com/watch?v=WzQSJXY7Zfk"
```

Video, imagem, mapa e stream direto de fontes proprias/autorizadas:

```ceu
olha video "/videos/arquivo.mp4"
olha imagem "/imagens/ceu.jpg"
olha mapa "/mapas/fortaleza.png"
olha stream "https://servidor.exemplo/ao-vivo.webm"
```

Audio:

```ceu
ouve microfone
toca contato
toca contato "grade"
```

Tempo e ar:

```ceu
sente tempo fortaleza
sente ar fortaleza
sente satelites fortaleza
```

## Sinais

Ceu:

```txt
ceu.claro      brilho/exposicao percebida do ceu
ceu.nuvem      presença de nuvens
ceu.movimento  movimento entre frames ou simulacao
ceu.azul       presença de azul
ceu.rosa       luz rosa/magenta de nascer e poente
ceu.cinza      baixa saturacao/cinza
ceu.quente     tons quentes
```

Cidade:

```txt
cidade.movimento
cidade.luz
cidade.densidade
cidade.borda
```

Mar:

```txt
mar.movimento
mar.luz
mar.linha
```

Microfone:

```txt
microfone.nivel
microfone.grave
microfone.medio
microfone.agudo
microfone.pico
microfone.ruido
```

Contato:

```txt
contato.nivel
contato.batida
contato.textura
contato.grave
contato.agudo
contato.pulso
contato.movimento
```

Tempo:

```txt
tempo.calor
tempo.umidade
tempo.vento
tempo.chuva
tempo.pressao
tempo.nuvem
tempo.radiacao
```

Ar:

```txt
ar.pm25
ar.pm10
ar.co
ar.no2
ar.o3
ar.indice
```

Satelite:

```txt
satelite.altitude    elevacao aparente no ceu, normalizada
satelite.azimute     direcao no horizonte, 0..1
satelite.distancia   proximidade relativa
satelite.visivel     1 quando ha satelite acima do horizonte util
satelite.proximo     intensidade de uma passagem proxima
satelite.quantidade  quantidade relativa de satelites visiveis/proximos
```

Manual:

```ceu
manual luz .8
manual calor .6
manual tensao .3
```

Gera:

```txt
manual.luz
manual.calor
manual.tensao
```

## Acoes de ceu e imagem

```txt
clareia      aumenta luminosidade/exposicao
escurece     reduz luminosidade
nubla        aumenta nuvens/nevoa
queima       luz dura/glare/calor visual
borra        suaviza/dessatura parcialmente
falha        glitch
treme        deslocamento vibratorio
ondula       deslocamento ondulatorio
arrasta      movimento lateral/vento
granula      ruido granular
pisca        flash ritmico
apaga        fade out
rastro       persistencia cromatica
espelha      inverte horizontalmente
multiplica   repeticao visual
quadricula   grade/matriz
entorta      distorcao
limpido      ceu mais claro, nitido e menos pesado
azula        reforca azul vivo do ceu
rosa         reforca tons rosas de nascer/poente
satura       aumenta saturacao
contrasta    aumenta contraste
pixeliza     blocos/pixels aparentes
linhas       linhas de varredura
croma        separacao cromatica RGB
vhs          instabilidade analogica
posteriza    reduz niveis de cor
satelites    mostra camada de satelites no ceu
orbita       mostra trajetorias orbitais aparentes
passagem     destaca passagens acima de Fortaleza
cidade       mostra silhueta urbana
mar          mostra faixa de mar
dunas        mostra dunas/areia no horizonte baixo
areia        controla o dourado/claro das dunas
montanhas    mostra montanhas em azul escuro
```

Semantica esperada do shader de ceu:

- `ceu.claro` alto + `ceu.azul` alto: ceu azul vivo, limpo, luminoso.
- `ceu.rosa` alto: faixa rosa/magenta no nascer ou poente.
- `ceu.nuvem` alto + `ceu.cinza` baixo: nuvens brancas densas, tipo cumulus/algodao.
- `ceu.cinza` alto ou `tempo.chuva` alto: ceu cinza, pesado, menos saturado.
- `tempo.umidade` alto: haze/nevoa suave.
- `tempo.calor` alto ou `queima`: luz dura e brilho, sem necessariamente pintar o ceu de laranja.

Por padrao, o shader renderiza somente o ceu. Mar, dunas, cidade, montanhas, mapa, satelites, video e imagem aparecem apenas quando comandos da linguagem ativam essas camadas.

## Acoes de video e imagem

Camada:

```txt
video        opacidade da camada de video/YouTube
imagem       opacidade da camada de imagem
ceu          opacidade do shader de ceu
mistura      blend entre midia e ceu
corta        corta/apaga o ceu
```

Manipulacao poetica:

```txt
fere         contraste, saturacao e agressividade da midia
rasga        rasgo/deslocamento inclinado
atrasa       recua tempo em video local/URL direta
adianta      avanca tempo em video local/URL direta
acelera      aumenta velocidade em video local/URL direta
desacelera   reduz velocidade em video local/URL direta
ecos         clones/transparencias temporais
telas        matriz com varias telas
mosaico      matriz repetida com separacao grafica
quebra       quebra-cabeca com recortes da mesma fonte
embaralha    desloca pecas da matriz/quebra-cabeca
desencaixa   deslocamento entre ecos/camadas
fantasma     persistencia fantasmada
cheia        video/imagem em tela cheia
pequena      reduz video/imagem para janela
janela       coloca video/imagem em modo janela
posicao      desloca janela em eixo diagonal simples
pixeliza     pixeliza video/imagem/stream
linhas       aplica linhas de varredura sobre midia
croma        separa canais de cor da midia
vhs          aplica ruido analogico, linhas e deslocamento
posteriza    aumenta contraste e reduz leitura tonal
```

Exemplo:

```ceu
olha youtube "WzQSJXY7Zfk"

limpido .85
azula .9
satura .5
video .8
ceu .55
mistura .4
pequena .55
posicao .72
telas .5
mosaico .4
quebra .6
embaralha .25
ecos .35
rasga .25
fantasma .3
linhas .25
croma .35
pixeliza .2
```

Observacao: YouTube entra como iframe embed publico/autorizado. `acelera`, `desacelera`, `atrasa` e `adianta` controlam video local/URL direta; nao controlam o player interno do YouTube sem a API oficial.

Streams entram por `olha stream "url"` quando a URL e propria, publica ou autorizada e o navegador consegue reproduzir o formato diretamente. O runtime nao burla CORS, login, DRM ou protecoes de plataforma.

## Acoes de mapa

Mapas podem entrar como imagem externa ou como camada generativa sem fonte externa:

```ceu
olha mapa "/mapas/fortaleza.png"

mapa .8
ruas .7
quadras .45
rotas .6
contorno .35
pontos .5
fluxo .7
```

```txt
mapa       opacidade da camada generativa e de imagens de mapa
ruas       malha de ruas e vias
quadras    blocos, lotes e massa urbana
rotas      trajetos destacados
contorno   linhas topograficas/curvas de nivel
pontos     pontos de interesse ou presencas
fluxo      movimento animado pelas rotas
```

`olha mapa` aceita arquivos locais ou URLs proprias/autorizadas. `mapa`, `ruas`, `quadras`, `rotas`, `contorno`, `pontos` e `fluxo` funcionam sem API externa.

## Acoes de satelites

```ceu
em fortaleza

sente satelites fortaleza

satelites .85
orbita .72
passagem .75

satelite.altitude -> clareia
satelite.visivel -> passagem
satelite.quantidade -> pontos
```

```txt
satelites   opacidade da camada de satelites
orbita      linhas de trajetoria aparente no ceu
passagem    brilho e destaque dos objetos acima do horizonte
```

`sente satelites fortaleza` busca TLEs publicos da CelesTrak, calcula azimute/elevacao local para Fortaleza no navegador e atualiza os sinais `satelite.*`. Se a rede ou a fonte estiver indisponivel, o runtime usa uma simulacao visual para manter a performance funcionando.

## Acoes sonoras

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

## Acoes textuais

```txt
escreve "texto"
some
aparece
```

Tambem podem atuar sobre camadas:

```ceu
some video
aparece video .9
```

## Documentacao online e presets

A interface inclui um painel `docs` com exemplos clicaveis. Cada exemplo carrega o codigo no
editor e executa a cena, funcionando como uma documentacao viva da linguagem.

O seletor de exemplos tambem traz presets que combinam os recursos graficos principais:

```txt
preset/ceu-azul.ceu
preset/ceu-rosa-poente.ceu
preset/litoral-dunas.ceu
preset/montanhas-noturnas.ceu
preset/cidade-horizonte.ceu
preset/cidade-imagem.ceu
preset/mapa-rotas.ceu
preset/satelites-noite.ceu
preset/video-ecos.ceu
preset/glitch-vhs.ceu
preset/mosaico-quebra.ceu
preset/clima-chuva.ceu
preset/minimal.ceu
```

## Engine de glitch transversal

Os comandos abaixo alimentam um unico estado de glitch usado por ceu, midia, mapa e satelites:

```ceu
falha .45
vhs .28
linhas .24
croma .36
rasga .22
mosaico .42
quebra .38
embaralha .24
ecos .34
fantasma .3
pixeliza .18
granula .32
```

O engine resolve um modo visual dominante: `digital`, `vhs`, `rasgo`, `mosaico` ou `fantasma`.
Isso permite que o mesmo arquivo `.ceu` trabalhe glitch sobre ceu limpo, video, imagem, mapa
generativo ou rastros de satelite.

## Exemplos curtos

Ceu claro com nuvem branca:

```ceu
em fortaleza

manual luz .9
manual tensao .1

manual.luz -> clareia
ceu.nuvem -> nubla
quadricula 0

quando ceu.claro > .65:
  escreve "ceu aberto"
```

Video sobre ceu:

```ceu
em fortaleza

olha youtube "WzQSJXY7Zfk"
sente tempo fortaleza

video .75
ceu .65
mistura .3
tempo.vento -> arrasta
```

Contato urbano:

```ceu
em fortaleza

toca contato "grade"

contato.batida -> pisca
contato.textura -> granula

quando contato.batida > .75:
  escreve "a cidade vibra"
  rasga .4
```

Mapa generativo:

```ceu
em fortaleza

sente tempo fortaleza
sente ar fortaleza

limpido .85
azula .9
mapa .82
ruas .78
quadras .52
rotas .65
contorno .34
pontos .58
fluxo .72

tempo.vento -> fluxo
ar.pm25 -> pontos
```

Satelites sobre Fortaleza:

```ceu
em fortaleza

sente satelites fortaleza

limpido .9
azula .95
satelites .85
orbita .72
passagem .75

satelite.visivel -> passagem
satelite.altitude -> clareia

quando satelite.visivel > .5:
  escreve "satelite sobre fortaleza"
```
