import { forcaEletromotriz } from "./forca_eletromotriz.mdl";
export var contraForcaEletromotriz = (potenciaTotalGerador, intensidadeDaCorrente) => {
    return -1 * forcaEletromotriz(potenciaTotalGerador, intensidadeDaCorrente);
};
//# sourceMappingURL=contra_forca_eletromotriz.mdl.js.map