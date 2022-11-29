declare module "@wtfy/typedefs" { }


// "#ffff00", "#ffdd00", "#ffbb00", "#ff9900"
declare type ColorYellowFormatter = '/[f]{2}[4-9a-f]{2}[0]{2}[0-9a-f]{2}/g';

// "#660066", "#770077", "#880088", "#990099"
declare type ColorPurpleFormatter = '/[4-9a-f]{2}[0]{2}[4-9a-f]{2}[0-9a-f]{2}/g';

// "#ffffff", "#dddddd", "#bbbbbb", "#999999"
declare type ColorWhiteFormatter = '/[9a-f]{6}[0-9a-f]{2}/g';

// "#000000", "#111111", "#222222", "#333333"
declare type ColorBlackFormatter = '/[0-8]{6}[0-9a-f]{2}/g';


// "3b4bit"|"8bit"|"24bit";
declare type TerminalColorSchemas = "3b4bit"|"8bit"|"24bit";

// "C"|"F";
declare type TerminalColorFormatSchemas = "Color"|"Format";

/**
 * declare type TSCollection = TAmarelo | TBranco | TPreto;
  declare type Presets<Format extends TSCollection> = Format;
  declare type DefinePresets<Selecao extends Presets<TSCollection>> = Selecao;

  declare type CorTerminal = {

    hexadecimal: {
      
      t000000: "#000000";
      t800000: "#800000";
      t008000: "#008000";
      t808000: "#808000";
      t000080: "#000080";
      t800080: "#800080";
      t008080: "#008080";
      t808080: "#808080";
      tC0C0C0: "#C0C0C0";
      tFF0000: "#FF0000";
      t00FF00: "#00FF00";
      tFFFF00: "#FFFF00";
      t0000FF: "#0000FF";
      tFF00FF: "#FF00FF";
      t00FFFF: "#00FFFF";
      tFFFFFF: "#FFFFFF";
      t00005F: "#00005F";
      t000087: "#000087";
      t0000AF: "#0000AF";
      t0000D7: "#0000D7";
      t005F00: "#005F00";
      t005F5F: "#005F5F";
      t005F87: "#005F87";
      t005FAF: "#005FAF";
      t005FD7: "#005FD7";
      t005FFF: "#005FFF";
      t008700: "#008700";
      t00875F: "#00875F";
      t008787: "#008787";
      t0087AF: "#0087AF";
      t0087D7: "#0087D7";
      t0087FF: "#0087FF";
      t00AF00: "#00AF00";
      t00AF5F: "#00AF5F";
      t00AF87: "#00AF87";
      t00AFAF: "#00AFAF";
      t00AFD7: "#00AFD7";
      t00AFFF: "#00AFFF";
      t00D700: "#00D700";
      t00D75F: "#00D75F";
      t00D787: "#00D787";
      t00D7AF: "#00D7AF";
      t00D7D7: "#00D7D7";
      t00D7FF: "#00D7FF";
      t00FF5F: "#00FF5F";
      t00FF87: "#00FF87";
      t00FFAF: "#00FFAF";
      t00FFD7: "#00FFD7";
      t5F0000: "#5F0000";
      t5F005F: "#5F005F";
      t5F0087: "#5F0087";
      t5F00AF: "#5F00AF";
      t5F00D7: "#5F00D7";
      t5F00FF: "#5F00FF";
      t5F5F00: "#5F5F00";
      t5F5F5F: "#5F5F5F";
      t5F5F87: "#5F5F87";
      t5F5FAF: "#5F5FAF";
      t5F5FD7: "#5F5FD7";
      t5F5FFF: "#5F5FFF";
      t5F8700: "#5F8700";
      t5F875F: "#5F875F";
      t5F8787: "#5F8787";
      t5F87AF: "#5F87AF";
      t5F87D7: "#5F87D7";
      t5F87FF: "#5F87FF";
      t5FAF00: "#5FAF00";
      t5FAF5F: "#5FAF5F";
      t5FAF87: "#5FAF87";
      t5FAFAF: "#5FAFAF";
      t5FAFD7: "#5FAFD7";
      t5FAFFF: "#5FAFFF";
      t5FD700: "#5FD700";
      t5FD75F: "#5FD75F";
      t5FD787: "#5FD787";
      t5FD7AF: "#5FD7AF";
      t5FD7D7: "#5FD7D7";
      t5FD7FF: "#5FD7FF";
      t5FFF00: "#5FFF00";
      t5FFF5F: "#5FFF5F";
      t5FFF87: "#5FFF87";
      t5FFFAF: "#5FFFAF";
      t5FFFD7: "#5FFFD7";
      t5FFFFF: "#5FFFFF";
      t870000: "#870000";
      t87005F: "#87005F";
      t870087: "#870087";
      t8700AF: "#8700AF";
      t8700D7: "#8700D7";
      t8700FF: "#8700FF";
      t875F00: "#875F00";
      t875F5F: "#875F5F";
      t875F87: "#875F87";
      t875FAF: "#875FAF";
      t875FD7: "#875FD7";
      t875FFF: "#875FFF";
      t878700: "#878700";
      t87875F: "#87875F";
      t878787: "#878787";
      t8787AF: "#8787AF";
      t8787D7: "#8787D7";
      t8787FF: "#8787FF";
      t87AF00: "#87AF00";
      t87AF5F: "#87AF5F";
      t87AF87: "#87AF87";
      t87AFAF: "#87AFAF";
      t87AFD7: "#87AFD7";
      t87AFFF: "#87AFFF";
      t87D700: "#87D700";
      t87D75F: "#87D75F";
      t87D787: "#87D787";
      t87D7AF: "#87D7AF";
      t87D7D7: "#87D7D7";
      t87D7FF: "#87D7FF";
      t87FF00: "#87FF00";
      t87FF5F: "#87FF5F";
      t87FF87: "#87FF87";
      t87FFAF: "#87FFAF";
      t87FFD7: "#87FFD7";
      t87FFFF: "#87FFFF";
      tAF0000: "#AF0000";
      tAF005F: "#AF005F";
      tAF0087: "#AF0087";
      tAF00AF: "#AF00AF";
      tAF00D7: "#AF00D7";
      tAF00FF: "#AF00FF";
      tAF5F00: "#AF5F00";
      tAF5F5F: "#AF5F5F";
      tAF5F87: "#AF5F87";
      tAF5FAF: "#AF5FAF";
      tAF5FD7: "#AF5FD7";
      tAF5FFF: "#AF5FFF";
      tAF8700: "#AF8700";
      tAF875F: "#AF875F";
      tAF8787: "#AF8787";
      tAF87AF: "#AF87AF";
      tAF87D7: "#AF87D7";
      tAF87FF: "#AF87FF";
      tAFAF00: "#AFAF00";
      tAFAF5F: "#AFAF5F";
      tAFAF87: "#AFAF87";
      tAFAFAF: "#AFAFAF";
      tAFAFD7: "#AFAFD7";
      tAFAFFF: "#AFAFFF";
      tAFD700: "#AFD700";
      tAFD75F: "#AFD75F";
      tAFD787: "#AFD787";
      tAFD7AF: "#AFD7AF";
      tAFD7D7: "#AFD7D7";
      tAFD7FF: "#AFD7FF";
      tAFFF00: "#AFFF00";
      tAFFF5F: "#AFFF5F";
      tAFFF87: "#AFFF87";
      tAFFFAF: "#AFFFAF";
      tAFFFD7: "#AFFFD7";
      tAFFFFF: "#AFFFFF";
      tD70000: "#D70000";
      tD7005F: "#D7005F";
      tD70087: "#D70087";
      tD700AF: "#D700AF";
      tD700D7: "#D700D7";
      tD700FF: "#D700FF";
      tD75F00: "#D75F00";
      tD75F5F: "#D75F5F";
      tD75F87: "#D75F87";
      tD75FAF: "#D75FAF";
      tD75FD7: "#D75FD7";
      tD75FFF: "#D75FFF";
      tD78700: "#D78700";
      tD7875F: "#D7875F";
      tD78787: "#D78787";
      tD787AF: "#D787AF";
      tD787D7: "#D787D7";
      tD787FF: "#D787FF";
      tD7AF00: "#D7AF00";
      tD7AF5F: "#D7AF5F";
      tD7AF87: "#D7AF87";
      tD7AFAF: "#D7AFAF";
      tD7AFD7: "#D7AFD7";
      tD7AFFF: "#D7AFFF";
      tD7D700: "#D7D700";
      tD7D75F: "#D7D75F";
      tD7D787: "#D7D787";
      tD7D7AF: "#D7D7AF";
      tD7D7D7: "#D7D7D7";
      tD7D7FF: "#D7D7FF";
      tD7FF00: "#D7FF00";
      tD7FF5F: "#D7FF5F";
      tD7FF87: "#D7FF87";
      tD7FFAF: "#D7FFAF";
      tD7FFD7: "#D7FFD7";
      tD7FFFF: "#D7FFFF";
      tFF005F: "#FF005F";
      tFF0087: "#FF0087";
      tFF00AF: "#FF00AF";
      tFF00D7: "#FF00D7";
      tFF5F00: "#FF5F00";
      tFF5F5F: "#FF5F5F";
      tFF5F87: "#FF5F87";
      tFF5FAF: "#FF5FAF";
      tFF5FD7: "#FF5FD7";
      tFF5FFF: "#FF5FFF";
      tFF8700: "#FF8700";
      tFF875F: "#FF875F";
      tFF8787: "#FF8787";
      tFF87AF: "#FF87AF";
      tFF87D7: "#FF87D7";
      tFF87FF: "#FF87FF";
      tFFAF00: "#FFAF00";
      tFFAF5F: "#FFAF5F";
      tFFAF87: "#FFAF87";
      tFFAFAF: "#FFAFAF";
      tFFAFD7: "#FFAFD7";
      tFFAFFF: "#FFAFFF";
      tFFD700: "#FFD700";
      tFFD75F: "#FFD75F";
      tFFD787: "#FFD787";
      tFFD7AF: "#FFD7AF";
      tFFD7D7: "#FFD7D7";
      tFFD7FF: "#FFD7FF";
      tFFFF5F: "#FFFF5F";
      tFFFF87: "#FFFF87";
      tFFFFAF: "#FFFFAF";
      tFFFFD7: "#FFFFD7";
      t080808: "#080808";
      t121212: "#121212";
      t1C1C1C: "#1C1C1C";
      t262626: "#262626";
      t303030: "#303030";
      t3A3A3A: "#3A3A3A";
      t444444: "#444444";
      t4E4E4E: "#4E4E4E";
      t585858: "#585858";
      t626262: "#626262";
      t6C6C6C: "#6C6C6C";
      t767676: "#767676";
      t8A8A8A: "#8A8A8A";
      t949494: "#949494";
      t9E9E9E: "#9E9E9E";
      tA8A8A8: "#A8A8A8";
      tB2B2B2: "#B2B2B2";
      tBCBCBC: "#BCBCBC";
      tC6C6C6: "#C6C6C6";
      tD0D0D0: "#D0D0D0";
      tDADADA: "#DADADA";
      tE4E4E4: "#E4E4E4";
      tEEEEEE: "#EEEEEE";
    
    }

  };

  declare type CorWeb = {

    coreshtml: {

      AliceBlue: "aliceblue"; 
      AntiqueWhite: "antiquewhite";
      Aqua: "aqua";
      AquaMarine: "aquamarine";
      Azure: "azure";
      Beige: "beige";
      Bisque: "bisque";
      Black: "black";
      Blanchedalmond: "blanchedalmond";
      Blue: "blue";
      BlueViolet: "blueviolet";
      Brown: "brown";
      Burlywood: "burlywood";
      CadetBlue: "cadetblue";
      Chartreuse: "chartreuse";
      Chocolate: "chocolate";
      Coral: "coral";
      CornFlowerBlue: "cornflowerblue";
      Cornsilk: "cornsilk";
      Crimson: "crimson";
      Cyan: "cyan";
      DarkBlue: "darkblue";
      DarkCyan: "darkcyan";
      DarkGoldenRod: "darkgoldenrod";
      DarkGray: "darkgray";
      DarkGreen: "darkgreen";
      DarkKhaki: "darkkhaki";
      DarkMagenta: "darkmagenta";
      DarkOliveGreen: "darkolivegreen";
      DarkOrange: "darkorange";
      DarkOrchild: "darkorchid";
      DarkRed: "darkred";
      DarkSalmon: "darksalmon";
      DarkSeaGreen: "darkseagreen";
      DarkSlateBlue: "darkslateblue";
      DarkSlateGray: "darkslategray";
      DarkTurquiose: "darkturquoise";
      DarkViolet: "darkviolet";
      DeepPink: "deeppink";
      DeepSkyBlue: "deepskyblue";
      DimGray: "dimgray";
      DodgerBlue: "dodgerblue";
      Firebrick: "firebrick";
      Floralwhite: "floralwhite";
      FlorestGreen: "florestgreen";
      Fucsia: "fucsia";
      Gainsboro: "gainsboro";
      Ghostwhite: "ghostwhite";
      Gold: "gold";
      GoldenRod: "goldenrod";
      Gray: "gray";
      Green: "green";
      GreenYellow: "greenyellow";
      Honeydew: "honeydew";
      Hotpink: "hotpink";
      IndianRed: "indianred";
      Ivory: "ivory";
      Khaki: "khaki"; 
      Lavender: "lavender";
      LavenderBlush: "lavenderblush";
      LawnGreen: "lawngreen";
      Lemonchiffon: "lemonchiffon";
      LightBlue: "lightblue";
      LightCoral: "lightcoral";
      LightCyan: "lightcyan";
      LightGoldenRodYellow: "lightgoldenrodyellow";
      LightGray: "lightgray";
      LightGreen: "lightgreen";
      LightPink: "lightpink";
      LightSalmon: "lightsalmon";
      LightSeaGreen: "lightseagreen";
      LightSkyBlue:  "lightskyblue";
      LightSlateGray: "lightslategray";
      LightSteelBlue: "lightsteelblue";
      LightYellow: "lightyellow";
      Lime: "lime"; 
      LimeGreen: "limegreen"; 
      Linen: "linen";
      Magenta: "magenta";
      Maroon: "maroon"; 
      MediumAquamarine: "mediumaquamarine";
      MediumBlue: "mediumblue";
      MediumOrchid: "mediumorchid";
      MediumSeaGreen: "mediumseagreen";
      MediumSlateBlue: "mediumslateblue";
      MediumSpringGreen: "mediumspringgreen";
      MediumTurquiose: "mediumturquoise";
      MediumVioletRed: "mediumvioletred";
      MidmightBlue: "midnightblue";
      MintCream: "mintcream";
      Mistyrose: "mistyrose";
      Moccasin: "moccasin";
      NavajoWhite: "navajowhite";
      Navy: "navy";
      OldLace: "oldlace";
      Olive: "olive";
      OliveDrab: "olivedrab";
      Orange: "orange";
      OrangeRed: "orangered";
      Orchid: "orchid";
      PaleGoldenRod: "palegoldenrod";
      PaleGreen: "palegreen";
      PaleTurquoise: "paleturquoise";
      PaleVioletRed: "palevioletred";
      PapayaWhip: "papayawhip";
      Peachpuff: "peachpuff";
      Peru: "peru";
      Pink: "pink";
      Plum: "plum";
      PowderBlue: "powderblue";
      Purple: "purple";
      Red: "red";
      RosyBrown: "rosybrown";
      RoyalBlue: "royalblue";
      SaddleBrown: "saddlebrown";
      Salmon: "salmon";
      Sandybrown: "sandybrown";
      SeaGreen: "seagreen";
      Seashell: "seashell";
      Silver: "silver";
      SkyBlue: "skyblue";
      SlateBlue: "slateblue";
      SlateGray: "slategray";
      Snow: "snow";
      SpringGreen: "springgreen";
      SteelBlue: "steelblue";
      Tan: "tan";
      Teal: "teal";
      Thistle: "thistle";
      Tomato: "tomato";
      Turquiose: "turquiose";
      Violet: "violet";
      Wheat: "wheat";
      White: "white";
      Whitesmoke: "whitesmoke";
      Yellow: "yellow";
      YellowGreen: "yellowgreen";
      
    }

  };

  declare type CorCustomizada = {

    RGBY: { 
      c1: String; 
      c2: DefinePresets<Presets <TAmarelo>>; 
    }

    RGBW: { 
      c1: String;
      c2: DefinePresets<Presets <TBranco>>;
    }

    RGBBK: {
      c1: String;
      c2: DefinePresets<Presets <TPreto>>;
    }

    RGBYW: { 
      c1: String; 
      c2: DefinePresets<Presets <TAmarelo>>; 
      c3: DefinePresets<Presets <TBranco>>;
    }

    RGBYBK: {
      c1: String;
      c2: DefinePresets<Presets <TAmarelo>>;
      c3: DefinePresets<Presets <TPreto>>;
    }

    RGBYWBK: {
      c1: String;
      c2: DefinePresets<Presets <TAmarelo>>;
      c3: DefinePresets<Presets <TBranco>>;
      c4: DefinePresets<Presets <TPreto>>;
    }

  };

  export declare type WCSpectrals = {

    colorizacao: { 

      frontendweb: Cor<CorWeb>;
      terminal: Cor<CorTerminal>;
      customizada: Cor<CorCustomizada>;

    }
    
  };
 */

