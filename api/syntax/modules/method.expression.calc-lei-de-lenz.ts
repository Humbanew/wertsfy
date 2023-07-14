import { Component_math_corebase_cos_method } from "./math/method.cos";

const formulaCalculoDaLeiDeLenz = (intensidadeDoCampoMagnetico: number, areaDaSuperficie: number, angulo: number): number => {
  let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * Component_math_corebase_cos_method(angulo);
  return resultado;
}
export { formulaCalculoDaLeiDeLenz as Component_math_calculator_exp_calc_lei_de_lenz_method }
