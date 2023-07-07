interface IFabricator {

  returns: Function | ClassMemberDecoratorContext;

} export var Fabricator: IFabricator["returns"];

interface IException {

  message: string;

} export var Exception: IException["message"];



interface ISeletor {

  opcoes:
// [*] => funções inexistentes 
  // Calc - Common
  "#soma" | "#subtracao" | "#divisao" | "#multiplicacao" | "#potencia"

  // Calc - Expressions

  /**
   *       
   *  "method.expression.calc_acel_ang_movi_circ_var": 
        typeof Component_math_calculator_exp_calc_aceleracao_angular_movimento_circular_uniformente_variado_method

      "method.expression.calc.acel_centrip_mcu": 
        typeof Component_math_calculator_exp_calc_aceleracao_centripeta_movimento_circular_uniforme_method

      "method.expression.calc.acel_plan_incl_eixo_x": 
        typeof Component_math_calculator_exp_calc_aceleracao_no_plano_inclinado_eixo_x_method

      "method.expression.calc.acel_plan_incl_eixo_y": 
        typeof Component_math_calculator_exp_calc_aceleracao_no_plano_inclinado_eixo_y_method

      "method.expression.calc.aceleracao": 
        typeof Component_math_calculator_exp_calc_aceleracao_method

      "method.expression.calc.alc_lanc_vert": 
        typeof Component_math_calculator_exp_calc_alcance_lancamento_vertical_method

      "method.expression.calc.alc_max_lanc_vert": 
        typeof Component_math_calculator_exp_calc_alcance_maximo_lancamento_vertical_method

      "method.expression.calc.alt_max_lanc_vert": 
        typeof Component_math_calculator_exp_calc_altura_maxima_lancamento_vertical_method

      "method.expression.calc.arranjo": 
        typeof Component_math_calculator_exp_calc_arranjo_method

      "method.expression.calc.atrito": 
        typeof Component_math_calculator_exp_calc_atrito_method

      "method.expression.calc.calor_latente": 
        typeof Component_math_calculator_exp_calc_calor_latente_method

      "method.expression.calc.calor_sensivel": 
        typeof Component_math_calculator_exp_calc_calor_sensivel_method

      "method.expression.calc.cartesianos": 
        typeof Component_math_calculator_exp_calc_cartesianos_method

      "method.expression.calc.combinacao": 
        typeof Component_math_calculator_exp_calc_combinacao_method

      "method.expression.calc.concentracao": 
        typeof Component_math_calculator_exp_calc_concentracao_method

      "method.expression.calc.conjugado_num_complex": 
        typeof Component_math_calculator_exp_calc_conjugado_numero_complexo_method

      "method.expression.calc.consumo_de_energia": 
        typeof Component_math_calculator_exp_calc_consumo_de_energia_method

      "method.expression.calc.contra_forca_eletromotriz": 
        typeof Component_math_calculator_exp_calc_contra_forca_eletromotriz_method

      "method.expression.calc.densidade": 
        typeof Component_math_calculator_exp_calc_densidade_method

      "method.expression.calc.determinante": 
        typeof Component_math_calculator_exp_calc_determinante_method

      "method.expression.calc.diagrama_venn": 
        typeof Component_math_calculator_exp_calc_diagrama_venn_method

      "method.expression.calc.dilatacao_linear": 
        typeof Component_math_calculator_exp_calc_dilatacao_linear_method

      "method.expression.calc.dilatacao_superficial": 
        typeof Component_math_calculator_exp_calc_dilatacao_superficial_method

      "method.expression.calc.dilatacao_volumetrica": 
        typeof Component_math_calculator_exp_calc_dilatacao_volumetrica_method

      "method.expression.calc.diversos": 
        typeof Component_math_calculator_exp_calc_diversos_method

      "method.expression.calc.efeito_fotoeletrico": 
        typeof Component_math_calculator_exp_calc_efeito_fotoeletrico_method

      "method.expression.calc.efeito_joule": 
        typeof Component_math_calculator_exp_calc_efeito_joule_method

      "method.expression.calc.empuxo_hidroes_hidrodinam": 
        typeof Component_math_calculator_exp_calc_empuxo_hidroestatica_hidrodinamica_method

      "method.expression.calc.energia_cinetica": 
        typeof Component_math_calculator_exp_calc_energia_cinetica_method

      "method.expression.calc.energia_potencial_elas": 
        typeof Component_math_calculator_exp_calc_energia_potencial_elastica_method

      "method.expression.calc.energia_potencial_grav": 
        typeof Component_math_calculator_exp_calc_energia_potencial_gravitacional_method

      "method.expression.calc.espaco": 
        typeof Component_math_calculator_exp_calc_espaco_method

      "method.expression.calc.fatorial": 
        typeof Component_math_calculator_exp_calc_fatorial_method

      "method.expression.calc.forca_eletromotriz": 
        typeof Component_math_calculator_exp_calc_forca_eletromotriz_method

      "method.expression.calc.forca_gravitacional": 
        typeof Component_math_calculator_exp_calc_forca_gravitacional_method

      "method.expression.calc.frequencia": 
        typeof Component_math_calculator_exp_calc_frequencia_method

      "method.expression.calc.geometricos": 
        typeof Component_math_calculator_exp_calc_geometricos_method

      "method.expression.calc.juros_compostos": 
        typeof Component_math_calculator_juros_compostos_method

      "method.expression.calc.juros_simples": 
        typeof Component_math_calculator_juros_simples_method

      "method.expression.calc.lancamento_horizontal": 
        typeof Component_math_calculator_exp_calc_lancamento_horizontal_method

      "method.expression.calc.lei_de_coulomb": 
        typeof Component_math_calculator_exp_calc_lei_de_coulomb_method

      "method.expression.calc.lei_de_lenz": 
        typeof Component_math_calculator_exp_calc_lei_de_lenz_method

      "method.expression.calc.lei_de_ohm": 
        typeof Component_math_calculator_exp_calc_lei_de_ohm_method

      "method.expression.calc.lei_geral_dos_gases": 
        typeof Component_math_calculator_lei_geral_dos_gases_method

      "method.expression.calc.leis_de_newton": 
        typeof Component_math_calculator_exp_calc_leis_de_newton_method

      "method.expression.calc.matrizes": 
        typeof Component_math_calculator_exp_calc_matrizes_method

      "method.expression.calc.numericos": 
        typeof Component_math_calculator_exp_calc_numericos_method

      "method.expression.calc.numeros_complex": 
        typeof Component_math_calculator_exp_calc_numeros_complexos_method

      "method.expression.calc.periodo": 
        typeof Component_math_calculator_exp_calc_periodo_method

      "method.expression.calc.peso_aparente_hidroest_hidrodinam": 
        typeof Component_math_calculator_exp_calc_peso_aparente_hidroestatica_hidrodinamica_method

      "method.expression.calc.plano_incl_com_atrito": 
        typeof Component_math_calculator_exp_calc_plano_inclinado_com_atrito_method

      "method.expression.calc.plano_incl_sem_atrito": 
        typeof Component_math_calculator_exp_calc_plano_inclinado_sem_atrito_method

      "method.expression.calc.polinomios": 
        typeof Component_math_calculator_exp_calc_polinomios_method

      "method.expression.calc.porcentagem": 
        typeof Component_math_calculator_exp_calc_porcentagem_method

      "method.expression.calc.potencial_elastico": 
        typeof Component_math_calculator_exp_calc_potencial_elastico_method

      "method.expression.calc.potencial_mecanico": 
        typeof Component_math_calculator_exp_calc_potencial_mecanico_method

      "method.expression.calc.potencias_de_i": 
        typeof Component_math_calculator_exp_calc_potencias_de_i_method

      "method.expression.calc.principio_fund_hidroest_hidrodinam": 
        typeof Component_math_calculator_exp_calc_principio_fundamental_hidroestatica_hidrodinamica_method

      "method.expression.calc.probabilidade": 
        typeof Component_math_calculator_exp_calc_probabilidade_method

      "method.expression.calc.quadrado_de_punnet_extendido": 
        typeof Component_math_calculator_exp_calc_quadrado_de_punnet_extendido_method

      "method.expression.calc.quadrado_de_punnet": 
        typeof Component_math_calculator_exp_calc_quadrado_de_punnet_method

      "method.expression.calc.regra_de_tres_composta": 
        typeof Component_math_calculator_exp_calc_regra_de_tres_composta_method

      "method.expression.calc.regra_de_tres_simples": 
        typeof Component_math_calculator_exp_calc_regra_de_tres_simples_method

      "method.expression.calc.relacao_euler": 
        typeof Component_math_calculator_exp_calc_relacao_euler_method

      "method.expression.calc.rendimento": 
        typeof Component_math_calculator_exp_calc_rendimento_method

      "method.expression.calc.sinalizacao_octantes": 
        typeof Component_math_calculator_exp_calc_sinalizacao_octantes_method

      "method.expression.calc.sinalizacao_quadrantes": 
        typeof Component_math_calculator_exp_calc_sinalizacao_quadrantes_method

      "method.expression.calc.sistema_de_equacoes": 
        typeof Component_math_calculator_exp_calc_sistema_de_equacoes_method

      "method.expression.calc.sistema_de_inequacoes": 
        typeof Component_math_calculator_exp_calc_sistema_de_inequacoes_method

      "method.expression.calc.sistemas_lineares": 
        typeof Component_math_calculator_exp_calc_sistemas_lineares_method

      "method.expression.calc.temperatura": 
        typeof Component_math_calculator_exp_calc_temperatura_method

      "method.expression.calc.tempo": 
        typeof Component_math_calculator_exp_calc_tempo_method

      "method.expression.calc.titulacao": 
        typeof Component_math_calculator_exp_calc_titulacao_method

      "method.expression.calc.torricelli-movi-circ-unif-var": 
        typeof Component_math_calculator_exp_calc_torricelli_movimento_circular_uniformente_variado_method

      "method.expression.calc.trabalho": 
        typeof Component_math_calculator_exp_calc_trabalho_method

      "method.expression.calc.veloc_ang_movi_circ_unif": 
        typeof Component_math_calculator_exp_calc_velocidade_angular_movimento_circular_uniforme_method

      "method.expression.calc.veloc_linear_movi_circ_unif": 
        typeof Component_math_calculator_exp_calc_velocidade_linear_movimento_circular_uniforme_method

      "method.expression.calc.velocidade": 
        typeof Component_math_calculator_exp_calc_velocidade_method

      "method.expression.equac.horaria_acel_movi_harm_simp": 
        typeof Component_math_calculator_exp_eq_horaria_aceleracao_movimento_harmonico_simples_method

      "method.expression.equac.horaria_acel": 
        typeof Component_math_calculator_exp_eq_horaria_aceleracao_method

      "method.expression.equac.horaria_espaco_movi_circ_unif_var": 
        typeof Component_math_calculator_exp_eq_horaria_espaco_movimento_circular_uniformente_variado_method

      "method.expression.equac.horaria_espaco": 
        typeof Component_math_calculator_exp_eq_horaria_espaco_method

      "method.expression.equac.horaria_forca": 
        typeof Component_math_calculator_exp_eq_horaria_forca_method

      "method.expression.equac.horaria_posicao_movi_harm_simp": 
        typeof Component_math_calculator_exp_eq_horaria_posicao_movimento_harmonico_simples_method

      "method.expression.equac.horaria_tempo_movi_circ_unif_var": 
        typeof Component_math_calculator_exp_eq_horaria_tempo_movimento_circular_uniformemente_variado_method

      "method.expression.equac.horaria_tempo_espaco": 
        typeof Component_math_calculator_exp_eq_horaria_espaco_tempo_method

      "method.expression.equac.horaria_tempo": 
        typeof Component_math_calculator_exp_eq_horaria_tempo_method

      "method.expression.equac.horaria_velocidade_movi_harm_simp": 
        typeof Component_math_calculator_exp_eq_horaria_velocidade_movimento_harmonico_simples_method

      "method.expression.equac.horaria_velocidade": 
        typeof Component_math_calculator_exp_eq_horaria_velocidade_method

      "method.expression.equac.lagrange": 
        typeof Component_math_calculator_exp_eq_lagrange_method

      "method.expression.equac.torricelli": 
        typeof Component_math_calculator_exp_eq_torricelli_method

      "method.expression.teo.boltzmann": 
        typeof Component_math_calculator_exp_teo_boltzmann_method

      "method.expression.teo.coulomb": 
        typeof Component_math_calculator_exp_teo_coulomb_method

      "method.expression.teo.girard": 
        typeof Component_math_calculator_exp_teo_girard_method

      "method.expression.teo.pascal": 
        typeof Component_math_calculator_exp_teo_pascal_method

      "method.expression.teo.pitagoras": 
        typeof Component_math_calculator_exp_teo_pitagoras_method

      "method.expression.teo.plank": 
        typeof Component_math_calculator_exp_teo_plank_method

      "method.expression.teo.stevin": 
        typeof Component_math_calculator_exp_teo_stevin_method

      "method.expression.teo.stirling": 
        typeof Component_math_calculator_exp_teo_stirling_method

      "method.expression.teo.tales_mileto": 
        typeof Component_math_calculator_exp_teo_tales_mileto_method
   */

