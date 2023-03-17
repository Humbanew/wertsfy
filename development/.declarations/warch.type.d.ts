import { WComponents } from "./.components/wcimport";

export declare type WConstSqrtCbrtCollectionObject = { 
  Of01_02: number; 
  Of01_04: number; 
  Of01_06: number; 
  Of01_08: number; 
  Of01: number; 
  Of02: number; 
  Of03: number; 
  Of04: number; 
  Of05: number; 
  Of06: number; 
  Of07: number; 
  Of09: number; 
  Of10: number;  
}

export declare type WConstShortcutsCollectionObject = {
  Pi: number; 
  Euler: number; 
  Log2: number; 
  Log2e: number; 
  Log10: number; 
  Log10e: number;
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
