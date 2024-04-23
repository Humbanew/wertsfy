// modelo novo ainda não implementado na Calculator
type TTamMemoria = 3|4|5|6;
type TTipagem = 'standard'|'scientific'|'conversor'|'programmer'|'extreme';

abstract class BlankCalculator {

  protected expressaoBusca = /([\{\}\[\]\(\)]{1,})?((\d+)([\+\-\/\*\^\$\%]|\^\^)?(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?)([\{\}\[\]\(\)]{1,})?|(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?(\d+)/gmi;
  protected unificador = /(\#[a-z]+)/gmi;
  protected input: string = null;
  protected resultadoBusca: Array<string> = this.input.match(this.expressaoBusca);
  protected valorResultado: number = undefined;
  
  public constructor(input: string) {
    this.input = input;    
  }

  private toker = class Toker { 
    public separaTokens = (input: string, regex: RegExp) => {
      let result = input.match(regex);
      let result2 = input.match(BlankCalculator.prototype.unificador);
      let tokens = [];
      console.log(result);
      console.log("\x1b[34;1m"+result2+"\x1b[0m");
      result.forEach((element) => {
        for(let i = 0; i < element.length; i++) {
          if(element.slice(i, i+1) === "#") {
            tokens.push(element.match(BlankCalculator.prototype.unificador).toString());
            return;
          }
          tokens.push(element.slice(i, i+1));
        }
      });
      console.log(tokens);
    }
  
    public criaArvoreTokens = (token: Array<string>): Object => { 
      const listaProcedencia = [
        ['+', '-'], // nivel de procedência '0'
        ['*', '/'], // nivel de procedência '1'
        ['^', '$'], // nivel de procedência '2'
        ['#sin', '#cos', '#tan', '#sec', '#cosec', '#cotan', '#sqrt', '#cbrt'], // nivel de procedência '3'
        ['(', ')'], // nivel de procedência '4'
        ['[', ']'], // nivel de procedência '5'
        ['{', '}'], // maior nível de procedência '6'
      ];
      const arvore: Object = {};
    
      return arvore; 
    }
  }

  protected separaTkn = new this.toker().separaTokens;
  protected criaArvTkn = new this.toker().criaArvoreTokens;

}

class Calculator extends BlankCalculator {

  public constructor(input: string) {
    super(input);
  }

}
