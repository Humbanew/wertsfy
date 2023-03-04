import { WertsfyPrototipos } from "../../.declarations/warch.type.nxt";
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

const calculoDosVetoresGA = (tipo: WertsfyPrototipos.Logicos.TExpressoes): number|number[] => {

  let resultado: number|number[] = 0, attrs = undefined, variavel = tipo.operacoesVetores;

  switch(variavel[0]) {
    case "#distanciaVetorEntreDoisPontos":
      switch(variavel[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;   
        case "#r3":
          resultado = Component_math_calculator_exp_calc_vetor_distancia_entre_dois_pontos_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break; 
      }
    case "#modulo":
      switch(variavel[1][0]) { 
        case "#r2":                
          resultado = Component_math_calculator_exp_calc_modulo_vetor_r2_method(attrs.x, attrs.y); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_modulo_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
      }
    case "#versor":
      switch(variavel[1][0]) { 
        case "#r2":                 
          resultado = Component_math_calculator_exp_calc_versor_vetor_r2_method(attrs.x, attrs.y); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_versor_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
      }
    case "#projecaoVetorSobreOutroVetor":
      switch(variavel[1][0]) { 
        case "#r2":       
          resultado = Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_vetor_sobre_outro_vetor_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break;
      }
    case "#soma":
      switch(variavel[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_soma_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_soma_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break; 
      }
    case "#subtracao":
      switch(variavel[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_subtracao_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_subtracao_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break; 
      }
    case "#produtoEscalar":
      switch(variavel[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_produto_escalar_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_produto_escalar_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break; 
      }
    case "#divisao":
      switch(variavel[1][0]) { 
        case "#r2":          
          resultado = Component_math_calculator_exp_calc_divisao_vetores_r2_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2); break;
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_divisao_vetores_r3_method(attrs.x1, attrs.x2, attrs.y1, attrs.y2, attrs.z1, attrs.z2); break;
      }
    case "#pontoMedio":
      switch(variavel[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_ponto_medio_vetor_r2_method(attrs.x, attrs.y); break;          
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_ponto_medio_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
      }
    case "#cossenosDiretores":
      switch(variavel[1][0]) { 
        case "#r2":
          resultado = Component_math_calculator_exp_calc_cossenos_diretores_vetor_r2_method(attrs.x, attrs.y); break;          
        case "#r3": 
          resultado = Component_math_calculator_exp_calc_cossenos_diretores_vetor_r3_method(attrs.x, attrs.y, attrs.z); break;
      }
  }

  return resultado;

}; export { calculoDosVetoresGA as Component_math_calculator_exp_calc_vetores_ga_method }
