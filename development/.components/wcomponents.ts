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

  //   export const exp_eqc_horaria_tempo: WComponent;

  //   export const exp_eqc_horaria_espaco: WComponent;

  //   export const exp_eqc_horaria_velocidade: WComponent;

  //   export const exp_eqc_horaria_aceleracao: WComponent;

  //   export const exp_eqc_horaria_forca: WComponent;

  //   export const exp_eqc_horaria_espaco_tempo: WComponent;

  //   export const exp_eqc_horaria_tempo_movimento_clc_ircular_uniformente_variado: WComponent;

  //   export const exp_eqc_horaria_espaco_movimento_clc_ircular_uniformente_variado: WComponent;
    
  //   export const exp_eqc_horaria_posicao_movimento_harmonico_simples: WComponent;
    
  //   export const exp_eqc_horaria_velocidade_movimento_harmonico_simples: WComponent;
    
  //   export const exp_eqc_horaria_aceleracao_movimento_harmonico_simples: WComponent;
    
  //   export const exp_eqc_torricelli: WComponent;
    
  //   export const exp_eqc_lagrange: WComponent;

  //   export const exp_clc_fatorial: WComponent;
    
  //   export const exp_clc_combinacao: WComponent;
    
  //   export const exp_clc_arranjo: WComponent;
    
  //   export const exp_clc_probabilidade: WComponent;
    
  //   export const exp_clc_conjugado_numero_complexo: WComponent;

  //   export const exp_clc_relacao_euler: WComponent;

  //   export const exp_clc_potencias_de_i: WComponent;

  //   export const exp_clc_porcentagem: WComponent;

  //   export const exp_clc_determinante: WComponent;

  //   export const exp_clc_polinomios: WComponent;

  //   export const exp_clc_matrizes: WComponent;

  //   export const exp_clc_velocidade: WComponent;

  //   export const exp_clc_espaco: WComponent;

  //   export const exp_clc_tempo: WComponent;

  //   export const exp_clc_aceleracao: WComponent;

  //   export const exp_clc_energia_cinetica: WComponent;

  //   export const exp_clc_energia_potencial_elastica: WComponent;

  //   export const exp_clc_energia_potencial_gravitacional: WComponent;

  //   export const exp_clc_potencial_mecanico: WComponent;

  //   export const exp_clc_potencial_elastico: WComponent;

  //   export const exp_clc_plano_inclinado_sem_atrito: WComponent;

  //   export const exp_clc_plano_inclinado_com_atrito: WComponent;

  //   export const exp_clc_aceleracao_plano_inclinado_eixo_x: WComponent;

  //   export const exp_clc_aceleracao_plano_inclinado_eixo_y: WComponent;

  //   export const exp_clc_lancamento_horizontal: WComponent;

  //   export const exp_clc_altura_max_lancamento_vertical: WComponent;

  //   export const exp_clc_alcance_lancamento_vertical: WComponent;

  //   export const exp_clc_alcance_max_lancamento_vertical: WComponent;

  //   export const exp_clc_calor_sensivel: WComponent;

  //   export const exp_clc_calor_latente: WComponent;

  //   export const exp_clc_leis_de_newton: WComponent;

  //   export const exp_clc_trabalho: WComponent;

  //   export const exp_clc_consumo_de_energia: WComponent;

  //   export const exp_clc_forca_gravitacional: WComponent;

  //   export const exp_clc_aceleracao_clc_entripeta_movimento_clc_ircular_uniforme: WComponent;

  //   export const exp_clc_velocidade_angular_movimento_clc_ircular_uniforme: WComponent;

  //   export const exp_clc_velocidade_linear_movimento_clc_ircular_uniforme: WComponent;

  //   export const exp_clc_torricelli_movimento_clc_ircular_uniformente_variado: WComponent;

  //   export const exp_clc_aceleracao_angular_movimento_clc_ircular_uniformente_variado: WComponent;

  //   export const exp_clc_frequencia: WComponent;

  //   export const exp_clc_periodo: WComponent;

  //   export const exp_clc_temperatura: WComponent;

  //   export const exp_clc_dilatacao_linear: WComponent;

  //   export const exp_clc_dilatacao_superficial: WComponent;

  //   export const exp_clc_dilatacao_volumetrica: WComponent;

  //   export const exp_clc_principio_fundamental_hidroestatica_hidrodinamica: WComponent;

  //   export const exp_clc_empuxo_hidroestatica_hidrodinamica: WComponent;

  //   export const exp_clc_peso_aparente_hidroestatica_hidrodinamica: WComponent;

  //   export const exp_clc_atrito: WComponent;

  //   export const exp_clc_lei_de_coulomb: WComponent;

  //   export const exp_clc_lei_de_ohm: WComponent;

  //   export const exp_clc_efeito_joule: WComponent;

  //   export const exp_clc_lei_de_lenz: WComponent;

  //   export const exp_clc_forca_eletromotriz: WComponent;

  //   export const exp_clc_contra_forca_eletromotriz: WComponent;

  //   export const exp_clc_efeito_fotoeletrico: WComponent;

  //   export const exp_clc_densidade: WComponent;

  //   export const exp_clc_titulacao: WComponent;

  //   export const exp_clc_concentracao: WComponent;

  //   export const exp_clc_rendimento: WComponent;

  //   export const exp_clc_lei_dos_gases: WComponent;

  //   export const exp_clc_regra_de_tres_simples: WComponent;

  //   export const exp_clc_regra_de_tres_composta: WComponent;

  //   export const exp_clc_sistema_de_equacoes: WComponent;

  //   export const exp_clc_sistema_de_inequacoes: WComponent;

  //   export const exp_clc_sistemas_lineares: WComponent;

  //   export const exp_clc_numeros_complexos: WComponent;

  //   export const exp_clc_juros_simples: WComponent;

  //   export const exp_clc_juros_compostos: WComponent;

  //   export const exp_clc_vetores_ga: WComponent;

  //   export const exp_clc_sinalizacao_quadrantes: WComponent;

  //   export const exp_clc_sinalizacao_octantes: WComponent;

  //   export const exp_clc_quadrado_de_punnet: WComponent;

  //   export const exp_clc_quadrado_de_punnet_extendido: WComponent;

  //   export const exp_clc_diversos: WComponent;
    
  //   export const exp_clc_numericos: WComponent;
    
  //   export const exp_clc_diagrama_venn: WComponent;
    
  //   export const exp_clc_cartesianos: WComponent;
    
  //   export const exp_clc_geometricos: WComponent;

  }

}
