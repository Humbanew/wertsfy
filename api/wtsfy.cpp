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
#include "libs/wtsfy-bibliotecas.hpp"

// Ainda em construção.
int cli(int argc, char *argv[]) 
{

  if(
    std::string(argv[1]) == "wtsfy\0-v"
  ) {
    // ajustar ainda os outputs
    cout <<
      "\n\x1b[34;1mHumbanew Wertsfy SDK\x1b[0m\n"
      "\x1b[1mVersao 2.0.0\x1b[0m\n\n"
      "Biblioteca 'Aritmeticos' ainda sem comandos disponiveis.\n"
      "Biblioteca 'Colorama' ainda sem comandos disponiveis.\n"
      "Recursos de acessibilidade e linguagem ainda nao adotados.\n"
      "Demonstracao grafica de recursos criados ainda em desenvolvimento.\n"
      "Conjunto de ferramentas com interface grafica nao implementadas.\n\n"
    << endl;
  }
  else {return 1;}

  return 0;

}

int main(void)
{ 
  Wtsfy::bibliotecas::aritmeticos;
  Wtsfy::bibliotecas::aritmeticos_classic;
  Wtsfy::bibliotecas::colorama;
  return 0;   
}
