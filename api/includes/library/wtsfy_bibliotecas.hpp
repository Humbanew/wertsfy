/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

#ifndef WTSFY_BIBLIOTECAS_HPP
#define WTSFY_BIBLIOTECAS_HPP

#include "components/aritmeticos/hub_aritmeticos.hpp"
#include "components/colorama/hub_colorama.hpp"

namespace Wtsfy 
{ 

  namespace Sistema
  {

    namespace Nucleo 
    {

      namespace Bibliotecas 
      { 

        Aritmeticos aritmeticos;
        
        Aritmeticos2020Version aritmeticos2020;
        
        Colorama colorama;

      }


    }


  }


}

#endif // WTSFY_BIBLIOTECAS_HPP
