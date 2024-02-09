import { Aritmeticos } from "../../arithmetic.lib";
import { _logaritmoBase } from "./private/logaritmo.private.mdl";
export var logaritmoNaturalMais1 = (x) => {
    return _logaritmoBase(Aritmeticos.Consts.c_euler, x + 1);
};
//# sourceMappingURL=logaritmo_natural_mais_1.mdl.js.map