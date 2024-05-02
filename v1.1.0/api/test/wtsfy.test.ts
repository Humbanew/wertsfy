import { inspect } from "util";
import { calculator_colors } from "./colors_calculator.json";
process.env.NODE_ENV = "development";

// modulos
import { Aritmeticos } from "../libraries/hub_aritmeticos";
import { RaizQuarta } from "../libraries/components/aritmeticos/cientificos/raiz_quarta";
import { RaizQuinta } from "../libraries/components/aritmeticos/cientificos/raiz_quinta";
import { RaizSexta } from "../libraries/components/aritmeticos/cientificos/raiz_sexta";
import { RaizSetima } from "../libraries/components/aritmeticos/cientificos/raiz_setima";
import { RaizOitava } from "../libraries/components/aritmeticos/cientificos/raiz_oitava";
import { RaizNona } from "../libraries/components/aritmeticos/cientificos/raiz_nona";
import { RaizDecima } from "../libraries/components/aritmeticos/cientificos/raiz_decima";

  // Calculator Module | [#######---] 70%
// modelo revolucionário ainda não implementado na Calculator
type TTamMemoria = 3|4|5|6;
type TNumeroCasaDecimais = 2|4|6|8|10;
type TTipagem = 'standard'|'scientific'|'conversor'|'programmer'|'extreme';

interface IPilha {
  token: string|null;
  procedencia: number|null;
  filho: IPilha|null;
}

interface IModulos { 
  "@soma": typeof Aritmeticos.prototype.soma;
  "@subtracao": typeof Aritmeticos.prototype.subtracao;
  "@multiplicacao": typeof Aritmeticos.prototype.multiplicacao;
  "@divisao": typeof Aritmeticos.prototype.divisao;
  "@resto": typeof Aritmeticos.prototype.resto;
  "@potencia": typeof Aritmeticos.prototype.potencia;
  "@potencia_mais_1": typeof Aritmeticos.prototype.potenciaMais1;
  "@potencia_menos_1": typeof Aritmeticos.prototype.potenciaMenos1;
  "@potencia_de_potencia": typeof Aritmeticos.prototype.potenciaDePotencia;
  "@potencia_de_potencia_mais_1": typeof Aritmeticos.prototype.potenciaDePotenciaMais1;
  "@potencia_de_potencia_menos_1": typeof Aritmeticos.prototype.potenciaDePotenciaMenos1;
  "@raiz_quadrada": typeof Aritmeticos.prototype.raizQuadrada;
  "@raiz_cubica": typeof Aritmeticos.prototype.raizCubica;
  "@raiz_biquadrada": typeof Aritmeticos.prototype.raizBiquadrada;
  "@raiz_bicubica": typeof Aritmeticos.prototype.raizBicubica;
  "@absoluto": typeof Aritmeticos.prototype.absoluto;
  "@porcentagem": typeof Aritmeticos.prototype.porcentagem;
  "@porcentagem_por_1000": typeof Aritmeticos.prototype.porcentagemPor1000;
  "@porcentagem_por_10000": typeof Aritmeticos.prototype.porcentagemPor10000;
  "@porcentagem_por_100000": typeof Aritmeticos.prototype.porcentagemPor100000;

  "@raiz_quarta": typeof RaizQuarta; // #quart
  "@raiz_quinta": typeof RaizQuinta; // #quinrt
  "@raiz_sexta": typeof RaizSexta; // #sexrt
  "@raiz_setima": typeof RaizSetima; // #seprt
  "@raiz_oitava": typeof RaizOitava; // #octort
  "@raiz_nona": typeof RaizNona; // #nonrt
  "@raiz_decima": typeof RaizDecima; // #decrt
}

type TModulos = keyof IModulos;

// Pendências
// [ ] - Método `realizaContas`.

abstract class BlankCalculator extends Aritmeticos {

