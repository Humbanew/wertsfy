const formulaCalculoDoTeoremaDeStevin = (densidade: number, gravidade: number, altura: {inicial: number, final: number}): number => {
  let resultado = densidade * gravidade * (altura.final - altura.inicial);
  return resultado;
}
export { formulaCalculoDoTeoremaDeStevin as Component_math_calculator_exp_teo_stevin_method }
