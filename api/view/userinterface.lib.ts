let userinterface = 
{ 

  terminal: { 

    Consts: { 

      c_eschar_new_line: "\n",

      c_eschar_tab: "\t",

      c_eschar_carriage_return: "\r",

      c_eschar_backspace: "\b",

      c_eschar_null: "\0",

      c_eschar_form_feed: "\f",

      c_eschar_vertical_tab: "\v",

      c_eschar_backslash: "\\",

      c_eschar_single_quote: "\'",

      c_eschar_double_quote: "\"",

    },

    Methods: { 

      m_format_negrito: (conteudo: string): string => { 
        return `\x1b[01m${conteudo}\x1b[00m`; 
      },

      m_format_faint: (conteudo: string): string => {
        return `\x1b[02m${conteudo}\x1b[00m`;
      },

      m_format_italico: (conteudo: string): string => {
        return `\x1b[03m${conteudo}\x1b[00m`;
      },

      m_format_sublinhado: (conteudo: string): string => {
        return `\x1b[04m${conteudo}\x1b[00m`;
      },

      m_format_slow_blink: (conteudo: string): string => {
        return `\x1b[05m${conteudo}\x1b[00m`;
      },

      m_format_rapid_blink: (conteudo: string): string => {
        return `\x1b[06m${conteudo}\x1b[00m`;
      },

      m_format_reverse: (conteudo: string): string => {
        return `\x1b[07m${conteudo}\x1b[00m`;
      },

      m_format_conceal: (conteudo: string): string => {
        return `\x1b[08m${conteudo}\x1b[00m`;
      },

      m_format_crossed_out: (conteudo: string): string => {
        return `\x1b[09m${conteudo}\x1b[00m`;
      },

      m_format_default_font: (conteudo: string): string => {
        return `\x1b[10m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_1: (conteudo: string): string => {
        return `\x1b[11m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_2: (conteudo: string): string => {
        return `\x1b[12m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_3: (conteudo: string): string => {
        return `\x1b[13m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_4: (conteudo: string): string => {
        return `\x1b[14m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_5: (conteudo: string): string => {
        return `\x1b[15m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_6: (conteudo: string): string => {
        return `\x1b[16m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_7: (conteudo: string): string => {
        return `\x1b[17m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_8: (conteudo: string): string => {
        return `\x1b[18m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_9: (conteudo: string): string => {
        return `\x1b[19m${conteudo}\x1b[00m`;
      },

      m_format_fraktur: (conteudo: string): string => {
        return `\x1b[20m${conteudo}\x1b[00m`;
      },

      m_format_doubly_underline: (conteudo: string): string => {
        return `\x1b[21m${conteudo}\x1b[00m`;
      },

      m_format_normal_intensity: (conteudo: string): string => {
        return `\x1b[22m${conteudo}\x1b[00m`;
      },

      m_format_not_italic: (conteudo: string): string => {
        return `\x1b[23m${conteudo}\x1b[00m`;
      },

      m_format_not_underline: (conteudo: string): string => {
        return `\x1b[24m${conteudo}\x1b[00m`;
      },

      m_format_blinkoff: (conteudo: string): string => {
        return `\x1b[25m${conteudo}\x1b[00m`;
      },

      m_format_spacing: (conteudo: string): string => {
        return `\x1b[26m${conteudo}\x1b[00m`;
      },

      m_format_reverseoff: (conteudo: string): string => {
        return `\x1b[27m${conteudo}\x1b[00m`;
      },

      m_format_concealoff: (conteudo: string): string => {
        return `\x1b[28m${conteudo}\x1b[00m`;
      },

      m_format_notcrossed: (conteudo: string): string => {
        return `\x1b[29m${conteudo}\x1b[00m`;
      },

      m_format_proposital_spacing: (conteudo: string): string => {
        return `\x1b[50m${conteudo}\x1b[00m`;
      }

    }

  },
  
  colorpalette: { }

};
