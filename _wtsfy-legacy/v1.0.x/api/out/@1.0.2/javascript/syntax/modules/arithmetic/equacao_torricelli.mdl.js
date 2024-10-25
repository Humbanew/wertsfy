import { raizQuadrada } from "./raiz_quadrada.mdl";
export var equacaoDeTorricelli = (velocidadeInicial, aceleracao, espaco) => {
    let resultado = raizQuadrada((velocidadeInicial ** 2) + 2 * aceleracao * (espaco.final - espaco.inicial));
    return resultado;
};
//# sourceMappingURL=equacao_torricelli.mdl.js.map