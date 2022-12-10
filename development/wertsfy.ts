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

