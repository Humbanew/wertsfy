import { Macro_math_calculator_exp_calc_modulo_vetor_r3_method } from "./calc-modulo-vetor-r3";

const formulaCalcVersorDeUmVetorR3 = (x: number, y: number, z: number): Array<number> => {
  let resultado = [];
  let modulo = Macro_math_calculator_exp_calc_modulo_vetor_r3_method(x, y, z);
  resultado = [ x / modulo, y / modulo, z / modulo ];
  return resultado;
}
export { formulaCalcVersorDeUmVetorR3 as Macro_math_calculator_exp_calc_versor_vetor_r3_method }
