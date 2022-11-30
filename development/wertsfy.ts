/**
 * Wertsfy - Copyright 2020, 2021, 2022. All rights reserved.
 * Humbanew Project Huon Subdivision
 */

// Interface de Programação de Aplicativos
interface Wertsfy {

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Interface``** 
   * Collection of Mathematic
   */
  mathematic: {

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Library``** 
     * Core Component of Mathematic
     */
    corebase: WERTSFY_MATH_COREBASE,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Library``** 
     * Calculator Component of Mathematic
     */
    calculator: WERTSFY_MATH_CALCULATOR,

  },

  interface: {

    terminal: WERTSFY_INTERFACE_TERMINAL,
    lydroc: WERTSFY_INTERFACE_LYDROC,
    spectrals: WERTSFY_INTERFACE_SPECTRALS

  },

  builder: {

    karzok: WERTSFY_BUILDER_KARZOK,
    sollpass: WERTSFY_BUILDER_SOLLPASS

  },

  hooks: {

    language: WERTSFY_HOOKS_LANGUAGE

  }

}; 

/**
 * ``▰ Wertsfy ▰ ``
 * @description **``Base``** 
 * The Wertsfy API
 */
export var wertsfy: Wertsfy;

// Componentes da Interface

/** *Wertsfy Mathematics Corebase Class* */
class WERTSFY_MATH_COREBASE {

