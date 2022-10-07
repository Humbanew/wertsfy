// Tipos da arquitetura

import { WCRegExp } from "./wcregexp";
import { WCTerminal } from "./wcterminal";

export declare type WCollections= 
{
  Terminal: WCTerminal,
  ExpressoesRegulares: WCRegExp,
  Spectrals: WCSpectrals 
}

export declare type WTrmSClr = "3b4bit"|"8bit"|"24bit";
export declare type WTrmSClrF = "C"|"F";
