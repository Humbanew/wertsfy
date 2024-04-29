"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.antilogaritmoBase2Mais1 = void 0;
const logaritmo_private_mdl_1 = require("./private/logaritmo.private.mdl");
var antilogaritmoBase2Mais1 = (x) => {
    return (1 ** (0, logaritmo_private_mdl_1._logaritmoBase)(2, x)) + 1;
};
exports.antilogaritmoBase2Mais1 = antilogaritmoBase2Mais1;
