class wLydroc {

  /** 
   * @augments tag define a tag html a ser utilizada. **[ Type: ``models`` ]**.
   * @augments idElemento define o id do elemento html a ser criado. **[ Type: ``string`` ]**.
   * @description **Cria um novo elemento html.** | _Create a new html element._
   */
  public criaElementoComum(tag: 'abbr'|'acronym'|'address'|'anchor'|'applet'|'area'|'article'|'audio'|'b'|'base'|'basefont'|'bdi'|'bdo'|'bgsound'|'big'|'blink'|'blockquote'|'body'|'br'|'button'|'canvas'|'caption'|'center'|'cite'|'code'|'col'|'colgroup'|'content'|'data'|'datalist'|'dd'|'del'|'details'|'dfn'|'dialog'|'dir'|'div'|'dl'|'dt'|'em'|'embed'|'fieldset'|'figcaption'|'figure'|'font'|'footer'|'form'|'frameset'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'head'|'header'|'hgroup'|'hr'|'html'|'i'|'iframe'|'image'|'img'|'input'|'ins'|'kbd'|'keygen'|'label'|'legend'|'li'|'link'|'main'|'map'|'mark'|'marquee'|'menu'|'menuitem'|'meta'|'meter'|'nav'|'nobr'|'noembed'|'noframes'|'noscript'|'object'|'ol'|'optgroup'|'option'|'output'|'paragraph'|'param'|'picture'|'plaintext'|'portal'|'pre'|'progress'|'q'|'rb'|'rp'|'rt'|'rtc'|'ruby'|'s'|'samp'|'script'|'section'|'select'|'shadow'|'slot'|'small'|'spacer'|'span'|'strike'|'strong'|'style'|'sub'|'summary'|'sup'|'table'|'tbody'|'td'|'template'|'textarea'|'tfoot'|'th'|'thead'|'time'|'title'|'tr'|'track'|'tt'|'u'|'ul'|'var'|'video'|'wbr'|'xmp', idElemento: string): HTMLElement { 
    const elemento = document.createElement(tag);
    elemento.id = idElemento; 
    return elemento; 
  }

  /**
   * @augments tag define a tag svg a ser utilizada. **[ Type: ``models`` ]**.
   * @augments idElemento define o id do elemento svg a ser criado. **[ Type: ``string`` ]**.
   * @description **Cria um novo elemento svg.** | _Create a new svg element._
   */
  public criaElementoSVG(tag: 'a'|'animate'|'animateMotion'|'animateTransform'|'circle'|'clipPath'|'color-profile'|'defs'|'desc'|'discard'|'ellipse'|'feBlend'|'feColorMatrix'|'feComponentTransfer'|'feComposite'|'feConvolveMatrix'|'feDiffuseLighting'|'feDisplamentMap'|'feDistantLight'|'feFlood'|'feFuncA'|'feFuncB'|'feFuncG'|'feFuncR'|'feGaussianBlur'|'feImage'|'feMerge'|'feMergeNode'|'feMorphology'|'feOffset'|'fePointLight'|'feSpecularLighting'|'feSpotLight'|'feTile'|'feTurbulence'|'filter'|'foreignObject'|'g'|'hatch'|'hatchpath'|'image'|'line'|'linearGradient'|'maker'|'mask'|'metadata'|'path'|'pattern'|'polygon'|'polyline'|'radialGradient'|'rect'|'set'|'solidcolor'|'stop'|'switch'|'symbol'|'text'|'textPath'|'title'|'thef'|'tspan'|'use'|'view', idElemento: string): any {
    const elemento = document.createElement(tag);
    elemento.id = idElemento;
    return elemento;
  }

