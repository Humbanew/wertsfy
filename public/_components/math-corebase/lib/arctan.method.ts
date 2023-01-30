import { mathematic_corebase } from "../../wertsfy";

export const Component_math_corebase_arctan_method = (x: number): number => {
  return (mathematic_corebase.arcsin(x) / mathematic_corebase.arccos(x));
};
