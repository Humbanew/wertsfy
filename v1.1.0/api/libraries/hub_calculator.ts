/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

// Modelo construído ainda em 95%. 
import { inspect } from "util";
import { calculator_colors } from "./colors_calculator.json";
import { Aritmeticos } from "../libraries/hub_aritmeticos";
process.env.NODE_ENV = "development";

  // Calculator Module | [#########-] 95%
// modelo revolucionário ainda não implementado na Calculator
type TTamMemoria = 3|4|5|6;
type TNumeroCasaDecimais = 2|4|6|8|10;
type TTipagem = 'standard'|'scientific'|'conversor'|'programmer'|'extreme';

interface IPilha {
  token: string|null;
  procedencia: number|string|null;
  filho: IPilha|null;
}

interface IModulos { 
  "@soma": typeof Aritmeticos.prototype.Comuns.soma;
  "@subtracao": typeof Aritmeticos.prototype.Comuns.subtracao;
  "@multiplicacao": typeof Aritmeticos.prototype.Comuns.multiplicacao;
  "@divisao": typeof Aritmeticos.prototype.Comuns.divisao;
  "@resto": typeof Aritmeticos.prototype.Comuns.resto;
  "@potencia": typeof Aritmeticos.prototype.Comuns.potencia;
  "@potencia_mais_1": typeof Aritmeticos.prototype.Comuns.potenciaMais1;
  "@potencia_menos_1": typeof Aritmeticos.prototype.Comuns.potenciaMenos1;
  "@potencia_de_potencia": typeof Aritmeticos.prototype.Comuns.potenciaDePotencia;
  "@potencia_de_potencia_mais_1": typeof Aritmeticos.prototype.Comuns.potenciaDePotenciaMais1;
  "@potencia_de_potencia_menos_1": typeof Aritmeticos.prototype.Comuns.potenciaDePotenciaMenos1;
  "@raiz_quadrada": typeof Aritmeticos.prototype.Comuns.raizQuadrada;
  "@raiz_cubica": typeof Aritmeticos.prototype.Comuns.raizCubica;
  "@raiz_biquadrada": typeof Aritmeticos.prototype.Comuns.raizBiquadrada;
  "@raiz_bicubica": typeof Aritmeticos.prototype.Comuns.raizBicubica;
  "@absoluto": typeof Aritmeticos.prototype.Comuns.absoluto;
  "@porcentagem": typeof Aritmeticos.prototype.Comuns.porcentagem;
  "@porcentagem_por_1000": typeof Aritmeticos.prototype.Comuns.porcentagemPor1000;
  "@porcentagem_por_10000": typeof Aritmeticos.prototype.Comuns.porcentagemPor10000;
  "@porcentagem_por_100000": typeof Aritmeticos.prototype.Comuns.porcentagemPor100000;
  "@raiz_quarta": typeof Aritmeticos.prototype.Cientificos.raizQuarta;
  "@raiz_quinta": typeof Aritmeticos.prototype.Cientificos.raizQuinta;
  "@raiz_sexta": typeof Aritmeticos.prototype.Cientificos.raizSexta;
  "@raiz_setima": typeof Aritmeticos.prototype.Cientificos.raizSetima;
  "@raiz_oitava": typeof Aritmeticos.prototype.Cientificos.raizOitava;
  "@raiz_nona": typeof Aritmeticos.prototype.Cientificos.raizNona;
  "@raiz_decima": typeof Aritmeticos.prototype.Cientificos.raizDecima;
}

type TModulos = keyof IModulos;

// Pendências
// [ ] - Método `realizaContas`.

abstract class BlankCalculator extends Aritmeticos {

