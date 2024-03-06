/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

#ifndef HUB_ARITMETICOS_HPP
#define HUB_ARITMETICOS_HPP
// Nova arquitetura de pastas
#include "../../../includes/core/wtsfy_tipos.hpp"

// Includes de Headers de Aritmeticos.hpp
  // assets/comuns/
#include "assets/comuns/soma.hpp"
#include "assets/comuns/subtracao.hpp"
#include "assets/comuns/multiplicacao.hpp"
#include "assets/comuns/divisao.hpp"
#include "assets/comuns/potencia.hpp"
#include "assets/comuns/potenciadepotencia.hpp"
#include "assets/comuns/raizquadrada.hpp"
#include "assets/comuns/raizcubica.hpp"
#include "assets/comuns/resto.hpp"

  // assets/cientificos/
#include "assets/cientificos/raizquarta.hpp"
#include "assets/cientificos/raizquinta.hpp"
#include "assets/cientificos/raizsexta.hpp"
#include "assets/cientificos/raizsetima.hpp"
#include "assets/cientificos/raizoitava.hpp"
#include "assets/cientificos/raiznona.hpp"
#include "assets/cientificos/raizdecima.hpp"
#include "assets/cientificos/seno.hpp"
#include "assets/cientificos/senohiperbolico.hpp"
#include "assets/cientificos/cosseno.hpp"
#include "assets/cientificos/cossenohiperbolico.hpp"
#include "assets/cientificos/tangente.hpp"
#include "assets/cientificos/tangentehiperbolica.hpp"
#include "assets/cientificos/secante.hpp"
#include "assets/cientificos/secantehiperbolica.hpp"
#include "assets/cientificos/cosecante.hpp"
#include "assets/cientificos/cosecantehiperbolica.hpp"
#include "assets/cientificos/cotangente.hpp"
#include "assets/cientificos/cotangentehiperbolica.hpp"
#include "assets/cientificos/arcoseno.hpp"
#include "assets/cientificos/arcosenohiperbolico.hpp"
#include "assets/cientificos/arcocosseno.hpp"
#include "assets/cientificos/arcocossenohiperbolico.hpp"
#include "assets/cientificos/arcotangente.hpp"
#include "assets/cientificos/arcotangentehiperbolica.hpp"
#include "assets/cientificos/arcosecante.hpp"
#include "assets/cientificos/arcosecantehiperbolica.hpp"
#include "assets/cientificos/arcocosecante.hpp"
#include "assets/cientificos/arcocosecantehiperbolica.hpp"
#include "assets/cientificos/arcocotangente.hpp"
#include "assets/cientificos/arcocotangentehiperbolica.hpp"
#include "assets/cientificos/logaritmobase2.hpp"
#include "assets/cientificos/logaritmobase2mais1.hpp"
#include "assets/cientificos/logaritmobase2menos1.hpp"
#include "assets/cientificos/logaritmobase10.hpp"
#include "assets/cientificos/logaritmobase10mais1.hpp"
#include "assets/cientificos/logaritmobase10menos1.hpp"
#include "assets/cientificos/logaritmobasenatural.hpp"
#include "assets/cientificos/logaritmobasenaturalmais1.hpp"
#include "assets/cientificos/logaritmobasenaturalmenos1.hpp"
#include "assets/cientificos/logaritmobasequalquer.hpp"
#include "assets/cientificos/logaritmobasequalquermais1.hpp"
#include "assets/cientificos/logaritmobasequalquermenos1.hpp"
#include "assets/cientificos/exponencial.hpp"
#include "assets/cientificos/exponencialmais1.hpp"
#include "assets/cientificos/exponencialmenos1.hpp"

  // assets/supremos/
