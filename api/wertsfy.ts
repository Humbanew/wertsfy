export class wertsfyCore { exportedTools() { return wertsfy; } }

import { lydrocCore } from './imports/lydrocApp/lydroc-core';
import { lydrocPlusCore } from './imports/lydrocPlusApp/lydroc-plus-core';

let wertsfy = {

  sessoes: {

    toolsApisSessao: {
      
      rcalcAplicacao: { },
      
      unoteAplicacao: { },
      
      dpassAplicacao: { },

      wcubeAplicacao: { },
      
      xcolorsAplicacao: { },
      
      karzokAplicacao: { },
      
      stonnecuttAplicacao: { },

    },

    webConstructorApiSessao: {

      lydrocAplicacao: { core: lydrocCore },

      lydrocPlusAplicacao: { core: lydrocPlusCore }

    }


  }


};