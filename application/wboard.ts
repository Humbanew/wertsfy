'use strict'

// Quadro base de arquitetura
class WBoard {

  // bloco de implementação do Command Line Interface
  protected wtsy_cli = class WCLI { }

  // bloco de implementação das Bibliotecas
  protected wtsy_lib = class WLib {

    // bloco de implementação da Biblioteca "Math"
    public Math = class WMath {

      get pi()
      { 
        return 3.141592653589793; 
      }

      get euler()
      { 
        return 2.7182818284590452353602874713527; 
      }

      get plank()
      { 
        return 6.62606896e-34; 
      }

      get avogadro()
      {
        return 6.022140857e23;
      }

      get newton()
      {
        return 0.6931471805599453;
      }

      get tesla()
      {
        return 1.6021766208e-19;
      }

      get sqrtd() 
      {
        
        return (
          
          {

            of01: 1.0,

            of02: 1.414213562373095,

            of03: 1.732050807568877,

            of04: 2.0,

            of05: 2.23606797749979,

            of06: 2.449489742783178,

            of07: 2.64575131106459,

            of08: 2.82842712474619,

            of09: 3.0,

            of10: 3.16227766016838

          }
        
        );
    
      }

      get cbrtd()
      {
        
        return (
          
          {

            of01: 1.0,

            of02: 1.25992104989487,

            of03: 1.5874010519682,

            of04: 1.99999999999999,

            of05: 2.23606797749979,

            of06: 2.58198889747161,

            of07: 2.91293118277239,

            of08: 3.26249509498958,

            of09: 3.62449963442055,

            of10: 3.99999999999999

          }
          
        );
      
      }

      get ln2()
      {
        return 0.6931471805599453;
      }

      get ln10()
      {
        return 2.302585092994046;
      }

      get log2e()
      {
        return 1.4426950408889634;
      }

      get log10e()
      {
        return 0.4342944819032518;
      }

      get maxvalue()
      {
        return 999999999999999;
      }

      get minvalue()
      {
        return -999999999999999;
      }

      abs(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x < 0 ? -1 * x : x);
        return x < 0 ? -1 * x : x;
      }

      sqrt(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 2));
        return x ** (1 / 2);
      }

      cbrt(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 3));
        return x ** (1 / 3);
      }

      quart(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 4));
        return x ** (1 / 4);
      }

      quint(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 5));
        return x ** (1 / 5);
      }

      sext(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 6));
        return x ** (1 / 6);
      }

      sept(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 7));
        return x ** (1 / 7);
      }

      oct(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 8));
        return x ** (1 / 8);
      }

      non(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 9));
        return x ** (1 / 9);
      }

      dec(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 10));
        return x ** (1 / 10);
      }

      
  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de um número.** | _Returns the potency of a number._ 
   */
  public pow(x: number, y: number): number {
    return x ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de um número, porém negada.** | _Returns the potency of a number, but negated._ 
   */
  public powNeg(x: number, y: number): number {
    return -1 * (x ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de dois.** | _Returns the potency of two._ 
   */
  public pow2(y: number): number {
    return 2 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de dois, porém negada.** | _Returns the potency of two, but negated._ 
   */
  public pow2Neg(y: number): number {
    return -1 * (2 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de três.** | _Returns the potency of three._ 
   */
  public pow3(y: number): number {
    return 3 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de três, porém negada.** | _Returns the potency of three, but negated._ 
   */
  public pow3Neg(y: number): number {
    return -1 * (3 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de quatro.** | _Returns the potency of four._ 
   */
  public pow4(y: number): number {
    return 4 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de quatro, porém negada.** | _Returns the potency of four, but negated._ 
   */
  public pow4Neg(y: number): number {
    return -1 * (4 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de cinco.** | _Returns the potency of five._ 
   */
  public pow5(y: number): number {
    return 5 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de cinco, porém negada.** | _Returns the potency of five, but negated._ 
   */
  public pow5Neg(y: number): number {
    return -1 * (5 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de six.** | _Returns the potency of six._ 
   */
  public pow6(y: number): number {
    return 6 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de six, porém negada.** | _Returns the potency of six, but negated._ 
   */
  public pow6Neg(y: number): number {
    return -1 * (6 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de sete.** | _Returns the potency of seven._ 
   */
  public pow7(y: number): number {
    return 7 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de sete, porém negada.** | _Returns the potency of seven, but negated._ 
   */
  public pow7Neg(y: number): number {
    return -1 * (7 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de oito.** | _Returns the potency of eight._ 
   */
  public pow8(y: number): number {
    return 8 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de oito, porém negada.** | _Returns the potency of eight, but negated._ 
   */
  public pow8Neg(y: number): number {
    return -1 * (8 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de nove.** | _Returns the potency of nine._ 
   */
  public pow9(y: number): number {
    return 9 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de nove, porém negada.** | _Returns the potency of nine, but negated._ 
   */
  public pow9Neg(y: number): number {
    return -1 * (9 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de dez.** | _Returns the potency of ten._ 
   */
  public pow10(y: number): number {
    return 10 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de dez, porém negada.** | _Returns the potency of ten, but negated._ 
   */
  public pow10Neg(y: number): number {
    return -1 * (10 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de potência um número.** | _Returns the potency of potency of a number._ 
   */
  public powOfPow(x: number, y: number, z?: number[]): number {
    let rest;
    if(z != null) {
      let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
      return rest = x ** (y ** l);
    }
    return rest;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de potência um número, porém negada.** | _Returns the potency of potency of a number, but negated._ 
   */
  public powOfPowNeg(x: number, y: number, z?: number[]): number {
    let rest;
    if(z != null) {
      let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
      return rest = -1 * x ** (y ** l);
    }
    return rest;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o maior número de uma sequência.** | _Returns the largest number of a sequence._ 
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
   * @description **Retorna o menor número de uma sequência.** | _Returns the smallest number of a sequence._ 
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
   * @description **Retorna o valor arredondado pra baixo de um número.** | _Returns the value rounded down of a number._ 
   */
  public round(x: number): number {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    let resultado;
    resultado = verificador.exec(x.toString());
    return parseInt(resultado[0]);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor arredondado pra cima de um número.** | _Returns the value rounded up of a number._ 
   */
  public fround(x: number): number {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    let resultado;
    resultado = verificador.exec(x.toString());
    if (parseFloat(resultado[1]) >= 0.5) {
      return parseInt(resultado[0] + 1);
    }
    return parseInt(resultado[0]);
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna um símbolo dizendo o sinal do número.** | _Returns a symbol saying the sign of a number._
   */
  public sign(x: number): number {
    let v;
    if (x > 0) { return v = 1; }
    if (x < 0) { return v = -1; }
    return v;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor sem partes de pronto flutuante de um número.** | _Returns the value without floating parts of a number._
   */
  public trunc(x: number): number {
    return parseInt(x.toString());
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor de uma multiplicação de inteiro de 32-bit.** | _Returns the value of a 32-bit integer multiplication._
   */
  public imul(x: number, y: number): number {
    return x * y;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o menor inteiro que é menor ou igual a um número.** | _Returns the smallest integer that is less than or equal to a number._
   */
  public ceil(x: number): number {
    let v;
    if (x < x + 0.5) { v = parseInt(x.toString()); }
    return v;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o maior inteiro que é maior ou igual a um número.** | _Returns the largest integer that is greater than or equal to a number._
   */
  public floor(x: number): number {
    let v;
    if (x > x + 0.5) { v = parseInt(x.toString()); }
    return v;
  }


    }


  }

  protected rdcmath = new this.wtsy_lib.prototype.Math();

  // Abstração de toda a Aplicação para o mundo externo
  public wertsfy= 
  {

    math:
    {

      Pi: this.rdcmath.pi,

      Euler: this.rdcmath.euler,
      
      Plank: this.rdcmath.plank,

      Avogadro: this.rdcmath.avogadro,

      Newton: this.rdcmath.newton,

      Testa: this.rdcmath.tesla,

      Sqrt: this.rdcmath.sqrtd,

      Cbrt: this.rdcmath.cbrtd,

      Ln2: this.rdcmath.ln2,

      Ln10: this.rdcmath.ln10,

      Log2e: this.rdcmath.log2e,

      Log10e: this.rdcmath.log10e,

      Maxvalue: this.rdcmath.maxvalue,

      Minvalue: this.rdcmath.minvalue,

      abs: (x: number, neg?: boolean) => this.rdcmath.abs(x, neg),

      sqrt: (x: number, neg?: boolean) => this.rdcmath.sqrt(x, neg),

      cbrt: (x: number, neg?: boolean) => this.rdcmath.cbrt(x, neg),

      quart: (x: number, neg?: boolean) => this.rdcmath.quart(x, neg),

      quint: (x: number, neg?: boolean) => this.rdcmath.quint(x, neg),

      sext: (x: number, neg?: boolean) => this.rdcmath.sext(x, neg),

      sept: (x: number, neg?: boolean) => this.rdcmath.sept(x, neg),

      oct: (x: number, neg?: boolean) => this.rdcmath.oct(x, neg),

      non: (x: number, neg?: boolean) => this.rdcmath.non(x, neg),

      dec: (x: number, neg?: boolean) => this.rdcmath.dec(x, neg)

    }


  }


}

new WBoard().wertsfy;
