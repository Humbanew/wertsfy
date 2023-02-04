/// <reference path="../.declarations/warch.d.ts" />

import { Component_math_corebase_pi_constant } from "./math/pi.constant";
import { Component_math_corebase_euler_constant } from "./math/euler.constant";

export namespace LibraryMath {

  let lm_pi: WComponentNumber = { 
    src: Component_math_corebase_pi_constant 
  }; export const Pi = lm_pi.src;

  let lm_euler: WComponentNumber = { 
    src: Component_math_corebase_euler_constant
  }; export const Euler = lm_euler.src;

}
