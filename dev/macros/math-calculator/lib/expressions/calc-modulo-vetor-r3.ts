import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalcModuloDeUmVetorR3 = (x: number, y: number, z: number): number => {
  let resultado = 0;
  resultado = mathematic_corebase.sqrt(x ** 2 + y ** 2 + z ** 2);
  return resultado;
}
export { formulaCalcModuloDeUmVetorR3 as Macro_math_calculator_exp_calc_modulo_vetor_r3_method }
