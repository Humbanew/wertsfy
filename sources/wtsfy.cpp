/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

#include <iostream>
#include "wtsfy-types.hpp"

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

          } comum;

          struct Cientificos { };
          struct Supremos { };
          struct Ultimate { };
        
        } categorias;

        categorias::comum Comum;
        

      };

      class Colorama
      { };

    } 
    

  } 
    

}


int main(void) { return 0; }
int cli(int argc, char* argv[]) { }
int test() { wtsfy::sistema::bibliotecas::Aritmeticos(); }
