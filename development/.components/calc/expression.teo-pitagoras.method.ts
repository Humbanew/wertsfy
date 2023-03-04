import { WertsfyPrototipos } from "../../.declarations/warch.type.nxt";
import { Component_math_corebase_sqrt_method } from "../math/method.sqrt";

const formulaDoTeoremaDePitagoras = (tipo: WertsfyPrototipos.Logicos.TExpressoes): number => {
  let resultado = 0, variavel = tipo.triangulosPitagoricos;
  switch(variavel[0]) {
    case "#classic(a and b)":
      resultado = Component_math_corebase_sqrt_method(((variavel[1].a ** 2) + (variavel[1].b ** 2))); break;
    case "#t1(m and n)":
      resultado = Component_math_corebase_sqrt_method(variavel[1].m * variavel[1].n); break;
    case "#t2(a and n)":
      resultado = Component_math_corebase_sqrt_method(variavel[1].a * variavel[1].n); break;
    case "#t3(b, c and h)":  
      resultado = (variavel[1].b * variavel[1].c) / variavel[1].h; break;
  }
  return resultado;
}
export { formulaDoTeoremaDePitagoras as Component_math_calculator_exp_teo_pitagoras_method }
