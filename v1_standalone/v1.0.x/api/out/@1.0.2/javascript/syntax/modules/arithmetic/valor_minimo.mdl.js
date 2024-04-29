export var valorMinimo = (x) => {
    let min = x[0];
    for (let i = 1; i < x.length; i++) {
        if (x[i] < min) {
            min = x[i];
        }
    }
    return min;
};
//# sourceMappingURL=valor_minimo.mdl.js.map