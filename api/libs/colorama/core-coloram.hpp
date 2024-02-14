#ifndef CORE_COLORAMA_HPP
#define CORE_COLORAMA_HPP

#include "../../defs/wtsfy-tipos.hpp"

class Colorama
{

  struct HTML 
  {

    struct RED
    {

      CatalogColor<RGBA(205, 92, 92, 1), HSV(0, 0.53, 0.8), Hex(*"indianred", *"#CD5C5C", 0xCD5C5C)> indianred;
      CatalogColor<RGBA(240, 128, 128, 1), HSV(0, 0.72, 0.94), Hex(*"lightcoral", *"#F08080", 0xF08080)> lightcoral;
      CatalogColor<RGBA(250, 128, 114, 1), HSV(0, 0.54, 0.98), Hex(*"salmon", *"#FA8072", 0xFA8072)> salmon;
      CatalogColor<RGBA(233, 150, 122, 1), HSV(0, 0.48, 0.91), Hex(*"darksalmon", *"#E9967A", 0xE9967A)> darksalmon;
      CatalogColor<RGBA(255, 160, 122, 1), HSV(0, 0.100, 1), Hex(*"lightsalmon", *"#FFA07A", 0xFFA07A)> lightsalmon;
      CatalogColor<RGBA(220, 20, 60, 1), HSV(0, 0.91, 0.86), Hex(*"crimson", *"#DC143C", 0xDC143C)> crimson;
      CatalogColor<RGBA(255, 0, 0, 1), HSV(0, 1, 1), Hex(*"red", *"#FF0000", 0xFF0000)> red;
      CatalogColor<RGBA(178, 34, 34, 1), HSV(0, 0.81, 0.55), Hex(*"firebrick", *"#B22222", 0xB22222)> firebrick;
      CatalogColor<RGBA(139, 0, 0, 1), HSV(0, 1, 0.54), Hex(*"darkred", *"#8B0000", 0x8B0000)> darkred;

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

