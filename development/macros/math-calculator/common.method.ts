import { MathematicDefines } from "../../wdefines";

export const Macro_math_calculator_common_method = (operation: MathematicDefines["common"], ...numbers: number[]): number => {
    
  let resultado: number;
  
  operation == "plus" || "minus" ? resultado = 0 : resultado = 1; 

  for(let i = 0; i < numbers.length; i++) {

    if(i == 0 && (operation == "divisor" || "multip" || "power") ) { 
      resultado = numbers[0];
      continue;
    }

    switch(operation) {
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
