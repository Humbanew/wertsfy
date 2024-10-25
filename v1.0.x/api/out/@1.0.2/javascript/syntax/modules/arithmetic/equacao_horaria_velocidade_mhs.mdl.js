import { seno } from "./seno.mdl";
export var equacaoHorariaDeVelocidadeMHS = (velocidadeAngular, amplitude, tempo, faseInicial) => {
    let resultado = -1 * velocidadeAngular * amplitude * seno(tempo + faseInicial);
    return resultado;
};
//# sourceMappingURL=equacao_horaria_velocidade_mhs.mdl.js.map