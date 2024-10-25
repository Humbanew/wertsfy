import { arcoCosseno } from "./arco_cosseno.mdl";
import { arcoSeno } from "./arco_seno.mdl";
export var arcoTangente = (x) => {
    return arcoSeno(x) / arcoCosseno(x);
};
//# sourceMappingURL=arco_tangente.mdl.js.map