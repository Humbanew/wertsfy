/// <reference path="../../.declarations/warch.type.nxt.d.ts" />

import { WertsfyPrototipos } from "../../.declarations/warch.type.nxt";

export const Component_math_calculator_common_method = (operation: WertsfyPrototipos.Logicos.TComuns, ...numbers: number[]): number => {
    
  let resultado: number;
  
  operation.formatos == "#plus" || "#minus" ? resultado = 0 : resultado = 1; 

  for(let i = 0; i < numbers.length; i++) {

    if(i == 0 && (operation.formatos == "#divisor" || "#multip" || "#power") ) { 
      resultado = numbers[0];
      continue;
    }

    switch(operation.formatos) {
      case "#plus": 
        resultado = resultado + numbers[i]; break;
      case "#minus":
        resultado = resultado - numbers[i]; break;
      case "#multip": 
        resultado = resultado * numbers[i]; break;
      case "#divisor":
        resultado = resultado / numbers[i]; break;
      case "#power": 
        resultado = resultado ** numbers[i]; break; 
    }

  }

  return resultado;

};
