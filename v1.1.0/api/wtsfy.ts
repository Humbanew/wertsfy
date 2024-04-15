/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

import { Aritmeticos } from "./libraries/hub_aritmeticos";
import { Calculator } from "./libraries/hub_calculator";
import { Cli } from "./libraries/hub_cli";
import { Conversor } from "./libraries/hub_conversor";

export const wtsfy = {
  "@humbanew": {
    "@aritmeticos": Aritmeticos,
    "@conversor": Conversor,
    "@calculator": Calculator, 
    "@cli": Cli
  },
  "@third-party": {}, 
};
