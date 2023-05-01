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

    },

    HTMLCustomElementsConstructor: class constructor { }

  }

  export var lyAttrConstructor = new lydroc.HTMLAttrsConstructor();
  export var lyElementsConstructor = new lydroc.HTMLElementsConstructor();

}
