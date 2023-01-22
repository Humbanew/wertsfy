import { mathematic_corebase } from "../../../wertsfy";

const formulaCalculoDeTorricelliMovimentoCircularUniformenteVariado = (velocidadeAngularInicial: number, aceleracaoAngular: number, deslocamentoAngularInicial: number, deslocamentoAngularFinal: number): number => {
  let resultado = mathematic_corebase.sqrt(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngularFinal - deslocamentoAngularInicial));
  return resultado;
}
export { formulaCalculoDeTorricelliMovimentoCircularUniformenteVariado as Macro_math_calculator_exp_calc_torricelli_movimento_circular_uniformente_variado_method }
