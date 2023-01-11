const formulaDoCalculoDoTempo = (velocidade: number, espaco: {inicial: number, final: number}): number => {
  return (espaco.final - espaco.inicial) / velocidade;
}
export { formulaDoCalculoDoTempo as Macro_math_calculator_exp_calculo_tempo_method }
