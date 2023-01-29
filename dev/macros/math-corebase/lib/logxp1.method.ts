import { Macro_math_corebase_logarithm_protected_method } from "./logarithm.protected.method";

export const Macro_math_corebase_logxp1_method = (x: number, base: number): number => {
  return Macro_math_corebase_logarithm_protected_method(base+1, x);
};
