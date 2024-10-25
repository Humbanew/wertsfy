"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.antilogaritmoBaseQualquerMais1 = void 0;
const logaritmo_private_mdl_1 = require("./private/logaritmo.private.mdl");
var antilogaritmoBaseQualquerMais1 = (base, x) => {
    return (1 ** (0, logaritmo_private_mdl_1._logaritmoBase)(base, x)) - 1;
};
exports.antilogaritmoBaseQualquerMais1 = antilogaritmoBaseQualquerMais1;
