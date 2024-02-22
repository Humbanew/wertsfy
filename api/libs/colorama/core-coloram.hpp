/**
 * @author Humbanew Project ©️ 2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

#ifndef CORE_COLORAMA_HPP
#define CORE_COLORAMA_HPP

#include "../../defs/wtsfy-tipos.hpp"

#include "componentes/html/red/indianred.hpp"
#include "componentes/html/red/lightcoral.hpp"
#include "componentes/html/red/salmon.hpp"
#include "componentes/html/red/darksalmon.hpp"
#include "componentes/html/red/lightsalmon.hpp"
#include "componentes/html/red/crimson.hpp"
#include "componentes/html/red/red.hpp"
#include "componentes/html/red/firebrick.hpp"
#include "componentes/html/red/darkred.hpp"

class Colorama
{

  typedef struct Categorias 
  {

    struct HTML 
    {

      struct RED
      {

        decltype(indianred) indianred;
        decltype(lightcoral) lightcoral;
        decltype(salmon) salmon;
        decltype(darksalmon) darksalmon;
        decltype(lightsalmon) lightsalmon;
        decltype(crimson) crimson;
        decltype(red) red;
        decltype(firebrick) firebrick;
        decltype(darkred) darkred;

      };

      struct PINK
      {

        CatalogColor<RGBA(255, 192, 203, 1), HSV(0, 0.25, 1), Hex(*"pink", *"#FFC0CB", 0xFFC0CB)> pink;
        CatalogColor<RGBA(255, 182, 193, 1), HSV(0, 0.25, 1), Hex(*"lightpink", *"#FFB6C1", 0xFFB6C1)> lightpink;
        CatalogColor<RGBA(255, 105, 180, 1), HSV(0, 0.79, 1), Hex(*"hotpink", *"#FF69B4", 0xFF69B4)> hotpink;
        CatalogColor<RGBA(255, 20, 147, 1), HSV(0, 0.92, 1), Hex(*"deeppink", *"#FF1493", 0xFF1493)> deeppink;
        CatalogColor<RGBA(199, 21, 133, 1), HSV(0, 0.89, 0.78), Hex(*"mediumvioletred", *"#C71585", 0xC71585)> mediumvioletred;
        CatalogColor<RGBA(219, 112, 147, 1), HSV(0, 0.36, 0.86), Hex(*"palevioletred", *"#DB7093", 0xDB7093)> palevioletred;

      };

      struct ORANGE
      {
        
        CatalogColor<RGBA(255, 160, 122, 1), HSV(0, 0.100, 1), Hex(*"lightsalmon", *"#FFA07A", 0xFFA07A)> lightsalmon;
        CatalogColor<RGBA(255, 127, 80, 1), HSV(0, 0.69, 1), Hex(*"coral", *"#FF7F50", 0xFF7F50)> coral;
        CatalogColor<RGBA(255, 99, 71, 1), HSV(0, 0.72, 1), Hex(*"tomato", *"#FF6347", 0xFF6347)> tomato;
        CatalogColor<RGBA(255, 69, 0, 1), HSV(0, 1, 1), Hex(*"orangered", *"#FF4500", 0xFF4500)> orangered;
        CatalogColor<RGBA(255, 140, 0, 1), HSV(0, 1, 1), Hex(*"darkorange", *"#FF8C00", 0xFF8C00)> darkorange;
        CatalogColor<RGBA(255, 165, 0, 1), HSV(0, 1, 1), Hex(*"orange", *"#FFA500", 0xFFA500)> orange;

      };

      struct YELLOW
      {

        CatalogColor<RGBA(255, 215, 0, 1), HSV(0, 1, 1), Hex(*"gold", *"#FFD700", 0xFFD700)> gold;
        CatalogColor<RGBA(255, 255, 0, 1), HSV(0, 1, 1), Hex(*"yellow", *"#FFFF00", 0xFFFF00)> yellow;
        CatalogColor<RGBA(255, 255, 224, 1), HSV(0, 0.06, 1), Hex(*"lightyellow", *"#FFFFE0", 0xFFFFE0)> lightyellow;
        CatalogColor<RGBA(255, 250, 205, 1), HSV(0, 0.16, 1), Hex(*"lemonchiffon", *"#FFFACD", 0xFFFACD)> lemonchiffon;
        CatalogColor<RGBA(250, 250, 210, 1), HSV(0, 0.16, 0.98), Hex(*"lightgoldenrodyellow", *"#FAFAD2", 0xFAFAD2)> lightgoldenrodyellow;
        CatalogColor<RGBA(255, 239, 213, 1), HSV(0, 0.16, 1), Hex(*"papayawhip", *"#FFEFD5", 0xFFEFD5)> papayawhip;
        CatalogColor<RGBA(255, 228, 181, 1), HSV(0, 0.29, 1), Hex(*"moccasin", *"#FFE4B5", 0xFFE4B5)> moccasin;
        CatalogColor<RGBA(255, 218, 185, 1), HSV(0, 0.28, 1), Hex(*"peachpuff", *"#FFDAB9", 0xFFDAB9)> peachpuff;
        CatalogColor<RGBA(238, 232, 170, 1), HSV(0, 0.28, 0.93), Hex(*"palegoldenrod", *"#EEE8AA", 0xEEE8AA)> palegoldenrod;
        CatalogColor<RGBA(240, 230, 140, 1), HSV(0, 0.42, 0.94), Hex(*"khaki", *"#F0E68C", 0xF0E68C)> khaki;
        CatalogColor<RGBA(189, 183, 107, 1), HSV(0, 0.38, 0.58), Hex(*"darkkhaki", *"#BDB76B", 0xBDB76B)> darkkhaki;

      };

      struct PURPLE 
      { 

        CatalogColor<RGBA(230, 230, 250, 1), HSV(0.67, 0.08, 0.98), Hex(*"lavender", *"#E6E6FA", 0xE6E6FA)> lavender;
        CatalogColor<RGBA(216, 191, 216, 1), HSV(0.83, 0.12, 0.85), Hex(*"thistle", *"#D8BFD8", 0xD8BFD8)> thistle;
        CatalogColor<RGBA(221, 160, 221, 1), HSV(0.83, 0.27, 0.69), Hex(*"plum", *"#DDA0DD", 0xDDA0DD)> plum;
        CatalogColor<RGBA(238, 130, 238, 1), HSV(0.83, 0.45, 0.93), Hex(*"violet", *"#EE82EE", 0xEE82EE)> violet;
        CatalogColor<RGBA(218, 112, 214, 1), HSV(0.84, 0.49, 0.85), Hex(*"orchid", *"#DA70D6", 0xDA70D6)> orchid;
        CatalogColor<RGBA(255, 0, 255, 1), HSV(0.83, 1, 1), Hex(*"fuchsia", *"#FF00FF", 0xFF00FF)> fuchsia;
        CatalogColor<RGBA(255, 0, 255, 1), HSV(0.83, 1, 1), Hex(*"magenta", *"#FF00FF", 0xFF00FF)> magenta;
        CatalogColor<RGBA(186, 85, 211, 1), HSV(0.79, 0.60, 0.58), Hex(*"mediumorchid", *"#BA55D3", 0xBA55D3)> mediumorchid;
        CatalogColor<RGBA(147, 112, 219, 1), HSV(0.75, 0.49, 0.68), Hex(*"mediumpurple", *"#9370DB", 0x9370DB)> mediumpurple;
        CatalogColor<RGBA(102, 51, 153, 1), HSV(0.75, 0.67, 0.40), Hex(*"rebeccapurple", *"#663399", 0x663399)> rebeccapurple;
        CatalogColor<RGBA(138, 43, 226, 1), HSV(0.75, 0.81, 0.89), Hex(*"blueviolet", *"#8A2BE2", 0x8A2BE2)> blueviolet;
        CatalogColor<RGBA(148, 0, 211, 1), HSV(0.78, 1, 0.41), Hex(*"darkviolet", *"#9400D3", 0x9400D3)> darkviolet;
        CatalogColor<RGBA(153, 50, 204, 1), HSV(0.80, 0.75, 0.60), Hex(*"darkorchid", *"#9932CC", 0x9932CC)> darkorchid;
        CatalogColor<RGBA(139, 0, 139, 1), HSV(0.83, 1, 0.27), Hex(*"darkmagenta", *"#8B008B", 0x8B008B)> darkmagenta;
        CatalogColor<RGBA(128, 0, 128, 1), HSV(0.83, 1, 0.50), Hex(*"purple", *"#800080", 0x800080)> purple;
        CatalogColor<RGBA(75, 0, 130, 1), HSV(0.75, 1, 0.51), Hex(*"indigo", *"#4B0082", 0x4B0082)> indigo;
        CatalogColor<RGBA(106, 90, 205, 1), HSV(0.69, 0.56, 0.64), Hex(*"slateblue", *"#6A5ACD", 0x6A5ACD)> slateblue;
        CatalogColor<RGBA(72, 61, 139, 1), HSV(0.69, 0.39, 0.39), Hex(*"darkslateblue", *"#483D8B", 0x483D8B)> darkslateblue;
        CatalogColor<RGBA(123, 104, 238, 1), HSV(0.69, 0.56, 0.74), Hex(*"mediumslateblue", *"#7B68EE", 0x7B68EE)> mediumslateblue;

      };

      struct GREEN 
      {

        CatalogColor<RGBA(173, 255, 47, 1), HSV(0.21, 0.81, 1), Hex(*"greenyellow", *"#ADFF2F", 0xADFF2F)> greenyellow;
        CatalogColor<RGBA(144, 238, 144, 1), HSV(0.33, 0.39, 0.93), Hex(*"lightgreen", *"#90EE90", 0x90EE90)> lightgreen;
        CatalogColor<RGBA(0, 255, 127, 1), HSV(0.33, 1, 1), Hex(*"springgreen", *"#00FF7F", 0x00FF7F)> springgreen;
        CatalogColor<RGBA(60, 179, 113, 1), HSV(0.41, 0.50, 0.50), Hex(*"mediumseagreen", *"#3CB371", 0x3CB371)> mediumseagreen;
        CatalogColor<RGBA(46, 139, 87, 1), HSV(0.41, 0.50, 0.34), Hex(*"seagreen", *"#2E8B57", 0x2E8B57)> seagreen;
        CatalogColor<RGBA(34, 139, 34, 1), HSV(0.33, 0.61, 0.34), Hex(*"forestgreen", *"#228B22", 0x228B22)> forestgreen;
        CatalogColor<RGBA(0, 128, 0, 1), HSV(0.33, 1, 0.50), Hex(*"green", *"#008000", 0x008000)> green;
        CatalogColor<RGBA(0, 100, 0, 1), HSV(0.33, 1, 0.39), Hex(*"darkgreen", *"#006400", 0x006400)> darkgreen;
        CatalogColor<RGBA(154, 205, 50, 1), HSV(0.22, 0.76, 0.61), Hex(*"yellowgreen", *"#9ACD32", 0x9ACD32)> yellowgreen;
        CatalogColor<RGBA(107, 142, 35, 1), HSV(0.22, 0.61, 0.35), Hex(*"olivedrab", *"#6B8E23", 0x6B8E23)> olivedrab;
        CatalogColor<RGBA(128, 128, 0, 1), HSV(0.17, 1, 0.50), Hex(*"olive", *"#808000", 0x808000)> olive;
        CatalogColor<RGBA(85, 107, 47, 1), HSV(0.22, 0.39, 0.33), Hex(*"darkolivegreen", *"#556B2F", 0x556B2F)> darkolivegreen;
        CatalogColor<RGBA(102, 205, 170, 1), HSV(0.49, 0.50, 0.80), Hex(*"mediumaquamarine", *"#66CDAA", 0x66CDAA)> mediumaquamarine;
        CatalogColor<RGBA(143, 188, 139, 1), HSV(0.41, 0.25, 0.65), Hex(*"darkseagreen", *"#8FBC8B", 0x8FBC8B)> darkseagreen;
        CatalogColor<RGBA(32, 178, 170, 1), HSV(0.48, 0.82, 0.55), Hex(*"lightseagreen", *"#20B2AA", 0x20B2AA)> lightseagreen;
        CatalogColor<RGBA(0, 139, 139, 1), HSV(0.50, 1, 0.27), Hex(*"darkcyan", *"#008B8B", 0x008B8B)> darkcyan;
        CatalogColor<RGBA(0, 128, 128, 1), HSV(0.50, 1, 0.25), Hex(*"teal", *"#008080", 0x008080)> teal;
        
      };
      
      struct BLUE 
      { 
        
        CatalogColor<RGBA(0, 255, 255, 1), HSV(0.50, 1, 1), Hex(*"aqua", *"#00FFFF", 0x00FFFF)> aqua;
        CatalogColor<RGBA(0, 255, 255, 1), HSV(0.50, 1, 1), Hex(*"cyan", *"#00FFFF", 0x00FFFF)> cyan;
        CatalogColor<RGBA(224, 255, 255, 1), HSV(0.50, 0.12, 1), Hex(*"lightcyan", *"#E0FFFF", 0xE0FFFF)> lightcyan;
        CatalogColor<RGBA(175, 238, 238, 1), HSV(0.50, 0.27, 0.93), Hex(*"paleturquoise", *"#AFEEEE", 0xAFEEEE)> paleturquoise;
        CatalogColor<RGBA(127, 255, 212, 1), HSV(0.50, 0.50, 1), Hex(*"aquamarine", *"#7FFFD4", 0x7FFFD4)> aquamarine;
        CatalogColor<RGBA(64, 224, 208, 1), HSV(0.48, 0.71, 0.88), Hex(*"turquoise", *"#40E0D0", 0x40E0D0)> turquoise;
        CatalogColor<RGBA(72, 209, 204, 1), HSV(0.48, 0.65, 0.82), Hex(*"mediumturquoise", *"#48D1CC", 0x48D1CC)> mediumturquoise;
        CatalogColor<RGBA(0, 206, 209, 1), HSV(0.48, 1, 0.82), Hex(*"darkturquoise", *"#00CED1", 0x00CED1)> darkturquoise;
        CatalogColor<RGBA(95, 158, 160, 1), HSV(0.50, 0.41, 0.63), Hex(*"cadetblue", *"#5F9EA0", 0x5F9EA0)> cadetblue;
        CatalogColor<RGBA(70, 130, 180, 1), HSV(0.58, 0.61, 0.57), Hex(*"steelblue", *"#4682B4", 0x4682B4)> steelblue;
        CatalogColor<RGBA(176, 196, 222, 1), HSV(0.61, 0.20, 0.78), Hex(*"lightsteelblue", *"#B0C4DE", 0xB0C4DE)> lightsteelblue;
        CatalogColor<RGBA(176, 224, 230, 1), HSV(0.52, 0.28, 0.80), Hex(*"powderblue", *"#B0E0E6", 0xB0E0E6)> powderblue;
        CatalogColor<RGBA(173, 216, 230, 1), HSV(0.54, 0.25, 0.79), Hex(*"lightblue", *"#ADD8E6", 0xADD8E6)> lightblue;
        CatalogColor<RGBA(135, 206, 235, 1), HSV(0.54, 0.42, 0.92), Hex(*"skyblue", *"#87CEEB", 0x87CEEB)> skyblue;
        CatalogColor<RGBA(135, 206, 250, 1), HSV(0.54, 0.46, 0.93), Hex(*"lightskyblue", *"#87CEFA", 0x87CEFA)> lightskyblue;
        CatalogColor<RGBA(0, 191, 255, 1), HSV(0.54, 1, 1), Hex(*"deepskyblue", *"#00BFFF", 0x00BFFF)> deepskyblue;
        CatalogColor<RGBA(30, 144, 255, 1), HSV(0.57, 0.88, 1), Hex(*"dodgerblue", *"#1E90FF", 0x1E90FF)> dodgerblue;
        CatalogColor<RGBA(100, 149, 237, 1), HSV(0.61, 0.58, 0.93), Hex(*"cornflowerblue", *"#6495ED", 0x6495ED)> cornflowerblue;
        CatalogColor<RGBA(123, 104, 238, 1), HSV(0.69, 0.56, 0.74), Hex(*"mediumslateblue", *"#7B68EE", 0x7B68EE)> mediumslateblue;
        CatalogColor<RGBA(65, 105, 225, 1), HSV(0.64, 0.71, 0.88), Hex(*"royalblue", *"#4169E1", 0x4169E1)> royalblue;
        CatalogColor<RGBA(0, 0, 255, 1), HSV(0.67, 1, 1), Hex(*"blue", *"#0000FF", 0x0000FF)> blue;
        CatalogColor<RGBA(0, 0, 205, 1), HSV(0.67, 1, 0.80), Hex(*"mediumblue", *"#0000CD", 0x0000CD)> mediumblue;
        CatalogColor<RGBA(0, 0, 139, 1), HSV(0.67, 1, 0.55), Hex(*"darkblue", *"#00008B", 0x00008B)> darkblue;
        CatalogColor<RGBA(0, 0, 128, 1), HSV(0.67, 1, 0.50), Hex(*"navy", *"#000080", 0x000080)> navy;
        CatalogColor<RGBA(25, 25, 112, 1), HSV(0.67, 0.78, 0.44), Hex(*"midnightblue", *"#191970", 0x191970)> midnightblue;

      };
      
      struct BROWN 
      { 

        CatalogColor<RGBA(255, 248, 220, 1), HSV(0.10, 0.10, 1), Hex(*"cornsilk", *"#FFF8DC", 0xFFF8DC)> cornsilk;
        CatalogColor<RGBA(255, 235, 205, 1), HSV(0.10, 0.22, 1), Hex(*"blanchedalmond", *"#FFEBCD", 0xFFEBCD)> blanchedalmond;
        CatalogColor<RGBA(255, 228, 196, 1), HSV(0.10, 0.23, 1), Hex(*"bisque", *"#FFE4C4", 0xFFE4C4)> bisque;
        CatalogColor<RGBA(255, 222, 173, 1), HSV(0.10, 0.32, 1), Hex(*"navajowhite", *"#FFDEAD", 0xFFDEAD)> navajowhite;
        CatalogColor<RGBA(245, 222, 179, 1), HSV(0.10, 0.27, 0.96), Hex(*"wheat", *"#F5DEB3", 0xF5DEB3)> wheat;
        CatalogColor<RGBA(222, 184, 135, 1), HSV(0.10, 0.39, 0.69), Hex(*"burlywood", *"#DEB887", 0xDEB887)> burlywood;
        CatalogColor<RGBA(210, 180, 140, 1), HSV(0.10, 0.33, 0.82), Hex(*"tan", *"#D2B48C", 0xD2B48C)> tan;
        CatalogColor<RGBA(188, 143, 143, 1), HSV(0.00, 0.24, 0.74), Hex(*"rosybrown", *"#BC8F8F", 0xBC8F8F)> rosybrown;
        CatalogColor<RGBA(244, 164, 96, 1), HSV(0.09, 0.61, 0.64), Hex(*"sandybrown", *"#F4A460", 0xF4A460)> sandybrown;
        CatalogColor<RGBA(218, 165, 32, 1), HSV(0.10, 0.85, 0.85), Hex(*"goldenrod", *"#DAA520", 0xDAA520)> goldenrod;
        CatalogColor<RGBA(184, 134, 11, 1), HSV(0.10, 0.94, 0.72), Hex(*"darkgoldenrod", *"#B8860B", 0xB8860B)> darkgoldenrod;
        CatalogColor<RGBA(205, 133, 63, 1), HSV(0.10, 0.69, 0.58), Hex(*"peru", *"#CD853F", 0xCD853F)> peru;
        CatalogColor<RGBA(210, 105, 30, 1), HSV(0.10, 0.86, 0.41), Hex(*"chocolate", *"#D2691E", 0xD2691E)> chocolate;
        CatalogColor<RGBA(139, 69, 19, 1), HSV(0.10, 0.86, 0.31), Hex(*"saddlebrown", *"#8B4513", 0x8B4513)> saddlebrown;
        CatalogColor<RGBA(160, 82, 45, 1), HSV(0.10, 0.72, 0.40), Hex(*"sienna", *"#A0522D", 0xA0522D)> sienna;
        CatalogColor<RGBA(165, 42, 42, 1), HSV(0.00, 0.75, 0.65), Hex(*"brown", *"#A52A2A", 0xA52A2A)> brown;
        CatalogColor<RGBA(128, 0, 0, 1), HSV(0.00, 1, 0.50), Hex(*"maroon", *"#800000", 0x800000)> maroon;

      };

      struct WHITE 
      { 

        CatalogColor<RGBA(255, 255, 255, 1), HSV(0, 0, 1), Hex(*"white", *"#FFFFFF", 0xFFFFFF)> white;
        CatalogColor<RGBA(255, 250, 250, 1), HSV(0, 0.02, 1), Hex(*"snow", *"#FFFAFA", 0xFFFAFA)> snow;
        CatalogColor<RGBA(240, 255, 240, 1), HSV(0.33, 0.06, 1), Hex(*"honeydew", *"#F0FFF0", 0xF0FFF0)> honeydew;
        CatalogColor<RGBA(245, 255, 250, 1), HSV(0.33, 0.03, 1), Hex(*"mintcream", *"#F5FFFA", 0xF5FFFA)> mintcream;
        CatalogColor<RGBA(240, 255, 255, 1), HSV(0.50, 0.06, 1), Hex(*"azure", *"#F0FFFF", 0xF0FFFF)> azure;
        CatalogColor<RGBA(240, 248, 255, 1), HSV(0.67, 0.06, 1), Hex(*"aliceblue", *"#F0F8FF", 0xF0F8FF)> aliceblue;
        CatalogColor<RGBA(248, 248, 255, 1), HSV(0.67, 0.03, 1), Hex(*"ghostwhite", *"#F8F8FF", 0xF8F8FF)> ghostwhite;
        CatalogColor<RGBA(245, 245, 245, 1), HSV(0, 0, 0.96), Hex(*"whitesmoke", *"#F5F5F5", 0xF5F5F5)> whitesmoke;
        CatalogColor<RGBA(255, 245, 238, 1), HSV(0.08, 0.06, 1), Hex(*"seashell", *"#FFF5EE", 0xFFF5EE)> seashell;
        CatalogColor<RGBA(245, 245, 220, 1), HSV(0.17, 0.06, 0.96), Hex(*"beige", *"#F5F5DC", 0xF5F5DC)> beige;
        CatalogColor<RGBA(253, 245, 230, 1), HSV(0.11, 0.09, 0.99), Hex(*"oldlace", *"#FDF5E6", 0xFDF5E6)> oldlace;
        CatalogColor<RGBA(255, 250, 240, 1), HSV(0.10, 0.06, 1), Hex(*"floralwhite", *"#FFFAF0", 0xFFFAF0)> floralwhite;
        CatalogColor<RGBA(255, 255, 240, 1), HSV(0.17, 0.06, 1), Hex(*"ivory", *"#FFFFF0", 0xFFFFF0)> ivory;
        CatalogColor<RGBA(250, 235, 215, 1), HSV(0.09, 0.08, 0.98), Hex(*"antiquewhite", *"#FAEBD7", 0xFAEBD7)> antiquewhite;
        CatalogColor<RGBA(250, 240, 230, 1), HSV(0.08, 0.06, 0.98), Hex(*"linen", *"#FAF0E6", 0xFAF0E6)> linen;
        CatalogColor<RGBA(255, 240, 245, 1), HSV(0.97, 0.06, 1), Hex(*"lavenderblush", *"#FFF0F5", 0xFFF0F5)> lavenderblush;
        CatalogColor<RGBA(255, 228, 225, 1), HSV(0.01, 0.12, 1), Hex(*"mistyrose", *"#FFE4E1", 0xFFE4E1)> mistyrose;

      };

      struct GRAY
      {

        CatalogColor<RGBA(220, 220, 220, 1), HSV(0, 0, 0.86), Hex(*"gainsboro", *"#DCDCDC", 0xDCDCDC)> gainsboro;
        CatalogColor<RGBA(211, 211, 211, 1), HSV(0, 0, 0.83), Hex(*"lightgray", *"#D3D3D3", 0xD3D3D3)> lightgray;
        CatalogColor<RGBA(192, 192, 192, 1), HSV(0, 0, 0.75), Hex(*"silver", *"#C0C0C0", 0xC0C0C0)> silver;
        CatalogColor<RGBA(169, 169, 169, 1), HSV(0, 0, 0.66), Hex(*"darkgray", *"#A9A9A9", 0xA9A9A9)> darkgray;
        CatalogColor<RGBA(128, 128, 128, 1), HSV(0, 0, 0.50), Hex(*"gray", *"#808080", 0x808080)> gray;
        CatalogColor<RGBA(105, 105, 105, 1), HSV(0, 0, 0.41), Hex(*"dimgray", *"#696969", 0x696969)> dimgray;
        CatalogColor<RGBA(119, 136, 153, 1), HSV(210, 0.23, 0.60), Hex(*"lightslategray", *"#778899", 0x778899)> lightslategray;
        CatalogColor<RGBA(112, 128, 144, 1), HSV(210, 0.22, 0.56), Hex(*"slategray", *"#708090", 0x708090)> slategray;
        CatalogColor<RGBA(47, 79, 79, 1), HSV(180, 0.41, 0.24), Hex(*"darkslategray", *"#2F4F4F", 0x2F4F4F)> darkslategray;
        CatalogColor<RGBA(0, 0, 0, 1), HSV(0, 0, 0), Hex(*"black", *"#000000", 0x000000)> black;

      };

    };
    
  } categorias;

  // passará por uma revisão de implementação [#fff]
  #pragma region em_construcao
    string escape_color_model(i8t RED, i8t GREEN, i8t BLUE) 
    { 
      return "\x1b[38;2;"+
        to_string(RED)+";"+
        to_string(GREEN)+";"+
        to_string(BLUE)+"m"; 
    }

    decltype(RGBA::r) red;
    decltype(RGBA::g) green;
    decltype(RGBA::b) blue;

    vdt bright_100(RGBA x) { x.a = 0.1; };
    vdt bright_200(RGBA x) { x.a = 0.2; };
    vdt bright_300(RGBA x) { x.a = 0.3; };
    vdt bright_400(RGBA x) { x.a = 0.4; };
    vdt bright_500(RGBA x) { x.a = 0.5; };
    vdt bright_600(RGBA x) { x.a = 0.6; };
    vdt bright_700(RGBA x) { x.a = 0.7; };
    vdt bright_800(RGBA x) { x.a = 0.8; };
    vdt bright_900(RGBA x) { x.a = 0.9; };
  #pragma endregion

  public:
  categorias::HTML::RED html_red_pallet;

};

#endif
