let template = document.createElement('template');
template.innerHTML = `<div id="sep"></div>`;

// Slots no template <slot></slot>

class SElementsSeparator extends HTMLElement {
  constructor() {
    super();

    console.debug("Ativando o elemento ''.");

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.warn("Callback ativado.");
  }
}

// Elementos Base de Organização
window.customElements.define('selements-import-root', SElementsSeparator);