import { WMathOperation } from "../../.declarations/warch.type";
import { Component_math_calculator_exp_calc_cossenos_diretores_vetor_r2_method } from "./expression.calc-cossenos-diretores-vetor-r2";
import { Component_math_calculator_exp_calc_cossenos_diretores_vetor_r3_method } from "./expression.calc-cossenos-diretores-vetor-r3";
import { Component_math_calculator_exp_calc_divisao_vetores_r2_method } from "./expression.calc-divisao-vetores-r2";
import { Component_math_calculator_exp_calc_divisao_vetores_r3_method } from "./expression.calc-divisao-vetores-r3";
import { Component_math_calculator_exp_calc_modulo_vetor_r2_method } from "./expression.calc-modulo-vetor-r2";
import { Component_math_calculator_exp_calc_modulo_vetor_r3_method } from "./expression.calc-modulo-vetor-r3";
import { Component_math_calculator_exp_calc_ponto_medio_vetor_r2_method } from "./expression.calc-ponto-medio-vetor-r2";
import { Component_math_calculator_exp_calc_ponto_medio_vetor_r3_method } from "./expression.calc-ponto-medio-vetor-r3";
import { Component_math_calculator_exp_calc_produto_escalar_vetores_r2_method } from "./expression.calc-produto-escalar-vetores-r2";
import { Component_math_calculator_exp_calc_produto_escalar_vetores_r3_method } from "./expression.calc-produto-escalar-vetores-r3";
import { Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r2_method } from "./expression.calc-projecao-vetor-sobre-outro-vetor-r2";
import { Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r3_method } from "./expression.calc-projecao-vetor-sobre-outro-vetor-r3";
import { Component_math_calculator_exp_calc_soma_vetores_r2_method } from "./expression.calc-soma-vetores-r2";
import { Component_math_calculator_exp_calc_soma_vetores_r3_method } from "./expression.calc-soma-vetores-r3";
import { Component_math_calculator_exp_calc_subtracao_vetores_r2_method } from "./expression.calc-subtracao-vetores-r2";
import { Component_math_calculator_exp_calc_subtracao_vetores_r3_method } from "./expression.calc-subtracao-vetores-r3";
import { Component_math_calculator_exp_calc_versor_vetor_r2_method } from "./expression.calc-versor-vetor-r2";
import { Component_math_calculator_exp_calc_versor_vetor_r3_method } from "./expression.calc-versor-vetor-r3";
import { Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r2_method } from "./expression.calc-vetor-distancia-entre-dois-pontos-r2";
import { Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r3_method } from "./expression.calc-vetor-distancia-entre-dois-pontos-r3";

const calculoDosVetoresGA = (tipo: WMathOperation.expressions.OperacoesVetores): number|number[] => {

  let resultado: number|number[] = 0, attrs = undefined;

  switch(tipo.formats[0]) {
    case "distanciaVetorEntreDoisPontosR2":
      attrs = tipo.formats[1];
      resultado = Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
    case "distanciaVetorEntreDoisPontosR3":
      resultado = Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break;
    case "moduloR2":
      resultado = Component_math_calculator_exp_calc_modulo_vetor_r2_method(attrs.x, attrs.y); break;
    case "moduloR3":
      resultado = Component_math_calculator_exp_calc_modulo_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
    case "versorR2":
      resultado = Component_math_calculator_exp_calc_versor_vetor_r2_method(attrs.x, attrs.y); break;
    case "versorR3":
      resultado = Component_math_calculator_exp_calc_versor_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
    case "projecaoVetorSobreOutroVetorR2":
      resultado = Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
    case "projecaoVetorSobreOutroVetorR3":
      resultado = Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break;
    case "somaR2":
      resultado = Component_math_calculator_exp_calc_soma_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
    case "somaR3":
      resultado = Component_math_calculator_exp_calc_soma_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break;
    case "subtracaoR2":
      resultado = Component_math_calculator_exp_calc_subtracao_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
    case "subtracaoR3":
      resultado = Component_math_calculator_exp_calc_subtracao_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break;
    case "produtoEscalarR2":
      resultado = Component_math_calculator_exp_calc_produto_escalar_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
    case "produtoEscalarR3":
      resultado = Component_math_calculator_exp_calc_produto_escalar_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break;
    case "divisaoR2":
      resultado = Component_math_calculator_exp_calc_divisao_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
    case "divisaoR3":
      resultado = Component_math_calculator_exp_calc_divisao_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break;
    case "pontoMedioR2":
      resultado = Component_math_calculator_exp_calc_ponto_medio_vetor_r2_method(attrs.x, attrs.y); break;
    case "pontoMedioR3":
      resultado = Component_math_calculator_exp_calc_ponto_medio_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
    case "cossenosDiretoresR2":
      resultado = Component_math_calculator_exp_calc_cossenos_diretores_vetor_r2_method(attrs.x, attrs.y); break;
    case "cossenosDiretoresR3":
      resultado = Component_math_calculator_exp_calc_cossenos_diretores_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
  }

  return resultado;

}; export { calculoDosVetoresGA as Component_math_calculator_exp_calc_vetores_ga_method }

