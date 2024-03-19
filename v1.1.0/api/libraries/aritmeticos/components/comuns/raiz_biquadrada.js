"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaizBiquadrada = void 0;
var raiz_quadrada_1 = require("./raiz_quadrada");
/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */
var RaizBiquadrada = function (x) {
    return (0, raiz_quadrada_1.RaizQuadrada)((0, raiz_quadrada_1.RaizQuadrada)(x));
};
exports.RaizBiquadrada = RaizBiquadrada;
