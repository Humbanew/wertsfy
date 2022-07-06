class wTerminal {

  private static Negrito = '1m';

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
  public SETUP_DIVIDER_SYMBOL: string = '<|==|>';

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
   * @augments modelo tipo de formatação a ser aplicada. **[ Type: ``models`` ]**.
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação da letra em um texto. 
   */
  public adicionaFormatacaoTexto(modelo: '01m@negrito'|'02m@faint'|'03m@italico'|'04m@sublinhado'|'05m@slowblink'|'06m@rapidblink'|'07m@reverse'|'08m@conceal'|'09m@crossedout'|'10m@defaultfont'|'11m@altfont1'|'12m@altfont2'|'13m@altfont3'|'14m@altfont4'|'15m@altfont5'|'16m@altfont6'|'17m@altfont7'|'18m@altfont8'|'19m@altfont9'|'20m@fraktur'|'21m@doublyunderline'|'22m@normalintensity'|'23m@notitalic'|'24m@notunderline'|'25m@blinkoff'|'26m@spacing'|'27m@reverseoff'|'28m@concealoff'|'29m@notcrossed'|'50m@propositalspacing'|'51m@framed'|'52m@encircled'|'53m@overlined'|'54m@notframed'|'55m@notencircled'|'58m@sublinhado'|'59m@sublinhadopadrao'|'60m@ideogramsublinhado'|'61m@ideogramsublinhadoduplo'|'62m@ideogramoverline'|'63m@ideogramoverlineduplo'|'64m@ideogramstress'|'65@noideogramattr'|'73m@superscript'|'74m@subscript'|'75m@nonsuperscriptsubscript', texto: string): string {
    const scan: RegExp = /(([0]{1})?([0-9]+m))/gi,
    tipo = scan.exec(modelo)[2].toString();
    return `\033[${tipo}${texto}\033[0m`;
  };

  /**
   * @augments modelo tipo de formatação de cor a ser aplicada. ||3/4-bits|| **[ Type: ``models`` ]**.
   * @augments texto texto a ser modificado. ||3/4-bits|| **[ Type: ``string`` ]**.
   * @augments template template de cor a ser aplicado. ||8-bits|| **[ Type: ``number`` ]**.
   * @augments schema esquema de cor RGB a ser aplicado. ||24-bits|| **[ Type: ``object`` ]**.}
   * @augments schema.r cor vermelha. **[ Type: ``number`` ]**.
   * @augments schema.g cor verde. **[ Type: ``number`` ]**.
   * @augments schema.b cor azul. **[ Type: ``number`` ]**.
   * @description Adiciona formatação de cor da letra ou fundo em um texto. 
   */
  public adicionaCorTexto(modelo: '3b4bit/30;0m@cpreta'|'3b4bit/40;0m@fpreta'|'3b4bit/31;0m@cvermelha'|'3b4bit/41;0m@fvermelha'|'3b4bit/32;0m@cverde'|'3b4bit/42;0m@fverde'|'3b4bit/33;0m@camarela'|'3b4bit/43;0m@famarela'|'3b4bit/34;0m@cazul'|'3b4bit/44;0m@fazul'|'3b4bit/35;0m@croxa'|'3b4bit/45;0m@froxa'|'3b4bit/36;0m@cciano'|'3b4bit/46;0m@fciano'|'3b4bit/37;0m@ccinza'|'3b4bit/47;0m@fcinza'|'3b4bit/90;0m@ccinzaclaro'|'3b4bit/100;0m@fcinzaclaro'|'3b4bit/91;0m@cvermelhoclaro'|'3b4bit/101:0m@fvermelhoclaro'|'3b4bit/92;0m@cverdeclaro'|'3b4bit/102;0m@fverdeclaro'|'3b4bit/93;0m@camareloclaro'|'3b4bit/103;0m@famareloclaro'|'3b4bit/94;0m@cazulclassico'|'3b4bit/104;0m@fazulclassico'|'3b4bit/95;0m@crosa'|'3b4bit/105;0m@frosa'|'3b4bit/96;0m@cazulclaro'|'3b4bit/106;0m@fazulclaro'|'3b4bit/97;0m@cbranco'|'3b4bit/107;0m@fbranco'|'8bit/38;5;tm@ctempcustom'|'8bit/48;5;tm@ftempcustom'|'24bit/38;2;r;g;bm@chexcustom'|'24bit/48;2;r;g;bm@fhexcustom', texto: string, template?: number, schema?: { red: number, green: number, blue: number}): string|void {
    const scan: RegExp = /(([0-9]+\;)?(([0-9]+\;)|([25]\;)([r]{1}\;[g]{1}\;|[0-9]{1,3}\;[0-9]{1,3}\;)?)?(([0]{1})?[0-9]+m|[b]{1}m|[t]{1}m))/gi,
    tipo = scan.exec(modelo)[0].toString();
    if(template < 0 || template > 255) return void 0;
    if(schema.red < 0 || schema.red > 255) return void 0;
    if(schema.green < 0 || schema.green > 255) return void 0;
    if(schema.blue < 0 || schema.blue > 255) return void 0;
    if(scan.exec(modelo)[6] === "tm") { 
      if(schema == null) { return void 0; }
      tipo.replace("t", template.toString());
      return `\033[${tipo}${texto}\033[0m`;
    }
    if(scan.exec(modelo)[5].toString() == "r;g;" && scan.exec(modelo)[6].toString() == "bm") {
      if(schema == null) { return void 0; }
      tipo.replace("r", schema.red.toString());
      tipo.replace("g", schema.green.toString());
      tipo.replace("b", schema.blue.toString());
      return `\033[${tipo}${texto}\033[0m`;
    }
    return `\033[${tipo}${texto}\033[0m`;
  }

} export var WTerminal = new wTerminal();
