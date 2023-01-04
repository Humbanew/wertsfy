import { mathematic_corebase } from "../../wertsfy";

export const Macro_math_corebase_cotan_method = (x: number): number => {
  return 1 / (mathematic_corebase.cos(x) / mathematic_corebase.sin(x));
};
