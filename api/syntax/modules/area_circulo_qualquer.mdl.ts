import { Aritmeticos } from "../arithmetic.lib";

export var areaCirculoQualquer = (raio: number): number => { 
  return Aritmeticos.Consts.c_pi * (raio ** 2);
};
