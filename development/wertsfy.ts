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
class WERTSFY_INTERFACE_LYDROC {

  public staticElements = { };

  public dynamicElements = { };

};

/** *Wertsfy Interface Lydroc Class* */
class WERTSFY_INTERFACE_SPECTRALS {

  public hexadecimalColor = {

    OfPreset000000: "#000000",
    OfPreset800000: "#800000", 
    OfPreset008000: "#008000",
    OfPreset808000: "#808000",
    OfPreset000080: "#000080",
    OfPreset800080: "#800080",
    OfPreset008080: "#008080",
    OfPreset808080: "#808080",
    OfPresetC0C0C0: "#C0C0C0",
    OfPresetFF0000: "#FF0000", 
    OfPreset00FF00: "#00FF00",  
    OfPresetFFFF00: "#FFFF00",  
    OfPreset0000FF: "#0000FF", 
    OfPresetFF00FF: "#FF00FF",
    OfPreset00FFFF: "#00FFFF",
    OfPresetFFFFFF: "#FFFFFF",
    OfPreset00005F: "#00005F",
    OfPreset000087: "#000087",
    OfPreset0000AF: "#0000AF",
    OfPreset0000D7: "#0000D7",
    OfPreset005F00: "#005F00",
    OfPreset005F5F: "#005F5F",
    OfPreset005F87: "#005F87",
    OfPreset005FAF: "#005FAF",
    OfPreset005FD7: "#005FD7",
    OfPreset005FFF: "#005FFF",
    OfPreset008700: "#008700",
    OfPreset00875F: "#00875F",
    OfPreset008787: "#008787",
    OfPreset0087AF: "#0087AF",
    OfPreset0087D7: "#0087D7",
    OfPreset0087FF: "#0087FF",
    OfPreset00AF00: "#00AF00",
    OfPreset00AF5F: "#00AF5F",
    OfPreset00AF87: "#00AF87",
    OfPreset00AFAF: "#00AFAF",
    OfPreset00AFD7: "#00AFD7",
    OfPreset00AFFF: "#00AFFF",
    OfPreset00D700: "#00D700",
    OfPreset00D75F: "#00D75F",
    OfPreset00D787: "#00D787",
    OfPreset00D7AF: "#00D7AF",
    OfPreset00D7D7: "#00D7D7",
    OfPreset00D7FF: "#00D7FF",
    OfPreset00FF5F: "#00FF5F",
    OfPreset00FF87: "#00FF87",
    OfPreset00FFAF: "#00FFAF",
    OfPreset00FFD7: "#00FFD7",
    OfPreset5F0000: "#5F0000",
    OfPreset5F005F: "#5F005F",
    OfPreset5F0087: "#5F0087",
    OfPreset5F00AF: "#5F00AF",
    OfPreset5F00D7: "#5F00D7",
    OfPreset5F00FF: "#5F00FF",
    OfPreset5F5F00: "#5F5F00",
    OfPreset5F5F5F: "#5F5F5F",
    OfPreset5F5F87: "#5F5F87",
    OfPreset5F5FAF: "#5F5FAF",
    OfPreset5F5FD7: "#5F5FD7",
    OfPreset5F5FFF: "#5F5FFF",
    OfPreset5F8700: "#5F8700",
    OfPreset5F875F: "#5F875F",
    OfPreset5F8787: "#5F8787",
    OfPreset5F87AF: "#5F87AF",
    OfPreset5F87D7: "#5F87D7",
    OfPreset5F87FF: "#5F87FF",
    OfPreset5FAF00: "#5FAF00",
    OfPreset5FAF5F: "#5FAF5F",
    OfPreset5FAF87: "#5FAF87",
    OfPreset5FAFAF: "#5FAFAF",
    OfPreset5FAFD7: "#5FAFD7",
    OfPreset5FAFFF: "#5FAFFF",
    OfPreset5FD700: "#5FD700",
    OfPreset5FD75F: "#5FD75F",
    OfPreset5FD787: "#5FD787",
    OfPreset5FD7AF: "#5FD7AF",
    OfPreset5FD7D7: "#5FD7D7",
    OfPreset5FD7FF: "#5FD7FF",
    OfPreset5FFF00: "#5FFF00",
    OfPreset5FFF5F: "#5FFF5F",
    OfPreset5FFF87: "#5FFF87",
    OfPreset5FFFAF: "#5FFFAF",
    OfPreset5FFFD7: "#5FFFD7",
    OfPreset5FFFFF: "#5FFFFF",
    OfPreset870000: "#870000",
    OfPreset87005F: "#87005F",
    OfPreset870087: "#870087",
    OfPreset8700AF: "#8700AF",
    OfPreset8700D7: "#8700D7",
    OfPreset8700FF: "#8700FF",
    OfPreset875F00: "#875F00",
    OfPreset875F5F: "#875F5F",
    OfPreset875F87: "#875F87",
    OfPreset875FAF: "#875FAF",
    OfPreset875FD7: "#875FD7",
    OfPreset875FFF: "#875FFF",
    OfPreset878700: "#878700",
    OfPreset87875F: "#87875F",
    OfPreset878787: "#878787",
    OfPreset8787AF: "#8787AF",
    OfPreset8787D7: "#8787D7",
    OfPreset8787FF: "#8787FF",
    OfPreset87AF00: "#87AF00",
    OfPreset87AF5F: "#87AF5F",
    OfPreset87AF87: "#87AF87",
    OfPreset87AFAF: "#87AFAF",
    OfPreset87AFD7: "#87AFD7",
    OfPreset87AFFF: "#87AFFF",
    OfPreset87D700: "#87D700",
    OfPreset87D75F: "#87D75F",
    OfPreset87D787: "#87D787",
    OfPreset87D7AF: "#87D7AF",
    OfPreset87D7D7: "#87D7D7",
    OfPreset87D7FF: "#87D7FF",
    OfPreset87FF00: "#87FF00",
    OfPreset87FF5F: "#87FF5F",
    OfPreset87FF87: "#87FF87",
    OfPreset87FFAF: "#87FFAF",
    OfPreset87FFD7: "#87FFD7",
    OfPreset87FFFF: "#87FFFF",
    OfPresetAF0000: "#AF0000",
    OfPresetAF005F: "#AF005F",
    OfPresetAF0087: "#AF0087",
    OfPresetAF00AF: "#AF00AF",
    OfPresetAF00D7: "#AF00D7",
    OfPresetAF00FF: "#AF00FF",
    OfPresetAF5F00: "#AF5F00",
    OfPresetAF5F5F: "#AF5F5F",
    OfPresetAF5F87: "#AF5F87",
    OfPresetAF5FAF: "#AF5FAF",
    OfPresetAF5FD7: "#AF5FD7",
    OfPresetAF5FFF: "#AF5FFF",
    OfPresetAF8700: "#AF8700",
    OfPresetAF875F: "#AF875F",
    OfPresetAF8787: "#AF8787",
    OfPresetAF87AF: "#AF87AF",
    OfPresetAF87D7: "#AF87D7",
    OfPresetAF87FF: "#AF87FF",
    OfPresetAFAF00: "#AFAF00",
    OfPresetAFAF5F: "#AFAF5F",
    OfPresetAFAF87: "#AFAF87",
    OfPresetAFAFAF: "#AFAFAF",
    OfPresetAFAFD7: "#AFAFD7",
    OfPresetAFAFFF: "#AFAFFF",
    OfPresetAFD700: "#AFD700",
    OfPresetAFD75F: "#AFD75F",
    OfPresetAFD787: "#AFD787",
    OfPresetAFD7AF: "#AFD7AF",
    OfPresetAFD7D7: "#AFD7D7",
    OfPresetAFD7FF: "#AFD7FF",
    OfPresetAFFF00: "#AFFF00",
    OfPresetAFFF5F: "#AFFF5F",
    OfPresetAFFF87: "#AFFF87",
    OfPresetAFFFAF: "#AFFFAF",
    OfPresetAFFFD7: "#AFFFD7",
    OfPresetAFFFFF: "#AFFFFF",
    OfPresetD70000: "#D70000",
    OfPresetD7005F: "#D7005F",
    OfPresetD70087: "#D70087",
    OfPresetD700AF: "#D700AF",
    OfPresetD700D7: "#D700D7",
    OfPresetD700FF: "#D700FF",
    OfPresetD75F00: "#D75F00",
    OfPresetD75F5F: "#D75F5F",
    OfPresetD75F87: "#D75F87",
    OfPresetD75FAF: "#D75FAF",
    OfPresetD75FD7: "#D75FD7",
    OfPresetD75FFF: "#D75FFF",
    OfPresetD78700: "#D78700",
    OfPresetD7875F: "#D7875F",
    OfPresetD78787: "#D78787",
    OfPresetD787AF: "#D787AF",
    OfPresetD787D7: "#D787D7",
    OfPresetD787FF: "#D787FF",
    OfPresetD7AF00: "#D7AF00",
    OfPresetD7AF5F: "#D7AF5F",
    OfPresetD7AF87: "#D7AF87",
    OfPresetD7AFAF: "#D7AFAF",
    OfPresetD7AFD7: "#D7AFD7",
    OfPresetD7AFFF: "#D7AFFF",
    OfPresetD7D700: "#D7D700",
    OfPresetD7D75F: "#D7D75F",
    OfPresetD7D787: "#D7D787",
    OfPresetD7D7AF: "#D7D7AF",
    OfPresetD7D7D7: "#D7D7D7",
    OfPresetD7D7FF: "#D7D7FF",
    OfPresetD7FF00: "#D7FF00",
    OfPresetD7FF5F: "#D7FF5F",
    OfPresetD7FF87: "#D7FF87",
    OfPresetD7FFAF: "#D7FFAF",
    OfPresetD7FFD7: "#D7FFD7",
    OfPresetD7FFFF: "#D7FFFF",
    OfPresetFF005F: "#FF005F",
    OfPresetFF0087: "#FF0087",
    OfPresetFF00AF: "#FF00AF",
    OfPresetFF00D7: "#FF00D7",
    OfPresetFF5F00: "#FF5F00",
    OfPresetFF5F5F: "#FF5F5F",
    OfPresetFF5F87: "#FF5F87",
    OfPresetFF5FAF: "#FF5FAF",
    OfPresetFF5FD7: "#FF5FD7",
    OfPresetFF5FFF: "#FF5FFF",
    OfPresetFF8700: "#FF8700",
    OfPresetFF875F: "#FF875F",
    OfPresetFF8787: "#FF8787",
    OfPresetFF87AF: "#FF87AF",
    OfPresetFF87D7: "#FF87D7",
    OfPresetFF87FF: "#FF87FF",
    OfPresetFFAF00: "#FFAF00",
    OfPresetFFAF5F: "#FFAF5F",
    OfPresetFFAF87: "#FFAF87",
    OfPresetFFAFAF: "#FFAFAF",
    OfPresetFFAFD7: "#FFAFD7",
    OfPresetFFAFFF: "#FFAFFF",
    OfPresetFFD700: "#FFD700",
    OfPresetFFD75F: "#FFD75F",
    OfPresetFFD787: "#FFD787",
    OfPresetFFD7AF: "#FFD7AF",
    OfPresetFFD7D7: "#FFD7D7",
    OfPresetFFD7FF: "#FFD7FF",
    OfPresetFFFF5F: "#FFFF5F",
    OfPresetFFFF87: "#FFFF87",
    OfPresetFFFFAF: "#FFFFAF",
    OfPresetFFFFD7: "#FFFFD7",
    OfPreset080808: "#080808",
    OfPreset121212: "#121212",
    OfPreset1C1C1C: "#1C1C1C",
    OfPreset262626: "#262626",
    OfPreset303030: "#303030",
    OfPreset3A3A3A: "#3A3A3A",
    OfPreset444444: "#444444",
    OfPreset4E4E4E: "#4E4E4E",
    OfPreset585858: "#585858",
    OfPreset626262: "#626262",
    OfPreset6C6C6C: "#6C6C6C",
    OfPreset767676: "#767676",
    OfPreset8A8A8A: "#8A8A8A",
    OfPreset949494: "#949494",
    OfPreset9E9E9E: "#9E9E9E",
    OfPresetA8A8A8: "#A8A8A8",
    OfPresetB2B2B2: "#B2B2B2",
    OfPresetBCBCBC: "#BCBCBC",
    OfPresetC6C6C6: "#C6C6C6",
    OfPresetD0D0D0: "#D0D0D0",
    OfPresetDADADA: "#DADADA",
    OfPresetE4E4E4: "#E4E4E4",
    OfPresetEEEEEE: "#EEEEEE"

  }

