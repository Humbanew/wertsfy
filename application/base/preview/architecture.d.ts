declare interface WArch { 
  struct: Struct;
  matriz: Matriz;
}

// parents of Native:
  /***/  
  declare interface Struct { 
    build: {

      default: Object
      htmlAttributes: { 
        action: any, 
        on_off: boolean 
      }

    }
  }
  /***/

  /***/
  declare interface Matriz {
    constructor: ArrayConstructor[][]
  }
  /***/

// modules declarations
declare module "archbase" { 
  export var wArch: WArch;
}
