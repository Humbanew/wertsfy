"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logaritmoBase10Mais1 = void 0;
const logaritmo_private_mdl_1 = require("./private/logaritmo.private.mdl");
var logaritmoBase10Mais1 = (x) => {
    return (0, logaritmo_private_mdl_1._logaritmoBase)(10, x + 1);
};
exports.logaritmoBase10Mais1 = logaritmoBase10Mais1;
