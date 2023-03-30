import { WertsfyPrototipos } from "./warch.prototype";

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
