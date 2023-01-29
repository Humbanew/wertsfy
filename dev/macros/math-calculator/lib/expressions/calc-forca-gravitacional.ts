const formulaCalculoDaForcaGravitacional = (gravidade: number, massaPlaneta: number, distancia: number): number => {
  let resultado = gravidade * (massaPlaneta / distancia ** 2);
  return resultado;
}
export { formulaCalculoDaForcaGravitacional as Macro_math_calculator_exp_calc_forca_gravitacional_method }
