export var fatorial = (x) => {
    let resultado = 1;
    if (x == 0) {
        return resultado = 1;
    }
    for (let i = x; i > 0; i--) {
        resultado = i * resultado;
    }
    ;
    return resultado;
};
//# sourceMappingURL=fatorial.mdl.js.map