/**
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wsf". 
 */

#include <cstdlib>
#include <cstdint>
#include <regex>
#include <iostream>
#include <any>
#include <map>

using namespace std;

//region [rgba(88, 44, 50, 1)]
#pragma region wsf_sysdefs

  #define WSF_VMAJOR 2
  #define WSF_VMINOR 0
  #define WSF_VPATCH 0
  #define WSF_VBUILD 0
 
  #define WSF_EDEVL 0
  #define WSF_ETEST 1
  #define WSF_EPROD 2

  #define WSF_MEM_UP_S 1024
  #define WSF_MEM_UP_M 2048
  #define WSF_MEM_UP_L 4096
  #define WSF_MEM_UP_XL 8192
  #define WSF_MEM_UP_XXL 16384

  #if defined(_WIN32) || defined(_WIN64)
    #define WSF_OS_WIN
  #endif

  #if defined(__linux__)
    #define WSF_OS_LIN
  #endif

  #if defined(__APPLE__) || defined(__MACH__)
    #define WSF_OS_MAC
  #endif

  #if defined(__FreeBSD__)
    #define WSF_OS_BSD
  #endif

  #if defined(__unix__) || defined(__unix)
    #define WSF_OS_UNX
  #endif

  #if defined(WSF_OS_WIN)
    #define WSF_OS WSF_OS_WIN
  #endif

  #if defined(WSF_OS_ANDROID)
    #define WSF_OS WSF_OS_ANDROID
  #endif

  #if defined(WSF_OS_IOS)
    #define WSF_OS WSF_OS_IOS
  #endif

#pragma endregion

//region [rgba(15, 10, 15, 1)]
#pragma region wsf_types 

  typedef int8_t i8t;
  typedef int16_t i16t;
  typedef int32_t i32t;
  typedef int64_t i64t;
  typedef uint8_t ui8t;
  typedef uint16_t ui16t;
  typedef uint32_t ui32t;
  typedef uint64_t ui64t;
  typedef int_fast8_t if8t;
  typedef int_fast16_t if16t;
  typedef int_fast32_t if32t;
  typedef int_fast64_t if64t;
  typedef uint_fast8_t uif8t;
  typedef uint_fast16_t uif16t;
  typedef uint_fast32_t uif32t;
  typedef uint_fast64_t uif64t;
  typedef int_least8_t il8t;
  typedef int_least16_t il16t;
  typedef int_least32_t il32t;
  typedef int_least64_t il64t;
  typedef uint_least8_t uil8t;
  typedef uint_least16_t uil16t;
  typedef uint_least32_t uil32t;
  typedef uint_least64_t uil64t;

  typedef short int si16t;
  typedef long int li32t;
  typedef long long int lli64t;
  typedef unsigned short int usi16t;
  typedef unsigned long int uli32t;
  typedef unsigned long long int ulli64t;

  typedef bool bool_t;
  typedef bool_t blt;
  typedef float float_t;
  typedef float_t f32t;
  typedef double double_t;
  typedef double_t f64t;

  typedef char char_t;
  typedef char_t chrt;
  typedef char16_t chr16t;
  typedef char32_t chr32t;
  typedef wchar_t wchrt;
  typedef const char cnschrt;
  typedef const char16_t cnschr16t;
  typedef const char32_t cnschr32t;
  typedef const wchar_t cnswchrt;

  typedef void vdt;

  typedef std::string str;
  typedef std::wstring wstr;
  typedef std::u16string str16;
  typedef std::u32string str32;

  typedef std::any anyt;
  typedef std::regex regx;

  typedef std::atomic_bool ablt;
  typedef std::atomic_char achrt;
  typedef std::atomic_schar aschrt;
  typedef std::atomic_uchar auchrt;
  typedef std::atomic_short asi16t;
  typedef std::atomic_ushort ausi16t;
  typedef std::atomic_int asi32t;
  typedef std::atomic_uint ausi32t;
  typedef std::atomic_long asli32t;
  typedef std::atomic_ulong aslui32t;
  typedef std::atomic_llong aslli64t;
  typedef std::atomic_ullong asllui64t;
  typedef std::atomic_wchar_t awchrt;
  typedef std::atomic_char16_t achr16t;
  typedef std::atomic_char32_t achr32t;
  typedef std::atomic_int8_t ai8t;
  typedef std::atomic_uint8_t aui8t;
  typedef std::atomic_int16_t ai16t;
  typedef std::atomic_uint16_t aui16t;
  typedef std::atomic_int32_t ai32t;
  typedef std::atomic_uint32_t aui32t;
  typedef std::atomic_int64_t ai64t;
  typedef std::atomic_uint64_t aui64t;
  typedef std::atomic_int_least8_t ail8t;
  typedef std::atomic_uint_least8_t auil8t;
  typedef std::atomic_int_least16_t ail16t;
  typedef std::atomic_uint_least16_t auil16t;
  typedef std::atomic_int_least32_t ail32t;
  typedef std::atomic_uint_least32_t auil32t;
  typedef std::atomic_int_least64_t ail64t;
  typedef std::atomic_uint_least64_t auil64t;
  typedef std::atomic_int_fast8_t aif8t;
  typedef std::atomic_uint_fast8_t auif8t;
  typedef std::atomic_int_fast16_t aif16t;
  typedef std::atomic_uint_fast16_t auif16t;
  typedef std::atomic_int_fast32_t aif32t;
  typedef std::atomic_uint_fast32_t auif32t;
  typedef std::atomic_int_fast64_t aif64t;
  typedef std::atomic_uint_fast64_t auif64t;
  typedef std::atomic_intptr_t aipt;
  typedef std::atomic_uintptr_t auiptrt;
  typedef std::atomic_size_t aszt;
  typedef std::atomic_ptrdiff_t apdt;
  typedef std::atomic_intmax_t aimxt;
  typedef std::atomic_uintmax_t auimxt;

  // typedef union ALL { struct { chrt* key; all M; }; i8t a; } all;
  // struct JSON { chrt* key; all value; };
  // std::map<char_t *key, any value> json;

#pragma endregion

//region [rgba(88, 80, 75, 1)]
#pragma region wsf_misc_structs

  struct Node
  {
    int valor;
    struct Node *prox;
    struct Node *ante;
  };

  struct Tree
  {
    int valor;
    struct Tree *esq;
    struct Tree *dir;
  };

  struct Minheap
  {
    int valor;
    struct Minheap *esq;
    struct Minheap *dir;
  };

  struct Maxheap
  {
    int valor;
    struct Maxheap *esq;
    struct Maxheap *dir;
  };

  struct Stack
  {
    int quantidade;
    struct Stack *start;
  };

  struct Queue
  {
    int valor;
    struct Queue *head;
    struct Queue *tail;
  };

#pragma endregion

namespace Wsf
{

  namespace Sys
  {

    namespace Libs
    {

      struct Aritmeticos
      {

        protected:
          f32t cnst_avogadro= 
            6.022e23;

          f32t cnst_cbrt_of01_02=
            0.707106;

          f32t cnst_cbrt_of01_04=
            0.500000;
          
          f32t cnst_cbrt_of01_06=
            0.408248;

          f32t cnst_cbrt_of01_08=
            0.353553;

          f32t cnst_cbrt_of01=
            1.000000;

          f32t cnst_cbrt_of02=
            1.259921;

          f32t cnst_cbrt_of03=
            1.587401;

          f32t cnst_cbrt_of04=
            1.999999;

          f32t cnst_cbrt_of05=
            2.236067;

          f32t cnst_cbrt_of06=
            2.581988;

          f32t cnst_cbrt_of07=
            2.912931;

          f32t cnst_cbrt_of08=
            3.262495;

          f32t cnst_cbrt_of09=
            3.624499;

          f32t cnst_cbrt_of10=
            3.999999;

          f32t cnst_cbrt_of11=
            4.387482;
          
          f32t cnst_cbrt_of12=
            4.783385;

          f32t cnst_coulomb=
            1.602e-19;

          f32t cnst_euler=
            2.718281;

          f32t cnst_euler2=
            7.389056;

          f32t cnst_gravitation=
            6.67408e-11;

          f32t cnst_logarithm2=
            0.693147;

          f32t cnst_logarithm2e=
            1.442695;
          
          f32t cnst_logarithm10=
            2.302585;
          
          f32t cnst_logarithm10e=
            0.434294;

          f32t cnst_maxvalue=
            99999999;
          
          f32t cnst_minvalue=
            -99999999;

          f32t cnst_newton=
            0.693147;
          
          f32t cnst_pi=
            3.141592;
          
          f32t cnst_plank=
            6.626e-34;

          f32t cnst_sqrt_of01_02=
            0.793700;

          f32t cnst_sqrt_of01_04=
            0.629960;

          f32t cnst_sqrt_of01_06=
            0.550321;
          
          f32t cnst_sqrt_of01_08=
            0.500000;
          
          f32t cnst_sqrt_of01=
            1.000000;

          f32t cnst_sqrt_of02=
            1.414213;

          f32t cnst_sqrt_of03=
            1.732050;

          f32t cnst_sqrt_of04=
            2.000000;

          f32t cnst_sqrt_of05=
            2.236067;

          f32t cnst_sqrt_of06=
            2.449489;

          f32t cnst_sqrt_of07=
            2.645751;

          f32t cnst_sqrt_of08=
            2.828427;

          f32t cnst_sqrt_of09=
            3.000000;

          f32t cnst_sqrt_of10=
            3.162277;
          
          f32t cnst_sqrt_of11=
            3.316624;
          
          f32t cnst_sqrt_of12=
            3.464101;

          f32t cnst_tesla=
            1.602e-19;

          f32t cnst_zero=
            0.000000;


          struct ArcosTrigonometricos {};
          struct Expressoes {};
          struct Logicos {};
          struct Algebricos {};

          struct Comum 
          {

            f32t mtd_soma
            (
              f32t x, 
              f32t y
            )
            {
              return x + y;
            }

            f32t mtd_subtracao
            (
              f32t x, 
              f32t y
            )
            {
              return x - y;
            }

            f32t mtd_multiplicacao
            (
              f32t x, 
              f32t y
            )
            {
              return x * y;
            }

            f32t mtd_divisao
            (
              f32t x, 
              f32t y
            )
            {
              return x / y;
            }

            // Não encontrado uma solução para o uso de números decimais nesse recurso.
            i64t mtd_resto
            (
              i64t x, 
              i64t y
            )
            {
              return x % y;
            }

            // Versão desenvolvida com funcionalidades padrões da linguagem C.
            f32t mtd_potencia
            (
              f32t x, 
              f32t y
            ) 
            {
              return pow(x, y);
            }

