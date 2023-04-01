// possíveis recursos de aprimoramento de arquitetura
  // aqui podem ser testados diversos algoritmos

  // Typers Mapping
    // Karzok
declare interface WKarzok {

  constructor: {

    cubbic: WKCubbic

  }

}

declare interface WKCubbic {

  tamanho: {

    estruturas: {

      "02x02": [[][]]

      "03x03": [[][][]]

      "04x04": [[][][][]]

      "05x05": [[][][][][]]
      
      "06x06": [[][][][][][]]
      
      "07x07": [[][][][][][][]]
      
      "08x08": [[][][][][][][][]]
      
      "09x09": [[][][][][][][][][]]
      
      "10x10": [[][][][][][][][][][]]

    }

    aviso: String

  }

  pontuacao: {

    valor: Number
    cor: String

  }

  ranking: {

    meta: Number
    nome: String

  }

}


    // Lydroc
declare interface WKLydroc { }
    // Terminal-Spectrals
declare interface WKTerminalSpectrals { }


// Legacy Code TerminalSpectrals
declare namespace TypeSpecTermDefines {
  
  type SpectralsFormatation=
  {
  
    yellow: "/[f]{2}[4-9a-f]{2}[0]{2}[0-9a-f]{2}/g",
    purple: "/[4-9a-f]{2}[0]{2}[4-9a-f]{2}[0-9a-f]{2}/g",
    white: "/[9a-f]{6}[0-9a-f]{2}/g",
    black: "/[0-8]{6}[0-9a-f]{2}/g"
  
  };

  type TerminalStylesheets= 
  {

    formatation: 
    { 
      
      bold: "01m",
      faint: "02m",
      italic: "03m",
      underline: "04m",
      slow_blink: "05m",
      rapid_blink: "06m",
      reverse: "07m",
      conceal: "08m",
      crossed_out: "09m",
      font: 
      {
        
        of00: "10m",
        of01: "11m",
        of02: "12m",
        of03: "13m",
        of04: "14m",
        of05: "15m",
        of06: "16m",
        of07: "17m",
        of08: "18m",
        of09: "19m",

      },
      fraktur: "20m",
      doubly_underline: "21m",
      normal_intensity: "22m",
      not_italic: "23m",
      not_underline: "24m",
      blink_off: "25m",
      spacing: "26m",
      reverse_off: "27m",
      conceal_off: "28m",
      not_crossed: "29m",
      proposital_spacing: "50m",
      framed: "51m",
      encircled: "52m",
      overlined: "53m",
      not_encircled: "54m",
      not_overlined: "55m",
      underlined: "58m",
      superscript: "73m",
      subscript: "74m",
      non_superscript_subscript: "75m" 

    }

    color_formatation: 
    {

      M3B4BIT: ColorModels.Formatation.F3B4BIT,

      M8BIT: ColorModels.Formatation.F8BIT,

      M24BIT: ColorModels.Formatation.F24BIT

    },

    color_catalogy: {

      terminal: ColorModels.Terminal;

      web: ColorModels.Web;

    }

  };

  namespace ColorModels { 
    
