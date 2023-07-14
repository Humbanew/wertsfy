import { raizQuadrada } from "./raiz_quadrada.mdl";

export var areaPoligono = (largura: number, comprimento: number, lados: number): number => {
  return comprimento == largura ? lados * ((comprimento * comprimento * raizQuadrada(3)) / 4) : lados * (comprimento * largura / 2);
};
