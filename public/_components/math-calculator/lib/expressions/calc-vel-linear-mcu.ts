import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalculoDoVelocidadeLinearMovimentoCircularUniforme = (frequencia: number, raio: number): number => {
  let resultado = (2 * mathematic_corebase.Pi * frequencia) * raio;
  return resultado;
}
export { formulaCalculoDoVelocidadeLinearMovimentoCircularUniforme as Component_math_calculator_exp_calc_velocidade_linear_movimento_circular_uniforme_method }
