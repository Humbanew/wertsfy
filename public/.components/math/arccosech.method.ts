import { Component_math_corebase_arcsinh_method } from "./arcsinh.method";

export const Component_math_corebase_arccosech_method = (x: number): number => {
  return 1 / Component_math_corebase_arcsinh_method(x);
};