            // Versão desenvolvida com funcionalidades padrões da linguagem C.
            i64t mtd_potencia_de_potencia
            (
              i64t x, 
              i64t y, 
              i64t z
            ) 
            {
              return pow(pow(x, y), z);
            }

            f32t mtd_raiz_quadrada
            (
              f32t x
            ) 
            { 
              return mtd_potencia(x, 1 / 2); 
            }
            
            f32t mtd_raiz_cubica
            (
              f32t x
            ) 
            { 
              return mtd_potencia(x, 1 / 3); 
            }

          };

          struct Cientificos 
          {

            f32t mtd_raiz_quarto_grau
            (
              f32t x
            )
            {
              return Comum().mtd_potencia(x, 1 / 4);
            }

            f32t mtd_raiz_quinto_grau
            (
              f32t x
            )
            {
              return Comum().mtd_potencia(x, 1 / 5);
            }

            f32t mtd_raiz_sexto_grau
            (
              f32t x
            )
            {
              return Comum().mtd_potencia(x, 1 / 6);
            }

            f32t mtd_raiz_setimo_grau
            (
              f32t x
            )
            {
              return Comum().mtd_potencia(x, 1 / 7);
            }

            f32t mtd_raiz_oitavo_grau
            (
              f32t x
            )
            {
              return Comum().mtd_potencia(x, 1 / 8);
            }
            
            f32t mtd_raiz_nono_grau
            (
              f32t x
            )
            {
              return Comum().mtd_potencia(x, 1 / 9);
            }

            f32t mtd_raiz_decimo_grau
            (
              f32t x
            )
            {
              return Comum().mtd_potencia(x, 1 / 10);
            }

            f32t mtd_seno
            (
              f32t x
            )
            {
              return (((2 * Aritmeticos().cnst_pi * 1) / 4) / 90) * x;
            }

            f32t mtd_seno_hiperbolico
            (
              f32t x
            ){
              return 1 / (((2 * Aritmeticos().cnst_pi * 1) / 4) / 90) * x;
            }

            f32t mtd_cosseno
            (
              f32t x
            )
            {
              return (-1 * (((2 * Aritmeticos().cnst_pi * 1) / 4) / 90)) * x; 
            }

            f32t mtd_cosseno_hiperbolico
            (
              f32t x
            )
            {
              return 1 / (-1 * ((2 * Aritmeticos().cnst_pi * 1) / 4) / 90) * x; 
            }

            f32t mtd_tangente
            (
              f32t x
            )
            {
              return mtd_seno(x) / mtd_cosseno(x);
            }

            f32t mtd_tangente_hiperbolica
            (
              f32t x
            )
            {
              return 1 / (mtd_seno(x) / mtd_cosseno(x));
            }

            f32t mtd_secante
            (
              f32t x
            )
            {
              return 1 / mtd_cosseno(x);
            }

            f32t mtd_secante_hiperbolica
            (
              f32t x
            )
            {
              return 1 / (1 / mtd_cosseno(x)); 
            }

            f32t mtd_cosecante
            (
              f32t x
            )
            {
              return 1 / mtd_seno(x);  
            }

            f32t mtd_cosecante_hiperbolica
            (
              f32t x
            )
            {
              return 1 / (1 / mtd_seno(x));
            }
          
            f32t mtd_cotangente
            (
              f32t x
            )
            {
              return 1 / (mtd_cosseno(x) / mtd_seno(x));
            }

            f32t mtd_cotangente_hiperbolica
            (
              f32t x
            )
            {
              return 1 / (1 / (mtd_cosseno(x) / mtd_seno(x)));
            }

          };


          // // // Métodos herdados, ainda fazer alterações
          // // OK
          // float_t method_absoluto
          // (
          //   float_t x
          // ) 
          // {
          //   return x < 0 ? -1 * x : x;
          // }


          // struct Delta
          // {
          //   float_t final;
          //   float_t inicial; 
          // };


          // // OK
          // float_t method_aceleracao_angular_mcuv
          // (
          //   struct Delta velocidade_ang, 
          //   struct Delta tempo
          // ) 
          // {
          //   return (velocidade_ang.final - velocidade_ang.inicial) / (tempo.final - tempo.inicial);
          // }


          // // OK
          // float_t method_aceleracao_centripeta_mcu
          // (
          //   float_t velocidade, 
          //   float_t raio
          // ) 
          // {
          //   return (velocidade * velocidade) / raio;
          // }


          // // OK
          // float_t method_aceleracao_plano_inclinado_eixo_x
          // (
          //   float_t massa, 
          //   float_t gravidade, 
          //   float_t angulo
          // ) 
          // {
          //   return massa * gravidade * method_seno(angulo);
          // }


          // // OK
          // float_t method_aceleracao_plano_inclinado_eixo_y
          // (
          //   float_t massa, 
          //   float_t gravidade, 
          //   float_t angulo
          // ) 
          // {
          //   return massa * gravidade * method_cosseno(angulo);
          // }


          // // OK
          // float_t method_aceleracao
          // (
          //   float_t velocidade, 
          //   struct Delta tempo
          // ) 
          // {
          //   return velocidade / (tempo.final - tempo.inicial);
          // }


          // // OK
          // float_t method_alcance_lancamento_vertical
          // (
          //   float_t velocidade, 
          //   struct Delta tempo,
          //   float_t angulo
          // ) 
          // {
          //   return velocidade * method_cosseno(angulo) * (tempo.final - tempo.inicial);
          // }


          // // OK
          // float_t method_alcance_maximo_lancamento_vertical
          // (
          //   float_t velocidade, 
          //   float_t angulo, 
          //   float_t gravidade
          // ) 
          // {
          //   return ((velocidade * velocidade) * (method_seno(angulo) * method_seno(angulo))) / gravidade;
          // }


          // // OK 
          // float_t method_altura_maxima_lancamento_vertical
          // (
          //   float_t velocidade_inicial, 
          //   float_t gravidade, 
          //   float_t angulo
          // ) 
          // {
          //   return (velocidade_inicial * velocidade_inicial) * ((method_seno(angulo) * method_seno(angulo)) / 2) * gravidade;
          // }

          // // OK
          // // Algoritmo de Logaritmo em fase experimental pós-transpilação
          // float_t method_privado_logaritmo_base
          // (
          //   float_t expo, 
          //   float_t x
          // ) 
          // {
          //   float_t exp = expo;
          //   int $a = exp, $b = x;
          //   int scan = $b % $a;

          //   while(scan != 0) {
          //     scan = scan % $a;

          //     if(pow(expo, exp) != x) {   
          //       if(pow(expo, exp) != x) {
          //         if (pow(expo, exp) != x) {
          //           exp += 0.0001;
          //         }
          //         exp += 0.001;
          //       }
          //       exp += 0.01; 
          //     } 
          //     exp += 0.1;
          //   }
          //   return exp;
          // };


          // // OK
          // float_t method_antilogaritmo_base_2_mais_1
          // (
          //   float_t x
          // ) 
          // {
          //   return (1 * (method_privado_logaritmo_base(2, x) * method_privado_logaritmo_base(2, x))) + 1;
          // }


          // // OK
          // float_t method_antilogaritmo_base_2_menos_1
          // (
          //   float_t x
          // ) 
          // {
          //   return (1 * (method_privado_logaritmo_base(2, x) * method_privado_logaritmo_base(2, x))) - 1;
          // }


          // // OK
          // float_t method_antilogaritmo_base_2
          // (
          //   float_t x
          // ) 
          // {
          //   return 1 * (method_privado_logaritmo_base(2, x) * method_privado_logaritmo_base(2, x));
          // }


          // // OK
          // float_t method_antilogaritmo_base_10_mais_1
          // (
          //   float_t x
          // ) 
          // {
          //   return (1 * (method_privado_logaritmo_base(10, x) * method_privado_logaritmo_base(10, x))) + 1;
          // }


          // // OK
          // float_t method_antilogaritmo_base_10_menos_1
          // (
          //   float_t x
          // ) 
          // {
          //   return (1 * (method_privado_logaritmo_base(10, x) * method_privado_logaritmo_base(10, x))) - 1;
          // }


          // // OK
          // float_t method_antilogaritmo_base_10
          // (
          //   float_t x
          // ) 
          // {
          //   return 1 * (method_privado_logaritmo_base(10, x) * method_privado_logaritmo_base(10, x));
          // }


          // // OK
          // float_t method_antilogaritmo_base_qualquer_mais_1
          // (
          //   float_t x, 
          //   float_t base
          // ) 
          // {
          //   return (1 * (method_privado_logaritmo_base(base, x) * method_privado_logaritmo_base(base, x))) + 1;
          // }


          // // OK
          // float_t method_antilogaritmo_base_qualquer_menos_1(
          //   float_t x, 
          //   float_t base
          // ) 
          // {
          //   return (1 * (method_privado_logaritmo_base(base, x) * method_privado_logaritmo_base(base, x))) - 1;
          // }


          // // OK
          // float_t method_antilogaritmo_base_qualquer
          // (
          //   float_t x, 
          //   float_t base
          // ) 
          // {
          //   return 1 * (method_privado_logaritmo_base(base, x) * method_privado_logaritmo_base(base, x));
          // }


          // // OK
          // float_t method_antilogaritmo_base_natural_mais_1
          // (
          //   float_t x
          // ) 
          // {
          //   return (1 * (method_privado_logaritmo_base(cnst_euler, x) * method_privado_logaritmo_base(cnst_euler, x))) + 1;
          // }


          // // OK
          // float_t method_antilogaritmo_base_natural_menos_1
          // (
          //   float_t x
          // ) 
          // {
          //   return (1 * (method_privado_logaritmo_base(cnst_euler, x) * method_privado_logaritmo_base(cnst_euler, x))) - 1;
          // }


          // // OK
          // float_t method_antilogaritmo_base_natural
          // (
          //   float_t x
          // ) 
          // {
          //   return 1 * (method_privado_logaritmo_base(cnst_euler, x) * method_privado_logaritmo_base(cnst_euler, x));
          // }


          // // OK
          // float_t method_apotema_triangulo
          // (
          //   float_t lado
          // ) 
          // {
          //   return (lado * lado) * method_raiz_quadrada(3) / 2;
          // }


          // // OK
          // float_t method_arco_cosecante_hiperbolica
          // (
          //   float_t x
          // ) 
          // {
          //   return 1 / method_arco_seno_hiperbolico(x);
          // }


          // // OK
          // float_t method_arco_cosecante
          // (
          //   float_t x
          // ) 
          // {
          //   return 1 / method_arco_seno(x); 
          // }


