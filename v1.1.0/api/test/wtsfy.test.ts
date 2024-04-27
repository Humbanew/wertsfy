// modelo novo ainda não implementado na Calculator
type TTamMemoria = 3|4|5|6;
type TTipagem = 'standard'|'scientific'|'conversor'|'programmer'|'extreme';

interface IArvore {
  token: string|null;
  procedencia: number|null;
  filho: Array<IArvore>|null;
}

abstract class BlankCalculator {

  protected expressaoBusca = /([\+\-\/\*\^\$\%]|\^\^)?([\{\}\[\]\(\)]{1,})?((\d+)([\+\-\/\*\^\$\%]|\^\^)?(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?)([\{\}\[\]\(\)]{1,})?|(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?(\d+)/gmi;
  protected unificador = /(\#[a-z]+)/gmi;
  protected input: string = "";
  protected resultadoBusca: Array<string> = this.input.match(this.expressaoBusca);
  protected valorResultado: number = undefined;
  
  public constructor(input: string) {
    this.input = input;    
  }

  private toker = class Toker { 
    public separaTokens = (input: string, regex: RegExp): Array<string> => {
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
      return tokens;
    }
  
    public criaArvoreTokens = (token: Array<string>): any => { 
      const listaProcedencia = [
        ['+', '-'], // nivel de procedência '1'
        ['*', '/'], // nivel de procedência '2'
        ['^', '$'], // nivel de procedência '3'
        ['#sin', '#cos', '#tan', '#sec', '#cosec', '#cotan', '#sqrt', '#cbrt'], // nivel de procedência '4'
        ['(', ')', '[', ']', '{', '}'], // maior nivel de procedência '5'
      ];
      let arvore: IArvore, w: number = 0;

      /**
       * Casos de Uso de Construção de Tokens
       * 
       * 1) {[({[( ... )]})]}
       * 
       * 2) number operador number operador number [...]
       * 
       * 3) operador_especial number
       * 
       * 4) operador_especial operador_especial [...] number
       * 
       */

      while(w < token.length) {
        w++;
      }

      console.log(arvore);
    
      return arvore; 
    }

  }

  protected separaTkn = new this.toker().separaTokens;
  protected criaArvTkn = new this.toker().criaArvoreTokens;

}

class Calculator extends BlankCalculator {

  protected memoria: Array<TTamMemoria>;
  protected tipoAtual: TTipagem;

  public constructor(input: string) {
    super(input);
    console.log(this.criaArvTkn(this.separaTkn(input, this.expressaoBusca)));
  }

  public defineEspacosMemoria(espacos: TTamMemoria): void {
    this.memoria = new Array(espacos);
  }

  public defineModoAtivo(modo: TTipagem): void {
    this.tipoAtual = modo;
  }

}

let test = new Calculator("2+2");
