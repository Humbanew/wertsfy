import { absoluto } from "./modules/arithmetic/absoluto.mdl";
import { aceleracao } from "./modules/arithmetic/aceleracao.mdl";
import { aceleracaoAngularMCUV } from "./modules/arithmetic/aceleracao_angular_mcuv.mdl";
import { aceleracaoCentripetaMCU } from "./modules/arithmetic/aceleracao_centripeta_mcu.mdl";
import { aceleracaoPlanoInclinadoEixoX } from "./modules/arithmetic/aceleracao_plano_inclinado_eixo_x.mdl";
import { aceleracaoPlanoInclinadoEixoY } from "./modules/arithmetic/aceleracao_plano_inclinado_eixo_y.mdl";
import { alcanceLancamentoVertical } from "./modules/arithmetic/alcance_lancamento_vertical.mdl";
import { alcanceMaximoLancamentoVertical } from "./modules/arithmetic/alcance_maximo_lancamento_vertical.mdl";
import { alturaMaximaLancamentoVertical } from "./modules/arithmetic/altura_maxima_lancamento_vertical.mdl";
import { antilogaritmoBase10 } from "./modules/arithmetic/antilogaritmo_base_10.mdl";
import { antilogaritmoBase10Mais1 } from "./modules/arithmetic/antilogaritmo_base_10_mais_1.mdl";
import { antilogaritmoBase10Menos1 } from "./modules/arithmetic/antilogaritmo_base_10_menos_1.mdl";
import { antilogaritmoBase2 } from "./modules/arithmetic/antilogaritmo_base_2.mdl";
import { antilogaritmoBase2Mais1 } from "./modules/arithmetic/antilogaritmo_base_2_mais_1.mdl";
import { antilogaritmoBase2Menos1 } from "./modules/arithmetic/antilogaritmo_base_2_menos_1.mdl";
import { antilogaritmoBaseQualquer } from "./modules/arithmetic/antilogaritmo_base_qualquer.mdl";
import { antilogaritmoBaseQualquerMais1 } from "./modules/arithmetic/antilogaritmo_base_qualquer_mais_1.mdl";
import { antilogaritmoBaseQualquerMenos1 } from "./modules/arithmetic/antilogaritmo_base_qualquer_menos_1.mdl";
import { antilogaritmoNatural } from "./modules/arithmetic/antilogaritmo_natural.mdl";
import { antilogaritmoNaturalMais1 } from "./modules/arithmetic/antilogaritmo_natural_mais_1.mdl";
import { antilogaritmoNaturalMenos1 } from "./modules/arithmetic/antilogaritmo_natural_menos_1.mdl";
import { apotemaTriangulo } from "./modules/arithmetic/apotema_triangulo.mdl";
import { arcoCosecante } from "./modules/arithmetic/arco_cosecante.mdl";
import { arcoCosecanteHiperbolica } from "./modules/arithmetic/arco_cosecante_hiperbolica.mdl";
import { arcoCosseno } from "./modules/arithmetic/arco_cosseno.mdl";
import { arcoCossenoHiperbolico } from "./modules/arithmetic/arco_cosseno_hiperbolico.mdl";
import { arcoCotangente } from "./modules/arithmetic/arco_cotangente.mdl";
import { arcoCotangenteHiperbolica } from "./modules/arithmetic/arco_cotangente_hiperbolica.mdl";
import { arcoSecante } from "./modules/arithmetic/arco_secante.mdl";
import { arcoSecanteHiperbolica } from "./modules/arithmetic/arco_secante_hiperbolica.mdl";
import { arcoSeno } from "./modules/arithmetic/arco_seno.mdl";
import { arcoSenoHiperbolico } from "./modules/arithmetic/arco_seno_hiperbolico.mdl";
import { arcoTangente } from "./modules/arithmetic/arco_tangente.mdl";
import { arcoTangenteHiperbolica } from "./modules/arithmetic/arco_tangente_hiperbolica.mdl";
import { areaCirculo } from "./modules/arithmetic/area_circulo.mdl";
import { areaCircunferencia } from "./modules/arithmetic/area_circunferencia.mdl";
import { areaElipse } from "./modules/arithmetic/area_elipse.mdl";
import { areaEsfera } from "./modules/arithmetic/area_esfera.mdl";
import { areaLateralCilindro } from "./modules/arithmetic/area_lateral_cilindro.mdl";
import { areaLateralPrisma } from "./modules/arithmetic/area_lateral_prisma.mdl";
import { areaLozango } from "./modules/arithmetic/area_lozango.mdl";
import { areaPiramide } from "./modules/arithmetic/area_piramide.mdl";
import { areaPoligono } from "./modules/arithmetic/area_poligono.mdl";
import { areaQuadrado } from "./modules/arithmetic/area_quadrado.mdl";
import { areaRetangulo } from "./modules/arithmetic/area_retangulo.mdl";
import { areaTrapezio } from "./modules/arithmetic/area_trapezio.mdl";
import { areaTriangulo } from "./modules/arithmetic/area_triangulo.mdl";
import { arranjo } from "./modules/arithmetic/arranjo.mdl";
import { arrendondaParaBaixo } from "./modules/arithmetic/arrendonda_para_baixo.mdl";
import { arrendondaParaCima } from "./modules/arithmetic/arrendonda_para_cima.mdl";
import { arrendondaParaDecimal32Bits } from "./modules/arithmetic/arrendonda_para_decimal_32bits.mdl";
import { arrendondaParaInteiro } from "./modules/arithmetic/arrendonda_para_inteiro.mdl";
import { atrito } from "./modules/arithmetic/atrito.mdl";