  // Math - 0letra-a
  | "#abs" | "#arcsin" | "#arcsinh" | "#arccos" | "#arccosh" | "#arctan" | "#arctanh" | "#arcsec" | "#arcsech" | "#arccosec" | "#arccosech" | "#arccotan" | "#arccotanh" 

  // Math - 0letra-c
  | "#cbrt" | "#ceil"

  // Math - 0letra-d
  | "#decrt"

  // Math - 0letra-e
  | "#exp" | "#expm1" | "#expp1"

  // Math - 0letra-f
  | "#floor" | "#fround"

  // Math - 0letra-i
  | "#imul"

  // Math - 0letra-l
  | "#ln" | "#lnm1" | "#lnp1" | "#log" | "#logm1" | "#logp1" | "#log2" | "#log2m1" | "#log2p1" | "#logx" | "#logxm1" | "#logxp1"

  // Math - 0letra-m
  | "max" | "min"

  // Math - 0letra-n
  | "#nonrt"

  // Math - 0letra-o
  | "octrt"

  // Math - 0letra-p
  | "#pow" | "*#powm1" | "*#powp1" | "#powofpow" | "*#powofpowm1" | "*#powofpowp1"

  // Math - 0letra-q
  | "#quart" | "#quirt"

  // Math - 0letra-r
  | "#random" | "#round"

  // Math - 0letra-s
  | "#sec" | "#sech" | "#seprt" | "#sexrt" | "#sign" | "#sin" | "#sinh" | "#sqrt"

  // Math - 0letra-t
  | "#tan" | "#tanh" | "#trunc"


} export var Seletor: ISeletor["opcoes"];