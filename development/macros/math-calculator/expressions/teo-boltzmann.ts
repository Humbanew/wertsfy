const formulaCalculoDoTeoremaDeBoltzmann = (temperatura: number, constante: number): number => {
  let resultado = constante * (temperatura ** 4);
  return resultado;
}
export { formulaCalculoDoTeoremaDeBoltzmann as Macro_math_calculator_exp_teo_boltzmann_method }
