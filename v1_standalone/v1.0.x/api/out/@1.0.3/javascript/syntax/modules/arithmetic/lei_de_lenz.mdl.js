import { cosseno } from "./cosseno.mdl";
export var leiDeLenz = (intensidadeDoCampoMagnetico, areaDaSuperficie, angulo) => {
    let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * cosseno(angulo);
    return resultado;
};
//# sourceMappingURL=lei_de_lenz.mdl.js.map