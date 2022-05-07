// Função útil para criar definição de variáveis em folhas de estilo
// Uso do JS/TS Doc: https://www.typescriptlang.org/docs/handbook/jsdoc.html;
// let k = new StyleSheetList().item(0).insertRule(':root{ }', 0);

import { _criaFuncoesCSS } from "./lydroc-decoration-srcs-setup";

export namespace LydrocDecorationIcons { }

export namespace LydrocDecorationStyles {

  export namespace LDDisplays {

    export const config = {

      /** @description Configuração de display sendo none */
      displayNone: (id: string) => _criaFuncoesCSS(id, 'ly-display-none'),
      
      /** @description Configuração de display sendo block */
      displayBlock: (id: string) => _criaFuncoesCSS(id, 'ly-display-block'),
      
      /** @description Configuração de display sendo inline */
      displayInline: (id: string) => _criaFuncoesCSS(id, 'ly-display-inline'),
    
    }

  }

}

