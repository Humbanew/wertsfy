/// <reference path="../.declarations/warch.d.ts" />

import { WComponents } from "./wcimport";

export namespace LibraryMath {
  
  let lm_avogrado: WComponentNumber = {
    src: WComponents.Mathematic.avogadro_constant
  }; export const Avogrado = lm_avogrado.src;
  
  let lm_euler: WComponentNumber = { 
    src: WComponents.Mathematic.euler_constant
  }; export const Euler = lm_euler.src;

  let lm_logarithm2: WComponentNumber = {
    src: WComponents.Mathematic.logarithm2_constant
  }; export const Logarithm2 = lm_logarithm2.src;

  let lm_logarithm2e: WComponentNumber = {
    src: WComponents.Mathematic.logarithm2e_constant
  }; export const Logarithm2e = lm_logarithm2e.src;

  let lm_logarithm10: WComponentNumber = {
    src: WComponents.Mathematic.logarithm10_constant
  }; export const Logarithm10 = lm_logarithm10.src;

  let lm_logarithm10e: WComponentNumber = {
    src: WComponents.Mathematic.logarithm10e_constant
  }; export const Logarithm10e = lm_logarithm10e.src;

  let lm_maxvalue: WComponentNumber = {
    src: WComponents.Mathematic.maxvalue_constant
  }; export const Maxvalue = lm_maxvalue.src;

  let lm_minvalue: WComponentNumber = {
    src: WComponents.Mathematic.minvalue_constant
  }; export const Minvalue = lm_minvalue.src;

  let lm_newton: WComponentNumber = {
    src: WComponents.Mathematic.newton_constant
  }; export const Newton = lm_newton.src;

  let lm_pi: WComponentNumber = { 
    src: WComponents.Mathematic.pi_constant 
  }; export const Pi = lm_pi.src;
  
  let lm_plank: WComponentNumber = {
    src: WComponents.Mathematic.plank_constant
  }; export const Plank = lm_plank.src;

  let lm_testa: WComponentNumber = {
    src: WComponents.Mathematic.tesla_constant
  }; export const Tesla = lm_testa.src;

  let lm_square_root: WComponentObject = {
    src: { collections: { sqrt_cbrt: WComponents.Mathematic.square_root_constant_collection } }
  }; export const SquareRoot = lm_square_root.src.collections.sqrt_cbrt;

  let lm_cubic_root: WComponentObject = {
    src: { collections: { sqrt_cbrt: WComponents.Mathematic.cubic_root_constant_collection } }
  }; export const CubicRoot = lm_cubic_root.src.collections.sqrt_cbrt;

  let lm_abs: WComponentFunction = {
    src: WComponents.Mathematic.abs_method
  }; export const abs = lm_abs.src;

  let lm_arcsin: WComponentFunction = {
    src: WComponents.Mathematic.arcsin_method
  }; export const arcsin = lm_arcsin.src;

  let lm_arcsinh: WComponentFunction = {
    src: WComponents.Mathematic.arcsinh_method
  }; export const arcsinh = lm_arcsinh.src;

  let lm_arccos: WComponentFunction = {
    src: WComponents.Mathematic.arccos_method
  }; export const arccos = lm_arccos.src;

  let lm_arccosh: WComponentFunction = {
    src: WComponents.Mathematic.arccosh_method
  }; export const arccosh = lm_arccosh.src;

  let lm_arctan: WComponentFunction = {
    src: WComponents.Mathematic.arctan_method
  }; export const arctan = lm_arctan.src;

  let lm_arctanh: WComponentFunction = {
    src: WComponents.Mathematic.arctanh_method
  }; export const arctanh = lm_arctanh.src;

  let lm_arcsec: WComponentFunction = {
    src: WComponents.Mathematic.arcsec_method
  }; export const arcsec = lm_arcsec.src;

  let lm_arcsech: WComponentFunction = {
    src: WComponents.Mathematic.arcsech_method
  }; export const arcsech = lm_arcsech.src;

  let lm_arccosec: WComponentFunction = {
    src: WComponents.Mathematic.arccosec_method
  }; export const arccossec = lm_arccosec.src;

