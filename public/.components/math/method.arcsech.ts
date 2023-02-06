import { Component_math_corebase_arccosh_method } from "./method.arccosh";

export const Component_math_corebase_arcsech_method = (x: number): number => {
  return 1 / Component_math_corebase_arccosh_method(x);
};
