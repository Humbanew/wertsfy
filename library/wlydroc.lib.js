"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.WLydroc = void 0;
var wLydroc = /** @class */ (function () {
    function wLydroc() {
    }
    /**
     * @augments tag define a tag html a ser utilizada. **[ Type: ``models`` ]**.
     * @augments idElemento define o id do elemento html a ser criado. **[ Type: ``string`` ]**.
     * @description **Cria um novo elemento html.** | _Create a new html element._
     */
    wLydroc.prototype.criaElementoComum = function (tag, idElemento) {
        var elemento = document.createElement(tag);
        elemento.id = idElemento;
        return elemento;
    };
    /**
     * @augments tag define a tag svg a ser utilizada. **[ Type: ``models`` ]**.
     * @augments idElemento define o id do elemento svg a ser criado. **[ Type: ``string`` ]**.
     * @description **Cria um novo elemento svg.** | _Create a new svg element._
     */
    wLydroc.prototype.criaElementoSVG = function (tag, idElemento) {
        var elemento = document.createElement(tag);
        elemento.id = idElemento;
        return elemento;
    };
    /**
     * @augments tag define a tag customizada a ser utilizada. **[ Type: ``models`` ]**.
     * @augments idElemento define o id do elemento customizada a ser criado. **[ Type: ``string`` ]**.
     * @augments herdeiro define o elemento herdeiro do elemento a ser criado. **[ Type: ``string`` ]**.
     * @augments extensao define a extensão do elemento a ser criado. **[ Type: ``HTMLElement`` ]**.
     * @description **Cria um novo elemento customizado.** | _Create a new custom element._
     */
    wLydroc.prototype.criaElementoCustomizado = function (tag, idElemento, herdeiro, extensao) {
        if (herdeiro != 'abbr' || 'acronym' || 'address' || 'anchor' || 'applet' || 'area' || 'article' || 'audio' || 'b' || 'base' || 'basefont' || 'bdi' || 'bdo' || 'bgsound' || 'big' || 'blink' || 'blockquote' || 'body' || 'br' || 'button' || 'canvas' || 'caption' || 'center' || 'cite' || 'code' || 'col' || 'colgroup' || 'content' || 'data' || 'datalist' || 'dd' || 'del' || 'details' || 'dfn' || 'dialog' || 'dir' || 'div' || 'dl' || 'dt' || 'em' || 'embed' || 'fieldset' || 'figcaption' || 'figure' || 'font' || 'footer' || 'form' || 'frameset' || 'h1' || 'h2' || 'h3' || 'h4' || 'h5' || 'h6' || 'head' || 'header' || 'hgroup' || 'hr' || 'html' || 'i' || 'iframe' || 'image' || 'img' || 'input' || 'ins' || 'kbd' || 'keygen' || 'label' || 'legend' || 'li' || 'link' || 'main' || 'map' || 'mark' || 'marquee' || 'menu' || 'menuitem' || 'meta' || 'meter' || 'nav' || 'nobr' || 'noembed' || 'noframes' || 'noscript' || 'object' || 'ol' || 'optgroup' || 'option' || 'output' || 'paragraph' || 'param' || 'picture' || 'plaintext' || 'portal' || 'pre' || 'progress' || 'q' || 'rb' || 'rp' || 'rt' || 'rtc' || 'ruby' || 's' || 'samp' || 'script' || 'section' || 'select' || 'shadow' || 'slot' || 'small' || 'spacer' || 'span' || 'strike' || 'strong' || 'style' || 'sub' || 'summary' || 'sup' || 'table' || 'tbody' || 'td' || 'template' || 'textarea' || 'tfoot' || 'th' || 'thead' || 'time' || 'title' || 'tr' || 'track' || 'tt' || 'u' || 'ul' || 'var' || 'video' || 'wbr' || 'xmp')
            return 0;
        var elemento = /** @class */ (function (_super) {
            __extends(CustomHTMLElement, _super);
            function CustomHTMLElement() {
                var _this = _super.call(this) || this;
                _this.id = idElemento;
                return _this;
            }
            CustomHTMLElement.prototype.geraElemento = function () {
                var custom = window.customElements.define(tag, CustomHTMLElement, { "extends": herdeiro });
                this.attachShadow({ mode: 'open' });
                return custom;
            };
            return CustomHTMLElement;
        }(HTMLElement));
        new elemento().appendChild(extensao);
        return elemento;
    };
    /**
     * @augments id1 id do elemento base do vínculo a ser gerado. **[ Type: ``string`` ]**.
     * @augments id2 id do elemento herdeiro do vínculo a ser gerado. **[ Type: ``string`` ]**.
     * @description **Gera um vínculo entre elementos distintos.** | _Generate a link between different elements._
     */
    wLydroc.prototype.adicionaVinculoAoElemento = function (id1, id2) {
        var elemento1 = document.getElementById(id1);
        var elemento2 = document.getElementById(id2);
        if (elemento1 != null && elemento2 != null)
            elemento1.appendChild(elemento2);
    };
    /**
     * @augments atributo attr do elemento a ser adicionado. **[ Type: ``string`` ]**.
     * @augments valor valor do atributo a ser adicionado. **[ Type: ``string`` ]**.
     * @augments idElemento id do elemento a ser adicionado. **[ Type: ``string`` ]**.
     * @description **Gera um atributo em um elemento HTML selecionado.** | _Generate an attribute in a selected HTML element._
     */
    wLydroc.prototype.adicionaAtributoAoElemento = function (atributo, idElemento, valor) {
        var elemento = document.getElementById(idElemento);
        if (elemento != null)
            elemento.setAttribute(atributo, valor);
    };
    /**
     * @augments atributo attr do elemento a ser adicionado. **[ Type: ``string`` ]**.
     * @augments valor valor do atributo a ser adicionado. **[ Type: ``string`` ]**.
     * @augments idElemento id do elemento a ser adicionado. **[ Type: ``string`` ]**.
     * @description **Gera um atributo em um elemento SVG selecionado.** | _Generate an attribute in a selected SVG element._
     */
    wLydroc.prototype.adicionaAtributoAoElementoSVG = function (atributo, idElemento, valor) {
        var elemento = document.getElementById(idElemento);
        if (elemento != null)
            elemento.setAttribute(atributo, valor);
    };
    /**
     * @augments atributo atributo do elemento a ser adicionado. **[ Type: ``string`` ]**.
     * @augments idElemento id do elemento a ser adicionado. **[ Type: ``string`` ]**.
     * @description **Gera um attributo customizado.** | _Generates a custom attribute._
     */
    wLydroc.prototype.coletaAtributoDoElemento = function (atributo, idElemento) {
        var elemento = document.getElementById(idElemento);
        if (elemento != null)
            elemento.getAttribute(atributo);
        return elemento;
    };
    /**
     * @augments idFolhaDeEstilo id da folha de estilo a ser adicionada. **[ Type: ``string`` ]**.
     * @augments caminhoFolhaDeEstilo caminho da folha de estilo a ser adicionada. **[ Type: ``string`` ]**.
     * @description **Gera uma folha de estilo.** | _Generates a style sheet._
     */
    wLydroc.prototype.defineFolhaDeEstilo = function (idFolhaDeEstilo, caminhoFolhaDeEstilo) {
        var folhaDeEstilo = document.createElement('link');
        folhaDeEstilo.setAttribute('id', idFolhaDeEstilo);
        folhaDeEstilo.setAttribute('rel', 'stylesheet');
        folhaDeEstilo.setAttribute('href', caminhoFolhaDeEstilo);
        document.head.appendChild(folhaDeEstilo);
    };
    /**
     * @augments idFolhaDeEstilo id do elemento a ser adicionado. **[ Type: ``string`` ]**.
     * @augments caminhoFolhaDeEstilo caminho da folha de estilo a ser adicionada. **[ Type: ``string`` ]**.
     * @description **Gera uma folha de estilo no Javascript.** | _Generates a style sheet in Javascript._
    */
    wLydroc.prototype.defineFolhaDeEstiloJS = function (idFolhaDeEstilo, caminhoFolhaDeEstilo) {
        var folhaDeEstilo = document.createElement('script');
        folhaDeEstilo.setAttribute('id', idFolhaDeEstilo);
        folhaDeEstilo.setAttribute('type', 'text/javascript');
        folhaDeEstilo.setAttribute('src', caminhoFolhaDeEstilo);
        document.body.appendChild(folhaDeEstilo);
    };
    return wLydroc;
}());
exports.WLydroc = new wLydroc();
