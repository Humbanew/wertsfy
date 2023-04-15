import { Component_math_corebase_cos_method } from "./math/method.cos";

const formulaCalculoDoAlcanceDeUmLancamentoVertical = (velocidade: number, tempo: {inicial: number, final: number}, angulo: number): number => {
  let resultado = velocidade * Component_math_corebase_cos_method(angulo) * (tempo.final - tempo.inicial);
  return resultado;
}
export { formulaCalculoDoAlcanceDeUmLancamentoVertical as Component_math_calculator_exp_calc_alcance_lancamento_vertical_method }
