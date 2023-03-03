/// <reference path="../../../.legacydata/warch.type.d.ts" />

import { WMathOperation } from "../../../.legacydata/warch.type";

export const Component_math_calculator_common_method = (operation: WMathOperation.common, ...numbers: number[]): number => {
    
  let resultado: number;
  
  operation.formats == "plus" || "minus" ? resultado = 0 : resultado = 1; 

  for(let i = 0; i < numbers.length; i++) {

    if(i == 0 && (operation.formats == "divisor" || "multip" || "power") ) { 
      resultado = numbers[0];
      continue;
    }

    switch(operation.formats) {
      case "plus": 
        resultado = resultado + numbers[i]; break;
      case "minus":
        resultado = resultado - numbers[i]; break;
      case "multip": 
        resultado = resultado * numbers[i]; break;
      case "divisor":
        resultado = resultado / numbers[i]; break;
      case "power": 
        resultado = resultado ** numbers[i]; break; 
    }

  }

  return resultado;

};
