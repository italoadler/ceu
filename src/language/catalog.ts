export const inputVerbs = ["olha", "ouve", "toca", "sente"] as const;

export const reservedCommands = ["em", ...inputVerbs, "manual", "foco", "recorte", "quando"] as const;

export const visualActionNames = [
  "clareia",
  "escurece",
  "nubla",
  "queima",
  "borra",
  "falha",
  "treme",
  "ondula",
  "arrasta",
  "granula",
  "pisca",
  "apaga",
  "rastro",
  "espelha",
  "multiplica",
  "quadricula",
  "entorta",
  "limpido",
  "azula",
  "rosa",
  "satura",
  "contrasta",
  "pixeliza",
  "linhas",
  "croma",
  "vhs",
  "posteriza",
  "mapa",
  "ruas",
  "quadras",
  "rotas",
  "contorno",
  "pontos",
  "fluxo",
  "satelites",
  "orbita",
  "passagem",
  "cidade",
  "mar",
  "dunas",
  "areia",
  "montanhas",
  "video",
  "imagem",
  "ceu",
  "mistura",
  "corta",
  "fere",
  "rasga",
  "atrasa",
  "adianta",
  "acelera",
  "desacelera",
  "ecos",
  "telas",
  "desencaixa",
  "fantasma",
  "cheia",
  "pequena",
  "janela",
  "posicao",
  "mosaico",
  "quebra",
  "embaralha"
] as const;

export const audioActionNames = ["chiado", "grave", "zunido", "batida", "estouro", "sopro", "grao", "ronco", "corte", "eco"] as const;

export const textActionNames = ["escreve", "some", "aparece"] as const;

export const actionNames = [...visualActionNames, ...audioActionNames, ...textActionNames] as const;

export const targetNames = ["video", "imagem", "ceu", "mapa"] as const;
