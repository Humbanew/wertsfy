#ifndef TERMINALUI_NOTRELEASE_HPP
#define TERMINALUI_NOTRELEASE_HPP

#include <string>
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
      )
      { 
        if(modo == "fmt-neg") {
          return "\x1b[01m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-faint") {
          return "\x1b[02m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-italic") {
          return "\x1b[03m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-underline") {
          return "\x1b[04m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-slowblink") {
          return "\x1b[05m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-rapidblink") {
          return "\x1b[06m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-reverse") {
          return "\x1b[07m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-conceal") {
          return "\x1b[08m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-crossedout") {
          return "\x1b[09m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-defaultfont") {
          return "\x1b[10m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-altfont1") {
          return "\x1b[11m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-altfont2") {
          return "\x1b[12m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-altfont3") {
          return "\x1b[13m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-altfont4") {
          return "\x1b[14m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-altfont5") {
          return "\x1b[15m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-altfont6") {
          return "\x1b[16m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-altfont7") {
          return "\x1b[17m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-altfont8") {
          return "\x1b[18m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-altfont9") {
          return "\x1b[19m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-fraktur") {
          return "\x1b[20m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-doublyunderline") {
          return "\x1b[21m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-normalintensity") {
          return "\x1b[22m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-notitalic") {
          return "\x1b[23m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-notunderline") {
          return "\x1b[24m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-blinkoff") {
          return "\x1b[25m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-spacing") {
          return "\x1b[26m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-reverseoff") {
          return "\x1b[27m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-concealoff") {
          return "\x1b[28m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-notcrossed") {
          return "\x1b[29m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-propositalspacing") {
          return "\x1b[50m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-framed") {
          return "\x1b[51m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-encircled") {
          return "\x1b[52m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-overlined") {
          return "\x1b[53m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-notencircled") {
          return "\x1b[54m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-notoverlined") {
          return "\x1b[55m" + conteudo + "\x1b[00m";
        }

        throw "Invalid mode";
      }

      string format_underline_text_colored(
        string conteudo, 
        i8t rgb_red, 
        i8t rgb_green,
        i8t rgb_blue,
        i8t type=2||5
      ) 
      {
        if(type != 2 || type != 5) {
          throw "Invalid type";
        }

        return "\x1b[58" + std::to_string(type) + ";" + std::to_string(rgb_red) + ";" + std::to_string(rgb_green) + ";" + std::to_string(rgb_blue) + "m" + conteudo + "\x1b[00m";
      }

      string format_default_underline_text(string conteudo) {
        return "\x1b[59m" + conteudo + "\x1b[00m";
      }

      string format_ideograma(string conteudo) {
        return "\x1b[60m" + conteudo + "\x1b[00m";
      }

      string format_ideograma_duplo(string conteudo) {
        return "\x1b[61m" + conteudo + "\x1b[00m";
      }

      string format_ideograma_overline(string conteudo) {
        return "\x1b[62m" + conteudo + "\x1b[00m";
      }

      string format_ideograma_overline_duplo(string conteudo) {
        return "\x1b[63m" + conteudo + "\x1b[00m";
      }

      string format_ideograma_stress(string conteudo) {
        return "\x1b[64m" + conteudo + "\x1b[00m";
      }

      string format_no_ideograma_atributes(string conteudo) {
        return "\x1b[65m" + conteudo + "\x1b[00m";
      }

      string format_superscript(string conteudo) {
        return "\x1b[73m" + conteudo + "\x1b[00m";
      }

      string format_subscript(string conteudo) {
        return "\x1b[74m" + conteudo + "\x1b[00m";
      }

      string format_superscript_subscript(string conteudo) {
        return "\x1b[75m" + conteudo + "\x1b[00m";
      }

      string format_text_3b4bit_color(
        string conteudo, 
        chrt modo[2]
      ) 
      {
        if(modo == "fmt-preto") {
          return "\x1b[30m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-vermelho") {
          return "\x1b[31m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-verde") {
          return "\x1b[32m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-amarelo") {
          return "\x1b[33m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-azul") {
          return "\x1b[34m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-roxo") {
          return "\x1b[35m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-ciano") {
          return "\x1b[36m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-cinza") {
          return "\x1b[37m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-cinza_claro") {
          return "\x1b[90m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-vermelho_claro") {
          return "\x1b[91m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-verde_claro") {
          return "\x1b[92m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-amarelo_claro") {
          return "\x1b[93m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-azul_claro") {
          return "\x1b[94m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-roxo_claro") {
          return "\x1b[95m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-ciano_claro") {
          return "\x1b[96m" + conteudo + "\x1b[00m";
        }

        if(modo == "fmt-branco") {
          return "\x1b[97m" + conteudo + "\x1b[00m";
        }

        throw "Invalid mode";
      }

      string format_text_8bit_color(
        string conteudo, 
        i8t r, 
        i8t g,
        i8t b
      ) 
      {
        return "\x1b[38;5;" + std::to_string(r) + ";" + std::to_string(g) + ";" + std::to_string(b) + "m" + conteudo + "\x1b[00m";
      }

      string format_fundo_8bit_color(
        string conteudo, 
        i8t r, 
        i8t g,
        i8t b
      ) 
      {
        return "\x1b[48;5;" + std::to_string(r) + ";" + std::to_string(g) + ";" + std::to_string(b) + "m" + conteudo + "\x1b[00m";
      }
      
      string format_text_24bit_color(
        string conteudo, 
        i8t rgb_red, 
        i8t rgb_green,
        i8t rgb_blue
      ) 
      {
        return "\x1b[38;2;" + std::to_string(rgb_red) + ";" + std::to_string(rgb_green) + ";" + std::to_string(rgb_blue) + "m" + conteudo + "\x1b[00m";
      }

      string format_fundo_24bit_color(
        string conteudo, 
        i8t rgb_red, 
        i8t rgb_green,
        i8t rgb_blue
      ) 
      {
        return "\x1b[48;2;" + std::to_string(rgb_red) + ";" + std::to_string(rgb_green) + ";" + std::to_string(rgb_blue) + "m" + conteudo + "\x1b[00m";
      }

    };

  }

}

#endif // TERMINALUI_NOTRELEASE_HPP
