import { dpassCore } from './imports/dpassApp/dpass-core';
import { karzokCore } from './imports/karzokApp/karzok-core';
import { lydrocCore } from './imports/lydrocApp/lydroc-core';
import { lydrocDecorationCore } from './imports/lydrocDecorationApp/lydroc-decoration-core';
import { lydrocLabCore } from './imports/lydrocLabApp/lydroc-lab-core';
import { lydrocPlusCore } from './imports/lydrocPlusApp/lydroc-plus-core';
import { rcalcCore } from './imports/rcalcApp/rcalc-core';
import { stonnecuttCore } from './imports/stonnecuttApp/stonnecutt-core';
import { unoteCore } from './imports/unoteApp/unote-core';
import { wcubeCore } from './imports/wcubeApp/wcube-core';
import { xcolorsCore } from './imports/xcolorsApp/xcolors-core';

export const Wertsfy = {

  sessoes: {

    toolsApisSessao: {
      
      rcalcAplicacao: { core: rcalcCore },
      
      unoteAplicacao: { core: unoteCore },
      
      dpassAplicacao: { core: dpassCore },

      wcubeAplicacao: { core: wcubeCore },
      
      xcolorsAplicacao: { core: xcolorsCore },
      
      karzokAplicacao: { core: karzokCore },
      
      stonnecuttAplicacao: { core: stonnecuttCore },

    },

    webConstructorApiSessao: {

      lydrocAplicacao: { core: lydrocCore },

      lydrocPlusAplicacao: { core: lydrocPlusCore },

      lydrocLabAplicacao: { core: lydrocLabCore },

      lydrocDecorationAplicacao: { core: lydrocDecorationCore },

      lydrocDecorationPlusAplicacao: { core: lydrocDecorationCore },

    }


  }


};