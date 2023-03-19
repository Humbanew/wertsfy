import { WConstSqrtCbrtCollectionObject, WConstShortcutsCollectionObject, WITFilter, WITFilterOutput } from "./warch.type";

export declare interface WComponent {
  
  src: { 
    number?: number
    string?: string
    function?: {
      constructors: {
        "#00": () => number
        "#01": (x: number) => number
        "#02": (x: number[]) => number
        "#03": (x: number, y: number) => number
        "#04": (x: number, y: number, z: number[]) => number
      }
    }
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