  protected input: string = "";
  protected valorResultado: number = undefined;
  protected capturador: RegExp  = /([\(\)\[\]\{\}])|([\+\-\/\*\^\$\%])|(\d+)|(\<(\d+([.]\d+)?)\>)|(\<(\d+([.]\d+)?)\,\s{(\d+(\,\s)?)+}\>)|({(\d+(\,\s)?)+})|(#sin)|(#cos)|(#tan)|(#sec)|(#cosec)|(#cotan)|(#sqrt)|(#cbrt)|(#sqrt2)|(#cbrt2)|(#perc)|(#percM)|(#percDM)|(#percCM)|(#powM1)|(#powm1)|(#powofpowM1)|(#powofpowm1)|(#quart)|(#quinrt)|(#sexrt)|(#seprt)|(#octort)|(#nonrt)|(#decrt)/gim;
  
  // reparar esta funcionalidade
  protected separaTokens = (input: string): Array<string> => {
    let result = input.match(this.capturador), tokens: string[];
    tokens = result;
    console.log("\x1b[31;1m"+tokens+"\x1b[0m");
    return tokens;
  }

  protected criaArvoreTokens = (token: Array<string>): IPilha => { 
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

    let arvore: IPilha = Object.prototype.constructor();
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

      if(
        token[w] === listaProcedencia[5][0] ||
        token[w] === listaProcedencia[5][1] ||
        token[w] === listaProcedencia[5][2] ||
        token[w] === listaProcedencia[5][3] ||
        token[w] === listaProcedencia[5][4] ||
        token[w] === listaProcedencia[5][5]
      ) {
        arvore.procedencia = 5;
      }

      if(
        token[w] === listaProcedencia[4][0] ||
        token[w] === listaProcedencia[4][1] ||
        token[w] === listaProcedencia[4][2] ||
        token[w] === listaProcedencia[4][3] ||
        token[w] === listaProcedencia[4][4] ||
        token[w] === listaProcedencia[4][5] ||
        token[w] === listaProcedencia[4][6] ||
        token[w] === listaProcedencia[4][7]
      ) {
        arvore.procedencia = 4;
      }

      if(
        token[w] === listaProcedencia[3][0] ||
        token[w] === listaProcedencia[3][1] ||
        token[w] === listaProcedencia[3][2]
      ) {
        arvore.procedencia = 3;
      }

      if(
        token[w] === listaProcedencia[2][0] ||
        token[w] === listaProcedencia[2][1]
      ) {
        arvore.procedencia = 2;
      }

      if(
        token[w] === listaProcedencia[1][0] ||
        token[w] === listaProcedencia[1][1]
      ) {
        arvore.procedencia = 1;
      }

      arvore.procedencia = 0;

      w++;
    }

    console.log(inspect(arvore, false, null, true));
    console.log(token.length - 1);
  
    return arvore; 
  }

  // ainda parcialmente implementado
  protected realizaContas(tokens: IPilha, ordenacao: 'rtl'|'ltr'): number { 
    this.valorResultado = 0;

    let matrizOperacional: number[][]|string[][];
    
    if(ordenacao === 'ltr') { 
      this.valorResultado = parseFloat(tokens.token);
      
    }

    while(tokens.filho !== null) {
      tokens = tokens.filho;
    }
    
    return this.valorResultado; 
  }

  protected preparaTextoDeVisualizacao(): void {
    let elementos = this.separaTokens(this.input);
    let expressao: string = "";

    for(let i = 0; i < elementos.length; i++) {

      switch(elementos[i]) {
        case '(':
          expressao += calculator_colors.tokens["'('|')'"]+elementos[i]+calculator_colors.end_text;
          break;
        case ')':
          expressao += calculator_colors.tokens["'('|')'"]+elementos[i]+calculator_colors.end_text;
          break;
        case '[':
          expressao += calculator_colors.tokens["'['|']'"]+elementos[i]+calculator_colors.end_text;
          break;
        case ']':
          expressao += calculator_colors.tokens["'['|']'"]+elementos[i]+calculator_colors.end_text;
          break;
        case '{':
          expressao += calculator_colors.tokens["'{'|'}'"]+elementos[i]+calculator_colors.end_text;
          break;
        case '}':
          expressao += calculator_colors.tokens["'{'|'}'"]+elementos[i]+calculator_colors.end_text;
          break;
        case '+':
          expressao += calculator_colors.tokens["'+'|'-'"]+elementos[i]+calculator_colors.end_text;
          break;
        case '-':
          expressao += calculator_colors.tokens["'+'|'-'"]+elementos[i]+calculator_colors.end_text;
          break;
        case '*':
          expressao += calculator_colors.tokens["'*'|'/'"]+elementos[i]+calculator_colors.end_text;
          break;
        case '/':
          expressao += calculator_colors.tokens["'*'|'/'"]+elementos[i]+calculator_colors.end_text;
          break;
        case '^':
          expressao += calculator_colors.tokens["'^'|'$'|'%'"]+elementos[i]+calculator_colors.end_text;
          break;
        case '$':
          expressao += calculator_colors.tokens["'^'|'$'|'%'"]+elementos[i]+calculator_colors.end_text;
          break;
        case '%':
          expressao += calculator_colors.tokens["'^'|'$'|'%'"]+elementos[i]+calculator_colors.end_text;
          break;
        default:
          expressao += calculator_colors.tokens["'#<special_function>'"]+elementos[i]+calculator_colors.end_text;
          break;

      }

    }

    console.log("\n\t"+expressao+"\n");
  }
  
