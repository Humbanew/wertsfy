import { Aritmeticos } from "../../arithmetic.lib";
import { _logaritmoBase } from "./private/logaritmo.private.mdl";
export var logaritmoNatural = (x) => {
    return _logaritmoBase(Aritmeticos.Consts.c_euler, x);
};
//# sourceMappingURL=logaritmo_natural.mdl.js.map