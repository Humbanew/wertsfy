const formulaCalculoDaLeiDeCoulomb = (carga: { a: number, b: number}, distancia: {inicial: number, final: number}): number => {
  let resultado = (9 * 10 ** 9) * (carga.a * carga.b / (distancia.final - distancia.inicial) ** 2);
  return resultado;
}
export { formulaCalculoDaLeiDeCoulomb as Component_math_calculator_exp_calc_lei_de_coulomb_method }
