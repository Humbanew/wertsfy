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

export function $calculoDosNumerosPares(numero: number) {
  let resultado = numero / 2;
  if(resultado % 2 === 0) { console.info("eh par.") }
  else { console.info("eh impar.") }
  return resultado;
}

export function $calculoDosNumerosImpares(numero: number) {
  let resultado = numero / 3;
  if(resultado % 3 === 0) { console.info("eh impar.") }
  else { console.info("eh par.") }
  return resultado;
}

export function $numeroDeConjuntos(elementos: number) {
  let resultado = 2 ** elementos;
  return resultado;
}
