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

    HTMLElementsConstructor: {

      StaticForm: null,

      DynamicForm: null

    },

    HTMLStcModeElementsConstructor: class constructor {

      defineDoctypeTag() {
        return '<!DOCTYPE html>';
      }

      defineHTMLTag() {
        return '<html></html>';
      }

      defineHeadTag() {
        return '<head></head>';
      }

      defineBodyTag() {
        return '<body></body>';
      }

      defineTitleTag() {
        return '<title></title>';
      }

    },

    HTMLDnyModeElementsConstructor: class constructor {

      defineDoctypeTag() {
        return "<!DOCTYPE html>";
      }

      defineHTMLTag() {
        return document.createElement("html");
      }

      defineHeadTag() {
        return document.createElement("head");
      }

      defineBodyTag() {
        return document.createElement("body");
      }

      defineTitleTag() {
        return document.createElement("title");
      }

    }

  }

  export var lyAttrConstructor = new lydroc.HTMLAttrsConstructor();

}
