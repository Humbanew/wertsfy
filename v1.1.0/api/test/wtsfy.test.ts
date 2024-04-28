import { inspect } from "util";
import { calculator_colors } from "./colors_calculator.json";

// modelo novo ainda não implementado na Calculator
type TTamMemoria = 3|4|5|6;
type TNumeroCasaDecimais = 2|4|6|8|10;
type TTipagem = 'standard'|'scientific'|'conversor'|'programmer'|'extreme';

interface IArvore {
  token: string|null;
  procedencia: number|null;
  filho: IArvore|null;
}

/**
 * "escape_format": {
      "frgd": "\\x1b[38;2;0;0;0;1m",
      "bkgd": "\\x1b[48;2;0;0;0;1m"
    }
 */

abstract class BlankCalculator {

  protected expressaoBusca = /([\+\-\/\*\^\$\%]|\^\^)?([\{\}\[\]\(\)]{1,})?((\d+)([\+\-\/\*\^\$\%]|\^\^)?(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?)([\{\}\[\]\(\)]{1,})?|(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?(\d+)/gmi;
  protected extratores = [ /(\d+)/gmi, /(\#[a-z]+)/gmi, /([\+\-\/\*\^\$\%]|\^\^|#sqrt|#cbrt|#sin|#cos|#tan|#sec|#cosec|#cotan)/gmi ];
  protected input: string = "";
  protected resultadoBusca: Array<string> = this.input.match(this.expressaoBusca);
  protected valorResultado: number = undefined;
  
  protected separaTokens = (input: string, regex: RegExp): Array<string> => {
    let result = input.match(regex)
      ,tokens = []
      ,e1 = null
      ,e2 = null
      ,e3 = null;

    for(let i = 0; i < result.length; i++) {

      e1 = result[i].match(this.extratores[0]);
      e2 = result[i].match(this.extratores[1]);
      e3 = result[i].match(this.extratores[2]);

      if(e1) {
        tokens.push(e1.toString());
      }

      if(e2) {
        tokens.push(e2.toString());
      }

      if(e3) {
        tokens.push(e3.toString());
      }
      
    }

    console.log(tokens);
    return tokens;
  }

  protected criaArvoreTokens = (token: Array<string>): Object => { 
    const listaProcedencia = {
      1: [
        '+', '-'
      ],
      2: [
        '*', '/'
      ],
      3: [
        '^', '$', '%'
      ],
      4: [
        '#sin', '#cos', '#tan', '#sec', '#cosec', '#cotan', '#sqrt', '#cbrt'
      ],
      5: [
        '(', ')', '[', ']', '{', '}'
      ]
    };

    let arvore: IArvore = Object.prototype.constructor();
    let w = 0;

    while(w < token.length) {

      if(w === 0) {
        arvore = {
          token: 'BEGIN',
          procedencia: null,
          filho: null
        }
      }

      arvore = {
        token: token[w],
        procedencia: null,
        filho: arvore
      }

      switch(token[w]) {

        case listaProcedencia[5][0]: 
          arvore.procedencia = 5;
          break;
        
        case listaProcedencia[5][1]:
          arvore.procedencia = 5;
          break;
        
        case listaProcedencia[5][2]:
          arvore.procedencia = 5;
          break;
        
        case listaProcedencia[5][3]:
          arvore.procedencia = 5;
          break;
        
        case listaProcedencia[5][4]:
          arvore.procedencia = 5;
          break;
          
        case listaProcedencia[5][5]:
          arvore.procedencia = 5;
          break;

        case listaProcedencia[4][0]:
          arvore.procedencia = 4;
          break;

        case listaProcedencia[4][1]:
          arvore.procedencia = 4;
          break;

        case listaProcedencia[4][2]:
          arvore.procedencia = 4;
          break;

        case listaProcedencia[4][3]:
          arvore.procedencia = 4;
          break;

        case listaProcedencia[4][4]:
          arvore.procedencia = 4;
          break;

        case listaProcedencia[4][5]:
          arvore.procedencia = 4;
          break;

        case listaProcedencia[4][6]:
          arvore.procedencia = 4;
          break;

        case listaProcedencia[4][7]:
          arvore.procedencia = 4;
          break;

        case listaProcedencia[3][0]:
          arvore.procedencia = 3;
          break;

        case listaProcedencia[3][1]:
          arvore.procedencia = 3;
          break;

        case listaProcedencia[3][2]:
          arvore.procedencia = 3;
          break;

        case listaProcedencia[2][0]:
          arvore.procedencia = 2;
          break;

        case listaProcedencia[2][1]:
          arvore.procedencia = 2;
          break;

        case listaProcedencia[1][0]:
          arvore.procedencia = 1;
          break;

        case listaProcedencia[1][1]:
          arvore.procedencia = 1;
          break;

        default:
          arvore.procedencia = 0;
          break;

      }

      w++;
    }

    console.log(inspect(arvore, false, null, true));
    console.log(token.length - 1);
  
    return arvore; 
  }



  private realizaContas(tokens: IArvore) { }

  private preparaTextoDeVisualizacao(): void { }

  
  public constructor(input: string) {
    this.input = input;    
  }

}

class Calculator extends BlankCalculator {

  protected memoria: Array<TTamMemoria>;
  protected tipoAtual: TTipagem;
  protected numeroCasasDecimais: TNumeroCasaDecimais;

  public constructor(input: string) {
    super(input);
    this.criaArvoreTokens(this.separaTokens(this.input, this.expressaoBusca));
  }

  public defineEspacosMemoria(espacos: TTamMemoria): void {
    this.memoria = new Array(espacos);
  }

  public defineModoAtivo(modo: TTipagem): void {
    this.tipoAtual = modo;
  }

  public defineCasasDecimais(casas: TNumeroCasaDecimais): void {
    this.numeroCasasDecimais = casas;
  }

}

let test = new Calculator("9000+777+45-55+77");
