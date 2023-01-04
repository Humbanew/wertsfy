/**
 * Wertsfy - Copyright 2019, 2020, 2021, 2022. All rights reserved.
 * Humbanew Project Huon Subdivision
 */

import { Macros } from "./macros/macros.core";

// Componentes da Interface

/** *Wertsfy Mathematics Corebase Class* */
class WERTSFY_MATH_COREBASE {

  /** @deprecated Non used directelly */
  protected _log = Macros.math_corebase.logarithm_protected_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the pi value.
   */
  public Pi = Macros.math_corebase.pi_constant;

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the euler value.
   */
  public Euler = Macros.math_corebase.euler_constant;

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the plank value.
   */
  public Plank = Macros.math_corebase.plank_constant;

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the avogadro value.
   */
  public Avogadro = Macros.math_corebase.avogadro_constant;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the newton value.
   */
  public Newton = Macros.math_corebase.newton_constant;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the tesla value.
   */
  public Tesla = Macros.math_corebase.tesla_constant;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant Collection``** 
   * Returns the square root object.
   */
  public SquareRoot = Macros.math_corebase.square_root_constant_collection;

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant Collection``** 
   * Returns the cubic root object.
   */ 
  public CubicRoot = Macros.math_corebase.cubic_root_constant_collection;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the logarithm of 2.
   */
  public Logarithm2 = Macros.math_corebase.logarithm2;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the logarithm of 10.
   */
  public Logarithm10 = Macros.math_corebase.logarithm10;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the euler logarithm of 2.
   */
  public Logarithm2e = Macros.math_corebase.logarithm2e;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the euler logarithm of 10.
   */
  public Logarithm10e = Macros.math_corebase.logarithm10e;

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the max value.
   */
  public MaxValue = Macros.math_corebase.maxvalue;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant``** 
   * Returns the min value.
   */
  public MinValue = Macros.math_corebase.minvalue;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the absolute value of number.
   */
  public abs = Macros.math_corebase.abs_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the square root of number.
   */
  public sqrt = Macros.math_corebase.sqrt_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cubic root of number.
   */
  public cbrt = Macros.math_corebase.cbrt_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the four power root of number.
   */
  public quart = Macros.math_corebase.quart_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the five power root of number.
   */
  public quirt = Macros.math_corebase.quirt_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the six power root of number.
   */
  public sexrt = Macros.math_corebase.sexrt_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the seven power root of number.
   */
  public seprt = Macros.math_corebase.seprt_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the eight power root of number.
   */
  public octrt = Macros.math_corebase.octrt_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the nine power root of number.
   */
  public nonrt = Macros.math_corebase.nonrt_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the ten power root of number.
   */
  public decrt = Macros.math_corebase.abs_method;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number base value.
   * @augments ``y``|**``number``**
   * Number potency value.
   * @description **``Method``** 
   * Returns the potency of number.
   */
  public pow = Macros.math_corebase.pow_method;

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
  public powOfPow = Macros.math_corebase.powofpow_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number[]``**
   * Number sequence value.
   * @description **``Method``** 
   * Returns the maximum value by sequence of number.
   */
  public max = Macros.math_corebase.max_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number[]``**
   * Number sequence value.
   * @description **``Method``** 
   * Returns the minimum value by sequence of number.
   */
  public min = Macros.math_corebase.min_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the rouded down value of number.
   */
  public round = Macros.math_corebase.round_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the rouded up value of number.
   */
  public fround = Macros.math_corebase.fround_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the signal of number.
   */
  public sign = Macros.math_corebase.sign_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the integer value of number.
   */
  public trunc = Macros.math_corebase.trunc_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``y``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the multiplication of two numbers.
   */
  public imul = Macros.math_corebase.imul_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the number also is minus comparated same plus 0.5.
   */
  public ceil = Macros.math_corebase.ceil_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the number also is more comparated same plus 0.5.
   */
  public floor = Macros.math_corebase.floor_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the sine of number.
   */
  public sin = Macros.math_corebase.sin_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cosine of number.
   */
  public cos = Macros.math_corebase.cos_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the tangent of number.
   */
  public tan = Macros.math_corebase.tan_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the secant of number.
   */
  public sec = Macros.math_corebase.sec_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cosecant of number.
   */
  public cosec = Macros.math_corebase.cosec_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cotangent of number.
   */
  public cotan = Macros.math_corebase.cotan_method;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic sine of number.
   */
  public sinh = Macros.math_corebase.sinh_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic cosine of number.
   */
  public cosh = Macros.math_corebase.cosh_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic tangent of number.
   */
  public tanh = Macros.math_corebase.tanh_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic secant of number.
   */
  public sech = Macros.math_corebase.sech_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic cosecant of number.
   */
  public cosech = Macros.math_corebase.cosech_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic cotangent of number.
   */
  public cotanh = Macros.math_corebase.cotanh_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc sine of number.
   */
  public arcsin = Macros.math_corebase.arcsin_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cosine of number.
   */
  public arccos = Macros.math_corebase.arccos_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc tangent of number.
   */
  public arctan = Macros.math_corebase.arctan_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc secant of number.
   */
  public arcsec = Macros.math_corebase.arcsec_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cosecant of number.
   */
  public arccosec = Macros.math_corebase.arccosec_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cotangent of number.
   */
  public arccotan = Macros.math_corebase.arccotan_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc sine of number.
   */
  public arcsinh = Macros.math_corebase.arcsinh_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc cosine of number.
   */
  public arccosh = Macros.math_corebase.arccosh_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc tangent of number.
   */
  public arctanh = Macros.math_corebase.arctanh_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc secant of number.
   */
  public arcsech = Macros.math_corebase.arcsech_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc cosecant of number.
   */
  public arccosech = Macros.math_corebase.arccosech_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cotangent of number.
   */
  public arccotanh = Macros.math_corebase.arccotanh_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 10 logarithm of number.
   */
  public log = Macros.math_corebase.log_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 10 logarithm minus 1 of number.
   */
  public logm1 = Macros.math_corebase.logm1_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 10 logarithm plus 1 of number.
   */
  public logp1 = Macros.math_corebase.logp1_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 2 logarithm of number.
   */
  public log2 = Macros.math_corebase.log2_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 2 logarithm minus 1 of number.
   */
  public log2m1 = Macros.math_corebase.log2m1_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 2 logarithm plus 1 of number.
   */
  public log2p1 = Macros.math_corebase.log2p1_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``base``|**``number``**
   * Number base value.
   * @description **``Method``** 
   * Returns the any base logarithm of number.
   */
  public logx = Macros.math_corebase.logx_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``base``|**``number``**
   * Number base value.
   * @description **``Method``** 
   * Returns the any base logarithm minus 1 of number.
   */
  public logxm1 = Macros.math_corebase.logxm1_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``base``|**``number``**
   * Number base value.
   * @description **``Method``** 
   * Returns the any base logarithm plus 1 of number.
   */
  public logxp1 = Macros.math_corebase.logxp1_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the natural logarithm of number.
   */
  public ln = Macros.math_corebase.ln_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the natural logarithm minus 1 of number.
   */
  public lnm1 = Macros.math_corebase.lnm1_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the natural logarithm plus 1 of number.
   */
  public lnp1 = Macros.math_corebase.lnp1_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the random number value.
   */
  public random = Macros.math_corebase.random_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``base``|**``number``**
   * Number base exponencial value.
   * @augments ``valorLg``|**``number``**
   * Number potency exponencial value.
   * @description **``Method``** 
   * Returns the exponencial of number.
   */
  public exp = Macros.math_corebase.exp_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``base``|**``number``**
   * Number base exponencial value.
   * @augments ``valorLg``|**``number``**
   * Number potency exponencial value.
   * @description **``Method``** 
   * Returns the exponencial minus 1 of number.
   */
  public expm1 = Macros.math_corebase.expm1_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``base``|**``number``**
   * Number base exponencial value.
   * @augments ``valorLg``|**``number``**
   * Number potency exponencial value.
   * @description **``Method``** 
   * Returns the exponencial plus 1 of number.
   */
  public expp1 = Macros.math_corebase.expp1_method;

} export let mathematic_corebase = new WERTSFY_MATH_COREBASE();

