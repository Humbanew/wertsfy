const formulaCalculoDoLancamentoHorizontal = (gravidade: number, tempo: {inicial: number, final: number}): number => {
  let resultado = (gravidade * (tempo.final - tempo.inicial) ** 2) / 2;
  return resultado;
}
export { formulaCalculoDoLancamentoHorizontal as Component_math_calculator_exp_calc_lancamento_horizontal_method }
