import { Aritmeticos } from "../../arithmetic.lib";
import { _logaritmoBase } from "./private/logaritmo.private.mdl";
export var antilogaritmoNatural = (x) => {
    return 1 ** _logaritmoBase(Aritmeticos.Consts.c_euler, x);
};
//# sourceMappingURL=antilogaritmo_natural.mdl.js.map