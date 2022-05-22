export class BluerstoneCore {

  public adicionaClasseEstilo(id: string, classe: string) {
    document.getElementById(id).classList.add(classe);
  }

  public removeClasseEstilo(id: string, classe: string) {
    document.getElementById(id).classList.remove(classe);
  }

};

export class BluerstoneHTMLElements extends BluerstoneCore {
  
  public geraDisplayBlockLoad() {
      
    let elemento = window.customElements.define('bluerstone-display-block', 
      class BlDisplayBlockElement extends HTMLElement {
        constructor() { super(); 
          let root = this.attachShadow({mode: 'open'}); 
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-block { display: block; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayContentsLoad() {
  
    let elemento = window.customElements.define('bluerstone-display-contents',
      class BlDisplayContentsElement extends HTMLElement {
        constructor() { super(); 
          let root = this.attachShadow({mode: 'open'}); 
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-contents { display: contents; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;
  
  }

  public geraDisplayInheritLoad() {

    let elemento = window.customElements.define('bluerstone-display-inherit',
      class BlDisplayInheritElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-inherit { display: inherit; }";
          root.appendChild(style);
        }
      }, undefined);
      
    return elemento;

  }

  public geraDisplayInitialLoad() {

    let elemento = window.customElements.define('bluerstone-display-initial',
      class BlDisplayInitialElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-initial { display: initial; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayInlineLoad() {

    let elemento = window.customElements.define('bluerstone-display-inline',
      class BlDisplayInlineElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-inline { display: inline; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayInlineBlockLoad() {

    let elemento = window.customElements.define('bluerstone-display-inline-block',
      class BlDisplayInlineBlockElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-inline-block { display: inline-block; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayInlineFlexLoad() {

    let elemento = window.customElements.define('bluerstone-display-inline-flex',
      class BlDisplayInlineFlexElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-inline-flex { display: inline-flex; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayInlineGridLoad() {

    let elemento = window.customElements.define('bluerstone-display-inline-grid',
      class BlDisplayInlineGridElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-inline-grid { display: inline-grid; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayFlexLoad() {

    let elemento = window.customElements.define('bluerstone-display-flex',
      class BlDisplayFlexElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-flex { display: flex; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayFlowRootLoad() {

    let elemento = window.customElements.define('bluerstone-display-flow-root',
      class BlDisplayFlowRootElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-flow-root { display: flow-root; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayGridLoad() {

    let elemento = window.customElements.define('bluerstone-display-grid',
      class BlDisplayGridElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-grid { display: grid; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayNoneLoad() {

    let elemento = window.customElements.define('bluerstone-display-none', 
      class BlDisplayNoneElement extends HTMLElement {
        constructor() { super(); 
          let root = this.attachShadow({mode: 'open'}); 
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-none { display: none; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayRunInLoad() {
      
    let elemento = window.customElements.define('bluerstone-display-run-in',
      class BlDisplayRunInElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-run-in { display: run-in; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayRowLoad() {

    let elemento = window.customElements.define('bluerstone-display-table-row',
      class BlDisplayTableRowElement extends HTMLElement {
        constructor() {
          super();
          let root = this.attachShadow({ mode: 'open' });
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-table-row { display: table-row; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayTableLoad() {

    let elemento = window.customElements.define('bluerstone-display-table',
      class BlDisplayTableElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-table { display: table; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayTableCellLoad() {

    let elemento = window.customElements.define('bluerstone-display-table-cell',
      class BlDisplayTableCellElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-table-cell { display: table-cell; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayTableCaptionLoad() {

    let elemento = window.customElements.define('bluerstone-display-table-caption',
      class BlDisplayTableCaptionElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-table-caption { display: table-caption; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayTableRowGroupLoad() {

    let elemento = window.customElements.define('bluerstone-display-table-row-group',
      class BlDisplayTableRowGroupElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-table-row-group { display: table-row-group; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayTableHeaderGroupLoad() {

    let elemento = window.customElements.define('bluerstone-display-table-header-group',
      class BlDisplayTableHeaderGroupElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-table-header-group { display: table-header-group; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayTableFooterGroupLoad() {
      
    let elemento = window.customElements.define('bluerstone-display-table-footer-group',
      class BlDisplayTableFooterGroupElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-table-footer-group { display: table-footer-group; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayTableColumnGroupLoad() {

    let elemento = window.customElements.define('bluerstone-display-table-column-group',
      class BlDisplayTableColumnGroupElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-table-column-group { display: table-column-group; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayTableColumnLoad() {

    let elemento = window.customElements.define('bluerstone-display-table-column',
      class BlDisplayTableColumnElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-table-column { display: table-column; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayUnsetLoad() {
      
    let elemento = window.customElements.define('bluerstone-display-unset',
      class BlDisplayUnsetElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-unset { display: unset; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayRubyLoad() {

    let elemento = window.customElements.define('bluerstone-display-ruby',
      class BlDisplayRubyElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-ruby { display: ruby; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayRubyBaseLoad() {

    let elemento = window.customElements.define('bluerstone-display-ruby-base',
      class BlDisplayRubyBaseElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-ruby-base { display: ruby-base; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayRubyTextLoad() {

    let elemento = window.customElements.define('bluerstone-display-ruby-text',
      class BlDisplayRubyTextElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-ruby-text { display: ruby-text; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayRubyBaseGroupLoad() {

    let elemento = window.customElements.define('bluerstone-display-ruby-base-group',
      class BlDisplayRubyBaseGroupElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-ruby-base-group { display: ruby-base-group; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayRubyTextGroupLoad() {

    let elemento = window.customElements.define('bluerstone-display-ruby-text-group',
      class BlDisplayRubyTextGroupElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-ruby-text-group { display: ruby-text-group; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

  public geraDisplayMozBoxLoad() {

    let elemento = window.customElements.define('bluerstone-display-moz-box',
      class BlDisplayMozBoxElement extends HTMLElement {
        constructor() { super();
          let root = this.attachShadow({mode: 'open'});
          let style = document.createElement('style');
          style.textContent = ".bluerstone-display-moz-box { display: -moz-box; }";
          root.appendChild(style);
        }
      }, undefined);

    return elemento;

  }

} 