    type Terminal= 
    {
  
      pallet_001: "#000000";
      pallet_002: "#800000";
      pallet_003: "#008000";
      pallet_004: "#808000";
      pallet_005: "#000080";
      pallet_006: "#800080";
      pallet_007: "#008080";
      pallet_008: "#808080";
      pallet_009: "#C0C0C0";
      pallet_010: "#FF0000";
      pallet_011: "#00FF00";
      pallet_012: "#FFFF00";
      pallet_013: "#0000FF";
      pallet_014: "#FF00FF";
      pallet_015: "#00FFFF";
      pallet_016: "#FFFFFF";
      pallet_017: "#00005F";
      pallet_018: "#000087";
      pallet_019: "#0000AF";
      pallet_020: "#0000D7";
      pallet_021: "#005F00";
      pallet_022: "#005F5F";
      pallet_023: "#005F87";
      pallet_024: "#005FAF";
      pallet_025: "#005FD7";
      pallet_026: "#005FFF";
      pallet_027: "#008700";
      pallet_028: "#00875F";
      pallet_029: "#008787";
      pallet_030: "#0087AF";
      pallet_031: "#0087D7";
      pallet_032: "#0087FF";
      pallet_033: "#00AF00";
      pallet_034: "#00AF5F";
      pallet_035: "#00AF87";
      pallet_036: "#00AFAF";
      pallet_037: "#00AFD7";
      pallet_038: "#00AFFF";
      pallet_039: "#00D700";
      pallet_040: "#00D75F";
      pallet_041: "#00D787";
      pallet_042: "#00D7AF";
      pallet_043: "#00D7D7";
      pallet_044: "#00D7FF";
      pallet_045: "#00FF5F";
      pallet_046: "#00FF87";
      pallet_047: "#00FFAF";
      pallet_048: "#00FFD7";
      pallet_049: "#5F0000";
      pallet_050: "#5F005F";
      pallet_051: "#5F0087";
      pallet_052: "#5F00AF";
      pallet_053: "#5F00D7";
      pallet_054: "#5F00FF";
      pallet_055: "#5F5F00";
      pallet_056: "#5F5F5F";
      pallet_057: "#5F5F87";
      pallet_058: "#5F5FAF";
      pallet_059: "#5F5FD7";
      pallet_060: "#5F5FFF";
      pallet_061: "#5F8700";
      pallet_062: "#5F875F";
      pallet_063: "#5F8787";
      pallet_064: "#5F87AF";
      pallet_065: "#5F87D7";
      pallet_066: "#5F87FF";
      pallet_067: "#5FAF00";
      pallet_068: "#5FAF5F";
      pallet_069: "#5FAF87";
      pallet_070: "#5FAFAF";
      pallet_071: "#5FAFD7";
      pallet_072: "#5FAFFF";
      pallet_073: "#5FD700";
      pallet_074: "#5FD75F";
      pallet_075: "#5FD787";
      pallet_076: "#5FD7AF";
      pallet_077: "#5FD7D7";
      pallet_078: "#5FD7FF";
      pallet_079: "#5FFF00";
      pallet_080: "#5FFF5F";
      pallet_081: "#5FFF87";
      pallet_082: "#5FFFAF";
      pallet_083: "#5FFFD7";
      pallet_084: "#5FFFFF";
      pallet_085: "#870000";
      pallet_086: "#87005F";
      pallet_087: "#870087";
      pallet_088: "#8700AF";
      pallet_089: "#8700D7";
      pallet_090: "#8700FF";
      pallet_091: "#875F00";
      pallet_092: "#875F5F";
      pallet_093: "#875F87";
      pallet_094: "#875FAF";
      pallet_095: "#875FD7";
      pallet_096: "#875FFF";
      pallet_097: "#878700";
      pallet_098: "#87875F";
      pallet_099: "#878787";
      pallet_100: "#8787AF";
      pallet_101: "#8787D7";
      pallet_102: "#8787FF";
      pallet_103: "#87AF00";
      pallet_104: "#87AF5F";
      pallet_105: "#87AF87";
      pallet_106: "#87AFAF";
      pallet_107: "#87AFD7";
      pallet_108: "#87AFFF";
      pallet_109: "#87D700";
      pallet_110: "#87D75F";
      pallet_111: "#87D787";
      pallet_112: "#87D7AF";
      pallet_113: "#87D7D7";
      pallet_114: "#87D7FF";
      pallet_115: "#87FF00";
      pallet_116: "#87FF5F";
      pallet_117: "#87FF87";
      pallet_118: "#87FFAF";
      pallet_119: "#87FFD7";
      pallet_120: "#87FFFF";
      pallet_121: "#AF0000";
      pallet_122: "#AF005F";
      pallet_123: "#AF0087";
      pallet_124: "#AF00AF";
      pallet_125: "#AF00D7";
      pallet_126: "#AF00FF";
      pallet_127: "#AF5F00";
      pallet_128: "#AF5F5F";
      pallet_129: "#AF5F87";
      pallet_130: "#AF5FAF";
      pallet_131: "#AF5FD7";
      pallet_132: "#AF5FFF";
      pallet_133: "#AF8700";
      pallet_134: "#AF875F";
      pallet_135: "#AF8787";
      pallet_136: "#AF87AF";
      pallet_137: "#AF87D7";
      pallet_138: "#AF87FF";
      pallet_139: "#AFAF00";
      pallet_140: "#AFAF5F";
      pallet_141: "#AFAF87";
      pallet_142: "#AFAFAF";
      pallet_143: "#AFAFD7";
      pallet_144: "#AFAFFF";
      pallet_145: "#AFD700";
      pallet_146: "#AFD75F";
      pallet_147: "#AFD787";
      pallet_148: "#AFD7AF";
      pallet_149: "#AFD7D7";
      pallet_150: "#AFD7FF";
      pallet_151: "#AFFF00";
      pallet_152: "#AFFF5F";
      pallet_153: "#AFFF87";
      pallet_154: "#AFFFAF";
      pallet_155: "#AFFFD7";
      pallet_156: "#AFFFFF";
      pallet_157: "#D70000";
      pallet_158: "#D7005F";
      pallet_159: "#D70087";
      pallet_160: "#D700AF";
      pallet_161: "#D700D7";
      pallet_162: "#D700FF";
      pallet_163: "#D75F00";
      pallet_164: "#D75F5F";
      pallet_165: "#D75F87";
      pallet_166: "#D75FAF";
      pallet_167: "#D75FD7";
      pallet_168: "#D75FFF";
      pallet_169: "#D78700";
      pallet_170: "#D7875F";
      pallet_171: "#D78787";
      pallet_172: "#D787AF";
      pallet_173: "#D787D7";
      pallet_174: "#D787FF";
      pallet_175: "#D7AF00";
      pallet_176: "#D7AF5F";
      pallet_177: "#D7AF87";
      pallet_178: "#D7AFAF";
      pallet_179: "#D7AFD7";
      pallet_180: "#D7AFFF";
      pallet_181: "#D7D700";
      pallet_182: "#D7D75F";
      pallet_183: "#D7D787";
      pallet_184: "#D7D7AF";
      pallet_185: "#D7D7D7";
      pallet_186: "#D7D7FF";
      pallet_187: "#D7FF00";
      pallet_188: "#D7FF5F";
      pallet_189: "#D7FF87";
      pallet_190: "#D7FFAF";
      pallet_191: "#D7FFD7";
      pallet_192: "#D7FFFF";
      pallet_193: "#FF005F";
      pallet_194: "#FF0087";
      pallet_195: "#FF00AF";
      pallet_196: "#FF00D7";
      pallet_197: "#FF5F00";
      pallet_198: "#FF5F5F";
      pallet_199: "#FF5F87";
      pallet_200: "#FF5FAF";
      pallet_201: "#FF5FD7";
      pallet_202: "#FF5FFF";
      pallet_203: "#FF8700";
      pallet_204: "#FF875F";
      pallet_205: "#FF8787";
      pallet_206: "#FF87AF";
      pallet_207: "#FF87D7";
      pallet_208: "#FF87FF";
      pallet_209: "#FFAF00";
      pallet_210: "#FFAF5F";
      pallet_211: "#FFAF87";
      pallet_212: "#FFAFAF";
      pallet_213: "#FFAFD7";
      pallet_214: "#FFAFFF";
      pallet_215: "#FFD700";
      pallet_216: "#FFD75F";
      pallet_217: "#FFD787";
      pallet_218: "#FFD7AF";
      pallet_219: "#FFD7D7";
      pallet_220: "#FFD7FF";
      pallet_221: "#FFFF5F";
      pallet_222: "#FFFF87";
      pallet_223: "#FFFFAF";
      pallet_224: "#FFFFD7";
      pallet_225: "#080808";
      pallet_226: "#121212";
      pallet_227: "#1C1C1C";
      pallet_228: "#262626";
      pallet_229: "#303030";
      pallet_230: "#3A3A3A";
      pallet_231: "#444444";
      pallet_232: "#4E4E4E";
      pallet_233: "#585858";
      pallet_234: "#626262";
      pallet_235: "#6C6C6C";
      pallet_236: "#767676";
      pallet_237: "#8A8A8A";
      pallet_238: "#949494";
      pallet_239: "#9E9E9E";
      pallet_240: "#A8A8A8";
      pallet_241: "#B2B2B2";
      pallet_242: "#BCBCBC";
      pallet_243: "#C6C6C6";
      pallet_244: "#D0D0D0";
      pallet_245: "#DADADA";
      pallet_247: "#E4E4E4";
      pallet_248: "#EEEEEE";
  
    };

