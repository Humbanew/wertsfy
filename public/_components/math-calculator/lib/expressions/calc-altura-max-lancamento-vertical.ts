import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalculoDaAlturaMaximaDeUmLancamentoVertical = (velocidadeInicial: number, gravidade: number, angulo: number): number => {
  let resultado = (velocidadeInicial ** 2) * ((mathematic_corebase.sin(angulo) ** 2) / 2) * gravidade;
  return resultado;
}
export { formulaCalculoDaAlturaMaximaDeUmLancamentoVertical as Component_math_calculator_exp_calc_altura_maxima_lancamento_vertical_method }
