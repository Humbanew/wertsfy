import { mathematic_corebase } from "../../wertsfy";

export const Macro_math_corebase_arctanh_method = (x: number): number => {
  return 1 / (mathematic_corebase.arcsinh(x) / mathematic_corebase.arccosh(x));
};
