/**
 * Copyright 2020, 2021, 2022. All rights reserved.
 * Humbanew Project Huon Subdivision
 */

// Interface de Programação de Aplicativos
interface Wertsfy {

  Mathematic: {

    corebase: WERTSFY_MATH_COREBASE,
    calculator: WERTSFY_MATH_CALCULATOR,

  },

  Interface: {

    terminal: WERTSFY_INTERFACE_TERMINAL,
    lydroc: WERTSFY_INTERFACE_LYDROC

  },

  Constructor: {

    karzok: WERTSFY_CONSTRUCTORS_KARZOK

  },

  Hooks: {

    language: WERTSFY_HOOKS_LANGUAGE

  }

} export var wertsfy: Wertsfy;

// Componentes da Interface

/** *Wertsfy Mathematics Corebase Class* */
class WERTSFY_MATH_COREBASE { };

/** *Wertsfy Mathematics Calculator Class* */
class WERTSFY_MATH_CALCULATOR { };

/** *Wertsfy Interface Terminal Class* */
class WERTSFY_INTERFACE_TERMINAL { };

/** *Wertsfy Interface Lydroc Class* */
class WERTSFY_INTERFACE_LYDROC { };

/** *Wertsfy Constructors Karzok Class* */
class WERTSFY_CONSTRUCTORS_KARZOK { };

/** *Wertsfy Hooks Language Class* */
class WERTSFY_HOOKS_LANGUAGE { }
