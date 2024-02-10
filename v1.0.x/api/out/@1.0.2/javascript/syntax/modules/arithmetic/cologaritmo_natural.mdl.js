import { Aritmeticos } from "../../arithmetic.lib";
import { _logaritmoBase } from "./private/logaritmo.private.mdl";
export var cologaritmoNatural = (x) => {
    return -1 * _logaritmoBase(Aritmeticos.Consts.c_euler, x);
};
//# sourceMappingURL=cologaritmo_natural.mdl.js.map