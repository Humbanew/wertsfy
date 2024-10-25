import { raizQuadrada } from "./raiz_quadrada.mdl";
export var torricelliMCUV = (velocidadeAngularInicial, aceleracaoAngular, deslocamentoAngular) => {
    let resultado = raizQuadrada(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngular.final - deslocamentoAngular.inicial));
    return resultado;
};
//# sourceMappingURL=torricelli_mcuv.mdl.js.map