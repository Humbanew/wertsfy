/// <reference path="../.declarations/warch.d.ts" />

import { Component_math_corebase_logarithm_protected_method } from "./math/protected.method.logarithm";
import { Component_math_corebase_avogadro_constant } from "./math/constant.avogadro";
import { Component_math_corebase_euler_constant } from "./math/constant.euler";
import { Component_math_corebase_logarithm2_constant } from "./math/constant.logarithm2";
import { Component_math_corebase_logarithm2e_constant } from "./math/constant.logarithm2e";
import { Component_math_corebase_logarithm10_constant } from "./math/constant.logarithm10";
import { Component_math_corebase_logarithm10e_constant } from "./math/constant.logarithm10e";
import { Component_math_corebase_maxvalue_constant } from "./math/constant.maxvalue";
import { Component_math_corebase_minvalue_constant } from "./math/constant.minvalue";
import { Component_math_corebase_newton_constant } from "./math/constant.newton";
import { Component_math_corebase_pi_constant } from "./math/constant.pi";
import { Component_math_corebase_plank_constant } from "./math/constant.plank";
import { Component_math_corebase_tesla_constant } from "./math/constant.testa";
import { Component_math_corebase_square_root_constant_collection } from "./math/constant_collection.square-root";
import { Component_math_corebase_cubic_root_constant_collection } from "./math/constant_collection.cubic-root";
import { Component_math_corebase_abs_method } from "./math/method.abs";
import { Component_math_corebase_arcsin_method } from "./math/method.arcsin";
import { Component_math_corebase_arcsinh_method } from "./math/method.arcsinh";
import { Component_math_corebase_arccos_method } from "./math/method.arccos";
import { Component_math_corebase_arccosh_method } from "./math/method.arccosh";
import { Component_math_corebase_arctan_method } from "./math/method.arctan";
import { Component_math_corebase_arctanh_method } from "./math/method.arctanh";
import { Component_math_corebase_arcsec_method } from "./math/method.arcsec";
import { Component_math_corebase_arcsech_method } from "./math/method.arcsech";
import { Component_math_corebase_arccosec_method } from "./math/method.arccosec";
import { Component_math_corebase_arccosech_method } from "./math/method.arccosech";
import { Component_math_corebase_arccotan_method } from "./math/method.arccotan";
import { Component_math_corebase_arccotanh_method } from "./math/method.arccotanh";
import { Component_math_corebase_sqrt_method } from "./math/method.sqrt";
import { Component_math_corebase_cbrt_method } from "./math/method.cbrt";
import { Component_math_corebase_quart_method } from "./math/method.quart";
import { Component_math_corebase_quirt_method } from "./math/method.quirt";
import { Component_math_corebase_sexrt_method } from "./math/method.sexrt";
import { Component_math_corebase_seprt_method } from "./math/method.seprt";
import { Component_math_corebase_octrt_method } from "./math/method.octrt";
import { Component_math_corebase_nonrt_method } from "./math/method.nonrt";
import { Component_math_corebase_decrt_method } from "./math/method.decrt";
import { Component_math_corebase_sin_method } from "./math/method.sin";
import { Component_math_corebase_sinh_method } from "./math/method.sinh";
import { Component_math_corebase_cos_method } from "./math/method.cos";
import { Component_math_corebase_cosh_method } from "./math/method.cosh";
import { Component_math_corebase_tan_method } from "./math/method.tan";
import { Component_math_corebase_tanh_method } from "./math/method.tanh";
import { Component_math_corebase_sec_method } from "./math/method.sec";
import { Component_math_corebase_sech_method } from "./math/method.sech";
import { Component_math_corebase_cosec_method } from "./math/method.cosec";
import { Component_math_corebase_cosech_method } from "./math/method.cosech";
import { Component_math_corebase_cotan_method } from "./math/method.cotan";
import { Component_math_corebase_cotanh_method } from "./math/method.cotanh";
import { Component_math_corebase_pow_method } from "./math/method.pow";
import { Component_math_corebase_powofpow_method } from "./math/method.powofpow";
import { Component_math_corebase_min_method } from "./math/method.min";
import { Component_math_corebase_max_method } from "./math/method.max";
import { Component_math_corebase_random_method } from "./math/method.random";
import { Component_math_corebase_log_method } from "./math/method.log";
import { Component_math_corebase_logm1_method } from "./math/method.logm1";
import { Component_math_corebase_logp1_method } from "./math/method.logp1";
import { Component_math_corebase_log2_method } from "./math/method.log2";
import { Component_math_corebase_log2m1_method } from "./math/method.log2m1";
import { Component_math_corebase_log2p1_method } from "./math/method.log2p1";
import { Component_math_corebase_logx_method } from "./math/method.logx";
import { Component_math_corebase_logxm1_method } from "./math/method.logxm1";
import { Component_math_corebase_logxp1_method } from "./math/method.logxp1";
import { Component_math_corebase_ln_method } from "./math/method.ln";
import { Component_math_corebase_lnm1_method } from "./math/method.lnm1";
import { Component_math_corebase_lnp1_method } from "./math/method.lnp1";
import { Component_math_corebase_exp_method } from "./math/method.exp";
import { Component_math_corebase_expm1_method } from "./math/method.expm1";
import { Component_math_corebase_expp1_method } from "./math/method.expp1";
import { Component_math_corebase_round_method } from "./math/method.round";
import { Component_math_corebase_fround_method } from "./math/method.fround";
import { Component_math_corebase_floor_method } from "./math/method.floor";
import { Component_math_corebase_ceil_method } from "./math/method.ceil";
import { Component_math_corebase_imul_method } from "./math/method.imul";
import { Component_math_corebase_sign_method } from "./math/method.sign";
import { Component_math_corebase_trunc_method } from "./math/method.trunc";

