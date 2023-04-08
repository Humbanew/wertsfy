import { Component_math_corebase_log_method } from "./method.log";

const formulaDoTeoremaDeStirling = (valor: number): number => {
  let resultado: number = 0;
  resultado = (Component_math_corebase_log_method(valor) * valor) / valor;
  return resultado;
}
export { formulaDoTeoremaDeStirling as Component_math_calculator_exp_teo_stirling_method }
