/// <reference path="../.declarations/warch.d.ts" />

import { WComponents } from "./wcimport";

export namespace LibraryMath {
  
  let lm_avogrado: WComponent = {
    src: { number: WComponents.Mathematic.avogadro_constant }
  }; export const Avogrado = lm_avogrado.src.number;
  
  let lm_euler: WComponent = { 
    src: { number: WComponents.Mathematic.euler_constant }
  }; export const Euler = lm_euler.src.number;

  let lm_logarithm2: WComponent = {
    src: { number: WComponents.Mathematic.logarithm2_constant }
  }; export const Logarithm2 = lm_logarithm2.src.number;

  let lm_logarithm2e: WComponent = {
    src: { number: WComponents.Mathematic.logarithm2e_constant }
  }; export const Logarithm2e = lm_logarithm2e.src.number;

  let lm_logarithm10: WComponent = {
    src: { number: WComponents.Mathematic.logarithm10_constant }
  }; export const Logarithm10 = lm_logarithm10.src.number;

  let lm_logarithm10e: WComponent = {
    src: { number: WComponents.Mathematic.logarithm10e_constant }
  }; export const Logarithm10e = lm_logarithm10e.src.number;

  let lm_maxvalue: WComponent = {
    src: { number: WComponents.Mathematic.maxvalue_constant }
  }; export const Maxvalue = lm_maxvalue.src.number;

  let lm_minvalue: WComponent = {
    src: { number: WComponents.Mathematic.minvalue_constant }
  }; export const Minvalue = lm_minvalue.src.number;

  let lm_newton: WComponent = {
    src: { number: WComponents.Mathematic.newton_constant }
  }; export const Newton = lm_newton.src.number;

  let lm_pi: WComponent = { 
    src: { number: WComponents.Mathematic.pi_constant } 
  }; export const Pi = lm_pi.src.number;
  
  let lm_plank: WComponent = {
    src: { number: WComponents.Mathematic.plank_constant }
  }; export const Plank = lm_plank.src.number;

  let lm_testa: WComponent = {
    src: { number: WComponents.Mathematic.tesla_constant }
  }; export const Tesla = lm_testa.src.number;

  let lm_square_root: WComponent = {
    src: { object: {collections: { sqrt_cbrt: WComponents.Mathematic.square_root_constant_collection } } }
  }; export const SquareRoot = lm_square_root.src.object.collections.sqrt_cbrt;

  let lm_cubic_root: WComponent = {
    src: { object: { collections: { sqrt_cbrt: WComponents.Mathematic.cubic_root_constant_collection } } }
  }; export const CubicRoot = lm_cubic_root.src.object.collections.sqrt_cbrt;

  let lm_abs: WComponent = {
    src: { function: WComponents.Mathematic.abs_method }
  }; export const abs = lm_abs.src.function;

  let lm_arcsin: WComponent = {
    src: { function: WComponents.Mathematic.arcsin_method }
  }; export const arcsin = lm_arcsin.src.function;

  let lm_arcsinh: WComponent = {
    src: { function: WComponents.Mathematic.arcsinh_method }
  }; export const arcsinh = lm_arcsinh.src.function;

  let lm_arccos: WComponent = {
    src: { function: WComponents.Mathematic.arccos_method }
  }; export const arccos = lm_arccos.src.function;

  let lm_arccosh: WComponent = {
    src: { function: WComponents.Mathematic.arccosh_method }
  }; export const arccosh = lm_arccosh.src.function;

  let lm_arctan: WComponent = {
    src: { function: WComponents.Mathematic.arctan_method }
  }; export const arctan = lm_arctan.src.function;

  let lm_arctanh: WComponent = {
    src: { function: WComponents.Mathematic.arctanh_method }
  }; export const arctanh = lm_arctanh.src.function;

  let lm_arcsec: WComponent = {
    src: { function: WComponents.Mathematic.arcsec_method }
  }; export const arcsec = lm_arcsec.src.function;

  let lm_arcsech: WComponent = {
    src: { function: WComponents.Mathematic.arcsech_method }
  }; export const arcsech = lm_arcsech.src.function;

  let lm_arccosec: WComponent = {
    src: { function: WComponents.Mathematic.arccosec_method }
  }; export const arccossec = lm_arccosec.src.function;

  let lm_arccosech: WComponent = {
    src: { function: WComponents.Mathematic.arccosech_method }
  }; export const arccosech = lm_arccosech.src.function;
  
  let lm_arccotan: WComponent = {
    src: { function: WComponents.Mathematic.arccotan_method }
  }; export const arccotan = lm_arccotan.src.function;

  let lm_arccotanh: WComponent = {
    src: { function: WComponents.Mathematic.arccotanh_method }
  }; export const arccotanh = lm_arccotanh.src.function;

  let lm_sqrt: WComponent = {
    src: { function: WComponents.Mathematic.sqrt_method }
  }; export const sqrt = lm_sqrt.src.function;

