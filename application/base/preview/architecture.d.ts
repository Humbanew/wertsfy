declare interface Architecture { 
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
declare module "arch-base" { 
  export var architecture: Architecture;
}

declare module "arch-ecmascript" {
  export var ecmascript: Ecmascript;
}
