import { empuxoHidroestaticaHidrodinamica } from "./empuxo_hidroestatica_hidrodinamica.mdl";
export var pesoAparenteDaHidroestaticaHidrodinamica = (peso, densidade, gravidade, volume) => {
    let resultado = peso - empuxoHidroestaticaHidrodinamica(densidade, gravidade, volume);
    return resultado;
};
//# sourceMappingURL=peso_aparente_hidroestatica_hidrodinamica.mdl.js.map