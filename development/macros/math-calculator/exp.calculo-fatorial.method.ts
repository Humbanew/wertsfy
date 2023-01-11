const formulaDoCalculoDoFatorial = (x: number): number => {
  let resultado: number = 1;
  for (let i = x; i > 0; i--) { resultado = i * resultado; };
  return resultado;
}
export { formulaDoCalculoDoFatorial as Macro_math_calculator_exp_calculo_fatorial_method }
