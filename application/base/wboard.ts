// importando dependências de métodos e funcionalidades
/// <reference path="wcollections.d.ts" />
import { WCollections } from "./wcollections";

// Importando classes de biblioteca
import { wertsfy_math } from "./wlibrary.math";
import { wertsfy_terminal } from "./wlibrary.terminal";
import { wertsfy_spectrals } from "./wlibrary.spectrals";

// Quadro base de arquitetura
class WBoard {

  // bloco de implementação do Command Line Interface
  protected WCommandLineInterface = null
  // bloco de implementação de Testes
  protected WNikko = null
  // bloco de implementação das Bibliotecas
  protected WLibrarys = {

    wmath: wertsfy_math,
    wterminal: wertsfy_terminal,
    wspectrals: wertsfy_spectrals

  }

  // Abstração de toda a Aplicação para o mundo externo
  public wertsfy = {

    math: {
      
      /** 
       * @description **``Constant``**
       * Returns the pi value. 
       */
      Pi: this.WLibrarys.wmath.pi,

      
      /** 
       * @description **``Constant``** 
       * Returns the euler value.
       */
      Euler: this.WLibrarys.wmath.euler,
      
      /** 
       * @description **``Constant``** 
       * Returns the plank value.
       */
      Plank: this.WLibrarys.wmath.plank,

      /** 
       * @description **``Constant``** 
       * Returns the avogrado value.
       */
      Avogadro: this.WLibrarys.wmath.avogadro,

      /** 
       * @description **``Constant``** 
       * Returns the newton value.
       */
      Newton: this.WLibrarys.wmath.newton,

      /** 
       * @description **``Constant``** 
       * Returns the tesla value.
       */
      Tesla: this.WLibrarys.wmath.tesla,

      /** 
       * @description **``Constant``** 
       * Returns the root square values.
       */
      Sqrt: this.WLibrarys.wmath.sqrtd,

      /** 
       * @description **``Constant``** 
       * Returns the cubic square values.
       */
      Cbrt: this.WLibrarys.wmath.cbrtd,

      /** 
       * @description **``Constant``** 
       * Returns the natural logarithm with base two value.
       */
      Ln2: this.WLibrarys.wmath.ln2,

      /** 
       * @description **``Constant``** 
       * Returns the natural logarithm with base ten value.
       */
      Ln10: this.WLibrarys.wmath.ln10,

      /** 
       * @description **``Constant``** 
       * Returns the logarithm of euler with base two value.
       */
      Log2e: this.WLibrarys.wmath.log2e,

      /** 
       * @description **``Constant``** 
       * Returns the logarithm of euler with base ten value.
       */
      Log10e: this.WLibrarys.wmath.log10e,

      /** 
       * @description **``Constant``** 
       * Returns the maxvalue.
       */
      Maxvalue: this.WLibrarys.wmath.maxvalue,

      /** 
       * @description **``Constant``** 
       * Returns the minvalue.
       */
      Minvalue: this.WLibrarys.wmath.minvalue,

      /** 
       * @description **``Method``** 
       * Returns the absolute value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      abs: (x: number) => this.WLibrarys.wmath.abs(x),

      /** 
       * @description **``Method``** 
       * Returns the root square value.
       * @augments ``x``|**``number``**
       * Number value. 
       */      
      sqrt: (x: number) => this.WLibrarys.wmath.sqrt(x),

      /** 
       * @description **``Method``** 
       * Returns the cubic root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      cbrt: (x: number) => this.WLibrarys.wmath.cbrt(x),

      /** 
       * @description **``Method``** 
       * Returns the four root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      quart: (x: number) => this.WLibrarys.wmath.quart(x),

      /** 
       * @description **``Method``** 
       * Returns the five root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      quint: (x: number) => this.WLibrarys.wmath.quint(x),

      /** 
       * @description **``Method``** 
       * Returns the six root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      sext: (x: number) => this.WLibrarys.wmath.sext(x),

      /** 
       * @description **``Method``** 
       * Returns the seven root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      sept: (x: number) => this.WLibrarys.wmath.sept(x),

      /** 
       * @description **``Method``** 
       * Returns the eight root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      oct: (x: number) => this.WLibrarys.wmath.oct(x),

      /** 
       * @description **``Method``** 
       * Returns the nine root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      non: (x: number) => this.WLibrarys.wmath.non(x),

      /** 
       * @description **``Method``** 
       * Returns the ten root value.
       * @augments ``x``|**``number``**
       * Number value. 
       */
      dec: (x: number) => this.WLibrarys.wmath.dec(x),

      /** 
       * @description **``Method``** 
       * Returns the power value.
       * @augments ``x``|**``number``**
       * Number base value. 
       * @augments ``y``|**``number``**
       * Number power value.
       */
      pow: (x: number, y: number) => this.WLibrarys.wmath.pow(x, y),

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
      powOfPow: (x: number, y: number, z?: number[]) => this.WLibrarys.wmath.powOfPow(x, y, z),

      /** 
       * @description **``Method``**
       * Returns the max value.
       * @augments ``x``|**``number[]``**
       * Number sequence.
       */
      max: (x: number[]) => this.WLibrarys.wmath.max(x),

      /** 
       * @description **``Method``**
       * Returns the min value.
       * @augments ``x``|**``number[]``**
       * Number sequence.
       */
      min: (x: number[]) => this.WLibrarys.wmath.min(x),

      /** 
       * @description **``Method``**
       * Returns the rounded value.
       * @augments ``x``|**``number``**
       * Floating value.
       */
      round: (x: number) => this.WLibrarys.wmath.round(x),

      /** 
       * @description **``Method``**
       * Returns the precision rounded value.
       * @augments ``x``|**``number``**
       * Floating value.
       */
      fround: (x: number) => this.WLibrarys.wmath.fround(x),

      /** 
       * @description **``Method``**
       * Returns the signal of value.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sign: (x: number) => this.WLibrarys.wmath.sign(x),

      /** 
       * @description **``Method``**
       * Returns the number value without floating point parts.
       * @augments ``x``|**``number``**
       * Number value.
       */
      trunc: (x: number) => this.WLibrarys.wmath.trunc(x),

      /** 
       * @description **``Method``**
       * Returns the result of the 32-bit integer multiplication of two numbers.
       * @augments ``x``|**``number``** ``y``|**``number``**
       * Number value.
       */
      imul: (x: number, y: number) => this.WLibrarys.wmath.imul(x, y),

      /** 
       * @description **``Method``**
       * Returns the smallest integer greater than or equal to number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      ceil: (x: number) => this.WLibrarys.wmath.ceil(x),

      /** 
       * @description **``Method``**
       * Returns the largest integer less than or equal to number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      floor: (x: number) => this.WLibrarys.wmath.floor(x),

      /**
       * @description **``Method``**
       * Returns the sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sin: (x: number) => this.WLibrarys.wmath.sin(x),

      /** 
       * @description **``Method``**
       * Returns the cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cos: (x: number) => this.WLibrarys.wmath.cos(x),

      /**
       * @description **``Method``**
       * Returns the tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      tan: (x: number) => this.WLibrarys.wmath.tan(x),

      /** 
       * @description **``Method``**
       * Returns the secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sec: (x: number) => this.WLibrarys.wmath.sec(x),

      /**
       * @description **``Method``**
       * Returns the cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cosec: (x: number) => this.WLibrarys.wmath.cosec(x),

      /** 
       * @description **``Method``**
       * Returns the cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cotan: (x: number) => this.WLibrarys.wmath.cotan(x),

      /**
       * @description **``Method``**
       * Returns the hiperbolic sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sinh: (x: number) => this.WLibrarys.wmath.sinh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cosh: (x: number) => this.WLibrarys.wmath.cosh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      tanh: (x: number) => this.WLibrarys.wmath.tanh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      sech: (x: number) => this.WLibrarys.wmath.sech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cosech: (x: number) => this.WLibrarys.wmath.cosech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      cotanh: (x: number) => this.WLibrarys.wmath.cotanh(x),

      /** 
       * @description **``Method``**
       * Returns the arc sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      arcsin: (x: number) => this.WLibrarys.wmath.arcsin(x),

      /** 
       * @description **``Method``**
       * Returns the arc cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccos: (x: number) => this.WLibrarys.wmath.arccos(x),

      /** 
       * @description **``Method``**
       * Returns the arc tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arctan: (x: number) => this.WLibrarys.wmath.arctan(x),

      /** 
       * @description **``Method``**
       * Returns the arc secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arcsec: (x: number) => this.WLibrarys.wmath.arcsec(x),

      /** 
       * @description **``Method``**
       * Returns the arc cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccosec: (x: number) => this.WLibrarys.wmath.arccosec(x),

      /** 
       * @description **``Method``**
       * Returns the arc cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccotan: (x: number) => this.WLibrarys.wmath.arccotan(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc sine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arcsinh: (x: number) => this.WLibrarys.wmath.arcsinh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc cosine of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccosh: (x: number) => this.WLibrarys.wmath.arccosh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc tangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arctanh: (x: number) => this.WLibrarys.wmath.arctanh(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc secant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arcsech: (x: number) => this.WLibrarys.wmath.arcsech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc cosecant of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccosech: (x: number) => this.WLibrarys.wmath.arccosech(x),

      /** 
       * @description **``Method``**
       * Returns the hiperbolic arc cotangent of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       arccotanh: (x: number) => this.WLibrarys.wmath.arccotanh(x),
      
      /** 
       * @description **``Method``**
       * Returns the logarithm of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       log: (x: number) => this.WLibrarys.wmath.log(x),

      /** 
       * @description **``Method``**
       * Returns the logarithm minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */

      logm1: (x: number) => this.WLibrarys.wmath.logm1(x),
      
      /** 
       * @description **``Method``**
       * Returns the logarithm plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
       logp1: (x: number) => this.WLibrarys.wmath.logp1(x),
      
      /** 
       * @description **``Method``**
       * Returns the any logarithm of number.
       * @augments ``x``|**``number``**
       * Number value.
       * @augments ``base``|**``number``**
       * Base logarithm number value.
       */
       logx: (x: number, base: number) => this.WLibrarys.wmath.logx(x, base),

      /** 
       * @description **``Method``**
       * Returns the any logarithm minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       * @augments ``base``|**``number``**
       * Base logarithm number value.
       */
      logxm1: (x: number, base: number) => this.WLibrarys.wmath.logxm1(x, base),
      
      /** 
       * @description **``Method``**
       * Returns the any logarithm plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       * @augments ``base``|**``number``**
       * Base logarithm number value.
       */      
      logxp1: (x: number, base: number) => this.WLibrarys.wmath.logxp1(x, base),
      
      /** 
       * @description **``Method``**
       * Returns the any natural logarithm of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      ln: (x: number) => this.WLibrarys.wmath.ln(x),

      /** 
       * @description **``Method``**
       * Returns the any natural logarithm minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      lnm1: (x: number) => this.WLibrarys.wmath.lnm1(x),

      /** 
       * @description **``Method``**
       * Returns the any natural logarithm plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      lnp1: (x: number) => this.WLibrarys.wmath.lnp1(x),

      /** 
       * @description **``Method``**
       * Returns the random number.
       * @augments ``x``|**``number``**
       * Number multiplier or base value.
       */ 
      random: (x: number) => this.WLibrarys.wmath.random(x),

      /** 
       * @description **``Method``**
       * Returns the exponencial of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      exp: (x: number, valorLg: number) => this.WLibrarys.wmath.exp(x, valorLg),

      /** 
       * @description **``Method``**
       * Returns the exponencial minus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */      
      expm1: (x: number, valorLg: number) => this.WLibrarys.wmath.expm1(x, valorLg),

      /** 
       * @description **``Method``**
       * Returns the exponencial plus one of number.
       * @augments ``x``|**``number``**
       * Number value.
       */
      expp1: (x: number, valorLg: number) => this.WLibrarys.wmath.expp1(x, valorLg)


    },

    terminal: {


      /** 
       * @description **``Constant``**
       * Returns the input symbol. 
       */
      InputSymbol: this.WLibrarys.wterminal.inputSymbol,

      /** 
       * @description **``Constant``**
       * Returns the output symbol. 
       */
      OutputSymbol: this.WLibrarys.wterminal.outputSymbol,
      
      /** 
       * @description **``Constant``**
       * Returns the div symbol. 
       */
      DivSymbol: this.WLibrarys.wterminal.divSymbol,
      
      /** 
       * @description **``Constant``**
       * Returns the loading symbol. 
       */
      LoadingSymbol: this.WLibrarys.wterminal.loadingSymbols,

      /** 
       * @description **``Constant``**
       * Returns the escape character new line **(\n)**. 
       */
      EcpCharNewLine: this.WLibrarys.wterminal.escapeCharacterNewLine,

      /** 
       * @description **``Constant``**
       * Returns the escape character tab **(\t)**. 
       */
      EcpCharTab: this.WLibrarys.wterminal.escapeCharacterTab,

      /** 
       * @description **``Constant``**
       * Returns the escape character backspace **(\b)**. 
       */
      EcpCharBackspace: this.WLibrarys.wterminal.escapeCharacterBackspace,

      /** 
       * @description **``Constant``**
       * Returns the escape character restart line **(\r)**. 
       */
      EcpCharRestartLine: this.WLibrarys.wterminal.escapeCharacterRestartLine,

      /** 
       * @description **``Constant``**
       * Returns the escape character vertical tab **(\v)**. 
       */      
      EcpCharVerticalTab: this.WLibrarys.wterminal.escapeCharacterVerticalTab,

      /** 
       * @description **``Constant``**
       * Returns the escape character form feed **(\f)**. 
       */
      EcpCharFromFeed: this.WLibrarys.wterminal.escapeCharacterFormFeed,
      
      /** 
       * @description **``Constant``**
       * Returns the escape character null **(\n)**. 
       */
      EcpCharNull: this.WLibrarys.wterminal.escapeCharacterNull,

      /** 
       * @description **``Method``** 
       * Returns the text with formatation.
       * @augments ``modelo``|**``WCollections``**
       * Model template selection.
       * @augments ``texto``|**``string``**
       * Text to format. 
       */
      addformtexto: (m: WCollections, texto: string) => this.WLibrarys.wterminal.adicionaFormTexto(m, texto),

      /** 
       * @description **``Method``** 
       * Returns the text with color formatation.
       * @augments ``modelo``|**``WCollections``**
       * Model template selection.
       * @augments ``texto``|**``string``**
       * Text to format. 
       */
      addformcor: (m: WCollections, texto: string) => this.WLibrarys.wterminal.adicionaFormTexto(m, texto)

    },

    spectrals: {
         
      /** 
       * @description **``Method``** 
       * Returns the color collection.
       * @augments ``cor``|**``WCollections``**
       * Model color selection.
       */
      selecionaCor: (cor: WCollections) => this.WLibrarys.wspectrals.selecionaUmaCor(cor)
    
    }

  }

} export var wtsy = new WBoard().wertsfy; 
