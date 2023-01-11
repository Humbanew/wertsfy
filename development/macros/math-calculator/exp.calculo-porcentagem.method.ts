import { MathematicDefines } from "../../wdefines";

const formulasDoCalculoDePorcentagem = (tipo: MathematicDefines["expressions"]["porcentage"]) => {

  let resultado = 0;

  switch(tipo[0]) {
    case "10E2":
      resultado = tipo[1].value / 10 ** 2; break;
    case "10E3":
      resultado = tipo[1].value / 10 ** 3; break;
    case "10E4":
      resultado = tipo[1].value / 10 ** 4; break;
    case "10E5":
      resultado = tipo[1].value / 10 ** 5; break;
    case "AnyNumber":  
      resultado = tipo[1].value / tipo[1].valueTotal; break;
  }
  return resultado;
}
export { formulasDoCalculoDePorcentagem as Macro_math_calculator_exp_calculo_porcentagem_method }
