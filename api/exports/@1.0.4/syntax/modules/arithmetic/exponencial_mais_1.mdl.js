import { logaritmoBaseQualquer } from "./logaritmo_base_qualquer.mdl";
export var exponencialMais1 = (base, x) => {
    if (base == 0) {
        return 1;
    }
    return (base ** logaritmoBaseQualquer(x, base)) + 1;
};
//# sourceMappingURL=exponencial_mais_1.mdl.js.map