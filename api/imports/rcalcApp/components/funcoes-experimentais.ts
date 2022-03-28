export function $calculoDaEscalaGeografica(tamanhoReal: number, tamanhoFicticio: number) {
  let resultado = tamanhoReal / tamanhoFicticio;
  return resultado;
}

export function $calculoDeIDH(saude: number, educacao: number, renda: number, populacao: number, ppc: number) {
  let resultado = (saude + educacao + renda) / (populacao + ppc);
  return resultado;
}

export function $calculoDeGINI(pnb: number, populacao: number) {
  let resultado = pnb / populacao;
  return resultado;
}

export function $calculoDeIMC(peso: number, altura: number) {
  let resultado = peso / altura ** 2;
  return resultado;
}

export function $calculoDeDensidadePopulacional(espaco: number, populacao: number) {
  let resultado = espaco / populacao;
  return resultado;
}

// C Experimentais Loterias

// C Experimentais Numeros Primos

// C Experimentais Numeros Pares

// C Experimentais Numeros Impares

// C Experimentais Diagrama De Venn

// C Experimentais Conjuntos