export namespace LibraryMath {

  let lm_log_pm: WComponentFunction = { 
    src: Component_math_corebase_logarithm_protected_method 
  }; class LMProtectedMethods { protected logModel = lm_log_pm.src; };
  
  let lm_avogrado: WComponentNumber = {
    src: Component_math_corebase_avogadro_constant
  }; export const Avogrado = lm_avogrado.src;
  
  let lm_euler: WComponentNumber = { 
    src: Component_math_corebase_euler_constant
  }; export const Euler = lm_euler.src;

  let lm_logarithm2: WComponentNumber = {
    src: Component_math_corebase_logarithm2_constant
  }; export const Logarithm2 = lm_logarithm2.src;

  let lm_logarithm2e: WComponentNumber = {
    src: Component_math_corebase_logarithm2e_constant
  }; export const Logarithm2e = lm_logarithm2e.src;

  let lm_logarithm10: WComponentNumber = {
    src: Component_math_corebase_logarithm10_constant
  }; export const Logarithm10 = lm_logarithm10.src;

  let lm_logarithm10e: WComponentNumber = {
    src: Component_math_corebase_logarithm10e_constant
  }; export const Logarithm10e = lm_logarithm10e.src;

  let lm_maxvalue: WComponentNumber = {
    src: Component_math_corebase_maxvalue_constant
  }; export const Maxvalue = lm_maxvalue.src;

  let lm_minvalue: WComponentNumber = {
    src: Component_math_corebase_minvalue_constant
  }; export const Minvalue = lm_minvalue.src;

  let lm_newton: WComponentNumber = {
    src: Component_math_corebase_newton_constant
  }; export const Newton = lm_newton.src;

  let lm_pi: WComponentNumber = { 
    src: Component_math_corebase_pi_constant 
  }; export const Pi = lm_pi.src;
  
  let lm_plank: WComponentNumber = {
    src: Component_math_corebase_plank_constant
  }; export const Plank = lm_plank.src;

  let lm_testa: WComponentNumber = {
    src: Component_math_corebase_tesla_constant
  }; export const Tesla = lm_testa.src;

  let lm_square_root: WComponentObject = {
    src: Component_math_corebase_square_root_constant_collection
  }; export const SquareRoot = lm_square_root.src;

  let lm_cubic_root: WComponentObject = {
    src: Component_math_corebase_cubic_root_constant_collection
  }; export const CubicRoot = lm_cubic_root.src;

