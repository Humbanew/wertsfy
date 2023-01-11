import { Macro_math_calculator_exp_calculo_energia_cinetica_method } from "./exp.calculo-energia-cinetica.method";
import { Macro_math_calculator_exp_calculo_energia_potencial_elastica_method } from "./exp.calculo-energia-potencial-elastica.method";
import { Macro_math_calculator_exp_calculo_energia_potencial_gravitacional_method } from "./exp.calculo-energia-potencial-gravit.method";

const formulaCalculoDoPotencialMecanico = (velocidade: number, constanteElastica: number, distancia: number, massa: number, gravidade: number, altura: number, energPotElas: boolean, energPotGrav: boolean): number => {
  let resultado = 0;
  if (energPotElas == true) { 
    resultado = Macro_math_calculator_exp_calculo_energia_cinetica_method(massa, velocidade) + Macro_math_calculator_exp_calculo_energia_potencial_elastica_method(constanteElastica, distancia); 
  }
  if (energPotGrav == true) { 
    resultado = Macro_math_calculator_exp_calculo_energia_cinetica_method(massa, velocidade) + Macro_math_calculator_exp_calculo_energia_potencial_gravitacional_method(massa, gravidade, altura); 
  }
  return resultado;
}
export { formulaCalculoDoPotencialMecanico as Macro_math_calculator_exp_calculo_potencial_mecanico_method }