#include "assets/supremos/antilogaritmobase2.hpp"
#include "assets/supremos/antilogaritmobase2mais1.hpp"
#include "assets/supremos/antilogaritmobase2menos1.hpp"
#include "assets/supremos/antilogaritmobase10.hpp"
#include "assets/supremos/antilogaritmobase10mais1.hpp"
#include "assets/supremos/antilogaritmobase10menos1.hpp"
#include "assets/supremos/antilogaritmobasenatural.hpp"
#include "assets/supremos/antilogaritmobasenaturalmais1.hpp"
#include "assets/supremos/antilogaritmobasenaturalmenos1.hpp"
#include "assets/supremos/antilogaritmobasequalquer.hpp"
#include "assets/supremos/antilogaritmobasequalquermais1.hpp"
#include "assets/supremos/antilogaritmobasequalquermenos1.hpp"
#include "assets/supremos/cologaritmobase2.hpp"
#include "assets/supremos/cologaritmobase2mais1.hpp"
#include "assets/supremos/cologaritmobase2menos1.hpp"
#include "assets/supremos/cologaritmobase10.hpp"
#include "assets/supremos/cologaritmobase10mais1.hpp"
#include "assets/supremos/cologaritmobase10menos1.hpp"
#include "assets/supremos/cologaritmobasenatural.hpp"
#include "assets/supremos/cologaritmobasenaturalmais1.hpp"
#include "assets/supremos/cologaritmobasenaturalmenos1.hpp"
#include "assets/supremos/cologaritmobasequalquer.hpp"
#include "assets/supremos/cologaritmobasequalquermais1.hpp"
#include "assets/supremos/cologaritmobasequalquermenos1.hpp"

  // assets/version2020/
#include "assets/version2020/soma.classic.hpp"
#include "assets/version2020/soma_decimal.classic.hpp"
#include "assets/version2020/subtracao.classic.hpp"
#include "assets/version2020/subtracao_decimal.classic.hpp"
#include "assets/version2020/multiplicacao.classic.hpp"
#include "assets/version2020/multiplicacao_decimal.classic.hpp"
#include "assets/version2020/divisao.classic.hpp"
#include "assets/version2020/divisao_decimal.classic.hpp"
#include "assets/version2020/mediaaritmetica.classic.hpp"
#include "assets/version2020/mediaaritmetica_decimal.classic.hpp"
#include "assets/version2020/potenciacao.classic.hpp"
#include "assets/version2020/potenciacao_decimal.classic.hpp"
#include "assets/version2020/potenciacaopor2.classic.hpp"
#include "assets/version2020/potenciacaopor2_decimal.classic.hpp"
#include "assets/version2020/potenciacaopor10.classic.hpp"
#include "assets/version2020/potenciacaopor10_decimal.classic.hpp"
#include "assets/version2020/radiciacaopor2.classic.hpp"
#include "assets/version2020/radiciacaopor2_decimal.classic.hpp"
#include "assets/version2020/radiciacaopor3.classic.hpp"
#include "assets/version2020/radiciacaopor3_decimal.classic.hpp"
#include "assets/version2020/seno.classic.hpp"
#include "assets/version2020/senohiperbolico.classic.hpp"
#include "assets/version2020/cosseno.classic.hpp"
#include "assets/version2020/cossenohiperbolico.classic.hpp"
#include "assets/version2020/tangente.classic.hpp"
#include "assets/version2020/tangentehiperbolica.classic.hpp"
#include "assets/version2020/secante.classic.hpp"
#include "assets/version2020/secantehiperbolica.classic.hpp"
#include "assets/version2020/cosecante.classic.hpp"
#include "assets/version2020/cosecantehiperbolica.classic.hpp"
#include "assets/version2020/cotangente.classic.hpp"
#include "assets/version2020/cotangentehiperbolica.classic.hpp"
#include "assets/version2020/arcoseno.classic.hpp"
#include "assets/version2020/arcosenohiperbolico.classic.hpp"
#include "assets/version2020/arcocosseno.classic.hpp"
#include "assets/version2020/arcocossenohiperbolico.classic.hpp"
#include "assets/version2020/arcotangente.classic.hpp"
#include "assets/version2020/arcotangentehiperbolica.classic.hpp"
#include "assets/version2020/arcosecante.classic.hpp"
#include "assets/version2020/arcosecantehiperbolica.classic.hpp"
#include "assets/version2020/arcocosecante.classic.hpp"
#include "assets/version2020/arcocosecantehiperbolica.classic.hpp"
#include "assets/version2020/arcocotangente.classic.hpp"
#include "assets/version2020/arcocotangentehiperbolica.classic.hpp"
#include "assets/version2020/logaritmobase2.classic.hpp"
#include "assets/version2020/logaritmobase2_decimal.classic.hpp"
#include "assets/version2020/logaritmobase10.classic.hpp"
#include "assets/version2020/logaritmobase10_decimal.classic.hpp"
#include "assets/version2020/logaritmo.classic.hpp"
#include "assets/version2020/logaritmo_decimal.classic.hpp"
#include "assets/version2020/exponencial.classic.hpp"
#include "assets/version2020/exponencial_decimal.classic.hpp"

class Aritmeticos 
{ 

