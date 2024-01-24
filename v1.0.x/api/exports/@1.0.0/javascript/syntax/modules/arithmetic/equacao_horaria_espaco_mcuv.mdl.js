"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equacaoHorariaDoEspacoMCUV = void 0;
var equacaoHorariaDoEspacoMCUV = (posicaoAngularInicial, velocidadeAngularInicial, aceleracaoAngular, tempo) => {
    return posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;
};
exports.equacaoHorariaDoEspacoMCUV = equacaoHorariaDoEspacoMCUV;