/**
 * declare type WCTerminalFormatacao= 
  {
    Template: 
      "01m#negrito"|
      "02m#faint"|
      "03m#italico"|
      "04m#sublinhado"|
      "05m#slowblink"|
      "06m#rapidblink"|
      "07m#reverse"|
      "08m#conceal"|
      "09m#crossedout"|
      "10m#defaultfont"|
      "11m#altfont1"|
      "12m#altfont2"|
      "13m#altfont3"| 
      "14m#altfont4"| 
      "15m#altfont5"| 
      "16m#altfont6"| 
      "17m#altfont7"| 
      "18m#altfont8"| 
      "19m#altfont9"|
      "20m#fraktur"|
      "21m#doublyunderline"|
      "22m#normalintensity"|
      "23m#notitalic"|
      "24m#notunderline"|
      "25m#blinkoff"|
      "26m#spacing"|
      "27m#reverseoff"|
      "28m#concealoff"|
      "29m#notcrossed"|
      "50m#propositalspacing"|
      "51m#framed"|
      "52m#encircled"|
      "53m#overlined"|
      "54m#notencircled"|
      "55m#notoverlined"|
      "58m#sublinhado"|
      "59m#sublinhadopadrao"|
      "60m#ideogramsublinduplohado"|
      "61m#ideogramsublinhadoduplo"|
      "62mideogramsublinhadoduploe"|
      "63m#ideog1amoverlineduplo"|
      "64m#ideogramstress"|
      "65m#noideogramattr"|
      "73m#superscript"|
      "74m#subscript"|
      "75m#nonsuperscriptsubscript" 
  }

  declare type TColoracao = number;

  declare type WCTerminalColoracao=
  {
    Template:
    {
      
      Formato:
      {

        f_3b4bit: {

          CorLetra:
            "30m#corpreta"|
            "31m#corvermelha"|
            "32m#corverde"|
            "33m#coramarela"|
            "34m#corazul"|
            "35m#corroxa"|
            "36m#corciano"|
            "37m#corcinza"|
            "90m#corcinzaclaro"|
            "91m#corvermelhoclaro"|
            "92m#corverdeclaro"|
            "93m#coramareloclaro"|
            "94m#corazulclassico"|
            "95m#corrosa"|
            "96m#corazulclaro"|
            "97m#corbranca",
          
          CorFundo:
            "40m#fundopreto"|
            "41m#fundovermelho"|
            "42m#fundoverde"|
            "43m#fundoamarelo"|
            "44m#fundoazul"|
            "45m#fundoroxo"|
            "46m#fundociano"|
            "47m#fundocinza"|
            "100m#fundocinzaclaro"|
            "101m#fundovermelhoclaro"|
            "102m#fundoverdeclaro"|
            "103m#fundoamareloclaro"|
            "104m#fundoazulclassico"|
            "105m#fundorosa"|
            "106m#fundoazulclaro"|
            "107m#fundobranco"

        },

        f_8bit: {

          CorLetra: 
            `38;5;${TColoracao}m#cortempcustom`,

          CorFundo: 
            `48;5;${TColoracao}m#fundotempcustom`

        },
        
        f_24bit: {

          CorLetra: 
            `38;2;${TColoracao};${TColoracao};${TColoracao}m#corhexcustom`,

          CorFundo: 
            `48;2;${TColoracao};${TColoracao};${TColoracao}m#fundohexcustom`

        }

      }

    }

  }
 */