  typedef struct Comuns
  {
    decltype(soma) soma;
    decltype(subtracao) subtracao;
    decltype(multiplicacao) multiplicacao;
    decltype(divisao) divisao;
    decltype(potencia) potencia;
    decltype(potencia_de_potencia) potenciadepotencia;
    decltype(raiz_quadrada) raizquadrada;
    decltype(raiz_cubica) raizcubica;
    decltype(resto) resto;
  } Comuns;

  typedef struct Cientificas 
  {
    decltype(raiz_quarta) raizquarta;
    decltype(raiz_quinta) raizquinta;
    decltype(raiz_sexta) raizsexta;
    decltype(raiz_setima) raizsetima;
    decltype(raiz_oitava) raizoitava;
    decltype(raiz_nona) raiznona;
    decltype(raiz_decima) raizdecima;
    decltype(seno) seno;
    decltype(seno_hiperbolico) senohiperbolico;
    decltype(cosseno) cosseno;
    decltype(cosseno_hiperbolico) cossenohiperbolico;
    decltype(tangente) tangente;
    decltype(tangente_hiperbolica) tangentehiperbolica;
    decltype(secante) secante;
    decltype(secante_hiperbolica) secantehiperbolica;
    decltype(cosecante) cosecante;
    decltype(cosecante_hiperbolica) cosecantehiperbolica;
    decltype(cotangente) cotangente;
    decltype(cotangente_hiperbolica) cotangentehiperbolica;
    decltype(arco_seno) arcoseno;
    decltype(arco_seno_hiperbolico) arcosenohiperbolico;
    decltype(arco_cosseno) arcocosseno;
    decltype(arco_cosseno_hiperbolico) arcocossenohiperbolico;
    decltype(arco_tangente) arcotangente;
    decltype(arco_tangente_hiperbolica) arcotangentehiperbolica;
    decltype(arco_secante) arcosecante;
    decltype(arco_secante_hiperbolica) arcosecantehiperbolica;
    decltype(arco_cosecante) arcocosecante;
    decltype(arco_cosecante_hiperbolica) arcocosecantehiperbolica;
    decltype(arco_cotangente) arcocotangente;
    decltype(arco_cotangente_hiperbolica) arcocotangentehiperbolica;
    decltype(logaritmo_base_2) logaritmobase2;
    decltype(logaritmo_base_2_mais_1) logaritmobase2mais1;
    decltype(logaritmo_base_2_menos_1) logaritmobase2menos1;
    decltype(logaritmo_base_10) logaritmobase10;
    decltype(logaritmo_base_10_mais_1) logaritmobase10mais1;
    decltype(logaritmo_base_10_menos_1) logaritmobase10menos1;
    decltype(logaritmo_base_natural) logaritmobasenatural;
    decltype(logaritmo_base_natural_mais_1) logaritmobasenaturalmais1;
    decltype(logaritmo_base_natural_menos_1) logaritmobasenaturalmenos1;
    decltype(logaritmo_base_qualquer) logaritmobasequalquer;
    decltype(logaritmo_base_qualquer_mais_1) logaritmobasequalquermais1;
    decltype(logaritmo_base_qualquer_menos_1) logaritmobasequalquermenos1;
    decltype(exponencial) exponencial;
    decltype(exponencial_mais_1) exponencialmais1;
    decltype(exponencial_menos_1) exponencialmenos1;
  } Cientificas;
  
  typedef struct Supremos 
  { 
    decltype(antilogaritmo_base_2) antilogaritmobase2;
    decltype(antilogaritmo_base_2_mais_1) antilogaritmobase2mais1;
    decltype(antilogaritmo_base_2_menos_1) antilogaritmobase2menos1;
    decltype(antilogaritmo_base_10) antilogaritmobase10;
    decltype(antilogaritmo_base_10_mais_1) antilogaritmobase10mais1;
    decltype(antilogaritmo_base_10_menos_1) antilogaritmobase10menos1;
    decltype(antilogaritmo_base_natural) antilogaritmobasenatural;
    decltype(antilogaritmo_base_natural_mais_1) antilogaritmobasenaturalmais1;
    decltype(antilogaritmo_base_natural_menos_1) antilogaritmobasenaturalmenos1;
    decltype(antilogaritmo_base_qualquer) antilogaritmobasequalquer;
    decltype(antilogaritmo_base_qualquer_mais_1) antilogaritmobasequalquermais1;
    decltype(antilogaritmo_base_qualquer_menos_1) antilogaritmobasequalquermenos1;
    decltype(cologaritmo_base_2) cologaritmobase2;
    decltype(cologaritmo_base_2_mais_1) cologaritmobase2mais1;
    decltype(cologaritmo_base_2_menos_1) cologaritmobase2menos1;
    decltype(cologaritmo_base_10) cologaritmobase10;
    decltype(cologaritmo_base_10_mais_1) cologaritmobase10mais1;
    decltype(cologaritmo_base_10_menos_1) cologaritmobase10menos1;
    decltype(cologaritmo_base_natural) cologaritmobasenatural;
    decltype(cologaritmo_base_natural_mais_1) cologaritmobasenaturalmais1;
    decltype(cologaritmo_base_natural_menos_1) cologaritmobasenaturalmenos1;
    decltype(cologaritmo_base_qualquer) cologaritmobasequalquer;
    decltype(cologaritmo_base_qualquer_mais_1) cologaritmobasequalquermais1;
    decltype(cologaritmo_base_qualquer_menos_1) cologaritmobasequalquermenos1;
  } Supremas;

