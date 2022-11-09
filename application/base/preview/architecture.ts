export var Architecture: WSCConstructor = {
  struct: { 
    default: Object, 
    templates: { 
      HTMLEHandlerAttrs: { 
        action: Function, 
        enabled: true||false 
      }, 
      HTMLGlobalAttrs: { 
        content: ""||Object 
      } 
    } 
  },
  matriz: { default: new Array<any> }
}
