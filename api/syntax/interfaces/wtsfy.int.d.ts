declare interface IGException {

  message: string;

} export var Exception: IGException["message"];

export interface IASetups { 
  
  options: {
    /** 
     * 
     * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
     * 
     * operação 
     */
    "#absoluto": { x: number } } | {

    /** operação */
    "#arco-seno": null } | {

    /** operação */
    "#arco-seno-hiperbolico": null } | {

    /** operação */
    "#arco-cosseno": null } | {

    /** operação */
    "#arco-cosseno-hiperbolico": null } | {

    /** operação */
    "#arco-tangente": null } | {

    /** operação */
    "#arco-tangente-hiperbolica": null } | {

    /** operação */
    "#arco-secante": null } | {

    /** operação */
    "#arco-secante-hiperbolica": null } | {

    /** operação */
    "#arco-cosecante": null } | {

    /** operação */
    "#arco-cosecante-hiperbolica": null } | {

    /** operação */
    "#arco-cotangente": null } | {

    /** operação */
    "#arco-cotangente-hiperbolica": null } | {

    /** operação */
    "#arredonda-para-baixo": null } | {

    /** operação */
    "#arredonda-para-cima": null } | {

    /** operação */
    "#arredonda-para-inteiro": null } | {

    /** operação */
    "#arredonda-decimal-para-inteiro": null } | {

    /** operação */
    "#cosseno": null } | {

    /** operação */
    "#cosseno-hiperbolico": null } | {

    /** operação */
    "#cosecante": null } | {

    /** operação */
    "#cosecante-hiperbolica": null } | {

    /** operação */
    "#cotangente": null } | {

    /** operação */
    "#cotangente-hiperbolica": null } | {

    /** operação */
    "#divisão": null } | {

    /** operação */
    "#exponencial": null } | {

    /** operação */
    "#exponencial-mais-1": null } | {

    /** operação */
    "#exponencial-menos-1": null } | {

    /** operação */
    "#logarítmo-natural": null } | {

    /** operação */
    "#logarítmo-natural-mais-1": null } | {

    /** operação */
    "#logarítmo-natural-menos-1": null } | {

    /** operação */
    "#logarítmo-de-base-10": null } | {

    /** operação */
    "#logarítmo-de-base-10-mais-1": null } | {

    /** operação */
    "#logarítmo-de-base-10-menos-1": null } | {

    /** operação */
    "#logarítmo-de-base-2": null } | {

    /** operação */
    "#logarítmo-de-base-2-mais-1": null } | {

    /** operação */
    "#logarítmo-de-base-2-menos-1": null } | {

    /** operação */
    "#logarítmo-de-base-qualquer": null } | {

    /** operação */
    "#logarítmo-de-base-qualquer-mais-1": null } | {

    /** operação */
    "#logarítmo-de-base-qualquer-menos-1": null } | {

    /** operação */
    "#multiplicação": null } | {

    /** operação */
    "#multiplicação-de-inteiros-de-32-bits": null } | {

    /** operação */
    "#módulo": null } | {

    /** operação */
    "#número-aleatório": null } | {

    /** operação */
    "#parte-inteira-valor-decimal": null } | {

    /** operação */
    "#potência": null } | {

    /** operação */
    "#potência-mais-um": null } | {

    /** operação */
    "#potência-menos-um": null } | {

    /** operação */
    "#potência-de-potência": null } | {

    /** operação */
    "#potência-de-potência-mais-um": null } | {

    /** operação */
    "#potência-de-potência-menos-um": null } | {

    /** operação */
    "#raiz-cúbica": null } | {

    /** operação */
    "#raiz-décima-potência": null } | {

    /** operação */
    "#raiz-quadrada": null } | {

    /** operação */
    "#raiz-quarta-potência": null } | {

    /** operação */
    "#raiz-quinta-potência": null } | {

    /** operação */
    "#raiz-sexta-potência": null } | {

    /** operação */
    "#raiz-sétima-potência": null } | {

    /** operação */
    "#raiz-nona-potência": null } | {

    /** operação */
    "#raiz-oitava-potência": null } | {

    /** operação */
    "#resto": null } | {

    /** operação */
    "#soma": { k: number[] } } | {

    /** operação */
    "#secante": null } | {

    /** operação */
    "#secante-hiperbolica": null } | {

    /** operação */
    "#seno": null } | {

    /** operação */
    "#seno-hiperbolico": null } | {

    /** operação */
    "#tangente": null } | {

    /** operação */
    "#tangente-hiperbolica": null } | {

    /** operação */
    "#subtracao": null } | {

    /** operação */
    "#valor-máximo": null } | {

    /** operação */
    "#valor-minimo": null } | {

    /** operação */
    "#verifica-sinal": null } | {


    "#aceleracao_angular_mcuv": null } | {
    "#aceleracao_centripeta_mcu": null } | {
    "#aceleracao_no_plano_inclinado_eixo_x": null } | {
    "#aceleracao_no_plano_inclinado_eixo_y": null } | {
    "#aceleracao": null } | {
    "#alcance_lancamento_vertical": null } | {
    "#alcance_maximo_lancamento_vertical": null } | {
    "#altura_maxima_lancamento_vertical": null } | {
    "#arranjo": null } | {
    "#atrito": null } | {
    "#binômio_de_newton": null } | {
    "#calor_latente": null } | {
    "#calor_sensivel": null } | {
    "#cartesiano_primeiro_grau": null } | {
    "#cartesiano_segundo_grau": null } | {
    "#cartesiano_terceiro_grau": null } | {
    "#cartesiano_quarto_grau": null } | {
    "#combinacao": null } | {
    "#concentracao": null } | {
    "#correcao": null } | {
    "#conjugado_numero_complexo": null } | {
    "#conjugado_numero_real": null } | {
    "#consumo_de_energia": null } | {
    "#contra_forca_eletromotriz": null } | {
    "#densidade": null } | {
    "#determinante_2x2": null } | {
    "#determinante_3x3": null } | {
    "#diagrama_venn_2_grupos": null } | {
    "#diagrama_venn_3_grupos": null } | {
    "#diagrama_venn_4_grupos": null } | {
    "#diagrama_venn_5_grupos": null } | {
    "#diagrama_venn_6_grupos": null } | {
    "#dilatacao_linear": null } | {
    "#dilatacao_superficial": null } | {
    "#dilatacao_volumetrica": null } | {
    "#diversos_escala_geografica": null } | {
    "#diversos_idh": null } | {
    "#diversos_gini": null } | {
    "#diversos_imc": null } | {
    "#diversos_densidade_populacional": null } | {
    "#efeito_fotoeletrico": null } | {
    "#efeito_joule": null } | {
    "#empuxo_hidroestatica_hidrodinamica": null } | {
    "#escala_geografica": null } | {
    "#energia_cinetica": null } | {
    "#energia_potencial_elastica": null } | {
    "#energia_potencial_gravitacional": null } | {
    "#energia_potencial_magnetica": null } | {
    "#espaco": null } | {
    "#fatorial": null 
  
  }

} export var ArithmSetups: IASetups;

  /**
   *       
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
   * diagrama_venn_5_grupos
   * 
   * diagrama_venn_6_grupos
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

      soma_polinomios

      subtracao_polinomios

      multiplicacao_polinomios

      divisao_polinomios

      potencia_polinomios

      *porcentagem

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

      sinalizacao_octantes

      sinalizacao_quadrantes

      sistema_de_equacoes

      sistema_de_inequacoes

      sistemas_lineares

      *temperatura

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
