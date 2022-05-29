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

  /** Adiciona formatação de sublinhado duplo no texto. */
  public adicionaFormatacaoDoublyUnderline(texto: string): string {
    return `\033[21m${texto}\033[0m`;
  }

  /** Adiciona formatação de intensidade padrão no texto. */
  public adicionaFormatacaoNormalIntensity(texto: string): string {
    return `\033[22m${texto}\033[0m`;
  }

  /** Adiciona formatação de retirada do itálico no texto. */
  public adicionaFormatacaoNotItalic(texto: string): string {
    return `\033[23m${texto}\033[0m`;
  }

  /** Adiciona formatação de retirada do sublinhado no texto. */
  public adicionaFormatacaoNotUnderline(texto: string): string {
    return `\033[24m${texto}\033[0m`;
  }

  /** Adiciona formatação de retirada do slow blink no texto. */
  public adicionaFormatacaoBlinkOff(texto: string): string {
    return `\033[25m${texto}\033[0m`;
  }

  /** Adiciona formatação de espaçamento proposital no texto. */
  public adicionaPropositalSpacing(texto: string): string {
    return `\033[26m${texto}\033[0m`;
  }

  /** Adiciona formatação de retirada em reverse no texto. */
  public adicionaFormatacaoReverseOff(texto: string): string {
    return `\033[27m${texto}\033[0m`;
  }

  /** Adiciona formatação de retirada do conceal no texto. */
  public adicionaFormatacaoConcealOff(texto: string): string {
    return `\033[28m${texto}\033[0m`;
  }

  /** Adiciona formatação de retirada do crossout no texto. */
  public adicionaFormatacaoNotCrossed(texto: string): string {
    return `\033[29m${texto}\033[0m`;
  }

  /** Adiciona formatação de retirada do espaçamento proposital texto. */
  public adicionaFormatacaoNotPropositalSpacing(texto: string): string {
    return `\033[50m${texto}\033[0m`;
  }

  /** Adiciona formatação de framed no texto. */
  public adicionaFormatacaoFramed(texto: string): string {
    return `\033[51m${texto}\033[0m`;
  }

  /** Adiciona formatação de encircled no texto. */
  public adicionaFormatacaoEncircled(texto: string): string {
    return `\033[52m${texto}\033[0m`;
  }

  /** Adiciona formatação de overlined no texto. */
  public adicionaFormatacaoOverlined(texto: string): string {
    return `\033[53m${texto}\033[0m`;
  }

  /** Adiciona formatação de not framed no texto. */
  public adicionaFormatacaoNotFramed(texto: string): string {
    return `\033[54m${texto}\033[0m`;
  }

  /** Adiciona formatação de not encircled no texto. */
  public adicionaFormatacaoNotEncircled(texto: string): string {
    return `\033[55m${texto}\033[0m`;
  }

  /** Adiciona formatação de cor do sublinhado no texto. */
  public adicionaFormatacaoCorSublinhado(texto: string): string {
    return `\033[58m${texto}\033[0m`;
  }

  /** Adiciona formatação de sublinhado padrão no texto. */
  public adicionaFormatacaoCorSublinhadoPadrao(texto: string): string {
    return `\033[59m${texto}\033[0m`;
  }

  /** Adiciona formatação de Ideograma Sublinhado no texto. */
  public adicionaFormatacaoIdeogramSublinhado(texto: string): string {
    return `\033[60m${texto}\033[0m`;
  }

  /** Adiciona formatação de Ideograma Sublinhado Duplo no texto. */
  public adicionaFormatacaoIdeogramSublinhadoDuplo(texto: string): string {
    return `\033[61m${texto}\033[0m`;
  }

  /** Adiciona formatação de Ideograma Overline no texto. */
  public adicionaFormatacaoIdeogramOverline(texto: string): string {
    return `\033[62m${texto}\033[0m`;
  }

  /** Adiciona formatação de Ideograma Overline Duplo no texto. */
  public adicionaFormatacaoIdeogramOverlineDuplo(texto: string): string {
    return `\033[63m${texto}\033[0m`;
  }

  /** Adiciona formatação de Ideograma Stress no texto. */
  public adicionaFormatacaoIdeogramStress(texto: string): string {
    return `\033[64m${texto}\033[0m`;
  }

  /** Adiciona formatação de retirada de Ideograma Attribute no texto. */
  public adicionaFormatacaoNoIdeogramAttribute(texto: string): string {
    return `\033[65m${texto}\033[0m`;
  }

  /** Adiciona formatação de Superscript no texto. */
  public adicionaFormatacaoSuperscript(texto: string): string {
    return `\033[73m${texto}\033[0m`;
  }

  /** Adiciona formatação de Subscript no texto. */
  public adicionaFormatacaoSubscript(texto: string): string {
    return `\033[74m${texto}\033[0m`;
  }

  /** Adiciona formatação de retirada de Superscript e Subscript no texto. */
  public adicionaFormatacaoNonSuperscriptSubscript(texto: string): string {
    return `\033[75m${texto}\033[0m`;
  }

} export var wTerminal = new WTerminal();

