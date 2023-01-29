import { Macro_math_calculator_exp_calc_empuxo_hidroestatica_hidrodinamica_method } from "./calc-empuxo-hidroestatica-hidrodinamica";

const formulaCalculoDoPesoAparenteDaHidroestaticaHidrodinamica = (peso: number, densidade: number, gravidade: number, volume: number): number => {
  let resultado = peso - Macro_math_calculator_exp_calc_empuxo_hidroestatica_hidrodinamica_method(densidade, gravidade, volume);
  return resultado;
}
export { formulaCalculoDoPesoAparenteDaHidroestaticaHidrodinamica as Macro_math_calculator_exp_calc_aparente_hidroestatica_hidrodinamica_method }
