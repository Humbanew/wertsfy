/// <reference path="../.declarations/warch.d.ts" />

import { Component_math_corebase_abs_method } from "./lib/math/abs.method";
import { Component_math_corebase_arccos_method } from "./lib/math/arccos.method";
import { Component_math_corebase_arccosec_method } from "./lib/math/arccosec.method";
import { Component_math_corebase_arccosech_method } from "./lib/math/arccosech.method";
import { Component_math_corebase_arccosh_method } from "./lib/math/arccosh.method";

import { Component_math_corebase_pi_constant } from "./lib/math/pi.constant";

let LMAbs: WComponentFunction = { src: Component_math_corebase_abs_method };
let LMArcCos: WComponentFunction = { src: Component_math_corebase_arccos_method };
let LMArcCosSec: WComponentFunction = { src: Component_math_corebase_arccosec_method };
let LMArcCosSecHip: WComponentFunction = { src: Component_math_corebase_arccosech_method };
let LMArcCosHip: WComponentFunction = { src: Component_math_corebase_arccosh_method };

let LMPi: WComponentNumber = { src: Component_math_corebase_pi_constant };

export namespace LibraryMath { 

  // Constants
  export const Pi = LMPi.src;
  
  // Methods
  export const abs = LMAbs.src;
  export const arccos = LMArcCos.src;
  export const arccossec = LMArcCosSec.src;
  export const arccossech = LMArcCosSecHip.src;
  export const arccosh = LMArcCosHip.src;

}

LibraryMath.abs(5);

export namespace LibraryCalculator { }
