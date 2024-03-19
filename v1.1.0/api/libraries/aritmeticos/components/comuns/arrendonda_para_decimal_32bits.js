"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrendondaParaDecimal32Bits = void 0;
/** **Function** Fround() */
/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */
var ArrendondaParaDecimal32Bits = function (x) {
    var tam = 24;
    var regexp = /([0-9]+)\.([0-9]+)/g;
    var redux = regexp.exec(x.toString())[1].length;
    var k = new Float32Array(tam).toString();
    for (var i = 0; i < tam - 1; i++) {
        k = k.replace(",", "");
    }
    ;
    k = k.slice(0, k.length - redux);
    return x + k;
};
exports.ArrendondaParaDecimal32Bits = ArrendondaParaDecimal32Bits;
