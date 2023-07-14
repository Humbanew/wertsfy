const formulaCalculoDaForcaGravitacional = (gravidade: number, massaPlaneta: number, distancia: {inicial: number, final: number}): number => {
  let resultado = gravidade * (massaPlaneta / (distancia.final - distancia.inicial) ** 2);
  return resultado;
}
export { formulaCalculoDaForcaGravitacional as Component_math_calculator_exp_calc_forca_gravitacional_method }
