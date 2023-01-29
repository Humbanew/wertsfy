import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalcCossenosDiretoresDeUmVetorR3 = (x: number, y: number, z: number): Array<number> => {
  let resultado: number[];
  let contExpressaoP1 = [mathematic_corebase.cos(x), mathematic_corebase.cos(y), mathematic_corebase.cos(z)];
  resultado = contExpressaoP1;
  return resultado;
}
export { formulaCalcCossenosDiretoresDeUmVetorR3 as Macro_math_calculator_exp_calc_cossenos_diretores_vetor_r3_method }
