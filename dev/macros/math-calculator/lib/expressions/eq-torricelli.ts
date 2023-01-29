import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalculoDaEquacaoDeTorricelli = (velocidadeInicial: number, aceleracao: number, espaco: { inicial: number, final: number}): number => {
  let resultado = mathematic_corebase.sqrt((velocidadeInicial ** 2) + 2 * aceleracao * (espaco.final - espaco.inicial));
  return resultado;
}
export { formulaCalculoDaEquacaoDeTorricelli as Macro_math_calculator_exp_eq_torricelli_method }
