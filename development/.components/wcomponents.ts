/// <reference path="../.declarations/warch.d.ts" />

import { WComponent } from "../.declarations/warch";
import { WComponents } from "./wcimport";

export namespace LibraryMathematic {

  export const Avogadro: WComponent["src"]["number"]=
    WComponents.Mathematic.avogadro_constant;  

  export const Euler: WComponent["src"]["number"]=
    WComponents.Mathematic.euler_constant; 

  export const Logarithm2: WComponent["src"]["number"]=
    WComponents.Mathematic.logarithm2_constant; 

  export const Logarithm2e: WComponent["src"]["number"]=
    WComponents.Mathematic.logarithm2e_constant; 
  
  export const Logarithm10: WComponent["src"]["number"]=
    WComponents.Mathematic.logarithm10_constant;

  export const Logarithm10e: WComponent["src"]["number"]=
    WComponents.Mathematic.logarithm10e_constant;

  export const Maxvalue: WComponent["src"]["number"]=
    WComponents.Mathematic.maxvalue_constant;

  export const Minvalue: WComponent["src"]["number"]=
    WComponents.Mathematic.minvalue_constant;

  export const Newton: WComponent["src"]["number"]=
    WComponents.Mathematic.newton_constant;

  export const Pi: WComponent["src"]["number"]=
    WComponents.Mathematic.pi_constant;

  export const Plank: WComponent["src"]["number"]=
    WComponents.Mathematic.plank_constant; 

  export const Tesla: WComponent["src"]["number"]=
    WComponents.Mathematic.tesla_constant;

  export const SquareRoot: WComponent["src"]["object"]["collections"]["sqrt_cbrt"]=
    WComponents.Mathematic.square_root_constant_collection;

  export const CubicRoot: WComponent["src"]["object"]["collections"]["sqrt_cbrt"]=
    WComponents.Mathematic.cubic_root_constant_collection;

  export const abs: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.abs_method; 

  export const arcsin: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arcsin_method;

  export const arcsinh: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arcsinh_method;

  export const arccos: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arccos_method;

  export const arccosh: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arccosh_method;

  export const arctan: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arctan_method;

  export const arctanh: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arctanh_method;

  export const arcsec: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arcsec_method;

  export const arcsech: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arcsech_method;

  export const arccosec: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arccosec_method;

  export const arccosech: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arccosech_method;

  export const arccotan: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arccotan_method;

  export const arccotanh: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.arccotanh_method;

  export const sqrt: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.sqrt_method;
  
  export const cbrt: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.cbrt_method;
  
  export const quart: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.quart_method;
  
  export const quirt: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.quirt_method;
  
  export const sexrt: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.sexrt_method;
  
  export const seprt: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.seprt_method;
  
  export const octrt: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.octrt_method;
  
  export const nonrt: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.nonrt_method;
  
  export const decrt: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.decrt_method;
  
  export const sin: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.sin_method;
  
  export const sinh: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.sinh_method;
  
  export const cos: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.cos_method;
  
  export const cosh: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.cosh_method;
  
  export const tan: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.tan_method;
  
  export const tanh: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.tanh_method;
  
  export const sec: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.sec_method;
  
  export const sech: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.sech_method;
  
  export const cosec: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.cosec_method;
  
  export const cosech: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.cosech_method;
  
  export const cotan: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.cotan_method;
  
  export const cotanh: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.cotanh_method;
  
  export const pow: WComponent["src"]["function"]["constructors"]["#03"]=
    WComponents.Mathematic.pow_method;
  
  export const powofpow: WComponent["src"]["function"]["constructors"]["#04"]=
    WComponents.Mathematic.powofpow_method;
  
  export const min: WComponent["src"]["function"]["constructors"]["#02"]=
    WComponents.Mathematic.min_method;
  
  export const max: WComponent["src"]["function"]["constructors"]["#02"]=
    WComponents.Mathematic.max_method;
  
