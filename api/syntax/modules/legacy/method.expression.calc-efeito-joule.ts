const formulaCalculoDoEfeitoJoule = (corrente: number, resistencia: number, tempo: {inicial: number, final: number}): number => {
  let resultado = (corrente ** 2) * resistencia * (tempo.final - tempo.inicial);
  return resultado;
}
export { formulaCalculoDoEfeitoJoule as Component_math_calculator_exp_calc_efeito_joule_method }
