import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalculoDoAlcanceDeUmLancamentoVertical = (velocidade: number, tempo: number, angulo: number): number => {
  let resultado = velocidade * mathematic_corebase.cos(angulo) * tempo;
  return resultado;
}
export { formulaCalculoDoAlcanceDeUmLancamentoVertical as Macro_math_calculator_exp_calc_alcance_lancamento_vertical_method }
