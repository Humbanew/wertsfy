export class wertsfyCore { exportedTools() { return wertsfy; } }

import { lydrocCore } from './imports/lydrocApp/lydroc-core';

let wertsfy = {

  sessoes: {

    toolsApisSessao: {
      rcalcAplicacao: { },
      unoteAplicacao: { },
      dpassAplicacao: { },
      xcolorsAplicacao: { },
      karzokAplicacao: { },
      stonnecuttAplicacao: { },
    },

    webConstructorApiSessao: {

      lydrocAplicacao: { core: lydrocCore },

      lydrocPlusAplicacao: { }

    }


  }


};