"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aritmeticos = void 0;
const absoluto_mdl_1 = require("./modules/arithmetic/absoluto.mdl");
const aceleracao_mdl_1 = require("./modules/arithmetic/aceleracao.mdl");
const aceleracao_angular_mcuv_mdl_1 = require("./modules/arithmetic/aceleracao_angular_mcuv.mdl");
const aceleracao_centripeta_mcu_mdl_1 = require("./modules/arithmetic/aceleracao_centripeta_mcu.mdl");
const aceleracao_plano_inclinado_eixo_x_mdl_1 = require("./modules/arithmetic/aceleracao_plano_inclinado_eixo_x.mdl");
const aceleracao_plano_inclinado_eixo_y_mdl_1 = require("./modules/arithmetic/aceleracao_plano_inclinado_eixo_y.mdl");
const alcance_lancamento_vertical_mdl_1 = require("./modules/arithmetic/alcance_lancamento_vertical.mdl");
const alcance_maximo_lancamento_vertical_mdl_1 = require("./modules/arithmetic/alcance_maximo_lancamento_vertical.mdl");
const altura_maxima_lancamento_vertical_mdl_1 = require("./modules/arithmetic/altura_maxima_lancamento_vertical.mdl");
const antilogaritmo_base_10_mdl_1 = require("./modules/arithmetic/antilogaritmo_base_10.mdl");
const antilogaritmo_base_10_mais_1_mdl_1 = require("./modules/arithmetic/antilogaritmo_base_10_mais_1.mdl");
const antilogaritmo_base_10_menos_1_mdl_1 = require("./modules/arithmetic/antilogaritmo_base_10_menos_1.mdl");
const antilogaritmo_base_2_mdl_1 = require("./modules/arithmetic/antilogaritmo_base_2.mdl");
const antilogaritmo_base_2_mais_1_mdl_1 = require("./modules/arithmetic/antilogaritmo_base_2_mais_1.mdl");
const antilogaritmo_base_2_menos_1_mdl_1 = require("./modules/arithmetic/antilogaritmo_base_2_menos_1.mdl");
const antilogaritmo_base_qualquer_mdl_1 = require("./modules/arithmetic/antilogaritmo_base_qualquer.mdl");
const antilogaritmo_base_qualquer_mais_1_mdl_1 = require("./modules/arithmetic/antilogaritmo_base_qualquer_mais_1.mdl");
const antilogaritmo_base_qualquer_menos_1_mdl_1 = require("./modules/arithmetic/antilogaritmo_base_qualquer_menos_1.mdl");
const antilogaritmo_natural_mdl_1 = require("./modules/arithmetic/antilogaritmo_natural.mdl");
const antilogaritmo_natural_mais_1_mdl_1 = require("./modules/arithmetic/antilogaritmo_natural_mais_1.mdl");
const antilogaritmo_natural_menos_1_mdl_1 = require("./modules/arithmetic/antilogaritmo_natural_menos_1.mdl");
const apotema_triangulo_mdl_1 = require("./modules/arithmetic/apotema_triangulo.mdl");
const arco_cosecante_mdl_1 = require("./modules/arithmetic/arco_cosecante.mdl");
const arco_cosecante_hiperbolica_mdl_1 = require("./modules/arithmetic/arco_cosecante_hiperbolica.mdl");
const arco_cosseno_mdl_1 = require("./modules/arithmetic/arco_cosseno.mdl");
const arco_cosseno_hiperbolico_mdl_1 = require("./modules/arithmetic/arco_cosseno_hiperbolico.mdl");
const arco_cotangente_mdl_1 = require("./modules/arithmetic/arco_cotangente.mdl");
const arco_cotangente_hiperbolica_mdl_1 = require("./modules/arithmetic/arco_cotangente_hiperbolica.mdl");
const arco_secante_mdl_1 = require("./modules/arithmetic/arco_secante.mdl");
const arco_secante_hiperbolica_mdl_1 = require("./modules/arithmetic/arco_secante_hiperbolica.mdl");
const arco_seno_mdl_1 = require("./modules/arithmetic/arco_seno.mdl");
const arco_seno_hiperbolico_mdl_1 = require("./modules/arithmetic/arco_seno_hiperbolico.mdl");
const arco_tangente_mdl_1 = require("./modules/arithmetic/arco_tangente.mdl");
const arco_tangente_hiperbolica_mdl_1 = require("./modules/arithmetic/arco_tangente_hiperbolica.mdl");
const area_circulo_mdl_1 = require("./modules/arithmetic/area_circulo.mdl");
const area_circunferencia_mdl_1 = require("./modules/arithmetic/area_circunferencia.mdl");
const area_elipse_mdl_1 = require("./modules/arithmetic/area_elipse.mdl");
const area_esfera_mdl_1 = require("./modules/arithmetic/area_esfera.mdl");
const area_lateral_cilindro_mdl_1 = require("./modules/arithmetic/area_lateral_cilindro.mdl");
const area_lateral_prisma_mdl_1 = require("./modules/arithmetic/area_lateral_prisma.mdl");
const area_lozango_mdl_1 = require("./modules/arithmetic/area_lozango.mdl");
const area_piramide_mdl_1 = require("./modules/arithmetic/area_piramide.mdl");
const area_poligono_mdl_1 = require("./modules/arithmetic/area_poligono.mdl");
const area_quadrado_mdl_1 = require("./modules/arithmetic/area_quadrado.mdl");
const area_retangulo_mdl_1 = require("./modules/arithmetic/area_retangulo.mdl");
const area_trapezio_mdl_1 = require("./modules/arithmetic/area_trapezio.mdl");
const area_triangulo_mdl_1 = require("./modules/arithmetic/area_triangulo.mdl");
const arranjo_mdl_1 = require("./modules/arithmetic/arranjo.mdl");
const arrendonda_para_baixo_mdl_1 = require("./modules/arithmetic/arrendonda_para_baixo.mdl");
const arrendonda_para_cima_mdl_1 = require("./modules/arithmetic/arrendonda_para_cima.mdl");
const arrendonda_para_decimal_32bits_mdl_1 = require("./modules/arithmetic/arrendonda_para_decimal_32bits.mdl");
const arrendonda_para_inteiro_mdl_1 = require("./modules/arithmetic/arrendonda_para_inteiro.mdl");
const atrito_mdl_1 = require("./modules/arithmetic/atrito.mdl");
const calor_latente_mdl_1 = require("./modules/arithmetic/calor_latente.mdl");
const calor_sensivel_mdl_1 = require("./modules/arithmetic/calor_sensivel.mdl");
const celsius_fahrenheit_mdl_1 = require("./modules/arithmetic/celsius_fahrenheit.mdl");
const celsius_kelvin_mdl_1 = require("./modules/arithmetic/celsius_kelvin.mdl");
const cologaritmo_base_10_mdl_1 = require("./modules/arithmetic/cologaritmo_base_10.mdl");
const cologaritmo_base_10_mais_1_mdl_1 = require("./modules/arithmetic/cologaritmo_base_10_mais_1.mdl");
const cologaritmo_base_10_menos_1_mdl_1 = require("./modules/arithmetic/cologaritmo_base_10_menos_1.mdl");
const cologaritmo_base_2_mdl_1 = require("./modules/arithmetic/cologaritmo_base_2.mdl");
const cologaritmo_base_2_mais_1_mdl_1 = require("./modules/arithmetic/cologaritmo_base_2_mais_1.mdl");
const cologaritmo_base_2_menos_1_mdl_1 = require("./modules/arithmetic/cologaritmo_base_2_menos_1.mdl");
const cologaritmo_base_qualquer_mdl_1 = require("./modules/arithmetic/cologaritmo_base_qualquer.mdl");
const cologaritmo_base_qualquer_mais_1_mdl_1 = require("./modules/arithmetic/cologaritmo_base_qualquer_mais_1.mdl");
const cologaritmo_base_qualquer_menos_1_mdl_1 = require("./modules/arithmetic/cologaritmo_base_qualquer_menos_1.mdl");
const cologaritmo_natural_mdl_1 = require("./modules/arithmetic/cologaritmo_natural.mdl");
const cologaritmo_natural_mais_1_mdl_1 = require("./modules/arithmetic/cologaritmo_natural_mais_1.mdl");
const cologaritmo_natural_menos_1_mdl_1 = require("./modules/arithmetic/cologaritmo_natural_menos_1.mdl");
const combinacao_mdl_1 = require("./modules/arithmetic/combinacao.mdl");
const concentracao_mdl_1 = require("./modules/arithmetic/concentracao.mdl");
const consumo_de_energia_mdl_1 = require("./modules/arithmetic/consumo_de_energia.mdl");
const contra_forca_eletromotriz_mdl_1 = require("./modules/arithmetic/contra_forca_eletromotriz.mdl");
const cosecante_mdl_1 = require("./modules/arithmetic/cosecante.mdl");
const cosecante_hiperbolica_mdl_1 = require("./modules/arithmetic/cosecante_hiperbolica.mdl");
const cosseno_mdl_1 = require("./modules/arithmetic/cosseno.mdl");
const cosseno_hiperbolico_mdl_1 = require("./modules/arithmetic/cosseno_hiperbolico.mdl");
const cotangente_mdl_1 = require("./modules/arithmetic/cotangente.mdl");
const cotangente_hiperbolica_mdl_1 = require("./modules/arithmetic/cotangente_hiperbolica.mdl");
const densidade_mdl_1 = require("./modules/arithmetic/densidade.mdl");
const determinante_2x2_mdl_1 = require("./modules/arithmetic/determinante_2x2.mdl");
const determinante_3x3_mdl_1 = require("./modules/arithmetic/determinante_3x3.mdl");
const diagrama_venn_2_grupos_mdl_1 = require("./modules/arithmetic/diagrama_venn_2_grupos.mdl");
const diagrama_venn_3_grupos_mdl_1 = require("./modules/arithmetic/diagrama_venn_3_grupos.mdl");
const diagrama_venn_4_grupos_mdl_1 = require("./modules/arithmetic/diagrama_venn_4_grupos.mdl");
const dilatacao_linear_mdl_1 = require("./modules/arithmetic/dilatacao_linear.mdl");
const dilatacao_superficial_mdl_1 = require("./modules/arithmetic/dilatacao_superficial.mdl");
const dilatacao_volumetrica_mdl_1 = require("./modules/arithmetic/dilatacao_volumetrica.mdl");
const divisao_mdl_1 = require("./modules/arithmetic/divisao.mdl");
const efeito_fotoeletrico_mdl_1 = require("./modules/arithmetic/efeito_fotoeletrico.mdl");
const efeito_joule_mdl_1 = require("./modules/arithmetic/efeito_joule.mdl");
const empuxo_hidroestatica_hidrodinamica_mdl_1 = require("./modules/arithmetic/empuxo_hidroestatica_hidrodinamica.mdl");
const energia_cinetica_mdl_1 = require("./modules/arithmetic/energia_cinetica.mdl");
const energia_potencial_elastica_mdl_1 = require("./modules/arithmetic/energia_potencial_elastica.mdl");
const energia_potencial_gravitacional_mdl_1 = require("./modules/arithmetic/energia_potencial_gravitacional.mdl");
const equacao_horaria_aceleracao_mdl_1 = require("./modules/arithmetic/equacao_horaria_aceleracao.mdl");
const equacao_horaria_aceleracao_mhs_mdl_1 = require("./modules/arithmetic/equacao_horaria_aceleracao_mhs.mdl");
const equacao_horaria_espaco_mdl_1 = require("./modules/arithmetic/equacao_horaria_espaco.mdl");
const equacao_horaria_espaco_mcuv_mdl_1 = require("./modules/arithmetic/equacao_horaria_espaco_mcuv.mdl");
const equacao_horaria_forca_mdl_1 = require("./modules/arithmetic/equacao_horaria_forca.mdl");
const equacao_horaria_posicao_mhs_mdl_1 = require("./modules/arithmetic/equacao_horaria_posicao_mhs.mdl");
const equacao_horaria_tempo_mdl_1 = require("./modules/arithmetic/equacao_horaria_tempo.mdl");
const equacao_horaria_tempo_espaco_mdl_1 = require("./modules/arithmetic/equacao_horaria_tempo_espaco.mdl");
const equacao_horaria_tempo_mcuv_mdl_1 = require("./modules/arithmetic/equacao_horaria_tempo_mcuv.mdl");
const equacao_horaria_velocidade_mdl_1 = require("./modules/arithmetic/equacao_horaria_velocidade.mdl");
const equacao_horaria_velocidade_mhs_mdl_1 = require("./modules/arithmetic/equacao_horaria_velocidade_mhs.mdl");
const equacao_lagrange_mdl_1 = require("./modules/arithmetic/equacao_lagrange.mdl");
const equacao_torricelli_mdl_1 = require("./modules/arithmetic/equacao_torricelli.mdl");
const escala_geografica_mdl_1 = require("./modules/arithmetic/escala_geografica.mdl");
const espaco_mdl_1 = require("./modules/arithmetic/espaco.mdl");
const exponencial_mdl_1 = require("./modules/arithmetic/exponencial.mdl");
const exponencial_mais_1_mdl_1 = require("./modules/arithmetic/exponencial_mais_1.mdl");
const exponencial_menos_1_mdl_1 = require("./modules/arithmetic/exponencial_menos_1.mdl");
const fahrenheit_celsius_mdl_1 = require("./modules/arithmetic/fahrenheit_celsius.mdl");
const fahrenheit_kelvin_mdl_1 = require("./modules/arithmetic/fahrenheit_kelvin.mdl");
const fatorial_mdl_1 = require("./modules/arithmetic/fatorial.mdl");
const forca_eletromotriz_mdl_1 = require("./modules/arithmetic/forca_eletromotriz.mdl");
const forca_gravitacional_mdl_1 = require("./modules/arithmetic/forca_gravitacional.mdl");
const frequencia_mdl_1 = require("./modules/arithmetic/frequencia.mdl");
const indice_desenvolvimento_humano_mdl_1 = require("./modules/arithmetic/indice_desenvolvimento_humano.mdl");
const indice_gini_mdl_1 = require("./modules/arithmetic/indice_gini.mdl");
const indice_massa_corporal_mdl_1 = require("./modules/arithmetic/indice_massa_corporal.mdl");
const juros_compostos_mdl_1 = require("./modules/arithmetic/juros_compostos.mdl");
const juros_simples_mdl_1 = require("./modules/arithmetic/juros_simples.mdl");
const kelvin_celsius_mdl_1 = require("./modules/arithmetic/kelvin_celsius.mdl");
const kelvin_fahrenheit_mdl_1 = require("./modules/arithmetic/kelvin_fahrenheit.mdl");
const lancamento_horizontal_mdl_1 = require("./modules/arithmetic/lancamento_horizontal.mdl");
const lei_de_coulomb_mdl_1 = require("./modules/arithmetic/lei_de_coulomb.mdl");
const lei_de_lenz_mdl_1 = require("./modules/arithmetic/lei_de_lenz.mdl");
const lei_de_ohm_mdl_1 = require("./modules/arithmetic/lei_de_ohm.mdl");
const lei_geral_dos_gases_mdl_1 = require("./modules/arithmetic/lei_geral_dos_gases.mdl");
const leis_de_newton_mdl_1 = require("./modules/arithmetic/leis_de_newton.mdl");
const logaritmo_base_10_mdl_1 = require("./modules/arithmetic/logaritmo_base_10.mdl");
const logaritmo_base_10_mais_1_mdl_1 = require("./modules/arithmetic/logaritmo_base_10_mais_1.mdl");
const logaritmo_base_10_menos_1_mdl_1 = require("./modules/arithmetic/logaritmo_base_10_menos_1.mdl");
const logaritmo_base_2_mdl_1 = require("./modules/arithmetic/logaritmo_base_2.mdl");
const logaritmo_base_2_mais_1_mdl_1 = require("./modules/arithmetic/logaritmo_base_2_mais_1.mdl");
const logaritmo_base_2_menos_1_mdl_1 = require("./modules/arithmetic/logaritmo_base_2_menos_1.mdl");
const logaritmo_base_qualquer_mdl_1 = require("./modules/arithmetic/logaritmo_base_qualquer.mdl");
const logaritmo_base_qualquer_mais_1_mdl_1 = require("./modules/arithmetic/logaritmo_base_qualquer_mais_1.mdl");
const logaritmo_base_qualquer_menos_1_mdl_1 = require("./modules/arithmetic/logaritmo_base_qualquer_menos_1.mdl");
const logaritmo_natural_mdl_1 = require("./modules/arithmetic/logaritmo_natural.mdl");
const logaritmo_natural_mais_1_mdl_1 = require("./modules/arithmetic/logaritmo_natural_mais_1.mdl");
const logaritmo_natural_menos_1_mdl_1 = require("./modules/arithmetic/logaritmo_natural_menos_1.mdl");
const periodo_mdl_1 = require("./modules/arithmetic/periodo.mdl");
const peso_aparente_hidroestatica_hidrodinamica_mdl_1 = require("./modules/arithmetic/peso_aparente_hidroestatica_hidrodinamica.mdl");
const plano_inclinado_com_atrito_mdl_1 = require("./modules/arithmetic/plano_inclinado_com_atrito.mdl");
const plano_inclinado_sem_atrito_mdl_1 = require("./modules/arithmetic/plano_inclinado_sem_atrito.mdl");
const porcentagem_mdl_1 = require("./modules/arithmetic/porcentagem.mdl");
const porcentagem_por_1000_mdl_1 = require("./modules/arithmetic/porcentagem_por_1000.mdl");
const porcentagem_por_10000_mdl_1 = require("./modules/arithmetic/porcentagem_por_10000.mdl");
const porcentagem_por_100000_mdl_1 = require("./modules/arithmetic/porcentagem_por_100000.mdl");
const potencia_mdl_1 = require("./modules/arithmetic/potencia.mdl");
const potencia_de_potencia_mdl_1 = require("./modules/arithmetic/potencia_de_potencia.mdl");
const potencia_de_potencia_mais_1_mdl_1 = require("./modules/arithmetic/potencia_de_potencia_mais_1.mdl");
const potencia_de_potencia_menos_1_mdl_1 = require("./modules/arithmetic/potencia_de_potencia_menos_1.mdl");
const potencia_mais_1_mdl_1 = require("./modules/arithmetic/potencia_mais_1.mdl");
const potencia_menos_1_mdl_1 = require("./modules/arithmetic/potencia_menos_1.mdl");
const potencial_elastico_mdl_1 = require("./modules/arithmetic/potencial_elastico.mdl");
const potencial_mecanico_mdl_1 = require("./modules/arithmetic/potencial_mecanico.mdl");
const principio_fundamental_hidroestatica_hidrodinamica_mdl_1 = require("./modules/arithmetic/principio_fundamental_hidroestatica_hidrodinamica.mdl");
const probabilidade_mdl_1 = require("./modules/arithmetic/probabilidade.mdl");
const quadrado_de_punnet_mdl_1 = require("./modules/arithmetic/quadrado_de_punnet.mdl");
const quadrado_de_punnet_extendido_mdl_1 = require("./modules/arithmetic/quadrado_de_punnet_extendido.mdl");
const quantidade_conjuntos_mdl_1 = require("./modules/arithmetic/quantidade_conjuntos.mdl");
const raiz_cubica_mdl_1 = require("./modules/arithmetic/raiz_cubica.mdl");
const raiz_decima_potencia_mdl_1 = require("./modules/arithmetic/raiz_decima_potencia.mdl");
const raiz_nona_potencia_mdl_1 = require("./modules/arithmetic/raiz_nona_potencia.mdl");
const raiz_oitava_potencia_mdl_1 = require("./modules/arithmetic/raiz_oitava_potencia.mdl");
const raiz_quadrada_mdl_1 = require("./modules/arithmetic/raiz_quadrada.mdl");
const raiz_quarta_potencia_mdl_1 = require("./modules/arithmetic/raiz_quarta_potencia.mdl");
const raiz_quinta_potencia_mdl_1 = require("./modules/arithmetic/raiz_quinta_potencia.mdl");
const raiz_setima_potencia_mdl_1 = require("./modules/arithmetic/raiz_setima_potencia.mdl");
const raiz_sexta_potencia_mdl_1 = require("./modules/arithmetic/raiz_sexta_potencia.mdl");
const regra_de_tres_simples_mdl_1 = require("./modules/arithmetic/regra_de_tres-simples.mdl");
const regra_de_tres_composta_mdl_1 = require("./modules/arithmetic/regra_de_tres_composta.mdl");
const relacao_euler_mdl_1 = require("./modules/arithmetic/relacao-euler.mdl");
const rendimento_mdl_1 = require("./modules/arithmetic/rendimento.mdl");
const resto_mdl_1 = require("./modules/arithmetic/resto.mdl");
const secante_mdl_1 = require("./modules/arithmetic/secante.mdl");
const secante_hiperbolica_mdl_1 = require("./modules/arithmetic/secante_hiperbolica.mdl");
const seno_mdl_1 = require("./modules/arithmetic/seno.mdl");
const seno_hiperbolico_mdl_1 = require("./modules/arithmetic/seno_hiperbolico.mdl");
const sinalizacao_octantes_mdl_1 = require("./modules/arithmetic/sinalizacao_octantes.mdl");
const sinalizacao_quadrantes_mdl_1 = require("./modules/arithmetic/sinalizacao_quadrantes.mdl");
const sistema_de_equacoes_mdl_1 = require("./modules/arithmetic/sistema_de_equacoes.mdl");
const sistema_de_inequacoes_mdl_1 = require("./modules/arithmetic/sistema_de_inequacoes.mdl");
const sistemas_lineares_mdl_1 = require("./modules/arithmetic/sistemas_lineares.mdl");
const soma_mdl_1 = require("./modules/arithmetic/soma.mdl");
const subtracao_mdl_1 = require("./modules/arithmetic/subtracao.mdl");
const tangente_mdl_1 = require("./modules/arithmetic/tangente.mdl");
const tangente_hiperbolica_mdl_1 = require("./modules/arithmetic/tangente_hiperbolica.mdl");
const tempo_mdl_1 = require("./modules/arithmetic/tempo.mdl");
const teorema_boltzmann_mdl_1 = require("./modules/arithmetic/teorema_boltzmann.mdl");
const teorema_coulomb_mdl_1 = require("./modules/arithmetic/teorema_coulomb.mdl");
const teorema_girard_mdl_1 = require("./modules/arithmetic/teorema_girard.mdl");
const teorema_pascal_mdl_1 = require("./modules/arithmetic/teorema_pascal.mdl");
const teorema_pitagoras_a_n_mdl_1 = require("./modules/arithmetic/teorema_pitagoras_a_n.mdl");
const teorema_pitagoras_b_c_h_mdl_1 = require("./modules/arithmetic/teorema_pitagoras_b_c_h.mdl");
const teorema_pitagoras_classico_mdl_1 = require("./modules/arithmetic/teorema_pitagoras_classico.mdl");
const teorema_pitagoras_m_n_mdl_1 = require("./modules/arithmetic/teorema_pitagoras_m_n.mdl");
const teorema_plank_mdl_1 = require("./modules/arithmetic/teorema_plank.mdl");
const teorema_stevin_mdl_1 = require("./modules/arithmetic/teorema_stevin.mdl");
const teorema_stirling_mdl_1 = require("./modules/arithmetic/teorema_stirling.mdl");
const teorema_tales_mileto_mdl_1 = require("./modules/arithmetic/teorema_tales_mileto.mdl");
const titulacao_mdl_1 = require("./modules/arithmetic/titulacao.mdl");
const torricelli_mcuv_mdl_1 = require("./modules/arithmetic/torricelli_mcuv.mdl");
const trabalho_mdl_1 = require("./modules/arithmetic/trabalho.mdl");
const valor_maximo_mdl_1 = require("./modules/arithmetic/valor_maximo.mdl");
const valor_minimo_mdl_1 = require("./modules/arithmetic/valor_minimo.mdl");
const velocidade_mdl_1 = require("./modules/arithmetic/velocidade.mdl");
const velocidade_angular_mcu_mdl_1 = require("./modules/arithmetic/velocidade_angular_mcu.mdl");
const velocidade_linear_mcu_mdl_1 = require("./modules/arithmetic/velocidade_linear_mcu.mdl");
const volume_cilindro_mdl_1 = require("./modules/arithmetic/volume_cilindro.mdl");
const volume_cone_mdl_1 = require("./modules/arithmetic/volume_cone.mdl");
const volume_cubo_mdl_1 = require("./modules/arithmetic/volume_cubo.mdl");
const volume_dodecaedro_mdl_1 = require("./modules/arithmetic/volume_dodecaedro.mdl");
const volume_esfera_mdl_1 = require("./modules/arithmetic/volume_esfera.mdl");
const volume_hexaedro_mdl_1 = require("./modules/arithmetic/volume_hexaedro.mdl");
const volume_icosaedro_mdl_1 = require("./modules/arithmetic/volume_icosaedro.mdl");
const volume_octaedro_mdl_1 = require("./modules/arithmetic/volume_octaedro.mdl");
const volume_paralelogramo_mdl_1 = require("./modules/arithmetic/volume_paralelogramo.mdl");
const volume_piramide_mdl_1 = require("./modules/arithmetic/volume_piramide.mdl");
const volume_poligono_formato_lozango_mdl_1 = require("./modules/arithmetic/volume_poligono_formato_lozango.mdl");
const volume_poligono_formato_trapezio_mdl_1 = require("./modules/arithmetic/volume_poligono_formato_trapezio.mdl");
const volume_prisma_mdl_1 = require("./modules/arithmetic/volume_prisma.mdl");
const volume_tetraedro_mdl_1 = require("./modules/arithmetic/volume_tetraedro.mdl");
exports.Aritmeticos = {
    /**
     *
     * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
     *
     * ___
     * ![Library Badge - Arithmetic Category](https://github.com/Humbanew/wertsfy/assets/59739253/653499fe-188a-451c-b884-8846c52944a9)
     *
     * **``Categoria [Category] - Consts``**
     *
     * Contém as constantes aritméticas. _[Contains the arithmetic constants.]_
     *
     * ___
     * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
     * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
     *
     */
    Consts: {
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor de avogadro. [_Returns the value of avogadro._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_avogadro: 6.022140857e23,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 1/2. [_Returns the cubic root of 1/2._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of01_02: 0.7071067811865476,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 1/4. [_Returns the cubic root of 1/4._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of01_04: 0.50000000000000,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 1/6. [_Returns the cubic root of 1/6._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of01_06: 0.408248290463863,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 1/8. [_Returns the cubic root of 1/8._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of01_08: 0.3535533905932738,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 1. [_Returns the cubic root of 1._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of01: 1.00000000000000,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 2. [_Returns the cubic root of 2._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of02: 1.25992104989487,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 3. [_Returns the cubic root of 3._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of03: 1.5874010519682,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 4. [_Returns the cubic root of 4._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of04: 1.99999999999999,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 5. [_Returns the cubic root of 5._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of05: 2.23606797749979,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 6. [_Returns the cubic root of 6._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of06: 2.58198889747161,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 7. [_Returns the cubic root of 7._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of07: 2.91293118277239,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 8. [_Returns the cubic root of 8._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of08: 3.26249509498958,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 9. [_Returns the cubic root of 9._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of09: 3.62449963442055,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz cúbica de 10. [_Returns the cubic root of 10._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_cbrt_of10: 3.99999999999999,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor de coulomb. [_Returns the value of coulomb._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_coulomb: 1.60217657e-19,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor de euler. [_Returns the value of euler._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_euler: 2.7182818284590452353602874713527,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor do logaritmo de 2. [_Returns the value of the logarithm of 2._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_logarithm2: 0.6931471805599453,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor do logaritmo de 2 na base euler. [_Returns the logarithm value of 2 at the Euler base._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_logarithm2e: 1.4426950408889634,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor do logaritmo de 10. [_Returns the value of the logarithm of 10._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_logarithm10: 2.302585092994046,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor do logaritmo de 10 na base euler. [_Returns the logarithm value of 10 at the Euler base._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_logarithm10e: 0.43429448190325183,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor máximo. [_Returns the max value._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_maxvalue: 999999999999999,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor mínimo. [_Returns the min value._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_minvalue: -999999999999999,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor de newton. [_Returns the value of newton._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_newton: 0.6931471805599453,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor de pi. [_Returns the value of pi._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_pi: 3.141592653589793,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor de plank. [_Returns the value of plank._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_plank: 6.62606957e-34,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 1/2. [_Returns the square root of 1/2._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of01_02: 0.7937005259840998,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 1/4. [_Returns the square root of 1/4._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of01_04: 0.6299605249474366,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 1/6. [_Returns the square root of 1/6._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of01_06: 0.5503212081491045,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 1/8. [_Returns the square root of 1/8._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of01_08: 0.500000000000000,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 1. [_Returns the square root of 1._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of01: 1.00000000000000,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 2. [_Returns the square root of 2._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of02: 1.414213562373095,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 3. [_Returns the square root of 3._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of03: 1.732050807568877,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 4. [_Returns the square root of 4._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of04: 2.00000000000000,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 5. [_Returns the square root of 5._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of05: 2.23606797749979,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 6. [_Returns the square root of 6._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of06: 2.449489742783178,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 7. [_Returns the square root of 7._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of07: 2.64575131106459,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 8. [_Returns the square root of 8._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of08: 2.82842712474619,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 9. [_Returns the square root of 9._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of09: 3.00000000000000,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor da raiz quadrada de 10. [_Returns the square root of 10._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_sqrt_of10: 3.16227766016838,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Constant](https://github.com/Humbanew/wertsfy/assets/59739253/5369d8e3-f62e-41b4-8526-fafbc862a0ee)
         *
         * **``Constante [Constant]``**
         *
         * Retorna o valor de tesla. [_Returns the value of tesla._]
         *
         * @returns {number}
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        c_tesla: 1.60217657e-19
    },
    /**
     *
     * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
     *
     * ___
     * ![Library Badge - Arithmetic Category](https://github.com/Humbanew/wertsfy/assets/59739253/653499fe-188a-451c-b884-8846c52944a9)
     *
     * **``Categoria [Category] - Methods``**
     *
     * Contém as funções aritméticas. _[Contains the arithmetic functions.]_
     *
     * ___
     * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
     * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
     *
     */
    Methods: {
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Absoluto``**
         *
         * Realiza o cálculo do valor absoluto. _[Performs the calculation of the absolute value.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         **/
        m_absoluto: absoluto_mdl_1.absoluto,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Aceleração Angular do Movimento Circular Uniformente Variado``**
         *
         * Realiza o cálculo da aceleração angular do movimento circular uniformente variado. _[Performs the calculation of the angular acceleration of the uniformly varied circular movement.]_
         *
         * ___
         * @returns {number} @param {{inicial: number, final: number}} velocidadeAngular ``attr¹ ⇒`` **velocidade angular inicial e final de um objeto** ``₪`` _velocity angular initial and final of an object_ @param {{inicial: number, final: number}} tempo ``attr² ⇒`` **tempo inicial e final da aceleração** ``₪`` _velocity angular initial and final of an object_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_aceleracao_angular_mcuv: aceleracao_angular_mcuv_mdl_1.aceleracaoAngularMCUV,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Aceleração Centrípeta do Movimento Circular Uniforme``**
         *
         * Realiza o cálculo da aceleração centrípeta do movimento circular uniforme. _[Performs the calculation of the centripetal acceleration of the uniform circular movement.]_
         *
         * ___
         * @returns {number} @param {number} velocidade ``attr¹ ⇒`` **velocidade realizada pela aceleração** ``₪`` _velocity performed by the acceleration_ @param {number} raio ``attr² ⇒`` **raio da circunferência** ``₪`` _radius of the circle_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_aceleracao_centripeta_mcu: aceleracao_centripeta_mcu_mdl_1.aceleracaoCentripetaMCU,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Aceleração Plano Inclinado Eixo X``**
         *
         * Realiza o cálculo da aceleração plano inclinado no eixo x. _[Performs the calculation of inclined plane acceleration on the x axis.]_
         *
         * ___
         * @returns {number} @param {number} massa ``attr¹ ⇒`` **massa de um objeto** ``₪`` _object mass_ @param {number} gravidade ``attr² ⇒`` **gravidade** ``₪`` _gravity_ @param {number} angulo ``attr³ ⇒`` **angulo** ``₪`` _angle_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_aceleracao_plano_inclinado_eixo_x: aceleracao_plano_inclinado_eixo_x_mdl_1.aceleracaoPlanoInclinadoEixoX,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Aceleração Plano Inclinado Eixo Y``**
         *
         * Realiza o cálculo da aceleração plano inclinado no eixo y. _[Performs the calculation of the tilt plane acceleration on the y axis.]_
         *
         * ___
         * @returns {number} @param {number} massa ``attr¹ ⇒`` **massa de um objeto** ``₪`` _object mass_ @param {number} gravidade ``attr² ⇒`` **gravidade** ``₪`` _gravity_ @param {number} angulo ``attr³ ⇒`` **angulo** ``₪`` _angle_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_aceleracao_plano_inclinado_eixo_y: aceleracao_plano_inclinado_eixo_y_mdl_1.aceleracaoPlanoInclinadoEixoY,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Aceleração``**
         *
         * Realiza o cálculo da aceleração. _[Performs the acceleration calculation.]_
         *
         * ___
         * @returns {number} @param {number} velocidade ``attr¹ ⇒`` **velocidade da aceleração** ``₪`` _velocity of the acceleration_ @param {{inicial: number, final: number}} tempo ``attr² ⇒`` **tempo inicial e final** ``₪`` _initial and final time_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_aceleracao: aceleracao_mdl_1.aceleracao,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Alcance Lançamento Vertical``**
         *
         * Realiza o cálculo do alcance lançamento vertical. _[Performs the calculation of the maximum vertical movement.]_
         *
         * ___
         * @returns {number} @param {number} velocidade ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {{inicial: number, final: number}} tempo ``attr² ⇒`` **tempo inicial e final** ``₪`` _initial and final time_ @param {number} angulo ``attr³ ⇒`` **angulo** ``₪`` _angle_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_alcance_lancamento_vertical: alcance_lancamento_vertical_mdl_1.alcanceLancamentoVertical,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Alcance Máximo Lançamento Vertical``**
         *
         * Realiza o cálculo do alcance máximo lançamento vertical. _[Performs the calculation of the maximum vertical movement.]_
         *
         * ___
         * @returns {number} @param {number} velocidade ``attr¹ ⇒`` **velocidade do lançamento** ``₪`` _launching speed_ @param {number} angulo ``attr³ ⇒`` **angulo** ``₪`` _angle_  @param {number} gravidade ``attr² ⇒`` **gravidade** ``₪`` _gravity_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_alcance_maximo_lancamento_vertical: alcance_maximo_lancamento_vertical_mdl_1.alcanceMaximoLancamentoVertical,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Altura Máxima Lançamento Vertical``**
         *
         * Realiza o cálculo da altura máxima lançamento vertical. _[Performs the calculation of the maximum vertical movement.]_
         *
         * ___
         * @returns {number} @param {number} velocidadeInicial ``attr¹ ⇒`` **velocidade inicial do lançamento** ``₪`` _velocity initial of the launch_ @param {number} gravidade ``attr² ⇒`` **gravidade** ``₪`` _gravity_ @param {number} angulo ``attr³ ⇒`` **angulo** ``₪`` _angle_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_altura_maxima_lancamento_vertical: altura_maxima_lancamento_vertical_mdl_1.alturaMaximaLancamentoVertical,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Base 2``**
         *
         * Realiza o cálculo do antilogaritmo base 2. _[Performs the calculation of the base 2 antilogarithm.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_base_2: antilogaritmo_base_2_mdl_1.antilogaritmoBase2,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Base 2 mais 1``**
         *
         * Realiza o cálculo do antilogaritmo base 2 mais 1. _[Performs the calculation of the base 2 antilogarithm plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_base_2_mais_1: antilogaritmo_base_2_mais_1_mdl_1.antilogaritmoBase2Mais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Base 2 menos 1``**
         *
         * Realiza o cálculo do antilogaritmo base 2 menos 1. _[Performs the calculation of the base 2 antilogarithm minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_base_2_menos_1: antilogaritmo_base_2_menos_1_mdl_1.antilogaritmoBase2Menos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Base 10``**
         *
         * Realiza o cálculo do antilogaritmo base 10. _[Performs the calculation of the base 10 antilogarithm.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_base_10: antilogaritmo_base_10_mdl_1.antilogaritmoBase10,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Base 10 mais 1``**
         *
         * Realiza o cálculo do antilogaritmo base 10 mais 1. _[Performs the calculation of the base 10 antilogarithm plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_base_10_mais_1: antilogaritmo_base_10_mais_1_mdl_1.antilogaritmoBase10Mais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Base 10 menos 1``**
         *
         * Realiza o cálculo do antilogaritmo base 10 menos 1. _[Performs the calculation of the base 10 antilogarithm minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_base_10_menos_1: antilogaritmo_base_10_menos_1_mdl_1.antilogaritmoBase10Menos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Base Qualquer``**
         *
         * Realiza o cálculo do antilogaritmo base qualquer. _[Performs the calculation of the any base antilogarithm.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number} y ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_base_qualquer: antilogaritmo_base_qualquer_mdl_1.antilogaritmoBaseQualquer,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Base Qualquer mais 1```**
         *
         * Realiza o cálculo do antilogaritmo base qualquer mais 1. _[Performs the calculation of the any base antilogarithm plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number} y ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_base_qualquer_mais_1: antilogaritmo_base_qualquer_mais_1_mdl_1.antilogaritmoBaseQualquerMais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Base Qualquer menos 1``**
         *
         * Realiza o cálculo do antilogaritmo base qualquer menos 1. _[Performs the calculation of the any base antilogarithm minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number} y ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_base_qualquer_menos_1: antilogaritmo_base_qualquer_menos_1_mdl_1.antilogaritmoBaseQualquerMenos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Natural``**
         *
         * Realiza o cálculo do antilogaritmo natural. _[Performs the calculation of the natural antilogarithm.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_natural: antilogaritmo_natural_mdl_1.antilogaritmoNatural,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Natural mais 1``**
         *
         * Realiza o cálculo do antilogaritmo natural mais 1. _[Performs the calculation of the natural antilogarithm plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_natural_mais_1: antilogaritmo_natural_mais_1_mdl_1.antilogaritmoNaturalMais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Antilogarítmo Natural menos 1``**
         *
         * Realiza o cálculo do antilogaritmo natural menos 1. _[Performs the calculation of the natural antilogarithm minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_antilogaritmo_natural_menos_1: antilogaritmo_natural_menos_1_mdl_1.antilogaritmoNaturalMenos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Apótema do Triângulo``**
         *
         * Realiza o cálculo do apótema do triângulo. _[Performs the calculation of the apothem of the triangle.]_
         *
         * ___
         * @returns {number} @param {number} lado ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_apotema_triangulo: apotema_triangulo_mdl_1.apotemaTriangulo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Cosecante``**
         *
         * Realiza o cálculo do arco cosecante. _[Performs the calculation of the cosecante arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_cosecante: arco_cosecante_mdl_1.arcoCosecante,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Cosecante Hiperbólica``**
         *
         * Realiza o cálculo do arco cosecante hiperbólico. _[Performs the calculation of the hyperbolic cosecante arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_cosecante_hiperbolica: arco_cosecante_hiperbolica_mdl_1.arcoCosecanteHiperbolica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Cosseno``**
         *
         * Realiza o cálculo do arco cosseno. _[Performs the calculation of the cosine arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_cosseno: arco_cosseno_mdl_1.arcoCosseno,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Cosseno Hiperbólico``**
         *
         * Realiza o cálculo do arco cosseno hiperbólico. _[Performs the calculation of the hyperbolic cosine arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_cosseno_hiperbolico: arco_cosseno_hiperbolico_mdl_1.arcoCossenoHiperbolico,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Cotangente``**
         *
         * Realiza o cálculo do arco cotangente. _[Performs the calculation of the cotangent arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_cotangente: arco_cotangente_mdl_1.arcoCotangente,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Cotangente Hiperbólico``**
         *
         * Realiza o cálculo do arco cotangente hiperbólico. _[Performs the calculation of the hyperbolic cotangent arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_cotangente_hiperbolica: arco_cotangente_hiperbolica_mdl_1.arcoCotangenteHiperbolica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Secante``**
         *
         * Realiza o cálculo do arco secante. _[Performs the calculation of the secant arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_secante: arco_secante_mdl_1.arcoSecante,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Secante Hiperbólica``**
         *
         * Realiza o cálculo do arco secante hiperbólico. _[Performs the calculation of the hyperbolic secant arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_secante_hiperbolica: arco_secante_hiperbolica_mdl_1.arcoSecanteHiperbolica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Seno``**
         *
         * Realiza o cálculo do arco seno. _[Performs the calculation of the sine arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_seno: arco_seno_mdl_1.arcoSeno,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Seno Hiperbólico``**
         *
         * Realiza o cálculo do arco seno hiperbólico. _[Performs the calculation of the hyperbolic sine arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_seno_hiperbolico: arco_seno_hiperbolico_mdl_1.arcoSenoHiperbolico,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Tangente``**
         *
         * Realiza o cálculo do arco tangente. _[Performs the calculation of the tangent arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_tangente: arco_tangente_mdl_1.arcoTangente,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arco Tangente Hiperbólico``**
         *
         * Realiza o cálculo do arco tangente hiperbólica. _[Performs the calculation of the hyperbolic tangent arc.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arco_tangente_hiperbolica: arco_tangente_hiperbolica_mdl_1.arcoTangenteHiperbolica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área do Circulo``**
         *
         * Realiza o cálculo da área do circulo. _[Performs the calculation of the area of a circle.]_
         *
         * ___
         * @returns {number} @param {number} raio ``attr¹ ⇒`` **raio do círculo** ``₪`` _radius of the circle_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_circulo: area_circulo_mdl_1.areaCirculo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área da Circunferência``**
         *
         * Realiza o cálculo da área da circunferência. _[Performs the calculation of the area of a circle.]_
         *
         * ___
         * @returns {number} @param {number} raio ``attr¹ ⇒`` **raio da circunferência** ``₪`` _circumference radius_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_circunferencia: area_circunferencia_mdl_1.areaCircunferencia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área da Elipse``**
         *
         * Realiza o cálculo da área da elipse. _[Performs the calculation of the area of an ellipse.]_
         *
         * ___
         * @returns {number} @param {number} raio ``attr¹ ⇒`` **raio da elipse** ``₪`` _radius of the ellipse_ @param {number} altura ``attr² ⇒`` **altura da elipse** ``₪`` _height of the ellipse_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_elipse: area_elipse_mdl_1.areaElipse,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área da Esfera``**
         *
         * Realiza o cálculo da área da esfera. _[Performs the calculation of the area of a sphere.]_
         *
         * ___
         * @returns {number} @param {number} raio ``attr¹ ⇒`` **raio da esfera** ``₪`` _sphere radius_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_esfera: area_esfera_mdl_1.areaEsfera,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área Lateral do Cilindro``**
         *
         * Realiza o cálculo da área lateral do cilindro. _[Performs the calculation of the lateral area of a cylinder.]_
         *
         * ___
         * @returns {number} @param {number} raio ``attr¹ ⇒`` **raio da cilindro** ``₪`` _radius of the cylinder_ @param {number} altura ``attr² ⇒`` **altura da cilindro** ``₪`` _height of the cylinder_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_lateral_cilindro: area_lateral_cilindro_mdl_1.areaLateralCilindro,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área Lateral do Prisma``**
         *
         * Realiza o cálculo da área lateral do prisma. _[Performs the calculation of the lateral area of a prism.]_
         *
         * ___
         * @returns {number} @param {number} lados ``attr¹ ⇒`` **quantidade de lados do prisma** ``₪`` _number of sides of the prism_ @param {number} comprimento ``attr² ⇒`` **comprimento do lado do prisma** ``₪`` _length of the side of prism_ @param {number} largura ``attr³ ⇒`` **largura do lado do prisma** ``₪`` _width of the side of prism_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_lateral_prisma: area_lateral_prisma_mdl_1.areaLateralPrisma,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] Área do Lozango``**
         *
         * Realiza o cálculo da área do lozango. _[Performs the calculation of the area of a lozango.]_
         *
         * ___
         * @returns {number} @param {number} diagonalMaior ``attr¹ ⇒`` **tamanho da diagonal maior do lozango** ``₪`` _size of the major diagonal of the lozango_ @param {number} diagonalMenor ``attr² ⇒`` **tamanho da diagonal menor do lozango** ``₪`` _size of the minor diagonal of the lozango_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_lozango: area_lozango_mdl_1.areaLozango,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área da Pirâmide``**
         *
         * Realiza o cálculo da área da pirâmide. _[Performs the calculation of the area of a pyramid.]_
         *
         * ___
         * @returns {number} @param {number} areaLateral ``attr¹ ⇒`` **area lateral da pirâmide** ``₪`` _lateral area of the pyramid_ @param {number} areaBase ``attr² ⇒`` **area base da pirâmide** ``₪`` _base area of the pyramid_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_piramide: area_piramide_mdl_1.areaPiramide,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área do Poligono``**
         *
         * Realiza o cálculo da área do polígono. _[Performs the calculation of the area of a polygon.]_
         *
         * ___
         * @returns {number} @param {number} lados ``attr¹ ⇒`` **quantidade de lados do polígono** ``₪`` _number of sides of the polygon_ @param {number} comprimento ``attr² ⇒`` **comprimento do lado do polígono** ``₪`` _length of the side of polygon_ @param {number} largura ``attr³ ⇒`` **largura do lado do polígono** ``₪`` _width of the side of polygon_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_poligono: area_poligono_mdl_1.areaPoligono,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área do Quadrado``**
         *
         * Realiza o cálculo da área do quadrado. _[Performs the calculation of the area of a square.]_
         *
         * ___
         * @returns {number} @param {number} lado ``attr¹ ⇒`` **lado do quadrado** ``₪`` _length of the square_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_quadrado: area_quadrado_mdl_1.areaQuadrado,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área do Retângulo``**
         *
         * Realiza o cálculo da área do retângulo. _[Performs the calculation of the area of a rectangle.]_
         *
         * ___
         * @returns {number} @param {number} comprimento ``attr¹ ⇒`` **comprimento do retângulo** ``₪`` _length of the rectangle_ @param {number} largura ``attr² ⇒`` **largura do retângulo** ``₪`` _width of the rectangle_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_retangulo: area_retangulo_mdl_1.areaRetangulo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área do Trapézio``**
         *
         * Realiza o cálculo da área do trapézio. _[Performs the calculation of the area of a trapezium.]_
         *
         * ___
         * @returns {number} @param {number} baseMaior ``attr¹ ⇒`` **base maior do trapézio** ``₪`` _base of the trapezium_ @param {number} baseMenor ``attr² ⇒`` **base menor do trapézio** ``₪`` _base of the trapezium_ @param {number} altura ``attr³ ⇒`` **altura do trapézio** ``₪`` _height of the trapezium_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_trapezio: area_trapezio_mdl_1.areaTrapezio,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Área do Triângulo``**
         *
         * Realiza o cálculo da área do triângulo. _[Performs the calculation of the area of a triangle.]_
         *
         * ___
         * @returns {number} @param {number} lado ``attr¹ ⇒`` **lado do triângulo** ``₪`` _length of the triangle_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_area_triangulo: area_triangulo_mdl_1.areaTriangulo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arranjo``**
         *
         * Realiza o cálculo do arranjo. _[Performs the calculation of the arranjo.]_
         *
         * ___
         * @returns {number} @param {number} total ``attr¹ ⇒`` **numero total de tipos** ``₪`` _total number of types_ @param {number} divisor ``attr² ⇒`` **divisor de combinações tomadas** ``₪`` _divisor of taken combinations_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_arranjo: arranjo_mdl_1.arranjo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arrendonda para Baixo``**
         *
         * Realiza o cálculo do arrendondamento para baixo. _[Performs the calculation of the downward.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Experimental Badge](https://github.com/Humbanew/wertsfy/assets/59739253/c9bd5ccf-e4ce-4737-a1f1-ad12e63d4e3b)
         *
         **/
        m_arrendonda_para_baixo: arrendonda_para_baixo_mdl_1.arrendondaParaBaixo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arrendonda para Cima``**
         *
         * Realiza o cálculo do arrendondamento para cima. _[Performs the calculation of the upward.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Experimental Badge](https://github.com/Humbanew/wertsfy/assets/59739253/c9bd5ccf-e4ce-4737-a1f1-ad12e63d4e3b)
         *
         **/
        m_arrendonda_para_cima: arrendonda_para_cima_mdl_1.arrendondaParaCima,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arrendonda para Decimal de 32 bits``**
         *
         * Realiza o cálculo do arrendondamento para decimal de 32 bits. _[Performs the calculation of the rounding.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Experimental Badge](https://github.com/Humbanew/wertsfy/assets/59739253/c9bd5ccf-e4ce-4737-a1f1-ad12e63d4e3b)
         *
         **/
        m_arrendonda_para_decimal_32bits: arrendonda_para_decimal_32bits_mdl_1.arrendondaParaDecimal32Bits,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Arrendonda para Inteiro``**
         *
         * Realiza o cálculo do arrendondamento para inteiro. _[Performs the calculation of the integer.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Experimental Badge](https://github.com/Humbanew/wertsfy/assets/59739253/c9bd5ccf-e4ce-4737-a1f1-ad12e63d4e3b)
         *
         **/
        m_arrendonda_para_inteiro: arrendonda_para_inteiro_mdl_1.arrendondaParaInteiro,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Atrito``**
         *
         * Realiza o cálculo do atrito. _[Performs the calculation of the atrito.]_
         *
         * ___
         * @returns {number} @param {number} coeficienteDeAtrito ``attr¹ ⇒`` **quantidade de atrito existente** ``₪`` _quantity of existing atrito_ @param {number} massa ``attr² ⇒`` **massa onde é aplicado o atrito presente** ``₪`` _mass where is applied the existing atrito_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_atrito: atrito_mdl_1.atrito,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Calor Latente``**
         *
         * Realiza o cálculo do calor latente. _[Performs the calculation of the latent.]_
         *
         * ___
         * @returns {number} @param {number} quantidadeDeCalor ``attr¹ ⇒`` **quantidade de calor** ``₪`` _quantity of calor_ @param {number} massa ``attr² ⇒`` **massa** ``₪`` _mass_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_calor_latente: calor_latente_mdl_1.calorLatente,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Calor Sensivel``**
         *
         * Realiza o cálculo do calor sensível. _[Performs the calculation of the sensitive.]_
         *
         * ___
         * @returns {number} @param {number} massa ``attr¹ ⇒`` **massa** ``₪`` _mass_ @param calorEspecifico ``attr² ⇒`` **calor especifico** ``₪`` _specific calor_ @param {{inicial: number, final: number}} temperatura ``attr³ ⇒`` **temperatura final e inicial** ``₪`` _initial and final temperature_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_calor_sensivel: calor_sensivel_mdl_1.calorSensivel,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Celsius para Fahrenheit``**
         *
         * Realiza o cálculo do Celsius para Fahrenheit. _[Performs the calculation of the Celsius to Fahrenheit.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_celsius_fahrenheit: celsius_fahrenheit_mdl_1.celsiusFahrenheit,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Celsius para Kelvin``**
         *
         * Realiza o cálculo do Celsius para Kelvin. _[Performs the calculation of the Celsius to Kelvin.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_celsius_kelvin: celsius_kelvin_mdl_1.celsiusKelvin,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Base 2``**
         *
         * Realiza o cálculo do cologaritmo base 2. _[Performs the calculation of the cologarithm base 2.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_base_2: cologaritmo_base_2_mdl_1.cologaritmoBase2,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Base 2 mais 1``**
         *
         * Realiza o cálculo do cologaritmo base 2 mais 1. _[Performs the calculation of the cologarithm base 2 plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_base_2_mais_1: cologaritmo_base_2_mais_1_mdl_1.cologaritmoBase2Mais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Base 2 menos 1```**
         *
         * Realiza o cálculo do cologaritmo base 2 menos 1. _[Performs the calculation of the cologarithm base 2 minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_base_2_menos_1: cologaritmo_base_2_menos_1_mdl_1.cologaritmoBase2Menos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Base 10``**
         *
         * Realiza o cálculo do cologaritmo base 10. _[Performs the calculation of the cologarithm base 10.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_base_10: cologaritmo_base_10_mdl_1.cologaritmoBase10,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Base 10 mais 1``**
         *
         * Realiza o cálculo do cologaritmo base 10 mais 1. _[Performs the calculation of the cologarithm base 10 plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_base_10_mais_1: cologaritmo_base_10_mais_1_mdl_1.cologaritmoBase10Mais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Base 10 menos 1``**
         *
         * Realiza o cálculo do cologaritmo base 10 menos 1. _[Performs the calculation of the cologarithm base 10 minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_base_10_menos_1: cologaritmo_base_10_menos_1_mdl_1.cologaritmoBase10Menos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Base Qualquer``**
         *
         * Realiza o cálculo do cologaritmo base qualquer. _[Performs the calculation of the cologarithm base any.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number} y ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_base_qualquer: cologaritmo_base_qualquer_mdl_1.cologaritmoBaseQualquer,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Base Qualquer mais 1``**
         *
         * Realiza o cálculo do cologaritmo base qualquer mais 1. _[Performs the calculation of the cologarithm base any plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number} y ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_base_qualquer_mais_1: cologaritmo_base_qualquer_mais_1_mdl_1.cologaritmoBaseQualquerMais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Base Qualquer menos 1``**
         *
         * Realiza o cálculo do cologaritmo base qualquer menos 1. _[Performs the calculation of the cologarithm base any minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number} y ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_base_qualquer_menos_1: cologaritmo_base_qualquer_menos_1_mdl_1.cologaritmoBaseQualquerMenos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Natural``**
         *
         * Realiza o cálculo do cologaritmo natural. _[Performs the calculation of the cologarithm natural.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_natural: cologaritmo_natural_mdl_1.cologaritmoNatural,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Natural mais 1``**
         *
         * Realiza o cálculo do cologaritmo natural mais 1. _[Performs the calculation of the cologarithm natural plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_natural_mais_1: cologaritmo_natural_mais_1_mdl_1.cologaritmoNaturalMais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cologarítmo Natural menos 1``**
         *
         * Realiza o cálculo do cologaritmo natural menos 1. _[Performs the calculation of the cologarithm natural minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cologaritmo_natural_menos_1: cologaritmo_natural_menos_1_mdl_1.cologaritmoNaturalMenos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Combinação``**
         *
         * Realiza o cálculo da combinação. _[Performs the calculation of the combination.]_
         *
         * ___
         * @returns {number} @param {number} total ``attr¹ ⇒`` **numero total de combinações** ``₪`` _numeric total of combinations_ @param {number} divisor ``attr² ⇒`` **divisor de combinações requisitadas** ``₪`` _divisor of required combinations_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_combinacao: combinacao_mdl_1.combinacao,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Concentração``**
         *
         * Realiza o cálculo da concentração. _[Performs the calculation of the concentration.]_
         *
         * ___
         * @returns {number} @param {number} massaSoluto ``attr¹ ⇒`` **massa do soluto de uma reação** ``₪`` _numeric mass of solute in a reaction_ @param {number} volume ``attr² ⇒`` **volume da solução** ``₪`` _numeric volume of solution_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_concentracao: concentracao_mdl_1.concentracao,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Consumo de Energia``**
         *
         * Realiza o cálculo do consumo de energia. _[Performs the calculation of the consumption of energy.]_
         *
         * ___
         * @returns {number} @param {{inicial: number, final: number}} tempo ``attr¹ ⇒`` **tempo final e inicial do consumo** ``₪`` _numeric final and initial consumption of energy_ @param {number} correnteEletrica ``attr² ⇒`` **corrente elétrica** ``₪`` _current electric_ @param {number} ddp ``attr³ ⇒`` **Diferença de Potencial** ``₪`` _numeric difference of potential_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_consumo_de_energia: consumo_de_energia_mdl_1.consumoDeEnergia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Contra Força Eletromotriz``**
         *
         * Realiza o cálculo da contra força eletromotriz. _[Performs the calculation of the against electromotive force.]_
         *
         * ___
         * @returns {number} @param {number} potenciaTotalGerador ``attr¹ ⇒`` **potência total de um gerador** ``₪`` _numeric total power of a generator_ @param {number} intensidadeDaCorrente ``attr² ⇒`` **intensidade de corrente** ``₪`` _numeric intensity of current_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_contra_forca_eletromotriz: contra_forca_eletromotriz_mdl_1.contraForcaEletromotriz,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cosecante``**
         *
         * Realiza o cálculo do cosecante. _[Performs the calculation of the cosecante.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cosecante: cosecante_mdl_1.cosecante,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cosecante Hiperbólica``**
         *
         * Realiza o cálculo do cosecante hiperbolica. _[Performs the calculation of the hiperbolic cosecant.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cosecante_hiperbolica: cosecante_hiperbolica_mdl_1.cosecanteHiperbolica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cosseno``**
         *
         * Realiza o cálculo do cosseno. _[Performs the calculation of the cosine.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cosseno: cosseno_mdl_1.cosseno,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cosseno Hiperbólico``**
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cosseno_hiperbolico: cosseno_hiperbolico_mdl_1.cossenoHiperbolico,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cotangente``**
         *
         * Realiza o cálculo da cotangente. _[Performs the calculation of the cotangent.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cotangente: cotangente_mdl_1.cotangente,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Cotangente Hiperbólico``**
         *
         * Realiza o cálculo da cotangente hiperbolica. _[Performs the calculation of the hiperbolic cotangent.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_cotangente_hiperbolica: cotangente_hiperbolica_mdl_1.cotangenteHiperbolica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Densidade``**
         *
         * Realiza o cálculo da densidade. _[Performs the calculation of the density.]_
         *
         * ___
         * @returns {number} @param {number} massa ``attr¹ ⇒`` **massa de um objeto** ``₪`` _numeric mass of an object_ @param {number} volume ``attr¹ ⇒`` **volume de um objeto** ``₪`` _numeric volume of an object_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_densidade: densidade_mdl_1.densidade,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Determinante 2x2``**
         *
         * Realiza o cálculo do determinante 2x2. _[Performs the calculation of the determinant 2x2.]_
         *
         * ___
         * @returns {number} @param {number} a00 ``attr¹ ⇒`` **item da primeira linha e coluna** ``₪`` _numeric item of the first row and column_ @param {number} a01 ``attr² ⇒`` **item da primeira linha e segunda coluna** ``₪`` _numeric item of the first row and second column_ @param {number} a10 ``attr³ ⇒`` **item da segunda linha e primeira coluna** ``₪`` _numeric item of the second row and first column_ @param {number} a11 ``attr³ ⇒`` **item da segunda linha e coluna** ``₪`` _numeric item of the second row and column_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_determinante_2x2: determinante_2x2_mdl_1.determinante2x2,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Determinante 3x3``**
         *
         * Realiza o cálculo do determinante 3x3. _[Performs the calculation of the determinant 3x3.]_
         *
         * ___
         * @returns {number} @param {number} a00 ``attr¹ ⇒`` **item da primeira linha e coluna** ``₪`` _numeric item of the first row and column_ @param {number} a01 ``attr² ⇒`` **item da primeira linha e segunda coluna** ``₪`` _numeric item of the first line item and second column_ @param {number} a02 ``attr³ ⇒`` **item da primeira linha e terceira coluna** ``₪`` _numeric item of the first line item and third column_ @param {number} a10 ``attr⁢⁴ ⇒`` **item da segunda linha e primeira coluna** ``₪`` _numeric item of second line and first column_ @param {number} a11 ``attr⁢⁵ ⇒`` **item da segunda linha e coluna** ``₪`` _numeric item of second line and column_ @param {number} a12 ``attr⁢⁶ ⇒`` **item da segunda linha e terceira coluna** ``₪`` _numeric item of second line and third column_ @param {number} a20 ``attr⁢⁷ ⇒`` **item da terceira linha e primeira coluna** ``₪`` _numeric item of third line and first column_ @param {number} a21 ``attr⁢⁸ ⇒`` **item da terceira linha e segunda coluna** ``₪`` _numeric item of third line and second column_ @param {number} a22 ``attr⁢⁹ ⇒`` **item da terceira linha e coluna** ``₪`` _numeric item of third line and column_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_determinante_3x3: determinante_3x3_mdl_1.determinante3x3,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Diagrama de Venn de 2 Grupos``**
         *
         * Realiza o cálculo do diagrama de Venn de 2 grupos. _[Performs the calculation of the diagram of Venn of 2 groups.]_
         *
         * ___
         * @returns {number} @param {number} ng1 ``attr¹ ⇒`` **grupo numérico 1** ``₪`` _numeric group number_ @param {number} ng2 ``attr² ⇒`` **grupo numérico 2** ``₪`` _numeric group number_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_diagrama_venn_2_grupos: diagrama_venn_2_grupos_mdl_1.diagramaVenn2Grupos,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Diagrama de Venn de 3 Grupos``**
         *
         * Realiza o cálculo do diagrama de Venn de 3 grupos. _[Performs the calculation of the diagram of Venn of 3 groups.]_
         *
         * ___
         * @returns {number} @param {number} ng1 ``attr¹ ⇒`` **grupo numérico 1** ``₪`` _numeric group number_ @param {number} ng2 ``attr² ⇒`` **grupo numérico 2** ``₪`` _numeric group number_ @param {number} ng3 ``attr³ ⇒`` **grupo numérico 3** ``₪`` _numeric group number_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_diagrama_venn_3_grupos: diagrama_venn_3_grupos_mdl_1.diagramaVenn3Grupos,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Diagrama de Venn de 4 Grupos``**
         *
         * Realiza o cálculo do diagrama de Venn de 4 grupos. _[Performs the calculation of the diagram of Venn of 4 groups.]_
         *
         * ___
         * @returns {number} @param {number} ng1 ``attr¹ ⇒`` **grupo numérico 1** ``₪`` _numeric group number_ @param {number} ng2 ``attr² ⇒`` **grupo numérico 2** ``₪`` _numeric group number_ @param {number} ng3 ``attr³ ⇒`` **grupo numérico 3** ``₪`` _numeric group number_ @param {number} ng4 ``attr⁢⁴ ⇒`` **grupo numérico 4** ``₪`` _numeric group number_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_diagrama_venn_4_grupos: diagrama_venn_4_grupos_mdl_1.diagramaVenn4Grupos,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Dilatação Linear``**
         *
         * Realiza o cálculo da dilatação linear. _[Performs the calculation of the linear dilatation.]_
         *
         * ___
         * @returns {number} @param {number} comprimentoInicial ``attr¹ ⇒`` **comprimento inicial de um objeto** ``₪`` _numeric initial size of an object_ @param {number} coeficienteDeDilatacaoLinear ``attr² ⇒`` **coeficiente de dilatação linear** ``₪`` _coefficient of dilatation linear_ @param {{inicial: number, final: number}} temperatura ``attr³ ⇒`` **temperatura inicial e final** ``₪`` _numeric initial and final temperature_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_dilatacao_linear: dilatacao_linear_mdl_1.dilatacaoLinear,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Dilatação Superficial``**
         *
         * Realiza o cálculo da dilatação superficial. _[Performs the calculation of the superficial dilatation.]_
         *
         * ___
         * @returns {number} @param {number} areaInicial ``attr¹ ⇒`` **comprimento inicial de um objeto** ``₪`` _numeric initial size of an object_ @param {number} coeficienteDeDilatacaoSuperficial ``attr² ⇒`` **coeficiente de dilatação linear** ``₪`` _coefficient of dilatation linear_ @param {{inicial: number, final: number}} temperatura ``attr³ ⇒`` **temperatura inicial e final** ``₪`` _numeric initial and final temperature_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_dilatacao_superficial: dilatacao_superficial_mdl_1.dilatacaoSuperficial,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Dilatação Volumérica``**
         *
         * Realiza o cálculo da dilatação volumérica. _[Performs the calculation of the volumetric dilatation.]_
         *
         * ___
         * @returns {number} @param {number} volumeInicial ``attr¹ ⇒`` **comprimento inicial de um objeto** ``₪`` _numeric initial size of an object_ @param {number} coeficienteDeDilatacaoVolumetrica ``attr² ⇒`` **coeficiente de dilatação linear** ``₪`` _coefficient of dilatation linear_ @param {{inicial: number, final: number}} temperatura ``attr³ ⇒`` **temperatura inicial e final** ``₪`` _numeric initial and final temperature_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_dilatacao_volumetrica: dilatacao_volumetrica_mdl_1.dilatacaoVolumetrica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Divisão``**
         *
         * Realiza o cálculo da divisão. _[Performs the calculation of the division.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} y ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_divisao: divisao_mdl_1.divisao,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Efeito Fotoelétrico``**
         *
         * Realiza o cálculo do efeito fotoelétrico. _[Performs the calculation of the photoelectric effect.]_
         *
         * ___
         * @returns {number} @param {number} frequenciaDeLuz ``attr¹ ⇒`` **``PT-BR: expressão | EN-US: expression``**
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_efeito_fotoeletrico: efeito_fotoeletrico_mdl_1.efeitoFotoeletrico,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Efeito Joule``**
         *
         * Realiza o cálculo do efeito joule. _[Performs the calculation of the joule effect.]_
         *
         * ___
         * @returns {number} @param {number} corrente ``attr¹ ⇒`` **corrente elétrica** ``₪`` _eletric current_ @param {number} resistencia ``attr² ⇒`` **resistência em um circuito elétrico** ``₪`` _resistance in an electric circuit_ @param {{inicial: number, final: number}} tempo ``attr³ ⇒`` **temperatura inicial e final** ``₪`` _numeric initial and final temperature_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_efeito_joule: efeito_joule_mdl_1.efeitoJoule,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Empuxo na Hidroestática Hidrodinâmica``**
         *
         * Realiza o cálculo do empuxo na hidroestática hidrodinâmica. _[Performs the calculation of the empuxo na hidroestática hidrodinâmica.]_
         *
         * ___
         * @returns {number} @param {number} densidade ``attr¹ ⇒`` **densidade de um objeto** ``₪`` _numeric density of an object_ @param gravidade ``attr² ⇒`` **gravidade** ``₪`` _gravity_ @param {number} volume ``attr³ ⇒`` **volume** ``₪`` _volume_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_empuxo_hidroestatica_hidrodinamica: empuxo_hidroestatica_hidrodinamica_mdl_1.empuxoHidroestaticaHidrodinamica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Energia Cinética``**
         *
         * Realiza o cálculo da energia cinética. _[Performs the calculation of the kinetic energy.]_
         *
         * ___
         * @returns {number} @param {number} massa ``attr¹ ⇒`` **massa** ``₪`` _mass_ @param {number} velocidade ``attr² ⇒`` **velocidade** ``₪`` _velocity_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_energia_cinetica: energia_cinetica_mdl_1.energiaCinetica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Energia Potencial Elástica``**
         *
         * Realiza o cálculo da energia potencial elástica. _[Performs the calculation of the elastic energy potential.]_
         *
         * ___
         * @returns {number} @param {number} constanteElastica ``attr¹ ⇒`` **constante elástica de distorção** ``₪`` _constant elastic distortion_ @param {{inicial: number, final: number}} distancia ``attr² ⇒`` **distância inicial e final** ``₪`` _numeric initial and final distance_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_energia_potencial_elastica: energia_potencial_elastica_mdl_1.energiaPotencialElastica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Energia Potencial Gravitacional``**
         *
         * Realiza o cálculo da energia potencial gravitacional. _[Performs the calculation of the gravitational energy potential.]_
         *
         * ___
         * @returns {number} @param {number} massa ``attr¹ ⇒`` **massa** ``₪`` _mass_ @param {number} gravidade ``attr² ⇒`` **gravidade** ``₪`` _gravity_ @param {number} altura ``attr³ ⇒`` **altura** ``₪`` _height_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_energia_potencial_gravitacional: energia_potencial_gravitacional_mdl_1.energiaPotencialGravitacional,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Energia Potencial Movimento Harmônico Simples``**
         *
         * Realiza o cálculo da energia potencial movimento harmônico simples. _[Performs the calculation of the simple harmonic motion energy potential.]_
         *
         * ___
         * @returns {number} @param {number} velocidadeAngular ``attr¹ ⇒`` **velocidade angular do movimento** ``₪`` _velocity angular of a movement_ @param {number} amplitude ``attr² ⇒`` **amplitude do movimento** ``₪`` _amplitude of a movement_ @param {number} tempo ``attr³ ⇒`` **tempo** ``₪`` _time_ @param {number} faseInicial ``attr⁴ ⇒`` **fase inicial** ``₪`` _initial phase_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_horaria_aceleracao_mhs: equacao_horaria_aceleracao_mhs_mdl_1.equacaoHorariaDeAceleracaoMHS,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação Horária da Aceleração``**
         *
         * Realiza o cálculo da equação horária da aceleração. _[Performs the calculation of the horizontal acceleration equation.]_
         *
         * ___
         * @returns {number} @param {number} aceleracao ``attr¹ ⇒`` **aceleração** ``₪`` _acceleration_ @param {number} tempo ``attr² ⇒`` **tempo** ``₪`` _time_ @param {number} velocidade ``attr³ ⇒`` **velocidade** ``₪`` _velocity_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_horaria_aceleracao: equacao_horaria_aceleracao_mdl_1.equacaoHorariaDaAceleracao,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação Horária do Espaço no Movimento Circular Uniformente Variado``**
         *
         * Realiza o cálculo da equação horária do espço no movimento circular uniformente variado. _[Performs the calculation of the horizontal space motion equation.]_
         *
         * ___
         * @returns {number} @param {number} posicaoAngularInicial ``attr¹ ⇒`` **posição angular inicial** ``₪`` _initial position angular_ @param {number} velocidadeAngularInicial ``attr² ⇒`` **velocidade angular inicial** ``₪`` _initial velocity angular_ @param {number} aceleracaoAngular ``attr³ ⇒`` **aceleração angular** ``₪`` _angular acceleration_ @param {number} tempo ``attr⁴ ⇒`` **tempo** ``₪`` _time_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_horaria_espaco_mcuv: equacao_horaria_espaco_mcuv_mdl_1.equacaoHorariaDoEspacoMCUV,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação Horária do Espaço``**
         *
         * Realiza o cálculo da equação horária do espaço. _[Performs the calculation of the horizontal space motion equation.]_
         *
         * ___
         * @returns {number} @param {{inicial: number, final: number}} espaco ``attr¹ ⇒`` **espaco inicial e final** ``₪`` _initial and final space @param {number} aceleracao ``attr² ⇒`` **aceleração** ``₪`` _acceleration_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_horaria_espaco: equacao_horaria_espaco_mdl_1.equacaoHorariaDoEspaco,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação Horária da Força``**
         *
         * Realiza o cálculo da equação horária da força. _[Performs the calculation of the horizontal force equation.]_
         *
         * ___
         * @returns {number} @param {number} forca ``attr¹ ⇒`` **forca aplicada** ``₪`` _forces applied_ @param {number} tempo ``attr² ⇒`` **tempo** ``₪`` _time_ @param {number} aceleracao ``attr³ ⇒`` **aceleração** ``₪`` _acceleration_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_horaria_forca: equacao_horaria_forca_mdl_1.equacaoHorariaDaForca,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação Horária da Posição no Movimento Harmônico Simples``**
         *
         * Realiza o cálculo da equação horária da posição no movimento harmônico simples. _[Performs the calculation of the simple harmonic motion position equation.]_
         *
         * ___
         * @returns {number} @param {number} velocidadeAngular ``attr¹ ⇒`` **velocidade angular de posição** ``₪`` _positional velocity angular_ @param {number} amplitude ``attr² ⇒`` **amplitude** ``₪`` _amplitude_ @param {number} tempo ``attr³ ⇒`` **tempo** ``₪`` _time_ @param {number} faseInicial ``attr⁴ ⇒`` **fase inicial** ``₪`` _initial phase_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_horaria_posicao_mhs: equacao_horaria_posicao_mhs_mdl_1.equacaoHorariaDePosicaoMHS,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação Horária do Tempo no Espaço``**
         *
         * Realiza o cálculo da equação horária do tempo no espaço. _[Performs the calculation of the horizontal space motion equation.]_
         *
         * ___
         * @returns {number} @param {{inicial: number, final: number}} tempo ``attr¹ ⇒`` **tempo inicial e final** ``₪`` _initial and final time_ @param {{inicial: number, final: number}} espaco ``attr² ⇒`` **espaco inicial e final** ``₪`` _initial and final space_ @param {number} velocidade ``attr³ ⇒`` **velocidade** ``₪`` _velocity_ @param {number} aceleracao ``attr⁴ ⇒`` **aceleração** ``₪`` _acceleration_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_horaria_tempo_espaco: equacao_horaria_tempo_espaco_mdl_1.equacaoHorariaDoTempoEspaco,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação Horária do Tempo no Movimento Circular Uniformente Variado``**
         *
         * Realiza o cálculo da equação horária do tempo no movimento circular uniformente variado. _[Performs the calculation of the horizontal space motion equation.]_
         *
         * ___
         * @returns {number} @param {number} velocidadeAngularInicial ``attr¹ ⇒`` **velocidade angular inicial** ``₪`` _initial angular velocity_ @param {number} aceleracaoAngular ``attr² ⇒`` **aceleração angular** ``₪`` _angular acceleration_ @param {number} tempo ``attr³ ⇒`` **tempo** ``₪`` _time_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_horaria_tempo_mcuv: equacao_horaria_tempo_mcuv_mdl_1.equacaoHorariaDoTempoMCUV,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação Horária do Tempo``**
         *
         * Realiza o cálculo da equação horária do tempo. _[Performs the calculation of the horizontal space motion equation.]_
         *
         * ___
         * @returns {number} @param {{inicial: number, final: number}} tempo ``attr¹ ⇒`` **tempo inicial e final** ``₪`` _initial and final time_ @param {number} velocidade ``attr² ⇒`` **velocidade** ``₪`` _velocity_ @param {number} aceleracao ``attr³ ⇒`` **aceleração** ``₪`` _acceleration_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_horaria_tempo: equacao_horaria_tempo_mdl_1.equacaoHorariaDoTempo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação Horária da Velocidade no Movimento Harmônico Simples``**
         *
         * Realiza o cálculo da equação horária da velocidade no movimento harmônico simples. _[Performs the calculation of the simple harmonic motion velocity equation.]_
         *
         * ___
         * @returns {number} @param {number} velocidadeAngular ``attr¹ ⇒`` **velocidade angular** ``₪`` _angular velocity_ @param {number} amplitude ``attr² ⇒`` **amplitude** ``₪`` _amplitude_ @param {number} tempo ``attr³ ⇒`` **tempo** ``₪`` _time_ @param {number} faseInicial ``attr⁴ ⇒`` **fase inicial** ``₪`` _initial phase_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_horaria_velocidade_mhs: equacao_horaria_velocidade_mhs_mdl_1.equacaoHorariaDeVelocidadeMHS,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação Horária da Velocidade``**
         *
         * Realiza o cálculo da equação horária da velocidade. _[Performs the calculation of the horizontal velocity equation.]_
         *
         * ___
         * @returns {number} @param {number} velocidade ``attr¹ ⇒`` **velocidade** ``₪`` _velocity_ @param {number} tempo ``attr² ⇒`` **tempo** ``₪`` _time_ @param {number} aceleracao ``attr³ ⇒`` **aceleração** ``₪`` _acceleration_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_horaria_velocidade: equacao_horaria_velocidade_mdl_1.equacaoHorariaDaVelocidade,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação de Lagrange``**
         *
         * Realiza o cálculo da equação de lagrange. _[Performs the calculation of the lagrange equation.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} y ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} xi ``attr³ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} yi ``attr⁢⁴ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} xii ``attr⁢⁵ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} yii ``attr⁢⁶ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} xiii ``attr⁢⁷ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} yiii ``attr⁢⁸ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_lagrange: equacao_lagrange_mdl_1.equacaoDeLagrange,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Equação de Torricelli``**
         *
         * Realiza o cálculo da equação de torricelli. _[Performs the calculation of the torricelli equation.]_
         *
         * ___
         * @returns {number} @param {number} velocidadeInicial ``attr¹ ⇒`` **velocidade inicial** ``₪`` _initial velocity_ @param {number} aceleracao ``attr² ⇒`` **aceleracao** ``₪`` _acceleration_ @param {{inicial: number, final: number}} espaco ``attr³ ⇒`` **espaco inicial e final** ``₪`` _initial and final space_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_equacao_torricelli: equacao_torricelli_mdl_1.equacaoDeTorricelli,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Escala Geográfica``**
         *
         * Realiza o cálculo da escala geográfica. _[Performs the calculation of the geographic scale.]_
        *
         * ___
         * @returns {number} @param {number} tamanhoReal ``attr¹ ⇒`` **tamanho real** ``₪`` _real size_ @param {number} tamanhoFicticio ``attr² ⇒`` **tamanho fictício** ``₪`` _fictitious size_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_escala_geografica: escala_geografica_mdl_1.escalaGeografica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Espaço``**
         *
         * Realiza o cálculo do espaço. _[Performs the calculation of the space.]_
         *
         * ___
         * @returns {number} @param {number} velocidade ``attr¹ ⇒`` **velocidade** ``₪`` _velocity_ @param {{inicial: number, final: number}} tempo ``attr² ⇒`` **tempo inicial e final** ``₪`` _initial and final time_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_espaco: espaco_mdl_1.espaco,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Exponencial``**
         *
         * Realiza o cálculo da exponencial. _[Performs the calculation of the exponential.]_
         *
         * ___
         * @returns {number} @param {number} base ``attr¹ ⇒`` **valor numérico da base** ``₪`` _numeric value of the base_ @param {number} x ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_exponencial: exponencial_mdl_1.exponencial,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Exponencial mais 1``**
         *
         * Realiza o cálculo da exponencial mais 1. _[Performs the calculation of the exponential plus 1.]_
         *
         * ___
         * @returns {number} @param {number} base ``attr¹ ⇒`` **valor numérico da base** ``₪`` _numeric value of the base_ @param {number} x ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_exponencial_mais_1: exponencial_mais_1_mdl_1.exponencialMais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Exponencial menos 1``**
         *
         * Realiza o cálculo da exponencial menos 1. _[Performs the calculation of the exponential minus 1.]_
         *
         * ___
         * @returns {number} @param {number} base ``attr¹ ⇒`` **valor numérico da base** ``₪`` _numeric value of the base_ @param {number} x ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_exponencial_menos_1: exponencial_menos_1_mdl_1.exponencialMenos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Fahrenheit para Celsius``**
         *
         * Realiza o cálculo do Fahrenheit para Celsius. _[Performs the calculation of the Fahrenheit to Celsius.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_fahrenheit_celsius: fahrenheit_celsius_mdl_1.fahrenheitCelsius,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Fahrenheit para Kelvin``**
         *
         * Realiza o cálculo do Fahrenheit para Kelvin. _[Performs the calculation of the Fahrenheit to Kelvin.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_fahrenheit_kelvin: fahrenheit_kelvin_mdl_1.fahrenheitKelvin,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Fatorial``**
         *
         * Realiza o cálculo do fatorial. _[Performs the calculation of the factorial.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_fatorial: fatorial_mdl_1.fatorial,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Força Eletromotriz``**
         *
         * Realiza o cálculo da força eletromotriz. _[Performs the calculation of the eletromotive force.]_
         *
         * ___
         * @returns {number} @param {number} potenciaTotalGerador ``attr¹ ⇒`` **potencial total do gerador** ``₪`` _total potential of the generator_ @param {number} intensidadeDaCorrente ``attr² ⇒`` **intensidade da corrente** ``₪`` _intensity of the current_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_forca_eletromotriz: forca_eletromotriz_mdl_1.forcaEletromotriz,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Força Gravitacional``**
         *
         * Realiza o cálculo da força gravitacional. _[Performs the calculation of the gravitational force.]_
         *
         * ___
         * @returns {number} @param {number} gravidade ``attr¹ ⇒`` **gravidade** ``₪`` _gravitational force_ @param {number} massaPlaneta ``attr² ⇒`` **massa do planeta** ``₪`` _mass of the planet_ @param {{inicial: number, final: number}} distancia ``attr³ ⇒`` **distância inicial e final** ``₪`` _initial and final distance_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_forca_gravitacional: forca_gravitacional_mdl_1.forcaGravitacional,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Frequência``**
         *
         * Realiza o cálculo da frequência. _[Performs the calculation of the frequency.]_
         *
         * ___
         * @returns {number} @param {number} periodo ``attr¹ ⇒`` **periodo** ``₪`` _period_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_frequencia: frequencia_mdl_1.frequencia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Índice de Desenvolvimento Humano``**
         *
         * Realiza o cálculo do índice de desenvolvimento humano. _[Performs the calculation of the index of human development.]_
         *
         * ___
         * @returns {number} @param {number} saude ``attr¹ ⇒`` **indice de saúde** ``₪`` _index of health_ @param {number} educacao ``attr² ⇒`` **indice de educação** ``₪`` _index of education_ @param {number} renda ``attr³ ⇒`` **indice de renda** ``₪`` _index of income_ @param {number} populacao ``attr⁴ ⇒`` **indice de população** ``₪`` _index of population_ @param {number} ppc ``attr⁵ ⇒`` **indice de ppc** ``₪`` _index of ppc_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_indice_desenvolvimento_humano: indice_desenvolvimento_humano_mdl_1.indiceDesenvolvimentoHumano,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Índice de Gini``**
         *
         * Realiza o cálculo do índice de Gini. _[Performs the calculation of the index of Gini.]_
         *
         * ___
         * @returns {number} @param {number} pnb ``attr¹ ⇒`` **indice de pnb** ``₪`` _index of pnb_ @param {number} populacao ``attr² ⇒`` **indice de população** ``₪`` _index of population_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_indice_gini: indice_gini_mdl_1.indiceGini,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Índice de Massa Corporal``**
         *
         * Realiza o cálculo do índice de massa corporal. _[Performs the calculation of the index of mass corporal.]_
         *
         * ___
         * @returns {number} @param {number} peso ``attr¹ ⇒`` **quantidade de peso** ``₪`` _weight_ @param {number} altura ``attr² ⇒`` **quantidade de altura** ``₪`` _height_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_indice_massa_corporal: indice_massa_corporal_mdl_1.indiceMassaCorporal,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Juros Compostos``**
         *
         * Realiza o cálculo do juros compostos. _[Performs the calculation of the compound interest.]_
         *
         * ___
         * @returns {number} @param {number} valor ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} taxa ``attr² ⇒`` **taxa de juros** ``₪`` _taxes_ @param {number} tempo ``attr³ ⇒`` **tempo de aplicação** ``₪`` _time of application_ @param {number} vezes ``attr⁴ ⇒`` **vezes aplicadas** ``₪`` _times applied_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_juros_compostos: juros_compostos_mdl_1.jurosCompostos,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Juros Simples``**
         *
         * Realiza o cálculo do juros simples. _[Performs the calculation of the simple interest.]_
         *
         * ___
         * @returns {number} @param {number} valor ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} taxa ``attr² ⇒`` **taxa de juros** ``₪`` _taxes_ @param {number} tempo ``attr³ ⇒`` **tempo de aplicação** ``₪`` _time of application_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_juros_simples: juros_simples_mdl_1.jurosSimples,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Kelvin para Celsius``**
         *
         * Realiza o cálculo do Kelvin para Celsius. _[Performs the calculation of the Kelvin to Celsius.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_kelvin_celsius: kelvin_celsius_mdl_1.kelvinCelsius,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Kelvin para Fahrenheit``**
         *
         * Realiza o cálculo do Kelvin para Fahrenheit. _[Performs the calculation of the Kelvin to Fahrenheit.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_kelvin_fahrenheit: kelvin_fahrenheit_mdl_1.kelvinFahrenheit,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Lançamento Horizontal``**
         *
         * Realiza o cálculo do lançamento horizontal. _[Performs the calculation of the horizontal launch.]_
         *
         * ___
         * @returns {number} @param {number} gravidade ``attr¹ ⇒`` **gravidade** ``₪`` _gravity_ @param {{inicial: number, final: number}} tempo ``attr² ⇒`` **tempo** ``₪`` _time_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_lancamento_horizontal: lancamento_horizontal_mdl_1.lancamentoHorizontal,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Lei de Coulomb``**
         *
         * Realiza o cálculo da lei de Coulomb. _[Performs the calculation of the Coulomb's law.]_
         *
         * ___
         * @returns {number} @param {{a: number, b: number}} carga ``attr¹ ⇒`` **carga a e b** ``₪`` _cargo a and b_ @param {{inicial: number, final: number}} distancia ``attr² ⇒`` **distância inicial e final** ``₪`` _distance_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_lei_de_coulomb: lei_de_coulomb_mdl_1.leiDeCoulomb,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Lei de Lenz``**
         *
         * Realiza o cálculo da lei de Lenz. _[Performs the calculation of the Lenz's law.]_
         *
         * ___
         * @returns {number} @param {number} intensidadeDoCampoMagnetico ``attr¹ ⇒`` **intensidade do campo magnetico** ``₪`` _intensity of magnetic field_ @param areaDoSuperficie ``attr² ⇒`` **area do superfície** ``₪`` _surface area_ @param {number} angulo ``attr³ ⇒`` **angulo** ``₪`` _angle_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_lei_de_lenz: lei_de_lenz_mdl_1.leiDeLenz,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Lei de Ohm``**
         *
         * Realiza o cálculo da lei de Ohm. _[Performs the calculation of the Ohm's law.]_
         *
         * ___
         * @returns {number} @param {number} resistencia ``attr¹ ⇒`` **resistencia** ``₪`` _resistance_ @param corrente ``attr² ⇒`` **corrente** ``₪`` _current_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_lei_de_ohm: lei_de_ohm_mdl_1.leiDeOhm,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Lei de Geral dos Gases``**
         *
         * Realiza o cálculo da lei de Geral dos Gases. _[Performs the calculation of the general law of gases.]_
         *
         * ___
         * @returns {number} @param {string} pressao1 ``attr¹ ⇒`` **pressão 1** ``₪`` _pressure 1_ @param {string} pressao2 ``attr² ⇒`` **pressão 2** ``₪`` _pressure 2_ @param {string} volume1 ``attr³ ⇒`` **volume 1** ``₪`` _volume 1_ @param {string} volume2 ``attr⁴ ⇒`` **volume 2** ``₪`` _volume 2_ @param temperatura1 ``attr⁵ ⇒`` **temperatura 1** ``₪`` _temperature 1_ @param temperatura2 ``attr⁶ ⇒`` **temperatura 2** ``₪`` _temperature 2_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_lei_geral_dos_gases: lei_geral_dos_gases_mdl_1.leiGeralDosGases,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Leis de Newton``**
         *
         * Realiza o cálculo da lei de Newton. _[Performs the calculation of the Newton's law.]_
         *
         * ___
         * @returns {number} @param {number} massa ``attr¹ ⇒`` **massa** ``₪`` _mass_ @param {number} aceleracao ``attr² ⇒`` **aceleração** ``₪`` _acceleration_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_leis_de_newton: leis_de_newton_mdl_1.leisDeNewton,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo de Base 2``**
         *
         * Realiza o cálculo do logarítmo de base 2. _[Performs the calculation of the logarithm base 2.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_base_2: logaritmo_base_2_mdl_1.logaritmoBase2,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo de Base 2 mais 1``**
         *
         * Realiza o cálculo do logarítmo de base 2 mais 1. _[Performs the calculation of the logarithm base 2 plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_base_2_mais_1: logaritmo_base_2_mais_1_mdl_1.logaritmoBase2Mais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo de Base 2 menos 1``**
         *
         * Realiza o cálculo do logarítmo de base 2 menos 1. _[Performs the calculation of the logarithm base 2 minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_base_2_menos_1: logaritmo_base_2_menos_1_mdl_1.logaritmoBase2Menos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo de Base 10``**
         *
         * Realiza o cálculo do logarítmo de base 10. _[Performs the calculation of the logarithm base 10.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_base_10: logaritmo_base_10_mdl_1.logaritmoBase10,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo de Base 10 mais 1``**
         *
         * Realiza o cálculo do logarítmo de base 10 mais 1. _[Performs the calculation of the logarithm base 10 plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_base_10_mais_1: logaritmo_base_10_mais_1_mdl_1.logaritmoBase10Mais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo de Base 10 menos 1``**
         *
         * Realiza o cálculo do logarítmo de base 10 menos 1. _[Performs the calculation of the logarithm base 10 minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_base_10_menos_1: logaritmo_base_10_menos_1_mdl_1.logaritmoBase10Menos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo Base Qualquer``**
         *
         * Realiza o cálculo do logarítmo base qualquer. _[Performs the calculation of the logarithm any base.]_
         *
         * ___
         * @returns {number} @param {number} base ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number} x ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_base_qualquer: logaritmo_base_qualquer_mdl_1.logaritmoBaseQualquer,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo Base Qualquer mais 1``**
         *
         * Realiza o cálculo do logarítmo base qualquer mais 1. _[Performs the calculation of the logarithm any base plus 1.]_
         *
         * ___
         * @returns {number} @param {number} base ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number} x ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_base_qualquer_mais_1: logaritmo_base_qualquer_mais_1_mdl_1.logaritmoBaseQualquerMais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo Base Qualquer menos 1``**
         *
         * Realiza o cálculo do logarítmo base qualquer menos 1. _[Performs the calculation of the logarithm any base minus 1.]_
         *
         * ___
         * @returns {number} @param {number} base ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number} x ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_base_qualquer_menos_1: logaritmo_base_qualquer_menos_1_mdl_1.logaritmoBaseQualquerMenos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo Natural``**
         *
         * Realiza o cálculo do logarítmo natural. _[Performs the calculation of the natural logarithm.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_natural: logaritmo_natural_mdl_1.logaritmoNatural,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo Natural mais 1``**
         *
         * Realiza o cálculo do logarítmo natural mais 1. _[Performs the calculation of the natural logarithm plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_natural_mais_1: logaritmo_natural_mais_1_mdl_1.logaritmoNaturalMais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Logarítmo Natural menos 1``**
         *
         * Realiza o cálculo do logarítmo natural menos 1. _[Performs the calculation of the natural logarithm minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_logaritmo_natural_menos_1: logaritmo_natural_menos_1_mdl_1.logaritmoNaturalMenos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Período``**
         *
         * Realiza o cálculo do período. _[Performs the calculation of the period.]_
         *
         * ___
         * @returns {number} @param {number} frequencia ``attr¹ ⇒`` **frequencia indicada** ``₪`` _frequency indicated_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_periodo: periodo_mdl_1.periodo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Peso Aparente na Hidroestática Hidrodinâmica``**
         *
         * Realiza o cálculo do peso aparente na hidroestática hidrodinâmica. _[Performs the calculation of the weight apparent in the hydrodynamic water.]_
         *
         * ___
         * @returns {number} @param {number} peso ``attr¹ ⇒`` **peso aparente** ``₪`` _weight apparent_ @param {number} densidade ``attr² ⇒`` **densidade** ``₪`` _density_ @param {number} gravidade ``attr³ ⇒`` **gravidade** ``₪`` _gravity_ @param {number} volume ``attr⁴ ⇒`` **volume** ``₪`` _volume_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_peso_aparente_hidroestatica_hidrodinamica: peso_aparente_hidroestatica_hidrodinamica_mdl_1.pesoAparenteDaHidroestaticaHidrodinamica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Plano Inclinado com Atrito``**
         *
         * Realiza o cálculo do plano inclinado com atrito. _[Performs the calculation of the inclined plane with atrito.]_
         *
         * ___
         * @returns {number} @param {number} forcaDeAtrito ``attr¹ ⇒`` **A força de atrito presente** ``₪`` _The present frictional force_ @param {number} massa ``attr² ⇒`` **O valor da massa do objeto** ``₪`` _The value of the mass of the object_ @param {number} gravidade ``attr³ ⇒`` **A força gravitacional** ``₪`` _The gravitational force_ @param {number} angulo ``attr⁴⁢ ⇒`` **O ângulo do plano** ``₪`` _The angle of the plano_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_plano_inclinado_com_atrito: plano_inclinado_com_atrito_mdl_1.planoInclinadoComAtrito,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Plano Inclinado sem Atrito``**
         *
         * Realiza o cálculo do plano inclinado sem atrito. _[Performs the calculation of the inclined plane without atrito.]_
         *
         * ___
         * @returns {number} @param {number} massa ``attr¹ ⇒`` **valor da massa de um objeto** ``₪`` _value of the mass of an object_ @param {number} gravidade ``attr² ⇒`` **valor da gravidade** ``₪`` _value of the gravity_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_plano_inclinado_sem_atrito: plano_inclinado_sem_atrito_mdl_1.planoInclinadoSemAtrito,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Porcentagem``**
         *
         * Realiza o cálculo da porcentagem. _[Performs the calculation of the percentage.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_porcentagem: porcentagem_mdl_1.porcentagem,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Porcentagem por 1000``**
         *
         * Realiza o cálculo da porcentagem por 1000. _[Performs the calculation of the percentage by 1000.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_porcentagem_por_1000: porcentagem_por_1000_mdl_1.porcentagemPor1000,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Porcentagem por 10000``**
         *
         * Realiza o cálculo da porcentagem por 10000. _[Performs the calculation of the percentage by 10000.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_porcentagem_por_10000: porcentagem_por_10000_mdl_1.porcentagemPor10000,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Porcentagem por 100000``**
         *
         * Realiza o cálculo da porcentagem por 100000. _[Performs the calculation of the percentage by 100000.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_porcentagem_por_100000: porcentagem_por_100000_mdl_1.porcentagemPor100000,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Potência``**
         *
         * Realiza o cálculo da potência. _[Performs the calculation of the power.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base da potencia** ``₪`` _numerical value of the base of the power_ @param {number} y ``attr² ⇒`` **valor numérico do expoente da potencia** ``₪`` _numerical value of the exponent of the power_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_potencia: potencia_mdl_1.potencia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Potência mais 1``**
         *
         * Realiza o cálculo da potência mais 1. _[Performs the calculation of the power plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base da potencia** ``₪`` _numerical value of the base of the power_ @param {number} y ``attr² ⇒`` **valor numérico do expoente da potencia** ``₪`` _numerical value of the exponent of the power_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_potencia_mais_1: potencia_mais_1_mdl_1.potenciaMais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Potência menos 1``**
         *
         * Realiza o cálculo da potência menos 1. _[Performs the calculation of the power minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base da potencia** ``₪`` _numerical value of the base of the power_ @param {number} y ``attr² ⇒`` **valor numérico do expoente da potencia** ``₪`` _numerical value of the exponent of the power_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_potencia_menos_1: potencia_menos_1_mdl_1.potenciaMenos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Potência de Potência``**
         *
         * Realiza o cálculo da potência de potência. _[Performs the calculation of the power of power.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number[]} y ``attr² ⇒`` **valores numéricos de expoentes** ``₪`` _exponent numeric values_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_potencia_de_potencia: potencia_de_potencia_mdl_1.potenciaDePotencia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Potência de Potência mais 1``**
         *
         * Realiza o cálculo da potência de potência mais 1. _[Performs the calculation of the power of power plus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number[]} y ``attr² ⇒`` **valores numéricos de expoentes** ``₪`` _exponent numeric values_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_potencia_de_potencia_mais_1: potencia_de_potencia_mais_1_mdl_1.potenciaDePotenciaMais1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Potência de Potência menos 1``**
         *
         * Realiza o cálculo da potência de potência menos 1. _[Performs the calculation of the power of power minus 1.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico da base** ``₪`` _base numeric value_ @param {number[]} y ``attr² ⇒`` **valores numéricos de expoentes** ``₪`` _exponent numeric values_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_potencia_de_potencia_menos_1: potencia_de_potencia_menos_1_mdl_1.potenciaDePotenciaMenos1,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Potencial Elástico``**
         *
         * Realiza o cálculo do potencial eléstico. _[Performs the calculation of the elastic potential.]_
         *
         * ___
         * @returns {number} @param {number} constanteElastica ``attr¹ ⇒`` **constante elástica** ``₪`` _elastic constant_ @param {{initial: number, final: number}} distancia ``attr² ⇒`` **distância** ``₪`` _distance_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_potencial_elastico: potencial_elastico_mdl_1.potencialElastico,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Potencial Mecânico``**
         *
         * Realiza o cálculo do potencial mecânico. _[Performs the calculation of the mechanical potential.]_
         *
         * ___
         * @returns {number} @param {number} velocidade ``attr¹ ⇒`` **velocidade** ``₪`` _velocity_ @param {number} constanteElastica ``attr² ⇒`` **constante elástica** ``₪`` _elastic constant_ @param {{initial: number, final: number}} distancia ``attr³ ⇒`` **distância** ``₪`` _distance_ @param {number} massa ``attr⁢⁴ ⇒`` **massa** ``₪`` _mass_ @param {number} gravidade ``attr⁢⁵ ⇒`` **gravidade** ``₪`` _gravity_ @param {number} altura ``attr⁢⁶ ⇒`` **altura** ``₪`` _height_ @param {boolean} energPotElas ``attr⁢⁷ ⇒`` **sinaliza se possui energia potencial elástica ou não** ``₪`` _whether it has a potential elastic energy or not_ @param {boolean} energPotGrav ``attr⁢⁸ ⇒`` **sinaliza se possui energia potencial gravidade ou não** ``₪`` _whether it has a potential gravity energy or not_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_potencial_mecanico: potencial_mecanico_mdl_1.potencialMecanico,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Principio Fundamental da Hidroestática Hidrodinâmica``**
         *
         * Realiza o cálculo do princípio fundamental da hidroestática hidrodinâmica. _[Performs the calculation of the fundamental principle of hydrodynamic flow.]_
         *
         * ___
         * @returns {number} @param {number} densidade ``attr¹ ⇒`` **densidade** ``₪`` _density_ @param {number} gravidade ``attr² ⇒`` **gravidade** ``₪`` _gravity_ @param {{initial: number, final: number}} altura ``attr³ ⇒`` **altura inicial e final** ``₪`` _height initial and final_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_principio_fundamental_hidroestatica_hidrodinamica: principio_fundamental_hidroestatica_hidrodinamica_mdl_1.principioFundamentalDaHidroestaticaHidrodinamica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Probabilidade``**
         *
         * Realiza o cálculo da probabilidade. _[Performs the calculation of the probability.]_
         *
         * ___
         * @returns {number} @param {number} valor ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} valorTotal ``attr² ⇒`` **valor numérico total** ``₪`` _total numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_probabilidade: probabilidade_mdl_1.probabilidade,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Quadrado de Punnet``**
         *
         * Realiza o cálculo do quadrado de punnet. _[Performs the calculation of the square of punnet.]_
         *
         * ___
         * @returns {string[]} @param {string} genotipo1 ``attr¹ ⇒`` **primeiro genótipo** ``₪`` _first genotype_ @param {string} genotipo2 ``attr² ⇒`` **segundo genótipo** ``₪`` _second genotype_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_quadrado_de_punnet: quadrado_de_punnet_mdl_1.quadradoDePunnet,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Quadrado de Punnet Expandido``**
         *
         * Realiza o cálculo do quadrado de punnet expandido. _[Performs the calculation of the expanded square of punnet.]_
         *
         * ___
         * @returns {string[]} @param {string} genotipo1 ``attr¹ ⇒`` **primeiro genótipo** ``₪`` _first genotype_ @param {string} genotipo2 ``attr² ⇒`` **segundo genótipo** ``₪`` _second genotype_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_quadrado_de_punnet_expandido: quadrado_de_punnet_extendido_mdl_1.quadradoDePunnetExpandido,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Quantidade de Conjuntos``**
         *
         * Realiza o cálculo da quantidade de conjuntos. _[Performs the calculation of the quantity of sets.]_
         *
         * ___
         * @returns {number} @param {number} elementos ``attr¹ ⇒`` **quantidade de números dentro de um conjunto** ``₪`` _number of numbers inside a set_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_quantidade_conjuntos: quantidade_conjuntos_mdl_1.quantidadeConjuntos,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Raíz Cúbica``**
         *
         * Realiza o cálculo da raíz cúbica. _[Performs the calculation of the cubic root.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_raiz_cubica: raiz_cubica_mdl_1.raizCubica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Raíz Décima Potência``**
         *
         * Realiza o cálculo da décima potência. _[Performs the calculation of the decimal power root.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_raiz_decima_potencia: raiz_decima_potencia_mdl_1.raizDecimaPotencia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Raíz Nona Potência``**
         *
         * Realiza o cálculo da nona potência. _[Performs the calculation of the nona power root.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_raiz_nona_potencia: raiz_nona_potencia_mdl_1.raizNonaPotencia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Raíz Oitava Potência``**
         *
         * Realiza o cálculo da raíz à oitava potência. _[Performs the calculation of the octa power root.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_raiz_oitava_potencia: raiz_oitava_potencia_mdl_1.raizOitavaPotencia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Raíz Quadrada``**
         *
         * Realiza o cálculo da raíz quadrada. _[Performs the calculation of the square root.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_raiz_quadrada: raiz_quadrada_mdl_1.raizQuadrada,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Raíz Quarta Potência``**
         *
         * Realiza o cálculo da raíz quarta potência. _[Performs the calculation of the quartic power root.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_raiz_quanta_potencia: raiz_quarta_potencia_mdl_1.raizQuartaPotencia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Raíz Quinta Potência``**
         *
         * Realiza o cálculo da raíz quinta potência. _[Performs the calculation of the quintic power root.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_raiz_quinta_potencia: raiz_quinta_potencia_mdl_1.raizQuintaPotencia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Raíz Sétima Potência``**
         *
         * Realiza o cálculo da raíz sétima potência. _[Performs the calculation of the septa power root.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_raiz_setima_potencia: raiz_setima_potencia_mdl_1.raizSetimaPotencia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Raíz Sexta Potência``**
         *
         * Realiza o cálculo da raíz sexta potência. _[Performs the calculation of the sexta power root.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_raiz_sexta_potencia: raiz_sexta_potencia_mdl_1.raizSextaPotencia,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Regra de Três Composta``**
         *
         * Realiza o cálculo da regra de três composta. _[Performs the calculation of the three-composed rule.]_
         *
         * ___
         * @returns {number} @param {number} valor1 ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} valor2 ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} valor3 ``attr³ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} valor4 ``attr⁴ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} valor5 ``attr⁵ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} valor6 ``attr⁶ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} valor7 ``attr⁷ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {string} localDaVariavel ``attr⁸ ⇒`` **local da variável da regra de três composta** ``₪`` _local of the rule variable_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_regra_de_tres_composta: regra_de_tres_composta_mdl_1.regraDeTresComposta,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Regra de Três Simples``**
         *
         * Realiza o cálculo da regra de três simples. _[Performs the calculation of the three-simples rule.]_
         *
         * ___
         * @returns {number} @param {number} valor1 ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} valor2 ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} valor3 ``attr³ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {string} localDaVariavel ``attr⁢⁴ ⇒`` **local da variável da regra de três composta** ``₪`` _local of the rule variable_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_regra_de_tres_simples: regra_de_tres_simples_mdl_1.regraDeTresSimples,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Relação de Euler``**
         *
         * Realiza o cálculo da relação de Euler. _[Performs the calculation of the Euler relation.]_
         *
         * ___
         * @returns {number} @param {number} vertices ``attr¹ ⇒`` **valor numérico de vértices** ``₪`` _numeric number of vertices_ @param {number} arestas ``attr² ⇒`` **valor numérico de arestas** ``₪`` _numeric number of edges_ @param {number} faces ``attr³ ⇒`` **valor numérico de faces** ``₪`` _numeric number of faces_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_relacao_euler: relacao_euler_mdl_1.relacaoDeEuler,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Rendimento``**
         *
         * Realiza o cálculo do rendimento. _[Performs the calculation of the performance.]_
         *
         * ___
         * @returns {number} @param {number} valorParte ``attr¹ ⇒`` **valor da parte** ``₪`` _numeric part_ @param {number} valorTotal ``attr² ⇒`` **valor total** ``₪`` _total value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_rendimento: rendimento_mdl_1.rendimento,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Resto``**
         *
         * Realiza o cálculo do resto. _[Performs the calculation of the remainder.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} y ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_resto: resto_mdl_1.resto,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Secante``**
         *
         * Realiza o cálculo da secante. _[Performs the calculation of the secant.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_secante: secante_mdl_1.secante,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Secante Hiperbólica``**
         *
         * Realiza o cálculo da secante hiperbólica. _[Performs the calculation of the secant hiperbolic.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_secante_hiperbolica: secante_hiperbolica_mdl_1.secanteHiperbolica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Seno``**
         *
         * Realiza o cálculo do seno. _[Performs the calculation of the sine.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_seno: seno_mdl_1.seno,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Seno Hiperbólico``**
         *
         * Realiza o cálculo do seno hiperbólico. _[Performs the calculation of the sine hiperbolic.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_seno_hiperbolico: seno_hiperbolico_mdl_1.senoHiperbolico,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Sinalização Octantes``**
         *
         * Realiza o cálculo da sinalização octantes. _[Performs the calculation of the octant.]_
         *
         * ___
         * @returns {string} @param {number} x ``attr¹ ⇒`` **valor numérico da coordenada das abscissas** ``₪`` _numerical value of the abscissa coordinate_ @param {number} y ``attr² ⇒`` **valor numérico da coordenada das ordenadas** ``₪`` _numerical value of the ordinate coordinate_ @param {number} z ``attr³ ⇒`` **valor numérico da coordenada das cotas** ``₪`` _numerical value of the quotas coordinate_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_sinalizacao_octantes: sinalizacao_octantes_mdl_1.sinalizacaoOctantes,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Sinalização Quadrantes``**
         *
         * Realiza o cálculo da sinalização quadrantes. _[Performs the calculation of the quadrant.]_
         *
         * ___
         * @returns {string} @param {number} x ``attr¹ ⇒`` **valor numérico da coordenada das abscissas** ``₪`` _numerical value of the abscissa coordinate_ @param {number} y ``attr² ⇒`` **valor numérico da coordenada das ordenadas** ``₪`` _numerical value of the ordinate coordinate_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_sinalizacao_quadrantes: sinalizacao_quadrantes_mdl_1.sinalizacaoQuadrantes,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Sistema de Equações``**
         *
         * Realiza o cálculo do sistema de equações. _[Performs the calculation of the system of equations.]_
         *
         * ___
         * @returns {string} @param {string} expressao1 ``attr¹ ⇒`` **expressão algébrica** ``₪`` _numeric algebraic expression_ @param {string} expressao2 ``attr² ⇒`` **expressão algébrica** ``₪`` _numeric algebraic expression_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_sistema_de_equacoes: sistema_de_equacoes_mdl_1.sistemaDeEquacoes,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Sistema de Inequações``**
         *
         * Realiza o cálculo do sistema de inequações. _[Performs the calculation of the system of inequations.]_
         *
         * ___
         * @returns {string} @param {string} expressao1 ``attr¹ ⇒`` **expressão algébrica** ``₪`` _numeric algebraic expression_ @param {string} expressao2 ``attr² ⇒`` **expressão algébrica** ``₪`` _numeric algebraic expression_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_sistema_de_inequacoes: sistema_de_inequacoes_mdl_1.sistemaDeInequacoes,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Sistemas Lineares``**
         *
         * Realiza o cálculo do sistema de equações. _[Performs the calculation of the system of equations.]_
         *
         * ___
         * @returns {void | any[]} @param {string[]} expressoes ``attr¹ ⇒`` **expressões algébricas** ``₪`` _numeric algebraic expressions_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_sistemas_lineares: sistemas_lineares_mdl_1.sistemasLineares,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Soma``**
         *
         * Realiza o cálculo da soma. _[Performs the calculation of the sum.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} y ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_soma: soma_mdl_1.soma,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Subtração``**
         *
         * Realiza o cálculo da subtração. _[Performs the calculation of the subtraction.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} y ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_subtracao: subtracao_mdl_1.subtracao,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Tangente``**
         *
         * Realiza o cálculo da tangente. _[Performs the calculation of the tangent.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_tangente: tangente_mdl_1.tangente,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Tangente Hiperbólica``**
         *
         * Realiza o cálculo da tangente hiperbólica. _[Performs the calculation of the tangent hiperbolic.]_
         *
         * ___
         * @returns {number} @param {number} x ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_tangente_hiperbolica: tangente_hiperbolica_mdl_1.tangenteHiperbolica,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Tempo``**
         *
         * Realiza o cálculo do tempo. _[Performs the calculation of the time.]_
         *
         * ___
         * @returns {number} @param {number} velocidade ``attr¹ ⇒`` **velocidade** ``₪`` _velocity_ @param {{inicial: number, final: number}} espaço ``attr² ⇒`` **espaço inicial e final** ``₪`` _initial and final space_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_tempo: tempo_mdl_1.tempo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Boltzmann``**
         *
         * Realiza o cálculo do teorema de Boltzmann. _[Performs the calculation of the Boltzmann theorem.]_
         *
         * ___
         * @returns {number} @param {number} temperatura ``attr¹ ⇒`` **temperatura** ``₪`` _temperature_ @param {number} constante ``attr² ⇒`` **constante** ``₪`` _constant_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_boltzmann: teorema_boltzmann_mdl_1.teoremaDeBoltzmann,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Coulomb``**
         *
         * Realiza o cálculo do teorema de Coulomb. _[Performs the calculation of the Coulomb theorem.]_
         *
         * ___
         * @returns {number} @param {number} correnteEletrica ``attr¹ ⇒`` **corrente elétrica** ``₪`` _electric current_ @param {number} distancia ``attr² ⇒`` **distância** ``₪`` _distance_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_coulomb: teorema_coulomb_mdl_1.teoremaDeCoulomb,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Girard``**
         *
         * Realiza o cálculo do teorema de Girard. _[Performs the calculation of the Girard theorem.]_
         *
         * ___
         * @returns {number[] | string[] | void} @param {string} expressao ``attr¹ ⇒`` **expressão algébrica** ``₪`` _numeric algebraic expression_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_girard: teorema_girard_mdl_1.teoremaDeGirard,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Pascal``**
         *
         * Realiza o cálculo do teorema de Pascal. _[Performs the calculation of the Pascal theorem.]_
         *
         * ___
         * @returns {number} @param {number} forca1 ``attr¹ ⇒`` **força 1** ``₪`` _force 1_ @param {number} forca2 ``attr² ⇒`` **força 2** ``₪`` _force 2_ @param {number} area1 ``attr³ ⇒`` **area 1** ``₪`` _area 1_ @param {number} area2 ``attr⁴ ⇒`` **area 2** ``₪`` _area 2_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_pascal: teorema_pascal_mdl_1.teoremaDePascal,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Pitágoras A N``**
         *
         * Realiza o cálculo do teorema de Pitágoras A N. _[Performs the calculation of the Pitágoras A N theorem.]_
         *
         * ___
         * @returns {number} @param {number} a ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} n ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_pitagoras_a_n: teorema_pitagoras_a_n_mdl_1.teoremaPitagorasAN,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Pitágoras B C H``**
         *
         * Realiza o cálculo do teorema de Pitágoras B C H. _[Performs the calculation of the Pitágoras B C H theorem.]_
         *
         * ___
         * @returns {number} @param {number} b ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} c ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} h ``attr³ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_pitagoras_b_c_h: teorema_pitagoras_b_c_h_mdl_1.teoremaPitagorasBCH,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Pitágoras Clássico``**
         *
         * Realiza o cálculo do teorema de Pitágoras Clássico. _[Performs the calculation of the Pitágoras Clássico theorem.]_
         *
         * ___
         * @returns {number} @param {number} a ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} b ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_pitagoras_classico: teorema_pitagoras_classico_mdl_1.teoremaPitagorasClassico,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Pitágoras M N``**
         *
         * Realiza o cálculo do teorema de Pitágoras M N. _[Performs the calculation of the Pitágoras M N theorem.]_
         *
         * ___
         * @returns {number} @param {number} m ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} n ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_pitagoras_m_n: teorema_pitagoras_m_n_mdl_1.teoremaPitagorasMN,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Plank``**
         *
         * Realiza o cálculo do teorema de Plank. _[Performs the calculation of the Plank theorem.]_
         *
         * ___
         * @returns {number} @param {number} energia ``attr¹ ⇒`` **energia** ``₪`` _energy_ @param {number} constante ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_plank: teorema_plank_mdl_1.teoremaDePlank,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Stevin``**
         *
         * Realiza o cálculo do teorema de Stevin. _[Performs the calculation of the Stevin theorem.]_
         *
         * ___
         * @returns {number} @param {number} densidade ``attr¹ ⇒`` **densidade de um objeto** ``₪`` _numeric density_ @param {number} gravidade ``attr² ⇒`` **gravidade** ``₪`` _gravity_ @param {{inicial: number, final: number}} altura ``attr³ ⇒`` **altura** ``₪`` _height_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_stevin: teorema_stevin_mdl_1.teoremaDeStevin,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Stirling``**
         *
         * Realiza o cálculo do teorema de Stirling. _[Performs the calculation of the Stirling theorem.]_
         *
         * ___
         * @returns {number} @param {number} valor ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_stirling: teorema_stirling_mdl_1.teoremaDeStirling,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Tales de Mileto``**
         *
         * Realiza o cálculo do teorema de Tales de Mileto. _[Performs the calculation of the Tales de Mileto theorem.]_
         *
         * ___
         * @returns {number} @param {number} n1 ``attr¹ ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} n2 ``attr² ⇒`` **valor numérico** ``₪`` _numeric value_ @param {number} n3 ``attr³ ⇒`` **valor numérico** ``₪`` _numeric value_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_teorema_tales_de_mileto: teorema_tales_mileto_mdl_1.teoremaTalesDeMileto,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Titulação``**
         *
         * Realiza o cálculo do teorema de Titulação. _[Performs the calculation of the Titulação theorem.]_
         *
         * ___
         * @returns {number} @param {number} massaBase ``attr¹ ⇒`` **massa da base** ``₪`` _base mass_ @param {number} massaAcido ``attr² ⇒`` **massa do acido** ``₪`` _acid mass_ @param volumeBase ``attr³ ⇒`` **volume da base** ``₪`` _base volume_ @param volumeAcido ``attr⁴ ⇒`` **volume do acido** ``₪`` _acid volume_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_titulacao: titulacao_mdl_1.titulacao,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Teorema de Torricelli no Movimento Circular Uniformente Variado``**
         *
         * Realiza o cálculo do teorema de Torricelli no Movimento Circular Uniformente Variado. _[Performs the calculation of the Torricelli theorem in the uniformly varied circular movement.]_
         *
         * ___
         * @returns {number} @param {number} velocidadeAngularInicial ``attr¹ ⇒`` **velocidade angular de partida** ``₪`` _velocity angular initial_ @param {number} aceleracaoAngular ``attr² ⇒`` **aceleração angular** ``₪`` _angular acceleration_ @param {{inicial: number, final: number}} deslocamentoAngular ``attr³ ⇒`` **deslocamento angular** ``₪`` _angular displacement_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_torricelli_mcuv: torricelli_mcuv_mdl_1.torricelliMCUV,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Trabalho``**
         *
         * Realiza o cálculo do trabalho. _[Performs the calculation of the work.]_
         *
         * ___
         * @returns {number} @param {number} massa ``attr¹ ⇒`` **massa** ``₪`` _mass_ @param {number} gravidade ``attr² ⇒`` **gravidade** ``₪`` _gravity_ @param {number} altura ``attr³ ⇒`` **altura** ``₪`` _height_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_trabalho: trabalho_mdl_1.trabalho,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Valor Máximo``**
         *
         * Realiza o cálculo do valor máximo. _[Performs the calculation of the maximum value.]_
         *
         * ___
         * @returns {number} @param {number[]} x ``attr¹ ⇒`` **valores numéricos** ``₪`` _numeric values_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_valor_maximo: valor_maximo_mdl_1.valorMaximo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Valor Mínimo``**
         *
         * Realiza o cálculo do valor mínimo. _[Performs the calculation of the minimum value.]_
         *
         * ___
         * @returns {number} @param {number[]} x ``attr¹ ⇒`` **valores numéricos** ``₪`` _numeric values_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_valor_minimo: valor_minimo_mdl_1.valorMinimo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Velocidade Angular no Movimento Circular Uniforme``**
         *
         * Realiza o cálculo da velocidade angular no movimento circular uniforme. _[Performs the calculation of the angular velocity in the uniformly varied circular movement.]_
         *
         * ___
         * @returns {number} @param {{inicial: number, final: number}} angulo ``attr¹ ⇒`` **ângulo inicial e final** ``₪`` _angular initial and final_ @param {{inicial: number, final: number}} tempo ``attr² ⇒`` **tempo** ``₪`` _time_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_velocidade_angular_mcu: velocidade_angular_mcu_mdl_1.velocidadeAngularMCU,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Velocidade Linear no Movimento Circular Uniforme``**
         *
         * Realiza o cálculo da velocidade linear no movimento circular uniforme. _[Performs the calculation of the linear velocity in the uniformly varied circular movement.]_
         *
         * ___
         * @returns {number} @param {number} frequencia ``attr¹ ⇒`` **frequência de impressão da velocidade** ``₪`` _numeric value_ @param {number} raio ``attr² ⇒`` **raio** ``₪`` _radius_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_velocidade_linear_mcu: velocidade_linear_mcu_mdl_1.velocidadeLinearMCU,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Velocidade``**
         *
         * Realiza o cálculo da velocidade. _[Performs the calculation of the velocity.]_
         *
         * ___
         * @returns {number} @param {{inicial: number, final: number}} espaco ``attr¹ ⇒`` **espaco** ``₪`` _space_ @param {{inicial: number, final: number}} tempo ``attr² ⇒`` **tempo** ``₪`` _time_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_velocidade: velocidade_mdl_1.velocidade,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Cilindro``**
         *
         * Realiza o cálculo do volume do cilindro. _[Performs the calculation of the volume of the cylinder.]_
         *
         * ___
         * @returns {number} @param {number} raio ``attr¹ ⇒`` **raio** ``₪`` _radius_ @param {number} altura ``attr² ⇒`` **altura** ``₪`` _height_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_cilindro: volume_cilindro_mdl_1.volumeCilindro,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Cone``**
         *
         * Realiza o cálculo do volume do cone. _[Performs the calculation of the volume of the cone.]_
         *
         * ___
         * @returns {number} @param {number} raio ``attr¹ ⇒`` **raio** ``₪`` _radius_ @param {number} altura ``attr² ⇒`` **altura** ``₪`` _height_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_cone: volume_cone_mdl_1.volumeCone,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Cubo``**
         *
         * Realiza o cálculo do volume do cubo. _[Performs the calculation of the volume of the cube.]_
         *
         * ___
         * @returns {number} @param {number} aresta ``attr¹ ⇒`` **aresta de um cubo** ``₪`` _edge of cube_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_cubo: volume_cubo_mdl_1.volumeCubo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Dodecaedro``**
         *
         * Realiza o cálculo do volume dodecaedro. _[Performs the calculation of the volume of the dodecaedro.]_
         *
         * ___
         * @returns {number} @param {number} aresta ``attr¹ ⇒`` **aresta de um dodecaedro** ``₪`` _edge of dodecaedro_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_dodecaedro: volume_dodecaedro_mdl_1.volumeDodecaedro,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume da Esfera``**
         *
         * Realiza o cálculo do volume da esfera. _[Performs the calculation of the volume of the sphere.]_
         *
         * ___
         * @returns {number} @param {number} raio ``attr¹ ⇒`` **raio** ``₪`` _radius_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_esfera: volume_esfera_mdl_1.volumeEsfera,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Hexaedro``**
         *
         * Realiza o cálculo do volume hexaedro. _[Performs the calculation of the volume of the hexaedro.]_
         *
         * ___
         * @returns {number} @param {number} aresta ``attr¹ ⇒`` **aresta de um cubo** ``₪`` _edge_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_hexaedro: volume_hexaedro_mdl_1.volumeHexaedro,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Icosaedro``**
         *
         * Realiza o cálculo do volume icosaedro. _[Performs the calculation of the volume of the icosaedro.]_
         *
         * ___
         * @returns {number} @param {number} aresta ``attr¹ ⇒`` **aresta de um cubo** ``₪`` _edge_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_icosaedro: volume_icosaedro_mdl_1.volumeIcosaedro,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Octaedro``**
         *
         * Realiza o cálculo do volume octaedro. _[Performs the calculation of the volume of the octaedro.]_
         *
         * ___
         * @returns {number} @param {number} aresta ``attr¹ ⇒`` **aresta de um cubo** ``₪`` _edge_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_octaedro: volume_octaedro_mdl_1.volumeOctaedro,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Paralelogramo``**
         *
         * Realiza o cálculo do volume paralelogramo. _[Performs the calculation of the volume of the paralelogramo.]_
         *
         * ___
         * @returns {number} @param {number} comprimento ``attr¹ ⇒`` **comprimento** ``₪`` _length_ @param {number} largura ``attr² ⇒`` **largura** ``₪`` _width_ @param {number} altura ``attr³ ⇒`` **altura** ``₪`` _height
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_paralelogramo: volume_paralelogramo_mdl_1.volumeParalelogramo,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume da Pirâmide``**
         *
         * Realiza o cálculo do volume da pirâmide. _[Performs the calculation of the volume of the pirâmide.]_
         *
         * ___
         * @returns {number} @param {number} areaBase ``attr¹ ⇒`` **área da base** ``₪`` _base area_ @param {number} altura ``attr² ⇒`` **altura** ``₪`` _height_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_piramide: volume_piramide_mdl_1.volumePiramide,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Polígono de Formato Lozango``**
         *
         * Realiza o cálculo do volume do polígono de formato lozango. _[Performs the calculation of the volume of the polígono de formato lozango.]_
         *
         * ___
         * @returns {number} @param {number} diagonalMaior ``attr¹ ⇒`` **diagonal maior** ``₪`` _largest diagonal_ @param {number} diagonalMenor ``attr² ⇒`` **diagonal menor** ``₪`` _smallest diagonal_ @param {number} altura ``attr³ ⇒`` **altura** ``₪`` _height
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_poligono_formato_lozango: volume_poligono_formato_lozango_mdl_1.volumePoligonoFormatoLozango,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Polígono de Formato Trapézio``**
         *
         * Realiza o cálculo do volume do polígono de formato trapézio. _[Performs the calculation of the volume of the polígono de formato trapézio.]_
         *
         * ___
         * @returns {number} @param {number} baseMaior ``attr¹ ⇒`` **base maior** ``₪`` _largest base_ @param {number} baseMenor ``attr² ⇒`` **base menor** ``₪`` _smallest base_ @param {number} altura ``attr³ ⇒`` **altura** ``₪`` _height
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_poligono_formato_trapezio: volume_poligono_formato_trapezio_mdl_1.volumePoligonoFormatoTrapezio,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Prisma``**
         *
         * Realiza o cálculo do volume do prisma. _[Performs the calculation of the volume of the prisma.]_
         *
         * ___
         * @returns {number} @param {number} area ``attr¹ ⇒`` **area** ``₪`` _area_ @param {number} altura ``attr² ⇒`` **altura** ``₪`` _height
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_prisma: volume_prisma_mdl_1.volumePrisma,
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic Category Method](https://github.com/Humbanew/wertsfy/assets/59739253/abeeb4ad-8f4c-4267-9b39-8917d7e1530c)
         *
         * **``Método [Method] - Volume do Tetraedro``**
         *
         * Realiza o cálculo do volume do tetraedro. _[Performs the calculation of the volume of the tetraedro.]_
         *
         * ___
         * @returns {number} @param {number} aresta ``attr¹ ⇒`` **aresta de um cubo** ``₪`` _edge_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         **/
        m_volume_tetraedro: volume_tetraedro_mdl_1.volumeTetraedro
    }
};
