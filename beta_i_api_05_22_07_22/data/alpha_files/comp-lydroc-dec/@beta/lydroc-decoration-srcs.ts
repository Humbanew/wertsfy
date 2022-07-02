// Função útil para criar definição de variáveis em folhas de estilo
// Uso do JS/TS Doc: https://www.typescriptlang.org/docs/handbook/jsdoc.html;
// let k = new StyleSheetList().item(0).insertRule(':root{ }', 0);

import { _criaFuncoesCSS } from "./lydroc-decoration-srcs-setup";

export namespace LydrocDecConfig {

  export class ConfiguradorClassesEstilo {

    public id: string;

    constructor(idElemento: string) {

      this.id = idElemento;

    }

    public setup() {

      const classes = {

        display: {

          block: _criaFuncoesCSS(this.id, 'ly-display-block'),
          contents: _criaFuncoesCSS(this.id, 'ly-display-contents'),
          inherit: _criaFuncoesCSS(this.id, 'ly-display-inherit'),
          initial: _criaFuncoesCSS(this.id, 'ly-display-initial'),
          inline: _criaFuncoesCSS(this.id, 'ly-display-inline'),
          inlineBlock: _criaFuncoesCSS(this.id, 'ly-display-inline-block'),
          none: _criaFuncoesCSS(this.id, 'ly-display-none'),


        }

      }

      return classes;
      
    }


  }


}
