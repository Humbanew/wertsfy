const formulaCalculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica = (densidade: number, gravidade: number, altura: {inicial: number, final: number}): number => {
  let resultado = densidade * gravidade * (altura.final - altura.inicial);
  return resultado;
}
export { formulaCalculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica as Macro_math_calculator_exp_calc_principio_fundamental_hidroestatica_hidrodinamica_method }