  public:
    f32t AVOGADRO= 
      6.022e23;

    f32t CBRTOF0102= 
      0.707106;
    
    f32t CBRTOF0104= 
      0.500000;
    
    f32t CBRTOF0106= 
      0.408248;
    
    f32t CBRTOF0108= 
      0.353553;
    
    f32t CBRTOF01= 
      1.000000;
    
    f32t CBRTOF02= 
      1.259921;
    
    f32t CBRTOF03= 
      1.587401;
    
    f32t CBRTOF04= 
      1.999999;
    
    f32t CBRTOF05= 
      2.236067;
    
    f32t CBRTOF06= 
      2.581988;
    
    f32t CBRTOF07= 
      2.912931;
    
    f32t CBRTOF08= 
      3.262495;
    
    f32t CBRTOF09= 
      3.624499;
    
    f32t CBRTOF10= 
      3.999999;
    
    f32t CBRTOF11= 
      4.387482;
    
    f32t CBRTOF12= 
      4.783385;
    
    f32t COULOMB= 
      1.602e-19;
    
    f32t EULER= 
      2.718281;
    
    f32t EULER2= 
      7.389056;
    
    f32t GRAVITATION= 
      6.67408e-11;
    
    f32t LOGARITHM2= 
      0.693147;
    
    f32t LOGARITHM2E= 
      1.442695;
    
    f32t LOGARITHM10= 
      2.302585;
    
    f32t LOGARITHM10E= 
      0.434294;
    
    i64t MAXVALUE= 
      99999999;
    
    i64t MINVALUE= 
      -99999999;
    
    f32t NEWTON= 
      0.693147;
    
    f32t PI= 
      3.141592;
    
    f32t PLANK= 
      6.626e-34;
    
    f32t SQRTOF0102= 
      0.793700;
    
    f32t SQRTOF0104= 
      0.629960;
    
    f32t SQRTOF0106= 
      0.550321;
    
    f32t SQRTOF0108= 
      0.500000;
    
    f32t SQRTOF01= 
      1.000000;
    
    f32t SQRTOF02= 
      1.414213;

    f32t SQRTOF03=
      1.732050;

    f32t SQRTOF04=
      2.000000;

    f32t SQRTOF05=
      2.236067;

    f32t SQRTOF06=
      2.449489;

    f32t SQRTOF07=
      2.645751;

    f32t SQRTOF08=
      2.828427;

    f32t SQRTOF09=
      3.000000;

    f32t SQRTOF10=
      3.162277;
    
    f32t SQRTOF11=
      3.316624;
    
    f32t SQRTOF12=
      3.464101;

    f32t TESLA=
      1.602e-19;

    f32t ZERO=
      0.000000;

    f32t SENO30=
      0.500000;

    f32t COSSENO30=
      0.866025;

    f32t TANGENTE30= 
      0.577350;

    f32t SENO45= 
      0.707107;

    f32t COSSENO45= 
      0.707107;

    f32t TANGENTE45= 
      1.000000;

    f32t SENO60= 
      0.866025;

    f32t COSSENO60= 
      0.500000;

    f32t TANGENTE60= 
      1.732051;

    /** 
     * Grupo de funcionalidades aritmeticas comuns 
     */
    Comuns comuns;

    /** 
     * Grupo de funcionalidades aritmeticas cientificas 
     */
    Cientificas cientificas;

