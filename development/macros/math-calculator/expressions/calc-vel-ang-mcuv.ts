const formulaCalculoDaAceleracaoAngularMovimentoCircularUniformenteVariado = (velocidadeAngularInicial: number, velocidadeAngularFinal: number, tempoInicial: number, tempoFinal: number): number => {
  let resultado = (velocidadeAngularFinal - velocidadeAngularInicial) / (tempoFinal - tempoInicial);
  return resultado;
}
export { formulaCalculoDaAceleracaoAngularMovimentoCircularUniformenteVariado as Macro_math_calculator_exp_calc_aceleracao_angular_movimento_circular_uniformente_variado_method }
