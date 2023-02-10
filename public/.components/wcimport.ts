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

import { Component_math_calculator_shortcuts_constant } from "./calc/shortcuts.constant";
import { Component_math_calculator_common_method } from "./calc/common.method";

export namespace WComponents {

  export namespace Mathematic {

    export let avogadro_constant = Component_math_corebase_avogadro_constant
              ,euler_constant = Component_math_corebase_euler_constant
              ,logarithm2_constant = Component_math_corebase_logarithm2_constant
              ,logarithm2e_constant = Component_math_corebase_logarithm2e_constant
              ,logarithm10_constant = Component_math_corebase_logarithm10_constant
              ,logarithm10e_constant = Component_math_corebase_logarithm10e_constant
              ,maxvalue_constant = Component_math_corebase_maxvalue_constant
              ,minvalue_constant = Component_math_corebase_minvalue_constant
              ,newton_constant = Component_math_corebase_newton_constant
              ,pi_constant = Component_math_corebase_pi_constant
              ,plank_constant = Component_math_corebase_plank_constant
              ,tesla_constant = Component_math_corebase_tesla_constant
              ,square_root_constant_collection = Component_math_corebase_square_root_constant_collection
              ,cubic_root_constant_collection = Component_math_corebase_cubic_root_constant_collection
              ,abs_method = Component_math_corebase_abs_method
              ,arcsin_method = Component_math_corebase_arcsin_method
              ,arcsinh_method = Component_math_corebase_arcsinh_method
              ,arccos_method = Component_math_corebase_arccos_method
              ,arccosh_method = Component_math_corebase_arccosh_method
              ,arctan_method = Component_math_corebase_arctan_method
              ,arctanh_method = Component_math_corebase_arctanh_method
              ,arcsec_method = Component_math_corebase_arcsec_method
              ,arcsech_method = Component_math_corebase_arcsech_method
              ,arccosec_method = Component_math_corebase_arccosec_method
              ,arccosech_method = Component_math_corebase_arccosech_method
              ,arccotan_method = Component_math_corebase_arccotan_method
              ,arccotanh_method = Component_math_corebase_arccotanh_method
              ,sqrt_method = Component_math_corebase_sqrt_method
              ,cbrt_method = Component_math_corebase_cbrt_method
              ,quart_method = Component_math_corebase_quart_method
              ,quirt_method = Component_math_corebase_quirt_method
              ,sexrt_method = Component_math_corebase_sexrt_method
              ,seprt_method = Component_math_corebase_seprt_method
              ,octrt_method = Component_math_corebase_octrt_method
              ,nonrt_method = Component_math_corebase_nonrt_method
              ,decrt_method = Component_math_corebase_decrt_method
              ,sin_method = Component_math_corebase_sin_method
              ,sinh_method = Component_math_corebase_sinh_method
              ,cos_method = Component_math_corebase_cos_method
              ,cosh_method = Component_math_corebase_cosh_method
              ,tan_method = Component_math_corebase_tan_method
              ,tanh_method = Component_math_corebase_tanh_method
              ,sec_method = Component_math_corebase_sec_method
              ,sech_method = Component_math_corebase_sech_method
              ,cosec_method = Component_math_corebase_cosec_method
              ,cosech_method = Component_math_corebase_cosech_method
              ,cotan_method = Component_math_corebase_cotan_method
              ,cotanh_method = Component_math_corebase_cotanh_method
              ,pow_method = Component_math_corebase_pow_method
              ,powofpow_method = Component_math_corebase_powofpow_method
              ,min_method = Component_math_corebase_min_method 
              ,max_method = Component_math_corebase_max_method
              ,random_method = Component_math_corebase_random_method
              ,log_method = Component_math_corebase_log_method
              ,logm1_method = Component_math_corebase_logm1_method
              ,logp1_method = Component_math_corebase_logp1_method
              ,log2_method = Component_math_corebase_log2_method
              ,log2m1_method = Component_math_corebase_log2m1_method
              ,log2p1_method = Component_math_corebase_log2p1_method
              ,logx_method = Component_math_corebase_logx_method
              ,logxm1_method = Component_math_corebase_logxm1_method
              ,logxp1_method = Component_math_corebase_logxp1_method
              ,ln_method = Component_math_corebase_ln_method
              ,lnm1_method = Component_math_corebase_lnm1_method
              ,lnp1_method = Component_math_corebase_lnp1_method
              ,exp_method = Component_math_corebase_exp_method
              ,expm1_method = Component_math_corebase_expm1_method
              ,expp1_method = Component_math_corebase_expp1_method
              ,round_method = Component_math_corebase_round_method
              ,fround_method = Component_math_corebase_fround_method
              ,floor_method = Component_math_corebase_floor_method
              ,ceil_method = Component_math_corebase_ceil_method
              ,imul_method = Component_math_corebase_imul_method
              ,sign_method = Component_math_corebase_sign_method
              ,trunc_method = Component_math_corebase_trunc_method

  }

  export namespace Calculator {

    export let shortcuts_constant = Component_math_calculator_shortcuts_constant  
              ,common_method = Component_math_calculator_common_method

  }

}
