"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotenciaDePotenciaMais1 = void 0;
/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */
var PotenciaDePotenciaMais1 = function (x, y) {
    var rest;
    if (y != null) {
        var l = 0;
        for (var i = 0; i < y.length; i++) {
            l += y[i];
        }
        return rest = Math.pow(x, l);
    }
    return rest + 1;
};
exports.PotenciaDePotenciaMais1 = PotenciaDePotenciaMais1;
