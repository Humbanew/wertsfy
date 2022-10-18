'use strict'

import { WCollections, WTrmSClr, WTrmSClrF } from "./wcollections";

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
    
    // método privado para logarítmo
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
        let rest: any;
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
        let resultado: any;
        resultado = verificador.exec(x.toString());
        return parseInt(resultado[0]);
      }

      fround(x: number): number 
      {
        const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
        let resultado: any;
        resultado = verificador.exec(x.toString());
        if (parseFloat(resultado[1]) >= 0.5) {
          return parseInt(resultado[0] + 1);
        }
        return parseInt(resultado[0]);
      }

      sign(x: number): number 
      {
        let v: any;
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
        let v: any;
        if (x < x + 0.5) { v = parseInt(x.toString()); }
        return v;
      }

      floor(x: number): number 
      {
        let v: any;
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
    public Terminal = class WTerminal {

      get inputSymbol()
      {
        return '|>';
      }

      get outputSymbol()
      {
        return '|<';
      }

      get divSymbol()
      {
        return '=//\\\\//\\\\//\\\\='
      }

      get loadingSymbols()
      {
        
        return (

          {
            '025': '\\',
            '050': '|',
            '075': '/',
            '100': '-'
          }
        
        )
      
      }

      get escapeCharacterNewLine()
      {
        return '\n';
      }

      get escapeCharacterTab()
      {
        return '\t';
      }

      get escapeCharacterBackspace()
      {
        return '\b';
      }

      get escapeCharacterRestartLine()
      {
        return '\r';
      }

      get escapeCharacterVerticalTab()
      {
        return '\v';
      }

      get escapeCharacterFormFeed()
      {
        return '\f';
      }

      get escapeCharacterNull()
      {
        return '\0';
      }

      public adicionaFormTexto(modelo: WCollections, texto: string): string {
        const objeto = modelo.Terminal.Tipo.Formatacao.Template, regexp = /[0-9]m/gi;
        let formato = regexp.exec(objeto)?.toString();
        return `\033[${formato}${texto}\033[0m`;
      };

      public adicionaClrTexto(modelo: WCollections, tC: WTrmSClr, eC: WTrmSClrF, texto: string): string {
        let formato = null, objeto: any, regexp: RegExp;
        switch(tC) {
          case "3b4bit":
            switch(eC) {
              case "C":
                objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_3b4bit.CorLetra 
                 ,regexp = /[0-9]m/gi;
                formato = regexp.exec(objeto)?.toString();
              case "F":
                objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_3b4bit.CorFundo 
                 ,regexp = /[0-9]m/gi;
                formato = regexp.exec(objeto)?.toString();
            }
          case "8bit":
            switch(eC) {
              case "C":
                objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_8bit.CorLetra 
                 ,regexp = /[0-9];5;[0-9]m/gi;
                formato = regexp.exec(objeto)?.toString();
              case "F":
                objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_8bit.CorFundo
                 ,regexp = /[0-9];5;[0-9]m/gi;
                formato = regexp.exec(objeto)?.toString();
            }
          case "24bit":
            switch(eC) {
              case "C":
                objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_24bit.CorLetra
                 ,regexp = /[0-9];2;[0-9];[0-9];[0-9]m/gi;
                formato = regexp.exec(objeto)?.toString();
              case "F":
                objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_24bit.CorFundo
                 ,regexp = /[0-9];2;[0-9];[0-9];[0-9]m/gi;
                formato = regexp.exec(objeto)?.toString();
            }
        }
        return `\033[${formato}${texto}\033[0m`;
      }

    }

    // bloco de implementação da Biblioteca "Spectrals"
    public Spectrals = class WSpectrals {

      public selecionaUmaCor(cor: WCollections): WCollections { 
        return cor; 
      }

    }

    // bloco de implementação da Biblioteca "Karzok"
    // bloco de implementação da Biblioteca "Lydroc"

  }

  protected rdcmath = new this.wtsy_lib.prototype.Math();
  protected rdcterminal = new this.wtsy_lib.prototype.Terminal();
  protected rdcspectrals = new this.wtsy_lib.prototype.Spectrals();

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

    },

    terminal:
    {

      /** 
       * @description **``Constant``**
       * Returns the input symbol. 
       */
      InputSymbol: this.rdcterminal.inputSymbol,

      /** 
       * @description **``Constant``**
       * Returns the output symbol. 
       */
      OutputSymbol: this.rdcterminal.outputSymbol,
      
      /** 
       * @description **``Constant``**
       * Returns the div symbol. 
       */
      DivSymbol: this.rdcterminal.divSymbol,
      
      /** 
       * @description **``Constant``**
       * Returns the loading symbol. 
       */
      LoadingSymbol: this.rdcterminal.loadingSymbols,

      /** 
       * @description **``Constant``**
       * Returns the escape character new line **(\n)**. 
       */
      EcpCharNewLine: this.rdcterminal.escapeCharacterNewLine,

      /** 
       * @description **``Constant``**
       * Returns the escape character tab **(\t)**. 
       */
      EcpCharTab: this.rdcterminal.escapeCharacterTab,

      /** 
       * @description **``Constant``**
       * Returns the escape character backspace **(\b)**. 
       */
      EcpCharBackspace: this.rdcterminal.escapeCharacterBackspace,

      /** 
       * @description **``Constant``**
       * Returns the escape character restart line **(\r)**. 
       */
      EcpCharRestartLine: this.rdcterminal.escapeCharacterRestartLine,

      /** 
       * @description **``Constant``**
       * Returns the escape character vertical tab **(\v)**. 
       */      
      EcpCharVerticalTab: this.rdcterminal.escapeCharacterVerticalTab,

      /** 
       * @description **``Constant``**
       * Returns the escape character form feed **(\f)**. 
       */
      EcpCharFromFeed: this.rdcterminal.escapeCharacterFormFeed,
      
      /** 
       * @description **``Constant``**
       * Returns the escape character null **(\n)**. 
       */
      EcpCharNull: this.rdcterminal.escapeCharacterNull,

      /** 
       * @description **``Method``** 
       * Returns the text with formatation.
       * @augments ``modelo``|**``WCollections``**
       * Model template selection.
       * @augments ``texto``|**``string``**
       * Text to format. 
       */
      addformtexto: (m: WCollections, texto: string) => this.rdcterminal.adicionaFormTexto(m, texto),

      /** 
       * @description **``Method``** 
       * Returns the text with color formatation.
       * @augments ``modelo``|**``WCollections``**
       * Model template selection.
       * @augments ``texto``|**``string``**
       * Text to format. 
       */
      addformcor: (m: WCollections, texto: string) => this.rdcterminal.adicionaFormTexto(m, texto)

    },

    spectrals:
    {
    
      /** 
       * @description **``Method``** 
       * Returns the color collection.
       * @augments ``cor``|**``WCollections``**
       * Model color selection.
       */
      selecionaCor: (cor: WCollections) => this.rdcspectrals.selecionaUmaCor(cor)
    
    }
    
  }


}

const abstraction = new WBoard().wertsfy;

let test: WCollections;