          // // OK
          // float_t method_arco_cosseno_hiperbolico
          // (
          //   float_t x
          // ) 
          // {
          //   return 1 / ((-1 * ((2 * cnst_pi * 1) / 4) / 90) * x);
          // }


          // // OK
          // float_t method_arco_cosseno
          // (
          //   float_t x
          // ) 
          // {
          //   return -1 * (((2 * cnst_pi * 1) / 4) / 90) * x;
          // }


          // // OK
          // float_t method_arco_cotangente_hiperbolica
          // (
          //   float_t x
          // ) 
          // {
          //   return 1 / method_arco_tangente_hiperbolica(x);
          // }


          // // OK
          // float_t method_arco_cotangente
          // (
          //   float_t x
          // ) 
          // {
          //   return 1 / method_arco_tangente(x);  
          // }


          // // OK
          // float_t method_arco_secante_hiperbolica
          // (
          //   float_t x
          // ) 
          // {
          //   return 1 / method_arco_cosseno_hiperbolico(x);
          // }


          // // OK
          // float_t method_arco_secante
          // (
          //   float_t x
          // )
          // {
          //   return 1 / method_arco_cosseno(x);
          // }


          // // OK
          // float_t method_arco_seno_hiperbolico
          // (
          //   float_t x
          // ) 
          // {
          //   return 1 / ((((2 * cnst_pi * 1) / 4) / 90) * x);
          // }


          // // OK
          // float_t method_arco_seno
          // (
          //   float_t x
          // )
          // {
          //   return (((2 * cnst_pi * 1) / 4) / 90) * x;
          // }


          // // OK
          // float_t method_arco_tangente_hiperbolica
          // (
          //   float_t x
          // ) 
          // {
          //   return method_arco_seno_hiperbolico(x) / method_arco_cosseno_hiperbolico(x);
          // }


          // // OK
          // float_t method_arco_tangente
          // (
          //   float_t x
          // ) 
          // {
          //   return method_arco_seno(x) / method_arco_cosseno(x);
          // }


          // // OK
          // float_t method_area_circulo
          // (
          //   float_t raio
          // ) 
          // {
          //   return cnst_pi * (raio * raio);
          // }


          // // OK
          // float_t method_area_circunferencia
          // (
          //   float_t raio
          // ) 
          // {
          //   return 2 * cnst_pi * raio;
          // }


          // // OK
          // float_t method_area_elipse
          // (
          //   float_t raio, 
          //   float_t a, 
          //   float_t b
          // )
          // {
          //   return cnst_pi * a * b;
          // }


          // // OK
          // float_t method_area_esfera
          // (
          //   float_t raio
          // )
          // {
          //   return 4 * cnst_pi * (raio * raio) / 2;
          // }


          // // OK
          // float_t method_area_lateral_cilindro
          // (
          //   float_t raio, 
          //   float_t altura
          // )
          // {
          //   return 2 * cnst_pi * raio * altura;
          // }


          // // OK
          // float_t method_area_lateral_prisma
          // (
          //   float_t lados, 
          //   float_t comprimento, 
          //   float_t largura
          // )
          // {
          //   return lados * (comprimento * largura);
          // }


          // // OK
          // float_t method_area_lozango
          // (
          //   float_t diagonal_maior, 
          //   float_t diagonal_menor
          // )
          // {
          //   return (diagonal_maior * diagonal_menor) / 2;
          // }


          // // OK
          // float_t method_area_piramide
          // (
          //   float_t area_lateral, 
          //   float_t area_base
          // )
          // {
          //   return area_lateral + area_base;
          // }


          // // OK
          // float_t method_area_poligono
          // (
          //   float_t lados, 
          //   float_t comprimento, 
          //   float_t largura
          // )
          // {
          //   return comprimento == largura ? lados * ((comprimento * comprimento * method_raiz_quadrada(3)) / 4) : lados * (comprimento * largura / 2);
          // }


          // // OK
          // float_t method_area_quadrado
          // (
          //   float_t lado
          // )
          // {
          //   return lado * lado;
          // }


          // // OK
          // float_t method_area_retangulo
          // (
          //   float_t comprimento, 
          //   float_t largura
          // )
          // {
          //   return comprimento * largura;
          // }


          // // OK
          // float_t method_area_trapezio
          // (
          //   float_t base_maior, 
          //   float_t base_menor, 
          //   float_t altura
          // )
          // {
          //   return (base_maior + base_menor * altura) / 2;
          // }


          // // OK
          // float_t method_area_triangulo
          // (
          //   float_t base, 
          //   float_t altura
          // )
          // {
          //   return (base * altura) / 2;
          // }


          // // OK
          // float_t method_area_triangulo_equilatero
          // (
          //   float_t lado
          // )
          // {
          //   return (lado * lado) * method_raiz_quadrada(3) / 4;
          // }


          // // OK
          // float_t method_arranjo
          // (
          //   float_t n, 
          //   float_t p
          // )
          // {
          //   float_t resultado = 0.0, totalConvertido = 1.0, divisorConvertido = 1.0;
          //   for (int i = n; i > 0; i--) { totalConvertido = totalConvertido * i; }
          //   for (int j = p; j > 0; j--) { divisorConvertido = divisorConvertido * j; }
          //   resultado = totalConvertido / (totalConvertido - divisorConvertido);
          //   return resultado;
          // }


          // float_t method_arrendonda_para_baixo
          // (
          //   float_t x
          // ) 
          // {
          //   return x = (int)x;
          // }


          // // OK
          // float_t method_arrendonda_para_cima
          // (
          //   float_t x
          // ) 
          // {
          //   return x > (int)x+0.5 ? (int)x + 1 : (int)x;
          // }


          // float_t method_arrendonda_para_decimal_32_bits
          // (
          //   float_t x
          // ) 
          // {
          //   return x = (int32_t)x; 
          // }


          // // OK
          // float_t method_atrito
          // (
          //   float_t coeficiente_de_atrito, 
          //   float_t massa
          // ) 
          // {
          //   return coeficiente_de_atrito * massa;
          // }


          // // OK
          // float_t method_calor_latente
          // (
          //   float_t quantidade_de_calor, 
          //   float_t massa
          // )
          // {
          //   return quantidade_de_calor / massa;
          // }

          // // OK
          // float_t method_calor_sensivel
          // (
          //   float_t massa, 
          //   float_t calor_especifico, 
          //   Delta temperatura
          // )
          // {
          //   return massa * calor_especifico * (temperatura.final - temperatura.inicial);
          // }


          // // OK
          // float_t method_celsius_para_fahrenheit
          // (
          //   float_t celsius
          // )
          // {
          //   return (1.8 * celsius) + 32;
          // }


          // // OK
          // float_t method_celsius_para_kelvin
          // (
          //   float_t celsius
          // )
          // {
          //   return celsius - 273;
          // }


          // // OK
          // float_t method_cologaritmo_base_2_mais_1
          // (
          //   float_t x
          // )
          // {
          //   return (-1 * method_privado_logaritmo_base(2, x)) + 1;
          // }


          // // OK
          // float_t method_cologaritmo_base_2_menos_1
          // (
          //   float_t x
          // )
          // {
          //   return (-1 * method_privado_logaritmo_base(2, x)) - 1;
          // }


          // // OK
          // float_t method_cologaritmo_base_2
          // (
          //   float_t x
          // )
          // {
          //   return -1 * method_privado_logaritmo_base(2, x);
          // }


          // // OK
          // float_t method_cologaritmo_base_10_mais_1
          // (
          //   float_t x
          // )
          // {
          //   return (-1 * method_privado_logaritmo_base(10, x)) + 1;
          // }


          // // OK
          // float_t method_cologaritmo_base_10_menos_1
          // (
          //   float_t x
          // )
          // {
          //   return (-1 * method_privado_logaritmo_base(10, x)) - 1;
          // }


          // // OK
          // float_t method_cologaritmo_base_10
          // (
          //   float_t x
          // )
          // {
          //   return -1 * method_privado_logaritmo_base(10, x);
          // }


          // // OK
          // float_t method_cologaritmo_base_qualquer_mais_1
          // (
          //   float_t x, 
          //   float_t base
          // )
          // {
          //   return (-1 * method_privado_logaritmo_base(base, x)) + 1;
          // }


          // // OK
          // float_t method_cologaritmo_base_qualquer_menos_1
          // (
          //   float_t x, 
          //   float_t base
          // )
          // {
          //   return (-1 * method_privado_logaritmo_base(base, x)) - 1;
          // }


          // // OK
          // float_t method_cologaritmo_base_qualquer
          // (
          //   float_t x, 
          //   float_t base
          // )
          // {
          //   return -1 * method_privado_logaritmo_base(base, x);
          // }


          // // OK
          // float_t method_cologaritmo_base_natural_mais_1
          // (
          //   float_t x
          // )
          // {
          //   return (-1 * method_privado_logaritmo_base(cnst_euler, x)) + 1;
          // }


          // // OK
          // float_t method_cologaritmo_base_natural_menos_1
          // (
          //   float_t x
          // )
          // {
          //   return (-1 * method_privado_logaritmo_base(cnst_euler, x)) - 1;
          // }


          // // OK
          // float_t method_cologaritmo_base_natural
          // (
          //   float_t x
          // )
          // {
          //   return -1 * method_privado_logaritmo_base(cnst_euler, x);
          // }


          // // OK
          // float_t method_combinacao
          // (
          //   float_t n, 
          //   float_t p
          // )
          // {
          //   float_t resultado = 0.0, totalConvertido = 1.0, divisorConvertido = 1.0;
          //   for (int i = n; i > 0; i--) { totalConvertido = totalConvertido * i; }
          //   for (int j = p; j > 0; j--) { divisorConvertido = divisorConvertido * j; }
          //   resultado = totalConvertido / (divisorConvertido * (totalConvertido - divisorConvertido));
          //   return resultado;
          // }


          // // OK
          // float_t method_concentracao_comum
          // (
          //   float_t massa_soluto, 
          //   float_t volume
          // )
          // {
          //   return massa_soluto / volume;
          // }


          // // OK
          // float_t method_concentracao_molar
          // (
          //   float_t quantidade_de_materia, 
          //   float_t volume
          // )
          // {
          //   return quantidade_de_materia / volume;
          // }


          // // OK
          // float_t method_consumo_de_energia
          // (
          //   Delta tempo, 
          //   float_t corrente_eletrica, 
          //   float_t ddp
          // )
          // {
          //   return corrente_eletrica * ddp * (tempo.final - tempo.inicial);
          // }


          // // OK
          // float_t method_contra_forca_eletromotriz
          // (
          //   float_t potencia_total_gerador, 
          //   float_t intensidade_da_corrente
          // )
          // {
          //   return -1 * method_forca_eletromotriz(potencia_total_gerador, intensidade_da_corrente);
          // }


