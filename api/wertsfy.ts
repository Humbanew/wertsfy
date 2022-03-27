export class wertsfyCore { exportedTools() { return wertsfy; } }

import { lydrocCore } from './imports/lydrocApp/lydroc-core';
import { lydrocPlusCore } from './imports/lydrocPlusApp/lydroc-plus-core';
import { rcalcCore } from './imports/rcalcApp/rcalc-core';
import { xcolorsCore } from './imports/xcolorsApp/xcolors-core';

let wertsfy = {

  sessoes: {

    toolsApisSessao: {
      
      rcalcAplicacao: { core: rcalcCore },
      
      unoteAplicacao: { },
      
      dpassAplicacao: { },

      wcubeAplicacao: { },
      
      xcolorsAplicacao: { core: xcolorsCore },
      
      karzokAplicacao: { },
      
      stonnecuttAplicacao: { },

    },

    webConstructorApiSessao: {

      lydrocAplicacao: { core: lydrocCore },

      lydrocPlusAplicacao: { core: lydrocPlusCore }

    }


  }


};