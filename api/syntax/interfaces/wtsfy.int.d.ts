declare interface IGException {

  message: string;

} export var Exception: IGException["message"];

export interface IASetups {

  options: {

    /** operação */
    "#absoluto": {
      x: number
    }

  } | {

    /** operação */
    "#arco-seno": {
      x: number
    }

  } | {

    /** operação */
    "#arco-seno-hiperbolico": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cosseno": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cosseno-hiperbolico": {
      x: number
    }

  } | {

    /** operação */
    "#arco-tangente": {
      x: number
    }

  } | {

    /** operação */
    "#arco-tangente-hiperbolica": {
      x: number
    }

  } | {

    /** operação */
    "#arco-secante": {
      x: number
    }

  } | {

    /** operação */
    "#arco-secante-hiperbolica": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cosecante": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cosecante-hiperbolica": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cotangente": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cotangente-hiperbolica": {
      x: number
    }

  } | {

    /** operação */
    "#arredonda-para-baixo": {
      x: number
    }

  } | {

    /** operação */
    "#arredonda-para-cima": {
      x: number
    }

  } | {

    /** operação */
    "#arredonda-para-inteiro": {
      x: number
    }

  } | {

    /** operação */
    "#arredonda-decimal-para-inteiro": {
      x: number
    }

  } | {

    /** operação */
    "#cosseno": {
      x: number
    }

  } | {

    /** operação */
    "#cosseno-hiperbolico": {
      x: number
    }

  } | {

    /** operação */
    "#cosecante": {
      x: number
    }

  } | {

    /** operação */
    "#cosecante-hiperbolica": {
      x: number
    }

  } | {

    /** operação */
    "#cotangente": {
      x: number
    }

  } | {

    /** operação */
    "#cotangente-hiperbolica": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#divisão": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#exponencial": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#exponencial-mais-1": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#exponencial-menos-1": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-natural": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-natural-mais-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-natural-menos-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-10": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-10-mais-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-10-menos-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-2": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-2-mais-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-2-menos-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-qualquer": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-qualquer-mais-1": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-qualquer-menos-1": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#multiplicação": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#multiplicação-de-inteiros-de-32-bits": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#número-aleatório": void
  
  } | {

    /** operação */
    "#parte-inteira-valor-decimal": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#potência": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#potência-mais-um": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#potência-menos-um": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#potência-de-potência": { 
      x: number, 
      y: number, 
      z: number[] 
    }
  
  } | {

    /** operação */
    "#potência-de-potência-mais-um": { 
      x: number, 
      y: number, 
      z: number[] 
    }
  
  } | {

    /** operação */
    "#potência-de-potência-menos-um": { 
      x: number, 
      y: number, 
      z: number[] 
    }
  
  } | {

    /** operação */
    "#raiz-cúbica": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-décima-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-quadrada": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-quarta-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-quinta-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-sexta-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-sétima-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-nona-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-oitava-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#resto": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#soma": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#secante": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#secante-hiperbolica": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#seno": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#seno-hiperbolico": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#subtracao": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#tangente": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#tangente-hiperbolica": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#valor-máximo": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#valor-minimo": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#verifica-sinal": { 
      x: number 
    }
  
  } | {



    "#aceleracao_angular_mcuv": null
  } | {
    "#aceleracao_centripeta_mcu": null
  } | {
    "#aceleracao_no_plano_inclinado_eixo_x": null
  } | {
    "#aceleracao_no_plano_inclinado_eixo_y": null
  } | {
    "#aceleracao": null
  } | {
    "#alcance_lancamento_vertical": null
  } | {
    "#alcance_maximo_lancamento_vertical": null
  } | {
    "#altura_maxima_lancamento_vertical": null
  } | {
    "#arranjo": null
  } | {
    "#atrito": null
  } | {
    "#binômio_de_newton": null
  } | {
    "#calor_latente": null
  } | {
    "#calor_sensivel": null
  } | {
    "#função_primeiro_grau": null
  } | {
    "#função_segundo_grau": null
  } | {
    "#função_terceiro_grau": null
  } | {
    "#função_quarto_grau": null
  } | {
    "#combinacao": null
  } | {
    "#concentracao": null
  } | {
    "#correcao": null
  } | {
    "#conjugado_numero_complexo": null
  } | {
    "#conjugado_numero_real": null
  } | {
    "#consumo_de_energia": null
  } | {
    "#contra_forca_eletromotriz": null
  } | {
    "#densidade": null
  } | {
    "#determinante_2x2": null
  } | {
    "#determinante_3x3": null
  } | {
    "#diagrama_venn_2_grupos": null
  } | {
    "#diagrama_venn_3_grupos": null
  } | {
    "#diagrama_venn_4_grupos": null
  } | {
    "#diagrama_venn_5_grupos": null
  } | {
    "#diagrama_venn_6_grupos": null
  } | {
    "#dilatacao_linear": null
  } | {
    "#dilatacao_superficial": null
  } | {
    "#dilatacao_volumetrica": null
  } | {
    "#escala_geografica": null
  } | {
    "#indice_de_desenvolvimento_humano": null
  } | {
    "#gini": null
  } | {
    "#indice_de_massa_corporea": null
  } | {
    "#densidade_populacional": null
  } | {
    "#efeito_fotoeletrico": null
  } | {
    "#efeito_joule": null
  } | {
    "#empuxo_hidroestatica_hidrodinamica": null
  } | {
    "#escala_geografica": null
  } | {
    "#energia_cinetica": null
  } | {
    "#energia_potencial_elastica": null
  } | {
    "#energia_potencial_gravitacional": null
  } | {
    "#energia_potencial_magnética": null
  } | {
    "#espaço": null
  } | {
    "#fatorial": null
  } | {
    "#força_eletromotriz": null
  } | {
    "#forca_gravitacional": null
  } | {
    "#frequencia": null
  } | {
    "#juros_compostos": null
  } | {
    "#juros_simples": null
  } | {
    "#lancamento_horizontal": null
  } | {
    "#lei_de_coulomb": null
  } | {
    "#lei_de_lenz": null
  } | {
    "#lei_de_ohm": null
  } | {
    "#lei_geral_dos_gases": null
  } | {
    "#leis_de_newton": null
  } | {
    "#numeros_complexos": null
  } | {
    "#periodo": null
  } | {
    "#peso_aparente_hidroestatica_hidrodinamica": null
  } | {
    "#plano_inclinado_com_atrito": null
  } | {
    "#plano_inclinado_sem_atrito": null
  } | {
    "#soma_polinomios": null
  } | {
    "#subtracao_polinomios": null
  } | {
    "#multiplicacao_polinomios": null
  } | {
    "#divisao_polinomios": null
  } | {
    "#potencia_polinomios": null
  } | {
    "#potencial_elastico": null
  } | {
    "#potencial_mecanico": null
  } | {
    "#potencias_de_i": null
  } | {
    "#principio_fundamental_hidroestatica_hidrodinamica": null
  } | {
    "#probabilidade": null
  } | {
    "#quadrado_de_punnet_extendido": null
  } | {
    "#quadrado_de_punnet": null
  } | {
    "#regra_de_tres_composta": null
  } | {
    "#regra_de_tres_simples": null
  } | {
    "#relacao_euler": null
  } | {
    "#rendimento": null
  } | {
    "#sinalizacao_octantes": null
  } | {
    "#sinalizacao_quadrantes": null
  } | {
    "#sistema_de_equacoes": null
  } | {
    "#sistema_de_inequacoes": null
  } | {
    "#sistemas_lineares": null
  } | {
    "#tempo": null
  } | {
    "#titulacao": null
  } | {
    "#torricelli_movimento_circular_uniformente_variado": null
  } | {
    "#trabalho": null
  } | {
    "#velocidade_angular_movimento_circular_uniforme": null
  } | {
    "#velocidade_linear_movimento_circular_uniforme": null
  } | {
    "#velocidade": null
  } | {
    "#eq_horaria_aceleracao_movimento_harmonico_simples": null
  } | {
    "#eq_horaria_aceleracao": null
  } | {
    "#eq_horaria_espaco_movimento_circular_uniformente_variado": null
  } | {
    "#eq_horaria_espaco": null
  } | {
    "#eq_horaria_forca": null
  } | {
    "#eq_horaria_velocidade": null
  } | {
    "#eq_lagrange": null
  } | {
    "#eq_torricelli": null
  } | {
    "#teo_boltzmann": null
  } | {
    "#teo_coulomb": null
  } | {
    "#teo_girard": null
  } | {
    "#teo_pascal": null
  } | {
    "#teo_pitagoras": null
  } | {
    "#teo_plank": null
  } | {
    "#teo_stevin": null
  } | {
    "#teo_stirling": null
  } | {
    "#teo_tales_mileto": null

  }

} export var ArithmSetups: IASetups;

/**
 *
 * *geometricos
 * 
 * *matrizes
 *
 * *numericos
 *
 * *porcentagem
 *
 * *temperatura
 *
 */
