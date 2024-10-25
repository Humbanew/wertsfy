"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrendondaParaInteiro = void 0;
/** **Function** Round() */
var arrendondaParaInteiro = (x) => {
    const verificador = /([0-9]+)(\.[0-9]+)/gi;
    let resultado;
    resultado = verificador.exec(x.toString());
    return parseInt(resultado[0] + 1);
};
exports.arrendondaParaInteiro = arrendondaParaInteiro;
