import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
  let resultado = -1 * velocidadeAngular * amplitude * mathematic_corebase.sin(tempo + faseInicial);
  return resultado;
}
export { formulaCalculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples as Component_math_calculator_exp_eq_horaria_velocidade_movimento_harmonico_simples_method }
