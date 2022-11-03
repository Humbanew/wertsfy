// importando dependências de métodos e funcionalidades
/// <reference path="wcollections.d.ts" />
import { WCollections, WTSchClr, WTSchClrFrgd } from "./wcollections";

// Quadro base de arquitetura
class WBoard {

  // bloco de implementação do Command Line Interface
  protected WCommandLineInterface = null
  // bloco de implementação de Testes
  protected WNikko = null
  // bloco de implementação de Serviços
  protected WServices = null
  // bloco de implementação das Bibliotecas
  protected WLibrarys = {
    
    // bloco de implementação da Biblioteca "Math"
    wmath: class WMath {
    
      _log(expo: number, x: number): number 
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
        return this._log(10, x);
      }
    
      logm1(x: number): number 
      {
        return this._log(10-1, x);
      }
    
      logp1(x: number): number 
      {
        return this._log(10+1, x);
      }
    
      logx(x: number, base: number): number 
      {
        return this._log(base, x);
      }
    
      logxm1(x: number, base: number): number 
      {
        return this._log(base - 1, x);
      }
    
      logxp1(x: number, base: number): number 
      {
        return this._log(base + 1, x);
      }
    
      ln(x: number): number 
      {
        return this._log(this.euler, x);
      }
    
      lnm1(x: number): number 
      {
        return this._log(this.euler - 1, x);
      }
    
      lnp1(x: number): number 
      {
        return this._log(this.euler + 1, x);
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
    
    },
    
    // bloco de implementação da Biblioteca "Terminal"
    wterminal: class WTerminal {

      get inputSymbol() {
        return '|>';
      }
    
      get outputSymbol() {
        return '|<';
      }
    
      get divSymbol() {
        return '=//\\\\//\\\\//\\\\='
      }
    
      get loadingSymbols() {
        
        return (
    
          {
            '025': '\\',
            '050': '|',
            '075': '/',
            '100': '-'
          }
        
        )
      
      }
    
      get escapeCharacterNewLine() {
        return '\n';
      }
    
      get escapeCharacterTab() {
        return '\t';
      }
    
      get escapeCharacterBackspace() {
        return '\b';
      }
    
      get escapeCharacterRestartLine() {
        return '\r';
      }
    
      get escapeCharacterVerticalTab() {
        return '\v';
      }
    
      get escapeCharacterFormFeed() {
        return '\f';
      }
    
      get escapeCharacterNull() {
        return '\0';
      }
    
      public adicionaFormTexto(modelo: WCollections, texto: string): string {
        const objeto = modelo.Terminal.Tipo.Formatacao.Template, regexp = /[0-9]m/gi;
        let formato = regexp.exec(objeto)?.toString();
        return "\\033[" + `${formato}${texto}` + "\\033[0m";
      };
    
      public adicionaClrTexto(modelo: WCollections, template: WTSchClr, esquema: WTSchClrFrgd, texto: string): string {
        let formato: string, objeto: any, regexp: RegExp;
        switch(template) {
          case "3b4bit":
            switch(esquema) {
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
            switch(esquema) {
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
            switch(esquema) {
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
        return "\\033[" + `${formato}${texto}` + "\\033[0m";
      }
    
      public adicionaFormClrTexto(modeloFrm: WCollections, modeloClr: WCollections, templateClr: WTSchClr, esquemaClr: WTSchClrFrgd, texto: string) { 
        let constructor = this.adicionaFormTexto(modeloFrm, this.adicionaClrTexto(modeloClr, templateClr, esquemaClr, texto));
        return constructor;
      }
    
    },

    // bloco de implementação da Biblioteca "Spectrals"
    wspectrals: class WSpectrals {
    
      public selecionaUmaCor(cor: WCollections): WCollections { 
        return cor; 
      }
    
    },

  }

  public wertsfy_math = new this.WLibrarys.wmath();
  public wertsfy_terminal = new this.WLibrarys.wterminal(); 
  public wertsfy_spectrals = new this.WLibrarys.wspectrals();

  // Abstração de toda a Aplicação para o mundo externo
  public wertsfy = {

    math: {
      
      /** 
       * @description **``Constant``**
       * Returns the pi value. 
       */
      Pi: this.wertsfy_math.pi,

      
      /** 
       * @description **``Constant``** 
       * Returns the euler value.
       */
      Euler: this.wertsfy_math.euler,
      
      /** 
       * @description **``Constant``** 
       * Returns the plank value.
       */
      Plank: this.wertsfy_math.plank,

      /** 
       * @description **``Constant``** 
       * Returns the avogrado value.
       */
      Avogadro: this.wertsfy_math.avogadro,

      /** 
       * @description **``Constant``** 
       * Returns the newton value.
       */
      Newton: this.wertsfy_math.newton,

      /** 
       * @description **``Constant``** 
       * Returns the tesla value.
       */
      Tesla: this.wertsfy_math.tesla,

      /** 
       * @description **``Constant``** 
       * Returns the root square values.
       */
      Sqrt: this.wertsfy_math.sqrtd,

      /** 
       * @description **``Constant``** 
       * Returns the cubic square values.
       */
      Cbrt: this.wertsfy_math.cbrtd,

      /** 
       * @description **``Constant``** 
       * Returns the natural logarithm with base two value.
       */
      Ln2: this.wertsfy_math.ln2,

      /** 
       * @description **``Constant``** 
       * Returns the natural logarithm with base ten value.
       */
      Ln10: this.wertsfy_math.ln10,

      /** 
       * @description **``Constant``** 
       * Returns the logarithm of euler with base two value.
       */
      Log2e: this.wertsfy_math.log2e,

      /** 
       * @description **``Constant``** 
       * Returns the logarithm of euler with base ten value.
       */
      Log10e: this.wertsfy_math.log10e,

      /** 
       * @description **``Constant``** 
       * Returns the maxvalue.
       */
      Maxvalue: this.wertsfy_math.maxvalue,

      /** 
       * @description **``Constant``** 
       * Returns the minvalue.
       */
      Minvalue: this.wertsfy_math.minvalue,

      /** 
       * @description **``Method``** 
       * Returns the absolute value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      abs: (
        x: number
      ) => this.wertsfy_math.abs(x),

      /** 
       * @description **``Method``** 
       * Returns the root square value.
       * @augments ``x``|**``number``**
       * Number value. 
       */      
      sqrt: (
        x: number
      ) => this.wertsfy_math.sqrt(x),

      /** 
       * @description **``Method``** 
       * Returns the cubic root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      cbrt: (
        x: number
      ) => this.wertsfy_math.cbrt(x),

      /** 
       * @description **``Method``** 
       * Returns the four root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      quart: (
        x: number
      ) => this.wertsfy_math.quart(x),

      /** 
       * @description **``Method``** 
       * Returns the five root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      quint: (
        x: number
      ) => this.wertsfy_math.quint(x),

      /** 
       * @description **``Method``** 
       * Returns the six root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      sext: (
        x: number
      ) => this.wertsfy_math.sext(x),

      /** 
       * @description **``Method``** 
       * Returns the seven root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      sept: (
        x: number
      ) => this.wertsfy_math.sept(x),

      /** 
       * @description **``Method``** 
       * Returns the eight root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      oct: (
        x: number
      ) => this.wertsfy_math.oct(x),

      /** 
       * @description **``Method``** 
       * Returns the nine root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      non: (
        x: number
      ) => this.wertsfy_math.non(x),

      /** 
       * @description **``Method``** 
       * Returns the ten root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      dec: (
        x: number
      ) => this.wertsfy_math.dec(x),

      /** 
       * @description **``Method``** 
       * Returns the power value.
       * @augments ``x``|**``number``**
       * Number base value. 
       * @augments ``y``|**``number``**
       * Number power value.
       */
      pow: (
        x: number, 
        y: number
      ) => this.wertsfy_math.pow(x, y),

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
      powOfPow: (
        x: number, 
        y: number, 
        z?: number[]
      ) => this.wertsfy_math.powOfPow(x, y, z),

      /** 
       * @description **``Method``**
       * Returns the max value.
       * @augments ``x``|**``number[]``**
       * Number sequence.
       */
      max: (
        x: number[]
      ) => this.wertsfy_math.max(x),

      /** 
       * @description **``Method``**
       * Returns the min value.
       * @augments ``x``|**``number[]``**
       * Number sequence.
       */
      min: (
        x: number[]
      ) => this.wertsfy_math.min(x),

      /** 
       * @description **``Method``**
       * Returns the rounded value.
       * @augments ``x``|**``number``**
       * Floating value.
       */
      round: (
        x: number
      ) => this.wertsfy_math.round(x),

      /** 
       * @description **``Method``**
       * Returns the precision rounded value.
       * @augments ``x``|**``number``**
       * Floating value.
       */
      fround: (
        x: number
      ) => this.wertsfy_math.fround(x),

      /** 
       * @description **``Method``**
       * Returns the signal of value.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sign: (
        x: number
      ) => this.wertsfy_math.sign(x),

      /** 
       * @description **``Method``**
       * Returns the number value without floating point parts.
       * @augments ``x``|**``number``**
       * Number value.
       */
      trunc: (
        x: number
      ) => this.wertsfy_math.trunc(x),

      /** 
       * @description **``Method``**
       * Returns the result of the 32-bit integer multiplication of two numbers.
       * @augments ``x``|**``number``** ``y``|**``number``**
       * Number value.
       */
      imul: (x: number, y: number) => this.wertsfy_math.imul(x, y),

      /** 
       * @description **``Method``**
       * Returns the smallest integer greater than or equal to number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      ceil: (x: number) => this.wertsfy_math.ceil(x),

      /** 
       * @description **``Method``**
       * Returns the largest integer less than or equal to number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      floor: (x: number) => this.wertsfy_math.floor(x),

      /**
       * @description **``Method``**
       * Returns the sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sin: (x: number) => this.wertsfy_math.sin(x),

      /** 
       * @description **``Method``**
       * Returns the cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cos: (x: number) => this.wertsfy_math.cos(x),

      /**
       * @description **``Method``**
       * Returns the tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      tan: (x: number) => this.wertsfy_math.tan(x),

      /** 
       * @description **``Method``**
       * Returns the secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sec: (x: number) => this.wertsfy_math.sec(x),

      /**
       * @description **``Method``**
       * Returns the cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cosec: (x: number) => this.wertsfy_math.cosec(x),

      /** 
       * @description **``Method``**
       * Returns the cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cotan: (x: number) => this.wertsfy_math.cotan(x),

      /**
       * @description **``Method``**
       * Returns the hiperbolic sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sinh: (x: number) => this.wertsfy_math.sinh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cosh: (x: number) => this.wertsfy_math.cosh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      tanh: (x: number) => this.wertsfy_math.tanh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sech: (x: number) => this.wertsfy_math.sech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cosech: (x: number) => this.wertsfy_math.cosech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cotanh: (x: number) => this.wertsfy_math.cotanh(x),

      /** 
       * @description **``Method``**
       * Returns the arc sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      arcsin: (x: number) => this.wertsfy_math.arcsin(x),

      /** 
       * @description **``Method``**
       * Returns the arc cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccos: (x: number) => this.wertsfy_math.arccos(x),

      /** 
       * @description **``Method``**
       * Returns the arc tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arctan: (x: number) => this.wertsfy_math.arctan(x),

      /** 
       * @description **``Method``**
       * Returns the arc secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arcsec: (x: number) => this.wertsfy_math.arcsec(x),

      /** 
       * @description **``Method``**
       * Returns the arc cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccosec: (x: number) => this.wertsfy_math.arccosec(x),

      /** 
       * @description **``Method``**
       * Returns the arc cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccotan: (x: number) => this.wertsfy_math.arccotan(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arcsinh: (x: number) => this.wertsfy_math.arcsinh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccosh: (x: number) => this.wertsfy_math.arccosh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arctanh: (x: number) => this.wertsfy_math.arctanh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arcsech: (x: number) => this.wertsfy_math.arcsech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccosech: (x: number) => this.wertsfy_math.arccosech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccotanh: (x: number) => this.wertsfy_math.arccotanh(x),
      
      /** 
       * @description **``Method``**
       * Returns the logarithm of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       log: (x: number) => this.wertsfy_math.log(x),

      /** 
       * @description **``Method``**
       * Returns the logarithm minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */

      logm1: (x: number) => this.wertsfy_math.logm1(x),
      
      /** 
       * @description **``Method``**
       * Returns the logarithm plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       logp1: (x: number) => this.wertsfy_math.logp1(x),
      
      /** 
       * @description **``Method``**
       * Returns the any logarithm of number.
       * @augments ``x``|**``number``**
       * Number value.
       * @augments ``base``|**``number``**
       * Base logarithm number value.
       */
       logx: (x: number, base: number) => this.wertsfy_math.logx(x, base),

      /** 
       * @description **``Method``**
       * Returns the any logarithm minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       * @augments ``base``|**``number``**
       * Base logarithm number value.
       */
      logxm1: (x: number, base: number) => this.wertsfy_math.logxm1(x, base),
      
      /** 
       * @description **``Method``**
       * Returns the any logarithm plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       * @augments ``base``|**``number``**
       * Base logarithm number value.
       */      
      logxp1: (x: number, base: number) => this.wertsfy_math.logxp1(x, base),
      
      /** 
       * @description **``Method``**
       * Returns the any natural logarithm of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      ln: (x: number) => this.wertsfy_math.ln(x),

      /** 
       * @description **``Method``**
       * Returns the any natural logarithm minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      lnm1: (x: number) => this.wertsfy_math.lnm1(x),

      /** 
       * @description **``Method``**
       * Returns the any natural logarithm plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      lnp1: (x: number) => this.wertsfy_math.lnp1(x),

      /** 
       * @description **``Method``**
       * Returns the random number.
       * @augments ``x``|**``number``**
       * Number multiplier or base value.
       */ 
      random: (x: number) => this.wertsfy_math.random(x),

      /** 
       * @description **``Method``**
       * Returns the exponencial of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      exp: (x: number, valorLg: number) => this.wertsfy_math.exp(x, valorLg),

      /** 
       * @description **``Method``**
       * Returns the exponencial minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      expm1: (x: number, valorLg: number) => this.wertsfy_math.expm1(x, valorLg),

      /** 
       * @description **``Method``**
       * Returns the exponencial plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      expp1: (x: number, valorLg: number) => this.wertsfy_math.expp1(x, valorLg)


    },

    terminal: {


      /** 
       * @description **``Constant``**
       * Returns the input symbol. 
       */
      InputSymbol: this.wertsfy_terminal.inputSymbol,

      /** 
       * @description **``Constant``**
       * Returns the output symbol. 
       */
      OutputSymbol: this.wertsfy_terminal.outputSymbol,
      
      /** 
       * @description **``Constant``**
       * Returns the div symbol. 
       */
      DivSymbol: this.wertsfy_terminal.divSymbol,
      
      /** 
       * @description **``Constant``**
       * Returns the loading symbol. 
       */
      LoadingSymbol: this.wertsfy_terminal.loadingSymbols,

      /** 
       * @description **``Constant``**
       * Returns the escape character new line **(\n)**. 
       */
      EcpCharNewLine: this.wertsfy_terminal.escapeCharacterNewLine,

      /** 
       * @description **``Constant``**
       * Returns the escape character tab **(\t)**. 
       */
      EcpCharTab: this.wertsfy_terminal.escapeCharacterTab,

      /** 
       * @description **``Constant``**
       * Returns the escape character backspace **(\b)**. 
       */
      EcpCharBackspace: this.wertsfy_terminal.escapeCharacterBackspace,

      /** 
       * @description **``Constant``**
       * Returns the escape character restart line **(\r)**. 
       */
      EcpCharRestartLine: this.wertsfy_terminal.escapeCharacterRestartLine,

      /** 
       * @description **``Constant``**
       * Returns the escape character vertical tab **(\v)**. 
       */      
      EcpCharVerticalTab: this.wertsfy_terminal.escapeCharacterVerticalTab,

      /** 
       * @description **``Constant``**
       * Returns the escape character form feed **(\f)**. 
       */
      EcpCharFromFeed: this.wertsfy_terminal.escapeCharacterFormFeed,
      
      /** 
       * @description **``Constant``**
       * Returns the escape character null **(\n)**. 
       */
      EcpCharNull: this.wertsfy_terminal.escapeCharacterNull,

      /** 
       * @description **``Method``** 
       * Returns the text with formatation.
       * @augments ``modelo``|**``WCollections``**
       * Model template selection.
       * @augments ``texto``|**``string``**
       * Text to format. 
       */
      addformtexto: (m: WCollections, texto: string) => this.wertsfy_terminal.adicionaFormTexto(m, texto),

      /** 
       * @description **``Method``** 
       * Returns the text with color formatation.
       * @augments ``modelo``|**``WCollections``**
       * Model template selection.
       * @augments ``template``|**``WTrmSClr``**
       * Model template selection.
       * @augments ``esquema``|**``WTrmSClrF``**
       * Model template selection.
       * @augments ``texto``|**``string``**
       * Text to color format. 
       */
      addformcor: (m: WCollections, texto: string) => this.wertsfy_terminal.adicionaClrTexto(m, "3b4bit", "F",texto)

    },

    spectrals: {
         
      /** 
       * @description **``Method``** 
       * Returns the color collection.
       * @augments ``cor``|**``WCollections``**
       * Model color selection.
       */
      selecionaCor: (cor: WCollections) => this.wertsfy_spectrals.selecionaUmaCor(cor)
    
    }

  }

} export var wtsy = new WBoard().wertsfy; 
