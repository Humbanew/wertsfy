class WTerminal { 

  public SETUP_INPUT_SYMBOL: string = '|>';

  public SETUP_OUTPUT_SYMBOL: string = '|<';

  public SETUP_DIVIDER_SYMBOL: string = '<<<=====>>>';

  public SETUP_LOADING_SYMBOL_25: string = '\\';

  public SETUP_LOADING_SYMBOL_50: string = '|';

  public SETUP_LOADING_SYMBOL_75: string = '/';

  public SETUP_LOADING_SYMBOL_100: string = '-';

  public SETUP_ESCAPE_CHARACTER_NEW_LINE: string = '\n';

  public SETUP_ESCAPE_CHARACTER_TAB: string = '\t';

  public SETUP_ESCAPE_CHARACTER_BACKSPACE: string = '\b';

  public SETUP_ESCAPE_CHARACTER_RESTART_LINE: string = '\r';

  public COR_TERMINAL_000000: string = '#000000';

  public COR_TERMINAL_800000: string = '#800000';

  public COR_TERMINAL_008000: string = '#008000';

  public COR_TERMINAL_808000: string = '#808000';

  public COR_TERMINAL_000080: string = '#000080';

  public COR_TERMINAL_800080: string = '#800080';

  public COR_TERMINAL_008080: string = '#008080';

  public COR_TERMINAL_808080: string = '#808080';

  public COR_TERMINAL_C0C0C0: string = '#C0C0C0';

  public COR_TERMINAL_FF0000: string = '#FF0000';

  public COR_TERMINAL_00FF00: string = '#00FF00';

  public COR_TERMINAL_FFFF00: string = '#FFFF00';

  public COR_TERMINAL_0000FF: string = '#0000FF';

  public COR_TERMINAL_FF00FF: string = '#FF00FF';

  public COR_TERMINAL_00FFFF: string = '#00FFFF';

  public COR_TERMINAL_FFFFFF: string = '#FFFFFF';

// Cor schema 8 bit @017 => #00005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00005F: string = '#00005F';

// Cor schema 8 bit @018 => #000087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_000087: string = '#000087';

// Cor schema 8 bit @019 => #0000af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_0000AF: string = '#0000AF';

// Cor schema 8 bit @020 => #0000d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_0000D7: string = '#0000D7';

// Cor schema 8 bit @022 => #005f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_005F00: string = '#005F00';

// Cor schema 8 bit @023 => #005f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_005F5F: string = '#005F5F';

// Cor schema 8 bit @024 => #005f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_005F87: string = '#005F87';

// Cor schema 8 bit @025 => #005faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_005FAF: string = '#005FAF';

// Cor schema 8 bit @026 => #005fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_005FD7: string = '#005FD7';

// Cor schema 8 bit @027 => #005fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_005FFF: string = '#005FFF';

// Cor schema 8 bit @028 => #008700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_008700: string = '#008700';

// Cor schema 8 bit @029 => #00875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00875F: string = '#00875F';

// Cor schema 8 bit @030 => #008787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_008787: string = '#008787';

// Cor schema 8 bit @031 => #0087af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_0087AF: string = '#0087AF';

// Cor schema 8 bit @032 => #0087d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_0087D7: string = '#0087D7';

// Cor schema 8 bit @033 => #0087ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_0087FF: string = '#0087FF';

// Cor schema 8 bit @034 => #00af00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00AF00: string = '#00AF00';

// Cor schema 8 bit @035 => #00af5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00AF5F: string = '#00AF5F';

// Cor schema 8 bit @036 => #00af87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00AF87: string = '#00AF87';

// Cor schema 8 bit @037 => #00afaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00AFAF: string = '#00AFAF';

// Cor schema 8 bit @038 => #00afd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00AFD7: string = '#00AFD7';

// Cor schema 8 bit @039 => #00afff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00AFFF: string = '#00AFFF';

// Cor schema 8 bit @040 => #00d700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00D700: string = '#00D700';

// Cor schema 8 bit @041 => #00d75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00D75F: string = '#00D75F';

// Cor schema 8 bit @042 => #00d787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00D787: string = '#00D787';

// Cor schema 8 bit @043 => #00d7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00D7AF: string = '#00D7AF';

// Cor schema 8 bit @044 => #00d7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00D7D7: string = '#00D7D7';

// Cor schema 8 bit @045 => #00d7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00D7FF: string = '#00D7FF';

// Cor schema 8 bit @047 => #00ff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00FF5F: string = '#00FF5F';

// Cor schema 8 bit @048 => #00ff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00FF87: string = '#00FF87';

// Cor schema 8 bit @049 => #00ffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00FFAF: string = '#00FFAF';

// Cor schema 8 bit @050 => #00ffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_00FFD7: string = '#00FFD7';

// Cor schema 8 bit @052 => #5f0000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F0000: string = '#5F0000';

// Cor schema 8 bit @053 => #5f005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F005F: string = '#5F005F';

// Cor schema 8 bit @054 => #5f0087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F0087: string = '#5F0087';

// Cor schema 8 bit @055 => #5f00af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F00AF: string = '#5F00AF';

// Cor schema 8 bit @056 => #5f00d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F00D7: string = '#5F00D7';

// Cor schema 8 bit @057 => #5f00ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F00FF: string = '#5F00FF';

// Cor schema 8 bit @058 => #5f5f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F5F00: string = '#5F5F00';

// Cor schema 8 bit @059 => #5f5f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F5F5F: string = '#5F5F5F';

// Cor schema 8 bit @060 => #5f5f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F5F87: string = '#5F5F87';

// Cor schema 8 bit @061 => #5f5faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F5FAF: string = '#5F5FAF';

// Cor schema 8 bit @062 => #5f5fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F5FD7: string = '#5F5FD7';

// Cor schema 8 bit @063 => #5f5fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F5FFF: string = '#5F5FFF';

// Cor schema 8 bit @064 => #5f8700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F8700: string = '#5F8700';

// Cor schema 8 bit @065 => #5f875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F875F: string = '#5F875F';

// Cor schema 8 bit @066 => #5f8787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F8787: string = '#5F8787';

// Cor schema 8 bit @067 => #5f87af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F87AF: string = '#5F87AF';

// Cor schema 8 bit @068 => #5f87d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F87D7: string = '#5F87D7';

// Cor schema 8 bit @069 => #5f87ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5F87FF: string = '#5F87FF';

// Cor schema 8 bit @070 => #5faf00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FAF00: string = '#5FAF00';

// Cor schema 8 bit @071 => #5faf5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FAF5F: string = '#5FAF5F';

// Cor schema 8 bit @072 => #5faf87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FAF87: string = '#5FAF87';

// Cor schema 8 bit @073 => #5fafaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FAFAF: string = '#5FAFAF';

// Cor schema 8 bit @074 => #5fafd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FAFD7: string = '#5FAFD7';

// Cor schema 8 bit @075 => #5fafff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FAFFF: string = '#5FAFFF';

// Cor schema 8 bit @076 => #5fd700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FD700: string = '#5FD700';

// Cor schema 8 bit @077 => #5fd75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FD75F: string = '#5FD75F';

// Cor schema 8 bit @078 => #5fd787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FD787: string = '#5FD787';

// Cor schema 8 bit @079 => #5fd7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FD7AF: string = '#5FD7AF';

// Cor schema 8 bit @080 => #5fd7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FD7D7: string = '#5FD7D7';

// Cor schema 8 bit @081 => #5fd7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FD7FF: string = '#5FD7FF';

// Cor schema 8 bit @082 => #5fff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FFF00: string = '#5FFF00';

// Cor schema 8 bit @083 => #5fff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FFF5F: string = '#5FFF5F';

// Cor schema 8 bit @084 => #5fff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FFF87: string = '#5FFF87';

// Cor schema 8 bit @085 => #5fffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FFFAF: string = '#5FFFAF';

// Cor schema 8 bit @086 => #5fffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FFFD7: string = '#5FFFD7';

// Cor schema 8 bit @087 => #5fffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_5FFFFF: string = '#5FFFFF';

// Cor schema 8 bit @088 => #870000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_870000: string = '#870000';

// Cor schema 8 bit @089 => #87005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87005F: string = '#87005F';

// Cor schema 8 bit @090 => #870087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_870087: string = '#870087';

// Cor schema 8 bit @091 => #8700af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_8700AF: string = '#8700AF';

// Cor schema 8 bit @092 => #8700d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_8700D7: string = '#8700D7';

// Cor schema 8 bit @093 => #8700ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_8700FF: string = '#8700FF';

// Cor schema 8 bit @094 => #875f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_875F00: string = '#875F00';

// Cor schema 8 bit @095 => #875f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_875F5F: string = '#875F5F';

// Cor schema 8 bit @096 => #875f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_875F87: string = '#875F87';

// Cor schema 8 bit @097 => #875faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_875FAF: string = '#875FAF';

// Cor schema 8 bit @098 => #875fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_875FD7: string = '#875FD7';

// Cor schema 8 bit @099 => #875fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_875FFF: string = '#875FFF';

// Cor schema 8 bit @100 => #878700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_878700: string = '#878700';

// Cor schema 8 bit @101 => #87875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87875F: string = '#87875F';

// Cor schema 8 bit @102 => #878787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_878787: string = '#878787';

// Cor schema 8 bit @103 => #8787af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_8787AF: string = '#8787AF';

// Cor schema 8 bit @104 => #8787d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_8787D7: string = '#8787D7';

// Cor schema 8 bit @105 => #8787ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_8787FF: string = '#8787FF';

// Cor schema 8 bit @106 => #87af00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87AF00: string = '#87AF00';

// Cor schema 8 bit @107 => #87af5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87AF5F: string = '#87AF5F';

// Cor schema 8 bit @108 => #87af87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87AF87: string = '#87AF87';

// Cor schema 8 bit @109 => #87afaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87AFAF: string = '#87AFAF';

// Cor schema 8 bit @110 => #87afd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87AFD7: string = '#87AFD7';

// Cor schema 8 bit @111 => #87afff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87AFFF: string = '#87AFFF';

// Cor schema 8 bit @112 => #87d700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87D700: string = '#87D700';

// Cor schema 8 bit @113 => #87d75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87D75F: string = '#87D75F';

// Cor schema 8 bit @114 => #87d787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87D787: string = '#87D787';

// Cor schema 8 bit @115 => #87d7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87D7AF: string = '#87D7AF';

// Cor schema 8 bit @116 => #87d7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87D7D7: string = '#87D7D7';

// Cor schema 8 bit @117 => #87d7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87D7FF: string = '#87D7FF';

// Cor schema 8 bit @118 => #87ff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87FF00: string = '#87FF00';

// Cor schema 8 bit @119 => #87ff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87FF5F: string = '#87FF5F';

// Cor schema 8 bit @120 => #87ff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87FF87: string = '#87FF87';

// Cor schema 8 bit @121 => #87ffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87FFAF: string = '#87FFAF';

// Cor schema 8 bit @122 => #87ffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87FFD7: string = '#87FFD7';

// Cor schema 8 bit @123 => #87ffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_87FFFF: string = '#87FFFF';

// Cor schema 8 bit @124 => #af0000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF0000: string = '#AF0000';

// Cor schema 8 bit @125 => #af005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF005F: string = '#AF005F';

// Cor schema 8 bit @126 => #af0087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF0087: string = '#AF0087';

// Cor schema 8 bit @127 => #af00af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF00AF: string = '#AF00AF';

// Cor schema 8 bit @128 => #af00d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF00D7: string = '#AF00D7';

// Cor schema 8 bit @129 => #af00ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF00FF: string = '#AF00FF';

// Cor schema 8 bit @130 => #af5f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF5F00: string = '#AF5F00';

// Cor schema 8 bit @131 => #af5f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF5F5F: string = '#AF5F5F';

// Cor schema 8 bit @132 => #af5f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF5F87: string = '#AF5F87';

// Cor schema 8 bit @133 => #af5faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF5FAF: string = '#AF5FAF';

// Cor schema 8 bit @134 => #af5fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF5FD7: string = '#AF5FD7';

// Cor schema 8 bit @135 => #af5fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF5FFF: string = '#AF5FFF';

// Cor schema 8 bit @136 => #af8700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF8700: string = '#AF8700';

// Cor schema 8 bit @137 => #af875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF875F: string = '#AF875F';

// Cor schema 8 bit @138 => #af8787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF8787: string = '#AF8787';

// Cor schema 8 bit @139 => #af87af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF87AF: string = '#AF87AF';

// Cor schema 8 bit @140 => #af87d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF87D7: string = '#AF87D7';

// Cor schema 8 bit @141 => #af87ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AF87FF: string = '#AF87FF';

// Cor schema 8 bit @142 => #afaf00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFAF00: string = '#AFAF00';

// Cor schema 8 bit @143 => #afaf5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFAF5F: string = '#AFAF5F';

// Cor schema 8 bit @144 => #afaf87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFAF87: string = '#AFAF87';

// Cor schema 8 bit @145 => #afafaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFAFAF: string = '#AFAFAF';

// Cor schema 8 bit @146 => #afafd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFAFD7: string = '#AFAFD7';

// Cor schema 8 bit @147 => #afafff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFAFFF: string = '#AFAFFF';

// Cor schema 8 bit @148 => #afd700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFD700: string = '#AFD700';

// Cor schema 8 bit @149 => #afd75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFD75F: string = '#AFD75F';

// Cor schema 8 bit @150 => #afd787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFD787: string = '#AFD787';

// Cor schema 8 bit @151 => #afd7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFD7AF: string = '#AFD7AF';

// Cor schema 8 bit @152 => #afd7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFD7D7: string = '#AFD7D7';

// Cor schema 8 bit @153 => #afd7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFD7FF: string = '#AFD7FF';

// Cor schema 8 bit @154 => #afff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFFF00: string = '#AFFF00';

// Cor schema 8 bit @155 => #afff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFFF5F: string = '#AFFF5F';

// Cor schema 8 bit @156 => #afff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFFF87: string = '#AFFF87';

// Cor schema 8 bit @157 => #afffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFFFAF: string = '#AFFFAF';

// Cor schema 8 bit @158 => #afffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFFFD7: string = '#AFFFD7';

// Cor schema 8 bit @159 => #afffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_AFFFFF: string = '#AFFFFF';

// Cor schema 8 bit @160 => #d70000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D70000: string = '#D70000';

// Cor schema 8 bit @161 => #d7005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7005F: string = '#D7005F';

// Cor schema 8 bit @162 => #d70087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D70087: string = '#D70087';

// Cor schema 8 bit @163 => #d700af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D700AF: string = '#D700AF';

// Cor schema 8 bit @164 => #d700d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D700D7: string = '#D700D7';

// Cor schema 8 bit @165 => #d700ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D700FF: string = '#D700FF';

// Cor schema 8 bit @166 => #d75f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D75F00: string = '#D75F00';

// Cor schema 8 bit @167 => #d75f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D75F5F: string = '#D75F5F';

// Cor schema 8 bit @168 => #d75f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D75F87: string = '#D75F87';

// Cor schema 8 bit @169 => #d75faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D75FAF: string = '#D75FAF';

// Cor schema 8 bit @170 => #d75fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D75FD7: string = '#D75FD7';

// Cor schema 8 bit @171 => #d75fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D75FFF: string = '#D75FFF';

// Cor schema 8 bit @172 => #d78700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D78700: string = '#D78700';

// Cor schema 8 bit @173 => #d7875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7875F: string = '#D7875F';

// Cor schema 8 bit @174 => #d78787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D78787: string = '#D78787';

// Cor schema 8 bit @175 => #d787af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D787AF: string = '#D787AF';

// Cor schema 8 bit @176 => #d787d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D787D7: string = '#D787D7';

// Cor schema 8 bit @177 => #d787ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D787FF: string = '#D787FF';

// Cor schema 8 bit @178 => #d7af00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7AF00: string = '#D7AF00';

// Cor schema 8 bit @179 => #d7af5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7AF5F: string = '#D7AF5F';

// Cor schema 8 bit @180 => #d7af87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7AF87: string = '#D7AF87';

// Cor schema 8 bit @181 => #d7afaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7AFAF: string = '#D7AFAF';

// Cor schema 8 bit @182 => #d7afd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7AFD7: string = '#D7AFD7';

// Cor schema 8 bit @183 => #d7afff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7AFFF: string = '#D7AFFF';

// Cor schema 8 bit @184 => #d7d700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7D700: string = '#D7D700';

// Cor schema 8 bit @185 => #d7d75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7D75F: string = '#D7D75F';

// Cor schema 8 bit @186 => #d7d787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7D787: string = '#D7D787';

// Cor schema 8 bit @187 => #d7d7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7D7AF: string = '#D7D7AF';

// Cor schema 8 bit @188 => #d7d7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7D7D7: string = '#D7D7D7';

// Cor schema 8 bit @189 => #d7d7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7D7FF: string = '#D7D7FF';

// Cor schema 8 bit @190 => #d7ff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7FF00: string = '#D7FF00';

// Cor schema 8 bit @191 => #d7ff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7FF5F: string = '#D7FF5F';

// Cor schema 8 bit @192 => #d7ff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7FF87: string = '#D7FF87';

// Cor schema 8 bit @193 => #d7ffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7FFAF: string = '#D7FFAF';

// Cor schema 8 bit @194 => #d7ffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7FFD7: string = '#D7FFD7';

// Cor schema 8 bit @195 => #d7ffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D7FFFF: string = '#D7FFFF';

// Cor schema 8 bit @197 => #ff005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF005F: string = '#FF005F';

// Cor schema 8 bit @198 => #ff0087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF0087: string = '#FF0087';

// Cor schema 8 bit @199 => #ff00af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF00AF: string = '#FF00AF';

// Cor schema 8 bit @200 => #ff00d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF00D7: string = '#FF00D7';

// Cor schema 8 bit @202 => #ff5f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF5F00: string = '#FF5F00';

// Cor schema 8 bit @203 => #ff5f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF5F5F: string = '#FF5F5F';

// Cor schema 8 bit @204 => #ff5f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF5F87: string = '#FF5F87';

// Cor schema 8 bit @205 => #ff5faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF5FAF: string = '#FF5FAF';

// Cor schema 8 bit @206 => #ff5fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF5FD7: string = '#FF5FD7';

// Cor schema 8 bit @207 => #ff5fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF5FFF: string = '#FF5FFF';

// Cor schema 8 bit @208 => #ff8700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF8700: string = '#FF8700';

// Cor schema 8 bit @209 => #ff875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF875F: string = '#FF875F';

// Cor schema 8 bit @210 => #ff8787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF8787: string = '#FF8787';

// Cor schema 8 bit @211 => #ff87af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF87AF: string = '#FF87AF';

// Cor schema 8 bit @212 => #ff87d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF87D7: string = '#FF87D7';

// Cor schema 8 bit @213 => #ff87ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FF87FF: string = '#FF87FF';

// Cor schema 8 bit @214 => #ffaf00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFAF00: string = '#FFAF00';

// Cor schema 8 bit @215 => #ffaf5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFAF5F: string = '#FFAF5F';

// Cor schema 8 bit @216 => #ffaf87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFAF87: string = '#FFAF87';

// Cor schema 8 bit @217 => #ffafaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFAFAF: string = '#FFAFAF';

// Cor schema 8 bit @218 => #ffafd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFAFD7: string = '#FFAFD7';

// Cor schema 8 bit @219 => #ffafff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFAFFF: string = '#FFAFFF';

// Cor schema 8 bit @220 => #ffd700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFD700: string = '#FFD700';

// Cor schema 8 bit @221 => #ffd75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFD75F: string = '#FFD75F';

// Cor schema 8 bit @222 => #ffd787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFD787: string = '#FFD787';

// Cor schema 8 bit @223 => #ffd7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFD7AF: string = '#FFD7AF';

// Cor schema 8 bit @224 => #ffd7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFD7D7: string = '#FFD7D7';

// Cor schema 8 bit @225 => #ffd7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFD7FF: string = '#FFD7FF';

// Cor schema 8 bit @227 => #ffff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFFF5F: string = '#FFFF5F';

// Cor schema 8 bit @228 => #ffff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFFF87: string = '#FFFF87';

// Cor schema 8 bit @229 => #ffffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFFFAF: string = '#FFFFAF';

// Cor schema 8 bit @230 => #ffffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_FFFFD7: string = '#FFFFD7';

// Cor schema 8 bit @232 => #080808 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_080808: string = '#080808';

// Cor schema 8 bit @233 => #121212 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_121212: string = '#121212';

// Cor schema 8 bit @234 => #1c1c1c <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_1C1C1C: string = '#1C1C1C';

// Cor schema 8 bit @235 => #262626 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_262626: string = '#262626';

// Cor schema 8 bit @236 => #303030 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_303030: string = '#303030';

// Cor schema 8 bit @237 => #3a3a3a <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_3A3A3A: string = '#3A3A3A';

// Cor schema 8 bit @238 => #444444 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_444444: string = '#444444';

// Cor schema 8 bit @239 => #4e4e4e <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_4E4E4E: string = '#4E4E4E';

// Cor schema 8 bit @240 => #585858 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_585858: string = '#585858';

// Cor schema 8 bit @241 => #626262 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_626262: string = '#626262';

// Cor schema 8 bit @242 => #6c6c6c <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_6C6C6C: string = '#6C6C6C';

// Cor schema 8 bit @243 => #767676 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_767676: string = '#767676';

// Cor schema 8 bit @245 => #8a8a8a <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_8A8A8A: string = '#8A8A8A';

// Cor schema 8 bit @246 => #949494 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_949494: string = '#949494';

// Cor schema 8 bit @247 => #9e9e9e <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_9E9E9E: string = '#9E9E9E';

// Cor schema 8 bit @248 => #a8a8a8 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_A8A8A8: string = '#A8A8A8';

// Cor schema 8 bit @249 => #b2b2b2 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_B2B2B2: string = '#B2B2B2';

// Cor schema 8 bit @250 => #bcbcbc <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_BCBCBC: string = '#BCBCBC';

// Cor schema 8 bit @251 => #c6c6c6 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_C6C6C6: string = '#C6C6C6';

// Cor schema 8 bit @252 => #d0d0d0 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_D0D0D0: string = '#D0D0D0';

// Cor schema 8 bit @253 => #dadada <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_DADADA: string = '#DADADA';

// Cor schema 8 bit @254 => #e4e4e4 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_E4E4E4: string = '#E4E4E4';

// Cor schema 8 bit @255 => #eeeeee <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
  public COR_TERMINAL_EEEEEE: string = '#EEEEEE';

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação em negrito no texto. 
   */
  public adicionaFormatacaoNegrito(texto: string): string {
    return `\033[1m${texto}\033[0m`;
  }
  
  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação em faint no texto. 
   */
  public adicionaFormatacaoFaint(texto: string): string {
    return `\033[2m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação em italico no texto. 
   */
  public adicionaFormatacaoItalico(texto: string): string {
    return `\033[3m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação em sublinhado no texto. 
   */
  public adicionaFormatacaoSublinhado(texto: string): string {
    return `\033[4m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação em slow brink no texto. 
   */
  public adicionaFormatacaoSlowBlink(texto: string): string {
    return `\033[5m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação em rapid blink no texto. 
   */
  public adicionaFormatacaoRapidBlink(texto: string): string {
    return `\033[6m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação em reverse no texto. 
   */
  public adicionaFormatacaoReverse(texto: string): string {
    return `\033[7m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação em conceal no texto. 
   */
  public adicionaFormatacaoConceal(texto: string): string {
    return `\033[8m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação em crossout no texto. 
   */
  public adicionaFormatacaoCrossedOut(texto: string): string {
    return `\033[9m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação padrão no texto. 
   */
  public adicionaFormatacaoDefaultFont(texto: string): string {
    return `\033[10m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fonte alternativa no texto. 
   */
  public adicionaFormatacaoAlternativeFont(texto: string): string {
    return `\033[11m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fonte alternativa (dois) no texto. 
   */
  public adicionaFormatacaoAlternativeFont2(texto: string): string {
    return `\033[12m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fonte alternativa (tres) no texto. 
   */
  public adicionaFormatacaoAlternativeFont3(texto: string): string {
    return `\033[13m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fonte alternativa (quatro) no texto. 
   */
  public adicionaFormatacaoAlternativeFont4(texto: string): string {
    return `\033[14m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fonte alternativa (cinco) no texto. 
   */
  public adicionaFormatacaoAlternativeFont5(texto: string): string {
    return `\033[15m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fonte alternativa (seis) no texto. 
   */
  public adicionaFormatacaoAlternativeFont6(texto: string): string {
    return `\033[16m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fonte alternativa (sete) no texto. 
   */
  public adicionaFormatacaoAlternativeFont7(texto: string): string {
    return `\033[17m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fonte alternativa (oito) no texto. 
   */
  public adicionaFormatacaoAlternativeFont8(texto: string): string {
    return `\033[18m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fonte alternativa (nove) no texto.
   */
  public adicionaFormatacaoAlternativeFont9(texto: string): string {
    return `\033[19m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fraktur no texto. 
   */
  public adicionaFormatacaoFraktur(texto: string): string {
    return `\033[20m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de sublinhado duplo no texto. 
   */
  public adicionaFormatacaoDoublyUnderline(texto: string): string {
    return `\033[21m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de intensidade padrão no texto. 
   */
  public adicionaFormatacaoNormalIntensity(texto: string): string {
    return `\033[22m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de retirada do itálico no texto. 
   */
  public adicionaFormatacaoNotItalic(texto: string): string {
    return `\033[23m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de retirada do sublinhado no texto. 
   */
  public adicionaFormatacaoNotUnderline(texto: string): string {
    return `\033[24m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de retirada do slow blink no texto. 
   */
  public adicionaFormatacaoBlinkOff(texto: string): string {
    return `\033[25m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de espaçamento proposital no texto. 
   */
  public adicionaPropositalSpacing(texto: string): string {
    return `\033[26m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de retirada em reverse no texto. 
   */
  public adicionaFormatacaoReverseOff(texto: string): string {
    return `\033[27m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de retirada do conceal no texto. 
   */
  public adicionaFormatacaoConcealOff(texto: string): string {
    return `\033[28m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de retirada do crossout no texto. 
   */
  public adicionaFormatacaoNotCrossed(texto: string): string {
    return `\033[29m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de retirada do espaçamento proposital texto. 
   */
  public adicionaFormatacaoNotPropositalSpacing(texto: string): string {
    return `\033[50m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de framed no texto. 
   */
  public adicionaFormatacaoFramed(texto: string): string {
    return `\033[51m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de encircled no texto. 
   */
  public adicionaFormatacaoEncircled(texto: string): string {
    return `\033[52m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de overlined no texto. 
   */
  public adicionaFormatacaoOverlined(texto: string): string {
    return `\033[53m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de not framed no texto. 
   */
  public adicionaFormatacaoNotFramed(texto: string): string {
    return `\033[54m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de not encircled no texto. 
   */
  public adicionaFormatacaoNotEncircled(texto: string): string {
    return `\033[55m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor do sublinhado no texto. 
   */
  public adicionaFormatacaoCorSublinhado(texto: string): string {
    return `\033[58m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de sublinhado padrão no texto. 
   */
  public adicionaFormatacaoCorSublinhadoPadrao(texto: string): string {
    return `\033[59m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de Ideograma Sublinhado no texto. 
   */
  public adicionaFormatacaoIdeogramSublinhado(texto: string): string {
    return `\033[60m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de Ideograma Sublinhado Duplo no texto. 
   */
  public adicionaFormatacaoIdeogramSublinhadoDuplo(texto: string): string {
    return `\033[61m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de Ideograma Overline no texto. 
   */
  public adicionaFormatacaoIdeogramOverline(texto: string): string {
    return `\033[62m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de Ideograma Overline Duplo no texto. 
   */
  public adicionaFormatacaoIdeogramOverlineDuplo(texto: string): string {
    return `\033[63m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de Ideograma Stress no texto. 
   */
  public adicionaFormatacaoIdeogramStress(texto: string): string {
    return `\033[64m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de retirada de Ideograma Attribute no texto. 
   */
  public adicionaFormatacaoNoIdeogramAttribute(texto: string): string {
    return `\033[65m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de Superscript no texto. 
   */
  public adicionaFormatacaoSuperscript(texto: string): string {
    return `\033[73m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de Subscript no texto. 
   */
  public adicionaFormatacaoSubscript(texto: string): string {
    return `\033[74m${texto}\033[0m`;
  }

  /** 
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de retirada de Superscript e Subscript no texto. 
   */
  public adicionaFormatacaoNonSuperscriptSubscript(texto: string): string {
    return `\033[75m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**. 
   * @description Adiciona formatação de cor preta de texto.
   */
  public adicionaFormatacaoCor3B4BitPreta(texto: string): string {
    return `\033[30;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preta.
   */
  public adicionaFormatacaoFundo3B4BitPreta(texto: string): string {
    return `\033[40;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha de texto.
   */
  public adicionaFormatacaoCor3B4BitVermelha(texto: string): string {
    return `\033[31;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha.
   */
  public adicionaFormatacaoFundo3B4BitVermelha(texto: string): string {
    return `\033[41;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde de texto.
   */
  public adicionaFormatacaoCor3B4BitVerde(texto: string): string {
    return `\033[32;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde.
   */
  public adicionaFormatacaoFundo3B4BitVerde(texto: string): string {
    return `\033[42;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor amarela de texto.
   */
  public adicionaFormatacaoCor3B4BitAmarela(texto: string): string {
    return `\033[33;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor amarela.
   */
  public adicionaFormatacaoFundo3B4BitAmarela(texto: string): string {
    return `\033[43;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul de texto.
   */
  public adicionaFormatacaoCor3B4BitAzul(texto: string): string {
    return `\033[34;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul.
   */
  public adicionaFormatacaoFundo3B4BitAzul(texto: string): string {
    return `\033[44;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa de texto.
   */
  public adicionaFormatacaoCor3B4BitRoxa(texto: string): string {
    return `\033[35;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa.
   */
  public adicionaFormatacaoFundo3B4BitRoxa(texto: string): string {
    return `\033[45;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul ciano de texto.
   */
  public adicionaFormatacaoCor3B4BitAzulCiano(texto: string): string {
    return `\033[36;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul ciano.
   */
  public adicionaFormatacaoFundo3B4BitAzulCiano(texto: string): string {
    return `\033[46;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor cinza de texto.
   */
  public adicionaFormatacaoCor3B4BitCinza(texto: string): string {
    return `\033[37;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor cinza.
   */
  public adicionaFormatacaoFundo3B4BitCinza(texto: string): string {
    return `\033[47;0m${texto}\033[0m`;
  }


  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor cinza-claro de texto.
   */
  public adicionaFormatacaoCor3B4BitCinzaClaro(texto: string): string {
    return `\033[90;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor cinza-claro.
   */
  public adicionaFormatacaoFundo3B4BitCinzaClaro(texto: string): string {
    return `\033[100;0m${texto}\033[0m`;
  }

// Cor schema 3/4 bit @009 => #ff0000 <=> \033[91;0m <=> \033[101;0m

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha de texto.
   */
  public adicionaFormatacaoCor3B4BitVermelhoClaro(texto: string): string {
    return `\033[91;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha-claro.
   */
  public adicionaFormatacaoFundo3B4BitVermelhoClaro(texto: string): string {
    return `\033[101;0m${texto}\033[0m`;
  }

// Cor schema 3/4 bit @010 => #00ff00 <=> \033[92;0m <=> \033[102;0m

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde-claro de texto.
   */
  public adicionaFormatacaoCor3B4BitVerdeClaro(texto: string): string {
    return `\033[92;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde-claro.
   */
  public adicionaFormatacaoFundo3B4BitVerdeClaro(texto: string): string {
    return `\033[102;0m${texto}\033[0m`;
  }

// Cor schema 3/4 bit @011 => #ffff00 <=> \033[93;0m <=> \033[103;0m

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor amarela-claro de texto.
   */
  public adicionaFormatacaoCor3B4BitAmareloClaro(texto: string): string {
    return `\033[93;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor amarela-claro.
   */
  public adicionaFormatacaoFundo3B4BitAmareloClaro(texto: string): string {
    return `\033[103;0m${texto}\033[0m`;
  }

// Cor schema 3/4 bit @012 => #0000ff <=> \033[94;0m <=> \033[104;0m

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul tradicional de texto.
   */
  public adicionaFormatacaoCor3B4BitAzulT(texto: string): string {
    return `\033[94;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul tradicional.
   */
  public adicionaFormatacaoFundo3B4BitAzulT(texto: string): string {
    return `\033[104;0m${texto}\033[0m`;
  }

// Cor schema 3/4 bit @013 => #ff00ff <=> \033[95;0m <=> \033[105;0m

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor rosa de texto.
   */
  public adicionaFormatacaoCor3B4BitRosa(texto: string): string {
    return `\033[95;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor rosa.
   */
  public adicionaFormatacaoFundo3B4BitRosa(texto: string): string {
    return `\033[105;0m${texto}\033[0m`;
  }

// Cor schema 3/4 bit @014 => #00ffff <=> \033[96;0m <=> \033[106;0m

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul-claro de texto.
   */
  public adicionaFormatacaoCor3B4BitAzulClaro(texto: string): string {
    return `\033[96;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul-claro.
   */
  public adicionaFormatacaoFundo3B4BitAzulClaro(texto: string): string {
    return `\033[106;0m${texto}\033[0m`;
  }

// Cor schema 3/4 bit @015 => #ffffff <=> \033[97;0m <=> \033[107;0m

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor branca de texto.
   */
  public adicionaFormatacaoCor3B4BitBranco(texto: string): string {
    return `\033[97;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor branca.
   */
  public adicionaFormatacaoFundo3B4BitBranco(texto: string): string {
    return `\033[107;0m${texto}\033[0m`;
  }

// Cor schema 8 bit @000 => #000000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @001 => #800000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @002 => #008000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @003 => #808000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @004 => #000080 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @005 => #800080 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @006 => #008080 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @007 => #c0c0c0 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @008 => #808080 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @009 => #ff0000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @010 => #00ff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @011 => #ffff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @012 => #0000ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @013 => #ff00ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @014 => #00ffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @015 => #ffffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @016 => #000000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @017 => #00005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @018 => #000087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @019 => #0000af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @020 => #0000d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @021 => #0000ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @022 => #005f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @023 => #005f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @024 => #005f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @025 => #005faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @026 => #005fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @027 => #005fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @028 => #008700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @029 => #00875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @030 => #008787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @031 => #0087af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @032 => #0087d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @033 => #0087ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @034 => #00af00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @035 => #00af5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @036 => #00af87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @037 => #00afaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @038 => #00afd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @039 => #00afff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @040 => #00d700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @041 => #00d75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @042 => #00d787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @043 => #00d7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @044 => #00d7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @045 => #00d7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @046 => #00ff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @047 => #00ff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @048 => #00ff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @049 => #00ffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @050 => #00ffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @051 => #00ffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @052 => #5f0000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @053 => #5f005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @054 => #5f0087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @055 => #5f00af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @056 => #5f00d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @057 => #5f00ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @058 => #5f5f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @059 => #5f5f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @060 => #5f5f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @061 => #5f5faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @062 => #5f5fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @063 => #5f5fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @064 => #5f8700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @065 => #5f875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @066 => #5f8787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @067 => #5f87af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @068 => #5f87d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @069 => #5f87ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @070 => #5faf00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @071 => #5faf5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @072 => #5faf87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @073 => #5fafaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @074 => #5fafd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @075 => #5fafff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @076 => #5fd700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @077 => #5fd75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @078 => #5fd787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @079 => #5fd7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @080 => #5fd7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @081 => #5fd7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @082 => #5fff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @083 => #5fff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @084 => #5fff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @085 => #5fffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @086 => #5fffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @087 => #5fffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @088 => #870000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @089 => #87005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @090 => #870087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @091 => #8700af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @092 => #8700d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @093 => #8700ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @094 => #875f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @095 => #875f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @096 => #875f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @097 => #875faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @098 => #875fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @099 => #875fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @100 => #878700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @101 => #87875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @102 => #878787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @103 => #8787af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @104 => #8787d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @105 => #8787ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @106 => #87af00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @107 => #87af5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @108 => #87af87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @109 => #87afaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @110 => #87afd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @111 => #87afff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @112 => #87d700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @113 => #87d75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @114 => #87d787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @115 => #87d7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @116 => #87d7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @117 => #87d7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @118 => #87ff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @119 => #87ff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @120 => #87ff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @121 => #87ffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @122 => #87ffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @123 => #87ffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @124 => #af0000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @125 => #af005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @126 => #af0087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @127 => #af00af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @128 => #af00d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @129 => #af00ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @130 => #af5f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @131 => #af5f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @132 => #af5f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @133 => #af5faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @134 => #af5fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @135 => #af5fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @136 => #af8700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @137 => #af875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @138 => #af8787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @139 => #af87af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @140 => #af87d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @141 => #af87ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @142 => #afaf00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @143 => #afaf5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @144 => #afaf87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @145 => #afafaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @146 => #afafd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @147 => #afafff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @148 => #afd700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @149 => #afd75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @150 => #afd787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @151 => #afd7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @152 => #afd7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @153 => #afd7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @154 => #afff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @155 => #afff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @156 => #afff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @157 => #afffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @158 => #afffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @159 => #afffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @160 => #d70000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @161 => #d7005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @162 => #d70087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @163 => #d700af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @164 => #d700d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @165 => #d700ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @166 => #d75f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @167 => #d75f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @168 => #d75f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @169 => #d75faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @170 => #d75fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @171 => #d75fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @172 => #d78700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @173 => #d7875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @174 => #d78787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @175 => #d787af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @176 => #d787d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @177 => #d787ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @178 => #d7af00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @179 => #d7af5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @180 => #d7af87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @181 => #d7afaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @182 => #d7afd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @183 => #d7afff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @184 => #d7d700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @185 => #d7d75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @186 => #d7d787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @187 => #d7d7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @188 => #d7d7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @189 => #d7d7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @190 => #d7ff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @191 => #d7ff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @192 => #d7ff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @193 => #d7ffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @194 => #d7ffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @195 => #d7ffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @196 => #ff0000 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @197 => #ff005f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @198 => #ff0087 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @199 => #ff00af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @200 => #ff00d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @201 => #ff00ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @202 => #ff5f00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @203 => #ff5f5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @204 => #ff5f87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @205 => #ff5faf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @206 => #ff5fd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @207 => #ff5fff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @208 => #ff8700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @209 => #ff875f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @210 => #ff8787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @211 => #ff87af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @212 => #ff87d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @213 => #ff87ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @214 => #ffaf00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @215 => #ffaf5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @216 => #ffaf87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @217 => #ffafaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @218 => #ffafd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @219 => #ffafff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @220 => #ffd700 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @221 => #ffd75f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @222 => #ffd787 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @223 => #ffd7af <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @224 => #ffd7d7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @225 => #ffd7ff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @226 => #ffff00 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @227 => #ffff5f <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @228 => #ffff87 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @229 => #ffffaf <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @230 => #ffffd7 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @231 => #ffffff <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @232 => #080808 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @233 => #121212 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @234 => #1c1c1c <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @235 => #262626 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @236 => #303030 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @237 => #3a3a3a <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @238 => #444444 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @239 => #4e4e4e <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @240 => #585858 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @241 => #626262 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @242 => #6c6c6c <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @243 => #767676 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @244 => #808080 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @245 => #8a8a8a <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @246 => #949494 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @247 => #9e9e9e <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @248 => #a8a8a8 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @249 => #b2b2b2 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @250 => #bcbcbc <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @251 => #c6c6c6 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @252 => #d0d0d0 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @253 => #dadada <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @254 => #e4e4e4 <=> \033[38;5;(n)m <=> \033[48;5;(n)m;
// Cor schema 8 bit @255 => #eeeeee <=> \033[38;5;(n)m <=> \033[48;5;(n)m;

// Cor schema 24 bit => \033[38 <=> \033[38;2;r;g;b <=> \033[48;2;r;g;b;

} export var wTerminal = new WTerminal();

