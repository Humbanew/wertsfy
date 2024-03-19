#!/usr/bin/env node

/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

import { Aritmeticos } from "../libraries/aritmeticos/hub_aritmeticos";
import { Conversores } from "../libraries/conversores/hub_conversores";

namespace Wtsfy {

  namespace Cli {

    // template de gramática
    const gramatica = {
      
      versao: '0.0.1',
      aritmeticos: {

        expressoes: {

          comuns: {

            absoluto: '\abs',
            soma: `\+`,
            subtracao: `\-`,
            multiplicacao: `\*`,
            divisao: `\/`,
            potencia: `\^`,
            potencia_mais1: `\^+1`,
            potencia_menos1: `\^-1`,
            potencia_de_potencia: `\^\^`,
            potencia_de_potencia_mais1: `\^\^+1`,
            potencia_de_potencia_menos1: `\^\^-1`,
            arrendondamento_para_baixo: `\floor`,
            arrendondamento_para_cima: `\ceil`,
            arrendondamento_para_decimal32bits: `\floor32`,
            raiz_quadrada: `\sqrt`,
            raiz_cubica: `\cbrt`,
            raiz_biquadrada: `\sqrt^2`,
            raiz_bicubica: `\cbrt^2`,

          },
          cientificas: { 

            raiz_quarta: `\root^4`,
            raiz_quinta: `\root^5`,
            raiz_sexta: `\root^6`,
            raiz_setima: `\root^7`,
            raiz_octava: `\root^8`,
            raiz_nona: `\root^9`,
            raiz_decima: `\root^10`,

            // experimentais
            seno: `\sin`,
            cosseno: `\cos`,
            tangente: `\tan`,
            secante: `\sec`,
            cossecante: `\csc`,
            cotangente: `\cot`,
            seno_hiperbolico: `\sinh`,
            cosseno_hiperbolico: `\cosh`,
            tangente_hiperbolica: `\tanh`,
            secante_hiperbolica: `\sech`,
            cossecante_hiperbolica: `\csch`,
            cotangente_hiperbolica: `\coth`,
            arco_seno: `\arcsin`,
            arco_cosseno: `\arccos`,
            arco_tangente: `\arctan`,
            arco_secante: `\arcsec`,
            arco_cossecante: `\arcc`,
            arco_cotangente: `\arccot`,
            arco_seno_hiperbolico: `\arcsinh`,
            arco_cosseno_hiperbolico: `\arccosh`,
            arco_tangente_hiperbolica: `\arctanh`,
            arco_secante_hiperbolica: `\arcsech`,
            arco_cossecante_hiperbolica: `\arccsch`,
            arco_cotangente_hiperbolica: `\arccoth`,
            logaritmo: `\log`,
            logaritmo_natural: `\ln`,
            logaritmo_base10: `\log_{10}`,
            logaritmo_base2: `\log_{2}`,
            logaritmo_base_e: `\log_{e}`,

          },
          supremas: {

            // experimentais
            antilogaritmo: `\antilog`,
            antilogaritmo_natural: `\antiln`,
            antilogaritmo_base10: `\antilog_{10}`,
            antilogaritmo_base2: `\antilog_{2}`,
            antilogaritmo_base_e: `\antilog_{e}`,
            cologaritmo: `\colog`,
            cologaritmo_natural: `\coln`,
            cologaritmo_base10: `\col_{10}`,
            cologaritmo_base2: `\col_{2}`,
            cologaritmo_base_e: `\col_{e}`,
            
          }

        }

      }

    }


    // leitura de input
    process.stdin.setEncoding('utf8');
    process.stdin.setMaxListeners(6);
    process.stdin.setNoDelay(true);
    console.log(gramatica.versao+"\n");
    console.log(gramatica.aritmeticos+"\n");
    console.log(new Aritmeticos());
    console.log(new Conversores());

  }

}
