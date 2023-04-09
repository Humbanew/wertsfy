import { WertsfyPrototipos } from "../../.declarations/warch.prototype";
import { Component_math_calculator_exp_calc_cossenos_diretores_vetor_r2_method } from "./method.expression.calc-cossenos-diretores-vetor-r2";
import { Component_math_calculator_exp_calc_cossenos_diretores_vetor_r3_method } from "./method.expression.calc-cossenos-diretores-vetor-r3";
import { Component_math_calculator_exp_calc_divisao_vetores_r2_method } from "./method.expression.calc-divisao-vetores-r2";
import { Component_math_calculator_exp_calc_divisao_vetores_r3_method } from "./method.expression.calc-divisao-vetores-r3";
import { Component_math_calculator_exp_calc_modulo_vetor_r2_method } from "./method.expression.calc-modulo-vetor-r2";
import { Component_math_calculator_exp_calc_modulo_vetor_r3_method } from "./method.expression.calc-modulo-vetor-r3";
import { Component_math_calculator_exp_calc_ponto_medio_vetor_r2_method } from "./method.expression.calc-ponto-medio-vetor-r2";
import { Component_math_calculator_exp_calc_ponto_medio_vetor_r3_method } from "./method.expression.calc-ponto-medio-vetor-r3";
import { Component_math_calculator_exp_calc_produto_escalar_vetores_r2_method } from "./method.expression.calc-produto-escalar-vetores-r2";
import { Component_math_calculator_exp_calc_produto_escalar_vetores_r3_method } from "./method.expression.calc-produto-escalar-vetores-r3";
import { Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r2_method } from "./method.expression.calc-projecao-vetor-sobre-outro-vetor-r2";
import { Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r3_method } from "./method.expression.calc-projecao-vetor-sobre-outro-vetor-r3";
import { Component_math_calculator_exp_calc_soma_vetores_r2_method } from "./method.expression.calc-soma-vetores-r2";
import { Component_math_calculator_exp_calc_soma_vetores_r3_method } from "./method.expression.calc-soma-vetores-r3";
import { Component_math_calculator_exp_calc_subtracao_vetores_r2_method } from "./method.expression.calc-subtracao-vetores-r2";
import { Component_math_calculator_exp_calc_subtracao_vetores_r3_method } from "./method.expression.calc-subtracao-vetores-r3";
import { Component_math_calculator_exp_calc_versor_vetor_r2_method } from "./method.expression.calc-versor-vetor-r2";
import { Component_math_calculator_exp_calc_versor_vetor_r3_method } from "./method.expression.calc-versor-vetor-r3";
import { Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r2_method } from "./method.expression.calc-vetor-distancia-entre-dois-pontos-r2";
import { Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r3_method } from "./method.expression.calc-vetor-distancia-entre-dois-pontos-r3";

const calculoDosVetoresGA = (tipo: WertsfyPrototipos.Logicos["Core"]["TExpressoes"]["operacoesVetores"]): number|number[] => {

  let resultado: number|number[] = 0, attrs = undefined;

  switch(tipo[0]) {
    case "#distanciaVetorEntreDoisPontos":
      switch(tipo[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;   
        case "#r3":
          resultado = Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break; 
      }
    case "#modulo":
      switch(tipo[1][0]) { 
        case "#r2":                
          resultado = Component_math_calculator_exp_calc_modulo_vetor_r2_method(attrs.x, attrs.y); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_modulo_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
      }
    case "#versor":
      switch(tipo[1][0]) { 
        case "#r2":                 
          resultado = Component_math_calculator_exp_calc_versor_vetor_r2_method(attrs.x, attrs.y); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_versor_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
      }
    case "#projecaoVetorSobreOutroVetor":
      switch(tipo[1][0]) { 
        case "#r2":       
          resultado = Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break;
      }
    case "#soma":
      switch(tipo[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_soma_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_soma_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break; 
      }
    case "#subtracao":
      switch(tipo[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_subtracao_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_subtracao_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break; 
      }
    case "#produtoEscalar":
      switch(tipo[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_produto_escalar_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_produto_escalar_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break; 
      }
    case "#divisao":
      switch(tipo[1][0]) { 
        case "#r2":          
          resultado = Component_math_calculator_exp_calc_divisao_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_divisao_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break;
      }
    case "#pontoMedio":
      switch(tipo[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_ponto_medio_vetor_r2_method(attrs.x, attrs.y); break;          
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_ponto_medio_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
      }
    case "#cossenosDiretores":
      switch(tipo[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_cossenos_diretores_vetor_r2_method(attrs.x, attrs.y); break;          
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_cossenos_diretores_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
      }
  }

  return resultado;

}; export { calculoDosVetoresGA as Component_math_calculator_exp_calc_vetores_ga_method }

// Imports
import { Component_math_corebase_cos_method } from "./math/method.cos";

// Method.expression.calc-cossenos-diretores-vetor-r2.ts
const formulaCalcCossenosDiretoresDeUmVetorR2 = (x: number, y: number): Array<number> => {
  let resultado: number[];
  let contExpressaoP1 = [Component_math_corebase_cos_method(x), Component_math_corebase_cos_method(y)];
  resultado = contExpressaoP1;
  return resultado;
}
export { formulaCalcCossenosDiretoresDeUmVetorR2 as Component_math_calculator_exp_calc_cossenos_diretores_vetor_r2_method }

// Method.expression.calc-cossenos-diretores-vetor-r3.ts
const formulaCalcCossenosDiretoresDeUmVetorR3 = (x: number, y: number, z: number): Array<number> => {
  let resultado: number[];
  let contExpressaoP1 = [Component_math_corebase_cos_method(x), Component_math_corebase_cos_method(y), Component_math_corebase_cos_method(z)];
  resultado = contExpressaoP1;
  return resultado;
}
export { formulaCalcCossenosDiretoresDeUmVetorR3 as Component_math_calculator_exp_calc_cossenos_diretores_vetor_r3_method }

// Method.expression.calc-divisao-vetores-r2.ts
const formulaCalcDivisaoDeVetoresR2 = (x1: number, x2: number, y1: number, y2: number): Array<number> => {
  let resultado: number[];
  let contExpressaoP1 = [x1 / x2, y1 / y2];
  resultado = contExpressaoP1;
  return resultado;
}
export { formulaCalcDivisaoDeVetoresR2 as Component_math_calculator_exp_calc_divisao_vetores_r2_method }

// Method.expression.calc-divisao-vetores-r3.ts
const formulaCalcDivisaoDeVetoresR3 = (x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): Array<number> => {
  let resultado: number[];
  let contExpressaoP1 = [x1 / x2, y1 / y2, z1 / z2];
  resultado = contExpressaoP1;
  return resultado;
}
export { formulaCalcDivisaoDeVetoresR3 as Component_math_calculator_exp_calc_divisao_vetores_r3_method }


