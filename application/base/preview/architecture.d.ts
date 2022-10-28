declare interface Native { 
  struct: Struct;
}

// parents of Native:
  /***/  
  declare interface Struct { 
    constructor: Object
  }
  /***/

declare interface Ecmascript { }

// parents of Ecmascript:
  /***/

declare module "arch-native" { 
  export var Native: Native;
}

declare module "arch-ecmascript" {
  export var Ecmascript: Ecmascript;
}

