export class wertsfyCore { exportedTools() { return wertsfy; } }

import { lydrocCore } from './imports/lydrocApp/lydroc-core';

let wertsfy = {

  sessoes: {

    humbanewApisSessao: {
      rcalcAplicacao: { },
      unoteAplicacao: { },
      dpassAplicacao: { },
      xcolorsAplicacao: { },
      karzokAplicacao: { }
    },

    webConstructorApiSessao: {

      lydrocAplicacao: {  core: lydrocCore }

    }


  }


};