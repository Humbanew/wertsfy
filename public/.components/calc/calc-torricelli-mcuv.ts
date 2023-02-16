import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalculoDeTorricelliMovimentoCircularUniformenteVariado = (velocidadeAngularInicial: number, aceleracaoAngular: number, deslocamentoAngular: { inicial: number, final: number}): number => {
  let resultado = mathematic_corebase.sqrt(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngular.final - deslocamentoAngular.inicial));
  return resultado;
}
export { formulaCalculoDeTorricelliMovimentoCircularUniformenteVariado as Component_math_calculator_exp_calc_torricelli_movimento_circular_uniformente_variado_method }
