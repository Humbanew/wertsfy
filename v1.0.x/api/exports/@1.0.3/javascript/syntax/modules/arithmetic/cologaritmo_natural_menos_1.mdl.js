import { Aritmeticos } from "../../arithmetic.lib";
import { _logaritmoBase } from "./private/logaritmo.private.mdl";
export var cologaritmoNaturalMenos1 = (x) => {
    return (-1 * _logaritmoBase(Aritmeticos.Consts.c_euler, x)) - 1;
};
//# sourceMappingURL=cologaritmo_natural_menos_1.mdl.js.map