declare interface WArch { 
  struct: Struct;
  matriz: Matriz;
}

// parents of Native:
  /***/  
  declare interface Struct { 
    build: Object
  }
  /***/

  /***/
  declare interface Matriz {
    constructor: ArrayConstructor[][]
  }
  /***/

  // ??? ainda a adicionar.
declare interface EcmaScript { }

// parents of Ecmascript:
  /***/

// modules declarations
declare module "archbase" { 
  export var wArch: WArch;
}

declare module "archecmascript" {
  export var ecmascript: EcmaScript;
}
