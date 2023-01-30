import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalcCossenosDiretoresDeUmVetorR2 = (x: number, y: number): Array<number> => {
  let resultado: number[];
  let contExpressaoP1 = [mathematic_corebase.cos(x), mathematic_corebase.cos(y)];
  resultado = contExpressaoP1;
  return resultado;
}
export { formulaCalcCossenosDiretoresDeUmVetorR2 as Component_math_calculator_exp_calc_cossenos_diretores_vetor_r2_method }