    /** 
     * Grupo de funcionalidades aritmeticas supremas 
     */
    Supremos supremos;

};

class Aritmeticos2020Version 
{ 

  typedef struct Modulos 
  { 
    decltype(soma_classic) soma;
    decltype(soma_classic_decimal) soma_decimal;
    decltype(subtracao_classic) subtracao;
    decltype(subtracao_classic_decimal) subtracao_decimal;
    decltype(multiplicacao_classic) multiplicacao;
    decltype(multiplicacao_classic_decimal) multiplicacao_decimal;
    decltype(divisao_classic) divisao;
    decltype(divisao_classic_decimal) divisao_decimal;
    decltype(media_aritmetica_classic) mediaaritmetica;
    decltype(media_aritmetica_classic_decimal) mediaaritmetica_decimal;
    decltype(potenciacao_classic) potenciacao;
    decltype(potenciacao_classic_decimal) potenciacao_decimal;
    decltype(potenciacao_por2_classic) potenciacaopor2;
    decltype(potenciacao_por2_classic_decimal) potenciacaopor2_decimal;
    decltype(potenciacao_por10_classic) potenciacaopor10;
    decltype(potenciacao_por10_classic_decimal) potenciacaopor10_decimal;
    decltype(radiciacao_por2_classic) radiciacaopor2;
    decltype(radiciacao_por2_classic_decimal) radiciacaopor2_decimal;
    decltype(radiciacao_por3_classic) radiciacaopor3;
    decltype(radiciacao_por3_classic_decimal) radiciacaopor3_decimal;
    decltype(seno_classic) seno;
    decltype(senohiperbolico_classic) senohiperbolico;
    decltype(cosseno_classic) cosseno;
    decltype(cossenohiperbolico_classic) cossenohiperbolico;
    decltype(tangente_classic) tangente;
    decltype(tangentehiperbolica_classic) tangentehiperbolica;
    decltype(secante_classic) secante;
    decltype(secantehiperbolica_classic) secantehiperbolica;
    decltype(cosecante_classic) cosecante;
    decltype(cosecantehiperbolica_classic) cosecantehiperbolica;
    decltype(cotangente_classic) cotangente;
    decltype(cotangentehiperbolica_classic) cotangentehiperbolica;
    decltype(arcoseno_classic) arcoseno;
    decltype(arcosenohiperbolico_classic) arcosenohiperbolico;
    decltype(arcocosseno_classic) arcocosseno;
    decltype(arcocossenohiperbolico_classic) arcocossenohiperbolico;
    decltype(arcotangente_classic) arcotangente;
    decltype(arcotangentehiperbolica_classic) arcotangentehiperbolica;
    decltype(arcosecante_classic) arcosecante;
    decltype(arcosecantehiperbolica_classic) arcosecantehiperbolica;
    decltype(arcocosecante_classic) arcocosecante;
    decltype(arcocosecantehiperbolica_classic) arcocosecantehiperbolica;
    decltype(arcocotangente_classic) arcocotangente;
    decltype(arcocotangentehiperbolica_classic) arcocotangentehiperbolica;
    decltype(logaritmo_classic) logaritmo;
    decltype(logaritmo_classic_decimal) logaritmo_decimal;
    decltype(logaritmobase2_classic) logaritmobase2;
    decltype(logaritmobase2_classic_decimal) logaritmobase2_decimal;
    decltype(logaritmobase10_classic) logaritmobase10;
    decltype(logaritmobase10_classic_decimal) logaritmobase10_decimal;
    decltype(exponencial_classic) exponencial;
    decltype(exponencial_classic_decimal) exponencial_decimal;
  } Modulos;

  public:
    f32t LOGARITHM=
      2.302585;

    f32t LOGARITHM2=
      0.693147;

    f32t LOGARITHM10=
      2.302585;

    f32t PI=
      3.141592;

    f32t ZERO=
      0.000000;

    f32t SENO30=
      0.500000;

    f32t COSSENO30=
      0.866025;

    f32t TANGENTE30=
      0.577350;

    f32t SENO45=
      0.707107;

    f32t COSSENO45=
      0.707107;

    f32t TANGENTE45=
      1.000000;

    f32t SENO60=
      0.866025;

    f32t COSSENO60=
      0.500000;

    f32t TANGENTE60=
      1.732051;

    f32t EULER=
      2.718281;

    /**
     * Grupo de funcionalidades dos modulos 
     */
    Modulos modulos;

};

#endif // HUB_ARITMETICOS_HPP