  let lm_abs: WComponentFunction = {
    src: Component_math_corebase_abs_method
  }; export const abs = lm_abs.src;

  let lm_arcsin: WComponentFunction = {
    src: Component_math_corebase_arcsin_method
  }; export const arcsin = lm_arcsin.src;

  let lm_arcsinh: WComponentFunction = {
    src: Component_math_corebase_arcsinh_method
  }; export const arcsinh = lm_arcsinh.src;

  let lm_arccos: WComponentFunction = {
    src: Component_math_corebase_arccos_method
  }; export const arccos = lm_arccos.src;

  let lm_arccosh: WComponentFunction = {
    src: Component_math_corebase_arccosh_method
  }; export const arccosh = lm_arccosh.src;

  let lm_arctan: WComponentFunction = {
    src: Component_math_corebase_arctan_method
  }; export const arctan = lm_arctan.src;

  let lm_arctanh: WComponentFunction = {
    src: Component_math_corebase_arctanh_method
  }; export const arctanh = lm_arctanh.src;

  let lm_arcsec: WComponentFunction = {
    src: Component_math_corebase_arcsec_method
  }; export const arcsec = lm_arcsec.src;

  let lm_arcsech: WComponentFunction = {
    src: Component_math_corebase_arcsech_method
  }; export const arcsech = lm_arcsech.src;

  let lm_arccosec: WComponentFunction = {
    src: Component_math_corebase_arccosec_method
  }; export const arccossec = lm_arccosec.src;

  let lm_arccosech: WComponentFunction = {
    src: Component_math_corebase_arccosech_method
  }; export const arccosech = lm_arccosech.src;
  
  let lm_arccotan: WComponentFunction = {
    src: Component_math_corebase_arccotan_method
  }; export const arccotan = lm_arccotan.src;

  let lm_arccotanh: WComponentFunction = {
    src: Component_math_corebase_arccotanh_method
  }; export const arccotanh = lm_arccotanh.src;

  let lm_sqrt: WComponentFunction = {
    src: Component_math_corebase_sqrt_method
  }; export const sqrt = lm_sqrt.src;

  let lm_cbrt: WComponentFunction = {
    src: Component_math_corebase_cbrt_method
  }; export const cbrt = lm_cbrt.src;

  let lm_quart: WComponentFunction = {
    src: Component_math_corebase_quart_method
  }; export const quart = lm_quart.src;

  let lm_quirt: WComponentFunction = {
    src: Component_math_corebase_quirt_method
  }; export const quirt = lm_quirt.src;

  let lm_sexrt: WComponentFunction = {
    src: Component_math_corebase_sexrt_method
  }; export const sexrt = lm_sexrt.src;

  let lm_seprt: WComponentFunction = {
    src: Component_math_corebase_seprt_method
  }; export const seprt = lm_seprt.src;

  let lm_octrt: WComponentFunction = {
    src: Component_math_corebase_octrt_method
  }; export const octrt = lm_octrt.src;

  let lm_nonrt: WComponentFunction = {
    src: Component_math_corebase_nonrt_method
  }; export const nonrt = lm_nonrt.src;

  let lm_decrt: WComponentFunction = {
    src: Component_math_corebase_decrt_method
  }; export const decrt = lm_decrt.src;

  let lm_sin: WComponentFunction = {
    src: Component_math_corebase_sin_method
  }; export const sin = lm_sin.src;

  let lm_sinh: WComponentFunction = {
    src: Component_math_corebase_sinh_method
  }; export const sinh = lm_sinh.src;

  let lm_cos: WComponentFunction = {
    src: Component_math_corebase_cos_method
  }; export const cos = lm_cos.src;

  let lm_cosh: WComponentFunction = {
    src: Component_math_corebase_cosh_method
  }; export const cosh = lm_cosh.src;

  let lm_tan: WComponentFunction = {
    src: Component_math_corebase_tan_method
  }; export const tan = lm_tan.src;

  let lm_tanh: WComponentFunction = {
    src: Component_math_corebase_tanh_method
  }; export const tanh = lm_tanh.src;

