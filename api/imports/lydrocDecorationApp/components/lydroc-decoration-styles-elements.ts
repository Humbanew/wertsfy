const defines = {

  classe: {

    display: {
      
      block: window.customElements.define('lydef-display-block', class DisplayBlock extends HTMLStyleElement {
        constructor() { super(); this.textContent = "display: block;"; }
      } , undefined),

      contents: window.customElements.define('lydef-display-contents', class DisplayContents extends HTMLStyleElement {
        constructor() { super(); this.textContent = "display: contents;"; }
      } , undefined),

      

      none: window.customElements.define('lydef-display-none', class DisplayNone extends HTMLStyleElement {
        constructor() { super(); this.textContent = "display: none;"; }
      }, undefined),


    }

  }

} 

