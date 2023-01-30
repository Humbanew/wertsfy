import { mathematic_corebase } from "../../wertsfy";

export const Component_math_corebase_cotanh_method = (x: number): number => {
  return 1 / (mathematic_corebase.cosh(x) / mathematic_corebase.sinh(x));
};
