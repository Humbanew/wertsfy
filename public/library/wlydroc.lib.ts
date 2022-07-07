class wLydroc {

  // constantes da biblioteca de todas as cores html
  public ALICEBLUE: string = '#F0F8FF';
  public ANTIQUEWHITE: string = '#FAEBD7';
  public AQUA: string = '#00FFFF';
  public AQUAMARINE: string = '#7FFFD4';
  public AZURE: string = '#F0FFFF';
  public BEIGE: string = '#F5F5DC';
  public BISQUE: string = '#FFE4C4';
  public BLACK: string = '#000000';
  public BLANCHEDALMOND: string = '#FFFACD';
  public BLUE: string = '#0000FF';
  public BLUEVIOLET: string = '#8A2BE2';
  public BROWN: string = '#A52A2A';
  public BURLYWOOD: string = '#DEB887';
  public CADETBLUE: string = '#5F9EA0';
  public CHARTREUSE: string = '#7FFF00';
  public CHOCOLATE: string = '#D2691E';
  public CORAL: string = '#FF7F50';
  public CORNFLOWERBLUE: string = '#6495ED';
  public CORNSILK: string = '#FFF8DC';
  public CRIMSON: string = '#DC143C';
  public CYAN: string = '#00FFFF';
  public DARKBLUE: string = '#00008B';
  public DARKCYAN: string = '#008B8B';
  public DARKGOLDENROD: string = '#B8860B';
  public DARKGRAY: string = '#A9A9A9';
  public DARKGREEN: string = '#006400';
  public DARKKHAKI: string = '#BDB76B';
  public DARKMAGENTA: string = '#8B008B';
  public DARKOLIVEGREEN: string = '#556B2F';
  public DARKORANGE: string = '#FF8C00';
  public DARKORCHID: string = '#9932CC';
  public DARKRED: string = '#8B0000';
  public DARKSALMON: string = '#E9967A';
  public DARKSEAGREEN: string = '#8FBC8F';
  public DARKSLATEBLUE: string = '#483D8B';
  public DARKSLATEGRAY: string = '#2F4F4F';
  public DARKTURQUOISE: string = '#00CED1';
  public DARKVIOLET: string = '#9400D3';
  public DEEPPINK: string = '#FF1493';
  public DEEPSKYBLUE: string = '#00BFFF';
  public DIMGRAY: string = '#696969';
  public DODGERBLUE: string = '#1E90FF';
  public FIREBRICK: string = '#B22222';
  public FLORALWHITE: string = '#FFFAF0';
  public FLORESTGREEN: string = '#228B22';
  public FUCHSIA: string = '#FF00FF';


  /** 
   * @augments tag define a tag html a ser utilizada. **[ Type: ``models`` ]**.
   * @augments idElemento define o id do elemento html a ser criado. **[ Type: ``string`` ]**.
   * @description cria um novo elemento html.
   */
  public criaElementoComum(tag: 'abbr'|'acronym'|'address'|'anchor'|'applet'|'area'|'article'|'audio'|'b'|'base'|'basefont'|'bdi'|'bdo'|'bgsound'|'big'|'blink'|'blockquote'|'body'|'br'|'button'|'canvas'|'caption'|'center'|'cite'|'code'|'col'|'colgroup'|'content'|'data'|'datalist'|'dd'|'del'|'details'|'dfn'|'dialog'|'dir'|'div'|'dl'|'dt'|'em'|'embed'|'fieldset'|'figcaption'|'figure'|'font'|'footer'|'form'|'frameset'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'head'|'header'|'hgroup'|'hr'|'html'|'i'|'iframe'|'image'|'img'|'input'|'ins'|'kbd'|'keygen'|'label'|'legend'|'li'|'link'|'main'|'map'|'mark'|'marquee'|'menu'|'menuitem'|'meta'|'meter'|'nav'|'nobr'|'noembed'|'noframes'|'noscript'|'object'|'ol'|'optgroup'|'option'|'output'|'paragraph'|'param'|'picture'|'plaintext'|'portal'|'pre'|'progress'|'q'|'rb'|'rp'|'rt'|'rtc'|'ruby'|'s'|'samp'|'script'|'section'|'select'|'shadow'|'slot'|'small'|'spacer'|'span'|'strike'|'strong'|'style'|'sub'|'summary'|'sup'|'table'|'tbody'|'td'|'template'|'textarea'|'tfoot'|'th'|'thead'|'time'|'title'|'tr'|'track'|'tt'|'u'|'ul'|'var'|'video'|'wbr'|'xmp', idElemento: string): HTMLElement { 
    const elemento = document.createElement(tag);
    elemento.id = idElemento; 
    return elemento; 
  }

  protected criaElementoSVG() { }

  protected criaElementoCustomizado() { }

  /**
   * @augments id1 id do elemento base do vínculo a ser gerado. **[ Type: ``string`` ]**.
   * @augments id2 id do elemento herdeiro do vínculo a ser gerado. **[ Type: ``string`` ]**.
   * @description gera um vínculo entre elementos distintos.
   */
  public adicionaVinculoAoElemento(id1: string, id2: string): void {
    const elemento1 = document.getElementById(id1);
    const elemento2 = document.getElementById(id2);
    elemento1.appendChild(elemento2);
  }

  // attrs tags html

  // folhas de estilo predefinidas

  // folhas de estilo customizadas


} var WLydroc = new wLydroc();