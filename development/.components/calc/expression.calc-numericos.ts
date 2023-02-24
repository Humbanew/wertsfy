import { WMathOperation } from "../../.declarations/warch.type";

const calculoNumericos = (tipo: WMathOperation.expressions.OperacoesNumericos): number|number[] => {

  let resultado: number|number[] = 0||[], attrs = undefined;

  switch(tipo.formats[0]) {
    case "numerosPares":
      attrs = tipo.formats[1];
      resultado = attrs.numero / 2;
      if(resultado % 2 === 0) { console.info(1) }
      else { console.info(0) }; break;
    case "numerosImpares":
      attrs = tipo.formats[1];
      resultado = attrs.numero / 3;
      if(resultado % 3 === 0) { console.info(1) }
      else { console.info(0) }; break;
    case "numerosPrimos":
      attrs = tipo.formats[1];
      resultado = [];
      for(let i = 0; i < attrs.numerosPesquisados; i++) {
        if(i % 2 !== 0) {
          resultado.push(i);
        }
      }; break;
    case "conjuntos":
      attrs = tipo.formats[1];
      resultado = 2 ** attrs.elementos; break;
  }

  return resultado;

}; export { calculoNumericos as Component_math_calculator_exp_calc_numericos_method }