  let lm_arccosech: WComponentFunction = {
    src: WComponents.Mathematic.arccosech_method
  }; export const arccosech = lm_arccosech.src;
  
  let lm_arccotan: WComponentFunction = {
    src: WComponents.Mathematic.arccotan_method
  }; export const arccotan = lm_arccotan.src;

  let lm_arccotanh: WComponentFunction = {
    src: WComponents.Mathematic.arccotanh_method
  }; export const arccotanh = lm_arccotanh.src;

  let lm_sqrt: WComponentFunction = {
    src: WComponents.Mathematic.sqrt_method
  }; export const sqrt = lm_sqrt.src;

  let lm_cbrt: WComponentFunction = {
    src: WComponents.Mathematic.cbrt_method
  }; export const cbrt = lm_cbrt.src;

  let lm_quart: WComponentFunction = {
    src: WComponents.Mathematic.quart_method
  }; export const quart = lm_quart.src;

  let lm_quirt: WComponentFunction = {
    src: WComponents.Mathematic.quirt_method
  }; export const quirt = lm_quirt.src;

  let lm_sexrt: WComponentFunction = {
    src: WComponents.Mathematic.sexrt_method
  }; export const sexrt = lm_sexrt.src;

  let lm_seprt: WComponentFunction = {
    src: WComponents.Mathematic.seprt_method
  }; export const seprt = lm_seprt.src;

  let lm_octrt: WComponentFunction = {
    src: WComponents.Mathematic.octrt_method
  }; export const octrt = lm_octrt.src;

  let lm_nonrt: WComponentFunction = {
    src: WComponents.Mathematic.nonrt_method
  }; export const nonrt = lm_nonrt.src;

  let lm_decrt: WComponentFunction = {
    src: WComponents.Mathematic.decrt_method
  }; export const decrt = lm_decrt.src;

  let lm_sin: WComponentFunction = {
    src: WComponents.Mathematic.sin_method
  }; export const sin = lm_sin.src;

  let lm_sinh: WComponentFunction = {
    src: WComponents.Mathematic.sinh_method
  }; export const sinh = lm_sinh.src;

  let lm_cos: WComponentFunction = {
    src: WComponents.Mathematic.cos_method
  }; export const cos = lm_cos.src;

  let lm_cosh: WComponentFunction = {
    src: WComponents.Mathematic.cosh_method
  }; export const cosh = lm_cosh.src;

  let lm_tan: WComponentFunction = {
    src: WComponents.Mathematic.tan_method
  }; export const tan = lm_tan.src;

  let lm_tanh: WComponentFunction = {
    src: WComponents.Mathematic.tanh_method
  }; export const tanh = lm_tanh.src;

  let lm_sec: WComponentFunction = {
    src: WComponents.Mathematic.sec_method
  }; export const sec = lm_sec.src;

  let lm_sech: WComponentFunction = {
    src: WComponents.Mathematic.sech_method
  }; export const sech = lm_sech.src;

  let lm_cosec: WComponentFunction = {
    src: WComponents.Mathematic.cosec_method
  }; export const cosec = lm_cosec.src;

  let lm_cosech: WComponentFunction = {
    src: WComponents.Mathematic.cosech_method
  }; export const cosech = lm_cosech.src;

  let lm_cotan: WComponentFunction = {
    src: WComponents.Mathematic.cotan_method
  }; export const cotan = lm_cotan.src;

  let lm_cotanh: WComponentFunction = {
    src: WComponents.Mathematic.cotanh_method
  }; export const cotanh = lm_cotanh.src;

  let lm_pow: WComponentFunction = {
    src: WComponents.Mathematic.pow_method
  }; export const pow = lm_pow.src;

  let lm_powofpow: WComponentFunction = {
    src: WComponents.Mathematic.powofpow_method
  }; export const powofpow = lm_powofpow.src;

  let lm_min: WComponentFunction = {
    src: WComponents.Mathematic.min_method
  }; export const min = lm_min.src;

  let lm_max: WComponentFunction = {
    src: WComponents.Mathematic.max_method
  }; export const max = lm_max.src;

