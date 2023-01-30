import { Component_math_corebase_abs_method } from "./lib/abs.method";
import { Component_math_corebase_arccos_method } from "./lib/arccos.method";
import { Component_math_corebase_arccosec_method } from "./lib/arccosec.method";
import { Component_math_corebase_arccosech_method } from "./lib/arccosech.method";
import { Component_math_corebase_arccosh_method } from "./lib/arccosh.method";
import { Component_math_corebase_arccotan_method } from "./lib/arccotan.method";
import { Component_math_corebase_arccotanh_method } from "./lib/arccotanh.method";
import { Component_math_corebase_arcsec_method } from "./lib/arcsec.method";
import { Component_math_corebase_arcsech_method } from "./lib/arcsech.method";
import { Component_math_corebase_arcsin_method } from "./lib/arcsin.method";
import { Component_math_corebase_arcsinh_method } from "./lib/arcsinh.method";
import { Component_math_corebase_arctan_method } from "./lib/arctan.method";
import { Component_math_corebase_arctanh_method } from "./lib/arctanh.method";
import { Component_math_corebase_avogadro_constant } from "./lib/avogadro.constant";
import { Component_math_corebase_cbrt_method } from "./lib/cbrt.method";
import { Component_math_corebase_ceil_method } from "./lib/ceil.method";
import { Component_math_corebase_cos_method } from "./lib/cos.method";
import { Component_math_corebase_cosec_method } from "./lib/cosec.method";
import { Component_math_corebase_cosech_method } from "./lib/cosech.method";
import { Component_math_corebase_cosh_method } from "./lib/cosh.method";
import { Component_math_corebase_cotan_method } from "./lib/cotan.method";
import { Component_math_corebase_cotanh_method } from "./lib/cotanh.method";
import { Component_math_corebase_cubic_root_constant_collection } from "./lib/cubic-root.constant-collection";
import { Component_math_corebase_decrt_method } from "./lib/decrt.method";
import { Component_math_corebase_euler_constant } from "./lib/euler.constant";
import { Component_math_corebase_exp_method } from "./lib/exp.method";
import { Component_math_corebase_expm1_method } from "./lib/expm1.method";
import { Component_math_corebase_expp1_method } from "./lib/expp1.method";
import { Component_math_corebase_floor_method } from "./lib/floor.method";
import { Component_math_corebase_fround_method } from "./lib/fround.method";
import { Component_math_corebase_imul_method } from "./lib/imul.method";
import { Component_math_corebase_ln_method } from "./lib/ln.method";
import { Component_math_corebase_lnm1_method } from "./lib/lnm1.method";
import { Component_math_corebase_lnp1_method } from "./lib/lnp1.method";
import { Component_math_corebase_log_method } from "./lib/log.method";
import { Component_math_corebase_log2_method } from "./lib/log2.method";
import { Component_math_corebase_log2m1_method } from "./lib/log2m1.method";
import { Component_math_corebase_log2p1_method } from "./lib/log2p1.method";
import { Component_math_corebase_logarithm_protected_method } from "./lib/logarithm.protected.method";
import { Component_math_corebase_logarithm10_constant } from "./lib/logarithm10.constant";
import { Component_math_corebase_logarithm10e_constant } from "./lib/logarithm10e.constant";
import { Component_math_corebase_logarithm2_constant } from "./lib/logarithm2.constant";
import { Component_math_corebase_logarithm2e_constant } from "./lib/logarithm2e.constant";
import { Component_math_corebase_logm1_method } from "./lib/logm1.method";
import { Component_math_corebase_logp1_method } from "./lib/logp1.method";
import { Component_math_corebase_logx_method } from "./lib/logx.method";
import { Component_math_corebase_logxm1_method } from "./lib/logxm1.method";
import { Component_math_corebase_logxp1_method } from "./lib/logxp1.method";
import { Component_math_corebase_max_method } from "./lib/max.method";
import { Component_math_corebase_maxvalue_constant } from "./lib/maxvalue.constant";
import { Component_math_corebase_min_method } from "./lib/min.method";
import { Component_math_corebase_minvalue_constant } from "./lib/minvalue.constant";
import { Component_math_corebase_newton_constant } from "./lib/newton.constant";
import { Component_math_corebase_nonrt_method } from "./lib/nonrt.method";
import { Component_math_corebase_octrt_method } from "./lib/octrt.method";
import { Component_math_corebase_pi_constant } from "./lib/pi.constant";
import { Component_math_corebase_plank_constant } from "./lib/plank.constant";
import { Component_math_corebase_pow_method } from "./lib/pow.method";
import { Component_math_corebase_powofpow_method } from "./lib/powofpow.method";
import { Component_math_corebase_quart_method } from "./lib/quart.method";
import { Component_math_corebase_quirt_method } from "./lib/quirt.method";
import { Component_math_corebase_random_method } from "./lib/random.method";
import { Component_math_corebase_round_method } from "./lib/round.method";
import { Component_math_corebase_sec_method } from "./lib/sec.method";
import { Component_math_corebase_sech_method } from "./lib/sech.method";
import { Component_math_corebase_seprt_method } from "./lib/seprt.method";
import { Component_math_corebase_sexrt_method } from "./lib/sexrt.method";
import { Component_math_corebase_sign_method } from "./lib/sign.method";
import { Component_math_corebase_sin_method } from "./lib/sin.method";
import { Component_math_corebase_sinh_method } from "./lib/sinh.method";
import { Component_math_corebase_sqrt_method } from "./lib/sqrt.method";
import { Component_math_corebase_square_root_constant_collection } from "./lib/square-root.constant-collection";
import { Component_math_corebase_tan_method } from "./lib/tan.method";
import { Component_math_corebase_tanh_method } from "./lib/tanh.method";
import { Component_math_corebase_tesla_constant } from "./lib/testa.constant";
import { Component_math_corebase_trunc_method } from "./lib/trunc.method";

