
      // struct Colorama 
      // {

      //   struct HTML {};
      //   struct LEGO {};
      //   struct PANTONE {};

      //   // Template de catalogo temporário para cores
      //   // Ainda não foi implementado novo modelo com JSON
      //   template<i32t HEX, i8t RGB_RED, i8t RGB_GREEN, i8t RGB_BLUE, i8t HSV_HUE, i8t HSV_SATURATION, i8t HSV_VALUE, char HTML_CODE, char HTML_HEX> struct Catalog { i32t hex=HEX; struct RGB { i8t red=RGB_RED; i8t green=RGB_GREEN; i8t blue=RGB_BLUE; }; struct HSV { i8t hue=HSV_HUE; i8t saturation=HSV_SATURATION; i8t value=HSV_VALUE; }; char* htmlcode=HTML_CODE; char* htmlhex=HTML_HEX; };

      //   // html colors using template acima, ordem alfabetica
      //     Catalog<0xF0F8FF, 240, 248, 255, 208, 6, 100, *"aliceblue", *"#F0F8FF"> aliceblue;
      //     Catalog<0xFAEBD7, 250, 235, 215, 34, 14, 98, *"antiquewhite", *"#FAEBD7"> antiquewhite;
      //     Catalog<0x00FFFF, 0, 255, 255, 180, 100, 100, *"aqua", *"#00FFFF"> aqua;
      //     Catalog<0x7FFFD4, 127, 255, 212, 160, 50, 100, *"aquamarine", *"#7FFFD4"> aquamarine;
      //     Catalog<0xF0FFFF, 240, 255, 255, 180, 6, 100, *"azure", *"#F0FFFF"> azure;
      //     Catalog<0xF5F5DC, 245, 245, 220, 60, 10, 96, *"beige", *"#F5F5DC"> beige;
      //     Catalog<0xFFE4C4, 255, 228, 196, 33, 23, 100, *"bisque", *"#FFE4C4"> bisque;
      //     Catalog<0x000000, 0, 0, 0, 0, 0, 0, *"black", *"#000000"> black;
      //     Catalog<0xFFEBCD, 255, 235, 205, 36, 20, 100, *"blanchedalmond", *"#FFEBCD"> blanchedalmond;
      //     Catalog<0x0000FF, 0, 0, 255, 240, 100, 100, *"blue", *"#0000FF"> blue;
      //     Catalog<0x8A2BE2, 138, 43, 226, 271, 81, 89, *"blueviolet", *"#8A2BE2"> blueviolet;
      //     Catalog<0xA52A2A, 165, 42, 42, 0, 74, 65, *"brown", *"#A52A2A"> brown;
      //     Catalog<0xDEB887, 222, 184, 135, 34, 39, 87, *"burlywood", *"#DEB887"> burlywood;
      //     Catalog<0x5F9EA0, 95, 158, 160, 181, 41, 62, *"cadetblue", *"#5F9EA0"> cadetblue;
      //     Catalog<0x7FFF00, 127, 255, 0, 84, 100, 100, *"chartreuse", *"#7FFF00"> chartreuse;
      //     Catalog<0xD2691E, 210, 105, 30, 25, 86, 82, *"chocolate", *"#D2691E"> chocolate;
      //     Catalog<0xFF7F50, 255, 127, 80, 16, 69, 100, *"coral", *"#FF7F50"> coral;
      //     Catalog<0x6495ED, 100, 149, 237, 219, 58, 92, *"cornflowerblue", *"#6495ED"> cornflowerblue;
      //     Catalog<0xFFF8DC, 255, 248, 220, 48, 14, 100, *"cornsilk", *"#FFF8DC"> cornsilk;
      //     Catalog<0xDC143C, 220, 20, 60, 348, 91, 86, *"crimson", *"#DC143C"> crimson;
      //     Catalog<0x00FFFF, 0, 255, 255, 180, 100, 100, *"cyan", *"#00FFFF"> cyan;
      //     Catalog<0x00008B, 0, 0, 139, 240, 100, 55, *"darkblue", *"#00008B"> darkblue;
      //     Catalog<0x008B8B, 0, 139, 139, 180, 100, 55, *"darkcyan", *"#008B8B"> darkcyan;
      //     Catalog<0xB8860B, 184, 134, 11, 43, 94, 72, *"darkgoldenrod", *"#B8860B"> darkgoldenrod;
      //     Catalog<0xA9A9A9, 169, 169, 169, 0, 0, 66, *"darkgray", *"#A9A9A9"> darkgray;
      //     Catalog<0xA9A9A9, 169, 169, 169, 0, 0, 66, *"darkgrey", *"#A9A9A9"> darkgrey;
      //     Catalog<0x006400, 0, 100, 0, 120, 100, 39, *"darkgreen", *"#006400"> darkgreen;
      //     Catalog<0xBDB76B, 189, 183, 107, 56, 43, 74, *"darkkhaki", *"#BDB76B"> darkkhaki;
      //     Catalog<0x8B008B, 139, 0, 139, 300, 100, 55, *"darkmagenta", *"#8B008B"> darkmagenta;
      //     Catalog<0x556B2F, 85, 107, 47, 82, 56, 42, *"darkolivegreen", *"#556B2F"> darkolivegreen;
      //     Catalog<0xFF8C00, 255, 140, 0, 33, 100, 100, *"darkorange", *"#FF8C00"> darkorange;
      //     Catalog<0x9932CC, 153, 50, 204, 282, 76, 80, *"darkorchid", *"#9932CC"> darkorchid;
      //     Catalog<0x8B0000, 139, 0, 0, 0, 100, 55, *"darkred", *"#8B0000"> darkred;
      //     Catalog<0xE9967A, 233, 150, 122, 15, 47, 91, *"darksalmon", *"#E9967A"> darksalmon;
      //     Catalog<0x8FBC8F, 143, 188, 143, 120, 24, 74, *"darkseagreen", *"#8FBC8F"> darkseagreen;
      //     Catalog<0x483D8B, 72, 61, 139, 248, 56, 55, *"darkslateblue", *"#483D8B"> darkslateblue;
      //     Catalog<0x2F4F4F, 47, 79, 79, 180, 25, 31, *"darkslategray", *"#2F4F4F"> darkslategray;
      //     Catalog<0x2F4F4F, 47, 79, 79, 180, 25, 31, *"darkslategrey", *"#2F4F4F"> darkslategrey;
      //     Catalog<0x00CED1, 0, 206, 209, 181, 100, 82, *"darkturquoise", *"#00CED1"> darkturquoise;
      //     Catalog<0x9400D3, 148, 0, 211, 282, 100, 82, *"darkviolet", *"#9400D3"> darkviolet;
      //     Catalog<0xFF1493, 255, 20, 147, 328, 92, 100, *"deeppink", *"#FF1493"> deeppink;
      //     Catalog<0x00BFFF, 0, 191, 255, 195, 100, 100, *"deepskyblue", *"#00BFFF"> deepskyblue;
      //     Catalog<0x696969, 105, 105, 105, 0, 0, 41, *"dimgray", *"#696969"> dimgray;
      //     Catalog<0x696969, 105, 105, 105, 0, 0, 41, *"dimgrey", *"#696969"> dimgrey;
      //     Catalog<0x1E90FF, 30, 144, 255, 210, 88, 100, *"dodgerblue", *"#1E90FF"> dodgerblue;
      //     Catalog<0xB22222, 178, 34, 34, 0, 81, 69, *"firebrick", *"#B22222"> firebrick;
      //     Catalog<0xFFFAF0, 255, 250, 240, 40, 6, 100, *"floralwhite", *"#FFFAF0"> floralwhite;
      //     Catalog<0x228B22, 34, 139, 34, 120, 76, 55, *"forestgreen", *"#228B22"> forestgreen;
      //     Catalog<0xFF00FF, 255, 0, 255, 300, 100, 100, *"fuchsia", *"#FF00FF"> fuchsia;
      //     Catalog<0xDCDCDC, 220, 220, 220, 0, 0, 86, *"gainsboro", *"#DCDCDC"> gainsboro;
      //     Catalog<0xF8F8FF, 248, 248, 255, 240, 6, 100, *"ghostwhite", *"#F8F8FF"> ghostwhite;
      //     Catalog<0xFFD700, 255, 215, 0, 51, 100, 100, *"gold", *"#FFD700"> gold;
      //     Catalog<0xDAA520, 218, 165, 32, 43, 85, 85, *"goldenrod", *"#DAA520"> goldenrod;
      //     Catalog<0x808080, 128, 128, 128, 0, 0, 50, *"gray", *"#808080"> gray;
      //     Catalog<0x808080, 128, 128, 128, 0, 0, 50, *"grey", *"#808080"> grey;
      //     Catalog<0x008000, 0, 128, 0, 120, 100, 50, *"green", *"#008000"> green;
      //     Catalog<0xADFF2F, 173, 255, 47, 84, 100, 100, *"greenyellow", *"#ADFF2F"> greenyellow;
      //     Catalog<0xF0FFF0, 240, 255, 255, 180, 12, 100, *"honeydew", *"#F0FFF0"> honeydew;
      //     Catalog<0xFF69B4, 255, 105, 180, 330, 59, 100, *"hotpink", *"#FF69B4"> hotpink;
      //     Catalog<0xCD5C5C, 205, 92, 92, 0, 55, 80, *"indianred", *"#CD5C5C"> indianred;
      //     Catalog<0x4B0082, 75, 0, 130, 275, 100, 51, *"indigo", *"#4B0082"> indigo;
      //     Catalog<0xFFFFF0, 255, 255, 240, 60, 6, 100, *"ivory", *"#FFFFF0"> ivory;
      //     Catalog<0xF0E68C, 240, 230, 140, 54, 42, 94, *"khaki", *"#F0E68C"> khaki;
      //     Catalog<0xE6E6FA, 230, 230, 250, 240, 8, 98, *"lavender", *"#E6E6FA"> lavender;
      //     Catalog<0xFFF0F5, 255, 240, 245, 340, 6, 100, *"lavenderblush", *"#FFF0F5"> lavenderblush;
      //     Catalog<0x7CFC00, 124, 252, 0, 90, 100, 99, *"lawngreen", *"#7CFC00"> lawngreen;
      //     Catalog<0xFFFACD, 255, 250, 205, 54, 20, 100, *"lemonchiffon", *"#FFFACD"> lemonchiffon;
      //     Catalog<0xADD8E6, 173, 216, 230, 195, 25, 90, *"lightblue", *"#ADD8E6"> lightblue;
      //     Catalog<0xF08080, 240, 128, 128, 0, 47, 94, *"lightcoral", *"#F08080"> lightcoral;
      //     Catalog<0xE0FFFF, 224, 255, 255, 180, 12, 100, *"lightcyan", *"#E0FFFF"> lightcyan;
      //     Catalog<0xFAFAD2, 250, 250, 210, 60, 16, 98, *"lightgoldenrodyellow", *"#FAFAD2"> lightgoldenrodyellow;
      //     Catalog<0xD3D3D3, 211, 211, 211, 0, 0, 83, *"lightgray", *"#D3D3D3"> lightgray;
      //     Catalog<0xD3D3D3, 211, 211, 211, 0, 0, 83, *"lightgrey", *"#D3D3D3"> lightgrey;
      //     Catalog<0x90EE90, 144, 238, 144, 120, 39, 93, *"lightgreen", *"#90EE90"> lightgreen;
      //     Catalog<0xFFB6C1, 255, 182, 193, 351, 29, 100, *"lightpink", *"#FFB6C1"> lightpink;
      //     Catalog<0xFFA07A, 255, 160, 122, 17, 53, 100, *"lightsalmon", *"#FFA07A"> lightsalmon;
      //     Catalog<0x20B2AA, 32, 178, 170, 177, 82, 69, *"lightseagreen", *"#20B2AA"> lightseagreen;
      //     Catalog<0x87CEFA, 135, 206, 250, 203, 46, 98, *"lightskyblue", *"#87CEFA"> lightskyblue;
      //     Catalog<0x778899, 119, 136, 153, 210, 22, 60, *"lightslategray", *"#778899"> lightslategray;
      //     Catalog<0x778899, 119, 136, 153, 210, 22, 60, *"lightslategrey", *"#778899"> lightslategrey;
      //     Catalog<0xB0C4DE, 176, 196, 222, 214, 21, 87, *"lightsteelblue", *"#B0C4DE"> lightsteelblue;
      //     Catalog<0xFFFFE0, 255, 255, 224, 60, 12, 100, *"lightyellow", *"#FFFFE0"> lightyellow;
      //     Catalog<0x00FF00, 0, 255, 0, 120, 100, 100, *"lime", *"#00FF00"> lime;
      //     Catalog<0x32CD32, 50, 205, 50, 120, 76, 80, *"limegreen", *"#32CD32"> limegreen;
      //     Catalog<0xFAF0E6, 250, 240, 230, 30, 8, 98, *"linen", *"#FAF0E6"> linen;
      //     Catalog<0xFF00FF, 255, 0, 255, 300, 100, 100, *"magenta", *"#FF00FF"> magenta;
      //     Catalog<0x800000, 128, 0, 0, 0, 100, 50, *"maroon", *"#800000"> maroon;
      //     Catalog<0x66CDAA, 102, 205, 170, 158, 50, 80, *"mediumaquamarine", *"#66CDAA"> mediumaquamarine;
      //     Catalog<0x0000CD, 0, 0, 205, 240, 100, 80, *"mediumblue", *"#0000CD"> mediumblue;
      //     Catalog<0xBA55D3, 186, 85, 211, 288, 60, 82, *"mediumorchid", *"#BA55D3"> mediumorchid;
      //     Catalog<0x9370DB, 147, 112, 219, 260, 49, 86, *"mediumpurple", *"#9370DB"> mediumpurple;
      //     Catalog<0x3CB371, 60, 179, 113, 147, 67, 70, *"mediumseagreen", *"#3CB371"> mediumseagreen;
      //     Catalog<0x7B68EE, 123, 104, 238, 249, 56, 80, *"mediumslateblue", *"#7B68EE"> mediumslateblue;
      //     Catalog<0x00FA9A, 0, 250, 154, 157, 100, 98, *"mediumspringgreen", *"#00FA9A"> mediumspringgreen;
      //     Catalog<0x48D1CC, 72, 209, 204, 178, 66, 82, *"mediumturquoise", *"#48D1CC"> mediumturquoise;
      //     Catalog<0xC71585, 199, 21, 133, 322, 89, 78, *"mediumvioletred", *"#C71585"> mediumvioletred;
      //     Catalog<0x191970, 25, 25, 112, 240, 78, 44, *"midnightblue", *"#191970"> midnightblue;
      //     Catalog<0xF5FFFA, 245, 255, 250, 150, 6, 100, *"mintcream", *"#F5FFFA"> mintcream;
      //     Catalog<0xFFE4E1, 255, 228, 225, 6, 12, 100, *"mistyrose", *"#FFE4E1"> mistyrose;
      //     Catalog<0xFFE4B5, 255, 228, 181, 38, 29, 100, *"moccasin", *"#FFE4B5"> moccasin;
      //     Catalog<0xFFDEAD, 255, 222, 173, 36, 32, 100, *"navajowhite", *"#FFDEAD"> navajowhite;
      //     Catalog<0x000080, 0, 0, 128, 240, 100, 50, *"navy", *"#000080"> navy;
      //     Catalog<0xFDF5E6, 253, 245, 230, 40, 9, 99, *"oldlace", *"#FDF5E6"> oldlace;
      //     Catalog<0x808000, 128, 128, 0, 60, 100, 50, *"olive", *"#808000"> olive;
      //     Catalog<0x6B8E23, 107, 142, 35, 80, 76, 55, *"olivedrab", *"#6B8E23"> olivedrab;
      //     Catalog<0xFFA500, 255, 165, 0, 39, 100, 100, *"orange", *"#FFA500"> orange;
      //     Catalog<0xFF4500, 255, 69, 0, 16, 100, 100, *"orangered", *"#FF4500"> orangered;
      //     Catalog<0xDA70D6, 218, 112, 214, 302, 49, 85, *"orchid", *"#DA70D6"> orchid;
      //     Catalog<0xEEE8AA, 238, 232, 170, 54, 29, 93, *"palegoldenrod", *"#EEE8AA"> palegoldenrod;
      //     Catalog<0x98FB98, 152, 251, 152, 120, 39, 98, *"palegreen", *"#98FB98"> palegreen;
      //     Catalog<0xAFEEEE, 175, 238, 238, 180, 26, 93, *"paleturquoise", *"#AFEEEE"> paleturquoise;
      //     Catalog<0xDB7093, 219, 112, 147, 340, 49, 85, *"palevioletred", *"#DB7093"> palevioletred;
      //     Catalog<0xFFEFD5, 255, 239, 213, 37, 16, 100, *"papayawhip", *"#FFEFD5"> papayawhip;
      //     Catalog<0xFFDAB9, 255, 218, 185, 28, 28, 100, *"peachpuff", *"#FFDAB9"> peachpuff;
      //     Catalog<0xCD853F, 205, 133, 63, 28, 69, 80, *"peru", *"#CD853F"> peru;
      //     Catalog<0xFFC0CB, 255, 192, 203, 350, 25, 100, *"pink", *"#FFC0CB"> pink;
      //     Catalog<0xDDA0DD, 221, 160, 221, 300, 27, 87, *"plum", *"#DDA0DD"> plum;
      //     Catalog<0xB0E0E6, 176, 224, 230, 187, 23, 90, *"powderblue", *"#B0E0E6"> powderblue;
      //     Catalog<0x800080, 128, 0, 128, 300, 100, 50, *"purple", *"#800080"> purple;
      //     Catalog<0x663399, 102, 51, 153, 270, 67, 60, *"rebeccapurple", *"#663399"> rebeccapurple;
      //     Catalog<0xFF0000, 255, 0, 0, 0, 100, 100, *"red", *"#FF0000"> red;
      //     Catalog<0xBC8F8F, 188, 143, 143, 0, 24, 73, *"rosybrown", *"#BC8F8F"> rosybrown;
      //     Catalog<0x4169E1, 65, 105, 225, 225, 71, 88, *"royalblue", *"#4169E1"> royalblue;
      //     Catalog<0x8B4513, 139, 69, 19, 25, 86, 55, *"saddlebrown", *"#8B4513"> saddlebrown;
      //     Catalog<0xFA8072, 250, 128, 114, 6, 54, 98, *"salmon", *"#FA8072"> salmon;
      //     Catalog<0xF4A460, 244, 164, 96, 28, 61, 96, *"sandybrown", *"#F4A460"> sandybrown;
      //     Catalog<0x2E8B57, 46, 139, 87, 146, 67, 55, *"seagreen", *"#2E8B57"> seagreen;
      //     Catalog<0xFFF5EE, 255, 245, 238, 25, 6, 100, *"seashell", *"#FFF5EE"> seashell;
      //     Catalog<0xA0522D, 160, 82, 45, 19, 72, 63, *"sienna", *"#A0522D"> sienna;
      //     Catalog<0xC0C0C0, 192, 192, 192, 0, 0, 75, *"silver", *"#C0C0C0"> silver;
      //     Catalog<0x87CEEB, 135, 206, 235, 197, 42, 92, *"skyblue", *"#87CEEB"> skyblue;
      //     Catalog<0x6A5ACD, 106, 90, 205, 248, 56, 67, *"slateblue", *"#6A5ACD"> slateblue;
      //     Catalog<0x708090, 112, 128, 144, 210, 22, 56, *"slategray", *"#708090"> slategray;
      //     Catalog<0x708090, 112, 128, 144, 210, 22, 56, *"slategrey", *"#708090"> slategrey;
      //     Catalog<0xFFFAFA, 255, 250, 250, 0, 2, 100, *"snow", *"#FFFAFA"> snow;
      //     Catalog<0x00FF7F, 0, 255, 127, 150, 100, 100, *"springgreen", *"#00FF7F"> springgreen;
      //     Catalog<0x4682B4, 70, 130, 180, 207, 61, 70, *"steelblue", *"#4682B4"> steelblue;
      //     Catalog<0xD2B48C, 210, 180, 140, 34, 33, 82, *"tan", *"#D2B48C"> tan;
      //     Catalog<0x008080, 0, 128, 128, 180, 100, 50, *"teal", *"#008080"> teal;
      //     Catalog<0xD8BFD8, 216, 191, 216, 300, 12, 85, *"thistle", *"#D8BFD8"> thistle;
      //     Catalog<0xFF6347, 255, 99, 71, 9, 72, 100, *"tomato", *"#FF6347"> tomato;
      //     Catalog<0x40E0D0, 64, 224, 208, 174, 71, 88, *"turquoise", *"#40E0D0"> turquoise;
      //     Catalog<0xEE82EE, 238, 130, 238, 300, 45, 93, *"violet", *"#EE82EE"> violet;
      //     Catalog<0xF5DEB3, 245, 222, 179, 39, 27, 96, *"wheat", *"#F5DEB3"> wheat;
      //     Catalog<0xFFFFFF, 255, 255, 255, 0, 0, 100, *"white", *"#FFFFFF"> white;
      //     Catalog<0xF5F5F5, 245, 245, 245, 0, 0, 96, *"whitesmoke", *"#F5F5F5"> whitesmoke;
      //     Catalog<0xFFFF00, 255, 255, 0, 60, 100, 100, *"yellow", *"#FFFF00"> yellow;
      //     Catalog<0x9ACD32, 154, 205, 50, 80, 76, 80, *"yellowgreen", *"#9ACD32"> yellowgreen;

      // };