  export const random: WComponent["src"]["function"]["constructors"]["#00"]=
    WComponents.Mathematic.random_method;
  
  export const log: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.log_method;
  
  export const logm1: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.logm1_method;
  
  export const logp1: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.logp1_method;
  
  export const log2: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.log2_method;
  
  export const log2m1: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.log2m1_method;
  
  export const log2p1: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.log2p1_method;
  
  export const logx: WComponent["src"]["function"]["constructors"]["#03"]=
    WComponents.Mathematic.logx_method;
  
  export const logxm1: WComponent["src"]["function"]["constructors"]["#03"]=
    WComponents.Mathematic.logxm1_method;
  
  export const logxp1: WComponent["src"]["function"]["constructors"]["#03"]=
    WComponents.Mathematic.logxp1_method;
  
  export const ln: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.ln_method;
  
  export const lnm1: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.lnm1_method;
  
  export const lnp1: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.lnp1_method;
  
  export const exp: WComponent["src"]["function"]["constructors"]["#03"]=
    WComponents.Mathematic.exp_method;
  
  export const expm1: WComponent["src"]["function"]["constructors"]["#03"]=
    WComponents.Mathematic.expm1_method;
  
  export const expp1: WComponent["src"]["function"]["constructors"]["#03"]=
    WComponents.Mathematic.expp1_method;
  
  export const round: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.round_method;
  
  export const fround: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.fround_method;
  
  export const floor: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.floor_method;
  
  export const ceil: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.ceil_method;
  
  export const imul: WComponent["src"]["function"]["constructors"]["#03"]=
    WComponents.Mathematic.imul_method;
  
  export const sign: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.sign_method;
  
  export const trunc: WComponent["src"]["function"]["constructors"]["#01"]=
    WComponents.Mathematic.trunc_method;

}

export namespace LibraryCalculator {

  const lc_shortcuts: WComponent = {
    src: { object: { collections: { shortcuts: WComponents.Calculator.shortcuts_constant } } }
  }; export const Shortcuts = lc_shortcuts.src.object.collections.shortcuts;

  // const lc_common: WComponent = {
  //   src: { function: WComponents.Calculator.common_method }
  // }; export const common = lc_common.src.function; 

  // const lc_advanced: WComponent = {
  //   src: { function: WComponents.Calculator.advanced_method }
  // }; export const advanced = lc_advanced.src.function;

  // export namespace Expressions {

  //   const lc_exp_teo_boltzmann: WComponent = {
  //     src: { function: WComponents.Calculator.exp_teo_boltzmann_method }
  //   }; export const expTeoBoltzmann = lc_exp_teo_boltzmann.src.function;

  //   const lc_exp_teo_coulomb: WComponent = {
  //     src: { function: WComponents.Calculator.exp_teo_coulomb_method }
  //   }; export const expTeoCoulomb = lc_exp_teo_coulomb.src.function;

  //   const lc_exp_teo_girard: WComponent = {
  //     src: { function: WComponents.Calculator.exp_teo_girard_method }
  //   }; export const expTeoGirard = lc_exp_teo_girard.src.function;

  //   const lc_exp_teo_pascal: WComponent = {
  //     src: { function: WComponents.Calculator.exp_teo_pascal_method }
  //   }; export const expTeoPascal = lc_exp_teo_pascal.src.function;

  //   const lc_exp_teo_pitagoras: WComponent = {
  //     src: { function: WComponents.Calculator.exp_teo_pitagoras_method }
  //   }; export const expTeoPitagoras = lc_exp_teo_pitagoras.src.function;

  //   const lc_exp_teo_plank: WComponent = {
  //     src: { function: WComponents.Calculator.exp_teo_plank_method }
  //   }; export const expTeoPlank = lc_exp_teo_plank.src.function;

  //   const lc_exp_teo_stevin: WComponent = {
  //     src: { function: WComponents.Calculator.exp_teo_stevin_method }
  //   }; export const expTeoStevin = lc_exp_teo_stevin.src.function;

