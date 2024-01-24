export var diagramaVenn2Grupos = (ng1, ng2) => {
    let resultado = { intersection: 0, group1: 0, group2: 0 };
    return resultado = { intersection: ng1 - ng2, group1: ng1 - resultado.intersection, group2: ng2 - resultado.intersection };
};
//# sourceMappingURL=diagrama_venn_2_grupos.mdl.js.map