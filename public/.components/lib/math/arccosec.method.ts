import { Component_math_corebase_arcsin_method } from "./arcsin.method";

export const Component_math_corebase_arccosec_method = (x: number): number => {
  return 1 / Component_math_corebase_arcsin_method(x);
};
