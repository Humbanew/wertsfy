import { Macro_math_calculator_exp_calc_porcentagem_method } from "./calc-porcentagem";

const formulaCalculoDoRendimento = (valorParte: number, valorTotal: number): number => {
  let resultado = Macro_math_calculator_exp_calc_porcentagem_method(
    ["AnyNumber", { value: valorParte, valueTotal: valorTotal}]
  );
  return resultado;
}
export { formulaCalculoDoRendimento as Macro_math_calculator_exp_calc_rendimento_method }