          // // OK
          // float_t method_densidade_populacional
          // (
          //   float_t espaco, 
          //   float_t populacao
          // )
          // {
          //   return espaco / populacao;
          // }


          // // OK
          // float_t method_densidade
          // (
          //   float_t massa, 
          //   float_t volume
          // )
          // {
          //   return massa / volume;
          // }


          // // OK
          // float_t method_densidade_relativa
          // (
          //   float_t densidade_de_um_corpo, 
          //   float_t densidade_de_outro_corpo
          // )
          // {
          //   return densidade_de_um_corpo / densidade_de_outro_corpo;
          // }


          // // OK
          // float_t method_determinante_2x2
          // (
          //   float_t a00, 
          //   float_t a01, 
          //   float_t a10, 
          //   float_t a11
          // )
          // {
          //   float_t resultado, vetor_primario = a00 * a11, vetor_secundario = a01 * a10;
          //   return resultado = vetor_primario - vetor_secundario;
          // }


          // // OK
          // float_t method_determinante_3x3
          // (
          //   float_t a00, 
          //   float_t a01, 
          //   float_t a02, 
          //   float_t a10, 
          //   float_t a11, 
          //   float_t a12, 
          //   float_t a20, 
          //   float_t a21, 
          //   float_t a22
          // )
          // {
          //   float_t resultado = 0.0;
          //   float_t vetor_principal1 = a00 * a11 * a22; 
          //   float_t vetor_principal2 = a01 * a12 * a20; 
          //   float_t vetor_principal3 = a02 * a10 * a21;
          //   float_t vetor_secundario1 = a02 * a11 * a20; 
          //   float_t vetor_secundario2 = a00 * a12 * a21; 
          //   float_t vetor_secundario3 = a01 * a10 * a22;
          //   return resultado = (vetor_principal1 + vetor_principal2 + vetor_principal3) - (vetor_secundario1 + vetor_secundario2 + vetor_secundario3);
          // }


          // // OK
          // float_t* method_diagrama_venn_2_conjuntos
          // (
          //   float_t ng1, 
          //   float_t ng2
          // )
          // {
          //   struct Resultado
          //   { 
          //     float_t group1 = 0.0; 
          //     float_t group2 = 0.0; 
          //     float_t intersection = 0.0; 
          //   };
          //   struct Resultado resultado;
          //   resultado.intersection = ng1-ng2;
          //   float_t $a = resultado.intersection;
          //   resultado.group1 = ng1-resultado.intersection;
          //   float_t $b = resultado.group1;
          //   resultado.group2 = ng2-resultado.intersection;
          //   float_t $c = resultado.group2;
          //   float_t resultados[3]= { $a, $b, $c };
          //   return resultados;
          // }


          // // OK
          // float_t* method_diagrama_venn_3_conjuntos
          // (
          //   float_t ng1, 
          //   float_t ng2, 
          //   float_t ng3
          // )
          // {
          //   struct Resultado
          //   {
          //     float_t group1 = 0.0;
          //     float_t group2 = 0.0;
          //     float_t group3 = 0.0;
          //     float_t intersection = 0.0;
          //   };
          //   struct Resultado resultado;
          //   resultado.intersection = (ng1-ng2)+(ng1-ng3)+(ng2-ng3);
          //   float_t $a = resultado.intersection;
          //   resultado.group1 = ng1-resultado.intersection;
          //   float_t $b = resultado.group1;
          //   resultado.group2 = ng2-resultado.intersection;
          //   float_t $c = resultado.group2;
          //   resultado.group3 = ng3-resultado.intersection;
          //   float_t $d = resultado.group3;
          //   float_t resultados[4]= { $a, $b, $c, $d };
          //   return resultados;
          // }


          // // OK
          // float_t* method_diagrama_venn_4_conjuntos
          // (
          //   float_t ng1, 
          //   float_t ng2, 
          //   float_t ng3, 
          //   float_t ng4
          // )
          // {
          //   struct Resultado
          //   {
          //     float_t group1 = 0.0;
          //     float_t group2 = 0.0;
          //     float_t group3 = 0.0;
          //     float_t group4 = 0.0;
          //     float_t intersection = 0.0;
          //   };
          //   struct Resultado resultado;
          //   resultado.intersection = (ng1-ng2)+(ng1-ng3)+(ng1-ng4)+(ng2-ng3)+(ng2-ng4)+(ng3-ng4);
          //   float_t $a = resultado.intersection;
          //   resultado.group1 = ng1-resultado.intersection;
          //   float_t $b = resultado.group1;
          //   resultado.group2 = ng2-resultado.intersection;
          //   float_t $c = resultado.group2;
          //   resultado.group3 = ng3-resultado.intersection;
          //   float_t $d = resultado.group3;
          //   resultado.group4 = ng4-resultado.intersection;
          //   float_t $e = resultado.group4;
          //   float_t resultados[5]= { $a, $b, $c, $d, $e };
          //   return resultados;
          // }


          // // OK
          // float_t method_dilatacao_linear
          // (
          //   float_t comprimento_inicial, 
          //   float_t coeficiente_de_dilatacao, 
          //   Delta temperatura
          // )
          // {
          //   return comprimento_inicial * coeficiente_de_dilatacao * (temperatura.final - temperatura.inicial);
          // }


          // // OK
          // float_t method_dilatacao_superficial
          // (
          //   float_t area_inicial, 
          //   float_t coeficiente_de_dilatacao, 
          //   Delta temperatura
          // )
          // {
          //   return area_inicial * coeficiente_de_dilatacao * (temperatura.final - temperatura.inicial);
          // }


          // // OK
          // float_t method_dilatacao_volumetrica
          // (
          //   float_t volume_inicial, 
          //   float_t coeficiente_de_dilatacao, 
          //   Delta temperatura
          // )
          // {
          //   return volume_inicial * coeficiente_de_dilatacao * (temperatura.final - temperatura.inicial);
          // }

          // // OK
          // float_t method_efeito_fotoeletrico
          // (
          //   float_t frequencia_da_luz
          // )
          // {
          //   return (6.662 * 10 * (-34 * -34)) * frequencia_da_luz;
          // }


          // // OK
          // float_t method_efeito_joule
          // (
          //   float_t corrente, 
          //   float_t resistencia, 
          //   Delta tempo
          // )
          // {
          //   return (corrente * corrente) * resistencia * (tempo.final - tempo.inicial);
          // }


          // // OK
          // float_t method_empuxo_hidroestatica_hidrodinamica
          // (
          //   float_t densidade, 
          //   float_t gravidade, 
          //   float_t volume
          // )
          // {
          //   return densidade * gravidade * volume;
          // }


          // // OK
          // float_t method_energia_cinetica
          // (
          //   float_t massa, 
          //   float_t velocidade
          // )
          // {
          //   return (massa * (velocidade * velocidade)) / 2;
          // }


          // float_t method_energia_potencial_elastica
          // (
          //   float_t cnste_elastica, 
          //   Delta distancia
          // )
          // {
          //   return (cnste_elastica * ((distancia.final - distancia.inicial) * (distancia.final - distancia.inicial))) / 2;
          // }


          // // OK
          // float_t method_energia_potencial_gravitacional
          // (
          //   float_t massa, 
          //   float_t gravidade, 
          //   float_t altura
          // )
          // {
          //   return massa * gravidade * altura;
          // }


          // // OK
          // float_t method_equacao_horaria_de_aceleracao_mhs
          // (
          //   float_t velocidade_angular, 
          //   float_t amplitude, 
          //   float_t tempo, 
          //   float_t fase_inicial
          // )
          // {
          //   return -1 * (velocidade_angular * velocidade_angular) * amplitude * method_cosseno(tempo + fase_inicial);
          // }


          // // OK
          // float_t method_equacao_horaria_aceleracao
          // (
          //   float_t aceleracao, 
          //   float_t tempo, 
          //   float_t velocidade
          // )
          // {
          //   return aceleracao + (velocidade * tempo);
          // }


          // // OK
          // float_t method_equacao_horaria_espaco_mcuv
          // (
          //   float_t posicao_angular_inicial, 
          //   float_t velocidade_angular_inicial,
          //   float_t aceleracao_angular,  
          //   float_t tempo
          // )
          // {
          //   return posicao_angular_inicial + (velocidade_angular_inicial * tempo) + (aceleracao_angular * (tempo * tempo)) / 2;
          // }


          // // OK
          // float_t method_equacao_horaria_espaco
          // (
          //   Delta espaco, 
          //   float_t aceleracao
          // )
          // {
          //   return espaco.inicial + aceleracao * espaco.final;
          // }


          // // OK
          // float_t method_equacao_horaria_da_forca
          // (
          //   float_t forca, 
          //   float_t tempo, 
          //   float_t aceleracao
          // )
          // {
          //   return forca + (aceleracao * tempo);
          // }


          // // OK
          // float_t method_equacao_horaria_de_posicao_mhs
          // (
          //   float_t velocidade_angular, 
          //   float_t amplitude, 
          //   float_t tempo, 
          //   float_t fase_inicial
          // )
          // {
          //   return velocidade_angular * amplitude * method_cosseno(tempo + fase_inicial);
          // }


          // // OK
          // float_t method_equacao_horaria_do_tempo_espaco
          // (
          //   Delta tempo, 
          //   Delta espaco, 
          //   float_t velocidade, 
          //   float_t aceleracao
          // )
          // {
          //   return tempo.inicial + (velocidade * tempo.final) + (aceleracao * (tempo.final * tempo.final)) + espaco.inicial + aceleracao * espaco.final;
          // }


          // // OK
          // float_t method_equacao_horaria_do_tempo_mcuv
          // (
          //   float_t velocidade_angular_inicial, 
          //   float_t aceleracao_angular, 
          //   float_t tempo
          // )
          // {
          //   return velocidade_angular_inicial + aceleracao_angular * tempo;
          // }


          // // OK
          // float_t method_equacao_horaria_do_tempo
          // (
          //   Delta tempo, 
          //   float_t velocidade, 
          //   float_t aceleracao
          // )
          // {
          //   return tempo.inicial + (velocidade * tempo.final) + (aceleracao * (tempo.final * tempo.final));
          // }


          // // OK
          // float_t method_equacao_horaria_de_velocidade_mhs
          // (
          //   float_t velocidade_angular, 
          //   float_t amplitude, 
          //   float_t tempo, 
          //   float_t fase_inicial
          // )
          // {
          //   return -1 * velocidade_angular * amplitude * method_seno(tempo + fase_inicial);
          // }


