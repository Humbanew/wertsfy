/// <reference path="architecture.d.ts" />

import { Architecture } from "./architecture";

class WLydroc {

  protected wlydroc_html_structure = class WLyHTMLStructure {

    public wlydroc_html_event_handler_attrs = class WLyHTMLEventHandlerAttrs {
    
      protected eventHandlerAttrs = Architecture.struct.templates.HTMLEHandlerAttrs;

        //  // onabort
      public onabort = this.eventHandlerAttrs;
        //  // onautocomplete
      public onautocomplete = this.eventHandlerAttrs;
        //  // onautocompleteerror
      public onautocompleteerror = this.eventHandlerAttrs;
        //  // onblur
      public onblur = this.eventHandlerAttrs;
        //  // oncancel
      public oncancel = this.eventHandlerAttrs;
        //  // oncanplay
      public oncanplay = this.eventHandlerAttrs;
        //  // oncanplaythrough
      public oncanplaythrough = this.eventHandlerAttrs;
        //  // onchange
      public onchange = this.eventHandlerAttrs;
        //  // onclick
      public onclick = this.eventHandlerAttrs;
        //  // onclose
      public onclose = this.eventHandlerAttrs;
        //  // oncontextmenu
      public oncontextmenu = this.eventHandlerAttrs;
        //  // oncuechange,
      public oncuechange = this.eventHandlerAttrs;
        //  // ondblclick,
      public ondblclick = this.eventHandlerAttrs;
        //  // ondrag,
      public ondrag = this.eventHandlerAttrs;
        //  // ondragend,
      public ondragend = this.eventHandlerAttrs;
        //  // ondragenter,
      public ondragenter = this.eventHandlerAttrs;
        //  // ondragleave,
      public ondragleave = this.eventHandlerAttrs;
        //  // ondragover,
      public ondragover = this.eventHandlerAttrs;
        //  // ondragstart,
      public ondragstart = this.eventHandlerAttrs;
        //  // ondrop,
      public ondrop = this.eventHandlerAttrs;
        //  // ondurationchange,
      public ondurationchange = this.eventHandlerAttrs;
        //  // onemptied,
      public onemptied = this.eventHandlerAttrs;
        //  // onended,
      public onended = this.eventHandlerAttrs;
        //  // onerror,
      public onerror = this.eventHandlerAttrs;
        //  // onfocus,
      public onfocus = this.eventHandlerAttrs;
        //  // oninput,
      public oninput = this.eventHandlerAttrs;
        //  // oninvalid,
      public oninvalid = this.eventHandlerAttrs;
        //  // onkeydown,
      public onkeydown = this.eventHandlerAttrs;
        //  // onkeypress,
      public onkeypress = this.eventHandlerAttrs;
        //  // onkeyup,
      public onkeyup = this.eventHandlerAttrs;
        //  // onload,
      public onload = this.eventHandlerAttrs;
        //  // onloadeddata,
      public onloadeddata = this.eventHandlerAttrs;
        //  // onloadedmetadata,
      public onloadedmetadata = this.eventHandlerAttrs;
        //  // onloadstart,
      public onloadstart = this.eventHandlerAttrs;
        //  // onmousedown,
      public onmousedown = this.eventHandlerAttrs;
        //  // onmouseenter,
      public onmouseenter = this.eventHandlerAttrs;
        //  // onmouseleave,
      public onmouseleave = this.eventHandlerAttrs;
        //  // onmousemove,
      public onmousemove = this.eventHandlerAttrs;
        //  // onmouseout,
      public onmouseout = this.eventHandlerAttrs;
        //  // onmouseover,
      public onmouseover = this.eventHandlerAttrs;
        //  // onmouseup,
      public onmouseup = this.eventHandlerAttrs;
        //  // onmousewheel,
      public onmousewheel = this.eventHandlerAttrs;
        //  // onpause,
      public onpause = this.eventHandlerAttrs;
        //  // onplay,
      public onplay = this.eventHandlerAttrs;
        //  // onplaying,
      public onplaying = this.eventHandlerAttrs;
        //  // onprogress,
      public onprogress = this.eventHandlerAttrs;
        //  // onratechange,
      public onratechange = this.eventHandlerAttrs;
        //  // onreset,
      public onreset = this.eventHandlerAttrs;
        //  // onresize,
      public onresize = this.eventHandlerAttrs;
        //  // onscroll,
      public onscroll = this.eventHandlerAttrs;
        //  // onseeked,
      public onseeked = this.eventHandlerAttrs;
        //  // onseeking,
      public onseeking = this.eventHandlerAttrs;
        //  // onselect,
      public onselect = this.eventHandlerAttrs;
        //  // onshow,
      public onshow = this.eventHandlerAttrs;
        //  // onsort,
      public onsort = this.eventHandlerAttrs;
        //  // onstalled,
      public onstalled = this.eventHandlerAttrs;
        //  // onsubmit,
      public onsubmit = this.eventHandlerAttrs;
        //  // onsuspend,
      public onsuspend = this.eventHandlerAttrs;
        //  // ontimeupdate,
      public ontimeupdate = this.eventHandlerAttrs;
        //  // ontoggle,
      public ontoggle = this.eventHandlerAttrs;
        //  // onvolumechange,
      public onvolumechange = this.eventHandlerAttrs;
        //  // onwaiting.
      public onwaiting = this.eventHandlerAttrs;

    }
    public wlydroc_html_global_attrs = class WLyHTMLGlobalAttrs { }

    public wlydroc_html_aria_attrs = class WLyHTMLAriaAttrs { }

    public wlydroc_html_elements = class WLyHTMLElements { }

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

  public lydroc = { }

}
