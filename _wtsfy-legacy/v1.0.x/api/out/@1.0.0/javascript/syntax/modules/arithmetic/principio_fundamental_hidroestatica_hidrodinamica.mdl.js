"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.principioFundamentalDaHidroestaticaHidrodinamica = void 0;
var principioFundamentalDaHidroestaticaHidrodinamica = (densidade, gravidade, altura) => {
    return densidade * gravidade * (altura.final - altura.inicial);
};
exports.principioFundamentalDaHidroestaticaHidrodinamica = principioFundamentalDaHidroestaticaHidrodinamica;
