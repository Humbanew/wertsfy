import { mathematic_corebase } from "../../../wertsfy";

const formulaCalculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples = (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
  let resultado = -1 * velocidadeAngular ** 2 * amplitude * mathematic_corebase.cos(tempo + faseInicial);
  return resultado;
}
export { formulaCalculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples as Macro_math_calculator_exp_eq_horaria_aceleracao_movimento_harmonico_simples_method }
