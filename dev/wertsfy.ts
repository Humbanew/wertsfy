/**
 * Wertsfy - Copyright 2019, 2020, 2021, 2022, 2023. All rights reserved.
 * Humbanew Project Huon Subdivision
 */

import { Macros } from "./macros/macros.core";

// Componentes da Interface

/** *Wertsfy Mathematics Corebase Class* */
class WERTSFY_MATH_COREBASE {

  /** @deprecated Non used directelly */
  protected _log = Macros.math_corebase.logarithm_protected_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the pi value.
   */
  public Pi = Macros.math_corebase.pi_constant;

  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the euler value.
   */
  public Euler = Macros.math_corebase.euler_constant;

  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the plank value.
   */
  public Plank = Macros.math_corebase.plank_constant;

  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the avogadro value.
   */
  public Avogadro = Macros.math_corebase.avogadro_constant;
  
  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the newton value.
   */
  public Newton = Macros.math_corebase.newton_constant;
  
  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the tesla value.
   */
  public Tesla = Macros.math_corebase.tesla_constant;
  
  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant Collection``** 
   * Returns the square root object.
   */
  public SquareRoot = Macros.math_corebase.square_root_constant_collection;

  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant Collection``** 
   * Returns the cubic root object.
   */ 
  public CubicRoot = Macros.math_corebase.cubic_root_constant_collection;
  
  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the logarithm of 2.
   */
  public Logarithm2 = Macros.math_corebase.logarithm2;
  
  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the logarithm of 10.
   */
  public Logarithm10 = Macros.math_corebase.logarithm10;
  
  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the euler logarithm of 2.
   */
  public Logarithm2e = Macros.math_corebase.logarithm2e;
  
  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the euler logarithm of 10.
   */
  public Logarithm10e = Macros.math_corebase.logarithm10e;

  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the max value.
   */
  public MaxValue = Macros.math_corebase.maxvalue;
  
  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant``** 
   * Returns the min value.
   */
  public MinValue = Macros.math_corebase.minvalue;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the absolute value of number.
   */
  public abs = Macros.math_corebase.abs_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the square root of number.
   */
  public sqrt = Macros.math_corebase.sqrt_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cubic root of number.
   */
  public cbrt = Macros.math_corebase.cbrt_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the four power root of number.
   */
  public quart = Macros.math_corebase.quart_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the five power root of number.
   */
  public quirt = Macros.math_corebase.quirt_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the six power root of number.
   */
  public sexrt = Macros.math_corebase.sexrt_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the seven power root of number.
   */
  public seprt = Macros.math_corebase.seprt_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the eight power root of number.
   */
  public octrt = Macros.math_corebase.octrt_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the nine power root of number.
   */
  public nonrt = Macros.math_corebase.nonrt_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the ten power root of number.
   */
  public decrt = Macros.math_corebase.abs_method;
  
  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number base value.
   * @augments ``y``|**``number``**
   * Number potency value.
   * @description **``Method``** 
   * Returns the potency of number.
   */
  public pow = Macros.math_corebase.pow_method;

