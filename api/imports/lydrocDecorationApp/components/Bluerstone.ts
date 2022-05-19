interface HexadecimalIdentifier {};
interface OctadecimalIdentifier {};

export class Bluerstone {

  adicionaClasseEstilo(id: string, classe: string) {
    document.getElementById(id).classList.add(classe);
  }

  removeClasseEstilo(id: string, classe: string) {
    document.getElementById(id).classList.remove(classe);
  }



};
