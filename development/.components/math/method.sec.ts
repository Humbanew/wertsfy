import { Component_math_corebase_cos_method } from "./method.cos";

export const Component_math_corebase_sec_method = (x: number): number => {
  return 1 / Component_math_corebase_cos_method(x);
};