  //   const lc_exp_teo_stirling: WComponent = {
  //     src: { function: WComponents.Calculator.exp_teo_stirling_method }
  //   }; export const expTeoStirling = lc_exp_teo_stirling.src.function;

  //   const lc_exp_teo_tales_de_mileto: WComponent = {
  //     src: { function: WComponents.Calculator.exp_teo_tales_de_mileto_method }
  //   }; export const expTeoTalesDeMileto = lc_exp_teo_tales_de_mileto.src.function;

  //   const lc_exp_eqc_horaria_tempo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_tempo_method }
  //   }; export const expEqcHorariaTempo = lc_exp_eqc_horaria_tempo.src.function;

  //   const lc_exp_eqc_horaria_espaco: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_espaco_method }
  //   }; export const expEqcHorariaEspaco = lc_exp_eqc_horaria_espaco.src.function;

  //   const lc_exp_eqc_horaria_velocidade: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_velocidade_method }
  //   }; export const expEqcHorariaVelocidade = lc_exp_eqc_horaria_velocidade.src.function;

  //   const lc_exp_eqc_horaria_aceleracao: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_aceleracao_method }
  //   }; export const expEqcHorariaAceleracao = lc_exp_eqc_horaria_aceleracao.src.function;

  //   const lc_exp_eqc_horaria_forca: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_forca_method }
  //   }; export const expEqcHorariaForca = lc_exp_eqc_horaria_forca.src.function;

  //   const lc_exp_eqc_horaria_espaco_tempo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_espaco_tempo_method }
  //   }; export const expEqcHorariaEspacoTempo = lc_exp_eqc_horaria_espaco_tempo.src.function;

  //   const lc_exp_eqc_horaria_tempo_movimento_circular_uniformente_variado: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_tempo_movimento_circular_uniformente_variado_method }
  //   }; export const expEqcHorariaTempoMCUV = lc_exp_eqc_horaria_tempo_movimento_circular_uniformente_variado.src.function;

  //   const lc_exp_eqc_horaria_espaco_movimento_circular_uniformente_variado: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_espaco_movimento_circular_uniformente_variado_method }
  //   }; export const expEqcHorariaEspacoMCUV = lc_exp_eqc_horaria_espaco_movimento_circular_uniformente_variado.src.function;
    
  //   const lc_exp_eqc_horaria_posicao_movimento_harmonico_simples: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_posicao_movimento_harmonico_simples_method }
  //   }; export const expEqcHorariaPosicaoMHS = lc_exp_eqc_horaria_posicao_movimento_harmonico_simples.src.function;
    
  //   const lc_exp_eqc_horaria_velocidade_movimento_harmonico_simples: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_velocidade_movimento_harmonico_simples_method }
  //   }; export const expEqcHorariaVelocidadeMHS = lc_exp_eqc_horaria_velocidade_movimento_harmonico_simples.src.function;
    
  //   const lc_exp_eqc_horaria_aceleracao_movimento_harmonico_simples: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_aceleracao_movimento_harmonico_simples_method }
  //   }; export const expEqcHorariaAceleracaoMHS = lc_exp_eqc_horaria_aceleracao_movimento_harmonico_simples.src.function;
    
  //   const lc_exp_eqc_torricelli: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_torricelli_method }
  //   }; export const expEqcHorariaTorricelli = lc_exp_eqc_torricelli.src.function;
    
  //   const lc_exp_eqc_lagrange: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_lagrange_method }
  //   }; export const expEqcHorariaLagrange = lc_exp_eqc_lagrange.src.function;


  //   const lc_exp_clc_fatorial: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_fatorial_method }
  //   }; export const expClcFatorial = lc_exp_clc_fatorial.src.function;
    
  //   const lc_exp_clc_combinacao: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_combinacao_method }
  //   }; export const expClcCombinacao = lc_exp_clc_combinacao.src.function;
    
  //   const lc_exp_clc_arranjo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_arranjo_method }
  //   }; export const expClcArranjo = lc_exp_clc_arranjo.src.function;
    
