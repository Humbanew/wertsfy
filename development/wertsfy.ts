/**
 * Copyright 2020, 2021, 2022. All rights reserved.
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
    lydroc: WERTSFY_INTERFACE_LYDROC

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

  public abs(x: number): number 
  {
    return x < 0 ? -1 * x : x;
  }

  public sqrt(x: number): number 
  {
    return x ** (1 / 2);
  }

  public cbrt(x: number): number 
  {
    return x ** (1 / 3);
  }

  public quart(x: number): number 
  {
    return x ** (1 / 4);
  }

  public quint(x: number): number 
  {
    return x ** (1 / 5);
  }

  public sext(x: number): number 
  {
    return x ** (1 / 6);
  }

  public sept(x: number): number 
  {
    return x ** (1 / 7);
  }

  public oct(x: number): number 
  {
    return x ** (1 / 8);
  }

  public non(x: number): number 
  {
    return x ** (1 / 9);
  }

  public dec(x: number): number 
  {
    return x ** (1 / 10);
  }
  
  public pow(x: number, y: number): number 
  {
    return x ** y;
  }

  public powOfPow(x: number, y: number, z?: number[]): number 
  {
    let rest: any;
    if(z != null) {
      let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
      return rest = x ** (y ** l);
    }
    return rest;
  }

  public max(x: number[]): number 
  {
    let max = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] > max) { max = x[i]; }
    }
    return max;
  }

  public min(x: number[]): number 
  {
    let min = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] < min) { min = x[i]; }
    }
    return min;
  }

  public round(x: number): number 
  {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    let resultado: any;
    resultado = verificador.exec(x.toString());
    return parseInt(resultado[0]);
  }

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

  public sign(x: number): number 
  {
    let v: any;
    if (x > 0) { return v = 1; }
    if (x < 0) { return v = -1; }
    return v;
  }

  public trunc(x: number): number 
  {
    return parseInt(x.toString());
  }

  public imul(x: number, y: number): number 
  {
    return x * y;
  }

  public ceil(x: number): number 
  {
    let v: any;
    if (x < x + 0.5) { v = parseInt(x.toString()); }
    return v;
  }

  public floor(x: number): number 
  {
    let v: any;
    if (x > x + 0.5) { v = parseInt(x.toString()); }
    return v;
  }

  public sin(x: number): number 
  {
    return (((2 * this.Pi * 1) / 4) / 90) * x;
  }

  public cos(x: number): number 
  {
    return (-1 * (((2 * this.Pi * 1) / 4) / 90)) * x;
  }

  public tan(x: number): number 
  {    
    return this.sin(x) / this.cos(x);
  }

  public sec(x: number): number 
  {
    return 1 / this.cos(x);
  }

  public cosec(x: number): number 
  {
    return 1 / this.sin(x);
  }

  public cotan(x: number): number 
  {
    return 1 / (this.cos(x) / this.sin(x));
  }
  
  public sinh(x: number): number 
  {
    return 1 / (((2 * this.Pi * 1) / 4) / 90) * x;
  }

  public cosh(x: number): number 
  {
    return 1 / (-1 * ((2 * this.Pi * 1) / 4) / 90) * x;
  }

  public tanh(x: number): number 
  {
    return 1 / (this.sin(x) / this.cos(x));
  }

  public sech(x: number): number 
  {
    return 1 / this.cosh(x);
  }

  public cosech(x: number): number 
  {
    return 1 / this.sinh(x);
  }

  public cotanh(x: number): number 
  {
    return 1 / (this.cosh(x) / this.sinh(x));
  }

  public arcsin(x: number): number 
  {
    return (((2 * this.Pi * 1) / 4) / 90) * x;
  }

  public arccos(x: number): number 
  {
    return -1 * (((2 * this.Pi * 1) / 4) / 90) * x;
  }

  public arctan(x: number): number 
  {
    return (this.arcsin(x) / this.arccos(x));
  }

  public arcsec(x: number): number 
  {
    return 1 / this.arccos(x);
  }

  public arccosec(x: number): number 
  {
    return 1 / this.arcsin(x);
  }

  public arccotan(x: number): number 
  {
    return 1 / this.arctan(x);
  }

  public arcsinh(x: number): number 
  {
    return 1 / (((2 * this.Pi * 1) / 4) / 90) * x;
  }

  public arccosh(x: number): number 
  {
    return 1 / (-1 * (((2 * this.Pi * 1) / 4) / 90) * x);
  }

  public arctanh(x: number): number 
  {
    return 1 / (this.arcsinh(x) / this.arccosh(x));
  }

  public arcsech(x: number): number 
  {
    return 1 / this.arccosh(x);
  }

  public arccosech(x: number): number 
  {
    return 1 / this.arcsinh(x);
  }

  public arccotanh(x: number): number 
  {
    return 1 / this.arctanh(x);
  }

  public log(x: number): number 
  {
    return this._log(10, x);
  }

  public logm1(x: number): number 
  {
    return this._log(10-1, x);
  }

  public logp1(x: number): number 
  {
    return this._log(10+1, x);
  }

  public logx(x: number, base: number): number 
  {
    return this._log(base, x);
  }

  public logxm1(x: number, base: number): number 
  {
    return this._log(base - 1, x);
  }

  public logxp1(x: number, base: number): number 
  {
    return this._log(base + 1, x);
  }

  public ln(x: number): number 
  {
    return this._log(this.Euler, x);
  }

  public lnm1(x: number): number 
  {
    return this._log(this.Euler - 1, x);
  }

  public lnp1(x: number): number 
  {
    return this._log(this.Euler + 1, x);
  }

  public random(x: number): number 
  {
    return (Int8Array.of(400).length / Int8Array.of(200).length) * x;
  }

  public exp(base: number, valorLg: number): number 
  {
    if(base == 0) { return 0; }
    return this.logx(valorLg, base);
  }

  public expm1(base: number, valorLg: number): number 
  {
    if(base == 0) { return 0; }
    return this.logxm1(valorLg, base);
  }

  public expp1(base: number, valorLg: number): number 
  {
    if(base == 0) { return 0; }
    return this.logxp1(valorLg, base);
  }

};

/** *Wertsfy Mathematics Calculator Class* */
class WERTSFY_MATH_CALCULATOR { };

/** *Wertsfy Interface Terminal Class* */
class WERTSFY_INTERFACE_TERMINAL { };

/** *Wertsfy Interface Lydroc Class* */
class WERTSFY_INTERFACE_LYDROC { };

/** *Wertsfy Builder Karzok Class* */
class WERTSFY_BUILDER_KARZOK { };

/** *Wertsfy Builder Sollpass Class* */
class WERTSFY_BUILDER_SOLLPASS { };

/** *Wertsfy Hooks Language Class* */
class WERTSFY_HOOKS_LANGUAGE { }
