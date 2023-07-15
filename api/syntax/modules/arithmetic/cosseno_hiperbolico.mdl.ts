import { Aritmeticos } from "../arithmetic.lib";

export var cossenoHiperbolico = (x: number): number => {
  return 1 / (-1 * ((2 * Aritmeticos.Consts.c_pi * 1) / 4) / 90) * x;  
};
