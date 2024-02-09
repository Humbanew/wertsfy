#ifndef CORE_ARITHM_HPP
#define CORE_ARITHM_HPP

#include "../../defs/wtsfy-tipos.hpp"
#include "components/comuns/soma.hpp"
#include "components/comuns/subtracao.hpp"
#include "components/comuns/multiplicacao.hpp"
#include "components/comuns/divisao.hpp"
#include "components/comuns/resto.hpp"
#include "components/comuns/potencia.hpp"
#include "components/comuns/potenciadepotencia.hpp"
#include "components/comuns/raizquadrada.hpp"
#include "components/comuns/raizcubica.hpp"
#include "components/cientificos/raizquarta.hpp"
#include "components/cientificos/raizquinta.hpp"
#include "components/cientificos/raizsexta.hpp"
#include "components/cientificos/raizsetima.hpp"
#include "components/cientificos/raizoitava.hpp"
#include "components/cientificos/raiznona.hpp"
#include "components/cientificos/raizdecima.hpp"
#include "components/cientificos/seno.hpp"
#include "components/cientificos/senohiperbolico.hpp"
#include "components/cientificos/cosseno.hpp"
#include "components/cientificos/cossenohiperbolico.hpp"
#include "components/cientificos/tangente.hpp"
#include "components/cientificos/tangentehiperbolica.hpp"
#include "components/cientificos/secante.hpp"
#include "components/cientificos/secantehiperbolica.hpp"
#include "components/cientificos/cosecante.hpp"
#include "components/cientificos/cosecantehiperbolica.hpp"
#include "components/cientificos/cotangente.hpp"
#include "components/cientificos/cotangentehiperbolica.hpp"
#include "components/cientificos/arcoseno.hpp"
#include "components/cientificos/arcosenohiperbolico.hpp"
#include "components/cientificos/arcocosseno.hpp"
#include "components/cientificos/arcocossenohiperbolico.hpp"
#include "components/cientificos/arcotangente.hpp"
#include "components/cientificos/arcotangentehiperbolica.hpp"
#include "components/cientificos/arcosecante.hpp"
#include "components/cientificos/arcosecantehiperbolica.hpp"
#include "components/cientificos/arcocosecante.hpp"
#include "components/cientificos/arcocosecantehiperbolica.hpp"
#include "components/cientificos/arcocotangente.hpp"
#include "components/cientificos/arcocotangentehiperbolica.hpp"
#include "components/cientificos/exponencial.hpp"
#include "components/cientificos/exponencialmais1.hpp"
#include "components/cientificos/exponencialmenos1.hpp"
#include "components/cientificos/logaritmobase2.hpp"
#include "components/cientificos/logaritmobase2mais1.hpp"
#include "components/cientificos/logaritmobase2menos1.hpp"
#include "components/cientificos/logaritmobase10.hpp"
#include "components/cientificos/logaritmobase10mais1.hpp"
#include "components/cientificos/logaritmobase10menos1.hpp"
#include "components/cientificos/logaritmobasequalquer.hpp"
#include "components/cientificos/logaritmobasequalquermais1.hpp"
#include "components/cientificos/logaritmobasequalquermenos1.hpp" 
#include "components/cientificos/logaritmobasenatural.hpp"
#include "components/cientificos/logaritmobasenaturalmais1.hpp"
#include "components/cientificos/logaritmobasenaturalmenos1.hpp"
#include "components/supremos/antilogaritmobase2.hpp"
#include "components/supremos/antilogaritmobase2mais1.hpp"
#include "components/supremos/antilogaritmobase2menos1.hpp"
#include "components/supremos/antilogaritmobase10.hpp"
#include "components/supremos/antilogaritmobase10mais1.hpp"
#include "components/supremos/antilogaritmobase10menos1.hpp"
#include "components/supremos/antilogaritmobasequalquer.hpp"
#include "components/supremos/antilogaritmobasequalquermais1.hpp"
#include "components/supremos/antilogaritmobasequalquermenos1.hpp"
#include "components/supremos/antilogaritmobasenatural.hpp"
#include "components/supremos/antilogaritmobasenaturalmais1.hpp"
#include "components/supremos/antilogaritmobasenaturalmenos1.hpp"
#include "components/supremos/cologaritmobase2.hpp"
#include "components/supremos/cologaritmobase2mais1.hpp"
#include "components/supremos/cologaritmobase2menos1.hpp"
#include "components/supremos/cologaritmobase10.hpp"
#include "components/supremos/cologaritmobase10mais1.hpp"
#include "components/supremos/cologaritmobase10menos1.hpp"
#include "components/supremos/cologaritmobasequalquer.hpp"
#include "components/supremos/cologaritmobasequalquermais1.hpp"
#include "components/supremos/cologaritmobasequalquermenos1.hpp"
#include "components/supremos/cologaritmobasenatural.hpp"
#include "components/supremos/cologaritmobasenaturalmais1.hpp"
#include "components/supremos/cologaritmobasenaturalmenos1.hpp"

class Aritmeticos 
{

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
  
  f32t MAXVALUE= 
    99999999;
  
  f32t MINVALUE= 
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