  /**
   * @augments tag define a tag customizada a ser utilizada. **[ Type: ``models`` ]**.
   * @augments idElemento define o id do elemento customizada a ser criado. **[ Type: ``string`` ]**.
   * @augments herdeiro define o elemento herdeiro do elemento a ser criado. **[ Type: ``string`` ]**.
   * @augments extensao define a extensão do elemento a ser criado. **[ Type: ``HTMLElement`` ]**.
   * @description **Cria um novo elemento customizado.** | _Create a new custom element._
   */
  public criaElementoCustomizado(tag: string, idElemento: string, herdeiro?: string, extensao?: HTMLElement): any {

    if(herdeiro != 'abbr'||'acronym'||'address'||'anchor'||'applet'||'area'||'article'||'audio'||'b'||'base'||'basefont'||'bdi'||'bdo'||'bgsound'||'big'||'blink'||'blockquote'||'body'||'br'||'button'||'canvas'||'caption'||'center'||'cite'||'code'||'col'||'colgroup'||'content'||'data'||'datalist'||'dd'||'del'||'details'||'dfn'||'dialog'||'dir'||'div'||'dl'||'dt'||'em'||'embed'||'fieldset'||'figcaption'||'figure'||'font'||'footer'||'form'||'frameset'||'h1'||'h2'||'h3'||'h4'||'h5'||'h6'||'head'||'header'||'hgroup'||'hr'||'html'||'i'||'iframe'||'image'||'img'||'input'||'ins'||'kbd'||'keygen'||'label'||'legend'||'li'||'link'||'main'||'map'||'mark'||'marquee'||'menu'||'menuitem'||'meta'||'meter'||'nav'||'nobr'||'noembed'||'noframes'||'noscript'||'object'||'ol'||'optgroup'||'option'||'output'||'paragraph'||'param'||'picture'||'plaintext'||'portal'||'pre'||'progress'||'q'||'rb'||'rp'||'rt'||'rtc'||'ruby'||'s'||'samp'||'script'||'section'||'select'||'shadow'||'slot'||'small'||'spacer'||'span'||'strike'||'strong'||'style'||'sub'||'summary'||'sup'||'table'||'tbody'||'td'||'template'||'textarea'||'tfoot'||'th'||'thead'||'time'||'title'||'tr'||'track'||'tt'||'u'||'ul'||'var'||'video'||'wbr'||'xmp') return 0;

    const elemento = class CustomHTMLElement extends HTMLElement {

      constructor() { super(); this.id = idElemento; }

      protected geraElemento() { 
        const custom = window.customElements.define(tag, CustomHTMLElement, { extends: herdeiro } );
        this.attachShadow({ mode: 'open' });
        return custom;
      }

    }

    new elemento().appendChild(extensao);

    return elemento;
  }

  /**
   * @augments id1 id do elemento base do vínculo a ser gerado. **[ Type: ``string`` ]**.
   * @augments id2 id do elemento herdeiro do vínculo a ser gerado. **[ Type: ``string`` ]**.
   * @description **Gera um vínculo entre elementos distintos.** | _Generate a link between different elements._
   */
  public adicionaVinculoAoElemento(id1: string, id2: string): void {
    const elemento1 = document.getElementById(id1);
    const elemento2 = document.getElementById(id2);
    elemento1.appendChild(elemento2);
  }

