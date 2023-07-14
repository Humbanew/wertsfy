import { Component_math_calculator_exp_calc_energia_potencial_elastica_method } from "./method.expression.calc-energia-potencial-elastica";

const formulaCalculoDoPotencialElastico = (constanteElastica: number, distancia: {inicial: number, final: number}): number => {
  let resultado = Component_math_calculator_exp_calc_energia_potencial_elastica_method(constanteElastica, distancia);
  return resultado;
}
export { formulaCalculoDoPotencialElastico as Component_math_calculator_exp_calc_potencial_elastico_method }