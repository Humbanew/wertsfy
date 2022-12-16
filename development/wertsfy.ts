/**
 * Wertsfy - Copyright 2020, 2021, 2022. All rights reserved.
 * Humbanew Project Huon Subdivision
 */

import { MathematicDefines } from "wertsfy-typedefs";

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
class WERTSFY_MATH_CALCULATOR {
  
  public common(operation: string, ...numbers: number[]): number {
    
    let resultado: number = 0;

    if(operation != MathematicDefines.common) {
      return null;
    }
    
    for(let i = 0; i < numbers.length; i++) {
      
      switch(operation) {
        case operation = "plus":
          resultado = resultado + numbers[i];
        case operation = "minus":
          resultado = resultado - numbers[i];
        case operation = "multiplication":
          resultado = resultado * numbers[i];
        case operation = "divisor":
          resultado = resultado / numbers[i];
        case operation = "power":
          resultado = resultado ** numbers[i];
      }
    
    }

    return resultado;

  }

  public advanced(operation: string, ...numbers: number[]) {

    let resultado: number = 0;

    if(operation != MathematicDefines.advanced) {
      return null;
    }

    switch(operation) {
      case operation = "square-root":
        resultado = wertsfy.mathematic.corebase.sqrt(numbers[0]);
      case operation = "cubic-root":
        resultado = wertsfy.mathematic.corebase.cbrt(numbers[0]);
      case operation = "antilog":
        resultado = 1 ** wertsfy.mathematic.corebase.logx(numbers[0], numbers[1]);
      case operation = "antilogm1":
        resultado = 1 ** wertsfy.mathematic.corebase.logxm1(numbers[0], numbers[1]);
      case operation = "antilogp1":
        resultado = 1 ** wertsfy.mathematic.corebase.logxp1(numbers[0], numbers[1]);
      case operation = "colog":
        resultado = -1 * wertsfy.mathematic.corebase.logx(numbers[0], numbers[1]);
      case operation = "cologm1":
        resultado = -1 * wertsfy.mathematic.corebase.logxm1(numbers[0], numbers[1]);
      case operation = "cologp1":
        resultado = -1 * wertsfy.mathematic.corebase.logxp1(numbers[0], numbers[1]);
    }

    return resultado;

  }