  //   const lc_exp_clc_probabilidade: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_probabilidade_method }
  //   }; export const expClcProbabilidade = lc_exp_clc_probabilidade.src.function;
    
  //   const lc_exp_clc_conjugado_numero_complexo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_conjugado_numero_complexo_method }
  //   }; export const expClcConjugadoNumeroComplexo = lc_exp_clc_conjugado_numero_complexo.src.function;

  //   const lc_exp_clc_relacao_euler: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_relacao_euler_method }
  //   }; export const expClcRelacaoEuler = lc_exp_clc_relacao_euler.src.function;

  //   const lc_exp_clc_potencias_de_i: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_potencias_de_i_method }
  //   }; export const expClcPotenciasDeI = lc_exp_clc_potencias_de_i.src.function;

  //   const lc_exp_clc_porcentagem: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_porcentagem_method }
  //   }; export const expClcPorcentagem = lc_exp_clc_porcentagem.src.function;

  //   const lc_exp_clc_determinante: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_determinante_method }
  //   }; export const expClcDeterminante = lc_exp_clc_determinante.src.function;

  //   const lc_exp_clc_polinomios: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_polinomios_method }
  //   }; export const expClcPolinomios = lc_exp_clc_polinomios.src.function;

  //   const lc_exp_clc_matrizes: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_matrizes_method }
  //   }; export const expClcMatrizes = lc_exp_clc_matrizes.src.function;

  //   const lc_exp_clc_velocidade: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_velocidade_method }
  //   }; export const expClcVelocidade = lc_exp_clc_velocidade.src.function;

  //   const lc_exp_clc_espaco: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_espaco_method }
  //   }; export const expClcEspaco = lc_exp_clc_espaco.src.function;

  //   const lc_exp_clc_tempo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_tempo_method }
  //   }; export const expClcTempo = lc_exp_clc_tempo.src.function;

  //   const lc_exp_clc_aceleracao: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_aceleracao_method }
  //   }; export const expClcAceleracao = lc_exp_clc_aceleracao.src.function;

  //   const lc_exp_clc_energia_cinetica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_energia_cinetica_method }
  //   }; export const expClcEnergiaCinetica = lc_exp_clc_energia_cinetica.src.function;

  //   const lc_exp_clc_energia_potencial_elastica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_energia_potencial_elastica_method }
  //   }; export const expClcEnergiaPotencialElastica = lc_exp_clc_energia_potencial_elastica.src.function;

  //   const lc_exp_clc_energia_potencial_gravitacional: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_energia_potencial_gravitacional_method }
  //   }; export const expClcEnergiaPotencialGravitacional = lc_exp_clc_energia_potencial_gravitacional.src.function;

  //   const lc_exp_clc_potencial_mecanico: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_potencial_mecanico_method }
  //   }; export const expClcPotencialMecanico = lc_exp_clc_potencial_mecanico.src.function;

  //   const lc_exp_clc_potencial_elastico: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_potencial_elastico_method }
  //   }; export const expClcPotencialElastico = lc_exp_clc_potencial_elastico.src.function;

  //   const lc_exp_clc_plano_inclinado_sem_atrito: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_plano_inclinado_sem_atrito_method }
  //   }; export const expClcPlanoInclinadoSemAtrito = lc_exp_clc_plano_inclinado_sem_atrito.src.function;

  //   const lc_exp_clc_plano_inclinado_com_atrito: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_plano_inclinado_com_atrito_method }
  //   }; export const expClcPlanoInclinadoComAtrito = lc_exp_clc_plano_inclinado_com_atrito.src.function;

  //   const lc_exp_clc_aceleracao_plano_inclinado_eixo_x: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_aceleracao_plano_inclinado_eixo_x_method }
  //   }; export const expClcAceleracaoPlanoInclinadoEixoX = lc_exp_clc_aceleracao_plano_inclinado_eixo_x.src.function;

