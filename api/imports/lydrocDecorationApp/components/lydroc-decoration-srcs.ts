// Função útil para criar definição de variáveis em folhas de estilo
// let k = new StyleSheetList().item(0).insertRule(':root{ }', 0);


function _criaFuncoesCSS(id: string, classe: string) {

  let funcaoDelete = function delDisplayBlock(elementId: string = id) { 
    const element = document.getElementById(elementId).classList.remove(classe);
    return element;
  }

  let funcaoAdder = function addDisplayBlock(elementId: string = id) {
    const element = document.getElementById(elementId).classList.add(classe);
    return element;
  }

  let funcoes: any[] = [funcaoDelete, funcaoAdder];

  return funcoes;

}

export namespace LydrocDecorationImages { }

export namespace LydrocDecorationStyles {

  export namespace LDDisplays {

    export namespace config {

      export const displayNone = (id: string) => _criaFuncoesCSS(id, 'ly-display-none');


    }

  }

}