          // // OK
          // float_t method_equacao_horaria_velocidade
          // (
          //   float_t velocidade, 
          //   float_t tempo, 
          //   float_t aceleracao
          // )
          // {
          //   return velocidade + aceleracao * tempo;
          // }


          // // OK
          // float_t method_equacao_lagrange
          // (
          //   float_t x, 
          //   float_t y, 
          //   float_t xi, 
          //   float_t yi, 
          //   float_t xii, 
          //   float_t yii, 
          //   float_t xiii, 
          //   float_t yiii
          // )
          // {
          //   return (x - xi) * (y - yi) / (x - xi) * (y - yii) / (x - xii) * (y - yiii) / (x - xiii);
          // }


          // // OK
          // float_t method_equacao_torricelli
          // (
          //   float_t velocidade_inicial, 
          //   float_t aceleracao, 
          //   Delta espaco
          // )
          // {
          //   return method_raiz_quadrada((velocidade_inicial * velocidade_inicial) + 2 * aceleracao * (espaco.final - espaco.inicial));
          // }


          // // OK
          // float_t method_escala_geografica
          // (
          //   float_t distancia_real, 
          //   float_t distancia_ficticio
          // )
          // {
          //   return distancia_real / distancia_ficticio;
          // }


          // // OK
          // float_t method_espaco
          // (
          //   float_t velocidade, 
          //   Delta tempo
          // )
          // {
          //   return velocidade * (tempo.final - tempo.inicial);
          // }


          // // OK
          // float_t method_exponencial_mais_1
          // (
          //   float_t base, 
          //   float_t x
          // )
          // {
          //   if(base == 0) { return 1; }
          //   return (base * (method_logaritmo_base_qualquer(x, base) * method_logaritmo_base_qualquer(x, base))) + 1;
          // }


          // // OK
          // float_t method_exponencial_menos_1
          // (
          //   float_t base, 
          //   float_t x
          // )
          // {
          //   if(base == 0) { return 1; }
          //   return (base * (method_logaritmo_base_qualquer(x, base) * method_logaritmo_base_qualquer(x, base))) - 1;
          // }


          // // OK
          // float_t method_exponencial
          // (
          //   float_t base, 
          //   float_t x
          // )
          // {
          //   if(base == 0) { return 1; }
          //   return base * (method_logaritmo_base_qualquer(x, base) * method_logaritmo_base_qualquer(x, base));
          // }


          // // OK
          // float_t method_fahrenheit_para_celsius
          // (
          //   float_t fahrenheit
          // )
          // {
          //   return (fahrenheit - 32) / 1.8;
          // }


          // // OK
          // float_t method_fahrenheit_para_kelvin
          // (
          //   float_t fahrenheit
          // )
          // {
          //   return ((fahrenheit - 32) * 5) / 9 + 273;
          // }


          // // OK
          // float_t method_fatorial
          // (
          //   float_t x
          // )
          // {
          //   float_t resultado = 1;
          //   if(x == 0) { return resultado = 1; }
          //   for (int i = x; i > 0; i--) { resultado = i * resultado; };
          //   return resultado;
          // }


          // // OK
          // float_t method_forca_eletromotriz
          // (
          //   float_t potencia_total_gerador, 
          //   float_t intensidade_da_corrente
          // )
          // {
          //   return potencia_total_gerador / intensidade_da_corrente;
          // }


          // // OK
          // float_t method_forca_gravitacional
          // (
          //   float_t gravidade, 
          //   float_t massa_planeta, 
          //   Delta distancia
          // )
          // {
          //   return gravidade * (massa_planeta / ((distancia.final - distancia.inicial) * (distancia.final - distancia.inicial)));
          // }


          // // OK
          // float_t method_frequencia
          // (
          //   float_t periodo
          // )
          // {
          //   return 1 / periodo;
          // }


          // // OK
          // float_t method_indice_desenvolvimento_humano
          // (
          //   float_t saude, 
          //   float_t educacao, 
          //   float_t renda, 
          //   float_t populacao, 
          //   float_t ppc
          // )
          // {
          //   return (saude + educacao + renda) / (populacao + ppc);
          // }


          // // OK
          // float_t method_indice_de_gini
          // (
          //   float_t pnb, 
          //   float_t populacao
          // )
          // {
          //   return pnb / populacao;
          // }


          // // OK
          // float_t method_indice_de_massa_corporal
          // (
          //   float_t massa, 
          //   float_t altura
          // )
          // {
          //   return massa / (altura * altura);
          // }


          // // OK
          // float_t method_juros_compostos
          // (
          //   float_t valor, 
          //   float_t taxa, 
          //   float_t tempo, 
          //   float_t vezes
          // )
          // {
          //   return (valor * (1 + taxa * tempo)) * (vezes * vezes); 
          // }


          // // OK
          // float_t method_juros_simples
          // (
          //   float_t valor, 
          //   float_t taxa, 
          //   float_t tempo
          // )
          // {
          //   return valor * (1 + taxa * tempo);
          // }


          // // OK
          // float_t method_kelvin_para_celsius
          // (
          //   float_t kelvin
          // )
          // {
          //   return kelvin + 273;
          // }


          // // OK
          // float_t method_kelvin_para_fahrenheit
          // (
          //   float_t kelvin
          // )
          // {
          //   return (kelvin - 273) * 1.8 + 32;
          // }


          // // OK
          // float_t method_lancamento_horizontal
          // (
          //   float_t gravidade, 
          //   Delta tempo
          // )
          // {
          //   return ((gravidade * (tempo.final - tempo.inicial)) * (gravidade * (tempo.final - tempo.inicial))) / 2;
          // }


          // struct Carga
          // {
          //   float_t a = 0.0;
          //   float_t b = 0.0;
          // };


          // // OK
          // float_t method_lei_de_coulomb
          // (
          //   Carga carga, 
          //   Delta distancia
          // )
          // {
          //   float_t cnste = (90) * (90) * (90) * (90) * (90) * (90) * (90) * (90) * (90);
          //   float_t formula = (cnste) * (carga.a * carga.b / ((distancia.final - distancia.inicial) * (distancia.final - distancia.inicial)));
          //   return formula;
          // }


          // // OK
          // float_t method_lei_de_lenz
          // (
          //   float_t intensidade_do_campo_magnetico, 
          //   float_t area_da_superficie, 
          //   float_t angulo
          // )
          // {
          //   return intensidade_do_campo_magnetico * area_da_superficie * method_cosseno(angulo);
          // }


          // // OK
          // float_t method_lei_de_ohm
          // (
          //   float_t resistencia, 
          //   float_t intensidade_da_corrente
          // )
          // {
          //   return resistencia * intensidade_da_corrente;
          // }


          // // Voltar aqui nessa funcionalidade, refatorar toda a lógica construída anteriormente
          // float_t method_lei_geral_dos_gases
          // (
          //   float_t pressao1, 
          //   float_t pressao2, 
          //   float_t volume1, 
          //   float_t volume2, 
          //   float_t temperatura1, 
          //   float_t temperatura2
          // )
          // {
          //   regex verificacao = basic_regex("/([a-zA-Z])/");
          //   float_t resultado = 0.0;
          //   // if(pressao1.match(verificacao) != null||"") { 
          //   //   resultado = (parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); 
          //   // }
          //   // if (pressao2.match(verificacao) != null||"") { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(volume2) * parseFloat(temperatura1)); }
          //   // if (volume1.match(verificacao) != null||"") { resultado = (parseFloat(pressao1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); }
          //   // if (volume2.match(verificacao) != null||"") { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(temperatura1)); }
          //   // if (temperatura1.match(verificacao) != null||"") { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2)); }
          //   // if (temperatura2.match(verificacao) != null||"") { resultado = (parseFloat(pressao1) * parseFloat(volume1)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); }
          //   // return resultado;
          // }


          // // OK
          // float_t method_lei_de_newton
          // (
          //   float_t massa, 
          //   float_t aceleracao
          // )
          // {
          //   return massa * aceleracao;
          // }


          // // OK
          // float_t method_logaritmo_base_2_mais_1
          // (
          //   float_t x
          // )
          // {
          //   return method_privado_logaritmo_base(2, x+1);
          // }


          // // OK
          // float_t method_logaritmo_base_2_menos_1
          // (
          //   float_t x
          // )
          // {
          //   return method_privado_logaritmo_base(2, x-1);
          // }


          // // OK
          // float_t method_logaritmo_base_2
          // (
          //   float_t x
          // )
          // {
          //   return method_privado_logaritmo_base(2, x);
          // }


          // // OK
          // float_t method_logaritmo_base_10_mais_1
          // (
          //   float_t x
          // )
          // {
          //   return method_privado_logaritmo_base(10, x+1);
          // }


          // // OK
          // float_t method_logaritmo_base_10_menos_1
          // (
          //   float_t x
          // )
          // {
          //   return method_privado_logaritmo_base(10, x-1);
          // }


          // // OK
          // float_t method_logaritmo_base_10
          // (
          //   float_t x
          // )
          // {
          //   return method_privado_logaritmo_base(10, x);
          // }


          // // OK
          // float_t method_logaritmo_base_qualquer_mais_1
          // (
          //   float_t x, 
          //   float_t base
          // )
          // {
          //   return method_privado_logaritmo_base(base, x+1);
          // }


          // // OK
          // float_t method_logaritmo_base_qualquer_menos_1
          // (
          //   float_t x, 
          //   float_t base
          // )
          // {
          //   return method_privado_logaritmo_base(base, x-1);
          // }


          // // OK
          // float_t method_logaritmo_base_qualquer
          // (
          //   float_t x, 
          //   float_t base
          // )
          // {
          //   return method_privado_logaritmo_base(base, x);
          // }


          // // OK
          // float_t method_logaritmo_base_natural_mais_1
          // (
          //   float_t x
          // )
          // {
          //   return method_privado_logaritmo_base(cnst_euler, x+1);
          // }


          // // OK
          // float_t method_logaritmo_base_natural_menos_1
          // (
          //   float_t x
          // )
          // {
          //   return method_privado_logaritmo_base(cnst_euler, x-1);
          // }


          // // OK
          // float_t method_logaritmo_base_natural
          // (
          //   float_t x
          // )
          // {
          //   return method_privado_logaritmo_base(cnst_euler, x);
          // }


          // // OK
          // float_t method_periodo
          // (
          //   float_t frequencia
          // )
          // {
          //   return 1 / frequencia;
          // }


          // // OK
          // float_t method_permutacao
          // (
          //   float_t n, 
          //   float_t p
          // )
          // {
          //   float_t resultado = 0.0, totalConvertido = 1.0, divisorConvertido = 1.0;
          //   for (int i = n; i > 0; i--) { totalConvertido = totalConvertido * i; }
          //   for (int j = n - p; j > 0; j--) { divisorConvertido = divisorConvertido * j; }
          //   resultado = totalConvertido / divisorConvertido;
          //   return resultado;
          // }


