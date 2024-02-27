#ifndef LAYOUTS_NOTRELEASE_HPP
#define LAYOUTS_NOTRELEASE_HPP

#include <cstdio>
#include <cstdlib>
#include <iostream>
#include "defs/wtsfy-tipos.hpp"

namespace Wtsfy 
{ 
  namespace Alpha 
  { 

    class UICLI_Layouts
    {
      
      // MODELOS LEGADO
      const char* legado_desenhosoma[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒     ║     ▒║"},
        { "║▒   ══╫══   ▒║"},
        { "║▒     ║     ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhosubtracao[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒           ▒║"},
        { "║▒   ═════   ▒║"},
        { "║▒           ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhomultiplicacao[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒           ▒║"},
        { "║▒    ═╫═    ▒║"},
        { "║▒           ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };
      
      const char* legado_desenhodivisao[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒      ╫═   ▒║"},
        { "║▒    ═╫═    ▒║"},
        { "║▒   ═╫      ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhopotenciacao[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒     ═     ▒║"},
        { "║▒    ═ ═    ▒║"},
        { "║▒   ═   ═   ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };


      const char* legado_desenhoraizquadrada[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒     ═     ▒║"},
        { "║▒══  ═ ═    ▒║"},
        { "║▒  ╫╫   ═   ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhoraizcubica[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒   ═ ═     ▒║"},
        { "║▒══  ═ ═    ▒║"},
        { "║▒  ╫╫   ═   ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhopotdepot[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒  ═     ═  ▒║"},
        { "║▒ ═ ═   ═ ═ ▒║"},
        { "║▒═   ═ ═   ═▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhomediarit[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒  ══   ══  ▒║"},
        { "║▒ ═════════ ▒║"},
        { "║▒    ═ ═    ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };


      const char* design_component[8][20];
      typedef decltype(design_component) UICLIElement;

      public:
      vdt _constructor(UICLIElement x) 
      {


        UICLIElement blank_design = {

          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"}

        };


      }

    };


  } 

}

#endif // LAYOUTS_NOTRELEASE_HPP
