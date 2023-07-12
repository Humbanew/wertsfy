import { raizQuadrada } from "./raiz_quadrada.mdl";

export var apotemaTrianguloQualquer = (lado: number): number => { 
  return (lado ** 2) * raizQuadrada(3) / 2;
};