    struct PURPLE { };
    struct GREEN { };
    struct BLUE { };
    struct BROWN { };
    struct WHITE { };
    struct GRAY { };

  };

// Purple HTML Color Names
// COLOR	NAME	HEX CODE	RGB CODE
// Lavender	#E6E6FA	rgb(230, 230, 250)
// Thistle	#D8BFD8	rgb(216, 191, 216)
// Plum	#DDA0DD	rgb(221, 160, 221)
// Violet	#EE82EE	rgb(238, 130, 238)
// Orchid	#DA70D6	rgb(218, 112, 214)
// Fuchsia	#FF00FF	rgb(255, 0, 255)
// Magenta	#FF00FF	rgb(255, 0, 255)
// MediumOrchid	#BA55D3	rgb(186, 85, 211)
// MediumPurple	#9370DB	rgb(147, 112, 219)
// RebeccaPurple	#663399	rgb(102, 51, 153)
// BlueViolet	#8A2BE2	rgb(138, 43, 226)
// DarkViolet	#9400D3	rgb(148, 0, 211)
// DarkOrchid	#9932CC	rgb(153, 50, 204)
// DarkMagenta	#8B008B	rgb(139, 0, 139)
// Purple	#800080	rgb(128, 0, 128)
// Indigo	#4B0082	rgb(75, 0, 130)
// SlateBlue	#6A5ACD	rgb(106, 90, 205)
// DarkSlateBlue	#483D8B	rgb(72, 61, 139)
// MediumSlateBlue	#7B68EE	rgb(123, 104, 238)
// Green HTML Color Names
// COLOR	NAME	HEX CODE	RGB CODE
// GreenYellow	#ADFF2F	rgb(173, 255, 47)
// Chartreuse	#7FFF00	rgb(127, 255, 0)
// LawnGreen	#7CFC00	rgb(124, 252, 0)
// Lime	#00FF00	rgb(0, 255, 0)
// LimeGreen	#32CD32	rgb(50, 205, 50)
// PaleGreen	#98FB98	rgb(152, 251, 152)
// LightGreen	#90EE90	rgb(144, 238, 144)
// MediumSpringGreen	#00FA9A	rgb(0, 250, 154)
// SpringGreen	#00FF7F	rgb(0, 255, 127)
// MediumSeaGreen	#3CB371	rgb(60, 179, 113)
// SeaGreen	#2E8B57	rgb(46, 139, 87)
// ForestGreen	#228B22	rgb(34, 139, 34)
// Green	#008000	rgb(0, 128, 0)
// DarkGreen	#006400	rgb(0, 100, 0)
// YellowGreen	#9ACD32	rgb(154, 205, 50)
// OliveDrab	#6B8E23	rgb(107, 142, 35)
// Olive	#808000	rgb(128, 128, 0)
// DarkOliveGreen	#556B2F	rgb(85, 107, 47)
// MediumAquamarine	#66CDAA	rgb(102, 205, 170)
// DarkSeaGreen	#8FBC8B	rgb(143, 188, 139)
// LightSeaGreen	#20B2AA	rgb(32, 178, 170)
// DarkCyan	#008B8B	rgb(0, 139, 139)
// Teal	#008080	rgb(0, 128, 128)
// Blue HTML Color Names
// COLOR	NAME	HEX CODE	RGB CODE
// Aqua	#00FFFF	rgb(0, 255, 255)
// Cyan	#00FFFF	rgb(0, 255, 255)
// LightCyan	#E0FFFF	rgb(224, 255, 255)
// PaleTurquoise	#AFEEEE	rgb(175, 238, 238)
// Aquamarine	#7FFFD4	rgb(127, 255, 212)
// Turquoise	#40E0D0	rgb(64, 224, 208)
// MediumTurquoise	#48D1CC	rgb(72, 209, 204)
// DarkTurquoise	#00CED1	rgb(0, 206, 209)
// CadetBlue	#5F9EA0	rgb(95, 158, 160)
// SteelBlue	#4682B4	rgb(70, 130, 180)
// LightSteelBlue	#B0C4DE	rgb(176, 196, 222)
// PowderBlue	#B0E0E6	rgb(176, 224, 230)
// LightBlue	#ADD8E6	rgb(173, 216, 230)
// SkyBlue	#87CEEB	rgb(135, 206, 235)
// LightSkyBlue	#87CEFA	rgb(135, 206, 250)
// DeepSkyBlue	#00BFFF	rgb(0, 191, 255)
// DodgerBlue	#1E90FF	rgb(30, 144, 255)
// CornflowerBlue	#6495ED	rgb(100, 149, 237)
// MediumSlateBlue	#7B68EE	rgb(123, 104, 238)
// RoyalBlue	#4169E1	rgb(65, 105, 225)
// Blue	#0000FF	rgb(0, 0, 255)
// MediumBlue	#0000CD	rgb(0, 0, 205)
// DarkBlue	#00008B	rgb(0, 0, 139)
// Navy	#000080	rgb(0, 0, 128)
// MidnightBlue	#191970	rgb(25, 25, 112)
// Brown HTML Color Names
// COLOR	NAME	HEX CODE	RGB CODE
// Cornsilk	#FFF8DC	rgb(255, 248, 220)
// BlanchedAlmond	#FFEBCD	rgb(255, 235, 205)
// Bisque	#FFE4C4	rgb(255, 228, 196)
// NavajoWhite	#FFDEAD	rgb(255, 222, 173)
// Wheat	#F5DEB3	rgb(245, 222, 179)
// BurlyWood	#DEB887	rgb(222, 184, 135)
// Tan	#D2B48C	rgb(210, 180, 140)
// RosyBrown	#BC8F8F	rgb(188, 143, 143)
// SandyBrown	#F4A460	rgb(244, 164, 96)
// Goldenrod	#DAA520	rgb(218, 165, 32)
// DarkGoldenrod	#B8860B	rgb(184, 134, 11)
// Peru	#CD853F	rgb(205, 133, 63)
// Chocolate	#D2691E	rgb(210, 105, 30)
// SaddleBrown	#8B4513	rgb(139, 69, 19)
// Sienna	#A0522D	rgb(160, 82, 45)
// Brown	#A52A2A	rgb(165, 42, 42)
// Maroon	#800000	rgb(128, 0, 0)
// White HTML Color Names
// COLOR	NAME	HEX CODE	RGB CODE
// White	#FFFFFF	rgb(255, 255, 255)
// Snow	#FFFAFA	rgb(255, 250, 250)
// HoneyDew	#F0FFF0	rgb(240, 255, 240)
// MintCream	#F5FFFA	rgb(245, 255, 250)
// Azure	#F0FFFF	rgb(240, 255, 255)
// AliceBlue	#F0F8FF	rgb(240, 248, 255)
// GhostWhite	#F8F8FF	rgb(248, 248, 255)
// WhiteSmoke	#F5F5F5	rgb(245, 245, 245)
// SeaShell	#FFF5EE	rgb(255, 245, 238)
// Beige	#F5F5DC	rgb(245, 245, 220)
// OldLace	#FDF5E6	rgb(253, 245, 230)
// FloralWhite	#FFFAF0	rgb(255, 250, 240)
// Ivory	#FFFFF0	rgb(255, 255, 240)
// AntiqueWhite	#FAEBD7	rgb(250, 235, 215)
// Linen	#FAF0E6	rgb(250, 240, 230)
// LavenderBlush	#FFF0F5	rgb(255, 240, 245)
// MistyRose	#FFE4E1	rgb(255, 228, 225)
// Gray HTML Color Names
// COLOR	NAME	HEX CODE	RGB CODE
// Gainsboro	#DCDCDC	rgb(220, 220, 220)
// LightGray	#D3D3D3	rgb(211, 211, 211)
// Silver	#C0C0C0	rgb(192, 192, 192)
// DarkGray	#A9A9A9	rgb(169, 169, 169)
// Gray	#808080	rgb(128, 128, 128)
// DimGray	#696969	rgb(105, 105, 105)
// LightSlateGray	#778899	rgb(119, 136, 153)
// SlateGray	#708090	rgb(112, 128, 144)
// DarkSlateGray	#2F4F4F	rgb(47, 79, 79)
// Black	#000000	rgb(0, 0, 0)
  

};

#endif
