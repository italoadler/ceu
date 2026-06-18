(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const zl=[{title:"Cena e camadas",body:"Por padrao, ceu renderiza somente o ceu. Paisagem, mapas, satelites, video e texto entram apenas quando comandos da linguagem ativam essas camadas.",examples:[{title:"Ceu azul limpo",description:"Base luminosa, sem cidade, mar ou outras camadas.",code:`em fortaleza

limpido .95
azula .95
satura .42

ceu.claro -> clareia
ceu.azul -> azula`},{title:"Poente rosa",description:"Paleta de nascer/poente com rosa e calor.",code:`em fortaleza

sente tempo fortaleza

limpido .78
rosa .9
satura .54
queima .24

ceu.rosa -> rosa
tempo.calor -> queima`},{title:"Ceu minimo para projecao",description:"Somente ceu, com shader limpo e composicao sem chao.",code:`em fortaleza

limpido 1
azula .82
contrasta .12
quadricula 0

ceu.claro -> clareia`}]},{title:"Paisagem",body:"Use mar, dunas, areia, montanhas e cidade de forma explicita. Isso evita que o chao apareca quando a composicao pede somente ceu.",examples:[{title:"Litoral e dunas",description:"Mar baixo, dunas claras e vento atuando no ceu.",code:`em fortaleza

sente tempo fortaleza

limpido .86
azula .74
mar .68
dunas .76
areia .88

tempo.vento -> ondula
ceu.rosa -> rosa`},{title:"Montanhas azuis",description:"Silhueta escura com céu limpo.",code:`em fortaleza

limpido .82
azula .5
montanhas .82
contrasta .28
escurece .12`},{title:"Cidade em fluxo",description:"Silhueta urbana ativada pela linguagem.",code:`em fortaleza

sente ar fortaleza

cidade .82
montanhas .28
azula .35

cidade.movimento -> arrasta
ar.pm25 -> granula`},{title:"Imagem de Fortaleza",description:"Foto da cidade como camada visual, misturada com ceu e sinais urbanos.",code:`em fortaleza

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
tempo.vento -> ondula`}]},{title:"Mapas",body:"Mapas podem ser imagens externas com olha mapa, ou gerados sem API externa com mapa, ruas, quadras, rotas, contorno, pontos e fluxo.",examples:[{title:"Mapa generativo",description:"Malha urbana, rotas e pontos animados.",code:`em fortaleza

sente tempo fortaleza

mapa .84
ruas .82
quadras .5
rotas .68
contorno .36
pontos .58
fluxo .78

tempo.vento -> fluxo`},{title:"Imagem de mapa",description:"Composicao com imagem local ou autorizada.",code:`em fortaleza

olha mapa "/mapas/fortaleza.png"

mapa .76
ceu .68
mistura .42
linhas .18`},{title:"Mapa no poente",description:"Rotas sobre ceu rosa com contorno urbano discreto.",code:`em fortaleza

mapa .72
ruas .7
rotas .62
contorno .28
rosa .58
satura .36

ceu.rosa -> rosa`}]},{title:"Satelites",body:"sente satelites fortaleza busca TLE publico e calcula azimute/elevacao local. Se a rede falhar, usa fallback simulado.",examples:[{title:"Passagem orbital",description:"Rastros e pontos visiveis no ceu.",code:`em fortaleza

sente satelites fortaleza

escurece .35
satelites .9
orbita .78
passagem .86

satelite.visivel -> passagem
satelite.altitude -> clareia`},{title:"Satelite e litoral",description:"Passagem ativa mar e dunas quando visivel.",code:`em fortaleza

sente satelites fortaleza

limpido .9
azula .8
satelites .75
orbita .6

quando satelite.visivel > .5:
  mar .72
  dunas .68
  areia .9
  escreve "satelite sobre fortaleza"`}]},{title:"Video e glitch",body:"Videos e YouTube entram como camadas composicionais. O engine de glitch e transversal: os mesmos comandos afetam ceu, midia, mapas e satelites.",examples:[{title:"Glitch transversal",description:"Falha aplicada a ceu, mapa e satelites no mesmo arquivo.",code:`em fortaleza

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
fantasma .28`},{title:"Video com ecos",description:"Camada YouTube, ceu e fantasmas temporais.",code:`em fortaleza

olha youtube "WzQSJXY7Zfk"

video .72
ceu .64
mistura .42
ecos .45
fantasma .32
desencaixa .28`},{title:"VHS urbano",description:"Linhas, croma, pixelizacao e falha.",code:`em fortaleza

ouve microfone

limpido .7
azula .55
linhas .34
vhs .32
croma .28
pixeliza .18

microfone.nivel -> falha`},{title:"Mosaico quebrado",description:"Grade, quebra e embaralhamento da midia.",code:`em fortaleza

olha youtube "TBikbn5XJhg"

video .76
ceu .58
mistura .36
telas .6
mosaico .48
quebra .56
embaralha .28
rasga .22`},{title:"Stream autorizado",description:"Entrada HLS direta para uma fonte propria ou autorizada.",code:`em fortaleza

olha stream "https://exemplo.local/ao-vivo.m3u8"

video .74
ceu .62
mistura .38
linhas .14
ecos .22`}]},{title:"Texto e condicoes",body:"quando avalia sinais normalizados e dispara acoes enquanto a condicao estiver verdadeira.",examples:[{title:"Calor",description:"Texto e luz dura quando o calor sobe.",code:`em fortaleza

sente tempo fortaleza

tempo.calor -> queima

quando tempo.calor > .75:
  escreve "mormaco"
  grave .7
  rosa .3`},{title:"Chuva perto",description:"Ceu pesado com linhas discretas.",code:`em fortaleza

sente tempo fortaleza

tempo.chuva -> nubla
tempo.umidade -> borra

quando tempo.chuva > .2:
  escreve "chuva perto"
  linhas .16`},{title:"Contato sonoro",description:"Pulso de contato ativando glitch e texto.",code:`em fortaleza

toca contato "grade"
ouve microfone

limpido .7
azula .5

contato.batida -> pisca
microfone.nivel -> falha

quando contato.batida > .7:
  escreve "pulso urbano"
  eco .45`}]}],vu=`em fortaleza

olha camera local

foco ceu
recorte ceu 0 0 1 .6

ceu.claro -> clareia
ceu.nuvem -> nubla
ceu.azul -> azula
ceu.rosa -> rosa
ceu.movimento -> rastro

quando ceu.nuvem > .6:
  escreve "céu baixo"
  nubla .8
`,_u=`em fortaleza

olha camera local
ouve microfone
sente ar fortaleza

foco cidade
recorte cidade 0 .45 1 .55

cidade .82
montanhas .28
azula .32

cidade.movimento -> arrasta
cidade.luz -> clareia
cidade.densidade -> multiplica

microfone.nivel -> falha
ar.pm25 -> apaga

quando cidade.movimento > .7:
  escreve "cidade em fluxo"
  treme .5
`,xu=`em fortaleza

toca contato "grade"
ouve microfone

contato.batida -> estouro
contato.textura -> granula
contato.nivel -> treme

microfone.ruido -> chiado

quando contato.batida > .75:
  escreve "a cidade vibra"
  pisca .9
  grave .8
`,Mu=`em fortaleza

olha camera local
ouve microfone
sente tempo fortaleza

foco ceu
recorte ceu 0 0 1 .55

limpido .85
azula .8
satura .45

ceu.claro -> clareia
ceu.nuvem -> nubla
ceu.movimento -> ondula

microfone.nivel -> chiado
tempo.calor -> queima
tempo.vento -> arrasta
tempo.umidade -> linhas

quando tempo.calor > .75:
  escreve "mormaço"
  grave .7
  queima .6
`,Su=`em fortaleza\r
\r
sente tempo fortaleza\r
sente satelites fortaleza\r
\r
limpido .9\r
azula .95\r
satura .48\r
\r
satelites .85\r
orbita .72\r
passagem .75\r
rastro .34\r
\r
satelite.altitude -> clareia\r
satelite.visivel -> passagem\r
satelite.quantidade -> pontos\r
satelite.proximo -> croma

quando satelite.visivel > .5:
  escreve "satelite sobre fortaleza"
  mar .72
  dunas .68
  areia .9
  montanhas .45
  linhas .18
  croma .24

quando tempo.umidade > .6:
  escreve "ar maritimo"
  azula .35
  rosa .18
  linhas .12
`,yu=`em fortaleza

sente tempo fortaleza
sente ar fortaleza

limpido .85
azula .9
ceu .76
mapa .82
ruas .78
quadras .52
rotas .65
contorno .34
pontos .58
fluxo .72
mistura .42

tempo.vento -> fluxo
cidade.movimento -> rotas
ar.pm25 -> pontos

quando tempo.calor > .7:
  escreve "cidade quente"
  croma .35
  linhas .28

`,ys=[{code:`em fortaleza

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
`,holdMs:1600},{code:`em fortaleza

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
`,holdMs:1800},{code:`em fortaleza

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
`,holdMs:2200},{code:`em fortaleza

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
`,holdMs:2600}],Eu=`em fortaleza

sente tempo fortaleza

limpido .95
azula .95
satura .42
contrasta .16

ceu.claro -> clareia
ceu.azul -> azula
tempo.vento -> ondula

`,bu=`em fortaleza

sente tempo fortaleza

limpido .78
rosa .9
satura .54
queima .24

ceu.rosa -> rosa
ceu.claro -> clareia
tempo.calor -> queima

quando tempo.umidade > .62:
  nubla .35
  linhas .12

`,Tu=`em fortaleza

sente tempo fortaleza
sente ar fortaleza

cidade .82
montanhas .28
azula .35
contrasta .24

cidade.luz -> clareia
cidade.movimento -> arrasta
ar.pm25 -> granula

quando cidade.movimento > .62:
  escreve "cidade em fluxo"
  rastro .32

`,Au=`em fortaleza

olha imagem "https://upload.wikimedia.org/wikipedia/commons/7/73/Fortaleza%2C_Brazil_%284%29_%28cropped%29.jpg"
sente tempo fortaleza
sente ar fortaleza

imagem .82
ceu .58
mistura .36
cidade .72
mapa .32
ruas .42
rotas .28

azula .46
contrasta .3
satura .28
linhas .12

cidade.luz -> clareia
cidade.movimento -> arrasta
ar.pm25 -> granula
tempo.vento -> ondula

quando cidade.movimento > .6:
  escreve "fortaleza em fluxo"
  rastro .28

`,wu=`em fortaleza

sente tempo fortaleza

nubla .45
escurece .18
linhas .16
mar .42
azula .28

tempo.chuva -> nubla
tempo.umidade -> borra
tempo.vento -> ondula

quando tempo.chuva > .2:
  escreve "chuva perto"
  croma .18

`,Cu=`em fortaleza

ouve microfone
sente tempo fortaleza

limpido .7
azula .55
linhas .34
vhs .32
croma .28
pixeliza .18
posteriza .16

microfone.nivel -> falha
tempo.vento -> arrasta
ceu.movimento -> rastro

`,Ru=`em fortaleza

sente tempo fortaleza

limpido .86
azula .74
mar .68
dunas .76
areia .88

tempo.vento -> ondula
tempo.calor -> queima
ceu.rosa -> rosa

quando tempo.umidade > .55:
  escreve "ar salgado"
  linhas .12

`,Pu=`em fortaleza

sente tempo fortaleza
sente ar fortaleza

mapa .84
ruas .82
quadras .5
rotas .68
contorno .36
pontos .58
fluxo .78
azula .42

tempo.vento -> fluxo
ar.pm25 -> pontos

`,Lu=`em fortaleza

limpido .92
azula .6

ceu.claro -> clareia
ceu.rosa -> rosa

`,Du=`em fortaleza

sente satelites fortaleza

escurece .28
montanhas .82
satelites .75
orbita .62
passagem .7
contrasta .28

satelite.visivel -> passagem
satelite.altitude -> clareia
satelite.proximo -> croma

`,Uu=`em fortaleza

olha youtube "TBikbn5XJhg"

video .76
ceu .58
mistura .36
telas .6
mosaico .48
quebra .56
embaralha .28
rasga .22

`,Iu=`em fortaleza

sente satelites fortaleza

escurece .35
limpido .72
satelites .9
orbita .78
passagem .86
rastro .28

satelite.visivel -> passagem
satelite.altitude -> clareia
satelite.quantidade -> pontos

quando satelite.visivel > .5:
  escreve "passagem orbital"

`,Nu=`em fortaleza

olha youtube "WzQSJXY7Zfk"
sente tempo fortaleza

video .72
ceu .64
mistura .42
ecos .45
fantasma .32
desencaixa .28
azula .6

tempo.vento -> arrasta
ceu.rosa -> rosa

`,Fu=`em fortaleza

sente tempo fortaleza
sente satelites fortaleza

limpido .9
azula .95
satura .48

satelites .85
orbita .72
passagem .75
rastro .34

satelite.altitude -> clareia
satelite.visivel -> passagem
satelite.quantidade -> pontos
satelite.proximo -> croma

quando satelite.visivel > .5:
  escreve "satelite sobre fortaleza"
  linhas .18
  croma .24

`,zu=`# Exemplo experimental. O MVP nao depende de YouTube ou streams externos.
# IDs verificados via oEmbed do YouTube em 2026-06-17:
# WzQSJXY7Zfk  The Royal Institution — What Does Earth Look Like From Space?
# 21X5lGlDOfg  NASA — NASA Live: Official Stream of NASA TV
# TBikbn5XJhg  melodysheep — TIMELAPSE OF THE ENTIRE UNIVERSE
em fortaleza

olha youtube "WzQSJXY7Zfk"
ouve microfone
sente tempo fortaleza

foco ceu
recorte ceu 0 0 1 .55

limpido .85
azula .9
satura .55

ceu.claro -> clareia
ceu.nuvem -> nubla
ceu.movimento -> ondula
microfone.nivel -> falha
microfone.nivel -> croma

video .72
ceu .78
mistura .25
linhas .25
pixeliza .18
posteriza .16

quando ceu.claro > .8:
  escreve "luz dura"
  queima .7
`;var Mn=Math.PI,Mt=Mn*2,Bi=Mn/180,Ou=1440,Bu=398600.8,Kt=6378.135,In=60/Math.sqrt(Kt*Kt*Kt/Bu),_r=Kt*In/60,Gu=1/In,mi=.001082616,Vu=-253881e-11,ku=-165597e-11,gi=Vu/mi,ma=2/3;function Hu(t,e){for(var n=[31,t%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),a=1,r=0;i>r+n[a-1]&&a<12;)r+=n[a-1],a+=1;var o=a,s=i-r,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var d=Math.floor(l),f=(l-d)*60;return{mon:o,day:s,hr:c,minute:d,sec:f}}function Es(t,e,n,i,a,r){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*t-Math.floor(7*(t+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+n+17210135e-1+((o/6e4+r/60+a)/60+i)/24}function Zo(t,e,n,i,a,r,o){if(t instanceof Date){var s=t;return Es(s.getUTCFullYear(),s.getUTCMonth()+1,s.getUTCDate(),s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds())}return Es(t,e,n,i,a,r,o)}function Ol(t,e){var n=t.e3,i=t.ee2,a=t.peo,r=t.pgho,o=t.pho,s=t.pinco,l=t.plo,c=t.se2,d=t.se3,f=t.sgh2,u=t.sgh3,m=t.sgh4,_=t.sh2,E=t.sh3,p=t.si2,h=t.si3,S=t.sl2,A=t.sl3,b=t.sl4,R=t.t,y=t.xgh2,P=t.xgh3,v=t.xgh4,T=t.xh2,U=t.xh3,w=t.xi2,I=t.xi3,X=t.xl2,q=t.xl3,D=t.xl4,z=t.zmol,O=t.zmos,Z=e.init,J=e.opsmode,ce=e.ep,me=e.inclp,ue=e.nodep,ke=e.argpp,Xe=e.mp,oe,V,re,Q,Me,Ee,Ae,qe,ze,Ce,Fe,De,Be,Oe,je,C,Ge,Re,He,te,We,M=119459e-10,g=.01675,F=.00015835218,Y=.0549;We=O+M*R,Z==="y"&&(We=O),te=We+2*g*Math.sin(We),Ge=Math.sin(te),Ce=.5*Ge*Ge-.25,Fe=-.5*Ge*Math.cos(te);var ee=c*Ce+d*Fe,ae=p*Ce+h*Fe,ie=S*Ce+A*Fe+b*Ge,k=f*Ce+u*Fe+m*Ge,K=_*Ce+E*Fe;We=z+F*R,Z==="y"&&(We=z),te=We+2*Y*Math.sin(We),Ge=Math.sin(te),Ce=.5*Ge*Ge-.25,Fe=-.5*Ge*Math.cos(te);var ge=i*Ce+n*Fe,he=w*Ce+I*Fe,ne=X*Ce+q*Fe+D*Ge,se=y*Ce+P*Fe+v*Ge,Ie=T*Ce+U*Fe;return De=ee+ge,je=ae+he,C=ie+ne,Be=k+se,Oe=K+Ie,Z==="n"&&(De-=a,je-=s,C-=l,Be-=r,Oe-=o,me+=je,ce+=De,Q=Math.sin(me),re=Math.cos(me),me>=.2?(Oe/=Q,Be-=re*Oe,ke+=Be,ue+=Oe,Xe+=C):(Ee=Math.sin(ue),Me=Math.cos(ue),oe=Q*Ee,V=Q*Me,Ae=Oe*Me+je*re*Ee,qe=-Oe*Ee+je*re*Me,oe+=Ae,V+=qe,ue%=Mt,ue<0&&J==="a"&&(ue+=Mt),Re=Xe+ke+re*ue,ze=C+Be-je*ue*Q,Re+=ze,He=ue,ue=Math.atan2(oe,V),ue<0&&J==="a"&&(ue+=Mt),Math.abs(He-ue)>Mn&&(ue<He?ue+=Mt:ue-=Mt),Xe+=C,ke=Re-Xe-re*ue)),{ep:ce,inclp:me,nodep:ue,argpp:ke,mp:Xe}}function Wu(t){var e=t.epoch,n=t.ep,i=t.argpp,a=t.tc,r=t.inclp,o=t.nodep,s=t.np,l,c,d,f,u,m,_,E,p,h,S,A,b,R,y,P,v,T,U,w,I,X,q,D,z,O,Z,J,ce,me,ue,ke,Xe,oe,V,re,Q,Me,Ee,Ae,qe,ze,Ce,Fe,De,Be,Oe,je,C,Ge,Re,He,te,We,M,g,F,Y,ee,ae,ie,k,K,ge=.01675,he=.0549,ne=29864797e-13,se=47968065e-14,Ie=.39785416,Ne=.91744867,Ze=.1945905,L=-.98088458,de=s,$=n,ve=Math.sin(o),le=Math.cos(o),j=Math.sin(i),ye=Math.cos(i),Ve=Math.sin(r),pe=Math.cos(r),Ye=$*$,mt=1-Ye,Et=Math.sqrt(mt),rt=0,ai=0,bn=0,Hn=0,Xt=0,qt=e+18261.5+a/1440,Vt=(4.523602-.00092422029*qt)%Mt,xt=Math.sin(Vt),Dt=Math.cos(Vt),Tn=.91375164-.03568096*Dt,tn=Math.sqrt(1-Tn*Tn),Tt=.089683511*xt/tn,At=Math.sqrt(1-Tt*Tt),_t=5.8351514+.001944368*qt,An=.39785416*xt/tn,ji=At*Dt+.91744867*Tt*xt;An=Math.atan2(An,ji),An+=_t-Vt;var Ji=Math.cos(An),Qi=Math.sin(An);w=Ze,I=L,D=Ne,z=Ie,X=le,q=ve,S=ne;for(var ea=1/de,ri=0;ri<2;)ri+=1,l=w*X+I*D*q,d=-I*X+w*D*q,_=-w*q+I*D*X,E=I*z,p=I*q+w*D*X,h=w*z,c=pe*_+Ve*E,f=pe*p+Ve*h,u=-Ve*_+pe*E,m=-Ve*p+pe*h,A=l*ye+c*j,b=d*ye+f*j,R=-l*j+c*ye,y=-d*j+f*ye,P=u*j,v=m*j,T=u*ye,U=m*ye,ie=12*A*A-3*R*R,k=24*A*b-6*R*y,K=12*b*b-3*y*y,He=3*(l*l+c*c)+ie*Ye,te=6*(l*d+c*f)+k*Ye,We=3*(d*d+f*f)+K*Ye,M=-6*l*u+Ye*(-24*A*T-6*R*P),g=-6*(l*m+d*u)+Ye*(-24*(b*T+A*U)+-6*(R*v+y*P)),F=-6*d*m+Ye*(-24*b*U-6*y*v),Y=6*c*u+Ye*(24*A*P-6*R*T),ee=6*(f*u+c*m)+Ye*(24*(b*P+A*v)-6*(y*T+R*U)),ae=6*f*m+Ye*(24*b*v-6*y*U),He=He+He+mt*ie,te=te+te+mt*k,We=We+We+mt*K,Oe=S*ea,Be=-.5*Oe/Et,je=Oe*Et,De=-15*$*je,C=A*R+b*y,Ge=b*R+A*y,Re=b*y-A*R,ri===1&&(O=De,Z=Be,J=Oe,ce=je,me=C,ue=Ge,ke=Re,Xe=He,oe=te,V=We,re=M,Q=g,Me=F,Ee=Y,Ae=ee,qe=ae,ze=ie,Ce=k,Fe=K,w=Ji,I=Qi,D=Tn,z=tn,X=At*le+Tt*ve,q=ve*At-le*Tt,S=se);var x=(4.7199672+(.2299715*qt-_t))%Mt,N=(6.2565837+.017201977*qt)%Mt,H=2*O*ue,B=2*O*ke,G=2*Z*Q,xe=2*Z*(Me-re),be=-2*J*oe,_e=-2*J*(V-Xe),Pe=-2*J*(-21-9*Ye)*ge,Le=2*ce*Ce,Ke=2*ce*(Fe-ze),Je=-18*ce*ge,Ue=-2*Z*Ae,ot=-2*Z*(qe-Ee),pt=2*De*Ge,gt=2*De*Re,lt=2*Be*g,Pt=2*Be*(F-M),Te=-2*Oe*te,Ot=-2*Oe*(We-He),nt=-2*Oe*(-21-9*Ye)*he,kt=2*je*k,jt=2*je*(K-ie),dn=-18*je*he,Wn=-2*Be*ee,ct=-2*Be*(ae-Y);return{snodm:ve,cnodm:le,sinim:Ve,cosim:pe,sinomm:j,cosomm:ye,day:qt,e3:gt,ee2:pt,em:$,emsq:Ye,gam:_t,peo:rt,pgho:Hn,pho:Xt,pinco:ai,plo:bn,rtemsq:Et,se2:H,se3:B,sgh2:Le,sgh3:Ke,sgh4:Je,sh2:Ue,sh3:ot,si2:G,si3:xe,sl2:be,sl3:_e,sl4:Pe,s1:De,s2:Be,s3:Oe,s4:je,s5:C,s6:Ge,s7:Re,ss1:O,ss2:Z,ss3:J,ss4:ce,ss5:me,ss6:ue,ss7:ke,sz1:Xe,sz2:oe,sz3:V,sz11:re,sz12:Q,sz13:Me,sz21:Ee,sz22:Ae,sz23:qe,sz31:ze,sz32:Ce,sz33:Fe,xgh2:kt,xgh3:jt,xgh4:dn,xh2:Wn,xh3:ct,xi2:lt,xi3:Pt,xl2:Te,xl3:Ot,xl4:nt,nm:de,z1:He,z2:te,z3:We,z11:M,z12:g,z13:F,z21:Y,z22:ee,z23:ae,z31:ie,z32:k,z33:K,zmol:x,zmos:N}}function Xu(t){var e=t.cosim,n=t.argpo,i=t.s1,a=t.s2,r=t.s3,o=t.s4,s=t.s5,l=t.sinim,c=t.ss1,d=t.ss2,f=t.ss3,u=t.ss4,m=t.ss5,_=t.sz1,E=t.sz3,p=t.sz11,h=t.sz13,S=t.sz21,A=t.sz23,b=t.sz31,R=t.sz33,y=t.t,P=t.tc,v=t.gsto,T=t.mo,U=t.mdot,w=t.no,I=t.nodeo,X=t.nodedot,q=t.xpidot,D=t.z1,z=t.z3,O=t.z11,Z=t.z13,J=t.z21,ce=t.z23,me=t.z31,ue=t.z33,ke=t.ecco,Xe=t.eccsq,oe=t.emsq,V=t.em,re=t.argpm,Q=t.inclm,Me=t.mm,Ee=t.nm,Ae=t.nodem,qe=t.irez,ze=t.atime,Ce=t.d2201,Fe=t.d2211,De=t.d3210,Be=t.d3222,Oe=t.d4410,je=t.d4422,C=t.d5220,Ge=t.d5232,Re=t.d5421,He=t.d5433,te=t.dedt,We=t.didt,M=t.dmdt,g=t.dnodt,F=t.domdt,Y=t.del1,ee=t.del2,ae=t.del3,ie=t.xfact,k=t.xlamo,K=t.xli,ge=t.xni,he,ne,se,Ie,Ne,Ze,L,de,$,ve,le,j,ye,Ve,pe,Ye,mt,Et,rt,ai,bn,Hn,Xt,qt,Vt,xt,Dt,Tn,tn,Tt,At,_t,An=17891679e-13,ji=21460748e-13,Ji=22123015e-14,Qi=17891679e-13,ea=73636953e-16,ri=21765803e-16,x=.0043752690880113,N=37393792e-14,H=11428639e-14,B=.00015835218,G=119459e-10;qe=0,Ee<.0052359877&&Ee>.0034906585&&(qe=1),Ee>=.00826&&Ee<=.00924&&V>=.5&&(qe=2);var xe=c*G*m,be=d*G*(p+h),_e=-G*f*(_+E-14-6*oe),Pe=u*G*(b+R-6),Le=-G*d*(S+A);(Q<.052359877||Q>Mn-.052359877)&&(Le=0),l!==0&&(Le/=l);var Ke=Pe-e*Le;te=xe+i*B*s,We=be+a*B*(O+Z),M=_e-B*r*(D+z-14-6*oe);var Je=o*B*(me+ue-6),Ue=-B*a*(J+ce);(Q<.052359877||Q>Mn-.052359877)&&(Ue=0),F=Ke+Je,g=Le,l!==0&&(F-=e/l*Ue,g+=Ue/l);var ot=0,pt=(v+P*x)%Mt;if(V+=te*y,Q+=We*y,re+=F*y,Ae+=g*y,Me+=M*y,qe!==0){if(Tt=Math.pow(Ee/In,ma),qe===2){At=e*e;var gt=V;V=ke;var lt=oe;oe=Xe,_t=V*oe,Ve=-.306-(V-.64)*.44,V<=.65?(pe=3.616-13.247*V+16.29*oe,mt=-19.302+117.39*V-228.419*oe+156.591*_t,Et=-18.9068+109.7927*V-214.6334*oe+146.5816*_t,rt=-41.122+242.694*V-471.094*oe+313.953*_t,ai=-146.407+841.88*V-1629.014*oe+1083.435*_t,bn=-532.114+3017.977*V-5740.032*oe+3708.276*_t):(pe=-72.099+331.819*V-508.738*oe+266.724*_t,mt=-346.844+1582.851*V-2415.925*oe+1246.113*_t,Et=-342.585+1554.908*V-2366.899*oe+1215.972*_t,rt=-1052.797+4758.686*V-7193.992*oe+3651.957*_t,ai=-3581.69+16178.11*V-24462.77*oe+12422.52*_t,V>.715?bn=-5149.66+29936.92*V-54087.36*oe+31324.56*_t:bn=1464.74-4664.75*V+3763.64*oe),V<.7?(qt=-919.2277+4988.61*V-9064.77*oe+5542.21*_t,Hn=-822.71072+4568.6173*V-8491.4146*oe+5337.524*_t,Xt=-853.666+4690.25*V-8624.77*oe+5341.4*_t):(qt=-37995.78+161616.52*V-229838.2*oe+109377.94*_t,Hn=-51752.104+218913.95*V-309468.16*oe+146349.42*_t,Xt=-40023.88+170470.89*V-242699.48*oe+115605.82*_t),Vt=l*l,he=.75*(1+2*e+At),ne=1.5*Vt,Ie=1.875*l*(1-2*e-3*At),Ne=-1.875*l*(1+2*e-3*At),L=35*Vt*he,de=39.375*Vt*Vt,$=9.84375*l*(Vt*(1-2*e-5*At)+.33333333*(-2+4*e+6*At)),ve=l*(4.92187512*Vt*(-2-4*e+10*At)+6.56250012*(1+2*e-3*At)),le=29.53125*l*(2-8*e+At*(-12+8*e+10*At)),j=29.53125*l*(-2-8*e+At*(12+8*e-10*At)),Tn=Ee*Ee,tn=Tt*Tt,Dt=3*Tn*tn,xt=Dt*Qi,Ce=xt*he*Ve,Fe=xt*ne*pe,Dt*=Tt,xt=Dt*N,De=xt*Ie*mt,Be=xt*Ne*Et,Dt*=Tt,xt=2*Dt*ea,Oe=xt*L*rt,je=xt*de*ai,Dt*=Tt,xt=Dt*H,C=xt*$*bn,Ge=xt*ve*Xt,xt=2*Dt*ri,Re=xt*le*Hn,He=xt*j*qt,k=(T+I+I-(pt+pt))%Mt,ie=U+M+2*(X+g-x)-w,V=gt,oe=lt}qe===1&&(ye=1+oe*(-2.5+.8125*oe),mt=1+2*oe,Ye=1+oe*(-6+6.60937*oe),he=.75*(1+e)*(1+e),se=.9375*l*l*(1+3*e)-.75*(1+e),Ze=1+e,Ze*=1.875*Ze*Ze,Y=3*Ee*Ee*Tt*Tt,ee=2*Y*he*ye*An,ae=3*Y*Ze*Ye*Ji*Tt,Y=Y*se*mt*ji*Tt,k=(T+I+n-pt)%Mt,ie=U+q+M+F+g-(w+x)),K=k,ge=w,ze=0,Ee=w+ot}return{em:V,argpm:re,inclm:Q,mm:Me,nm:Ee,nodem:Ae,irez:qe,atime:ze,d2201:Ce,d2211:Fe,d3210:De,d3222:Be,d4410:Oe,d4422:je,d5220:C,d5232:Ge,d5421:Re,d5433:He,dedt:te,didt:We,dmdt:M,dndt:ot,dnodt:g,domdt:F,del1:Y,del2:ee,del3:ae,xfact:ie,xlamo:k,xli:K,xni:ge}}function bs(t){var e=(t-2451545)/36525,n=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return n=n*Bi/240%Mt,n<0&&(n+=Mt),n}function jo(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?bs(Zo.apply(void 0,arguments)):bs.apply(void 0,arguments)}function qu(t){var e=t.ecco,n=t.epoch,i=t.inclo,a=t.opsmode,r=t.no,o=e*e,s=1-o,l=Math.sqrt(s),c=Math.cos(i),d=c*c,f=Math.pow(In/r,ma),u=.75*mi*(3*d-1)/(l*s),m=u/(f*f),_=f*(1-m*m-m*(1/3+134*m*m/81));m=u/(_*_),r/=1+m;var E=Math.pow(In/r,ma),p=Math.sin(i),h=E*s,S=1-5*d,A=-S-d-d,b=1/E,R=h*h,y=E*(1-e),P="n",v;if(a==="a"){var T=n-7305,U=Math.floor(T+1e-8),w=T-U,I=.017202791694070362,X=1.7321343856509375,q=5075514194322695e-30,D=I+Mt;v=(X+I*U+D*w+T*T*q)%Mt,v<0&&(v+=Mt)}else v=jo(n+24332815e-1);return{no:r,method:P,ainv:b,ao:E,con41:A,con42:S,cosio:c,cosio2:d,eccsq:o,omeosq:s,posq:R,rp:y,rteosq:l,sinio:p,gsto:v}}function Yu(t){var e=t.irez,n=t.d2201,i=t.d2211,a=t.d3210,r=t.d3222,o=t.d4410,s=t.d4422,l=t.d5220,c=t.d5232,d=t.d5421,f=t.d5433,u=t.dedt,m=t.del1,_=t.del2,E=t.del3,p=t.didt,h=t.dmdt,S=t.dnodt,A=t.domdt,b=t.argpo,R=t.argpdot,y=t.t,P=t.tc,v=t.gsto,T=t.xfact,U=t.xlamo,w=t.no,I=t.atime,X=t.em,q=t.argpm,D=t.inclm,z=t.xli,O=t.mm,Z=t.xni,J=t.nodem,ce=t.nm,me=.13130908,ue=2.8843198,ke=.37448087,Xe=5.7686396,oe=.95240898,V=1.8014998,re=1.050833,Q=4.4108898,Me=.0043752690880113,Ee=720,Ae=-720,qe=259200,ze,Ce,Fe,De,Be,Oe,je,C,Ge=0,Re=0,He=(v+P*Me)%Mt;if(X+=u*y,D+=p*y,q+=A*y,J+=S*y,O+=h*y,e!==0){(I===0||y*I<=0||Math.abs(y)<Math.abs(I))&&(I=0,Z=w,z=U),y>0?ze=Ee:ze=Ae;for(var te=381;te===381;)e!==2?(je=m*Math.sin(z-me)+_*Math.sin(2*(z-ue))+E*Math.sin(3*(z-ke)),Be=Z+T,Oe=m*Math.cos(z-me)+2*_*Math.cos(2*(z-ue))+3*E*Math.cos(3*(z-ke)),Oe*=Be):(C=b+R*I,Fe=C+C,Ce=z+z,je=n*Math.sin(Fe+z-Xe)+i*Math.sin(z-Xe)+a*Math.sin(C+z-oe)+r*Math.sin(-C+z-oe)+o*Math.sin(Fe+Ce-V)+s*Math.sin(Ce-V)+l*Math.sin(C+z-re)+c*Math.sin(-C+z-re)+d*Math.sin(C+Ce-Q)+f*Math.sin(-C+Ce-Q),Be=Z+T,Oe=n*Math.cos(Fe+z-Xe)+i*Math.cos(z-Xe)+a*Math.cos(C+z-oe)+r*Math.cos(-C+z-oe)+l*Math.cos(C+z-re)+c*Math.cos(-C+z-re)+2*(o*Math.cos(Fe+Ce-V)+s*Math.cos(Ce-V)+d*Math.cos(C+Ce-Q)+f*Math.cos(-C+Ce-Q)),Oe*=Be),Math.abs(y-I)>=Ee?te=381:(Re=y-I,te=0),te===381&&(z+=Be*ze+je*qe,Z+=je*ze+Oe*qe,I+=ze);ce=Z+je*Re+Oe*Re*Re*.5,De=z+Be*Re+je*Re*Re*.5,e!==1?(O=De-2*J+2*He,Ge=ce-w):(O=De-J-q+He,Ge=ce-w),ce=w+Ge}return{atime:I,em:X,argpm:q,inclm:D,xli:z,mm:O,xni:Z,nodem:J,dndt:Ge,nm:ce}}function Bl(t,e){var n,i,a,r,o,s,l,c,d,f,u,m,_,E,p,h,S,A,b,R,y,P,v,T,U,w,I,X=15e-13;t.t=e,t.error=0;var q=t.mo+t.mdot*t.t,D=t.argpo+t.argpdot*t.t,z=t.nodeo+t.nodedot*t.t;d=D,y=q;var O=t.t*t.t;if(v=z+t.nodecf*O,S=1-t.cc1*t.t,A=t.bstar*t.cc4*t.t,b=t.t2cof*O,t.isimp!==1){l=t.omgcof*t.t;var Z=1+t.eta*Math.cos(q);s=t.xmcof*(Z*Z*Z-t.delmo),h=l+s,y=q+h,d=D-h,m=O*t.t,_=m*t.t,S=S-t.d2*O-t.d3*m-t.d4*_,A+=t.bstar*t.cc5*(Math.sin(y)-t.sinmao),b=b+t.t3cof*m+_*(t.t4cof+t.t*t.t5cof)}P=t.no;var J=t.ecco;if(R=t.inclo,t.method==="d"){E=t.t;var ce={irez:t.irez,d2201:t.d2201,d2211:t.d2211,d3210:t.d3210,d3222:t.d3222,d4410:t.d4410,d4422:t.d4422,d5220:t.d5220,d5232:t.d5232,d5421:t.d5421,d5433:t.d5433,dedt:t.dedt,del1:t.del1,del2:t.del2,del3:t.del3,didt:t.didt,dmdt:t.dmdt,dnodt:t.dnodt,domdt:t.domdt,argpo:t.argpo,argpdot:t.argpdot,t:t.t,tc:E,gsto:t.gsto,xfact:t.xfact,xlamo:t.xlamo,no:t.no,atime:t.atime,em:J,argpm:d,inclm:R,xli:t.xli,mm:y,xni:t.xni,nodem:v,nm:P},me=Yu(ce);J=me.em,d=me.argpm,R=me.inclm,y=me.mm,v=me.nodem,P=me.nm}if(P<=0)return t.error=2,[!1,!1];var ue=Math.pow(In/P,ma)*S*S;if(P=In/Math.pow(ue,1.5),J-=A,J>=1||J<-.001)return t.error=1,[!1,!1];J<1e-6&&(J=1e-6),y+=t.no*b,U=y+d+v,v%=Mt,d%=Mt,U%=Mt,y=(U-d-v)%Mt;var ke=Math.sin(R),Xe=Math.cos(R),oe=J;if(T=R,f=d,I=v,w=y,r=ke,a=Xe,t.method==="d"){var V={inclo:t.inclo,init:"n",ep:oe,inclp:T,nodep:I,argpp:f,mp:w,opsmode:t.operationmode},re=Ol(t,V);if(oe=re.ep,I=re.nodep,f=re.argpp,w=re.mp,T=re.inclp,T<0&&(T=-T,I+=Mn,f-=Mn),oe<0||oe>1)return t.error=3,[!1,!1]}t.method==="d"&&(r=Math.sin(T),a=Math.cos(T),t.aycof=-.5*gi*r,Math.abs(a+1)>15e-13?t.xlcof=-.25*gi*r*(3+5*a)/(1+a):t.xlcof=-.25*gi*r*(3+5*a)/X);var Q=oe*Math.cos(f);h=1/(ue*(1-oe*oe));var Me=oe*Math.sin(f)+h*t.aycof,Ee=w+f+I+h*t.xlcof*Q,Ae=(Ee-I)%Mt;c=Ae,p=9999.9;for(var qe=1;Math.abs(p)>=1e-12&&qe<=10;)i=Math.sin(c),n=Math.cos(c),p=1-n*Q-i*Me,p=(Ae-Me*n+Q*i-c)/p,Math.abs(p)>=.95&&(p>0?p=.95:p=-.95),c+=p,qe+=1;var ze=Q*n+Me*i,Ce=Q*i-Me*n,Fe=Q*Q+Me*Me,De=ue*(1-Fe);if(De<0)return t.error=4,[!1,!1];var Be=ue*(1-ze),Oe=Math.sqrt(ue)*Ce/Be,je=Math.sqrt(De)/Be,C=Math.sqrt(1-Fe);h=Ce/(1+C);var Ge=ue/Be*(i-Me-Q*h),Re=ue/Be*(n-Q+Me*h);u=Math.atan2(Ge,Re);var He=(Re+Re)*Ge,te=1-2*Ge*Ge;h=1/De;var We=.5*mi*h,M=We*h;t.method==="d"&&(o=a*a,t.con41=3*o-1,t.x1mth2=1-o,t.x7thm1=7*o-1);var g=Be*(1-1.5*M*C*t.con41)+.5*We*t.x1mth2*te;if(g<1)return t.error=6,{position:!1,velocity:!1};u-=.25*M*t.x7thm1*He;var F=I+1.5*M*a*He,Y=T+1.5*M*a*r*te,ee=Oe-P*We*t.x1mth2*He/In,ae=je+P*We*(t.x1mth2*te+1.5*t.con41)/In,ie=Math.sin(u),k=Math.cos(u),K=Math.sin(F),ge=Math.cos(F),he=Math.sin(Y),ne=Math.cos(Y),se=-K*ne,Ie=ge*ne,Ne=se*ie+ge*k,Ze=Ie*ie+K*k,L=he*ie,de=se*k-ge*ie,$=Ie*k-K*ie,ve=he*k,le={x:g*Ne*Kt,y:g*Ze*Kt,z:g*L*Kt},j={x:(ee*Ne+ae*de)*_r,y:(ee*Ze+ae*$)*_r,z:(ee*L+ae*ve)*_r};return{position:le,velocity:j}}function $u(t,e){var n=e.opsmode,i=e.epoch,a=e.xbstar,r=e.xecco,o=e.xargpo,s=e.xinclo,l=e.xmo,c=e.xno,d=e.xnodeo,f,u,m,_,E,p,h,S,A,b,R,y,P,v,T,U,w,I,X,q,D,z,O,Z,J,ce,me,ue,ke,Xe,oe,V,re,Q,Me,Ee,Ae,qe,ze,Ce,Fe,De,Be,Oe,je,C,Ge,Re,He,te,We,M,g,F,Y,ee,ae=15e-13;t.isimp=0,t.method="n",t.aycof=0,t.con41=0,t.cc1=0,t.cc4=0,t.cc5=0,t.d2=0,t.d3=0,t.d4=0,t.delmo=0,t.eta=0,t.argpdot=0,t.omgcof=0,t.sinmao=0,t.t=0,t.t2cof=0,t.t3cof=0,t.t4cof=0,t.t5cof=0,t.x1mth2=0,t.x7thm1=0,t.mdot=0,t.nodedot=0,t.xlcof=0,t.xmcof=0,t.nodecf=0,t.irez=0,t.d2201=0,t.d2211=0,t.d3210=0,t.d3222=0,t.d4410=0,t.d4422=0,t.d5220=0,t.d5232=0,t.d5421=0,t.d5433=0,t.dedt=0,t.del1=0,t.del2=0,t.del3=0,t.didt=0,t.dmdt=0,t.dnodt=0,t.domdt=0,t.e3=0,t.ee2=0,t.peo=0,t.pgho=0,t.pho=0,t.pinco=0,t.plo=0,t.se2=0,t.se3=0,t.sgh2=0,t.sgh3=0,t.sgh4=0,t.sh2=0,t.sh3=0,t.si2=0,t.si3=0,t.sl2=0,t.sl3=0,t.sl4=0,t.gsto=0,t.xfact=0,t.xgh2=0,t.xgh3=0,t.xgh4=0,t.xh2=0,t.xh3=0,t.xi2=0,t.xi3=0,t.xl2=0,t.xl3=0,t.xl4=0,t.xlamo=0,t.zmol=0,t.zmos=0,t.atime=0,t.xli=0,t.xni=0,t.bstar=a,t.ecco=r,t.argpo=o,t.inclo=s,t.mo=l,t.no=c,t.nodeo=d,t.operationmode=n;var ie=78/Kt+1,k=42/Kt,K=k*k*k*k;t.init="y",t.t=0;var ge={ecco:t.ecco,epoch:i,inclo:t.inclo,no:t.no,method:t.method,opsmode:t.operationmode},he=qu(ge),ne=he.ao,se=he.con42,Ie=he.cosio,Ne=he.cosio2,Ze=he.eccsq,L=he.omeosq,de=he.posq,$=he.rp,ve=he.rteosq,le=he.sinio;if(t.no=he.no,t.con41=he.con41,t.gsto=he.gsto,t.a=Math.pow(t.no*Gu,-2/3),t.alta=t.a*(1+t.ecco)-1,t.altp=t.a*(1-t.ecco)-1,t.error=0,L>=0||t.no>=0){if(t.isimp=0,$<220/Kt+1&&(t.isimp=1),me=ie,D=K,I=($-1)*Kt,I<156){me=I-78,I<98&&(me=20);var j=(120-me)/Kt;D=j*j*j*j,me=me/Kt+1}X=1/de,C=1/(ne-me),t.eta=ne*t.ecco*C,y=t.eta*t.eta,R=t.ecco*t.eta,q=Math.abs(1-y),p=D*Math.pow(C,4),h=p/Math.pow(q,3.5),_=h*t.no*(ne*(1+1.5*y+R*(4+y))+.375*mi*C/q*t.con41*(8+3*y*(8+y))),t.cc1=t.bstar*_,E=0,t.ecco>1e-4&&(E=-2*p*C*gi*t.no*le/t.ecco),t.x1mth2=1-Ne,t.cc4=2*t.no*h*ne*L*(t.eta*(2+.5*y)+t.ecco*(.5+2*y)-mi*C/(ne*q)*(-3*t.con41*(1-2*R+y*(1.5-.5*R))+.75*t.x1mth2*(2*y-R*(1+y))*Math.cos(2*t.argpo))),t.cc5=2*h*ne*L*(1+2.75*(y+R)+R*y),S=Ne*Ne,Be=1.5*mi*X*t.no,Oe=.5*Be*mi*X,je=-.46875*ku*X*X*t.no,t.mdot=t.no+.5*Be*ve*t.con41+.0625*Oe*ve*(13-78*Ne+137*S),t.argpdot=-.5*Be*se+.0625*Oe*(7-114*Ne+395*S)+je*(3-36*Ne+49*S),Re=-Be*Ie,t.nodedot=Re+(.5*Oe*(4-19*Ne)+2*je*(3-7*Ne))*Ie,Ge=t.argpdot+t.nodedot,t.omgcof=t.bstar*E*Math.cos(t.argpo),t.xmcof=0,t.ecco>1e-4&&(t.xmcof=-ma*p*t.bstar/R),t.nodecf=3.5*L*Re*t.cc1,t.t2cof=1.5*t.cc1,Math.abs(Ie+1)>15e-13?t.xlcof=-.25*gi*le*(3+5*Ie)/(1+Ie):t.xlcof=-.25*gi*le*(3+5*Ie)/ae,t.aycof=-.5*gi*le;var ye=1+t.eta*Math.cos(t.mo);if(t.delmo=ye*ye*ye,t.sinmao=Math.sin(t.mo),t.x7thm1=7*Ne-1,2*Mn/t.no>=225){t.method="d",t.isimp=1,Fe=0,T=t.inclo;var Ve={epoch:i,ep:t.ecco,argpp:t.argpo,tc:Fe,inclp:t.inclo,nodep:t.nodeo,np:t.no,e3:t.e3,ee2:t.ee2,peo:t.peo,pgho:t.pgho,pho:t.pho,pinco:t.pinco,plo:t.plo,se2:t.se2,se3:t.se3,sgh2:t.sgh2,sgh3:t.sgh3,sgh4:t.sgh4,sh2:t.sh2,sh3:t.sh3,si2:t.si2,si3:t.si3,sl2:t.sl2,sl3:t.sl3,sl4:t.sl4,xgh2:t.xgh2,xgh3:t.xgh3,xgh4:t.xgh4,xh2:t.xh2,xh3:t.xh3,xi2:t.xi2,xi3:t.xi3,xl2:t.xl2,xl3:t.xl3,xl4:t.xl4,zmol:t.zmol,zmos:t.zmos},pe=Wu(Ve);t.e3=pe.e3,t.ee2=pe.ee2,t.peo=pe.peo,t.pgho=pe.pgho,t.pho=pe.pho,t.pinco=pe.pinco,t.plo=pe.plo,t.se2=pe.se2,t.se3=pe.se3,t.sgh2=pe.sgh2,t.sgh3=pe.sgh3,t.sgh4=pe.sgh4,t.sh2=pe.sh2,t.sh3=pe.sh3,t.si2=pe.si2,t.si3=pe.si3,t.sl2=pe.sl2,t.sl3=pe.sl3,t.sl4=pe.sl4,u=pe.sinim,f=pe.cosim,A=pe.em,b=pe.emsq,z=pe.s1,O=pe.s2,Z=pe.s3,J=pe.s4,ce=pe.s5,ue=pe.ss1,ke=pe.ss2,Xe=pe.ss3,oe=pe.ss4,V=pe.ss5,re=pe.sz1,Q=pe.sz3,Me=pe.sz11,Ee=pe.sz13,Ae=pe.sz21,qe=pe.sz23,ze=pe.sz31,Ce=pe.sz33,t.xgh2=pe.xgh2,t.xgh3=pe.xgh3,t.xgh4=pe.xgh4,t.xh2=pe.xh2,t.xh3=pe.xh3,t.xi2=pe.xi2,t.xi3=pe.xi3,t.xl2=pe.xl2,t.xl3=pe.xl3,t.xl4=pe.xl4,t.zmol=pe.zmol,t.zmos=pe.zmos,w=pe.nm,He=pe.z1,te=pe.z3,We=pe.z11,M=pe.z13,g=pe.z21,F=pe.z23,Y=pe.z31,ee=pe.z33;var Ye={inclo:T,init:t.init,ep:t.ecco,inclp:t.inclo,nodep:t.nodeo,argpp:t.argpo,mp:t.mo,opsmode:t.operationmode},mt=Ol(t,Ye);t.ecco=mt.ep,t.inclo=mt.inclp,t.nodeo=mt.nodep,t.argpo=mt.argpp,t.mo=mt.mp,P=0,v=0,U=0;var Et={cosim:f,emsq:b,argpo:t.argpo,s1:z,s2:O,s3:Z,s4:J,s5:ce,sinim:u,ss1:ue,ss2:ke,ss3:Xe,ss4:oe,ss5:V,sz1:re,sz3:Q,sz11:Me,sz13:Ee,sz21:Ae,sz23:qe,sz31:ze,sz33:Ce,t:t.t,tc:Fe,gsto:t.gsto,mo:t.mo,mdot:t.mdot,no:t.no,nodeo:t.nodeo,nodedot:t.nodedot,xpidot:Ge,z1:He,z3:te,z11:We,z13:M,z21:g,z23:F,z31:Y,z33:ee,ecco:t.ecco,eccsq:Ze,em:A,argpm:P,inclm:T,mm:U,nm:w,nodem:v,irez:t.irez,atime:t.atime,d2201:t.d2201,d2211:t.d2211,d3210:t.d3210,d3222:t.d3222,d4410:t.d4410,d4422:t.d4422,d5220:t.d5220,d5232:t.d5232,d5421:t.d5421,d5433:t.d5433,dedt:t.dedt,didt:t.didt,dmdt:t.dmdt,dnodt:t.dnodt,domdt:t.domdt,del1:t.del1,del2:t.del2,del3:t.del3,xfact:t.xfact,xlamo:t.xlamo,xli:t.xli,xni:t.xni},rt=Xu(Et);t.irez=rt.irez,t.atime=rt.atime,t.d2201=rt.d2201,t.d2211=rt.d2211,t.d3210=rt.d3210,t.d3222=rt.d3222,t.d4410=rt.d4410,t.d4422=rt.d4422,t.d5220=rt.d5220,t.d5232=rt.d5232,t.d5421=rt.d5421,t.d5433=rt.d5433,t.dedt=rt.dedt,t.didt=rt.didt,t.dmdt=rt.dmdt,t.dnodt=rt.dnodt,t.domdt=rt.domdt,t.del1=rt.del1,t.del2=rt.del2,t.del3=rt.del3,t.xfact=rt.xfact,t.xlamo=rt.xlamo,t.xli=rt.xli,t.xni=rt.xni}t.isimp!==1&&(m=t.cc1*t.cc1,t.d2=4*ne*C*m,De=t.d2*C*t.cc1/3,t.d3=(17*ne+me)*De,t.d4=.5*De*ne*C*(221*ne+31*me)*t.cc1,t.t3cof=t.d2+2*m,t.t4cof=.25*(3*t.d3+t.cc1*(12*t.d2+10*m)),t.t5cof=.2*(3*t.d4+12*t.cc1*t.d3+6*t.d2*t.d2+15*m*(2*t.d2+m)))}Bl(t,0),t.init="n"}function Ku(t,e){var n="i",i=1440/(2*Mn),a=0,r={};r.error=0,r.satnum=t.substring(2,7),r.epochyr=parseInt(t.substring(18,20),10),r.epochdays=parseFloat(t.substring(20,32)),r.ndot=parseFloat(t.substring(33,43)),r.nddot=parseFloat(".".concat(parseInt(t.substring(44,50),10),"E").concat(t.substring(50,52))),r.bstar=parseFloat("".concat(t.substring(53,54),".").concat(parseInt(t.substring(54,59),10),"E").concat(t.substring(59,61))),r.inclo=parseFloat(e.substring(8,16)),r.nodeo=parseFloat(e.substring(17,25)),r.ecco=parseFloat(".".concat(e.substring(26,33))),r.argpo=parseFloat(e.substring(34,42)),r.mo=parseFloat(e.substring(43,51)),r.no=parseFloat(e.substring(52,63)),r.no/=i,r.inclo*=Bi,r.nodeo*=Bi,r.argpo*=Bi,r.mo*=Bi,r.epochyr<57?a=r.epochyr+2e3:a=r.epochyr+1900;var o=Hu(a,r.epochdays),s=o.mon,l=o.day,c=o.hr,d=o.minute,f=o.sec;return r.jdsatepoch=Zo(a,s,l,c,d,f),$u(r,{opsmode:n,satn:r.satnum,epoch:r.jdsatepoch-24332815e-1,xbstar:r.bstar,xecco:r.ecco,xargpo:r.argpo,xinclo:r.inclo,xmo:r.mo,xno:r.no,xnodeo:r.nodeo}),r}function Zu(t){return ju(t)||Ju(t)||Qu(t)||ed()}function ju(t){if(Array.isArray(t))return to(t)}function Ju(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Qu(t,e){if(t){if(typeof t=="string")return to(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return to(t,e)}}function to(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function ed(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gl(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e[0],a=Array.prototype.slice.call(e,1),r=Zo.apply(void 0,Zu(a)),o=(r-i.jdsatepoch)*Ou;return Bl(i,o)}function Ts(t){return t*Bi}function td(t){var e=t.longitude,n=t.latitude,i=t.height,a=6378.137,r=6356.7523142,o=(a-r)/a,s=2*o-o*o,l=a/Math.sqrt(1-s*(Math.sin(n)*Math.sin(n))),c=(l+i)*Math.cos(n)*Math.cos(e),d=(l+i)*Math.cos(n)*Math.sin(e),f=(l*(1-s)+i)*Math.sin(n);return{x:c,y:d,z:f}}function Vl(t,e){var n=t.x*Math.cos(e)+t.y*Math.sin(e),i=t.x*-Math.sin(e)+t.y*Math.cos(e),a=t.z;return{x:n,y:i,z:a}}function nd(t,e){var n=t.longitude,i=t.latitude,a=td(t),r=e.x-a.x,o=e.y-a.y,s=e.z-a.z,l=Math.sin(i)*Math.cos(n)*r+Math.sin(i)*Math.sin(n)*o-Math.cos(i)*s,c=-Math.sin(n)*r+Math.cos(n)*o,d=Math.cos(i)*Math.cos(n)*r+Math.cos(i)*Math.sin(n)*o+Math.sin(i)*s;return{topS:l,topE:c,topZ:d}}function id(t){var e=t.topS,n=t.topE,i=t.topZ,a=Math.sqrt(e*e+n*n+i*i),r=Math.asin(i/a),o=Math.atan2(-n,e)+Mn;return{azimuth:o,elevation:r,rangeSat:a}}function kl(t,e){var n=nd(t,e);return id(n)}function ad(t){return t.namespace?`${t.namespace}.${t.name}`:t.name}function Yi(t,e){return Qa(t[ad(e)]??0)}function we(t,e,n){t[e]=Qa(n)}function rd(t){const e=["ceu.claro","ceu.nuvem","ceu.movimento","ceu.azul","ceu.rosa","ceu.cinza","ceu.quente","cidade.movimento","cidade.luz","cidade.densidade","cidade.borda","mar.movimento","mar.luz","mar.linha","microfone.nivel","microfone.grave","microfone.medio","microfone.agudo","microfone.pico","microfone.ruido","contato.nivel","contato.batida","contato.textura","contato.grave","contato.agudo","contato.pulso","contato.movimento","tempo.calor","tempo.umidade","tempo.vento","tempo.chuva","tempo.pressao","tempo.nuvem","tempo.radiacao","ar.pm25","ar.pm10","ar.co","ar.no2","ar.o3","ar.indice","satelite.altitude","satelite.azimute","satelite.distancia","satelite.visivel","satelite.proximo","satelite.quantidade","manual.luz","manual.calor","manual.tensao"];for(const n of e)t[n]??=0}function od(t,e){const n=(o,s=0)=>(Math.sin(e*o+s)+1)/2,i=n(.42,1.7)>.965?n(8):0;we(t,"ceu.claro",.58+n(.012,.9)*.16),we(t,"ceu.nuvem",.28+n(.018,2.1)*.22),we(t,"ceu.movimento",n(.055,.4)*.18),we(t,"ceu.azul",.62+n(.01,.2)*.24),we(t,"ceu.rosa",Math.max(0,Math.sin(e*.004+.7))*.32),we(t,"ceu.cinza",.14+n(.016,2.8)*.18),we(t,"ceu.quente",.18+n(.012,1.4)*.2),we(t,"cidade.movimento",.18+n(.09,.8)*.22),we(t,"cidade.luz",.42+n(.025,.1)*.22),we(t,"cidade.densidade",.48+n(.018,1.9)*.18),we(t,"cidade.borda",.42+n(.04,2.5)*.2),we(t,"mar.movimento",.2+n(.07,1.1)*.18),we(t,"mar.luz",.44+n(.018,.6)*.18),we(t,"mar.linha",.48+n(.01,2.2)*.14),we(t,"microfone.nivel",.16+n(.18,.3)*.16),we(t,"microfone.grave",.2+n(.11,2.2)*.18),we(t,"microfone.medio",.18+n(.13,1.3)*.16),we(t,"microfone.agudo",.14+n(.16,.5)*.14),we(t,"microfone.pico",i),we(t,"microfone.ruido",.12+n(.2,2.9)*.14),we(t,"contato.nivel",.12+n(.16,1.4)*.18),we(t,"contato.batida",i),we(t,"contato.textura",.22+n(.24,.7)*.24),we(t,"contato.grave",.16+n(.12,2.8)*.16),we(t,"contato.agudo",.18+n(.2,1.1)*.14),we(t,"contato.pulso",i),we(t,"contato.movimento",.18+n(.14,2.1)*.16),we(t,"tempo.calor",.56+n(.006,1)*.16),we(t,"tempo.umidade",.48+n(.005,2.4)*.16),we(t,"tempo.vento",.18+n(.025,.5)*.18),we(t,"tempo.chuva",n(.004,3.2)*.18),we(t,"tempo.pressao",.46+n(.003,.1)*.08),we(t,"tempo.nuvem",t["ceu.nuvem"]??0),we(t,"tempo.radiacao",t["ceu.claro"]??0),we(t,"ar.pm25",.18+n(.016,1.2)*.14),we(t,"ar.pm10",.2+n(.014,2.3)*.14),we(t,"ar.co",.12+n(.018,.4)*.12),we(t,"ar.no2",.16+n(.02,1.7)*.12),we(t,"ar.o3",.18+n(.012,2.8)*.12),we(t,"ar.indice",sd([t["ar.pm25"],t["ar.pm10"],t["ar.no2"],t["ar.o3"]]));const a=n(.018,2.2),r=a>.62?a:0;we(t,"satelite.altitude",r),we(t,"satelite.azimute",n(.02,1.1)),we(t,"satelite.distancia",1-r*.45),we(t,"satelite.visivel",r>0?1:0),we(t,"satelite.proximo",a),we(t,"satelite.quantidade",r>0?.35+n(.04,.2)*.45:n(.01,4)*.25)}function Qa(t){return Number.isNaN(t)?0:Math.max(0,Math.min(1,t))}function sd(t){const e=t.map(n=>n??0);return e.reduce((n,i)=>n+i,0)/e.length}const As={latitude:-3.7319,longitude:-38.5267,heightKm:.021,label:"fortaleza"},ld="https://celestrak.org/NORAD/elements/gp.php?GROUP=visual&FORMAT=tle";async function cd(t="fortaleza",e=void 0){const n=pd(t);try{const i=await fetch(e||ld);if(!i.ok)throw new Error(`CelesTrak respondeu ${i.status}`);const a=await i.text(),r=ud(a).slice(0,180),o=dd(r,n);return{fonte:"celestrak",state:{observer:n,source:"celestrak",updatedAt:new Date().toISOString(),tracks:o}}}catch(i){return console.warn("Falha ao consultar CelesTrak, usando satelites simulados.",i),{fonte:"simulado",state:hd(n)}}}function ws(t,e,n){e.observer=n.state.observer,e.source=n.state.source,e.updatedAt=n.state.updatedAt,e.tracks=n.state.tracks;const i=e.tracks.filter(r=>r.visible),a=i[0]??e.tracks[0];if(we(t,"satelite.quantidade",Math.min(1,i.length/8)),we(t,"satelite.visivel",i.length>0?1:0),!a){we(t,"satelite.altitude",0),we(t,"satelite.azimute",0),we(t,"satelite.distancia",1),we(t,"satelite.proximo",0);return}we(t,"satelite.altitude",Cs(a.elevation)),we(t,"satelite.azimute",a.azimuth/360),we(t,"satelite.distancia",md(a.rangeKm)),we(t,"satelite.proximo",a.visible?Cs(a.elevation):Math.max(0,1-Math.abs(a.elevation)/45))}function ud(t){const e=t.replace(/\r\n?/g,`
`).split(`
`).map(i=>i.trim()).filter(Boolean),n=[];for(let i=0;i<e.length-2;i+=3){const a=e[i],r=e[i+1],o=e[i+2];if(!(!r.startsWith("1 ")||!o.startsWith("2 ")))try{n.push({name:a,line1:r,line2:o,satrec:Ku(r,o)})}catch{}}return n}function dd(t,e,n=new Date){const i={latitude:Ts(e.latitude),longitude:Ts(e.longitude),height:e.heightKm},a=jo(n);return t.map(r=>{const s=Gl(r.satrec,n)?.position;if(!Hl(s))return;const l=Vl(s,a),c=kl(i,l),d=nr(c.elevation),f=tr(nr(c.azimuth)),u=c.rangeSat;return{name:r.name,azimuth:f,elevation:d,rangeKm:u,visible:d>8,brightness:Math.max(0,Math.min(1,d/75)),path:fd(r.satrec,i,n)}}).filter(r=>!!r).sort((r,o)=>er(o)-er(r)).slice(0,12)}function fd(t,e,n){const i=[];for(let a=-18;a<=36;a+=6){const r=new Date(n.getTime()+a*6e4),s=Gl(t,r)?.position;if(!Hl(s))continue;const l=kl(e,Vl(s,jo(r)));i.push({azimuth:tr(nr(l.azimuth)),elevation:nr(l.elevation)})}return i}function hd(t){const e=Date.now()/1e3,n=Array.from({length:5},(i,a)=>{const r=e*(.018+a*.003)+a*1.8,o=Math.sin(r)*54-4+a*2,s=tr((r*38+a*62)%360),l=Array.from({length:10},(c,d)=>({azimuth:tr(s+(d-4)*(8+a)),elevation:o+Math.sin(d*.7+a)*12-Math.abs(d-4)*2}));return{name:["ISS","HUBBLE","NOAA 19","TERRA","AQUA"][a]??`SAT ${a+1}`,azimuth:s,elevation:o,rangeKm:520+a*180,visible:o>8,brightness:Math.max(0,Math.min(1,o/75)),path:l}}).sort((i,a)=>er(a)-er(i));return{observer:t,source:"simulado",updatedAt:new Date().toISOString(),tracks:n}}function pd(t){return t.toLowerCase()==="fortaleza",As}function er(t){return(t.visible?100:0)+t.elevation-t.rangeKm/2e3}function Cs(t){return Math.max(0,Math.min(1,t/90))}function md(t){return Math.max(0,Math.min(1,1-(t-350)/2600))}function tr(t){return(t%360+360)%360}function nr(t){return t*180/Math.PI}function Hl(t){return!!t&&typeof t=="object"}const Rs={latitude:-3.7319,longitude:-38.5267};async function gd(t="fortaleza",e=void 0){if(e)try{const n=await fetch(e);if(!n.ok)throw new Error(`FUNCEME respondeu ${n.status}`);return vd(await n.json())}catch(n){console.warn("Falha ao consultar FUNCEME, usando fallback publico.",n)}return _d(t)}function Ps(t,e){e.calor!==void 0&&we(t,"tempo.calor",e.calor),e.umidade!==void 0&&we(t,"tempo.umidade",e.umidade),e.vento!==void 0&&we(t,"tempo.vento",e.vento),e.chuva!==void 0&&we(t,"tempo.chuva",e.chuva),e.pressao!==void 0&&we(t,"tempo.pressao",e.pressao),e.nuvem!==void 0&&we(t,"tempo.nuvem",e.nuvem),e.radiacao!==void 0&&we(t,"tempo.radiacao",e.radiacao)}function vd(t){const e=Wl(t);return{calor:Dn(oi(e,["temperatura","temp","temperature","t"]),18,38),umidade:ir(oi(e,["umidade","humidity","ur"])),vento:Dn(oi(e,["vento","velocidade_vento","wind_speed","windspeed"]),0,45),chuva:Dn(oi(e,["chuva","precipitacao","precipitation","rain"]),0,40),pressao:Dn(oi(e,["pressao","pressure"]),990,1025),nuvem:ir(oi(e,["nuvem","nebulosidade","cloud_cover","cloudcover"])),radiacao:Dn(oi(e,["radiacao","radiation","shortwave_radiation"]),0,1e3),fonte:"funceme"}}async function _d(t){const e=(t.toLowerCase()==="fortaleza",Rs),n=new URLSearchParams({latitude:String(e.latitude),longitude:String(e.longitude),current:"temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,pressure_msl,wind_speed_10m",timezone:"America/Fortaleza"}),i=await fetch(`https://api.open-meteo.com/v1/forecast?${n.toString()}`);if(!i.ok)throw new Error(`Open-Meteo respondeu ${i.status}`);const r=(await i.json()).current??{};return{calor:Dn(r.temperature_2m,18,38),umidade:ir(r.relative_humidity_2m),vento:Dn(r.wind_speed_10m,0,45),chuva:Dn(Math.max(r.precipitation??0,r.rain??0),0,40),pressao:Dn(r.pressure_msl,990,1025),nuvem:ir(r.cloud_cover),radiacao:void 0,fonte:"open-meteo"}}function Wl(t,e="",n={}){if(!t||typeof t!="object")return n;for(const[i,a]of Object.entries(t)){const r=Xl(i),o=e?`${e}.${r}`:r;n[o]=a,a&&typeof a=="object"&&!Array.isArray(a)&&Wl(a,o,n)}return n}function oi(t,e){for(const[n,i]of Object.entries(t))if(e.some(a=>n.endsWith(Xl(a)))){if(typeof i=="number")return i;if(typeof i=="string"){const a=Number(i.replace(",","."));if(Number.isFinite(a))return a}}}function Xl(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")}function ir(t){if(t!==void 0)return t>1?t/100:t}function Dn(t,e,n){if(t!==void 0)return(t-e)/(n-e)}class It extends Error{line;constructor(e,n){super(`Linha ${e}: ${n}`),this.name="CeuParseError",this.line=e}}const ql=["olha","ouve","toca","sente"],xd=["em",...ql,"manual","foco","recorte","quando"],Yl=["clareia","escurece","nubla","queima","borra","falha","treme","ondula","arrasta","granula","pisca","apaga","rastro","espelha","multiplica","quadricula","entorta","limpido","azula","rosa","satura","contrasta","pixeliza","linhas","croma","vhs","posteriza","mapa","ruas","quadras","rotas","contorno","pontos","fluxo","satelites","orbita","passagem","cidade","mar","dunas","areia","montanhas","video","imagem","ceu","mistura","corta","fere","rasga","atrasa","adianta","acelera","desacelera","ecos","telas","desencaixa","fantasma","cheia","pequena","janela","posicao","mosaico","quebra","embaralha"],$l=["chiado","grave","zunido","batida","estouro","sopro","grao","ronco","corte","eco"],Md=["escreve","some","aparece"],Sd=[...Yl,...$l,...Md],yd=["video","imagem","ceu","mapa"],Ed=/^(?:\d+(?:\.\d+)?|\.\d+)/,bd=/^[A-Za-zÀ-ÖØ-öø-ÿ_][A-Za-zÀ-ÖØ-öø-ÿ0-9_.-]*/;function Td(t,e){const n=Ad(t),i=[];let a=0;for(;a<n.length;){const r=n.slice(a),o=n[a];if(/\s/.test(o)){a+=1;continue}if(r.startsWith("->")){i.push({type:"arrow",value:"->",line:e}),a+=2;continue}const s=Cd(r);if(s){i.push({type:"operator",value:s,line:e}),a+=s.length;continue}if(o===":"){i.push({type:"colon",value:":",line:e}),a+=1;continue}if(o==='"'){const d=wd(n,a,e);i.push({type:"string",value:d.value,line:e}),a=d.nextIndex;continue}const l=r.match(Ed);if(l){i.push({type:"number",value:l[0],line:e}),a+=l[0].length;continue}const c=r.match(bd);if(c){i.push({type:"word",value:c[0],line:e}),a+=c[0].length;continue}throw new It(e,`token inesperado "${o}".`)}return i}function Ad(t){let e=!1,n=!1;for(let i=0;i<t.length;i+=1){const a=t[i];if(n){n=!1;continue}if(a==="\\"){n=!0;continue}if(a==='"'){e=!e;continue}if(a==="#"&&!e)return t.slice(0,i)}return t}function wd(t,e,n){let i="",a=!1;for(let r=e+1;r<t.length;r+=1){const o=t[r];if(a){i+=o,a=!1;continue}if(o==="\\"){a=!0;continue}if(o==='"')return{value:i,nextIndex:r+1};i+=o}throw new It(n,"string precisa terminar com aspas.")}function Cd(t){if(t.startsWith(">="))return">=";if(t.startsWith("<="))return"<=";if(t.startsWith("=="))return"==";if(t.startsWith("!="))return"!=";if(t.startsWith(">"))return">";if(t.startsWith("<"))return"<"}const Rd=new Set(ql),Pd=new Set(xd),Ld=new Set(Sd);function Kl(t){const e=Dd(t),n=[];let i=0;for(;i<e.length;){const a=e[i];if(a.indent>0)throw new It(a.line,"indentacao inesperada fora de um bloco.");if(Jl(a)==="quando"){const r=Gd(e,i);n.push(r.statement),i=r.nextIndex;continue}n.push(Ud(a)),i+=1}return{type:"Program",body:n}}function Dd(t){return t.replace(/\r\n?/g,`
`).split(`
`).map((e,n)=>{const i=n+1,a=e.trimEnd(),r=Td(a,i);return{raw:a,line:i,indent:Hd(a),tokens:r}}).filter(e=>e.tokens.length>0)}function Ud(t){const e=Jl(t);if(!e)throw new It(t.line,"linha vazia inesperada.");return e==="em"?Id(t):Rd.has(e)?Nd(t):e==="manual"?Fd(t):e==="foco"?zd(t):e==="recorte"?Od(t):kd(t.tokens)?Bd(t):Zl(t)}function Id(t){return hr(t,2,"uso esperado: em lugar."),{type:"PlaceStatement",name:Sn(t.tokens[1],t.line),line:t.line}}function Nd(t){if(t.tokens.length<2)throw new It(t.line,`uso esperado: ${t.tokens[0]?.value} fonte valor*.`);return{type:"InputStatement",verb:Sn(t.tokens[0],t.line),source:Sn(t.tokens[1],t.line),args:t.tokens.slice(2).map(e=>Jo(e)),line:t.line}}function Fd(t){return hr(t,3,"uso esperado: manual nome numero."),{type:"ManualStatement",name:Sn(t.tokens[1],t.line),value:da(t.tokens[2],t.line),line:t.line}}function zd(t){return hr(t,2,"uso esperado: foco alvo."),{type:"FocusStatement",target:Sn(t.tokens[1],t.line),line:t.line}}function Od(t){return hr(t,6,"uso esperado: recorte nome x y largura altura."),{type:"CropStatement",target:Sn(t.tokens[1],t.line),x:da(t.tokens[2],t.line),y:da(t.tokens[3],t.line),width:da(t.tokens[4],t.line),height:da(t.tokens[5],t.line),line:t.line}}function Bd(t){if(t.tokens.findIndex(n=>n.type==="arrow")!==1||t.tokens.length!==3)throw new It(t.line,"esperado mapeamento no formato sinal -> acao.");return{type:"MappingStatement",signal:Qo(Sn(t.tokens[0],t.line),t.line),action:jl(Sn(t.tokens[2],t.line),t.line),line:t.line}}function Gd(t,e){const n=t[e];if(n.tokens.at(-1)?.type!=="colon")throw new It(n.line,'bloco "quando" precisa terminar com ":".');const i=n.tokens.slice(1,-1),a=Vd(i,n.line),r=[];let o=e+1;for(;o<t.length&&t[o].indent>n.indent;)r.push(Zl(t[o])),o+=1;if(r.length===0)throw new It(n.line,'bloco "quando" precisa ter pelo menos uma acao indentada.');return{statement:{type:"WhenStatement",condition:a,body:r,line:n.line},nextIndex:o}}function Vd(t,e){if(t.length!==3||t[1]?.type!=="operator")throw new It(e,"condicao esperada no formato sinal operador valor.");return{left:Qo(Sn(t[0],e),e),operator:t[1].value,right:Jo(t[2])}}function Zl(t){const e=Sn(t.tokens[0],t.line);if(Pd.has(e))throw new It(t.line,`comando "${e}" incompleto ou mal formado.`);return{type:"ActionStatement",action:jl(e,t.line),args:t.tokens.slice(1).map(n=>Jo(n)),line:t.line}}function jl(t,e){if(!Ld.has(t))throw new It(e,`acao desconhecida "${t}". Use uma acao registrada ou adicione ao runtime.`);return{name:t}}function Jo(t){if(t.type==="number")return{type:"NumberLiteral",value:Number(t.value)};if(t.type==="string")return{type:"StringLiteral",value:t.value};if(t.type==="word")return{type:"SignalRef",value:Qo(t.value,t.line)};throw new It(t.line,`valor inesperado "${t.value}".`)}function Qo(t,e){const n=t.split(".");if(n.length===1&&n[0])return{name:n[0]};if(n.length===2&&n[0]&&n[1])return{namespace:n[0],name:n[1]};throw new It(e,`sinal invalido "${t}".`)}function hr(t,e,n){if(t.tokens.length!==e)throw new It(t.line,n)}function Sn(t,e){if(!t||t.type!=="word")throw new It(e,"esperado identificador.");return t.value}function da(t,e){if(!t||t.type!=="number")throw new It(e,"esperado numero.");return Number(t.value)}function kd(t){return t.some(e=>e.type==="arrow")}function Jl(t){const e=t.tokens[0];return e?.type==="word"?e.value:void 0}function Hd(t){return t.match(/^[ \t]*/)?.[0].replaceAll("	","  ").length??0}const Wd=new Set(["acelera"]),Ls=new Set(yd);function Xd(){const t={};for(const e of Yl)t[e]=(n,i,a)=>{const r=Wd.has(e)?Yd(n,i,a):ta(n,i,a);n.visual[e]=Math.max(n.visual[e]??0,r)};for(const e of $l)t[e]=(n,i,a)=>{n.audio[e]=Math.max(n.audio[e]??0,ta(n,i,a))};return t.escreve=(e,n)=>{const i=$d(e,n[0]);i&&!e.texto.linhas.includes(i)&&e.texto.linhas.push(i),e.texto.visivel=!0},t.some=(e,n,i)=>{const a=Ds(n[0]);if(a&&Ls.has(a)){e.visual[a]=0;return}e.texto.visivel=ta(e,n,i)<.5},t.aparece=(e,n,i)=>{const a=Ds(n[0]);if(a&&Ls.has(a)){e.visual[a]=Math.max(e.visual[a]??0,ta(e,n.slice(1),i));return}e.texto.visivel=ta(e,n,i)>=.2},t}function qd(t){t.visual={},t.audio={},t.texto={linhas:[],visivel:!0}}function ta(t,e,n){if(n!==void 0)return Qa(n);const i=e[0];return i?i.type==="NumberLiteral"?Qa(i.value):i.type==="SignalRef"?Yi(t.sinais,i.value):1:1}function Yd(t,e,n){if(n!==void 0)return n;const i=e[0];return i?i.type==="NumberLiteral"?i.value:i.type==="SignalRef"?Yi(t.sinais,i.value):1:1}function $d(t,e){return e?e.type==="StringLiteral"?e.value:e.type==="NumberLiteral"?String(e.value):String(Yi(t.sinais,e.value).toFixed(2)):""}function Ds(t){if(!(!t||t.type!=="SignalRef"||t.value.namespace))return t.value.name}function Kd(){const t={};return rd(t),{recortes:{},entradas:[],directActions:[],mappings:[],whens:[],sinais:t,overrides:{},acoes:Xd(),visual:{},audio:{},texto:{linhas:[],visivel:!0},satellites:{observer:{latitude:-3.7319,longitude:-38.5267,heightKm:.021,label:"fortaleza"},source:"simulado",tracks:[]},media:{opacity:0,skyOpacity:1,blend:0,cut:0,speed:1,delay:0,advance:0,tiles:1,echoes:0,tear:0,wound:0,offset:0,ghost:0,scale:1,x:.5,y:.5,window:0,mosaic:0,puzzle:0,shuffle:0},log:[],elapsedSeconds:0}}function Ql(t){const e=Kd();return Zd(e,t),e}function Zd(t,e){t.lugar=void 0,t.foco=void 0,t.recortes={},t.entradas=[],t.directActions=[],t.mappings=[],t.whens=[],t.log=[];for(const n of e.body)Jd(t,n);return t.log.push({level:"info",message:"programa carregado"}),t}function jd(t,e){t.elapsedSeconds+=Math.max(0,e),od(t.sinais,t.elapsedSeconds);for(const[n,i]of Object.entries(t.overrides))we(t.sinais,n,i);qd(t);for(const n of t.directActions)xr(t,n);for(const n of t.mappings)xr(t,{action:n.action,args:[],line:n.line},Yi(t.sinais,n.signal));for(const n of t.whens)if(tf(t,n.condition))for(const i of n.body)xr(t,i);return t}function Jd(t,e){switch(e.type){case"PlaceStatement":t.lugar=e.name;break;case"InputStatement":if(t.entradas.push(e),e.verb==="olha"&&(e.source==="video"||e.source==="imagem"||e.source==="mapa"||e.source==="stream"||e.source==="camera"||e.source==="youtube")){const n=e.args[0];n?.type==="StringLiteral"&&(t.media.kind=Qd(e.source,n.value),t.media.source=n.value,t.media.opacity=Math.max(t.media.opacity,.72))}break;case"ManualStatement":we(t.sinais,`manual.${e.name}`,e.value);break;case"FocusStatement":t.foco=e.target;break;case"CropStatement":t.recortes[e.target]=e;break;case"MappingStatement":t.mappings.push(e);break;case"WhenStatement":t.whens.push(e);break;case"ActionStatement":t.directActions.push(e);break}}function Qd(t,e){return t==="imagem"?"image":t==="mapa"?"map":t==="stream"?"stream":t==="youtube"||t==="camera"||ef(e)?"youtube":"video"}function ef(t){return/(?:youtube\.com|youtu\.be|youtube-nocookie\.com)/i.test(t)}function xr(t,e,n){const i=t.acoes[e.action.name];if(!i){t.log.push({level:"erro",message:`acao desconhecida "${e.action.name}"`,line:e.line});return}i(t,e.args,n)}function tf(t,e){const n=Yi(t.sinais,e.left),i=nf(t,e.right);switch(e.operator){case">":return n>i;case"<":return n<i;case">=":return n>=i;case"<=":return n<=i;case"==":return n===i;case"!=":return n!==i}}function nf(t,e){if(e.type==="NumberLiteral")return e.value;if(e.type==="SignalRef")return Yi(t.sinais,e.value);const n=Number(e.value);return Number.isFinite(n)?n:0}function af(t,e){const n=t.visual,i=t.media,a=n.falha??0,r=n.vhs??0,o=Math.max(n.rasga??0,i.tear),s=Math.max(n.fere??0,i.wound),l=Math.max(n.desencaixa??0,i.offset),c=n.pixeliza??0,d=n.linhas??0,f=n.croma??0,u=Math.max(n.mosaico??0,i.mosaic),m=Math.max(n.quebra??0,i.puzzle),_=Math.max(n.embaralha??0,i.shuffle),E=Math.max(n.ecos??0,i.echoes),p=Math.max(n.fantasma??0,i.ghost),h=n.treme??0,S=n.granula??0,A=n.rastro??0,b=Yn(Math.max(o,s,l)),R=Yn(Math.max(d,r*.86)),y=Yn(Math.max(f,r*.72,b*.4)),P=Yn(Math.max(u,m,_*.8)),v=Yn(Math.max(E,p,A*.72)),T=Yn(Math.max(S,a*.58,r*.5)),U=Yn(Math.max(a,r*.9,b,c*.72,R*.62,y*.72,P*.74,v*.52,h*.64)),w=ar(e*.73+U*17),q=(ar(Math.floor(e*(7+U*18))+Math.floor(w*97))*2-1)*(.3+U*9.5)*Math.max(U,h),D=Math.sin(e*18+w*9)*(.2+U*4.5)*Math.max(U*.72,h),z=of({vhs:r,tear:b,mosaic:P,ghost:v,pixel:c,falha:a,scanlines:R});return{active:U>.015,intensity:U,mode:z,jitterX:q,jitterY:D,tear:b,scanlines:R,chroma:y,pixel:Yn(c),mosaic:P,ghost:v,grain:T,seed:w}}function ya(t,e,n){t.classList.toggle("glitch-surface",e.active),t.classList.toggle("glitch-digital",e.active&&e.mode==="digital"),t.classList.toggle("glitch-vhs",e.active&&e.mode==="vhs"),t.classList.toggle("glitch-rasgo",e.active&&e.mode==="rasgo"),t.classList.toggle("glitch-mosaico",e.active&&e.mode==="mosaico"),t.classList.toggle("glitch-fantasma",e.active&&e.mode==="fantasma"),t.style.setProperty("--glitch",e.intensity.toFixed(4)),t.style.setProperty("--glitch-x",`${e.jitterX.toFixed(3)}px`),t.style.setProperty("--glitch-y",`${e.jitterY.toFixed(3)}px`),t.style.setProperty("--glitch-tear",`${(e.tear*34).toFixed(3)}px`),t.style.setProperty("--glitch-chroma",`${(e.chroma*12).toFixed(3)}px`),t.style.setProperty("--glitch-lines",e.scanlines.toFixed(4)),t.style.setProperty("--glitch-grain",e.grain.toFixed(4)),t.style.setProperty("--glitch-ghost",e.ghost.toFixed(4)),t.style.setProperty(`--${n}-glitch`,e.intensity.toFixed(4)),t.style.setProperty(`--${n}-glitch-x`,`${e.jitterX.toFixed(3)}px`),t.style.setProperty(`--${n}-glitch-y`,`${e.jitterY.toFixed(3)}px`),t.style.setProperty(`--${n}-glitch-tear`,`${(e.tear*34).toFixed(3)}px`),t.style.setProperty(`--${n}-glitch-chroma`,`${(e.chroma*12).toFixed(3)}px`),t.style.setProperty(`--${n}-glitch-lines`,e.scanlines.toFixed(4)),t.style.setProperty(`--${n}-glitch-grain`,e.grain.toFixed(4)),t.style.setProperty(`--${n}-glitch-ghost`,e.ghost.toFixed(4))}function ec(t,e,n){t.save(),e.active&&(t.translate(e.jitterX*devicePixelRatio,e.jitterY*devicePixelRatio),e.mode==="rasgo"&&t.transform(1,0,e.tear*.018,1,0,0)),n(),t.restore(),e.active&&rf(t,e)}function rf(t,e){const n=t.canvas.width,i=t.canvas.height;if(t.save(),t.globalCompositeOperation="screen",e.scanlines>.02){t.fillStyle=`rgba(180, 230, 255, ${.035*e.scanlines})`;const a=Math.max(3,Math.round(7*devicePixelRatio));for(let r=0;r<i;r+=a)t.fillRect(0,r,n,Math.max(1,devicePixelRatio))}if(e.tear>.02){const a=2+Math.round(e.tear*6);for(let r=0;r<a;r+=1){const o=Math.floor(ar(r+e.seed*31)*i),s=Math.max(1,Math.floor((2+e.tear*18)*devicePixelRatio)),l=(ar(r*4.7+e.seed)-.5)*e.tear*n*.08;t.fillStyle=`rgba(255, 244, 190, ${.035+e.tear*.08})`,t.fillRect(l,o,n,s)}}t.restore()}function of(t){return t.vhs>=Math.max(t.tear,t.mosaic,t.ghost,t.falha)&&t.vhs>.05?"vhs":t.tear>.05&&t.tear>=Math.max(t.mosaic,t.ghost)?"rasgo":t.mosaic>.05&&t.mosaic>=t.ghost?"mosaico":t.ghost>.05?"fantasma":t.pixel>.05||t.falha>.05||t.scanlines>.05?"digital":"limpo"}function ar(t){const e=Math.sin(t*127.1)*43758.5453123;return e-Math.floor(e)}function Yn(t){return Number.isFinite(t)?Math.max(0,Math.min(1,t)):0}function sf(t){const e=t.getContext("2d",{alpha:!0});if(!e)throw new Error("Canvas 2D indisponivel para mapa.");const n=()=>{const i=t.getBoundingClientRect(),a=Math.max(1,Math.floor(i.width*window.devicePixelRatio)),r=Math.max(1,Math.floor(i.height*window.devicePixelRatio));(t.width!==a||t.height!==r)&&(t.width=a,t.height=r)};return n(),{render(i,a,r){n(),r?.active?ec(e,r,()=>Us(e,t,i,a)):Us(e,t,i,a)},resize:n,dispose(){e.clearRect(0,0,t.width,t.height)}}}function Us(t,e,n,i){const a=n.visual,r=Math.max(a.mapa??0,(a.ruas??0)*.82,(a.quadras??0)*.72,(a.rotas??0)*.8,(a.contorno??0)*.72,(a.pontos??0)*.7,(a.fluxo??0)*.82);if(e.style.opacity=String(gf(r)),t.clearRect(0,0,e.width,e.height),r<=.002)return;const o=e.width,s=e.height,l=.72+(n.sinais["cidade.densidade"]??0)*.5+(a.quadras??0)*.45,c=Math.max(a.ruas??0,r*.5),d=Math.max(a.quadras??0,r*.36),f=Math.max(a.rotas??0,a.fluxo??0),u=a.contorno??0,m=Math.max(a.pontos??0,(n.sinais["cidade.movimento"]??0)*.45),_=Math.max(a.fluxo??0,(n.sinais["cidade.movimento"]??0)*.4),E=.55+(a.azula??0)*.35,p=Math.max(42,Math.min(o,s)/(8+l*11));t.save(),t.globalCompositeOperation="screen",lf(t,o,s,r,E),cf(t,o,s,p,d,E),uf(t,o,s,u,i),df(t,o,s,p,c,i),ff(t,o,s,p,f,_,i),mf(t,o,s,p,m,i),t.restore()}function lf(t,e,n,i,a){const r=t.createLinearGradient(0,0,e,n);r.addColorStop(0,`rgba(0, ${Math.round(86+a*72)}, 255, ${.04+i*.08})`),r.addColorStop(.48,`rgba(9, ${Math.round(132+a*64)}, 255, ${.02+i*.05})`),r.addColorStop(1,`rgba(255, 248, 184, ${.015+i*.035})`),t.fillStyle=r,t.fillRect(0,0,e,n)}function cf(t,e,n,i,a,r){if(!(a<=.01)){t.lineWidth=.45,t.strokeStyle=`rgba(115, ${Math.round(188+r*50)}, 255, ${.08+a*.16})`,t.fillStyle=`rgba(1, 42, 95, ${.02+a*.055})`;for(let o=-i;o<n+i;o+=i)for(let s=-i;s<e+i;s+=i){const l=Fn(Math.floor(s/i),Math.floor(o/i)),c=i*(.12+l*.16),d=i*(.68+Fn(s+3,o+9)*.18),f=i*(.56+Fn(s+7,o+5)*.22);l>.18&&(t.fillRect(s+c,o+c,d,f),t.strokeRect(s+c,o+c,d,f))}}}function uf(t,e,n,i,a){if(i<=.01)return;t.lineWidth=.45,t.strokeStyle=`rgba(255, 244, 180, ${.08+i*.22})`;const r=5+Math.round(i*8);for(let o=0;o<r;o+=1){const s=o/r*n;t.beginPath();for(let l=-20;l<=e+20;l+=18){const c=Math.sin(l*.008+o*1.7+a*.24)*n*.025*i,d=Math.sin(l*.021+o*2.2)*n*.012*i,f=s+c+d;l<=-20?t.moveTo(l,f):t.lineTo(l,f)}t.stroke()}}function df(t,e,n,i,a,r){if(a<=.01)return;const o=Math.ceil(e/i)+4,s=Math.ceil(n/i)+4;t.lineCap="round",t.lineJoin="round";for(let l=-2;l<o;l+=1){const c=l*i+Math.sin(l*1.8)*i*.18;t.beginPath();for(let d=-2;d<s;d+=1){const f=d*i,u=Math.sin(d*.7+l*1.2+r*.08)*i*.16;d===-2?t.moveTo(c+u,f):t.lineTo(c+u,f)}Is(t,a,l%5===0)}for(let l=-2;l<s;l+=1){const c=l*i+Math.cos(l*1.4)*i*.16;t.beginPath();for(let d=-2;d<o;d+=1){const f=d*i,u=Math.cos(d*.9+l*1.1+r*.06)*i*.14;d===-2?t.moveTo(f,c+u):t.lineTo(f,c+u)}Is(t,a,l%4===0)}}function Is(t,e,n){t.lineWidth=n?.55+e*.05:.4+e*.15,t.strokeStyle=n?`rgba(255, 246, 176, ${.18+e*.42})`:`rgba(150, 218, 255, ${.12+e*.3})`,t.stroke()}function ff(t,e,n,i,a,r,o){if(a<=.01)return;const s=2+Math.round(a*5);for(let l=0;l<s;l+=1){const c={x:Fn(l,2)*e,y:Fn(l,7)*n},d=hf(c,e,n,i,l);t.beginPath(),d.forEach((f,u)=>{u===0?t.moveTo(f.x,f.y):t.lineTo(f.x,f.y)}),t.lineWidth=.4+a*.2,t.strokeStyle=`rgba(255, 233, 93, ${.18+a*.5})`,t.stroke(),pf(t,d,l,r,o)}}function hf(t,e,n,i,a){const r=[t];let o=t;for(let s=0;s<7;s+=1){const l=Fn(a+s*4,s+9)*Math.PI*2,c=i*(1.2+Fn(a+s,s+3)*2.2);o={x:Ns(o.x+Math.cos(l)*c,e),y:Ns(o.y+Math.sin(l)*c,n)},r.push(o)}return r}function pf(t,e,n,i,a){if(i<=.01)return;const r=e.length-1,o=(a*(.08+i*.35)+n*.19)%1,s=Math.min(r-1,Math.floor(o*r)),l=o*r-s,c=e[s],d=e[s+1],f=c.x+(d.x-c.x)*l,u=c.y+(d.y-c.y)*l;t.fillStyle=`rgba(255, 255, 212, ${.3+i*.58})`,t.beginPath(),t.arc(f,u,2+i*7,0,Math.PI*2),t.fill()}function mf(t,e,n,i,a,r){if(a<=.01)return;const o=16+Math.round(a*56);for(let s=0;s<o;s+=1){const l=Fn(s,12)*e,c=Fn(s,31)*n,d=(Math.sin(r*1.8+s)+1)/2,f=Math.max(1.5,i*.035)+d*a*4;t.fillStyle=`rgba(255, 248, 180, ${.16+d*a*.54})`,t.beginPath(),t.arc(l,c,f,0,Math.PI*2),t.fill()}}function Fn(t,e){const n=Math.sin(t*127.1+e*311.7)*43758.5453123;return n-Math.floor(n)}function Ns(t,e){return(t%e+e)%e}function gf(t){return Number.isFinite(t)?Math.max(0,Math.min(1,t)):0}function vf(t){const e=t.getContext("2d",{alpha:!0});if(!e)throw new Error("Canvas 2D indisponivel para satelites.");const n=()=>{const i=t.getBoundingClientRect(),a=Math.max(1,Math.floor(i.width*window.devicePixelRatio)),r=Math.max(1,Math.floor(i.height*window.devicePixelRatio));(t.width!==a||t.height!==r)&&(t.width=a,t.height=r)};return n(),{render(i,a,r){n(),r?.active?ec(e,r,()=>Fs(e,t,i,a)):Fs(e,t,i,a)},resize:n,dispose(){e.clearRect(0,0,t.width,t.height)}}}function Fs(t,e,n,i){const a=n.visual,r=Math.max(a.satelites??0,(a.orbita??0)*.88,(a.passagem??0)*.88);if(e.style.opacity=String(ts(r)),t.clearRect(0,0,e.width,e.height),r<=.002)return;const s=(n.satellites.tracks.length>0?n.satellites.tracks:Ef(i)).slice(0,8);t.save(),t.globalCompositeOperation="screen",_f(t,e.width,e.height,r);for(const[l,c]of s.entries())xf(t,e.width,e.height,c,r,l,i);t.restore()}function _f(t,e,n,i){const a=n*.82,r=t.createLinearGradient(0,a-n*.18,0,a+n*.08);r.addColorStop(0,`rgba(112, 210, 255, ${.02*i})`),r.addColorStop(1,`rgba(255, 245, 176, ${.12*i})`),t.fillStyle=r,t.fillRect(0,a-n*.18,e,n*.26)}function xf(t,e,n,i,a,r,o){const l=(i.path.length>1?i.path:yf(i,o,r)).filter(u=>u.elevation>-8);l.length>1&&(t.beginPath(),l.forEach((u,m)=>{const _=no(u.azimuth,u.elevation,e,n);m===0?t.moveTo(_.x,_.y):t.lineTo(_.x,_.y)}),t.lineWidth=.4+a*.2,t.strokeStyle=`rgba(170, 226, 255, ${.16+a*.34})`,t.stroke());const c=no(i.azimuth,i.elevation,e,n),d=Math.max(i.brightness,i.visible?.42:.16)*a,f=2+d*8;t.fillStyle=`rgba(255, 250, 190, ${.34+d*.56})`,t.shadowColor="rgba(130, 218, 255, 0.92)",t.shadowBlur=12+d*22,t.beginPath(),t.arc(c.x,c.y,f,0,Math.PI*2),t.fill(),t.shadowBlur=0,(i.visible||r<3)&&Mf(t,c.x,c.y,i,a),Sf(t,e,n,l,a,r,o)}function Mf(t,e,n,i,a){const r=`${i.name} ${Math.round(i.elevation)}°`;t.font=`${Math.max(10,Math.round(11*window.devicePixelRatio))}px "IBM Plex Mono", monospace`,t.fillStyle=`rgba(242, 250, 255, ${.32+a*.5})`,t.fillText(r,e+10,n-8)}function Sf(t,e,n,i,a,r,o){if(i.length<2)return;const s=(o*(.03+a*.08)+r*.17)%1,l=Math.min(i.length-2,Math.floor(s*(i.length-1))),c=s*(i.length-1)-l,d=i[l],f=i[l+1],u=d.azimuth+bf(d.azimuth,f.azimuth)*c,m=d.elevation+(f.elevation-d.elevation)*c,_=no(u,m,e,n);t.fillStyle=`rgba(255, 255, 235, ${.16+a*.5})`,t.beginPath(),t.arc(_.x,_.y,1.5+a*4,0,Math.PI*2),t.fill()}function no(t,e,n,i){const a=es(t)/360*n,r=ts((e+10)/100),o=i*(.84-r*.72);return{x:a,y:o}}function yf(t,e,n){return Array.from({length:9},(i,a)=>({azimuth:es(t.azimuth+(a-4)*(9+n)),elevation:t.elevation+Math.sin(e*.2+a*.7)*10-Math.abs(a-4)*2}))}function Ef(t){return Array.from({length:4},(e,n)=>{const i=t*(.05+n*.012)+n*1.4,a=Math.sin(i)*52-6,r=es(i*42+n*80);return{name:["ISS","HUBBLE","NOAA 19","TERRA"][n]??`SAT ${n+1}`,azimuth:r,elevation:a,rangeKm:600+n*220,visible:a>8,brightness:ts(a/70),path:[]}})}function bf(t,e){return((e-t)%360+540)%360-180}function es(t){return(t%360+360)%360}function ts(t){return Number.isFinite(t)?Math.max(0,Math.min(1,t)):0}const ns="184",Tf=0,zs=1,Af=2,Ya=1,wf=2,fa=3,ni=0,Wt=1,Un=2,zn=0,Vi=1,Os=2,Bs=3,Gs=4,Cf=5,fi=100,Rf=101,Pf=102,Lf=103,Df=104,Uf=200,If=201,Nf=202,Ff=203,io=204,ao=205,zf=206,Of=207,Bf=208,Gf=209,Vf=210,kf=211,Hf=212,Wf=213,Xf=214,ro=0,oo=1,so=2,Hi=3,lo=4,co=5,uo=6,fo=7,tc=0,qf=1,Yf=2,vn=0,nc=1,ic=2,ac=3,rc=4,oc=5,sc=6,lc=7,cc=300,xi=301,Wi=302,Mr=303,Sr=304,pr=306,ho=1e3,Nn=1001,po=1002,Ut=1003,$f=1004,Ea=1005,zt=1006,yr=1007,vi=1008,en=1009,uc=1010,dc=1011,ga=1012,is=1013,yn=1014,mn=1015,Gn=1016,as=1017,rs=1018,va=1020,fc=35902,hc=35899,pc=1021,mc=1022,cn=1023,Vn=1026,_i=1027,gc=1028,os=1029,Mi=1030,ss=1031,ls=1033,$a=33776,Ka=33777,Za=33778,ja=33779,mo=35840,go=35841,vo=35842,_o=35843,xo=36196,Mo=37492,So=37496,yo=37488,Eo=37489,rr=37490,bo=37491,To=37808,Ao=37809,wo=37810,Co=37811,Ro=37812,Po=37813,Lo=37814,Do=37815,Uo=37816,Io=37817,No=37818,Fo=37819,zo=37820,Oo=37821,Bo=36492,Go=36494,Vo=36495,ko=36283,Ho=36284,or=36285,Wo=36286,Kf=3200,Vs=0,Zf=1,ei="",Qt="srgb",sr="srgb-linear",lr="linear",ut="srgb",Ti=7680,ks=519,jf=512,Jf=513,Qf=514,cs=515,eh=516,th=517,us=518,nh=519,Hs=35044,Ws="300 es",gn=2e3,cr=2001;function ih(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ur(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ah(){const t=ur("canvas");return t.style.display="block",t}const Xs={};function qs(...t){const e="THREE."+t.shift();console.log(e,...t)}function vc(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function $e(...t){t=vc(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function st(...t){t=vc(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Xo(...t){const e=t.join(" ");e in Xs||(Xs[e]=!0,$e(...t))}function rh(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const oh={[ro]:oo,[so]:uo,[lo]:fo,[Hi]:co,[oo]:ro,[uo]:so,[fo]:lo,[co]:Hi};class yi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,o=a.length;r<o;r++)a[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Er=Math.PI/180,qo=180/Math.PI;function _a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function at(t,e,n){return Math.max(e,Math.min(n,t))}function sh(t,e){return(t%e+e)%e}function br(t,e,n){return(1-n)*t+n*e}function na(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ht(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const gs=class gs{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*a+e.x,this.y=r*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gs.prototype.isVector2=!0;let ft=gs;class $i{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,o,s){let l=i[a+0],c=i[a+1],d=i[a+2],f=i[a+3],u=r[o+0],m=r[o+1],_=r[o+2],E=r[o+3];if(f!==E||l!==u||c!==m||d!==_){let p=l*u+c*m+d*_+f*E;p<0&&(u=-u,m=-m,_=-_,E=-E,p=-p);let h=1-s;if(p<.9995){const S=Math.acos(p),A=Math.sin(S);h=Math.sin(h*S)/A,s=Math.sin(s*S)/A,l=l*h+u*s,c=c*h+m*s,d=d*h+_*s,f=f*h+E*s}else{l=l*h+u*s,c=c*h+m*s,d=d*h+_*s,f=f*h+E*s;const S=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=S,c*=S,d*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,a,r,o){const s=i[a],l=i[a+1],c=i[a+2],d=i[a+3],f=r[o],u=r[o+1],m=r[o+2],_=r[o+3];return e[n]=s*_+d*f+l*m-c*u,e[n+1]=l*_+d*u+c*f-s*m,e[n+2]=c*_+d*m+s*u-l*f,e[n+3]=d*_-s*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),d=s(a/2),f=s(r/2),u=l(i/2),m=l(a/2),_=l(r/2);switch(o){case"XYZ":this._x=u*d*f+c*m*_,this._y=c*m*f-u*d*_,this._z=c*d*_+u*m*f,this._w=c*d*f-u*m*_;break;case"YXZ":this._x=u*d*f+c*m*_,this._y=c*m*f-u*d*_,this._z=c*d*_-u*m*f,this._w=c*d*f+u*m*_;break;case"ZXY":this._x=u*d*f-c*m*_,this._y=c*m*f+u*d*_,this._z=c*d*_+u*m*f,this._w=c*d*f-u*m*_;break;case"ZYX":this._x=u*d*f-c*m*_,this._y=c*m*f+u*d*_,this._z=c*d*_-u*m*f,this._w=c*d*f+u*m*_;break;case"YZX":this._x=u*d*f+c*m*_,this._y=c*m*f+u*d*_,this._z=c*d*_-u*m*f,this._w=c*d*f-u*m*_;break;case"XZY":this._x=u*d*f-c*m*_,this._y=c*m*f-u*d*_,this._z=c*d*_+u*m*f,this._w=c*d*f+u*m*_;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],o=n[1],s=n[5],l=n[9],c=n[2],d=n[6],f=n[10],u=i+s+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-a)*m}else if(i>s&&i>f){const m=2*Math.sqrt(1+i-s-f);this._w=(d-l)/m,this._x=.25*m,this._y=(a+o)/m,this._z=(r+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-i-f);this._w=(r-c)/m,this._x=(a+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-s);this._w=(o-a)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,o=e._w,s=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*s+a*c-r*l,this._y=a*d+o*l+r*s-i*c,this._z=r*d+o*c+i*l-a*s,this._w=o*d-i*s-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,r=e._z,o=e._w,s=this.dot(e);s<0&&(i=-i,a=-a,r=-r,o=-o,s=-s);let l=1-n;if(s<.9995){const c=Math.acos(s),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vs=class vs{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ys.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ys.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*a-s*i),d=2*(s*n-r*a),f=2*(r*i-o*n);return this.x=n+l*c+o*f-s*d,this.y=i+l*d+s*c-r*f,this.z=a+l*f+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this.z=at(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this.z=at(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,o=n.x,s=n.y,l=n.z;return this.x=a*l-r*s,this.y=r*o-i*l,this.z=i*s-a*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tr.copy(this).projectOnVector(e),this.sub(Tr)}reflect(e){return this.sub(Tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vs.prototype.isVector3=!0;let W=vs;const Tr=new W,Ys=new $i,_s=class _s{constructor(e,n,i,a,r,o,s,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,o,s,l,c)}set(e,n,i,a,r,o,s,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=s,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],m=i[5],_=i[8],E=a[0],p=a[3],h=a[6],S=a[1],A=a[4],b=a[7],R=a[2],y=a[5],P=a[8];return r[0]=o*E+s*S+l*R,r[3]=o*p+s*A+l*y,r[6]=o*h+s*b+l*P,r[1]=c*E+d*S+f*R,r[4]=c*p+d*A+f*y,r[7]=c*h+d*b+f*P,r[2]=u*E+m*S+_*R,r[5]=u*p+m*A+_*y,r[8]=u*h+m*b+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*s*c-i*r*d+i*s*l+a*r*c-a*o*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=d*o-s*c,u=s*l-d*r,m=c*r-o*l,_=n*f+i*u+a*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=f*E,e[1]=(a*c-d*i)*E,e[2]=(s*i-a*o)*E,e[3]=u*E,e[4]=(d*n-a*l)*E,e[5]=(a*r-s*n)*E,e[6]=m*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*r)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,o,s){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-a*c,a*l,-a*(-c*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(Ar.makeScale(e,n)),this}rotate(e){return this.premultiply(Ar.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ar.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_s.prototype.isMatrix3=!0;let Qe=_s;const Ar=new Qe,$s=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ks=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lh(){const t={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(a,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(a.r=On(a.r),a.g=On(a.g),a.b=On(a.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(a.r=ki(a.r),a.g=ki(a.g),a.b=ki(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ei?lr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,o){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[sr]:{primaries:e,whitePoint:i,transfer:lr,toXYZ:$s,fromXYZ:Ks,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:$s,fromXYZ:Ks,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),t}const it=lh();function On(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ki(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ai;class ch{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ai===void 0&&(Ai=ur("canvas")),Ai.width=e.width,Ai.height=e.height;const a=Ai.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ai}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ur("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(On(n[i]/255)*255):n[i]=On(n[i]);return{data:n,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uh=0;class ds{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=_a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let o=0,s=a.length;o<s;o++)a[o].isDataTexture?r.push(wr(a[o].image)):r.push(wr(a[o]))}else r=wr(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function wr(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ch.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let dh=0;const Cr=new W;class Gt extends yi{constructor(e=Gt.DEFAULT_IMAGE,n=Gt.DEFAULT_MAPPING,i=Nn,a=Nn,r=zt,o=vi,s=cn,l=en,c=Gt.DEFAULT_ANISOTROPY,d=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=_a(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cr).x}get height(){return this.source.getSize(Cr).y}get depth(){return this.source.getSize(Cr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){$e(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){$e(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ho:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ho:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=cc;Gt.DEFAULT_ANISOTROPY=1;const xs=class xs{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*a+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*a+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*a+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*a+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],m=l[5],_=l[9],E=l[2],p=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-E)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+E)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(c+1)/2,b=(m+1)/2,R=(h+1)/2,y=(d+u)/4,P=(f+E)/4,v=(_+p)/4;return A>b&&A>R?A<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(A),a=y/i,r=P/i):b>R?b<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(b),i=y/a,r=v/a):R<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),i=P/r,a=v/r),this.set(i,a,r,n),this}let S=Math.sqrt((p-_)*(p-_)+(f-E)*(f-E)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(f-E)/S,this.z=(u-d)/S,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this.z=at(this.z,e.z,n.z),this.w=at(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this.z=at(this.z,e,n),this.w=at(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xs.prototype.isVector4=!0;let yt=xs;class fh extends yi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},r=new Gt(a),o=i.count;for(let s=0;s<o;s++)this.textures[s]=r.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new ds(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends fh{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _c extends Gt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hh extends Gt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fr=class fr{constructor(e,n,i,a,r,o,s,l,c,d,f,u,m,_,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,o,s,l,c,d,f,u,m,_,E,p)}set(e,n,i,a,r,o,s,l,c,d,f,u,m,_,E,p){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=a,h[1]=r,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=m,h[7]=_,h[11]=E,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fr().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,a=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),o=1/wi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=o*d,m=o*f,_=s*d,E=s*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=u-E*c,n[9]=-s*l,n[2]=E-u*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*d,m=l*f,_=c*d,E=c*f;n[0]=u+E*s,n[4]=_*s-m,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-s,n[2]=m*s-_,n[6]=E+u*s,n[10]=o*l}else if(e.order==="ZXY"){const u=l*d,m=l*f,_=c*d,E=c*f;n[0]=u-E*s,n[4]=-o*f,n[8]=_+m*s,n[1]=m+_*s,n[5]=o*d,n[9]=E-u*s,n[2]=-o*c,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const u=o*d,m=o*f,_=s*d,E=s*f;n[0]=l*d,n[4]=_*c-m,n[8]=u*c+E,n[1]=l*f,n[5]=E*c+u,n[9]=m*c-_,n[2]=-c,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,_=s*l,E=s*c;n[0]=l*d,n[4]=E-u*f,n[8]=_*f+m,n[1]=f,n[5]=o*d,n[9]=-s*d,n[2]=-c*d,n[6]=m*f+_,n[10]=u-E*f}else if(e.order==="XZY"){const u=o*l,m=o*c,_=s*l,E=s*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=u*f+E,n[5]=o*d,n[9]=m*f-_,n[2]=_*f-m,n[6]=s*d,n[10]=E*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ph,e,mh)}lookAt(e,n,i){const a=this.elements;return Yt.subVectors(e,n),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),$n.crossVectors(i,Yt),$n.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),$n.crossVectors(i,Yt)),$n.normalize(),ba.crossVectors(Yt,$n),a[0]=$n.x,a[4]=ba.x,a[8]=Yt.x,a[1]=$n.y,a[5]=ba.y,a[9]=Yt.y,a[2]=$n.z,a[6]=ba.z,a[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],m=i[13],_=i[2],E=i[6],p=i[10],h=i[14],S=i[3],A=i[7],b=i[11],R=i[15],y=a[0],P=a[4],v=a[8],T=a[12],U=a[1],w=a[5],I=a[9],X=a[13],q=a[2],D=a[6],z=a[10],O=a[14],Z=a[3],J=a[7],ce=a[11],me=a[15];return r[0]=o*y+s*U+l*q+c*Z,r[4]=o*P+s*w+l*D+c*J,r[8]=o*v+s*I+l*z+c*ce,r[12]=o*T+s*X+l*O+c*me,r[1]=d*y+f*U+u*q+m*Z,r[5]=d*P+f*w+u*D+m*J,r[9]=d*v+f*I+u*z+m*ce,r[13]=d*T+f*X+u*O+m*me,r[2]=_*y+E*U+p*q+h*Z,r[6]=_*P+E*w+p*D+h*J,r[10]=_*v+E*I+p*z+h*ce,r[14]=_*T+E*X+p*O+h*me,r[3]=S*y+A*U+b*q+R*Z,r[7]=S*P+A*w+b*D+R*J,r[11]=S*v+A*I+b*z+R*ce,r[15]=S*T+A*X+b*O+R*me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],o=e[1],s=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],m=e[14],_=e[3],E=e[7],p=e[11],h=e[15],S=l*m-c*u,A=s*m-c*f,b=s*u-l*f,R=o*m-c*d,y=o*u-l*d,P=o*f-s*d;return n*(E*S-p*A+h*b)-i*(_*S-p*R+h*y)+a*(_*A-E*R+h*P)-r*(_*b-E*y+p*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],m=e[11],_=e[12],E=e[13],p=e[14],h=e[15],S=n*s-i*o,A=n*l-a*o,b=n*c-r*o,R=i*l-a*s,y=i*c-r*s,P=a*c-r*l,v=d*E-f*_,T=d*p-u*_,U=d*h-m*_,w=f*p-u*E,I=f*h-m*E,X=u*h-m*p,q=S*X-A*I+b*w+R*U-y*T+P*v;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/q;return e[0]=(s*X-l*I+c*w)*D,e[1]=(a*I-i*X-r*w)*D,e[2]=(E*P-p*y+h*R)*D,e[3]=(u*y-f*P-m*R)*D,e[4]=(l*U-o*X-c*T)*D,e[5]=(n*X-a*U+r*T)*D,e[6]=(p*b-_*P-h*A)*D,e[7]=(d*P-u*b+m*A)*D,e[8]=(o*I-s*U+c*v)*D,e[9]=(i*U-n*I-r*v)*D,e[10]=(_*y-E*b+h*S)*D,e[11]=(f*b-d*y-m*S)*D,e[12]=(s*T-o*w-l*v)*D,e[13]=(n*w-i*T+a*v)*D,e[14]=(E*A-_*R-p*S)*D,e[15]=(d*R-f*A+u*S)*D,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,o=e.x,s=e.y,l=e.z,c=r*o,d=r*s;return this.set(c*o+i,c*s-a*l,c*l+a*s,0,c*s+a*l,d*s+i,d*l-a*o,0,c*l-a*s,d*l+a*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,o){return this.set(1,i,r,0,e,1,o,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,o=n._y,s=n._z,l=n._w,c=r+r,d=o+o,f=s+s,u=r*c,m=r*d,_=r*f,E=o*d,p=o*f,h=s*f,S=l*c,A=l*d,b=l*f,R=i.x,y=i.y,P=i.z;return a[0]=(1-(E+h))*R,a[1]=(m+b)*R,a[2]=(_-A)*R,a[3]=0,a[4]=(m-b)*y,a[5]=(1-(u+h))*y,a[6]=(p+S)*y,a[7]=0,a[8]=(_+A)*P,a[9]=(p-S)*P,a[10]=(1-(u+E))*P,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=wi.set(a[0],a[1],a[2]).length();const s=wi.set(a[4],a[5],a[6]).length(),l=wi.set(a[8],a[9],a[10]).length();r<0&&(o=-o),nn.copy(this);const c=1/o,d=1/s,f=1/l;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=d,nn.elements[5]*=d,nn.elements[6]*=d,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,n.setFromRotationMatrix(nn),i.x=o,i.y=s,i.z=l,this}makePerspective(e,n,i,a,r,o,s=gn,l=!1){const c=this.elements,d=2*r/(n-e),f=2*r/(i-a),u=(n+e)/(n-e),m=(i+a)/(i-a);let _,E;if(l)_=r/(o-r),E=o*r/(o-r);else if(s===gn)_=-(o+r)/(o-r),E=-2*o*r/(o-r);else if(s===cr)_=-o/(o-r),E=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,r,o,s=gn,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-a),u=-(n+e)/(n-e),m=-(i+a)/(i-a);let _,E;if(l)_=1/(o-r),E=o/(o-r);else if(s===gn)_=-2/(o-r),E=-(o+r)/(o-r);else if(s===cr)_=-1/(o-r),E=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};fr.prototype.isMatrix4=!0;let wt=fr;const wi=new W,nn=new wt,ph=new W(0,0,0),mh=new W(1,1,1),$n=new W,ba=new W,Yt=new W,Zs=new wt,js=new $i;class Si{constructor(e=0,n=0,i=0,a=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],o=a[4],s=a[8],l=a[1],c=a[5],d=a[9],f=a[2],u=a[6],m=a[10];switch(n){case"XYZ":this._y=Math.asin(at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zs,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return js.setFromEuler(this),this.setFromQuaternion(js,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gh=0;const Js=new W,Ci=new $i,wn=new wt,Ta=new W,ia=new W,vh=new W,_h=new $i,Qs=new W(1,0,0),el=new W(0,1,0),tl=new W(0,0,1),nl={type:"added"},xh={type:"removed"},Ri={type:"childadded",child:null},Rr={type:"childremoved",child:null};class Zt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new W,n=new Si,i=new $i,a=new W(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new wt},normalMatrix:{value:new Qe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ci.setFromAxisAngle(e,n),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,n){return Ci.setFromAxisAngle(e,n),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(Qs,e)}rotateY(e){return this.rotateOnAxis(el,e)}rotateZ(e){return this.rotateOnAxis(tl,e)}translateOnAxis(e,n){return Js.copy(e).applyQuaternion(this.quaternion),this.position.add(Js.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qs,e)}translateY(e){return this.translateOnAxis(el,e)}translateZ(e){return this.translateOnAxis(tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ta.copy(e):Ta.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(ia,Ta,this.up):wn.lookAt(Ta,ia,this.up),this.quaternion.setFromRotationMatrix(wn),a&&(wn.extractRotation(a.matrixWorld),Ci.setFromRotationMatrix(wn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xh),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,vh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,_h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(s=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(s=>({...s})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));a.material=s}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];a.animations.push(r(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=a,i;function o(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Zt.DEFAULT_UP=new W(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Aa extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mh={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const p=n.getJointPose(E,i),h=this._getHandJoint(c,E);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Mh)))}return s!==null&&(s.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Lr(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ht{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=it.workingColorSpace){if(e=sh(e,1),n=at(n,0,1),i=at(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Lr(o,r,e+1/3),this.g=Lr(o,r,e),this.b=Lr(o,r,e-1/3)}return it.colorSpaceToWorking(this,a),this}setStyle(e,n=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=a[1],s=a[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:$e("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qt){const i=Mc[e.toLowerCase()];return i!==void 0?this.setHex(i,n):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return it.workingToColorSpace(Ft.copy(this),e),Math.round(at(Ft.r*255,0,255))*65536+Math.round(at(Ft.g*255,0,255))*256+Math.round(at(Ft.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(Ft.copy(this),n);const i=Ft.r,a=Ft.g,r=Ft.b,o=Math.max(i,a,r),s=Math.min(i,a,r);let l,c;const d=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=d<=.5?f/(o+s):f/(2-o-s),o){case i:l=(a-r)/f+(a<r?6:0);break;case a:l=(r-i)/f+2;break;case r:l=(i-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Qt){it.workingToColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,a=Ft.b;return e!==Qt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+n,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Kn),e.getHSL(wa);const i=br(Kn.h,wa.h,n),a=br(Kn.s,wa.s,n),r=br(Kn.l,wa.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new ht;ht.NAMES=Mc;class Sh extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const an=new W,Cn=new W,Dr=new W,Rn=new W,Pi=new W,Li=new W,il=new W,Ur=new W,Ir=new W,Nr=new W,Fr=new yt,zr=new yt,Or=new yt;class ln{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),an.subVectors(e,n),a.cross(an);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){an.subVectors(a,n),Cn.subVectors(i,n),Dr.subVectors(e,n);const o=an.dot(an),s=an.dot(Cn),l=an.dot(Dr),c=Cn.dot(Cn),d=Cn.dot(Dr),f=o*c-s*s;if(f===0)return r.set(0,0,0),null;const u=1/f,m=(c*l-s*d)*u,_=(o*d-s*l)*u;return r.set(1-m-_,_,m)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,n,i,a,r,o,s,l){return this.getBarycoord(e,n,i,a,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(s,Rn.z),l)}static getInterpolatedAttribute(e,n,i,a,r,o){return Fr.setScalar(0),zr.setScalar(0),Or.setScalar(0),Fr.fromBufferAttribute(e,n),zr.fromBufferAttribute(e,i),Or.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(Fr,r.x),o.addScaledVector(zr,r.y),o.addScaledVector(Or,r.z),o}static isFrontFacing(e,n,i,a){return an.subVectors(i,n),Cn.subVectors(e,n),an.cross(Cn).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ln.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return ln.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let o,s;Pi.subVectors(a,i),Li.subVectors(r,i),Ur.subVectors(e,i);const l=Pi.dot(Ur),c=Li.dot(Ur);if(l<=0&&c<=0)return n.copy(i);Ir.subVectors(e,a);const d=Pi.dot(Ir),f=Li.dot(Ir);if(d>=0&&f<=d)return n.copy(a);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Pi,o);Nr.subVectors(e,r);const m=Pi.dot(Nr),_=Li.dot(Nr);if(_>=0&&m<=_)return n.copy(r);const E=m*c-l*_;if(E<=0&&c>=0&&_<=0)return s=c/(c-_),n.copy(i).addScaledVector(Li,s);const p=d*_-m*f;if(p<=0&&f-d>=0&&m-_>=0)return il.subVectors(r,a),s=(f-d)/(f-d+(m-_)),n.copy(a).addScaledVector(il,s);const h=1/(p+E+u);return o=E*h,s=u*h,n.copy(i).addScaledVector(Pi,o).addScaledVector(Li,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xa{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=r.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const a=e.children;for(let r=0,o=a.length;r<o;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Ra.subVectors(this.max,aa),Di.subVectors(e.a,aa),Ui.subVectors(e.b,aa),Ii.subVectors(e.c,aa),Zn.subVectors(Ui,Di),jn.subVectors(Ii,Ui),si.subVectors(Di,Ii);let n=[0,-Zn.z,Zn.y,0,-jn.z,jn.y,0,-si.z,si.y,Zn.z,0,-Zn.x,jn.z,0,-jn.x,si.z,0,-si.x,-Zn.y,Zn.x,0,-jn.y,jn.x,0,-si.y,si.x,0];return!Br(n,Di,Ui,Ii,Ra)||(n=[1,0,0,0,1,0,0,0,1],!Br(n,Di,Ui,Ii,Ra))?!1:(Pa.crossVectors(Zn,jn),n=[Pa.x,Pa.y,Pa.z],Br(n,Di,Ui,Ii,Ra))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new W,new W,new W,new W,new W,new W,new W,new W],rn=new W,Ca=new xa,Di=new W,Ui=new W,Ii=new W,Zn=new W,jn=new W,si=new W,aa=new W,Ra=new W,Pa=new W,li=new W;function Br(t,e,n,i,a){for(let r=0,o=t.length-3;r<=o;r+=3){li.fromArray(t,r);const s=a.x*Math.abs(li.x)+a.y*Math.abs(li.y)+a.z*Math.abs(li.z),l=e.dot(li),c=n.dot(li),d=i.dot(li);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>s)return!1}return!0}const bt=new W,La=new ft;let yh=0;class xn extends yi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yh++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hs,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)La.fromBufferAttribute(this,n),La.applyMatrix3(e),this.setXY(n,La.x,La.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=na(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=na(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=na(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),a=Ht(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),a=Ht(a,this.array),r=Ht(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hs&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Sc extends xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yc extends xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bn extends xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Eh=new xa,ra=new W,Gr=new W;class fs{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Eh.setFromPoints(e).getCenter(i);let a=0;for(let r=0,o=e.length;r<o;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const n=ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(ra,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(Gr)),this.expandByPoint(ra.copy(e.center).sub(Gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bh=0;const Jt=new wt,Vr=new Zt,Ni=new W,$t=new xa,oa=new xa,Lt=new W;class kn extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ih(e)?yc:Sc)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,n,i){return Jt.makeTranslation(e,n,i),this.applyMatrix4(Jt),this}scale(e,n,i){return Jt.makeScale(e,n,i),this.applyMatrix4(Jt),this}lookAt(e){return Vr.lookAt(e),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const o=e[a];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bn(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const s=n[r];oa.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors($t.min,oa.min),$t.expandByPoint(Lt),Lt.addVectors($t.max,oa.max),$t.expandByPoint(Lt)):($t.expandByPoint(oa.min),$t.expandByPoint(oa.max))}$t.getCenter(i);let a=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Lt));if(n)for(let r=0,o=n.length;r<o;r++){const s=n[r],l=this.morphTargetsRelative;for(let c=0,d=s.count;c<d;c++)Lt.fromBufferAttribute(s,c),l&&(Ni.fromBufferAttribute(e,c),Lt.add(Ni)),a=Math.max(a,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let v=0;v<i.count;v++)s[v]=new W,l[v]=new W;const c=new W,d=new W,f=new W,u=new ft,m=new ft,_=new ft,E=new W,p=new W;function h(v,T,U){c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,U),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,T),_.fromBufferAttribute(r,U),d.sub(c),f.sub(c),m.sub(u),_.sub(u);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(E.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(w),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(w),s[v].add(E),s[T].add(E),s[U].add(E),l[v].add(p),l[T].add(p),l[U].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,T=S.length;v<T;++v){const U=S[v],w=U.start,I=U.count;for(let X=w,q=w+I;X<q;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const A=new W,b=new W,R=new W,y=new W;function P(v){R.fromBufferAttribute(a,v),y.copy(R);const T=s[v];A.copy(T),A.sub(R.multiplyScalar(R.dot(T))).normalize(),b.crossVectors(y,T);const w=b.dot(l[v])<0?-1:1;o.setXYZW(v,A.x,A.y,A.z,w)}for(let v=0,T=S.length;v<T;++v){const U=S[v],w=U.start,I=U.count;for(let X=w,q=w+I;X<q;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const a=new W,r=new W,o=new W,s=new W,l=new W,c=new W,d=new W,f=new W;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),E=e.getX(u+1),p=e.getX(u+2);a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,E),o.fromBufferAttribute(n,p),d.subVectors(o,r),f.subVectors(a,r),d.cross(f),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,p),s.add(d),l.add(d),c.add(d),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)a.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),d.subVectors(o,r),f.subVectors(a,r),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(s,l){const c=s.array,d=s.itemSize,f=s.normalized,u=new c.constructor(l.length*d);let m=0,_=0;for(let E=0,p=l.length;E<p;E++){s.isInterleavedBufferAttribute?m=l[E]*s.data.stride+s.offset:m=l[E]*d;for(let h=0;h<d;h++)u[_++]=c[m++]}return new xn(u,d,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,i=this.index.array,a=this.attributes;for(const s in a){const l=a[s],c=e(l,i);n.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let d=0,f=c.length;d<f;d++){const u=c[d],m=e(u,i);l.push(m)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let u=0,m=f.length;u<m;u++)d.push(f[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Th=0;class mr extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=Vi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=ao,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ks,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){$e(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){$e(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==io&&(i.blendSrc=this.blendSrc),this.blendDst!==ao&&(i.blendDst=this.blendDst),this.blendEquation!==fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ks&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(n){const r=a(e.textures),o=a(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ln=new W,kr=new W,Da=new W,Jn=new W,Hr=new W,Ua=new W,Wr=new W;class Ah{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ln.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,n),Ln.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){kr.copy(e).add(n).multiplyScalar(.5),Da.copy(n).sub(e).normalize(),Jn.copy(this.origin).sub(kr);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Da),s=Jn.dot(this.direction),l=-Jn.dot(Da),c=Jn.lengthSq(),d=Math.abs(1-o*o);let f,u,m,_;if(d>0)if(f=o*l-s,u=o*s-l,_=r*d,f>=0)if(u>=-_)if(u<=_){const E=1/d;f*=E,u*=E,m=f*(f+o*u+2*s)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+s)),m=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+s)),m=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-o*r+s)),u=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(f=Math.max(0,-(o*r+s)),u=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+s)),m=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(kr).addScaledVector(Da,u),m}intersectSphere(e,n){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),a=Ln.dot(Ln)-i*i,r=e.radius*e.radius;if(a>r)return null;const o=Math.sqrt(r-a),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,o,s,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||r>a||((r>i||isNaN(i))&&(i=r),(o<a||isNaN(a))&&(a=o),f>=0?(s=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(s=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||s>a)||((s>i||i!==i)&&(i=s),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,n,i,a,r){Hr.subVectors(n,e),Ua.subVectors(i,e),Wr.crossVectors(Hr,Ua);let o=this.direction.dot(Wr),s;if(o>0){if(a)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=s*this.direction.dot(Ua.crossVectors(Jn,Ua));if(l<0)return null;const c=s*this.direction.dot(Hr.cross(Jn));if(c<0||l+c>o)return null;const d=-s*Jn.dot(Wr);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ec extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const al=new wt,ci=new Ah,Ia=new fs,rl=new W,Na=new W,Fa=new W,za=new W,Xr=new W,Oa=new W,ol=new W,Ba=new W;class En extends Zt{constructor(e=new kn,n=new Ec){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const s=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const s=this.morphTargetInfluences;if(r&&s){Oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=s[l],f=r[l];d!==0&&(Xr.fromBufferAttribute(f,e),o?Oa.addScaledVector(Xr,d):Oa.addScaledVector(Xr.sub(n),d))}n.add(Oa)}return n}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(Ia.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Ia,rl)===null||ci.origin.distanceToSquared(rl)>(e.far-e.near)**2))&&(al.copy(r).invert(),ci.copy(e.ray).applyMatrix4(al),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ci)))}_computeIntersections(e,n,i){let a;const r=this.geometry,o=this.material,s=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,E=u.length;_<E;_++){const p=u[_],h=o[p.materialIndex],S=Math.max(p.start,m.start),A=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,R=A;b<R;b+=3){const y=s.getX(b),P=s.getX(b+1),v=s.getX(b+2);a=Ga(this,h,e,i,c,d,f,y,P,v),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,n.push(a))}}else{const _=Math.max(0,m.start),E=Math.min(s.count,m.start+m.count);for(let p=_,h=E;p<h;p+=3){const S=s.getX(p),A=s.getX(p+1),b=s.getX(p+2);a=Ga(this,o,e,i,c,d,f,S,A,b),a&&(a.faceIndex=Math.floor(p/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,E=u.length;_<E;_++){const p=u[_],h=o[p.materialIndex],S=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,R=A;b<R;b+=3){const y=b,P=b+1,v=b+2;a=Ga(this,h,e,i,c,d,f,y,P,v),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,n.push(a))}}else{const _=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let p=_,h=E;p<h;p+=3){const S=p,A=p+1,b=p+2;a=Ga(this,o,e,i,c,d,f,S,A,b),a&&(a.faceIndex=Math.floor(p/3),n.push(a))}}}}function wh(t,e,n,i,a,r,o,s){let l;if(e.side===Wt?l=i.intersectTriangle(o,r,a,!0,s):l=i.intersectTriangle(a,r,o,e.side===ni,s),l===null)return null;Ba.copy(s),Ba.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ba);return c<n.near||c>n.far?null:{distance:c,point:Ba.clone(),object:t}}function Ga(t,e,n,i,a,r,o,s,l,c){t.getVertexPosition(s,Na),t.getVertexPosition(l,Fa),t.getVertexPosition(c,za);const d=wh(t,e,n,i,Na,Fa,za,ol);if(d){const f=new W;ln.getBarycoord(ol,Na,Fa,za,f),a&&(d.uv=ln.getInterpolatedAttribute(a,s,l,c,f,new ft)),r&&(d.uv1=ln.getInterpolatedAttribute(r,s,l,c,f,new ft)),o&&(d.normal=ln.getInterpolatedAttribute(o,s,l,c,f,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:s,b:l,c,normal:new W,materialIndex:0};ln.getNormal(Na,Fa,za,u.normal),d.face=u,d.barycoord=f}return d}class Ch extends Gt{constructor(e=null,n=1,i=1,a,r,o,s,l,c=Ut,d=Ut,f,u){super(null,o,s,l,c,d,a,r,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qr=new W,Rh=new W,Ph=new Qe;class di{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=qr.subVectors(i,n).cross(Rh.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(qr),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(a,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ph.getNormalMatrix(e),a=this.coplanarPoint(qr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new fs,Lh=new ft(.5,.5),Va=new W;class bc{constructor(e=new di,n=new di,i=new di,a=new di,r=new di,o=new di){this.planes=[e,n,i,a,r,o]}set(e,n,i,a,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(a),s[4].copy(r),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gn,i=!1){const a=this.planes,r=e.elements,o=r[0],s=r[1],l=r[2],c=r[3],d=r[4],f=r[5],u=r[6],m=r[7],_=r[8],E=r[9],p=r[10],h=r[11],S=r[12],A=r[13],b=r[14],R=r[15];if(a[0].setComponents(c-o,m-d,h-_,R-S).normalize(),a[1].setComponents(c+o,m+d,h+_,R+S).normalize(),a[2].setComponents(c+s,m+f,h+E,R+A).normalize(),a[3].setComponents(c-s,m-f,h-E,R-A).normalize(),i)a[4].setComponents(l,u,p,b).normalize(),a[5].setComponents(c-l,m-u,h-p,R-b).normalize();else if(a[4].setComponents(c-l,m-u,h-p,R-b).normalize(),n===gn)a[5].setComponents(c+l,m+u,h+p,R+b).normalize();else if(n===cr)a[5].setComponents(l,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ui.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);const n=Lh.distanceTo(e.center);return ui.radius=.7071067811865476+n,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Va.x=a.normal.x>0?e.max.x:e.min.x,Va.y=a.normal.y>0?e.max.y:e.min.y,Va.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tc extends Gt{constructor(e=[],n=xi,i,a,r,o,s,l,c,d){super(e,n,i,a,r,o,s,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xi extends Gt{constructor(e,n,i=yn,a,r,o,s=Ut,l=Ut,c,d=Vn,f=1){if(d!==Vn&&d!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,a,r,o,s,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Dh extends Xi{constructor(e,n=yn,i=xi,a,r,o=Ut,s=Ut,l,c=Vn){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,n,i,a,r,o,s,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ac extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ma extends kn{constructor(e=1,n=1,i=1,a=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:o};const s=this;a=Math.floor(a),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],f=[];let u=0,m=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,a,o,2),_("x","z","y",1,-1,e,i,-n,a,o,3),_("x","y","z",1,-1,e,n,i,a,r,4),_("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(d,3)),this.setAttribute("uv",new Bn(f,2));function _(E,p,h,S,A,b,R,y,P,v,T){const U=b/P,w=R/v,I=b/2,X=R/2,q=y/2,D=P+1,z=v+1;let O=0,Z=0;const J=new W;for(let ce=0;ce<z;ce++){const me=ce*w-X;for(let ue=0;ue<D;ue++){const ke=ue*U-I;J[E]=ke*S,J[p]=me*A,J[h]=q,c.push(J.x,J.y,J.z),J[E]=0,J[p]=0,J[h]=y>0?1:-1,d.push(J.x,J.y,J.z),f.push(ue/P),f.push(1-ce/v),O+=1}}for(let ce=0;ce<v;ce++)for(let me=0;me<P;me++){const ue=u+me+D*ce,ke=u+me+D*(ce+1),Xe=u+(me+1)+D*(ce+1),oe=u+(me+1)+D*ce;l.push(ue,ke,oe),l.push(ke,Xe,oe),Z+=6}s.addGroup(m,Z,T),m+=Z,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sa extends kn{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,o=n/2,s=Math.floor(i),l=Math.floor(a),c=s+1,d=l+1,f=e/s,u=n/l,m=[],_=[],E=[],p=[];for(let h=0;h<d;h++){const S=h*u-o;for(let A=0;A<c;A++){const b=A*f-r;_.push(b,-S,0),E.push(0,0,1),p.push(A/s),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<s;S++){const A=S+c*h,b=S+c*(h+1),R=S+1+c*(h+1),y=S+1+c*h;m.push(A,b,y),m.push(b,R,y)}this.setIndex(m),this.setAttribute("position",new Bn(_,3)),this.setAttribute("normal",new Bn(E,3)),this.setAttribute("uv",new Bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.widthSegments,e.heightSegments)}}function qi(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(sl(a))a.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(sl(a[0])){const r=[];for(let o=0,s=a.length;o<s;o++)r[o]=a[o].clone();e[n][i]=r}else e[n][i]=a.slice();else e[n][i]=a}}return e}function Bt(t){const e={};for(let n=0;n<t.length;n++){const i=qi(t[n]);for(const a in i)e[a]=i[a]}return e}function sl(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Uh(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wc(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Ih={clone:qi,merge:Bt};var Nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nh,this.fragmentShader=Fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=Uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?n.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[a]={type:"m4",value:o.toArray()}:n.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class zh extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oh extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bh extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ka=new W,Ha=new $i,fn=new W;class Cc extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ka,Ha,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ha,fn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(ka,Ha,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ha,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new W,ll=new ft,cl=new ft;class sn extends Cc{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,n){return this.getViewBounds(e,ll,cl),n.subVectors(cl,ll)}setViewOffset(e,n,i,a,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Er*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*a/l,n-=o.offsetY*i/c,a*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class hs extends Cc{constructor(e=-1,n=1,i=1,a=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,o=i+e,s=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fi=-90,zi=1;class Gh extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new sn(Fi,zi,e,n);a.layers=this.layers,this.add(a);const r=new sn(Fi,zi,e,n);r.layers=this.layers,this.add(r);const o=new sn(Fi,zi,e,n);o.layers=this.layers,this.add(o);const s=new sn(Fi,zi,e,n);s.layers=this.layers,this.add(s);const l=new sn(Fi,zi,e,n);l.layers=this.layers,this.add(l);const c=new sn(Fi,zi,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,o,s,l]=n;for(const c of n)this.remove(c);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(f,u,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Vh extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ms=class Ms{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=a,this}};Ms.prototype.isMatrix2=!0;let ul=Ms;function dl(t,e,n,i){const a=kh(i);switch(n){case pc:return t*e;case gc:return t*e/a.components*a.byteLength;case os:return t*e/a.components*a.byteLength;case Mi:return t*e*2/a.components*a.byteLength;case ss:return t*e*2/a.components*a.byteLength;case mc:return t*e*3/a.components*a.byteLength;case cn:return t*e*4/a.components*a.byteLength;case ls:return t*e*4/a.components*a.byteLength;case $a:case Ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Za:case ja:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case go:case _o:return Math.max(t,16)*Math.max(e,8)/4;case mo:case vo:return Math.max(t,8)*Math.max(e,8)/2;case xo:case Mo:case yo:case Eo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case So:case rr:case bo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wo:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Io:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Bo:case Go:case Vo:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ko:case Ho:return Math.ceil(t/4)*Math.ceil(e/4)*8;case or:case Wo:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kh(t){switch(t){case en:case uc:return{byteLength:1,components:1};case ga:case dc:case Gn:return{byteLength:2,components:1};case as:case rs:return{byteLength:2,components:4};case yn:case is:case mn:return{byteLength:4,components:1};case fc:case hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ns}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ns);function Rc(){let t=null,e=!1,n=null,i=null;function a(r,o){n(r,o),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Hh(t){const e=new WeakMap;function n(s,l){const c=s.array,d=s.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),s.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:f}}function i(s,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,s),f.length===0)t.bufferSubData(c,0,d);else{f.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<f.length;m++){const _=f[u],E=f[m];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++u,f[u]=E)}f.length=u+1;for(let m=0,_=f.length;m<_;m++){const E=f[m];t.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,n(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:a,remove:r,update:o}}var Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Wh,alphahash_pars_fragment:Xh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:$h,alphatest_pars_fragment:Kh,aomap_fragment:Zh,aomap_pars_fragment:jh,batching_pars_vertex:Jh,batching_vertex:Qh,begin_vertex:ep,beginnormal_vertex:tp,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:ap,clipping_planes_fragment:rp,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:sp,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:up,color_pars_vertex:dp,color_vertex:fp,common:hp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:vp,emissivemap_fragment:_p,emissivemap_pars_fragment:xp,colorspace_fragment:Mp,colorspace_pars_fragment:Sp,envmap_fragment:yp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:bp,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Fp,envmap_vertex:Ap,fog_vertex:wp,fog_pars_vertex:Cp,fog_fragment:Rp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Dp,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Ip,lights_pars_begin:Np,lights_toon_fragment:zp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Vp,lights_physical_pars_fragment:kp,lights_fragment_begin:Hp,lights_fragment_maps:Wp,lights_fragment_end:Xp,lightprobes_pars_fragment:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:Zp,map_fragment:jp,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:am,morphnormal_vertex:rm,morphtarget_pars_vertex:om,morphtarget_vertex:sm,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:vm,opaque_fragment:_m,packing:xm,premultiplied_alpha_fragment:Mm,project_vertex:Sm,dithering_fragment:ym,dithering_pars_fragment:Em,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:wm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Rm,skinbase_vertex:Pm,skinning_pars_vertex:Lm,skinning_vertex:Dm,skinnormal_vertex:Um,specularmap_fragment:Im,specularmap_pars_fragment:Nm,tonemapping_fragment:Fm,tonemapping_pars_fragment:zm,transmission_fragment:Om,transmission_pars_fragment:Bm,uv_pars_fragment:Gm,uv_pars_vertex:Vm,uv_vertex:km,worldpos_vertex:Hm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:$m,cube_frag:Km,depth_vert:Zm,depth_frag:jm,distance_vert:Jm,distance_frag:Qm,equirect_vert:e0,equirect_frag:t0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:a0,meshbasic_frag:r0,meshlambert_vert:o0,meshlambert_frag:s0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:u0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:h0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:v0,points_vert:_0,points_frag:x0,shadow_vert:M0,shadow_frag:S0,sprite_vert:y0,sprite_frag:E0},Se={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},pn={basic:{uniforms:Bt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Bt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Bt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Bt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Bt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ht(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Bt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Bt([Se.points,Se.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Bt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Bt([Se.common,Se.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Bt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Bt([Se.sprite,Se.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Bt([Se.common,Se.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Bt([Se.lights,Se.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};pn.physical={uniforms:Bt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Wa={r:0,b:0,g:0},b0=new wt,Pc=new Qe;Pc.set(-1,0,0,0,1,0,0,0,1);function T0(t,e,n,i,a,r){const o=new ht(0);let s=a===!0?0:1,l,c,d=null,f=0,u=null;function m(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const b=S.backgroundBlurriness>0;A=e.get(A,b)}return A}function _(S){let A=!1;const b=m(S);b===null?p(o,s):b&&b.isColor&&(p(b,1),A=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(S,A){const b=m(A);b&&(b.isCubeTexture||b.mapping===pr)?(c===void 0&&(c=new En(new Ma(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:qi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,y,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pc),c.material.toneMapped=it.getTransfer(b.colorSpace)!==ut,(d!==b||f!==b.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,u=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new En(new Sa(2,2),new un({name:"BackgroundMaterial",uniforms:qi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=it.getTransfer(b.colorSpace)!==ut,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,u=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,A){S.getRGB(Wa,wc(t)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,A,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),s=A,p(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(S){s=S,p(o,s)},render:_,addToRenderList:E,dispose:h}}function A0(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,o=!1;function s(w,I,X,q,D){let z=!1;const O=f(w,q,X,I);r!==O&&(r=O,c(r.object)),z=m(w,q,X,D),z&&_(w,q,X,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,b(w,I,X,q),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function d(w){return t.deleteVertexArray(w)}function f(w,I,X,q){const D=q.wireframe===!0;let z=i[I.id];z===void 0&&(z={},i[I.id]=z);const O=w.isInstancedMesh===!0?w.id:0;let Z=z[O];Z===void 0&&(Z={},z[O]=Z);let J=Z[X.id];J===void 0&&(J={},Z[X.id]=J);let ce=J[D];return ce===void 0&&(ce=u(l()),J[D]=ce),ce}function u(w){const I=[],X=[],q=[];for(let D=0;D<n;D++)I[D]=0,X[D]=0,q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:q,object:w,attributes:{},index:null}}function m(w,I,X,q){const D=r.attributes,z=I.attributes;let O=0;const Z=X.getAttributes();for(const J in Z)if(Z[J].location>=0){const me=D[J];let ue=z[J];if(ue===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),me===void 0||me.attribute!==ue||ue&&me.data!==ue.data)return!0;O++}return r.attributesNum!==O||r.index!==q}function _(w,I,X,q){const D={},z=I.attributes;let O=0;const Z=X.getAttributes();for(const J in Z)if(Z[J].location>=0){let me=z[J];me===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(me=w.instanceColor));const ue={};ue.attribute=me,me&&me.data&&(ue.data=me.data),D[J]=ue,O++}r.attributes=D,r.attributesNum=O,r.index=q}function E(){const w=r.newAttributes;for(let I=0,X=w.length;I<X;I++)w[I]=0}function p(w){h(w,0)}function h(w,I){const X=r.newAttributes,q=r.enabledAttributes,D=r.attributeDivisors;X[w]=1,q[w]===0&&(t.enableVertexAttribArray(w),q[w]=1),D[w]!==I&&(t.vertexAttribDivisor(w,I),D[w]=I)}function S(){const w=r.newAttributes,I=r.enabledAttributes;for(let X=0,q=I.length;X<q;X++)I[X]!==w[X]&&(t.disableVertexAttribArray(X),I[X]=0)}function A(w,I,X,q,D,z,O){O===!0?t.vertexAttribIPointer(w,I,X,D,z):t.vertexAttribPointer(w,I,X,q,D,z)}function b(w,I,X,q){E();const D=q.attributes,z=X.getAttributes(),O=I.defaultAttributeValues;for(const Z in z){const J=z[Z];if(J.location>=0){let ce=D[Z];if(ce===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),ce!==void 0){const me=ce.normalized,ue=ce.itemSize,ke=e.get(ce);if(ke===void 0)continue;const Xe=ke.buffer,oe=ke.type,V=ke.bytesPerElement,re=oe===t.INT||oe===t.UNSIGNED_INT||ce.gpuType===is;if(ce.isInterleavedBufferAttribute){const Q=ce.data,Me=Q.stride,Ee=ce.offset;if(Q.isInstancedInterleavedBuffer){for(let Ae=0;Ae<J.locationSize;Ae++)h(J.location+Ae,Q.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ae=0;Ae<J.locationSize;Ae++)p(J.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let Ae=0;Ae<J.locationSize;Ae++)A(J.location+Ae,ue/J.locationSize,oe,me,Me*V,(Ee+ue/J.locationSize*Ae)*V,re)}else{if(ce.isInstancedBufferAttribute){for(let Q=0;Q<J.locationSize;Q++)h(J.location+Q,ce.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Q=0;Q<J.locationSize;Q++)p(J.location+Q);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let Q=0;Q<J.locationSize;Q++)A(J.location+Q,ue/J.locationSize,oe,me,ue*V,ue/J.locationSize*Q*V,re)}}else if(O!==void 0){const me=O[Z];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(J.location,me);break;case 3:t.vertexAttrib3fv(J.location,me);break;case 4:t.vertexAttrib4fv(J.location,me);break;default:t.vertexAttrib1fv(J.location,me)}}}}S()}function R(){T();for(const w in i){const I=i[w];for(const X in I){const q=I[X];for(const D in q){const z=q[D];for(const O in z)d(z[O].object),delete z[O];delete q[D]}}delete i[w]}}function y(w){if(i[w.id]===void 0)return;const I=i[w.id];for(const X in I){const q=I[X];for(const D in q){const z=q[D];for(const O in z)d(z[O].object),delete z[O];delete q[D]}}delete i[w.id]}function P(w){for(const I in i){const X=i[I];for(const q in X){const D=X[q];if(D[w.id]===void 0)continue;const z=D[w.id];for(const O in z)d(z[O].object),delete z[O];delete D[w.id]}}}function v(w){for(const I in i){const X=i[I],q=w.isInstancedMesh===!0?w.id:0,D=X[q];if(D!==void 0){for(const z in D){const O=D[z];for(const Z in O)d(O[Z].object),delete O[Z];delete D[z]}delete X[q],Object.keys(X).length===0&&delete i[I]}}}function T(){U(),o=!0,r!==a&&(r=a,c(r.object))}function U(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:T,resetDefaultState:U,dispose:R,releaseStatesOfGeometry:y,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:p,disableUnusedAttributes:S}}function w0(t,e,n){let i;function a(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function s(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let m=0;m<d;m++)u+=c[m];n.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=s}function C0(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(P){return!(P!==cn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(P){const v=P===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==en&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==mn&&!v)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&($e("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),y=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:b,maxSamples:R,samples:y}}function R0(t){const e=this;let n=null,i=0,a=!1,r=!1;const o=new di,s=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||i!==0||a;return a=u,i=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){n=d(f,u,0)},this.setState=function(f,u,m){const _=f.clippingPlanes,E=f.clipIntersection,p=f.clipShadows,h=t.get(f);if(!a||_===null||_.length===0||r&&!p)r?d(null):c();else{const S=r?0:i,A=S*4;let b=h.clippingState||null;l.value=b,b=d(_,u,A,m);for(let R=0;R!==A;++R)b[R]=n[R];h.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,m,_){const E=f!==null?f.length:0;let p=null;if(E!==0){if(p=l.value,_!==!0||p===null){const h=m+E*4,S=u.matrixWorldInverse;s.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let A=0,b=m;A!==E;++A,b+=4)o.copy(f[A]).applyMatrix4(S,s),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}const ti=4,fl=[.125,.215,.35,.446,.526,.582],hi=20,P0=256,sa=new hs,hl=new ht;let Yr=null,$r=0,Kr=0,Zr=!1;const L0=new W;class pl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){const{size:o=256,position:s=L0}=r;Yr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,s),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yr,$r,Kr),this._renderer.xr.enabled=Zr,e.scissorTest=!1,Oi(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Gn,format:cn,colorSpace:sr,depthBuffer:!1},a=ml(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ml(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=D0(r)),this._blurMaterial=I0(r,e,n),this._ggxMaterial=U0(r,e,n)}return a}_compileMaterial(e){const n=new En(new kn,e);this._renderer.compile(n,sa)}_sceneToCubeUV(e,n,i,a,r){const l=new sn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(hl),f.toneMapping=vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(a),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new Ma,new Ec({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,p=E.material;let h=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,h=!0):(p.color.copy(hl),h=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[A],r.y,r.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[A]));const R=this._cubeSize;Oi(a,b*R,A>2?R:0,R,R),f.setRenderTarget(a),h&&f.render(E,l),f.render(e,l)}f.toneMapping=m,f.autoClear=u,e.background=S}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===xi||e.mapping===Wi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gl());const r=a?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;Oi(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,sa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[i];s.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=0+c*1.25,m=f*u,{_lodMax:_}=this,E=this._sizeLods[i],p=3*E*(i>_-ti?i-_+ti:0),h=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-n,Oi(r,p,h,3*E,2*E),a.setRenderTarget(r),a.render(s,sa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Oi(e,p,h,3*E,2*E),a.setRenderTarget(e),a.render(s,sa)}_blur(e,n,i,a,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,a,"latitudinal",r),this._halfBlur(o,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&st("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[a];f.material=c;const u=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*hi-1),E=r/_,p=isFinite(r)?1+Math.floor(d*E):hi;p>hi&&$e(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const h=[];let S=0;for(let P=0;P<hi;++P){const v=P/E,T=Math.exp(-v*v/2);h.push(T),P===0?S+=T:P<p&&(S+=2*T)}for(let P=0;P<h.length;P++)h[P]=h[P]/S;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=h,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:A}=this;u.dTheta.value=_,u.mipInt.value=A-i;const b=this._sizeLods[a],R=3*b*(a>A-ti?a-A+ti:0),y=4*(this._cubeSize-b);Oi(n,R,y,3*b,2*b),l.setRenderTarget(n),l.render(f,sa)}}function D0(t){const e=[],n=[],i=[];let a=t;const r=t-ti+1+fl.length;for(let o=0;o<r;o++){const s=Math.pow(2,a);e.push(s);let l=1/s;o>t-ti?l=fl[o-t+ti-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,E=3,p=2,h=1,S=new Float32Array(E*_*m),A=new Float32Array(p*_*m),b=new Float32Array(h*_*m);for(let y=0;y<m;y++){const P=y%3*2/3-1,v=y>2?0:-1,T=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];S.set(T,E*_*y),A.set(u,p*_*y);const U=[y,y,y,y,y,y];b.set(U,h*_*y)}const R=new kn;R.setAttribute("position",new xn(S,E)),R.setAttribute("uv",new xn(A,p)),R.setAttribute("faceIndex",new xn(b,h)),i.push(new En(R,null)),a>ti&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function ml(t,e,n){const i=new _n(t,e,n);return i.texture.mapping=pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oi(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function U0(t,e,n){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function I0(t,e,n){const i=new Float32Array(hi),a=new W(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function gl(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function vl(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function gr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Lc extends _n{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Tc(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ma(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:zn});r.uniforms.tEquirect.value=n;const o=new En(a,r),s=n.minFilter;return n.minFilter===vi&&(n.minFilter=zt),new Gh(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,a);e.setRenderTarget(r)}}function N0(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,m=!1){return u==null?null:m?o(u):r(u)}function r(u){if(u&&u.isTexture){const m=u.mapping;if(m===Mr||m===Sr)if(e.has(u)){const _=e.get(u).texture;return s(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const E=new Lc(_.height);return E.fromEquirectangularTexture(t,u),e.set(u,E),u.addEventListener("dispose",c),s(E.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,_=m===Mr||m===Sr,E=m===xi||m===Wi;if(_||E){let p=n.get(u);const h=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new pl(t)),p=_?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),p.texture;if(p!==void 0)return p.texture;{const S=u.image;return _&&S&&S.height>0||E&&S&&l(S)?(i===null&&(i=new pl(t)),p=_?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function s(u,m){return m===Mr?u.mapping=xi:m===Sr&&(u.mapping=Wi),u}function l(u){let m=0;const _=6;for(let E=0;E<_;E++)u[E]!==void 0&&m++;return m===_}function c(u){const m=u.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function F0(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Xo("WebGLRenderer: "+i+" extension not supported."),a}}}function z0(t,e,n,i){const a={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete a[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function s(f,u){return a[u.id]===!0||(u.addEventListener("dispose",o),a[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function c(f){const u=[],m=f.index,_=f.attributes.position;let E=0;if(_===void 0)return;if(m!==null){const S=m.array;E=m.version;for(let A=0,b=S.length;A<b;A+=3){const R=S[A+0],y=S[A+1],P=S[A+2];u.push(R,y,y,P,P,R)}}else{const S=_.array;E=_.version;for(let A=0,b=S.length/3-1;A<b;A+=3){const R=A+0,y=A+1,P=A+2;u.push(R,y,y,P,P,R)}}const p=new(_.count>=65535?yc:Sc)(u,1);p.version=E;const h=r.get(f);h&&e.remove(h),r.set(f,p)}function d(f){const u=r.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:s,update:l,getWireframeAttribute:d}}function O0(t,e,n){let i;function a(f){i=f}let r,o;function s(f){r=f.type,o=f.bytesPerElement}function l(f,u){t.drawElements(i,u,r,f*o),n.update(u,i,1)}function c(f,u,m){m!==0&&(t.drawElementsInstanced(i,u,r,f*o,m),n.update(u,i,m))}function d(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,m);let E=0;for(let p=0;p<m;p++)E+=u[p];n.update(E,i,1)}this.setMode=a,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function B0(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(r/3);break;case t.LINES:n.lines+=s*(r/2);break;case t.LINE_STRIP:n.lines+=s*(r-1);break;case t.LINE_LOOP:n.lines+=s*r;break;case t.POINTS:n.points+=s*r;break;default:st("WebGLInfo: Unknown draw mode:",o);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function G0(t,e,n){const i=new WeakMap,a=new yt;function r(o,s,l){const c=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(s);if(u===void 0||u.count!==f){let U=function(){v.dispose(),i.delete(s),s.removeEventListener("dispose",U)};var m=U;u!==void 0&&u.texture.dispose();const _=s.morphAttributes.position!==void 0,E=s.morphAttributes.normal!==void 0,p=s.morphAttributes.color!==void 0,h=s.morphAttributes.position||[],S=s.morphAttributes.normal||[],A=s.morphAttributes.color||[];let b=0;_===!0&&(b=1),E===!0&&(b=2),p===!0&&(b=3);let R=s.attributes.position.count*b,y=1;R>e.maxTextureSize&&(y=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*y*4*f),v=new _c(P,R,y,f);v.type=mn,v.needsUpdate=!0;const T=b*4;for(let w=0;w<f;w++){const I=h[w],X=S[w],q=A[w],D=R*y*4*w;for(let z=0;z<I.count;z++){const O=z*T;_===!0&&(a.fromBufferAttribute(I,z),P[D+O+0]=a.x,P[D+O+1]=a.y,P[D+O+2]=a.z,P[D+O+3]=0),E===!0&&(a.fromBufferAttribute(X,z),P[D+O+4]=a.x,P[D+O+5]=a.y,P[D+O+6]=a.z,P[D+O+7]=0),p===!0&&(a.fromBufferAttribute(q,z),P[D+O+8]=a.x,P[D+O+9]=a.y,P[D+O+10]=a.z,P[D+O+11]=q.itemSize===4?a.w:1)}}u={count:f,texture:v,size:new ft(R,y)},i.set(s,u),s.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const E=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function V0(t,e,n,i,a){let r=new WeakMap;function o(c){const d=a.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return u}function s(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:s}}const k0={[nc]:"LINEAR_TONE_MAPPING",[ic]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[rc]:"ACES_FILMIC_TONE_MAPPING",[sc]:"AGX_TONE_MAPPING",[lc]:"NEUTRAL_TONE_MAPPING",[oc]:"CUSTOM_TONE_MAPPING"};function H0(t,e,n,i,a){const r=new _n(e,n,{type:t,depthBuffer:i,stencilBuffer:a,depthTexture:i?new Xi(e,n):void 0}),o=new _n(e,n,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),s=new kn;s.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute("uv",new Bn([0,2,0,0,2,0],2));const l=new zh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new En(s,l),d=new hs(-1,1,1,-1,0,1);let f=null,u=null,m=!1,_,E=null,p=[],h=!1;this.setSize=function(S,A){r.setSize(S,A),o.setSize(S,A);for(let b=0;b<p.length;b++){const R=p[b];R.setSize&&R.setSize(S,A)}},this.setEffects=function(S){p=S,h=p.length>0&&p[0].isRenderPass===!0;const A=r.width,b=r.height;for(let R=0;R<p.length;R++){const y=p[R];y.setSize&&y.setSize(A,b)}},this.begin=function(S,A){if(m||S.toneMapping===vn&&p.length===0)return!1;if(E=A,A!==null){const b=A.width,R=A.height;(r.width!==b||r.height!==R)&&this.setSize(b,R)}return h===!1&&S.setRenderTarget(r),_=S.toneMapping,S.toneMapping=vn,!0},this.hasRenderPass=function(){return h},this.end=function(S,A){S.toneMapping=_,m=!0;let b=r,R=o;for(let y=0;y<p.length;y++){const P=p[y];if(P.enabled!==!1&&(P.render(S,R,b,A),P.needsSwap!==!1)){const v=b;b=R,R=v}}if(f!==S.outputColorSpace||u!==S.toneMapping){f=S.outputColorSpace,u=S.toneMapping,l.defines={},it.getTransfer(f)===ut&&(l.defines.SRGB_TRANSFER="");const y=k0[u];y&&(l.defines[y]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(E),S.render(c,d),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),s.dispose(),l.dispose()}}const Dc=new Gt,Yo=new Xi(1,1),Uc=new _c,Ic=new hh,Nc=new Tc,_l=[],xl=[],Ml=new Float32Array(16),Sl=new Float32Array(9),yl=new Float32Array(4);function Ki(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=_l[a];if(r===void 0&&(r=new Float32Array(a),_l[a]=r),e!==0){i.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(r,s)}return r}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vr(t,e){let n=xl[e];n===void 0&&(n=new Int32Array(e),xl[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function W0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function X0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function q0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function Y0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function $0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;yl.set(i),t.uniformMatrix2fv(this.addr,!1,yl),Rt(n,i)}}function K0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Sl.set(i),t.uniformMatrix3fv(this.addr,!1,Sl),Rt(n,i)}}function Z0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Ml.set(i),t.uniformMatrix4fv(this.addr,!1,Ml),Rt(n,i)}}function j0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function J0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function Q0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function eg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function tg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ng(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function ig(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function ag(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function rg(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(Yo.compareFunction=n.isReversedDepthBuffer()?us:cs,r=Yo):r=Dc,n.setTexture2D(e||r,a)}function og(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||Ic,a)}function sg(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||Nc,a)}function lg(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||Uc,a)}function cg(t){switch(t){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return $0;case 35675:return K0;case 35676:return Z0;case 5124:case 35670:return j0;case 35667:case 35671:return J0;case 35668:case 35672:return Q0;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return lg}}function ug(t,e){t.uniform1fv(this.addr,e)}function dg(t,e){const n=Ki(e,this.size,2);t.uniform2fv(this.addr,n)}function fg(t,e){const n=Ki(e,this.size,3);t.uniform3fv(this.addr,n)}function hg(t,e){const n=Ki(e,this.size,4);t.uniform4fv(this.addr,n)}function pg(t,e){const n=Ki(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mg(t,e){const n=Ki(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gg(t,e){const n=Ki(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function vg(t,e){t.uniform1iv(this.addr,e)}function _g(t,e){t.uniform2iv(this.addr,e)}function xg(t,e){t.uniform3iv(this.addr,e)}function Mg(t,e){t.uniform4iv(this.addr,e)}function Sg(t,e){t.uniform1uiv(this.addr,e)}function yg(t,e){t.uniform2uiv(this.addr,e)}function Eg(t,e){t.uniform3uiv(this.addr,e)}function bg(t,e){t.uniform4uiv(this.addr,e)}function Tg(t,e,n){const i=this.cache,a=e.length,r=vr(n,a);Ct(i,r)||(t.uniform1iv(this.addr,r),Rt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Yo:o=Dc;for(let s=0;s!==a;++s)n.setTexture2D(e[s]||o,r[s])}function Ag(t,e,n){const i=this.cache,a=e.length,r=vr(n,a);Ct(i,r)||(t.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==a;++o)n.setTexture3D(e[o]||Ic,r[o])}function wg(t,e,n){const i=this.cache,a=e.length,r=vr(n,a);Ct(i,r)||(t.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==a;++o)n.setTextureCube(e[o]||Nc,r[o])}function Cg(t,e,n){const i=this.cache,a=e.length,r=vr(n,a);Ct(i,r)||(t.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==a;++o)n.setTexture2DArray(e[o]||Uc,r[o])}function Rg(t){switch(t){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return hg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return vg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return yg;case 36295:return Eg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Cg}}class Pg{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cg(n.type)}}class Lg{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Rg(n.type)}}class Dg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const s=a[r];s.setValue(e,n[s.id],i)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function El(t,e){t.seq.push(e),t.map[e.id]=e}function Ug(t,e,n){const i=t.name,a=i.length;for(jr.lastIndex=0;;){const r=jr.exec(i),o=jr.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===a){El(n,c===void 0?new Pg(s,t,e):new Lg(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new Dg(s),El(n,f)),n=f}}}class Ja{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=e.getActiveUniform(n,o),l=e.getUniformLocation(n,s.name);Ug(s,l,this)}const a=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(o):r.push(o);a.length>0&&(this.seq=a.concat(r))}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,o=n.length;r!==o;++r){const s=n[r],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const o=e[a];o.id in n&&i.push(o)}return i}}function bl(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ig=37297;let Ng=0;function Fg(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=a;o<r;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}const Tl=new Qe;function zg(t){it._getMatrix(Tl,it.workingColorSpace,t);const e=`mat3( ${Tl.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case lr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Al(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Fg(t.getShaderSource(e),s)}else return r}function Og(t,e){const n=zg(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Bg={[nc]:"Linear",[ic]:"Reinhard",[ac]:"Cineon",[rc]:"ACESFilmic",[sc]:"AgX",[lc]:"Neutral",[oc]:"Custom"};function Gg(t,e){const n=Bg[e];return n===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xa=new W;function Vg(){it.getLuminanceCoefficients(Xa);const t=Xa.x.toFixed(4),e=Xa.y.toFixed(4),n=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kg(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function Hg(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Wg(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),o=r.name;let s=1;r.type===t.FLOAT_MAT2&&(s=2),r.type===t.FLOAT_MAT3&&(s=3),r.type===t.FLOAT_MAT4&&(s=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function ha(t){return t!==""}function wl(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cl(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(t){return t.replace(Xg,Yg)}const qg=new Map;function Yg(t,e){let n=et[e];if(n===void 0){const i=qg.get(e);if(i!==void 0)n=et[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $o(n)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(t){return t.replace($g,Kg)}function Kg(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Pl(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Zg={[Ya]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function jg(t){return Zg[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jg={[xi]:"ENVMAP_TYPE_CUBE",[Wi]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE_UV"};function Qg(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Jg[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const ev={[Wi]:"ENVMAP_MODE_REFRACTION"};function tv(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":ev[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nv={[tc]:"ENVMAP_BLENDING_MULTIPLY",[qf]:"ENVMAP_BLENDING_MIX",[Yf]:"ENVMAP_BLENDING_ADD"};function iv(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":nv[t.combine]||"ENVMAP_BLENDING_NONE"}function av(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function rv(t,e,n,i){const a=t.getContext(),r=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=jg(n),c=Qg(n),d=tv(n),f=iv(n),u=av(n),m=kg(n),_=Hg(r),E=a.createProgram();let p,h,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ha).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ha).join(`
`),h.length>0&&(h+=`
`)):(p=[Pl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),h=[Pl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vn?"#define TONE_MAPPING":"",n.toneMapping!==vn?et.tonemapping_pars_fragment:"",n.toneMapping!==vn?Gg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Og("linearToOutputTexel",n.outputColorSpace),Vg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ha).join(`
`)),o=$o(o),o=wl(o,n),o=Cl(o,n),s=$o(s),s=wl(s,n),s=Cl(s,n),o=Rl(o),s=Rl(s),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",n.glslVersion===Ws?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ws?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=S+p+o,b=S+h+s,R=bl(a,a.VERTEX_SHADER,A),y=bl(a,a.FRAGMENT_SHADER,b);a.attachShader(E,R),a.attachShader(E,y),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function P(w){if(t.debug.checkShaderErrors){const I=a.getProgramInfoLog(E)||"",X=a.getShaderInfoLog(R)||"",q=a.getShaderInfoLog(y)||"",D=I.trim(),z=X.trim(),O=q.trim();let Z=!0,J=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,E,R,y);else{const ce=Al(a,R,"vertex"),me=Al(a,y,"fragment");st("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+D+`
`+ce+`
`+me)}else D!==""?$e("WebGLProgram: Program Info Log:",D):(z===""||O==="")&&(J=!1);J&&(w.diagnostics={runnable:Z,programLog:D,vertexShader:{log:z,prefix:p},fragmentShader:{log:O,prefix:h}})}a.deleteShader(R),a.deleteShader(y),v=new Ja(a,E),T=Wg(a,E)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(E,Ig)),U},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ng++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=y,this}let ov=0;class sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lv(e),n.set(e,i)),i}}class lv{constructor(e){this.id=ov++,this.code=e,this.usedTimes=0}}function cv(t){return t===Mi||t===rr||t===or}function uv(t,e,n,i,a,r){const o=new xc,s=new sv,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function E(v,T,U,w,I,X){const q=w.fog,D=I.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||z,O),J=Z&&Z.mapping===pr?Z.image.height:null,ce=m[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&$e("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const me=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ue=me!==void 0?me.length:0;let ke=0;D.morphAttributes.position!==void 0&&(ke=1),D.morphAttributes.normal!==void 0&&(ke=2),D.morphAttributes.color!==void 0&&(ke=3);let Xe,oe,V,re;if(ce){const Ve=pn[ce];Xe=Ve.vertexShader,oe=Ve.fragmentShader}else Xe=v.vertexShader,oe=v.fragmentShader,s.update(v),V=s.getVertexShaderID(v),re=s.getFragmentShaderID(v);const Q=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),Ee=I.isInstancedMesh===!0,Ae=I.isBatchedMesh===!0,qe=!!v.map,ze=!!v.matcap,Ce=!!Z,Fe=!!v.aoMap,De=!!v.lightMap,Be=!!v.bumpMap,Oe=!!v.normalMap,je=!!v.displacementMap,C=!!v.emissiveMap,Ge=!!v.metalnessMap,Re=!!v.roughnessMap,He=v.anisotropy>0,te=v.clearcoat>0,We=v.dispersion>0,M=v.iridescence>0,g=v.sheen>0,F=v.transmission>0,Y=He&&!!v.anisotropyMap,ee=te&&!!v.clearcoatMap,ae=te&&!!v.clearcoatNormalMap,ie=te&&!!v.clearcoatRoughnessMap,k=M&&!!v.iridescenceMap,K=M&&!!v.iridescenceThicknessMap,ge=g&&!!v.sheenColorMap,he=g&&!!v.sheenRoughnessMap,ne=!!v.specularMap,se=!!v.specularColorMap,Ie=!!v.specularIntensityMap,Ne=F&&!!v.transmissionMap,Ze=F&&!!v.thicknessMap,L=!!v.gradientMap,de=!!v.alphaMap,$=v.alphaTest>0,ve=!!v.alphaHash,le=!!v.extensions;let j=vn;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(j=t.toneMapping);const ye={shaderID:ce,shaderType:v.type,shaderName:v.name,vertexShader:Xe,fragmentShader:oe,defines:v.defines,customVertexShaderID:V,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ae,batchingColor:Ae&&I._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&I.instanceColor!==null,instancingMorph:Ee&&I.morphTexture!==null,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:qe,matcap:ze,envMap:Ce,envMapMode:Ce&&Z.mapping,envMapCubeUVHeight:J,aoMap:Fe,lightMap:De,bumpMap:Be,normalMap:Oe,displacementMap:je,emissiveMap:C,normalMapObjectSpace:Oe&&v.normalMapType===Zf,normalMapTangentSpace:Oe&&v.normalMapType===Vs,packedNormalMap:Oe&&v.normalMapType===Vs&&cv(v.normalMap.format),metalnessMap:Ge,roughnessMap:Re,anisotropy:He,anisotropyMap:Y,clearcoat:te,clearcoatMap:ee,clearcoatNormalMap:ae,clearcoatRoughnessMap:ie,dispersion:We,iridescence:M,iridescenceMap:k,iridescenceThicknessMap:K,sheen:g,sheenColorMap:ge,sheenRoughnessMap:he,specularMap:ne,specularColorMap:se,specularIntensityMap:Ie,transmission:F,transmissionMap:Ne,thicknessMap:Ze,gradientMap:L,opaque:v.transparent===!1&&v.blending===Vi&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:$,alphaHash:ve,combine:v.combine,mapUv:qe&&_(v.map.channel),aoMapUv:Fe&&_(v.aoMap.channel),lightMapUv:De&&_(v.lightMap.channel),bumpMapUv:Be&&_(v.bumpMap.channel),normalMapUv:Oe&&_(v.normalMap.channel),displacementMapUv:je&&_(v.displacementMap.channel),emissiveMapUv:C&&_(v.emissiveMap.channel),metalnessMapUv:Ge&&_(v.metalnessMap.channel),roughnessMapUv:Re&&_(v.roughnessMap.channel),anisotropyMapUv:Y&&_(v.anisotropyMap.channel),clearcoatMapUv:ee&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(v.sheenRoughnessMap.channel),specularMapUv:ne&&_(v.specularMap.channel),specularColorMapUv:se&&_(v.specularColorMap.channel),specularIntensityMapUv:Ie&&_(v.specularIntensityMap.channel),transmissionMapUv:Ne&&_(v.transmissionMap.channel),thicknessMapUv:Ze&&_(v.thicknessMap.channel),alphaMapUv:de&&_(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Oe||He),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(qe||de),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&Oe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:I.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ke,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:j,decodeVideoTexture:qe&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===ut,decodeVideoTextureEmissive:C&&v.emissiveMap.isVideoTexture===!0&&it.getTransfer(v.emissiveMap.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Un,flipSided:v.side===Wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:le&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&v.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)T.push(U),T.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(h(T,v),S(T,v),T.push(t.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function h(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function A(v){const T=m[v.type];let U;if(T){const w=pn[T];U=Ih.clone(w.uniforms)}else U=v.uniforms;return U}function b(v,T){let U=d.get(T);return U!==void 0?++U.usedTimes:(U=new rv(t,T,v,a),c.push(U),d.set(T,U)),U}function R(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function y(v){s.remove(v)}function P(){s.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:A,acquireProgram:b,releaseProgram:R,releaseShaderCache:y,programs:c,dispose:P}}function dv(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function i(o){t.delete(o)}function a(o,s,l){t.get(o)[s]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function fv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ll(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dl(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function s(u,m,_,E,p,h){let S=t[e];return S===void 0?(S={id:u.id,object:u,geometry:m,material:_,materialVariant:o(u),groupOrder:E,renderOrder:u.renderOrder,z:p,group:h},t[e]=S):(S.id=u.id,S.object=u,S.geometry=m,S.material=_,S.materialVariant=o(u),S.groupOrder=E,S.renderOrder=u.renderOrder,S.z=p,S.group=h),e++,S}function l(u,m,_,E,p,h){const S=s(u,m,_,E,p,h);_.transmission>0?i.push(S):_.transparent===!0?a.push(S):n.push(S)}function c(u,m,_,E,p,h){const S=s(u,m,_,E,p,h);_.transmission>0?i.unshift(S):_.transparent===!0?a.unshift(S):n.unshift(S)}function d(u,m){n.length>1&&n.sort(u||fv),i.length>1&&i.sort(m||Ll),a.length>1&&a.sort(m||Ll)}function f(){for(let u=e,m=t.length;u<m;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:f,sort:d}}function hv(){let t=new WeakMap;function e(i,a){const r=t.get(i);let o;return r===void 0?(o=new Dl,t.set(i,[o])):a>=r.length?(o=new Dl,r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function pv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new ht};break;case"SpotLight":n={position:new W,direction:new W,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function mv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let gv=0;function vv(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _v(t){const e=new pv,n=mv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const a=new W,r=new wt,o=new wt;function s(c){let d=0,f=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,E=0,p=0,h=0,S=0,A=0,b=0,R=0,y=0,P=0;c.sort(vv);for(let T=0,U=c.length;T<U;T++){const w=c[T],I=w.color,X=w.intensity,q=w.distance;let D=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Mi?D=w.shadow.map.texture:D=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)d+=I.r*X,f+=I.g*X,u+=I.b*X;else if(w.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(w.sh.coefficients[z],X);P++}else if(w.isDirectionalLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const O=w.shadow,Z=n.get(w);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=D,i.directionalShadowMatrix[m]=w.shadow.matrix,S++}i.directional[m]=z,m++}else if(w.isSpotLight){const z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(I).multiplyScalar(X),z.distance=q,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,i.spot[E]=z;const O=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,O.updateMatrices(w),w.castShadow&&y++),i.spotLightMatrix[E]=O.matrix,w.castShadow){const Z=n.get(w);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,i.spotShadow[E]=Z,i.spotShadowMap[E]=D,b++}E++}else if(w.isRectAreaLight){const z=e.get(w);z.color.copy(I).multiplyScalar(X),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=z,p++}else if(w.isPointLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const O=w.shadow,Z=n.get(w);Z.shadowIntensity=O.intensity,Z.shadowBias=O.bias,Z.shadowNormalBias=O.normalBias,Z.shadowRadius=O.radius,Z.shadowMapSize=O.mapSize,Z.shadowCameraNear=O.camera.near,Z.shadowCameraFar=O.camera.far,i.pointShadow[_]=Z,i.pointShadowMap[_]=D,i.pointShadowMatrix[_]=w.shadow.matrix,A++}i.point[_]=z,_++}else if(w.isHemisphereLight){const z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(X),z.groundColor.copy(w.groundColor).multiplyScalar(X),i.hemi[h]=z,h++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==E||v.rectAreaLength!==p||v.hemiLength!==h||v.numDirectionalShadows!==S||v.numPointShadows!==A||v.numSpotShadows!==b||v.numSpotMaps!==R||v.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=p,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+R-y,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=P,v.directionalLength=m,v.pointLength=_,v.spotLength=E,v.rectAreaLength=p,v.hemiLength=h,v.numDirectionalShadows=S,v.numPointShadows=A,v.numSpotShadows=b,v.numSpotMaps=R,v.numLightProbes=P,i.version=gv++)}function l(c,d){let f=0,u=0,m=0,_=0,E=0;const p=d.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const A=c[h];if(A.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),f++}else if(A.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(A.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),u++}else if(A.isHemisphereLight){const b=i.hemi[E];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(p),E++}}}return{setup:s,setupView:l,state:i}}function Ul(t){const e=new _v(t),n=[],i=[],a=[];function r(u){f.camera=u,n.length=0,i.length=0,a.length=0}function o(u){n.push(u)}function s(u){i.push(u)}function l(u){a.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:s,pushLightProbeGrid:l}}function xv(t){let e=new WeakMap;function n(a,r=0){const o=e.get(a);let s;return o===void 0?(s=new Ul(t),e.set(a,[s])):r>=o.length?(s=new Ul(t),o.push(s)):s=o[r],s}function i(){e=new WeakMap}return{get:n,dispose:i}}const Mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yv=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Ev=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Il=new wt,la=new W,Jr=new W;function bv(t,e,n){let i=new bc;const a=new ft,r=new ft,o=new yt,s=new Oh,l=new Bh,c={},d=n.maxTextureSize,f={[ni]:Wt,[Wt]:ni,[Un]:Un},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Mv,fragmentShader:Sv}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new kn;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new En(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let h=this.type;this.render=function(y,P,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===wf&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ya);const T=t.getRenderTarget(),U=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),I=t.state;I.setBlending(zn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const X=h!==this.type;X&&P.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(D=>D.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,D=y.length;q<D;q++){const z=y[q],O=z.shadow;if(O===void 0){$e("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const Z=O.getFrameExtents();a.multiply(Z),r.copy(O.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/Z.x),a.x=r.x*Z.x,O.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/Z.y),a.y=r.y*Z.y,O.mapSize.y=r.y));const J=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=J,O.map===null||X===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===fa){if(z.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new _n(a.x,a.y,{format:Mi,type:Gn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new Xi(a.x,a.y,mn),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=Vn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ut,O.map.depthTexture.magFilter=Ut}else z.isPointLight?(O.map=new Lc(a.x),O.map.depthTexture=new Dh(a.x,yn)):(O.map=new _n(a.x,a.y),O.map.depthTexture=new Xi(a.x,a.y,yn)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=Vn,this.type===Ya?(O.map.depthTexture.compareFunction=J?us:cs,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ut,O.map.depthTexture.magFilter=Ut);O.camera.updateProjectionMatrix()}const ce=O.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ce;me++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,me),t.clear();else{me===0&&(t.setRenderTarget(O.map),t.clear());const ue=O.getViewport(me);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),I.viewport(o)}if(z.isPointLight){const ue=O.camera,ke=O.matrix,Xe=z.distance||ue.far;Xe!==ue.far&&(ue.far=Xe,ue.updateProjectionMatrix()),la.setFromMatrixPosition(z.matrixWorld),ue.position.copy(la),Jr.copy(ue.position),Jr.add(yv[me]),ue.up.copy(Ev[me]),ue.lookAt(Jr),ue.updateMatrixWorld(),ke.makeTranslation(-la.x,-la.y,-la.z),Il.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Il,ue.coordinateSystem,ue.reversedDepth)}else O.updateMatrices(z);i=O.getFrustum(),b(P,v,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===fa&&S(O,v),O.needsUpdate=!1}h=this.type,p.needsUpdate=!1,t.setRenderTarget(T,U,w)};function S(y,P){const v=e.update(E);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new _n(a.x,a.y,{format:Mi,type:Gn})),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,t.setRenderTarget(y.mapPass),t.clear(),t.renderBufferDirect(P,null,v,u,E,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,t.setRenderTarget(y.map),t.clear(),t.renderBufferDirect(P,null,v,m,E,null)}function A(y,P,v,T){let U=null;const w=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)U=w;else if(U=v.isPointLight===!0?l:s,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const I=U.uuid,X=P.uuid;let q=c[I];q===void 0&&(q={},c[I]=q);let D=q[X];D===void 0&&(D=U.clone(),q[X]=D,P.addEventListener("dispose",R)),U=D}if(U.visible=P.visible,U.wireframe=P.wireframe,T===fa?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:f[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const I=t.properties.get(U);I.light=v}return U}function b(y,P,v,T,U){if(y.visible===!1)return;if(y.layers.test(P.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&U===fa)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld);const X=e.update(y),q=y.material;if(Array.isArray(q)){const D=X.groups;for(let z=0,O=D.length;z<O;z++){const Z=D[z],J=q[Z.materialIndex];if(J&&J.visible){const ce=A(y,J,T,U);y.onBeforeShadow(t,y,P,v,X,ce,Z),t.renderBufferDirect(v,null,X,ce,y,Z),y.onAfterShadow(t,y,P,v,X,ce,Z)}}}else if(q.visible){const D=A(y,q,T,U);y.onBeforeShadow(t,y,P,v,X,D,null),t.renderBufferDirect(v,null,X,D,y,null),y.onAfterShadow(t,y,P,v,X,D,null)}}const I=y.children;for(let X=0,q=I.length;X<q;X++)b(I[X],P,v,T,U)}function R(y){y.target.removeEventListener("dispose",R);for(const v in c){const T=c[v],U=y.target.uuid;U in T&&(T[U].dispose(),delete T[U])}}}function Tv(t,e){function n(){let L=!1;const de=new yt;let $=null;const ve=new yt(0,0,0,0);return{setMask:function(le){$!==le&&!L&&(t.colorMask(le,le,le,le),$=le)},setLocked:function(le){L=le},setClear:function(le,j,ye,Ve,pe){pe===!0&&(le*=Ve,j*=Ve,ye*=Ve),de.set(le,j,ye,Ve),ve.equals(de)===!1&&(t.clearColor(le,j,ye,Ve),ve.copy(de))},reset:function(){L=!1,$=null,ve.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,$=null,ve=null,le=null;return{setReversed:function(j){if(de!==j){const ye=e.get("EXT_clip_control");j?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),de=j;const Ve=le;le=null,this.setClear(Ve)}},getReversed:function(){return de},setTest:function(j){j?Q(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(j){$!==j&&!L&&(t.depthMask(j),$=j)},setFunc:function(j){if(de&&(j=oh[j]),ve!==j){switch(j){case ro:t.depthFunc(t.NEVER);break;case oo:t.depthFunc(t.ALWAYS);break;case so:t.depthFunc(t.LESS);break;case Hi:t.depthFunc(t.LEQUAL);break;case lo:t.depthFunc(t.EQUAL);break;case co:t.depthFunc(t.GEQUAL);break;case uo:t.depthFunc(t.GREATER);break;case fo:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=j}},setLocked:function(j){L=j},setClear:function(j){le!==j&&(le=j,de&&(j=1-j),t.clearDepth(j))},reset:function(){L=!1,$=null,ve=null,le=null,de=!1}}}function a(){let L=!1,de=null,$=null,ve=null,le=null,j=null,ye=null,Ve=null,pe=null;return{setTest:function(Ye){L||(Ye?Q(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(Ye){de!==Ye&&!L&&(t.stencilMask(Ye),de=Ye)},setFunc:function(Ye,mt,Et){($!==Ye||ve!==mt||le!==Et)&&(t.stencilFunc(Ye,mt,Et),$=Ye,ve=mt,le=Et)},setOp:function(Ye,mt,Et){(j!==Ye||ye!==mt||Ve!==Et)&&(t.stencilOp(Ye,mt,Et),j=Ye,ye=mt,Ve=Et)},setLocked:function(Ye){L=Ye},setClear:function(Ye){pe!==Ye&&(t.clearStencil(Ye),pe=Ye)},reset:function(){L=!1,de=null,$=null,ve=null,le=null,j=null,ye=null,Ve=null,pe=null}}}const r=new n,o=new i,s=new a,l=new WeakMap,c=new WeakMap;let d={},f={},u={},m=new WeakMap,_=[],E=null,p=!1,h=null,S=null,A=null,b=null,R=null,y=null,P=null,v=new ht(0,0,0),T=0,U=!1,w=null,I=null,X=null,q=null,D=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),O=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),O=Z>=2);let ce=null,me={};const ue=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),Xe=new yt().fromArray(ue),oe=new yt().fromArray(ke);function V(L,de,$,ve){const le=new Uint8Array(4),j=t.createTexture();t.bindTexture(L,j),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<$;ye++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(de+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return j}const re={};re[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),Q(t.DEPTH_TEST),o.setFunc(Hi),Be(!1),Oe(zs),Q(t.CULL_FACE),Fe(zn);function Q(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Me(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Ee(L,de){return u[L]!==de?(t.bindFramebuffer(L,de),u[L]=de,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Ae(L,de){let $=_,ve=!1;if(L){$=m.get(de),$===void 0&&($=[],m.set(de,$));const le=L.textures;if($.length!==le.length||$[0]!==t.COLOR_ATTACHMENT0){for(let j=0,ye=le.length;j<ye;j++)$[j]=t.COLOR_ATTACHMENT0+j;$.length=le.length,ve=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,ve=!0);ve&&t.drawBuffers($)}function qe(L){return E!==L?(t.useProgram(L),E=L,!0):!1}const ze={[fi]:t.FUNC_ADD,[Rf]:t.FUNC_SUBTRACT,[Pf]:t.FUNC_REVERSE_SUBTRACT};ze[Lf]=t.MIN,ze[Df]=t.MAX;const Ce={[Uf]:t.ZERO,[If]:t.ONE,[Nf]:t.SRC_COLOR,[io]:t.SRC_ALPHA,[Vf]:t.SRC_ALPHA_SATURATE,[Bf]:t.DST_COLOR,[zf]:t.DST_ALPHA,[Ff]:t.ONE_MINUS_SRC_COLOR,[ao]:t.ONE_MINUS_SRC_ALPHA,[Gf]:t.ONE_MINUS_DST_COLOR,[Of]:t.ONE_MINUS_DST_ALPHA,[kf]:t.CONSTANT_COLOR,[Hf]:t.ONE_MINUS_CONSTANT_COLOR,[Wf]:t.CONSTANT_ALPHA,[Xf]:t.ONE_MINUS_CONSTANT_ALPHA};function Fe(L,de,$,ve,le,j,ye,Ve,pe,Ye){if(L===zn){p===!0&&(Me(t.BLEND),p=!1);return}if(p===!1&&(Q(t.BLEND),p=!0),L!==Cf){if(L!==h||Ye!==U){if((S!==fi||R!==fi)&&(t.blendEquation(t.FUNC_ADD),S=fi,R=fi),Ye)switch(L){case Vi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Os:t.blendFunc(t.ONE,t.ONE);break;case Bs:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gs:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:st("WebGLState: Invalid blending: ",L);break}else switch(L){case Vi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Bs:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gs:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",L);break}A=null,b=null,y=null,P=null,v.set(0,0,0),T=0,h=L,U=Ye}return}le=le||de,j=j||$,ye=ye||ve,(de!==S||le!==R)&&(t.blendEquationSeparate(ze[de],ze[le]),S=de,R=le),($!==A||ve!==b||j!==y||ye!==P)&&(t.blendFuncSeparate(Ce[$],Ce[ve],Ce[j],Ce[ye]),A=$,b=ve,y=j,P=ye),(Ve.equals(v)===!1||pe!==T)&&(t.blendColor(Ve.r,Ve.g,Ve.b,pe),v.copy(Ve),T=pe),h=L,U=!1}function De(L,de){L.side===Un?Me(t.CULL_FACE):Q(t.CULL_FACE);let $=L.side===Wt;de&&($=!$),Be($),L.blending===Vi&&L.transparent===!1?Fe(zn):Fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const ve=L.stencilWrite;s.setTest(ve),ve&&(s.setMask(L.stencilWriteMask),s.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),s.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),C(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){w!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),w=L)}function Oe(L){L!==Tf?(Q(t.CULL_FACE),L!==I&&(L===zs?t.cullFace(t.BACK):L===Af?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),I=L}function je(L){L!==X&&(O&&t.lineWidth(L),X=L)}function C(L,de,$){L?(Q(t.POLYGON_OFFSET_FILL),(q!==de||D!==$)&&(q=de,D=$,o.getReversed()&&(de=-de),t.polygonOffset(de,$))):Me(t.POLYGON_OFFSET_FILL)}function Ge(L){L?Q(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function Re(L){L===void 0&&(L=t.TEXTURE0+z-1),ce!==L&&(t.activeTexture(L),ce=L)}function He(L,de,$){$===void 0&&(ce===null?$=t.TEXTURE0+z-1:$=ce);let ve=me[$];ve===void 0&&(ve={type:void 0,texture:void 0},me[$]=ve),(ve.type!==L||ve.texture!==de)&&(ce!==$&&(t.activeTexture($),ce=$),t.bindTexture(L,de||re[L]),ve.type=L,ve.texture=de)}function te(){const L=me[ce];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function We(){try{t.compressedTexImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function M(){try{t.compressedTexImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function g(){try{t.texSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function F(){try{t.texSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function ae(){try{t.texStorage2D(...arguments)}catch(L){st("WebGLState:",L)}}function ie(){try{t.texStorage3D(...arguments)}catch(L){st("WebGLState:",L)}}function k(){try{t.texImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function K(){try{t.texImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function ge(L){return f[L]!==void 0?f[L]:t.getParameter(L)}function he(L,de){f[L]!==de&&(t.pixelStorei(L,de),f[L]=de)}function ne(L){Xe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Xe.copy(L))}function se(L){oe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),oe.copy(L))}function Ie(L,de){let $=c.get(de);$===void 0&&($=new WeakMap,c.set(de,$));let ve=$.get(L);ve===void 0&&(ve=t.getUniformBlockIndex(de,L.name),$.set(L,ve))}function Ne(L,de){const ve=c.get(de).get(L);l.get(de)!==ve&&(t.uniformBlockBinding(de,ve,L.__bindingPointIndex),l.set(de,ve))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},f={},ce=null,me={},u={},m=new WeakMap,_=[],E=null,p=!1,h=null,S=null,A=null,b=null,R=null,y=null,P=null,v=new ht(0,0,0),T=0,U=!1,w=null,I=null,X=null,q=null,D=null,Xe.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:Q,disable:Me,bindFramebuffer:Ee,drawBuffers:Ae,useProgram:qe,setBlending:Fe,setMaterial:De,setFlipSided:Be,setCullFace:Oe,setLineWidth:je,setPolygonOffset:C,setScissorTest:Ge,activeTexture:Re,bindTexture:He,unbindTexture:te,compressedTexImage2D:We,compressedTexImage3D:M,texImage2D:k,texImage3D:K,pixelStorei:he,getParameter:ge,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:ae,texStorage3D:ie,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:Y,compressedTexSubImage3D:ee,scissor:ne,viewport:se,reset:Ze}}function Av(t,e,n,i,a,r,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,d=new WeakMap,f=new Set;let u;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,g){return _?new OffscreenCanvas(M,g):ur("canvas")}function p(M,g,F){let Y=1;const ee=We(M);if((ee.width>F||ee.height>F)&&(Y=F/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ae=Math.floor(Y*ee.width),ie=Math.floor(Y*ee.height);u===void 0&&(u=E(ae,ie));const k=g?E(ae,ie):u;return k.width=ae,k.height=ie,k.getContext("2d").drawImage(M,0,0,ae,ie),$e("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ae+"x"+ie+")."),k}else return"data"in M&&$e("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),M;return M}function h(M){return M.generateMipmaps}function S(M){t.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(M,g,F,Y,ee,ae=!1){if(M!==null){if(t[M]!==void 0)return t[M];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ie;Y&&(ie=e.get("EXT_texture_norm16"),ie||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=g;if(g===t.RED&&(F===t.FLOAT&&(k=t.R32F),F===t.HALF_FLOAT&&(k=t.R16F),F===t.UNSIGNED_BYTE&&(k=t.R8),F===t.UNSIGNED_SHORT&&ie&&(k=ie.R16_EXT),F===t.SHORT&&ie&&(k=ie.R16_SNORM_EXT)),g===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.R8UI),F===t.UNSIGNED_SHORT&&(k=t.R16UI),F===t.UNSIGNED_INT&&(k=t.R32UI),F===t.BYTE&&(k=t.R8I),F===t.SHORT&&(k=t.R16I),F===t.INT&&(k=t.R32I)),g===t.RG&&(F===t.FLOAT&&(k=t.RG32F),F===t.HALF_FLOAT&&(k=t.RG16F),F===t.UNSIGNED_BYTE&&(k=t.RG8),F===t.UNSIGNED_SHORT&&ie&&(k=ie.RG16_EXT),F===t.SHORT&&ie&&(k=ie.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.RG8UI),F===t.UNSIGNED_SHORT&&(k=t.RG16UI),F===t.UNSIGNED_INT&&(k=t.RG32UI),F===t.BYTE&&(k=t.RG8I),F===t.SHORT&&(k=t.RG16I),F===t.INT&&(k=t.RG32I)),g===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.RGB8UI),F===t.UNSIGNED_SHORT&&(k=t.RGB16UI),F===t.UNSIGNED_INT&&(k=t.RGB32UI),F===t.BYTE&&(k=t.RGB8I),F===t.SHORT&&(k=t.RGB16I),F===t.INT&&(k=t.RGB32I)),g===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(k=t.RGBA16UI),F===t.UNSIGNED_INT&&(k=t.RGBA32UI),F===t.BYTE&&(k=t.RGBA8I),F===t.SHORT&&(k=t.RGBA16I),F===t.INT&&(k=t.RGBA32I)),g===t.RGB&&(F===t.UNSIGNED_SHORT&&ie&&(k=ie.RGB16_EXT),F===t.SHORT&&ie&&(k=ie.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(k=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(k=t.R11F_G11F_B10F)),g===t.RGBA){const K=ae?lr:it.getTransfer(ee);F===t.FLOAT&&(k=t.RGBA32F),F===t.HALF_FLOAT&&(k=t.RGBA16F),F===t.UNSIGNED_BYTE&&(k=K===ut?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&ie&&(k=ie.RGBA16_EXT),F===t.SHORT&&ie&&(k=ie.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(k=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(k=t.RGB5_A1)}return(k===t.R16F||k===t.R32F||k===t.RG16F||k===t.RG32F||k===t.RGBA16F||k===t.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function R(M,g){let F;return M?g===null||g===yn||g===va?F=t.DEPTH24_STENCIL8:g===mn?F=t.DEPTH32F_STENCIL8:g===ga&&(F=t.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===yn||g===va?F=t.DEPTH_COMPONENT24:g===mn?F=t.DEPTH_COMPONENT32F:g===ga&&(F=t.DEPTH_COMPONENT16),F}function y(M,g){return h(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ut&&M.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function P(M){const g=M.target;g.removeEventListener("dispose",P),T(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&f.delete(g)}function v(M){const g=M.target;g.removeEventListener("dispose",v),w(g)}function T(M){const g=i.get(M);if(g.__webglInit===void 0)return;const F=M.source,Y=m.get(F);if(Y){const ee=Y[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&U(M),Object.keys(Y).length===0&&m.delete(F)}i.remove(M)}function U(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const F=M.source,Y=m.get(F);delete Y[g.__cacheKey],o.memory.textures--}function w(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let ee=0;ee<g.__webglFramebuffer[Y].length;ee++)t.deleteFramebuffer(g.__webglFramebuffer[Y][ee]);else t.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)t.deleteFramebuffer(g.__webglFramebuffer[Y]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=M.textures;for(let Y=0,ee=F.length;Y<ee;Y++){const ae=i.get(F[Y]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(M)}let I=0;function X(){I=0}function q(){return I}function D(M){I=M}function z(){const M=I;return M>=a.maxTextures&&$e("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+a.maxTextures),I+=1,M}function O(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function Z(M,g){const F=i.get(M);if(M.isVideoTexture&&He(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){const Y=M.image;if(Y===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(F,M,g);return}}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+g)}function J(M,g){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){Me(F,M,g);return}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+g)}function ce(M,g){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){Me(F,M,g);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+g)}function me(M,g){const F=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&F.__version!==M.version){Ee(F,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+g)}const ue={[ho]:t.REPEAT,[Nn]:t.CLAMP_TO_EDGE,[po]:t.MIRRORED_REPEAT},ke={[Ut]:t.NEAREST,[$f]:t.NEAREST_MIPMAP_NEAREST,[Ea]:t.NEAREST_MIPMAP_LINEAR,[zt]:t.LINEAR,[yr]:t.LINEAR_MIPMAP_NEAREST,[vi]:t.LINEAR_MIPMAP_LINEAR},Xe={[jf]:t.NEVER,[nh]:t.ALWAYS,[Jf]:t.LESS,[cs]:t.LEQUAL,[Qf]:t.EQUAL,[us]:t.GEQUAL,[eh]:t.GREATER,[th]:t.NOTEQUAL};function oe(M,g){if(g.type===mn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===zt||g.magFilter===yr||g.magFilter===Ea||g.magFilter===vi||g.minFilter===zt||g.minFilter===yr||g.minFilter===Ea||g.minFilter===vi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,ue[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,ue[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,ue[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,ke[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,ke[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Xe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ut||g.minFilter!==Ea&&g.minFilter!==vi||g.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function V(M,g){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",P));const Y=g.source;let ee=m.get(Y);ee===void 0&&(ee={},m.set(Y,ee));const ae=O(g);if(ae!==M.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[ae].usedTimes++;const ie=ee[M.__cacheKey];ie!==void 0&&(ee[M.__cacheKey].usedTimes--,ie.usedTimes===0&&U(g)),M.__cacheKey=ae,M.__webglTexture=ee[ae].texture}return F}function re(M,g,F){return Math.floor(Math.floor(M/F)/g)}function Q(M,g,F,Y){const ae=M.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,F,Y,g.data);else{ae.sort((he,ne)=>he.start-ne.start);let ie=0;for(let he=1;he<ae.length;he++){const ne=ae[ie],se=ae[he],Ie=ne.start+ne.count,Ne=re(se.start,g.width,4),Ze=re(ne.start,g.width,4);se.start<=Ie+1&&Ne===Ze&&re(se.start+se.count-1,g.width,4)===Ne?ne.count=Math.max(ne.count,se.start+se.count-ne.start):(++ie,ae[ie]=se)}ae.length=ie+1;const k=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let he=0,ne=ae.length;he<ne;he++){const se=ae[he],Ie=Math.floor(se.start/4),Ne=Math.ceil(se.count/4),Ze=Ie%g.width,L=Math.floor(Ie/g.width),de=Ne,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Ze,L,de,$,F,Y,g.data)}M.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,k),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function Me(M,g,F){let Y=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=t.TEXTURE_3D);const ee=V(M,g),ae=g.source;n.bindTexture(Y,M.__webglTexture,t.TEXTURE0+F);const ie=i.get(ae);if(ae.version!==ie.__version||ee===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const $=it.getPrimaries(it.workingColorSpace),ve=g.colorSpace===ei?null:it.getPrimaries(g.colorSpace),le=g.colorSpace===ei||$===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let K=p(g.image,!1,a.maxTextureSize);K=te(g,K);const ge=r.convert(g.format,g.colorSpace),he=r.convert(g.type);let ne=b(g.internalFormat,ge,he,g.normalized,g.colorSpace,g.isVideoTexture);oe(Y,g);let se;const Ie=g.mipmaps,Ne=g.isVideoTexture!==!0,Ze=ie.__version===void 0||ee===!0,L=ae.dataReady,de=y(g,K);if(g.isDepthTexture)ne=R(g.format===_i,g.type),Ze&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,ne,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,ne,K.width,K.height,0,ge,he,null));else if(g.isDataTexture)if(Ie.length>0){Ne&&Ze&&n.texStorage2D(t.TEXTURE_2D,de,ne,Ie[0].width,Ie[0].height);for(let $=0,ve=Ie.length;$<ve;$++)se=Ie[$],Ne?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,se.width,se.height,ge,he,se.data):n.texImage2D(t.TEXTURE_2D,$,ne,se.width,se.height,0,ge,he,se.data);g.generateMipmaps=!1}else Ne?(Ze&&n.texStorage2D(t.TEXTURE_2D,de,ne,K.width,K.height),L&&Q(g,K,ge,he)):n.texImage2D(t.TEXTURE_2D,0,ne,K.width,K.height,0,ge,he,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ne&&Ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ne,Ie[0].width,Ie[0].height,K.depth);for(let $=0,ve=Ie.length;$<ve;$++)if(se=Ie[$],g.format!==cn)if(ge!==null)if(Ne){if(L)if(g.layerUpdates.size>0){const le=dl(se.width,se.height,g.format,g.type);for(const j of g.layerUpdates){const ye=se.data.subarray(j*le/se.data.BYTES_PER_ELEMENT,(j+1)*le/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,j,se.width,se.height,1,ge,ye)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,K.depth,ge,se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,ne,se.width,se.height,K.depth,0,se.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,K.depth,ge,he,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,ne,se.width,se.height,K.depth,0,ge,he,se.data)}else{Ne&&Ze&&n.texStorage2D(t.TEXTURE_2D,de,ne,Ie[0].width,Ie[0].height);for(let $=0,ve=Ie.length;$<ve;$++)se=Ie[$],g.format!==cn?ge!==null?Ne?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,se.width,se.height,ge,se.data):n.compressedTexImage2D(t.TEXTURE_2D,$,ne,se.width,se.height,0,se.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,se.width,se.height,ge,he,se.data):n.texImage2D(t.TEXTURE_2D,$,ne,se.width,se.height,0,ge,he,se.data)}else if(g.isDataArrayTexture)if(Ne){if(Ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ne,K.width,K.height,K.depth),L)if(g.layerUpdates.size>0){const $=dl(K.width,K.height,g.format,g.type);for(const ve of g.layerUpdates){const le=K.data.subarray(ve*$/K.data.BYTES_PER_ELEMENT,(ve+1)*$/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,K.width,K.height,1,ge,he,le)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ge,he,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ne,K.width,K.height,K.depth,0,ge,he,K.data);else if(g.isData3DTexture)Ne?(Ze&&n.texStorage3D(t.TEXTURE_3D,de,ne,K.width,K.height,K.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ge,he,K.data)):n.texImage3D(t.TEXTURE_3D,0,ne,K.width,K.height,K.depth,0,ge,he,K.data);else if(g.isFramebufferTexture){if(Ze)if(Ne)n.texStorage2D(t.TEXTURE_2D,de,ne,K.width,K.height);else{let $=K.width,ve=K.height;for(let le=0;le<de;le++)n.texImage2D(t.TEXTURE_2D,le,ne,$,ve,0,ge,he,null),$>>=1,ve>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),f.add(g),$.onpaint=Ve=>{const pe=Ve.changedElements;for(const Ye of f)pe.includes(Ye.image)&&(Ye.needsUpdate=!0)},$.requestPaint();return}const ve=0,le=t.RGBA,j=t.RGBA,ye=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,ve,le,j,ye,K),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ne&&Ze){const $=We(Ie[0]);n.texStorage2D(t.TEXTURE_2D,de,ne,$.width,$.height)}for(let $=0,ve=Ie.length;$<ve;$++)se=Ie[$],Ne?L&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ge,he,se):n.texImage2D(t.TEXTURE_2D,$,ne,ge,he,se);g.generateMipmaps=!1}else if(Ne){if(Ze){const $=We(K);n.texStorage2D(t.TEXTURE_2D,de,ne,$.width,$.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,he,K)}else n.texImage2D(t.TEXTURE_2D,0,ne,ge,he,K);h(g)&&S(Y),ie.__version=ae.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ee(M,g,F){if(g.image.length!==6)return;const Y=V(M,g),ee=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+F);const ae=i.get(ee);if(ee.version!==ae.__version||Y===!0){n.activeTexture(t.TEXTURE0+F);const ie=it.getPrimaries(it.workingColorSpace),k=g.colorSpace===ei?null:it.getPrimaries(g.colorSpace),K=g.colorSpace===ei||ie===k?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ge=g.isCompressedTexture||g.image[0].isCompressedTexture,he=g.image[0]&&g.image[0].isDataTexture,ne=[];for(let j=0;j<6;j++)!ge&&!he?ne[j]=p(g.image[j],!0,a.maxCubemapSize):ne[j]=he?g.image[j].image:g.image[j],ne[j]=te(g,ne[j]);const se=ne[0],Ie=r.convert(g.format,g.colorSpace),Ne=r.convert(g.type),Ze=b(g.internalFormat,Ie,Ne,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,de=ae.__version===void 0||Y===!0,$=ee.dataReady;let ve=y(g,se);oe(t.TEXTURE_CUBE_MAP,g);let le;if(ge){L&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ze,se.width,se.height);for(let j=0;j<6;j++){le=ne[j].mipmaps;for(let ye=0;ye<le.length;ye++){const Ve=le[ye];g.format!==cn?Ie!==null?L?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,0,0,Ve.width,Ve.height,Ie,Ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,Ze,Ve.width,Ve.height,0,Ve.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,0,0,Ve.width,Ve.height,Ie,Ne,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,Ze,Ve.width,Ve.height,0,Ie,Ne,Ve.data)}}}else{if(le=g.mipmaps,L&&de){le.length>0&&ve++;const j=We(ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ze,j.width,j.height)}for(let j=0;j<6;j++)if(he){L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ne[j].width,ne[j].height,Ie,Ne,ne[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ze,ne[j].width,ne[j].height,0,Ie,Ne,ne[j].data);for(let ye=0;ye<le.length;ye++){const pe=le[ye].image[j].image;L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,0,0,pe.width,pe.height,Ie,Ne,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,Ze,pe.width,pe.height,0,Ie,Ne,pe.data)}}else{L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ie,Ne,ne[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ze,Ie,Ne,ne[j]);for(let ye=0;ye<le.length;ye++){const Ve=le[ye];L?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,0,0,Ie,Ne,Ve.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,Ze,Ie,Ne,Ve.image[j])}}}h(g)&&S(t.TEXTURE_CUBE_MAP),ae.__version=ee.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ae(M,g,F,Y,ee,ae){const ie=r.convert(F.format,F.colorSpace),k=r.convert(F.type),K=b(F.internalFormat,ie,k,F.normalized,F.colorSpace),ge=i.get(g),he=i.get(F);if(he.__renderTarget=g,!ge.__hasExternalTextures){const ne=Math.max(1,g.width>>ae),se=Math.max(1,g.height>>ae);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ae,K,ne,se,g.depth,0,ie,k,null):n.texImage2D(ee,ae,K,ne,se,0,ie,k,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),Re(g)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ee,he.__webglTexture,0,Ge(g)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ee,he.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(M,g,F){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const Y=g.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,ae=R(g.stencilBuffer,ee),ie=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Re(g)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge(g),ae,g.width,g.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge(g),ae,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,ae,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,M)}else{const Y=g.textures;for(let ee=0;ee<Y.length;ee++){const ae=Y[ee],ie=r.convert(ae.format,ae.colorSpace),k=r.convert(ae.type),K=b(ae.internalFormat,ie,k,ae.normalized,ae.colorSpace);Re(g)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge(g),K,g.width,g.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge(g),K,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,K,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ze(M,g,F){const Y=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(g.depthTexture);if(ee.__renderTarget=g,(!ee.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(t.TEXTURE_CUBE_MAP,g.depthTexture);const ge=r.convert(g.depthTexture.format),he=r.convert(g.depthTexture.type);let ne;g.depthTexture.format===Vn?ne=t.DEPTH_COMPONENT24:g.depthTexture.format===_i&&(ne=t.DEPTH24_STENCIL8);for(let se=0;se<6;se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ne,g.width,g.height,0,ge,he,null)}}else Z(g.depthTexture,0);const ae=ee.__webglTexture,ie=Ge(g),k=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,K=g.depthTexture.format===_i?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vn)Re(g)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,k,ae,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,K,k,ae,0);else if(g.depthTexture.format===_i)Re(g)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,k,ae,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,K,k,ae,0);else throw new Error("Unknown depthTexture format")}function Ce(M){const g=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const Y=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const ee=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),g.__depthDisposeCallback=ee}g.__boundDepthTexture=Y}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let Y=0;Y<6;Y++)ze(g.__webglFramebuffer[Y],M,Y);else{const Y=M.texture.mipmaps;Y&&Y.length>0?ze(g.__webglFramebuffer[0],M,0):ze(g.__webglFramebuffer,M,0)}else if(F){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=t.createRenderbuffer(),qe(g.__webglDepthbuffer[Y],M,!1);else{const ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ae)}}else{const Y=M.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),qe(g.__webglDepthbuffer,M,!1);else{const ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(M,g,F){const Y=i.get(M);g!==void 0&&Ae(Y.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ce(M)}function De(M){const g=M.texture,F=i.get(M),Y=i.get(g);M.addEventListener("dispose",v);const ee=M.textures,ae=M.isWebGLCubeRenderTarget===!0,ie=ee.length>1;if(ie||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=g.version,o.memory.textures++),ae){F.__webglFramebuffer=[];for(let k=0;k<6;k++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[k]=[];for(let K=0;K<g.mipmaps.length;K++)F.__webglFramebuffer[k][K]=t.createFramebuffer()}else F.__webglFramebuffer[k]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let k=0;k<g.mipmaps.length;k++)F.__webglFramebuffer[k]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(ie)for(let k=0,K=ee.length;k<K;k++){const ge=i.get(ee[k]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&Re(M)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let k=0;k<ee.length;k++){const K=ee[k];F.__webglColorRenderbuffer[k]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[k]);const ge=r.convert(K.format,K.colorSpace),he=r.convert(K.type),ne=b(K.internalFormat,ge,he,K.normalized,K.colorSpace,M.isXRRenderTarget===!0),se=Ge(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ne,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,F.__webglColorRenderbuffer[k])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),qe(F.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),oe(t.TEXTURE_CUBE_MAP,g);for(let k=0;k<6;k++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Ae(F.__webglFramebuffer[k][K],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+k,K);else Ae(F.__webglFramebuffer[k],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);h(g)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){for(let k=0,K=ee.length;k<K;k++){const ge=ee[k],he=i.get(ge);let ne=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ne=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,he.__webglTexture),oe(ne,ge),Ae(F.__webglFramebuffer,M,ge,t.COLOR_ATTACHMENT0+k,ne,0),h(ge)&&S(ne)}n.unbindTexture()}else{let k=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(k=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(k,Y.__webglTexture),oe(k,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Ae(F.__webglFramebuffer[K],M,g,t.COLOR_ATTACHMENT0,k,K);else Ae(F.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,k,0);h(g)&&S(k),n.unbindTexture()}M.depthBuffer&&Ce(M)}function Be(M){const g=M.textures;for(let F=0,Y=g.length;F<Y;F++){const ee=g[F];if(h(ee)){const ae=A(M),ie=i.get(ee).__webglTexture;n.bindTexture(ae,ie),S(ae),n.unbindTexture()}}}const Oe=[],je=[];function C(M){if(M.samples>0){if(Re(M)===!1){const g=M.textures,F=M.width,Y=M.height;let ee=t.COLOR_BUFFER_BIT;const ae=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=i.get(M),k=g.length>1;if(k)for(let ge=0;ge<g.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const K=M.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ge=0;ge<g.length;ge++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),k){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ge]);const he=i.get(g[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,F,Y,0,0,F,Y,ee,t.NEAREST),l===!0&&(Oe.length=0,je.length=0,Oe.push(t.COLOR_ATTACHMENT0+ge),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Oe.push(ae),je.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),k)for(let ge=0;ge<g.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ge]);const he=i.get(g[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,he,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function Ge(M){return Math.min(a.maxSamples,M.samples)}function Re(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function He(M){const g=o.render.frame;d.get(M)!==g&&(d.set(M,g),M.update())}function te(M,g){const F=M.colorSpace,Y=M.format,ee=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==sr&&F!==ei&&(it.getTransfer(F)===ut?(Y!==cn||ee!==en)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",F)),g}function We(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=J,this.setTexture3D=ce,this.setTextureCube=me,this.rebindTextures=Fe,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function wv(t,e){function n(i,a=ei){let r;const o=it.getTransfer(a);if(i===en)return t.UNSIGNED_BYTE;if(i===as)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rs)return t.UNSIGNED_SHORT_5_5_5_1;if(i===fc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===hc)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===uc)return t.BYTE;if(i===dc)return t.SHORT;if(i===ga)return t.UNSIGNED_SHORT;if(i===is)return t.INT;if(i===yn)return t.UNSIGNED_INT;if(i===mn)return t.FLOAT;if(i===Gn)return t.HALF_FLOAT;if(i===pc)return t.ALPHA;if(i===mc)return t.RGB;if(i===cn)return t.RGBA;if(i===Vn)return t.DEPTH_COMPONENT;if(i===_i)return t.DEPTH_STENCIL;if(i===gc)return t.RED;if(i===os)return t.RED_INTEGER;if(i===Mi)return t.RG;if(i===ss)return t.RG_INTEGER;if(i===ls)return t.RGBA_INTEGER;if(i===$a||i===Ka||i===Za||i===ja)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mo||i===go||i===vo||i===_o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xo||i===Mo||i===So||i===yo||i===Eo||i===rr||i===bo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xo||i===Mo)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===So)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===yo)return r.COMPRESSED_R11_EAC;if(i===Eo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===rr)return r.COMPRESSED_RG11_EAC;if(i===bo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===To||i===Ao||i===wo||i===Co||i===Ro||i===Po||i===Lo||i===Do||i===Uo||i===Io||i===No||i===Fo||i===zo||i===Oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===To)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ao)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Co)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ro)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Po)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Do)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Io)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===No)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bo||i===Go||i===Vo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Bo)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ko||i===Ho||i===or||i===Wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===va?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Ac(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new un({vertexShader:Cv,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new En(new Sa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lv extends yi{constructor(e,n){super();const i=this;let a=null,r=1,o=null,s="local-floor",l=1,c=null,d=null,f=null,u=null,m=null,_=null;const E=typeof XRWebGLBinding<"u",p=new Pv,h={},S=n.getContextAttributes();let A=null,b=null;const R=[],y=[],P=new ft;let v=null;const T=new sn;T.viewport=new yt;const U=new sn;U.viewport=new yt;const w=[T,U],I=new Vh;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let re=R[V];return re===void 0&&(re=new Pr,R[V]=re),re.getTargetRaySpace()},this.getControllerGrip=function(V){let re=R[V];return re===void 0&&(re=new Pr,R[V]=re),re.getGripSpace()},this.getHand=function(V){let re=R[V];return re===void 0&&(re=new Pr,R[V]=re),re.getHandSpace()};function D(V){const re=y.indexOf(V.inputSource);if(re===-1)return;const Q=R[re];Q!==void 0&&(Q.update(V.inputSource,V.frame,c||o),Q.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",O);for(let V=0;V<R.length;V++){const re=y[V];re!==null&&(y[V]=null,R[V].disconnect(re))}X=null,q=null,p.reset();for(const V in h)delete h[V];e.setRenderTarget(A),m=null,u=null,f=null,a=null,b=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){s=V,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(a,n)),f},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(V){if(a=V,a!==null){if(A=e.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",z),a.addEventListener("inputsourceschange",O),S.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,Me=null,Ee=null;S.depth&&(Ee=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=S.stencil?_i:Vn,Me=S.stencil?va:yn);const Ae={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ae),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new _n(u.textureWidth,u.textureHeight,{format:cn,type:en,depthTexture:new Xi(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Q={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(a,n,Q),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new _n(m.framebufferWidth,m.framebufferHeight,{format:cn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(s),oe.setContext(a),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(V){for(let re=0;re<V.removed.length;re++){const Q=V.removed[re],Me=y.indexOf(Q);Me>=0&&(y[Me]=null,R[Me].disconnect(Q))}for(let re=0;re<V.added.length;re++){const Q=V.added[re];let Me=y.indexOf(Q);if(Me===-1){for(let Ae=0;Ae<R.length;Ae++)if(Ae>=y.length){y.push(Q),Me=Ae;break}else if(y[Ae]===null){y[Ae]=Q,Me=Ae;break}if(Me===-1)break}const Ee=R[Me];Ee&&Ee.connect(Q)}}const Z=new W,J=new W;function ce(V,re,Q){Z.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(Q.matrixWorld);const Me=Z.distanceTo(J),Ee=re.projectionMatrix.elements,Ae=Q.projectionMatrix.elements,qe=Ee[14]/(Ee[10]-1),ze=Ee[14]/(Ee[10]+1),Ce=(Ee[9]+1)/Ee[5],Fe=(Ee[9]-1)/Ee[5],De=(Ee[8]-1)/Ee[0],Be=(Ae[8]+1)/Ae[0],Oe=qe*De,je=qe*Be,C=Me/(-De+Be),Ge=C*-De;if(re.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ge),V.translateZ(C),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ee[10]===-1)V.projectionMatrix.copy(re.projectionMatrix),V.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Re=qe+C,He=ze+C,te=Oe-Ge,We=je+(Me-Ge),M=Ce*ze/He*Re,g=Fe*ze/He*Re;V.projectionMatrix.makePerspective(te,We,M,g,Re,He),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function me(V,re){re===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(re.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(a===null)return;let re=V.near,Q=V.far;p.texture!==null&&(p.depthNear>0&&(re=p.depthNear),p.depthFar>0&&(Q=p.depthFar)),I.near=U.near=T.near=re,I.far=U.far=T.far=Q,(X!==I.near||q!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),X=I.near,q=I.far),I.layers.mask=V.layers.mask|6,T.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;const Me=V.parent,Ee=I.cameras;me(I,Me);for(let Ae=0;Ae<Ee.length;Ae++)me(Ee[Ae],Me);Ee.length===2?ce(I,T,U):I.projectionMatrix.copy(T.projectionMatrix),ue(V,I,Me)};function ue(V,re,Q){Q===null?V.matrix.copy(re.matrixWorld):(V.matrix.copy(Q.matrixWorld),V.matrix.invert(),V.matrix.multiply(re.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(re.projectionMatrix),V.projectionMatrixInverse.copy(re.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=qo*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(V){return h[V]};let ke=null;function Xe(V,re){if(d=re.getViewerPose(c||o),_=re,d!==null){const Q=d.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Me=!1;Q.length!==I.cameras.length&&(I.cameras.length=0,Me=!0);for(let ze=0;ze<Q.length;ze++){const Ce=Q[ze];let Fe=null;if(m!==null)Fe=m.getViewport(Ce);else{const Be=f.getViewSubImage(u,Ce);Fe=Be.viewport,ze===0&&(e.setRenderTargetTextures(b,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(b))}let De=w[ze];De===void 0&&(De=new sn,De.layers.enable(ze),De.viewport=new yt,w[ze]=De),De.matrix.fromArray(Ce.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ce.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ze===0&&(I.matrix.copy(De.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Me===!0&&I.cameras.push(De)}const Ee=a.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){f=i.getBinding();const ze=f.getDepthInformation(Q[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,a.renderState)}if(Ee&&Ee.includes("camera-access")&&E){e.state.unbindTexture(),f=i.getBinding();for(let ze=0;ze<Q.length;ze++){const Ce=Q[ze].camera;if(Ce){let Fe=h[Ce];Fe||(Fe=new Ac,h[Ce]=Fe);const De=f.getCameraImage(Ce);Fe.sourceTexture=De}}}}for(let Q=0;Q<R.length;Q++){const Me=y[Q],Ee=R[Q];Me!==null&&Ee!==void 0&&Ee.update(Me,re,c||o)}ke&&ke(V,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const oe=new Rc;oe.setAnimationLoop(Xe),this.setAnimationLoop=function(V){ke=V},this.dispose=function(){}}}const Dv=new wt,Fc=new Qe;Fc.set(-1,0,0,0,1,0,0,0,1);function Uv(t,e){function n(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,wc(t)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function a(p,h,S,A,b){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(p,h):h.isMeshLambertMaterial?(r(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),d(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(p,h),u(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(r(p,h),_(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),E(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&s(p,h)):h.isPointsMaterial?l(p,h,S,A):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Wt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Wt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h),A=S.envMap,b=S.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Fc),p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform))}function s(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,S,A){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=A*.5,h.map&&(p.map.value=h.map,n(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function u(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Wt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function E(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Iv(t,e,n,i){let a={},r={},o=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const b=A.program;i.uniformBlockBinding(S,b)}function c(S,A){let b=a[S.id];b===void 0&&(_(S),b=d(S),a[S.id]=b,S.addEventListener("dispose",p));const R=A.program;i.updateUBOMapping(S,R);const y=e.render.frame;r[S.id]!==y&&(u(S),r[S.id]=y)}function d(S){const A=f();S.__bindingPointIndex=A;const b=t.createBuffer(),R=S.__size,y=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,R,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,b),b}function f(){for(let S=0;S<s;S++)if(o.indexOf(S)===-1)return o.push(S),S;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const A=a[S.id],b=S.uniforms,R=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let y=0,P=b.length;y<P;y++){const v=Array.isArray(b[y])?b[y]:[b[y]];for(let T=0,U=v.length;T<U;T++){const w=v[T];if(m(w,y,T,R)===!0){const I=w.__offset,X=Array.isArray(w.value)?w.value:[w.value];let q=0;for(let D=0;D<X.length;D++){const z=X[D],O=E(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,I+q,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):ArrayBuffer.isView(z)?w.__data.set(new z.constructor(z.buffer,z.byteOffset,w.__data.length)):(z.toArray(w.__data,q),q+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,A,b,R){const y=S.value,P=A+"_"+b;if(R[P]===void 0)return typeof y=="number"||typeof y=="boolean"?R[P]=y:ArrayBuffer.isView(y)?R[P]=y.slice():R[P]=y.clone(),!0;{const v=R[P];if(typeof y=="number"||typeof y=="boolean"){if(v!==y)return R[P]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(v.equals(y)===!1)return v.copy(y),!0}}return!1}function _(S){const A=S.uniforms;let b=0;const R=16;for(let P=0,v=A.length;P<v;P++){const T=Array.isArray(A[P])?A[P]:[A[P]];for(let U=0,w=T.length;U<w;U++){const I=T[U],X=Array.isArray(I.value)?I.value:[I.value];for(let q=0,D=X.length;q<D;q++){const z=X[q],O=E(z),Z=b%R,J=Z%O.boundary,ce=Z+J;b+=J,ce!==0&&R-ce<O.storage&&(b+=R-ce),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=O.storage}}}const y=b%R;return y>0&&(b+=R-y),S.__size=b,S.__cache={},this}function E(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",S),A}function p(S){const A=S.target;A.removeEventListener("dispose",p);const b=o.indexOf(A.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(a[A.id]),delete a[A.id],delete r[A.id]}function h(){for(const S in a)t.deleteBuffer(a[S]);o=[],a={},r={}}return{bind:l,update:c,dispose:h}}const Nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hn=null;function Fv(){return hn===null&&(hn=new Ch(Nv,16,16,Mi,Gn),hn.name="DFG_LUT",hn.minFilter=zt,hn.magFilter=zt,hn.wrapS=Nn,hn.wrapT=Nn,hn.generateMipmaps=!1,hn.needsUpdate=!0),hn}class zv{constructor(e={}){const{canvas:n=ah(),context:i=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=en}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const E=m,p=new Set([ls,ss,os]),h=new Set([en,yn,ga,va,as,rs]),S=new Uint32Array(4),A=new Int32Array(4),b=new W;let R=null,y=null;const P=[],v=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let w=!1,I=null;this._outputColorSpace=Qt;let X=0,q=0,D=null,z=-1,O=null;const Z=new yt,J=new yt;let ce=null;const me=new ht(0);let ue=0,ke=n.width,Xe=n.height,oe=1,V=null,re=null;const Q=new yt(0,0,ke,Xe),Me=new yt(0,0,ke,Xe);let Ee=!1;const Ae=new bc;let qe=!1,ze=!1;const Ce=new wt,Fe=new W,De=new yt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function je(){return D===null?oe:1}let C=i;function Ge(x,N){return n.getContext(x,N)}try{const x={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ns}`),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",Ve,!1),C===null){const N="webgl2";if(C=Ge(N,x),C===null)throw Ge(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw st("WebGLRenderer: "+x.message),x}let Re,He,te,We,M,g,F,Y,ee,ae,ie,k,K,ge,he,ne,se,Ie,Ne,Ze,L,de,$;function ve(){Re=new F0(C),Re.init(),L=new wv(C,Re),He=new C0(C,Re,e,L),te=new Tv(C,Re),He.reversedDepthBuffer&&u&&te.buffers.depth.setReversed(!0),We=new B0(C),M=new dv,g=new Av(C,Re,te,M,He,L,We),F=new N0(U),Y=new Hh(C),de=new A0(C,Y),ee=new z0(C,Y,We,de),ae=new V0(C,ee,Y,de,We),Ie=new G0(C,He,g),he=new R0(M),ie=new uv(U,F,Re,He,de,he),k=new Uv(U,M),K=new hv,ge=new xv(Re),se=new T0(U,F,te,ae,_,l),ne=new bv(U,ae,He),$=new Iv(C,We,He,te),Ne=new w0(C,Re,We),Ze=new O0(C,Re,We),We.programs=ie.programs,U.capabilities=He,U.extensions=Re,U.properties=M,U.renderLists=K,U.shadowMap=ne,U.state=te,U.info=We}ve(),E!==en&&(T=new H0(E,n.width,n.height,a,r));const le=new Lv(U,C);this.xr=le,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=Re.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Re.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(x){x!==void 0&&(oe=x,this.setSize(ke,Xe,!1))},this.getSize=function(x){return x.set(ke,Xe)},this.setSize=function(x,N,H=!0){if(le.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=x,Xe=N,n.width=Math.floor(x*oe),n.height=Math.floor(N*oe),H===!0&&(n.style.width=x+"px",n.style.height=N+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(ke*oe,Xe*oe).floor()},this.setDrawingBufferSize=function(x,N,H){ke=x,Xe=N,oe=H,n.width=Math.floor(x*H),n.height=Math.floor(N*H),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(E===en){st("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){$e("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(Z)},this.getViewport=function(x){return x.copy(Q)},this.setViewport=function(x,N,H,B){x.isVector4?Q.set(x.x,x.y,x.z,x.w):Q.set(x,N,H,B),te.viewport(Z.copy(Q).multiplyScalar(oe).round())},this.getScissor=function(x){return x.copy(Me)},this.setScissor=function(x,N,H,B){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,N,H,B),te.scissor(J.copy(Me).multiplyScalar(oe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(x){te.setScissorTest(Ee=x)},this.setOpaqueSort=function(x){V=x},this.setTransparentSort=function(x){re=x},this.getClearColor=function(x){return x.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,H=!0){let B=0;if(x){let G=!1;if(D!==null){const xe=D.texture.format;G=p.has(xe)}if(G){const xe=D.texture.type,be=h.has(xe),_e=se.getClearColor(),Pe=se.getClearAlpha(),Le=_e.r,Ke=_e.g,Je=_e.b;be?(S[0]=Le,S[1]=Ke,S[2]=Je,S[3]=Pe,C.clearBufferuiv(C.COLOR,0,S)):(A[0]=Le,A[1]=Ke,A[2]=Je,A[3]=Pe,C.clearBufferiv(C.COLOR,0,A))}else B|=C.COLOR_BUFFER_BIT}N&&(B|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),I=x},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",Ve,!1),se.dispose(),K.dispose(),ge.dispose(),M.dispose(),F.dispose(),ae.dispose(),de.dispose(),$.dispose(),ie.dispose(),le.dispose(),le.removeEventListener("sessionstart",bn),le.removeEventListener("sessionend",Hn),Xt.stop()};function j(x){x.preventDefault(),qs("WebGLRenderer: Context Lost."),w=!0}function ye(){qs("WebGLRenderer: Context Restored."),w=!1;const x=We.autoReset,N=ne.enabled,H=ne.autoUpdate,B=ne.needsUpdate,G=ne.type;ve(),We.autoReset=x,ne.enabled=N,ne.autoUpdate=H,ne.needsUpdate=B,ne.type=G}function Ve(x){st("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function pe(x){const N=x.target;N.removeEventListener("dispose",pe),Ye(N)}function Ye(x){mt(x),M.remove(x)}function mt(x){const N=M.get(x).programs;N!==void 0&&(N.forEach(function(H){ie.releaseProgram(H)}),x.isShaderMaterial&&ie.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,H,B,G,xe){N===null&&(N=Be);const be=G.isMesh&&G.matrixWorld.determinant()<0,_e=An(x,N,H,B,G);te.setMaterial(B,be);let Pe=H.index,Le=1;if(B.wireframe===!0){if(Pe=ee.getWireframeAttribute(H),Pe===void 0)return;Le=2}const Ke=H.drawRange,Je=H.attributes.position;let Ue=Ke.start*Le,ot=(Ke.start+Ke.count)*Le;xe!==null&&(Ue=Math.max(Ue,xe.start*Le),ot=Math.min(ot,(xe.start+xe.count)*Le)),Pe!==null?(Ue=Math.max(Ue,0),ot=Math.min(ot,Pe.count)):Je!=null&&(Ue=Math.max(Ue,0),ot=Math.min(ot,Je.count));const pt=ot-Ue;if(pt<0||pt===1/0)return;de.setup(G,B,_e,H,Pe);let gt,lt=Ne;if(Pe!==null&&(gt=Y.get(Pe),lt=Ze,lt.setIndex(gt)),G.isMesh)B.wireframe===!0?(te.setLineWidth(B.wireframeLinewidth*je()),lt.setMode(C.LINES)):lt.setMode(C.TRIANGLES);else if(G.isLine){let Pt=B.linewidth;Pt===void 0&&(Pt=1),te.setLineWidth(Pt*je()),G.isLineSegments?lt.setMode(C.LINES):G.isLineLoop?lt.setMode(C.LINE_LOOP):lt.setMode(C.LINE_STRIP)}else G.isPoints?lt.setMode(C.POINTS):G.isSprite&&lt.setMode(C.TRIANGLES);if(G.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Pt=G._multiDrawStarts,Te=G._multiDrawCounts,Ot=G._multiDrawCount,nt=Pe?Y.get(Pe).bytesPerElement:1,kt=M.get(B).currentProgram.getUniforms();for(let jt=0;jt<Ot;jt++)kt.setValue(C,"_gl_DrawID",jt),lt.render(Pt[jt]/nt,Te[jt])}else if(G.isInstancedMesh)lt.renderInstances(Ue,pt,G.count);else if(H.isInstancedBufferGeometry){const Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Te=Math.min(H.instanceCount,Pt);lt.renderInstances(Ue,pt,Te)}else lt.render(Ue,pt)};function Et(x,N,H){x.transparent===!0&&x.side===Un&&x.forceSinglePass===!1?(x.side=Wt,x.needsUpdate=!0,tn(x,N,H),x.side=ni,x.needsUpdate=!0,tn(x,N,H),x.side=Un):tn(x,N,H)}this.compile=function(x,N,H=null){H===null&&(H=x),y=ge.get(H),y.init(N),v.push(y),H.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),x!==H&&x.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights();const B=new Set;return x.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const xe=G.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){const _e=xe[be];Et(_e,H,G),B.add(_e)}else Et(xe,H,G),B.add(xe)}),y=v.pop(),B},this.compileAsync=function(x,N,H=null){const B=this.compile(x,N,H);return new Promise(G=>{function xe(){if(B.forEach(function(be){M.get(be).currentProgram.isReady()&&B.delete(be)}),B.size===0){G(x);return}setTimeout(xe,10)}Re.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let rt=null;function ai(x){rt&&rt(x)}function bn(){Xt.stop()}function Hn(){Xt.start()}const Xt=new Rc;Xt.setAnimationLoop(ai),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(x){rt=x,le.setAnimationLoop(x),x===null?Xt.stop():Xt.start()},le.addEventListener("sessionstart",bn),le.addEventListener("sessionend",Hn),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;I!==null&&I.renderStart(x,N);const H=le.enabled===!0&&le.isPresenting===!0,B=T!==null&&(D===null||H)&&T.begin(U,D);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(N),N=le.getCamera()),x.isScene===!0&&x.onBeforeRender(U,x,N,D),y=ge.get(x,v.length),y.init(N),y.state.textureUnits=g.getTextureUnits(),v.push(y),Ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ae.setFromProjectionMatrix(Ce,gn,N.reversedDepth),ze=this.localClippingEnabled,qe=he.init(this.clippingPlanes,ze),R=K.get(x,P.length),R.init(),P.push(R),le.enabled===!0&&le.isPresenting===!0){const be=U.xr.getDepthSensingMesh();be!==null&&qt(be,N,-1/0,U.sortObjects)}qt(x,N,0,U.sortObjects),R.finish(),U.sortObjects===!0&&R.sort(V,re),Oe=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Oe&&se.addToRenderList(R,x),this.info.render.frame++,qe===!0&&he.beginShadows();const G=y.state.shadowsArray;if(ne.render(G,x,N),qe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&T.hasRenderPass())===!1){const be=R.opaque,_e=R.transmissive;if(y.setupLights(),N.isArrayCamera){const Pe=N.cameras;if(_e.length>0)for(let Le=0,Ke=Pe.length;Le<Ke;Le++){const Je=Pe[Le];xt(be,_e,x,Je)}Oe&&se.render(x);for(let Le=0,Ke=Pe.length;Le<Ke;Le++){const Je=Pe[Le];Vt(R,x,Je,Je.viewport)}}else _e.length>0&&xt(be,_e,x,N),Oe&&se.render(x),Vt(R,x,N)}D!==null&&q===0&&(g.updateMultisampleRenderTarget(D),g.updateRenderTargetMipmap(D)),B&&T.end(U),x.isScene===!0&&x.onAfterRender(U,x,N),de.resetDefaultState(),z=-1,O=null,v.pop(),v.length>0?(y=v[v.length-1],g.setTextureUnits(y.state.textureUnits),qe===!0&&he.setGlobalState(U.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?R=P[P.length-1]:R=null,I!==null&&I.renderEnd()};function qt(x,N,H,B){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLightProbeGrid)y.pushLightProbeGrid(x);else if(x.isLight)y.pushLight(x),x.castShadow&&y.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ae.intersectsSprite(x)){B&&De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ce);const be=ae.update(x),_e=x.material;_e.visible&&R.push(x,be,_e,H,De.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ae.intersectsObject(x))){const be=ae.update(x),_e=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),De.copy(x.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),De.copy(be.boundingSphere.center)),De.applyMatrix4(x.matrixWorld).applyMatrix4(Ce)),Array.isArray(_e)){const Pe=be.groups;for(let Le=0,Ke=Pe.length;Le<Ke;Le++){const Je=Pe[Le],Ue=_e[Je.materialIndex];Ue&&Ue.visible&&R.push(x,be,Ue,H,De.z,Je)}}else _e.visible&&R.push(x,be,_e,H,De.z,null)}}const xe=x.children;for(let be=0,_e=xe.length;be<_e;be++)qt(xe[be],N,H,B)}function Vt(x,N,H,B){const{opaque:G,transmissive:xe,transparent:be}=x;y.setupLightsView(H),qe===!0&&he.setGlobalState(U.clippingPlanes,H),B&&te.viewport(Z.copy(B)),G.length>0&&Dt(G,N,H),xe.length>0&&Dt(xe,N,H),be.length>0&&Dt(be,N,H),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function xt(x,N,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[B.id]===void 0){const Ue=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[B.id]=new _n(1,1,{generateMipmaps:!0,type:Ue?Gn:en,minFilter:vi,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const xe=y.state.transmissionRenderTarget[B.id],be=B.viewport||Z;xe.setSize(be.z*U.transmissionResolutionScale,be.w*U.transmissionResolutionScale);const _e=U.getRenderTarget(),Pe=U.getActiveCubeFace(),Le=U.getActiveMipmapLevel();U.setRenderTarget(xe),U.getClearColor(me),ue=U.getClearAlpha(),ue<1&&U.setClearColor(16777215,.5),U.clear(),Oe&&se.render(H);const Ke=U.toneMapping;U.toneMapping=vn;const Je=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),y.setupLightsView(B),qe===!0&&he.setGlobalState(U.clippingPlanes,B),Dt(x,H,B),g.updateMultisampleRenderTarget(xe),g.updateRenderTargetMipmap(xe),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ot=0,pt=N.length;ot<pt;ot++){const gt=N[ot],{object:lt,geometry:Pt,material:Te,group:Ot}=gt;if(Te.side===Un&&lt.layers.test(B.layers)){const nt=Te.side;Te.side=Wt,Te.needsUpdate=!0,Tn(lt,H,B,Pt,Te,Ot),Te.side=nt,Te.needsUpdate=!0,Ue=!0}}Ue===!0&&(g.updateMultisampleRenderTarget(xe),g.updateRenderTargetMipmap(xe))}U.setRenderTarget(_e,Pe,Le),U.setClearColor(me,ue),Je!==void 0&&(B.viewport=Je),U.toneMapping=Ke}function Dt(x,N,H){const B=N.isScene===!0?N.overrideMaterial:null;for(let G=0,xe=x.length;G<xe;G++){const be=x[G],{object:_e,geometry:Pe,group:Le}=be;let Ke=be.material;Ke.allowOverride===!0&&B!==null&&(Ke=B),_e.layers.test(H.layers)&&Tn(_e,N,H,Pe,Ke,Le)}}function Tn(x,N,H,B,G,xe){x.onBeforeRender(U,N,H,B,G,xe),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),G.onBeforeRender(U,N,H,B,x,xe),G.transparent===!0&&G.side===Un&&G.forceSinglePass===!1?(G.side=Wt,G.needsUpdate=!0,U.renderBufferDirect(H,N,B,G,x,xe),G.side=ni,G.needsUpdate=!0,U.renderBufferDirect(H,N,B,G,x,xe),G.side=Un):U.renderBufferDirect(H,N,B,G,x,xe),x.onAfterRender(U,N,H,B,G,xe)}function tn(x,N,H){N.isScene!==!0&&(N=Be);const B=M.get(x),G=y.state.lights,xe=y.state.shadowsArray,be=G.state.version,_e=ie.getParameters(x,G.state,xe,N,H,y.state.lightProbeGridArray),Pe=ie.getProgramCacheKey(_e);let Le=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;const Ke=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=F.get(x.envMap||B.environment,Ke),B.envMapRotation=B.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Le===void 0&&(x.addEventListener("dispose",pe),Le=new Map,B.programs=Le);let Je=Le.get(Pe);if(Je!==void 0){if(B.currentProgram===Je&&B.lightsStateVersion===be)return At(x,_e),Je}else _e.uniforms=ie.getUniforms(x),I!==null&&x.isNodeMaterial&&I.build(x,H,_e),x.onBeforeCompile(_e,U),Je=ie.acquireProgram(_e,Pe),Le.set(Pe,Je),B.uniforms=_e.uniforms;const Ue=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ue.clippingPlanes=he.uniform),At(x,_e),B.needsLights=Ji(x),B.lightsStateVersion=be,B.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),B.lightProbeGrid=y.state.lightProbeGridArray.length>0,B.currentProgram=Je,B.uniformsList=null,Je}function Tt(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=Ja.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function At(x,N){const H=M.get(x);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function _t(x,N){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let H=0,B=x.length;H<B;H++){const G=x[H];if(G.texture!==null&&G.boundingBox.containsPoint(b))return G}return null}function An(x,N,H,B,G){N.isScene!==!0&&(N=Be),g.resetTextureUnits();const xe=N.fog,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,_e=D===null?U.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:it.workingColorSpace,Pe=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Le=F.get(B.envMap||be,Pe),Ke=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Je=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ue=!!H.morphAttributes.position,ot=!!H.morphAttributes.normal,pt=!!H.morphAttributes.color;let gt=vn;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(gt=U.toneMapping);const lt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pt=lt!==void 0?lt.length:0,Te=M.get(B),Ot=y.state.lights;if(qe===!0&&(ze===!0||x!==O)){const vt=x===O&&B.id===z;he.setState(B,x,vt)}let nt=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Ot.state.version||Te.outputColorSpace!==_e||G.isBatchedMesh&&Te.batching===!1||!G.isBatchedMesh&&Te.batching===!0||G.isBatchedMesh&&Te.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Te.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Te.instancing===!1||!G.isInstancedMesh&&Te.instancing===!0||G.isSkinnedMesh&&Te.skinning===!1||!G.isSkinnedMesh&&Te.skinning===!0||G.isInstancedMesh&&Te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Te.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Te.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Te.instancingMorph===!1&&G.morphTexture!==null||Te.envMap!==Le||B.fog===!0&&Te.fog!==xe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==he.numPlanes||Te.numIntersection!==he.numIntersection)||Te.vertexAlphas!==Ke||Te.vertexTangents!==Je||Te.morphTargets!==Ue||Te.morphNormals!==ot||Te.morphColors!==pt||Te.toneMapping!==gt||Te.morphTargetsCount!==Pt||!!Te.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Te.__version=B.version);let kt=Te.currentProgram;nt===!0&&(kt=tn(B,N,G),I&&B.isNodeMaterial&&I.onUpdateProgram(B,kt,Te));let jt=!1,dn=!1,Wn=!1;const ct=kt.getUniforms(),St=Te.uniforms;if(te.useProgram(kt.program)&&(jt=!0,dn=!0,Wn=!0),B.id!==z&&(z=B.id,dn=!0),Te.needsLights){const vt=_t(y.state.lightProbeGridArray,G);Te.lightProbeGrid!==vt&&(Te.lightProbeGrid=vt,dn=!0)}if(jt||O!==x){te.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ct.setValue(C,"projectionMatrix",x.projectionMatrix),ct.setValue(C,"viewMatrix",x.matrixWorldInverse);const qn=ct.map.cameraPosition;qn!==void 0&&qn.setValue(C,Fe.setFromMatrixPosition(x.matrixWorld)),He.logarithmicDepthBuffer&&ct.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ct.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),O!==x&&(O=x,dn=!0,Wn=!0)}if(Te.needsLights&&(Ot.state.directionalShadowMap.length>0&&ct.setValue(C,"directionalShadowMap",Ot.state.directionalShadowMap,g),Ot.state.spotShadowMap.length>0&&ct.setValue(C,"spotShadowMap",Ot.state.spotShadowMap,g),Ot.state.pointShadowMap.length>0&&ct.setValue(C,"pointShadowMap",Ot.state.pointShadowMap,g)),G.isSkinnedMesh){ct.setOptional(C,G,"bindMatrix"),ct.setOptional(C,G,"bindMatrixInverse");const vt=G.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),ct.setValue(C,"boneTexture",vt.boneTexture,g))}G.isBatchedMesh&&(ct.setOptional(C,G,"batchingTexture"),ct.setValue(C,"batchingTexture",G._matricesTexture,g),ct.setOptional(C,G,"batchingIdTexture"),ct.setValue(C,"batchingIdTexture",G._indirectTexture,g),ct.setOptional(C,G,"batchingColorTexture"),G._colorsTexture!==null&&ct.setValue(C,"batchingColorTexture",G._colorsTexture,g));const Xn=H.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&Ie.update(G,H,kt),(dn||Te.receiveShadow!==G.receiveShadow)&&(Te.receiveShadow=G.receiveShadow,ct.setValue(C,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(St.envMapIntensity.value=N.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=Fv()),dn){if(ct.setValue(C,"toneMappingExposure",U.toneMappingExposure),Te.needsLights&&ji(St,Wn),xe&&B.fog===!0&&k.refreshFogUniforms(St,xe),k.refreshMaterialUniforms(St,B,oe,Xe,y.state.transmissionRenderTarget[x.id]),Te.needsLights&&Te.lightProbeGrid){const vt=Te.lightProbeGrid;St.probesSH.value=vt.texture,St.probesMin.value.copy(vt.boundingBox.min),St.probesMax.value.copy(vt.boundingBox.max),St.probesResolution.value.copy(vt.resolution)}Ja.upload(C,Tt(Te),St,g)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ja.upload(C,Tt(Te),St,g),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ct.setValue(C,"center",G.center),ct.setValue(C,"modelViewMatrix",G.modelViewMatrix),ct.setValue(C,"normalMatrix",G.normalMatrix),ct.setValue(C,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){const vt=B.uniformsGroups;for(let qn=0,bi=vt.length;qn<bi;qn++){const Ss=vt[qn];$.update(Ss,kt),$.bind(Ss,kt)}}return kt}function ji(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Ji(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,N,H){const B=M.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),M.get(x.texture).__webglTexture=N,M.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){const H=M.get(x);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const Qi=C.createFramebuffer();this.setRenderTarget=function(x,N=0,H=0){D=x,X=N,q=H;let B=null,G=!1,xe=!1;if(x){const _e=M.get(x);if(_e.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(C.FRAMEBUFFER,_e.__webglFramebuffer),Z.copy(x.viewport),J.copy(x.scissor),ce=x.scissorTest,te.viewport(Z),te.scissor(J),te.setScissorTest(ce),z=-1;return}else if(_e.__webglFramebuffer===void 0)g.setupRenderTarget(x);else if(_e.__hasExternalTextures)g.rebindTextures(x,M.get(x.texture).__webglTexture,M.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ke=x.depthTexture;if(_e.__boundDepthTexture!==Ke){if(Ke!==null&&M.has(Ke)&&(x.width!==Ke.image.width||x.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(x)}}const Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(xe=!0);const Le=M.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?B=Le[N][H]:B=Le[N],G=!0):x.samples>0&&g.useMultisampledRTT(x)===!1?B=M.get(x).__webglMultisampledFramebuffer:Array.isArray(Le)?B=Le[H]:B=Le,Z.copy(x.viewport),J.copy(x.scissor),ce=x.scissorTest}else Z.copy(Q).multiplyScalar(oe).floor(),J.copy(Me).multiplyScalar(oe).floor(),ce=Ee;if(H!==0&&(B=Qi),te.bindFramebuffer(C.FRAMEBUFFER,B)&&te.drawBuffers(x,B),te.viewport(Z),te.scissor(J),te.setScissorTest(ce),G){const _e=M.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,H)}else if(xe){const _e=N;for(let Pe=0;Pe<x.textures.length;Pe++){const Le=M.get(x.textures[Pe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Pe,Le.__webglTexture,H,_e)}}else if(x!==null&&H!==0){const _e=M.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_e.__webglTexture,H)}z=-1},this.readRenderTargetPixels=function(x,N,H,B,G,xe,be,_e=0){if(!(x&&x.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=M.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){te.bindFramebuffer(C.FRAMEBUFFER,Pe);try{const Le=x.textures[_e],Ke=Le.format,Je=Le.type;if(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e),!He.textureFormatReadable(Ke)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Je)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-B&&H>=0&&H<=x.height-G&&C.readPixels(N,H,B,G,L.convert(Ke),L.convert(Je),xe)}finally{const Le=D!==null?M.get(D).__webglFramebuffer:null;te.bindFramebuffer(C.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(x,N,H,B,G,xe,be,_e=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=M.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe)if(N>=0&&N<=x.width-B&&H>=0&&H<=x.height-G){te.bindFramebuffer(C.FRAMEBUFFER,Pe);const Le=x.textures[_e],Ke=Le.format,Je=Le.type;if(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e),!He.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ue),C.bufferData(C.PIXEL_PACK_BUFFER,xe.byteLength,C.STREAM_READ),C.readPixels(N,H,B,G,L.convert(Ke),L.convert(Je),0);const ot=D!==null?M.get(D).__webglFramebuffer:null;te.bindFramebuffer(C.FRAMEBUFFER,ot);const pt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await rh(C,pt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ue),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,xe),C.deleteBuffer(Ue),C.deleteSync(pt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,H=0){const B=Math.pow(2,-H),G=Math.floor(x.image.width*B),xe=Math.floor(x.image.height*B),be=N!==null?N.x:0,_e=N!==null?N.y:0;g.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,be,_e,G,xe),te.unbindTexture()};const ea=C.createFramebuffer(),ri=C.createFramebuffer();this.copyTextureToTexture=function(x,N,H=null,B=null,G=0,xe=0){let be,_e,Pe,Le,Ke,Je,Ue,ot,pt;const gt=x.isCompressedTexture?x.mipmaps[xe]:x.image;if(H!==null)be=H.max.x-H.min.x,_e=H.max.y-H.min.y,Pe=H.isBox3?H.max.z-H.min.z:1,Le=H.min.x,Ke=H.min.y,Je=H.isBox3?H.min.z:0;else{const St=Math.pow(2,-G);be=Math.floor(gt.width*St),_e=Math.floor(gt.height*St),x.isDataArrayTexture?Pe=gt.depth:x.isData3DTexture?Pe=Math.floor(gt.depth*St):Pe=1,Le=0,Ke=0,Je=0}B!==null?(Ue=B.x,ot=B.y,pt=B.z):(Ue=0,ot=0,pt=0);const lt=L.convert(N.format),Pt=L.convert(N.type);let Te;N.isData3DTexture?(g.setTexture3D(N,0),Te=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(g.setTexture2DArray(N,0),Te=C.TEXTURE_2D_ARRAY):(g.setTexture2D(N,0),Te=C.TEXTURE_2D),te.activeTexture(C.TEXTURE0),te.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),te.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),te.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const Ot=te.getParameter(C.UNPACK_ROW_LENGTH),nt=te.getParameter(C.UNPACK_IMAGE_HEIGHT),kt=te.getParameter(C.UNPACK_SKIP_PIXELS),jt=te.getParameter(C.UNPACK_SKIP_ROWS),dn=te.getParameter(C.UNPACK_SKIP_IMAGES);te.pixelStorei(C.UNPACK_ROW_LENGTH,gt.width),te.pixelStorei(C.UNPACK_IMAGE_HEIGHT,gt.height),te.pixelStorei(C.UNPACK_SKIP_PIXELS,Le),te.pixelStorei(C.UNPACK_SKIP_ROWS,Ke),te.pixelStorei(C.UNPACK_SKIP_IMAGES,Je);const Wn=x.isDataArrayTexture||x.isData3DTexture,ct=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const St=M.get(x),Xn=M.get(N),vt=M.get(St.__renderTarget),qn=M.get(Xn.__renderTarget);te.bindFramebuffer(C.READ_FRAMEBUFFER,vt.__webglFramebuffer),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let bi=0;bi<Pe;bi++)Wn&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,M.get(x).__webglTexture,G,Je+bi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,M.get(N).__webglTexture,xe,pt+bi)),C.blitFramebuffer(Le,Ke,be,_e,Ue,ot,be,_e,C.DEPTH_BUFFER_BIT,C.NEAREST);te.bindFramebuffer(C.READ_FRAMEBUFFER,null),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(G!==0||x.isRenderTargetTexture||M.has(x)){const St=M.get(x),Xn=M.get(N);te.bindFramebuffer(C.READ_FRAMEBUFFER,ea),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,ri);for(let vt=0;vt<Pe;vt++)Wn?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.__webglTexture,G,Je+vt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,St.__webglTexture,G),ct?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Xn.__webglTexture,xe,pt+vt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Xn.__webglTexture,xe),G!==0?C.blitFramebuffer(Le,Ke,be,_e,Ue,ot,be,_e,C.COLOR_BUFFER_BIT,C.NEAREST):ct?C.copyTexSubImage3D(Te,xe,Ue,ot,pt+vt,Le,Ke,be,_e):C.copyTexSubImage2D(Te,xe,Ue,ot,Le,Ke,be,_e);te.bindFramebuffer(C.READ_FRAMEBUFFER,null),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ct?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(Te,xe,Ue,ot,pt,be,_e,Pe,lt,Pt,gt.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Te,xe,Ue,ot,pt,be,_e,Pe,lt,gt.data):C.texSubImage3D(Te,xe,Ue,ot,pt,be,_e,Pe,lt,Pt,gt):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,xe,Ue,ot,be,_e,lt,Pt,gt.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,xe,Ue,ot,gt.width,gt.height,lt,gt.data):C.texSubImage2D(C.TEXTURE_2D,xe,Ue,ot,be,_e,lt,Pt,gt);te.pixelStorei(C.UNPACK_ROW_LENGTH,Ot),te.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nt),te.pixelStorei(C.UNPACK_SKIP_PIXELS,kt),te.pixelStorei(C.UNPACK_SKIP_ROWS,jt),te.pixelStorei(C.UNPACK_SKIP_IMAGES,dn),xe===0&&N.generateMipmaps&&C.generateMipmap(Te),te.unbindTexture()},this.initRenderTarget=function(x){M.get(x).__webglFramebuffer===void 0&&g.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?g.setTextureCube(x,0):x.isData3DTexture?g.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?g.setTexture2DArray(x,0):g.setTexture2D(x,0),te.unbindTexture()},this.resetState=function(){X=0,q=0,D=null,te.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}const Ov=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Bv=`
precision highp float;

uniform float uTempo;
uniform float uClareia;
uniform float uEscurece;
uniform float uNubla;
uniform float uQueima;
uniform float uFalha;
uniform float uOndula;
uniform float uGranula;
uniform float uApaga;
uniform float uPisca;
uniform float uRastro;
uniform float uEspelha;
uniform float uMultiplica;
uniform float uQuadricula;
uniform float uEntorta;
uniform float uBorra;
uniform float uTreme;
uniform float uLimpido;
uniform float uAzula;
uniform float uRosa;
uniform float uSatura;
uniform float uContrasta;
uniform float uPixeliza;
uniform float uLinhas;
uniform float uCroma;
uniform float uVhs;
uniform float uPosteriza;
uniform float uGlitch;
uniform float uGlitchTear;
uniform float uGlitchChroma;
uniform float uGlitchLines;
uniform float uGlitchGhost;
uniform float uGlitchGrain;
uniform float uGlitchSeed;
uniform float uDia;
uniform float uChuva;
uniform float uUmidade;
uniform float uAzul;
uniform float uCinza;
uniform float uNuvemSinal;
uniform float uMar;
uniform float uDunas;
uniform float uAreia;
uniform float uCidade;
uniform float uMontanhas;
uniform vec2 uResolucao;
varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p *= 2.03;
    a *= 0.52;
  }
  return v;
}

vec3 tonemap(vec3 color) {
  color = max(color, vec3(0.0));
  return color / (color + vec3(1.0));
}

float fortalezaProfile(vec2 uv, float seed) {
  float ridge = fbm(vec2(uv.x * 6.0 + seed * 2.1, seed * 0.4));
  float towers = fbm(vec2(uv.x * 19.0 + seed * 7.7, 4.0 + seed));
  float skyline = 0.07 + ridge * 0.11 + towers * 0.06;
  skyline += smoothstep(0.62, 0.9, uv.x) * 0.04;
  skyline += smoothstep(0.1, 0.28, uv.x) * 0.018;
  return skyline;
}

vec3 atmosphere(vec2 uv, vec2 p, vec2 sunPos, float dayLight, float golden, float overcast) {
  vec3 viewDir = normalize(vec3(p.x, uv.y * 1.55 - 0.18, 1.0));
  vec3 sunDir = normalize(vec3((sunPos.x - 0.5) * 1.25, sunPos.y - 0.08, 0.72));
  float mu = clamp(dot(viewDir, sunDir), -1.0, 1.0);
  float rayleighPhase = 0.75 * (1.0 + mu * mu);
  float miePhase = pow(max(mu, 0.0), 48.0);
  float horizonDepth = exp(-max(uv.y, 0.0) * 2.4);

  vec3 betaRayleigh = mix(vec3(0.12, 0.34, 0.82), vec3(0.06, 0.18, 0.42), 1.0 - uAzul);
  vec3 betaMie = mix(vec3(1.0, 0.82, 0.58), vec3(0.78, 0.80, 0.78), overcast);
  vec3 night = vec3(0.006, 0.010, 0.020) + vec3(0.02, 0.03, 0.055) * horizonDepth;
  vec3 sky = betaRayleigh * rayleighPhase * (0.35 + horizonDepth * 0.65);
  sky += betaMie * miePhase * (0.32 + golden * 0.85);
  sky += vec3(1.0, 0.48, 0.18) * golden * horizonDepth * 0.42;
  sky = mix(night, sky, dayLight);
  return mix(sky, vec3(0.56, 0.60, 0.61) * (0.72 + dayLight * 0.32), overcast * 0.78);
}

void main() {
  vec2 uv = vUv;
  if (uPixeliza > 0.02) {
    float blocks = mix(220.0, 32.0, uPixeliza);
    uv = (floor(uv * blocks) + 0.5) / blocks;
  }
  float aspect = uResolucao.x / max(uResolucao.y, 1.0);
  vec2 p = vec2((uv.x - 0.5) * aspect, uv.y);
  uv.x = mix(uv.x, 1.0 - uv.x, step(0.5, uEspelha));
  uv += vec2(
    sin(uTempo * 38.0) * uTreme * 0.018,
    cos(uTempo * 31.0) * uTreme * 0.014
  );

  float sharedGlitch = max(uFalha, uGlitch);
  float glitchLine = step(0.985 - sharedGlitch * 0.08, hash(vec2(floor(uv.y * 90.0), floor(uTempo * 16.0) + uGlitchSeed * 19.0)));
  float glitchBand = step(0.975 - uGlitchTear * 0.18, hash(vec2(floor(uv.y * (24.0 + uGlitchTear * 80.0)), floor(uTempo * 10.0) + uGlitchSeed * 37.0)));
  uv.x += (glitchLine - 0.5) * sharedGlitch * 0.12;
  uv.x += (glitchBand - 0.5) * uGlitchTear * 0.18;
  uv.x += sin(uv.y * 16.0 + uTempo * 1.7) * uOndula * 0.018;
  uv.x += sin(uv.y * 30.0 + uTempo * 2.2) * uEntorta * 0.028;
  uv.y += sin(uv.x * 18.0 + uTempo * 1.4) * uEntorta * 0.018;

  float sunArc = sin(uDia * 3.14159265);
  float dayLight = smoothstep(-0.08, 0.42, sunArc);
  float golden = pow(1.0 - abs(uDia - 0.5) * 2.0, 6.0);
  golden += exp(-pow((uDia - 0.24) * 13.0, 2.0)) + exp(-pow((uDia - 0.76) * 13.0, 2.0));
  golden = clamp(golden, 0.0, 1.0);
  float twilight = clamp(exp(-pow((uDia - 0.24) * 10.0, 2.0)) + exp(-pow((uDia - 0.76) * 10.0, 2.0)) + uRosa * 0.9, 0.0, 1.0);
  float cloudAmount = clamp(max(uNubla, uNuvemSinal), 0.0, 1.0);
  float storm = clamp(uChuva * 0.85 + uCinza * 0.55, 0.0, 1.0);
  float overcast = clamp(storm * 0.72 + uUmidade * 0.16 - uLimpido * 0.42, 0.0, 1.0);
  float clearSky = clamp(uClareia * 0.45 + uAzul * 0.55 + uAzula * 0.52 + uLimpido * 0.38 - storm * 0.55, 0.0, 1.0);

  vec3 nightZenith = vec3(0.008, 0.014, 0.028);
  vec3 dayZenith = mix(vec3(0.05, 0.31, 0.82), vec3(0.015, 0.38, 1.18), clearSky);
  dayZenith = mix(dayZenith, vec3(0.34, 0.19, 0.72), twilight * 0.34);
  vec3 grayZenith = vec3(0.54, 0.60, 0.62);
  vec3 zenith = mix(mix(nightZenith, dayZenith, dayLight), grayZenith, overcast);

  vec3 nightHorizon = vec3(0.030, 0.038, 0.052);
  vec3 dayHorizon = mix(vec3(0.45, 0.74, 0.98), vec3(0.76, 0.94, 1.18), clearSky);
  vec3 roseHorizon = mix(vec3(1.0, 0.43, 0.58), vec3(1.0, 0.62, 0.36), golden);
  dayHorizon = mix(dayHorizon, roseHorizon, twilight * 0.72);
  vec3 warmHorizon = mix(vec3(1.0, 0.58, 0.26), vec3(1.0, 0.36, 0.62), uRosa * 0.45);
  vec3 grayHorizon = vec3(0.72, 0.73, 0.70);
  vec3 horizon = mix(mix(nightHorizon, mix(dayHorizon, warmHorizon, golden), dayLight), grayHorizon, overcast);
  vec2 sunPos = vec2(0.18 + uDia * 0.64, 0.08 + sunArc * 0.70);
  vec3 color = mix(mix(horizon, zenith, smoothstep(0.04, 0.95, uv.y)), atmosphere(uv, p, sunPos, dayLight, golden, overcast), 0.72);
  float sunSize = 0.055 + uQueima * 0.035;
  float sun = 1.0 - smoothstep(0.0, sunSize, distance(uv, sunPos));
  float halo = 1.0 - smoothstep(0.0, 0.42 + uQueima * 0.18, distance(uv, sunPos));
  color += vec3(3.6, 2.55, 1.15) * sun * dayLight * (0.25 + uClareia * 0.35 + uQueima * 0.35) * (1.0 - overcast * 0.72);
  color += vec3(1.0, 0.64, 0.34) * halo * dayLight * (golden * 0.42 + uQueima * 0.18) * (1.0 - overcast * 0.52);

  vec2 cloudUv = uv;
  if (uMultiplica > 0.02) {
    cloudUv = fract(uv * (1.0 + floor(uMultiplica * 5.0)));
  }
  vec2 warp = vec2(
    fbm(cloudUv * 2.0 + vec2(uTempo * 0.006, 3.1)),
    fbm(cloudUv * 2.3 + vec2(4.7, -uTempo * 0.005))
  );
  cloudUv += (warp - 0.5) * (0.08 + cloudAmount * 0.28 + uEntorta * 0.12);
  float largeCloud = fbm(vec2(cloudUv.x * 2.05 + uTempo * (0.002 + uOndula * 0.012), cloudUv.y * 2.65));
  float cotton = fbm(vec2(cloudUv.x * 7.5 - uTempo * 0.004, cloudUv.y * 6.2 + 2.0));
  float billow = fbm(vec2(cloudUv.x * 18.0 + 7.0, cloudUv.y * 13.0 - uTempo * 0.006));
  float cloudField = largeCloud * 0.68 + cotton * 0.24 + billow * 0.08;
  float cloudBase = smoothstep(0.58 - cloudAmount * 0.33, 0.82, cloudField);
  float cottonEdges = smoothstep(0.36, 0.78, cotton) * smoothstep(0.18, 0.95, uv.y);
  float cloudMask = clamp(cloudBase * (0.72 + cottonEdges * 0.42), 0.0, 1.0) * smoothstep(0.10, 0.92, uv.y);
  vec3 whiteCloud = mix(vec3(0.92, 0.95, 0.96), vec3(1.0, 0.985, 0.94), clearSky);
  vec3 shadowCloud = mix(vec3(0.72, 0.77, 0.80), vec3(0.46, 0.50, 0.52), storm);
  vec3 cloudColor = mix(shadowCloud, whiteCloud, clamp(cottonEdges + clearSky * 0.55, 0.0, 1.0));
  cloudColor = mix(cloudColor, vec3(1.0, 0.80, 0.58), golden * 0.22 * (1.0 - storm));
  color = mix(color, cloudColor, cloudMask * (0.08 + cloudAmount * 0.78 + storm * 0.18));
  color = mix(color, vec3(0.55, 0.60, 0.61), storm * 0.34 + uUmidade * 0.08);

  float seaTop = mix(0.22, 0.28, uMar * 0.3);
  float seaBottom = mix(0.11, 0.09, uMar * 0.2);
  float seaMask = smoothstep(seaBottom - 0.015, seaBottom + 0.01, uv.y) * (1.0 - smoothstep(seaTop - 0.02, seaTop + 0.015, uv.y)) * uMar;
  float waveA = sin(uv.x * 68.0 + uTempo * 0.75) * 0.5 + 0.5;
  float waveB = sin(uv.x * 121.0 - uTempo * 0.52 + uv.y * 42.0) * 0.5 + 0.5;
  float chop = fbm(vec2(uv.x * 32.0 + uTempo * 0.03, uv.y * 54.0 - uTempo * 0.02));
  float waveMix = clamp(waveA * 0.48 + waveB * 0.34 + chop * 0.3, 0.0, 1.0);
  float horizonFade = smoothstep(seaBottom, seaTop, uv.y);
  vec3 seaDeep = mix(vec3(0.02, 0.08, 0.14), vec3(0.06, 0.20, 0.30), clearSky);
  vec3 seaShallow = mix(vec3(0.07, 0.24, 0.34), vec3(0.12, 0.42, 0.56), clearSky);
  vec3 seaColor = mix(seaDeep, seaShallow, horizonFade + waveMix * 0.18);
  float sunTrack = exp(-pow((uv.x - sunPos.x) * 7.0, 2.0)) * smoothstep(seaBottom, seaTop, uv.y) * dayLight;
  vec3 seaHighlight = vec3(1.0, 0.74, 0.42) * (golden * 0.5 + 0.08) + vec3(0.72, 0.9, 1.0) * clearSky * 0.18;
  color = mix(color, seaColor, seaMask * (0.58 + storm * 0.08));
  color += seaHighlight * sunTrack * seaMask * (0.12 + waveMix * 0.24);

  float horizonBand = smoothstep(0.0, 0.08, 0.28 - uv.y);
  float dunasBase = mix(0.08, 0.11, uDunas * 0.4);
  float dunasSilhouette = smoothstep(dunasBase - 0.01, dunasBase + 0.02, uv.y) * (1.0 - step(seaTop - 0.01, uv.y));
  float dunasWave = fbm(vec2(uv.x * 18.0 + uTempo * 0.08, uv.y * 42.0)) * 0.015;
  dunasSilhouette *= step(uv.y, dunasBase + dunasWave);
  vec3 darkSand = mix(vec3(0.18, 0.12, 0.055), vec3(0.46, 0.32, 0.12), golden * 0.6 + dayLight * 0.3);
  vec3 lightSand = mix(vec3(0.74, 0.61, 0.36), vec3(0.96, 0.82, 0.50), golden * 0.4 + dayLight * 0.5);
  lightSand = mix(lightSand, vec3(0.78, 0.52, 0.72), uRosa * 0.28);
  vec3 dunasColor = mix(darkSand, lightSand, uAreia * 0.8);
  color = mix(color, dunasColor, dunasSilhouette * uDunas * 0.72);

  float mountainBase = 0.12 + uMontanhas * 0.045;
  float mountainProfile = mountainBase + fbm(vec2(uv.x * 4.6, 2.8)) * 0.16 + fbm(vec2(uv.x * 13.0, 8.1)) * 0.035;
  float mountainMask = step(uv.y, mountainProfile) * smoothstep(0.02, 0.35, uv.y) * uMontanhas;
  vec3 mountainNear = vec3(0.010, 0.030, 0.090);
  vec3 mountainFar = vec3(0.020, 0.060, 0.150);
  vec3 mountainColor = mix(mountainNear, mountainFar, smoothstep(0.04, 0.26, uv.y));
  mountainColor = mix(mountainColor, vec3(0.015, 0.025, 0.065), 1.0 - dayLight * 0.3);
  color = mix(color, mountainColor, mountainMask * 0.84);

  float skyline = step(uv.y, fortalezaProfile(uv, 0.0));
  float skylineDetail = step(uv.y, fortalezaProfile(uv, 1.0) + 0.015 * sin(uv.x * 42.0 + uTempo * 0.8));
  float streetGlow = smoothstep(0.22, 0.0, abs(uv.y - 0.08 - sin(uv.x * 8.0 + uTempo * 0.2) * 0.008));
  float towerWindows = step(0.5, hash(vec2(floor(uv.x * 54.0), floor(uv.y * 120.0)))) * skylineDetail;
  vec3 cityDark = mix(vec3(0.018, 0.024, 0.03), vec3(0.045, 0.058, 0.075), golden * 0.32);
  vec3 cityWarm = mix(vec3(0.18, 0.12, 0.06), vec3(1.0, 0.58, 0.24), dayLight * 0.35 + golden * 0.65);
  float cityMask = max(horizonBand * 0.6, skyline * 0.92) * uCidade;
  color = mix(color, cityDark, cityMask);
  color += cityWarm * towerWindows * (0.18 + golden * 0.58) * horizonBand * uCidade;
  color += vec3(0.08, 0.26, 0.48) * streetGlow * (0.12 + clearSky * 0.22) * uCidade;
  float gridLine = max(
    1.0 - smoothstep(0.0, 0.006 + uQuadricula * 0.006, abs(fract(uv.x * (8.0 + uQuadricula * 42.0)) - 0.5)),
    1.0 - smoothstep(0.0, 0.006 + uQuadricula * 0.006, abs(fract(uv.y * (6.0 + uQuadricula * 30.0)) - 0.5))
  );
  color = mix(color, vec3(0.82, 0.92, 0.94), gridLine * uQuadricula * 0.22);

  float grain = hash(uv * uResolucao + uTempo);
  color += (grain - 0.5) * (0.012 + uGranula * 0.24 + sharedGlitch * 0.12 + uVhs * 0.14 + uGlitchGrain * 0.18 - uLimpido * 0.01);
  float scan = sin((uv.y + uTempo * (0.18 + uVhs * 1.8)) * uResolucao.y * 1.65);
  color -= vec3(0.04, 0.055, 0.07) * smoothstep(0.55, 1.0, scan) * (uLinhas * 0.42 + uVhs * 0.34 + uGlitchLines * 0.34);
  color.r += max(uCroma, uGlitchChroma) * sin(uv.y * 52.0 + uTempo * 3.0) * 0.055;
  color.b += max(uCroma, uGlitchChroma) * sin(uv.y * 47.0 - uTempo * 2.2) * 0.075;
  color = mix(color, vec3(dot(color, vec3(0.299, 0.587, 0.114))), uBorra * 0.22);
  color = mix(color, color * vec3(0.72, 0.92, 1.08), max(uRastro, uGlitchGhost) * 0.28);
  color = mix(color, color * vec3(0.74, 0.94, 1.34), uAzula * 0.42);
  color += vec3(1.0, 0.54, 0.24) * uQueima * 0.045;
  float luminance = dot(color, vec3(0.299, 0.587, 0.114));
  color = mix(vec3(luminance), color, 0.9 + clearSky * 0.42 + uSatura * 0.72 - storm * 0.24);
  color = (color - 0.5) * (1.0 + uContrasta * 0.85 + uLimpido * 0.18) + 0.5;
  if (uPosteriza > 0.02) {
    float levels = mix(24.0, 5.0, uPosteriza);
    color = floor(color * levels) / levels;
  }
  color *= 0.74 + dayLight * 0.28 + clearSky * 0.28 + uPisca * abs(sin(uTempo * 18.0)) * 0.72;
  color *= 1.0 - uEscurece * 0.72;
  color *= 1.0 - uApaga * 0.95;

  gl_FragColor = vec4(pow(tonemap(color * 1.35), vec3(0.78)), 1.0);
}
`;function Gv(t){const e=new zv({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),n=new Sh,i=new hs(-1,1,1,-1,0,1),a={uTempo:{value:0},uClareia:{value:0},uEscurece:{value:0},uNubla:{value:0},uQueima:{value:0},uFalha:{value:0},uOndula:{value:0},uGranula:{value:0},uApaga:{value:0},uPisca:{value:0},uRastro:{value:0},uEspelha:{value:0},uMultiplica:{value:0},uQuadricula:{value:0},uEntorta:{value:0},uBorra:{value:0},uTreme:{value:0},uLimpido:{value:0},uAzula:{value:0},uRosa:{value:0},uSatura:{value:0},uContrasta:{value:0},uPixeliza:{value:0},uLinhas:{value:0},uCroma:{value:0},uVhs:{value:0},uPosteriza:{value:0},uGlitch:{value:0},uGlitchTear:{value:0},uGlitchChroma:{value:0},uGlitchLines:{value:0},uGlitchGhost:{value:0},uGlitchGrain:{value:0},uGlitchSeed:{value:0},uDia:{value:.5},uChuva:{value:0},uUmidade:{value:0},uAzul:{value:.6},uCinza:{value:0},uNuvemSinal:{value:0},uMar:{value:0},uDunas:{value:0},uAreia:{value:0},uCidade:{value:0},uMontanhas:{value:0},uResolucao:{value:new ft(1,1)}},r={uClareia:0,uEscurece:0,uNubla:0,uQueima:0,uFalha:0,uOndula:0,uGranula:0,uApaga:0,uPisca:0,uRastro:0,uEspelha:0,uMultiplica:0,uQuadricula:0,uEntorta:0,uBorra:0,uTreme:0,uLimpido:0,uAzula:0,uRosa:0,uSatura:0,uContrasta:0,uPixeliza:0,uLinhas:0,uCroma:0,uVhs:0,uPosteriza:0,uDia:.5,uChuva:0,uUmidade:0,uAzul:.6,uCinza:0,uNuvemSinal:0,uMar:0,uDunas:0,uAreia:0,uCidade:0,uMontanhas:0},o=new un({vertexShader:Ov,fragmentShader:Bv,uniforms:a}),s=new En(new Sa(2,2),o);n.add(s);const l=()=>{const c=t.getBoundingClientRect(),d=Math.max(1,Math.floor(c.width*window.devicePixelRatio)),f=Math.max(1,Math.floor(c.height*window.devicePixelRatio));e.setSize(d,f,!1),a.uResolucao.value.set(d,f)};return l(),{render(c,d,f){l();const u=c.visual;a.uTempo.value=d,a.uClareia.value=tt(r,"uClareia",u.clareia??c.sinais["ceu.claro"]??0,.045),a.uEscurece.value=tt(r,"uEscurece",u.escurece??0,.06),a.uNubla.value=tt(r,"uNubla",u.nubla??0,.035),a.uQueima.value=tt(r,"uQueima",Math.max(u.queima??0,c.sinais["tempo.calor"]??0)*.72,.05),a.uFalha.value=tt(r,"uFalha",u.falha??0,.08),a.uOndula.value=tt(r,"uOndula",Math.max(u.ondula??0,u.arrasta??0),.045),a.uGranula.value=tt(r,"uGranula",u.granula??0,.055),a.uApaga.value=tt(r,"uApaga",u.apaga??0,.06),a.uPisca.value=tt(r,"uPisca",u.pisca??0,.12),a.uRastro.value=tt(r,"uRastro",u.rastro??0,.045),a.uEspelha.value=tt(r,"uEspelha",u.espelha??0,.16),a.uMultiplica.value=tt(r,"uMultiplica",u.multiplica??0,.08),a.uQuadricula.value=tt(r,"uQuadricula",u.quadricula??0,.08),a.uEntorta.value=tt(r,"uEntorta",u.entorta??0,.06),a.uBorra.value=tt(r,"uBorra",u.borra??0,.05),a.uTreme.value=tt(r,"uTreme",u.treme??0,.12),a.uLimpido.value=tt(r,"uLimpido",u.limpido??.35,.035),a.uAzula.value=tt(r,"uAzula",u.azula??0,.035),a.uRosa.value=tt(r,"uRosa",Math.max(u.rosa??0,c.sinais["ceu.rosa"]??0),.035),a.uSatura.value=tt(r,"uSatura",u.satura??.12,.04),a.uContrasta.value=tt(r,"uContrasta",u.contrasta??.08,.04),a.uPixeliza.value=tt(r,"uPixeliza",u.pixeliza??0,.08),a.uLinhas.value=tt(r,"uLinhas",u.linhas??0,.08),a.uCroma.value=tt(r,"uCroma",u.croma??0,.08),a.uVhs.value=tt(r,"uVhs",u.vhs??0,.08),a.uPosteriza.value=tt(r,"uPosteriza",u.posteriza??0,.08),a.uGlitch.value=f?.intensity??0,a.uGlitchTear.value=f?.tear??0,a.uGlitchChroma.value=f?.chroma??0,a.uGlitchLines.value=f?.scanlines??0,a.uGlitchGhost.value=f?.ghost??0,a.uGlitchGrain.value=f?.grain??0,a.uGlitchSeed.value=f?.seed??0,a.uDia.value=tt(r,"uDia",Vv(),.01),a.uChuva.value=tt(r,"uChuva",c.sinais["tempo.chuva"]??0,.03),a.uUmidade.value=tt(r,"uUmidade",c.sinais["tempo.umidade"]??0,.03),a.uAzul.value=tt(r,"uAzul",c.sinais["ceu.azul"]??.6,.025),a.uCinza.value=tt(r,"uCinza",Math.max(c.sinais["ceu.cinza"]??0,c.sinais["tempo.chuva"]??0),.035),a.uNuvemSinal.value=tt(r,"uNuvemSinal",Math.max(c.sinais["ceu.nuvem"]??0,c.sinais["tempo.nuvem"]??0),.035),a.uMar.value=tt(r,"uMar",u.mar??0,.045),a.uDunas.value=tt(r,"uDunas",u.dunas??0,.045),a.uAreia.value=tt(r,"uAreia",u.areia??0,.045),a.uCidade.value=tt(r,"uCidade",u.cidade??0,.045),a.uMontanhas.value=tt(r,"uMontanhas",u.montanhas??0,.045),e.render(n,i)},resize:l,dispose(){o.dispose(),s.geometry.dispose(),e.dispose()}}}function tt(t,e,n,i){const a=t[e]+(n-t[e])*i;return t[e]=a,a}function Vv(){const t=new Date;return(t.getHours()+t.getMinutes()/60+t.getSeconds()/3600)/24}const ps={"fortaleza.ceu":Mu,"ceu-camera.ceu":vu,"contato-grade.ceu":xu,"cidade.ceu":_u,"litoral-fortaleza.ceu":Su,"mapa-generativo.ceu":yu,"satelites-fortaleza.ceu":Fu,"youtube-experimental.ceu":zu,"preset/ceu-azul.ceu":Eu,"preset/ceu-rosa-poente.ceu":bu,"preset/litoral-dunas.ceu":Ru,"preset/montanhas-noturnas.ceu":Du,"preset/cidade-horizonte.ceu":Tu,"preset/cidade-imagem.ceu":Au,"preset/mapa-rotas.ceu":Pu,"preset/satelites-noite.ceu":Iu,"preset/video-ecos.ceu":Nu,"preset/glitch-vhs.ceu":Cu,"preset/mosaico-quebra.ceu":Uu,"preset/clima-chuva.ceu":wu,"preset/minimal.ceu":Lu},zc=document.querySelector("#app");if(!zc)throw new Error("Elemento #app nao encontrado.");zc.innerHTML=`
  <section class="app-shell">
    <div class="sky-wrap">
      <canvas id="stage" aria-label="ceu shader"></canvas>
    </div>
    <canvas id="satellite-layer" class="satellite-layer" aria-label="satelites sobre fortaleza"></canvas>
    <canvas id="map-layer" class="map-layer" aria-label="mapa generativo"></canvas>
    <div id="media-layer" class="media-layer" aria-label="camada de video"></div>

    <section class="overlay-layer">
      <header class="topbar">
        <div>
          <h1>ceu</h1>
          <p>live coding urbano</p>
        </div>
        <div class="controls">
          <select id="example-select" aria-label="exemplos"></select>
          <button id="run-button" type="button">rodar</button>
          <button id="file-button" type="button">video</button>
          <button id="performance-button" type="button">performance</button>
          <button id="docs-button" type="button">docs</button>
          <input id="file-input" type="file" accept="video/*,image/*" />
        </div>
      </header>

      <div class="editor-pane">
        <textarea id="editor" spellcheck="false" aria-label="codigo ceu"></textarea>
        <pre id="log" class="log"></pre>
      </div>

      <aside class="signals-pane">
        <h2>sinais</h2>
        <div id="signals"></div>
        <h2>estado</h2>
        <pre id="state"></pre>
      </aside>

      <div id="text-panel" class="text-panel"></div>

      <aside id="docs-panel" class="docs-panel" aria-label="documentacao ceu">
        <div class="docs-header">
          <strong>documentacao</strong>
          <button id="docs-close" type="button">fechar</button>
        </div>
        <div id="docs-content" class="docs-content"></div>
      </aside>
    </section>
  </section>
`;const Oc=document.querySelector("#example-select"),Bc=document.querySelector("#editor"),Gc=document.querySelector("#run-button"),Vc=document.querySelector("#file-button"),kc=document.querySelector("#file-input"),Hc=document.querySelector("#performance-button"),Wc=document.querySelector("#docs-button"),Xc=document.querySelector("#docs-close"),qc=document.querySelector("#docs-panel"),Yc=document.querySelector("#docs-content"),$c=document.querySelector("#log"),Kc=document.querySelector("#state"),Zc=document.querySelector("#signals"),jc=document.querySelector("#text-panel"),Jc=document.querySelector("#stage"),Qc=document.querySelector("#satellite-layer"),eu=document.querySelector("#map-layer"),tu=document.querySelector(".app-shell"),nu=document.querySelector(".sky-wrap"),iu=document.querySelector("#media-layer"),au=document.querySelector(".overlay-layer");if(!Oc||!Bc||!Gc||!Vc||!kc||!Hc||!Wc||!Xc||!qc||!Yc||!$c||!Kc||!Zc||!jc||!Jc||!Qc||!eu||!tu||!nu||!iu||!au)throw new Error("UI incompleta.");const fe={select:Oc,editor:Bc,runButton:Gc,fileButton:Vc,fileInput:kc,performanceButton:Hc,docsButton:Wc,docsClose:Xc,docsPanel:qc,docsContent:Yc,log:$c,state:Kc,signals:Zc,textPanel:jc,canvas:Jc,satelliteCanvas:Qc,mapCanvas:eu,shell:tu,skyWrap:nu,mediaLayer:iu,overlayLayer:au};let pi="off";const kv=zl.flatMap(t=>t.examples),ru=Gv(fe.canvas),ou=vf(fe.satelliteCanvas),su=sf(fe.mapCanvas);let dt,Nl=performance.now(),Qr=0,eo=0,ms=0,Ei=!1,Ko=0,Gi="",pa=!1,dr=0,qa="",Fl="video",on;for(const t of Object.keys(ps)){const e=document.createElement("option");e.value=t,e.textContent=t,fe.select.append(e)}fe.select.value="fortaleza.ceu";fe.editor.value=ps["fortaleza.ceu"];fe.select.addEventListener("change",()=>{ii(),fe.editor.value=ps[fe.select.value],Zi()});fe.runButton.addEventListener("click",()=>{ii(),Zi()});fe.fileButton.addEventListener("click",()=>{ii(),fe.fileInput.click()});fe.fileInput.addEventListener("change",()=>{const t=fe.fileInput.files?.[0];t&&(qa&&URL.revokeObjectURL(qa),qa=URL.createObjectURL(t),Fl=t.type.startsWith("image/")?"imagem":"video",Hv(qa,Fl),Zi())});fe.performanceButton.addEventListener("click",()=>{if(Ei){ii();return}uu()});fe.docsButton.addEventListener("click",()=>{fe.docsPanel.classList.toggle("aberto")});fe.docsClose.addEventListener("click",()=>{fe.docsPanel.classList.remove("aberto")});fe.docsContent.addEventListener("click",t=>{const e=t.target;if(!(e instanceof HTMLElement))return;const n=e.closest("[data-doc-example]");if(!n)return;const i=Number(n.dataset.docExample),a=kv[i]?.code;a&&(ii(),fe.editor.value=a,fe.docsPanel.classList.remove("aberto"),Zi())});fe.editor.addEventListener("keydown",t=>{(t.ctrlKey||t.metaKey)&&t.key==="Enter"&&(t.preventDefault(),ii(),Zi())});fe.editor.addEventListener("input",()=>{Ei&&ii()});window.addEventListener("keydown",t=>{(t.ctrlKey||t.metaKey)&&t.shiftKey&&t.key.toLowerCase()==="b"&&(t.preventDefault(),Wv())});window.addEventListener("resize",()=>{ru.resize(),ou.resize(),su.resize()});Zi();requestAnimationFrame(mu);window.setTimeout(()=>uu(),650);lu();Xv();function Zi(){try{const t=Kl(fe.editor.value);dt=Ql(t),Gi="",fe.log.textContent="programa rodando",hu(dt),pu(dt)}catch(t){dt=void 0,fe.log.textContent=t instanceof It||t instanceof Error?t.message:String(t),gu()}}function Hv(t,e){const n=fe.editor.value.split(`
`).filter(r=>!r.trim().startsWith("olha video ")&&!r.trim().startsWith("olha imagem ")),i=n.findIndex(r=>r.trim()!==""&&!r.trim().startsWith("em ")),a=`olha ${e} "${t}"`;i<=0?n.splice(1,0,"",a):n.splice(i,0,a),n.some(r=>r.trim()==="video .82")||n.push("","video .82","ceu .72","mistura .35"),fe.editor.value=n.join(`
`)}function Wv(){pi=pi==="off"?"soft":pi==="soft"?"solid":"off",lu(),fe.log.textContent=`fundo: ${pi==="off"?"transparente":pi==="soft"?"meio opaco":"opaco"}`}function lu(){fe.overlayLayer.classList.toggle("surface-soft",pi==="soft"),fe.overlayLayer.classList.toggle("surface-solid",pi==="solid")}function Xv(){let t=0;fe.docsContent.innerHTML=zl.map(e=>{const n=e.examples.map(i=>{const a=t;return t+=1,`
            <article class="doc-example">
              <div class="doc-example-head">
                <div>
                  <h4>${ca(i.title)}</h4>
                  <p>${ca(i.description)}</p>
                </div>
                <button type="button" data-doc-example="${a}">usar</button>
              </div>
              <pre>${ca(i.code)}</pre>
            </article>
          `}).join("");return`
        <section class="doc-section">
          <h3>${ca(e.title)}</h3>
          <p>${ca(e.body)}</p>
          ${n}
        </section>
      `}).join("")}function ca(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function cu(){try{const t=Kl(fe.editor.value),e=Ql(t);dt=e,e.media.source||(Gi=""),fe.log.textContent=Ei?"performance escrevendo e executando":"programa rodando",hu(e),pu(e)}catch{}}function uu(){ii(),Ei=!0,Ko=0,fe.performanceButton.textContent="pausar",fe.shell.classList.add("performando"),fe.select.value="fortaleza.ceu",du()}function ii(){Ei=!1,window.clearTimeout(ms),fe.performanceButton.textContent="performance",fe.shell.classList.remove("performando")}function du(){if(!Ei)return;const t=ys[Ko%ys.length];fu(t.code,0,()=>{cu(),ms=window.setTimeout(()=>{Ko+=1,du()},t.holdMs)})}function fu(t,e,n){if(!Ei)return;if(fe.editor.value=t.slice(0,e),fe.editor.scrollTop=fe.editor.scrollHeight,(t[e-1]===`
`||e===t.length)&&cu(),e>=t.length){n();return}const i=t[e],a=i===`
`?110:i===" "?18:28+Math.random()*26;ms=window.setTimeout(()=>fu(t,e+1,n),a)}function hu(t){const e=t.entradas.find(r=>r.verb==="sente"&&r.source==="tempo");if(!e)return;const n=++Qr,i=e.args[0],a=i?.type==="SignalRef"?i.value.name:t.lugar??"fortaleza";fe.log.textContent=`programa rodando
buscando tempo real...`,gd(a).then(r=>{n!==Qr||dt!==t||(Ps(t.overrides,r),Ps(t.sinais,r),t.log.push({level:"info",message:`tempo real: ${r.fonte}`}),fe.log.textContent=`programa rodando
tempo real: ${r.fonte}`)}).catch(r=>{if(n!==Qr||dt!==t)return;const o=r instanceof Error?r.message:String(r);t.log.push({level:"erro",message:`tempo real indisponivel: ${o}`}),fe.log.textContent=`programa rodando
tempo real indisponivel, usando simulacao`})}function pu(t){const e=t.entradas.find(r=>r.verb==="sente"&&(r.source==="satelites"||r.source==="satelite"));if(!e)return;const n=++eo,i=e.args[0],a=i?.type==="SignalRef"?i.value.name:t.lugar??"fortaleza";fe.log.textContent=`${fe.log.textContent}
buscando satelites...`,cd(a).then(r=>{n!==eo||dt!==t||(ws(t.sinais,t.satellites,r),ws(t.overrides,t.satellites,r),t.log.push({level:"info",message:`satelites: ${r.fonte}`}),fe.log.textContent=`programa rodando
satelites: ${r.fonte}`)}).catch(r=>{if(n!==eo||dt!==t)return;const o=r instanceof Error?r.message:String(r);t.log.push({level:"erro",message:`satelites indisponiveis: ${o}`}),fe.log.textContent=`programa rodando
satelites indisponiveis, usando simulacao`})}function mu(t){const e=Math.min((t-Nl)/1e3,.1);if(Nl=t,dt){jd(dt,e);const n=t/1e3,i=af(dt,n);ya(fe.skyWrap,i,"sky"),ya(fe.mediaLayer,i,"media"),ya(fe.mapCanvas,i,"map"),ya(fe.satelliteCanvas,i,"satellite"),qv(dt),ou.render(dt,n,i),su.render(dt,n,i),ru.render(dt,n,i),gu()}requestAnimationFrame(mu)}function qv(t){const e=t.media.source,n=t.media.kind,i=n==="map"?t.visual.mapa??t.visual.imagem??t.media.opacity:t.visual.video??t.visual.imagem??t.media.opacity,a=t.visual.ceu??t.media.skyOpacity,r=t.visual.mistura??t.media.blend,o=t.visual.corta??t.media.cut,s=jv(t,"acelera",t.media.speed),l=t.visual.desacelera??0,c=t.visual.atrasa??t.media.delay,d=t.visual.adianta??t.media.advance,f=t.visual.telas??t.media.tiles,u=Math.max(t.visual.mosaico??0,t.media.mosaic),m=Math.max(t.visual.quebra??0,t.media.puzzle),_=Math.max(t.visual.embaralha??0,t.media.shuffle),E=t.visual.ecos??t.media.echoes,p=Math.max(t.visual.rasga??0,t.media.tear),h=Math.max(t.visual.fere??0,t.media.wound),S=Math.max(t.visual.desencaixa??0,t.media.offset),A=Math.max(t.visual.fantasma??0,t.media.ghost),b=Jv(t),R=t.visual.pixeliza??0,y=t.visual.linhas??0,P=t.visual.croma??0,v=t.visual.vhs??0,T=t.visual.posteriza??0,U=t.visual.satura??0,w=t.visual.contrasta??0,I=t.visual.limpido??0,X=t.visual.azula??0,q=e&&n==="video"&&Zv(e)?"youtube":n,D=Math.max(1,Math.round(1+Math.max(f,u,m)*2)),z=D>1||m>.08||u>.08?`grid:${D}`:E>.08||A>.08?"echo":"full",O=e&&q?`${q}:${e}:${z}`:"";if(fe.skyWrap.style.opacity=String(Math.max(0,Math.min(1,o>.5?0:a))),fe.mediaLayer.style.opacity=String(pa?Math.max(0,Math.min(1,i)):0),fe.mediaLayer.style.mixBlendMode=r>.66?"screen":r>.33?"overlay":"normal",fe.mediaLayer.style.setProperty("--media-tiles",String(D)),fe.mediaLayer.style.setProperty("--media-echoes",String(E)),fe.mediaLayer.style.setProperty("--media-tear",`${p*26}px`),fe.mediaLayer.style.setProperty("--media-offset",`${S*44}px`),fe.mediaLayer.style.setProperty("--media-ghost",String(A)),fe.mediaLayer.style.setProperty("--media-shuffle",`${_*34}px`),fe.mediaLayer.style.setProperty("--media-pixel-size",`${1+Math.round(R*18)}px`),fe.mediaLayer.style.setProperty("--media-lines",String(y)),fe.mediaLayer.style.setProperty("--media-croma",`${P*10}px`),fe.mediaLayer.style.setProperty("--media-vhs",`${v*16}px`),fe.mediaLayer.style.setProperty("--media-posterize",String(T)),fe.mediaLayer.style.setProperty("--media-scale",String(b.scale)),fe.mediaLayer.style.setProperty("--media-x",`${b.x*100}%`),fe.mediaLayer.style.setProperty("--media-y",`${b.y*100}%`),fe.mediaLayer.classList.toggle("matriz",D>1),fe.mediaLayer.classList.toggle("mosaico",u>.08),fe.mediaLayer.classList.toggle("quebra",m>.08),fe.mediaLayer.classList.toggle("embaralha",_>.08),fe.mediaLayer.classList.toggle("ecos",E>.08||A>.08),fe.mediaLayer.classList.toggle("rasgado",p>.08||h>.08||S>.08),fe.mediaLayer.classList.toggle("pixelizado",R>.08),fe.mediaLayer.classList.toggle("linhas",y>.08||v>.08),fe.mediaLayer.classList.toggle("cromatico",P>.08||v>.08),fe.mediaLayer.classList.toggle("vhs",v>.08),fe.mediaLayer.classList.toggle("posterizado",T>.08),fe.mediaLayer.classList.toggle("janela",b.window>.05||b.scale<.96),fe.mediaLayer.style.filter=[`contrast(${1+h*.85+w*.9-I*.12})`,`saturate(${1+h*1.2+U*1.55+X*.42})`,`brightness(${1+I*.08})`,`hue-rotate(${p*24-X*8}deg)`].join(" "),on&&(on.playbackRate=Math.max(.12,Math.min(4,s*(1-l*.74))),c>.05&&on.duration>1&&(on.currentTime=Math.max(0,on.currentTime-c*.055)),d>.05&&on.duration>1&&(on.currentTime=Math.min(on.duration-.05,on.currentTime+d*.075))),!e||!q||!O||i<=.001){Gi&&(fe.mediaLayer.replaceChildren(),Gi="",pa=!1,window.clearTimeout(dr));return}O!==Gi&&(Gi=O,pa=!1,window.clearTimeout(dr),on=void 0,fe.mediaLayer.replaceChildren(...Yv(q,e,z,D)))}function Yv(t,e,n,i){const a=n.startsWith("grid")?i*i:n==="echo"?6:1;return Array.from({length:a},(r,o)=>{const s=$v(t,e,o===0);return s.classList.toggle("eco",n==="echo"&&o>0),s.classList.toggle("tile",n.startsWith("grid")),s.style.setProperty("--eco-index",String(o+1)),s.style.setProperty("--tile-index",String(o)),s.style.setProperty("--tile-col",String(o%i)),s.style.setProperty("--tile-row",String(Math.floor(o/i))),s})}function $v(t,e,n){if(t==="youtube"){const a=document.createElement("iframe"),r=Kv(e);return a.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(r)}?autoplay=1&mute=1&controls=0&loop=1&playlist=${encodeURIComponent(r)}&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1`,a.allow="autoplay; encrypted-media; picture-in-picture; fullscreen",a.referrerPolicy="strict-origin-when-cross-origin",a.title="youtube publico",a.loading="eager",n||a.setAttribute("aria-hidden","true"),n&&a.addEventListener("load",()=>ua(1400),{once:!0}),a}if(t==="image"||t==="map"){const a=document.createElement("img");return a.src=e,a.alt=t==="map"?"mapa live coding":"imagem live coding",a.classList.toggle("mapa-media",t==="map"),n||a.setAttribute("aria-hidden","true"),n&&(a.complete&&ua(0),a.addEventListener("load",()=>ua(0),{once:!0}),a.addEventListener("error",()=>{fe.log.textContent="imagem nao carregou"},{once:!0})),a}const i=document.createElement("video");return i.src=e,i.autoplay=!0,i.muted=!0,i.loop=t==="video",i.playsInline=!0,i.crossOrigin="anonymous",i.controls=!1,i.preload="auto",n&&(on=i,i.addEventListener("canplaythrough",()=>ua(0),{once:!0}),i.addEventListener("playing",()=>ua(0),{once:!0}),i.addEventListener("waiting",()=>{pa=!1}),i.addEventListener("error",()=>{fe.log.textContent="video nao carregou"},{once:!0})),n||i.setAttribute("aria-hidden","true"),i.play().catch(()=>{fe.log.textContent="video direto aguardando interacao do navegador"}),i}function ua(t){window.clearTimeout(dr),dr=window.setTimeout(()=>{pa=!0},t)}function Kv(t){try{const e=new URL(t);if(e.hostname.includes("youtu.be"))return e.pathname.replace("/","");const n=e.searchParams.get("v");if(n)return n;const i=e.pathname.match(/\/embed\/([^/?]+)/);if(i?.[1])return i[1]}catch{}return t}function Zv(t){return/(?:youtube\.com|youtu\.be|youtube-nocookie\.com)/i.test(t)}function jv(t,e,n){return t.visual[e]??n}function Jv(t){const e=t.visual.cheia??0,n=t.visual.pequena??0,i=t.visual.janela??t.media.window,a=t.visual.posicao,r=t.media.scale,o=e>.05?1:Math.max(.18,Math.min(1,r-n*.62-i*.38)),s=a!==void 0?a:t.media.x,l=a!==void 0?1-a:t.media.y;return{scale:o,x:Math.max(.08,Math.min(.92,s)),y:Math.max(.08,Math.min(.92,l)),window:Math.max(i,n)}}function gu(){if(!dt){fe.state.textContent="{}",fe.signals.innerHTML="",fe.textPanel.textContent="";return}const t=["ceu.claro","ceu.nuvem","ceu.movimento","ceu.rosa","tempo.calor","tempo.umidade","tempo.vento","tempo.chuva","satelite.altitude","satelite.visivel","satelite.quantidade","microfone.nivel","contato.batida"].map(e=>[e,dt?.sinais[e]??0]);fe.signals.innerHTML=t.map(([e,n])=>{const i=Math.round(n*100);return`<div class="signal-row"><span>${e}</span><meter min="0" max="1" value="${n}"></meter><b>${i}</b></div>`}).join(""),fe.textPanel.textContent=dt.texto.visivel?dt.texto.linhas.join(`
`):"",fe.state.textContent=JSON.stringify({lugar:dt.lugar,foco:dt.foco,visual:dt.visual,audio:dt.audio,satelites:{fonte:dt.satellites.source,observador:dt.satellites.observer.label,visiveis:dt.satellites.tracks.filter(e=>e.visible).map(e=>`${e.name} ${Math.round(e.elevation)}°`)},texto:dt.texto,log:dt.log},null,2)}
