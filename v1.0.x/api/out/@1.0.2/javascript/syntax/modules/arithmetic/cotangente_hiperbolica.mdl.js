import { cosseno } from "./cosseno.mdl";
import { seno } from "./seno.mdl";
export var cotangenteHiperbolica = (x) => {
    return 1 / (1 / (cosseno(x) / seno(x)));
};
//# sourceMappingURL=cotangente_hiperbolica.mdl.js.map