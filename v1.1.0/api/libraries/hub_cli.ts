/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

import { argv } from "process";

export class Cli {

  private raiz = 'wtsfy';
  
  foo() {
    if(this.raiz === argv[0]) {
      console.log('foo');
    }
  }


}
