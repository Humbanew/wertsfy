export class APIs { exportedTools() { return wertsfy; } }

import { lydrocCore } from './imports/lydrocApp/lydroc-core';
import { lydrocLabCore } from './imports/lydrocLabApp/lydroc-lab-core';
import { lydrocPlusCore } from './imports/lydrocPlusApp/lydroc-plus-core';
import { rcalcCore } from './imports/rcalcApp/rcalc-core';
import { xcolorsCore } from './imports/xcolorsApp/xcolors-core';

export const wertsfy = {

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

      lydrocPlusAplicacao: { core: lydrocPlusCore },

      lydrocLabAplicacao: { core: lydrocLabCore },

    }


  }


};