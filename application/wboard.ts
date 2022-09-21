'use strict'

// Quadro base de arquitetura
class WBoard {

  // bloco de implementação do Command Line Interface
  protected wtsy_cli = class WCLI { }

  // bloco de implementação de Testes
  protected wtsy_nkk = class WNikko { }

  // bloco de implementação de Transcompilação
  protected wtsy_tscp = class WTscp { }

  // bloco de implementação das Bibliotecas
  protected wtsy_lib = class WLib {
    
    _log(expo: number, x: number): number {
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
    };


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

      abs(x: number): number 
      {
        return x < 0 ? -1 * x : x;
      }

      sqrt(x: number): number 
      {
        return x ** (1 / 2);
      }

      cbrt(x: number): number 
      {
        return x ** (1 / 3);
      }

      quart(x: number): number 
      {
        return x ** (1 / 4);
      }

      quint(x: number): number 
      {
        return x ** (1 / 5);
      }

      sext(x: number): number 
      {
        return x ** (1 / 6);
      }

      sept(x: number): number 
      {
        return x ** (1 / 7);
      }

      oct(x: number): number 
      {
        return x ** (1 / 8);
      }

      non(x: number): number 
      {
        return x ** (1 / 9);
      }

      dec(x: number): number 
      {
        return x ** (1 / 10);
      }
      
      pow(x: number, y: number): number
      {
        return x ** y;
      }

      powOfPow(x: number, y: number, z?: number[]): number 
      {
        let rest: number;
        if(z != null) {
          let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
          return rest = x ** (y ** l);
        }
        return rest;
      }

      max(x: number[]): number 
      {
        let max = x[0];
        for (let i = 1; i < x.length; i++) {
          if (x[i] > max) { max = x[i]; }
        }
        return max;
      }

      min(x: number[]): number 
      {
        let min = x[0];
        for (let i = 1; i < x.length; i++) {
          if (x[i] < min) { min = x[i]; }
        }
        return min;
      }

      round(x: number): number 
      {
        const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
        let resultado = undefined;
        resultado = verificador.exec(x.toString());
        return parseInt(resultado[0]);
      }

      fround(x: number): number 
      {
        const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
        let resultado = undefined;
        resultado = verificador.exec(x.toString());
        if (parseFloat(resultado[1]) >= 0.5) {
          return parseInt(resultado[0] + 1);
        }
        return parseInt(resultado[0]);
      }

      sign(x: number): number 
      {
        let v = undefined;
        if (x > 0) { return v = 1; }
        if (x < 0) { return v = -1; }
        return v;
      }

      trunc(x: number): number 
      {
        return parseInt(x.toString());
      }

      imul(x: number, y: number): number 
      {
        return x * y;
      }

      ceil(x: number): number 
      {
        let v = undefined;
        if (x < x + 0.5) { v = parseInt(x.toString()); }
        return v;
      }

      floor(x: number): number 
      {
        let v = undefined;
        if (x > x + 0.5) { v = parseInt(x.toString()); }
        return v;
      }

      sin(x: number): number 
      {
        return (((2 * this.pi * 1) / 4) / 90) * x;
      }

      cos(x: number): number 
      {
        return (-1 * (((2 * this.pi * 1) / 4) / 90)) * x;
      }

      tan(x: number): number 
      {    
        return this.sin(x) / this.cos(x);
      }

      sec(x: number): number 
      {
        return 1 / this.cos(x);
      }

      cosec(x: number): number 
      {
        return 1 / this.sin(x);
      }

      cotan(x: number): number 
      {
        return 1 / (this.cos(x) / this.sin(x));
      }
      
      sinh(x: number): number 
      {
        return 1 / (((2 * this.pi * 1) / 4) / 90) * x;
      }

      cosh(x: number): number 
      {
        return 1 / (-1 * ((2 * this.pi * 1) / 4) / 90) * x;
      }

      tanh(x: number): number 
      {
        return 1 / (this.sin(x) / this.cos(x));
      }

      sech(x: number): number 
      {
        return 1 / this.cosh(x);
      }

      cosech(x: number): number 
      {
        return 1 / this.sinh(x);
      }

      cotanh(x: number): number 
      {
        return 1 / (this.cosh(x) / this.sinh(x));
      }

      arcsin(x: number): number 
      {
        return (((2 * this.pi * 1) / 4) / 90) * x;
      }

      arccos(x: number): number 
      {
        return -1 * (((2 * this.pi * 1) / 4) / 90) * x;
      }

      arctan(x: number): number 
      {
        return (this.arcsin(x) / this.arccos(x));
      }

      arcsec(x: number): number 
      {
        return 1 / this.arccos(x);
      }

      arccosec(x: number): number 
      {
        return 1 / this.arcsin(x);
      }

      arccotan(x: number): number 
      {
        return 1 / this.arctan(x);
      }

      arcsinh(x: number): number 
      {
        return 1 / (((2 * this.pi * 1) / 4) / 90) * x;
      }

      arccosh(x: number): number 
      {
        return 1 / (-1 * (((2 * this.pi * 1) / 4) / 90) * x);
      }

      arctanh(x: number): number 
      {
        return 1 / (this.arcsinh(x) / this.arccosh(x));
      }

      arcsech(x: number): number 
      {
        return 1 / this.arccosh(x);
      }

      arccosech(x: number): number 
      {
        return 1 / this.arcsinh(x);
      }

      arccotanh(x: number): number 
      {
        return 1 / this.arctanh(x);
      }

      log(x: number): number 
      {
        return WLib.prototype._log(10, x);
      }

      logm1(x: number): number 
      {
        return WLib.prototype._log(10-1, x);
      }

      logp1(x: number): number 
      {
        return WLib.prototype._log(10+1, x);
      }

      logx(x: number, base: number): number 
      {
        return WLib.prototype._log(base, x);
      }

      logxm1(x: number, base: number): number 
      {
        return WLib.prototype._log(base - 1, x);
      }

      logxp1(x: number, base: number): number 
      {
        return WLib.prototype._log(base + 1, x);
      }

      ln(x: number): number 
      {
        return WLib.prototype._log(this.euler, x);
      }

      lnm1(x: number): number 
      {
        return WLib.prototype._log(this.euler - 1, x);
      }

      lnp1(x: number): number 
      {
        return WLib.prototype._log(this.euler + 1, x);
      }

      random(x: number): number 
      {
        return (Int8Array.of(400).length / Int8Array.of(200).length) * x;
      }

      exp(base: number, valorLg: number): number 
      {
        if(base == 0) { return 0; }
        return this.logx(valorLg, base);
      }

      expm1(base: number, valorLg: number): number 
      {
        if(base == 0) { return 0; }
        return this.logxm1(valorLg, base);
      }

      expp1(base: number, valorLg: number): number 
      {
        if(base == 0) { return 0; }
        return this.logxp1(valorLg, base);
      }


    }

