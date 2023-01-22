const formulaCalculoDoVelocidadeAngularMovimentoCircularUniforme = (anguloInicial: number, anguloFinal: number, tempoInicial: number, tempoFinal: number): number => {
  let resultado = (anguloFinal - anguloInicial) / (tempoFinal - tempoInicial);
  return resultado;
}
export { formulaCalculoDoVelocidadeAngularMovimentoCircularUniforme as Macro_math_calculator_exp_calc_velocidade_angular_movimento_circular_uniforme_method }
