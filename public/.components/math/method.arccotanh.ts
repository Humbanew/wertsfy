import { Component_math_corebase_arctanh_method } from "./method.arctanh";

export const Component_math_corebase_arccotanh_method = (x: number): number => {
  return 1 / Component_math_corebase_arctanh_method(x);
};
