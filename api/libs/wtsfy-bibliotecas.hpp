/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

#ifndef WTSFY_BIBLIOTECAS_HPP
#define WTSFY_BIBLIOTECAS_HPP

#include "./aritmeticos/core-arithm.hpp"

namespace wtsfy 
{

  namespace sistema
  {

    namespace bibliotecas
    {

      Aritmeticos aritmeticos;

      Aritmeticos2020Version aritmeticos_classic;

    }

  }

}

namespace Wtsfy = wtsfy::sistema;

#endif // WTSFY_BIBLIOTECAS_HPP
