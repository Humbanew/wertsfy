import { Macro_math_calculator_exp_calc_forca_eletromotriz_method } from "./calc-forca-eletromotriz";

const formulaCalculoDaContraForcaEletromotriz = (potenciaTotalGerador: number, intensidadeDaCorrente: number): number => {
  let resultado = -1 * Macro_math_calculator_exp_calc_forca_eletromotriz_method(potenciaTotalGerador, intensidadeDaCorrente);
  return resultado;
}
export { formulaCalculoDaContraForcaEletromotriz as Macro_math_calculator_exp_calc_contra_forca_eletromotriz_method }