  //   const lc_exp_clc_aceleracao_plano_inclinado_eixo_y: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_aceleracao_plano_inclinado_eixo_y_method }
  //   }; export const expClcAceleracaoPlanoInclinadoEixoY = lc_exp_clc_aceleracao_plano_inclinado_eixo_y.src.function;

  //   const lc_exp_clc_lancamento_horizontal: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_lancamento_horizontal_method }
  //   }; export const expClcLancamentoHorizontal = lc_exp_clc_lancamento_horizontal.src.function;

  //   const lc_exp_clc_altura_max_lancamento_vertical: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_altura_max_lancamento_vertical_method }
  //   }; export const expClcAlturaMaxLancamentoVertical = lc_exp_clc_altura_max_lancamento_vertical.src.function;

  //   const lc_exp_clc_alcance_lancamento_vertical: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_alcance_lancamento_vertical_method }
  //   }; export const expClcAlcanceLancamentoVertical = lc_exp_clc_alcance_lancamento_vertical.src.function;

  //   const lc_exp_clc_alcance_max_lancamento_vertical: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_alcance_max_lancamento_vertical_method }
  //   }; export const expClcAlcanceMaxLancamentoVertical = lc_exp_clc_alcance_max_lancamento_vertical.src.function;

  //   const lc_exp_clc_calor_sensivel: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_calor_sensivel_method }
  //   }; export const expClcCalorSensivel = lc_exp_clc_calor_sensivel.src.function;

  //   const lc_exp_clc_calor_latente: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_calor_latente_method }
  //   }; export const expClcCalorLatente = lc_exp_clc_calor_latente.src.function;

  //   const lc_exp_clc_leis_de_newton: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_leis_de_newton_method }
  //   }; export const expClcLeisDeNewton = lc_exp_clc_leis_de_newton.src.function;

  //   const lc_exp_clc_trabalho: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_trabalho_method }
  //   }; export const expClcTrabalho = lc_exp_clc_trabalho.src.function;

  //   const lc_exp_clc_consumo_de_energia: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_consumo_de_energia_method }
  //   }; export const expClcConsumoDeEnergia = lc_exp_clc_consumo_de_energia.src.function;

  //   const lc_exp_clc_forca_gravitacional: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_forca_gravitacional_method }
  //   }; export const expClcForcaGravitacional = lc_exp_clc_forca_gravitacional.src.function;

  //   const lc_exp_clc_aceleracao_centripeta_movimento_circular_uniforme: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_aceleracao_centripeta_movimento_circular_uniforme_method }
  //   }; export const expClcAceleracaoCentripetaMCU = lc_exp_clc_aceleracao_centripeta_movimento_circular_uniforme.src.function;

  //   const lc_exp_clc_velocidade_angular_movimento_circular_uniforme: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_velocidade_angular_movimento_circular_uniforme_method }
  //   }; export const expClcVelocidadeAngularMCU = lc_exp_clc_velocidade_angular_movimento_circular_uniforme.src.function;

  //   const lc_exp_clc_velocidade_linear_movimento_circular_uniforme: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_velocidade_linear_movimento_circular_uniforme_method }
  //   }; export const expClcVelocidadeLinearMCU = lc_exp_clc_velocidade_linear_movimento_circular_uniforme.src.function;

  //   const lc_exp_clc_torricelli_movimento_circular_uniformente_variado: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_torricelli_movimento_circular_uniformente_variado_method }
  //   }; export const expClcTorricelliMCUV = lc_exp_clc_torricelli_movimento_circular_uniformente_variado.src.function;

  //   const lc_exp_clc_aceleracao_angular_movimento_circular_uniformente_variado: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_aceleracao_angular_movimento_circular_uniformente_variado_method }
  //   }; export const expClcAceleracaoAngularMCUV = lc_exp_clc_aceleracao_angular_movimento_circular_uniformente_variado.src.function;

  //   const lc_exp_clc_frequencia: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_frequencia_method }
  //   }; export const expClcFrequencia = lc_exp_clc_frequencia.src.function;

