export declare type WConstSqrtCbrtCollectionObject = { 
  Of01_02: number, Of01_04: number, Of01_06: number, Of01_08: number, Of01: number, Of02: number, Of03: number, Of04: number, Of05: number, Of06: number, Of07: number, Of09: number, Of10: number  
}

export declare type WConstShortcutsCollectionObject = {
  Pi: number, Euler: number, Log2: number, Log2e: number, Log10: number, Log10e: number
}

// possivel recurso de melhoria da arquitetura.
import { Component_math_corebase_abs_method } from "./.components/math/method.abs";
declare type AbsFunction = typeof Component_math_corebase_abs_method;

import { Component_math_corebase_arccos_method } from "./.components/math/method.arccos";
declare type ArccosFunction = typeof Component_math_corebase_arccos_method;

import { Component_math_corebase_exp_method } from "./.components/math/method.exp";
declare type ExpFunction = typeof Component_math_corebase_exp_method;

  /** @experimental Interface de Testes */
export declare interface WComponentExperimental { src: { function?: undefined } }
