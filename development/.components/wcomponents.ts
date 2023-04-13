/// <reference path="../.declarations/warch.d.ts" />
/// <reference path="wcconnection.d.ts" />

import { WComponent } from "../.declarations/warch";
import { WertsfyComponents } from "./wcconnection";

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

  /** */
  export const abs: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.abs"]; 

  /** */
  export const arcsin: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsin"];

  /** */
  export const arcsinh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsinh"];

  /** */
  export const arccos: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccos"];

  /** */
  export const arccosh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosh"];

  /** */
  export const arctan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arctan"];

  /** */
  export const arctanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arctanh"];

  /** */
  export const arcsec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsec"];

  /** */
  export const arcsech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsech"]

  /** */
  export const arccosec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosec"];

  /** */
  export const arccosech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosech"]

  /** */
  export const arccotan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccotan"];

  /** */
  export const arccotanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccotanh"]

  /** */
  export const sqrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sqrt"]

  /** */
  export const cbrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cbrt"]

  /** */
  export const quart: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.quart"];

  /** */
  export const quirt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.quirt"];

  /** */
  export const sexrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sexrt"]

  /** */
  export const seprt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.seprt"];

  /** */
  export const octrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.octrt"];

  /** */
  export const nonrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.nonrt"];

  /** */
  export const decrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.decrt"];

  /** */
  export const sin: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sin"];

  /** */
  export const sinh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sinh"]

  /** */
  export const cos: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cos"];

  /** */
  export const cosh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosh"];

  /** */
  export const tan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.tan"];

  /** */
  export const tanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.tanh"];

  /** */
  export const sec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sec"];

  /** */
  export const sech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sech"];

  /** */
  export const cosec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosec"];

  /** */
  export const cosech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosech"];

  /** */
  export const cotan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cotan"];

  /** */
  export const cotanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cotanh"];

  /** */
  export const pow: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.pow"];

  /** */
  export const powofpow: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.powofpow"]

  /** */
  export const min: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.min"];

  /** */
  export const max: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.max"];

  /** */
  export const random: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.random"];

  /** */
  export const log: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log"];

  /** */
  export const logm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logm1"];

  /** */
  export const logp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logp1"];

  /** */
  export const log2: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2"];

  /** */
  export const log2m1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2m1"];

  /** */
  export const log2p1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2p1"];

  /** */
  export const logx: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logx"];

  /** */
  export const logxm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logxm1"];

  /** */
  export const logxp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logxp1"];

  /** */
  export const ln: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.ln"];

  /** */
  export const lnm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.lnm1"];

  /** */
  export const lnp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.lnp1"];

  /** */
  export const exp: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.exp"];

  /** */
  export const expm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.expm1"];

  /** */
  export const expp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.expp1"];

  /** */
  export const round: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.round"];

  /** */
  export const fround: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.fround"];

  /** */
  export const floor: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.floor"];

  /** */
  export const ceil: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.ceil"];

  /** */
  export const imul: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.imul"];

  /** */
  export const sign: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sign"];

  /** */
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
    WertsfyComponents.source.calc["constant.shortcuts"];

  /** */
  export const common: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.common"]; 

  /** */
  export const advanced: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.advanced"];

  /** */
  export const expTeoBoltzmann: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.boltzmann"];

  /** */
  export const expTeoCoulomb: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.coulomb"];

  /** */
  export const expTeoGirard: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.girard"];

  /** */
  export const expTeoPascal: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.pascal"];

  /** */
  export const expTeoPitagoras: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.pitagoras"];

  /** */
  export const expTeoPlank: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.plank"];

  /** */
  export const expTeoStevin: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.stevin"];

  /** */
  export const expTeoStirling: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.stirling"];

  /** */
  export const expTeoTalesDeMileto: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.tales_mileto"];

  /** */
  export const expEqcHorariaTempo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo"];

  /** */
  export const expEqcHorariaEspaco: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_espaco"];

  /** */
  export const expEqcHorariaVelocidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_velocidade"];

  /** */
  export const expEqcHorariaAceleracao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_acel"];

  /** */
  export const expEqcHorariaForca: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_forca"];

  /** */
  export const expEqcHorariaEspacoTempo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo_espaco"];

  /** */
  export const expEqcHorariaTempoMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo_movi_circ_unif_var"];

  /** */
  export const expEqcHorariaEspacoMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_espaco_movi_circ_unif_var"];

  /** */
  export const expEqcHorariaPosicaoMovimentoHarmonicoSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_posicao_movi_harm_simp"];

  /** */
  export const expEqcHorariaVelocidadeMovimentoHarmonicoSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_velocidade_movi_harm_simp"];

  /** */
  export const expEqcHorariaAceleracaoMovimentoHarmonicoSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_acel_movi_harm_simp"];

  /** */
  export const expEqcTorricelli: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.torricelli"];

  /** */
  export const expEqcLagrange: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.lagrange"];

  /** */
  export const expClcFatorial: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.fatorial"];

  /** */
  export const expClcCombinacao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.combinacao"];

  /** */
  export const expClcArranjo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.arranjo"];

  /** */
  export const expClcProbabilidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.probabilidade"];

  /** */
  export const expClcConjugadoNumeroComplexo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.conjugado_num_complex"];

  /** */
  export const expClcRelacaoEuler: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.relacao_euler"];

  /** */
  export const expClcPotenciasDeI: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencias_de_i"];

  /** */
  export const expClcPorcentagem: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.porcentagem"];

  /** */
  export const expClcDeterminante: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.determinante"];

  /** */
  export const expClcPolinomios: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.polinomios"];

  /** */
  export const expClcMatrizes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.matrizes"];

  /** */
  export const expClcVelocidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.velocidade"];

  /** */
  export const expClcEspaco: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.espaco"];

  /** */
  export const expClcTempo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.tempo"];

  /** */
  export const expClcAceleracao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.aceleracao"];

  /** */
  export const expClcEnergiaCinetica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_cinetica"];

  /** */
  export const expClcEnergiaPotencialElastica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_potencial_elas"];

  /** */
  export const expClcEnergiaPotencialGravitacional: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_potencial_grav"];

  /** */
  export const expClcPotencialMecanico: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencial_mecanico"];

  /** */
  export const expClcPotencialElastico: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencial_elastico"];

  /** */
  export const expClcPlanoInclinadoSemAtrito: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.plano_incl_sem_atrito"];

  /** */
  export const expClcPlanoInclinadoComAtrito: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.plano_incl_com_atrito"];

  /** */
  export const expClcAceleracaoPlanoInclinadoEixoX: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_plan_incl_eixo_x"];

  /** */
  export const expClcAceleracaoPlanoInclinadoEixoY: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_plan_incl_eixo_y"];

  /** */
  export const expClcLancamentoHorizontal: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lancamento_horizontal"];

  /** */
  export const expClcAlturaMaxLancamentoVertical: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alt_max_lanc_vert"];

  /** */
  export const expClcAlcanceLancamentoVertical: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alc_lanc_vert"];

  /** */
  export const expClcAlcanceMaxLancamentoVertical: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alc_max_lanc_vert"];

  /** */
  export const expClcCalorSensivel: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.calor_sensivel"];

  /** */
  export const expClcCalorLatente: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.calor_latente"];

  /** */
  export const expClcLeisDeNewton: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.leis_de_newton"];

  /** */
  export const expClcTrabalho: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.trabalho"];

  /** */
  export const expClcConsumoDeEnergia: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.consumo_de_energia"];

  /** */
  export const expClcForcaGravitacional: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.forca_gravitacional"];

  /** */
  export const expClcAceleracaoCentripetaMovimentoCircularUniforme: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_centrip_mcu"];

  /** */
  export const expClcVelocidadeAngularMovimentoCircularUniforme: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.veloc_ang_movi_circ_unif"];

  /** */
  export const expClcVelocidadeLinearMovimentoCircularUniforme: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.veloc_linear_movi_circ_unif"];

  /** */
  export const expClcTorricelliMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.torricelli-movi-circ-unif-var"];

  /** */
  export const expClcAceleracaoAngularMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc_acel_ang_movi_circ_var"];

  /** */
  export const expClcfrequencia: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.frequencia"];

  /** */
  export const expClcPeriodo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.periodo"];

  /** */
  export const expClcTemperatura: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.temperatura"];

  /** */
  export const expClcDilatacaoLinear: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_linear"];

  /** */
  export const expClcDilatacaoSuperficial: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_superficial"];

  /** */
  export const expClcDilatacaoVolumetrica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_volumetrica"];

  /** */
  export const expClcPrincipioFundamentalHidroestaticaHidrodinamica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.principio_fund_hidroest_hidrodinam"];

  /** */
  export const expClcEmpuxoHidroestaticaHidrodinamica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.empuxo_hidroes_hidrodinam"];

  /** */
  export const expClcPesoAparenteHidroestaticaHidrodinamica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.peso_aparente_hidroest_hidrodinam"];

  /** */
  export const expClcAtrito: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.atrito"];

  /** */
  export const expClcLeiDeCoulomb: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_coulomb"];

  /** */
  export const expClcLeideOhm: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_ohm"];

  /** */
  export const expClcEfeitoJoule: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.efeito_joule"];

  /** */
  export const expClcLeiDeLenz: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_lenz"];

  /** */
  export const expClcForcaEletromotriz: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.forca_eletromotriz"];

  /** */
  export const expClcContraForcaEletromotriz: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.contra_forca_eletromotriz"];

  /** */
  export const expClcEfeitoFotoeletrico: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.efeito_fotoeletrico"];

  /** */
  export const expClcDensidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.densidade"];

  /** */
  export const expClcTitulacao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.titulacao"];

  /** */
  export const expClcConcentracao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.concentracao"];

  /** */
  export const expClcRendimento: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.rendimento"];

  /** */
  export const expClcLeiDosGases: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_geral_dos_gases"];

  /** */
  export const expClcRegraDeTresSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.regra_de_tres_simples"];

  /** */
  export const expClcRegraDeTresComposta: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.regra_de_tres_composta"];

  /** */
  export const expClcSistemaDeEquacoes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistema_de_equacoes"];

  /** */
  export const expClcSistemaDeInequacoes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistema_de_inequacoes"];

  /** */
  export const expClcSistemasLineares: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistemas_lineares"];

  /** */
  export const expClcNumerosComplexos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.numeros_complex"];

  /** */
  export const expClcJurosSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.juros_simples"];

  /** */
  export const expClcJurosCompostos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.juros_compostos"];

  /** */
  export const expClcSinalizacaoQuadrantes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sinalizacao_quadrantes"];

  /** */
  export const expClcSinalizacaoOctantes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sinalizacao_octantes"];

  /** */
  export const expClcQuadradoDePunnet: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.quadrado_de_punnet"];

  /** */
  export const expClcQuadradoDePunnetExtendido: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.quadrado_de_punnet_extendido"];

  /** */
  export const expClcDiversos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.diversos"];

  /** */
  export const expClcNumericos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.numericos"];

  /** */
  export const expClcDiagramaVenn: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.diagrama_venn"];

  /** */
  export const expClcCartesianos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.cartesianos"];

  /** */
  export const expClcGeometricos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.geometricos"];

}
