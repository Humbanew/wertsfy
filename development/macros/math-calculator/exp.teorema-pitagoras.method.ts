import { MathematicDefines } from "../../wdefines";
import { mathematic_corebase } from "../../wertsfy";

const formulaDoTeoremaDePitagoras = (tipo: MathematicDefines["expressions"]["trianglePitagoras"]): number => {

  let resultado = 0;

  switch(tipo[0]) {
    case "classic(a and b)":
      resultado = mathematic_corebase.sqrt(((tipo[1].a ** 2) + (tipo[1].b ** 2))); break;
    case "t1(m and n)":
      resultado = mathematic_corebase.sqrt(tipo[1].m * tipo[1].n); break;
    case "t2(a and n)":
      resultado = mathematic_corebase.sqrt(tipo[1].a * tipo[1].n); break;
    case "t3(b, c and h)":  
      resultado = (tipo[1].b * tipo[1].c) / tipo[1].h; break;
  }
  return resultado;

}
export { formulaDoTeoremaDePitagoras as Macro_math_calculator_exp_teorema_pitagoras_method }