    type Web= 
    {

      alice_blue: "#F0F8FF"; 
      antique_white: "#FAEBD7";
      aqua: "#00FFFF";
      aqua_marine: "#7FFFD4";
      azure: "#F0FFFF";
      beige: "#F5F5DC";
      bisque: "#FFE4C4";
      black: "#000000";
      blanchedalmond: "#FFEBCD";
      blue: "#0000FF";
      blue_violet: "#8A2BE2";
      brown: "#A52A2A";
      burlywood: "#DEB887";
      cadet_blue: "#5F9EA0";
      chartreuse: "#7FFF00";
      chocolate: "#D2691E";
      coral: "#FF7F50";
      corn_flower_blue: "#6495ED";
      cornsilk: "#FFF8DC";
      crimson: "#DC143C";
      cyan: "#00FFFF";
      dark_blue: "#00008B";
      dark_cyan: "#008B8B";
      dark_golden_rod: "#B8860B";
      dark_gray: "#A9A9A9";
      dark_green: "#006400";
      dark_khaki: "#BDB76B";
      dark_magenta: "#8B008B";
      dark_olive_green: "#556B2F";
      dark_orange: "#FF8C00";
      dark_orchild: "#9932CC";
      dark_red: "#8B0000";
      dark_salmon: "#E9967A";
      dark_sea_green: "#8FBC8F";
      dark_slate_blue: "#483D8B";
      dark_slate_gray: "#2F4F4F";
      dark_turquiose: "#00CED1";
      dark_violet: "#9400D3";
      deep_pink: "#FF1493";
      deep_sky_blue: "#00BFFF";
      dim_gray: "#696969";
      dodger_blue: "#1E90FF";
      firebrick: "#B22222";
      floralwhite: "#FFFAF0";
      florest_green: "#228B22";
      fucsia: "#FF00FF";
      gainsboro: "#DCDCDC";
      ghostwhite: "#F8F8FF";
      gold: "#FFD700";
      golden_rod: "#DAA520";
      gray: "#808080";
      green: "#008000";
      green_yellow: "#ADFF2F";
      honeydew: "#F0FFF0";
      hotpink: "#FF69B4";
      indianRed: "#CD5C5C";
      indigo: "#4B0082";
      ivory: "#FFFFF0";
      khaki: "#F0E68C"; 
      lavender: "#E6E6FA";
      lavender_blush: "#FFF0F5";
      lawn_green: "#7CFC00";
      lemonchiffon: "#FFFACD";
      light_blue: "#ADD8E6";
      light_coral: "#F08080";
      light_cyan: "#E0FFFF";
      light_golden_rod_yellow: "#FAFAD2";
      light_gray: "#D3D3D3";
      light_green: "#90EE90";
      light_pink: "#FFB6C1";
      light_salmon: "#FFA07A";
      light_sea_green: "#20B2AA";
      light_sky_blue:  "#87CEFA";
      light_slate_gray: "#778899";
      light_steel_blue: "#B0C4DE";
      light_yellow: "#FFFFE0";
      lime: "#00FF00"; 
      lime_green: "#32CD32"; 
      linen: "#FAF0E6";
      magenta: "#FF00FF";
      maroon: "#800000"; 
      medium_aquamarine: "#66CDAA";
      medium_blue: "#0000CD";
      medium_orchid: "#BA55D3";
      medium_purple: "#9370DB";
      medium_sea_green: "#3CB371";
      medium_slate_blue: "#7B68EE";
      medium_spring_green: "#00FA9A";
      medium_turquiose: "#48D1CC";
      medium_violet_red: "#C71585";
      midmight_blue: "#191970";
      mint_cream: "#F5FFFA";
      misty_rose: "#FFE4E1";
      moccasin: "#FFE4B5";
      navajo_white: "#FFDEAD";
      navy: "#000080";
      old_lace: "#FDF5E6";
      olive: "#808000";
      olive_drab: "#6B8E23";
      orange: "#FFA500";
      orange_red: "#FF4500";
      orchid: "#DA70D6";
      pale_golden_rod: "#EEE8AA";
      pale_green: "#98FB98";
      pale_turquoise: "#AFEEEE";
      pale_violet_red: "#DB7093";
      papaya_whip: "#FFEFD5";
      peachpuff: "#FFDAB9";
      peru: "#CD853F";
      pink: "#FFC0CB";
      plum: "#DDA0DD";
      powder_blue: "#B0E0E6";
      purple: "#800080";
      rebecca_purple: "#663399";
      red: "#FF0000";
      rosy_brown: "#BC8F8F";
      royal_blue: "#4169E1";
      saddle_brown: "#8B4513";
      salmon: "#FA8072";
      sandy_brown: "#F4A460";
      sea_green: "#2E8B57";
      seashell: "#FFF5EE";
      sienna: "#A0522D";
      silver: "#C0C0C0";
      sky_blue: "#87CEEB";
      slate_blue: "#6A5ACD";
      slate_gray: "#708090";
      snow: "#FFFAFA";
      spring_green: "#00FF7F";
      steel_blue: "#4682B4";
      tan: "#D2B48C";
      teal: "#008080";
      thistle: "#D8BFD8";
      tomato: "#FF6347";
      turquiose: "#40E0D0";
      violet: "#EE82EE";
      wheat: "#F5DEB3";
      white: "#FFFFFF";
      whitesmoke: "#F5F5F5";
      yellow: "#FFFF00";
      yellow_green: "#9ACD32";

    };
    