  let lm_random: WComponentFunction = {
    src: WComponents.Mathematic.random_method
  }; export const random = lm_random.src;

  let lm_log: WComponentFunction = {
    src: WComponents.Mathematic.log_method
  }; export const log = lm_log.src;

  let lm_logm1: WComponentFunction = {
    src: WComponents.Mathematic.logm1_method
  }; export const logm1 = lm_logm1.src;

  let lm_logp1: WComponentFunction = {
    src: WComponents.Mathematic.logp1_method
  }; export const logp1 = lm_logp1.src;

  let lm_log2: WComponentFunction = {
    src: WComponents.Mathematic.log2_method
  }; export const log2 = lm_log2.src;

  let lm_log2m1: WComponentFunction = {
    src: WComponents.Mathematic.log2m1_method
  }; export const log2m1 = lm_log2m1.src;

  let lm_log2p1: WComponentFunction = {
    src: WComponents.Mathematic.log2p1_method
  }; export const log2p1 = lm_log2p1.src;

  let lm_logx: WComponentFunction = {
    src: WComponents.Mathematic.logx_method
  }; export const logx = lm_logx.src;

  let lm_logxm1: WComponentFunction = {
    src: WComponents.Mathematic.logxm1_method
  }; export const logxm1 = lm_logxm1.src;

  let lm_logxp1: WComponentFunction = {
    src: WComponents.Mathematic.logxp1_method
  }; export const logxp1 = lm_logxp1.src;

  let lm_ln: WComponentFunction = {
    src: WComponents.Mathematic.ln_method
  }; export const ln = lm_ln.src;

  let lm_lnm1: WComponentFunction = {
    src: WComponents.Mathematic.lnm1_method
  }; export const lnm1 = lm_lnm1.src;

  let lm_lnp1: WComponentFunction = {
    src: WComponents.Mathematic.lnp1_method
  }; export const lnp1 = lm_lnp1.src;

  let lm_exp: WComponentFunction = {
    src: WComponents.Mathematic.exp_method
  }; export const exp = lm_exp.src;

  let lm_expm1: WComponentFunction = {
    src: WComponents.Mathematic.expm1_method
  }; export const expm1 = lm_expm1.src;

  let lm_expp1: WComponentFunction = {
    src: WComponents.Mathematic.expp1_method
  }; export const expp1 = lm_expp1.src;

  let lm_round: WComponentFunction = {
    src: WComponents.Mathematic.round_method
  }; export const round = lm_round.src;

  let lm_fround: WComponentFunction = {
    src: WComponents.Mathematic.fround_method
  }; export const fround = lm_fround.src;

  let lm_floor: WComponentFunction = {
    src: WComponents.Mathematic.floor_method
  }; export const floor = lm_floor.src;

  let lm_ceil: WComponentFunction = {
    src: WComponents.Mathematic.ceil_method
  }; export const ceil = lm_ceil.src;

  let lm_imul: WComponentFunction = {
    src: WComponents.Mathematic.imul_method
  }; export const imul = lm_imul.src;

  let lm_sign: WComponentFunction = {
    src: WComponents.Mathematic.sign_method
  }; export const sign = lm_sign.src;

  let lm_trunc: WComponentFunction = {
    src: WComponents.Mathematic.trunc_method
  }; export const trunc = lm_trunc.src;

}

/** @emits Not Implemented **[98%]** */
namespace LibraryCalculator {

  let lc_shortcuts: WComponentObject = {
    src: { collections: { shortcuts: WComponents.Calculator.shortcuts_constant } }
  }; export const Shortcuts = lc_shortcuts.src.collections.shortcuts;

  let lc_common: WComponentFunction = {
    src: WComponents.Calculator.common_method
  }; export const common = lc_common.src;

  let lc_advanced: WComponentFunction = {
    src: WComponents.Calculator.advanced_method
  }; export const advanced = lc_advanced.src;

}

// Modelo de informação em comentário. 
  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor da raiz quadrada de 1/2. [_Returns the square root of 1/2._]
   */
