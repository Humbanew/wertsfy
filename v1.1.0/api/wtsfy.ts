export const wtsfy = {};

type TTamMemoria = 3|4|5|6;
const ETipagem = {
  'standard': '\A', 
  'scientific': '\B', 
  'programmer': '\C', 
  'extreme': '\D'
};
type TTipagem = typeof ETipagem;

class Resources {} 

abstract class Conversor { }

abstract class Calculator extends Conversor {
  protected tipagem: TTipagem;
  protected memoria: Array<number>;
  protected analisador: string = '/(([\(\)\{\}\[\]])?(\d+)([\+\^\-\*\/\%\$]|#sqrt|#cbrt|#sin|#cos|#tan|#sec|#cossec|#cotan)(\d+)([\(\)\{\}\[\]])?)|(([\(\)\{\}\[\]])?([\+\^\-\*\/\%\$]|#sqrt|#cbrt|#sin|#cos|#tan|#sec|#cossec|#cotan)(\d+)([\(\)\{\}\[\]])?)|(([\(\)\{\}\[\]])?(([\+\^\-\*\/\%\$])(#sqrt|#cbrt|#sin|#cos|#tan|#sec|#cossec|#cotan))(\d+)([\(\)\{\}\[\]])?)/gmiv';
  protected modulosAtivos: Object;
  // modulos 
  protected soma = { 'nome': 'Soma', 'funcao': null };
  protected subtracao = { 'nome': 'Subtração', 'funcao': null };
  protected multiplicacao = { 'nome': 'Multiplicação', 'funcao': null };
  protected divisao = { 'nome': 'Divisão', 'funcao': null };
  protected resto = { 'nome': 'Resto', 'funcao': null };
  protected modulo = { 'nome': 'Módulo', 'funcao': null };
  protected potencia = { 'nome': 'Potência', 'funcao': null };
  protected raiz_quadrada = { 'nome': 'Raiz Quadrada', 'funcao': null };
  protected raiz_cubica = { 'nome': 'Raiz Cúbica', 'funcao': null };
  protected seno = { 'nome': 'Seno', 'funcao': null };
  protected cosseno = { 'nome': 'Cosseno', 'funcao': null };
  protected tangente = { 'nome': 'Tangente', 'funcao': null };
  protected secante = { 'nome': 'Secante', 'funcao': null };
  protected cossecante = { 'nome': 'Cossecante', 'funcao': null };
  protected cotangente = { 'nome': 'Cotangente', 'funcao': null };

  constructor(tipagem: TTipagem, tam_memoria: TTamMemoria) {
    super();
      this.tipagem = tipagem;
      this.memoria = new Array(tam_memoria);
  }

  parseTree(): void {
    const filtro: Array<String> = RegExp.prototype.exec(this.analisador);
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

  parseFunctions(active: TTipagem): void {

    if(active.standard == this.tipagem.standard) {
    
      this.modulosAtivos = {
        'soma': this.soma,
        'subtracao': this.subtracao,
        'multiplicacao': this.multiplicacao,
        'divisao': this.divisao,
        'modulo': this.modulo,
        'resto': this.resto,
        'potencia': this.potencia,
        'raiz_quadrada': this.raiz_quadrada,
        'raiz_cubica': this.raiz_cubica
      }
    
    }

    if(active.scientific == this.tipagem.scientific) {
    
      this.modulosAtivos = {
        'soma': this.soma,
        'subtracao': this.subtracao,
        'multiplicacao': this.multiplicacao,
        'divisao': this.divisao,
        'modulo': this.modulo,
        'resto': this.resto,
        'potencia': this.potencia,
        'raiz_quadrada': this.raiz_quadrada,
        'raiz_cubica': this.raiz_cubica,
        'seno': this.seno,
        'cosseno': this.cosseno,
        'tangente': this.tangente,
        'secante': this.secante,
        'cossecante': this.cossecante,
        'cotangente': this.cotangente
      }
    
    }

  }

}

class Aritmeticos extends Calculator {

  constructor(tipagem: TTipagem, tam_memoria: TTamMemoria) {
    super(tipagem, tam_memoria);
  }

}
