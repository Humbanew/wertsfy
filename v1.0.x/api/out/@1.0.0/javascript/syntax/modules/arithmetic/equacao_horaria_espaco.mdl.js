"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equacaoHorariaDoEspaco = void 0;
var equacaoHorariaDoEspaco = (espaco, aceleracao) => {
    return espaco.inicial + aceleracao * espaco.final;
};
exports.equacaoHorariaDoEspaco = equacaoHorariaDoEspaco;
