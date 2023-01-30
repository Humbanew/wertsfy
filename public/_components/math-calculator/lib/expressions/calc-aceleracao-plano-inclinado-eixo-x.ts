import { mathematic_corebase } from "../../../../wertsfy";

const formulaCalculoDaAceleracaoNoPlanoInclinadoEixoX = (massa: number, gravidade: number, angulo: number): number => {
  let resultado = massa * gravidade * mathematic_corebase.sin(angulo);
  return resultado;
}
export { formulaCalculoDaAceleracaoNoPlanoInclinadoEixoX as Component_math_calculator_exp_calc_aceleracao_no_plano_inclinado_eixo_x_method }
