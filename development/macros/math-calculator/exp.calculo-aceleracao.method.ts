const formulaDoCalculoDaAceleracao = (velocidade: number, tempo: {inicial: number, final: number}): number => {
  return velocidade / (tempo.final - tempo.inicial);
}
export { formulaDoCalculoDaAceleracao as Macro_math_calculator_exp_calculo_aceleracao_method }
