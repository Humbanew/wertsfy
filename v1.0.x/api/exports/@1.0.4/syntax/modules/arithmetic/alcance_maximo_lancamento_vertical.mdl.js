import { seno } from "./seno.mdl";
export var alcanceMaximoLancamentoVertical = (velocidade, angulo, gravidade) => {
    return (velocidade ** 2 * (seno(angulo) ** 2)) / gravidade;
};
//# sourceMappingURL=alcance_maximo_lancamento_vertical.mdl.js.map