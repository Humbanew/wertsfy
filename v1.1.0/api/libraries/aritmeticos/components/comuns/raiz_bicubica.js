"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaizBicubica = void 0;
var raiz_cubica_1 = require("./raiz_cubica");
/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */
var RaizBicubica = function (x) {
    return (0, raiz_cubica_1.RaizCubica)((0, raiz_cubica_1.RaizCubica)(x));
};
exports.RaizBicubica = RaizBicubica;
