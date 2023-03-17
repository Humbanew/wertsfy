// possíveis recursos de aprimoramento de arquitetura
  // aqui podem ser testados diversos algoritmos

import { WComponents } from "../.components/wcimport";
import { WConstSqrtCbrtCollectionObject, WConstShortcutsCollectionObject } from "./warch.type";

export declare interface WComponentLabo {
  
  src: { 
    number?: number
    string?: string
    function?: Function
    object?: { 
      collections: { 
        sqrt_cbrt?: WConstSqrtCbrtCollectionObject
        shortcuts?: WConstShortcutsCollectionObject 
      }
    }
    regex?: undefined
    html?: undefined 
  };

}


// Nova forma de mapeamento de tipos de funções
export declare type IFormatter<W> = { 
  Model: W;
}

type wertsfy_components = typeof WComponents;

export declare type WFunctionsPrototypesObject = {

  Models: {

    Libs: {

      Math: {

        abs: IFormatter<wertsfy_components>["Model"]["Mathematic"]["abs_method"]
        arccos: IFormatter<wertsfy_components>["Model"]["Mathematic"]["arccos_method"]

      }

      Calc: { }

    }

  }

}
