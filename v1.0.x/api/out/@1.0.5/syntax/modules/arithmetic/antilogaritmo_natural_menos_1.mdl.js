"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.antilogaritmoNaturalMenos1 = void 0;
const arithmetic_lib_1 = require("../../arithmetic.lib");
const logaritmo_private_mdl_1 = require("./private/logaritmo.private.mdl");
var antilogaritmoNaturalMenos1 = (x) => {
    return (1 ** (0, logaritmo_private_mdl_1._logaritmoBase)(arithmetic_lib_1.Aritmeticos.Consts.c_euler, x)) - 1;
};
exports.antilogaritmoNaturalMenos1 = antilogaritmoNaturalMenos1;
//# sourceMappingURL=antilogaritmo_natural_menos_1.mdl.js.map