          // // OK
          // float_t method_peso
          // (
          //   float_t massa, 
          //   float_t gravidade
          // )
          // {
          //   return massa * gravidade;
          // }


          // // OK
          // float_t method_peso_aparente_da_hidroestatica_hidrodinamica
          // (
          //   float_t peso, 
          //   float_t densidade, 
          //   float_t gravidade, 
          //   float_t volume
          // )
          // {
          //   return peso - method_empuxo_hidroestatica_hidrodinamica(densidade, gravidade, volume);
          // }


          // // OK
          // float_t method_plano_inclinado_com_atrito
          // (
          //   float_t forca_de_atrito, 
          //   float_t massa, 
          //   float_t gravidade, 
          //   float_t angulo
          // )
          // {
          //   return forca_de_atrito * massa * gravidade * angulo;
          // }


          // // OK
          // float_t method_plano_inclinado_sem_atrito
          // (
          //   float_t massa, 
          //   float_t gravidade
          // )
          // {
          //   return massa * gravidade;
          // }


          // // OK
          // float_t method_porcentagem
          // (
          //   float_t x
          // )
          // {
          //   return x / 100;
          // }


          // // OK
          // float_t method_porcentagem_por_1000
          // (
          //   float_t x
          // )
          // {
          //   return x / 1000;
          // }


          // // OK
          // float_t method_porcentagem_por_10000
          // (
          //   float_t x
          // )
          // {
          //   return x / 10000;
          // }


          // // OK
          // float_t method_porcentagem_por_100000
          // (
          //   float_t x
          // )
          // {
          //   return x / 100000;
          // }

          // // OK
          // float_t method_potencial_elastico
          // (
          //   float_t cnste_elastica, 
          //   Delta distancia
          // )
          // {
          //   return method_energia_potencial_elastica(cnste_elastica, distancia);
          // }


          // // OK
          // float_t method_potencial_mecanico
          // (
          //   float_t velocidade, 
          //   float_t cnste_elastica, 
          //   Delta distancia, 
          //   float_t massa, 
          //   float_t gravidade, 
          //   float_t altura, 
          //   float_t energ_pot_elas, 
          //   float_t energ_pot_grav
          // )
          // {
          //   float_t resultado = 0.0;
          //   if (energ_pot_elas == true) { 
          //     resultado = method_energia_cinetica(massa, velocidade) + method_energia_potencial_elastica(cnste_elastica, distancia); 
          //   }
          //   if (energ_pot_grav == true) { 
          //     resultado = method_energia_cinetica(massa, velocidade) + method_energia_potencial_gravitacional(massa, gravidade, altura); 
          //   }
          //   return resultado;
          // }


          // // OK
          // float_t method_principio_fundamental_hidroestatica_hidrodinamica
          // (
          //   float_t densidade, 
          //   float_t gravidade, 
          //   Delta altura
          // )
          // {
          //   return densidade * gravidade * (altura.final - altura.inicial);
          // }


          // // OK
          // float_t method_probabilidade
          // (
          //   float_t valor, 
          //   float_t valor_total
          // )
          // {
          //   return valor / valor_total;
          // }


          // // Voltar aqui nessa funcionalidade, refatorar toda a lógica construída anteriormente
          // float_t method_quadrado_de_punnet
          // (
          //   float_t genotipo_a, 
          //   float_t genotipo_b
          // )
          // {    
          //   // if(genotipo1.length > 2 || genotipo2.length > 2) { return; }

          //   // const genDiv1 = genotipo1.slice(0, 1);
          //   // const genDiv2 = genotipo2.slice(0, 1);
          //   // const genDiv3 = genotipo1.slice(1, 2);
          //   // const genDiv4 = genotipo2.slice(1, 2);

          //   // let resultado: string[];
          //   // return resultado = [ 
          //   //   genDiv1 + genDiv3, 
          //   //   genDiv1 + genDiv4, 
          //   //   genDiv2 + genDiv3, 
          //   //   genDiv2 + genDiv4 
          //   // ];
          // }


          // // Voltar aqui nessa funcionalidade, refatorar toda a lógica construída anteriormente
          // float_t method_quadrado_de_punnet_extendido
          // (
          //   float_t genotipo_a, 
          //   float_t genotipo_A, 
          //   float_t genotipo_b, 
          //   float_t genotipo_B
          // )
          // {
          //   // if(genotipo2.length > 4 || genotipo2.length > 4) { return; }

          //   // const genDiv1 = genotipo1.slice(0, 1);
          //   // const genDiv2 = genotipo2.slice(0, 1);
          //   // const genDiv3 = genotipo1.slice(1, 2);
          //   // const genDiv4 = genotipo2.slice(1, 2);
          //   // const genDiv5 = genotipo1.slice(2, 3);
          //   // const genDiv6 = genotipo2.slice(2, 3);
          //   // const genDiv7 = genotipo1.slice(3, 4);
          //   // const genDiv8 = genotipo2.slice(3, 4);

          //   // let resultado: string[];
          //   // return resultado = [ 
          //   //   genDiv1 + genDiv3, 
          //   //   genDiv1 + genDiv4, 
          //   //   genDiv1 + genDiv5, 
          //   //   genDiv1 + genDiv6, 
          //   //   genDiv1 + genDiv7, 
          //   //   genDiv1 + genDiv8, 
          //   //   genDiv2 + genDiv3, 
          //   //   genDiv2 + genDiv4, 
          //   //   genDiv2 + genDiv5, 
          //   //   genDiv2 + genDiv6, 
          //   //   genDiv2 + genDiv7, 
          //   //   genDiv2 + genDiv8 
          //   // ];
          // }


          // // OK
          // float_t method_quantidade_de_conjuntos
          // (
          //   float_t n
          // )
          // {
          //   return 2 * n;
          // }


          // // OK
          // float_t method_regra_de_tres_composta
          // (
          //   float_t a, 
          //   float_t b, 
          //   float_t c, 
          //   float_t d, 
          //   float_t e, 
          //   float_t f, 
          //   float_t g, 
          //   char local_da_variavel
          // )
          // {
          //   if (local_da_variavel == 'a') { local_da_variavel = 'A'; }
          //   if (local_da_variavel == 'b') { local_da_variavel = 'B'; }
          //   if (local_da_variavel == 'c') { local_da_variavel = 'C'; }
          //   if (local_da_variavel == 'd') { local_da_variavel = 'D'; }
          //   if (local_da_variavel == 'e') { local_da_variavel = 'E'; }
          //   if (local_da_variavel == 'f') { local_da_variavel = 'F'; }
          //   if (local_da_variavel == 'g') { local_da_variavel = 'G'; }
          //   float_t resultado = 0.0;
          //   switch (local_da_variavel) {
          //     case 'A': resultado = a * b / c; break;
          //     case 'B': resultado = a * c / b; break;
          //     case 'C': resultado = b * c / a; break;
          //     case 'D': resultado = d * e / f; break;
          //     case 'E': resultado = d * f / e; break;
          //     case 'F': resultado = e * f / d; break;
          //     case 'G': resultado = g * e / f; break;
          //   }
          //   return resultado;
          // }


          // // OK
          // float_t method_regra_de_tres_simples
          // (
          //   float_t a, 
          //   float_t b, 
          //   float_t c, 
          //   char local_da_variavel
          // )
          // {
          //   if (local_da_variavel == 'a') { local_da_variavel = 'A'; }
          //   if (local_da_variavel == 'b') { local_da_variavel = 'B'; }
          //   if (local_da_variavel == 'c') { local_da_variavel = 'C'; }
          //   float_t resultado = 0.0;
          //   switch (local_da_variavel) {
          //     case 'A': resultado = a * b / c; break;
          //     case 'B': resultado = a * c / b; break;
          //     case 'C': resultado = b * c / a; break;
          //   }
          //   return resultado;
          // }


          // // OK
          // float_t method_relacao_de_euler
          // (
          //   float_t vertices, 
          //   float_t arestas, 
          //   float_t faces
          // )
          // {
          //   return (vertices - (arestas + faces)) - 2;
          // }


          // // OK
          // float_t method_rendimento
          // (
          //   float_t valor_parte, 
          //   float_t valor_total
          // )
          // {
          //   return method_divisao(valor_parte, valor_total);
          // }


          // // OK
          // const char* method_sinalizacao_octantes
          // (
          //   float_t x, 
          //   float_t y,
          //   float_t z
          // )
          // {
          //   const char* resultado;
          //   if(x > 0 && y > 0 && z > 0) { resultado = "1º."; }
          //   if(x < 0 && y > 0 && z > 0) { resultado = "2º."; }
          //   if(x < 0 && y < 0 && z > 0) { resultado = "3º."; }
          //   if(x > 0 && y < 0 && z > 0) { resultado = "4º."; }
          //   if(x > 0 && y > 0 && z < 0) { resultado = "5º."; }
          //   if(x < 0 && y > 0 && z < 0) { resultado = "6º."; }
          //   if(x < 0 && y < 0 && z < 0) { resultado = "7º."; }
          //   if(x > 0 && y < 0 && z < 0) { resultado = "8º."; }
          //   return resultado;
          // }


          // // OK
          // const char* method_sinalizacao_quadrantes
          // (
          //   float_t x, 
          //   float_t y
          // )
          // {
          //   const char* resultado;
          //   if(x > 0 && y > 0) { resultado = "1º."; }
          //   if(x < 0 && y > 0) { resultado = "2º."; }
          //   if(x < 0 && y < 0) { resultado = "3º."; }
          //   if(x > 0 && y < 0) { resultado = "4º."; }
          //   return resultado;
          // }


          // // Voltar aqui nessa funcionalidade, refatorar toda a lógica construída anteriormente
          // float_t method_sistema_de_equacoes
          // (
          //   char *expressao1, 
          //   char *expressao2
          // )
          // {
          //   // let resultado = "", verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\=)(\-)?([0-9]+)(\.[0-9]+)?)/gi;
          //   // if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) { return console.error("A expressão inserida não é válida"); }
          //   // let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi,
          //   //   pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi,
          //   //   pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;
          //   // let parteAA = expressao1.match(pegaParteA)?.toString(); 
          //   // let parteAB = expressao2.match(pegaParteA)?.toString();
          //   // let parteBA = expressao1.match(pegaParteB)?.toString();
          //   // let parteBB = expressao2.match(pegaParteB)?.toString();
          //   // let parteCA = expressao1.match(pegaParteC)?.toString(); 
          //   // let parteCB = expressao2.match(pegaParteC)?.toString();
          //   // resultado = `${parseFloat(parteAA+parteAB)}x${parseFloat(parteBA+parteBB)}y=${parseFloat(parteCA+parteCB)}`;
          //   // if (parseFloat(parteBA+parteBB) > 0) { 
          //   //   resultado = `${parseFloat(parteAA+parteAB)}x+${parseFloat(parteBA+parteBB)}y=${parseFloat(parteCA+parteCB)}`; 
          //   // }
          //   // return resultado;
          // }


