import { mathematic_corebase } from "../../wertsfy";

export const Component_math_corebase_exp_method = (base: number, valorLg: number): number => {
  if(base == 0) { return 0; }
  return base ** mathematic_corebase.logx(valorLg, base);
};