  protected input: string = "";
  protected valorResultado: number = undefined;
  protected capturador: RegExp  = /([\(\)\[\]\{\}])|([\+\-\/\*\^\$\%])|(\d+)|(\<(\d+([.]\d+)?)\>)|(\<\d+([.]\d+)?\,\s\&\&(\d+([.]\d+)?(\,\s)?)+\&\&\>)|(([a-z]\^?(\d+)?)([\+\-]?)(\d+)?)+|(#sin)|(#cos)|(#tan)|(#sec)|(#cosec)|(#cotan)|(#sqrt)|(#cbrt)|(#sqrt2)|(#cbrt2)|(#perc)|(#percM)|(#percDM)|(#percCM)|(#powM1)|(#powm1)|(#powofpowM1)|(#powofpowm1)|(#quart)|(#quinrt)|(#sexrt)|(#seprt)|(#octort)|(#nonrt)|(#decrt)/gim;


  protected separaTokens = (input: string): Array<string> => {
    let result = input.match(this.capturador), tokens: string[];
    tokens = [];
    for(let i = 0; i < result.length; i++) {
      if(result[i].length > 1 && result[i].slice(0, 1) != "#" && Number.isNaN(parseFloat(result[i]))){
        for(let j = 0; j < result[i].length; j++) {
          tokens.push(result[i][j]);
        }
      } else {
        tokens.push(result[i]);
      }
    }
    return tokens;
  }

  protected criaPilhasTokens = (token: Array<string>): Object => { 
    const listaProcedencia = {
      1: [
        '+', 
        '-'
      ],
      2: [
        '*', 
        '/'
      ],
      3: [
        '^', 
        '$', 
        '%'
      ],
      4: [
        '#sin', 
        '#cos', 
        '#tan', 
        '#sec', 
        '#cosec', 
        '#cotan', 
        '#sqrt', 
        '#cbrt', 
        '#sqrt2', 
        '#cbrt2',
        '#perc',
        '#percM',
        '#percDM',
        '#percCM',
        '#powM1',
        '#powm1',
        // '#powofpowM1',
        // '#powofpowm1',
        '#quart',
        '#quinrt',
        '#sexrt',
        '#seprt',
        '#octort',
        '#nonrt',
        '#decrt'
      ],
      5: [
        '(', 
        ')', 
        '[', 
        ']', 
        '{', 
        '}'
      ],
      'K': [
        '<', 
        '>'
      ]
    };

    let ordenados = { 'ltr': null, 'rtl': null }
    let arvore: IPilha = Object.prototype.constructor();
    let w = token.length-1;
    
    while(w >= 0) {

      arvore = {
        token: token[w],
        procedencia: null,
        filho: arvore
      }

      if(
        token[w] == listaProcedencia['K'][0] ||
        token[w] == listaProcedencia['K'][1]
      ) {
        arvore.procedencia = 'K';
      } else if(
        token[w] == listaProcedencia[5][0] ||
        token[w] == listaProcedencia[5][1] ||
        token[w] == listaProcedencia[5][2] ||
        token[w] == listaProcedencia[5][3] ||
        token[w] == listaProcedencia[5][4] ||
        token[w] == listaProcedencia[5][5]
      ) {
        arvore.procedencia = 5;
      } else if(
        token[w] == listaProcedencia[4][0] ||
        token[w] == listaProcedencia[4][1] ||
        token[w] == listaProcedencia[4][2] ||
        token[w] == listaProcedencia[4][3] ||
        token[w] == listaProcedencia[4][4] ||
        token[w] == listaProcedencia[4][5] ||
        token[w] == listaProcedencia[4][6] ||
        token[w] == listaProcedencia[4][7] ||
        token[w] == listaProcedencia[4][8] ||
        token[w] == listaProcedencia[4][9]
      ) {
        arvore.procedencia = 4;
      } else if(
        token[w] == listaProcedencia[3][0] ||
        token[w] == listaProcedencia[3][1] ||
        token[w] == listaProcedencia[3][2]
      ) {
        arvore.procedencia = 3;
      } else if(
        token[w] == listaProcedencia[2][0] ||
        token[w] == listaProcedencia[2][1]
      ) {
        arvore.procedencia = 2;
      } else if(
        token[w] == listaProcedencia[1][0] ||
        token[w] == listaProcedencia[1][1]
      ) {
        arvore.procedencia = 1;
      } else {
        arvore.procedencia = 0;
      }

      if(w == token.length-1) arvore.filho = null;

      w--;
    }
    ordenados.ltr = arvore;
    w = 0;
    while(w < token.length) {
        
        arvore = {
          token: token[w],
          procedencia: null,
          filho: arvore
        }
  
        if(
          token[w] == listaProcedencia['K'][0] ||
          token[w] == listaProcedencia['K'][1]
        ) {
          arvore.procedencia = 'K';
        } else if(
          token[w] == listaProcedencia[5][0] ||
          token[w] == listaProcedencia[5][1] ||
          token[w] == listaProcedencia[5][2] ||
          token[w] == listaProcedencia[5][3] ||
          token[w] == listaProcedencia[5][4] ||
          token[w] == listaProcedencia[5][5]
        ) {
          arvore.procedencia = 5;
        } else if(
          token[w] == listaProcedencia[4][0] ||
          token[w] == listaProcedencia[4][1] ||
          token[w] == listaProcedencia[4][2] ||
          token[w] == listaProcedencia[4][3] ||
          token[w] == listaProcedencia[4][4] ||
          token[w] == listaProcedencia[4][5] ||
          token[w] == listaProcedencia[4][6] ||
          token[w] == listaProcedencia[4][7] ||
          token[w] == listaProcedencia[4][8] ||
          token[w] == listaProcedencia[4][9]
        ) {
          arvore.procedencia = 4;
        } else if(
          token[w] == listaProcedencia[3][0] ||
          token[w] == listaProcedencia[3][1] ||
          token[w] == listaProcedencia[3][2]
        ) {
          arvore.procedencia = 3;
        } else if(
          token[w] == listaProcedencia[2][0] ||
          token[w] == listaProcedencia[2][1]
        ) {
          arvore.procedencia = 2;
        } else if(
          token[w] == listaProcedencia[1][0] ||
          token[w] == listaProcedencia[1][1]
        ) {
          arvore.procedencia = 1;
        } else {
          arvore.procedencia = 0;
        }

        if(w == 0) arvore.filho = null;

        w++;
    }
    ordenados.rtl = arvore;
    return ordenados; 
  }

  // ainda não implementado
  protected realizaContas(tokens: Object, ordenacao: 'rtl'|'ltr'): number { 
    this.valorResultado = 0;

    console.log(inspect(tokens, false, null, true)); 

    if(ordenacao == 'ltr') {}
    if(ordenacao == 'rtl') {}

    return this.valorResultado; 
  }

  protected preparaTextoDeVisualizacao(): void {
    let elementos = this.separaTokens(this.input);
    let expressao: string = "", escapeActive = "\x1b[";

    for(let i = 0; i < elementos.length; i++) {

      if(
        elementos[i] == '(' ||
        elementos[i] == ')'
      ) {
        expressao += escapeActive+calculator_colors.tokens["'('|')'"].escape_format.frgd+elementos[i]+escapeActive+calculator_colors.end_text.escape_format;
      }

      if(
        elementos[i] == '[' || 
        elementos[i] == ']'
      ) {
        expressao += escapeActive+calculator_colors.tokens["'['|']'"].escape_format.frgd+elementos[i]+escapeActive+calculator_colors.end_text.escape_format;
      }

      if(
        elementos[i] == '{' || 
        elementos[i] == '}'
      ) {
        expressao += escapeActive+calculator_colors.tokens["'{'|'}'"].escape_format.frgd+elementos[i]+escapeActive+calculator_colors.end_text.escape_format;
      }

      if(
        elementos[i] == '+' || 
        elementos[i] == '-'
      ) {
        expressao += escapeActive+calculator_colors.tokens["'+'|'-'"].escape_format.frgd+elementos[i]+escapeActive+calculator_colors.end_text.escape_format;
      }

      if(
        elementos[i] == '*' || 
        elementos[i] == '/'
      ) {
        expressao += escapeActive+calculator_colors.tokens["'*'|'/'"].escape_format.frgd+elementos[i]+escapeActive+calculator_colors.end_text.escape_format;
      }

      if(
        elementos[i] == '^' || 
        elementos[i] == '$' || 
        elementos[i] == '%'
      ) {
        expressao += escapeActive+calculator_colors.tokens["'^'|'$'|'%'"].escape_format.frgd+elementos[i]+escapeActive+calculator_colors.end_text.escape_format;
      }

      if(
        elementos[i] == '#sin' ||
        elementos[i] == '#cos' ||
        elementos[i] == '#tan' ||
        elementos[i] == '#sec' ||
        elementos[i] == '#cosec' ||
        elementos[i] == '#cotan' ||
        elementos[i] == '#sqrt' ||
        elementos[i] == '#sqrt2' ||
        elementos[i] == '#cbrt' ||
        elementos[i] == '#cbrt2'
      ) {
        expressao += escapeActive+calculator_colors.tokens["'#<special_function>'"].escape_format.frgd+elementos[i]+escapeActive+calculator_colors.end_text.escape_format;
      }

      if(
        elementos[i] == '<' || 
        elementos[i] == '>'
      ) { 
        expressao += escapeActive+calculator_colors.tokens["'<'|'>'"].escape_format.frgd+elementos[i]+escapeActive+calculator_colors.end_text.escape_format;
      }

      if(parseFloat(elementos[i])) { 
        expressao += elementos[i]; 
      }

    }

    console.log("\n\t"+expressao+"\n");
  }
  
  protected calculaIndividualmente(modulo: TModulos, execAttrs: {x: number, y?: number}, execAttrsPotofPot?: {x: number, y: number[]}): number {
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
      case "@raiz_quarta":
        result = exec["@raiz_quarta"](execAttrs.x);
        break;
      case "@raiz_quinta":
        result = exec["@raiz_quinta"](execAttrs.x);
        break;
      case "@raiz_sexta":
        result = exec["@raiz_sexta"](execAttrs.x);
        break;
      case "@raiz_setima":
        result = exec["@raiz_setima"](execAttrs.x);
        break;
      case "@raiz_oitava":
        result = exec["@raiz_oitava"](execAttrs.x);
        break;
      case "@raiz_nona":
        result = exec["@raiz_nona"](execAttrs.x);
        break;
      case "@raiz_decima":
        result = exec["@raiz_decima"](execAttrs.x);
        break;
      
    }

    return result;
  }

  protected constructor(input: string) {
    super();
    this.input = input;    
  }

}

export class Calculator extends BlankCalculator {

  protected memoria: Array<TTamMemoria>;
  protected tipoAtual: TTipagem;
  protected numeroCasasDecimais: TNumeroCasaDecimais;

  public constructor(input: string) {
    super(input);
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
