import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalculoDoAlcanceMaximoDeUmLancamentoVertical = (velocidade: number, angulo: number, gravidade: number): number => {
  let resultado = (velocidade ** 2 * (mathematic_corebase.sin(angulo) ** 2)) / gravidade;
  return resultado;
}
export {  formulaCalculoDoAlcanceMaximoDeUmLancamentoVertical as Macro_math_calculator_exp_calc_alcance_maximo_lancamento_vertical_method }