  /**
   * @augments atributo attr do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @augments valor valor do atributo a ser adicionado. **[ Type: ``string`` ]**.
   * @augments idElemento id do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @description **Gera um atributo em um elemento HTML selecionado.** | _Generate an attribute in a selected HTML element._
   */
  public adicionaAtributoAoElemento(atributo: 'abbr'|'accept'|'accept-charset'|'accesskey'|'action'|'align'|'allow'|'allowfullscreen'|'allowpaymentrequest'|'allowusermedia'|'alt'|'as'|'async'|'autocomplete'|'autoplay'|'autosave'|'bgcolor'|'border'|'buffered'|'challenge'|'charset'|'checked'|'cite'|'class'|'code'|'codebase'|'color'|'download'|'draggable'|'dropzone'|'enctype'|'for'|'form'|'formaction'|'formenctype'|'formmethod'|'formnovalidate'|'formtarget'|'frameborder'|'headers'|'label'|'lang'|'list'|'loop'|'low'|'manifest'|'marginheight'|'marginwidth'|'max'|'maxlength'|'media'|'mediagroup'|'method'|'min'|'minlength'|'multiple'|'muted'|'name'|'nonce'|'novalidate'|'open'|'optimum'|'pattern'|'placeholder'|'playsinline'|'poster'|'preload'|'profile'|'radiogroup'|'readonly'|'referrerpolicy'|'rel'|'required'|'reversed'|'rows'|'rowspan'|'sandbox'|'scope'|'scoped'|'scrolling'|'seamless'|'selected'|'shape'|'size'|'sizes'|'span'|'spellcheck'|'src'|'srcdoc'|'srclang'|'srcset'|'start'|'step'|'style'|'tabindex'|'target'|'title'|'translate'|'type'|'usemap'|'value'|'width'|'wrap', idElemento: string, valor: string): void {
    const elemento = document.getElementById(idElemento);
    elemento.setAttribute(atributo, valor);
  }

  /**
   * @augments atributo attr do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @augments valor valor do atributo a ser adicionado. **[ Type: ``string`` ]**.
   * @augments idElemento id do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @description **Gera um atributo em um elemento SVG selecionado.** | _Generate an attribute in a selected SVG element._
   */
  public adicionaAtributoAoElementoSVG(atributo: 'accent-height'|'accumulate-ascent'|'accumulate-descent'|'additive-operator'|'alignment-baseline'|'alphabetic'|'amplitude'|'arabic-form'|'ascent'|'attribute-name'|'attribute-namespace'|'attribute-type'|'azimuth'|'baseProfile'|'baseline-shift'|'bbox'|'begin'|'bias'|'by'|'calcMode'|'cap-height'|'class'|'clip'|'clip-path'|'clip-rule'|'clipPathUnits'|'color'|'color-interpolation'|'color-interpolation-filters'|'color-profile'|'color-rendering'|'content'|'contentScriptType'|'contentStyleType'|'contentType'|'cursor'|'cx'|'cy'|'d'|'decelerate'|'descent'|'diffuse-lighting'|'direction'|'display'|'divisor'|'dominant-baseline'|'dur'|'dx'|'dy'|'edge-mode'|'elevation'|'end'|'exponent'|'externalResourcesRequired'|'fill'|'fill-opacity'|'fill-rule'|'filter'|'filterRes'|'filterUnits'|'flood-color'|'flood-opacity'|'focusable'|'font-family'|'font-size'|'font-size-adjust'|'font-stretch'|'font-style'|'font-variant'|'font-weight'|'format'|'from'|'fx'|'fy'|'g1'|'g2'|'glyph-name'|'glyph-orientation-horizontal'|'glyph-orientation-vertical'|'glyphRef'|'gradientTransform'|'gradientUnits'|'hanging'|'height'|'href'|'horiz-adv-x'|'horiz-origin-x'|'horiz-origin-y'|'id'|'ideographic'|'image-rendering'|'in'|'in2'|'intercept'|'k'|'k1'|'k2'|'k3'|'k4'|'kernelMatrix'|'kernelUnitLength'|'kerning'|'keyPoints'|'keySplines'|'keyTimes'|'lengthAdjust'|'letter-spacing'|'lighting-color'|'limitingConeAngle'|'local'|'marker-end'|'marker-mid'|'marker-start'|'marker-units'|'markerHeight'|'markerUnits'|'markerWidth'|'mask'|'maskContentUnits'|'maskUnits'|'mathematical'|'mode'|'name'|'numOctaves'|'offset'|'opacity'|'operator'|'order'|'orient'|'orientation'|'origin'|'overflow'|'overline-position'|'overline-thickness'|'paint-order'|'path'|'pathLength'|'patternContentUnits'|'patternTransform'|'patternUnits'|'pointer-events'|'points'|'pointsAtX'|'pointsAtY'|'pointsAtZ'|'preserveAlpha'|'preserveAspectRatio'|'primitiveUnits'|'r'|'radius'|'refX'|'refY'|'rendering-intent'|'repeatCount'|'repeatDur'|'requiredExtensions'|'requiredFeatures'|'restart'|'results'|'rotate'|'rx'|'ry'|'scale'|'seed'|'shape-renderizing'|'slope'|'spacing'|'specularConstant'|'specularExponent'|'specularConstantAttr'|'specularExponentAttr'|'spreadMethod'|'startOffset'|'stdDeviation'|'stemh'|'stemv'|'stitchTiles'|'stop-color'|'stop-opacity'|'strikethrough-position'|'strikethrough-thickness'|'string'|'stroke'|'stroke-dasharray'|'stroke-dashoffset'|'stroke-linecap'|'stroke-linejoin'|'stroke-miterlimit'|'stroke-opacity'|'stroke-width'|'surfaceScale'|'systemLanguage'|'tableValues'|'target'|'targetX'|'targetY'|'text-anchor'|'text-decoration'|'text-rendering'|'textLength'|'to'|'transform'|'type'|'u1'|'u2'|'underline-position'|'underline-thickness'|'unicode'|'unicode-bidi'|'unicode-range'|'units-per-em'|'values'|'v-alphabetic'|'v-hanging'|'v-ideographic'|'v-mathematical'|'vector-effect'|'version'|'vert-adv-y'|'vert-origin-x'|'vert-origin-y'|'viewBox'|'viewTarget'|'visibility'|'width'|'widths'|'word-spacing'|'writing-mode'|'x'|'x-height'|'x1'|'x2'|'xChannelSelector'|'y'|'y1'|'y2'|'yChannelSelector'|'z'|'zoomAndPan', idElemento: string, valor: string): any {
    const elemento = document.getElementById(idElemento);
    elemento.setAttribute(atributo, valor);
  }

