const formulaCalculoDoConsumoDeEnergia = (tempo: {inicial: number, final: number}, correnteEletrica: number, ddp: number): number => {
  let resultado = correnteEletrica * ddp * (tempo.final - tempo.inicial);
  return resultado;
}
export { formulaCalculoDoConsumoDeEnergia as Component_math_calculator_exp_calc_consumo_de_energia_method }
