// possivel recurso de melhoria da arquitetura.
import { WComponents } from "./.components/wcimport";
declare type FunctionsMathematic = typeof WComponents.Mathematic;
declare type FunctionsCalculator = typeof WComponents.Calculator;


  /** @experimental Interface de Testes */
export declare interface WComponentExperimental { 
  
  src: { 
    
    function?: { 
      
      default: Function
      mathematic: { abs: FunctionsMathematic["abs_method"] }
      calculator: { }

    } 
  
  } 

}
