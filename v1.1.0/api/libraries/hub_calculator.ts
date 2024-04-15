/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

type TTamMemoria = 3|4|5|6;
type TTipagem = 'standard'|'scientific'|'conversor'|'programmer'|'extreme';

export class Calculator {
  protected entrada: string;
  protected saida: number;
  protected tipagem: TTipagem;
  protected memoria: Array<number>;
  protected analisadores = [
    /([\{\}\[\]\(\)]{1,})?((\d+)([\+\-\/\*\^\$\%]|\^\^)?(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?)([\{\}\[\]\(\)]{1,})?|(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?(\d+)/gmi,
    /(\#[a-z]+)/gmi
  ];
  protected modulosAtivos: Array<Object>;

  constructor(entrada: string, tipagem: TTipagem, tam_memoria: TTamMemoria) {
    this.entrada = entrada;
    this.tipagem = tipagem;
    this.memoria = new Array(tam_memoria);
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

  protected parseFuncionalidades(active: TTipagem): void {

    if (active === 'standard') { }
    if (active === 'scientific') { }

  }

  public calculaIndividualmente(): void {}

}
