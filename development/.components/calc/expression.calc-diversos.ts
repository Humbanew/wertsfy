import { WertsfyPrototipos } from "../../.declarations/warch.type.nxt";

const calculoDiversos = (tipo: WertsfyPrototipos.Logicos.TExpressoes): number => {

  let resultado = 0, attrs = undefined, variavel = tipo.operacoesDiversos;
  
  switch(variavel[0]) {
    case "#escalaGeografica":
      attrs = variavel[1];
      resultado = attrs.tamanhoReal / attrs.tamanhoFicticio; break;
    case "#idh":
      attrs = variavel[1];
      resultado = (attrs.saude + attrs.educacao + attrs.renda) / (attrs.populacao + attrs.ppc); break;
    case "#gini":
      attrs = variavel[1];
      resultado = attrs.pnb / attrs.populacao; break;
    case "#imc":
      attrs = variavel[1];
      resultado = attrs.peso / attrs.altura ** 2; break;
    case "#densidadePopulacional":
      attrs = variavel[1];
      resultado = attrs.espaco / attrs.populacao; break;
  }

  return resultado;

}; export { calculoDiversos as Component_math_calculator_exp_calc_diversos_method };
