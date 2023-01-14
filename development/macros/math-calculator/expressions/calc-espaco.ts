const formulaDoCalculoDoEspaco = (velocidade: number, tempo: {inicial: number, final: number}): number => {
  return velocidade * (tempo.final - tempo.inicial);
}
export { formulaDoCalculoDoEspaco as Macro_math_calculator_exp_calc_espaco_method }