          // // Voltar aqui nessa funcionalidade, refatorar toda a lógica construída anteriormente
          // float_t method_sistema_de_inequacoes
          // (
          //   char *expressao1, 
          //   char *expressao2
          // )
          // {
          //   // let resultado = "", verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\<\=)?(\>\=)?(\<)?(\>)?(\-)?([0-9]+)(\.[0-9]+)?)/gi;
          //   // if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) { return console.error("A expressão inserida não é válida"); }
          //   // let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi,
          //   //   pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi,
          //   //   pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;
          //   // let parteAA = expressao1.match(pegaParteA)?.toString();
          //   // let parteAB = expressao2.match(pegaParteA)?.toString();
          //   // let parteBA = expressao1.match(pegaParteB)?.toString();
          //   // let parteBB = expressao2.match(pegaParteB)?.toString();
          //   // let parteCA = expressao1.match(pegaParteC)?.toString();
          //   // let parteCB = expressao2.match(pegaParteC)?.toString();
          //   // resultado = `${parseFloat(parteAA + parteAB)}x${parseFloat(parteBA + parteBB)}y=${parseFloat(parteCA + parteCB)}`;
          //   // if (parseFloat(parteBA + parteBB) > 0) { 
          //   //   resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y=${parseFloat(parteCA + parteCB)}`;
          //   // }
          //   // if (parseFloat(parteAA + parteAB) < parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) < parseFloat(parteCA + parteCB)) { 
          //   //   resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y<${parseFloat(parteCA + parteCB)}`; 
          //   // }
          //   // if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB)) { 
          //   //   resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y>${parseFloat(parteCA + parteCB)}`; 
          //   // }
          //   // if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) - parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB)) { 
          //   //   resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y>${parseFloat(parteCA + parteCB)}`; 
          //   // }
          //   // if (parseFloat(parteAA + parteAB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) > parseFloat(parteCA + parteCB) && parseFloat(parteBA + parteBB) - parseFloat(parteAA + parteAB) < parseFloat(parteCA + parteCB)) { 
          //   //   resultado = `${parseFloat(parteAA + parteAB)}x+${parseFloat(parteBA + parteBB)}y<${parseFloat(parteCA + parteCB)}`; 
          //   // }
          //   // return resultado;
          // }


          // // Voltar aqui nessa funcionalidade, refatorar toda a lógica construída anteriormente
          // float_t method_sistemas_lineares
          // (
          //   char* expressoes[1000]
          // )
          // {
          //   // let resultado = [], expressaoPartida = [], verificacao = /(((\+)?(\-)?(\=)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi,
          //   //   verificacao2 = /(((\+)?(\-)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi;
          //   // let somatorio = [], aux = 0, calculo = 0;
          //   // for (let i = 0; i < expressoes.length; i++) {
          //   //   if (expressoes[i].match(verificacao) == null) { return console.error("A expressão inserida não é válida!"); }
          //   //   expressaoPartida.push(expressoes[i].match(verificacao2));
          //   // }
          //   // for (let i = 0; i < expressaoPartida.length; i++) {
          //   //   for (let h = 0; h < expressaoPartida[i].length; h++) {
          //   //     expressaoPartida[i][h] = parseFloat(expressaoPartida[i][h]);
          //   //   }
          //   // }
          //   // let x = 0;
          //   // while (x != expressaoPartida[0].length) {
          //   //   for (let w = 0; w < expressaoPartida.length; w++) {
          //   //     calculo = calculo + expressaoPartida[w][x];
          //   //   }
          //   //   somatorio.push(calculo);
          //   //   x++;
          //   // }
          //   // for (let q = 1; q < somatorio.length; q++) {
          //   //   if (q % 2 == 0) { resultado.push(somatorio[q] / somatorio[0]); }
          //   //   if (q % 2 == 1) { resultado.push((-1 * somatorio[q]) / somatorio[0]); }
          //   // }
          //   // return resultado;
          // }


          // // OK
          // float_t method_tempo
          // (
          //   float_t velocidade, 
          //   Delta espaco
          // )
          // {
          //   return (espaco.final - espaco.inicial) / velocidade;
          // }


          // // OK
          // float_t method_teorema_boltzmann
          // (
          //   float_t temperatura, 
          //   float_t cnste
          // )
          // {
          //   return cnste * (temperatura * temperatura * temperatura * temperatura);
          // }


          // // OK
          // float_t method_teorema_coulomb
          // (
          //   float_t corrente_eletrica, 
          //   float_t distancia
          // )
          // {
          //   return corrente_eletrica * distancia;
          // }


          // // Voltar aqui nessa funcionalidade, refatorar toda a lógica construída anteriormente
          // float_t method_teorema_girard
          // (
          //   char* espressao
          // )
          // {
          //   // let resultado: any, valores: any;
          //   // let verificacao = /(([0-9]+(\.[0-9]+)?)([a-zA-Z])?([0-9])?)((\+)?(\-)?)/gi;
          //   // let pegaTermosComIcognita = /([0-9]+(\.[0-9]+)?)([a-zA-Z])/gi;
          //   // let pegaTermosSemIcognita = /([0-9]+(\.[0-9]+)?)(\=)/gi;
          //   // let valoresConvertidos: any;
          //   // if (verificacao == null) { return console.error("Expressão Adicionada é Inválida ou está incorreta!"); }
          //   // valores.push(expressao.match(pegaTermosComIcognita));
          //   // if(expressao.match(pegaTermosSemIcognita) != null) { valores.push(expressao.match(pegaTermosSemIcognita)); }
          //   // for (let i = 0; i < valores[0].length; i++) {
          //   //   valores[0][i] = parseFloat(valores[0][i]);
          //   //   valoresConvertidos.push(valores[0][i]);
          //   // }
          //   // valores[1] = parseFloat(valores[1]);
          //   // valoresConvertidos.push(valores[1]);
          //   // for (let i = 1; i <= valoresConvertidos.length - 1; i++) {
          //   //   let verificadorSinal = i % 2;
          //   //   if (verificadorSinal == 0) { resultado.push(valoresConvertidos[i] / valoresConvertidos[0]); }
          //   //   if (verificadorSinal == 1) { resultado.push(-1 * (valoresConvertidos[i] / valoresConvertidos[0])); }
          //   // }
          //   // return resultado;
          // }


          // // OK
          // float_t method_teorema_pascal
          // (
          //   float_t forca1, 
          //   float_t forca2, 
          //   float_t area1, 
          //   float_t area2
          // )
          // {
          //   if(area1 == 0) return (forca1 * area2) / forca2;
          //   if(area2 == 0) return (forca2 * area1) / forca1;
          //   if(forca1 == 0) return (area1 * forca2) / area2;
          //   if(forca2 == 0) return (area2 * forca1) / area1;
          // }


          // // OK
          // float_t method_teorema_pitagoras_a_n
          // (
          //   float_t a, 
          //   float_t n
          // )
          // {
          //   return method_raiz_quadrada(a * n);
          // }


          // // OK
          // float_t method_teorema_pitagoras_b_c_h
          // (
          //   float_t b, 
          //   float_t c, 
          //   float_t h
          // )
          // {
          //   return (b * c) / h;
          // }


          // // OK
          // float_t method_teorema_pitagoras_classico
          // (
          //   float_t a, 
          //   float_t b
          // )
          // {
          //   return method_raiz_quadrada(((a * a) + (b * b)));
          // }


          // // OK
          // float_t method_teorema_pitagoras_m_n
          // (
          //   float_t m, 
          //   float_t n
          // )
          // {
          //   return method_raiz_quadrada(m * n);  
          // }


          // // OK
          // float_t method_teorema_de_plank
          // (
          //   float_t energia, 
          //   float_t cnste
          // )
          // {
          //   return cnste * (energia * energia);
          // }


          // float_t method_teorema_stevin
          // (
          //   float_t densidade, 
          //   float_t gravidade, 
          //   Delta altura
          // )
          // {
          //   return densidade * gravidade * (altura.final - altura.inicial);
          // }


          // // OK
          // float_t method_teorema_stirling
          // (
          //   float_t x
          // )
          // {
          //   return (method_logaritmo_base_10(x) * x) / x;
          // }


          // // OK
          // float_t method_teorema_tales_de_mileto
          // (
          //   float_t n1, 
          //   float_t n2, 
          //   float_t n3
          // )
          // {
          //   return ( n2 * n3 ) / n1;
          // }


          // // OK
          // float_t method_titulacao
          // (
          //   float_t massa_base, 
          //   float_t massa_acido, 
          //   float_t volume_base, 
          //   float_t volume_acido
          // )
          // {
          //   if(massa_acido == 0) return massa_base * volume_base / volume_acido;
          //   if(massa_base == 0) return massa_acido * volume_acido / volume_base;
          //   if(volume_acido == 0) return massa_base * volume_base / massa_acido;
          //   if(volume_base == 0) return massa_acido * volume_acido / massa_base;
          // }


          // // OK
          // float_t method_torricelli_mcuv
          // (
          //   float_t velocidade_angular_inicial, 
          //   float_t aceleracao_angular, 
          //   Delta deslocamento_angular
          // )
          // {
          //     return method_raiz_quadrada(velocidade_angular_inicial + 2 * aceleracao_angular * (deslocamento_angular.final - deslocamento_angular.inicial));
          // }


          // // OK
          // float_t method_trabalho
          // (
          //   float_t massa, 
          //   float_t gravidade, 
          //   float_t altura
          // )
          // {
          //   return massa * gravidade * altura;
          // }


          // // OK
          // // Rever essa função
          // float_t method_valor_maximo
          // (
          //   float_t x[10000]
          // )
          // {
          //   float_t max = x[0];
          //   for (int i = 1; i < size_t(x); i++) {
          //     if (x[i] > max) { max = x[i]; }
          //   }
          //   return max;
          // }


          // float_t method_valor_minimo
          // (
          //   float_t x[10000]
          // )
          // {
          //   float_t min = x[0];
          //   for (int i = 1; i < size_t(x); i++) {
          //     if (x[i] < min) { min = x[i]; }
          //   }
          //   return min;
          // }


          // // OK
          // float_t method_velocidade_angular_mcu
          // (
          //   Delta angulo, 
          //   Delta tempo
          // )
          // {
          //   return (angulo.final - angulo.inicial) / (tempo.final - tempo.inicial);
          // }


