const formulaDoCalculoDeUmConjugadoDeNumeroComplexo = (expressao: string): string => {
  let resultado = '', verificaSinal = /^(\-)/gi;
  if (verificaSinal != null) { expressao.replace("-", ''); }
  resultado = expressao;
  return resultado;
}
export { formulaDoCalculoDeUmConjugadoDeNumeroComplexo as Macro_math_calculator_exp_calculo_conj_num_complexo_method }
