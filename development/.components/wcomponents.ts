/// <reference path="../.declarations/warch.d.ts" />
/// <reference path="wcconnection.d.ts" />

import { WComponent } from "../.declarations/warch";
import { WertsfyComponents } from "./wcconnection";
import { WComponents } from "./wcimport";

export namespace LibraryMathematic {

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de avogadro. [_Returns the value of avogadro._]
   */
  export const Avogadro: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.avogadro"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de euler. [_Returns the value of euler._]
   */
  export const Euler: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.euler"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 2. [_Returns the value of the logarithm of 2._]
   */
  export const Logarithm2: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm2"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 2 na base euler. [_Returns the logarithm value of 2 at the Euler base._]
   */
  export const Logarithm2e: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm2e"];
  
  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 10. [_Returns the value of the logarithm of 10._]
   */
  export const Logarithm10: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm10"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 10 na base euler. [_Returns the logarithm value of 10 at the Euler base._]
   */
  export const Logarithm10e: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm10e"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor máximo. [_Returns the max value._]
   */
  export const Maxvalue: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.maxvalue"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor mínimo. [_Returns the min value._]
   */
  export const Minvalue: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.minvalue"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de newton. [_Returns the value of newton._]
   */
  export const Newton: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.newton"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de pi. [_Returns the value of pi._]
   */
  export const Pi: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.pi"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de plank. [_Returns the value of plank._]
   */
  export const Plank: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.plank"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de tesla. [_Returns the value of tesla._]
   */
  export const Tesla: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.tesla"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Coleção de Constante [Constant Collection]``**
   *  
   * Retorna a lista de constantes de raízes quadradas. [_Returns the list of square roots constants._]
   */
  export const SquareRoot: WComponent["src"]["object"]["collections"]["sqrt_cbrt"]=
    WertsfyComponents.source.math["constant.collection.sqrt"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Coleção de Constante [Constant Collection]``**
   *  
   * Retorna a lista de constantes de raízes cúbicas. [_Returns the list of cubic roots constants._]
   */
  export const CubicRoot: WComponent["src"]["object"]["collections"]["sqrt_cbrt"]=
    WertsfyComponents.source.math["constant.collection.cbrt"];

  export const abs: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.abs"]; 

  export const arcsin: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsin"];

  export const arcsinh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsinh"];

  export const arccos: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccos"];

  export const arccosh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosh"];

  export const arctan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arctan"];

  export const arctanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arctanh"];

  export const arcsec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsec"];

  export const arcsech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsech"]

  export const arccosec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosec"];

  export const arccosech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosech"]

  export const arccotan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccotan"];

  export const arccotanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccotanh"]

  export const sqrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sqrt"]
  
  export const cbrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cbrt"]
  
  export const quart: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.quart"];
  
  export const quirt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.quirt"];
  
  export const sexrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sexrt"]
  
  export const seprt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.seprt"];
  
  export const octrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.octrt"];
  
  export const nonrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.nonrt"];
  
  export const decrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.decrt"];
  
  export const sin: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sin"];
  
  export const sinh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sinh"]
  
  export const cos: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cos"];
  
  export const cosh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosh"];
  
  export const tan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.tan"];
  
  export const tanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.tanh"];
  
  export const sec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sec"];
  
  export const sech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sech"];
  
  export const cosec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosec"];
  
  export const cosech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosech"];
  
  export const cotan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cotan"];
  
  export const cotanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cotanh"];
  
  export const pow: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.pow"];
  
  export const powofpow: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.powofpow"]
  
  export const min: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.min"];
  
  export const max: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.max"];
  
  export const random: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.random"];
  
  export const log: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log"];
  
  export const logm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logm1"];
  
  export const logp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logp1"];
  
  export const log2: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2"];
  
  export const log2m1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2m1"];
  
  export const log2p1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2p1"];
  
  export const logx: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logx"];
  
  export const logxm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logxm1"];
  
  export const logxp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logxp1"];
  
  export const ln: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.ln"];
  
  export const lnm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.lnm1"];
  
  export const lnp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.lnp1"];
  
  export const exp: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.exp"];
  
  export const expm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.expm1"];
  
  export const expp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.expp1"];
  
  export const round: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.round"];
  
  export const fround: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.fround"];
  
  export const floor: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.floor"];
  
  export const ceil: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.ceil"];
  
  export const imul: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.imul"];
  
  export const sign: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sign"];
  
  export const trunc: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.trunc"];

}

export namespace LibraryCalculator {

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Coleção de Constante [Constant Collection]``**
   *  
   * Retorna a lista de constantes de atalho da calculadora. [_Returns the list of calculator shortcut constants._]
   */
  export const Shortcuts: WComponent["src"]["object"]["collections"]["shortcuts"]=
    WComponents.Calculator.shortcuts_constant;

