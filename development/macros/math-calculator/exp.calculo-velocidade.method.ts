const formulaDoCalculoDaVelocidade = (espaco: {inicial: number, final: number}, tempo: {inicial: number, final: number}): number => {
  return (espaco.final - espaco.inicial) / (tempo.final - tempo.inicial);
}
export { formulaDoCalculoDaVelocidade as Macro_math_calculator_exp_calculo_velocidade_method }
