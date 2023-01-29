const formulaCalculoDoEfeitoJoule = (corrente: number, resistencia: number, tempo: number): number => {
  let resultado = (corrente ** 2) * resistencia * tempo;
  return resultado;
}
export { formulaCalculoDoEfeitoJoule as Macro_math_calculator_exp_calc_efeito_joule_method }