    // bloco de implementação da Biblioteca "Terminal"
    public Terminal = class WTerminal { }

  }

  protected rdcmath = new this.wtsy_lib.prototype.Math();
  protected rdcterminal = new this.wtsy_lib.prototype.Terminal();

  // Abstração de toda a Aplicação para o mundo externo
  public wertsfy= 
  {

    math:
    {

      /** 
       * @description **``Constant``**
       * Returns the pi value. 
       */
      Pi: this.rdcmath.pi,

      /** 
       * @description **``Constant``** 
       * Returns the euler value.
       */
      Euler: this.rdcmath.euler,
      
      /** 
       * @description **``Constant``** 
       * Returns the plank value.
       */
      Plank: this.rdcmath.plank,

      /** 
       * @description **``Constant``** 
       * Returns the avogrado value.
       */
      Avogadro: this.rdcmath.avogadro,

      /** 
       * @description **``Constant``** 
       * Returns the newton value.
       */
      Newton: this.rdcmath.newton,

      /** 
       * @description **``Constant``** 
       * Returns the tesla value.
       */
      Tesla: this.rdcmath.tesla,

      /** 
       * @description **``Constant``** 
       * Returns the root square values.
       */
      Sqrt: this.rdcmath.sqrtd,

      /** 
       * @description **``Constant``** 
       * Returns the cubic square values.
       */
      Cbrt: this.rdcmath.cbrtd,

      /** 
       * @description **``Constant``** 
       * Returns the natural logarithm with base two value.
       */
      Ln2: this.rdcmath.ln2,

      /** 
       * @description **``Constant``** 
       * Returns the natural logarithm with base ten value.
       */
      Ln10: this.rdcmath.ln10,

      /** 
       * @description **``Constant``** 
       * Returns the logarithm of euler with base two value.
       */
      Log2e: this.rdcmath.log2e,

      /** 
       * @description **``Constant``** 
       * Returns the logarithm of euler with base ten value.
       */
      Log10e: this.rdcmath.log10e,

      /** 
       * @description **``Constant``** 
       * Returns the maxvalue.
       */
      Maxvalue: this.rdcmath.maxvalue,

      /** 
       * @description **``Constant``** 
       * Returns the minvalue.
       */
      Minvalue: this.rdcmath.minvalue,

      /** 
       * @description **``Method``** 
       * Returns the absolute value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      abs: (x: number) => this.rdcmath.abs(x),

      /** 
       * @description **``Method``** 
       * Returns the root square value.
       * @augments ``x``|**``number``**
       * Number value. 
       */      
      sqrt: (x: number) => this.rdcmath.sqrt(x),

      /** 
       * @description **``Method``** 
       * Returns the cubic root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      cbrt: (x: number) => this.rdcmath.cbrt(x),

      /** 
       * @description **``Method``** 
       * Returns the four root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      quart: (x: number) => this.rdcmath.quart(x),

      /** 
       * @description **``Method``** 
       * Returns the five root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      quint: (x: number) => this.rdcmath.quint(x),

      /** 
       * @description **``Method``** 
       * Returns the six root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      sext: (x: number) => this.rdcmath.sext(x),

      /** 
       * @description **``Method``** 
       * Returns the seven root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      sept: (x: number) => this.rdcmath.sept(x),

      /** 
       * @description **``Method``** 
       * Returns the eight root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      oct: (x: number) => this.rdcmath.oct(x),

      /** 
       * @description **``Method``** 
       * Returns the nine root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      non: (x: number) => this.rdcmath.non(x),

      /** 
       * @description **``Method``** 
       * Returns the ten root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      dec: (x: number) => this.rdcmath.dec(x),

      /** 
       * @description **``Method``** 
       * Returns the power value.
       * @augments ``x``|**``number``**
       * Number base value. 
       * @augments ``y``|**``number``**
       * Number power value.
       */
      pow: (x: number, y: number) => this.rdcmath.pow(x, y),

      /** 
       * @description **``Method``** 
       * Returns the power of a value's power.
       * @augments ``x``|**``number``**
       * Base number value.
       * @augments ``y``|**``number``**
       * Power number value.
       * @augments ``z``|**``number[]``** (Optional)
       * Power's sequency values. 
       */
      powOfPow: (x: number, y: number, z?: number[]) => this.rdcmath.powOfPow(x, y, z),

      /** 
       * @description **``Method``**
       * Returns the max value.
       * @augments ``x``|**``number[]``**
       * Number sequence.
       */
      max: (x: number[]) => this.rdcmath.max(x),

      /** 
       * @description **``Method``**
       * Returns the min value.
       * @augments ``x``|**``number[]``**
       * Number sequence.
       */
      min: (x: number[]) => this.rdcmath.min(x),

      /** 
       * @description **``Method``**
       * Returns the rounded value.
       * @augments ``x``|**``number``**
       * Floating value.
       */
      round: (x: number) => this.rdcmath.round(x),

      /** 
       * @description **``Method``**
       * Returns the precision rounded value.
       * @augments ``x``|**``number``**
       * Floating value.
       */
      fround: (x: number) => this.rdcmath.fround(x),

      /** 
       * @description **``Method``**
       * Returns the signal of value.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sign: (x: number) => this.rdcmath.sign(x),

      /** 
       * @description **``Method``**
       * Returns the number value without floating point parts.
       * @augments ``x``|**``number``**
       * Number value.
       */
      trunc: (x: number) => this.rdcmath.trunc(x),

      /** 
       * @description **``Method``**
       * Returns the result of the 32-bit integer multiplication of two numbers.
       * @augments ``x``|**``number``** ``y``|**``number``**
       * Number value.
       */
      imul: (x: number, y: number) => this.rdcmath.imul(x, y),

      /** 
       * @description **``Method``**
       * Returns the smallest integer greater than or equal to number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      ceil: (x: number) => this.rdcmath.ceil(x),

      /** 
       * @description **``Method``**
       * Returns the largest integer less than or equal to number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      floor: (x: number) => this.rdcmath.floor(x),

      /**
       * @description **``Method``**
       * Returns the sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sin: (x: number) => this.rdcmath.sin(x),

      /** 
       * @description **``Method``**
       * Returns the cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cos: (x: number) => this.rdcmath.cos(x),

      /**
       * @description **``Method``**
       * Returns the tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      tan: (x: number) => this.rdcmath.tan(x),

      /** 
       * @description **``Method``**
       * Returns the secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sec: (x: number) => this.rdcmath.sec(x),

      /**
       * @description **``Method``**
       * Returns the cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cosec: (x: number) => this.rdcmath.cosec(x),

      /** 
       * @description **``Method``**
       * Returns the cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cotan: (x: number) => this.rdcmath.cotan(x),

      /**
       * @description **``Method``**
       * Returns the hiperbolic sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sinh: (x: number) => this.rdcmath.sinh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cosh: (x: number) => this.rdcmath.cosh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      tanh: (x: number) => this.rdcmath.tanh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sech: (x: number) => this.rdcmath.sech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cosech: (x: number) => this.rdcmath.cosech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cotanh: (x: number) => this.rdcmath.cotanh(x),

      /** 
       * @description **``Method``**
       * Returns the arc sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      arcsin: (x: number) => this.rdcmath.arcsin(x),

      /** 
       * @description **``Method``**
       * Returns the arc cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccos: (x: number) => this.rdcmath.arccos(x),

      /** 
       * @description **``Method``**
       * Returns the arc tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arctan: (x: number) => this.rdcmath.arctan(x),

      /** 
       * @description **``Method``**
       * Returns the arc secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arcsec: (x: number) => this.rdcmath.arcsec(x),

      /** 
       * @description **``Method``**
       * Returns the arc cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccosec: (x: number) => this.rdcmath.arccosec(x),

      /** 
       * @description **``Method``**
       * Returns the arc cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccotan: (x: number) => this.rdcmath.arccotan(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arcsinh: (x: number) => this.rdcmath.arcsinh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccosh: (x: number) => this.rdcmath.arccosh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arctanh: (x: number) => this.rdcmath.arctanh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arcsech: (x: number) => this.rdcmath.arcsech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccosech: (x: number) => this.rdcmath.arccosech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccotanh: (x: number) => this.rdcmath.arccotanh(x),
      
      /** 
       * @description **``Method``**
       * Returns the logarithm of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       log: (x: number) => this.rdcmath.log(x),

      /** 
       * @description **``Method``**
       * Returns the logarithm minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */

      logm1: (x: number) => this.rdcmath.logm1(x),
      
      /** 
       * @description **``Method``**
       * Returns the logarithm plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       logp1: (x: number) => this.rdcmath.logp1(x),
      
      /** 
       * @description **``Method``**
       * Returns the any logarithm of number.
       * @augments ``x``|**``number``**
       * Number value.
       * @augments ``base``|**``number``**
       * Base logarithm number value.
       */
       logx: (x: number, base: number) => this.rdcmath.logx(x, base),

      /** 
       * @description **``Method``**
       * Returns the any logarithm minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       * @augments ``base``|**``number``**
       * Base logarithm number value.
       */
      logxm1: (x: number, base: number) => this.rdcmath.logxm1(x, base),
      
      /** 
       * @description **``Method``**
       * Returns the any logarithm plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       * @augments ``base``|**``number``**
       * Base logarithm number value.
       */      
      logxp1: (x: number, base: number) => this.rdcmath.logxp1(x, base),
      
      /** 
       * @description **``Method``**
       * Returns the any natural logarithm of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      ln: (x: number) => this.rdcmath.ln(x),

      /** 
       * @description **``Method``**
       * Returns the any natural logarithm minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      lnm1: (x: number) => this.rdcmath.lnm1(x),

      /** 
       * @description **``Method``**
       * Returns the any natural logarithm plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      lnp1: (x: number) => this.rdcmath.lnp1(x),

      /** 
       * @description **``Method``**
       * Returns the random number.
       * @augments ``x``|**``number``**
       * Number multiplier or base value.
       */ 
      random: (x: number) => this.rdcmath.random(x),

      /** 
       * @description **``Method``**
       * Returns the exponencial of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      exp: (x: number, valorLg: number) => this.rdcmath.exp(x, valorLg),

      /** 
       * @description **``Method``**
       * Returns the exponencial minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      expm1: (x: number, valorLg: number) => this.rdcmath.expm1(x, valorLg),

      /** 
       * @description **``Method``**
       * Returns the exponencial plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      expp1: (x: number, valorLg: number) => this.rdcmath.expp1(x, valorLg)

    }

    
  }
  

}

const abstraction = new WBoard().wertsfy;

// // v1.2.0-5-basin
   // Código legado para conversão
class wTerminal {

  /** 
   * @description **Símbolo de entrada de dados para o terminal.** | _Input symbol for terminal._ 
   */
  public INPUT_SYMBOL = '|>';

  /** 
   * @description **Símbolo de retorno da entrada do terminal.** | _Return symbol for terminal input._ 
   */
  public OUTPUT_SYMBOL = '|<';

  /** 
   * @description **Símbolo de divisão de partes de um programa.** | _Division symbol for program parts._ 
   */
  public DIVIDER_SYMBOL = '<|==|>';

  /** 
   * @description **Modelo de 25% da tela de carregamento de um processo no terminal.** | _Loading screen model for 25% of terminal screen._ 
   */
  public LOADING_SYMBOL_25 = '\\';

  /** 
   * @description **Modelo de 50% da tela de carregamento de um processo no terminal.** | _Loading screen model for 50% of terminal screen._ 
   */
  public LOADING_SYMBOL_50 = '|';

  /** 
   * @description **Modelo de 75% da tela de carregamento de um processo no terminal.** | _Loading screen model for 75% of terminal screen._ 
   */
  public LOADING_SYMBOL_75 = '/';

  /** 
   * @description **Modelo de 100% da tela de carregamento de um processo no terminal.** | _Loading screen model for 100% of terminal screen._ 
   */
  public LOADING_SYMBOL_100 = '-';

  /** 
   * @description **Caractere de escape de nova linha.** | _Escape character for new line._ 
   */
  public ESCAPE_CHARACTER_NEW_LINE = '\n';

  /** 
   * @description **Caractere de escape de tab.** | _Escape character for tab._ 
   */
  public ESCAPE_CHARACTER_TAB = '\t';

  /** 
   * @description **Caractere de escape de backspace.** | _Escape character for backspace._
   */
  public ESCAPE_CHARACTER_BACKSPACE = '\b';

  /** 
   * @description **Caractere de escape de reínicio da linha.** | _Escape character for line restart._ 
   */
  public ESCAPE_CHARACTER_RESTART_LINE = '\r';

  /** 
   * @description **Caractere de escape de tab vertical.** | _Escape character for vertical tab._ 
   */
  public ESCAPE_CHARACTER_VERTICAL_TAB = '\v';

  /** 
   * @description **Caractere de escape de form feed.** | _Escape character for form feed._
   */
  public ESCAPE_CHARACTER_FORM_FEED = '\f';

  /** 
   * @description **Caractere de escape nulo.** | _Escape character for null._ 
   */
  public ESCAPE_CHARACTER_NULL = '\0';

  /** 
   * @description **Caractere de single quote.** | _Single quote character._ 
   */
  public CHARACTER_SINGLE_QUOTE = '\'';

  /** 
   * @description **Caractere de double quote.** | _Double quote character._ 
   */
  public CHARACTER_DOUBLE_QUOTE = '\"';

  /**
   * @augments modelo tipo de formatação a ser aplicada. **[ Type: ``models`` ]**.
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description **Adiciona formatação da letra em um texto.** | _Adds letter formatting to a text._
   */
  public adicionaFormatacaoTexto(modelo: '01m@negrito'|'02m@faint'|'03m@italico'|'04m@sublinhado'|'05m@slowblink'|'06m@rapidblink'|'07m@reverse'|'08m@conceal'|'09m@crossedout'|'10m@defaultfont'|'11m@altfont1'|'12m@altfont2'|'13m@altfont3'|'14m@altfont4'|'15m@altfont5'|'16m@altfont6'|'17m@altfont7'|'18m@altfont8'|'19m@altfont9'|'20m@fraktur'|'21m@doublyunderline'|'22m@normalintensity'|'23m@notitalic'|'24m@notunderline'|'25m@blinkoff'|'26m@spacing'|'27m@reverseoff'|'28m@concealoff'|'29m@notcrossed'|'50m@propositalspacing'|'51m@framed'|'52m@encircled'|'53m@overlined'|'54m@notframed'|'55m@notencircled'|'58m@sublinhado'|'59m@sublinhadopadrao'|'60m@ideogramsublinhado'|'61m@ideogramsublinhadoduplo'|'62m@ideogramoverline'|'63m@ideogramoverlineduplo'|'64m@ideogramstress'|'65@noideogramattr'|'73m@superscript'|'74m@subscript'|'75m@nonsuperscriptsubscript', texto: string): string {
    const scan: RegExp = /(([0]{1})?([0-9]+m))/gi,
    tipo = scan.exec(modelo)?.[2]?.toString();
    return `\033[${tipo}${texto}\033[0m`;
  };

  /**
   * @augments modelo tipo de formatação de cor a ser aplicada. ||3/4-bits|| **[ Type: ``models`` ]**.
   * @augments texto texto a ser modificado. ||3/4-bits|| **[ Type: ``string`` ]**.
   * @augments template template de cor a ser aplicado. ||8-bits|| **[ Type: ``number`` ]**.
   * @augments schema esquema de cor RGB a ser aplicado. ||24-bits|| **[ Type: ``object`` ]**.}
   * @augments schema.r cor vermelha. **[ Type: ``number`` ]**.
   * @augments schema.g cor verde. **[ Type: ``number`` ]**.
   * @augments schema.b cor azul. **[ Type: ``number`` ]**.
   * @description **Adiciona formatação de cor da letra ou fundo em um texto.** | _Adds letter or background color formatting to a text._
   */
  public adicionaCorTexto(modelo: '3b4bit/30;0m@cpreta'|'3b4bit/40;0m@fpreta'|'3b4bit/31;0m@cvermelha'|'3b4bit/41;0m@fvermelha'|'3b4bit/32;0m@cverde'|'3b4bit/42;0m@fverde'|'3b4bit/33;0m@camarela'|'3b4bit/43;0m@famarela'|'3b4bit/34;0m@cazul'|'3b4bit/44;0m@fazul'|'3b4bit/35;0m@croxa'|'3b4bit/45;0m@froxa'|'3b4bit/36;0m@cciano'|'3b4bit/46;0m@fciano'|'3b4bit/37;0m@ccinza'|'3b4bit/47;0m@fcinza'|'3b4bit/90;0m@ccinzaclaro'|'3b4bit/100;0m@fcinzaclaro'|'3b4bit/91;0m@cvermelhoclaro'|'3b4bit/101:0m@fvermelhoclaro'|'3b4bit/92;0m@cverdeclaro'|'3b4bit/102;0m@fverdeclaro'|'3b4bit/93;0m@camareloclaro'|'3b4bit/103;0m@famareloclaro'|'3b4bit/94;0m@cazulclassico'|'3b4bit/104;0m@fazulclassico'|'3b4bit/95;0m@crosa'|'3b4bit/105;0m@frosa'|'3b4bit/96;0m@cazulclaro'|'3b4bit/106;0m@fazulclaro'|'3b4bit/97;0m@cbranco'|'3b4bit/107;0m@fbranco'|'8bit/38;5;tm@ctempcustom'|'8bit/48;5;tm@ftempcustom'|'24bit/38;2;r;g;bm@chexcustom'|'24bit/48;2;r;g;bm@fhexcustom', texto: string, template?: number, schema?: { red: number, green: number, blue: number}): string|void {
    const scan: RegExp = /(([0-9]+\;)?(([0-9]+\;)|([25]\;)([r]{1}\;[g]{1}\;|[0-9]{1,3}\;[0-9]{1,3}\;)?)?(([0]{1})?[0-9]+m|[b]{1}m|[t]{1}m))/gi,
    tipo = scan.exec(modelo)?.[0]?.toString();
    if(template != null && schema != null && tipo != null) {
      if(template < 0 || template > 255) return void 0;
      if(schema.red < 0 || schema.red > 255) return void 0;
      if(schema.green < 0 || schema.green > 255) return void 0;
      if(schema.blue < 0 || schema.blue > 255) return void 0;
      if(scan.exec(modelo)?.[6] === "tm") { 
        if(schema == null) { return void 0; }
        tipo.replace("t", template.toString());
        return `\033[${tipo}${texto}\033[0m`;
      }
      if(scan.exec(modelo)?.[5]?.toString() == "r;g;" && scan.exec(modelo)?.[6]?.toString() == "bm") {
        if(schema == null) { return void 0; }
        tipo.replace("r", schema.red.toString());
        tipo.replace("g", schema.green.toString());
        tipo.replace("b", schema.blue.toString());
        return `\033[${tipo}${texto}\033[0m`;
      }
    }
    return `\033[${tipo}${texto}\033[0m`;
  }

}

/** 
 * @description Define os esquemas disponíveis para a formação de novas cores.
 * @protected 
 */
 enum Schemas {
  format_a = '00', format_b = '11', format_c = '22', format_d = '33', format_e = '44', format_f = '55', format_g = '66', format_h = '77', format_i = '88', format_j = '99', format_k = 'aa', format_l = 'bb', format_m = 'cc', format_n = 'dd'
}

/** 
 * @description Define a estrutura esquemática de uma família de cores.
 * @protected
 */
interface StructureColor {
  corI: string|undefined;
  cor: string|undefined;
  gancho?: AppendedColor[]
} type AppendedColor = StructureColor;

class wSpectrals {

  /**
   * @augments modelo Seleciona o modelo a ser utilizado. **[ Type: ``string`` ]**.
   * @description **Retorna uma cor existente nos Terminais de SO.** | _Returns a color existing in the Terminal of the Operating System._  
   */
  public pegaCorTemplateTerminal(modelo: 'hex=000000'|'hex=800000'|'hex=008000'|'hex=808000'|'hex=000080'|'hex=800080'|'hex=008080'|'hex=808080'|'hex=C0C0C0'|'hex=FF0000'|'hex=00FF00'|'hex=FFFF00'|'hex=0000FF'|'hex=FF00FF'|'hex=00FFFF'|'hex=FFFFFF'|'hex=00005F'|'hex=000087'|'hex=0000AF'|'hex=0000D7'|'hex=005F00'|'hex=005F5F'|'hex=005F87'|'hex=005FAF'|'hex=005FD7'|'hex=005FFF'|'hex=008700'|'hex=00875F'|'hex=008787'|'hex=0087AF'|'hex=0087D7'|'hex=0087FF'|'hex=00AF00'|'hex=00AF5F'|'hex=00AF87'|'hex=00AFAF'|'hex=00AFD7'|'hex=00AFFF'|'hex=00D700'|'hex=00D75F'|'hex=00D787'|'hex=00D7AF'|'hex=00D7D7'|'hex=00D7FF'|'hex=00FF5F'|'hex=00FF87'|'hex=00FFAF'|'hex=00FFD7'|'hex=5F0000'|'hex=5F005F'|'hex=5F0087'|'hex=5F00AF'|'hex=5F00D7'|'hex=5F00FF'|'hex=5F5F00'|'hex=5F5F5F'|'hex=5F5F87'|'hex=5F5FAF'|'hex=5F5FD7'|'hex=5F5FFF'|'hex=5F8700'|'hex=5F875F'|'hex=5F8787'|'hex=5F87AF'|'hex=5F87D7'|'hex=5F87FF'|'hex=5FAF00'|'hex=5FAF5F'|'hex=5FAF87'|'hex=5FAFAF'|'hex=5FAFD7'|'hex=5FAFFF'|'hex=5FD700'|'hex=5FD75F'|'hex=5FD787'|'hex=5FD7AF'|'hex=5FD7D7'|'hex=5FD7FF'|'hex=5FFF00'|'hex=5FFF5F'|'hex=5FFF87'|'hex=5FFFAF'|'hex=5FFFD7'|'hex=5FFFFF'|'hex=870000'|'hex=87005F'|'hex=870087'|'hex=8700AF'|'hex=8700D7'|'hex=8700FF'|'hex=875F00'|'hex=875F5F'|'hex=875F87'|'hex=875FAF'|'hex=875FD7'|'hex=875FFF'|'hex=878700'|'hex=87875F'|'hex=878787'|'hex=8787AF'|'hex=8787D7'|'hex=8787FF'|'hex=87AF00'|'hex=87AF5F'|'hex=87AF87'|'hex=87AFAF'|'hex=87AFD7'|'hex=87AFFF'|'hex=87D700'|'hex=87D75F'|'hex=87D787'|'hex=87D7AF'|'hex=87D7D7'|'hex=87D7FF'|'hex=87FF00'|'hex=87FF5F'|'hex=87FF87'|'hex=87FFAF'|'hex=87FFD7'|'hex=87FFFF'|'hex=AF0000'|'hex=AF005F'|'hex=AF0087'|'hex=AF00AF'|'hex=AF00D7'|'hex=AF00FF'|'hex=AF5F00'|'hex=AF5F5F'|'hex=AF5F87'|'hex=AF5FAF'|'hex=AF5FD7'|'hex=AF5FFF'|'hex=AF8700'|'hex=AF875F'|'hex=AF8787'|'hex=AF87AF'|'hex=AF87D7'|'hex=AF87FF'|'hex=AFAF00'|'hex=AFAF5F'|'hex=AFAF87'|'hex=AFAFAF'|'hex=AFAFD7'|'hex=AFAFFF'|'hex=AFD700'|'hex=AFD75F'|'hex=AFD787'|'hex=AFD7AF'|'hex=AFD7D7'|'hex=AFD7FF'|'hex=AFFF00'|'hex=AFFF5F'|'hex=AFFF87'|'hex=AFFFAF'|'hex=AFFFD7'|'hex=AFFFFF'|'hex=D70000'|'hex=D7005F'|'hex=D70087'|'hex=D700AF'|'hex=D700D7'|'hex=D700FF'|'hex=D75F00'|'hex=D75F5F'|'hex=D75F87'|'hex=D75FAF'|'hex=D75FD7'|'hex=D75FFF'|'hex=D78700'|'hex=D7875F'|'hex=D78787'|'hex=D787AF'|'hex=D787D7'|'hex=D787FF'|'hex=D7AF00'|'hex=D7AF5F'|'hex=D7AF87'|'hex=D7AFAF'|'hex=D7AFD7'|'hex=D7AFFF'|'hex=D7D700'|'hex=D7D75F'|'hex=D7D787'|'hex=D7D7AF'|'hex=D7D7D7'|'hex=D7D7FF'|'hex=D7FF00'|'hex=D7FF5F'|'hex=D7FF87'|'hex=D7FFAF'|'hex=D7FFD7'|'hex=D7FFFF'|'hex=FF005F'|'hex=FF0087'|'hex=FF00AF'|'hex=FF00D7'|'hex=FF5F00'|'hex=FF5F5F'|'hex=FF5F87'|'hex=FF5FAF'|'hex=FF5FD7'|'hex=FF5FFF'|'hex=FF8700'|'hex=FF875F'|'hex=FF8787'|'hex=FF87AF'|'hex=FF87D7'|'hex=FF87FF'|'hex=FFAF00'|'hex=FFAF5F'|'hex=FFAF87'|'hex=FFAFAF'|'hex=FFAFD7'|'hex=FFAFFF'|'hex=FFD700'|'hex=FFD75F'|'hex=FFD787'|'hex=FFD7AF'|'hex=FFD7D7'|'hex=FFD7FF'|'hex=FFFF5F'|'hex=FFFF87'|'hex=FFFFAF'|'hex=FFFFD7'|'hex=080808'|'hex=121212'|'hex=1C1C1C'|'hex=262626'|'hex=303030'|'hex=3A3A3A'|'hex=444444'|'hex=4E4E4E'|'hex=585858'|'hex=626262'|'hex=6C6C6C'|'hex=767676'|'hex=8A8A8A'|'hex=949494'|'hex=9E9E9E'|'hex=A8A8A8'|'hex=B2B2B2'|'hex=BCBCBC'|'hex=C6C6C6'|'hex=D0D0D0'|'hex=DADADA'|'hex=E4E4E4'|'hex=EEEEEE'): string {
    const scan: RegExp = /(\=)([0-9A-F]{6})/g;
    let formato = '#';
    if(scan.exec(modelo) != null) formato = '#' + scan.exec(modelo)?.groups?.[2];
    return formato[2];
  }

  /**
   * @augments modelo Seleciona o modelo a ser utilizado. **[ Type: ``string`` ]**.
   * @description **Retorna uma cor existente nas páginas Web.** | _Returns a color existing in the Web Pages._  
   */
  public pegaCorTemplateWeb(modelo: 'aliceblue'|'antiquewhite'|'aqua'|'aquamarine'|'azure'|'beige'|'bisque'|'black'|'blanchedalmond'|'blue'|'blueviolet'|'brown'|'burlywood'|'cadetblue'|'chartreuse'|'chocolate'|'coral'|'cornflowerblue'|'cornsilk'|'crimson'|'cyan'|'darkblue'|'darkcyan'|'darkgoldenrod'|'darkgray'|'darkgreen'|'darkkhaki'|'darkmagenta'|'darkolivegreen'|'darkorange'|'darkorchid'|'darkred'|'darksalmon'|'darkseagreen'|'darkslateblue'|'darkslategray'|'darkturquoise'|'darkviolet'|'deeppink'|'deepskyblue'|'dimgray'|'dodgerblue'|'firebrick'|'floralwhite'|'florestgreen'|'fucsia'|'gainsboro'|'ghostwhite'|'gold'|'goldenrod'|'gray'|'green'|'greenyellow'|'honeydew'|'hotpink'|'indianred'|'ivory'|'khaki'|'lavender'|'lavenderblush'|'lawngreen'|'lemonchiffon'|'lightblue'|'lightcoral'|'lightcyan'|'lightgoldenrodyellow'|'lightgray'|'lightgreen'|'lightpink'|'lightsalmon'|'lightseagreen'|'lightskyblue'|'lightslategray'|'lightsteelblue'|'lightyellow'|'lime'|'limegreen'|'linen'|'magenta'|'maroon'|'mediumaquamarine'|'mediumblue'|'mediumorchid'|'mediumseagreen'|'mediumslateblue'|'mediumspringgreen'|'mediumturquoise'|'mediumvioletred'|'midnightblue'|'mintcream'|'mistyrose'|'moccasin'|'navajowhite'|'navy'|'oldlace'|'olive'|'olivedrab'|'orange'|'orangered'|'orchid'|'palegoldenrod'|'palegreen'|'paleturquoise'|'palevioletred'|'papayawhip'|'peachpuff'|'peru'|'pink'|'plum'|'powderblue'|'purple'|'red'|'rosybrown'|'royalblue'|'saddlebrown'|'salmon'|'sandybrown'|'seagreen'|'seashell'|'silver'|'skyblue'|'slateblue'|'slategray'|'snow'|'springgreen'|'steelblue'|'tan'|'teal'|'thistle'|'tomato'|'turquiose'|'violet'|'wheat'|'white'|'whitesmoke'|'yellow'|'yellowgreen'): string {
    return modelo;
  }

  /**
   * @augments entrada Seleciona a cor a ser utilizada. **[ Type: ``string`` ]**.
   * @description **Retorna uma coleção de cores RGB com um 4º espectro agrupado de uma cor definida.** | _Returns a collection of RGB colors with a 4th spectrum grouped from a defined color._  
   */
  public pegaCorTemplateRGBN(entrada: string, espectro: string): string[]|any {

    const base: StructureColor = { 
      corI: entrada.match(/\#[0-9a-fA-F]{6}/gi)?.[0].toString(), 
      cor: espectro.match(/\#[0-9a-fA-F]{6}/gi)?.[0].toString(), 
    }, colecao = [base.corI];
    let alts;

    alts.push(base.cor+Schemas.format_a);
    alts.push(base.cor+Schemas.format_b);
    alts.push(base.cor+Schemas.format_c);
    alts.push(base.cor+Schemas.format_d);
    alts.push(base.cor+Schemas.format_e);
    alts.push(base.cor+Schemas.format_f);
    alts.push(base.cor+Schemas.format_g);
    alts.push(base.cor+Schemas.format_h);
    alts.push(base.cor+Schemas.format_i);
    alts.push(base.cor+Schemas.format_j);
    alts.push(base.cor+Schemas.format_k);
    alts.push(base.cor+Schemas.format_l);
    alts.push(base.cor+Schemas.format_m);
    alts.push(base.cor+Schemas.format_n);
    colecao.push(alts);

    return colecao;

  }

}

class wLydroc {

  /** 
   * @augments tag define a tag html a ser utilizada. **[ Type: ``models`` ]**.
   * @augments idElemento define o id do elemento html a ser criado. **[ Type: ``string`` ]**.
   * @description **Cria um novo elemento html.** | _Create a new html element._
   */
  public criaElementoComum(tag: 'abbr'|'acronym'|'address'|'anchor'|'applet'|'area'|'article'|'audio'|'b'|'base'|'basefont'|'bdi'|'bdo'|'bgsound'|'big'|'blink'|'blockquote'|'body'|'br'|'button'|'canvas'|'caption'|'center'|'cite'|'code'|'col'|'colgroup'|'content'|'data'|'datalist'|'dd'|'del'|'details'|'dfn'|'dialog'|'dir'|'div'|'dl'|'dt'|'em'|'embed'|'fieldset'|'figcaption'|'figure'|'font'|'footer'|'form'|'frameset'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'head'|'header'|'hgroup'|'hr'|'html'|'i'|'iframe'|'image'|'img'|'input'|'ins'|'kbd'|'keygen'|'label'|'legend'|'li'|'link'|'main'|'map'|'mark'|'marquee'|'menu'|'menuitem'|'meta'|'meter'|'nav'|'nobr'|'noembed'|'noframes'|'noscript'|'object'|'ol'|'optgroup'|'option'|'output'|'paragraph'|'param'|'picture'|'plaintext'|'portal'|'pre'|'progress'|'q'|'rb'|'rp'|'rt'|'rtc'|'ruby'|'s'|'samp'|'script'|'section'|'select'|'shadow'|'slot'|'small'|'spacer'|'span'|'strike'|'strong'|'style'|'sub'|'summary'|'sup'|'table'|'tbody'|'td'|'template'|'textarea'|'tfoot'|'th'|'thead'|'time'|'title'|'tr'|'track'|'tt'|'u'|'ul'|'var'|'video'|'wbr'|'xmp', idElemento: string): HTMLElement { 
    const elemento = document.createElement(tag);
    elemento.id = idElemento; 
    return elemento; 
  }

  /**
   * @augments tag define a tag svg a ser utilizada. **[ Type: ``models`` ]**.
   * @augments idElemento define o id do elemento svg a ser criado. **[ Type: ``string`` ]**.
   * @description **Cria um novo elemento svg.** | _Create a new svg element._
   */
  public criaElementoSVG(tag: 'a'|'animate'|'animateMotion'|'animateTransform'|'circle'|'clipPath'|'color-profile'|'defs'|'desc'|'discard'|'ellipse'|'feBlend'|'feColorMatrix'|'feComponentTransfer'|'feComposite'|'feConvolveMatrix'|'feDiffuseLighting'|'feDisplamentMap'|'feDistantLight'|'feFlood'|'feFuncA'|'feFuncB'|'feFuncG'|'feFuncR'|'feGaussianBlur'|'feImage'|'feMerge'|'feMergeNode'|'feMorphology'|'feOffset'|'fePointLight'|'feSpecularLighting'|'feSpotLight'|'feTile'|'feTurbulence'|'filter'|'foreignObject'|'g'|'hatch'|'hatchpath'|'image'|'line'|'linearGradient'|'maker'|'mask'|'metadata'|'path'|'pattern'|'polygon'|'polyline'|'radialGradient'|'rect'|'set'|'solidcolor'|'stop'|'switch'|'symbol'|'text'|'textPath'|'title'|'thef'|'tspan'|'use'|'view', idElemento: string): any {
    const elemento = document.createElement(tag);
    elemento.id = idElemento;
    return elemento;
  }

  /**
   * @augments tag define a tag customizada a ser utilizada. **[ Type: ``models`` ]**.
   * @augments idElemento define o id do elemento customizada a ser criado. **[ Type: ``string`` ]**.
   * @augments herdeiro define o elemento herdeiro do elemento a ser criado. **[ Type: ``string`` ]**.
   * @augments extensao define a extensão do elemento a ser criado. **[ Type: ``HTMLElement`` ]**.
   * @description **Cria um novo elemento customizado.** | _Create a new custom element._
   */
  public criaElementoCustomizado(tag: string, idElemento: string, herdeiro?: string, extensao?: Node|any): any {

    if(herdeiro != 'abbr'||'acronym'||'address'||'anchor'||'applet'||'area'||'article'||'audio'||'b'||'base'||'basefont'||'bdi'||'bdo'||'bgsound'||'big'||'blink'||'blockquote'||'body'||'br'||'button'||'canvas'||'caption'||'center'||'cite'||'code'||'col'||'colgroup'||'content'||'data'||'datalist'||'dd'||'del'||'details'||'dfn'||'dialog'||'dir'||'div'||'dl'||'dt'||'em'||'embed'||'fieldset'||'figcaption'||'figure'||'font'||'footer'||'form'||'frameset'||'h1'||'h2'||'h3'||'h4'||'h5'||'h6'||'head'||'header'||'hgroup'||'hr'||'html'||'i'||'iframe'||'image'||'img'||'input'||'ins'||'kbd'||'keygen'||'label'||'legend'||'li'||'link'||'main'||'map'||'mark'||'marquee'||'menu'||'menuitem'||'meta'||'meter'||'nav'||'nobr'||'noembed'||'noframes'||'noscript'||'object'||'ol'||'optgroup'||'option'||'output'||'paragraph'||'param'||'picture'||'plaintext'||'portal'||'pre'||'progress'||'q'||'rb'||'rp'||'rt'||'rtc'||'ruby'||'s'||'samp'||'script'||'section'||'select'||'shadow'||'slot'||'small'||'spacer'||'span'||'strike'||'strong'||'style'||'sub'||'summary'||'sup'||'table'||'tbody'||'td'||'template'||'textarea'||'tfoot'||'th'||'thead'||'time'||'title'||'tr'||'track'||'tt'||'u'||'ul'||'var'||'video'||'wbr'||'xmp') return 0;

    const elemento = class CustomHTMLElement extends HTMLElement {

      constructor() { super(); this.id = idElemento; }

      protected geraElemento() { 
        const custom = window.customElements.define(tag, CustomHTMLElement, { extends: herdeiro } );
        this.attachShadow({ mode: 'open' });
        return custom;
      }

    }

    new elemento().appendChild(extensao);

    return elemento;
  }

  /**
   * @augments id1 id do elemento base do vínculo a ser gerado. **[ Type: ``string`` ]**.
   * @augments id2 id do elemento herdeiro do vínculo a ser gerado. **[ Type: ``string`` ]**.
   * @description **Gera um vínculo entre elementos distintos.** | _Generate a link between different elements._
   */
  public adicionaVinculoAoElemento(id1: string, id2: string): void {
    const elemento1 = document.getElementById(id1);
    const elemento2 = document.getElementById(id2);
    if(elemento1 != null && elemento2 != null) elemento1.appendChild(elemento2);
  }

  /**
   * @augments atributo attr do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @augments valor valor do atributo a ser adicionado. **[ Type: ``string`` ]**.
   * @augments idElemento id do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @description **Gera um atributo em um elemento HTML selecionado.** | _Generate an attribute in a selected HTML element._
   */
  public adicionaAtributoAoElemento(atributo: 'abbr'|'accept'|'accept-charset'|'accesskey'|'action'|'align'|'allow'|'allowfullscreen'|'allowpaymentrequest'|'allowusermedia'|'alt'|'as'|'async'|'autocomplete'|'autoplay'|'autosave'|'bgcolor'|'border'|'buffered'|'challenge'|'charset'|'checked'|'cite'|'class'|'code'|'codebase'|'color'|'download'|'draggable'|'dropzone'|'enctype'|'for'|'form'|'formaction'|'formenctype'|'formmethod'|'formnovalidate'|'formtarget'|'frameborder'|'href'|'headers'|'label'|'lang'|'list'|'loop'|'low'|'manifest'|'marginheight'|'marginwidth'|'max'|'maxlength'|'media'|'mediagroup'|'method'|'min'|'minlength'|'multiple'|'muted'|'name'|'nonce'|'novalidate'|'open'|'optimum'|'pattern'|'placeholder'|'playsinline'|'poster'|'preload'|'profile'|'radiogroup'|'readonly'|'referrerpolicy'|'rel'|'required'|'reversed'|'rows'|'rowspan'|'sandbox'|'scope'|'scoped'|'scrolling'|'seamless'|'selected'|'shape'|'size'|'sizes'|'span'|'spellcheck'|'src'|'srcdoc'|'srclang'|'srcset'|'start'|'step'|'style'|'tabindex'|'target'|'title'|'translate'|'type'|'usemap'|'value'|'width'|'wrap', idElemento: string, valor: string): void {
    const elemento = document.getElementById(idElemento);
    if(elemento != null) elemento.setAttribute(atributo, valor);
  }

  /**
   * @augments atributo attr do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @augments valor valor do atributo a ser adicionado. **[ Type: ``string`` ]**.
   * @augments idElemento id do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @description **Gera um atributo em um elemento SVG selecionado.** | _Generate an attribute in a selected SVG element._
   */
  public adicionaAtributoAoElementoSVG(atributo: 'accent-height'|'accumulate-ascent'|'accumulate-descent'|'additive-operator'|'alignment-baseline'|'alphabetic'|'amplitude'|'arabic-form'|'ascent'|'attribute-name'|'attribute-namespace'|'attribute-type'|'azimuth'|'baseProfile'|'baseline-shift'|'bbox'|'begin'|'bias'|'by'|'calcMode'|'cap-height'|'class'|'clip'|'clip-path'|'clip-rule'|'clipPathUnits'|'color'|'color-interpolation'|'color-interpolation-filters'|'color-profile'|'color-rendering'|'content'|'contentScriptType'|'contentStyleType'|'contentType'|'cursor'|'cx'|'cy'|'d'|'decelerate'|'descent'|'diffuse-lighting'|'direction'|'display'|'divisor'|'dominant-baseline'|'dur'|'dx'|'dy'|'edge-mode'|'elevation'|'end'|'exponent'|'externalResourcesRequired'|'fill'|'fill-opacity'|'fill-rule'|'filter'|'filterRes'|'filterUnits'|'flood-color'|'flood-opacity'|'focusable'|'font-family'|'font-size'|'font-size-adjust'|'font-stretch'|'font-style'|'font-variant'|'font-weight'|'format'|'from'|'fx'|'fy'|'g1'|'g2'|'glyph-name'|'glyph-orientation-horizontal'|'glyph-orientation-vertical'|'glyphRef'|'gradientTransform'|'gradientUnits'|'hanging'|'height'|'href'|'horiz-adv-x'|'horiz-origin-x'|'horiz-origin-y'|'id'|'ideographic'|'image-rendering'|'in'|'in2'|'intercept'|'k'|'k1'|'k2'|'k3'|'k4'|'kernelMatrix'|'kernelUnitLength'|'kerning'|'keyPoints'|'keySplines'|'keyTimes'|'lengthAdjust'|'letter-spacing'|'lighting-color'|'limitingConeAngle'|'local'|'marker-end'|'marker-mid'|'marker-start'|'marker-units'|'markerHeight'|'markerUnits'|'markerWidth'|'mask'|'maskContentUnits'|'maskUnits'|'mathematical'|'mode'|'name'|'numOctaves'|'offset'|'opacity'|'operator'|'order'|'orient'|'orientation'|'origin'|'overflow'|'overline-position'|'overline-thickness'|'paint-order'|'path'|'pathLength'|'patternContentUnits'|'patternTransform'|'patternUnits'|'pointer-events'|'points'|'pointsAtX'|'pointsAtY'|'pointsAtZ'|'preserveAlpha'|'preserveAspectRatio'|'primitiveUnits'|'r'|'radius'|'refX'|'refY'|'rendering-intent'|'repeatCount'|'repeatDur'|'requiredExtensions'|'requiredFeatures'|'restart'|'results'|'rotate'|'rx'|'ry'|'scale'|'seed'|'shape-renderizing'|'slope'|'spacing'|'specularConstant'|'specularExponent'|'specularConstantAttr'|'specularExponentAttr'|'spreadMethod'|'startOffset'|'stdDeviation'|'stemh'|'stemv'|'stitchTiles'|'stop-color'|'stop-opacity'|'strikethrough-position'|'strikethrough-thickness'|'string'|'stroke'|'stroke-dasharray'|'stroke-dashoffset'|'stroke-linecap'|'stroke-linejoin'|'stroke-miterlimit'|'stroke-opacity'|'stroke-width'|'surfaceScale'|'systemLanguage'|'tableValues'|'target'|'targetX'|'targetY'|'text-anchor'|'text-decoration'|'text-rendering'|'textLength'|'to'|'transform'|'type'|'u1'|'u2'|'underline-position'|'underline-thickness'|'unicode'|'unicode-bidi'|'unicode-range'|'units-per-em'|'values'|'v-alphabetic'|'v-hanging'|'v-ideographic'|'v-mathematical'|'vector-effect'|'version'|'vert-adv-y'|'vert-origin-x'|'vert-origin-y'|'viewBox'|'viewTarget'|'visibility'|'width'|'widths'|'word-spacing'|'writing-mode'|'x'|'x-height'|'x1'|'x2'|'xChannelSelector'|'y'|'y1'|'y2'|'yChannelSelector'|'z'|'zoomAndPan', idElemento: string, valor: string): any {
    const elemento = document.getElementById(idElemento);
    if(elemento != null) elemento.setAttribute(atributo, valor);
  }

  /**
   * @augments atributo atributo do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @augments idElemento id do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @description **Gera um attributo customizado.** | _Generates a custom attribute._ 
   */
  public coletaAtributoDoElemento(atributo: string, idElemento: string): any {
    const elemento = document.getElementById(idElemento);
    if(elemento!= null) elemento.getAttribute(atributo);
    return elemento; 
  }

  /**
   * @augments idFolhaDeEstilo id da folha de estilo a ser adicionada. **[ Type: ``string`` ]**.
   * @augments caminhoFolhaDeEstilo caminho da folha de estilo a ser adicionada. **[ Type: ``string`` ]**.
   * @description **Gera uma folha de estilo.** | _Generates a style sheet._
   */
  protected defineFolhaDeEstilo(idFolhaDeEstilo: string, caminhoFolhaDeEstilo: string): void {
    const folhaDeEstilo = document.createElement('link');
    folhaDeEstilo.setAttribute('id', idFolhaDeEstilo);
    folhaDeEstilo.setAttribute('rel', 'stylesheet');
    folhaDeEstilo.setAttribute('href', caminhoFolhaDeEstilo);
    document.head.appendChild(folhaDeEstilo);
  }

  /**
   * @augments idFolhaDeEstilo id do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @augments caminhoFolhaDeEstilo caminho da folha de estilo a ser adicionada. **[ Type: ``string`` ]**.
   * @description **Gera uma folha de estilo no Javascript.** | _Generates a style sheet in Javascript._ 
  */
  protected defineFolhaDeEstiloJS(idFolhaDeEstilo: string, caminhoFolhaDeEstilo: string): void {
    const folhaDeEstilo = document.createElement('script');
    folhaDeEstilo.setAttribute('id', idFolhaDeEstilo);
    folhaDeEstilo.setAttribute('type', 'text/javascript');
    folhaDeEstilo.setAttribute('src', caminhoFolhaDeEstilo);
    document.body.appendChild(folhaDeEstilo);
  }

}

// Propriedades de Estado de Bloco
// const BlockstatePropertyAxis = () => {setup: "axis=x"||"axis=y"||"axis=z" }
// const BlockstatePropertyFace = () => { setup: "face=wall"||"face=floor||"face=ceiling" };
// const BlockstatePropertyFacing = () => { setup: "facing=north"||"facingsouth"||"facing=west"||"facing=east" };
// const BlockstatePropertyHalf = () => { setup:"half=upper"||"half=lower" 
// const BlockstatePropertyHinge = () => { setup:"hinge=left"||"hinge=right" 
// const BlockstatePropertyInWall = () => { setup:"in_wall=true"||"in_wall=fase" 
// const BlockstatePropertyOpen = () => { setup:"open=true"||"open=false" }
// const BlockstatePropertyPowered = () => { setup:"powered=true"||"powered=false" }
// const BlockstateSubproperties = (value: string|number) => { setup:`model=${value}`||`x=${value}`||`y=${value}` }

class wKarzok {

  private rootFormatMultipart = function(content: string): string {
    return `{ multipart: { ${content} } }`;
  };

  private rootFormatBlockstate = function(content: string): string {
    return `{ blockstate: { ${content} } }`;
  }


}
