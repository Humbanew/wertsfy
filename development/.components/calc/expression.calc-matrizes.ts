import { WMathOperation } from "../../../.legacydata/warch.type";

const formulasDeCalculoDeMatrizes = (tipo: WMathOperation.expressions.OperacoesClassicas, matriz: { m1: number[][], m2: number[][] }): number[][] => {
  let resultado: number[][];
  for (let i = 0; i < matriz.m1.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz.m1[i].length; j++) {
      switch(tipo.formats) {
        case "plus":
          resultado[i][j] = matriz.m1[i][j] + matriz.m2[i][j]; break;
        case "minus":
          resultado[i][j] = matriz.m1[i][j] - matriz.m2[i][j]; break;
        case "multip":
          if(matriz.m1[0][j] != matriz.m2[i][j]){ new Error("Calc Error"); }
          resultado[i][j] = matriz.m1[i][j] * matriz.m2[i][j]; break;
        case "divisor":
          resultado[i][j] = matriz.m1[i][j] / matriz.m2[i][j]; break;
      }
    }
  }
  return resultado;
}
export { formulasDeCalculoDeMatrizes as Component_math_calculator_exp_calc_matrizes_method }
