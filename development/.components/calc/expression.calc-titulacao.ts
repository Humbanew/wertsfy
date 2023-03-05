import { WertsfyPrototipos } from "../../.declarations/warch.type.nxt";

const formulaCalculoDaTitulacao = (tipo: WertsfyPrototipos.Logicos.TExpressoes, massaBase: number, massaAcido: number, volumeBase: number, volumeAcido: number): number => {
  let resultado = 0;

  switch(tipo.variaveisDeTitulacao) {
    case "#massaAcidoNull":
      resultado = massaBase * volumeBase / volumeAcido; break;
    case "#massaBaseNull":
      resultado = massaAcido * volumeAcido / volumeBase; break;
    case "#volumeAcidoNull":
      resultado = massaBase * volumeBase / massaAcido; break;
    case "#volumeBaseNull":
      resultado = massaAcido * volumeAcido / massaBase; break;
  }
  
  return resultado;
}
export { formulaCalculoDaTitulacao as Component_math_calculator_exp_calc_titulacao_method }
