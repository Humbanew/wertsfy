declare type WCTerminal=
{
  Tipo:
  {
    Formatacao: WCTerminalFormatacao 
    Coloracao: WCTerminalColoracao
  }

}

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

// 3b4bit/30;0m@cpreta'|'3b4bit/40;0m@fpreta'|'3b4bit/31;0m@cvermelha'|'3b4bit/41;0m@fvermelha'|'3b4bit/32;0m@cverde'|'3b4bit/42;0m@fverde'|'3b4bit/33;0m@camarela'|'3b4bit/43;0m@famarela'|'3b4bit/34;0m@cazul'|'3b4bit/44;0m@fazul'|'3b4bit/35;0m@croxa'|'3b4bit/45;0m@froxa'|'3b4bit/36;0m@cciano'|'3b4bit/46;0m@fciano'|'3b4bit/37;0m@ccinza'|'3b4bit/47;0m@fcinza'|'3b4bit/90;0m@ccinzaclaro'|'3b4bit/100;0m@fcinzaclaro'|'3b4bit/91;0m@cvermelhoclaro'|'3b4bit/101:0m@fvermelhoclaro'|'3b4bit/92;0m@cverdeclaro'|'3b4bit/102;0m@fverdeclaro'|'3b4bit/93;0m@camareloclaro'|'3b4bit/103;0m@famareloclaro'|'3b4bit/94;0m@cazulclassico'|'3b4bit/104;0m@fazulclassico'|'3b4bit/95;0m@crosa'|'3b4bit/105;0m@frosa'|'3b4bit/96;0m@cazulclaro'|'3b4bit/106;0m@fazulclaro'|'3b4bit/97;0m@cbranco'|'3b4bit/107;0m@fbranco'|'8bit/38;5;tm@ctempcustom'|'8bit/48;5;tm@ftempcustom'|'24bit/38;2;r;g;bm@chexcustom'|'24bit/48;2;r;g;bm@fhexcustom'

declare type WCTerminalColoracao={ }
