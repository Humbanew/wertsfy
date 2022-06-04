class WTerminal { 

  /** 
   * @description Símbolo de entrada de dados para o terminal. 
   */
  public SETUP_INPUT_SYMBOL: string = '|>';

  /**
   * @description Símbolo de retorno da entrada do terminal.
   */
  public SETUP_OUTPUT_SYMBOL: string = '|<';

  /**
   * @description Símbolo de divisão de partes de um programa.
   */
  public SETUP_DIVIDER_SYMBOL: string = '<<<=====>>>';

  /**
   * @description Modelo de 25% da tela de carregamento de um processo no terminal.
   */
  public SETUP_LOADING_SYMBOL_25: string = '\\';

  /**
   * @description Modelo de 50% da tela de carregamento de um processo no terminal.
   */
  public SETUP_LOADING_SYMBOL_50: string = '|';

  /**
   * @description Modelo de 75% da tela de carregamento de um processo no terminal.
   */
  public SETUP_LOADING_SYMBOL_75: string = '/';

  /**
   * @description Modelo de 100% da tela de carregamento de um processo no terminal.
   */
  public SETUP_LOADING_SYMBOL_100: string = '-';

  /**
   * @description Caractere de escape de nova linha.
   */
  public SETUP_ESCAPE_CHARACTER_NEW_LINE: string = '\n';

  /**
   * @description Caractere de escape de tab.
   */
  public SETUP_ESCAPE_CHARACTER_TAB: string = '\t';

  /**
   * @description Caractere de escape de backspace.
   */
  public SETUP_ESCAPE_CHARACTER_BACKSPACE: string = '\b';

  /**
   * @description Caractere de escape de reínicio da linha.
   */
  public SETUP_ESCAPE_CHARACTER_RESTART_LINE: string = '\r';

  /** 
   * @description Caractere de escape de tab vertical. 
   */
  public SETUP_ESCAPE_CHARACTER_VERTICAL_TAB: string = '\v';

  /**
   * @description Caractere de escape de form feed.
   */
  public SETUP_ESCAPE_CHARACTER_FORM_FEED: string = '\f';

  /**
   * @description Caractere de escape nulo. 
   */
  public SETUP_ESCAPE_CHARACTER_NULL: string = '\0';

  /** 
   * @description Caractere de escape de single quote. 
   */
  public SETUP_ESCAPE_CHARACTER_SINGLE_QUOTE: string = '\'';

  /**
   * @description Caractere de escape de double quote.
   */
  public SETUP_ESCAPE_CHARACTER_DOUBLE_QUOTE: string = '\"';

  /**
   * @description Cor hexadecimal 000000.
   */
  public COR_TERMINAL_000000: string = '#000000';

  /**
   * @description Cor hexadecimal 800000.
   */
  public COR_TERMINAL_800000: string = '#800000';

  /**
   * @description Cor hexadecimal 008000.
   */
  public COR_TERMINAL_008000: string = '#008000';

  /**
   * @description Cor hexadecimal 808000.
   */
  public COR_TERMINAL_808000: string = '#808000';

  /**
   * @description Cor hexadecimal 000080.
   */
  public COR_TERMINAL_000080: string = '#000080';

  /**
   * @description Cor hexadecimal 800080.
   */
  public COR_TERMINAL_800080: string = '#800080';

  /**
   * @description Cor hexadecimal 008080.
   */
  public COR_TERMINAL_008080: string = '#008080';

  /**
   * @description Cor hexadecimal 808080.
   */
  public COR_TERMINAL_808080: string = '#808080';

  /**
   * @description Cor hexadecimal C0C0C0.
   */
  public COR_TERMINAL_C0C0C0: string = '#C0C0C0';

  /**
   * @description Cor hexadecimal FF0000.
   */
  public COR_TERMINAL_FF0000: string = '#FF0000';

  /**
   * @description Cor hexadecimal 00FF00.
   */
  public COR_TERMINAL_00FF00: string = '#00FF00';

  /**
   * @description Cor hexadecimal FFFF00.
   */
  public COR_TERMINAL_FFFF00: string = '#FFFF00';

  /**
   * @description Cor hexadecimal 0000FF.
   */
  public COR_TERMINAL_0000FF: string = '#0000FF';

  /**
   * @description Cor hexadecimal FF00FF.
   */
  public COR_TERMINAL_FF00FF: string = '#FF00FF';

  /**
   * @description Cor hexadecimal 00FFFF.
   */
  public COR_TERMINAL_00FFFF: string = '#00FFFF';

  /**
   * @description Cor hexadecimal FFFFFF.
   */
  public COR_TERMINAL_FFFFFF: string = '#FFFFFF';

  /** 
   * @description Cor hexadecimal 00005F. 
   */
  public COR_TERMINAL_00005F: string = '#00005F';

  /** 
   * @description Cor hexadecimal 000087. 
   */
  public COR_TERMINAL_000087: string = '#000087';
  
  /** 
   * @description Cor hexadecimal 0000AF. 
   */
  public COR_TERMINAL_0000AF: string = '#0000AF';

  /** 
   * @description Cor hexadecimal 0000D7. 
   */
  public COR_TERMINAL_0000D7: string = '#0000D7';

  /** 
   * @description Cor hexadecimal 005F00. 
   */
  public COR_TERMINAL_005F00: string = '#005F00';

  /** 
   * @description Cor hexadecimal 005F5F. 
   */
  public COR_TERMINAL_005F5F: string = '#005F5F';

  /** 
   * @description Cor hexadecimal 005F87. 
   */
  public COR_TERMINAL_005F87: string = '#005F87';

  /** 
   * @description Cor hexadecimal 005FAF. 
   */
  public COR_TERMINAL_005FAF: string = '#005FAF';

  /** 
   * @description Cor hexadecimal 005FD7. 
   */
  public COR_TERMINAL_005FD7: string = '#005FD7';

  /** 
   * @description Cor hexadecimal 005FFF. 
   */
  public COR_TERMINAL_005FFF: string = '#005FFF';

  /** 
   * @description Cor hexadecimal 008700. 
   */
  public COR_TERMINAL_008700: string = '#008700';

  /** 
   * @description Cor hexadecimal 00875F. 
   */
  public COR_TERMINAL_00875F: string = '#00875F';

  /** 
   * @description Cor hexadecimal 008787. 
   */
  public COR_TERMINAL_008787: string = '#008787';

  /** 
   * @description Cor hexadecimal 0087AF. 
   */
  public COR_TERMINAL_0087AF: string = '#0087AF';

  /** 
   * @description Cor hexadecimal 0087D7. 
   */
  public COR_TERMINAL_0087D7: string = '#0087D7';

  /** 
   * @description Cor hexadecimal 0087FF. 
   */
  public COR_TERMINAL_0087FF: string = '#0087FF';

  /** 
   * @description Cor hexadecimal 00AF00. 
   */
  public COR_TERMINAL_00AF00: string = '#00AF00';

  /** 
   * @description Cor hexadecimal 00AF5F. 
   */
  public COR_TERMINAL_00AF5F: string = '#00AF5F';

  /** 
   * @description Cor hexadecimal 00AF87. 
   */
  public COR_TERMINAL_00AF87: string = '#00AF87';

  /** 
   * @description Cor hexadecimal 00AFAF. 
   */
  public COR_TERMINAL_00AFAF: string = '#00AFAF';

  /** 
   * @description Cor hexadecimal 00AFD7. 
   */
  public COR_TERMINAL_00AFD7: string = '#00AFD7';

  /** 
   * @description Cor hexadecimal 00AFFF. 
   */
  public COR_TERMINAL_00AFFF: string = '#00AFFF';

  /** 
   * @description Cor hexadecimal 00D700. 
   */
  public COR_TERMINAL_00D700: string = '#00D700';

  /** 
   * @description Cor hexadecimal 00D75F. 
   */
  public COR_TERMINAL_00D75F: string = '#00D75F';

  /** 
   * @description Cor hexadecimal 00D787. 
   */
  public COR_TERMINAL_00D787: string = '#00D787';

  /** 
   * @description Cor hexadecimal 00D7AF. 
   */
  public COR_TERMINAL_00D7AF: string = '#00D7AF';

  /** 
   * @description Cor hexadecimal 00D7D7. 
   */
  public COR_TERMINAL_00D7D7: string = '#00D7D7';

  /** 
   * @description Cor hexadecimal 00D7FF. 
   */
  public COR_TERMINAL_00D7FF: string = '#00D7FF';

  /** 
   * @description Cor hexadecimal 00FF5F. 
   */
  public COR_TERMINAL_00FF5F: string = '#00FF5F';

  /** 
   * @description Cor hexadecimal 00FF87. 
   */
  public COR_TERMINAL_00FF87: string = '#00FF87';

  /** 
   * @description Cor hexadecimal 00FFAF. 
   */
  public COR_TERMINAL_00FFAF: string = '#00FFAF';

  /** 
   * @description Cor hexadecimal 00FFD7. 
   */
  public COR_TERMINAL_00FFD7: string = '#00FFD7';

  /** 
   * @description Cor hexadecimal 5F0000. 
   */
  public COR_TERMINAL_5F0000: string = '#5F0000';

  /** 
   * @description Cor hexadecimal 5F005F. 
   */
  public COR_TERMINAL_5F005F: string = '#5F005F';

  /** 
   * @description Cor hexadecimal 5F0087. 
   */
  public COR_TERMINAL_5F0087: string = '#5F0087';

  /** 
   * @description Cor hexadecimal 5F00AF. 
   */
  public COR_TERMINAL_5F00AF: string = '#5F00AF';

  /** 
   * @description Cor hexadecimal 5F00D7. 
   */
  public COR_TERMINAL_5F00D7: string = '#5F00D7';

  /** 
   * @description Cor hexadecimal 5F00FF. 
   */
  public COR_TERMINAL_5F00FF: string = '#5F00FF';

  /** 
   * @description Cor hexadecimal 5F5F00. 
   */
  public COR_TERMINAL_5F5F00: string = '#5F5F00';

  /** 
   * @description Cor hexadecimal 5F5F5F. 
   */
  public COR_TERMINAL_5F5F5F: string = '#5F5F5F';

  /** 
   * @description Cor hexadecimal 5F5F87. 
   */
  public COR_TERMINAL_5F5F87: string = '#5F5F87';

  /** 
   * @description Cor hexadecimal 5F5FAF. 
   */
  public COR_TERMINAL_5F5FAF: string = '#5F5FAF';

  /** 
   * @description Cor hexadecimal 5F5FD7. 
   */
  public COR_TERMINAL_5F5FD7: string = '#5F5FD7';

  /** 
   * @description Cor hexadecimal 5F5FFF. 
   */
  public COR_TERMINAL_5F5FFF: string = '#5F5FFF';

  /** 
   * @description Cor hexadecimal 5F8700. 
   */
  public COR_TERMINAL_5F8700: string = '#5F8700';

  /** 
   * @description Cor hexadecimal 5F875F. 
   */
  public COR_TERMINAL_5F875F: string = '#5F875F';

  /** 
   * @description Cor hexadecimal 5F8787. 
   */
  public COR_TERMINAL_5F8787: string = '#5F8787';

  /** 
   * @description Cor hexadecimal 5F87AF. 
   */
  public COR_TERMINAL_5F87AF: string = '#5F87AF';

  /** 
   * @description Cor hexadecimal 5F87D7. 
   */
  public COR_TERMINAL_5F87D7: string = '#5F87D7';

  /** 
   * @description Cor hexadecimal 5F87FF. 
   */
  public COR_TERMINAL_5F87FF: string = '#5F87FF';

  /** 
   * @description Cor hexadecimal 5FAF00. 
   */
  public COR_TERMINAL_5FAF00: string = '#5FAF00';

  /** 
   * @description Cor hexadecimal 5FAF5F. 
   */
  public COR_TERMINAL_5FAF5F: string = '#5FAF5F';

  /** 
   * @description Cor hexadecimal 5FAF87. 
   */
  public COR_TERMINAL_5FAF87: string = '#5FAF87';

  /** 
   * @description Cor hexadecimal 5FAFAF. 
   */
  public COR_TERMINAL_5FAFAF: string = '#5FAFAF';

  /** 
   * @description Cor hexadecimal 5FAFD7. 
   */
  public COR_TERMINAL_5FAFD7: string = '#5FAFD7';

  /** 
   * @description Cor hexadecimal 5FAFFF. 
   */
  public COR_TERMINAL_5FAFFF: string = '#5FAFFF';

  /** 
   * @description Cor hexadecimal 5FD700. 
   */
  public COR_TERMINAL_5FD700: string = '#5FD700';

  /** 
   * @description Cor hexadecimal 5FD75F. 
   */
  public COR_TERMINAL_5FD75F: string = '#5FD75F';

  /** 
   * @description Cor hexadecimal 5FD787. 
   */
  public COR_TERMINAL_5FD787: string = '#5FD787';

  /** 
   * @description Cor hexadecimal 5FD7AF. 
   */
  public COR_TERMINAL_5FD7AF: string = '#5FD7AF';

  /** 
   * @description Cor hexadecimal 5FD7D7. 
   */
  public COR_TERMINAL_5FD7D7: string = '#5FD7D7';

  /** 
   * @description Cor hexadecimal 5FD7FF. 
   */
  public COR_TERMINAL_5FD7FF: string = '#5FD7FF';

  /** 
   * @description Cor hexadecimal 5FFF00. 
   */
  public COR_TERMINAL_5FFF00: string = '#5FFF00';

  /** 
   * @description Cor hexadecimal 5FFF5F. 
   */
  public COR_TERMINAL_5FFF5F: string = '#5FFF5F';

  /** 
   * @description Cor hexadecimal 5FFF87. 
   */
  public COR_TERMINAL_5FFF87: string = '#5FFF87';

  /** 
   * @description Cor hexadecimal 5FFFAF. 
   */
  public COR_TERMINAL_5FFFAF: string = '#5FFFAF';

  /** 
   * @description Cor hexadecimal 5FFFD7. 
   */
  public COR_TERMINAL_5FFFD7: string = '#5FFFD7';

  /** 
   * @description Cor hexadecimal 5FFFFF. 
   */
  public COR_TERMINAL_5FFFFF: string = '#5FFFFF';

  /** 
   * @description Cor hexadecimal 870000. 
   */
  public COR_TERMINAL_870000: string = '#870000';

  /** 
   * @description Cor hexadecimal 87005F. 
   */
  public COR_TERMINAL_87005F: string = '#87005F';

  /**
   * @description Cor hexadecimal 870087. 
   */
  public COR_TERMINAL_870087: string = '#870087';

  /**
   * @description Cor hexadecimal 8700AF. 
   */
  public COR_TERMINAL_8700AF: string = '#8700AF';

  /**
   * @description Cor hexadecimal 8700D7. 
   */
  public COR_TERMINAL_8700D7: string = '#8700D7';

  /**
   * @description Cor hexadecimal 8700FF. 
   */
  public COR_TERMINAL_8700FF: string = '#8700FF';

  /**
   * @description Cor hexadecimal 875F00. 
   */
  public COR_TERMINAL_875F00: string = '#875F00';

  /**
   * @description Cor hexadecimal 875F5F. 
   */
  public COR_TERMINAL_875F5F: string = '#875F5F';

  /**
   * @description Cor hexadecimal 875F87. 
   */
  public COR_TERMINAL_875F87: string = '#875F87';

  /**
   * @description Cor hexadecimal 875FAF. 
   */
  public COR_TERMINAL_875FAF: string = '#875FAF';

  /**
   * @description Cor hexadecimal 875FD7. 
   */
  public COR_TERMINAL_875FD7: string = '#875FD7';

  /**
   * @description Cor hexadecimal 875FFF. 
   */
  public COR_TERMINAL_875FFF: string = '#875FFF';

  /**
   * @description Cor hexadecimal 878700. 
   */
  public COR_TERMINAL_878700: string = '#878700';

  /**
   * @description Cor hexadecimal 87875F. 
   */
  public COR_TERMINAL_87875F: string = '#87875F';

  /**
   * @description Cor hexadecimal 878787. 
   */
  public COR_TERMINAL_878787: string = '#878787';

  /**
   * @description Cor hexadecimal 8787AF. 
   */
  public COR_TERMINAL_8787AF: string = '#8787AF';

  /**
   * @description Cor hexadecimal 87005F. 
   */
  public COR_TERMINAL_8787D7: string = '#8787D7';

  /**
   * @description Cor hexadecimal 8787FF. 
   */
  public COR_TERMINAL_8787FF: string = '#8787FF';

  /**
   * @description Cor hexadecimal 87AF00. 
   */
  public COR_TERMINAL_87AF00: string = '#87AF00';

  /**
   * @description Cor hexadecimal 87AF5F. 
   */
  public COR_TERMINAL_87AF5F: string = '#87AF5F';

  /**
   * @description Cor hexadecimal 87AF87. 
   */
  public COR_TERMINAL_87AF87: string = '#87AF87';

  /**
   * @description Cor hexadecimal 87AFAF. 
   */
  public COR_TERMINAL_87AFAF: string = '#87AFAF';

  /**
   * @description Cor hexadecimal 87AFD7. 
   */
  public COR_TERMINAL_87AFD7: string = '#87AFD7';

  /**
   * @description Cor hexadecimal 87AFFF. 
   */
  public COR_TERMINAL_87AFFF: string = '#87AFFF';

  /**
   * @description Cor hexadecimal 87D700. 
   */
  public COR_TERMINAL_87D700: string = '#87D700';

  /**
   * @description Cor hexadecimal 87D75F. 
   */
  public COR_TERMINAL_87D75F: string = '#87D75F';

  /**
   * @description Cor hexadecimal 87D787. 
   */
  public COR_TERMINAL_87D787: string = '#87D787';

  /**
   * @description Cor hexadecimal 87D7AF. 
   */
  public COR_TERMINAL_87D7AF: string = '#87D7AF';

  /**
   * @description Cor hexadecimal 87D7D7. 
   */
  public COR_TERMINAL_87D7D7: string = '#87D7D7';

  /**
   * @description Cor hexadecimal 87D7FF. 
   */
  public COR_TERMINAL_87D7FF: string = '#87D7FF';

  /**
   * @description Cor hexadecimal 87FF00. 
   */
  public COR_TERMINAL_87FF00: string = '#87FF00';

  /**
   * @description Cor hexadecimal 87FF5F. 
   */
  public COR_TERMINAL_87FF5F: string = '#87FF5F';

  /**
   * @description Cor hexadecimal 87FF87. 
   */
  public COR_TERMINAL_87FF87: string = '#87FF87';

  /**
   * @description Cor hexadecimal 87FFAF. 
   */
  public COR_TERMINAL_87FFAF: string = '#87FFAF';

  /**
   * @description Cor hexadecimal 87FFD7. 
   */
  public COR_TERMINAL_87FFD7: string = '#87FFD7';

  /**
   * @description Cor hexadecimal 87FFFF. 
   */
  public COR_TERMINAL_87FFFF: string = '#87FFFF';

  /**
   * @description Cor hexadecimal AF0000. 
   */
  public COR_TERMINAL_AF0000: string = '#AF0000';

  /**
   * @description Cor hexadecimal AF005F. 
   */
  public COR_TERMINAL_AF005F: string = '#AF005F';

  /**
   * @description Cor hexadecimal AF0087. 
   */
  public COR_TERMINAL_AF0087: string = '#AF0087';

  /**
   * @description Cor hexadecimal AF00AF. 
   */
  public COR_TERMINAL_AF00AF: string = '#AF00AF';

  /**
   * @description Cor hexadecimal AF00D7. 
   */
  public COR_TERMINAL_AF00D7: string = '#AF00D7';

  /**
   * @description Cor hexadecimal AF00FF. 
   */
  public COR_TERMINAL_AF00FF: string = '#AF00FF';

  /**
   * @description Cor hexadecimal AF5F00. 
   */
  public COR_TERMINAL_AF5F00: string = '#AF5F00';

  /**
   * @description Cor hexadecimal AF5F5F. 
   */
  public COR_TERMINAL_AF5F5F: string = '#AF5F5F';

  /**
   * @description Cor hexadecimal AF5F87. 
   */
  public COR_TERMINAL_AF5F87: string = '#AF5F87';

  /**
   * @description Cor hexadecimal AF5FAF. 
   */
  public COR_TERMINAL_AF5FAF: string = '#AF5FAF';

  /**
   * @description Cor hexadecimal AF5FD7. 
   */
  public COR_TERMINAL_AF5FD7: string = '#AF5FD7';

  /**
   * @description Cor hexadecimal AF5FFF. 
   */
  public COR_TERMINAL_AF5FFF: string = '#AF5FFF';

  /**
   * @description Cor hexadecimal AF8700. 
   */
  public COR_TERMINAL_AF8700: string = '#AF8700';

  /**
   * @description Cor hexadecimal AF875F. 
   */
  public COR_TERMINAL_AF875F: string = '#AF875F';

  /**
   * @description Cor hexadecimal AF8787. 
   */
  public COR_TERMINAL_AF8787: string = '#AF8787';

  /**
   * @description Cor hexadecimal AF87AF. 
   */
  public COR_TERMINAL_AF87AF: string = '#AF87AF';

  /**
   * @description Cor hexadecimal AF87D7. 
   */
  public COR_TERMINAL_AF87D7: string = '#AF87D7';

  /**
   * @description Cor hexadecimal 87005F. 
   */
  public COR_TERMINAL_AF87FF: string = '#AF87FF';

  /**
   * @description Cor hexadecimal AFAF00. 
   */
  public COR_TERMINAL_AFAF00: string = '#AFAF00';

  /**
   * @description Cor hexadecimal AFAF5F. 
   */
  public COR_TERMINAL_AFAF5F: string = '#AFAF5F';

  /**
   * @description Cor hexadecimal AFAF87. 
   */
  public COR_TERMINAL_AFAF87: string = '#AFAF87';

  /**
   * @description Cor hexadecimal AFAFAF. 
   */
  public COR_TERMINAL_AFAFAF: string = '#AFAFAF';

  /**
   * @description Cor hexadecimal AFAFD7. 
   */
  public COR_TERMINAL_AFAFD7: string = '#AFAFD7';

  /**
   * @description Cor hexadecimal AFAFFF. 
   */
  public COR_TERMINAL_AFAFFF: string = '#AFAFFF';

  /**
   * @description Cor hexadecimal AFD700. 
   */
  public COR_TERMINAL_AFD700: string = '#AFD700';

  /** 
   * @description Cor hexadecimal AFD75F. 
   */;
  public COR_TERMINAL_AFD75F: string = '#AFD75F';

  /**
   * @description Cor hexadecimal AFD787. 
   */
  public COR_TERMINAL_AFD787: string = '#AFD787';

  /**
   * @description Cor hexadecimal AFD7AF. 
   */
  public COR_TERMINAL_AFD7AF: string = '#AFD7AF';

  /**
   * @description Cor hexadecimal AFD7D7. 
   */
  public COR_TERMINAL_AFD7D7: string = '#AFD7D7';

  /**
   * @description Cor hexadecimal AFD7FF. 
   */
  public COR_TERMINAL_AFD7FF: string = '#AFD7FF';

  /**
   * @description Cor hexadecimal AFFF00. 
   */
  public COR_TERMINAL_AFFF00: string = '#AFFF00';

  /**
   * @description Cor hexadecimal AFFF5F. 
   */
  public COR_TERMINAL_AFFF5F: string = '#AFFF5F';

  /**
   * @description Cor hexadecimal AFFF87. 
   */
  public COR_TERMINAL_AFFF87: string = '#AFFF87';

  /**
   * @description Cor hexadecimal AFFFAF. 
   */
  public COR_TERMINAL_AFFFAF: string = '#AFFFAF';

  /**
   * @description Cor hexadecimal AFFFD7. 
   */
  public COR_TERMINAL_AFFFD7: string = '#AFFFD7';

  /**
   * @description Cor hexadecimal AFFFFF. 
   */
  public COR_TERMINAL_AFFFFF: string = '#AFFFFF';

  /**
   * @description Cor hexadecimal D70000. 
   */
  public COR_TERMINAL_D70000: string = '#D70000';

  /**
   * @description Cor hexadecimal D7005F. 
   */
  public COR_TERMINAL_D7005F: string = '#D7005F';

  /**
   * @description Cor hexadecimal D70087. 
   */
  public COR_TERMINAL_D70087: string = '#D70087';

  /**
   * @description Cor hexadecimal D700AF. 
   */
  public COR_TERMINAL_D700AF: string = '#D700AF';

  /**
   * @description Cor hexadecimal D700D7. 
   */
  public COR_TERMINAL_D700D7: string = '#D700D7';

  /**
   * @description Cor hexadecimal D700FF. 
   */
  public COR_TERMINAL_D700FF: string = '#D700FF';

  /**
   * @description Cor hexadecimal D75F00. 
   */
  public COR_TERMINAL_D75F00: string = '#D75F00';

  /**
   * @description Cor hexadecimal D75F5F. 
   */
  public COR_TERMINAL_D75F5F: string = '#D75F5F';

  /**
   * @description Cor hexadecimal D75F87. 
   */
  public COR_TERMINAL_D75F87: string = '#D75F87';

  /**
   * @description Cor hexadecimal D75FAF. 
   */
  public COR_TERMINAL_D75FAF: string = '#D75FAF';

  /**
   * @description Cor hexadecimal D75FD7. 
   */
  public COR_TERMINAL_D75FD7: string = '#D75FD7';

  /**
   * @description Cor hexadecimal D75FFF. 
   */
  public COR_TERMINAL_D75FFF: string = '#D75FFF';

  /**
   * @description Cor hexadecimal D78700. 
   */
  public COR_TERMINAL_D78700: string = '#D78700';

  /**
   * @description Cor hexadecimal D7875F. 
   */
  public COR_TERMINAL_D7875F: string = '#D7875F';

  /**
   * @description Cor hexadecimal D78787. 
   */
  public COR_TERMINAL_D78787: string = '#D78787';

  /**
   * @description Cor hexadecimal D787AF. 
   */
  public COR_TERMINAL_D787AF: string = '#D787AF';

  /**
   * @description Cor hexadecimal D787D7. 
   */
  public COR_TERMINAL_D787D7: string = '#D787D7';

  /**
   * @description Cor hexadecimal D787FF. 
   */
  public COR_TERMINAL_D787FF: string = '#D787FF';

  /**
   * @description Cor hexadecimal D7AF00. 
   */
  public COR_TERMINAL_D7AF00: string = '#D7AF00';

  /**
   * @description Cor hexadecimal D7AF5F. 
   */
  public COR_TERMINAL_D7AF5F: string = '#D7AF5F';

  /**
   * @description Cor hexadecimal D7AF87. 
   */
  public COR_TERMINAL_D7AF87: string = '#D7AF87';

  /**
   * @description Cor hexadecimal D7AFAF. 
   */
  public COR_TERMINAL_D7AFAF: string = '#D7AFAF';

  /**
   * @description Cor hexadecimal D7AFD7. 
   */
  public COR_TERMINAL_D7AFD7: string = '#D7AFD7';

  /**
   * @description Cor hexadecimal D7AFFF. 
   */
  public COR_TERMINAL_D7AFFF: string = '#D7AFFF';

  /**
   * @description Cor hexadecimal D7D700. 
   */
  public COR_TERMINAL_D7D700: string = '#D7D700';

  /**
   * @description Cor hexadecimal D7D75F. 
   */
  public COR_TERMINAL_D7D75F: string = '#D7D75F';

  /**
   * @description Cor hexadecimal D7D787. 
   */
  public COR_TERMINAL_D7D787: string = '#D7D787';

  /**
   * @description Cor hexadecimal D7D7AF. 
   */
  public COR_TERMINAL_D7D7AF: string = '#D7D7AF';

  /**
   * @description Cor hexadecimal D7D7D7. 
   */
  public COR_TERMINAL_D7D7D7: string = '#D7D7D7';

  /**
   * @description Cor hexadecimal D7D7FF. 
   */
  public COR_TERMINAL_D7D7FF: string = '#D7D7FF';

  /**
   * @description Cor hexadecimal D7FF00. 
   */
  public COR_TERMINAL_D7FF00: string = '#D7FF00';

  /**
   * @description Cor hexadecimal D7FF5F. 
   */
  public COR_TERMINAL_D7FF5F: string = '#D7FF5F';

  /**
   * @description Cor hexadecimal D7FF87. 
   */
  public COR_TERMINAL_D7FF87: string = '#D7FF87';

  /**
   * @description Cor hexadecimal D7FFAF. 
   */
  public COR_TERMINAL_D7FFAF: string = '#D7FFAF';

  /**
   * @description Cor hexadecimal D7FFD7. 
   */
  public COR_TERMINAL_D7FFD7: string = '#D7FFD7';

  /**
   * @description Cor hexadecimal D7FFFF. 
   */
  public COR_TERMINAL_D7FFFF: string = '#D7FFFF';

  /**
   * @description Cor hexadecimal FF005F. 
   */
  public COR_TERMINAL_FF005F: string = '#FF005F';

  /**
   * @description Cor hexadecimal FF0087. 
   */
  public COR_TERMINAL_FF0087: string = '#FF0087';

  /**
   * @description Cor hexadecimal FF00AF. 
   */
  public COR_TERMINAL_FF00AF: string = '#FF00AF';

  /**
   * @description Cor hexadecimal FF00D7. 
   */
  public COR_TERMINAL_FF00D7: string = '#FF00D7';

  /**
   * @description Cor hexadecimal FF5F00. 
   */
  public COR_TERMINAL_FF5F00: string = '#FF5F00';

  /**
   * @description Cor hexadecimal FF5F5F. 
   */
  public COR_TERMINAL_FF5F5F: string = '#FF5F5F';

  /**
   * @description Cor hexadecimal FF5F87. 
   */
  public COR_TERMINAL_FF5F87: string = '#FF5F87';

  /**
   * @description Cor hexadecimal FF5FAF. 
   */
  public COR_TERMINAL_FF5FAF: string = '#FF5FAF';

  /**
   * @description Cor hexadecimal FF5FD7. 
   */
  public COR_TERMINAL_FF5FD7: string = '#FF5FD7';

  /**
   * @description Cor hexadecimal FF5FFF. 
   */
  public COR_TERMINAL_FF5FFF: string = '#FF5FFF';

  /**
   * @description Cor hexadecimal FF8700. 
   */
  public COR_TERMINAL_FF8700: string = '#FF8700';

  /**
   * @description Cor hexadecimal FF875F. 
   */
  public COR_TERMINAL_FF875F: string = '#FF875F';

  /**
   * @description Cor hexadecimal FF8787. 
   */
  public COR_TERMINAL_FF8787: string = '#FF8787';

  /**
   * @description Cor hexadecimal FF87AF. 
   */
  public COR_TERMINAL_FF87AF: string = '#FF87AF';

  /**
   * @description Cor hexadecimal FF87D7. 
   */
  public COR_TERMINAL_FF87D7: string = '#FF87D7';

  /**
   * @description Cor hexadecimal FF87FF. 
   */
  public COR_TERMINAL_FF87FF: string = '#FF87FF';

  /**
   * @description Cor hexadecimal FFAF00. 
   */
  public COR_TERMINAL_FFAF00: string = '#FFAF00';

  /**
   * @description Cor hexadecimal FFAF5F. 
   */
  public COR_TERMINAL_FFAF5F: string = '#FFAF5F';

  /**
   * @description Cor hexadecimal FFAF87. 
   */
  public COR_TERMINAL_FFAF87: string = '#FFAF87';

  /**
   * @description Cor hexadecimal FFAFAF. 
   */
  public COR_TERMINAL_FFAFAF: string = '#FFAFAF';

  /**
   * @description Cor hexadecimal FFAFD7. 
   */
  public COR_TERMINAL_FFAFD7: string = '#FFAFD7';

  /**
   * @description Cor hexadecimal FFAFFF. 
   */
  public COR_TERMINAL_FFAFFF: string = '#FFAFFF';

  /**
   * @description Cor hexadecimal FFD700. 
   */
  public COR_TERMINAL_FFD700: string = '#FFD700';

  /**
   * @description Cor hexadecimal FFD75F. 
   */
  public COR_TERMINAL_FFD75F: string = '#FFD75F';

  /**
   * @description Cor hexadecimal FFD787. 
   */
  public COR_TERMINAL_FFD787: string = '#FFD787';

  /**
   * @description Cor hexadecimal FFD7AF. 
   */
  public COR_TERMINAL_FFD7AF: string = '#FFD7AF';

  /**
   * @description Cor hexadecimal FFD7D7. 
   */
  public COR_TERMINAL_FFD7D7: string = '#FFD7D7';

  /**
   * @description Cor hexadecimal FFD7FF. 
   */
  public COR_TERMINAL_FFD7FF: string = '#FFD7FF';

  /**
   * @description Cor hexadecimal FFFF5F. 
   */
  public COR_TERMINAL_FFFF5F: string = '#FFFF5F';

  /**
   * @description Cor hexadecimal FFFF87. 
   */
  public COR_TERMINAL_FFFF87: string = '#FFFF87';

  /**
   * @description Cor hexadecimal FFFFAF. 
   */
  public COR_TERMINAL_FFFFAF: string = '#FFFFAF';

  /**
   * @description Cor hexadecimal FFFFD7. 
   */
  public COR_TERMINAL_FFFFD7: string = '#FFFFD7';

  /**
   * @description Cor hexadecimal 080808. 
   */
  public COR_TERMINAL_080808: string = '#080808';

  /**
   * @description Cor hexadecimal 121212. 
   */
  public COR_TERMINAL_121212: string = '#121212';

  /**
   * @description Cor hexadecimal 1C1C1C. 
   */
  public COR_TERMINAL_1C1C1C: string = '#1C1C1C';

  /**
   * @description Cor hexadecimal 262626. 
   */
  public COR_TERMINAL_262626: string = '#262626';

  /**
   * @description Cor hexadecimal 303030. 
   */
  public COR_TERMINAL_303030: string = '#303030';

  /**
   * @description Cor hexadecimal 3A3A3A. 
   */
  public COR_TERMINAL_3A3A3A: string = '#3A3A3A';

  /**
   * @description Cor hexadecimal 444444. 
   */
  public COR_TERMINAL_444444: string = '#444444';

  /**
   * @description Cor hexadecimal 4E4E4E. 
   */
  public COR_TERMINAL_4E4E4E: string = '#4E4E4E';

  /**
   * @description Cor hexadecimal 585858. 
   */
  public COR_TERMINAL_585858: string = '#585858';

  /**
   * @description Cor hexadecimal 626262. 
   */
  public COR_TERMINAL_626262: string = '#626262';

  /**
   * @description Cor hexadecimal 6C6C6C. 
   */
  public COR_TERMINAL_6C6C6C: string = '#6C6C6C';

  /**
   * @description Cor hexadecimal 767676. 
   */
  public COR_TERMINAL_767676: string = '#767676';

  /**
   * @description Cor hexadecimal 8A8A8A. 
   */
  public COR_TERMINAL_8A8A8A: string = '#8A8A8A';

  /**
   * @description Cor hexadecimal 949494. 
   */
  public COR_TERMINAL_949494: string = '#949494';

  /**
   * @description Cor hexadecimal 9E9E9E. 
   */
  public COR_TERMINAL_9E9E9E: string = '#9E9E9E';

  /**
   * @description Cor hexadecimal A8A8A8. 
   */
  public COR_TERMINAL_A8A8A8: string = '#A8A8A8';

  /**
   * @description Cor hexadecimal B2B2B2. 
   */
  public COR_TERMINAL_B2B2B2: string = '#B2B2B2';

  /**
   * @description Cor hexadecimal BCBCBC. 
   */
  public COR_TERMINAL_BCBCBC: string = '#BCBCBC';

  /**
   * @description Cor hexadecimal C6C6C6. 
   */
  public COR_TERMINAL_C6C6C6: string = '#C6C6C6';

  /**
   * @description Cor hexadecimal D0D0D0. 
   */
  public COR_TERMINAL_D0D0D0: string = '#D0D0D0';

  /**
   * @description Cor hexadecimal DADADA. 
   */
  public COR_TERMINAL_DADADA: string = '#DADADA';

  /**
   * @description Cor hexadecimal E4E4E4. 
   */
  public COR_TERMINAL_E4E4E4: string = '#E4E4E4';

  /**
   * @description Cor hexadecimal EEEEEE. 
   */
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

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto de texto.
   */
  public adicionaFormatacaoCor8BitPreto(texto: string): string {
    return `\033[38;5;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto.
   */
  public adicionaFormatacaoFundo8BitPreto(texto: string): string {
    return `\033[48;5;0m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho de texto.
   */
  public adicionaFormatacaoCor8BitVermelho(texto: string): string {
    return `\033[38;5;1m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho.
   */
  public adicionaFormatacaoFundo8BitVermelho(texto: string): string {
    return `\033[48;5;1m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde de texto.
   */
  public adicionaFormatacaoCor8BitVerde(texto: string): string {
    return `\033[38;5;2m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde.
   */
  public adicionaFormatacaoFundo8BitVerde(texto: string): string {
    return `\033[48;5;2m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor amarelo de texto.
   */
  public adicionaFormatacaoCor8BitAmarelo(texto: string): string {
    return `\033[38;5;3m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor amarelo.
   */
  public adicionaFormatacaoFundo8BitAmarelo(texto: string): string {
    return `\033[48;5;3m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul escuro de texto.
   */
  public adicionaFormatacaoCor8BitAzulEscuro(texto: string): string {
    return `\033[38;5;4m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul escuro.
   */
  public adicionaFormatacaoFundo8BitAzulEscuro(texto: string): string {
    return `\033[48;5;4m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxo de texto.
   */
  public adicionaFormatacaoCor8BitRoxo(texto: string): string {
    return `\033[38;5;5m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxo.
   */
  public adicionaFormatacaoFundo8BitRoxo(texto: string): string {
    return `\033[48;5;5m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul ciano de texto.
   */
  public adicionaFormatacaoCor8BitAzulCiano(texto: string): string {
    return `\033[38;5;6m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul ciano.
   */
  public adicionaFormatacaoFundo8BitAzulCiano(texto: string): string {
    return `\033[48;5;6m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor cinza claro de texto.
   */
  public adicionaFormatacaoCor8BitCinzaClaro(texto: string): string {
    return `\033[38;5;7m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor cinza claro.
   */
  public adicionaFormatacaoFundo8BitCinzaClaro(texto: string): string {
    return `\033[48;5;7m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor cinza de texto.
   */
  public adicionaFormatacaoCor8BitCinza(texto: string): string {
    return `\033[38;5;8m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor cinza.
   */
  public adicionaFormatacaoFundo8BitCinza(texto: string): string {
    return `\033[48;5;8m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho claro de texto.
   */
  public adicionaFormatacaoCor8BitVermelhoClaro(texto: string): string {
    return `\033[38;5;9m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho claro.
   */
  public adicionaFormatacaoFundo8BitVermelhoClaro(texto: string): string {
    return `\033[48;5;9m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde claro de texto.
   */
  public adicionaFormatacaoCor8BitVerdeClaro(texto: string): string {
    return `\033[38;5;10m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde claro.
   */
  public adicionaFormatacaoFundo8BitVerdeClaro(texto: string): string {
    return `\033[48;5;10m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor amarelo claro de texto.
   */
  public adicionaFormatacaoCor8BitAmareloClaro(texto: string): string {
    return `\033[38;5;11m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor amarelo claro.
   */
  public adicionaFormatacaoFundo8BitAmareloClaro(texto: string): string {
    return `\033[48;5;11m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul de texto.
   */
  public adicionaFormatacaoCor8BitAzul(texto: string): string {
    return `\033[38;5;12m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul.
   */
  public adicionaFormatacaoFundo8BitAzul(texto: string): string {
    return `\033[48;5;12m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor rosa de texto.
   */
  public adicionaFormatacaoCor8BitRosa(texto: string): string {
    return `\033[38;5;13m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor rosa.
   */
  public adicionaFormatacaoFundo8BitRosa(texto: string): string {
    return `\033[48;5;13m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul claro de texto.
   */
  public adicionaFormatacaoCor8BitAzulClaro(texto: string): string {
    return `\033[38;5;14m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul claro.
   */
  public adicionaFormatacaoFundo8BitAzulClaro(texto: string): string {
    return `\033[48;5;14m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor branco de texto.
   */
  public adicionaFormatacaoCor8BitBranco(texto: string): string {
    return `\033[38;5;15m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor branco.
   */
  public adicionaFormatacaoFundo8BitBranco(texto: string): string {
    return `\033[48;5;15m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 00005f de texto.
   */
  public adicionaFormatacaoCor8BitAzul00005f(texto: string): string {
    return `\033[38;5;17m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 00005f.
   */
  public adicionaFormatacaoFundo8BitAzul00005f(texto: string): string {
    return `\033[48;5;17m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 000087 de texto.
   */
  public adicionaFormatacaoCor8BitAzul000087(texto: string): string {
    return `\033[38;5;18m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 000087.
   */
  public adicionaFormatacaoFundo8BitAzul000087(texto: string): string {
    return `\033[48;5;18m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 0000af de texto.
   */
  public adicionaFormatacaoCor8BitAzul0000af(texto: string): string {
    return `\033[38;5;19m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 0000af.
   */
  public adicionaFormatacaoFundo8BitAzul0000af(texto: string): string {
    return `\033[48;5;19m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 0000d7 de texto.
   */
  public adicionaFormatacaoCor8BitAzul0000d7(texto: string): string {
    return `\033[38;5;20m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 0000d7.
   */
  public adicionaFormatacaoFundo8BitAzul0000d7(texto: string): string {
    return `\033[48;5;20m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 005f00 de texto.
   */
  public adicionaFormatacaoCor8BitVerde005f00(texto: string): string {
    return `\033[38;5;22m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 005f00.
   */
  public adicionaFormatacaoFundo8BitVerde005f00(texto: string): string {
    return `\033[48;5;22m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 005f5f de texto.
   */
  public adicionaFormatacaoCor8BitVerde005f5f(texto: string): string {
    return `\033[38;5;23m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 005f5f.
   */
  public adicionaFormatacaoFundo8BitVerde005f5f(texto: string): string {
    return `\033[48;5;23m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 005f87 de texto.
   */
  public adicionaFormatacaoCor8BitVerde005f87(texto: string): string {
    return `\033[38;5;24m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 005f87.
   */
  public adicionaFormatacaoFundo8BitVerde005f87(texto: string): string {
    return `\033[48;5;24m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 005faf de texto.
   */
  public adicionaFormatacaoCor8BitVerde005faf(texto: string): string {
    return `\033[38;5;25m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 005faf.
   */
  public adicionaFormatacaoFundo8BitVerde005faf(texto: string): string {
    return `\033[48;5;25m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 005fd7 de texto.
   */
  public adicionaFormatacaoCor8BitVerde005fd7(texto: string): string {
    return `\033[38;5;26m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 005fd7.
   */
  public adicionaFormatacaoFundo8BitVerde005fd7(texto: string): string {
    return `\033[48;5;26m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 005fff de texto.
   */
  public adicionaFormatacaoCor8BitVerde005fff(texto: string): string {
    return `\033[38;5;27m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 005fff.
   */
  public adicionaFormatacaoFundo8BitVerde005fff(texto: string): string {
    return `\033[48;5;27m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 008700 de texto.
   */
  public adicionaFormatacaoCor8BitVerde008700(texto: string): string {
    return `\033[38;5;28m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 008700.
   */
  public adicionaFormatacaoFundo8BitVerde008700(texto: string): string {
    return `\033[48;5;28m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00875f de texto.
   */
  public adicionaFormatacaoCor8BitVerde00875f(texto: string): string {
    return `\033[38;5;29m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00875f.
   */
  public adicionaFormatacaoFundo8BitVerde00875f(texto: string): string {
    return `\033[48;5;29m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 008787 de texto.
   */
  public adicionaFormatacaoCor8BitVerde008787(texto: string): string {
    return `\033[38;5;30m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 008787.
   */
  public adicionaFormatacaoFundo8BitVerde008787(texto: string): string {
    return `\033[48;5;30m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 0087af de texto.
   */
  public adicionaFormatacaoCor8BitAzul0087af(texto: string): string {
    return `\033[38;5;31m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 0087af.
   */
  public adicionaFormatacaoFundo8BitAzul0087af(texto: string): string {
    return `\033[48;5;31m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 0087d7 de texto.
   */
  public adicionaFormatacaoCor8BitAzul0087d7(texto: string): string {
    return `\033[38;5;32m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 0087d7.
   */
  public adicionaFormatacaoFundo8BitAzul0087d7(texto: string): string {
    return `\033[48;5;32m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 0087ff de texto.
   */
  public adicionaFormatacaoCor8BitAzul0087ff(texto: string): string {
    return `\033[38;5;33m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 0087ff.
   */
  public adicionaFormatacaoFundo8BitAzul0087ff(texto: string): string {
    return `\033[48;5;33m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00af00 de texto.
   */
  public adicionaFormatacaoCor8BitVerde00af00(texto: string): string {
    return `\033[38;5;34m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00af00.
   */
  public adicionaFormatacaoFundo8BitVerde00af00(texto: string): string {
    return `\033[48;5;34m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00af5f de texto.
   */
  public adicionaFormatacaoCor8BitVerde00af5f(texto: string): string {
    return `\033[38;5;35m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00af5f.
   */
  public adicionaFormatacaoFundo8BitVerde00af5f(texto: string): string {
    return `\033[48;5;35m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00af87 de texto.
   */
  public adicionaFormatacaoCor8BitVerde00af87(texto: string): string {
    return `\033[38;5;36m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00af87.
   */
  public adicionaFormatacaoFundo8BitVerde00af87(texto: string): string {
    return `\033[48;5;36m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00afaf de texto.
   */
  public adicionaFormatacaoCor8BitVerde00afaf(texto: string): string {
    return `\033[38;5;37m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00afaf.
   */
  public adicionaFormatacaoFundo8BitVerde00afaf(texto: string): string {
    return `\033[48;5;37m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00afd7 de texto.
   */
  public adicionaFormatacaoCor8BitVerde00afd7(texto: string): string {
    return `\033[38;5;38m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00afd7.
   */
  public adicionaFormatacaoFundo8BitVerde00afd7(texto: string): string {
    return `\033[48;5;38m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00afff de texto.
   */
  public adicionaFormatacaoCor8BitVerde00afff(texto: string): string {
    return `\033[38;5;39m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00afff.
   */
  public adicionaFormatacaoFundo8BitVerde00afff(texto: string): string {
    return `\033[48;5;39m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00d700 de texto.
   */
  public adicionaFormatacaoCor8BitVerde00d700(texto: string): string {
    return `\033[38;5;40m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00d700.
   */
  public adicionaFormatacaoFundo8BitVerde00d700(texto: string): string {
    return `\033[48;5;40m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00d75f de texto.
   */
  public adicionaFormatacaoCor8BitVerde00d75f(texto: string): string {
    return `\033[38;5;41m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00d75f.
   */
  public adicionaFormatacaoFundo8BitVerde00d75f(texto: string): string {
    return `\033[48;5;41m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00d787 de texto.
   */
  public adicionaFormatacaoCor8BitVerde00d787(texto: string): string {
    return `\033[38;5;42m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00d787.
   */
  public adicionaFormatacaoFundo8BitVerde00d787(texto: string): string {
    return `\033[48;5;42m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00d7af de texto.
   */
  public adicionaFormatacaoCor8BitVerde00d7af(texto: string): string {
    return `\033[38;5;43m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00d7af.
   */
  public adicionaFormatacaoFundo8BitVerde00d7af(texto: string): string {
    return `\033[48;5;43m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00d7d7 de texto.
   */
  public adicionaFormatacaoCor8BitVerde00d7d7(texto: string): string {
    return `\033[38;5;44m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00d7d7.
   */
  public adicionaFormatacaoFundo8BitVerde00d7d7(texto: string): string {
    return `\033[48;5;44m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00d7ff de texto.
   */
  public adicionaFormatacaoCor8BitVerde00d7ff(texto: string): string {
    return `\033[38;5;45m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00d7ff.
   */
  public adicionaFormatacaoFundo8BitVerde00d7ff(texto: string): string {
    return `\033[48;5;45m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00ff5f de texto.
   */
  public adicionaFormatacaoCor8BitVerde00ff5f(texto: string): string {
    return `\033[38;5;47m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00ff5f.
   */
  public adicionaFormatacaoFundo8BitVerde00ff5f(texto: string): string {
    return `\033[48;5;47m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00ff87 de texto.
   */
  public adicionaFormatacaoCor8BitVerde00ff87(texto: string): string {
    return `\033[38;5;48m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00ff87.
   */
  public adicionaFormatacaoFundo8BitVerde00ff87(texto: string): string {
    return `\033[48;5;48m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00ffaf de texto.
   */
  public adicionaFormatacaoCor8BitVerde00ffaf(texto: string): string {
    return `\033[38;5;49m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00ffaf.
   */
  public adicionaFormatacaoFundo8BitVerde00ffaf(texto: string): string {
    return `\033[48;5;49m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00ffd7 de texto.
   */
  public adicionaFormatacaoCor8BitVerde00ffd7(texto: string): string {
    return `\033[38;5;50m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00ffd7.
   */
  public adicionaFormatacaoFundo8BitVerde00ffd7(texto: string): string {
    return `\033[48;5;50m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 00ffff de texto.
   */
  public adicionaFormatacaoCor8BitVerde00ffff(texto: string): string {
    return `\033[38;5;51m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 00ffff.
   */
  public adicionaFormatacaoFundo8BitVerde00ffff(texto: string): string {
    return `\033[48;5;51m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho 5f0000 de texto.
   */
  public adicionaFormatacaoCor8BitVermelho5f0000(texto: string): string {
    return `\033[38;5;52m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho 5f0000.
   */
  public adicionaFormatacaoFundo8BitVermelho5f0000(texto: string): string {
    return `\033[48;5;52m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxo 5f005f de texto.
   */
  public adicionaFormatacaoCor8BitRoxo5f005f(texto: string): string {
    return `\033[38;5;53m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxo 5f005f.
   */
  public adicionaFormatacaoFundo8BitRoxo5f005f(texto: string): string {
    return `\033[48;5;53m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxo 5f0087 de texto.
   */
  public adicionaFormatacaoCor8BitRoxo5f0087(texto: string): string {
    return `\033[38;5;54m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxo 5f0087.
   */
  public adicionaFormatacaoFundo8BitRoxo5f0087(texto: string): string {
    return `\033[48;5;54m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxo 5f00af de texto.
   */
  public adicionaFormatacaoCor8BitRoxo5f00af(texto: string): string {
    return `\033[38;5;55m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxo 5f00af.
   */
  public adicionaFormatacaoFundo8BitRoxo5f00af(texto: string): string {
    return `\033[48;5;55m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxo 5f00d7 de texto.
   */
  public adicionaFormatacaoCor8BitRoxo5f00d7(texto: string): string {
    return `\033[38;5;56m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxo 5f00d7.
   */
  public adicionaFormatacaoFundo8BitRoxo5f00d7(texto: string): string {
    return `\033[48;5;56m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxo 5f00ff de texto.
   */
  public adicionaFormatacaoCor8BitRoxo5f00ff(texto: string): string {
    return `\033[38;5;57m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxo 5f00ff.
   */
  public adicionaFormatacaoFundo8BitRoxo5f00ff(texto: string): string {
    return `\033[48;5;57m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5f5f00 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5f5f00(texto: string): string {
    return `\033[38;5;58m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5f5f00.
   */
  public adicionaFormatacaoFundo8BitVerde5f5f00(texto: string): string {
    return `\033[48;5;58m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor cinza 5f5f5f de texto.
   */
  public adicionaFormatacaoCor8BitCinza5f5f5f(texto: string): string {
    return `\033[38;5;59m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor cinza 5f5f5f.
   */
  public adicionaFormatacaoFundo8BitCinza5f5f5f(texto: string): string {
    return `\033[48;5;59m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor cinza 5f5f87 de texto.
   */
  public adicionaFormatacaoCor8BitCinza5f5f87(texto: string): string {
    return `\033[38;5;60m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor cinza 5f5f87.
   */
  public adicionaFormatacaoFundo8BitCinza5f5f87(texto: string): string {
    return `\033[48;5;60m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor cinza 5f5faf de texto.
   */
  public adicionaFormatacaoCor8BitCinza5f5faf(texto: string): string {
    return `\033[38;5;61m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor cinza 5f5faf.
   */
  public adicionaFormatacaoFundo8BitCinza5f5faf(texto: string): string {
    return `\033[48;5;61m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor cinza 5f5fd7 de texto.
   */
  public adicionaFormatacaoCor8BitCinza5f5fd7(texto: string): string {
    return `\033[38;5;62m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor cinza 5f5fd7.
   */
  public adicionaFormatacaoFundo8BitCinza5f5fd7(texto: string): string {
    return `\033[48;5;62m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor cinza 5f5fff de texto.
   */
  public adicionaFormatacaoCor8BitCinza5f5fff(texto: string): string {
    return `\033[38;5;63m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor cinza 5f5fff.
   */
  public adicionaFormatacaoFundo8BitCinza5f5fff(texto: string): string {
    return `\033[48;5;63m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5f8700 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5f8700(texto: string): string {
    return `\033[38;5;64m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5f8700.
   */
  public adicionaFormatacaoFundo8BitVerde5f8700(texto: string): string {
    return `\033[48;5;64m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5f875f de texto.
   */
  public adicionaFormatacaoCor8BitVerde5f875f(texto: string): string {
    return `\033[38;5;65m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5f875f.
   */
  public adicionaFormatacaoFundo8BitVerde5f875f(texto: string): string {
    return `\033[48;5;65m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5f8787 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5f8787(texto: string): string {
    return `\033[38;5;66m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5f8787.
   */
  public adicionaFormatacaoFundo8BitVerde5f8787(texto: string): string {
    return `\033[48;5;66m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 5f87af de texto.
   */
  public adicionaFormatacaoCor8BitAzul5f87af(texto: string): string {
    return `\033[38;5;67m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 5f87af.
   */
  public adicionaFormatacaoFundo8BitAzul5f87af(texto: string): string {
    return `\033[48;5;67m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 5f87d7 de texto.
   */
  public adicionaFormatacaoCor8BitAzul5f87d7(texto: string): string {
    return `\033[38;5;68m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 5f87d7.
   */
  public adicionaFormatacaoFundo8BitAzul5f87d7(texto: string): string {
    return `\033[48;5;68m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 5f87ff de texto.
   */
  public adicionaFormatacaoCor8BitAzul5f87ff(texto: string): string {
    return `\033[38;5;69m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 5f87ff.
   */
  public adicionaFormatacaoFundo8BitAzul5f87ff(texto: string): string {
    return `\033[48;5;69m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5faf00 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5faf00(texto: string): string {
    return `\033[38;5;70m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5faf00.
   */
  public adicionaFormatacaoFundo8BitVerde5faf00(texto: string): string {
    return `\033[48;5;70m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5faf5f de texto.
   */
  public adicionaFormatacaoCor8BitVerde5faf5f(texto: string): string {
    return `\033[38;5;71m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5faf5f.
   */
  public adicionaFormatacaoFundo8BitVerde5faf5f(texto: string): string {
    return `\033[48;5;71m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5faf87 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5faf87(texto: string): string {
    return `\033[38;5;72m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5faf87.
   */
  public adicionaFormatacaoFundo8BitVerde5faf87(texto: string): string {
    return `\033[48;5;72m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fafaf de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fafaf(texto: string): string {
    return `\033[38;5;73m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fafaf.
   */
  public adicionaFormatacaoFundo8BitVerde5fafaf(texto: string): string {
    return `\033[48;5;73m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fafd7 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fafd7(texto: string): string {
    return `\033[38;5;74m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fafd7.
   */
  public adicionaFormatacaoFundo8BitVerde5fafd7(texto: string): string {
    return `\033[48;5;74m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fafff de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fafff(texto: string): string {
    return `\033[38;5;75m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fafff.
   */
  public adicionaFormatacaoFundo8BitVerde5fafff(texto: string): string {
    return `\033[48;5;75m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fd700 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fd700(texto: string): string {
    return `\033[38;5;76m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fd700.
   */
  public adicionaFormatacaoFundo8BitVerde5fd700(texto: string): string {
    return `\033[48;5;76m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fd75f de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fd75f(texto: string): string {
    return `\033[38;5;77m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fd75f.
   */
  public adicionaFormatacaoFundo8BitVerde5fd75f(texto: string): string {
    return `\033[48;5;77m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fd787 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fd787(texto: string): string {
    return `\033[38;5;78m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fd787.
   */
  public adicionaFormatacaoFundo8BitVerde5fd787(texto: string): string {
    return `\033[48;5;78m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fd7af de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fd7af(texto: string): string {
    return `\033[38;5;79m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fd7af.
   */
  public adicionaFormatacaoFundo8BitVerde5fd7af(texto: string): string {
    return `\033[48;5;79m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fd7d7 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fd7d7(texto: string): string {
    return `\033[38;5;80m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fd7d7.
   */
  public adicionaFormatacaoFundo8BitVerde5fd7d7(texto: string): string {
    return `\033[48;5;80m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fd7ff de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fd7ff(texto: string): string {
    return `\033[38;5;81m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fd7ff.
   */
  public adicionaFormatacaoFundo8BitVerde5fd7ff(texto: string): string {
    return `\033[48;5;81m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fff00 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fff00(texto: string): string {
    return `\033[38;5;82m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fff00.
   */
  public adicionaFormatacaoFundo8BitVerde5fff00(texto: string): string {
    return `\033[48;5;82m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fff5f de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fff5f(texto: string): string {
    return `\033[38;5;83m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fff5f.
   */
  public adicionaFormatacaoFundo8BitVerde5fff5f(texto: string): string {
    return `\033[48;5;83m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fff87 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fff87(texto: string): string {
    return `\033[38;5;84m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fff87.
   */
  public adicionaFormatacaoFundo8BitVerde5fff87(texto: string): string {
    return `\033[48;5;84m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fffaf de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fffaf(texto: string): string {
    return `\033[38;5;85m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fffaf.
   */
  public adicionaFormatacaoFundo8BitVerde5fffaf(texto: string): string {
    return `\033[48;5;85m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fffd7 de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fffd7(texto: string): string {
    return `\033[38;5;86m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fffd7.
   */
  public adicionaFormatacaoFundo8BitVerde5fffd7(texto: string): string {
    return `\033[48;5;86m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 5fffff de texto.
   */
  public adicionaFormatacaoCor8BitVerde5fffff(texto: string): string {
    return `\033[38;5;87m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 5fffff.
   */
  public adicionaFormatacaoFundo8BitVerde5fffff(texto: string): string {
    return `\033[48;5;87m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha 870000 de texto.
   */
  public adicionaFormatacaoCor8BitVermelho870000(texto: string): string {
    return `\033[38;5;88m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha 870000.
   */
  public adicionaFormatacaoFundo8BitVermelho870000(texto: string): string {
    return `\033[48;5;88m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa 87005f de texto.
   */
  public adicionaFormatacaoCor8BitRoxa87005f(texto: string): string {
    return `\033[38;5;89m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa 87005f.
   */
  public adicionaFormatacaoFundo8BitRoxa87005f(texto: string): string {
    return `\033[48;5;89m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa 870087 de texto.
   */
  public adicionaFormatacaoCor8BitRoxa870087(texto: string): string {
    return `\033[38;5;90m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa 870087.
   */
  public adicionaFormatacaoFundo8BitRoxa870087(texto: string): string {
    return `\033[48;5;90m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa 8700af de texto.
   */
  public adicionaFormatacaoCor8BitRoxa8700af(texto: string): string {
    return `\033[38;5;91m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa 8700af.
   */
  public adicionaFormatacaoFundo8BitRoxa8700af(texto: string): string {
    return `\033[48;5;91m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa 8700d7 de texto.
   */
  public adicionaFormatacaoCor8BitRoxa8700d7(texto: string): string {
    return `\033[38;5;92m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa 8700d7.
   */
  public adicionaFormatacaoFundo8BitRoxa8700d7(texto: string): string {
    return `\033[48;5;92m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa 8700ff de texto.
   */
  public adicionaFormatacaoCor8BitRoxa8700ff(texto: string): string {
    return `\033[38;5;93m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa 8700ff.
   */
  public adicionaFormatacaoFundo8BitRoxa8700ff(texto: string): string {
    return `\033[48;5;93m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 875f00 de texto.
   */
  public adicionaFormatacaoCor8BitVerde875f00(texto: string): string {
    return `\033[38;5;94m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 875f00.
   */
  public adicionaFormatacaoFundo8BitVerde875f00(texto: string): string {
    return `\033[48;5;94m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa 875f5f de texto.
   */
  public adicionaFormatacaoCor8BitRoxa875f5f(texto: string): string {
    return `\033[38;5;95m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa 875f87 de texto.
   */
  public adicionaFormatacaoCor8BitRoxa875f87(texto: string): string {
    return `\033[38;5;96m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa 875faf de texto.
   */
  public adicionaFormatacaoCor8BitRoxa875faf(texto: string): string {
    return `\033[38;5;97m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa 875faf.
   */
  public adicionaFormatacaoFundo8BitRoxa875faf(texto: string): string {
    return `\033[48;5;97m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa 875fd7 de texto.
   */
  public adicionaFormatacaoCor8BitRoxa875fd7(texto: string): string {
    return `\033[38;5;98m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa 875fd7.
   */
  public adicionaFormatacaoFundo8BitRoxa875fd7(texto: string): string {
    return `\033[48;5;98m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa 875fff de texto.
   */
  public adicionaFormatacaoCor8BitRoxa875fff(texto: string): string {
    return `\033[38;5;99m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa 875fff.
   */
  public adicionaFormatacaoFundo8BitRoxa875fff(texto: string): string {
    return `\033[48;5;99m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 878700 de texto.
   */
  public adicionaFormatacaoCor8BitVerde878700(texto: string): string {
    return `\033[38;5;100m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 878700.
   */
  public adicionaFormatacaoFundo8BitVerde878700(texto: string): string {
    return `\033[48;5;100m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87875f de texto.
   */
  public adicionaFormatacaoCor8BitVerde87875f(texto: string): string {
    return `\033[38;5;101m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87875f.
   */
  public adicionaFormatacaoFundo8BitVerde87875f(texto: string): string {
    return `\033[48;5;101m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor cinza 878787 de texto.
   */
  public adicionaFormatacaoCor8BitCinza878787(texto: string): string {
    return `\033[38;5;102m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor cinza 878787.
   */
  public adicionaFormatacaoFundo8BitCinza878787(texto: string): string {
    return `\033[48;5;102m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor cinza 8787af de texto.
   */
  public adicionaFormatacaoCor8BitCinza8787af(texto: string): string {
    return `\033[38;5;103m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor cinza 8787af.
   */
  public adicionaFormatacaoFundo8BitCinza8787af(texto: string): string {
    return `\033[48;5;103m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 8787d7 de texto.
   */
  public adicionaFormatacaoCor8BitAzul8787d7(texto: string): string {
    return `\033[38;5;104m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 8787d7.
   */
  public adicionaFormatacaoFundo8BitAzul8787d7(texto: string): string {
    return `\033[48;5;104m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor azul 8787ff de texto.
   */
  public adicionaFormatacaoCor8BitAzul8787ff(texto: string): string {
    return `\033[38;5;105m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor azul 8787ff.
   */
  public adicionaFormatacaoFundo8BitAzul8787ff(texto: string): string {
    return `\033[48;5;105m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87af00 de texto.
   */
  public adicionaFormatacaoCor8BitVerde87af00(texto: string): string {
    return `\033[38;5;106m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87af00.
   */
  public adicionaFormatacaoFundo8BitVerde87af00(texto: string): string {
    return `\033[48;5;106m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87af5f de texto.
   */
  public adicionaFormatacaoCor8BitVerde87af5f(texto: string): string {
    return `\033[38;5;107m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87af5f.
   */
  public adicionaFormatacaoFundo8BitVerde87af5f(texto: string): string {
    return `\033[48;5;107m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87af87 de texto.
   */
  public adicionaFormatacaoCor8BitVerde87af87(texto: string): string {
    return `\033[38;5;108m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87af87.
   */
  public adicionaFormatacaoFundo8BitVerde87af87(texto: string): string {
    return `\033[48;5;108m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87afaf de texto.
   */
  public adicionaFormatacaoCor8BitVerde87afaf(texto: string): string {
    return `\033[38;5;109m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87afaf.
   */
  public adicionaFormatacaoFundo8BitVerde87afaf(texto: string): string {
    return `\033[48;5;109m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87afd7 de texto.
   */
  public adicionaFormatacaoCor8BitVerde87afd7(texto: string): string {
    return `\033[38;5;110m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87afd7.
   */
  public adicionaFormatacaoFundo8BitVerde87afd7(texto: string): string {
    return `\033[48;5;110m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87afff de texto.
   */
  public adicionaFormatacaoCor8BitVerde87afff(texto: string): string {
    return `\033[38;5;111m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87afff.
   */
  public adicionaFormatacaoFundo8BitVerde87afff(texto: string): string {
    return `\033[48;5;111m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87d700 de texto.
   */
  public adicionaFormatacaoCor8BitVerde87d700(texto: string): string {
    return `\033[38;5;112m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87d700.
   */
  public adicionaFormatacaoFundo8BitVerde87d700(texto: string): string {
    return `\033[48;5;112m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87d75f de texto.
   */
  public adicionaFormatacaoCor8BitVerde87d75f(texto: string): string {
    return `\033[38;5;113m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87d75f.
   */
  public adicionaFormatacaoFundo8BitVerde87d75f(texto: string): string {
    return `\033[48;5;113m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87d787 de texto.
   */
  public adicionaFormatacaoCor8BitVerde87d787(texto: string): string {
    return `\033[38;5;114m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87d787.
   */
  public adicionaFormatacaoFundo8BitVerde87d787(texto: string): string {
    return `\033[48;5;114m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87d7af de texto.
   */
  public adicionaFormatacaoCor8BitVerde87d7af(texto: string): string {
    return `\033[38;5;115m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87d7af.
   */
  public adicionaFormatacaoFundo8BitVerde87d7af(texto: string): string {
    return `\033[48;5;115m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87d7d7 de texto.
   */
  public adicionaFormatacaoCor8BitVerde87d7d7(texto: string): string {
    return `\033[38;5;116m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87d7d7.
   */
  public adicionaFormatacaoFundo8BitVerde87d7d7(texto: string): string {
    return `\033[48;5;116m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87d7ff de texto.
   */
  public adicionaFormatacaoCor8BitVerde87d7ff(texto: string): string {
    return `\033[38;5;117m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87d7ff.
   */
  public adicionaFormatacaoFundo8BitVerde87d7ff(texto: string): string {
    return `\033[48;5;117m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87ff00 de texto.
   */
  public adicionaFormatacaoCor8BitVerde87ff00(texto: string): string {
    return `\033[38;5;118m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87ff5f de texto.
   */
  public adicionaFormatacaoCor8BitVerde87ff5f(texto: string): string {
    return `\033[38;5;119m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87ff5f.
   */
  public adicionaFormatacaoFundo8BitVerde87ff5f(texto: string): string {
    return `\033[48;5;119m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87ff87 de texto.
   */
  public adicionaFormatacaoCor8BitVerde87ff87(texto: string): string {
    return `\033[38;5;120m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87ff87.
   */
  public adicionaFormatacaoFundo8BitVerde87ff87(texto: string): string {
    return `\033[48;5;120m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87ffaf de texto.
   */
  public adicionaFormatacaoCor8BitVerde87ffaf(texto: string): string {
    return `\033[38;5;121m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87ffaf.
   */
  public adicionaFormatacaoFundo8BitVerde87ffaf(texto: string): string {
    return `\033[48;5;121m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87ffd7 de texto.
   */
  public adicionaFormatacaoCor8BitVerde87ffd7(texto: string): string {
    return `\033[38;5;122m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87ffd7.
   */
  public adicionaFormatacaoFundo8BitVerde87ffd7(texto: string): string {
    return `\033[48;5;122m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde 87ffff de texto.
   */
  public adicionaFormatacaoCor8BitVerde87ffff(texto: string): string {
    return `\033[38;5;123m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde 87ffff.
   */
  public adicionaFormatacaoFundo8BitVerde87ffff(texto: string): string {
    return `\033[48;5;123m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha af0000 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaaf0000(texto: string): string {
    return `\033[38;5;124m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha af0000.
   */
  public adicionaFormatacaoFundo8BitVermelhaaf0000(texto: string): string {
    return `\033[48;5;124m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha af005f de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaaf005f(texto: string): string {
    return `\033[38;5;125m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha af005f.
   */
  public adicionaFormatacaoFundo8BitVermelhaaf005f(texto: string): string {
    return `\033[48;5;125m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha af0087 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaaf0087(texto: string): string {
    return `\033[38;5;126m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha af0087.
   */
  public adicionaFormatacaoFundo8BitVermelhaaf0087(texto: string): string {
    return `\033[48;5;126m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha af00af de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaaf00af(texto: string): string {
    return `\033[38;5;127m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha af00af.
   */
  public adicionaFormatacaoFundo8BitVermelhaaf00af(texto: string): string {
    return `\033[48;5;127m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa af00d7 de texto.
   */
  public adicionaFormatacaoCor8BitRoxaaf00d7(texto: string): string {
    return `\033[38;5;128m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa af00d7.
   */
  public adicionaFormatacaoFundo8BitRoxaaf00d7(texto: string): string {
    return `\033[48;5;128m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa af00ff de texto.
   */
  public adicionaFormatacaoCor8BitRoxaaf00ff(texto: string): string {
    return `\033[38;5;129m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa af00ff.
   */
  public adicionaFormatacaoFundo8BitRoxaaf00ff(texto: string): string {
    return `\033[48;5;129m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha af5f00 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaaf5f00(texto: string): string {
    return `\033[38;5;130m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha af5f00.
   */
  public adicionaFormatacaoFundo8BitVermelhaaf5f00(texto: string): string {
    return `\033[48;5;130m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa af5f5f de texto.
   */
  public adicionaFormatacaoCor8BitRoxaaf5f5f(texto: string): string {
    return `\033[38;5;131m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa af5f5f.
   */
  public adicionaFormatacaoFundo8BitRoxaaf5f5f(texto: string): string {
    return `\033[48;5;131m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa af5f87 de texto.
   */
  public adicionaFormatacaoCor8BitRoxaaf5f87(texto: string): string {
    return `\033[38;5;132m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa af5f87.
   */
  public adicionaFormatacaoFundo8BitRoxaaf5f87(texto: string): string {
    return `\033[48;5;132m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa af5faf de texto.
   */
  public adicionaFormatacaoCor8BitRoxaaf5faf(texto: string): string {
    return `\033[38;5;133m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa af5faf.
   */
  public adicionaFormatacaoFundo8BitRoxaaf5faf(texto: string): string {
    return `\033[48;5;133m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa af5fd7 de texto.
   */
  public adicionaFormatacaoCor8BitRoxaaf5fd7(texto: string): string {
    return `\033[38;5;134m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa af5fd7.
   */
  public adicionaFormatacaoFundo8BitRoxaaf5fd7(texto: string): string {
    return `\033[48;5;134m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor roxa af5fff de texto.
   */
  public adicionaFormatacaoCor8BitRoxaaf5fff(texto: string): string {
    return `\033[38;5;135m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor roxa af5fff.
   */
  public adicionaFormatacaoFundo8BitRoxaaf5fff(texto: string): string {
    return `\033[48;5;135m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde af8700 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeaf8700(texto: string): string {
    return `\033[38;5;136m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde af8700.
   */
  public adicionaFormatacaoFundo8BitVerdeaf8700(texto: string): string {
    return `\033[48;5;136m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde af875f de texto.
   */
  public adicionaFormatacaoCor8BitVerdeaf875f(texto: string): string {
    return `\033[38;5;137m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde af875f.
   */
  public adicionaFormatacaoFundo8BitVerdeaf875f(texto: string): string {
    return `\033[48;5;137m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde af8787 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeaf8787(texto: string): string {
    return `\033[38;5;138m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde af8787.
   */
  public adicionaFormatacaoFundo8BitVerdeaf8787(texto: string): string {
    return `\033[48;5;138m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde af87af de texto.
   */
  public adicionaFormatacaoCor8BitVerdeaf87af(texto: string): string {
    return `\033[38;5;139m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde af87af.
   */
  public adicionaFormatacaoFundo8BitVerdeaf87af(texto: string): string {
    return `\033[48;5;139m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde af87d7 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeaf87d7(texto: string): string {
    return `\033[38;5;140m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde af87d7.
   */
  public adicionaFormatacaoFundo8BitVerdeaf87d7(texto: string): string {
    return `\033[48;5;140m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde af87ff de texto.
   */
  public adicionaFormatacaoCor8BitVerdeaf87ff(texto: string): string {
    return `\033[38;5;141m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde af87ff.
   */
  public adicionaFormatacaoFundo8BitVerdeaf87ff(texto: string): string {
    return `\033[48;5;141m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afaf00 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafaf00(texto: string): string {
    return `\033[38;5;142m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afaf00.
   */
  public adicionaFormatacaoFundo8BitVerdeafaf00(texto: string): string {
    return `\033[48;5;142m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afaf5f de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafaf5f(texto: string): string {
    return `\033[38;5;143m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afaf5f.
   */
  public adicionaFormatacaoFundo8BitVerdeafaf5f(texto: string): string {
    return `\033[48;5;143m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afaf87 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafaf87(texto: string): string {
    return `\033[38;5;144m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afaf87.
   */
  public adicionaFormatacaoFundo8BitVerdeafaf87(texto: string): string {
    return `\033[48;5;144m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afafaf de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafafaf(texto: string): string {
    return `\033[38;5;145m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afafaf.
   */
  public adicionaFormatacaoFundo8BitVerdeafafaf(texto: string): string {
    return `\033[48;5;145m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afafd7 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafafd7(texto: string): string {
    return `\033[38;5;146m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afafd7.
   */
  public adicionaFormatacaoFundo8BitVerdeafafd7(texto: string): string {
    return `\033[48;5;146m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afafff de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafafff(texto: string): string {
    return `\033[38;5;147m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afafff.
   */
  public adicionaFormatacaoFundo8BitVerdeafafff(texto: string): string {
    return `\033[48;5;147m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afd700 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafd700(texto: string): string {
    return `\033[38;5;148m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afd700.
   */
  public adicionaFormatacaoFundo8BitVerdeafd700(texto: string): string {
    return `\033[48;5;148m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afd75f de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafd75f(texto: string): string {
    return `\033[38;5;149m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afd75f.
   */
  public adicionaFormatacaoFundo8BitVerdeafd75f(texto: string): string {
    return `\033[48;5;149m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afd787 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafd787(texto: string): string {
    return `\033[38;5;150m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afd787.
   */
  public adicionaFormatacaoFundo8BitVerdeafd787(texto: string): string {
    return `\033[48;5;150m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afd7af de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafd7af(texto: string): string {
    return `\033[38;5;151m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afd7af.
   */
  public adicionaFormatacaoFundo8BitVerdeafd7af(texto: string): string {
    return `\033[48;5;151m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afd7d7 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafd7d7(texto: string): string {
    return `\033[38;5;152m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afd7d7.
   */
  public adicionaFormatacaoFundo8BitVerdeafd7d7(texto: string): string {
    return `\033[48;5;152m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afd7ff de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafd7ff(texto: string): string {
    return `\033[38;5;153m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afd7ff.
   */
  public adicionaFormatacaoFundo8BitVerdeafd7ff(texto: string): string {
    return `\033[48;5;153m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afff00 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafff00(texto: string): string {
    return `\033[38;5;154m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afff00.
   */
  public adicionaFormatacaoFundo8BitVerdeafff00(texto: string): string {
    return `\033[48;5;154m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afff5f de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafff5f(texto: string): string {
    return `\033[38;5;155m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afff5f.
   */
  public adicionaFormatacaoFundo8BitVerdeafff5f(texto: string): string {
    return `\033[48;5;155m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afff87 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafff87(texto: string): string {
    return `\033[38;5;156m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afff87.
   */
  public adicionaFormatacaoFundo8BitVerdeafff87(texto: string): string {
    return `\033[48;5;156m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afffaf de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafffaf(texto: string): string {
    return `\033[38;5;157m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afffaf.
   */
  public adicionaFormatacaoFundo8BitVerdeafffaf(texto: string): string {
    return `\033[48;5;157m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afffd7 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafffd7(texto: string): string {
    return `\033[38;5;158m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afffd7.
   */
  public adicionaFormatacaoFundo8BitVerdeafffd7(texto: string): string {
    return `\033[48;5;158m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde afffff de texto.
   */
  public adicionaFormatacaoCor8BitVerdeafffff(texto: string): string {
    return `\033[38;5;159m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde afffff.
   */
  public adicionaFormatacaoFundo8BitVerdeafffff(texto: string): string {
    return `\033[48;5;159m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d70000 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod70000(texto: string): string {
    return `\033[38;5;160m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d70000.
   */
  public adicionaFormatacaoFundo8BitVermelhod70000(texto: string): string {
    return `\033[48;5;160m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d7005f de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod7005f(texto: string): string {
    return `\033[38;5;161m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d7005f.
   */
  public adicionaFormatacaoFundo8BitVermelhod7005f(texto: string): string {
    return `\033[48;5;161m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d70087 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod70087(texto: string): string {
    return `\033[38;5;162m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d70087.
   */
  public adicionaFormatacaoFundo8BitVermelhod70087(texto: string): string {
    return `\033[48;5;162m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d700af de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod700af(texto: string): string {
    return `\033[38;5;163m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d700af.
   */
  public adicionaFormatacaoFundo8BitVermelhod700af(texto: string): string {
    return `\033[48;5;163m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d700d7 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod700d7(texto: string): string {
    return `\033[38;5;164m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d700d7.
   */
  public adicionaFormatacaoFundo8BitVermelhod700d7(texto: string): string {
    return `\033[48;5;164m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d700ff de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod700ff(texto: string): string {
    return `\033[38;5;165m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d700ff.
   */
  public adicionaFormatacaoFundo8BitVermelhod700ff(texto: string): string {
    return `\033[48;5;165m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d75f00 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod75f00(texto: string): string {
    return `\033[38;5;166m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d75f00.
   */
  public adicionaFormatacaoFundo8BitVermelhod75f00(texto: string): string {
    return `\033[48;5;166m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d75f5f de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod75f5f(texto: string): string {
    return `\033[38;5;167m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d75f5f.
   */
  public adicionaFormatacaoFundo8BitVermelhod75f5f(texto: string): string {
    return `\033[48;5;167m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d75f87 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod75f87(texto: string): string {
    return `\033[38;5;168m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d75f87.
   */
  public adicionaFormatacaoFundo8BitVermelhod75f87(texto: string): string {
    return `\033[48;5;168m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d75faf de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod75faf(texto: string): string {
    return `\033[38;5;169m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d75faf.
   */
  public adicionaFormatacaoFundo8BitVermelhod75faf(texto: string): string {
    return `\033[48;5;169m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d75fd7 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod75fd7(texto: string): string {
    return `\033[38;5;170m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d75fd7.
   */
  public adicionaFormatacaoFundo8BitVermelhod75fd7(texto: string): string {
    return `\033[48;5;170m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d75fff de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod75fff(texto: string): string {
    return `\033[38;5;171m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d75fff.
   */
  public adicionaFormatacaoFundo8BitVermelhod75fff(texto: string): string {
    return `\033[48;5;171m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d78700 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod78700(texto: string): string {
    return `\033[38;5;172m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d78700.
   */
  public adicionaFormatacaoFundo8BitVermelhod78700(texto: string): string {
    return `\033[48;5;172m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d7875f de texto.
   */

  public adicionaFormatacaoCor8BitVermelhod7875f(texto: string): string {
    return `\033[38;5;173m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d7875f.
   */
  public adicionaFormatacaoFundo8BitVermelhod7875f(texto: string): string {
    return `\033[48;5;173m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d78787 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod78787(texto: string): string {
    return `\033[38;5;174m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d78787.
   */
  public adicionaFormatacaoFundo8BitVermelhod78787(texto: string): string {
    return `\033[48;5;174m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d787af de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod787af(texto: string): string {
    return `\033[38;5;175m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d787af.
   */
  public adicionaFormatacaoFundo8BitVermelhod787af(texto: string): string {
    return `\033[48;5;175m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d787d7 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod787d7(texto: string): string {
    return `\033[38;5;176m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d787d7.
   */
  public adicionaFormatacaoFundo8BitVermelhod787d7(texto: string): string {
    return `\033[48;5;176m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d787ff de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod787ff(texto: string): string {
    return `\033[38;5;177m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d787ff.
   */
  public adicionaFormatacaoFundo8BitVermelhod787ff(texto: string): string {
    return `\033[48;5;177m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d7af00 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod7af00(texto: string): string {
    return `\033[38;5;178m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d7af00.
   */
  public adicionaFormatacaoFundo8BitVermelhod7af00(texto: string): string {
    return `\033[48;5;178m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d7af5f de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod7af5f(texto: string): string {
    return `\033[38;5;179m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d7af5f.
   */
  public adicionaFormatacaoFundo8BitVermelhod7af5f(texto: string): string {
    return `\033[48;5;179m${texto}\033[0m`;
  }


  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d7af87 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod7af87(texto: string): string {
    return `\033[38;5;180m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d7af87.
   */
  public adicionaFormatacaoFundo8BitVermelhod7af87(texto: string): string {
    return `\033[48;5;180m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d7afaf de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod7afaf(texto: string): string {
    return `\033[38;5;181m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d7afaf.
   */
  public adicionaFormatacaoFundo8BitVermelhod7afaf(texto: string): string {
    return `\033[48;5;181m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d7afd7 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod7afd7(texto: string): string {
    return `\033[38;5;182m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d7afd7.
   */
  public adicionaFormatacaoFundo8BitVermelhod7afd7(texto: string): string {
    return `\033[48;5;182m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelho d7afff de texto.
   */
  public adicionaFormatacaoCor8BitVermelhod7afff(texto: string): string {
    return `\033[38;5;183m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelho d7afff.
   */
  public adicionaFormatacaoFundo8BitVermelhod7afff(texto: string): string {
    return `\033[48;5;183m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7d700 de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7d700(texto: string): string {
    return `\033[38;5;184m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7d700.
   */
  public adicionaFormatacaoFundo8BitVerdegd7d700(texto: string): string {
    return `\033[48;5;184m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7d75f de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7d75f(texto: string): string {
    return `\033[38;5;185m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7d75f.
   */
  public adicionaFormatacaoFundo8BitVerdegd7d75f(texto: string): string {
    return `\033[48;5;185m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7d787 de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7d787(texto: string): string {
    return `\033[38;5;186m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7d787.
   */
  public adicionaFormatacaoFundo8BitVerdegd7d787(texto: string): string {
    return `\033[48;5;186m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7d7af de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7d7af(texto: string): string {
    return `\033[38;5;187m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7d7af.
   */
  public adicionaFormatacaoFundo8BitVerdegd7d7af(texto: string): string {
    return `\033[48;5;187m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7d7d7 de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7d7d7(texto: string): string {
    return `\033[38;5;188m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7d7d7.
   */
  public adicionaFormatacaoFundo8BitVerdegd7d7d7(texto: string): string {
    return `\033[48;5;188m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7d7ff de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7d7ff(texto: string): string {
    return `\033[38;5;189m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7d7ff.
   */
  public adicionaFormatacaoFundo8BitVerdegd7d7ff(texto: string): string {
    return `\033[48;5;189m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7ff00 de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7ff00(texto: string): string {
    return `\033[38;5;190m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7ff00.
   */
  public adicionaFormatacaoFundo8BitVerdegd7ff00(texto: string): string {
    return `\033[48;5;190m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7ff5f de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7ff5f(texto: string): string {
    return `\033[38;5;191m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7ff5f.
   */
  public adicionaFormatacaoFundo8BitVerdegd7ff5f(texto: string): string {
    return `\033[48;5;191m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7ff87 de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7ff87(texto: string): string {
    return `\033[38;5;192m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7ff87.
   */
  public adicionaFormatacaoFundo8BitVerdegd7ff87(texto: string): string {
    return `\033[48;5;192m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7ffaf de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7ffaf(texto: string): string {
    return `\033[38;5;193m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7ffaf.
   */
  public adicionaFormatacaoFundo8BitVerdegd7ffaf(texto: string): string {
    return `\033[48;5;193m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7ffd7 de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7ffd7(texto: string): string {
    return `\033[38;5;194m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7ffd7.
   */
  public adicionaFormatacaoFundo8BitVerdegd7ffd7(texto: string): string {
    return `\033[48;5;194m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde d7ffff de texto.
   */
  public adicionaFormatacaoCor8BitVerdegd7ffff(texto: string): string {
    return `\033[38;5;195m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde d7ffff.
   */
  public adicionaFormatacaoFundo8BitVerdegd7ffff(texto: string): string {
    return `\033[48;5;195m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff005f de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff005f(texto: string): string {
    return `\033[38;5;197m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff005f.
   */
  public adicionaFormatacaoFundo8BitVermelhaff005f(texto: string): string {
    return `\033[48;5;197m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff0087 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff0087(texto: string): string {
    return `\033[38;5;198m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff0087.
   */
  public adicionaFormatacaoFundo8BitVermelhaff0087(texto: string): string {
    return `\033[48;5;198m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff00af de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff00af(texto: string): string {
    return `\033[38;5;199m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff00af.
   */
  public adicionaFormatacaoFundo8BitVermelhaff00af(texto: string): string {
    return `\033[48;5;199m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff00d7 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff00d7(texto: string): string {
    return `\033[38;5;200m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff00d7.
   */
  public adicionaFormatacaoFundo8BitVermelhaff00d7(texto: string): string {
    return `\033[48;5;200m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff00ff de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff00ff(texto: string): string {
    return `\033[38;5;201m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff00ff.
   */
  public adicionaFormatacaoFundo8BitVermelhaff00ff(texto: string): string {
    return `\033[48;5;201m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff5f00 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff5f00(texto: string): string {
    return `\033[38;5;202m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff5f00.
   */
  public adicionaFormatacaoFundo8BitVermelhaff5f00(texto: string): string {
    return `\033[48;5;202m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff5f5f de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff5f5f(texto: string): string {
    return `\033[38;5;203m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff5f5f.
   */
  public adicionaFormatacaoFundo8BitVermelhaff5f5f(texto: string): string {
    return `\033[48;5;203m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff5f87 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff5f87(texto: string): string {
    return `\033[38;5;204m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff5f87.
   */
  public adicionaFormatacaoFundo8BitVermelhaff5f87(texto: string): string {
    return `\033[48;5;204m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff5faf de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff5faf(texto: string): string {
    return `\033[38;5;205m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff5faf.
   */
  public adicionaFormatacaoFundo8BitVermelhaff5faf(texto: string): string {
    return `\033[48;5;205m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff5fd7 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff5fd7(texto: string): string {
    return `\033[38;5;206m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff5fd7.
   */
  public adicionaFormatacaoFundo8BitVermelhaff5fd7(texto: string): string {
    return `\033[48;5;206m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff5fff de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff5fff(texto: string): string {
    return `\033[38;5;207m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff5fff.
   */
  public adicionaFormatacaoFundo8BitVermelhaff5fff(texto: string): string {
    return `\033[48;5;207m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff8700 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff8700(texto: string): string {
    return `\033[38;5;208m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff8700.
   */
  public adicionaFormatacaoFundo8BitVermelhaff8700(texto: string): string {
    return `\033[48;5;208m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff875f de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff875f(texto: string): string {
    return `\033[38;5;209m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff875f.
   */


  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff8787 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff8787(texto: string): string {
    return `\033[38;5;210m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff8787.
   */
  public adicionaFormatacaoFundo8BitVermelhaff8787(texto: string): string {
    return `\033[48;5;210m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff87af de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff87af(texto: string): string {
    return `\033[38;5;211m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff87af.
   */
  public adicionaFormatacaoFundo8BitVermelhaff87af(texto: string): string {
    return `\033[48;5;211m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff87d7 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff87d7(texto: string): string {
    return `\033[38;5;212m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff87d7.
   */
  public adicionaFormatacaoFundo8BitVermelhaff87d7(texto: string): string {
    return `\033[48;5;212m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ff87ff de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaff87ff(texto: string): string {
    return `\033[38;5;213m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ff87ff.
   */
  public adicionaFormatacaoFundo8BitVermelhaff87ff(texto: string): string {
    return `\033[48;5;213m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ffaf00 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaffaf00(texto: string): string {
    return `\033[38;5;214m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ffaf00.
   */
  public adicionaFormatacaoFundo8BitVermelhaffaf00(texto: string): string {
    return `\033[48;5;214m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ffaf5f de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaffaf5f(texto: string): string {
    return `\033[38;5;215m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ffaf5f.
   */
  public adicionaFormatacaoFundo8BitVermelhaffaf5f(texto: string): string {
    return `\033[48;5;215m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ffaf87 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaffaf87(texto: string): string {
    return `\033[38;5;216m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ffaf87.
   */
  public adicionaFormatacaoFundo8BitVermelhaffaf87(texto: string): string {
    return `\033[48;5;216m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ffafaf de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaffafaf(texto: string): string {
    return `\033[38;5;217m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ffafaf.
   */
  public adicionaFormatacaoFundo8BitVermelhaffafaf(texto: string): string {
    return `\033[48;5;217m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ffafd7 de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaffafd7(texto: string): string {
    return `\033[38;5;218m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ffafd7.
   */
  public adicionaFormatacaoFundo8BitVermelhaffafd7(texto: string): string {
    return `\033[48;5;218m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor vermelha ffafff de texto.
   */
  public adicionaFormatacaoCor8BitVermelhaffafff(texto: string): string {
    return `\033[38;5;219m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor vermelha ffafff.
   */
  public adicionaFormatacaoFundo8BitVermelhaffafff(texto: string): string {
    return `\033[48;5;219m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde ffd700 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeffd700(texto: string): string {
    return `\033[38;5;220m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde ffd700.
   */
  public adicionaFormatacaoFundo8BitVerdeffd700(texto: string): string {
    return `\033[48;5;220m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde ffd75f de texto.
   */
  public adicionaFormatacaoCor8BitVerdeffd75f(texto: string): string {
    return `\033[38;5;221m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde ffd75f.
   */
  public adicionaFormatacaoFundo8BitVerdeffd75f(texto: string): string {
    return `\033[48;5;221m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde ffd787 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeffd787(texto: string): string {
    return `\033[38;5;222m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde ffd787.
   */
  public adicionaFormatacaoFundo8BitVerdeffd787(texto: string): string {
    return `\033[48;5;222m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde ffd7af de texto.
   */
  public adicionaFormatacaoCor8BitVerdeffd7af(texto: string): string {
    return `\033[38;5;223m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde ffd7af.
   */
  public adicionaFormatacaoFundo8BitVerdeffd7af(texto: string): string {
    return `\033[48;5;223m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde ffd7d7 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeffd7d7(texto: string): string {
    return `\033[38;5;224m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde ffd7d7.
   */
  public adicionaFormatacaoFundo8BitVerdeffd7d7(texto: string): string {
    return `\033[48;5;224m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde ffd7ff de texto.
   */
  public adicionaFormatacaoCor8BitVerdeffd7ff(texto: string): string {
    return `\033[38;5;225m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde ffd7ff.
   */
  public adicionaFormatacaoFundo8BitVerdeffd7ff(texto: string): string {
    return `\033[48;5;225m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde ffff5f de texto.
   */
  public adicionaFormatacaoCor8BitVerdeffff5f(texto: string): string {
    return `\033[38;5;227m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde ffff5f.
   */
  public adicionaFormatacaoFundo8BitVerdeffff5f(texto: string): string {
    return `\033[48;5;227m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde ffff87 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeffff87(texto: string): string {
    return `\033[38;5;228m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde ffff87.
   */
  public adicionaFormatacaoFundo8BitVerdeffff87(texto: string): string {
    return `\033[48;5;228m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde ffffaf de texto.
   */
  public adicionaFormatacaoCor8BitVerdeffffaf(texto: string): string {
    return `\033[38;5;229m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde ffffaf.
   */
  public adicionaFormatacaoFundo8BitVerdeffffaf(texto: string): string {
    return `\033[48;5;229m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor verde ffffd7 de texto.
   */
  public adicionaFormatacaoCor8BitVerdeffffd7(texto: string): string {
    return `\033[38;5;230m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor verde ffffd7.
   */
  public adicionaFormatacaoFundo8BitVerdeffffd7(texto: string): string {
    return `\033[48;5;230m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 080808 de texto.
   */
  public adicionaFormatacaoCor8BitPreto080808(texto: string): string {
    return `\033[38;5;232m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 080808.
   */
  public adicionaFormatacaoFundo8BitPreto080808(texto: string): string {
    return `\033[48;5;232m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 121212 de texto.
   */
  public adicionaFormatacaoCor8BitPreto121212(texto: string): string {
    return `\033[38;5;233m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 121212.
   */
  public adicionaFormatacaoFundo8BitPreto121212(texto: string): string {
    return `\033[48;5;233m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 1c1c1c de texto.
   */
  public adicionaFormatacaoCor8BitPreto1c1c1c(texto: string): string {
    return `\033[38;5;234m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 1c1c1c.
   */
  public adicionaFormatacaoFundo8BitPreto1c1c1c(texto: string): string {
    return `\033[48;5;234m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 262626 de texto.
   */
  public adicionaFormatacaoCor8BitPreto262626(texto: string): string {
    return `\033[38;5;235m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 262626.
   */
  public adicionaFormatacaoFundo8BitPreto262626(texto: string): string {
    return `\033[48;5;235m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 303030 de texto.
   */
  public adicionaFormatacaoCor8BitPreto303030(texto: string): string {
    return `\033[38;5;236m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 303030.
   */
  public adicionaFormatacaoFundo8BitPreto303030(texto: string): string {
    return `\033[48;5;236m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 3a3a3a de texto.
   */
  public adicionaFormatacaoCor8BitPreto3a3a3a(texto: string): string {
    return `\033[38;5;237m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 3a3a3a.
   */
  public adicionaFormatacaoFundo8BitPreto3a3a3a(texto: string): string {
    return `\033[48;5;237m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 444444 de texto.
   */
  public adicionaFormatacaoCor8BitPreto444444(texto: string): string {
    return `\033[38;5;238m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 444444.
   */
  public adicionaFormatacaoFundo8BitPreto444444(texto: string): string {
    return `\033[48;5;238m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 4e4e4e de texto.
   */
  public adicionaFormatacaoCor8BitPreto4e4e4e(texto: string): string {
    return `\033[38;5;239m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 4e4e4e.
   */
  public adicionaFormatacaoFundo8BitPreto4e4e4e(texto: string): string {
    return `\033[48;5;239m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 585858 de texto.
   */
  public adicionaFormatacaoCor8BitPreto585858(texto: string): string {
    return `\033[38;5;240m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 585858.
   */
  public adicionaFormatacaoFundo8BitPreto585858(texto: string): string {
    return `\033[48;5;240m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 626262 de texto.
   */
  public adicionaFormatacaoCor8BitPreto626262(texto: string): string {
    return `\033[38;5;241m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 626262.
   */
  public adicionaFormatacaoFundo8BitPreto626262(texto: string): string {
    return `\033[48;5;241m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 6c6c6c de texto.
   */
  public adicionaFormatacaoCor8BitPreto6c6c6c(texto: string): string {
    return `\033[38;5;242m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 6c6c6c.
   */
  public adicionaFormatacaoFundo8BitPreto6c6c6c(texto: string): string {
    return `\033[48;5;242m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 767676 de texto.
   */
  public adicionaFormatacaoCor8BitPreto767676(texto: string): string {
    return `\033[38;5;243m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 767676.
   */
  public adicionaFormatacaoFundo8BitPreto767676(texto: string): string {
    return `\033[48;5;243m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 808080 de texto.
   */
  public adicionaFormatacaoCor8BitPreto808080(texto: string): string {
    return `\033[38;5;244m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 808080.
   */
  public adicionaFormatacaoFundo8BitPreto808080(texto: string): string {
    return `\033[48;5;244m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 8a8a8a de texto.
   */
  public adicionaFormatacaoCor8BitPreto8a8a8a(texto: string): string {
    return `\033[38;5;245m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 8a8a8a.
   */
  public adicionaFormatacaoFundo8BitPreto8a8a8a(texto: string): string {
    return `\033[48;5;245m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 949494 de texto.
   */
  public adicionaFormatacaoCor8BitPreto949494(texto: string): string {
    return `\033[38;5;246m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 949494.
   */
  public adicionaFormatacaoFundo8BitPreto949494(texto: string): string {
    return `\033[48;5;246m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto 9e9e9e de texto.
   */
  public adicionaFormatacaoCor8BitPreto9e9e9e(texto: string): string {
    return `\033[38;5;247m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto 9e9e9e.
   */
  public adicionaFormatacaoFundo8BitPreto9e9e9e(texto: string): string {
    return `\033[48;5;247m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto a8a8a8 de texto.
   */
  public adicionaFormatacaoCor8BitPretoa8a8a8(texto: string): string {
    return `\033[38;5;248m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto a8a8a8.
   */
  public adicionaFormatacaoFundo8BitPretoa8a8a8(texto: string): string {
    return `\033[48;5;248m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto b2b2b2 de texto.
   */
  public adicionaFormatacaoCor8BitPretoB2b2b2(texto: string): string {
    return `\033[38;5;249m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto b2b2b2.
   */
  public adicionaFormatacaoFundo8BitPretoB2b2b2(texto: string): string {
    return `\033[48;5;249m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto bcbcbc de texto.
   */
  public adicionaFormatacaoCor8BitPretoBCbcbc(texto: string): string {
    return `\033[38;5;250m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto bcbcbc.
   */
  public adicionaFormatacaoFundo8BitPretoBCbcbc(texto: string): string {
    return `\033[48;5;250m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto c6c6c6 de texto.
   */
  public adicionaFormatacaoCor8BitPretoC6c6c6(texto: string): string {
    return `\033[38;5;251m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto c6c6c6.
   */
  public adicionaFormatacaoFundo8BitPretoC6c6c6(texto: string): string {
    return `\033[48;5;251m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto d0d0d0 de texto.
   */
  public adicionaFormatacaoCor8BitPretoD0d0d0(texto: string): string {
    return `\033[38;5;252m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto d0d0d0.
   */
  public adicionaFormatacaoFundo8BitPretoD0d0d0(texto: string): string {
    return `\033[48;5;252m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto dadada de texto.
   */
  public adicionaFormatacaoCor8BitPretoDada(texto: string): string {
    return `\033[38;5;253m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto dadada.
   */
  public adicionaFormatacaoFundo8BitPretoDada(texto: string): string {
    return `\033[48;5;253m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto e4e4e4 de texto.
   */
  public adicionaFormatacaoCor8BitPretoE4e4e4(texto: string): string {
    return `\033[38;5;254m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto e4e4e4.
   */
  public adicionaFormatacaoFundo8BitPretoE4e4e4(texto: string): string {
    return `\033[48;5;254m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de cor preto eeeeee de texto.
   */
  public adicionaFormatacaoCor8BitPretoEeeeee(texto: string): string {
    return `\033[38;5;255m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação de fundo na cor preto eeeeee.
   */
  public adicionaFormatacaoFundo8BitPretoEeeeee(texto: string): string {
    return `\033[48;5;255m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @augments red quantidade de vermelho a ser usado. **[ Type: ``number`` ]**. 
   * @todo ***[red] deve estar entre 0 e 255***.
   * @augments green quantidade de verde a ser usado. **[ Type: ``number`` ]**. 
   * @todo ***[green] deve estar entre 0 e 255***.
   * @augments blue quantidade de azul a ser usado. **[ Type: ``number`` ]**. 
   * @todo ***[blue] deve estar entre 0 e 255***.
   * @description Adiciona formatação da cor 24 bits no texto.
   */
  public static adicionaFormatacaoCor24Bit(texto: string, red: number, green: number, blue: number): string {
    if(!(red < 0 || red > 255) || !(green < 0 || green > 255) || !(blue < 0 || blue > 255)) {
      console.error('Os valores devem estar entre 0 e 255.');
      return texto;
    }
    return `\033[38;2;${red};${green};${blue}m${texto}\033[0m`;
  }

  /**
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @augments red quantidade de vermelho a ser usado. **[ Type: ``number`` ]**.
   * @todo ***[red] deve estar entre 0 e 255***.
   * @augments green quantidade de verde a ser usado. **[ Type: ``number`` ]**.
   * @todo ***[green] deve estar entre 0 e 255***.
   * @augments blue quantidade de azul a ser usado. **[ Type: ``number`` ]**.
   * @todo ***[blue] deve estar entre 0 e 255***.
   * @description Adiciona formatação da cor 24 bits no fundo.
   */
  public static adicionaFormatacaoCor24BitFundo(texto: string, red: number, green: number, blue: number): string {
    if(!(red < 0 || red > 255) || !(green < 0 || green > 255) || !(blue < 0 || blue > 255)) {
      console.error('Os valores devem estar entre 0 e 255.');
      return texto;
    }
    return `\033[48;2;${red};${green};${blue}m${texto}\033[0m`;
  }

} export var wTerminal = new WTerminal();

