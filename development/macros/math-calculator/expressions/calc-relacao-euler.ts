const formulaDoCalculoDaRelacaoDeEuler = (vertices: number, arestas: number, faces: number): number => {
  return (vertices - (arestas + faces)) - 2;
}
export { formulaDoCalculoDaRelacaoDeEuler as Macro_math_calculator_exp_calc_relacao_euler_method }