          // // OK
          // float_t method_velocidade_linear_mcu
          // (
          //   float_t frequencia, 
          //   float_t raio
          // )
          // {
          //   (2 * cnst_pi * frequencia) * raio;
          // }


          // // OK
          // float_t method_velocidade
          // (
          //   Delta tempo, 
          //   Delta espaco
          // )
          // {
          //   return (espaco.final - espaco.inicial) / (tempo.final - tempo.inicial);
          // }


          // // OK
          // float_t method_volume_cilindro
          // (
          //   float_t raio, 
          //   float_t altura
          // )
          // {
          //   return cnst_pi * (raio * raio) * altura;
          // }


          // // OK
          // float_t method_volume_cone
          // (
          //   float_t raio, 
          //   float_t altura
          // )
          // {
          //   return (cnst_pi * (raio * raio) * altura) / 3;
          // }


          // // OK
          // float_t method_volume_cubo
          // (
          //   float_t aresta
          // )
          // {
          //   return aresta * aresta * aresta;
          // }


          // // OK
          // float_t method_volume_dodecaedro
          // (
          //   float_t aresta
          // )
          // {
          //   return (aresta * aresta * aresta) / 12;
          // }


          // // OK
          // float_t method_volume_esfera
          // (
          //   float_t raio
          // )
          // {
          //   return (4 * cnst_pi * (raio * raio * raio)) / 3;
          // }


          // // OK
          // float_t method_volume_hexaedro
          // (
          //   float_t aresta
          // )
          // {
          //   return (aresta * aresta * aresta) / 6;
          // }


          // // OK
          // float_t method_volume_icosaedro
          // (
          //   float_t aresta
          // )
          // {
          //   return (aresta * aresta * aresta) / 20;
          // }


          // // OK
          // float_t method_volume_octaedro
          // (
          //   float_t aresta
          // )
          // {
          //   return (aresta * aresta * aresta) / 8;
          // }


          // // OK
          // float_t method_volume_paralelogramo
          // (
          //   float_t comprimento, 
          //   float_t largura, 
          //   float_t altura
          // )
          // {
          //   return comprimento * largura * altura;
          // }


          // // OK
          // float_t method_volume_piramide
          // (
          //   float_t area_base, 
          //   float_t altura
          // )
          // {
          //   return area_base * altura / 3;
          // }


          // // OK
          // float_t method_volume_poligono_formato_lozango
          // (
          //   float_t diagonal_maior, 
          //   float_t diagonal_menor, 
          //   float_t altura
          // )
          // {
          //   return ((diagonal_maior * diagonal_menor) / 2 ) * altura;
          // }


          // // OK
          // float_t method_volume_poligono_formato_trapezio
          // (
          //   float_t base_maior, 
          //   float_t base_menor, 
          //   float_t altura
          // )
          // {
          //   return (base_maior + base_menor * altura) / 2;
          // }


          // // OK
          // float_t method_volume_prisma
          // (
          //   float_t area, 
          //   float_t altura
          // )
          // {
          //   return area * altura;
          // }


          // // Métodos em análise para aplicação e execução futura
          // // Em prótese de testes, não foram aplicados
          // float_t method_volume_prisma_trapezoidal(float_t area_base, float_t altura){}
          // float_t method_volume_prisma_triangulo(float_t area_base, float_t altura){}
          // float_t method_volume_prisma_hexagonal(float_t area_base, float_t altura){}
          // float_t method_volume_prisma_pentagonal(float_t area_base, float_t altura){}
          // float_t method_volume_piramide_trapezoidal(float_t area_base, float_t altura){}
          // float_t method_volume_piramide_triangulo(float_t area_base, float_t altura){}
          // float_t method_volume_piramide_hexagonal(float_t area_base, float_t altura){}
          // float_t method_volume_piramide_pentagonal(float_t area_base, float_t altura){}
          // float_t method_volume_piramide_quadrangular(float_t area_base, float_t altura){}
          // float_t method_volume_piramide_retangular(float_t area_base, float_t altura){}
          // float_t method_volume_piramide_rhomboidal(float_t area_base, float_t altura){}


          // // OK
          // float_t method_volume_tetraedro
          // (
          //   float_t aresta
          // )
          // {
          //   return (aresta * aresta * aresta) / 4;
          // }

        public: 
          f32t Avogadro= cnst_avogadro;

          f32t CbrtOf01_02= cnst_cbrt_of01_02;

          f32t CbrtOf01_04= cnst_cbrt_of01_04;

          f32t CbrtOf01_06= cnst_cbrt_of01_06;

          f32t CbrtOf01_08= cnst_cbrt_of01_08;

          f32t CbrtOf01= cnst_cbrt_of01;

          f32t CbrtOf02= cnst_cbrt_of02;

          f32t CbrtOf03= cnst_cbrt_of03;

          f32t CbrtOf04= cnst_cbrt_of04;

          f32t CbrtOf05= cnst_cbrt_of05;

          f32t CbrtOf06= cnst_cbrt_of06;

          f32t CbrtOf07= cnst_cbrt_of07;

          f32t CbrtOf08= cnst_cbrt_of08;

          f32t CbrtOf09= cnst_cbrt_of09;

          f32t CbrtOf10= cnst_cbrt_of10;

          f32t CbrtOf11= cnst_cbrt_of11;

          f32t CbrtOf12= cnst_cbrt_of12;

          f32t Coulomb= cnst_coulomb;

          f32t Euler= cnst_euler;

          f32t Euler2= cnst_euler2;

          f32t Gravitation= cnst_gravitation;

          f32t Logarithm2= cnst_logarithm2;

          f32t Logarithm2e= cnst_logarithm2e;

          f32t Logarithm10= cnst_logarithm10;

          f32t Logarithm10e= cnst_logarithm10e;

          f32t MaxValue= cnst_maxvalue;

          f32t MinValue= cnst_minvalue;

          f32t Newton= cnst_newton;

          f32t Pi= cnst_pi;

          f32t Plank= cnst_plank;

          f32t SqrtOf01_02= cnst_sqrt_of01_02;

          f32t SqrtOf01_04= cnst_sqrt_of01_04;

          f32t SqrtOf01_06= cnst_sqrt_of01_06;

          f32t SqrtOf01_08= cnst_sqrt_of01_08;

          f32t SqrtOf01= cnst_sqrt_of01;

          f32t SqrtOf02= cnst_sqrt_of02;

          f32t SqrtOf03= cnst_sqrt_of03;

          f32t SqrtOf04= cnst_sqrt_of04;

          f32t SqrtOf05= cnst_sqrt_of05;

          f32t SqrtOf06= cnst_sqrt_of06;

          f32t SqrtOf07= cnst_sqrt_of07;

          f32t SqrtOf08= cnst_sqrt_of08;

          f32t SqrtOf09= cnst_sqrt_of09;

          f32t SqrtOf10= cnst_sqrt_of10;

          f32t SqrtOf11= cnst_sqrt_of11;

          f32t SqrtOf12= cnst_sqrt_of12;

          f32t Tesla= cnst_tesla;

          f32t Zero= cnst_zero;


          f32t soma(f32t x, f32t y)
          {return Comum().mtd_soma(x, y);}

          f32t subtracao(f32t x, f32t y)
          {return Comum().mtd_subtracao(x, y);}

          f32t multiplicacao(f32t x, f32t y)
          {return Comum().mtd_multiplicacao(x, y);}

          f32t divisao(f32t x, f32t y)
          {return Comum().mtd_divisao(x, y);}

          i64t resto(i64t x, i64t y)
          {return Comum().mtd_resto(x, y);}

          f32t potencia(f32t x, f32t y)
          {return Comum().mtd_potencia(x, y);}

          f32t potencia_de_potencia(f32t x, f32t y, f32t z)
          {return Comum().mtd_potencia_de_potencia(x, y, z);}

          f32t raiz_quadrada(f32t x)
          {return Comum().mtd_raiz_quadrada(x);}

          f32t raiz_cubica(f32t x)
          {return Comum().mtd_raiz_cubica(x);}

          f32t raiz_quarto_grau(f32t x)
          {return Cientificos().mtd_raiz_quarto_grau(x);}

          f32t raiz_quinto_grau(f32t x)
          {return Cientificos().mtd_raiz_quinto_grau(x);}

          f32t raiz_sexto_grau(f32t x)
          {return Cientificos().mtd_raiz_sexto_grau(x);}

          f32t raiz_setimo_grau(f32t x)
          {return Cientificos().mtd_raiz_setimo_grau(x);}

          f32t raiz_oitavo_grau(f32t x)
          {return Cientificos().mtd_raiz_oitavo_grau(x);}

          f32t raiz_nono_grau(f32t x)
          {return Cientificos().mtd_raiz_nono_grau(x);}

          f32t raiz_decimo_grau(f32t x)
          {return Cientificos().mtd_raiz_decimo_grau(x);}

          f32t seno(f32t x)
          {return Cientificos().mtd_seno(x);}

          f32t cosseno(f32t x)
          {return Cientificos().mtd_cosseno(x);}

          f32t tangente(f32t x)
          {return Cientificos().mtd_tangente(x);}

          f32t cotangente(f32t x)
          {return Cientificos().mtd_cotangente(x);}

          f32t secante(f32t x)
          {return Cientificos().mtd_secante(x);}

          f32t cosecante(f32t x)
          {return Cientificos().mtd_cosecante(x);}

          f32t seno_hiperbolico(f32t x)
          {return Cientificos().mtd_seno_hiperbolico(x);}

          f32t cosseno_hiperbolico(f32t x)
          {return Cientificos().mtd_cosseno_hiperbolico(x);}

          f32t tangente_hiperbolica(f32t x)
          {return Cientificos().mtd_tangente_hiperbolica(x);}

          f32t cotangente_hiperbolica(f32t x)
          {return Cientificos().mtd_cotangente_hiperbolica(x);}

          f32t secante_hiperbolica(f32t x)
          {return Cientificos().mtd_secante_hiperbolica(x);}

          f32t cosecante_hiperbolica(f32t x)
          {return Cientificos().mtd_cosecante_hiperbolica(x);}

      };


    }


  }


}

int main(void)
{
  printf("%f\n", Wsf::Sys::Libs::Aritmeticos().Avogadro);
  printf("%d\n", Wsf::Sys::Libs::Aritmeticos().potencia(5, 2));
  printf("%d\n", Wsf::Sys::Libs::Aritmeticos().potencia_de_potencia(5, 2, 2));
  Wsf::Sys::Libs::Aritmeticos().Avogadro;

  return 0;
}
