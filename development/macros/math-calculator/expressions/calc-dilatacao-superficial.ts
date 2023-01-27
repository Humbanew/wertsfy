const formulaCalculoDaDilatacaoSuperficial = (areaInicial: number, coeficienteDeDilatacaoSuperficial: number, temperatura: {inicial: number, final: number}): number => {
  let resultado = areaInicial * coeficienteDeDilatacaoSuperficial * (temperatura.final - temperatura.inicial);
  return resultado;
}
export { formulaCalculoDaDilatacaoSuperficial as Macro_math_calculator_exp_calc_dilatacao_superficial_method }
