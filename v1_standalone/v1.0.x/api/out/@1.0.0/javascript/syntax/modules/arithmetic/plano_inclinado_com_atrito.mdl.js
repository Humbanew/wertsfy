"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planoInclinadoComAtrito = void 0;
var planoInclinadoComAtrito = (forcaDeAtrito, massa, gravidade, angulo) => {
    return forcaDeAtrito * massa * gravidade * angulo;
};
exports.planoInclinadoComAtrito = planoInclinadoComAtrito;
