const formulaCalculoDaEquacaoHorariaDoTempoEspaco = (tempo: {inicial: number, final: number}, espaco: {inicial: number, final: number}, velocidade: number, aceleracao: number): number => {
  return tempo.inicial + (velocidade * tempo.final) + (aceleracao * (tempo.final ** 2)) + espaco.inicial + aceleracao * espaco.final;
}
export { formulaCalculoDaEquacaoHorariaDoTempoEspaco as Macro_math_calculator_exp_equacao_horaria_tempo_espaco_method }
