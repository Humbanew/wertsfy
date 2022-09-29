declare type WCTerminal=
{
  Tipo:
  {
    Formatacao: WCTerminalFormatacao 
    Coloracao: WCTerminalColoracao
  }

}

declare type WCCRed<Number> = 0;
declare type WCCBlue<Number> = 0;
declare type WCCGreen<Number> = 0;
declare type WCCTemplate<Number> = 0;

declare type WCTerminalFormatacao= 
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

/*'3b4bit/90;0m@ccinzaclaro'
  '3b4bit/100;0m@fcinzaclaro'
  '3b4bit/91;0m@cvermelhoclaro'
  '3b4bit/101:0m@fvermelhoclaro'
  '3b4bit/92;0m@cverdeclaro'
  '3b4bit/102;0m@fverdeclaro'
  '3b4bit/93;0m@camareloclaro'
  '3b4bit/103;0m@famareloclaro'
  '3b4bit/94;0m@cazulclassico'
  '3b4bit/104;0m@fazulclassico'
  '3b4bit/95;0m@crosa'
  '3b4bit/105;0m@frosa'
  '3b4bit/96;0m@cazulclaro'
  '3b4bit/106;0m@fazulclaro'
  '3b4bit/97;0m@cbranco'
  '3b4bit/107;0m@fbranco'
  '8bit/38;5;tm@ctempcustom'
  '8bit/48;5;tm@ftempcustom'
  '24bit/38;2;r;g;bm@chexcustom'
  '24bit/48;2;r;g;bm@fhexcustom' */

declare type WCTerminalColoracao=
(
  r?: number, 
  g?: number, 
  b?: number, 
  t?: number
)=>
{
  Template:
  {
    
    Formato:
    {

      "3b4bit": {

        CorLetra:
          "30m#corpreta"|
          "31m#corvermelha"|
          "32m#corverde"|
          "33m#coramarela"|
          "34m#corazul"|
          "35m#corroxa"|
          "36m#corciano"|
          "37m#corcinza",
        
        CorFundo:
          "40m#fundopreto"|
          "41m#fundovermelho"|
          "42m#fundoverde"|
          "43m#fundoamarelo"|
          "44m#fundoazul"|
          "45m#fundoroxo"|
          "46m#fundociano"|
          "47m#fundocinza"

      },

      "8bit": { },
      
      "24bit": { }

    }

  }

}
