class WTerminal { 

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

// Cor schema 3/4 bit @000 => #000000 <=> \033[30;0m <=> \033[40;0m
// Cor schema 3/4 bit @001 => #800000 <=> \033[31;0m <=> \033[41;0m
// Cor schema 3/4 bit @002 => #008000 <=> \033[32;0m <=> \033[42;0m
// Cor schema 3/4 bit @003 => #808000 <=> \033[33;0m <=> \033[43;0m
// Cor schema 3/4 bit @004 => #000080 <=> \033[34;0m <=> \033[44;0m
// Cor schema 3/4 bit @005 => #800080 <=> \033[35;0m <=> \033[45;0m
// Cor schema 3/4 bit @006 => #008080 <=> \033[36;0m <=> \033[46;0m
// Cor schema 3/4 bit @007 => #c0c0c0 <=> \033[37;0m <=> \033[47;0m
// Cor schema 3/4 bit @008 => #808080 <=> \033[90;0m <=> \033[100;0m
// Cor schema 3/4 bit @009 => #ff0000 <=> \033[91;0m <=> \033[101;0m
// Cor schema 3/4 bit @010 => #00ff00 <=> \033[92;0m <=> \033[102;0m
// Cor schema 3/4 bit @011 => #ffff00 <=> \033[93;0m <=> \033[103;0m
// Cor schema 3/4 bit @012 => #0000ff <=> \033[94;0m <=> \033[104;0m
// Cor schema 3/4 bit @013 => #ff00ff <=> \033[95;0m <=> \033[105;0m
// Cor schema 3/4 bit @014 => #00ffff <=> \033[96;0m <=> \033[106;0m
// Cor schema 3/4 bit @015 => #ffffff <=> \033[97;0m <=> \033[107;0m

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

