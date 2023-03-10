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

// possivel recurso de melhoria da arquitetura.
import { WComponents } from "./.components/wcimport";
declare type FuncsM = typeof WComponents.Mathematic;
declare type FuncsC = typeof WComponents.Calculator;


  /** @experimental Interface de Testes */
export declare interface WComponentExperimental { 
  
  src: { 
    
    function?: { 
      default: Function 
    } 
  
  } 

}
