/**
 * @author Humbanew Project ©️ 2024. Todos os direitos reservados.
 * @copyright Humbanew Wertsfy ©️ 2021-2024.
 * @copyright Humbanew Calculator ©️ 2019-2024. 
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

#include <iostream>
#include "wtsfy-types.hpp"
#include "wtsfy-infra.hpp"

namespace wtsfy 
{ 
  
  namespace sistema 
  { 
    
    namespace bibliotecas 
    { 

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

        typedef struct Categorias 
        { 
          
          typedef struct Comum 
          { 

            f32t soma
            (
              f32t x, 
              f32t y
            )
            {
              return x + y;
            }

            f32t subtracao
            (
              f32t x, 
              f32t y
            )
            {
              return x - y;
            }

            f32t multiplicacao
            (
              f32t x, 
              f32t y
            )
            {
              return x * y;
            }

            f32t divisao
            (
              f32t x, 
              f32t y
            )
            {
              return x / y;
            }

            i64t resto
            (
              i64t x, 
              i64t y
            )
            {
              return x % y;
            }

            f32t potencia
            (
              f32t x, 
              f32t y
            ) 
            {
              return pow(x, y);
            }

            i64t potencia_de_potencia
            (
              i64t x, 
              i64t y, 
              i64t z
            ) 
            {
              return pow(pow(x, y), z);
            }

            f32t raiz_quadrada
            (
              f32t x
            ) 
            { 
              return potencia(x, 1 / 2); 
            }
            
            f32t raiz_cubica
            (
              f32t x
            ) 
            { 
              return potencia(x, 1 / 3); 
            }

          };

          struct Cientificos
          { 
            
            f32t raiz_quarto_grau
            (
              f32t x
            )
            {
              return Comum().potencia(x, 1 / 4);
            }

            f32t raiz_quinto_grau
            (
              f32t x
            )
            {
              return Comum().potencia(x, 1 / 5);
            }

            f32t raiz_sexto_grau
            (
              f32t x
            )
            {
              return Comum().potencia(x, 1 / 6);
            }

            f32t raiz_setimo_grau
            (
              f32t x
            )
            {
              return Comum().potencia(x, 1 / 7);
            }

            f32t raiz_oitavo_grau
            (
              f32t x
            )
            {
              return Comum().potencia(x, 1 / 8);
            }
            
            f32t raiz_nono_grau
            (
              f32t x
            )
            {
              return Comum().potencia(x, 1 / 9);
            }

            f32t raiz_decimo_grau
            (
              f32t x
            )
            {
              return Comum().potencia(x, 1 / 10);
            }

            f32t seno
            (
              f32t x
            )
            {
              return (((2 * Aritmeticos().PI * 1) / 4) / 90) * x;
            }

            f32t seno_hiperbolico
            (
              f32t x
            ){
              return 1 / (((2 * Aritmeticos().PI * 1) / 4) / 90) * x;
            }

            f32t cosseno
            (
              f32t x
            )
            {
              return (-1 * (((2 * Aritmeticos().PI * 1) / 4) / 90)) * x; 
            }

            f32t cosseno_hiperbolico
            (
              f32t x
            )
            {
              return 1 / (-1 * ((2 * Aritmeticos().PI * 1) / 4) / 90) * x; 
            }

            f32t tangente
            (
              f32t x
            )
            {
              return seno(x) / cosseno(x);
            }

            f32t tangente_hiperbolica
            (
              f32t x
            )
            {
              return 1 / (seno(x) / cosseno(x));
            }

            f32t secante
            (
              f32t x
            )
            {
              return 1 / cosseno(x);
            }

            f32t secante_hiperbolica
            (
              f32t x
            )
            {
              return 1 / (1 / cosseno(x)); 
            }

            f32t cosecante
            (
              f32t x
            )
            {
              return 1 / seno(x);  
            }

            f32t cosecante_hiperbolica
            (
              f32t x
            )
            {
              return 1 / (1 / seno(x));
            }
          
            f32t cotangente
            (
              f32t x
            )
            {
              return 1 / (cosseno(x) / seno(x));
            }

            f32t cotangente_hiperbolica
            (
              f32t x
            )
            {
              return 1 / (1 / (cosseno(x) / seno(x)));
            }

            f32t arco_seno
            (
              f32t x
            )
            {
              return (((2 * Aritmeticos().PI * 1) / 4) / 90) * x;
            }

            f32t arco_seno_hiperbolico
            (
              f32t x
            ) 
            {
              return 1 / ((((2 * Aritmeticos().PI * 1) / 4) / 90) * x);
            }

            f32t arco_cosseno
            (
              f32t x
            ) 
            {
              return -1 * (((2 * Aritmeticos().PI * 1) / 4) / 90) * x;
            }

            f32t arco_cosseno_hiperbolico
            (
              f32t x
            ) 
            {
              return 1 / ((-1 * ((2 * Aritmeticos().PI * 1) / 4) / 90) * x);
            }

            f32t arco_tangente
            (
              f32t x
            ) 
            {
              return arco_seno(x) / arco_cosseno(x);
            }

            f32t arco_tangente_hiperbolica
            (
              f32t x
            ) 
            {
              return arco_seno_hiperbolico(x) / arco_cosseno_hiperbolico(x);
            }

            f32t arco_cotangente_hiperbolica
            (
              f32t x
            ) 
            {
              return 1 / arco_tangente_hiperbolica(x);
            }

            f32t arco_cotangente
            (
              f32t x
            ) 
            {
              return 1 / arco_tangente(x);  
            }

            f32t arco_secante_hiperbolica
            (
              f32t x
            ) 
            {
              return 1 / arco_cosseno_hiperbolico(x);
            }

            f32t arco_secante
            (
              f32t x
            )
            {
              return 1 / arco_cosseno(x);
            }

          
            f32t arco_cosecante_hiperbolica
            (
              f32t x
            ) 
            {
              return 1 / arco_seno_hiperbolico(x);
            }

            f32t arco_cosecante
            (
              f32t x
            ) 
            {
              return 1 / arco_seno(x); 
            }

            // Logaritmos
            // Exponenciais

          };

          struct Supremos
          { 

            // Antilogaritmos
            // Cologaritmos
            // Expressoes Matematicas
            // Expressoes Fisicas
            // Expressoes Quimicas
            // Expressoes Biologicas
            // Outros tipos de Equacoes

          };
        
        } categorias;

        /** @brief
         * Grupo de funcionalidades aritméticas comuns.
         */
        categorias::Comum Comum;

        /** @brief
         * Grupo de funcionalidades aritméticas científicas.
         */
        categorias::Cientificos Cientificos;

        /** @brief
         * Grupo de funcionalidades aritméticas supremas.
         */
        categorias::Supremos Supremos;

      };

      class Colorama { };
      class Karzok { };
      class Draftnecttion { };
      class Paradoxical { struct Node { }; struct V8 { }; };

    } 
    

  } 
    

}


int main(void) { return 0; }
int cli(int argc, char* argv[]) { }
int api(int* endpoints) { }
int test() 
{ 
  wtsfy::sistema::bibliotecas::Aritmeticos(); 
}
