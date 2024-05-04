/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

import { Aritmeticos, Aritmeticos2020 } from "./libraries/hub_aritmeticos";
import { Calculator } from "./libraries/hub_calculator";
import { Cli } from "./libraries/hub_cli";
import { Conversor } from "./libraries/hub_conversor";


// criar modelo de API para o projeto
import { createServer } from "http";

export const wtsfy = {
  "@humbanew": {
    "@aritmeticos": Aritmeticos,
    "@aritmeticos2020": Aritmeticos2020,
    "@calculator": Calculator, 
    "@conversor": Conversor,
    "@cli": Cli
  },
  "@wfx6": {
    "@third-party": null
  }
};