    namespace Formatation {
  
      type F3B4BIT= 
      { 
        
        letter: 
        { 
  
          black: "30m",
          red: "31m",
          green: "32m",
          yellow: "33m",
          blue: "34m",
          purple: "35m",
          cyan: "36m",
          gray: "37m",
          lightgray: "90m",
          lightred: "91m",
          lightgreen: "92m",
          lightyellow: "93m",
          classicblue: "94m",
          pink: "95m",
          lightblue: "96m",
          white: "97m"
  
        }, 
        
        background: 
        { 
  
          black: "40m",
          red: "41m",
          green: "42m",
          yellow: "43m",
          blue: "44m",
          purple: "45m",
          cyan: "46m",
          gray: "47m",
          lightgray: "100m",
          lightred: "101m",
          lightgreen: "102m",
          lightyellow: "103m",
          classicblue: "104m",
          pink: "105m",
          lightblue: "106m",
          white: "107m"
  
        } 
      
      };
  
      type F8BIT<N extends string | number | bigint | boolean=MappedSpectral>= 
      { 
        
        letter: `38;5;${ N }m`, 
        background: `48;5;${ N }m` 
      
      };
  
      type F24BIT<R extends string|number|bigint|boolean=MappedSpectral, G extends string|number|bigint|boolean=MappedSpectral, B extends string|number|bigint|boolean=MappedSpectral>= 
      { 
      
        letter: `38;2;${ R };${ G };${ B }m`, 
        background: `48;2;${ R };${ G };${ B }m`
      
      };
  
      type MappedSpectral = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99|100|101|102|103|104|105|106|107|108|109|110|111|112|113|114|115|116|117|118|119|120|121|122|123|124|125|126|127|128|129|130|131|132|133|134|135|136|137|138|139|140|141|142|143|144|145|146|147|148|149|150|151|152|153|154|155|156|157|158|159|160|161|162|163|164|165|166|167|168|169|170|171|172|173|174|175|176|177|178|179|180|181|182|183|184|185|186|187|188|189|190|191|192|193|194|195|196|197|198|199|200|201|202|203|204|205|206|207|208|209|210|211|212|213|214|215|216|217|218|219|220|221|222|223|224|225|226|227|228|229|230|231|232|233|234|235|236|237|238|239|240|241|242|243|244|245|246|247|248|249|250|251|252|253|254|255;
  
    }
  
  }

}

/** @deprecated No use this. @description Behind Module */
declare class WMCalcConv { readonly conversores = 0; }

