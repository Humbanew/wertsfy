/** **Function** Round() */
export var arrendondaParaInteiro = (x) => {
    const verificador = /([0-9]+)(\.[0-9]+)/gi;
    let resultado;
    resultado = verificador.exec(x.toString());
    return parseInt(resultado[0] + 1);
};
//# sourceMappingURL=arrendonda_para_inteiro.mdl.js.map