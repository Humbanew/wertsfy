class KMath {
  
  /** @description Constante de Arquimedes ou número de Ludoph. */
  public PI = 3.141592653589793;

  /** @description Constante de Euler. */
  public E = 2.7182818284590452353602874713527;
  // 1/2,7182818284590452353602874713527=7,182818284590452353602874713527e+30

  /** @description Constante da Raiz de um. */
  public SQRT1 = 1.0;

  /** @description Constante da Raiz de dois. */
  public SQRT2 = 1.414213562373095;

  /** @description Constante da Raiz de tres. */
  public SQRT3 = 1.732050807568877;

  /** @description Constante da Raiz de quatro. */
  public SQRT4 = 2.0;

  /** @description Constante da Raiz de cinco. */
  public SQRT5 = 2.23606797749979;

  /** @description Constante da Raiz de seis. */
  public SQRT6 = 2.449489742783178;

  /** @description Constante da Raiz de sete. */
  public SQRT7 = 2.64575131106459;

  /** @description Constante da Raiz de oito. */
  public SQRT8 = 2.82842712474619;

  /** @description Constante da Raiz de nove. */
  public SQRT9 = 3.0;

  /** @description Constante da Raiz de dez. */
  public SQRT10 = 3.16227766016838;

  /** @description Constante da Raiz Cúbica de um. */
  public CBRT1 = 1.0;

  /** @description Constante da Raiz Cúbica de dois. */
  public CBRT2 = 1.25992104989487;

  /** @description Constante da Raiz Cúbica de tres. */
  public CBRT3 = 1.5874010519682;

  /** @description Constante da Raiz Cúbica de quatro. */
  public CBRT4 = 1.99999999999999;

  /** @description Constante da Raiz Cúbica de cinco. */
  public CBRT5 = 2.23606797749979;

  /** @description Constante da Raiz Cúbica de seis. */
  public CBRT6 = 2.58198889747161;

  /** @description Constante da Raiz Cúbica de sete. */
  public CBRT7 = 2.91293118277239;

  /** @description Constante da Raiz Cúbica de oito. */
  public CBRT8 = 3.26249509498958;

  /** @description Constante da Raiz Cúbica de nove. */
  public CBRT9 = 3.62449963442055;

  /** @description Constante da Raiz Cúbica de dez. */
  public CBRT10 = 3.99999999999999;

  /** @description Constante de Logaritmo Natural de dois. */
  public LN2 = 0.6931471805599453;

  /** @description Constante de Logaritmo Natural de dez. */
  public LN10 = 2.302585092994046;

  /** @description Constante de Logaritmo de 2. */
  public LOG2E = 1.4426950408889634;

  /** @description Constante de Logaritmo de 10. */
  public LOG10E = 0.4342944819032518;

  /** @description Retorna o valor absoluto de um número. */
  public abs(x: number): number { 
    return x < 0 ? -1 * x : x; 
  }

  /** @description Retorna o valor absoluto de um número, porém negado. */
  public absNeg(x: number): number {
    return -1 * x;
  }

  /** @description Retorna o valor da raiz quadrada de um número. */
  public sqrt(x: number): number {
    return x ** (1/2);
  }

  /** @description Retorna o valor da raiz quadrada de um número, porém negado. */
  public sqrtNeg(x: number): number {
    return -1 * (x ** (1/2));
  }
 
  /** @description Retorna o valor da raiz cúbica de um número. */
  public cbrt(x: number): number {
    return x ** (1/3);
  }

  /** @description Retorna o valor da raiz cúbica de um número, porém negado. */
  public cbrtNeg(x: number): number {
    return -1 * (x ** (1/3));
  }

  /** @description Retorna o valor da raiz à quarta potência de um número. */
  public quart(x: number): number {
    return x ** (1/4);
  }

  /** @description Retorna o valor da raiz à quarta potência de um número, porém negado. */
  public quartNeg(x: number): number {
    return -1 * (x ** (1/4));
  }

  /** @description Retorna o valor da raiz à quinta potência de um número. */
  public quint(x: number): number {
    return x ** (1/5);
  }

  /** @description Retorna o valor da raiz à quinta potência de um número, porém negado. */
  public quintNeg(x: number): number {
    return -1 * (x ** (1/5));
  }

  /** @description Retorna o valor da raiz à sexta potência de um número. */
  public sext(x: number): number {
    return x ** (1/6);
  }

  /** @description Retorna o valor da raiz à sexta potência de um número, porém negado. */
  public sextNeg(x: number): number {
    return -1 * (x ** (1/6));
  }

  /** @description Retorna o valor da raiz à sétima potência de um número. */
  public sept(x: number): number {
    return x ** (1/7);
  }

  /** @description Retorna o valor da raiz à sétima potência de um número, porém negado. */
  public septNeg(x: number): number {
    return -1 * (x ** (1/7));
  }

  /** @description Retorna o valor da raiz à oitava potência de um número. */
  public oct(x: number): number {
    return x ** (1/8);
  }

  /** @description Retorna o valor da raiz à oitava potência de um número, porém negado. */
  public octNeg(x: number): number {
    return -1 * (x ** (1/8));
  }

  /** @description Retorna o valor da raiz à nona potência de um número. */
  public non(x: number): number {
    return x ** (1/9);
  }

  /** @description Retorna o valor da raiz à nona potência de um número, porém negado. */
  public nonNeg(x: number): number {
    return -1 * (x ** (1/9));
  }

  /** @description Retorna o valor da raiz à décima potência de um número. */
  public dec(x: number): number {
    return x ** (1/10);
  }

  /** @description Retorna o valor da raiz à décima potência de um número, porém negado. */
  public decNeg(x: number): number {
    return -1 * (x ** (1/10));
  }

  /** @description Retorna o valor da potência de um número. */
  public pow(x: number, y: number): number {
    return x ** y;
  }

  /** @description Retorna o valor da potência de um número, porém negada. */
  public powNeg(x: number, y: number): number {
    return -1 * (x ** y);
  }

  /** @description Retorna o valor da potência de dois. */
  public pow2(x: number): number {
    return 2 ** x;
  }

  /** @description Retorna o valor da potência de dois, porém negada. */
  public pow2Neg(x: number): number {
    return -1 * (2 ** x);
  }

  /** @description Retorna o valor da potência de três. */
  public pow3(x: number): number {
    return 3 ** x;
  }

  /** @description Retorna o valor da potência de três, porém negada. */
  public pow3Neg(x: number): number {
    return -1 * (3 ** x);
  }

  /** @description Retorna o valor da potência de quatro. */
  public pow4(x: number): number {
    return 4 ** x;
  }

  /** @description Retorna o valor da potência de quatro, porém negada. */
  public pow4Neg(x: number): number {
    return -1 * (4 ** x);
  }

  /** @description Retorna o valor da potência de cinco. */
  public pow5(x: number): number {
    return 5 ** x;
  }

  /** @description Retorna o valor da potência de cinco, porém negada. */
  public pow5Neg(x: number): number {
    return -1 * (5 ** x);
  }

  /** @description Retorna o valor da potência de seis. */
  public pow6(x: number): number {
    return 6 ** x;
  }

  /** @description Retorna o valor da potência de seis, porém negada. */
  public pow6Neg(x: number): number {
    return -1 * (6 ** x);
  }

  /** @description Retorna o valor da potência de sete. */
  public pow7(x: number): number {
    return 7 ** x;
  }

  /** @description Retorna o valor da potência de sete, porém negada. */
  public pow7Neg(x: number): number {
    return -1 * (7 ** x);
  }

  /** @description Retorna o valor da potência de oito. */
  public pow8(x: number): number {
    return 8 ** x;
  }

  /** @description Retorna o valor da potência de oito, porém negada. */
  public pow8Neg(x: number): number {
    return -1 * (8 ** x);
  }

  /** @description Retorna o valor da potência de nove. */
  public pow9(x: number): number {
    return 9 ** x;
  }

  /** @description Retorna o valor da potência de nove, porém negada. */
  public pow9Neg(x: number): number {
    return -1 * (9 ** x);
  }

  /** @description Retorna o valor da potência de dez. */
  public pow10(x: number): number {
    return 10 ** x;
  }

  /** @description Retorna o valor da potência de dez, porém negada. */
  public pow10Neg(x: number): number {
    return -1 * (10 ** x);
  }

  /** @description Retorna o valor da potência de potência um número. */
  public powOfPow(x: number, y: number, z?:number[]): number {
    let l = 0; for(let i = 0; i < z.length; i++) { l += z[i]; }
    return x ** (y ** l);
  }

  /** @description Retorna o valor da potência de potência um número, porém negada. */
  public powOfPowNeg(x: number, y: number, z?:number[]): number {
    let l = 0; for(let i = 0; i < z.length; i++) { l += z[i]; }
    return -1 * (x ** (y ** l));
  }



}

export var kMath = new KMath();