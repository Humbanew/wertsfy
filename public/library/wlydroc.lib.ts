class wLydroc {

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

  protected criaElementoSVG(tag: '', idElemento: string) { }

  protected criaElementoCustomizado(tag: string, idElemento: string, herdeiro?: string) { }

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

  // attrs tags svg

  // attrs tags customizadas

  // folhas de estilo predefinidas

  // folhas de estilo customizadas


} export var WLydroc = new wLydroc();