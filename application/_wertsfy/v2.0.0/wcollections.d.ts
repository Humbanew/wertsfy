// Tipos da arquitetura

import { WCRegExp } from "./wcregexp";
import { WCTerminal } from "./wcterminal";
import { WCSpectrals } from "./wcspectrals";
import { WCKarzok } from "./wckarzok";

export declare type WCollections= 
{
  Terminal: WCTerminal,
  Spectrals: WCSpectrals,
  Karzok: WCKarzok,
  ExpressoesRegulares: WCRegExp
}

export declare type WTrmSClr = "3b4bit"|"8bit"|"24bit";
export declare type WTrmSClrF = "C"|"F";
