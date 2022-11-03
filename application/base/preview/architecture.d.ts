declare interface Modals { 
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
declare interface Ecmascript { }

// parents of Ecmascript:
  /***/

// modules declarations
declare module "archbase" { 
  export var modals: Modals;
}

declare module "archecmascript" {
  export var ecmascript: Ecmascript;
}
