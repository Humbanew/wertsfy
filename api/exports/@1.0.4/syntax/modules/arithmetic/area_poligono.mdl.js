import { raizQuadrada } from "./raiz_quadrada.mdl";
export var areaPoligono = (lados, comprimento, largura) => {
    return comprimento == largura ? lados * ((comprimento * comprimento * raizQuadrada(3)) / 4) : lados * (comprimento * largura / 2);
};
//# sourceMappingURL=area_poligono.mdl.js.map