"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrendondaParaCima = void 0;
/** **Function** Ceil() */
var arrendondaParaCima = (x) => {
    let v;
    if (x < x + 0.5) {
        v = parseInt(x.toString());
    }
    return v;
};
exports.arrendondaParaCima = arrendondaParaCima;