  protected expressions = { 

    formulaDoTeoremaDeGirard: (expressao: string): number[]|string[]|void => {
      let resultado: any, valores: any;
      let verificacao = /(([0-9]+(\.[0-9]+)?)([a-zA-Z])?([0-9])?)((\+)?(\-)?)/gi;
      let pegaTermosComIcognita = /([0-9]+(\.[0-9]+)?)([a-zA-Z])/gi;
      let pegaTermosSemIcognita = /([0-9]+(\.[0-9]+)?)(\=)/gi;
      let valoresConvertidos: any;
      if (verificacao == null) { return console.error("Expressão Adicionada é Inválida ou está incorreta!"); }
      valores.push(expressao.match(pegaTermosComIcognita));
      if(expressao.match(pegaTermosSemIcognita) != null) { valores.push(expressao.match(pegaTermosSemIcognita)); }
      for (let i = 0; i < valores[0].length; i++) {
        valores[0][i] = parseFloat(valores[0][i]);
        valoresConvertidos.push(valores[0][i]);
      }
      valores[1] = parseFloat(valores[1]);
      valoresConvertidos.push(valores[1]);
      for (let i = 1; i <= valoresConvertidos.length - 1; i++) {
        let verificadorSinal = i % 2;
        if (verificadorSinal == 0) { resultado.push(valoresConvertidos[i] / valoresConvertidos[0]); }
        if (verificadorSinal == 1) { resultado.push(-1 * (valoresConvertidos[i] / valoresConvertidos[0])); }
      }
    return resultado;
    },
  
    formulaTeoremaDeTalesDeMileto: (n1: number, n2: number, n3: number): number => {
      return ( n2 * n3 ) / n1;
    },

    formulaTeoremaDePitagoras: (a: number, b: number): number => {
      return wertsfy.mathematic.corebase.sqrt(((a ** 2) + (b ** 2)));
    },

    formulaRelacaoPitagoricaTriangulo1: (m: number, n: number): number => {
      return wertsfy.mathematic.corebase.sqrt(m * n);
    },
           
    formulaRelacaoPitagoricaTriangulo2: (a: number, n: number): number => {
      return wertsfy.mathematic.corebase.sqrt(a * n);
    },
    
    formulaRelacaoPitagoricaTriangulo3: (h: number, b: number, c: number): number => {
      return (b * c) / h;
    },
    
    formulaCalculoDoFatorial: (valor: number): number => {
      let resultado: number = 1;
      for (let i = valor; i > 0; i--) { resultado = i * resultado; };
      return resultado;
    },

    formulaCalculoDaCombinacao: (total: number, divisor: number): number => {
      let resultado: number = 0, totalConvertido: number = 1, divisorConvertido: number = 1;
      for (let i = total; i > 0; i--) { totalConvertido = totalConvertido * i; }
      for (let j = divisor; j > 0; j--) { divisorConvertido = divisorConvertido * j; }
      resultado = totalConvertido / (divisorConvertido * (totalConvertido - divisorConvertido));
      return resultado;
    },

    formulaCalculoDoArranjo: (total: number, divisor: number): number => {
      let resultado: number = 0, totalConvertido: number = 1, divisorConvertido: number = 1;
      for (let i = total; i > 0; i--) { totalConvertido = totalConvertido * i; }
      for (let j = divisor; j > 0; j--) { divisorConvertido = divisorConvertido * j; }
      resultado = totalConvertido / (totalConvertido - divisorConvertido);
      return resultado;
    },
    
    formulaCalculoDaProbabilidade: (valor: number, valorTotal: number): number => {
      return valor / valorTotal;
    },

    formulaCalculoDoConjugadoNumeroComplexo: (expressao: string): string => {
      let resultado = '', verificaSinal = /^(\-)/gi;
      if (verificaSinal != null) { expressao.replace("-", ''); }
      resultado = expressao;
      return resultado;
    },

    formulaCalculoDoTeoremaDeStirling: (valor: number): number => {
      let resultado: number = 0;
      resultado = (wertsfy.mathematic.corebase.log(valor) * valor) / valor;
      return resultado;
    },

    formulaCalculoDaRelacaoDeEuler: (vertices: number, arestas: number, faces: number): number => {
      return (vertices - (arestas + faces)) - 2;
    },

    formulaCalculoDasPotenciasDeI: (valor: number): string => {
      let resultado = '', divisor = valor % 4;
      if (divisor == 0) { resultado = 'i'; }
      if (divisor == 1) { resultado = '-1'; }
      if (divisor == 2) { resultado = '-i'; }
      if (divisor == 3) { resultado = '1'; }
      return resultado;
    },

    formulaCalculoDaPorcentagem: (valorParte: number): number => {
      return valorParte / 10 ** 2;
    },

    formulaCalculoDaPorcentagem10E3: (valorParte: number): number => {
      return valorParte / 10 ** 3;
    },
    
    formulaCalculoDaPorcentagem10E4: (valorParte: number): number => {
      return valorParte / 10 ** 4;
    },

    formulaCalculoDaPorcentagem10E5: (valorParte: number): number => {
      return valorParte / 10 ** 5;
    },

    formulaCalculoDaPorcentagemX: (valorParte: number, valorTotal: number): number => {
      return valorParte / valorTotal;
    },

    formulaCalculoDaDeterminante2x2: (a00: number, a01: number, a10: number, a11: number): number => {
      let resultado: number = 0, vetorPrimario = a00 * a11, vetorSecundario = a01 * a10;
      resultado = vetorPrimario - vetorSecundario;
      return resultado;
    },
    
    formulaCalculoDaDeterminante3x3: (a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number): number => {
      let resultado: number = 0;
      let vetorPrincipal1 = a00 * a11 * a22, vetorPrincipal2 = a01 * a12 * a20, vetorPrincipal3 = a02 * a10 * a21;
      let vetorSecundario1 = a02 * a11 * a20, vetorSecundario2 = a00 * a12 * a21, vetorSecundario3 = a01 * a10 * a22;
      resultado = (vetorPrincipal1 + vetorPrincipal2 + vetorPrincipal3) - (vetorSecundario1 + vetorSecundario2 + vetorSecundario3);
      return resultado;
    },





  // Arrumar aqui!
    formula_soma_polinomios(polinomio1: string, polinomio2: string) {
      let resultado = '', verificaSinal = /^(\-)/gi;
      if (verificaSinal != null) { polinomio1.replace("-", ''); }
      if (verificaSinal != null) { polinomio2.replace("-", ''); }
      resultado = polinomio1 + '+' + polinomio2;
      return resultado;
    },

    formula_subtracao_polinomios(polinomio1: string, polinomio2: string) {
      let resultado = '', verificaSinal = /^(\-)/gi;
      if (verificaSinal != null) { polinomio1.replace("-", ''); }
      if (verificaSinal != null) { polinomio2.replace("-", ''); }
      resultado = polinomio1 + '-' + polinomio2;
      return resultado;
    },

    formula_multiplicacao_polinomios(polinomio1: string, polinomio2: string) {
      let resultado = '', verificaSinal = /^(\-)/gi;
      if (verificaSinal != null) { polinomio1.replace("-", ''); }
      if (verificaSinal != null) { polinomio2.replace("-", ''); }
      resultado = polinomio1 + '*' + polinomio2;
      return resultado;
    },

    formula_divisao_polinomios(polinomio1: string, polinomio2: string) {
      let resultado = '', verificaSinal = /^(\-)/gi;
      if (verificaSinal != null) { polinomio1.replace("-", ''); }
      if (verificaSinal != null) { polinomio2.replace("-", ''); }
      resultado = polinomio1 + '/' + polinomio2;
      return resultado;
    },

    formula_soma_matrizes(matriz: [][], matriz2: [][]): number[][] {
      let resultado;
      for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
          resultado[i][j] = matriz[i][j] + matriz2[i][j];
        }
      }
      return resultado;
    },

    formula_subtracao_matrizes(matriz: [][], matriz2: [][]) {
      let resultado;
      for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
          resultado[i][j] = matriz[i][j] - matriz2[i][j];
        }
      }
      return resultado;
    },

    formula_multiplicacao_matrizes(matriz: [][], matriz2: [][]) {
      let resultado;
      for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
          if(matriz[0][j] != matriz2[i]){ return "Matrizes não podem ser multiplicadas"; }
          resultado[i][j] = matriz[i][j] * matriz2[i][j];
        }
      }
      return resultado;
    },

    formula_divisao_matrizes(matriz: [][], matriz2: [][]) {
      let resultado;
      for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
          resultado[i][j] = matriz[i][j] / matriz2[i][j];
        }
      }
      return resultado;
    },

    formula_calculo_da_velocidade(espaco: number, tempo: number) {
      return espaco / tempo;
    },

    formula_calculo_do_espaco(velocidade: number, tempo: number) {
      return velocidade * tempo;
    },

    formula_calculo_do_tempo(velocidade: number, espaco: number) {
      return espaco / velocidade;
    },

    formula_calculo_da_aceleracao(velocidade: number, tempo: number) {
      return velocidade / tempo;
    },

    formula_calculo_da_equacao_horaria_do_tempo(tempo: number, tempoInicial: number, velocidade: number, aceleracao: number) {
      return tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2));
    },

    formula_calculo_da_equacao_horaria_do_espaco(espaco: number, espacoInicial: number, aceleracao: number) {
      return espacoInicial + aceleracao * espaco;
    },

    formula_calculo_da_equacao_horaria_da_velocidade(velocidade: number, tempo: number, aceleracao: number) {
      return velocidade + aceleracao * tempo;
    },

    formula_calculo_da_equacao_horaria_da_aceleracao(aceleracao: number, tempo: number, velocidade: number) {
      return aceleracao + (velocidade * tempo);
    },

    formula_calculo_da_equacao_horaria_da_forca(forca: number, tempo: number, aceleracao: number) {
      return forca + (aceleracao * tempo);
    },

    formula_calculo_da_equacao_horaria_do_tempo_espaco(tempo: number, espaco: number, tempoInicial: number, espacoInicial: number, velocidade: number, aceleracao: number) {
      return tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2)) + espacoInicial + aceleracao * espaco;
    },

    formula_calculo_da_energia_cinetica(massa: number, velocidade: number) {
      return (massa * velocidade ** 2) / 2;
    },

    formula_calculo_da_energia_potencial_elastica(constanteElastica: number, distancia: number) {
      return (constanteElastica * distancia ** 2) / 2;
    },

    formula_calculo_da_energia_potencial_gravitacional(massa: number, gravidade: number, altura: number) {
      return massa * gravidade * altura;
    },

    formula_calculo_do_potencial_mecanico(velocidade: number, constanteElastica: number, distancia: number, massa: number, gravidade: number, altura: number, energPotElas: boolean, energPotGrav: boolean) {
      let resultado = 0;
      if (energPotElas == true) { resultado = this.formula_calculo_da_energia_cinetica(massa, velocidade) + this.formula_calculo_da_energia_potencial_elastica(constanteElastica, distancia); }
      if (energPotGrav == true) { resultado = this.formula_calculo_da_energia_cinetica(massa, velocidade) + this.formula_calculo_da_energia_potencial_gravitacional(massa, gravidade, altura); }
      return resultado;
    },

    formula_calculo_do_potencial_elastico(constanteElastica: number, distancia: number) {
      let resultado = this.formula_calculo_da_energia_potencial_elastica(constanteElastica, distancia);
      return resultado;
    },

    formula_calculo_do_plano_inclinado_sem_atrito(massa: number, gravidade: number) {
      let resultado = massa * gravidade;
      return resultado;
    },

    formula_calculo_do_plano_inclinado_com_atrito(forcaDeAtrito: number, massa: number, gravidade: number, angulo: number) {
      let resultado = forcaDeAtrito * massa * gravidade * angulo;
      return resultado;
    },

    formula_calculo_da_aceleracao_no_plano_inclinado_eixo_x(massa: number, gravidade: number, angulo: number) {
      let resultado = massa * gravidade * wertsfy.mathematic.corebase.sin(angulo);
      return resultado;
    },

    formula_calculo_da_aceleracao_no_plano_inclinado_eixo_y(massa: number, gravidade: number, angulo: number) {
      let resultado = massa * gravidade * wertsfy.mathematic.corebase.cos(angulo);
      return resultado;
    },

    formula_calculo_do_lancamento_horizontal(gravidade: number, tempo: number) {
      let resultado = (gravidade * tempo ** 2) / 2;
      return resultado;
    },

    formula_calculo_da_equacao_de_torricelli(velocidadeInicial: number, aceleracao: number, espacoInicial: number, espacoFinal: number) {
      let resultado = wertsfy.mathematic.corebase.sqrt((velocidadeInicial ** 2) + 2 * aceleracao * (espacoFinal - espacoInicial));
      return resultado;
    },

    formula_calculo_da_altura_maxima_de_um_lancamento_vertical(velocidadeInicial: number, gravidade: number, angulo: number) {
      let resultado = (velocidadeInicial ** 2) * ((wertsfy.mathematic.corebase.sin(angulo) ** 2) / 2) * gravidade;
      return resultado;
    },

    formula_calculo_do_alcance_de_um_lancamento_vertical(velocidade: number, tempo: number, angulo: number) {
      let resultado = velocidade * wertsfy.mathematic.corebase.cos(angulo) * tempo;
      return resultado;
    },

    formula_calculo_do_alcance_maximo_de_um_lancamento_vertical(velocidade: number, angulo: number, gravidade: number) {
      let resultado = (velocidade ** 2 * (wertsfy.mathematic.corebase.sin(angulo) ** 2)) / gravidade;
      return resultado;
    },

    formula_calculo_do_calor_sensivel(massa: number, calorEspecifico: number, temperaturaInicial: number, temperaturaFinal: number) {
      let resultado = massa * calorEspecifico * (temperaturaFinal - temperaturaInicial);
      return resultado;
    },

    formula_calculo_do_calor_latente(quantidadeDeCalor: number, massa: number) {
      let resultado = quantidadeDeCalor / massa;
      return resultado;
    },

    formula_calculo_das_leis_de_newton(massa: number, aceleracao: number) {
      let resultado = massa * aceleracao;
      return resultado;
    },

    formula_calculo_do_trabalho(massa: number, gravidade: number, altura: number) {
      let resultado = massa * gravidade * altura;
      return resultado;
    },

    formula_calculo_do_consumo_de_energia(tempo: number, correnteEletrica: number, ddp: number) {
      let resultado = correnteEletrica * ddp * tempo;
      return resultado;
    },

    formula_calculo_do_teorema_de_pascal(forca1: number, forca2: number, area1: number, area2: number, forca1Inexistente: boolean, forca2Inexistente: boolean, area1Inexistente: boolean, area2Inexistente: boolean) {
      let resultado = 0;
      if (forca1Inexistente == true) { resultado = (area1 * forca2) / area2; }
      if (forca2Inexistente == true) { resultado = (area2 * forca1) / area1; }
      if (area1Inexistente == true) { resultado = (forca1 * area2) / forca2; }
      if (area2Inexistente == true) { resultado = (forca2 * area1) / forca1; }
      return resultado;
    },

    formula_calculo_do_teorema_de_stevin(densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number) {
      let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
      return resultado;
    },

    formula_calculo_do_teorema_de_boltzmann(temperatura: number, constante: number) {
      let resultado = constante * (temperatura ** 4);
      return resultado;
    },

    formula_calculo_do_teorema_de_coulomb(correnteEletrica: number, distancia: number) {
      let resultado = correnteEletrica * distancia;
      return resultado;
    },

    formula_calculo_do_teorema_de_planck(energia: number, constante: number) {
      let resultado = constante * (energia ** 2);
      return resultado;
    },

    formula_calculo_da_forca_gravitacional(gravidade: number, massaPlaneta: number, distancia: number) {
      let resultado = gravidade * (massaPlaneta / distancia ** 2);
      return resultado;
    },

    formula_calculo_do_aceleracao_centripeta_movimento_circular_uniforme(velocidade: number, raio: number) {
      let resultado = (velocidade ** 2) / raio;
      return resultado;
    },

    formula_calculo_do_velocidade_angular_movimento_circular_uniforme(anguloInicial: number, anguloFinal: number, tempoInicial: number, tempoFinal: number) {
      let resultado = (anguloFinal - anguloInicial) / (tempoFinal - tempoInicial);
      return resultado;
    },

    formula_calculo_do_velocidade_linear_movimento_circular_uniforme(frequencia: number, raio: number) {
      let resultado = (2 * wertsfy.mathematic.corebase.Pi * frequencia) * raio;
      return resultado;
    },

    formula_calculo_da_equacao_horaria_do_tempo_movimento_circular_uniformente_variado(velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number) {
      let resultado = velocidadeAngularInicial + aceleracaoAngular * tempo;
      return resultado;
    },

    formula_calculo_da_equacao_horaria_do_espaco_movimento_circular_uniformente_Variado(posicaoAngularInicial: number, velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number) {
      let resultado = posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;
      return resultado;
    },

    formula_calculo_de_toricelli_movimento_circular_uniformente_variado(velocidadeAngularInicial: number, aceleracaoAngular: number, deslocamentoAngularInicial: number, deslocamentoAngularFinal: number) {
      let resultado = wertsfy.mathematic.corebase.sqrt(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngularFinal - deslocamentoAngularInicial));
      return resultado;
    },

    formula_calculo_da_aceleracao_angular_movimento_circular_uniformente_variado(velocidadeAngularInicial: number, velocidadeAngularFinal: number, tempoInicial: number, tempoFinal: number) {
      let resultado = (velocidadeAngularFinal - velocidadeAngularInicial) / (tempoFinal - tempoInicial);
      return resultado;
    },

    formula_calculo_da_equacao_horaria_de_posicao_do_movimento_harmonico_simples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) {
      let resultado = velocidadeAngular * amplitude * wertsfy.mathematic.corebase.cos(tempo + faseInicial);
      return resultado;
    },

    formula_calculo_da_equacao_horaria_de_velocidade_do_movimento_harmonico_simples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) {
      let resultado = -1 * velocidadeAngular * amplitude * wertsfy.mathematic.corebase.sin(tempo + faseInicial);
      return resultado;
    },

    formula_calculo_da_equacao_horaria_de_aceleracao_do_movimento_harmonico_simples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) {
      let resultado = -1 * velocidadeAngular ** 2 * amplitude * wertsfy.mathematic.corebase.cos(tempo + faseInicial);
      return resultado;
    },

    formula_calculo_do_periodo(frequencia: number) {
      let resultado = 1 / frequencia;
      return resultado;
    },

    formula_calculo_da_frequencia(periodo: number) {
      let resultado = 1 / periodo;
      return resultado;
    },

    formula_calculo_da_temperatura(valor: number, deCelsiusParaKelvin: boolean, deCelsiusParaFahrenheit: boolean, deKelvinParaCelsius: boolean, deKelvinParaFahrenheit: boolean, deFahrenheitParaKelvin: boolean, deFahrenheitParaCelsius: boolean) {
      let resultado = 0;
      if (deCelsiusParaFahrenheit == true) { resultado = (1.8 * valor) + 32; }
      if (deCelsiusParaKelvin == true) { resultado = valor - 273; }
      if (deFahrenheitParaCelsius == true) { resultado = (valor - 32) / 1.8; }
      if (deFahrenheitParaKelvin == true) { resultado = ((valor - 32) * 5) / 9 + 273; }
      if (deKelvinParaCelsius == true) { resultado = valor + 273; }
      if (deKelvinParaFahrenheit == true) { resultado = (valor - 273) * 1.8 + 32; }
      return resultado;
    },

    formula_calculo_da_dilatacao_linear(comprimentoInicial: number, coeficienteDeDilatacaoLinear: number, temperaturaInicial: number, temperaturaFinal: number) {
      let resultado = comprimentoInicial * coeficienteDeDilatacaoLinear * (temperaturaFinal - temperaturaInicial);
      return resultado;
    },

    formula_calculo_da_dilatacao_superficial(areaInicial: number, coeficienteDeDilatacaoSuperficial: number, temperaturaInicial: number, temperaturaFinal: number) {
      let resultado = areaInicial * coeficienteDeDilatacaoSuperficial * (temperaturaFinal - temperaturaInicial);
      return resultado;
    },

    formula_calculo_da_dilatacao_volumetrica(volumeInicial: number, coeficienteDeDilatacaoVolumetrica: number, temperaturaInicial: number, temperaturaFinal: number) {
      let resultado = volumeInicial * coeficienteDeDilatacaoVolumetrica * (temperaturaFinal - temperaturaInicial);
      return resultado;
    },

    formula_calculo_do_principio_fundamental_da_hidroestatica_hidrodinamica(densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number) {
      let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
      return resultado;
    },

    formula_calculo_do_empuxo_da_hidroestatica_hidrodinamica(densidade: number, gravidade: number, volume: number) {
      let resultado = densidade * gravidade * volume;
      return resultado;
    },

    formula_calculoDoPesoAparenteDaHidroestaticaHidrodinamica(peso: number, densidade: number, gravidade: number, volume: number) {
      let resultado = peso - this.formula_calculo_do_empuxo_da_hidroestatica_hidrodinamica(densidade, gravidade, volume);
      return resultado;
    },

    formula_calculo_da_equacao_de_lagrange(x: number, y: number, xi: number, yi: number, xii: number, yii: number, xiii: number, yiii: number) {
      let resultado = (x - xi) * (y - yi) / (x - xi) * (y - yii) / (x - xii) * (y - yiii) / (x - xiii);
      return resultado;
    },

    formula_calculo_do_atrito(coeficienteDeAtrito: number, massa: number) {
      let resultado = coeficienteDeAtrito * massa;
      return resultado;
    },

    formula_calculo_da_lei_de_coulomb(carga1: number, carga2: number, distancia: number) {
      let resultado = (9 * 10 ** 9) * (carga1 * carga2 / distancia ** 2);
      return resultado;
    },

    formula_calculo_da_lei_de_ohm(resistencia: number, corrente: number) {
      let resultado = resistencia * corrente;
      return resultado;
    },

    formula_calculo_do_efeito_joule(corrente: number, resistencia: number, tempo: number) {
      let resultado = (corrente ** 2) * resistencia * tempo;
      return resultado;
    },

    formula_calculo_da_lei_de_lenz(intensidadeDoCampoMagnetico: number, areaDaSuperficie: number, cosAngulo: number) {
      let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * wertsfy.mathematic.corebase.cos(cosAngulo);
      return resultado;
    },

    formula_calculo_da_forca_eletromotriz(potenciaTotalGerador: number, intensidadeDaCorrente: number) {
      let resultado = potenciaTotalGerador / intensidadeDaCorrente;
      return resultado;
    },

    formula_calculo_da_contra_forca_eletromotriz(potenciaTotalGerador: number, intensidadeDaCorrente: number) {
      let resultado = -1 * this.formula_calculo_da_forca_eletromotriz(potenciaTotalGerador, intensidadeDaCorrente);
      return resultado;
    },

    formula_calculo_do_efeito_fotoeletrico(frequenciaDaLuz: number) {
      let resultado = (6.662 * 10 ** -34) * frequenciaDaLuz;
      return resultado;
    },

    formula_calculo_da_densidade(massa: number, volume: number) {
      let resultado = massa / volume;
      return resultado;
    },

    formula_calculo_da_titulacao(massaBase: number, massaAcido: number, volumeBase: number, volumeAcido: number, naoTemMassaBase: boolean, naoTemMassaAcido: boolean, naoTemVolumeBase: boolean, naoTemVolumeAcido: boolean) {
      let resultado = 0;
      if (naoTemMassaAcido == true) { resultado = massaBase * volumeBase / volumeAcido; }
      if (naoTemMassaBase == true) { resultado = massaAcido * volumeAcido / volumeBase; }
      if (naoTemVolumeAcido == true) { resultado = massaBase * volumeBase / massaAcido; }
      if (naoTemVolumeBase == true) { resultado = massaAcido * volumeAcido / massaBase; }
      return resultado;
    },

    formula_calculo_da_concentracao(massaSoluto: number, volume: number) {
      let resultado = massaSoluto / volume;
      return resultado;
    },

    formula_calculo_do_rendimento(valorParte: number, valorTotal: number) {
      let resultado = this.formula_calculo_da_porcentagem_x(valorParte, valorTotal);
      return resultado;
    },

    formula_calculo_da_lei_geral_dos_gases(pressao1: string, pressao2: string, volume1: string, volume2: string, temperatura1: string, temperatura2: string) {
      let verificacao = /([a-zA-Z])/gi;
      let resultado = 0;
      if (pressao1.match(verificacao) != null) { 
        resultado = (parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); 
      }
      if (pressao2.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(volume2) * parseFloat(temperatura1)); }
      if (volume1.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); }
      if (volume2.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(temperatura1)); }
      if (temperatura1.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2)); }
      if (temperatura2.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); }
      return resultado;
    },

    formula_regra_de_tres_simples(valor1: number, valor2: number, valor3: number, localDaVariavel: string = ("A" || "B" || "C")) {
      if (localDaVariavel == "a") { localDaVariavel = "A"; }
      if (localDaVariavel == "b") { localDaVariavel = "B"; }
      if (localDaVariavel == "c") { localDaVariavel = "C"; }
      let resultado = 0;
      switch (localDaVariavel) {
        case "A": resultado = valor1 * valor2 / valor3; break;
        case "B": resultado = valor1 * valor3 / valor2; break;
        case "C": resultado = valor2 * valor3 / valor1; break;
      }
      return resultado;
    },

    formula_regra_de_tres_composta(valor1: number, valor2: number, valor3: number, valor4: number, valor5: number, valor6: number, valor7: number, localDaVariavel: string = ("A" || "B" || "C" || "D" || "E" || "F" || "G")) {
      if (localDaVariavel == "a") { localDaVariavel = "A"; }
      if (localDaVariavel == "b") { localDaVariavel = "B"; }
      if (localDaVariavel == "c") { localDaVariavel = "C"; }
      if (localDaVariavel == "d") { localDaVariavel = "D"; }
      if (localDaVariavel == "e") { localDaVariavel = "E"; }
      if (localDaVariavel == "f") { localDaVariavel = "F"; }
      if (localDaVariavel == "g") { localDaVariavel = "G"; }
      let resultado = 0;
      switch (localDaVariavel) {
        case "A": resultado = valor1 * valor2 / valor3; break;
        case "B": resultado = valor1 * valor3 / valor2; break;
        case "C": resultado = valor2 * valor3 / valor1; break;
        case "D": resultado = valor4 * valor5 / valor6; break;
        case "E": resultado = valor4 * valor6 / valor5; break;
        case "F": resultado = valor5 * valor6 / valor4; break;
        case "G": resultado = valor7 * valor5 / valor6; break;
      }
      return resultado;
    },

    formula_sistema_de_equacoes(expressao1: string, expressao2: string) {
      let resultado = "", verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\=)(\-)?([0-9]+)(\.[0-9]+)?)/gi;
      if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) { return console.error("A expressão inserida não é válida"); }
      let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi,
        pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi,
        pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;
      let parteAA = expressao1.match(pegaParteA)?.toString(); 
      let parteAB = expressao2.match(pegaParteA)?.toString();
      let parteBA = expressao1.match(pegaParteB)?.toString();
      let parteBB = expressao2.match(pegaParteB)?.toString();
      let parteCA = expressao1.match(pegaParteC)?.toString(); 
      let parteCB = expressao2.match(pegaParteC)?.toString();
      resultado = `${parseFloat(parteAA+parteAB)}x${parseFloat(parteBA+parteBB)}y=${parseFloat(parteCA+parteCB)}`;
      if (parseFloat(parteBA+parteBB) > 0) { 
        resultado = `${parseFloat(parteAA+parteAB)}x+${parseFloat(parteBA+parteBB)}y=${parseFloat(parteCA+parteCB)}`; 
      }
      return resultado;
    },

    formula_sistema_de_inequacoes(expressao1: string, expressao2: string) {
      let resultado = "", verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\<\=)?(\>\=)?(\<)?(\>)?(\-)?([0-9]+)(\.[0-9]+)?)/gi;
      if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) { return console.error("A expressão inserida não é válida"); }
      let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi,
        pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi,
        pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;
      let parteAA = expressao1.match(pegaParteA)?.toString();
      let parteAB = expressao2.match(pegaParteA)?.toString();
      let parteBA = expressao1.match(pegaParteB)?.toString();
      let parteBB = expressao2.match(pegaParteB)?.toString();
      let parteCA = expressao1.match(pegaParteC)?.toString();
      let parteCB = expressao2.match(pegaParteC)?.toString();
      resultado = `${parseFloat(parteAA + parteAB)}x${parseFloat(parteBA + parteBB)}y=${parseFloat(parteCA + parteCB)}`;
      if (parseFloat(parteBA + parteBB) > 0) { 
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y=${parseFloat(parteCA + parteCB)}`;
      }
      if (parseFloat(parteAA + parteAB) < parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) < parseFloat(parteCA + parteCB)) { 
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y<${parseFloat(parteCA + parteCB)}`; 
      }
      if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB)) { 
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y>${parseFloat(parteCA + parteCB)}`; 
      }
      if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) - parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB)) { 
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y>${parseFloat(parteCA + parteCB)}`; 
      }
      if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) - parseFloat(parteAA + parteAB) < parseFloat(parteCA + parteCB)) { 
        resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y<${parseFloat(parteCA + parteCB)}`; 
      }
      return resultado;
    },

    formula_sistemas_lineares(expressoes: string[]) {
      let resultado = [], expressaoPartida = [], verificacao = /(((\+)?(\-)?(\=)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi,
        verificacao2 = /(((\+)?(\-)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi;
      let somatorio = [], aux = 0, calculo = 0;
      for (let i = 0; i < expressoes.length; i++) {
        if (expressoes[i].match(verificacao) == null) { return console.error("A expressão inserida não é válida!"); }
        expressaoPartida.push(expressoes[i].match(verificacao2));
      }
      for (let i = 0; i < expressaoPartida.length; i++) {
        for (let h = 0; h < expressaoPartida[i].length; h++) {
          expressaoPartida[i][h] = parseFloat(expressaoPartida[i][h]);
        }
      }
      let x = 0;
      while (x != expressaoPartida[0].length) {
        for (let w = 0; w < expressaoPartida.length; w++) {
          calculo = calculo + expressaoPartida[w][x];
        }
        somatorio.push(calculo);
        x++;
      }
      for (let q = 1; q < somatorio.length; q++) {
        if (q % 2 == 0) { resultado.push(somatorio[q] / somatorio[0]); }
        if (q % 2 == 1) { resultado.push((-1 * somatorio[q]) / somatorio[0]); }
      }
      return resultado;
    },

    formula_soma_numeros_complexos(valores: string[]) {
      let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
      let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
      let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
      let resultado = "";
      let resultadoPartImaginarias = 0;
      let resultadoPartImaginariasPuras = 0;
      let partesImaginarias = [];
      let partesImaginariasPuras = [];
      for (let i = 0; i < valores.length; i++) {
        if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
        partesImaginarias.push(valores[i].match(separadorT1).toString());
        partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
      }
      for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
      }
      for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
      }
      if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
      if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
      if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }
      if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }
      return resultado;
    },

    formula_subtracao_numeros_complexos(valorTotal: string, valores: string[]) {
      let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
      let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
      let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
      let resultado = "";
      let valorTotalPartImaginarias = "";
      let valorTotalPartImaginariasPuras = "";
      let resultadoPartImaginarias = "";
      let resultadoPartImaginariasPuras = "";
      let resultadoParcImaginario = 0;
      let resultadoParcImaginarioPuro = 0;
      let partesImaginarias = [];
      let partesImaginariasPuras = [];

      for (let i = 0; i < valores.length; i++) {
        if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
        partesImaginarias.push(valores[i].match(separadorT1).toString());
        partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
      }

      if (valorTotal.match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }

      valorTotalPartImaginarias = valorTotal.match(separadorT1).toString();
      valorTotalPartImaginariasPuras = valorTotal.match(separadorT2).toString();

      for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
      }

      for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
      }

      resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) - parseFloat(resultadoPartImaginarias);
      resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) - parseFloat(resultadoPartImaginariasPuras);

      if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }

      return resultado;
    },

    formula_multiplicacao_numeros_complexos(valorTotal: string, valores: string[]) {
      let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
      let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
      let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
      let resultado = "";
      let valorTotalPartImaginarias = "";
      let valorTotalPartImaginariasPuras = "";
      let resultadoPartImaginarias = "";
      let resultadoPartImaginariasPuras = "";
      let resultadoParcImaginario = 0;
      let resultadoParcImaginarioPuro = 0;
      let partesImaginarias = [];
      let partesImaginariasPuras = [];
      for (let i = 0; i < valores.length; i++) {
        if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
        partesImaginarias.push(valores[i].match(separadorT1).toString());
        partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
      }
      if (valorTotal.match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
      valorTotalPartImaginarias = valorTotal.match(separadorT1).toString();
      valorTotalPartImaginariasPuras = valorTotal.match(separadorT2).toString();
      for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
      }
      for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
      }
      resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) * parseFloat(resultadoPartImaginarias);
      resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) * parseFloat(resultadoPartImaginariasPuras);
      if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
      return resultado;
      // return `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
    },

    formula_divisao_numeros_complexos(valorTotal: string, valores: string[]) {
      let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
      let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
      let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
      let resultado = "";
      let valorTotalPartImaginarias = "";
      let valorTotalPartImaginariasPuras = "";
      let resultadoPartImaginarias = "";
      let resultadoPartImaginariasPuras = "";
      let resultadoParcImaginario = 0;
      let resultadoParcImaginarioPuro = 0;
      let partesImaginarias = [];
      let partesImaginariasPuras = [];
      for (let i = 0; i < valores.length; i++) {
        if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
        partesImaginarias.push(valores[i].match(separadorT1).toString());
        partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
      }
      if (valorTotal.match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
      valorTotalPartImaginarias = valorTotal.match(separadorT1).toString();
      valorTotalPartImaginariasPuras = valorTotal.match(separadorT2).toString();
      for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
      }
      for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
      }
      resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) / parseFloat(resultadoPartImaginarias);
      resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) / parseFloat(resultadoPartImaginariasPuras);
      if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
      return resultado;
      // return `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
    },

    formula_potencia_numeros_complexos(valorTotal: string, valores: string[], potencia: number) {
      let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
      let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
      let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
      let resultado = "";
      let valorTotalPartImaginarias = "";
      let valorTotalPartImaginariasPuras = "";
      let resultadoPartImaginarias = "";
      let resultadoPartImaginariasPuras = "";
      let resultadoParcImaginario = 0;
      let resultadoParcImaginarioPuro = 0;
      let partesImaginarias = [];
      let partesImaginariasPuras = [];
      for (let i = 0; i < valores.length; i++) {
        if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
        partesImaginarias.push(valores[i].match(separadorT1).toString());
        partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
      }
      if (valorTotal.match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }
      valorTotalPartImaginarias = valorTotal.match(separadorT1).toString();
      valorTotalPartImaginariasPuras = valorTotal.match(separadorT2).toString();
      for (let i = 0; i < partesImaginarias.length; i++) {
        resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
      }
      for (let i = 0; i < partesImaginariasPuras.length; i++) {
        resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
      }
      resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) + parseFloat(resultadoPartImaginarias) ** potencia;
      resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) + parseFloat(resultadoPartImaginariasPuras) ** potencia;
      if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
      if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
      return resultado;
      // return `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`;
    },

    formula_juros_simples(valor: number, taxa: number, tempo: number) {
      let resultado = valor * (1 + taxa * tempo);
      return resultado;
    },

    formula_juros_compostos(valor: number, taxa: number, tempo: number, vezes: number) {
      let resultado = (valor * (1 + taxa * tempo)) ** vezes; 
      return resultado;
    },

    formula_vetor_da_distancia_entre_dois_pontos_r2(x1: number, x2:number, y1: number, y2: number) {
      let xResultante = 0, yResultante = 0, resultado = [];
      xResultante = x2 - x1;
      yResultante = y2 - y1;
      resultado = [ xResultante, yResultante ];
      return resultado;
    },

    formula_vetor_da_distancia_entre_dois_pontos_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
      let xResultante = 0, yResultante = 0, zResultante = 0, resultado = [];
      xResultante = x2 - x1;
      yResultante = y2 - y1;
      zResultante = z2 - z1;
      resultado = [ xResultante, yResultante, zResultante ];
      return resultado;
    },

    formula_modulo_de_um_vetor_r2(x: number, y: number) {
      let resultado = 0;
      resultado = wertsfy.mathematic.corebase.sqrt(x ** 2 + y ** 2);
      return resultado;
    },

    formula_modulo_de_um_vetor_r3(x: number, y: number, z: number) {
      let resultado = 0;
      resultado = wertsfy.mathematic.corebase.sqrt(x ** 2 + y ** 2 + z ** 2);
      return resultado;
    },

    formula_versor_de_um_vetor_r2(x: number, y:number) {
      let resultado = [];
      let modulo = this.formula_modulo_de_um_vetor_r2(x, y);
      resultado = [ x / modulo, y / modulo ];
      return resultado;
    },

    formula_versor_de_um_vetor_r3(x: number, y: number, z: number) {
      let resultado = [];
      let modulo = this.formula_modulo_de_um_vetor_r3(x, y, z);
      resultado = [ x / modulo, y / modulo, z / modulo ];
      return resultado;
    },

    formula_projecao_de_um_vetor_sobre_outro_vetor_r2(x1: number, x2: number, y1: number, y2: number) {
      let resultado: number[];
      let expressoesVU = [x2 * x1, y2 * y1] 
      let expressoesUU = [x1 * x1, y1 * y1]
      let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1]];
      let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2];
      resultado = contExpressaoP2;
      return resultado;
    },

    formula_projecao_de_um_vetor_sobre_outro_vetor_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
      let resultado: number[];
      let expressoesVU = [x2 * x1, y2 * y1, z2 * z1] 
      let expressoesUU = [x1 * x1, y1 * y1, z1 * z1]
      let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1], expressoesVU[2] / expressoesUU[2]];
      let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2, contExpressaoP1[2] * z2];
      resultado = contExpressaoP2;
      return resultado;
    },

    formula_soma_de_vetores_r2(x1: number, x2: number, y1: number, y2: number) {
      let resultado: number[];
      let contExpressaoP1 = [x1 + x2, y1 + y2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formula_soma_de_vetores_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
      let resultado: number[];
      let contExpressaoP1 = [x1 + x2, y1 + y2, z1 + z2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formula_subtracao_de_vetores_r2(x1: number, x2: number, y1: number, y2: number) {
      let resultado: number[];
      let contExpressaoP1 = [x1 - x2, y1 - y2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formula_subtracao_de_vetores_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
      let resultado: number[];
      let contExpressaoP1 = [x1 - x2, y1 - y2, z1 - z2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formula_produto_escalar_de_vetores_r2(x1: number, x2: number, y1: number, y2: number) {
      let resultado: number;
      let contExpressaoP1 = [x1 * x2, y1 * y2];
      resultado = contExpressaoP1[0] + contExpressaoP1[1];
      return resultado;
    },

    formula_produto_escalar_de_vetores_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
      let resultado: number;
      let contExpressaoP1 = [x1 * x2, y1 * y2, z1 * z2];
      resultado = contExpressaoP1[0] + contExpressaoP1[1] + contExpressaoP1[2];
      return resultado;
    },

    formula_divisao_de_vetores_r2(x1: number, x2: number, y1: number, y2: number) {
      let resultado: number[];
      let contExpressaoP1 = [x1 / x2, y1 / y2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formula_divisao_de_vetores_r3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number) {
      let resultado: number[];
      let contExpressaoP1 = [x1 / x2, y1 / y2, z1 / z2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formula_ponto_medio_de_um_vetor_r2(x: number, y: number) {
      let resultado: number[];
      let contExpressaoP1 = [x / 2, y / 2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formula_ponto_medio_de_um_vetor_r3(x: number, y: number, z: number) {
      let resultado: number[];
      let contExpressaoP1 = [x / 2, y / 2, z / 2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formula_cossenos_diretores_de_um_vetor_r2(x: number, y: number) {
      let resultado: number[];
      let contExpressaoP1 = [wertsfy.mathematic.corebase.cos(x), wertsfy.mathematic.corebase.cos(y)];
      resultado = contExpressaoP1;
      return resultado;
    },

    formula_cossenos_diretores_de_um_vetor_r3(x: number, y: number, z: number) {
      let resultado: number[];
      let contExpressaoP1 = [wertsfy.mathematic.corebase.cos(x), wertsfy.mathematic.corebase.cos(y), wertsfy.mathematic.corebase.cos(z)];
      resultado = contExpressaoP1;
      return resultado;
    },

    formula_sinalizacao_quadrantes(x: number, y: number) {
      let resultado: string;
      if(x > 0 && y > 0) { resultado = "1 Quadrante."; }
      if(x < 0 && y > 0) { resultado = "2 Quadrante."; }
      if(x < 0 && y < 0) { resultado = "3 Quadrante."; }
      if(x > 0 && y < 0) { resultado = "4 Quadrante."; }
      return resultado;
    },

    formula_sinalizacao_octantes(x: number, y: number, z: number) {
      let resultado: string;
      if(x > 0 && y > 0 && z > 0) { resultado = "1 Octante."; }
      if(x < 0 && y > 0 && z > 0) { resultado = "2 Octante."; }
      if(x < 0 && y < 0 && z > 0) { resultado = "3 Octante."; }
      if(x > 0 && y < 0 && z > 0) { resultado = "4 Octante."; }
      if(x > 0 && y > 0 && z < 0) { resultado = "5 Octante."; }
      if(x < 0 && y > 0 && z < 0) { resultado = "6 Octante."; }
      if(x < 0 && y < 0 && z < 0) { resultado = "7 Octante."; }
      if(x > 0 && y < 0 && z < 0) { resultado = "8 Octante."; }
      return resultado;
    },

    formula_quadrado_de_punnet(genotipo1: string, genotipo2: string) {
      
      if(genotipo1.length > 2 || genotipo2.length > 2) { return; }

      const genDiv1 = genotipo1.slice(0, 1);
      const genDiv2 = genotipo2.slice(0, 1);
      const genDiv3 = genotipo1.slice(1, 2);
      const genDiv4 = genotipo2.slice(1, 2);

      let resultado: string[];
      return resultado = [ 
        genDiv1 + genDiv3, 
        genDiv1 + genDiv4, 
        genDiv2 + genDiv3, 
        genDiv2 + genDiv4 
      ];

    },

    formula_quadrado_de_punnet_expandido(genotipo1: string, genotipo2: string) {

      if(genotipo2.length > 4 || genotipo2.length > 4) { return; }

      const genDiv1 = genotipo1.slice(0, 1);
      const genDiv2 = genotipo2.slice(0, 1);
      const genDiv3 = genotipo1.slice(1, 2);
      const genDiv4 = genotipo2.slice(1, 2);
      const genDiv5 = genotipo1.slice(2, 3);
      const genDiv6 = genotipo2.slice(2, 3);
      const genDiv7 = genotipo1.slice(3, 4);
      const genDiv8 = genotipo2.slice(3, 4);

      let resultado: string[];
      return resultado = [ 
        genDiv1 + genDiv3, 
        genDiv1 + genDiv4, 
        genDiv1 + genDiv5, 
        genDiv1 + genDiv6, 
        genDiv1 + genDiv7, 
        genDiv1 + genDiv8, 
        genDiv2 + genDiv3, 
        genDiv2 + genDiv4, 
        genDiv2 + genDiv5, 
        genDiv2 + genDiv6, 
        genDiv2 + genDiv7, 
        genDiv2 + genDiv8 
      ];

    },

    formula_calculo_da_escala_geografica(tamanhoReal: number, tamanhoFicticio: number) {
      let resultado = tamanhoReal / tamanhoFicticio;
      return resultado;
    },

    formula_calculo_de_IDH(saude: number, educacao: number, renda: number, populacao: number, ppc: number) {
      let resultado = (saude + educacao + renda) / (populacao + ppc);
      return resultado;
    },

    formula_calculo_de_GINI(pnb: number, populacao: number) {
      let resultado = pnb / populacao;
      return resultado;
    },

    formula_calculo_de_IMC(peso: number, altura: number) {
      let resultado = peso / altura ** 2;
      return resultado;
    },

    formula_calculo_de_densidade_populacional(espaco: number, populacao: number) {
      let resultado = espaco / populacao;
      return resultado;
    },

    formula_calculo_dos_numeros_pares(numero: number) {
      let resultado = numero / 2;
      if(resultado % 2 === 0) { console.info("eh par.") }
      else { console.info("eh impar.") }
      return resultado;
    },

    formula_calculo_dos_numeros_impares(numero: number) {
      let resultado = numero / 3;
      if(resultado % 3 === 0) { console.info("eh impar.") }
      else { console.info("eh par.") }
      return resultado;
    },

    formula_numero_de_conjuntos(elementos: number) {
      let resultado = 2 ** elementos;
      return resultado;
    },

    formula_cria_jogo_da_mega_sena(aposta: number[]) {
      let numeros = [];
      for(let i = 0; i < 6; i++) {
        numeros.push(wertsfy.mathematic.corebase.floor(wertsfy.mathematic.corebase.random(i) * 60) + 1);
      }
      if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5]) {
        console.info("Você ganhou!");
      }
      else {
        console.info("Você perdeu!");
      }
      return numeros;
    },

    formula_cria_jogo_da_quina(aposta: number[]) {
      let numeros = [];
      for(let i = 0; i < 5; i++) {
        numeros.push(wertsfy.mathematic.corebase.floor(wertsfy.mathematic.corebase.random(i) * 80) + 1);
      }
      if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4]) {
        console.info("Você ganhou!");
      }
      else {
        console.info("Você perdeu!");
      }
      return numeros;
    },

    formula_cria_jogo_da_quadra(aposta: number[]) {
      let numeros = [];
      for(let i = 0; i < 4; i++) {
        numeros.push(wertsfy.mathematic.corebase.floor(wertsfy.mathematic.corebase.random(i) * 80) + 1);
      }
      if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3]) {
        console.info("Você ganhou!");
      }
      else {
        console.info("Você perdeu!");
      }
      return numeros;
    },

    formula_cria_jogo_da_lotofacil(aposta: number[]) {
      let numeros = [];
      for(let i = 0; i < 6; i++) {
        numeros.push(wertsfy.mathematic.corebase.floor(wertsfy.mathematic.corebase.random(i) * 80) + 1);
      }
      if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5]) {
        console.info("Você ganhou!");
      }
      else {
        console.info("Você perdeu!");
      }
      return numeros;
    },

    formula_cria_jogo_da_Lotomania(aposta: number[]) {
      let numeros = [];
      for(let i = 0; i < 15; i++) {
        numeros.push(wertsfy.mathematic.corebase.floor(wertsfy.mathematic.corebase.random(i) * 80) + 1);
      }
      if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5] && aposta[6] === numeros[6] && aposta[7] === numeros[7] && aposta[8] === numeros[8] && aposta[9] === numeros[9] && aposta[10] === numeros[10] && aposta[11] === numeros[11] && aposta[12] === numeros[12] && aposta[13] === numeros[13] && aposta[14] === numeros[14]) {
        console.info("Você ganhou!");
      }
      else {
        console.info("Você perdeu!");
      }
      return numeros;
    },

    formula_calculo_do_diagrama_de_venn_de_2_grupos(numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number) {
      let resultados = { 
        intecessao: numerosGrupoDoisNucleos, 
        nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoDoisNucleos, 
        nucleoDois: numerosGrupoUmNucleo[1] - numerosGrupoDoisNucleos 
      };
      return resultados;
    },

    formula_calculo_do_diagrama_de_venn_de_3_grupos(numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number) {
      let resultados = { 
        intecessao: numerosGrupoTresNucleos, 
        nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoTresNucleos, 
        nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoTresNucleos, 
        nucleoTres: numerosGrupoUmNucleo[1] - numerosGrupoTresNucleos 
      };
      return resultados;
    },

    formula_calculo_do_diagrama_de_venn_de_4_grupos(numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number[], numerosGrupoQuatroNucleos: number) {
      let resultados = { 
        intecessao: numerosGrupoQuatroNucleos, 
        nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoQuatroNucleos, 
        nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoQuatroNucleos, 
        nucleoTres: numerosGrupoTresNucleos[0] - numerosGrupoQuatroNucleos, 
        nucleoQuatro: numerosGrupoUmNucleo[1] - numerosGrupoQuatroNucleos 
      };
      return resultados;
    },

    formula_calculo_dos_numeros_primos(numeroPesquisados: number) {
      let numerosPrimos = [];
      for(let i = 0; i < numeroPesquisados; i++) {
        if(i % 2 !== 0) {
          numerosPrimos.push(i);
        }
      }
      return numerosPrimos;
    },

    formula_area_triangulo_qualquer(lado) { 
      return lado * lado * wertsfy.mathematic.corebase.sqrt(3) / 4; 
    },

    formula_apotema_de_um_triangulo_qualquer(lado) {
      return lado * lado * wertsfy.mathematic.corebase.sqrt(3) / 2;
    },

    formula_area_quadrado_qualquer(lado: number) { 
      return lado * lado; 
    },

    formula_area_retangulo_qualquer(comp: number, larg: number) { 
      return comp * larg; 
    },

    formula_area_circulo_qualquer(raio: number) { 
      return wertsfy.mathematic.corebase.Pi * (raio ** 2); 
    },

    formula_area_elipse_qualquer(raio: number, altura: number) { 
      return wertsfy.mathematic.corebase.Pi * (raio ** 2) * altura; 
    },

    formula_area_piramide_qualquer(base: number, altura: number) { 
      return (base * altura) / 3; 
    },

    formula_area_trapezio_qualquer(baseMaior: number, baseMenor: number, altura: number) { 
      return (baseMaior + baseMenor) * altura / 2; 
    },

    formula_area_lozango_qualquer(diagonalMaior: number, diagonalMenor: number, altura: number) { 
      return (diagonalMaior + diagonalMenor) / 2; 
    },

    formula_area_de_uma_superficie_qualquer(comp: number, larg: number) {
      return comp * larg;
    },

    formula_volume_de_uma_superficie_qualquer(area: number, comp: number, larg: number) {
      return area * comp * larg;
    },

    formula_area_esfera_qualquer(raio: number) { 
      return 4 * wertsfy.mathematic.corebase.Pi * (raio ** 2) / 2; 
    },

    formula_area_cilindro_qualquer(raio: number, altura: number) { 
      return wertsfy.mathematic.corebase.Pi * (raio ** 2) * altura; 
    },

    formula_area_cone_qualquer(raio: number, altura: number) { 
      return wertsfy.mathematic.corebase.Pi * (raio ** 2) * (altura / 3); 
    },

    formula_area_de_um_poligono_qualquer(comp: number, larg: number, nLados: number) {
      return comp == larg ? nLados * ((comp * comp * wertsfy.mathematic.corebase.sqrt(3)) / 4) : nLados * (comp * larg / 2);
    },

    formula_volume_de_um_poligono_formato_lozango_qualquer(diagonalMaior: number, diagonalMenor: number, altura: number) {
      return (diagonalMaior + diagonalMenor) / 2 * altura;
    },

    formula_volume_de_um_poligono_formato_trapezio_qualquer(baseMaior: number, baseMenor: number, altura: number) {
      return (baseMaior + baseMenor) / 2 * altura;
    },

    formula_area_de_um_paralelogramo_qualquer(lado: number, altura: number) { 
      return lado * altura; 
    },

    formula_area_lateral_de_um_prisma_qualquer(comp: number, larg: number, nLados: number) {
      return nLados * (comp * larg);
    },

    formula_volume_de_um_prisma_qualquer(area: number, comp: number, larg: number) {
      return area * comp * larg;
    },

    formula_volume_de_um_cubo_qualquer(aresta: number) { 
      return aresta * aresta * aresta; 
    },

    formula_volume_de_um_paralelepipedo_qualquer(comprimento: number, largura: number, altura: number) { 
      return comprimento * largura * altura; 
    },

    formula_volume_de_uma_piramide_qualquer(base: number, altura: number) { 
      return (base * altura) / 3; 
    },

    formula_volume_de_um_tetraedro_qualquer(aresta: number) { 
      return (aresta * aresta * aresta) / 4; 
    },

    formula_volume_de_um_hexaedro_qualquer(aresta: number) { 
      return (aresta * aresta * aresta) / 6; 
    },

    formula_volume_de_um_octaedro_qualquer(aresta: number) { 
      return (aresta * aresta * aresta) / 8; 
    },

    formula_volume_de_um_dodecaedro_qualquer(aresta: number) { 
      return (aresta * aresta * aresta) / 12; 
    },

    formula_volume_de_um_icosaedro_qualquer(aresta: number) { 
      return (aresta * aresta * aresta) / 20; 
    },

    formula_volume_de_um_cone_qualquer(raio: number, altura: number) { 
      return (wertsfy.mathematic.corebase.Pi * (raio ** 2) * altura) / 3; 
    },

    formula_volum_de_um_cilindro_qualquer(raio: number, altura: number) { 
      return wertsfy.mathematic.corebase.Pi * (raio ** 2) * altura; 
    },

    formula_volume_de_um_esfera_qualquer(raio: number) { 
      return (4 * wertsfy.mathematic.corebase.Pi * (raio ** 3)) / 3; 
    },

    formula_volume_de_um_romb_qualquer(aresta: number) { 
      return (aresta * aresta) / 2; 
    },

    formula_area_circunferencia_qualquer(raio: number) { 
      return wertsfy.mathematic.corebase.Pi * (raio * 2); 
    }




  }

  protected conversor() { }

};

class WERTSFY_INFORMATION_GAMES { }
class WERTSFY_FACTORY_KEX { }
class WERTSFY_FACTORY_SOLLPASS { }
class WERTSFY_FACTORY_KRIPTONIGHT { }
class WERTSFY_FACTORY_NIKKO { }
class WERTSFY_EXTENDER_CLI { }
class WERTSFY_COLORFY_COMPLEX { }
class WERTSFY_MULTIPLATAFORM_HULIGHT { }
class WERTSFY_WEBSERVICES { }
class WERTSFY_SHORTCUTS_DISCORD { }
class WERTSFY_SHORTCUTS_GRAPH { }
