"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrendondaParaCima = void 0;
/** **Function** Ceil() */
/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */
var ArrendondaParaCima = function (x) {
    return x > parseInt(x.toString()) + 0.5 ? parseInt(x.toString()) + 1 : parseInt(x.toString());
};
exports.ArrendondaParaCima = ArrendondaParaCima;