  export const common: WComponent["src"]["function"]=
    WComponents.Calculator.common_method; 

  export const advanced: WComponent["src"]["function"]=
    WComponents.Calculator.advanced_method;

  export namespace Expressions {

    export const expTeoBoltzmann: WComponent["src"]["function"]=
      WComponents.Calculator.exp_teo_boltzmann_method;

    export const expTeoCoulomb: WComponent["src"]["function"]=
      WComponents.Calculator.exp_teo_coulomb_method;

    export const expTeoGirard: WComponent["src"]["function"]=
      WComponents.Calculator.exp_teo_girard_method;

    export const expTeoPascal: WComponent["src"]["function"]=
      WComponents.Calculator.exp_teo_pascal_method;

    export const expTeoPitagoras: WComponent["src"]["function"]=
      WComponents.Calculator.exp_teo_pitagoras_method;

    export const expTeoPlank: WComponent["src"]["function"]=
      WComponents.Calculator.exp_teo_plank_method;

    export const expTeoStevin: WComponent["src"]["function"]=
      WComponents.Calculator.exp_teo_stevin_method;

    export const expTeoStirling: WComponent["src"]["function"]=
      WComponents.Calculator.exp_teo_stirling_method;

    export const expTeoTalesDeMileto: WComponent["src"]["function"]=
      WComponents.Calculator.exp_teo_tales_de_mileto_method;

    export const expEqcHorariaTempo: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_horaria_tempo_method;

    export const expEqcHorariaEspaco: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_horaria_espaco_method;

    export const expEqcHorariaVelocidade: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_horaria_velocidade_method;

    export const expEqcHorariaAceleracao: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_horaria_aceleracao_method;

    export const expEqcHorariaForca: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_horaria_forca_method;

    export const expEqcHorariaEspacoTempo: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_horaria_espaco_tempo_method;

    export const expEqcHorariaTempoMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_horaria_tempo_movimento_circular_uniformente_variado_method;

    export const expEqcHorariaEspacoMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_horaria_espaco_movimento_circular_uniformente_variado_method;
    
    export const expEqcHorariaPosicaoMovimentoHarmonicoSimples: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_horaria_posicao_movimento_harmonico_simples_method;
    
    export const expEqcHorariaVelocidadeMovimentoHarmonicoSimples: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_horaria_velocidade_movimento_harmonico_simples_method;
    
    export const expEqcHorariaAceleracaoMovimentoHarmonicoSimples: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_horaria_aceleracao_movimento_harmonico_simples_method;
    
    export const expEqcTorricelli: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_torricelli_method;
    
    export const expEqcLagrange: WComponent["src"]["function"]=
      WComponents.Calculator.exp_eqc_lagrange_method;

    export const expClcFatorial: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_fatorial_method;
    
    export const expClcCombinacao: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_combinacao_method;
    
    export const expClcArranjo: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_arranjo_method;
    
    export const expClcProbabilidade: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_probabilidade_method;
    
    export const expClcConjugadoNumeroComplexo: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_conjugado_numero_complexo_method;

    export const expClcRelacaoEuler: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_relacao_euler_method;

    export const expClcPotenciasDeI: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_potencias_de_i_method;

    export const expClcPorcentagem: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_porcentagem_method;

    export const expClcDeterminante: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_determinante_method;

    export const expClcPolinomios: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_polinomios_method;

    export const expClcMatrizes: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_matrizes_method;

    export const expClcVelocidade: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_velocidade_method;

    export const expClcEspaco: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_espaco_method;

    export const expClcTempo: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_tempo_method;

    export const expClcAceleracao: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_aceleracao_method;

    export const expClcEnergiaCinetica: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_energia_cinetica_method;

    export const expClcEnergiaPotencialElastica: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_energia_potencial_elastica_method;

    export const expClcEnergiaPotencialGravitacional: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_energia_potencial_gravitacional_method;

    export const expClcPotencialMecanico: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_potencial_mecanico_method;

    export const expClcPotencialElastico: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_potencial_elastico_method;

    export const expClcPlanoInclinadoSemAtrito: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_plano_inclinado_sem_atrito_method;

    export const expClcPlanoInclinadoComAtrito: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_plano_inclinado_com_atrito_method;

    export const expClcAceleracaoPlanoInclinadoEixoX: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_aceleracao_plano_inclinado_eixo_x_method;

