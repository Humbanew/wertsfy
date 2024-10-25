export var arranjo = (total, divisor) => {
    let resultado = 0, totalConvertido = 1, divisorConvertido = 1;
    for (let i = total; i > 0; i--) {
        totalConvertido = totalConvertido * i;
    }
    for (let j = divisor; j > 0; j--) {
        divisorConvertido = divisorConvertido * j;
    }
    resultado = totalConvertido / (totalConvertido - divisorConvertido);
    return resultado;
};
//# sourceMappingURL=arranjo.mdl.js.map