interface CorebaseArch {

  logarithm_protected_method: typeof Component_math_corebase_logarithm_protected_method,
  pi_constant: typeof Component_math_corebase_pi_constant,
  euler_constant: typeof Component_math_corebase_euler_constant,
  plank_constant: typeof Component_math_corebase_plank_constant,
  avogadro_constant: typeof Component_math_corebase_avogadro_constant,
  newton_constant: typeof Component_math_corebase_newton_constant,
  tesla_constant: typeof Component_math_corebase_tesla_constant,
  square_root_constant_collection: typeof Component_math_corebase_square_root_constant_collection,
  cubic_root_constant_collection: typeof Component_math_corebase_cubic_root_constant_collection,
  logarithm2: typeof Component_math_corebase_logarithm2_constant,
  logarithm2e: typeof Component_math_corebase_logarithm2e_constant,
  logarithm10: typeof Component_math_corebase_logarithm10_constant,
  logarithm10e: typeof Component_math_corebase_logarithm10e_constant,
  maxvalue: typeof Component_math_corebase_maxvalue_constant,
  minvalue: typeof Component_math_corebase_minvalue_constant,
  abs_method: typeof Component_math_corebase_abs_method,
  sqrt_method: typeof Component_math_corebase_sqrt_method,
  cbrt_method: typeof Component_math_corebase_cbrt_method,
  quart_method: typeof Component_math_corebase_quart_method,
  quirt_method: typeof Component_math_corebase_quirt_method,
  sexrt_method: typeof Component_math_corebase_sexrt_method,
  seprt_method: typeof Component_math_corebase_seprt_method,
  octrt_method: typeof Component_math_corebase_octrt_method,
  nonrt_method: typeof Component_math_corebase_nonrt_method,
  decrt_method: typeof Component_math_corebase_decrt_method,
  pow_method: typeof Component_math_corebase_pow_method,
  powofpow_method: typeof Component_math_corebase_powofpow_method,
  max_method: typeof Component_math_corebase_max_method,
  min_method: typeof Component_math_corebase_min_method,
  round_method: typeof Component_math_corebase_round_method,
  fround_method: typeof Component_math_corebase_fround_method,
  sign_method: typeof Component_math_corebase_sign_method,
  trunc_method: typeof Component_math_corebase_trunc_method,
  imul_method: typeof Component_math_corebase_imul_method,
  ceil_method: typeof Component_math_corebase_ceil_method,
  floor_method: typeof Component_math_corebase_floor_method,
  sin_method: typeof Component_math_corebase_sin_method,
  cos_method: typeof Component_math_corebase_cos_method,
  tan_method: typeof Component_math_corebase_tan_method,
  sec_method: typeof Component_math_corebase_sec_method,
  cosec_method: typeof Component_math_corebase_cosec_method,
  cotan_method: typeof Component_math_corebase_cotan_method,
  sinh_method: typeof Component_math_corebase_sinh_method,
  cosh_method: typeof Component_math_corebase_cosh_method,
  tanh_method: typeof Component_math_corebase_tanh_method,
  sech_method: typeof Component_math_corebase_sech_method,
  cosech_method: typeof Component_math_corebase_cosech_method,
  cotanh_method: typeof Component_math_corebase_cotanh_method,
  arcsin_method: typeof Component_math_corebase_arcsin_method,
  arccos_method: typeof Component_math_corebase_arccos_method,
  arctan_method: typeof Component_math_corebase_arctan_method,
  arcsec_method: typeof Component_math_corebase_arcsec_method,
  arccosec_method: typeof Component_math_corebase_arccosec_method,
  arccotan_method: typeof Component_math_corebase_arccotan_method,
  arcsinh_method: typeof Component_math_corebase_arcsinh_method,
  arccosh_method: typeof Component_math_corebase_arccosh_method,
  arctanh_method: typeof Component_math_corebase_arctanh_method,
  arcsech_method: typeof Component_math_corebase_arcsech_method,
  arccosech_method: typeof Component_math_corebase_arccosech_method,
  arccotanh_method: typeof Component_math_corebase_arccotanh_method,
  log_method: typeof Component_math_corebase_log_method,
  logm1_method: typeof Component_math_corebase_logm1_method,
  logp1_method: typeof Component_math_corebase_logp1_method,
  log2_method: typeof Component_math_corebase_log2_method,
  log2m1_method: typeof Component_math_corebase_log2m1_method,
  log2p1_method: typeof Component_math_corebase_log2p1_method,
  logx_method: typeof Component_math_corebase_logx_method,
  logxm1_method: typeof Component_math_corebase_logxm1_method,
  logxp1_method: typeof Component_math_corebase_logxp1_method,
  ln_method: typeof Component_math_corebase_ln_method,
  lnm1_method: typeof Component_math_corebase_lnm1_method,
  lnp1_method: typeof Component_math_corebase_lnp1_method,
  random_method: typeof Component_math_corebase_random_method,
  exp_method: typeof Component_math_corebase_exp_method,
  expm1_method: typeof Component_math_corebase_expm1_method,
  expp1_method: typeof Component_math_corebase_expp1_method

} export var Component_math_corebase_arch: CorebaseArch;
