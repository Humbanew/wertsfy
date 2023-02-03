/// <reference path="../.declarations/warch.d.ts" />

import { Component_math_corebase_abs_method } from "./lib/math/abs.method";
import { Component_math_corebase_arccos_method } from "./lib/math/arccos.method";
import { Component_math_corebase_arccosec_method } from "./lib/math/arccosec.method";
import { Component_math_corebase_arccosech_method } from "./lib/math/arccosech.method";
import { Component_math_corebase_arccosh_method } from "./lib/math/arccosh.method";
import { Component_math_corebase_arccotan_method } from "./lib/math/arccotan.method";
import { Component_math_corebase_arcsin_method } from "./lib/math/arcsin.method";
import { Component_math_corebase_arcsinh_method } from "./lib/math/arcsinh.method";
import { Component_math_corebase_arctan_method } from "./lib/math/arctan.method";

import { Component_math_corebase_pi_constant } from "./lib/math/pi.constant";

let lm_abs: WComponentFunction = { src: Component_math_corebase_abs_method };
let lm_arccos: WComponentFunction = { src: Component_math_corebase_arccos_method };
let lm_arccosh: WComponentFunction = { src: Component_math_corebase_arccosh_method };
let lm_arccossec: WComponentFunction = { src: Component_math_corebase_arccosec_method };
let lm_arccossech: WComponentFunction = { src: Component_math_corebase_arccosech_method };
let lm_arccotan: WComponentFunction = { src: Component_math_corebase_arccotan_method };
let lm_arcsin: WComponentFunction = { src: Component_math_corebase_arcsin_method };
let lm_arcsinh: WComponentFunction = { src: Component_math_corebase_arcsinh_method };
let lm_arctan: WComponentFunction = { src: Component_math_corebase_arctan_method };

let lm_pi: WComponentNumber = { src: Component_math_corebase_pi_constant };

export namespace LibraryMath { 

  // Constantes
  export const Pi = lm_pi.src;
  
  // Métodos

    // Outros
  export const abs = lm_abs.src;

    // Arco Seno
  export const arcsin = lm_arcsin.src;
  export const arcsinh = lm_arcsinh.src;

    // Arco Cosseno
  export const arccos = lm_arccos.src;
  export const arccosh = lm_arccosh.src;

    // Arco Tangente
  export const arctan = lm_arctan.src;

    // Arco Cossecante
  export const arccossec = lm_arccossec.src;
  export const arccossech = lm_arccossech.src;

    // Arco Cotangente
  export const arccotan = lm_arccotan.src;

}

export namespace LibraryCalculator { }

export namespace LibraryLydroc { }

export namespace LibraryKarzok { }
