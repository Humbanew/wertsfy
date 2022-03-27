import { $divisao, $multiplicacao, $potencia, $potenciaDePotencia, $raizBicubica, $raizBiquadrada, $raizCubica, $raizQuadrada, $raizTricubica, $raizTriquadrada, $soma, $subtracao } from "./components/funcoes-basicas";
import { $oitavoGrau, $primeiroGrau, $quartoGrau, $quintoGrau, $segundoGrau, $setimoGrau, $sextoGrau, $terceiroGrau } from "./components/funcoes-cartesianas";
import { $antilogaritmoBase10, $antilogaritmoBase10Hiperbolico, $antilogaritmoBase10Inverso, $antilogaritmoBase10InversoHiperbolico, $antilogaritmoBase2, $antilogaritmoBase2Hiperbolico, $antilogaritmoBase2Inverso, $antilogaritmoBase2InversoHiperbolico, $antilogaritmoBaseQualquer, $antilogaritmoBaseQualquerHiperbolico, $antilogaritmoBaseQualquerHiperbolicoMenosUm, $antilogaritmoBaseQualquerInverso, $antilogaritmoBaseQualquerInversoHiperbolico, $antilogaritmoBaseQualquerInversoHiperbolicoMenosUm, $antilogaritmoBaseQualquerInversoMenosUm, $antilogaritmoBaseQualquerMenosUm, $antilogaritmoNatural, $antilogaritmoNaturalHiperbolico, $antilogaritmoNaturalHiperbolicoMaisUm, $antilogaritmoNaturalInverso, $antilogaritmoNaturalInversoHiperbolico, $antilogaritmoNaturalInversoHiperbolicoMaisUm, $antilogaritmoNaturalInversoMaisUm, $antilogaritmoNaturalMaisUm, $cologaritmoBase10, $cologaritmoBase10Hiperbolico, $cologaritmoBase10Inverso, $cologaritmoBase10InversoHiperbolico, $cologaritmoBase2, $cologaritmoBase2Hiperbolico, $cologaritmoBase2Inverso, $cologaritmoBase2InversoHiperbolico, $cologaritmoBaseQualquer, $cologaritmoBaseQualquerHiperbolico, $cologaritmoBaseQualquerHiperbolicoMaisUm, $cologaritmoBaseQualquerInverso, $cologaritmoBaseQualquerInversoHiperbolico, $cologaritmoBaseQualquerInversoHiperbolicoMaisUm, $cologaritmoBaseQualquerInversoMaisUm, $cologaritmoBaseQualquerMaisUm, $cologaritmoNatural, $cologaritmoNaturalHiperbolico, $cologaritmoNaturalHiperbolicoMaisUm, $cologaritmoNaturalInverso, $cologaritmoNaturalInversoHiperbolico, $cologaritmoNaturalInversoHiperbolicoMaisUm, $cologaritmoNaturalInversoMaisUm, $cologaritmoNaturalMaisUm, $exponencial, $exponencialHiperbolica, $exponencialHiperbolicaInversa, $exponencialHiperbolicaInversaMenosUm, $exponencialHiperbolicaMenosUm, $exponencialInversa, $exponencialInversaMenosUm, $exponencialMenosUm, $logaritmoBase10, $logaritmoBase10Hiperbolico, $logaritmoBase10Inverso, $logaritmoBase10InversoHiperbolico, $logaritmoBase2, $logaritmoBase2Hiperbolico, $logaritmoBase2Inverso, $logaritmoBase2InversoHiperbolico, $logaritmoBaseQualquer, $logaritmoBaseQualquerHiperbolico, $logaritmoBaseQualquerHiperbolicoMenosUm, $logaritmoBaseQualquerInverso, $logaritmoBaseQualquerInversoHiperbolico, $logaritmoBaseQualquerInversoHiperbolicoMenosUm, $logaritmoBaseQualquerInversoMenosUm, $logaritmoBaseQualquerMenosUm, $logaritmoNatural, $logaritmoNaturalHiperbolico, $logaritmoNaturalHiperbolicoMaisUm, $logaritmoNaturalInverso, $logaritmoNaturalInversoHiperbolico, $logaritmoNaturalInversoHiperbolicoMaisUm, $logaritmoNaturalInversoMaisUm, $logaritmoNaturalMaisUm } from "./components/funcoes-cientificas-avancadas";
import { $arccossecante, $arccossecanteHiperbolica, $arccossecanteHiperbolicaInversa, $arccossecanteInversa, $arccosseno, $arccossenoHiperbolico, $arccossenoHiperbolicoInverso, $arccossenoInverso, $arccotangente, $arccotangenteHiperbolica, $arccotangenteHiperbolicaInversa, $arccotangenteInversa, $arcsecante, $arcsecanteHiperbolica, $arcsecanteHiperbolicaInversa, $arcsecanteInversa, $arcseno, $arcsenoHiperbolico, $arcsenoHiperbolicoInverso, $arcsenoInverso, $arctangente, $arctangenteHiperbolica, $arctangenteHiperbolicoInversa, $arctangenteInversa, $cossecante, $cossecanteHiperbolica, $cossecanteHiperbolicaInversa, $cossecanteInversa, $cosseno, $cossenoHiperbolico, $cossenoHiperbolicoInverso, $cossenoInverso, $cotangente, $cotangenteHiperbolica, $cotangenteHiperbolicaInversa, $cotangenteInversa, $secante, $secanteHiperbolica, $secanteHiperbolicaInversa, $secanteInversa, $seno, $senoHiperbolico, $senoHiperbolicoInverso, $senoInverso, $tangente, $tangenteHiperbolica, $tangenteHiperbolicaInversa, $tangenteInversa } from "./components/funcoes-cientificas-basicas";

