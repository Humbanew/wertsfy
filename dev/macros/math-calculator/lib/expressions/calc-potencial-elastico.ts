import { Macro_math_calculator_exp_calc_energia_potencial_elastica_method } from "./calc-energia-potencial-elastica";

const formulaCalculoDoPotencialElastico = (constanteElastica: number, distancia: number): number => {
  let resultado = Macro_math_calculator_exp_calc_energia_potencial_elastica_method(constanteElastica, distancia);
  return resultado;
}
export { formulaCalculoDoPotencialElastico as Macro_math_calculator_exp_calc_potencial_elastico_method }
