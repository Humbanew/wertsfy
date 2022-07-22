import { CBRT1, CBRT10, CBRT2, CBRT3, CBRT4, CBRT5, CBRT6, CBRT7, CBRT8, CBRT9, E, LN10, LN2, LOG10E, LOG2E, MAX_VALUE, MIN_VALUE, NA, NEWTON, PI, PLANCK, SQRT1, SQRT10, SQRT2, SQRT3, SQRT4, SQRT5, SQRT6, SQRT7, SQRT8, SQRT9, TESLA } from './wmath.def';

class wMath {

  protected prop = [ { regexps: { trigonometricos: /(\.)/gi, arcTrigonometricos: /(\.)?/gi } } ];

  /** @description Constante PI. */
  public pi = PI;

  /** @description Constante Euler. */
  public euler = E;

  /** @description Contante Plank. */
  public plank = PLANCK;

  /** @description Constante Avogadro. */
  public avogadro = NA;

  /** @description Constante Newton. */
  public newton = NEWTON;

  /** @description Constante Tesla. */
  public tesla = TESLA;

  /** @description Constante da raiz quadrada de 1. */
  public sqrt1 = SQRT1;

  /** @description Constante da raiz quadrada de 2. */
  public sqrt2 = SQRT2;

  /** @description Constante da raiz quadrada de 3. */
  public sqrt3 = SQRT3;

  /** @description Constante da raiz quadrada de 4. */
  public sqrt4 = SQRT4;

  /** @description Constante da raiz quadrada de 5. */
  public sqrt5 = SQRT5;

  /** @description Constante da raiz quadrada de 6. */
  public sqrt6 = SQRT6;

  /** @description Constante da raiz quadrada de 7. */
  public sqrt7 = SQRT7;

  /** @description Constante da raiz quadrada de 8. */
  public sqrt8 = SQRT8;

  /** @description Constante da raiz quadrada de 9. */
  public sqrt9 = SQRT9;

  /** @description Constante da raiz quadrada de 10. */
  public sqrt10 = SQRT10;

  /** @description Constante da raiz cúbica de 1. */
  public cbrt1 = CBRT1;

  /** @description Constante da raiz cúbica de 2. */
  public cbrt2 = CBRT2;

  /** @description Constante da raiz cúbica de 3. */
  public cbrt3 = CBRT3;

  /** @description Constante da raiz cúbica de 4. */
  public cbrt4 = CBRT4;

  /** @description Constante da raiz cúbica de 5. */
  public cbrt5 = CBRT5;

  /** @description Constante da raiz cúbica de 6. */
  public cbrt6 = CBRT6;

  /** @description Constante da raiz cúbica de 7. */
  public cbrt7 = CBRT7;

  /** @description Constante da raiz cúbica de 8. */
  public cbrt8 = CBRT8;

  /** @description Constante da raiz cúbica de 9. */
  public cbrt9 = CBRT9;

  /** @description Constante da raiz cúbica de 10. */
  public cbrt10 = CBRT10;

  /** @description Constante do logarítmo natural de 2. */
  public ln2 = LN2;

  /** @description Constante do logarítmo natural de 10. */
  public ln10 = LN10;

  /** @description Constante do logarítmo de euler na base 2. */
  public log2e = LOG2E;

  /** @description Constante do logarítmo de euler na base 10. */
  public log10e = LOG10E;

  /** @description Constante do máximo valor possível. */
  public maxValue = MAX_VALUE;

  /** @description Constante do mínimo valor possível. */
  public minValue = MIN_VALUE;

