// possíveis recursos de aprimoramento de arquitetura
  // aqui podem ser testados diversos algoritmos

import { WConstSqrtCbrtCollectionObject, WConstShortcutsCollectionObject } from "./warch.type";
import { WertsfyPrototipos } from "./warch.type.nxt";

// => Lapidagem de algoritmos já implementados
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

export declare type WITFilter = number 
  | number[] 
  | string 
  | string[]
  | boolean 
  | WertsfyPrototipos.Logicos.TComuns
  | WertsfyPrototipos.Logicos.TAvancados
  | WertsfyPrototipos.Logicos.TExpressoes["determinantes"]
  | WertsfyPrototipos.Logicos.TExpressoes["funcoesCartesianas"]
  | WertsfyPrototipos.Logicos.TExpressoes["operacoesCartesianos"]
  | WertsfyPrototipos.Logicos.TExpressoes["operacoesComuns"]
  | WertsfyPrototipos.Logicos.TExpressoes["operacoesDiagramaVenn"]
  | WertsfyPrototipos.Logicos.TExpressoes["operacoesDiversos"]
  | WertsfyPrototipos.Logicos.TExpressoes["operacoesGeometricos"]
  | WertsfyPrototipos.Logicos.TExpressoes["operacoesNumericos"]
  | WertsfyPrototipos.Logicos.TExpressoes["operacoesVetores"]
  | WertsfyPrototipos.Logicos.TExpressoes["porcentagem"]
  | WertsfyPrototipos.Logicos.TExpressoes["triangulosPitagoricos"]
  | WertsfyPrototipos.Logicos.TExpressoes["variaveisDePascal"]
  | WertsfyPrototipos.Logicos.TExpressoes["variaveisDeTemperatura"]
  | WertsfyPrototipos.Logicos.TExpressoes["variaveisDeTitulacao"]
  | { inicial: number, final: number }
  | { sent1: string, sent2: string }
  | { m1: number[][], m2: number[][] }

export declare type WITFilterOutput = number 
  | number[]
  | string
  | string[]
  | void
  | object
  | boolean


// => Novos tipos

// Karzok
declare interface WKarzok {

  constructor: {

    cubbic: undefined

    minecraft: undefined

    terraria: undefined

    beamngdrive: undefined

  }

}

// Lydroc
// Terminal-Spectrals