  /**
   * @augments atributo atributo do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @augments idElemento id do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @description **Gera um attributo customizado.** | _Generates a custom attribute._ 
   */
  public coletaAtributoDoElemento(atributo: string, idElemento: string): any {
    const elemento = document.getElementById(idElemento);
    return elemento.getAttribute(atributo);
  }

  /**
   * @augments idFolhaDeEstilo id da folha de estilo a ser adicionada. **[ Type: ``string`` ]**.
   * @augments caminhoFolhaDeEstilo caminho da folha de estilo a ser adicionada. **[ Type: ``string`` ]**.
   * @description **Gera uma folha de estilo.** | _Generates a style sheet._
   */
  protected defineFolhaDeEstilo(idFolhaDeEstilo: string, caminhoFolhaDeEstilo: string): void {
    const folhaDeEstilo = document.createElement('link');
    folhaDeEstilo.setAttribute('id', idFolhaDeEstilo);
    folhaDeEstilo.setAttribute('rel', 'stylesheet');
    folhaDeEstilo.setAttribute('href', caminhoFolhaDeEstilo);
    document.head.appendChild(folhaDeEstilo);
  }

  /**
   * @augments idFolhaDeEstilo id do elemento a ser adicionado. **[ Type: ``string`` ]**.
   * @augments caminhoFolhaDeEstilo caminho da folha de estilo a ser adicionada. **[ Type: ``string`` ]**.
   * @description **Gera uma folha de estilo no Javascript.** | _Generates a style sheet in Javascript._ 
  */
  protected defineFolhaDeEstiloJS(idFolhaDeEstilo: string, caminhoFolhaDeEstilo: string): void {
    const folhaDeEstilo = document.createElement('script');
    folhaDeEstilo.setAttribute('id', idFolhaDeEstilo);
    folhaDeEstilo.setAttribute('type', 'text/javascript');
    folhaDeEstilo.setAttribute('src', caminhoFolhaDeEstilo);
    document.body.appendChild(folhaDeEstilo);
  }

} export var WLydroc = new wLydroc();