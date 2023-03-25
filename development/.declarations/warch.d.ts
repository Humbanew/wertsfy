import { WConstSqrtCbrtCollectionObject, WConstShortcutsCollectionObject, WITFilter, WITFilterOutput } from "./warch.type";
import { WertsfyPrototipos } from "./warch.type.nxt";

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
        "#05": (x: WertsfyPrototipos.Logicos.TComuns, ...y: number[]) => number
        "#06": (x: WertsfyPrototipos.Logicos.TAvancados, ...y: number[]) => number[]
        "#07": (x: string) => void | number[] | string[]
        "#08": (x: WertsfyPrototipos.Logicos.TExpressoes["variaveisDePascal"], y: number, z: number, w: number, k: number) => number
        "#09": (x: WertsfyPrototipos.Logicos.TExpressoes["triangulosPitagoricos"]) => number
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
