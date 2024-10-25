import { arcoCosseno } from "./arco_cosseno.mdl";
import { arcoSeno } from "./arco_seno.mdl";
export var arcoTangenteHiperbolica = (x) => {
    return 1 / (arcoSeno(x) / arcoCosseno(x));
};
//# sourceMappingURL=arco_tangente_hiperbolica.mdl.js.map