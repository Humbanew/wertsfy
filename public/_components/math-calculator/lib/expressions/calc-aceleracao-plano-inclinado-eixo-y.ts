import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalculoDaAceleracaoNoPlanoInclinadoEixoY = (massa: number, gravidade: number, angulo: number): number => {
  let resultado = massa * gravidade * mathematic_corebase.cos(angulo);
  return resultado;
}
export { formulaCalculoDaAceleracaoNoPlanoInclinadoEixoY as Component_math_calculator_exp_calc_aceleracao_no_plano_inclinado_eixo_y_method }