  protected _log(expo: number, x: number): number 
  {
    let exp = expo , scan = x % exp;

    while(scan != 0) {
      scan = scan % exp;

      if(expo ** exp != x) {   
        if(expo ** exp != x) {
          if (expo ** exp != x) {
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
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the pi value.
   */
  public Pi = 3.141592653589793;

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the euler value.
   */
  public Euler = 2.7182818284590452353602874713527;

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the plank value.
   */
  public Plank = 6.62606896e-34;

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the avogadro value.
   */
  public Avogadro = 6.022140857e23;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the newton value.
   */
  public Newton = 0.6931471805599453;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the tesla value.
   */
  public Tesla = 1.6021766208e-19;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant Collection``** 
   * Returns the square root object.
   */
  public SquareRoot = {

    
    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the square root of 1.
     */
    Of01: 1.0,
    
    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the square root of 2.
     */
    Of02: 1.414213562373095,
    
    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the square root of 3.
     */
    Of03: 1.732050807568877,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the square root of 4.
     */
    Of04: 2.0,
    
    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the square root of 5.
     */
    Of05: 2.23606797749979,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the square root of 6.
     */
    Of06: 2.449489742783178,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the square root of 7.
     */
    Of07: 2.64575131106459,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the square root of 8.
     */
    Of08: 2.82842712474619,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the square root of 9.
     */
    Of09: 3.0,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the square root of 10.
     */
    Of10: 3.16227766016838

  };

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant Collection``** 
   * Returns the cubic root object.
   */ 
  public CubicRoot = {

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the cubic root of 1.
     */
    Of01: 1.0,
    
    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the cubic root of 2.
     */
    Of02: 1.25992104989487,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the cubic root of 3.
     */
    Of03: 1.5874010519682,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the cubic root of 4.
     */
    Of04: 1.99999999999999,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the cubic root of 5.
     */
    Of05: 2.23606797749979,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the cubic root of 6.
     */
    Of06: 2.58198889747161,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the cubic root of 7.
     */
    Of07: 2.91293118277239,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the cubic root of 8.
     */
    Of08: 3.26249509498958,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the cubic root of 9.
     */
    Of09: 3.62449963442055,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Constant``** 
     * Returns the cubic root of 10.
     */
    Of10: 3.99999999999999

  }
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the logarithm of 2.
   */
  public Logarithm2 = 0.6931471805599453;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the logarithm of 10.
   */
  public Logarithm10 = 2.302585092994046;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the euler logarithm of 2.
   */
  public Logarithm2e = 1.4426950408889634;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the euler logarithm of 10.
   */
  public Logarithm10e = 0.4342944819032518;

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the max value.
   */
  public MaxValue = 999999999999999;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the min value.
   */
  public MinValue = -999999999999999;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the absolute value of number.
   */
  public abs(x: number): number 
  {
    return x < 0 ? -1 * x : x;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the square root of number.
   */
  public sqrt(x: number): number 
  {
    return x ** (1 / 2);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cubic root of number.
   */
  public cbrt(x: number): number 
  {
    return x ** (1 / 3);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the four power root of number.
   */
  public quart(x: number): number 
  {
    return x ** (1 / 4);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the five power root of number.
   */
  public quint(x: number): number 
  {
    return x ** (1 / 5);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the six power root of number.
   */
  public sext(x: number): number 
  {
    return x ** (1 / 6);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the seven power root of number.
   */
  public sept(x: number): number 
  {
    return x ** (1 / 7);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the eight power root of number.
   */
  public oct(x: number): number 
  {
    return x ** (1 / 8);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the nine power root of number.
   */
  public non(x: number): number 
  {
    return x ** (1 / 9);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the ten power root of number.
   */
  public dec(x: number): number 
  {
    return x ** (1 / 10);
  }
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number base value.
   * @augments ``y``|**``number``**
   * Number potency value.
   * @description **``Method``** 
   * Returns the potency of number.
   */
  public pow(x: number, y: number): number 
  {
    return x ** y;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number base value.
   * @augments ``y``|**``number``**
   * Number primary potency value.
   * @augments ``z``|**``number[]``**|``Optional Attr``
   * Number multiple potency values.
   * @description **``Method``** 
   * Returns the potency of potency by number.
   */
  public powOfPow(x: number, y: number, z?: number[]): number 
  {
    let rest: any;
    if(z != null) {
      let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
      return rest = x ** (y ** l);
    }
    return rest;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number[]``**
   * Number sequence value.
   * @description **``Method``** 
   * Returns the maximum value by sequence of number.
   */
  public max(x: number[]): number 
  {
    let max = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] > max) { max = x[i]; }
    }
    return max;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number[]``**
   * Number sequence value.
   * @description **``Method``** 
   * Returns the minimum value by sequence of number.
   */
  public min(x: number[]): number 
  {
    let min = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] < min) { min = x[i]; }
    }
    return min;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the rouded down value of number.
   */
  public round(x: number): number 
  {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    let resultado: any;
    resultado = verificador.exec(x.toString());
    return parseInt(resultado[0]);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the rouded up value of number.
   */
  public fround(x: number): number 
  {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    let resultado: any;
    resultado = verificador.exec(x.toString());
    if (parseFloat(resultado[1]) >= 0.5) {
      return parseInt(resultado[0] + 1);
    }
    return parseInt(resultado[0]);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the signal of number.
   */
  public sign(x: number): number 
  {
    let v: any;
    if (x > 0) { return v = 1; }
    if (x < 0) { return v = -1; }
    return v;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the integer value of number.
   */
  public trunc(x: number): number 
  {
    return parseInt(x.toString());
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``y``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the multiplication of two numbers.
   */
  public imul(x: number, y: number): number 
  {
    return x * y;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the number also is minus comparated same plus 0.5.
   */
  public ceil(x: number): number 
  {
    let v: any;
    if (x < x + 0.5) { v = parseInt(x.toString()); }
    return v;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the number also is more comparated same plus 0.5.
   */
  public floor(x: number): number 
  {
    let v: any;
    if (x > x + 0.5) { v = parseInt(x.toString()); }
    return v;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the sine of number.
   */
  public sin(x: number): number 
  {
    return (((2 * this.Pi * 1) / 4) / 90) * x;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cosine of number.
   */
  public cos(x: number): number 
  {
    return (-1 * (((2 * this.Pi * 1) / 4) / 90)) * x;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the tangent of number.
   */
  public tan(x: number): number 
  {    
    return this.sin(x) / this.cos(x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the secant of number.
   */
  public sec(x: number): number 
  {
    return 1 / this.cos(x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cosecant of number.
   */
  public cosec(x: number): number 
  {
    return 1 / this.sin(x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cotangent of number.
   */
  public cotan(x: number): number 
  {
    return 1 / (this.cos(x) / this.sin(x));
  }
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic sine of number.
   */
  public sinh(x: number): number 
  {
    return 1 / (((2 * this.Pi * 1) / 4) / 90) * x;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic cosine of number.
   */
  public cosh(x: number): number 
  {
    return 1 / (-1 * ((2 * this.Pi * 1) / 4) / 90) * x;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic tangent of number.
   */
  public tanh(x: number): number 
  {
    return 1 / (this.sin(x) / this.cos(x));
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic secant of number.
   */
  public sech(x: number): number 
  {
    return 1 / this.cosh(x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic cosecant of number.
   */
  public cosech(x: number): number 
  {
    return 1 / this.sinh(x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic cotangent of number.
   */
  public cotanh(x: number): number 
  {
    return 1 / (this.cosh(x) / this.sinh(x));
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc sine of number.
   */
  public arcsin(x: number): number 
  {
    return (((2 * this.Pi * 1) / 4) / 90) * x;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cosine of number.
   */
  public arccos(x: number): number 
  {
    return -1 * (((2 * this.Pi * 1) / 4) / 90) * x;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc tangent of number.
   */
  public arctan(x: number): number 
  {
    return (this.arcsin(x) / this.arccos(x));
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc secant of number.
   */
  public arcsec(x: number): number 
  {
    return 1 / this.arccos(x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cosecant of number.
   */
  public arccosec(x: number): number 
  {
    return 1 / this.arcsin(x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cotangent of number.
   */
  public arccotan(x: number): number 
  {
    return 1 / this.arctan(x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc sine of number.
   */
  public arcsinh(x: number): number 
  {
    return 1 / (((2 * this.Pi * 1) / 4) / 90) * x;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc cosine of number.
   */
  public arccosh(x: number): number 
  {
    return 1 / (-1 * (((2 * this.Pi * 1) / 4) / 90) * x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc tangent of number.
   */
  public arctanh(x: number): number 
  {
    return 1 / (this.arcsinh(x) / this.arccosh(x));
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc secant of number.
   */
  public arcsech(x: number): number 
  {
    return 1 / this.arccosh(x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc cosecant of number.
   */
  public arccosech(x: number): number 
  {
    return 1 / this.arcsinh(x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cotangent of number.
   */
  public arccotanh(x: number): number 
  {
    return 1 / this.arctanh(x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 10 logarithm of number.
   */
  public log(x: number): number 
  {
    return this._log(10, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 10 logarithm minus 1 of number.
   */
  public logm1(x: number): number 
  {
    return this._log(10-1, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 10 logarithm plus 1 of number.
   */
  public logp1(x: number): number 
  {
    return this._log(10+1, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 2 logarithm of number.
   */
  public log2(x: number): number 
  {
    return this._log(2, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 2 logarithm minus 1 of number.
   */
  public log2m1(x: number): number 
  {
    return this._log(2-1, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 2 logarithm plus 1 of number.
   */
  public log2p1(x: number): number 
  {
    return this._log(2+1, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``base``|**``number``**
   * Number base value.
   * @description **``Method``** 
   * Returns the any base logarithm of number.
   */
  public logx(x: number, base: number): number 
  {
    return this._log(base, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``base``|**``number``**
   * Number base value.
   * @description **``Method``** 
   * Returns the any base logarithm minus 1 of number.
   */
  public logxm1(x: number, base: number): number 
  {
    return this._log(base - 1, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``base``|**``number``**
   * Number base value.
   * @description **``Method``** 
   * Returns the any base logarithm plus 1 of number.
   */
  public logxp1(x: number, base: number): number 
  {
    return this._log(base + 1, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the natural logarithm of number.
   */
  public ln(x: number): number 
  {
    return this._log(this.Euler, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the natural logarithm minus 1 of number.
   */
  public lnm1(x: number): number 
  {
    return this._log(this.Euler - 1, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the natural logarithm plus 1 of number.
   */
  public lnp1(x: number): number 
  {
    return this._log(this.Euler + 1, x);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the random number value.
   */
  public random(x: number): number 
  {
    return (Int8Array.of(400).length / Int8Array.of(200).length) * x;
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``base``|**``number``**
   * Number base exponencial value.
   * @augments ``valorLg``|**``number``**
   * Number potency exponencial value.
   * @description **``Method``** 
   * Returns the exponencial of number.
   */
  public exp(base: number, valorLg: number): number 
  {
    if(base == 0) { return 0; }
    return base ** this.logx(valorLg, base);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``base``|**``number``**
   * Number base exponencial value.
   * @augments ``valorLg``|**``number``**
   * Number potency exponencial value.
   * @description **``Method``** 
   * Returns the exponencial minus 1 of number.
   */
  public expm1(base: number, valorLg: number): number 
  {
    if(base == 0) { return 0; }
    return base ** this.logxm1(valorLg-1, base);
  }

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``base``|**``number``**
   * Number base exponencial value.
   * @augments ``valorLg``|**``number``**
   * Number potency exponencial value.
   * @description **``Method``** 
   * Returns the exponencial plus 1 of number.
   */
  public expp1(base: number, valorLg: number): number 
  {
    if(base == 0) { return 0; }
    return base ** this.logxp1(valorLg+1, base);
  }

};

/** *Wertsfy Mathematics Calculator Class* */
class WERTSFY_MATH_CALCULATOR { };

/** *Wertsfy Interface Terminal Class* */
class WERTSFY_INTERFACE_TERMINAL {

  public InputSymbol = '|>';
  public OutputSymbol = '|<';
  public DivisorSymbol = '===';
  public LoadingSymbol = {

    Of025: '\\',
    Of050: '|',
    Of075: '/',
    Of100: '-'

  }
  public EscCharNewLine = '\n';
  public EscCharTab = '\t';
  public EscCharBackspace = '\b';
  public EscCharRestartLine = '\r';
  public EscCharVerticalTab = '\v';
  public EscCharFormFeed = '\f';
  public EscCharNull = '\0';

  public addFormatation() { }

  public removeFormatation() { }

  public mountTerminalInterface() { }

};

/** *Wertsfy Interface Lydroc Class* */
class WERTSFY_INTERFACE_LYDROC { };

/** *Wertsfy Interface Lydroc Class* */
class WERTSFY_INTERFACE_SPECTRALS {

  
// // Constantes à serem realocadas...

/**
 * declare type CorTerminal = {

    hexadecimal: {
      
      t000000: "#000000";
      t800000: "#800000";
      t008000: "#008000";
      t808000: "#808000";
      t000080: "#000080";
      t800080: "#800080";
      t008080: "#008080";
      t808080: "#808080";
      tC0C0C0: "#C0C0C0";
      tFF0000: "#FF0000";
      t00FF00: "#00FF00";
      tFFFF00: "#FFFF00";
      t0000FF: "#0000FF";
      tFF00FF: "#FF00FF";
      t00FFFF: "#00FFFF";
      tFFFFFF: "#FFFFFF";
      t00005F: "#00005F";
      t000087: "#000087";
      t0000AF: "#0000AF";
      t0000D7: "#0000D7";
      t005F00: "#005F00";
      t005F5F: "#005F5F";
      t005F87: "#005F87";
      t005FAF: "#005FAF";
      t005FD7: "#005FD7";
      t005FFF: "#005FFF";
      t008700: "#008700";
      t00875F: "#00875F";
      t008787: "#008787";
      t0087AF: "#0087AF";
      t0087D7: "#0087D7";
      t0087FF: "#0087FF";
      t00AF00: "#00AF00";
      t00AF5F: "#00AF5F";
      t00AF87: "#00AF87";
      t00AFAF: "#00AFAF";
      t00AFD7: "#00AFD7";
      t00AFFF: "#00AFFF";
      t00D700: "#00D700";
      t00D75F: "#00D75F";
      t00D787: "#00D787";
      t00D7AF: "#00D7AF";
      t00D7D7: "#00D7D7";
      t00D7FF: "#00D7FF";
      t00FF5F: "#00FF5F";
      t00FF87: "#00FF87";
      t00FFAF: "#00FFAF";
      t00FFD7: "#00FFD7";
      t5F0000: "#5F0000";
      t5F005F: "#5F005F";
      t5F0087: "#5F0087";
      t5F00AF: "#5F00AF";
      t5F00D7: "#5F00D7";
      t5F00FF: "#5F00FF";
      t5F5F00: "#5F5F00";
      t5F5F5F: "#5F5F5F";
      t5F5F87: "#5F5F87";
      t5F5FAF: "#5F5FAF";
      t5F5FD7: "#5F5FD7";
      t5F5FFF: "#5F5FFF";
      t5F8700: "#5F8700";
      t5F875F: "#5F875F";
      t5F8787: "#5F8787";
      t5F87AF: "#5F87AF";
      t5F87D7: "#5F87D7";
      t5F87FF: "#5F87FF";
      t5FAF00: "#5FAF00";
      t5FAF5F: "#5FAF5F";
      t5FAF87: "#5FAF87";
      t5FAFAF: "#5FAFAF";
      t5FAFD7: "#5FAFD7";
      t5FAFFF: "#5FAFFF";
      t5FD700: "#5FD700";
      t5FD75F: "#5FD75F";
      t5FD787: "#5FD787";
      t5FD7AF: "#5FD7AF";
      t5FD7D7: "#5FD7D7";
      t5FD7FF: "#5FD7FF";
      t5FFF00: "#5FFF00";
      t5FFF5F: "#5FFF5F";
      t5FFF87: "#5FFF87";
      t5FFFAF: "#5FFFAF";
      t5FFFD7: "#5FFFD7";
      t5FFFFF: "#5FFFFF";
      t870000: "#870000";
      t87005F: "#87005F";
      t870087: "#870087";
      t8700AF: "#8700AF";
      t8700D7: "#8700D7";
      t8700FF: "#8700FF";
      t875F00: "#875F00";
      t875F5F: "#875F5F";
      t875F87: "#875F87";
      t875FAF: "#875FAF";
      t875FD7: "#875FD7";
      t875FFF: "#875FFF";
      t878700: "#878700";
      t87875F: "#87875F";
      t878787: "#878787";
      t8787AF: "#8787AF";
      t8787D7: "#8787D7";
      t8787FF: "#8787FF";
      t87AF00: "#87AF00";
      t87AF5F: "#87AF5F";
      t87AF87: "#87AF87";
      t87AFAF: "#87AFAF";
      t87AFD7: "#87AFD7";
      t87AFFF: "#87AFFF";
      t87D700: "#87D700";
      t87D75F: "#87D75F";
      t87D787: "#87D787";
      t87D7AF: "#87D7AF";
      t87D7D7: "#87D7D7";
      t87D7FF: "#87D7FF";
      t87FF00: "#87FF00";
      t87FF5F: "#87FF5F";
      t87FF87: "#87FF87";
      t87FFAF: "#87FFAF";
      t87FFD7: "#87FFD7";
      t87FFFF: "#87FFFF";
      tAF0000: "#AF0000";
      tAF005F: "#AF005F";
      tAF0087: "#AF0087";
      tAF00AF: "#AF00AF";
      tAF00D7: "#AF00D7";
      tAF00FF: "#AF00FF";
      tAF5F00: "#AF5F00";
      tAF5F5F: "#AF5F5F";
      tAF5F87: "#AF5F87";
      tAF5FAF: "#AF5FAF";
      tAF5FD7: "#AF5FD7";
      tAF5FFF: "#AF5FFF";
      tAF8700: "#AF8700";
      tAF875F: "#AF875F";
      tAF8787: "#AF8787";
      tAF87AF: "#AF87AF";
      tAF87D7: "#AF87D7";
      tAF87FF: "#AF87FF";
      tAFAF00: "#AFAF00";
      tAFAF5F: "#AFAF5F";
      tAFAF87: "#AFAF87";
      tAFAFAF: "#AFAFAF";
      tAFAFD7: "#AFAFD7";
      tAFAFFF: "#AFAFFF";
      tAFD700: "#AFD700";
      tAFD75F: "#AFD75F";
      tAFD787: "#AFD787";
      tAFD7AF: "#AFD7AF";
      tAFD7D7: "#AFD7D7";
      tAFD7FF: "#AFD7FF";
      tAFFF00: "#AFFF00";
      tAFFF5F: "#AFFF5F";
      tAFFF87: "#AFFF87";
      tAFFFAF: "#AFFFAF";
      tAFFFD7: "#AFFFD7";
      tAFFFFF: "#AFFFFF";
      tD70000: "#D70000";
      tD7005F: "#D7005F";
      tD70087: "#D70087";
      tD700AF: "#D700AF";
      tD700D7: "#D700D7";
      tD700FF: "#D700FF";
      tD75F00: "#D75F00";
      tD75F5F: "#D75F5F";
      tD75F87: "#D75F87";
      tD75FAF: "#D75FAF";
      tD75FD7: "#D75FD7";
      tD75FFF: "#D75FFF";
      tD78700: "#D78700";
      tD7875F: "#D7875F";
      tD78787: "#D78787";
      tD787AF: "#D787AF";
      tD787D7: "#D787D7";
      tD787FF: "#D787FF";
      tD7AF00: "#D7AF00";
      tD7AF5F: "#D7AF5F";
      tD7AF87: "#D7AF87";
      tD7AFAF: "#D7AFAF";
      tD7AFD7: "#D7AFD7";
      tD7AFFF: "#D7AFFF";
      tD7D700: "#D7D700";
      tD7D75F: "#D7D75F";
      tD7D787: "#D7D787";
      tD7D7AF: "#D7D7AF";
      tD7D7D7: "#D7D7D7";
      tD7D7FF: "#D7D7FF";
      tD7FF00: "#D7FF00";
      tD7FF5F: "#D7FF5F";
      tD7FF87: "#D7FF87";
      tD7FFAF: "#D7FFAF";
      tD7FFD7: "#D7FFD7";
      tD7FFFF: "#D7FFFF";
      tFF005F: "#FF005F";
      tFF0087: "#FF0087";
      tFF00AF: "#FF00AF";
      tFF00D7: "#FF00D7";
      tFF5F00: "#FF5F00";
      tFF5F5F: "#FF5F5F";
      tFF5F87: "#FF5F87";
      tFF5FAF: "#FF5FAF";
      tFF5FD7: "#FF5FD7";
      tFF5FFF: "#FF5FFF";
      tFF8700: "#FF8700";
      tFF875F: "#FF875F";
      tFF8787: "#FF8787";
      tFF87AF: "#FF87AF";
      tFF87D7: "#FF87D7";
      tFF87FF: "#FF87FF";
      tFFAF00: "#FFAF00";
      tFFAF5F: "#FFAF5F";
      tFFAF87: "#FFAF87";
      tFFAFAF: "#FFAFAF";
      tFFAFD7: "#FFAFD7";
      tFFAFFF: "#FFAFFF";
      tFFD700: "#FFD700";
      tFFD75F: "#FFD75F";
      tFFD787: "#FFD787";
      tFFD7AF: "#FFD7AF";
      tFFD7D7: "#FFD7D7";
      tFFD7FF: "#FFD7FF";
      tFFFF5F: "#FFFF5F";
      tFFFF87: "#FFFF87";
      tFFFFAF: "#FFFFAF";
      tFFFFD7: "#FFFFD7";
      t080808: "#080808";
      t121212: "#121212";
      t1C1C1C: "#1C1C1C";
      t262626: "#262626";
      t303030: "#303030";
      t3A3A3A: "#3A3A3A";
      t444444: "#444444";
      t4E4E4E: "#4E4E4E";
      t585858: "#585858";
      t626262: "#626262";
      t6C6C6C: "#6C6C6C";
      t767676: "#767676";
      t8A8A8A: "#8A8A8A";
      t949494: "#949494";
      t9E9E9E: "#9E9E9E";
      tA8A8A8: "#A8A8A8";
      tB2B2B2: "#B2B2B2";
      tBCBCBC: "#BCBCBC";
      tC6C6C6: "#C6C6C6";
      tD0D0D0: "#D0D0D0";
      tDADADA: "#DADADA";
      tE4E4E4: "#E4E4E4";
      tEEEEEE: "#EEEEEE";
    
    }

  };

  declare type CorWeb = {

    coreshtml: {

      AliceBlue: "aliceblue"; 
      AntiqueWhite: "antiquewhite";
      Aqua: "aqua";
      AquaMarine: "aquamarine";
      Azure: "azure";
      Beige: "beige";
      Bisque: "bisque";
      Black: "black";
      Blanchedalmond: "blanchedalmond";
      Blue: "blue";
      BlueViolet: "blueviolet";
      Brown: "brown";
      Burlywood: "burlywood";
      CadetBlue: "cadetblue";
      Chartreuse: "chartreuse";
      Chocolate: "chocolate";
      Coral: "coral";
      CornFlowerBlue: "cornflowerblue";
      Cornsilk: "cornsilk";
      Crimson: "crimson";
      Cyan: "cyan";
      DarkBlue: "darkblue";
      DarkCyan: "darkcyan";
      DarkGoldenRod: "darkgoldenrod";
      DarkGray: "darkgray";
      DarkGreen: "darkgreen";
      DarkKhaki: "darkkhaki";
      DarkMagenta: "darkmagenta";
      DarkOliveGreen: "darkolivegreen";
      DarkOrange: "darkorange";
      DarkOrchild: "darkorchid";
      DarkRed: "darkred";
      DarkSalmon: "darksalmon";
      DarkSeaGreen: "darkseagreen";
      DarkSlateBlue: "darkslateblue";
      DarkSlateGray: "darkslategray";
      DarkTurquiose: "darkturquoise";
      DarkViolet: "darkviolet";
      DeepPink: "deeppink";
      DeepSkyBlue: "deepskyblue";
      DimGray: "dimgray";
      DodgerBlue: "dodgerblue";
      Firebrick: "firebrick";
      Floralwhite: "floralwhite";
      FlorestGreen: "florestgreen";
      Fucsia: "fucsia";
      Gainsboro: "gainsboro";
      Ghostwhite: "ghostwhite";
      Gold: "gold";
      GoldenRod: "goldenrod";
      Gray: "gray";
      Green: "green";
      GreenYellow: "greenyellow";
      Honeydew: "honeydew";
      Hotpink: "hotpink";
      IndianRed: "indianred";
      Ivory: "ivory";
      Khaki: "khaki"; 
      Lavender: "lavender";
      LavenderBlush: "lavenderblush";
      LawnGreen: "lawngreen";
      Lemonchiffon: "lemonchiffon";
      LightBlue: "lightblue";
      LightCoral: "lightcoral";
      LightCyan: "lightcyan";
      LightGoldenRodYellow: "lightgoldenrodyellow";
      LightGray: "lightgray";
      LightGreen: "lightgreen";
      LightPink: "lightpink";
      LightSalmon: "lightsalmon";
      LightSeaGreen: "lightseagreen";
      LightSkyBlue:  "lightskyblue";
      LightSlateGray: "lightslategray";
      LightSteelBlue: "lightsteelblue";
      LightYellow: "lightyellow";
      Lime: "lime"; 
      LimeGreen: "limegreen"; 
      Linen: "linen";
      Magenta: "magenta";
      Maroon: "maroon"; 
      MediumAquamarine: "mediumaquamarine";
      MediumBlue: "mediumblue";
      MediumOrchid: "mediumorchid";
      MediumSeaGreen: "mediumseagreen";
      MediumSlateBlue: "mediumslateblue";
      MediumSpringGreen: "mediumspringgreen";
      MediumTurquiose: "mediumturquoise";
      MediumVioletRed: "mediumvioletred";
      MidmightBlue: "midnightblue";
      MintCream: "mintcream";
      Mistyrose: "mistyrose";
      Moccasin: "moccasin";
      NavajoWhite: "navajowhite";
      Navy: "navy";
      OldLace: "oldlace";
      Olive: "olive";
      OliveDrab: "olivedrab";
      Orange: "orange";
      OrangeRed: "orangered";
      Orchid: "orchid";
      PaleGoldenRod: "palegoldenrod";
      PaleGreen: "palegreen";
      PaleTurquoise: "paleturquoise";
      PaleVioletRed: "palevioletred";
      PapayaWhip: "papayawhip";
      Peachpuff: "peachpuff";
      Peru: "peru";
      Pink: "pink";
      Plum: "plum";
      PowderBlue: "powderblue";
      Purple: "purple";
      Red: "red";
      RosyBrown: "rosybrown";
      RoyalBlue: "royalblue";
      SaddleBrown: "saddlebrown";
      Salmon: "salmon";
      Sandybrown: "sandybrown";
      SeaGreen: "seagreen";
      Seashell: "seashell";
      Silver: "silver";
      SkyBlue: "skyblue";
      SlateBlue: "slateblue";
      SlateGray: "slategray";
      Snow: "snow";
      SpringGreen: "springgreen";
      SteelBlue: "steelblue";
      Tan: "tan";
      Teal: "teal";
      Thistle: "thistle";
      Tomato: "tomato";
      Turquiose: "turquiose";
      Violet: "violet";
      Wheat: "wheat";
      White: "white";
      Whitesmoke: "whitesmoke";
      Yellow: "yellow";
      YellowGreen: "yellowgreen";
      
    }

  };

 */

};

/** *Wertsfy Builder Karzok Class* */
class WERTSFY_BUILDER_KARZOK { };

/** *Wertsfy Builder Sollpass Class* */
class WERTSFY_BUILDER_SOLLPASS { };

/** *Wertsfy Hooks Language Class* */
class WERTSFY_HOOKS_LANGUAGE { }
