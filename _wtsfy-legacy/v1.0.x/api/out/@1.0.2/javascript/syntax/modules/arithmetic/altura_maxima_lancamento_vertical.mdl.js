import { seno } from "./seno.mdl";
export var alturaMaximaLancamentoVertical = (velocidadeInicial, gravidade, angulo) => {
    return (velocidadeInicial ** 2) * ((seno(angulo) ** 2) / 2) * gravidade;
};
//# sourceMappingURL=altura_maxima_lancamento_vertical.mdl.js.map