/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

#include <cstdio>
#include <cstdlib>
#include <iostream>
#include "defs/wtsfy-tipos.hpp"

int main(int argc, char *argv[]) 
{

  if(
    (std::string(argv[1]) == "wtsfy") ||
    (std::string(argv[1]) == "wtsfy -h")
  ) {
    printf("\x1b[32mHN Wertsfy - 2021-2024\x1b[0m\n");
  }
  else {return 1;}

  return 0;

}
