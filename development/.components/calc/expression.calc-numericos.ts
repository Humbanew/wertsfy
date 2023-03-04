import { WertsfyPrototipos } from "../../.declarations/warch.type.nxt";

const calculoNumericos = (tipo: WertsfyPrototipos.Logicos.TExpressoes): number|number[] => {

  let resultado: number|number[] = 0||[], attrs = undefined, variavel = tipo.operacoesNumericos;

  switch(variavel[0]) {
    case "#numerosPares":
      attrs = variavel[1];
      resultado = attrs.numero / 2;
      if(resultado % 2 === 0) { console.info(1) }
      else { console.info(0) }; break;
    case "#numerosImpares":
      attrs = variavel[1];
      resultado = attrs.numero / 3;
      if(resultado % 3 === 0) { console.info(1) }
      else { console.info(0) }; break;
    case "#numerosPrimos":
      attrs = variavel[1];
      resultado = [];
      for(let i = 0; i < attrs.numerosPesquisados; i++) {
        if(i % 2 !== 0) {
          resultado.push(i);
        }
      }; break;
    case "#conjuntos":
      attrs = variavel[1];
      resultado = 2 ** attrs.elementos; break;
  }

  return resultado;

}; export { calculoNumericos as Component_math_calculator_exp_calc_numericos_method }
