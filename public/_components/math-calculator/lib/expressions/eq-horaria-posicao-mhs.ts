import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
  let resultado = velocidadeAngular * amplitude * mathematic_corebase.cos(tempo + faseInicial);
  return resultado;
}
export { formulaCalculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples as Component_math_calculator_exp_eq_horaria_posicao_movimento_harmonico_simples_method }
