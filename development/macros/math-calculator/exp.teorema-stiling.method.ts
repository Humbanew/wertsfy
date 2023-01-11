import { mathematic_corebase } from "../../wertsfy";

const formulaDoTeoremaDeStirling = (valor: number): number => {
  let resultado: number = 0;
  resultado = (mathematic_corebase.log(valor) * valor) / valor;
  return resultado;
}
export { formulaDoTeoremaDeStirling as Macro_math_calculator_exp_teorema_stirling_method }
