import { mathematic_corebase } from "../../wertsfy";

export const Macro_math_corebase_tanh_method = (x: number): number => {
  return 1 / (mathematic_corebase.sin(x) / mathematic_corebase.cos(x));
};