  //   const lc_exp_clc_periodo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_periodo_method }
  //   }; export const expClcPeriodo = lc_exp_clc_periodo.src.function;

  //   const lc_exp_clc_temperatura: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_temperatura_method }
  //   }; export const expClcTemperatura = lc_exp_clc_temperatura.src.function;

  //   const lc_exp_clc_dilatacao_linear: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_dilatacao_linear_method }
  //   }; export const expClcDilatacaoLinear = lc_exp_clc_dilatacao_linear.src.function;

  //   const lc_exp_clc_dilatacao_superficial: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_dilatacao_superficial_method }
  //   }; export const expClcDilatacaoSuperficial = lc_exp_clc_dilatacao_superficial.src.function;

  //   const lc_exp_clc_dilatacao_volumetrica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_dilatacao_volumetrica_method }
  //   }; export const expClcDilatacaoVolumetrica = lc_exp_clc_dilatacao_volumetrica.src.function;

  //   const lc_exp_clc_principio_fundamental_hidroestatica_hidrodinamica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_principio_fundamental_hidroestatica_hidrodinamica_method }
  //   }; export const expClcPrincipioFundamentalHidroestaticaHidrodinamica = lc_exp_clc_principio_fundamental_hidroestatica_hidrodinamica.src.function;

  //   const lc_exp_clc_empuxo_hidroestatica_hidrodinamica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_empuxo_hidroestatica_hidrodinamica_method }
  //   }; export const expClcEmpuxoHidroestaticaHidrodinamica = lc_exp_clc_empuxo_hidroestatica_hidrodinamica.src.function;

  //   const lc_exp_clc_peso_aparente_hidroestatica_hidrodinamica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_peso_aparente_hidroestatica_hidrodinamica_method }
  //   }; export const expClcPesoAparenteHidroestaticaHidrodinamica = lc_exp_clc_peso_aparente_hidroestatica_hidrodinamica.src.function;

  //   const lc_exp_clc_atrito: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_atrito_method }
  //   }; export const expClcAtrito = lc_exp_clc_atrito.src.function;

  //   const lc_exp_clc_lei_de_coulomb: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_lei_de_coulomb_method }
  //   }; export const expClcLeiDeCoulomb = lc_exp_clc_lei_de_coulomb.src.function;

  //   const lc_exp_clc_lei_de_ohm: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_lei_de_ohm_method }
  //   }; export const expClcLeiDeOhm = lc_exp_clc_lei_de_ohm.src.function;

  //   const lc_exp_clc_efeito_joule: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_efeito_joule_method }
  //   }; export const expClcEfeitoJoule = lc_exp_clc_efeito_joule.src.function;

  //   const lc_exp_clc_lei_de_lenz: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_lei_de_lenz_method }
  //   }; export const expClcLeiDeLenz = lc_exp_clc_lei_de_lenz.src.function;

  //   const lc_exp_clc_forca_eletromotriz: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_forca_eletromotriz_method }
  //   }; export const expClcForcaEletromotriz = lc_exp_clc_forca_eletromotriz.src.function;

  //   const lc_exp_clc_contra_forca_eletromotriz: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_contra_forca_eletromotriz_method }
  //   }; export const expClcContraForcaEletromotriz = lc_exp_clc_contra_forca_eletromotriz.src.function;

  //   const lc_exp_clc_efeito_fotoeletrico: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_efeito_fotoeletrico_method }
  //   }; export const expClcContraEfeitoFotoeletrico = lc_exp_clc_efeito_fotoeletrico.src.function;

  //   const lc_exp_clc_densidade: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_densidade_method }
  //   }; export const expClcDensidade = lc_exp_clc_densidade.src.function;

  //   const lc_exp_clc_titulacao: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_titulacao_method }
  //   }; export const expClcTitulacao = lc_exp_clc_titulacao.src.function;

  //   const lc_exp_clc_concentracao: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_concentracao_method }
  //   }; export const expClcConcentracao = lc_exp_clc_concentracao.src.function;