/** *Wertsfy Mathematics Calculator Class* */
class WERTSFY_MATH_CALCULATOR {

  /**
   * ``▰ Wertsfy ▰ ``
   * @description **``Constant Collection``** 
   * Returns the Shotcuts object.
   */
  public shortcuts = Macros.math_calculator.shortcuts_constant;
  
  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``operation``|``string``
   * Operation to do use.
   * @augments ``numbers``|``number[]``
   * The numbers to create an operation.
   * @description **``Method``** 
   * Returns the result of selected operation.
   */
  public common = Macros.math_calculator.common_method;

  /**
   * ``▰ Wertsfy ▰ ``
   * @augments ``operation``|``string``
   * Operation to do use.
   * @augments ``numbers``|``number[]``
   * The numbers to create an operation.
   * @description **``Method``** 
   * Returns the result of selected operation.
   */
  public advanced = Macros.math_calculator.advanced_method;

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
      return mathematic_corebase.sqrt(((a ** 2) + (b ** 2)));
    },

    formulaRelacaoPitagoricaTriangulo1: (m: number, n: number): number => {
      return mathematic_corebase.sqrt(m * n);
    },
           
    formulaRelacaoPitagoricaTriangulo2: (a: number, n: number): number => {
      return mathematic_corebase.sqrt(a * n);
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
      resultado = (mathematic_corebase.log(valor) * valor) / valor;
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

    formulaSomaPolinomios: (polinomio1: string, polinomio2: string): string => {
      let resultado: string = '', verificaSinal: RegExp = /^(\-)/gi;
      if (verificaSinal != null) { polinomio1.replace("-", ''); }
      if (verificaSinal != null) { polinomio2.replace("-", ''); }
      resultado = polinomio1 + '+' + polinomio2;
      return resultado;
    },

    formulaSubtracaoPolinomios: (polinomio1: string, polinomio2: string): string => {
      let resultado: string = '', verificaSinal: RegExp = /^(\-)/gi;
      if (verificaSinal != null) { polinomio1.replace("-", ''); }
      if (verificaSinal != null) { polinomio2.replace("-", ''); }
      resultado = polinomio1 + '-' + polinomio2;
      return resultado;
    },

    formulaMultiplicacaoPolinomios: (polinomio1: string, polinomio2: string): string => {
      let resultado: string = '', verificaSinal: RegExp = /^(\-)/gi;
      if (verificaSinal != null) { polinomio1.replace("-", ''); }
      if (verificaSinal != null) { polinomio2.replace("-", ''); }
      resultado = polinomio1 + '*' + polinomio2;
      return resultado;
    },

    formulaDivisaoPolinomios: (polinomio1: string, polinomio2: string): string => {
      let resultado: string = '', verificaSinal: RegExp = /^(\-)/gi;
      if (verificaSinal != null) { polinomio1.replace("-", ''); }
      if (verificaSinal != null) { polinomio2.replace("-", ''); }
      resultado = polinomio1 + '/' + polinomio2;
      return resultado;
    },

    formulaSomaMatrizes: (matriz: [][], matriz2: [][]): number[][] => {
      let resultado: any;
      for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
          resultado[i][j] = matriz[i][j] + matriz2[i][j];
        }
      }
      return resultado;
    },

    formulaSubtracaoMatrizes: (matriz: [][], matriz2: [][]): number[][] => {
      let resultado: any;
      for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
          resultado[i][j] = matriz[i][j] - matriz2[i][j];
        }
      }
      return resultado;
    },

    formulaMultiplicacaoMatrizes: (matriz: [][], matriz2: [][]): number[][]|string => {
      let resultado: any;
      for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
          if(matriz[0][j] != matriz2[i]){ return "Matrizes não podem ser multiplicadas"; }
          resultado[i][j] = matriz[i][j] * matriz2[i][j];
        }
      }
      return resultado;
    },

    formulaDivisaoMatrizes: (matriz: [][], matriz2: [][]): number[][] => {
      let resultado: any;
      for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
          resultado[i][j] = matriz[i][j] / matriz2[i][j];
        }
      }
      return resultado;
    },

    formulaCalculoDaVelocidade: (espaco: number, tempo: number): number => {
      return espaco / tempo;
    },

    formulaCalculoDoEspaco: (velocidade: number, tempo: number): number => {
      return velocidade * tempo;
    },

    formulaCalculoDoTempo: (velocidade: number, espaco: number): number => {
      return espaco / velocidade;
    },

    formulaCalculoDaAceleracao: (velocidade: number, tempo: number): number => {
      return velocidade / tempo;
    },

    formulaCalculoDaEquacaoHorariaDoTempo: (tempo: number, tempoInicial: number, velocidade: number, aceleracao: number): number => {
      return tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2));
    },

    formulacalculoDaEquacaoHorariaDoEspaco: (espaco: number, espacoInicial: number, aceleracao: number): number => {
      return espacoInicial + aceleracao * espaco;
    },

    formulaCalculoDaEquacaoHorariaDaVelocidade: (velocidade: number, tempo: number, aceleracao: number): number => {
      return velocidade + aceleracao * tempo;
    },

    formulaCalculoDaEquacaoHorariaDaAceleracao: (aceleracao: number, tempo: number, velocidade: number): number => {
      return aceleracao + (velocidade * tempo);
    },

    formulaCalculoDaEquacaoHorariaDaForca: (forca: number, tempo: number, aceleracao: number): number => {
      return forca + (aceleracao * tempo);
    },

    formulaCalculoDaEquacaoHorariaDoTempoEspaco: (tempo: number, espaco: number, tempoInicial: number, espacoInicial: number, velocidade: number, aceleracao: number): number => {
      return tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2)) + espacoInicial + aceleracao * espaco;
    },

    formulaCalculoDaEnergiaCinetica: (massa: number, velocidade: number): number => {
      return (massa * velocidade ** 2) / 2;
    },

    formulaCalculoDaEnergiaPotencialElastica: (constanteElastica: number, distancia: number): number => {
      return (constanteElastica * distancia ** 2) / 2;
    },

    formulaCalculoDaEnergiaPotencialGravitacional: (massa: number, gravidade: number, altura: number): number => {
      return massa * gravidade * altura;
    },

    formulaCalculoDoPotencialMecanico: (velocidade: number, constanteElastica: number, distancia: number, massa: number, gravidade: number, altura: number, energPotElas: boolean, energPotGrav: boolean): number => {
      let resultado = 0;
      if (energPotElas == true) { resultado = this.expressions.formulaCalculoDaEnergiaCinetica(massa, velocidade) + this.expressions.formulaCalculoDaEnergiaPotencialElastica(constanteElastica, distancia); }
      if (energPotGrav == true) { resultado = this.expressions.formulaCalculoDaEnergiaCinetica(massa, velocidade) + this.expressions.formulaCalculoDaEnergiaPotencialGravitacional(massa, gravidade, altura); }
      return resultado;
    },

    formulaCalculoDoPotencialElastico: (constanteElastica: number, distancia: number): number => {
      let resultado = this.expressions.formulaCalculoDaEnergiaPotencialElastica(constanteElastica, distancia);
      return resultado;
    },

    formulaCalculoDoPlanoInclinadoSemAtrito: (massa: number, gravidade: number): number => {
      let resultado = massa * gravidade;
      return resultado;
    },

    formulaCalculoDoPlanoInclinadoComAtrito: (forcaDeAtrito: number, massa: number, gravidade: number, angulo: number): number => {
      let resultado = forcaDeAtrito * massa * gravidade * angulo;
      return resultado;
    },

    formulaCalculoDaAceleracaoNoPlanoInclinadoEixoX: (massa: number, gravidade: number, angulo: number): number => {
      let resultado = massa * gravidade * mathematic_corebase.sin(angulo);
      return resultado;
    },

    formulaCalculoDaAceleracaoNoPlanoInclinadoEixoY: (massa: number, gravidade: number, angulo: number): number => {
      let resultado = massa * gravidade * mathematic_corebase.cos(angulo);
      return resultado;
    },

    formulaCalculoDoLancamentoHorizontal: (gravidade: number, tempo: number): number => {
      let resultado = (gravidade * tempo ** 2) / 2;
      return resultado;
    },

    formulaCalculoDaEquacaoDeTorricelli: (velocidadeInicial: number, aceleracao: number, espacoInicial: number, espacoFinal: number): number => {
      let resultado = mathematic_corebase.sqrt((velocidadeInicial ** 2) + 2 * aceleracao * (espacoFinal - espacoInicial));
      return resultado;
    },

    formulaCalculoDaAlturaMaximaDeUmLancamentoVertical: (velocidadeInicial: number, gravidade: number, angulo: number): number => {
      let resultado = (velocidadeInicial ** 2) * ((mathematic_corebase.sin(angulo) ** 2) / 2) * gravidade;
      return resultado;
    },

    formulaCalculoDoAlcanceDeUmLancamentoVertical: (velocidade: number, tempo: number, angulo: number): number => {
      let resultado = velocidade * mathematic_corebase.cos(angulo) * tempo;
      return resultado;
    },

    formulaCalculoDoAlcanceMaximoDeUmLancamentoVertical: (velocidade: number, angulo: number, gravidade: number): number => {
      let resultado = (velocidade ** 2 * (mathematic_corebase.sin(angulo) ** 2)) / gravidade;
      return resultado;
    },

    formulaCalculoDoCalorSensivel: (massa: number, calorEspecifico: number, temperaturaInicial: number, temperaturaFinal: number): number => {
      let resultado = massa * calorEspecifico * (temperaturaFinal - temperaturaInicial);
      return resultado;
    },

    formulaCalculoDoCalorLatente: (quantidadeDeCalor: number, massa: number): number => {
      let resultado = quantidadeDeCalor / massa;
      return resultado;
    },

    formulaCalculoDasLeisDeNewton: (massa: number, aceleracao: number): number => {
      let resultado = massa * aceleracao;
      return resultado;
    },

    formulaCalculoDoTrabalho: (massa: number, gravidade: number, altura: number): number => {
      let resultado = massa * gravidade * altura;
      return resultado;
    },

    formulaCalculoDoConsumoDeEnergia: (tempo: number, correnteEletrica: number, ddp: number): number => {
      let resultado = correnteEletrica * ddp * tempo;
      return resultado;
    },

    formulaCalculoDoTeoremaDePascal: (forca1: number, forca2: number, area1: number, area2: number, forca1Inexistente: boolean, forca2Inexistente: boolean, area1Inexistente: boolean, area2Inexistente: boolean): number => {
      let resultado = 0;
      if (forca1Inexistente == true) { resultado = (area1 * forca2) / area2; }
      if (forca2Inexistente == true) { resultado = (area2 * forca1) / area1; }
      if (area1Inexistente == true) { resultado = (forca1 * area2) / forca2; }
      if (area2Inexistente == true) { resultado = (forca2 * area1) / forca1; }
      return resultado;
    },

    formulaCalculoDoTeoremaDeStevin: (densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number): number => {
      let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
      return resultado;
    },

    formulaCalculoDoTeoremaDeBoltzmann: (temperatura: number, constante: number): number => {
      let resultado = constante * (temperatura ** 4);
      return resultado;
    },

    formulaCalculoDoTeoremaDeCoulomb: (correnteEletrica: number, distancia: number): number => {
      let resultado = correnteEletrica * distancia;
      return resultado;
    },

    formulaCalculoDoTeoremaDePlanck: (energia: number, constante: number): number => {
      let resultado = constante * (energia ** 2);
      return resultado;
    },

    formulaCalculoDaForcaGravitacional: (gravidade: number, massaPlaneta: number, distancia: number): number => {
      let resultado = gravidade * (massaPlaneta / distancia ** 2);
      return resultado;
    },

    formulaCalculoDoAceleracaoCentripetaMovimentoCircularUniforme: (velocidade: number, raio: number): number => {
      let resultado = (velocidade ** 2) / raio;
      return resultado;
    },

    formulaCalculoDoVelocidadeAngularMovimentoCircularUniforme: (anguloInicial: number, anguloFinal: number, tempoInicial: number, tempoFinal: number): number => {
      let resultado = (anguloFinal - anguloInicial) / (tempoFinal - tempoInicial);
      return resultado;
    },

    formulaCalculoDoVelocidadeLinearMovimentoCircularUniforme: (frequencia: number, raio: number): number => {
      let resultado = (2 * mathematic_corebase.Pi * frequencia) * raio;
      return resultado;
    },

    formulaCalculoDaEquacaoHorariaDoTempoMovimentoCircularUniformenteVariado: (velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number): number => {
      let resultado = velocidadeAngularInicial + aceleracaoAngular * tempo;
      return resultado;
    },

    formulaCalculoDaEquacaoHorariaDoEspacoMovimentoCircularUniformenteVariado: (posicaoAngularInicial: number, velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number): number => {
      let resultado = posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;
      return resultado;
    },

    formulaCalculoDeToricelliMovimentoCircularUniformenteVariado: (velocidadeAngularInicial: number, aceleracaoAngular: number, deslocamentoAngularInicial: number, deslocamentoAngularFinal: number): number => {
      let resultado = mathematic_corebase.sqrt(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngularFinal - deslocamentoAngularInicial));
      return resultado;
    },

    formulaCalculoDaAceleracaoAngularMovimentoCircularUniformenteVariado: (velocidadeAngularInicial: number, velocidadeAngularFinal: number, tempoInicial: number, tempoFinal: number): number => {
      let resultado = (velocidadeAngularFinal - velocidadeAngularInicial) / (tempoFinal - tempoInicial);
      return resultado;
    },

    formulaCalculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples: (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
      let resultado = velocidadeAngular * amplitude * mathematic_corebase.cos(tempo + faseInicial);
      return resultado;
    },

    formulaCalculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples: (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
      let resultado = -1 * velocidadeAngular * amplitude * mathematic_corebase.sin(tempo + faseInicial);
      return resultado;
    },

    formulaCalculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples: (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number => {
      let resultado = -1 * velocidadeAngular ** 2 * amplitude * mathematic_corebase.cos(tempo + faseInicial);
      return resultado;
    },

    formulaCalculoDoPeriodo: (frequencia: number): number => {
      let resultado = 1 / frequencia;
      return resultado;
    },

    formulaCalculoDaFrequencia: (periodo: number): number => {
      let resultado = 1 / periodo;
      return resultado;
    },

    formulaCalculoDaTemperatura: (valor: number, deCelsiusParaKelvin: boolean, deCelsiusParaFahrenheit: boolean, deKelvinParaCelsius: boolean, deKelvinParaFahrenheit: boolean, deFahrenheitParaKelvin: boolean, deFahrenheitParaCelsius: boolean): number => {
      let resultado = 0;
      if (deCelsiusParaFahrenheit == true) { resultado = (1.8 * valor) + 32; }
      if (deCelsiusParaKelvin == true) { resultado = valor - 273; }
      if (deFahrenheitParaCelsius == true) { resultado = (valor - 32) / 1.8; }
      if (deFahrenheitParaKelvin == true) { resultado = ((valor - 32) * 5) / 9 + 273; }
      if (deKelvinParaCelsius == true) { resultado = valor + 273; }
      if (deKelvinParaFahrenheit == true) { resultado = (valor - 273) * 1.8 + 32; }
      return resultado;
    },

    formulaCalculoDaDilatacaoLinear: (comprimentoInicial: number, coeficienteDeDilatacaoLinear: number, temperaturaInicial: number, temperaturaFinal: number): number => {
      let resultado = comprimentoInicial * coeficienteDeDilatacaoLinear * (temperaturaFinal - temperaturaInicial);
      return resultado;
    },

    formulaCalculoDaDilatacaoSuperficial: (areaInicial: number, coeficienteDeDilatacaoSuperficial: number, temperaturaInicial: number, temperaturaFinal: number): number => {
      let resultado = areaInicial * coeficienteDeDilatacaoSuperficial * (temperaturaFinal - temperaturaInicial);
      return resultado;
    },

    formulaCalculoDaDilatacaoVolumetrica: (volumeInicial: number, coeficienteDeDilatacaoVolumetrica: number, temperaturaInicial: number, temperaturaFinal: number): number => {
      let resultado = volumeInicial * coeficienteDeDilatacaoVolumetrica * (temperaturaFinal - temperaturaInicial);
      return resultado;
    },

    formulaCalculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica: (densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number): number => {
      let resultado = densidade * gravidade * (alturaFinal - alturaInicial);
      return resultado;
    },

    formulaCalculoDoEmpuxoDaHidroestaticaHidrodinamica: (densidade: number, gravidade: number, volume: number): number => {
      let resultado = densidade * gravidade * volume;
      return resultado;
    },

    formulaCalculoDoPesoAparenteDaHidroestaticaHidrodinamica: (peso: number, densidade: number, gravidade: number, volume: number): number => {
      let resultado = peso - this.expressions.formulaCalculoDoEmpuxoDaHidroestaticaHidrodinamica(densidade, gravidade, volume);
      return resultado;
    },

    formulaCalculoDaEquacaoDeLagrange: (x: number, y: number, xi: number, yi: number, xii: number, yii: number, xiii: number, yiii: number): number => {
      let resultado = (x - xi) * (y - yi) / (x - xi) * (y - yii) / (x - xii) * (y - yiii) / (x - xiii);
      return resultado;
    },

    formulaCalculoDoAtrito: (coeficienteDeAtrito: number, massa: number): number => {
      let resultado = coeficienteDeAtrito * massa;
      return resultado;
    },

    formulaCalculoDaLeiDeCoulomb: (carga1: number, carga2: number, distancia: number): number => {
      let resultado = (9 * 10 ** 9) * (carga1 * carga2 / distancia ** 2);
      return resultado;
    },

    formulaCalculoDaLeiDeOhm: (resistencia: number, corrente: number): number => {
      let resultado = resistencia * corrente;
      return resultado;
    },

    formulaCalculoDoEfeitoJoule: (corrente: number, resistencia: number, tempo: number): number => {
      let resultado = (corrente ** 2) * resistencia * tempo;
      return resultado;
    },

    formulaCalculoDaLeiDeLenz: (intensidadeDoCampoMagnetico: number, areaDaSuperficie: number, cosAngulo: number): number => {
      let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * mathematic_corebase.cos(cosAngulo);
      return resultado;
    },

    formulaCalculoDaForcaEletromotriz: (potenciaTotalGerador: number, intensidadeDaCorrente: number): number => {
      let resultado = potenciaTotalGerador / intensidadeDaCorrente;
      return resultado;
    },

    formulaCalculoDaContraForcaEletromotriz: (potenciaTotalGerador: number, intensidadeDaCorrente: number): number => {
      let resultado = -1 * this.expressions.formulaCalculoDaForcaEletromotriz(potenciaTotalGerador, intensidadeDaCorrente);
      return resultado;
    },

    formulaCalculoDoEfeitoFotoeletrico: (frequenciaDaLuz: number): number => {
      let resultado = (6.662 * 10 ** -34) * frequenciaDaLuz;
      return resultado;
    },

    formulaCalculoDaDensidade: (massa: number, volume: number): number => {
      let resultado = massa / volume;
      return resultado;
    },

    formulaCalculoDaTitulacao: (massaBase: number, massaAcido: number, volumeBase: number, volumeAcido: number, naoTemMassaBase: boolean, naoTemMassaAcido: boolean, naoTemVolumeBase: boolean, naoTemVolumeAcido: boolean): number => {
      let resultado = 0;
      if (naoTemMassaAcido == true) { resultado = massaBase * volumeBase / volumeAcido; }
      if (naoTemMassaBase == true) { resultado = massaAcido * volumeAcido / volumeBase; }
      if (naoTemVolumeAcido == true) { resultado = massaBase * volumeBase / massaAcido; }
      if (naoTemVolumeBase == true) { resultado = massaAcido * volumeAcido / massaBase; }
      return resultado;
    },

    formulaCalculoDaConcentracao: (massaSoluto: number, volume: number): number => {
      let resultado = massaSoluto / volume;
      return resultado;
    },

    formulaCalculoDoRendimento: (valorParte: number, valorTotal: number): number => {
      let resultado = this.expressions.formulaCalculoDaPorcentagemX(valorParte, valorTotal);
      return resultado;
    },

    formulaCalculoDaLeiGeralDosGases:(pressao1: string, pressao2: string, volume1: string, volume2: string, temperatura1: string, temperatura2: string): number => {
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

    formulaRegraDeTresSimples: (valor1: number, valor2: number, valor3: number, localDaVariavel: string = ("A" || "B" || "C")): number => {
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

    formulaRegraDeTresComposta: (valor1: number, valor2: number, valor3: number, valor4: number, valor5: number, valor6: number, valor7: number, localDaVariavel: string = ("A" || "B" || "C" || "D" || "E" || "F" || "G")): number => {
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

    formulaSistemaDeEquacoes: (expressao1: string, expressao2: string): string|void => {
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

    formulaSistemaDeInequacoes: (expressao1: string, expressao2: string): string|void => {
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

    formulaSistemasLineares: (expressoes: string[]): Array<any>|void => {
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

    formulaSomaNumerosComplexos: (valores: string[]): string|void => {
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

    formulaSubtracaoNumerosComplexos: (valorTotal: string, valores: string[]): string|void => {
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

    formulaMultiplicacaoNumerosComplexos: (valorTotal: string, valores: string[]): string|void => {
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

    formulaDivisaoNumerosComplexos: (valorTotal: string, valores: string[]): string|void => {
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

    formulaPotenciaNumerosComplexos: (valorTotal: string, valores: string[], potencia: number): string|void => {
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

    formulaJurosSimples: (valor: number, taxa: number, tempo: number): number => {
      let resultado = valor * (1 + taxa * tempo);
      return resultado;
    },

    formulaJurosCompostos: (valor: number, taxa: number, tempo: number, vezes: number): number => {
      let resultado = (valor * (1 + taxa * tempo)) ** vezes; 
      return resultado;
    },

    formulaVetorDaDistanciaEntreDoisPontosR2: (x1: number, x2:number, y1: number, y2: number): Array<number> => {
      let xResultante = 0, yResultante = 0, resultado = [];
      xResultante = x2 - x1;
      yResultante = y2 - y1;
      resultado = [ xResultante, yResultante ];
      return resultado;
    },

    formulVetorDaDistanciaEntreDoisPontosR3: (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
      let xResultante = 0, yResultante = 0, zResultante = 0, resultado = [];
      xResultante = x2 - x1;
      yResultante = y2 - y1;
      zResultante = z2 - z1;
      resultado = [ xResultante, yResultante, zResultante ];
      return resultado;
    },

    formulaModuloDeUmVetorR2: (x: number, y: number): number => {
      let resultado = 0;
      resultado = mathematic_corebase.sqrt(x ** 2 + y ** 2);
      return resultado;
    },

    formulaModuloDeUmVetorR3: (x: number, y: number, z: number): number => {
      let resultado = 0;
      resultado = mathematic_corebase.sqrt(x ** 2 + y ** 2 + z ** 2);
      return resultado;
    },

    formulaVersorDeUmVetorR2: (x: number, y:number): Array<number> => {
      let resultado = [];
      let modulo = this.expressions.formulaModuloDeUmVetorR2(x, y);
      resultado = [ x / modulo, y / modulo ];
      return resultado;
    },

    formulaVersorDeUmvetorR3: (x: number, y: number, z: number): Array<number> => {
      let resultado = [];
      let modulo = this.expressions.formulaModuloDeUmVetorR3(x, y, z);
      resultado = [ x / modulo, y / modulo, z / modulo ];
      return resultado;
    },



    formulaProjecaoDeUmVetorSobreOutroVetorR2: (x1: number, x2: number, y1: number, y2: number): Array<number> => {
      let resultado: number[];
      let expressoesVU = [x2 * x1, y2 * y1] 
      let expressoesUU = [x1 * x1, y1 * y1]
      let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1]];
      let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2];
      resultado = contExpressaoP2;
      return resultado;
    },

    formulaProjecaoDeUmVetorSobreOutroVetorR3: (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
      let resultado: number[];
      let expressoesVU = [x2 * x1, y2 * y1, z2 * z1] 
      let expressoesUU = [x1 * x1, y1 * y1, z1 * z1]
      let contExpressaoP1 = [expressoesVU[0] / expressoesUU[0], expressoesVU[1] / expressoesUU[1], expressoesVU[2] / expressoesUU[2]];
      let contExpressaoP2 = [contExpressaoP1[0] * x2, contExpressaoP1[1] * y2, contExpressaoP1[2] * z2];
      resultado = contExpressaoP2;
      return resultado;
    },

    formulaSomaDeVetoresR2: (x1: number, x2: number, y1: number, y2: number): Array<number> => {
      let resultado: number[];
      let contExpressaoP1 = [x1 + x2, y1 + y2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formulaSomaDeVetoresR3: (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
      let resultado: number[];
      let contExpressaoP1 = [x1 + x2, y1 + y2, z1 + z2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formulaSubtracaoDeVetoresR2: (x1: number, x2: number, y1: number, y2: number): Array<number> => {
      let resultado: number[];
      let contExpressaoP1 = [x1 - x2, y1 - y2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formulaSubtracaoDeVetoresR3: (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
      let resultado: number[];
      let contExpressaoP1 = [x1 - x2, y1 - y2, z1 - z2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formulaProdutoEscalarDeVetoresR2: (x1: number, x2: number, y1: number, y2: number): number => {
      let resultado: number;
      let contExpressaoP1 = [x1 * x2, y1 * y2];
      resultado = contExpressaoP1[0] + contExpressaoP1[1];
      return resultado;
    },

    formulaProdutoEscalarDeVetoresR3: (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number => {
      let resultado: number;
      let contExpressaoP1 = [x1 * x2, y1 * y2, z1 * z2];
      resultado = contExpressaoP1[0] + contExpressaoP1[1] + contExpressaoP1[2];
      return resultado;
    },

    formulaDivisaoDeVetoresR2: (x1: number, x2: number, y1: number, y2: number): Array<number> => {
      let resultado: number[];
      let contExpressaoP1 = [x1 / x2, y1 / y2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formulaDivisaoDeVetoresR3: (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
      let resultado: number[];
      let contExpressaoP1 = [x1 / x2, y1 / y2, z1 / z2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formulaPontoMedioDeUmVetorR2: (x: number, y: number): Array<number> => {
      let resultado: number[];
      let contExpressaoP1 = [x / 2, y / 2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formulaPontoMedioDeUmVetorR3: (x: number, y: number, z: number): Array<number> => {
      let resultado: number[];
      let contExpressaoP1 = [x / 2, y / 2, z / 2];
      resultado = contExpressaoP1;
      return resultado;
    },

    formulaCossenosDiretoresDeUmVetorR2: (x: number, y: number): Array<number> => {
      let resultado: number[];
      let contExpressaoP1 = [mathematic_corebase.cos(x), mathematic_corebase.cos(y)];
      resultado = contExpressaoP1;
      return resultado;
    },

    formulaCossenosDiretoresDeUmVetorR3: (x: number, y: number, z: number): Array<number> => {
      let resultado: number[];
      let contExpressaoP1 = [mathematic_corebase.cos(x), mathematic_corebase.cos(y), mathematic_corebase.cos(z)];
      resultado = contExpressaoP1;
      return resultado;
    },

    formulaSinalizacaoQuadrantes: (x: number, y: number): string => {
      let resultado: string;
      if(x > 0 && y > 0) { resultado = "1 Quadrante."; }
      if(x < 0 && y > 0) { resultado = "2 Quadrante."; }
      if(x < 0 && y < 0) { resultado = "3 Quadrante."; }
      if(x > 0 && y < 0) { resultado = "4 Quadrante."; }
      return resultado;
    },

    formulaSinalizacaoOctantes: (x: number, y: number, z: number): string => {
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

    formulaQuadradoDePunnet: (genotipo1: string, genotipo2: string): Array<string> => {
      
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

    formulaQuadradoDePunnetExpandido: (genotipo1: string, genotipo2: string): Array<string> => {

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

    formulaCalculoDaEscalaGeografica: (tamanhoReal: number, tamanhoFicticio: number): number => {
      let resultado = tamanhoReal / tamanhoFicticio;
      return resultado;
    },

    formulaCalculoDeIDH: (saude: number, educacao: number, renda: number, populacao: number, ppc: number): number => {
      let resultado = (saude + educacao + renda) / (populacao + ppc);
      return resultado;
    },

    formulaCalculoDeGINI: (pnb: number, populacao: number): number => {
      let resultado = pnb / populacao;
      return resultado;
    },

    formulaCalculoDeIMC: (peso: number, altura: number): number => {
      let resultado = peso / altura ** 2;
      return resultado;
    },

    formulaCalculoDeDensidadePopulacional: (espaco: number, populacao: number): number => {
      let resultado = espaco / populacao;
      return resultado;
    },

    formulaCalculoDosNumerosPares: (numero: number): number => {
      let resultado = numero / 2;
      if(resultado % 2 === 0) { console.info("eh par.") }
      else { console.info("eh impar.") }
      return resultado;
    },

    formulaCalculoDosNumerosImpares: (numero: number): number => {
      let resultado = numero / 3;
      if(resultado % 3 === 0) { console.info("eh impar.") }
      else { console.info("eh par.") }
      return resultado;
    },

    formulaNumeroDeConjuntos: (elementos: number): number => {
      let resultado = 2 ** elementos;
      return resultado;
    },

    formulaCriaJogoDaMegaSena: (aposta: number[]): Array<number> => {
      let numeros = [];
      for(let i = 0; i < 6; i++) {
        numeros.push(mathematic_corebase.floor(mathematic_corebase.random(i) * 60) + 1);
      }
      if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5]) {
        console.info("Você ganhou!");
      }
      else {
        console.info("Você perdeu!");
      }
      return numeros;
    },

    formulaCriaJogoDaQuina: (aposta: number[]): Array<number> => {
      let numeros = [];
      for(let i = 0; i < 5; i++) {
        numeros.push(mathematic_corebase.floor(mathematic_corebase.random(i) * 80) + 1);
      }
      if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4]) {
        console.info("Você ganhou!");
      }
      else {
        console.info("Você perdeu!");
      }
      return numeros;
    },

    formulaCriaJogoDaQuadra: (aposta: number[]): Array<number> => {
      let numeros = [];
      for(let i = 0; i < 4; i++) {
        numeros.push(mathematic_corebase.floor(mathematic_corebase.random(i) * 80) + 1);
      }
      if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3]) {
        console.info("Você ganhou!");
      }
      else {
        console.info("Você perdeu!");
      }
      return numeros;
    },

    formulaCriaJogoDaLotofacil: (aposta: number[]): Array<number> => {
      let numeros = [];
      for(let i = 0; i < 6; i++) {
        numeros.push(mathematic_corebase.floor(mathematic_corebase.random(i) * 80) + 1);
      }
      if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5]) {
        console.info("Você ganhou!");
      }
      else {
        console.info("Você perdeu!");
      }
      return numeros;
    },

    formulaCriaJogoDaLotomania: (aposta: number[]): Array<number> => {
      let numeros = [];
      for(let i = 0; i < 15; i++) {
        numeros.push(mathematic_corebase.floor(mathematic_corebase.random(i) * 80) + 1);
      }
      if(aposta[0] === numeros[0] && aposta[1] === numeros[1] && aposta[2] === numeros[2] && aposta[3] === numeros[3] && aposta[4] === numeros[4] && aposta[5] === numeros[5] && aposta[6] === numeros[6] && aposta[7] === numeros[7] && aposta[8] === numeros[8] && aposta[9] === numeros[9] && aposta[10] === numeros[10] && aposta[11] === numeros[11] && aposta[12] === numeros[12] && aposta[13] === numeros[13] && aposta[14] === numeros[14]) {
        console.info("Você ganhou!");
      }
      else {
        console.info("Você perdeu!");
      }
      return numeros;
    },

    formulaCalculoDoDiagramaDeVennDe2Grupos: (numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number): object => {
      let resultados = { 
        intecessao: numerosGrupoDoisNucleos, 
        nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoDoisNucleos, 
        nucleoDois: numerosGrupoUmNucleo[1] - numerosGrupoDoisNucleos 
      };
      return resultados;
    },

    formulaCalculoDoDiagramaDeVennDe3Grupos: (numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number): object => {
      let resultados = { 
        intecessao: numerosGrupoTresNucleos, 
        nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoTresNucleos, 
        nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoTresNucleos, 
        nucleoTres: numerosGrupoUmNucleo[1] - numerosGrupoTresNucleos 
      };
      return resultados;
    },

    formulaCalculoDoDiagramaDeVennDe4Grupos: (numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number[], numerosGrupoQuatroNucleos: number): object => {
      let resultados = { 
        intecessao: numerosGrupoQuatroNucleos, 
        nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoQuatroNucleos, 
        nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoQuatroNucleos, 
        nucleoTres: numerosGrupoTresNucleos[0] - numerosGrupoQuatroNucleos, 
        nucleoQuatro: numerosGrupoUmNucleo[1] - numerosGrupoQuatroNucleos 
      };
      return resultados;
    },

    formulaCalculoDosNumerosPrimos: (numeroPesquisados: number): Array<number> => {
      let numerosPrimos = [];
      for(let i = 0; i < numeroPesquisados; i++) {
        if(i % 2 !== 0) {
          numerosPrimos.push(i);
        }
      }
      return numerosPrimos;
    },

    formulaAreaTrianguloQualquer: (lado: number): number => { 
      return lado * lado * mathematic_corebase.sqrt(3) / 4; 
    },

    formulaApotemaDeUmTrianguloQualquer: (lado: number): number => {
      return lado * lado * mathematic_corebase.sqrt(3) / 2;
    },

    formulaAreaQuadradoQualquer: (lado: number): number => { 
      return lado * lado; 
    },

    formulaAreaRetanguloQualquer: (comp: number, larg: number): number => { 
      return comp * larg; 
    },

    formulaAreaCirculoQualquer: (raio: number): number => { 
      return mathematic_corebase.Pi * (raio ** 2); 
    },

    formulaAreaElipseQualquer: (raio: number, altura: number): number => { 
      return mathematic_corebase.Pi * (raio ** 2) * altura; 
    },

    formulaAreaPiramideQualquer: (base: number, altura: number): number => { 
      return (base * altura) / 3; 
    },

    formulaAreaTrapezioQualquer: (baseMaior: number, baseMenor: number, altura: number): number => { 
      return (baseMaior + baseMenor) * altura / 2; 
    },

    formulaAreaLozangoQualquer: (diagonalMaior: number, diagonalMenor: number, altura: number): number => { 
      return (diagonalMaior + diagonalMenor) / 2; 
    },

    formulaAreaDeUmaSuperficieQualquer: (comp: number, larg: number): number => {
      return comp * larg;
    },

    formulaVolumeDeUmaSuperficieQualquer: (area: number, comp: number, larg: number): number => {
      return area * comp * larg;
    },

    formulaAreaEsferaQualquer: (raio: number): number => { 
      return 4 * mathematic_corebase.Pi * (raio ** 2) / 2; 
    },

    formulaAreaCilindroQualquer: (raio: number, altura: number): number => { 
      return mathematic_corebase.Pi * (raio ** 2) * altura; 
    },

    formulaAreaConeQualquer: (raio: number, altura: number): number => { 
      return mathematic_corebase.Pi * (raio ** 2) * (altura / 3); 
    },

    formulaAreaDeUmPoligonoQualquer: (comp: number, larg: number, nLados: number): number => {
      return comp == larg ? nLados * ((comp * comp * mathematic_corebase.sqrt(3)) / 4) : nLados * (comp * larg / 2);
    },

    formulaVolumeDeUmPoligonoFormatoLozangoQualquer: (diagonalMaior: number, diagonalMenor: number, altura: number): number => {
      return (diagonalMaior + diagonalMenor) / 2 * altura;
    },

    formulaVolumeDeUmPoligonoFormatoTrapezioQualquer: (baseMaior: number, baseMenor: number, altura: number): number => {
      return (baseMaior + baseMenor) / 2 * altura;
    },

    formulaAreaDeUmParalelogramoQualquer: (lado: number, altura: number): number => { 
      return lado * altura; 
    },

    formulaAreaLateralDeUmPrismaQualquer: (comp: number, larg: number, nLados: number): number => {
      return nLados * (comp * larg);
    },

    formulaVolumeDeUmPrismaQualquer: (area: number, comp: number, larg: number): number => {
      return area * comp * larg;
    },

    formulaVolumeDeUmCuboQualquer: (aresta: number): number => { 
      return aresta * aresta * aresta; 
    },

    formulaVolumeDeUmParalelepipedoQualquer: (comprimento: number, largura: number, altura: number): number => { 
      return comprimento * largura * altura; 
    },

    formulaVolumeDeUmaPiramideQualquer: (base: number, altura: number): number => { 
      return (base * altura) / 3; 
    },

    formulaVolumeDeUmTetraedroQualquer: (aresta: number): number => { 
      return (aresta * aresta * aresta) / 4; 
    },

    formulaVolumeDeUmHexaedroQualquer: (aresta: number): number => { 
      return (aresta * aresta * aresta) / 6; 
    },

    formulaVolumeDeUmOctaedroQualquer: (aresta: number): number => { 
      return (aresta * aresta * aresta) / 8; 
    },

    formulaVolumeDeUmDodecaedroQualquer: (aresta: number): number => { 
      return (aresta * aresta * aresta) / 12; 
    },

    formulaVolumDeUmIcosaedroQualquer: (aresta: number): number => { 
      return (aresta * aresta * aresta) / 20; 
    },

    formulaVolumeDeUmConeQualquer: (raio: number, altura: number): number => { 
      return (mathematic_corebase.Pi * (raio ** 2) * altura) / 3; 
    },

    formulaVolumeDeUmCilindroQualquer: (raio: number, altura: number): number => { 
      return mathematic_corebase.Pi * (raio ** 2) * altura; 
    },

    formulaVolumeDeUmEsferaQualquer: (raio: number): number => { 
      return (4 * mathematic_corebase.Pi * (raio ** 3)) / 3; 
    },

    formulaVolumeDeUmRombQualquer: (aresta: number): number => { 
      return (aresta * aresta) / 2; 
    },

    formulaAreaCircunferenciaQualquer: (raio: number): number => { 
      return mathematic_corebase.Pi * (raio * 2); 
    },
        
    formulaCalculoPrimeiroGrau(exp) { 
      let res = 0;
      let verif = /([0-9]+(\.[0-9]+)?x((\-)?(\+)?)[0-9]+(\.[0-9]+)?=[0-9]+(\.[0-9]+)?)/gi; 
      let p1 = /([0-9]+(\.[0-9]+)?x)/gi;
      let p2 = /(((\-)?(\+)?)[0-9]+(\.[0-9]+)?)/gi; 
      let p3 = /(=[0-9]+(\.[0-9]+)?)/gi; 
      
      if (exp.match(verif) == null) { 
        return console.error("A expressão inserida não é uma função do 1º Grau!"); 
      } else { 
        res = (parseFloat(exp.match(p2)) - parseFloat(exp.match(p3))) / parseFloat(exp.match(p1)); 
      } 
      
      return res; 
    },

    formulaCalculoSegundoGrau(a: number, b: number, c: number) { 
      let res = [0]; 
      let delta = (b ** 2) - (4 * a * c); 
      let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
      let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
      res = [x1, x2]; 
      
      return res; 
    },

    formulaCalculoTerceiroGrau(a: number, b: number, c: number) { 
      let res = [0]; 
      let delta = (b ** 2) - (4 * a * c); 
      let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
      res = [x1, x2, 0]; 
      
      return res; 
    },

    formulaCalculoQuartoGrau(a: number, b: number, c: number) { 
      let res = [0];
      let delta = (b ** 2) - (4 * a * c); 
      let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
      let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
      res = [x1, -1 * x1, x2, -1 * x2]; 
      
      return res; 
    },

    formulaCalculoQuintoGrau(a: number, b: number, c: number) { 
      let res = [0], delta = (b ** 2) - (4 * a * c);  
      let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
      res = [x1, -1 * x1, x2, -1 * x2, 0]; 
      
      return res; 
    },

    formulaCalculoSextoGrau(a: number, b: number, c: number) {
      let res = [0], delta = (b ** 2) - (4 * a * c); 
      let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
      let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
      res = [x1, -1 * x1, x2, -1 * x2, 0, 0]; 
      
      return res; 
    },

    formulaCalculoSetimoGrau(a: number, b: number, c: number) {
      let res = [0], delta = (b ** 2) - (4 * a * c); 
      let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
      let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
      res = [x1, -1 * x1, x2, -1 * x2, 0, 0, 0]; 
      
      return res; 
    },

    formulaCalculoOitavoGrau(a: number, b: number, c: number) {
      let res = [0], delta = (b ** 2) - (4 * a * c); 
      let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
      let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
      res = [x1, -1 * x1, x2, -1 * x2, 0, 0, 0, 0]; 
      
      return res; 
    }

  }

  protected conversor() { }


} export let mathematic_calculator = new WERTSFY_MATH_CALCULATOR();

class WERTSFY_INFORMATION_GAMES { }
class WERTSFY_FACTORY_KEX { }
class WERTSFY_FACTORY_SOLLPASS { }
class WERTSFY_FACTORY_KRIPTONIGHT { }
class WERTSFY_FACTORY_NIKKO { }
class WERTSFY_EXTENDER_CLI { }
class WERTSFY_COLORFY_COMPLEX { }
class WERTSFY_MULTIPLATAFORM_HULIGHT { }
class WERTSFY_FLUXTARGET { }
class WERTSFY_WEBSERVICES { }
class WERTSFY_SHORTCUTS_DISCORD { }
class WERTSFY_SHORTCUTS_GRAPH { }

// Declaração de acesso aos recursos

/**
 * ``▰ Wertsfy ▰ ``
 * @description **``Base``** 
 * The Wertsfy API
 */
export var Wertsfy = { 

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
    corebase: mathematic_corebase,

    /**
     * ``▰ Wertsfy ▰ ``
     * @description **``Library``** 
     * Calculator Component of Mathematic
     */
    calculator: mathematic_calculator
  
  } 

}
