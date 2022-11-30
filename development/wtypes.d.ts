declare module "wertsfy-typedefs" { }


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
declare type TerminalColorModelSchemas = "Color"|"Format";

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

