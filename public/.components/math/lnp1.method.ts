import { mathematic_corebase } from "../../wertsfy";
import { Component_math_corebase_logarithm_protected_method } from "./logarithm.protected.method";

export const Component_math_corebase_lnp1_method = (x: number): number => {
  return Component_math_corebase_logarithm_protected_method(mathematic_corebase.Euler + 1, x);
};