export const Aritmeticos =
{

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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
     * _____
     * 
     * @returns ***``Number``***
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
   * 
   */
  Methods: {

    m_absoluto: absoluto,

    m_aceleracao_angular_mcuv: aceleracaoAngularMCUV,

    m_aceleracao_centripeta_mcu: aceleracaoCentripetaMCU,

    m_aceleracao_plano_inclinado_eixo_x: aceleracaoPlanoInclinadoEixoX,

    m_aceleracao_plano_inclinado_eixo_y: aceleracaoPlanoInclinadoEixoY,

    m_aceleracao: aceleracao,

    m_alcance_lancamento_vertical: alcanceLancamentoVertical,

    m_alcance_maximo_lancamento_vertical: alcanceMaximoLancamentoVertical,

    m_altura_maxima_lancamento_vertical: alturaMaximaLancamentoVertical,

    m_antilogaritmo_base_2: antilogaritmoBase2,

    m_antilogaritmo_base_2_mais_1: antilogaritmoBase2Mais1,
    
    m_antilogaritmo_base_2_menos_1: antilogaritmoBase2Menos1,

    m_antilogaritmo_base_10: antilogaritmoBase10,

    m_antilogaritmo_base_10_mais_1: antilogaritmoBase10Mais1,

    m_antilogaritmo_base_10_menos_1: antilogaritmoBase10Menos1,

    m_antilogaritmo_base_qualquer: antilogaritmoBaseQualquer,

    m_antilogaritmo_base_qualquer_mais_1: antilogaritmoBaseQualquerMais1,

    m_antilogaritmo_base_qualquer_menos_1: antilogaritmoBaseQualquerMenos1,

    m_antilogaritmo_natural: antilogaritmoNatural,

    m_antilogaritmo_natural_mais_1: antilogaritmoNaturalMais1,

    m_antilogaritmo_natural_menos_1: antilogaritmoNaturalMenos1,

    m_apotema_triangulo: apotemaTriangulo,

    m_arco_cosecante: arcoCosecante,

    m_arco_cosecante_hiperbolica: arcoCosecanteHiperbolica,

    m_arco_cosseno: arcoCosseno,

    m_arco_cosseno_hiperbolico: arcoCossenoHiperbolico,

    m_arco_cotangente: arcoCotangente,

    m_arco_cotangente_hiperbolica: arcoCotangenteHiperbolica,

    m_arco_secante: arcoSecante,

    m_arco_secante_hiperbolica: arcoSecanteHiperbolica,

    m_arco_seno: arcoSeno,

    m_arco_seno_hiperbolico: arcoSenoHiperbolico,

    m_arco_tangente: arcoTangente,

    m_arco_tangente_hiperbolica: arcoTangenteHiperbolica,

    m_area_circulo: areaCirculo,

    m_area_circunferencia: areaCircunferencia,

    m_area_elipse: areaElipse,

    m_area_esfera: areaEsfera,

    m_area_lateral_cilindro: areaLateralCilindro,

    m_area_lateral_prisma: areaLateralPrisma,

    m_area_lozango: areaLozango,

    m_area_piramide: areaPiramide,

    m_area_poligono: areaPoligono,

    m_area_quadrado: areaQuadrado,

    m_area_retangulo: areaRetangulo,

    m_area_trapezio: areaTrapezio,

    m_area_triangulo: areaTriangulo,

    m_arranjo: arranjo,

    m_arrendonda_para_baixo: arrendondaParaBaixo,

    m_arrendonda_para_cima: arrendondaParaCima,

    m_arrendonda_para_decimal_32bits: arrendondaParaDecimal32Bits,

    m_arrendonda_para_inteiro: arrendondaParaInteiro,

    m_atrito: atrito,

    

  }

};
