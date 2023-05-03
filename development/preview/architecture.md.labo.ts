namespace WertsfyWhispers {

  let lydroc = {

    HTMLAttrsConstructor: class constructor { 

      protected classList: string[];
      protected id: string;

      set attrClassList(classlist: string[]) {
        this.classList = classlist;
      }

      set attrId(id: string) {
        this.id = id;
      }

    },

    HTMLElementsConstructor: class constructor {

      defineDoctypeTag() {
        return '<!DOCTYPE html>';
      }

      defineAbbrTag() {
        return '<abbr></abbr>';
      }

      defineDynamicAbbrTag() {
        return document.createElement('abbr');
      }

      defineAcronymTag() {
        return '<acronym></acronym>';
      }

      defineDynamicAcronymTag() {
        return document.createElement('acronym');
      }

      defineAddressTag() {
        return '<address></address>';
      }

      defineDynamicAddressTag() {
        return document.createElement('address');
      }

      defineAnchorTag() {
        return '<a></a>';
      }

      defineDynamicAnchorTag() {
        return document.createElement('a');
      }

      defineAppletTag() {
        return '<applet></applet>';
      }

      defineDynamicAppletTag() {
        return document.createElement('applet');
      }

      defineAreaTag() {
        return '<area></area>';
      }

      defineDynamicAreaTag() {
        return document.createElement('area');
      }

      defineArticleTag() {
        return '<article></article>';
      }

      defineDynamicArticleTag() {
        return document.createElement('article');
      }

      defineAsideTag() {
        return '<aside></aside>';
      }

      defineDynamicAsideTag() {
        return document.createElement('aside');
      }

      defineAudioTag() {
        return '<audio></audio>';
      }

      defineDynamicAudioTag() {
        return document.createElement('audio');
      }

      defineBTag() {
        return '<b></b>';
      }

      defineDynamicBTag() {
        return document.createElement('b');
      }

      defineBaseTag() {
        return '<base></base>';
      }

      defineDynamicBaseTag() {
        return document.createElement('base');
      }

      defineBdiTag() {
        return '<bdi></bdi>';
      }

      defineDynamicBdiTag() {
        return document.createElement('bdi');
      }

      defineBdoTag() {
        return '<bdo></bdo>';
      }

      defineDynamicBdoTag() {
        return document.createElement('bdo');
      }

      defineBigTag() {
        return '<big></big>';
      }

      defineDynamicBigTag() {
        return document.createElement('big');
      }

      defineBlinkTag() {
        return '<blink></blink>';
      }

      defineDynamicBlinkTag() {
        return document.createElement('blink');
      }

      defineBlockquoteTag() {
        return '<blockquote></blockquote>';
      }

      defineDynamicBlockquoteTag() {
        return document.createElement('blockquote');
      }

      defineBodyTag() {
        return '<body></body>';
      }

      defineDynamicBodyTag() {
        return document.createElement('body');
      }

      defineBrTag() {
        return '<br>';
      }

      defineDynamicBrTag() {
        return document.createElement('br');
      }

      defineButtonTag() {
        return '<button></button>';
      }

      defineDynamicButtonTag() {
        return document.createElement('button');
      }

      defineCanvasTag() {
        return '<canvas></canvas>';
      }

      defineDynamicCanvasTag() {
        return document.createElement('canvas');
      }

      defineCaptionTag() {
        return '<caption></caption>';
      }

      defineDynamicCaptionTag() {
        return document.createElement('caption');
      }

      defineCiteTag() {
        return '<cite></cite>';
      }

      defineDynamicCiteTag() {
        return document.createElement('cite');
      }

      defineCodeTag() {
        return '<code></code>';
      }

      defineDynamicCodeTag() {
        return document.createElement('code');
      }

      defineColTag() {
        return '<col></col>';
      }

      defineDynamicColTag() {
        return document.createElement('col');
      }

      defineColgroupTag() {
        return '<colgroup></colgroup>';
      }

      defineDynamicColgroupTag() {
        return document.createElement('colgroup');
      }

      defineDataTag() {
        return '<data></data>';
      }

      defineDynamicDataTag() {
        return document.createElement('data');
      }

      defineDatalistTag() {
        return '<datalist></datalist>';
      }

      defineDynamicDatalistTag() {
        return document.createElement('datalist');
      }

      defineDdTag() {
        return '<dd></dd>';
      }

      defineDynamicDdTag() {
        return document.createElement('dd');
      }

      defineDfnTag() {
        return '<dfn></dfn>';
      }

      defineDynamicDfnTag() {
        return document.createElement('dfn');
      }

      defineDelTag() {
        return '<del></del>';
      }

      defineDynamicDelTag() {
        return document.createElement('del');
      }

      defineDetailsTag() {
        return '<details></details>';
      }

      defineDynamicDetailsTag() {
        return document.createElement('details');
      }

      defineDialogTag() {
        return '<dialog></dialog>';
      }

      defineDynamicDialogTag() {
        return document.createElement('dialog');
      }

      defineDirTag() {
        return '<dir></dir>';
      }

      defineDynamicDirTag() {
        return document.createElement('dir');
      }

      defineDivTag() {
        return '<div></div>';
      }

      defineDynamicDivTag() {
        return document.createElement('div');
      }

      defineDlTag() {
        return '<dl></dl>';
      }

      defineDynamicDlTag() {
        return document.createElement('dl');
      }

      defineDtTag() {
        return '<dt></dt>';
      }

      defineDynamicDtTag() {
        return document.createElement('dt');
      }

      defineEmTag() {
        return '<em></em>';
      }

      defineDynamicEmTag() {
        return document.createElement('em');
      }

      defineEmbedTag() {
        return '<embed></embed>';
      }

      defineDynamicEmbedTag() {
        return document.createElement('embed');
      }

      defineFieldsetTag() {
        return '<fieldset></fieldset>';
      }

      defineDynamicFieldsetTag() {
        return document.createElement('fieldset');
      }

      defineFigcaptionTag() {
        return '<figcaption></figcaption>';
      }

      defineDynamicFigcaptionTag() {
        return document.createElement('figcaption');
      }

      defineFigureTag() {
        return '<figure></figure>';
      }

      defineDynamicFigureTag() {
        return document.createElement('figure');
      }

      defineFontTag() {
        return '<font></font>';
      }

      defineDynamicFontTag() {
        return document.createElement('font');
      }

      defineFooterTag() {
        return '<footer></footer>';
      }

      defineDynamicFooterTag() {
        return document.createElement('footer');
      }

      defineFormTag() {
        return '<form></form>';
      }

      defineDynamicFormTag() {
        return document.createElement('form');
      }

      defineFrameTag() {
        return '<frame></frame>';
      }

      defineDynamicFrameTag() {
        return document.createElement('frame');
      }

      defineFramesetTag() {
        return '<frameset></frameset>';
      }

      defineDynamicFramesetTag() {
        return document.createElement('frameset');
      }

      defineH1Tag() {
        return '<h1></h1>';
      }

      defineDynamicH1Tag() {
        return document.createElement('h1');
      }

      defineH2Tag() {
        return '<h2></h2>';
      }

      defineDynamicH2Tag() {
        return document.createElement('h2');
      }

      defineH3Tag() {
        return '<h3></h3>';
      }

      defineDynamicH3Tag() {
        return document.createElement('h3');
      }

      defineH4Tag() {
        return '<h4></h4>';
      }

      defineDynamicH4Tag() {
        return document.createElement('h4');
      }

      defineH5Tag() {
        return '<h5></h5>';
      }

      defineDynamicH5Tag() {
        return document.createElement('h5');
      }

      defineH6Tag() {
        return '<h6></h6>';
      }

      defineDynamicH6Tag() {
        return document.createElement('h6');
      }

      defineHeadTag() {
        return '<head></head>';
      }

      defineDynamicHeadTag() {
        return document.createElement('head');
      }

      defineHeaderTag() {
        return '<header></header>';
      }

      defineDynamicHeaderTag() {
        return document.createElement('header');
      }

      defineHgroupTag() {
        return '<hgroup></hgroup>';
      }

      defineDynamicHgroupTag() {
        return document.createElement('hgroup');
      }

      defineHrTag() {
        return '<hr></hr>';
      }

      defineDynamicHrTag() {
        return document.createElement('hr');
      }

      defineHtmlTag() {
        return '<html></html>';
      }

      defineDynamicHtmlTag() {
        return document.createElement('html');
      }

      defineITag() {
        return '<i></i>';
      }

      defineDynamicITag() {
        return document.createElement('i');
      }

      defineImgTag() {
        return '<img/>';
      }

      defineDynamicImgTag() {
        return document.createElement('img');
      }

      defineInputTag() {
        return '<input/>';
      }

      defineDynamicInputTag() {
        return document.createElement('input');
      }

      defineInsTag() {
        return '<ins></ins>';
      }

      defineDynamicInsTag() {
        return document.createElement('ins');
      }

      defineKbdTag() {
        return '<kbd></kbd>';
      }

      defineDynamicKbdTag() {
        return document.createElement('kbd');
      }

      defineKeygenTag() {
        return '<keygen></keygen>';
      }

      defineDynamicKeygenTag() {
        return document.createElement('keygen');
      }

      defineLabelTag() {
        return '<label></label>';
      }

      defineDynamicLabelTag() {
        return document.createElement('label');
      }

      defineLegendTag() {
        return '<legend></legend>';
      }

      defineDynamicLegendTag() {
        return document.createElement('legend');
      }

      defineLiTag() {
        return '<li></li>';
      }

      defineDynamicLiTag() {
        return document.createElement('li');
      }

      defineLinkTag() {
        return '<link/>';
      }

      defineDynamicLinkTag() {
        return document.createElement('link');
      }

      defineMainTag() {
        return '<main></main>';
      }

      defineDynamicMainTag() {
        return document.createElement('main');
      }

      defineMapTag() {
        return '<map></map>';
      }

      defineDynamicMapTag() {
        return document.createElement('map');
      }

      defineMenuTag() {
        return '<menu></menu>';
      }

      defineDynamicMenuTag() {
        return document.createElement('menu');
      }

      defineMetaTag() {
        return '<meta></meta>';
      }

      defineDynamicMetaTag() {
        return document.createElement('meta');
      }

      defineMeterTag() {
        return '<meter></meter>';
      }

      defineDynamicMeterTag() {
        return document.createElement('meter');
      }

      defineNavTag() {
        return '<nav></nav>';
      }

      defineDynamicNavTag() {
        return document.createElement('nav');
      }

      defineNoframesTag() {
        return '<noframes></noframes>';
      }

      defineDynamicNoframesTag() {
        return document.createElement('noframes');
      }

      defineNoscriptTag() {
        return '<noscript></noscript>';
      }

      defineDynamicNoscriptTag() {
        return document.createElement('noscript');
      }

      defineObjectTag() {
        return '<object></object>';
      }

      defineDynamicObjectTag() {
        return document.createElement('object');
      }

      defineOlTag() {
        return '<ol></ol>';
      }

      defineDynamicOlTag() {
        return document.createElement('ol');
      }

      defineOptgroupTag() {
        return '<optgroup></optgroup>';
      }

      defineDynamicOptgroupTag() {
        return document.createElement('optgroup');
      }

      defineOptionTag() {
        return '<option></option>';
      }

      defineDynamicOptionTag() {
        return document.createElement('option');
      }

      defineOutputTag() {
        return '<output></output>';
      }

      defineDynamicOutputTag() {
        return document.createElement('output');
      }

      defineParagraphTag() {
        return '<p></p>';
      }

      defineDynamicParagraphTag() {
        return document.createElement('p');
      }

      defineParamTag() {
        return '<param></param>';
      }

      defineDynamicParamTag() {
        return document.createElement('param');
      }

      definePictureTag() {
        return '<picture></picture>';
      }

      defineDynamicPictureTag() {
        return document.createElement('picture');
      }

      definePreTag() {
        return '<pre></pre>';
      }

      defineDynamicPreTag() {
        return document.createElement('pre');
      }

      defineProgressTag() {
        return '<progress></progress>';
      }

      defineDynamicProgressTag() {
        return document.createElement('progress');
      }

      defineQTag() {
        return '<q></q>';
      }

      defineDynamicQTag() {
        return document.createElement('q');
      }

    },

    HTMLCustomElementsConstructor: class constructor { },
    
    HTMLStylesheetAbstractionConstructor: (obj: IStylesheetAbstraction) => { return obj; }
    
  }

  interface IStylesheetAbstraction {

    [key: string]: Object;

  }

  export var lyAttrConstructor = new lydroc.HTMLAttrsConstructor();
  export var lyElementsConstructor = new lydroc.HTMLElementsConstructor();

}
