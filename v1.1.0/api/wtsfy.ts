export const wtsfy = {};

type TTamMemoria = 3|4|5|6;
type TTipagem = 'standard'
  |'scientific'
  |'conversor'
  |'programmer'
  |'extreme';

interface IFuncionalide {
  nome: string;
  ativo: boolean;
  assinatura: Function|Number|String;
}

abstract class Conversor { }

abstract class Calculator extends Conversor {
  protected entrada: string;
  public saida: string;
  protected tipagem: TTipagem;
  protected memoria: Array<number>;
  protected analisador = /([\[\]\{\}\(\)]{1,})?(\d+)([\[\]\{\}\(\)]{1,})?([\+\-\/\*\^\%\$]|#sqrt|#cbrt|#sin|#cos|#tan|#sec|#cosec|#cotan([\[\]\{\}\(\)]{1,})?(\d+)([\[\]\{\}\(\)]{1,})?)?/gmi;
  protected modulosAtivos: Array<Object>;

  constructor(entrada: string, tipagem: TTipagem, tam_memoria: TTamMemoria) {
    super();
    this.entrada = entrada;
    this.tipagem = tipagem;
    this.memoria = new Array(tam_memoria);
  }

  protected parseArvoreTokens(): void {
    const filtro = this.entrada.match(this.analisador);
    const listaProcedencia = [
      [
        '(',
        ')'
      ],
      [
        '{', 
        '}'
      ],
      [
        '[', 
        ']'
      ],
      [
        '^'
      ],
      [
        '*', 
        '/', 
        '%'
      ],
      [
        '+', 
        '-'
      ],
      [
        '#sqrt', 
        '#cbrt', 
        '#sin', 
        '#cos', 
        '#tan', 
        '#sec', 
        '#cossec', 
        '#cotan'
      ]
    ];
  }

  protected separaTokens = (input: string, regex: RegExp) => {
    let result = input.match(regex);
    let tokens = [];
    console.log(result);
    result.forEach((element) => {
      for(let i = 0; i < element.length; i++) {
        tokens.push(element.slice(i, i+1));
      }
    });
    console.log(tokens);
  }

  public parseFuncionalidades(active: TTipagem): void {

    if(active === 'standard') { }
    if(active === 'scientific') { }

  }

}

class Aritmeticos extends Calculator {

  constructor(entrada: string, tipagem: TTipagem, tam_memoria: TTamMemoria) {
    super(entrada, tipagem, tam_memoria);
  }

}