  protected calculaIndividualmente(
    modulo: TModulos, 
    execAttrs: {x: number, y?: number},
    execAttrsPotofPot?: {x: number, y: number[]}
  ): number {
    let exec: IModulos, result: number = 0;

    switch(modulo) {
      case "@soma":
        result = exec["@soma"](execAttrs.x, execAttrs.y);
        break;
      case "@subtracao":
        result = exec["@subtracao"](execAttrs.x, execAttrs.y);
        break;
      case "@multiplicacao":
        result = exec["@multiplicacao"](execAttrs.x, execAttrs.y);
        break;
      case "@divisao":
        result = exec["@divisao"](execAttrs.x, execAttrs.y);
        break;
      case "@resto":
        result = exec["@resto"](execAttrs.x, execAttrs.y);
        break;
      case "@potencia":
        result = exec["@potencia"](execAttrs.x, execAttrs.y);
        break;
      case "@potencia_mais_1":
        result = exec["@potencia_mais_1"](execAttrs.x, execAttrs.y);
        break;
      case "@potencia_menos_1":
        result = exec["@potencia_menos_1"](execAttrs.x, execAttrs.y);
        break;
      case "@potencia_de_potencia":
        result = exec["@potencia_de_potencia"](execAttrsPotofPot.x, execAttrsPotofPot.y);
        break;
      case "@potencia_de_potencia_mais_1":
        result = exec["@potencia_de_potencia_mais_1"](execAttrsPotofPot.x, execAttrsPotofPot.y);
        break;
      case "@potencia_de_potencia_menos_1":
        result = exec["@potencia_de_potencia_menos_1"](execAttrsPotofPot.x, execAttrsPotofPot.y);
        break;
      case "@raiz_quadrada":
        result = exec["@raiz_quadrada"](execAttrs.x);
        break;
      case "@raiz_cubica":
        result = exec["@raiz_cubica"](execAttrs.x);
        break;
      case "@raiz_biquadrada":
        result = exec["@raiz_biquadrada"](execAttrs.x);
        break;
      case "@raiz_bicubica":
        result = exec["@raiz_bicubica"](execAttrs.x);
        break;
      case "@absoluto":
        result = exec["@absoluto"](execAttrs.x);
        break;
      case "@porcentagem":
        result = exec["@porcentagem"](execAttrs.x);
        break;
      case "@porcentagem_por_1000":
        result = exec["@porcentagem_por_1000"](execAttrs.x);
        break;
      case "@porcentagem_por_10000":
        result = exec["@porcentagem_por_10000"](execAttrs.x);
        break;
      case "@porcentagem_por_100000":
        result = exec["@porcentagem_por_100000"](execAttrs.x);
        break;
    }

    return result;
  }

  protected constructor(input: string) {
    super();
    this.input = input;    
  }

}

class Calculator extends BlankCalculator {

  protected memoria: Array<TTamMemoria>;
  protected tipoAtual: TTipagem;
  protected numeroCasasDecimais: TNumeroCasaDecimais;

  public constructor(input: string) {
    super(input);
    let tkns = this.criaArvoreTokens(this.separaTokens(this.input));
    // this.realizaContas(tkns, 'rtl');
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

let test = new Calculator("(22+2)+6");
