export let listaVersoes = document.getElementById("lista_versoes");

export class DescontinuosVersions {

  criaElementoLista(versao="") {
    let li = document.createElement("li");
    li.innerHTML = versao;
    return li;
  }

};

class DocsGen {

  constructor(elementoSuper=HTMLElement) {
    this.elementoSuper = elementoSuper;
  }

};
