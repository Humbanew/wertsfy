"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equacaoHorariaDoTempoMCUV = void 0;
var equacaoHorariaDoTempoMCUV = (velocidadeAngularInicial, aceleracaoAngular, tempo) => {
    return velocidadeAngularInicial + aceleracaoAngular * tempo;
};
exports.equacaoHorariaDoTempoMCUV = equacaoHorariaDoTempoMCUV;
