import { argv } from "process";

export class Cli {

  private raiz = 'wtsfy';
  
  foo() {
    if(this.raiz === argv[0]) {
      console.log('foo');
    }
  }


}