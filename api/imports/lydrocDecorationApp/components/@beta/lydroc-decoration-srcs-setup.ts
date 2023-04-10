/** @alias Configurador de classes de folha de estilo */
export function _criaFuncoesCSS(id: string, classe: string) {

  let funcaoDelete = function delDisplayBlock() {
    const element = document.getElementById(id).classList.remove(classe);
    return element;
  }

  let funcaoAdder = function addDisplayBlock() {
    const element = document.getElementById(id).classList.add(classe);
    return element;
  }

  let funcoes: any[] = [funcaoDelete, funcaoAdder];

  return funcoes;

}
