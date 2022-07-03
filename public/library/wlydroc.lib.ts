class wLydroc {

  protected static constroeArquivoFolhaDeEstilo() { };

  protected static constroeGancho() { };

  protected static constroeHtmlDinamico() { };

  public static adicionaClasseDisplayBlock(): string {
    return ".ly-display-block { display: block; }";
  }

  public static adicionaClasseDisplayContents(): string {
    return ".ly-display-contents { display: contents; }";
  }

  public static adicionaClasseDisplayInherit(): string {
    return ".ly-display-inherit { display: inherit; }";
  }

} var WLydroc = new wLydroc();