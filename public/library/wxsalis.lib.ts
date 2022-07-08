// Antiga HN XColors e HN Xolors
class wXsalis {
  

  public pegaCorTemplateTerminal(modelo: 'hex=000000'|'hex=800000'|'hex=008000'|'hex=808000'|'hex=000080'|'hex=800080'|'hex=008080'|'hex=808080'|'hex=C0C0C0'|'hex=FF0000'|'hex=00FF00'|'hex=0000FF'|'hex=FF00FF'|'hex=00FFFF'|'hex=FFFFFF'): string {
    const scan: RegExp = /(\=)([0-9A-F]{6})/g;
    const formato = '#' + scan.exec(modelo)[2].toString();
    return formato;
  }

  protected pegaCorTemplateWeb(modelo: ''): string {
    return modelo;
  }

  protected pegaCorTemplateRGBY() {}

  protected pegaCorTemplateRGBYW() { }

} export var WXsalis = new wXsalis();

export interface Suplementar { };