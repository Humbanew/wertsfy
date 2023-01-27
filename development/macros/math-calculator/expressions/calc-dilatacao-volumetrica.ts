const formulaCalculoDaDilatacaoVolumetrica = (volumeInicial: number, coeficienteDeDilatacaoVolumetrica: number, temperatura: { inicial: number, final: number}): number => {
  let resultado = volumeInicial * coeficienteDeDilatacaoVolumetrica * (temperatura.final - temperatura.inicial);
  return resultado;
}
export { formulaCalculoDaDilatacaoVolumetrica as Macro_math_calculator_exp_calc_dilatacao_volumetrica_method }