  let lm_cbrt: WComponent = {
    src: { function: WComponents.Mathematic.cbrt_method }
  }; export const cbrt = lm_cbrt.src.function;

  let lm_quart: WComponent = {
    src: { function: WComponents.Mathematic.quart_method }
  }; export const quart = lm_quart.src.function;

  let lm_quirt: WComponent = {
    src: { function: WComponents.Mathematic.quirt_method }
  }; export const quirt = lm_quirt.src.function;

  let lm_sexrt: WComponent = {
    src: { function: WComponents.Mathematic.sexrt_method }
  }; export const sexrt = lm_sexrt.src.function;

  let lm_seprt: WComponent = {
    src: { function: WComponents.Mathematic.seprt_method }
  }; export const seprt = lm_seprt.src.function;

  let lm_octrt: WComponent = {
    src: { function: WComponents.Mathematic.octrt_method }
  }; export const octrt = lm_octrt.src.function;

  let lm_nonrt: WComponent = {
    src: { function: WComponents.Mathematic.nonrt_method }
  }; export const nonrt = lm_nonrt.src.function;

  let lm_decrt: WComponent = {
    src: { function: WComponents.Mathematic.decrt_method }
  }; export const decrt = lm_decrt.src.function;

  let lm_sin: WComponent = {
    src: { function: WComponents.Mathematic.sin_method }
  }; export const sin = lm_sin.src.function;

  let lm_sinh: WComponent = {
    src: { function: WComponents.Mathematic.sinh_method }
  }; export const sinh = lm_sinh.src.function;

  let lm_cos: WComponent = {
    src: { function: WComponents.Mathematic.cos_method }
  }; export const cos = lm_cos.src.function;

  let lm_cosh: WComponent = {
    src: { function: WComponents.Mathematic.cosh_method }
  }; export const cosh = lm_cosh.src.function;

  let lm_tan: WComponent = {
    src: { function: WComponents.Mathematic.tan_method }
  }; export const tan = lm_tan.src.function;

  let lm_tanh: WComponent = {
    src: { function: WComponents.Mathematic.tanh_method }
  }; export const tanh = lm_tanh.src.function;

  let lm_sec: WComponent = {
    src: { function: WComponents.Mathematic.sec_method }
  }; export const sec = lm_sec.src.function;

  let lm_sech: WComponent = {
    src: { function: WComponents.Mathematic.sech_method }
  }; export const sech = lm_sech.src.function;

  let lm_cosec: WComponent = {
    src: { function: WComponents.Mathematic.cosec_method }
  }; export const cosec = lm_cosec.src.function;

  let lm_cosech: WComponent = {
    src: { function: WComponents.Mathematic.cosech_method }
  }; export const cosech = lm_cosech.src.function;

  let lm_cotan: WComponent = {
    src: { function: WComponents.Mathematic.cotan_method }
  }; export const cotan = lm_cotan.src.function;

  let lm_cotanh: WComponent = {
    src: { function: WComponents.Mathematic.cotanh_method }
  }; export const cotanh = lm_cotanh.src.function;

  let lm_pow: WComponent = {
    src: { function: WComponents.Mathematic.pow_method }
  }; export const pow = lm_pow.src.function;

  let lm_powofpow: WComponent = {
    src: { function: WComponents.Mathematic.powofpow_method }
  }; export const powofpow = lm_powofpow.src.function;

  let lm_min: WComponent = {
    src: { function: WComponents.Mathematic.min_method }
  }; export const min = lm_min.src.function;

  let lm_max: WComponent = {
    src: { function: WComponents.Mathematic.max_method }
  }; export const max = lm_max.src.function;

  let lm_random: WComponent = {
    src: { function: WComponents.Mathematic.random_method }
  }; export const random = lm_random.src.function;

  let lm_log: WComponent = {
    src: { function: WComponents.Mathematic.log_method }
  }; export const log = lm_log.src.function;

  let lm_logm1: WComponent = {
    src: { function: WComponents.Mathematic.logm1_method }
  }; export const logm1 = lm_logm1.src.function;

  let lm_logp1: WComponent = {
    src: { function: WComponents.Mathematic.logp1_method }
  }; export const logp1 = lm_logp1.src.function;

  let lm_log2: WComponent = {
    src: { function: WComponents.Mathematic.log2_method }
  }; export const log2 = lm_log2.src.function;

  let lm_log2m1: WComponent = {
    src: { function: WComponents.Mathematic.log2m1_method }
  }; export const log2m1 = lm_log2m1.src.function;

  let lm_log2p1: WComponent = {
    src: { function: WComponents.Mathematic.log2p1_method }
  }; export const log2p1 = lm_log2p1.src.function;

  let lm_logx: WComponent = {
    src: { function: WComponents.Mathematic.logx_method }
  }; export const logx = lm_logx.src.function;

