import { raizQuadrada } from "./raiz_quadrada.mdl";

export var areaTrianguloQualquer = (lado: number): number => {
  return (lado ** 2) * raizQuadrada(3) / 4;
};
