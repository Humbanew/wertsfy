/// <reference path="../.declarations/warch.d.ts" />

import { WComponents } from "./wcimport";

export namespace LibraryMathematic {

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
    src: { object: { collections: { sqrt_cbrt: WComponents.Mathematic.square_root_constant_collection } } }
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

/** @emits Not Implemented **[10%]** */
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

    let lc_exp_eqc_horaria_tempo: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_horaria_tempo_method }
    }; export const expEqcHorariaTempo = lc_exp_eqc_horaria_tempo.src.function;

    let lc_exp_eqc_horaria_espaco: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_horaria_espaco_method }
    }; export const expEqcHorariaEspaco = lc_exp_eqc_horaria_espaco.src.function;

    let lc_exp_eqc_horaria_velocidade: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_horaria_velocidade_method }
    }; export const expEqcHorariaVelocidade = lc_exp_eqc_horaria_velocidade.src.function;

    let lc_exp_eqc_horaria_aceleracao: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_horaria_aceleracao_method }
    }; export const expEqcHorariaAceleracao = lc_exp_eqc_horaria_aceleracao.src.function;

    let lc_exp_eqc_horaria_forca: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_horaria_forca_method }
    }; export const expEqcHorariaForca = lc_exp_eqc_horaria_forca.src.function;

    let lc_exp_eqc_horaria_espaco_tempo: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_horaria_espaco_tempo_method }
    }; export const expEqcHorariaEspacoTempo = lc_exp_eqc_horaria_espaco_tempo.src.function;

    let lc_exp_eqc_horaria_tempo_movimento_circular_uniformente_variado: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_horaria_tempo_movimento_circular_uniformente_variado_method }
    }; export const expEqcHorariaTempoMCUV = lc_exp_eqc_horaria_tempo_movimento_circular_uniformente_variado.src.function;

    let lc_exp_eqc_horaria_espaco_movimento_circular_uniformente_variado: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_horaria_espaco_movimento_circular_uniformente_variado_method }
    }; export const expEqcHorariaEspacoMCUV = lc_exp_eqc_horaria_espaco_movimento_circular_uniformente_variado.src.function;
    
    let lc_exp_eqc_horaria_posicao_movimento_harmonico_simples: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_horaria_posicao_movimento_harmonico_simples_method }
    }; export const expEqcHorariaPosicaoMHS = lc_exp_eqc_horaria_posicao_movimento_harmonico_simples.src.function;
    
    let lc_exp_eqc_horaria_velocidade_movimento_harmonico_simples: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_horaria_velocidade_movimento_harmonico_simples_method }
    }; export const expEqcHorariaVelocidadeMHS = lc_exp_eqc_horaria_velocidade_movimento_harmonico_simples.src.function;
    
    let lc_exp_eqc_horaria_aceleracao_movimento_harmonico_simples: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_horaria_aceleracao_movimento_harmonico_simples_method }
    }; export const expEqcHorariaAceleracaoMHS = lc_exp_eqc_horaria_aceleracao_movimento_harmonico_simples.src.function;
    
    let lc_exp_eqc_torricelli: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_torricelli_method }
    }; export const expEqcHorariaTorricelli = lc_exp_eqc_torricelli.src.function;
    
    let lc_exp_eqc_lagrange: WComponent = {
      src: { function: WComponents.Calculator.exp_eqc_lagrange_method }
    }; export const expEqcHorariaLagrange = lc_exp_eqc_lagrange.src.function;


    let lc_exp_clc_fatorial: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_fatorial_method }
    }; export const expClcFatorial = lc_exp_clc_fatorial.src.function;
    
    let lc_exp_clc_combinacao: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_combinacao_method }
    }; export const expClcCombinacao = lc_exp_clc_combinacao.src.function;
    
    let lc_exp_clc_arranjo: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_arranjo_method }
    }; export const expClcArranjo = lc_exp_clc_arranjo.src.function;
    
    let lc_exp_clc_probabilidade: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_probabilidade_method }
    }; export const expClcProbabilidade = lc_exp_clc_probabilidade.src.function;
    
    let lc_exp_clc_conjugado_numero_complexo: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_conjugado_numero_complexo_method }
    }; export const expClcConjugadoNumeroComplexo = lc_exp_clc_conjugado_numero_complexo.src.function;

    let lc_exp_clc_relacao_euler: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_relacao_euler_method }
    }; export const expClcRelacaoEuler = lc_exp_clc_relacao_euler.src.function;

    let lc_exp_clc_potencias_de_i: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_potencias_de_i_method }
    }; export const expClcPotenciasDeI = lc_exp_clc_potencias_de_i.src.function;

    let lc_exp_clc_porcentagem: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_porcentagem_method }
    }; export const expClcPorcentagem = lc_exp_clc_porcentagem.src.function;

    let lc_exp_clc_determinante: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_determinante_method }
    }; export const expClcDeterminante = lc_exp_clc_determinante.src.function;

    let lc_exp_clc_polinomios: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_polinomios_method }
    }; export const expClcPolinomios = lc_exp_clc_polinomios.src.function;

    let lc_exp_clc_matrizes: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_matrizes_method }
    }; export const expClcMatrizes = lc_exp_clc_matrizes.src.function;

    let lc_exp_clc_velocidade: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_velocidade_method }
    }; export const expClcVelocidade = lc_exp_clc_velocidade.src.function;

    let lc_exp_clc_espaco: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_espaco_method }
    }; export const expClcEspaco = lc_exp_clc_espaco.src.function;

    let lc_exp_clc_tempo: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_tempo_method }
    }; export const expClcTempo = lc_exp_clc_tempo.src.function;

    let lc_exp_clc_aceleracao: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_aceleracao_method }
    }; export const expClcAceleracao = lc_exp_clc_aceleracao.src.function;

    let lc_exp_clc_energia_cinetica: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_energia_cinetica_method }
    }; export const expClcEnergiaCinetica = lc_exp_clc_energia_cinetica.src.function;

    let lc_exp_clc_energia_potencial_elastica: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_energia_potencial_elastica_method }
    }; export const expClcEnergiaPotencialElastica = lc_exp_clc_energia_potencial_elastica.src.function;

    let lc_exp_clc_energia_potencial_gravitacional: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_energia_potencial_gravitacional_method }
    }; export const expClcEnergiaPotencialGravitacional = lc_exp_clc_energia_potencial_gravitacional.src.function;

    let lc_exp_clc_potencial_mecanico: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_potencial_mecanico_method }
    }; export const expClcPotencialMecanico = lc_exp_clc_potencial_mecanico.src.function;

    let lc_exp_clc_potencial_elastico: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_potencial_elastico_method }
    }; export const expClcPotencialElastico = lc_exp_clc_potencial_elastico.src.function;

    let lc_exp_clc_plano_inclinado_sem_atrito: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_plano_inclinado_sem_atrito_method }
    }; export const expClcPlanoInclinadoSemAtrito = lc_exp_clc_plano_inclinado_sem_atrito.src.function;

    let lc_exp_clc_plano_inclinado_com_atrito: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_plano_inclinado_com_atrito_method }
    }; export const expClcPlanoInclinadoComAtrito = lc_exp_clc_plano_inclinado_com_atrito.src.function;

    let lc_exp_clc_aceleracao_plano_inclinado_eixo_x: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_aceleracao_plano_inclinado_eixo_x_method }
    }; export const expClcAceleracaoPlanoInclinadoEixoX = lc_exp_clc_aceleracao_plano_inclinado_eixo_x.src.function;

    let lc_exp_clc_aceleracao_plano_inclinado_eixo_y: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_aceleracao_plano_inclinado_eixo_y_method }
    }; export const expClcAceleracaoPlanoInclinadoEixoY = lc_exp_clc_aceleracao_plano_inclinado_eixo_y.src.function;

    let lc_exp_clc_lancamento_horizontal: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_lancamento_horizontal_method }
    }; export const expClcLancamentoHorizontal = lc_exp_clc_lancamento_horizontal.src.function;

    let lc_exp_clc_altura_max_lancamento_vertical: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_altura_max_lancamento_vertical_method }
    }; export const expClcAlturaMaxLancamentoVertical = lc_exp_clc_altura_max_lancamento_vertical.src.function;

    let lc_exp_clc_alcance_lancamento_vertical: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_alcance_lancamento_vertical_method }
    }; export const expClcAlcanceLancamentoVertical = lc_exp_clc_alcance_lancamento_vertical.src.function;

    let lc_exp_clc_alcance_max_lancamento_vertical: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_alcance_max_lancamento_vertical_method }
    }; export const expClcAlcanceMaxLancamentoVertical = lc_exp_clc_alcance_max_lancamento_vertical.src.function;

    let lc_exp_clc_calor_sensivel: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_calor_sensivel_method }
    }; export const expClcCalorSensivel = lc_exp_clc_calor_sensivel.src.function;

    let lc_exp_clc_calor_latente: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_calor_latente_method }
    }; export const expClcCalorLatente = lc_exp_clc_calor_latente.src.function;

    let lc_exp_clc_leis_de_newton: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_leis_de_newton_method }
    }; export const expClcLeisDeNewton = lc_exp_clc_leis_de_newton.src.function;

    let lc_exp_clc_trabalho: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_trabalho_method }
    }; export const expClcTrabalho = lc_exp_clc_trabalho.src.function;

    let lc_exp_clc_consumo_de_energia: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_consumo_de_energia_method }
    }; export const expClcConsumoDeEnergia = lc_exp_clc_consumo_de_energia.src.function;

    let lc_exp_clc_forca_gravitacional: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_forca_gravitacional_method }
    }; export const expClcForcaGravitacional = lc_exp_clc_forca_gravitacional.src.function;

    let lc_exp_clc_aceleracao_centripeta_movimento_circular_uniforme: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_aceleracao_centripeta_movimento_circular_uniforme_method }
    }; export const expClcAceleracaoCentripetaMCU = lc_exp_clc_aceleracao_centripeta_movimento_circular_uniforme.src.function;

    let lc_exp_clc_velocidade_angular_movimento_circular_uniforme: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_velocidade_angular_movimento_circular_uniforme_method }
    }; export const expClcVelocidadeAngularMCU = lc_exp_clc_velocidade_angular_movimento_circular_uniforme.src.function;

    let lc_exp_clc_velocidade_linear_movimento_circular_uniforme: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_velocidade_linear_movimento_circular_uniforme_method }
    }; export const expClcVelocidadeLinearMCU = lc_exp_clc_velocidade_linear_movimento_circular_uniforme.src.function;

    let lc_exp_clc_torricelli_movimento_circular_uniformente_variado: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_torricelli_movimento_circular_uniformente_variado_method }
    }; export const expClcTorricelliMCUV = lc_exp_clc_torricelli_movimento_circular_uniformente_variado.src.function;

    let lc_exp_clc_aceleracao_angular_movimento_circular_uniformente_variado: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_aceleracao_angular_movimento_circular_uniformente_variado_method }
    }; export const expClcAceleracaoAngularMCUV = lc_exp_clc_aceleracao_angular_movimento_circular_uniformente_variado.src.function;

    let lc_exp_clc_frequencia: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_frequencia_method }
    }; export const expClcFrequencia = lc_exp_clc_frequencia.src.function;

    let lc_exp_clc_periodo: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_periodo_method }
    }; export const expClcPeriodo = lc_exp_clc_periodo.src.function;

    let lc_exp_clc_temperatura: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_temperatura_method }
    }; export const expClcTemperatura = lc_exp_clc_temperatura.src.function;

    let lc_exp_clc_dilatacao_linear: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_dilatacao_linear_method }
    }; export const expClcDilatacaoLinear = lc_exp_clc_dilatacao_linear.src.function;

    let lc_exp_clc_dilatacao_superficial: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_dilatacao_superficial_method }
    }; export const expClcDilatacaoSuperficial = lc_exp_clc_dilatacao_superficial.src.function;

    let lc_exp_clc_dilatacao_volumetrica: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_dilatacao_volumetrica_method }
    }; export const expClcDilatacaoVolumetrica = lc_exp_clc_dilatacao_volumetrica.src.function;

    let lc_exp_clc_principio_fundamental_hidroestatica_hidrodinamica: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_principio_fundamental_hidroestatica_hidrodinamica_method }
    }; export const expClcPrincipioFundamentalHidroestaticaHidrodinamica = lc_exp_clc_principio_fundamental_hidroestatica_hidrodinamica.src.function;

    let lc_exp_clc_empuxo_hidroestatica_hidrodinamica: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_empuxo_hidroestatica_hidrodinamica_method }
    }; export const expClcEmpuxoHidroestaticaHidrodinamica = lc_exp_clc_empuxo_hidroestatica_hidrodinamica.src.function;

    let lc_exp_clc_peso_aparente_hidroestatica_hidrodinamica: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_peso_aparente_hidroestatica_hidrodinamica_method }
    }; export const expClcPesoAparenteHidroestaticaHidrodinamica = lc_exp_clc_peso_aparente_hidroestatica_hidrodinamica.src.function;

    let lc_exp_clc_atrito: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_atrito_method }
    }; export const expClcAtrito = lc_exp_clc_atrito.src.function;

    let lc_exp_clc_lei_de_coulomb: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_lei_de_coulomb_method }
    }; export const expClcLeiDeCoulomb = lc_exp_clc_lei_de_coulomb.src.function;

    let lc_exp_clc_lei_de_ohm: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_lei_de_ohm_method }
    }; export const expClcLeiDeOhm = lc_exp_clc_lei_de_ohm.src.function;

    let lc_exp_clc_efeito_joule: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_efeito_joule_method }
    }; export const expClcEfeitoJoule = lc_exp_clc_efeito_joule.src.function;

    let lc_exp_clc_lei_de_lenz: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_lei_de_lenz_method }
    }; export const expClcLeiDeLenz = lc_exp_clc_lei_de_lenz.src.function;

    let lc_exp_clc_forca_eletromotriz: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_forca_eletromotriz_method }
    }; export const expClcForcaEletromotriz = lc_exp_clc_forca_eletromotriz.src.function;

    let lc_exp_clc_contra_forca_eletromotriz: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_contra_forca_eletromotriz_method }
    }; export const expClcContraForcaEletromotriz = lc_exp_clc_contra_forca_eletromotriz.src.function;

    let lc_exp_clc_efeito_fotoeletrico: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_efeito_fotoeletrico_method }
    }; export const expClcContraEfeitoFotoeletrico = lc_exp_clc_efeito_fotoeletrico.src.function;

    let lc_exp_clc_densidade: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_densidade_method }
    }; export const expClcDensidade = lc_exp_clc_densidade.src.function;

    let lc_exp_clc_titulacao: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_titulacao_method }
    }; export const expClcTitulacao = lc_exp_clc_titulacao.src.function;

    let lc_exp_clc_concentracao: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_concentracao_method }
    }; export const expClcConcentracao = lc_exp_clc_concentracao.src.function;

    let lc_exp_clc_rendimento: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_rendimento_method }
    }; export const expClcRendimento = lc_exp_clc_rendimento.src.function;

    let lc_exp_clc_lei_dos_gases: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_lei_dos_gases_method }
    }; export const expClcLeiDosGases = lc_exp_clc_lei_dos_gases.src.function;

    let lc_exp_clc_regra_de_tres_simples: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_regra_de_tres_simples_method }
    }; export const expClcRegraDeTresSimples = lc_exp_clc_regra_de_tres_simples.src.function;

    let lc_exp_clc_regra_de_tres_composta: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_regra_de_tres_composta_method }
    }; export const expClcRegraDeTresComposta = lc_exp_clc_regra_de_tres_composta.src.function;

    let lc_exp_clc_sistema_de_equacoes: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_sistema_de_equacoes_method }
    }; export const expClcSistemaDeEquacoes = lc_exp_clc_sistema_de_equacoes.src.function;

    let lc_exp_clc_sistema_de_inequacoes: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_sistema_de_inequacoes_method }
    }; export const expClcSistemaDeInequacoes = lc_exp_clc_sistema_de_inequacoes.src.function;

    let lc_exp_clc_sistemas_lineares: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_sistemas_lineares_method }
    }; export const expClcSistemasLineares = lc_exp_clc_sistemas_lineares.src.function;

    let lc_exp_clc_numeros_complexos: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_numeros_complexos_method }
    }; export const expClcNumerosComplexos = lc_exp_clc_numeros_complexos.src.function;

    let lc_exp_clc_juros_simples: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_juros_simples_method }
    }; export const expClcJurosSimples = lc_exp_clc_juros_simples.src.function;

    let lc_exp_clc_juros_compostos: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_juros_compostos_method }
    }; export const expClcJurosCompostos = lc_exp_clc_juros_compostos.src.function;

    let lc_exp_clc_vetores_ga: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_vetores_ga_method }
    }; export const expClcVetoresGA = lc_exp_clc_vetores_ga.src.function;

    let lc_exp_clc_sinalizacao_quadrantes: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_sinalizacao_quadrantes_method }
    }; export const expClcSinalizacaoQuadrantes = lc_exp_clc_sinalizacao_quadrantes.src.function;

    let lc_exp_clc_sinalizacao_octantes: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_sinalizacao_octantes_method }
    }; export const expClcSinalizacaoOctantes = lc_exp_clc_sinalizacao_octantes.src.function;

    let lc_exp_clc_quadrado_de_punnet: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_quadrado_de_punnet_method }
    }; export const expClcQuadradoDePunnet = lc_exp_clc_quadrado_de_punnet.src.function;

    let lc_exp_clc_quadrado_de_punnet_extendido: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_quadrado_de_punnet_extendido_method }
    }; export const expClcQuadradoDePunnetExtendido = lc_exp_clc_quadrado_de_punnet_extendido.src.function;

    let lc_exp_clc_diversos: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_diversos_method }
    }; export const expClcDiversos = lc_exp_clc_diversos.src.function;
    
    let lc_exp_clc_numericos: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_numericos_method }
    }; export const expClcNumericos = lc_exp_clc_numericos.src.function;
    
    let lc_exp_clc_diagrama_venn: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_diagrama_venn_method }
    }; export const expClcDiagramaVenn = lc_exp_clc_diagrama_venn.src.function;
    
    let lc_exp_clc_cartesianos: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_cartesianos_method }
    }; export const expClcCartesianos = lc_exp_clc_cartesianos.src.function;
    
    let lc_exp_clc_geometricos: WComponent = {
      src: { function: WComponents.Calculator.exp_clc_geometricos_method }
    }; export const expClcGeometricos = lc_exp_clc_geometricos.src.function;

  };

}