  /**
   * ``◪ Wertsfy ◪ ``
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
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number[]``**
   * Number sequence value.
   * @description **``Method``** 
   * Returns the maximum value by sequence of number.
   */
  public max = Macros.math_corebase.max_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number[]``**
   * Number sequence value.
   * @description **``Method``** 
   * Returns the minimum value by sequence of number.
   */
  public min = Macros.math_corebase.min_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the rouded down value of number.
   */
  public round = Macros.math_corebase.round_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the rouded up value of number.
   */
  public fround = Macros.math_corebase.fround_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the signal of number.
   */
  public sign = Macros.math_corebase.sign_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the integer value of number.
   */
  public trunc = Macros.math_corebase.trunc_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``y``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the multiplication of two numbers.
   */
  public imul = Macros.math_corebase.imul_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the number also is minus comparated same plus 0.5.
   */
  public ceil = Macros.math_corebase.ceil_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the number also is more comparated same plus 0.5.
   */
  public floor = Macros.math_corebase.floor_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the sine of number.
   */
  public sin = Macros.math_corebase.sin_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cosine of number.
   */
  public cos = Macros.math_corebase.cos_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the tangent of number.
   */
  public tan = Macros.math_corebase.tan_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the secant of number.
   */
  public sec = Macros.math_corebase.sec_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cosecant of number.
   */
  public cosec = Macros.math_corebase.cosec_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the cotangent of number.
   */
  public cotan = Macros.math_corebase.cotan_method;
  
  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic sine of number.
   */
  public sinh = Macros.math_corebase.sinh_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic cosine of number.
   */
  public cosh = Macros.math_corebase.cosh_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic tangent of number.
   */
  public tanh = Macros.math_corebase.tanh_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic secant of number.
   */
  public sech = Macros.math_corebase.sech_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic cosecant of number.
   */
  public cosech = Macros.math_corebase.cosech_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic cotangent of number.
   */
  public cotanh = Macros.math_corebase.cotanh_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc sine of number.
   */
  public arcsin = Macros.math_corebase.arcsin_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cosine of number.
   */
  public arccos = Macros.math_corebase.arccos_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc tangent of number.
   */
  public arctan = Macros.math_corebase.arctan_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc secant of number.
   */
  public arcsec = Macros.math_corebase.arcsec_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cosecant of number.
   */
  public arccosec = Macros.math_corebase.arccosec_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cotangent of number.
   */
  public arccotan = Macros.math_corebase.arccotan_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc sine of number.
   */
  public arcsinh = Macros.math_corebase.arcsinh_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc cosine of number.
   */
  public arccosh = Macros.math_corebase.arccosh_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc tangent of number.
   */
  public arctanh = Macros.math_corebase.arctanh_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc secant of number.
   */
  public arcsech = Macros.math_corebase.arcsech_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the hiperbolic arc cosecant of number.
   */
  public arccosech = Macros.math_corebase.arccosech_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the arc cotangent of number.
   */
  public arccotanh = Macros.math_corebase.arccotanh_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 10 logarithm of number.
   */
  public log = Macros.math_corebase.log_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 10 logarithm minus 1 of number.
   */
  public logm1 = Macros.math_corebase.logm1_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 10 logarithm plus 1 of number.
   */
  public logp1 = Macros.math_corebase.logp1_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 2 logarithm of number.
   */
  public log2 = Macros.math_corebase.log2_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 2 logarithm minus 1 of number.
   */
  public log2m1 = Macros.math_corebase.log2m1_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the base 2 logarithm plus 1 of number.
   */
  public log2p1 = Macros.math_corebase.log2p1_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``base``|**``number``**
   * Number base value.
   * @description **``Method``** 
   * Returns the any base logarithm of number.
   */
  public logx = Macros.math_corebase.logx_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``base``|**``number``**
   * Number base value.
   * @description **``Method``** 
   * Returns the any base logarithm minus 1 of number.
   */
  public logxm1 = Macros.math_corebase.logxm1_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @augments ``base``|**``number``**
   * Number base value.
   * @description **``Method``** 
   * Returns the any base logarithm plus 1 of number.
   */
  public logxp1 = Macros.math_corebase.logxp1_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the natural logarithm of number.
   */
  public ln = Macros.math_corebase.ln_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the natural logarithm minus 1 of number.
   */
  public lnm1 = Macros.math_corebase.lnm1_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``x``|**``number``**
   * Number value.
   * @description **``Method``** 
   * Returns the natural logarithm plus 1 of number.
   */
  public lnp1 = Macros.math_corebase.lnp1_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Method``** 
   * Returns the random number value.
   */
  public random = Macros.math_corebase.random_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``base``|**``number``**
   * Number base exponencial value.
   * @augments ``valorLg``|**``number``**
   * Number potency exponencial value.
   * @description **``Method``** 
   * Returns the exponencial of number.
   */
  public exp = Macros.math_corebase.exp_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``base``|**``number``**
   * Number base exponencial value.
   * @augments ``valorLg``|**``number``**
   * Number potency exponencial value.
   * @description **``Method``** 
   * Returns the exponencial minus 1 of number.
   */
  public expm1 = Macros.math_corebase.expm1_method;

  /**
   * ``◪ Wertsfy ◪ ``
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
   * ``◪ Wertsfy ◪ ``
   * @description **``Constant Collection``** 
   * Returns the Shotcuts object.
   */
  public shortcuts = Macros.math_calculator.shortcuts_constant_collection;
  
  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``operation``|``string``
   * Operation to do use.
   * @augments ``numbers``|``number[]``
   * The numbers to create an operation.
   * @description **``Method``** 
   * Returns the result of selected operation.
   */
  // public common = Macros.math_calculator.common_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @augments ``operation``|``string``
   * Operation to do use.
   * @augments ``numbers``|``number[]``
   * The numbers to create an operation.
   * @description **``Method``** 
   * Returns the result of selected operation.
   */
  // public advanced = Macros.math_calculator.advanced_method;

  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Method Collection``** 
   * Returns the expressions methods object.
   */
  // protected expressions = Macros.math_calculator.expressions_arch;

  protected conversor() { }


} export let mathematic_calculator = new WERTSFY_MATH_CALCULATOR();

class WERTSFY_FACTORY_SOLLPASS { }
class WERTSFY_FACTORY_NIKKO { }
class WERTSFY_FACTORY_CUBBIC { }
class WERTSFY_FACTORY_KARZOK { }
class WERTSFY_FACTORY_LYDROC { }
class WERTSFY_EXTENDER_CLI { }


// Declaração de acesso aos recursos

/**
 * ``◪ Wertsfy ◪ ``
 * @description **``Base``** 
 * The Wertsfy API
 */
export var Wertsfy = { 

  /**
   * ``◪ Wertsfy ◪ ``
   * @description **``Interface``** 
   * Collection of Mathematic
   */
  mathematic: { 
    
    /**
     * ``◪ Wertsfy ◪ ``
     * @description **``Library``** 
     * Core Component of Mathematic
     */
    corebase: mathematic_corebase,

    /**
     * ``◪ Wertsfy ◪ ``
     * @description **``Library``** 
     * Calculator Component of Mathematic
     */
    calculator: mathematic_calculator
  
  } 

}
