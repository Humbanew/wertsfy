import { cosseno } from "./cosseno.mdl";
export var equacaoHorariaDeAceleracaoMHS = (velocidadeAngular, amplitude, tempo, faseInicial) => {
    return -1 * velocidadeAngular ** 2 * amplitude * cosseno(tempo + faseInicial);
};
//# sourceMappingURL=equacao_horaria_aceleracao_mhs.mdl.js.map