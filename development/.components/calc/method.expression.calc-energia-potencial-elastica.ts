const formulaCalculoDaEnergiaPotencialElastica = (constanteElastica: number, distancia: { inicial: number, final: number}): number => {
  return (constanteElastica * (distancia.final - distancia.inicial) ** 2) / 2;
}
export { formulaCalculoDaEnergiaPotencialElastica as Component_math_calculator_exp_calc_energia_potencial_elastica_method }
