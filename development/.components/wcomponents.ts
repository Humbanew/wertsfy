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
  
  export const powOfPow: WComponent["src"]["function"]["constructors"]["#04"]=
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

  export const Shortcuts: WComponent["src"]["object"]["collections"]["shortcuts"]=
    WComponents.Calculator.shortcuts_constant;

  export const common: WComponent["src"]["function"]["constructors"]["#05"]=
    WComponents.Calculator.common_method; 

  export const advanced: WComponent["src"]["function"]["constructors"]["#06"]=
    WComponents.Calculator.advanced_method;

  export namespace Expressions {

    export const expTeoBoltzmann: WComponent["src"]["function"]["constructors"]["#03"]=
      WComponents.Calculator.exp_teo_boltzmann_method;

    export const expTeoCoulomb: WComponent["src"]["function"]["constructors"]["#03"]=
      WComponents.Calculator.exp_teo_coulomb_method;

    export const expTeoGirard: WComponent["src"]["function"]["constructors"]["#07"]=
      WComponents.Calculator.exp_teo_girard_method;

    export const expTeoPascal: WComponent["src"]["function"]["constructors"]["#08"]=
      WComponents.Calculator.exp_teo_pascal_method;

    export const expTeoPitagoras: WComponent["src"]["function"]["constructors"]["#09"]=
      WComponents.Calculator.exp_teo_pitagoras_method;

    export const expTeoPlank: WComponent["src"]["function"]["constructors"]["#03"]=
      WComponents.Calculator.exp_teo_plank_method;

    export const expTeoStevin: WComponent["src"]["function"]["constructors"]["#10"]=
      WComponents.Calculator.exp_teo_stevin_method;

    export const expTeoStirling: WComponent["src"]["function"]["constructors"]["#01"]=
      WComponents.Calculator.exp_teo_stirling_method;

    export const expTeoTalesDeMileto: WComponent["src"]["function"]["constructors"]["#11"]=
      WComponents.Calculator.exp_teo_tales_de_mileto_method;

  //   const exp_eqc_horaria_tempo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_tempo_method }
  //   }; export const expEqcHorariaTempo = exp_eqc_horaria_tempo.src.function;

  //   const exp_eqc_horaria_espaco: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_espaco_method }
  //   }; export const expEqcHorariaEspaco = exp_eqc_horaria_espaco.src.function;

  //   const exp_eqc_horaria_velocidade: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_velocidade_method }
  //   }; export const expEqcHorariaVelocidade = exp_eqc_horaria_velocidade.src.function;

  //   const exp_eqc_horaria_aceleracao: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_aceleracao_method }
  //   }; export const expEqcHorariaAceleracao = exp_eqc_horaria_aceleracao.src.function;

  //   const exp_eqc_horaria_forca: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_forca_method }
  //   }; export const expEqcHorariaForca = exp_eqc_horaria_forca.src.function;

  //   const exp_eqc_horaria_espaco_tempo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_espaco_tempo_method }
  //   }; export const expEqcHorariaEspacoTempo = exp_eqc_horaria_espaco_tempo.src.function;

  //   const exp_eqc_horaria_tempo_movimento_circular_uniformente_variado: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_tempo_movimento_circular_uniformente_variado_method }
  //   }; export const expEqcHorariaTempoMCUV = exp_eqc_horaria_tempo_movimento_circular_uniformente_variado.src.function;

  //   const exp_eqc_horaria_espaco_movimento_circular_uniformente_variado: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_espaco_movimento_circular_uniformente_variado_method }
  //   }; export const expEqcHorariaEspacoMCUV = exp_eqc_horaria_espaco_movimento_circular_uniformente_variado.src.function;
    
  //   const exp_eqc_horaria_posicao_movimento_harmonico_simples: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_posicao_movimento_harmonico_simples_method }
  //   }; export const expEqcHorariaPosicaoMHS = exp_eqc_horaria_posicao_movimento_harmonico_simples.src.function;
    
  //   const exp_eqc_horaria_velocidade_movimento_harmonico_simples: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_velocidade_movimento_harmonico_simples_method }
  //   }; export const expEqcHorariaVelocidadeMHS = exp_eqc_horaria_velocidade_movimento_harmonico_simples.src.function;
    
  //   const exp_eqc_horaria_aceleracao_movimento_harmonico_simples: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_horaria_aceleracao_movimento_harmonico_simples_method }
  //   }; export const expEqcHorariaAceleracaoMHS = exp_eqc_horaria_aceleracao_movimento_harmonico_simples.src.function;
    
  //   const exp_eqc_torricelli: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_torricelli_method }
  //   }; export const expEqcHorariaTorricelli = exp_eqc_torricelli.src.function;
    
  //   const exp_eqc_lagrange: WComponent = {
  //     src: { function: WComponents.Calculator.exp_eqc_lagrange_method }
  //   }; export const expEqcHorariaLagrange = exp_eqc_lagrange.src.function;

  //   const exp_cfatorial: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cfatorial_method }
  //   }; export const expClcFatorial = exp_cfatorial.src.function;
    
  //   const exp_ccombinacao: WComponent = {
  //     src: { function: WComponents.Calculator.exp_ccombinacao_method }
  //   }; export const expClcCombinacao = exp_ccombinacao.src.function;
    
  //   const exp_carranjo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_carranjo_method }
  //   }; export const expClcArranjo = exp_carranjo.src.function;
    
  //   const exp_cprobabilidade: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cprobabilidade_method }
  //   }; export const expClcProbabilidade = exp_cprobabilidade.src.function;
    
  //   const exp_cconjugado_numero_complexo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cconjugado_numero_complexo_method }
  //   }; export const expClcConjugadoNumeroComplexo = exp_cconjugado_numero_complexo.src.function;

  //   const exp_crelacao_euler: WComponent = {
  //     src: { function: WComponents.Calculator.exp_crelacao_euler_method }
  //   }; export const expClcRelacaoEuler = exp_crelacao_euler.src.function;

  //   const exp_cpotencias_de_i: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cpotencias_de_i_method }
  //   }; export const expClcPotenciasDeI = exp_cpotencias_de_i.src.function;

  //   const exp_cporcentagem: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cporcentagem_method }
  //   }; export const expClcPorcentagem = exp_cporcentagem.src.function;

  //   const exp_cdeterminante: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cdeterminante_method }
  //   }; export const expClcDeterminante = exp_cdeterminante.src.function;

  //   const exp_cpolinomios: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cpolinomios_method }
  //   }; export const expClcPolinomios = exp_cpolinomios.src.function;

  //   const exp_cmatrizes: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cmatrizes_method }
  //   }; export const expClcMatrizes = exp_cmatrizes.src.function;

  //   const exp_cvelocidade: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cvelocidade_method }
  //   }; export const expClcVelocidade = exp_cvelocidade.src.function;

  //   const exp_cespaco: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cespaco_method }
  //   }; export const expClcEspaco = exp_cespaco.src.function;

  //   const exp_ctempo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_ctempo_method }
  //   }; export const expClcTempo = exp_ctempo.src.function;

  //   const exp_caceleracao: WComponent = {
  //     src: { function: WComponents.Calculator.exp_caceleracao_method }
  //   }; export const expClcAceleracao = exp_caceleracao.src.function;

  //   const exp_cenergia_cinetica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cenergia_cinetica_method }
  //   }; export const expClcEnergiaCinetica = exp_cenergia_cinetica.src.function;

  //   const exp_cenergia_potencial_elastica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cenergia_potencial_elastica_method }
  //   }; export const expClcEnergiaPotencialElastica = exp_cenergia_potencial_elastica.src.function;

  //   const exp_cenergia_potencial_gravitacional: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cenergia_potencial_gravitacional_method }
  //   }; export const expClcEnergiaPotencialGravitacional = exp_cenergia_potencial_gravitacional.src.function;

  //   const exp_cpotencial_mecanico: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cpotencial_mecanico_method }
  //   }; export const expClcPotencialMecanico = exp_cpotencial_mecanico.src.function;

  //   const exp_cpotencial_elastico: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cpotencial_elastico_method }
  //   }; export const expClcPotencialElastico = exp_cpotencial_elastico.src.function;

  //   const exp_cplano_inclinado_sem_atrito: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cplano_inclinado_sem_atrito_method }
  //   }; export const expClcPlanoInclinadoSemAtrito = exp_cplano_inclinado_sem_atrito.src.function;

  //   const exp_cplano_inclinado_com_atrito: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cplano_inclinado_com_atrito_method }
  //   }; export const expClcPlanoInclinadoComAtrito = exp_cplano_inclinado_com_atrito.src.function;

  //   const exp_caceleracao_plano_inclinado_eixo_x: WComponent = {
  //     src: { function: WComponents.Calculator.exp_caceleracao_plano_inclinado_eixo_x_method }
  //   }; export const expClcAceleracaoPlanoInclinadoEixoX = exp_caceleracao_plano_inclinado_eixo_x.src.function;

  //   const exp_caceleracao_plano_inclinado_eixo_y: WComponent = {
  //     src: { function: WComponents.Calculator.exp_caceleracao_plano_inclinado_eixo_y_method }
  //   }; export const expClcAceleracaoPlanoInclinadoEixoY = exp_caceleracao_plano_inclinado_eixo_y.src.function;

  //   const exp_clancamento_horizontal: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clancamento_horizontal_method }
  //   }; export const expClcLancamentoHorizontal = exp_clancamento_horizontal.src.function;

  //   const exp_caltura_max_lancamento_vertical: WComponent = {
  //     src: { function: WComponents.Calculator.exp_caltura_max_lancamento_vertical_method }
  //   }; export const expClcAlturaMaxLancamentoVertical = exp_caltura_max_lancamento_vertical.src.function;

  //   const exp_calcance_lancamento_vertical: WComponent = {
  //     src: { function: WComponents.Calculator.exp_calcance_lancamento_vertical_method }
  //   }; export const expClcAlcanceLancamentoVertical = exp_calcance_lancamento_vertical.src.function;

  //   const exp_calcance_max_lancamento_vertical: WComponent = {
  //     src: { function: WComponents.Calculator.exp_calcance_max_lancamento_vertical_method }
  //   }; export const expClcAlcanceMaxLancamentoVertical = exp_calcance_max_lancamento_vertical.src.function;

  //   const exp_ccalor_sensivel: WComponent = {
  //     src: { function: WComponents.Calculator.exp_ccalor_sensivel_method }
  //   }; export const expClcCalorSensivel = exp_ccalor_sensivel.src.function;

  //   const exp_ccalor_latente: WComponent = {
  //     src: { function: WComponents.Calculator.exp_ccalor_latente_method }
  //   }; export const expClcCalorLatente = exp_ccalor_latente.src.function;

  //   const exp_cleis_de_newton: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cleis_de_newton_method }
  //   }; export const expClcLeisDeNewton = exp_cleis_de_newton.src.function;

  //   const exp_ctrabalho: WComponent = {
  //     src: { function: WComponents.Calculator.exp_ctrabalho_method }
  //   }; export const expClcTrabalho = exp_ctrabalho.src.function;

  //   const exp_cconsumo_de_energia: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cconsumo_de_energia_method }
  //   }; export const expClcConsumoDeEnergia = exp_cconsumo_de_energia.src.function;

  //   const exp_cforca_gravitacional: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cforca_gravitacional_method }
  //   }; export const expClcForcaGravitacional = exp_cforca_gravitacional.src.function;

  //   const exp_caceleracao_centripeta_movimento_circular_uniforme: WComponent = {
  //     src: { function: WComponents.Calculator.exp_caceleracao_centripeta_movimento_circular_uniforme_method }
  //   }; export const expClcAceleracaoCentripetaMCU = exp_caceleracao_centripeta_movimento_circular_uniforme.src.function;

  //   const exp_cvelocidade_angular_movimento_circular_uniforme: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cvelocidade_angular_movimento_circular_uniforme_method }
  //   }; export const expClcVelocidadeAngularMCU = exp_cvelocidade_angular_movimento_circular_uniforme.src.function;

  //   const exp_cvelocidade_linear_movimento_circular_uniforme: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cvelocidade_linear_movimento_circular_uniforme_method }
  //   }; export const expClcVelocidadeLinearMCU = exp_cvelocidade_linear_movimento_circular_uniforme.src.function;

  //   const exp_ctorricelli_movimento_circular_uniformente_variado: WComponent = {
  //     src: { function: WComponents.Calculator.exp_ctorricelli_movimento_circular_uniformente_variado_method }
  //   }; export const expClcTorricelliMCUV = exp_ctorricelli_movimento_circular_uniformente_variado.src.function;

  //   const exp_caceleracao_angular_movimento_circular_uniformente_variado: WComponent = {
  //     src: { function: WComponents.Calculator.exp_caceleracao_angular_movimento_circular_uniformente_variado_method }
  //   }; export const expClcAceleracaoAngularMCUV = exp_caceleracao_angular_movimento_circular_uniformente_variado.src.function;

  //   const exp_cfrequencia: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cfrequencia_method }
  //   }; export const expClcFrequencia = exp_cfrequencia.src.function;

  //   const exp_cperiodo: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cperiodo_method }
  //   }; export const expClcPeriodo = exp_cperiodo.src.function;

  //   const exp_ctemperatura: WComponent = {
  //     src: { function: WComponents.Calculator.exp_ctemperatura_method }
  //   }; export const expClcTemperatura = exp_ctemperatura.src.function;

  //   const exp_cdilatacao_linear: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cdilatacao_linear_method }
  //   }; export const expClcDilatacaoLinear = exp_cdilatacao_linear.src.function;

  //   const exp_cdilatacao_superficial: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cdilatacao_superficial_method }
  //   }; export const expClcDilatacaoSuperficial = exp_cdilatacao_superficial.src.function;

  //   const exp_cdilatacao_volumetrica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cdilatacao_volumetrica_method }
  //   }; export const expClcDilatacaoVolumetrica = exp_cdilatacao_volumetrica.src.function;

  //   const exp_cprincipio_fundamental_hidroestatica_hidrodinamica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cprincipio_fundamental_hidroestatica_hidrodinamica_method }
  //   }; export const expClcPrincipioFundamentalHidroestaticaHidrodinamica = exp_cprincipio_fundamental_hidroestatica_hidrodinamica.src.function;

  //   const exp_cempuxo_hidroestatica_hidrodinamica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cempuxo_hidroestatica_hidrodinamica_method }
  //   }; export const expClcEmpuxoHidroestaticaHidrodinamica = exp_cempuxo_hidroestatica_hidrodinamica.src.function;

  //   const exp_cpeso_aparente_hidroestatica_hidrodinamica: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cpeso_aparente_hidroestatica_hidrodinamica_method }
  //   }; export const expClcPesoAparenteHidroestaticaHidrodinamica = exp_cpeso_aparente_hidroestatica_hidrodinamica.src.function;

  //   const exp_catrito: WComponent = {
  //     src: { function: WComponents.Calculator.exp_catrito_method }
  //   }; export const expClcAtrito = exp_catrito.src.function;

  //   const exp_clei_de_coulomb: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clei_de_coulomb_method }
  //   }; export const expClcLeiDeCoulomb = exp_clei_de_coulomb.src.function;

  //   const exp_clei_de_ohm: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clei_de_ohm_method }
  //   }; export const expClcLeiDeOhm = exp_clei_de_ohm.src.function;

  //   const exp_cefeito_joule: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cefeito_joule_method }
  //   }; export const expClcEfeitoJoule = exp_cefeito_joule.src.function;

  //   const exp_clei_de_lenz: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clei_de_lenz_method }
  //   }; export const expClcLeiDeLenz = exp_clei_de_lenz.src.function;

  //   const exp_cforca_eletromotriz: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cforca_eletromotriz_method }
  //   }; export const expClcForcaEletromotriz = exp_cforca_eletromotriz.src.function;

  //   const exp_ccontra_forca_eletromotriz: WComponent = {
  //     src: { function: WComponents.Calculator.exp_ccontra_forca_eletromotriz_method }
  //   }; export const expClcContraForcaEletromotriz = exp_ccontra_forca_eletromotriz.src.function;

  //   const exp_cefeito_fotoeletrico: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cefeito_fotoeletrico_method }
  //   }; export const expClcContraEfeitoFotoeletrico = exp_cefeito_fotoeletrico.src.function;

  //   const exp_cdensidade: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cdensidade_method }
  //   }; export const expClcDensidade = exp_cdensidade.src.function;

  //   const exp_ctitulacao: WComponent = {
  //     src: { function: WComponents.Calculator.exp_ctitulacao_method }
  //   }; export const expClcTitulacao = exp_ctitulacao.src.function;

  //   const exp_cconcentracao: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cconcentracao_method }
  //   }; export const expClcConcentracao = exp_cconcentracao.src.function;

  //   const exp_crendimento: WComponent = {
  //     src: { function: WComponents.Calculator.exp_crendimento_method }
  //   }; export const expClcRendimento = exp_crendimento.src.function;

  //   const exp_clei_dos_gases: WComponent = {
  //     src: { function: WComponents.Calculator.exp_clei_dos_gases_method }
  //   }; export const expClcLeiDosGases = exp_clei_dos_gases.src.function;

  //   const exp_cregra_de_tres_simples: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cregra_de_tres_simples_method }
  //   }; export const expClcRegraDeTresSimples = exp_cregra_de_tres_simples.src.function;

  //   const exp_cregra_de_tres_composta: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cregra_de_tres_composta_method }
  //   }; export const expClcRegraDeTresComposta = exp_cregra_de_tres_composta.src.function;

  //   const exp_csistema_de_equacoes: WComponent = {
  //     src: { function: WComponents.Calculator.exp_csistema_de_equacoes_method }
  //   }; export const expClcSistemaDeEquacoes = exp_csistema_de_equacoes.src.function;

  //   const exp_csistema_de_inequacoes: WComponent = {
  //     src: { function: WComponents.Calculator.exp_csistema_de_inequacoes_method }
  //   }; export const expClcSistemaDeInequacoes = exp_csistema_de_inequacoes.src.function;

  //   const exp_csistemas_lineares: WComponent = {
  //     src: { function: WComponents.Calculator.exp_csistemas_lineares_method }
  //   }; export const expClcSistemasLineares = exp_csistemas_lineares.src.function;

  //   const exp_cnumeros_complexos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cnumeros_complexos_method }
  //   }; export const expClcNumerosComplexos = exp_cnumeros_complexos.src.function;

  //   const exp_cjuros_simples: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cjuros_simples_method }
  //   }; export const expClcJurosSimples = exp_cjuros_simples.src.function;

  //   const exp_cjuros_compostos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cjuros_compostos_method }
  //   }; export const expClcJurosCompostos = exp_cjuros_compostos.src.function;

  //   const exp_cvetores_ga: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cvetores_ga_method }
  //   }; export const expClcVetoresGA = exp_cvetores_ga.src.function;

  //   const exp_csinalizacao_quadrantes: WComponent = {
  //     src: { function: WComponents.Calculator.exp_csinalizacao_quadrantes_method }
  //   }; export const expClcSinalizacaoQuadrantes = exp_csinalizacao_quadrantes.src.function;

  //   const exp_csinalizacao_octantes: WComponent = {
  //     src: { function: WComponents.Calculator.exp_csinalizacao_octantes_method }
  //   }; export const expClcSinalizacaoOctantes = exp_csinalizacao_octantes.src.function;

  //   const exp_cquadrado_de_punnet: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cquadrado_de_punnet_method }
  //   }; export const expClcQuadradoDePunnet = exp_cquadrado_de_punnet.src.function;

  //   const exp_cquadrado_de_punnet_extendido: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cquadrado_de_punnet_extendido_method }
  //   }; export const expClcQuadradoDePunnetExtendido = exp_cquadrado_de_punnet_extendido.src.function;

  //   const exp_cdiversos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cdiversos_method }
  //   }; export const expClcDiversos = exp_cdiversos.src.function;
    
  //   const exp_cnumericos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cnumericos_method }
  //   }; export const expClcNumericos = exp_cnumericos.src.function;
    
  //   const exp_cdiagrama_venn: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cdiagrama_venn_method }
  //   }; export const expClcDiagramaVenn = exp_cdiagrama_venn.src.function;
    
  //   const exp_ccartesianos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_ccartesianos_method }
  //   }; export const expClcCartesianos = exp_ccartesianos.src.function;
    
  //   const exp_cgeometricos: WComponent = {
  //     src: { function: WComponents.Calculator.exp_cgeometricos_method }
  //   }; export const expClcGeometricos = exp_cgeometricos.src.function;

  }

}