    export const expClcAceleracaoPlanoInclinadoEixoY: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_aceleracao_plano_inclinado_eixo_y_method;

    export const expClcLancamentoHorizontal: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_lancamento_horizontal_method;

    export const expClcAlturaMaxLancamentoVertical: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_altura_max_lancamento_vertical_method;

    export const expClcAlcanceLancamentoVertical: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_alcance_lancamento_vertical_method;

    export const expClcAlcanceMaxLancamentoVertical: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_alcance_max_lancamento_vertical_method;

    export const expClcCalorSensivel: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_calor_sensivel_method;

    export const expClcCalorLatente: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_calor_latente_method;

    export const expClcLeisDeNewton: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_leis_de_newton_method;

    export const expClcTrabalho: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_trabalho_method;

    export const expClcConsumoDeEnergia: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_consumo_de_energia_method;

    export const expClcForcaGravitacional: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_forca_gravitacional_method;

    export const expClcAceleracaoCentripetaMovimentoCircularUniforme: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_aceleracao_centripeta_movimento_circular_uniforme_method;

    export const expClcVelocidadeAngularMovimentoCircularUniforme: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_velocidade_angular_movimento_circular_uniforme_method;

    export const expClcVelocidadeLinearMovimentoCircularUniforme: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_velocidade_linear_movimento_circular_uniforme_method;

    export const expClcTorricelliMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_torricelli_movimento_circular_uniformente_variado_method;

    export const expClcAceleracaoAngularMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_aceleracao_angular_movimento_circular_uniformente_variado_method;

    export const expClcfrequencia: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_frequencia_method;

    export const expClcPeriodo: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_periodo_method;

    export const expClcTemperatura: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_temperatura_method;

    export const expClcDilatacaoLinear: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_dilatacao_linear_method;

    export const expClcDilatacaoSuperficial: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_dilatacao_superficial_method;

    export const expClcDilatacaoVolumetrica: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_dilatacao_volumetrica_method;

    export const expClcPrincipioFundamentalHidroestaticaHidrodinamica: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_principio_fundamental_hidroestatica_hidrodinamica_method;

    export const expClcEmpuxoHidroestaticaHidrodinamica: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_empuxo_hidroestatica_hidrodinamica_method;

    export const expClcPesoAparenteHidroestaticaHidrodinamica: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_peso_aparente_hidroestatica_hidrodinamica_method;

    export const expClcAtrito: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_atrito_method;

    export const expClcLeiDeCoulomb: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_lei_de_coulomb_method;

    export const expClcLeideOhm: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_lei_de_ohm_method;

    export const expClcEfeitoJoule: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_efeito_joule_method;

    export const expClcLeiDeLenz: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_lei_de_lenz_method;

    export const expClcForcaEletromotriz: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_forca_eletromotriz_method;

    export const expClcContraForcaEletromotriz: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_contra_forca_eletromotriz_method;

    export const expClcEfeitoFotoeletrico: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_efeito_fotoeletrico_method;

    export const expClcDensidade: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_densidade_method;

    export const expClcTitulacao: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_titulacao_method;

    export const expClcConcentracao: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_concentracao_method;

    export const expClcRendimento: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_rendimento_method;

    export const expClcLeiDosGases: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_lei_dos_gases_method;

    export const expClcRegraDeTresSimples: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_regra_de_tres_simples_method;

    export const expClcRegraDeTresComposta: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_regra_de_tres_composta_method;

    export const expClcSistemaDeEquacoes: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_sistema_de_equacoes_method;

    export const expClcSistemaDeInequacoes: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_sistema_de_inequacoes_method;

    export const expClcSistemasLineares: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_sistemas_lineares_method;

    export const expClcnumerosComplexos: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_numeros_complexos_method;

    export const expClcJurosSimples: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_juros_simples_method;

    export const expClcJurosCompostos: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_juros_compostos_method;

    export const expClcSinalizacaoQuadrantes: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_sinalizacao_quadrantes_method;

    export const expClcSinalizacaoOctantes: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_sinalizacao_octantes_method;

    export const expClcQuadradoDePunnet: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_quadrado_de_punnet_method;

    export const expClcQuadradoDePunnetExtendido: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_quadrado_de_punnet_extendido_method;

    export const expClcDiversos: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_diversos_method;
    
    export const expClcNumericos: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_numericos_method;
    
    export const expClcDiagramaVenn: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_diagrama_venn_method;
    
    export const expClcCartesianos: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_cartesianos_method;
    
    export const expClcGeometricos: WComponent["src"]["function"]=
      WComponents.Calculator.exp_clc_geometricos_method;

  }

}
