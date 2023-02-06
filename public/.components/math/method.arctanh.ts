import { Component_math_corebase_arccosh_method } from "./method.arccosh";
import { Component_math_corebase_arcsinh_method } from "./method.arcsinh";

export const Component_math_corebase_arctanh_method = (x: number): number => {
  return 1 / (Component_math_corebase_arcsinh_method(x) / Component_math_corebase_arccosh_method(x));
};
