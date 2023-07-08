interface IGException {

  message: string;

} export var Exception: IGException["message"];


interface IASeletor { 

  functions: 
    
      "+1O#abs" 
    | "+1O#arcsin" 
    | "+1O#arcsinh" 
    | "+1O#arccos" 
    | "+1O#arccosh" 
    | "+1O#arctan" 
    | "+1O#arctanh" 
    | "+1O#arcsec" 
    | "+1O#arcsech" 
    | "+1O#arccosec" 
    | "+1O#arccosech" 
    | "+1O#arccotan" 
    | "+1O#arccotanh" 

    | "+1O#cbrt" 
    | "+1O#ceil"

    | "+1O#decrt"

    | "+1O#exp" 
    | "+1O#expm1" 
    | "+1O#expp1"

    | "+1O#floor" 
    | "+1O#fround"

    | "+1O#imul"

    | "+1O#soma" 
    | "+1O#subtracao" 
    | "+1O#divisao" 
    | "+1O#multiplicacao" 
    | "+1O#potencia"


  | "+1O#ln" 
  | "+1O#lnm1" 
  | "+1O#lnp1" 
  | "+1O#log" 
  | "+1O#logm1" 
  | "+1O#logp1" 
  | "+1O#log2" 
  | "+1O#log2m1" 
  | "+1O#log2p1" 
  | "+1O#logx" 
  | "+1O#logxm1" 
  | "+1O#logxp1"

  | "+1O#max" 
  | "+1O#min"

  | "+1O#nonrt"

  | "+1O#octrt"

  | "+1O#pow" 
  | "+1O#powm1" 
  | "+1O#powp1" 
  | "+1O#powofpow" 
  | "+1O#powofpowm1" 
  | "+1O#powofpowp1"

  | "+1O#quart" 
  | "+1O#quirt"

  | "+1O#random" 
  | "+1O#round"

  | "+1O#sec" 
  | "+1O#sech" 
  | "+1O#seprt" 
  | "+1O#sexrt" 
  | "+1O#sign" 
  | "+1O#sin" 
  | "+1O#sinh" 
  | "+1O#sqrt"

  | "+1O#tan" 
  | "+1O#tanh" 
  | "+1O#trunc"

  | "+3C#hexadecimal_para_decimal"
  | "+3C#decimal_para_hexadecimal"
  | "+3C#octadecimal_para_decimal"
  | "+3C#decimal_para_octadecimal"
  | "+3C#binario_para_decimal"
  | "+3C#decimal_para_binario"
  | "+3C#hexadecimal_para_binario"
  | "+3C#binario_para_hexadecimal"
  | "+3C#octadecimal_para_binario"
  | "+3C#binario_para_octadecimal"
  | "+3C#hexadecimal_para_octadecimal"
  | "+3C#octadecimal_para_hexadecimal"

} export var Seletor: IASeletor["functions"];

// Arrumar aqui. {#ff2200}

  // Calc - Expressions

  /**
   *       
   * aceleracao_angular_movimento_circular_uniformente_variado
   *
   * aceleracao_centripeta_movimento_circular_uniforme
   *
   * aceleracao_no_plano_inclinado_eixo_x
   *
   * aceleracao_no_plano_inclinado_eixo_y
   *
   * aceleracao
   *
   * alcance_lancamento_vertical
   *
   * alcance_maximo_lancamento_vertical
   *
   * altura_maxima_lancamento_vertical
   *
   * arranjo
   *
   * atrito
   * 
   * binômio_de_newton
   *
   * calor_latente
   *
   * calor_sensivel
   *
   * cartesiano_primeiro_grau
   * 
   * cartesiano_segundo_grau
   * 
   * cartesiano_terceiro_grau
   * 
   * cartesiano_quarto_grau
   *
   * combinacao
   *
   * concentracao
   *
   * conjugado_numero_complexo
   *
   * consumo_de_energia
   *
   * contra_forca_eletromotriz
   * 
   * densidade
   *
   * determinante_2x2
   * 
   * determinante_3x3
   *
   * diagrama_venn_2_grupos
   * 
   * diagrama_venn_3_grupos
   * 
   * diagrama_venn_4_grupos
   * 
   * ?diagrama_venn_5_grupos
   * 
   * ?diagrama_venn_6_grupos
   *
   * dilatacao_linear
   *
   * dilatacao_superficial
   *
   * dilatacao_volumetrica
   *
   * diversos_escala_geografica
   * 
   * diversos_idh
   * 
   * diversos_gini
   * 
   * diversos_imc
   * 
   * diversos_densidade_populacional
   * 
   * efeito_fotoeletrico
   *
   * efeito_joule
   *
   * empuxo_hidroestatica_hidrodinamica
   *
   * energia_cinetica

      energia_potencial_elastica

      energia_potencial_gravitacional

      espaco

      fatorial

      forca_eletromotriz

      forca_gravitacional

      frequencia

      *"method.expression.calc.geometricos": 
        typeof Component_math_calculator_exp_calc_geometricos

      juros_compostos

      juros_simples

      lancamento_horizontal

      lei_de_coulomb

      lei_de_lenz

      lei_de_ohm

      lei_geral_dos_gases

      leis_de_newton

      *"method.expression.calc.matrizes": 
        typeof Component_math_calculator_exp_calc_matrizes

      *"method.expression.calc.numericos": 
        typeof Component_math_calculator_exp_calc_numericos

      numeros_complexos

      periodo

      peso_aparente_hidroestatica_hidrodinamica

      plano_inclinado_com_atrito

      plano_inclinado_sem_atrito

      *"method.expression.calc.polinomios": 
        typeof Component_math_calculator_exp_calc_polinomios

      porcentagem

      potencial_elastico

      potencial_mecanico

      potencias_de_i

      principio_fundamental_hidroestatica_hidrodinamica

      probabilidade

      quadrado_de_punnet_extendido

      quadrado_de_punnet

      regra_de_tres_composta

      regra_de_tres_simples

      relacao_euler

      rendimento

      "sinalizacao_octantes

      sinalizacao_quadrantes

      sistema_de_equacoes

      sistema_de_inequacoes

      sistemas_lineares

      temperatura

      tempo

      titulacao

      torricelli_movimento_circular_uniformente_variado

      trabalho

      velocidade_angular_movimento_circular_uniforme

      velocidade_linear_movimento_circular_uniforme

      velocidade

      eq_horaria_aceleracao_movimento_harmonico_simples

      eq_horaria_aceleracao

      eq_horaria_espaco_movimento_circular_uniformente_variado

      eq_horaria_espaco

      eq_horaria_forca

      eq_horaria_posicao_movimento_harmonico_simples

      eq_horaria_tempo_movimento_circular_uniformemente_variado

      eq_horaria_espaco_tempo

      eq_horaria_tempo

      eq_horaria_velocidade_movimento_harmonico_simples

      eq_horaria_velocidade

      eq_lagrange

      eq_torricelli

      teo_boltzmann

      teo_coulomb

      teo_girard

      teo_pascal

      teo_pitagoras

      teo_plank

      teo_stevin

      teo_stirling

      teo_tales_mileto
   *
   */

