/// <reference path="warch.type.nxt.d.ts" />

import { WertsfyPrototipos } from "./warch.type.nxt";

export namespace WertsfyTypes {

  export namespace logical {
    
    let intExpressoes: WertsfyPrototipos.Logicos.TExpressoes;

    export var comum: WertsfyPrototipos.Logicos.TComuns;
    export var avancado: WertsfyPrototipos.Logicos.TAvancados;
    export var expressoes = { 
      
      determinantes: intExpressoes.determinantes,
      funcoesCartesianas: intExpressoes.funcoesCartesianas,
      operacoesComuns: intExpressoes.operacoesComuns,
      operacoesVetores: intExpressoes.operacoesVetores,
      operacoesDiversos: intExpressoes.operacoesDiversos,
      operacoesNumericos: intExpressoes.operacoesNumericos,
      operacoesDiagramaVenn: intExpressoes.operacoesDiagramaVenn,
      operacoesGeometricos: intExpressoes.operacoesGeometricos,
      operacoesCartesianos: intExpressoes.operacoesCartesianos,
      porcentagem: intExpressoes.porcentagem,
      triangulosPitagoricos: intExpressoes.triangulosPitagoricos,
      variaveisDePascal: intExpressoes.variaveisDePascal,
      variaveisDeTemperatura: intExpressoes.variaveisDeTemperatura,
      variaveisDeTitulacao: intExpressoes.variaveisDeTitulacao
    
    }

  } 

}
