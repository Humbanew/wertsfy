/**
 * Copyright 2020, 2021, 2022. All rights reserved.
 * Humbanew Project Huon Subdivision
 */

// Interface de Programação de Aplicativos
interface Wertsfy {

  mathematic: {

    corebase: WERTSFY_MATH_COREBASE,
    calculator: WERTSFY_MATH_CALCULATOR,

  },

  interface: {

    terminal: WERTSFY_INTERFACE_TERMINAL,
    lydroc: WERTSFY_INTERFACE_LYDROC

  },

  builder: {

    karzok: WERTSFY_BUILDER_KARZOK

  },

  hooks: {

    language: WERTSFY_HOOKS_LANGUAGE

  }

} export var wertsfy: Wertsfy;

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

  public Pi = 3.141592653589793;
  public Euler = 2.7182818284590452353602874713527;
  public Plank = 6.62606896e-34;
  public Avogadro = 6.022140857e23;
  public Newton = 0.6931471805599453;
  public Tesla = 1.6021766208e-19;
  public SquareRoot = {

    Of01: 1.0,
    
    Of02: 1.414213562373095,

    Of03: 1.732050807568877,

    Of04: 2.0,

    Of05: 2.23606797749979,

    Of06: 2.449489742783178,

    Of07: 2.64575131106459,

    Of08: 2.82842712474619,

    Of09: 3.0,

    Of10: 3.16227766016838

  };
  public CubicRoot = {

    Of01: 1.0,
    
    Of02: 1.25992104989487,

    Of03: 1.5874010519682,

    Of04: 1.99999999999999,

    Of05: 2.23606797749979,

    Of06: 2.58198889747161,

    Of07: 2.91293118277239,

    Of08: 3.26249509498958,

    Of09: 3.62449963442055,

    Of10: 3.99999999999999

  }
  public Logarithm2 = 0.6931471805599453;
  public Logarithm10 = 2.302585092994046;
  public Logarithm2e = 1.4426950408889634;
  public Logarithm10e = 0.4342944819032518;
  public MaxValue = 999999999999999;
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

/** *Wertsfy Hooks Language Class* */
class WERTSFY_HOOKS_LANGUAGE { }
