export namespace ClassesCSSDisplay {

  export const block = window.customElements.define('lydef-display-block', 
    class DisplayBlock extends HTMLStyleElement {
      constructor() { super(); this.textContent = ".ly-display-block { display: block; }"; }
  }, undefined);

  export const contents = window.customElements.define('lydef-display-contents',
    class DisplayContents extends HTMLStyleElement {
      constructor() { super(); this.textContent = ".ly-display-contents { display: contents; }"; }
  }, undefined);

  export const inherit = window.customElements.define('lydef-display-inherit',
    class DisplayInherit extends HTMLStyleElement {
      constructor() { super(); this.textContent = ".ly-display-inherit { display: inherit; }"; }
  }, undefined);

  export const initial = window.customElements.define('lydef-display-initial',
    class DisplayInitial extends HTMLStyleElement {
      constructor() { super(); this.textContent = ".ly-display-initial { display: initial; }"; }
  }, undefined);

  export const inline = window.customElements.define('lydef-display-inline',
    class DisplayInline extends HTMLStyleElement {
      constructor() { super(); this.textContent = ".ly-display-inline { display: inline; }"; }
  }, undefined);

  export const inlineBlock = window.customElements.define('lydef-display-inline-block',
    class DisplayInlineBlock extends HTMLStyleElement {
      constructor() { super(); this.textContent = ".ly-display-inline-block { display: inline-block; }"; }
  }, undefined);

  export const inlineFlex = window.customElements.define('lydef-display-inline-flex',
    class DisplayInlineFlex extends HTMLStyleElement {
      constructor() { super(); this.textContent = ".ly-display-inline-flex { display: inline-flex; }"; }
  }, undefined);

  export const inlineGrid = window.customElements.define('lydef-display-inline-grid',
    class DisplayInlineGrid extends HTMLStyleElement {
      constructor() { super(); this.textContent = ".ly-display-inline-grid { display: inline-grid; }"; }
  }, undefined);

  export const flex = window.customElements.define('lydef-display-flex',
    class DisplayFlex extends HTMLStyleElement {
      constructor() { super(); this.textContent = ".ly-display-flex { display: flex; }"; }
  }, undefined);

  export const flowRoot = window.customElements.define('lydef-display-flow-root',
    class DisplayFlowRoot extends HTMLStyleElement {
      constructor() { super(); this.textContent = ".ly-display-flow-root { display: flow-root; }"; }
  }, undefined);

  export const none = window.customElements.define('lydef-display-none',
    class DisplayNone extends HTMLStyleElement {
      constructor() { super(); this.textContent = ".ly-display-none { display: none; }"; }
  }, undefined);

};