/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

#ifndef WTSFY_VERSAO_HPP
#define WTSFY_VERSAO_HPP

#include <string>

#define WTSFY_VRS_MAJOR 2
#define WTSFY_VRS_MINOR 0
#define WTSFY_VRS_PATCH 0
#define WTSFY_VRS_BUILD 0

#define WTSFY_VRS_OVERCLOCKED_MAJOR 0
#define WTSFY_VRS_OVERCLOCKED_MINOR 0
#define WTSFY_VRS_OVERCLOCKED_PATCH 1
#define WTSFY_VRS_OVERCLOCKED_BUILD 0

std::string wtsfy_versao()
{

  return std::to_string(WTSFY_VRS_MAJOR) + "." + 
         std::to_string(WTSFY_VRS_MINOR) + "." + 
         std::to_string(WTSFY_VRS_PATCH) + "." + 
         std::to_string(WTSFY_VRS_BUILD);
  
}


#endif // WTSFY_VERSAO_HPP
