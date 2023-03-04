import { WertsfyPrototipos } from "../../.declarations/warch.type.nxt";

const formulasDoCalculoDeDeterminante = (tipo: WertsfyPrototipos.Logicos.TExpressoes): number => {
  let resultado: number = 0, variavel = tipo.determinantes;
  switch(variavel[0]) {
    case "#d2x2":
      let vetorPrimario = variavel[1].a00 * variavel[1].a11;
      let vetorSecundario = variavel[1].a01 * variavel[1].a10;
      resultado = vetorPrimario - vetorSecundario; break;
    case "#d3x3":
      let vetorPrincipal1 = variavel[1].a00 * variavel[1].a11 * variavel[1].a22; 
      let vetorPrincipal2 = variavel[1].a01 * variavel[1].a12 * variavel[1].a20; 
      let vetorPrincipal3 = variavel[1].a02 * variavel[1].a10 * variavel[1].a21;
      let vetorSecundario1 = variavel[1].a02 * variavel[1].a11 * variavel[1].a20; 
      let vetorSecundario2 = variavel[1].a00 * variavel[1].a12 * variavel[1].a21; 
      let vetorSecundario3 = variavel[1].a01 * variavel[1].a10 * variavel[1].a22;
      resultado = (vetorPrincipal1 + vetorPrincipal2 + vetorPrincipal3) - (vetorSecundario1 + vetorSecundario2 + vetorSecundario3);
      break;
  }
  return resultado;
}
export { formulasDoCalculoDeDeterminante as Component_math_calculator_exp_calc_determinante_method }
