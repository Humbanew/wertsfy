import { WConstSqrtCbrtCollectionObject, WConstShortcutsCollectionObject, WITFilter, WITFilterOutput } from "./warch.type";

export declare interface WComponent {
  
  src: { 
    number?: number
    string?: string
    function?: ( x: WITFilter, y?: WITFilter, z?: WITFilter, w?: WITFilter, k?: WITFilter, m?: WITFilter, n?: WITFilter, o?: WITFilter ) => WITFilterOutput
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
