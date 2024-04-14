type TTamMemoria = 3|4|5|6;
type TTipagem = 'standard'|'scientific'|'conversor'|'programmer'|'extreme';

export class Calculator {
  protected entrada: string;
  protected saida: number;
  protected tipagem: TTipagem;
  protected memoria: Array<number>;
  protected analisadores = [
    /([\{\}\[\]\(\)]{1,})?((\d+)([\+\-\/\*\^\$\%])?(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?)([\{\}\[\]\(\)]{1,})?/gmi,
    /(\#[a-z]+)/gmi
  ];
  protected modulosAtivos: Array<Object>;

  constructor(entrada: string, tipagem: TTipagem, tam_memoria: TTamMemoria) {
    this.entrada = entrada;
    this.tipagem = tipagem;
    this.memoria = new Array(tam_memoria);
  }

  protected parseArvoreTokens(tokens: Array<String>): void {
    const filtro = this.separaTokens(this.entrada, this.analisadores);
    const listaProcedencia = [
      ['{', '}'], // maior nível de procedência '6'
      ['[', ']'], // nivel de procedência '5'
      ['(', ')'], // nivel de procedência '4'
      ['#sin', '#cos', '#tan', '#sec', '#cosec', '#cotan', '#sqrt', '#cbrt'], // nivel de procedência '3'
      ['^', '$'], // nivel de procedência '2'
      ['*', '/'], // nivel de procedência '1'
      ['+', '-'], // nivel de procedência '0'
    ];
    const arvore: Array<Object> = [{}];
  }

  protected separaTokens = (input: string, regex: Array<RegExp>): Array<String> => {
    let result = input.match(regex[0]);
    let tokens = [];
    result.forEach((element) => {
      for(let i = 0; i < element.length; i++) {
        if(element.slice(i, i+1) === "#") {
          tokens.push(element.match(regex[1]).toString());
          return;
        }
        tokens.push(element.slice(i, i+1));
      }
    });
    return tokens;
  }

  public parseFuncionalidades(active: TTipagem): void {

    if (active === 'standard') { }
    if (active === 'scientific') { }

  }

}
