import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalculoDaLeiDeLenz = (intensidadeDoCampoMagnetico: number, areaDaSuperficie: number, cosAngulo: number): number => {
  let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * mathematic_corebase.cos(cosAngulo);
  return resultado;
}
export { formulaCalculoDaLeiDeLenz as Macro_math_calculator_exp_calc_lei_de_lenz_method }
