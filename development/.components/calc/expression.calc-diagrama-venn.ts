import { WMathOperation } from "../../.declarations/warch.type";

const calcloDiagramaVenn = (tipo: WMathOperation.expressions.OperacoesDiagramaVenn): object => {

  let resultados = {}, attrs = undefined;

  switch(tipo.formats[0]) {
    case "venn2Grupos":
      attrs = tipo.formats[1];
      resultados = { 
        intecessao: attrs.numerosGrupoDoisNucleos, 
        nucleoUm: attrs.numerosGrupoUmNucleo[0] - attrs.numerosGrupoDoisNucleos, 
        nucleoDois: attrs.numerosGrupoUmNucleo[1] - attrs.numerosGrupoDoisNucleos 
      }; break;
    case "venn3Grupos":
      attrs = tipo.formats[1];
      resultados = { 
        intecessao: attrs.numerosGrupoTresNucleos, 
        nucleoUm: attrs.numerosGrupoUmNucleo[0] - attrs.numerosGrupoTresNucleos, 
        nucleoDois: attrs.numerosGrupoDoisNucleos[0] - attrs.numerosGrupoTresNucleos, 
        nucleoTres: attrs.numerosGrupoUmNucleo[1] - attrs.numerosGrupoTresNucleos 
      }; break;
    case "venn4Grupos":
      attrs = tipo.formats[1];
      resultados = { 
        intecessao: attrs.numerosGrupoQuatroNucleos, 
        nucleoUm: attrs.numerosGrupoUmNucleo[0] - attrs.numerosGrupoQuatroNucleos, 
        nucleoDois: attrs.numerosGrupoDoisNucleos[0] - attrs.numerosGrupoQuatroNucleos, 
        nucleoTres: attrs.numerosGrupoTresNucleos[0] - attrs.numerosGrupoQuatroNucleos, 
        nucleoQuatro: attrs.numerosGrupoUmNucleo[1] - attrs.numerosGrupoQuatroNucleos 
      }; break;
  }

  return resultados;

}; export { calcloDiagramaVenn as Component_math_calculator_exp_calc_diagrama_venn_method }
