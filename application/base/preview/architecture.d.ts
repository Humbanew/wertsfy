declare interface Native { 
  struct: Struct;
  matriz: Matriz;
}

// parents of Native:
  /***/  
  declare interface Struct { 
    constructor: Object
  }
  /***/

  /***/
  declare interface Matriz {
    constructor: ArrayConstructor[][]
  }
  /***/

declare interface Ecmascript { }

// parents of Ecmascript:
  /***/

// modules declarations
declare module "arch-native" { 
  export var Native: Native;
}

declare module "arch-ecmascript" {
  export var Ecmascript: Ecmascript;
}