  typedef struct Categorias
  {

    struct Comuns
    {

      decltype(soma) soma;
      decltype(subtracao) subtracao;
      decltype(multiplicacao) multiplicacao;
      decltype(divisao) divisao;
      decltype(resto) resto;
      decltype(potencia) potencia;
      decltype(potencia_de_potencia) potencia_de_potencia;
      decltype(raiz_quadrada) raiz_quadrada;
      decltype(raiz_cubica) raiz_cubica;

    };

    struct Cientificas
    {
        
      decltype(raiz_quarta) raiz_quarta;
      decltype(raiz_quinta) raiz_quinta;
      decltype(raiz_sexta) raiz_sexta;
      decltype(raiz_setima) raiz_setima;
      decltype(raiz_oitava) raiz_oitava;
      decltype(raiz_nona) raiz_nona;
      decltype(raiz_decima) raiz_decima;
      decltype(seno) seno;
      decltype(seno_hiperbolico) seno_hiperbolico;
      decltype(cosseno) cosseno;
      decltype(cosseno_hiperbolico) cosseno_hiperbolico;
      decltype(tangente) tangente;
      decltype(tangente_hiperbolica) tangente_hiperbolica;
      decltype(secante) secante;
      decltype(secante_hiperbolica) secante_hiperbolica;
      decltype(cosecante) cosecante;
      decltype(cosecante_hiperbolica) cosecante_hiperbolica;
      decltype(cotangente) cotangente;
      decltype(cotangente_hiperbolica) cotangente_hiperbolica;
      decltype(arco_seno) arco_seno;
      decltype(arco_seno_hiperbolico) arco_seno_hiperbolico;
      decltype(arco_cosseno) arco_cosseno;
      decltype(arco_cosseno_hiperbolico) arco_cosseno_hiperbolico;
      decltype(arco_tangente) arco_tangente;
      decltype(arco_tangente_hiperbolica) arco_tangente_hiperbolica;
      decltype(arco_secante) arco_secante;
      decltype(arco_secante_hiperbolica) arco_secante_hiperbolica;
      decltype(arco_cosecante) arco_cosecante;
      decltype(arco_cosecante_hiperbolica) arco_cosecante_hiperbolica;
      decltype(arco_cotangente) arco_cotangente;
      decltype(arco_cotangente_hiperbolica) arco_cotangente_hiperbolica;
      decltype(exponencial) exponencial;
      decltype(exponencial_mais_1) exponencial_mais_1;
      decltype(exponencial_menos_1) exponencial_menos_1;
      decltype(logaritmo_base_2) logaritmo_base_2;
      decltype(logaritmo_base_2_mais_1) logaritmo_base_2_mais_1;
      decltype(logaritmo_base_2_menos_1) logaritmo_base_2_menos_1;
      decltype(logaritmo_base_10) logaritmo_base_10;
      decltype(logaritmo_base_10_mais_1) logaritmo_base_10_mais_1;
      decltype(logaritmo_base_10_menos_1) logaritmo_base_10_menos_1;
      decltype(logaritmo_base_qualquer) logaritmo_base_qualquer;
      decltype(logaritmo_base_qualquer_mais_1) logaritmo_base_qualquer_mais_1;
      decltype(logaritmo_base_qualquer_menos_1) logaritmo_base_qualquer_menos_1;
      decltype(logaritmo_base_natural) logaritmo_base_natural;
      decltype(logaritmo_base_natural_mais_1) logaritmo_base_natural_mais_1;
      decltype(logaritmo_base_natural_menos_1) logaritmo_base_natural_menos_1;

    };

    struct Supremas
    {

      decltype(antilogaritmo_base_2) antilogaritmo_base_2;
      decltype(antilogaritmo_base_2_mais_1) antilogaritmo_base_2_mais_1;
      decltype(antilogaritmo_base_2_menos_1) antilogaritmo_base_2_menos_1;
      decltype(antilogaritmo_base_10) antilogaritmo_base_10;
      decltype(antilogaritmo_base_10_mais_1) antilogaritmo_base_10_mais_1;
      decltype(antilogaritmo_base_10_menos_1) antilogaritmo_base_10_menos_1;
      decltype(antilogaritmo_base_qualquer) antilogaritmo_base_qualquer;
      decltype(antilogaritmo_base_qualquer_mais_1) antilogaritmo_base_qualquer_mais_1;
      decltype(antilogaritmo_base_qualquer_menos_1) antilogaritmo_base_qualquer_menos_1;
      decltype(antilogaritmo_base_natural) antilogaritmo_base_natural;
      decltype(antilogaritmo_base_natural_mais_1) antilogaritmo_base_natural_mais_1;
      decltype(antilogaritmo_base_natural_menos_1) antilogaritmo_base_natural_menos_1;
      decltype(cologaritmo_base_2) cologaritmo_base_2;
      decltype(cologaritmo_base_2_mais_1) cologaritmo_base_2_mais_1;
      decltype(cologaritmo_base_2_menos_1) cologaritmo_base_2_menos_1;
      decltype(cologaritmo_base_10) cologaritmo_base_10;
      decltype(cologaritmo_base_10_mais_1) cologaritmo_base_10_mais_1;
      decltype(cologaritmo_base_10_menos_1) cologaritmo_base_10_menos_1;
      decltype(cologaritmo_base_qualquer) cologaritmo_base_qualquer;
      decltype(cologaritmo_base_qualquer_mais_1) cologaritmo_base_qualquer_mais_1;
      decltype(cologaritmo_base_qualquer_menos_1) cologaritmo_base_qualquer_menos_1;
      decltype(cologaritmo_base_natural) cologaritmo_base_natural;
      decltype(cologaritmo_base_natural_mais_1) cologaritmo_base_natural_mais_1;
      decltype(cologaritmo_base_natural_menos_1) cologaritmo_base_natural_menos_1;

    };

  } categorias;

  /** 
   * Grupo Categórico de funcionalidades comuns
   */ 
  categorias::Comuns comuns;

  /** 
   * Grupo Categórico de funcionalidades científicas 
   */
  categorias::Cientificas cientificas;

  /** 
   * Grupo Categórico de funcionalidades supremas 
   */
  categorias::Supremas supremas;

};

int a() { Aritmeticos aritmeticos; }

class Aritmeticos2020Version { };

#endif // CORE_ARITHM_HPP
