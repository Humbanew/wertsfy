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
    "#arredonda-para-decimal-32bits": {
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
      x: number,
      y: number 
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
      x: number,
      y: number 
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
      x: number,
      y: number 
    }
  
  } | {

    /** operação */
    "#soma": { 
      x: number,
      y: number 
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
      x: number,
      y: number 
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
  } | {  
    "#area_triangulo": null
  } | {
    "#apotema_triangulo": null
  } | {
    "#area_quadrado": null
  } | {
    "#area_retangulo": null
  } | {
    "#area_circulo": null
  } | {
    "#area_elipse": null
  } | {
    "#area_trapezio": null
  } | {
    "#area_lozango": null
  } | {
    "#area_superficie": null
  } | {
    "#volume_superficie": null
  } | {
    "#area_esfera": null
  } | {
    "#area_poligono": null
  } | {
    "#volume_poligono_formato_lozango": null
  } | {
    "#volume_poligono_formato_trapezio": null
  } | {
    "#area_paralelogramo": null
  } | {
    "#area_lateral_prisma": null
  } | {
    "#volume_prisma": null
  } | {
    "#volume_cubo": null
  } | {
    "#volume_paralelogramo": null
  } | {
    "#volume_piramide": null
  } | {
    "#volume_tetraedro": null
  } | {
    "#volume_hexaedro": null
  } | {
    "#volume_octaedro": null
  } | {
    "#volume_dodecaedro": null
  } | {
    "#volume_icosaedro": null
  } | {
    "#volume_cone": null
  } | {
    "#volume_cilindro": null
  } | {
    "#volume_esfera": null
  } | {
    "#area_circunferencia": null
  } | {
    "#area_lateral_cilindro": null


  } | {
    "#quantidade_conjuntos": { x: number }
  } | {
    "#porcentagem": { x: number }
  } | {
    "#porcentagem_por_1000": { x: number }
  } | {
    "#porcentagem_por_10000": { x: number }
  } | {
    "#porcentagem_por_100000": { x: number }
  } | {
    "#porcentagem_por_qualquer_numero": { x: number, y: number }
  } | {
    "#celsius_para_fahrenheit": { x: number }
  } | {
    "#celsius_para_kelvin": { x: number }
  } | {
    "#fahrenheit_para_celsius": { x: number }
  } | {
    "#fahrenheit_para_kelvin": { x: number }
  } | {
    "#kelvin_para_celsius": { x: number }
  } | {
    "#kelvin_para_fahrenheit": { x: number }
  } | {
    "#antilogaritmo-natural": { x: number }
  } | {
    "#antilogaritmo-natural-mais-1": { x: number }
  } | {
    "#antilogaritmo-natural-menos-1": { x: number }
  } | {
    "#cologaritmo-natural": { x: number }
  } | {
    "#cologaritmo-natural-mais-1": { x: number }
  } | {
    "#cologaritmo-natural-menos-1": { x: number }
  } | {
    "#antilogaritmo-base-10": { x: number }
  } | {
    "#antilogaritmo-base-10-mais-1": { x: number }
  } | {
    "#antilogaritmo-base-10-menos-1": { x: number }
  } | {
    "#cologaritmo-base-10": { x: number }
  } | {
    "#cologaritmo-base-10-mais-1": { x: number }
  } | {
    "#cologaritmo-base-10-menos-1": { x: number }
  } | {
    "#antilogaritmo-base-2": { x: number }
  } | {
    "#antilogaritmo-base-2-mais-1": { x: number }
  } | {
    "#antilogaritmo-base-2-menos-1": { x: number }
  } | {
    "#cologaritmo-base-2": { x: number }
  } | {
    "#cologaritmo-base-2-mais-1": { x: number }
  } | {
    "#cologaritmo-base-2-menos-1": { x: number }
  } | {
    "#antilogaritmo-base-qualquer": { x: number, y: number }
  } | {
    "#antilogaritmo-base-qualquer-mais-1": { x: number, y: number }
  } | {
    "#antilogaritmo-base-qualquer-menos-1": { x: number, y: number }
  } | {
    "#cologaritmo-base-qualquer": { x: number, y: number }
  } | {
    "#cologaritmo-base-qualquer-mais-1": { x: number, y: number }
  } | {
    "#cologaritmo-base-qualquer-menos-1": { x: number, y: number }

  }

} export var ArithmSetups: IASetups;
