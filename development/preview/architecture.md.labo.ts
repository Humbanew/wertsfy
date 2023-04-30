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

      defineHTMLTag() {
        return '<html></html>';
      }

      defineDynHTMLTag() {
        return document.createElement('html');
      }

      defineHeadTag() {
        return '<head></head>';
      }

      defineDynHeadTag() {
        return document.createElement('head');
      }

      defineBodyTag() {
        return '<body></body>';
      }

      defineDynBodyTag() {
        return document.createElement('body');
      }

      defineTitleTag() {
        return '<title></title>';
      }

      defineDynTitleTag() {
        return document.createElement('title');
      }

    }

  }

  export var lyAttrConstructor = new lydroc.HTMLAttrsConstructor();
  export var lyElementsConstructor = new lydroc.HTMLElementsConstructor();

}
