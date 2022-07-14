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

  /**
   * @augments tag define a tag svg a ser utilizada. **[ Type: ``models`` ]**.
   * @augments idElemento define o id do elemento svg a ser criado. **[ Type: ``string`` ]**.
   * @description cria um novo elemento svg.
   */
  public criaElementoSVG(tag: 'a'|'animate'|'animateMotion'|'animateTransform'|'circle'|'clipPath'|'color-profile'|'defs'|'desc'|'discard'|'ellipse'|'feBlend'|'feColorMatrix'|'feComponentTransfer'|'feComposite'|'feConvolveMatrix'|'feDiffuseLighting'|'feDisplamentMap'|'feDistantLight'|'feFlood'|'feFuncA'|'feFuncB'|'feFuncG'|'feFuncR'|'feGaussianBlur'|'feImage'|'feMerge'|'feMergeNode'|'feMorphology'|'feOffset'|'fePointLight'|'feSpecularLighting'|'feSpotLight'|'feTile'|'feTurbulence'|'filter'|'foreignObject'|'g'|'hatch'|'hatchpath'|'image'|'line'|'linearGradient'|'maker'|'mask'|'metadata'|'path'|'pattern'|'polygon'|'polyline'|'radialGradient'|'rect'|'set'|'solidcolor'|'stop'|'switch'|'symbol'|'text'|'textPath'|'title'|'thef'|'tspan'|'use'|'view', idElemento: string): any {
    const elemento = document.createElement(tag);
    elemento.id = idElemento;
    return elemento;
  }

  // tags customizadas;
  protected criaElementoCustomizado(tag: string, idElemento: string, herdeiro?: string) {

    const elemento = class CustomHTMLElement extends HTMLElement {

      constructor() {
        super();
        this.id = idElemento;
        if (herdeiro) {
          this.setAttribute('herdeiro', herdeiro);
        }
        
      }

    };

  }

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

  // attrs tags html => abbr, accept, accept-charset, accesskey, action, align, allow, allowfullscreen, allowpaymentrequest, allowusermedia, alt, as, async, autocomplete, autoplay, autosave, bgcolor, border, buffered, challenge, charset, checked, cite, class, code, codebase, color, cols, colspan, content, contenteditable, contextmenu, controls, coords, crossorigin, data, datetime, default, defer, dir, dirname, disabled, download, draggable, dropzone, enctype, for, form, formaction, formenctype, formmethod, formnovalidate, formtarget, frameborder, headers, height, hidden, high, href, hreflang, hspace, http-equiv, icon, id, integrity, ismap, itemid, itemprop, itemref, itemscope, itemtype, kind, label, lang, list, loop, low, manifest, marginheight, marginwidth, max, maxlength, media, mediagroup, method, min, minlength, multiple, muted, name, nonce, novalidate, open, optimum, pattern, placeholder, playsinline, poster, preload, profile, radiogroup, readonly, referrerpolicy, rel, required, reversed, rows, rowspan, sandbox, scope, scoped, scrolling, seamless, selected, shape, size, sizes, span, spellcheck, src, srcdoc, srclang, srcset, start, step, style, tabindex, target, title, translate, type, usemap, value, width, wrap
  protected adicionaAtributoAoElemento(idElemento: string, atributo: string, valor: string): void { }

  // attrs tags svg => accent-height, accumulate-ascent, accumulate-descent, additive-operator, alignment-baseline, alphabetic, amplitude, arabic-form, ascent, attribute-name, attribute-namespace, attribute-type, azimuth, baseProfile, baseline-shift, bbox, begin, bias, by, calcMode, cap-height, class, clip, clip-path, clip-rule, clipPathUnits, color, color-interpolation, color-interpolation-filters, color-profile, color-rendering, content, contentScriptType, contentStyleType, contentType, cursor, cx, cy, d, decelerate, descent, diffuse-lighting, direction, display, divisor, dominant-baseline, dur, dx, dy, edge-mode, elevation, end, exponent, externalResourcesRequired, fill, fill-opacity, fill-rule, filter, filterRes, filterUnits, flood-color, flood-opacity, focusable, font-family, font-size, font-size-adjust, font-stretch, font-style, font-variant, font-weight, format, from, fx, fy, g1, g2, glyph-name, glyph-orientation-horizontal, glyph-orientation-vertical, glyphRef, gradientTransform, gradientUnits, hanging, height, href, horiz-adv-x, horiz-origin-x, horiz-origin-y, id, ideographic, image-rendering, in, in2, intercept, k, k1, k2, k3, k4, kernelMatrix, kernelUnitLength, kerning, keyPoints, keySplines, keyTimes, lengthAdjust, letter-spacing, lighting-color, limitingConeAngle, local, marker-end, marker-mid, marker-start, marker-units, markerHeight, markerUnits, markerWidth, mask, maskContentUnits, maskUnits, mathematical, mode, name, numOctaves, offset, opacity, operator, order, orient, orientation, origin, overflow, overline-position, overline-thickness, paint-order, path, pathLength, patternContentUnits, patternTransform, patternUnits, pointer-events, points, pointsAtX, pointsAtY, pointsAtZ, preserveAlpha, preserveAspectRatio, primitiveUnits, r, radius, refX, refY, rendering-intent, repeatCount, repeatDur, requiredExtensions, requiredFeatures, restart, results, rotate, rx, ry, scale, seed, shape-renderizing, slope, spacing, specularConstant, specularExponent, specularConstantAttr, specularExponentAttr, spreadMethod, startOffset, stdDeviation, stemh, stemv, stitchTiles, stop-color, stop-opacity, strikethrough-position, strikethrough-thickness, string, stroke, stroke-dasharray, stroke-dashoffset, stroke-linecap, stroke-linejoin, stroke-miterlimit, stroke-opacity, stroke-width, surfaceScale, systemLanguage, tableValues, target, targetX, targetY, text-anchor, text-decoration, text-rendering, textLength, to, transform, type, u1, u2, underline-position, underline-thickness, unicode, unicode-bidi, unicode-range, units-per-em, values, v-alphabetic, v-hanging, v-ideographic, v-mathematical, vector-effect, version, vert-adv-y, vert-origin-x, vert-origin-y, viewBox, viewTarget, visibility, width, widths, word-spacing, writing-mode, x, x-height, x1, x2, xChannelSelector, y, y1, y2, yChannelSelector, z, zoomAndPan
  protected adicionaAtributoAoElementoSVG(idElemento: string, atributo: string, valor: string): void { }

  // attrs tags customizadas;

  // folhas de estilo predefinidas (CSS)


} export var WLydroc = new wLydroc();