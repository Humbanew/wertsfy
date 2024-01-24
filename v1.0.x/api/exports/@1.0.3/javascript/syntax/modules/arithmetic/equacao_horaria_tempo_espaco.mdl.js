export var equacaoHorariaDoTempoEspaco = (tempo, espaco, velocidade, aceleracao) => {
    return tempo.inicial + (velocidade * tempo.final) + (aceleracao * (tempo.final ** 2)) + espaco.inicial + aceleracao * espaco.final;
};
//# sourceMappingURL=equacao_horaria_tempo_espaco.mdl.js.map