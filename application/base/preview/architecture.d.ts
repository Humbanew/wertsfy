declare interface WSCConstructor { 
  struct: {

    default: Object
    templates: {

      HTMLEHandlerAttrs: {

        action: Function,
        enabled: Boolean

      }

      HTMLGlobalAttrs: {

        content: String|Object

      }

    }

  };

  matriz: {
  
    default: Array<any>
  
  }; 

}

declare interface WStruct { }

declare interface WMatriz { }

declare interface WGeometry { }

declare interface WGeometryOpenGL { }