export const rcalcCore = {

  funcoes: {

    basicas:  {

      soma: $soma,

      subtracao: $subtracao,

      multiplicacao: $multiplicacao,

      divisao: $divisao,

      potencia: $potencia,

      potenciaDePotencia: $potenciaDePotencia,

      raizQuadrada: $raizQuadrada,

      raizCubica: $raizCubica,

      raizBiquadrada: $raizBiquadrada,

      raizBicubica: $raizBicubica,

      raizTriquadrada: $raizTriquadrada,

      raizTricubica: $raizTricubica

    },

    cientificasBasicas: {

      seno: $seno,

      cosseno: $cosseno,

      tangente: $tangente,

      secante: $secante,

      cossecante: $cossecante,

      cotangente: $cotangente,
      
      senoInverso: $senoInverso,

      cossenoInverso: $cossenoInverso,

      tangenteInversa: $tangenteInversa,

      secanteInversa: $secanteInversa,

      cossecanteInversa: $cossecanteInversa,

      cotangenteInversa: $cotangenteInversa,

      senoHiperbolico: $senoHiperbolico,

      cossenoHiperbolico: $cossenoHiperbolico,

      tangenteHiperbolica: $tangenteHiperbolica,

      secanteHiperbolica: $secanteHiperbolica,

      cossecanteHiperbolica: $cossecanteHiperbolica,

      cotangenteHiperbolica: $cotangenteHiperbolica,

      senoHiperbolicoInverso: $senoHiperbolicoInverso,

      cossenoHiperbolicoInverso: $cossenoHiperbolicoInverso,

      tangenteHiperbolicoInverso: $tangenteHiperbolicaInversa,

      secanteHiperbolicaInversa: $secanteHiperbolicaInversa,

      cossecanteHiperbolicaInversa: $cossecanteHiperbolicaInversa,

      cotangenteHiperbolicaInversa: $cotangenteHiperbolicaInversa,

      arcseno: $arcseno,

      arccosseno: $arccosseno,

      arctangente: $arctangente,

      arcsecante: $arcsecante,

      arccossecante: $arccossecante,

      arccotangente: $arccotangente,

      arcsenoInverso: $arcsenoInverso,

      arccossenoInverso: $arccossenoInverso,

      arctangenteInversa: $arctangenteInversa,

      arcsecanteInversa: $arcsecanteInversa,

      arccossecanteInversa: $arccossecanteInversa,

      arccotangenteInversa: $arccotangenteInversa,

      arcsenoHiperbolico: $arcsenoHiperbolico,

      arccossenoHiperbolico: $arccossenoHiperbolico,

      arctangenteHiperbolica: $arctangenteHiperbolica,

      arcsecanteHiperbolica: $arcsecanteHiperbolica,

      arccossecanteHiperbolica: $arccossecanteHiperbolica,

      arccotangenteHiperbolica: $arccotangenteHiperbolica,

      arcsenoHiperbolicoInverso: $arcsenoHiperbolicoInverso,

      arccossenoHiperbolicoInverso: $arccossenoHiperbolicoInverso,

      arctangenteHiperbolicoInversa: $arctangenteHiperbolicoInversa,

      arcsecanteHiperbolicaInversa: $arcsecanteHiperbolicaInversa,

      arccossecanteHiperbolicaInversa: $arccossecanteHiperbolicaInversa,

      arccotangenteHiperbolicaInversa: $arccotangenteHiperbolicaInversa

    },

    cientificasAvancadas: {

      exponencial: $exponencial,

      exponencialMenosUm: $exponencialMenosUm,

      exponencialInversa: $exponencialInversa,

      exponencialInversaMenosUm: $exponencialInversaMenosUm,

      exponencialHiperbolica: $exponencialHiperbolica,

      exponencialHiperbolicaMenosUm: $exponencialHiperbolicaMenosUm,

      exponencialHiperbolicaInversa: $exponencialHiperbolicaInversa,

      exponencialHiperbolicaInversaMenosUm: $exponencialHiperbolicaInversaMenosUm,

      logaritmoNatural: $logaritmoNatural,

      logaritmoNaturalMaisUm: $logaritmoNaturalMaisUm,

      logaritmoBase10: $logaritmoBase10,

      logaritmoBase2: $logaritmoBase2,

      logaritmoBaseQualquer: $logaritmoBaseQualquer,

      logaritmoBaseQualquerMenosUm: $logaritmoBaseQualquerMenosUm,

      logaritmoNaturalInverso: $logaritmoNaturalInverso,

      logaritmoNaturalInversoMaisUm: $logaritmoNaturalInversoMaisUm,

      logaritmoBase10Inverso: $logaritmoBase10Inverso,

      logaritmoBase2Inverso: $logaritmoBase2Inverso,

      logaritmoBaseQualquerInverso: $logaritmoBaseQualquerInverso,

      logaritmoBaseQualquerInversoMenosUm: $logaritmoBaseQualquerInversoMenosUm,

      logaritmoNaturalHiperbolico: $logaritmoNaturalHiperbolico,

      logaritmoNaturalHiperbolicoMaisUm: $logaritmoNaturalHiperbolicoMaisUm,

      logaritmoBase10Hiperbolico: $logaritmoBase10Hiperbolico,

      logaritmoBase2Hiperbolico: $logaritmoBase2Hiperbolico,

      logaritmoBaseQualquerHiperbolico: $logaritmoBaseQualquerHiperbolico,

      logaritmoBaseQualquerHiperbolicoMenosUm: $logaritmoBaseQualquerHiperbolicoMenosUm,

      logaritmoNaturalInversoHiperbolico: $logaritmoNaturalInversoHiperbolico,

      logaritmoNaturalInversoHiperbolicoMaisUm: $logaritmoNaturalInversoHiperbolicoMaisUm,

      logaritmoBase10InversoHiperbolico: $logaritmoBase10InversoHiperbolico,

      logaritmoBase2InversoHiperbolico: $logaritmoBase2InversoHiperbolico,

      logaritmoBaseQualquerInversoHiperbolico: $logaritmoBaseQualquerInversoHiperbolico,

      logaritmoBaseQualquerInversoHiperbolicoMenosUm: $logaritmoBaseQualquerInversoHiperbolicoMenosUm,

      antilogaritmoNatural: $antilogaritmoNatural,

      antilogaritmoNaturalMaisUm: $antilogaritmoNaturalMaisUm,

      antilogaritmoBase10: $antilogaritmoBase10,

      antilogaritmoBase2: $antilogaritmoBase2,

      antilogaritmoBaseQualquer: $antilogaritmoBaseQualquer,

      antilogaritmoBaseQualquerMenosUm: $antilogaritmoBaseQualquerMenosUm,

      antilogaritmoNaturalInverso: $antilogaritmoNaturalInverso,

      antilogaritmoNaturalInversoMaisUm: $antilogaritmoNaturalInversoMaisUm,

      antilogaritmoBase10Inverso: $antilogaritmoBase10Inverso,

      antilogaritmoBase2Inverso: $antilogaritmoBase2Inverso,

      antilogaritmoBaseQualquerInverso: $antilogaritmoBaseQualquerInverso,

      antilogaritmoBaseQualquerInversoMenosUm: $antilogaritmoBaseQualquerInversoMenosUm,

      antilogaritmoNaturalHiperbolico: $antilogaritmoNaturalHiperbolico,

      antilogaritmoNaturalHiperbolicoMaisUm: $antilogaritmoNaturalHiperbolicoMaisUm,

      antilogaritmoBase10Hiperbolico: $antilogaritmoBase10Hiperbolico,

      antilogaritmoBase2Hiperbolico: $antilogaritmoBase2Hiperbolico,

      antilogaritmoBaseQualquerHiperbolico: $antilogaritmoBaseQualquerHiperbolico,

      antilogaritmoBaseQualquerHiperbolicoMenosUm: $antilogaritmoBaseQualquerHiperbolicoMenosUm,

      antilogaritmoNaturalInversoHiperbolico: $antilogaritmoNaturalInversoHiperbolico,

      antilogaritmoNaturalInversoHiperbolicoMaisUm: $antilogaritmoNaturalInversoHiperbolicoMaisUm,

      antilogaritmoBase10InversoHiperbolico: $antilogaritmoBase10InversoHiperbolico,

      antilogaritmoBase2InversoHiperbolico: $antilogaritmoBase2InversoHiperbolico,

      antilogaritmoBaseQualquerInversoHiperbolico: $antilogaritmoBaseQualquerInversoHiperbolico,

      antilogaritmoBaseQualquerInversoHiperbolicoMenosUm: $antilogaritmoBaseQualquerInversoHiperbolicoMenosUm,

      cologaritmoNatural: $cologaritmoNatural,

      cologaritmoNaturalMaisUm: $cologaritmoNaturalMaisUm,

      cologaritmoBase10: $cologaritmoBase10,

      cologaritmoBase2: $cologaritmoBase2,

      cologaritmoBaseQualquer: $cologaritmoBaseQualquer,

      cologaritmoBaseQualquerMaisUm: $cologaritmoBaseQualquerMaisUm,

      cologaritmoNaturalInverso: $cologaritmoNaturalInverso,

      cologaritmoNaturalInversoMaisUm: $cologaritmoNaturalInversoMaisUm,

      cologaritmoBase10Inverso: $cologaritmoBase10Inverso,

      cologaritmoBase2Inverso: $cologaritmoBase2Inverso,

      cologaritmoBaseQualquerInverso: $cologaritmoBaseQualquerInverso,

      cologaritmoBaseQualquerInversoMaisUm: $cologaritmoBaseQualquerInversoMaisUm,

      cologaritmoNaturalHiperbolico: $cologaritmoNaturalHiperbolico,

      cologaritmoNaturalHiperbolicoMaisUm: $cologaritmoNaturalHiperbolicoMaisUm,

      cologaritmoBase10Hiperbolico: $cologaritmoBase10Hiperbolico,

      cologaritmoBase2Hiperbolico: $cologaritmoBase2Hiperbolico,

      cologaritmoBaseQualquerHiperbolico: $cologaritmoBaseQualquerHiperbolico,

      cologaritmoBaseQualquerHiperbolicoMaisUm: $cologaritmoBaseQualquerHiperbolicoMaisUm,

      cologaritmoNaturalInversoHiperbolico: $cologaritmoNaturalInversoHiperbolico,

      cologaritmoNaturalInversoHiperbolicoMaisUm: $cologaritmoNaturalInversoHiperbolicoMaisUm,

      cologaritmoBase10InversoHiperbolico: $cologaritmoBase10InversoHiperbolico,

      cologaritmoBase2InversoHiperbolico: $cologaritmoBase2InversoHiperbolico,

      cologaritmoBaseQualquerInversoHiperbolico: $cologaritmoBaseQualquerInversoHiperbolico,

      cologaritmoBaseQualquerInversoHiperbolicoMaisUm: $cologaritmoBaseQualquerInversoHiperbolicoMaisUm,

    },

    cartesianas: {

      primeiroGrau: $primeiroGrau,

      segundoGrau: $segundoGrau,

      terceiroGrau: $terceiroGrau,

      quartoGrau: $quartoGrau,

      quintoGrau: $quintoGrau,

      sextoGrau: $sextoGrau,

      setimoGrau: $setimoGrau,

      oitavoGrau: $oitavoGrau,

    },

    geometricas: { },

    algebricos: { },
    
    experimentais: { }

  }

};
