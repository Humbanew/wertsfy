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
      
      bold: "01m",
      faint: "02m",
      italic: "03m",
      underline: "04m",
      slow_blink: "05m",
      rapid_blink: "06m",
      reverse: "07m",
      conceal: "08m",
      crossed_out: "09m",
      font: {
        
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

    color_catalogy: {

      letter: { "3b4bit": {}, "8bit": {}, "24bit": {} },
      background: { "3b4bit": {}, "8bit": {}, "24bit": {} }

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
f_3b4bit:

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


f_8bit: 

  CorLetra: 
    `38;5;${TColoracao}m#cortempcustom`,

  CorFundo: 
    `48;5;${TColoracao}m#fundotempcustom`


f_24bit: 

  CorLetra: 
    `38;2;${TColoracao};${TColoracao};${TColoracao}m#corhexcustom`,

  CorFundo: 
    `48;2;${TColoracao};${TColoracao};${TColoracao}m#fundohexcustom`
 *
 */
