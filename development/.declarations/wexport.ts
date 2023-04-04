/// <reference path="warch.prototype.d.ts" />

import { WertsfyPrototipos } from "./warch.prototype";

export namespace WertsfyTypes {

  export namespace Logicos {

    export var comum: WertsfyPrototipos.Logicos.Core["TComuns"];
    export var avancados: WertsfyPrototipos.Logicos.Core["TAvancados"];
    export var expressoes: WertsfyPrototipos.Logicos.Core["TExpressoes"];

  }
  
  export namespace Karzok {

    export var cubbic: WertsfyPrototipos.Karzok.Core["TCubbic"];
    export var spectrals: WertsfyPrototipos.Karzok.Core["TSpectrals"];

  }

}