  let lm_sec: WComponentFunction = {
    src: Component_math_corebase_sec_method
  }; export const sec = lm_sec.src;

  let lm_sech: WComponentFunction = {
    src: Component_math_corebase_sech_method
  }; export const sech = lm_sech.src;

  let lm_cosec: WComponentFunction = {
    src: Component_math_corebase_cosec_method
  }; export const cosec = lm_cosec.src;

  let lm_cosech: WComponentFunction = {
    src: Component_math_corebase_cosech_method
  }; export const cosech = lm_cosech.src;

  let lm_cotan: WComponentFunction = {
    src: Component_math_corebase_cotan_method
  }; export const cotan = lm_cotan.src;

  let lm_cotanh: WComponentFunction = {
    src: Component_math_corebase_cotanh_method
  }; export const cotanh = lm_cotanh.src;

  let lm_pow: WComponentFunction = {
    src: Component_math_corebase_pow_method
  }; export const pow = lm_pow.src;

  let lm_powofpow: WComponentFunction = {
    src: Component_math_corebase_powofpow_method
  }; export const powofpow = lm_powofpow.src;

  let lm_min: WComponentFunction = {
    src: Component_math_corebase_min_method
  }; export const min = lm_min.src;

  let lm_max: WComponentFunction = {
    src: Component_math_corebase_max_method
  }; export const max = lm_max.src;

  let lm_random: WComponentFunction = {
    src: Component_math_corebase_random_method
  }; export const random = lm_random.src;

  let lm_log: WComponentFunction = {
    src: Component_math_corebase_log_method
  }; export const log = lm_log.src;

  let lm_logm1: WComponentFunction = {
    src: Component_math_corebase_logm1_method
  }; export const logm1 = lm_logm1.src

  let lm_logp1: WComponentFunction = {
    src: Component_math_corebase_logp1_method
  }; export const logp1 = lm_logp1.src

  let lm_log2: WComponentFunction = {
    src: Component_math_corebase_log2_method
  }; export const log2 = lm_log2.src;

  let lm_log2m1: WComponentFunction = {
    src: Component_math_corebase_log2m1_method
  }; export const log2m1 = lm_log2m1.src

  let lm_log2p1: WComponentFunction = {
    src: Component_math_corebase_log2p1_method
  }; export const log2p1 = lm_log2p1.src

  let lm_logx: WComponentFunction = {
    src: Component_math_corebase_logx_method
  }; export const logx = lm_logx.src;

  let lm_logxm1: WComponentFunction = {
    src: Component_math_corebase_logxm1_method
  }; export const logxm1 = lm_logxm1.src

  let lm_logxp1: WComponentFunction = {
    src: Component_math_corebase_logxp1_method
  }; export const logxp1 = lm_logxp1.src

  let lm_ln: WComponentFunction = {
    src: Component_math_corebase_ln_method
  }; export const ln = lm_ln.src;

  let lm_lnm1: WComponentFunction = {
    src: Component_math_corebase_lnm1_method
  }; export const lnm1 = lm_lnm1.src

  let lm_lnp1: WComponentFunction = {
    src: Component_math_corebase_lnp1_method
  }; export const lnp1 = lm_lnp1.src

  let lm_exp: WComponentFunction = {
    src: Component_math_corebase_exp_method
  }; export const exp = lm_exp.src;

  let lm_expm1: WComponentFunction = {
    src: Component_math_corebase_expm1_method
  }; export const expm1 = lm_expm1.src

  let lm_expp1: WComponentFunction = {
    src: Component_math_corebase_expp1_method
  }; export const expp1 = lm_expp1.src

  let lm_round: WComponentFunction = {
    src: Component_math_corebase_round_method
  }; export const round = lm_round.src

  let lm_fround: WComponentFunction = {
    src: Component_math_corebase_fround_method
  }; export const fround = lm_fround.src

  let lm_floor: WComponentFunction = {
    src: Component_math_corebase_floor_method
  }; export const floor = lm_floor.src

  let lm_ceil: WComponentFunction = {
    src: Component_math_corebase_ceil_method
  }; export const ceil = lm_ceil.src

  let lm_imul: WComponentFunction = {
    src: Component_math_corebase_imul_method
  }; export const imul = lm_imul.src

