const formulaDoCalculoDaAceleracao = (velocidade: number, tempo: {inicial: number, final: number}): number => {
  return velocidade / (tempo.final - tempo.inicial);
}
export { formulaDoCalculoDaAceleracao as Macro_math_calculator_exp_calc_aceleracao_method }