  //   const lc_exp_clc_rendimento: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_rendimento_method }
  //   }; export const expClcRendimento = lc_exp_clc_rendimento.src.function;

  //   const lc_exp_clc_lei_dos_gases: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_lei_dos_gases_method }
  //   }; export const expClcLeiDosGases = lc_exp_clc_lei_dos_gases.src.function;

  //   const lc_exp_clc_regra_de_tres_simples: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_regra_de_tres_simples_method }
  //   }; export const expClcRegraDeTresSimples = lc_exp_clc_regra_de_tres_simples.src.function;

  //   const lc_exp_clc_regra_de_tres_composta: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_regra_de_tres_composta_method }
  //   }; export const expClcRegraDeTresComposta = lc_exp_clc_regra_de_tres_composta.src.function;

  //   const lc_exp_clc_sistema_de_equacoes: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_sistema_de_equacoes_method }
  //   }; export const expClcSistemaDeEquacoes = lc_exp_clc_sistema_de_equacoes.src.function;

  //   const lc_exp_clc_sistema_de_inequacoes: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_sistema_de_inequacoes_method }
  //   }; export const expClcSistemaDeInequacoes = lc_exp_clc_sistema_de_inequacoes.src.function;

  //   const lc_exp_clc_sistemas_lineares: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_sistemas_lineares_method }
  //   }; export const expClcSistemasLineares = lc_exp_clc_sistemas_lineares.src.function;

  //   const lc_exp_clc_numeros_complexos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_numeros_complexos_method }
  //   }; export const expClcNumerosComplexos = lc_exp_clc_numeros_complexos.src.function;

  //   const lc_exp_clc_juros_simples: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_juros_simples_method }
  //   }; export const expClcJurosSimples = lc_exp_clc_juros_simples.src.function;

  //   const lc_exp_clc_juros_compostos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_juros_compostos_method }
  //   }; export const expClcJurosCompostos = lc_exp_clc_juros_compostos.src.function;

  //   const lc_exp_clc_vetores_ga: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_vetores_ga_method }
  //   }; export const expClcVetoresGA = lc_exp_clc_vetores_ga.src.function;

  //   const lc_exp_clc_sinalizacao_quadrantes: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_sinalizacao_quadrantes_method }
  //   }; export const expClcSinalizacaoQuadrantes = lc_exp_clc_sinalizacao_quadrantes.src.function;

  //   const lc_exp_clc_sinalizacao_octantes: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_sinalizacao_octantes_method }
  //   }; export const expClcSinalizacaoOctantes = lc_exp_clc_sinalizacao_octantes.src.function;

  //   const lc_exp_clc_quadrado_de_punnet: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_quadrado_de_punnet_method }
  //   }; export const expClcQuadradoDePunnet = lc_exp_clc_quadrado_de_punnet.src.function;

  //   const lc_exp_clc_quadrado_de_punnet_extendido: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_quadrado_de_punnet_extendido_method }
  //   }; export const expClcQuadradoDePunnetExtendido = lc_exp_clc_quadrado_de_punnet_extendido.src.function;

  //   const lc_exp_clc_diversos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_diversos_method }
  //   }; export const expClcDiversos = lc_exp_clc_diversos.src.function;
    
  //   const lc_exp_clc_numericos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_numericos_method }
  //   }; export const expClcNumericos = lc_exp_clc_numericos.src.function;
    
  //   const lc_exp_clc_diagrama_venn: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_diagrama_venn_method }
  //   }; export const expClcDiagramaVenn = lc_exp_clc_diagrama_venn.src.function;
    
  //   const lc_exp_clc_cartesianos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_cartesianos_method }
  //   }; export const expClcCartesianos = lc_exp_clc_cartesianos.src.function;
    
  //   const lc_exp_clc_geometricos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clc_geometricos_method }
  //   }; export const expClcGeometricos = lc_exp_clc_geometricos.src.function;

  // };

}
