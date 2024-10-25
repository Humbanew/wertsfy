import { cosseno } from "./cosseno.mdl";
export var equacaoHorariaDePosicaoMHS = (velocidadeAngular, amplitude, tempo, faseInicial) => {
    return velocidadeAngular * amplitude * cosseno(tempo + faseInicial);
};
//# sourceMappingURL=equacao_horaria_posicao_mhs.mdl.js.map