  public webColor = {

    AliceBlue: "aliceblue", 
    AntiqueWhite: "antiquewhite",
    Aqua: "aqua",
    AquaMarine: "aquamarine",
    Azure: "azure",
    Beige: "beige",
    Bisque: "bisque",
    Black: "black",
    Blanchedalmond: "blanchedalmond",
    Blue: "blue",
    BlueViolet: "blueviolet",
    Brown: "brown",
    Burlywood: "burlywood",
    CadetBlue: "cadetblue",
    Chartreuse: "chartreuse",
    Chocolate: "chocolate",
    Coral: "coral",
    CornFlowerBlue: "cornflowerblue",
    Cornsilk: "cornsilk",
    Crimson: "crimson",
    Cyan: "cyan",
    DarkBlue: "darkblue",
    DarkCyan: "darkcyan",
    DarkGoldenRod: "darkgoldenrod",
    DarkGray: "darkgray",
    DarkGreen: "darkgreen",
    DarkKhaki: "darkkhaki",
    DarkMagenta: "darkmagenta",
    DarkOliveGreen: "darkolivegreen",
    DarkOrange: "darkorange",
    DarkOrchild: "darkorchid",
    DarkRed: "darkred",
    DarkSalmon: "darksalmon",
    DarkSeaGreen: "darkseagreen",
    DarkSlateBlue: "darkslateblue",
    DarkSlateGray: "darkslategray",
    DarkTurquiose: "darkturquoise",
    DarkViolet: "darkviolet",
    DeepPink: "deeppink",
    DeepSkyBlue: "deepskyblue",
    DimGray: "dimgray",
    DodgerBlue: "dodgerblue",
    Firebrick: "firebrick",
    Floralwhite: "floralwhite",
    FlorestGreen: "florestgreen",
    Fucsia: "fucsia",
    Gainsboro: "gainsboro",
    Ghostwhite: "ghostwhite",
    Gold: "gold",
    GoldenRod: "goldenrod",
    Gray: "gray",
    Green: "green",
    GreenYellow: "greenyellow",
    Honeydew: "honeydew",
    Hotpink: "hotpink",
    IndianRed: "indianred",
    Ivory: "ivory",
    Khaki: "khaki", 
    Lavender: "lavender",
    LavenderBlush: "lavenderblush",
    LawnGreen: "lawngreen",
    Lemonchiffon: "lemonchiffon",
    LightBlue: "lightblue",
    LightCoral: "lightcoral",
    LightCyan: "lightcyan",
    LightGoldenRodYellow: "lightgoldenrodyellow",
    LightGray: "lightgray",
    LightGreen: "lightgreen",
    LightPink: "lightpink",
    LightSalmon: "lightsalmon",
    LightSeaGreen: "lightseagreen",
    LightSkyBlue:  "lightskyblue",
    LightSlateGray: "lightslategray",
    LightSteelBlue: "lightsteelblue",
    LightYellow: "lightyellow",
    Lime: "lime", 
    LimeGreen: "limegreen", 
    Linen: "linen",
    Magenta: "magenta",
    Maroon: "maroon", 
    MediumAquamarine: "mediumaquamarine",
    MediumBlue: "mediumblue",
    MediumOrchid: "mediumorchid",
    MediumSeaGreen: "mediumseagreen",
    MediumSlateBlue: "mediumslateblue",
    MediumSpringGreen: "mediumspringgreen",
    MediumTurquiose: "mediumturquoise",
    MediumVioletRed: "mediumvioletred",
    MidmightBlue: "midnightblue",
    MintCream: "mintcream",
    Mistyrose: "mistyrose",
    Moccasin: "moccasin",
    NavajoWhite: "navajowhite",
    Navy: "navy",
    OldLace: "oldlace",
    Olive: "olive",
    OliveDrab: "olivedrab",
    Orange: "orange",
    OrangeRed: "orangered",
    Orchid: "orchid",
    PaleGoldenRod: "palegoldenrod",
    PaleGreen: "palegreen",
    PaleTurquoise: "paleturquoise",
    PaleVioletRed: "palevioletred",
    PapayaWhip: "papayawhip",
    Peachpuff: "peachpuff",
    Peru: "peru",
    Pink: "pink",
    Plum: "plum",
    PowderBlue: "powderblue",
    Purple: "purple",
    Red: "red",
    RosyBrown: "rosybrown",
    RoyalBlue: "royalblue",
    SaddleBrown: "saddlebrown",
    Salmon: "salmon",
    Sandybrown: "sandybrown",
    SeaGreen: "seagreen",
    Seashell: "seashell",
    Silver: "silver",
    SkyBlue: "skyblue",
    SlateBlue: "slateblue",
    SlateGray: "slategray",
    Snow: "snow",
    SpringGreen: "springgreen",
    SteelBlue: "steelblue",
    Tan: "tan",
    Teal: "teal",
    Thistle: "thistle",
    Tomato: "tomato",
    Turquiose: "turquiose",
    Violet: "violet",
    Wheat: "wheat",
    White: "white",
    Whitesmoke: "whitesmoke",
    Yellow: "yellow",
    YellowGreen: "yellowgreen"

  }

  public mountStylesheet() { }

  public defineColorObject() { }

};

/** *Wertsfy Builder Karzok Class* */
class WERTSFY_BUILDER_KARZOK { };

/** *Wertsfy Builder Sollpass Class* */
class WERTSFY_BUILDER_SOLLPASS { };

/** *Wertsfy Hooks Language Class* */
class WERTSFY_HOOKS_LANGUAGE { }
