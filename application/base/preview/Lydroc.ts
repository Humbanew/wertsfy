/// <reference path="architecture.d.ts" />

class WLydroc {

  protected wlydroc_html_structure = class WLyHTMLStructure {

    protected wlydroc_html_event_handler_attrs = class WLyHTMLEventHandlerAttrs { }
    protected wlydroc_html_global_attrs = class WLyHTMLGlobalAttrs { }
    protected wlydroc_html_aria_attrs = class WLyHTMLAriaAttrs { }

  }

  // Métodos para fazer ajustes ainda.
  newElement(element: string, classname: string, id: string) {
    let constructor = document.createElement(element); 
    constructor.id = id;
    constructor.className = classname;
    return constructor;
  }
  
  addMoreClasses(element: HTMLElement, classes: Array<String>) { }
  addAttribute(element: HTMLElement) { }
  addEvent(element: HTMLElement) { }

}