  let lm_logxm1: WComponent = {
    src: { function: WComponents.Mathematic.logxm1_method }
  }; export const logxm1 = lm_logxm1.src.function;

  let lm_logxp1: WComponent = {
    src: { function: WComponents.Mathematic.logxp1_method }
  }; export const logxp1 = lm_logxp1.src.function;

  let lm_ln: WComponent = {
    src: { function: WComponents.Mathematic.ln_method }
  }; export const ln = lm_ln.src.function;

  let lm_lnm1: WComponent = {
    src: { function: WComponents.Mathematic.lnm1_method }
  }; export const lnm1 = lm_lnm1.src.function;

  let lm_lnp1: WComponent = {
    src: { function: WComponents.Mathematic.lnp1_method }
  }; export const lnp1 = lm_lnp1.src.function;

  let lm_exp: WComponent = {
    src: { function: WComponents.Mathematic.exp_method }
  }; export const exp = lm_exp.src.function;

  let lm_expm1: WComponent = {
    src: { function: WComponents.Mathematic.expm1_method }
  }; export const expm1 = lm_expm1.src.function;

  let lm_expp1: WComponent = {
    src: { function: WComponents.Mathematic.expp1_method }
  }; export const expp1 = lm_expp1.src.function;

  let lm_round: WComponent = {
    src: { function: WComponents.Mathematic.round_method }
  }; export const round = lm_round.src.function;

  let lm_fround: WComponent = {
    src: { function: WComponents.Mathematic.fround_method }
  }; export const fround = lm_fround.src.function;

  let lm_floor: WComponent = {
    src: { function: WComponents.Mathematic.floor_method }
  }; export const floor = lm_floor.src.function;

  let lm_ceil: WComponent = {
    src: { function: WComponents.Mathematic.ceil_method }
  }; export const ceil = lm_ceil.src.function;

  let lm_imul: WComponent = {
    src: { function: WComponents.Mathematic.imul_method }
  }; export const imul = lm_imul.src.function;

  let lm_sign: WComponent = {
    src: { function: WComponents.Mathematic.sign_method }
  }; export const sign = lm_sign.src.function;

  let lm_trunc: WComponent = {
    src: { function: WComponents.Mathematic.trunc_method }
  }; export const trunc = lm_trunc.src.function;

}

/** @emits Not Implemented **[98%]** */
export namespace LibraryCalculator {

  let lc_shortcuts: WComponent = {
    src: { object: { collections: { shortcuts: WComponents.Calculator.shortcuts_constant } } }
  }; export const Shortcuts = lc_shortcuts.src.object.collections.shortcuts;

  let lc_common: WComponent = {
    src: { function: WComponents.Calculator.common_method }
  }; export const common = lc_common.src.function;

  let lc_advanced: WComponent = {
    src: { function: WComponents.Calculator.advanced_method }
  }; export const advanced = lc_advanced.src.function;

  export namespace Expressions {

    let lc_exp_teo_boltzmann: WComponent = {
      src: { function: WComponents.Calculator.exp_teo_boltzmann_method }
    }; export const expTeoBoltzmann = lc_exp_teo_boltzmann.src.function;

    let lc_exp_teo_coulomb: WComponent = {
      src: { function: WComponents.Calculator.exp_teo_coulomb_method }
    }; export const expTeoCoulomb = lc_exp_teo_coulomb.src.function;

    let lc_exp_teo_girard: WComponent = {
      src: { function: WComponents.Calculator.exp_teo_girard_method }
    }; export const expTeoGirard = lc_exp_teo_girard.src.function;

    let lc_exp_teo_pascal: WComponent = {
      src: { function: WComponents.Calculator.exp_teo_pascal_method }
    }; export const expTeoPascal = lc_exp_teo_pascal.src.function;

    let lc_exp_teo_pitagoras: WComponent = {
      src: { function: WComponents.Calculator.exp_teo_pitagoras_method }
    }; export const expTeoPitagoras = lc_exp_teo_pitagoras.src.function;

    let lc_exp_teo_plank: WComponent = {
      src: { function: WComponents.Calculator.exp_teo_plank_method }
    }; export const expTeoPlank = lc_exp_teo_plank.src.function;

    let lc_exp_teo_stevin: WComponent = {
      src: { function: WComponents.Calculator.exp_teo_stevin_method }
    }; export const expTeoStevin = lc_exp_teo_stevin.src.function;

    let lc_exp_teo_stirling: WComponent = {
      src: { function: WComponents.Calculator.exp_teo_stirling_method }
    }; export const expTeoStirling = lc_exp_teo_stirling.src.function;

    let lc_exp_teo_tales_de_mileto: WComponent = {
      src: { function: WComponents.Calculator.exp_teo_tales_de_mileto_method }
    }; export const expTeoTalesDeMileto = lc_exp_teo_tales_de_mileto.src.function;

  }; 

}

// Modelo de informação em comentário. 
  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor da raiz quadrada de 1/2. [_Returns the square root of 1/2._]
   */
