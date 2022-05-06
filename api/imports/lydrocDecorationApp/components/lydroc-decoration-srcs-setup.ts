/** @class Gerador de classes de folha de estilo */
export class StylesheetGeneratorClass {
  [x: string]: string|any;

  constructor(id: string, classe: string) {
      this.id = id;
      this.classe = classe;
  }

  funcaoDelete(elementId: string): string|any { 
    const element = document.getElementById(this.id).classList.remove(this.classe); return element; 
  }

  funcaoAdder(elementId: string): string|any {
    const element = document.getElementById(this.id).classList.add(this.classe); return element;
  }

  unificador(): any[] { return [this.funcaoDelete, this.funcaoAdder]; };

};