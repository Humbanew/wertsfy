export declare namespace TypeDefines {
  
  type ColorFormatation=
  {
  
    yellow: "/[f]{2}[4-9a-f]{2}[0]{2}[0-9a-f]{2}/g",
    purple: "/[4-9a-f]{2}[0]{2}[4-9a-f]{2}[0-9a-f]{2}/g",
    white: "/[9a-f]{6}[0-9a-f]{2}/g",
    black: "/[0-8]{6}[0-9a-f]{2}/g"
  
  }
  
  type TerminalColorCatalogy=
  {
  
    schema: "3b4bit"|"8bit"|"24bit",
    model_schema: "color"|"format"
  
  }

  type TerminalStylesheets= 
  {

    formatation: 
    { 
      
      Bold: "01m",
      Faint: "02m",
      Italic: "03m",
      Underline: "04m",
      SlowBlink: "05m",
      RapidBlink: "06m",
      Reverse: "07m",
      Conceal: "08m",
      CrossedOut: "09m",
      DefaultFont: "10m",
      AltFont01: "11m",
      AltFont02: "12m",
      AltFont03: "13m",
      AltFont04: "14m",
      AltFont05: "15m",
      AltFont06: "16m",
      AltFont07: "17m",
      AltFont08: "18m",
      AltFont09: "19m",
      Fraktur: "20m",
      DoublyUnderline: "21m",
      NormalIntensity: "22m",
      NotItalic: "23m",
      NotUnderline: "24m",
      BlinkOff: "25m",
      Spacing: "26m",
      ReverseOff: "27m",
      ConcealOff: "28m",
      NotCrossed: "29m",
      PropositalSpacing: "50m",
      Framed: "51m",
      Encircled: "52m",
      Overlined: "53m",
      NotEncircled: "54m",
      NotOverlined: "55m",
      Underlined: "58m",
      Superscript: "73m",
      Subscript: "74m",
      NonSuperscriptSubscript: "75m" 

    }

    color_catalogy: {

      letter: { },
      background: { }

    },

  }
  
  type MathematicOperation= 
  {
    
    common: "plus"|"minus"|"divisor"|"multiplication"|"power", 
    advanced: "colog"|"cologm1"|"cologp1"|"antilog"|"antilogm1"|"antilogp1",
    expressions: { }
  
  }

}


/**
 *
 *
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
