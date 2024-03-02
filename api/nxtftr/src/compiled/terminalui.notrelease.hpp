#ifndef TERMINALUI_NOTRELEASE_HPP
#define TERMINALUI_NOTRELEASE_HPP

#include "defs/wtsfy-tipos.hpp"

namespace Wtsfy
{

  namespace Alpha
  {

    class UICLI_Formatter
    {

      public:
      const chrt* escc_nl = "\n";
      const chrt* escc_tb = "\t";
      const chrt* escc_cr = "\r";
      const chrt* escc_bs = "\b";
      const chrt* escc_nl = "\0";
      const chrt* escc_ff = "\f";
      const chrt* escc_vt = "\v";
      const chrt* escc_bs = "\\";
      const chrt* escc_sq = "\'";
      const chrt* escc_dq = "\"";

      string format_text(
        string conteudo, 
        chrt modo[2]
      ) { }
      
      string format_4b3bit_color_text(
        string conteudo, 
        i8t cor, 
        chrt modo[2]
      ) { }
      
      string format_8_24bit_color_text(
        string conteudo, 
        i8t cor_vrm, 
        i8t cor_vrd, 
        i8t cor_azl, 
        chrt modo[2]
      ) { }
      
      string format_4b3bit_bkgd_color_text(
        string conteudo, 
        i8t cor_vrm, 
        i8t cor_vrd, 
        i8t azl, 
        chrt modo[2]
      ) { }
      
      string format_8_24bit_bkgd_color_text(
        string conteudo, 
        i8t cor_vrm, 
        i8t cor_vrd, 
        i8t cor_azl, 
        chrt modo[2]
      ) { }

    };

  }

}

#endif // TERMINALUI_NOTRELEASE_HPP