  let lm_sign: WComponentFunction = {
    src: Component_math_corebase_sign_method
  }; export const sign = lm_sign.src

  let lm_trunc: WComponentFunction = {
    src: Component_math_corebase_trunc_method
  }; export const trunc = lm_trunc.src

}

/** @emits Not Implemented */
namespace LibraryCalculator { }

// Modelo de informação em comentário. 
  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor da raiz quadrada de 1/2. [_Returns the square root of 1/2._]
   */

// interface Math {
//   /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
//   readonly E: number;
//   /** The natural logarithm of 10. */
//   readonly LN10: number;
//   /** The natural logarithm of 2. */
//   readonly LN2: number;
//   /** The base-2 logarithm of e. */
//   readonly LOG2E: number;
//   /** The base-10 logarithm of e. */
//   readonly LOG10E: number;
//   /** Pi. This is the ratio of the circumference of a circle to its diameter. */
//   readonly PI: number;
//   /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
//   readonly SQRT1_2: number;
//   /** The square root of 2. */
//   readonly SQRT2: number;
//   /**
//    * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
//    * For example, the absolute value of -5 is the same as the absolute value of 5.
//    * @param x A numeric expression for which the absolute value is needed.
//    */
//   abs(x: number): number;
//   /**
//    * Returns the arc cosine (or inverse cosine) of a number.
//    * @param x A numeric expression.
//    */
//   acos(x: number): number;
//   /**
//    * Returns the arcsine of a number.
//    * @param x A numeric expression.
//    */
//   asin(x: number): number;
//   /**
//    * Returns the arctangent of a number.
//    * @param x A numeric expression for which the arctangent is needed.
//    */
//   atan(x: number): number;
//   /**
//    * Returns the angle (in radians) from the X axis to a point.
//    * @param y A numeric expression representing the cartesian y-coordinate.
//    * @param x A numeric expression representing the cartesian x-coordinate.
//    */
//   atan2(y: number, x: number): number;
//   /**
//    * Returns the smallest integer greater than or equal to its numeric argument.
//    * @param x A numeric expression.
//    */
//   ceil(x: number): number;
//   /**
//    * Returns the cosine of a number.
//    * @param x A numeric expression that contains an angle measured in radians.
//    */
//   cos(x: number): number;
//   /**
//    * Returns e (the base of natural logarithms) raised to a power.
//    * @param x A numeric expression representing the power of e.
//    */
//   exp(x: number): number;
//   /**
//    * Returns the greatest integer less than or equal to its numeric argument.
//    * @param x A numeric expression.
//    */
//   floor(x: number): number;
//   /**
//    * Returns the natural logarithm (base e) of a number.
//    * @param x A numeric expression.
//    */
//   log(x: number): number;
//   /**
//    * Returns the larger of a set of supplied numeric expressions.
//    * @param values Numeric expressions to be evaluated.
//    */
//   max(...values: number[]): number;
//   /**
//    * Returns the smaller of a set of supplied numeric expressions.
//    * @param values Numeric expressions to be evaluated.
//    */
//   min(...values: number[]): number;
//   /**
//    * Returns the value of a base expression taken to a specified power.
//    * @param x The base value of the expression.
//    * @param y The exponent value of the expression.
//    */
//   pow(x: number, y: number): number;
//   /** Returns a pseudorandom number between 0 and 1. */
//   random(): number;
//   /**
//    * Returns a supplied numeric expression rounded to the nearest integer.
//    * @param x The value to be rounded to the nearest integer.
//    */
//   round(x: number): number;
//   /**
//    * Returns the sine of a number.
//    * @param x A numeric expression that contains an angle measured in radians.
//    */
//   sin(x: number): number;
//   /**
//    * Returns the square root of a number.
//    * @param x A numeric expression.
//    */
//   sqrt(x: number): number;
//   /**
//    * Returns the tangent of a number.
//    * @param x A numeric expression that contains an angle measured in radians.
//    */
//   tan(x: number): number;
// }
// /** An intrinsic object that provides basic mathematics functionality and constants. */
// declare var Math: Math;