  /**
   *  @augments x entrada do cálculo. **[ Type: ``number`` ]**
   *  @description Retorna o valor absoluto de um número. 
   */
  public abs(x: number): number {
    return x < 0 ? -1 * x : x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor absoluto de um número, porém negado. 
   */
  public absNeg(x: number): number {
    return -1 * (x < 0 ? -1 * x : x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz quadrada de um número. 
   */
  public sqrt(x: number): number {
    return x ** (1 / 2);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz quadrada de um número, porém negado. 
   */
  public sqrtNeg(x: number): number {
    return -1 * (x ** (1 / 2));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz cúbica de um número.
   */
  public cbrt(x: number): number {
    return x ** (1 / 3);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz cúbica de um número, porém negado. 
   */
  public cbrtNeg(x: number): number {
    return -1 * (x ** (1 / 3));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à quarta potência de um número. 
   */
  public quart(x: number): number {
    return x ** (1 / 4);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à quarta potência de um número, porém negado. 
   */
  public quartNeg(x: number): number {
    return -1 * (x ** (1 / 4));
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]** 
   * @description Retorna o valor da raiz à quinta potência de um número. 
   */
  public quint(x: number): number {
    return x ** (1 / 5);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à quinta potência de um número, porém negado. 
   */
  public quintNeg(x: number): number {
    return -1 * (x ** (1 / 5));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à sexta potência de um número. 
   */
  public sext(x: number): number {
    return x ** (1 / 6);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à sexta potência de um número, porém negado. 
   */
  public sextNeg(x: number): number {
    return -1 * (x ** (1 / 6));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à sétima potência de um número. 
   */
  public sept(x: number): number {
    return x ** (1 / 7);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à sétima potência de um número, porém negado. 
   */
  public septNeg(x: number): number {
    return -1 * (x ** (1 / 7));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à oitava potência de um número. 
   */
  public oct(x: number): number {
    return x ** (1 / 8);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à oitava potência de um número, porém negado. 
   */
  public octNeg(x: number): number {
    return -1 * (x ** (1 / 8));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à nona potência de um número. 
   */
  public non(x: number): number {
    return x ** (1 / 9);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à nona potência de um número, porém negado. 
   */
  public nonNeg(x: number): number {
    return -1 * (x ** (1 / 9));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à décima potência de um número. 
   */
  public dec(x: number): number {
    return x ** (1 / 10);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à décima potência de um número, porém negado. 
   */
  public decNeg(x: number): number {
    return -1 * (x ** (1 / 10));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de um número. 
   */
  public pow(x: number, y: number): number {
    return x ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de um número, porém negada. 
   */
  public powNeg(x: number, y: number): number {
    return -1 * (x ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de dois. 
   */
  public pow2(x: number): number {
    return 2 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de dois, porém negada. 
   */
  public pow2Neg(x: number): number {
    return -1 * (2 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de três. 
   */
  public pow3(x: number): number {
    return 3 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de três, porém negada. 
   */
  public pow3Neg(x: number): number {
    return -1 * (3 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de quatro. 
   */
  public pow4(x: number): number {
    return 4 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de quatro, porém negada. 
   */
  public pow4Neg(x: number): number {
    return -1 * (4 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de cinco. 
   */
  public pow5(x: number): number {
    return 5 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de cinco, porém negada. 
   */
  public pow5Neg(x: number): number {
    return -1 * (5 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de seis. 
   */
  public pow6(x: number): number {
    return 6 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de seis, porém negada. 
   */
  public pow6Neg(x: number): number {
    return -1 * (6 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de sete. 
   */
  public pow7(x: number): number {
    return 7 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de sete, porém negada. 
   */
  public pow7Neg(x: number): number {
    return -1 * (7 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de oito. 
   */
  public pow8(x: number): number {
    return 8 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de oito, porém negada. 
   */
  public pow8Neg(x: number): number {
    return -1 * (8 ** x);
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de nove. 
   */
  public pow9(x: number): number {
    return 9 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de nove, porém negada. 
   */
  public pow9Neg(x: number): number {
    return -1 * (9 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de dez. 
   */
  public pow10(x: number): number {
    return 10 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de dez, porém negada. 
   */
  public pow10Neg(x: number): number {
    return -1 * (10 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de potência um número. 
   */
  public powOfPow(x: number, y: number, z?: number[]): number {
    let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
    return x ** (y ** l);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de potência um número, porém negada. 
   */
  public powOfPowNeg(x: number, y: number, z?: number[]): number {
    let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
    return -1 * (x ** (y ** l));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o maior número de uma sequência. 
   */
  public max(x: number[]): number {
    let max = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] > max) { max = x[i]; }
    }
    return max;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o menor número de uma sequência. 
   */
  public min(x: number[]): number {
    let min = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] < min) { min = x[i]; }
    }
    return min;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor arredondado pra baixo de um número. 
   */
  public round(x: number): number {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    const resultado = verificador.exec(x.toString());
    return parseInt(resultado[0]);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor arredondado pra cima de um número. 
   */
  public fround(x: number): number {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    const resultado = verificador.exec(x.toString());
    if (parseFloat(resultado[1]) >= 0.5) {
      return parseInt(resultado[0] + 1);
    }
    return parseInt(resultado[0]);
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna um símbolo dizendo o sinal do número.
   */
  public sign(x: number): number {
    if (x > 0) {
      return 1;
    }
    if (x < 0) {
      return -1;
    }
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor sem partes de pronto flutuante de um número.
   */
  public trunc(x: number): number {
    return parseInt(x.toString());
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor de uma multiplicação de inteiro de 32-bit.
   */
  public imul(x: number, y: number): number {
    return x * y;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o menor inteiro que é menor ou igual a um número.
   */
  public ceil(x: number): number {
    if (x < x + 0.5) {
      return parseInt(x.toString());
    }
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o maior inteiro que é maior ou igual a um número.
   */
  public floor(x: number): number {
    if (x > x + 0.5) {
      return parseInt(x.toString());
    }
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do seno de um número. 
   */
  public sin(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if(scan == true) { return NaN; } 
    
    const resultado: number = (((2 * WMath.pi * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do cosseno de um número.
   */
  protected cos(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = (-1 * (((2 * WMath.pi * 1) / 4) / 90)) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da tangente de um número.
   */
  protected tan(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }
    
    const resultado: number = WMath.sin(x) / WMath.cos(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da secante de um número.
   */
  protected sec(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / WMath.cos(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da cosecante de um número.
   */
  protected cosec(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / WMath.sin(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da cotangente de um número.
   */
  protected cotan(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (WMath.cos(x) / WMath.sin(x));
    return resultado;
  }
  
  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do seno hiperbólico de um número.
   */
  protected sinh(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (((2 * WMath.pi * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do cosseno hiperbólico de um número.
   */
  protected cosh(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (-1 * ((2 * WMath.pi * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da tangente hiperbólica de um número.
   */
  protected tanh(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (WMath.sin(x) / WMath.cos(x));
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da secante hiperbólica de um número.
   */
  protected sech(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / WMath.cosh(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da cosecante hiperbólica de um número.
   */
  protected cosech(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / WMath.sinh(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da cotangente hiperbólica de um número.
   */
  protected cotanh(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (WMath.cosh(x) / WMath.sinh(x));
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco seno de um número.
   */
  protected arcsin(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = (((2 * WMath.pi * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco cosseno de um número.
   */
  protected arccos(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = -1 * (((2 * WMath.pi * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco tangente de um número.
   */
  protected arctan(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = (this.arcsin(x) / this.arccos(x));
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco secante de um número.
   */
  protected arcsec(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arccos(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco cosecante de um número.
   */
  protected arccosec(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arcsin(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco cotangente de um número.
   */
  protected arccotan(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arctan(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco seno hiperbólico de um número.
   */
  protected arcsinh(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (((2 * WMath.pi * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco cosseno hiperbólico de um número.
   */
  protected arccosh(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (-1 * (((2 * WMath.pi * 1) / 4) / 90) * x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco tangente hiperbólica de um número.
   */
  protected arctanh(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (this.arcsinh(x) / this.arccosh(x));
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco secante hiperbólica de um número.
   */
  protected arcsech(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arccosh(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco cosecante hiperbólica de um número.
   */
  protected arccosech(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arcsinh(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do arco cotangente hiperbólica de um número.
   */
  protected arccotanh(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arctanh(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]** 
   * @description Retorna o valor do logaritmo de base 2 de um número. 
   */
  public log2(x: number) {
    
    if(x == 0) { return NaN; }

    let exp = 2;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(2 ** exp != x) { 
        
        if(2 ** exp != x) {
          
          if (2 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]** 
   * @description Retorna o valor do logaritmo de base 2 de um número menos 1. 
   */
  public log2m1(x: number) {
    
    if(x == 0) { return NaN; }

    let exp = 2;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(2 ** exp != x) { 
        
        if(2 ** exp != x) {
          
          if (2 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp - 1;
  }


  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]** 
   * @description Retorna o valor do logaritmo de base 2 de um número mais 1. 
   */
  public log2p1(x: number) {
    
    if(x == 0) { return NaN; }

    let exp = 2;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(2 ** exp != x) { 
        
        if(2 ** exp != x) {
          
          if (2 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp + 1;
  } 

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 3 de um número.
   */
  public log3(x: number) {
    if(x == 0) { return NaN; }

    let exp = 3;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(3 ** exp != x) { 
        
        if(3 ** exp != x) {
          
          if (3 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 3 de um número menos 1.
   */
  public log3m1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 3;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(3 ** exp != x) {

        if(3 ** exp != x) {

          if(3 ** exp != x) {

            exp += 0.0001;
          }

          exp += 0.001;
        }

        exp += 0.01;
      }

      exp += 0.1;
    }

    return exp - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 3 de um número mais 1.
   */
  public log3p1(x: number) {
    if (x == 0) { return NaN; }

    let exp = 3;
    let scan = x % exp;

    while (scan != 0) {

      scan = scan % exp;

      if(3 ** exp != x) {

        if(3 ** exp != x) {

          if(3 ** exp != x) {

            exp += 0.0001;
          }

          exp += 0.001;
        }

        exp += 0.01;
      }

      exp += 0.1;

    }

    return exp + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 4 de um número.
   */
  public log4(x: number) {
    if(x == 0) { return NaN; }

    let exp = 4;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(4 ** exp != x) { 
        
        if(4 ** exp != x) {
          
          if(4 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 4 de um número menos 1.
   */
  public log4m1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 4;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(4 ** exp != x) { 
        
        if(4 ** exp != x) {
          
          if(4 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp - 1;
  }

  
  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 4 de um número mais 1.
   */
  public log4p1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 4;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(4 ** exp != x) { 
        
        if(4 ** exp != x) {
          
          if(4 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 5 de um número.
   */
  public log5(x: number) {
    if(x == 0) { return NaN; }

    let exp = 5;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(5 ** exp != x) { 
        
        if(5 ** exp != x) {
          
          if(5 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 5 de um número menos 1.
   */
  public log5m1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 5;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(5 ** exp != x) { 
        
        if(5 ** exp != x) {
          
          if(5 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 5 de um número mais 1.
   */
  public log5p1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 5;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(5 ** exp != x) { 
        
        if(5 ** exp != x) {
          
          if(5 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 6 de um número.
   */
  public log6(x: number) {
    if(x == 0) { return NaN; }

    let exp = 6;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(6 ** exp != x) { 
        
        if(6 ** exp != x) {
          
          if(6 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 6 de um número menos 1.
   */
  public log6m1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 6;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(6 ** exp != x) { 
        
        if(6 ** exp != x) {
          
          if(6 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 6 de um número mais 1.
   */
  public log6p1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 6;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(6 ** exp != x) { 
        
        if(6 ** exp != x) {
          
          if(6 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 7 de um número.
   */
  public log7(x: number) {
    if(x == 0) { return NaN; }

    let exp = 7;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(7 ** exp != x) { 
        
        if(7 ** exp != x) {
          
          if(7 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 7 de um número menos 1.
   */
  public log7m1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 7;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(7 ** exp != x) { 
        
        if(7 ** exp != x) {
          
          if(7 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 7 de um número.
   */
  public log7p1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 7;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(7 ** exp != x) { 
        
        if(7 ** exp != x) {
          
          if(7 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 8 de um número.
   */
  public log8(x: number) {
    if(x == 0) { return NaN; }

    let exp = 8;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(8 ** exp != x) { 
        
        if(8 ** exp != x) {
          
          if(8 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 8 de um número menos 1.
   */
  public log8m1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 8;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(8 ** exp != x) { 
        
        if(8 ** exp != x) {
          
          if(8 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 8 de um número mais 1.
   */
  public log8p1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 8;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(8 ** exp != x) { 
        
        if(8 ** exp != x) {
          
          if(8 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 9 de um número.
   */
  public log9(x: number) {
    if(x == 0) { return NaN; }

    let exp = 9;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(9 ** exp != x) { 
        
        if(9 ** exp != x) {
          
          if(9 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 9 de um número menos 1.
   */
  public log9m1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 9;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(9 ** exp != x) { 
        
        if(9 ** exp != x) {
          
          if(9 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 9 de um número mais 1.
   */
  public log9p1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 9;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(9 ** exp != x) { 
        
        if(9 ** exp != x) {
          
          if(9 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 10 de um número.
   */
  public log(x: number) {
    if(x == 0) { return NaN; }

    let exp = 10;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(10 ** exp != x) { 
        
        if(10 ** exp != x) {
          
          if(10 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 10 de um número menos 1.
   */
  public logm1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 10;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(10 ** exp != x) { 
        
        if(10 ** exp != x) {
          
          if(10 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base 10 de um número mais 1.
   */
  public logp1(x: number) {
    if(x == 0) { return NaN; }

    let exp = 10;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(10 ** exp != x) { 
        
        if(10 ** exp != x) {
          
          if(10 ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base qualquer de um número.
   */
  public logx(x: number, base: number) {
    if(x == 0) { return NaN; }

    let exp = base;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(base ** exp != x) { 
        
        if(base ** exp != x) {
          
          if(base ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base qualquer de um número menos 1.
   */
  public logxm1(x: number, base: number) {
    if(x == 0) { return NaN; }

    let exp = base;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(base ** exp != x) { 
        
        if(base ** exp != x) {
          
          if(base ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo de base qualquer de um número mais 1.
   */
  public logxp1(x: number, base: number) {
    if(x == 0) { return NaN; }

    let exp = base;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(base ** exp != x) { 
        
        if(base ** exp != x) {
          
          if(base ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo natural de um número.
   */
  public ln(x: number) {
    if(x == 0) { return NaN; }

    let exp = WMath.euler;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(WMath.euler ** exp != x) { 
        
        if(WMath.euler ** exp != x) {
          
          if(WMath.euler ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo natural de um número menos 1.
   */
  public lnm1(x: number) {
    if(x == 0) { return NaN; }

    let exp = WMath.euler;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(WMath.euler ** exp != x) { 
        
        if(WMath.euler ** exp != x) {
          
          if(WMath.euler ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo natural de um número mais 1.
   */
  public lnp1(x: number) {
    if(x == 0) { return NaN; }

    let exp = WMath.euler;
    let scan = x % exp;

    while(scan != 0) {

      scan = scan % exp;

      if(WMath.euler ** exp != x) { 
        
        if(WMath.euler ** exp != x) {
          
          if(WMath.euler ** exp != x) {

            exp += 0.0001;
          }
          
          exp += 0.001;
        }
      
        exp += 0.01; 
      } 

      exp += 0.1;

    }

    return exp + 1;
  }

  /**
   * @augments x entrada de um multiplicador. **[ Type: ``number`` ]**
   * @description Retorna um valor aleatório.
   */
  public random(x: number): number {
    const rand: number = (Int8Array.of(400).length / Int8Array.of(200).length) * x;
    return rand; 
  }

} export var WMath = new wMath();
