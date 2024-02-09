/**
 *
 * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
 *
 * **``Interface de Programação de Aplicativos [Application Programming Interface]``**
 *
 * ___
 * ![Root Badge](https://github.com/Humbanew/wertsfy/assets/59739253/f1aaab14-3a9c-4b23-9a8a-2cb67e3faac8)
 *
 * Contém todos os recursos disponíveis pelo kit de desenvolvimento. _[Contains all resources available by the Development Kit.]_
 *
 * ___
 * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
 * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
 *
 */
export declare const wertsfy: {
    /**
     *
     * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
     *
     * ___
     * ![Library Badge](https://github.com/Humbanew/wertsfy/assets/59739253/0e7410ee-28ee-4260-ae9b-650c031d0517)
     *
     * **``Bibliotecas da API [API Librarys]``**
     *
     * Contém todas as bibliotecas disponíveis. _[Contains all available libraries.]_
     *
     * ___
     * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
     * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
     *
     */
    Bibliotecas: {
        /**
         *
         * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
         *
         * ___
         * ![Library Badge - Arithmetic](https://github.com/Humbanew/wertsfy/assets/59739253/edce6832-23e7-4305-ad7d-e1c215e26e0b)
         *
         * **``Biblioteca [Library] - Aritmeticos``**
         *
         * Contém as referências de constantes e funções aritméticas. _[Contains the references of constants and arithmetic functions.]_
         *
         * ___
         * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
         * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
         *
         */
        arithm: {
            Consts: {
                c_avogadro: number;
                c_cbrt_of01_02: number;
                c_cbrt_of01_04: number;
                c_cbrt_of01_06: number;
                c_cbrt_of01_08: number;
                c_cbrt_of01: number;
                c_cbrt_of02: number;
                c_cbrt_of03: number;
                c_cbrt_of04: number;
                c_cbrt_of05: number;
                c_cbrt_of06: number;
                c_cbrt_of07: number;
                c_cbrt_of08: number;
                c_cbrt_of09: number;
                c_cbrt_of10: number;
                c_coulomb: number;
                c_euler: number;
                c_logarithm2: number;
                c_logarithm2e: number;
                c_logarithm10: number;
                c_logarithm10e: number;
                c_maxvalue: number;
                c_minvalue: number;
                c_newton: number;
                c_pi: number;
                c_plank: number;
                c_sqrt_of01_02: number;
                c_sqrt_of01_04: number;
                c_sqrt_of01_06: number;
                c_sqrt_of01_08: number;
                c_sqrt_of01: number;
                c_sqrt_of02: number;
                c_sqrt_of03: number;
                c_sqrt_of04: number;
                c_sqrt_of05: number;
                c_sqrt_of06: number;
                c_sqrt_of07: number;
                c_sqrt_of08: number;
                c_sqrt_of09: number;
                c_sqrt_of10: number;
                c_tesla: number;
            };
            Methods: {
                m_absoluto: (x: number) => number;
                m_aceleracao_angular_mcuv: (velocidadeAngular: {
                    /**
                     *
                     * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
                     *
                     * **``Interface de Programação de Aplicativos [Application Programming Interface]``**
                     *
                     * ___
                     * ![Root Badge](https://github.com/Humbanew/wertsfy/assets/59739253/f1aaab14-3a9c-4b23-9a8a-2cb67e3faac8)
                     *
                     * Contém todos os recursos disponíveis pelo kit de desenvolvimento. _[Contains all resources available by the Development Kit.]_
                     *
                     * ___
                     * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
                     * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
                     *
                     */
                    inicial: number;
                    final: number;
                }, tempo: {
                    inicial: number;
                    final: number;
                }) => number;
                m_aceleracao_centripeta_mcu: (velocidade: number, raio: number) => number;
                m_aceleracao_plano_inclinado_eixo_x: (massa: number, gravidade: number, angulo: number) => number;
                m_aceleracao_plano_inclinado_eixo_y: (massa: number, gravidade: number, angulo: number) => number;
                m_aceleracao: (velocidade: number, tempo: {
                    inicial: number;
                    final: number;
                }) => number;
                m_alcance_lancamento_vertical: (velocidade: number, tempo: {
                    inicial: number;
                    final: number;
                }, angulo: number) => number;
                m_alcance_maximo_lancamento_vertical: (velocidade: number, angulo: number, gravidade: number) => number;
                m_altura_maxima_lancamento_vertical: (velocidadeInicial: number, gravidade: number, angulo: number) => number;
                m_antilogaritmo_base_2: (x: number) => number;
                m_antilogaritmo_base_2_mais_1: (x: number) => number;
                m_antilogaritmo_base_2_menos_1: (x: number) => number;
                m_antilogaritmo_base_10: (x: number) => number;
                m_antilogaritmo_base_10_mais_1: (x: number) => number;
                m_antilogaritmo_base_10_menos_1: (x: number) => number;
                m_antilogaritmo_base_qualquer: (base: number, x: number) => number;
                m_antilogaritmo_base_qualquer_mais_1: (base: number, x: number) => number;
                m_antilogaritmo_base_qualquer_menos_1: (base: number, x: number) => number;
                m_antilogaritmo_natural: (x: number) => number;
                m_antilogaritmo_natural_mais_1: (x: number) => number;
                m_antilogaritmo_natural_menos_1: (x: number) => number;
                m_apotema_triangulo: (lado: number) => number;
                m_arco_cosecante: (x: number) => number;
                m_arco_cosecante_hiperbolica: (x: number) => number;
                m_arco_cosseno: (x: number) => number;
                m_arco_cosseno_hiperbolico: (x: number) => number;
                m_arco_cotangente: (x: number) => number;
                m_arco_cotangente_hiperbolica: (x: number) => number;
                m_arco_secante: (x: number) => number;
                m_arco_secante_hiperbolica: (x: number) => number;
                m_arco_seno: (x: number) => number;
                m_arco_seno_hiperbolico: (x: number) => number;
                m_arco_tangente: (x: number) => number;
                m_arco_tangente_hiperbolica: (x: number) => number;
                m_area_circulo: (raio: number) => number;
                m_area_circunferencia: (raio: number) => number;
                m_area_elipse: (raio: number, altura: number) => number;
                m_area_esfera: (raio: number) => number;
                m_area_lateral_cilindro: (raio: number, altura: number) => number;
                m_area_lateral_prisma: (lados: number, comprimento: number, largura: number) => number;
                m_area_lozango: (diagonalMaior: number, diagonalMenor: number) => number;
                m_area_piramide: (areaLateral: number, areaBase: number) => number;
                m_area_poligono: (lados: number, comprimento: number, largura: number) => number;
                m_area_quadrado: (lado: number) => number;
                m_area_retangulo: (comprimento: number, largura: number) => number;
                m_area_trapezio: (baseMaior: number, baseMenor: number, altura: number) => number;
                m_area_triangulo: (lado: number) => number;
                m_arranjo: (total: number, divisor: number) => number;
                m_arrendonda_para_baixo: (x: number) => number;
                m_arrendonda_para_cima: (x: number) => number;
                m_arrendonda_para_decimal_32bits: (x: number) => number;
                m_arrendonda_para_inteiro: (x: number) => number;
                m_atrito: (coeficienteDeAtrito: number, massa: number) => number;
                m_calor_latente: (quantidadeDeCalor: number, massa: number) => number;
                m_calor_sensivel: (massa: number, calorEspecifico: number, temperatura: {
                    inicial: number;
                    final: number;
                }) => number;
                m_celsius_fahrenheit: (x: number) => number;
                m_celsius_kelvin: (x: number) => number;
                m_cologaritmo_base_2: (x: number) => number;
                m_cologaritmo_base_2_mais_1: (x: number) => number;
                m_cologaritmo_base_2_menos_1: (x: number) => number;
                m_cologaritmo_base_10: (x: number) => number;
                m_cologaritmo_base_10_mais_1: (x: number) => number;
                m_cologaritmo_base_10_menos_1: (x: number) => number;
                m_cologaritmo_base_qualquer: (base: number, x: number) => number;
                m_cologaritmo_base_qualquer_mais_1: (base: number, x: number) => number;
                m_cologaritmo_base_qualquer_menos_1: (base: number, x: number) => number;
                m_cologaritmo_natural: (x: number) => number;
                m_cologaritmo_natural_mais_1: (x: number) => number;
                m_cologaritmo_natural_menos_1: (x: number) => number;
                m_combinacao: (total: number, divisor: number) => number;
                m_concentracao: (massaSoluto: number, volume: number) => number;
                m_consumo_de_energia: (tempo: {
                    inicial: number;
                    /**
                     *
                     * ![Wertsfy Logo Gen 6 JSDocs](https://github.com/Humbanew/wertsfy/assets/59739253/e8e71afd-190e-437e-800e-efd353f91e61)
                     *
                     * **``Interface de Programação de Aplicativos [Application Programming Interface]``**
                     *
                     * ___
                     * ![Root Badge](https://github.com/Humbanew/wertsfy/assets/59739253/f1aaab14-3a9c-4b23-9a8a-2cb67e3faac8)
                     *
                     * Contém todos os recursos disponíveis pelo kit de desenvolvimento. _[Contains all resources available by the Development Kit.]_
                     *
                     * ___
                     * ![1 0 0 Badge](https://github.com/Humbanew/wertsfy/assets/59739253/a0c8edb1-da2c-431b-b450-fe6f3642bc18)
                     * ![Release Badge](https://github.com/Humbanew/wertsfy/assets/59739253/2a9a3224-2818-49ff-8f39-1caa7d9b99d1)
                     *
                     */
                    final: number;
                }, correnteEletrica: number, ddp: number) => number;
                m_contra_forca_eletromotriz: (potenciaTotalGerador: number, intensidadeDaCorrente: number) => number;
                m_cosecante: (x: number) => number;
                m_cosecante_hiperbolica: (x: number) => number;
                m_cosseno: (x: number) => number;
                m_cosseno_hiperbolico: (x: number) => number;
                m_cotangente: (x: number) => number;
                m_cotangente_hiperbolica: (x: number) => number;
                m_densidade: (massa: number, volume: number) => number;
                m_determinante_2x2: (a00: number, a01: number, a10: number, a11: number) => number;
                m_determinante_3x3: (a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number) => number;
                m_diagrama_venn_2_grupos: (ng1: number, ng2: number) => object;
                m_diagrama_venn_3_grupos: (ng1: number, ng2: number, ng3: number) => {
                    intersection: number;
                    group1: number;
                    group2: number;
                    group3: number;
                };
                m_diagrama_venn_4_grupos: (ng1: number, ng2: number, ng3: number, ng4: number) => {
                    intersection: number;
                    group1: number;
                    group2: number;
                    group3: number;
                    group4: number;
                };
                m_dilatacao_linear: (comprimentoInicial: number, coeficienteDeDilatacaoLinear: number, temperatura: {
                    inicial: number;
                    final: number;
                }) => number;
                m_dilatacao_superficial: (areaInicial: number, coeficienteDeDilatacaoSuperficial: number, temperatura: {
                    inicial: number;
                    final: number;
                }) => number;
                m_dilatacao_volumetrica: (volumeInicial: number, coeficienteDeDilatacaoVolumetrica: number, temperatura: {
                    inicial: number;
                    final: number;
                }) => number;
                m_divisao: (x: number, y: number) => number;
                m_efeito_fotoeletrico: (frequenciaDaLuz: number) => number;
                m_efeito_joule: (corrente: number, resistencia: number, tempo: {
                    inicial: number;
                    final: number;
                }) => number;
                m_empuxo_hidroestatica_hidrodinamica: (densidade: number, gravidade: number, volume: number) => number;
                m_energia_cinetica: (massa: number, velocidade: number) => number;
                m_energia_potencial_elastica: (constanteElastica: number, distancia: {
                    inicial: number;
                    final: number;
                }) => number;
                m_energia_potencial_gravitacional: (massa: number, gravidade: number, altura: number) => number;
                m_equacao_horaria_aceleracao_mhs: (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) => number;
                m_equacao_horaria_aceleracao: (aceleracao: number, tempo: number, velocidade: number) => number;
                m_equacao_horaria_espaco_mcuv: (posicaoAngularInicial: number, velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number) => number;
                m_equacao_horaria_espaco: (espaco: {
                    inicial: number;
                    final: number;
                }, aceleracao: number) => number;
                m_equacao_horaria_forca: (forca: number, tempo: number, aceleracao: number) => number;
                m_equacao_horaria_posicao_mhs: (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) => number;
                m_equacao_horaria_tempo_espaco: (tempo: {
                    inicial: number;
                    final: number;
                }, espaco: {
                    inicial: number;
                    final: number;
                }, velocidade: number, aceleracao: number) => number;
                m_equacao_horaria_tempo_mcuv: (velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number) => number;
                m_equacao_horaria_tempo: (tempo: {
                    inicial: number;
                    final: number;
                }, velocidade: number, aceleracao: number) => number;
                m_equacao_horaria_velocidade_mhs: (velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number) => number;
                m_equacao_horaria_velocidade: (velocidade: number, tempo: number, aceleracao: number) => number;
                m_equacao_lagrange: (x: number, y: number, xi: number, yi: number, xii: number, yii: number, xiii: number, yiii: number) => number;
                m_equacao_torricelli: (velocidadeInicial: number, aceleracao: number, espaco: {
                    inicial: number;
                    final: number;
                }) => number;
                m_escala_geografica: (tamanhoReal: number, tamanhoFicticio: number) => number;
                m_espaco: (velocidade: number, tempo: {
                    inicial: number;
                    final: number;
                }) => number;
                m_exponencial: (base: number, x: number) => number;
                m_exponencial_mais_1: (base: number, x: number) => number;
                m_exponencial_menos_1: (base: number, x: number) => number;
                m_fahrenheit_celsius: (x: number) => number;
                m_fahrenheit_kelvin: (x: number) => number;
                m_fatorial: (x: number) => number;
                m_forca_eletromotriz: (potenciaTotalGerador: number, intensidadeDaCorrente: number) => number;
                m_forca_gravitacional: (gravidade: number, massaPlaneta: number, distancia: {
                    inicial: number;
                    final: number;
                }) => number;
                m_frequencia: (periodo: number) => number;
                m_indice_desenvolvimento_humano: (saude: number, educacao: number, renda: number, populacao: number, ppc: number) => number;
                m_indice_gini: (pnb: number, populacao: number) => number;
                m_indice_massa_corporal: (peso: number, altura: number) => number;
                m_juros_compostos: (valor: number, taxa: number, tempo: number, vezes: number) => number;
                m_juros_simples: (valor: number, taxa: number, tempo: number) => number;
                m_kelvin_celsius: (x: number) => number;
                m_kelvin_fahrenheit: (x: number) => number;
                m_lancamento_horizontal: (gravidade: number, tempo: {
                    inicial: number;
                    final: number;
                }) => number;
                m_lei_de_coulomb: (carga: {
                    a: number;
                    b: number;
                }, distancia: {
                    inicial: number;
                    final: number;
                }) => number;
                m_lei_de_lenz: (intensidadeDoCampoMagnetico: number, areaDaSuperficie: number, angulo: number) => number;
                m_lei_de_ohm: (resistencia: number, corrente: number) => number;
                m_lei_geral_dos_gases: (pressao1: string, pressao2: string, volume1: string, volume2: string, temperatura1: string, temperatura2: string) => number;
                m_leis_de_newton: (massa: number, aceleracao: number) => number;
                m_logaritmo_base_2: (x: number) => number;
                m_logaritmo_base_2_mais_1: (x: number) => number;
                m_logaritmo_base_2_menos_1: (x: number) => number;
                m_logaritmo_base_10: (x: number) => number;
                m_logaritmo_base_10_mais_1: (x: number) => number;
                m_logaritmo_base_10_menos_1: (x: number) => number;
                m_logaritmo_base_qualquer: (base: number, x: number) => number;
                m_logaritmo_base_qualquer_mais_1: (base: number, x: number) => number;
                m_logaritmo_base_qualquer_menos_1: (base: number, x: number) => number;
                m_logaritmo_natural: (x: number) => number;
                m_logaritmo_natural_mais_1: (x: number) => number;
                m_logaritmo_natural_menos_1: (x: number) => number;
                m_periodo: (frequencia: number) => number;
                m_peso_aparente_hidroestatica_hidrodinamica: (peso: number, densidade: number, gravidade: number, volume: number) => number;
                m_plano_inclinado_com_atrito: (forcaDeAtrito: number, massa: number, gravidade: number, angulo: number) => number;
                m_plano_inclinado_sem_atrito: (massa: number, gravidade: number) => number;
                m_porcentagem: (x: number) => number;
                m_porcentagem_por_1000: (x: number) => number;
                m_porcentagem_por_10000: (x: number) => number;
                m_porcentagem_por_100000: (x: number) => number;
                m_potencia: (x: number, y: number) => number;
                m_potencia_mais_1: (x: number, y: number) => number;
                m_potencia_menos_1: (x: number, y: number) => number;
                m_potencia_de_potencia: (x: number, y: number[]) => number;
                m_potencia_de_potencia_mais_1: (x: number, y: number[]) => number;
                m_potencia_de_potencia_menos_1: (x: number, y: number[]) => number;
                m_potencial_elastico: (constanteElastica: number, distancia: {
                    inicial: number;
                    final: number;
                }) => number;
                m_potencial_mecanico: (velocidade: number, constanteElastica: number, distancia: {
                    inicial: number;
                    final: number;
                }, massa: number, gravidade: number, altura: number, energPotElas: boolean, energPotGrav: boolean) => number;
                m_principio_fundamental_hidroestatica_hidrodinamica: (densidade: number, gravidade: number, altura: {
                    inicial: number;
                    final: number;
                }) => number;
                m_probabilidade: (valor: number, valorTotal: number) => number;
                m_quadrado_de_punnet: (genotipo1: string, genotipo2: string) => string[];
                m_quadrado_de_punnet_expandido: (genotipo1: string, genotipo2: string) => string[];
                m_quantidade_conjuntos: (elementos: number) => number;
                m_raiz_cubica: (x: number) => number;
                m_raiz_decima_potencia: (x: number) => number;
                m_raiz_nona_potencia: (x: number) => number;
                m_raiz_oitava_potencia: (x: number) => number;
                m_raiz_quadrada: (x: number) => number;
                m_raiz_quanta_potencia: (x: number) => number;
                m_raiz_quinta_potencia: (x: number) => number;
                m_raiz_setima_potencia: (x: number) => number;
                m_raiz_sexta_potencia: (x: number) => number;
                m_regra_de_tres_composta: (valor1: number, valor2: number, valor3: number, valor4: number, valor5: number, valor6: number, valor7: number, localDavariavel?: string) => number;
                m_regra_de_tres_simples: (valor1: number, valor2: number, valor3: number, localDavariavel?: string) => number;
                m_relacao_euler: (vertices: number, arestas: number, faces: number) => number;
                m_rendimento: (valorParte: number, valorTotal: number) => number;
                m_resto: (x: number, y: number) => number;
                m_secante: (x: number) => number;
                m_secante_hiperbolica: (x: number) => number;
                m_seno: (x: number) => number;
                m_seno_hiperbolico: (x: number) => number;
                m_sinalizacao_octantes: (x: number, y: number, z: number) => string;
                m_sinalizacao_quadrantes: (x: number, y: number) => string;
                m_sistema_de_equacoes: (expressao1: string, expressao2: string) => string | void;
                m_sistema_de_inequacoes: (expressao1: string, expressao2: string) => string | void;
                m_sistemas_lineares: (expressoes: string[]) => void | any[];
                m_soma: (x: number, y: number) => number;
                m_subtracao: (x: number, y: number) => number;
                m_tangente: (x: number) => number;
                m_tangente_hiperbolica: (x: number) => number;
                m_tempo: (velocidade: number, espaco: {
                    inicial: number;
                    final: number;
                }) => number;
                m_teorema_boltzmann: (temperatura: number, constante: number) => number;
                m_teorema_coulomb: (correnteEletrica: number, distancia: number) => number;
                m_teorema_girard: (expressao: string) => void | string[] | number[];
                m_teorema_pascal: (forca1: number, forca2: number, area1: number, area2: number) => number;
                m_teorema_pitagoras_a_n: (a: number, n: number) => number;
                m_teorema_pitagoras_b_c_h: (b: number, c: number, h: number) => number;
                m_teorema_pitagoras_classico: (a: number, b: number) => number;
                m_teorema_pitagoras_m_n: (m: number, n: number) => number;
                m_teorema_plank: (energia: number, constante: number) => number;
                m_teorema_stevin: (densidade: number, gravidade: number, altura: {
                    inicial: number;
                    final: number;
                }) => number;
                m_teorema_stirling: (valor: number) => number;
                m_teorema_tales_de_mileto: (n1: number, n2: number, n3: number) => number;
                m_titulacao: (massaBase: number, massaAcido: number, volumeBase: number, volumeAcido: number) => number;
                m_torricelli_mcuv: (velocidadeAngularInicial: number, aceleracaoAngular: number, deslocamentoAngular: {
                    inicial: number;
                    final: number;
                }) => number;
                m_trabalho: (massa: number, gravidade: number, altura: number) => number;
                m_valor_maximo: (x: number[]) => number;
                m_valor_minimo: (x: number[]) => number;
                m_velocidade_angular_mcu: (angulo: {
                    inicial: number;
                    final: number;
                }, tempo: {
                    inicial: number;
                    final: number;
                }) => number;
                m_velocidade_linear_mcu: (frequencia: number, raio: number) => number;
                m_velocidade: (espaco: {
                    inicial: number;
                    final: number;
                }, tempo: {
                    inicial: number;
                    final: number;
                }) => number;
                m_volume_cilindro: (raio: number, altura: number) => number;
                m_volume_cone: (raio: number, altura: number) => number;
                m_volume_cubo: (aresta: number) => number;
                m_volume_dodecaedro: (aresta: number) => number;
                m_volume_esfera: (raio: number) => number;
                m_volume_hexaedro: (aresta: number) => number;
                m_volume_icosaedro: (aresta: number) => number;
                m_volume_octaedro: (aresta: number) => number;
                m_volume_paralelogramo: (comprimento: number, largura: number, altura: number) => number;
                m_volume_piramide: (areaBase: number, altura: number) => number;
                m_volume_poligono_formato_lozango: (diagonalMaior: number, diagonalMenor: number, altura: number) => number;
                m_volume_poligono_formato_trapezio: (baseMaior: number, baseMenor: number, altura: number) => number;
                m_volume_prisma: (area: number, altura: number) => number;
                m_volume_tetraedro: (aresta: number) => number;
            };
        };
    };
};
//# sourceMappingURL=wertsfy.api.d.ts.map