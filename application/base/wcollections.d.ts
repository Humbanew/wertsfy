// Tipos da arquitetura
import { WCRegExp } from "./wcregexp";
import { WCTerminal } from "./wcterminal";
import { WCSpectrals } from "./wcspectrals";
import { WCConsts } from "./wcconsts";

export declare type WCollections= 
{
  Terminal: WCTerminal;
  Spectrals: WCSpectrals;
  Constantes: WCConsts;
  ExpressoesRegulares: WCRegExp;
}

export declare type WTrmSClr = "3b4bit"|"8bit"|"24bit";
export declare type WTrmSClrF = "C"|"F";