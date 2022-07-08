// Antiga HN XColors e HN Xolors
class wXsalis {

  public pegaCorTemplateTerminal(modelo: 'hex000000'|'hex800000'|'hex008000'|'hex808000'|'hex000080'|'hex800080'|'hex008080'): string {
    const scan: RegExp = /([0-9a-f]{6})/g;
    const formato = '#' + scan.exec(modelo)[1].toString();
    return formato;
  }

  protected pegaCorTemplateWeb(modelo: ''): string {
    return modelo;
  }

  protected pegaCorTemplateRGBY() { }

  protected pegaCorTemplateRGBYW() { }

} export var WXsalis = new wXsalis();