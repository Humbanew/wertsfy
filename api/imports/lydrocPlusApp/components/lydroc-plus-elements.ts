// let element = window.customElements.define('<element>', class extends HTMLElement {} ); return element;

export namespace LydrocPlusElements {

  export let elementsCommonFormat = {

    lydrocCore: window.customElements.define('lydroc-core', class extends HTMLElement {}),

    lydrocConteiner: window.customElements.define('lydroc-conteiner', class extends HTMLElement {}),

    lydrocSubConteiner: window.customElements.define('lydroc-sub-conteiner', class extends HTMLElement {}),

    lydrocSimpleMenu: window.customElements.define('lydroc-simple-menu', class extends HTMLElement {}),

    lydrocComplexMenu: window.customElements.define('lydroc-complex-menu', class extends HTMLElement {}),

    lydrocCard: window.customElements.define('lydroc-card', class extends HTMLElement {}),

    lydrocCardHeader: window.customElements.define('lydroc-card-header', class extends HTMLElement {}),

    lydrocCardBody: window.customElements.define('lydroc-card-body', class extends HTMLElement {}),

    lydrocCardFooter: window.customElements.define('lydroc-card-footer', class extends HTMLElement {}),

    lydrocCardImage: window.customElements.define('lydroc-card-image', class extends HTMLElement {}),

    lydrocCardTitle: window.customElements.define('lydroc-card-title', class extends HTMLElement {}),

    lydrocCardText: window.customElements.define('lydroc-card-text', class extends HTMLElement {}),

    lydrocCardLink: window.customElements.define('lydroc-card-link', class extends HTMLElement {}),

    lydrocCardButton: window.customElements.define('lydroc-card-button', class extends HTMLElement {}),

    lydrocCarossel: window.customElements.define('lydroc-carossel', class extends HTMLElement {}),

    lydrocCarosselItem: window.customElements.define('lydroc-carossel-item', class extends HTMLElement {}),

    lydrocCarosselItemImg: window.customElements.define('lydroc-carossel-item-img', class extends HTMLElement {}),

    lydrocCarosselItemTitle: window.customElements.define('lydroc-carossel-item-title', class extends HTMLElement {}),

    lydrocCarosselItemText: window.customElements.define('lydroc-carossel-item-text', class extends HTMLElement {}),

    lydrocCarosselItemButton: window.customElements.define('lydroc-carossel-item-button', class extends HTMLElement {}),

    lydrocCarosselItemLink: window.customElements.define('lydroc-carossel-item-link', class extends HTMLElement {}),

    lydrocCarosselItemButtonLink: window.customElements.define('lydroc-carossel-item-button-link', class extends HTMLElement {}),

    lydrocJavascriptImports: window.customElements.define('lydroc-javascript-imports', class extends HTMLElement {}),

    lydrocPythonImports: window.customElements.define('lydroc-python-imports', class extends HTMLElement {}),

    lydrocLuaImports: window.customElements.define('lydroc-lua-imports', class extends HTMLElement {}),

    lydrocCSSImports: window.customElements.define('lydroc-css-imports', class extends HTMLElement {}),

    lydrocPageSimplePresets: window.customElements.define('lydroc-page-simple-presets', class extends HTMLElement {}),

    lydrocPageComplexPresets: window.customElements.define('lydroc-page-complex-presets', class extends HTMLElement {}),

  };

  export let elementsUniversalSceneDescription = {};

};