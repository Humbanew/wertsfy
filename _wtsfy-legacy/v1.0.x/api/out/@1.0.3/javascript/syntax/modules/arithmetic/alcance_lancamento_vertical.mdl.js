import { cosseno } from "./cosseno.mdl";
export var alcanceLancamentoVertical = (velocidade, tempo, angulo) => {
    return velocidade * cosseno(angulo) * (tempo.final - tempo.inicial);
};
//# sourceMappingURL=alcance_lancamento_vertical.mdl.js.map