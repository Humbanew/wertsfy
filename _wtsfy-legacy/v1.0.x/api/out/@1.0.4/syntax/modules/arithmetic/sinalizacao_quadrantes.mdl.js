export var sinalizacaoQuadrantes = (x, y) => {
    let resultado;
    if (x > 0 && y > 0) {
        resultado = "1º.";
    }
    if (x < 0 && y > 0) {
        resultado = "2º.";
    }
    if (x < 0 && y < 0) {
        resultado = "3º.";
    }
    if (x > 0 && y < 0) {
        resultado = "4º.";
    }
    return resultado;
};
//# sourceMappingURL=sinalizacao_quadrantes.mdl.js.map