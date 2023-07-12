declare interface IGException {

  message: string;

} export var Exception: IGException["message"];

export interface IASetups {

  options: {

    /** operação */
    "#absoluto": {
      x: number
    }

  } | {

    /** operação */
    "#arco-seno": {
      x: number
    }

  } | {

    /** operação */
    "#arco-seno-hiperbolico": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cosseno": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cosseno-hiperbolico": {
      x: number
    }

  } | {

    /** operação */
    "#arco-tangente": {
      x: number
    }

  } | {

    /** operação */
    "#arco-tangente-hiperbolica": {
      x: number
    }

  } | {

    /** operação */
    "#arco-secante": {
      x: number
    }

  } | {

    /** operação */
    "#arco-secante-hiperbolica": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cosecante": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cosecante-hiperbolica": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cotangente": {
      x: number
    }

  } | {

    /** operação */
    "#arco-cotangente-hiperbolica": {
      x: number
    }

  } | {

    /** operação */
    "#arredonda-para-baixo": {
      x: number
    }

  } | {

    /** operação */
    "#arredonda-para-cima": {
      x: number
    }

  } | {

    /** operação */
    "#arredonda-para-inteiro": {
      x: number
    }

  } | {

    /** operação */
    "#arredonda-decimal-para-inteiro": {
      x: number
    }

  } | {

    /** operação */
    "#cosseno": {
      x: number
    }

  } | {

    /** operação */
    "#cosseno-hiperbolico": {
      x: number
    }

  } | {

    /** operação */
    "#cosecante": {
      x: number
    }

  } | {

    /** operação */
    "#cosecante-hiperbolica": {
      x: number
    }

  } | {

    /** operação */
    "#cotangente": {
      x: number
    }

  } | {

    /** operação */
    "#cotangente-hiperbolica": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#divisão": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#exponencial": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#exponencial-mais-1": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#exponencial-menos-1": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-natural": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-natural-mais-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-natural-menos-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-10": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-10-mais-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-10-menos-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-2": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-2-mais-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-2-menos-1": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-qualquer": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-qualquer-mais-1": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#logarítmo-de-base-qualquer-menos-1": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#multiplicação": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#multiplicação-de-inteiros-de-32-bits": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#número-aleatório": void
  
  } | {

    /** operação */
    "#parte-inteira-valor-decimal": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#potência": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#potência-mais-um": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#potência-menos-um": { 
      x: number, 
      y: number 
    }
  
  } | {

    /** operação */
    "#potência-de-potência": { 
      x: number, 
      y: number, 
      z: number[] 
    }
  
  } | {

    /** operação */
    "#potência-de-potência-mais-um": { 
      x: number, 
      y: number, 
      z: number[] 
    }
  
  } | {

    /** operação */
    "#potência-de-potência-menos-um": { 
      x: number, 
      y: number, 
      z: number[] 
    }
  
  } | {

    /** operação */
    "#raiz-cúbica": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-décima-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-quadrada": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-quarta-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-quinta-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-sexta-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-sétima-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-nona-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#raiz-oitava-potência": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#resto": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#soma": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#secante": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#secante-hiperbolica": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#seno": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#seno-hiperbolico": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#subtracao": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#tangente": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#tangente-hiperbolica": { 
      x: number 
    }
  
  } | {

    /** operação */
    "#valor-máximo": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#valor-minimo": { 
      x: number[] 
    }
  
  } | {

    /** operação */
    "#verifica-sinal": { 
      x: number 
    }
  
  } | {



    "#aceleracao_angular_mcuv": null
  } | {
    "#aceleracao_centripeta_mcu": null
  } | {
    "#aceleracao_no_plano_inclinado_eixo_x": null
  } | {
    "#aceleracao_no_plano_inclinado_eixo_y": null
  } | {
    "#aceleracao": null
  } | {
    "#alcance_lancamento_vertical": null
  } | {
    "#alcance_maximo_lancamento_vertical": null
  } | {
    "#altura_maxima_lancamento_vertical": null
  } | {
    "#arranjo": null
  } | {
    "#atrito": null
  } | {
    "#binômio_de_newton": null
  } | {
    "#calor_latente": null
  } | {
    "#calor_sensivel": null
  } | {
    "#função_primeiro_grau": null
  } | {
    "#função_segundo_grau": null
  } | {
    "#função_terceiro_grau": null
  } | {
    "#função_quarto_grau": null
  } | {
    "#combinacao": null
  } | {
    "#concentracao": null
  } | {
    "#correcao": null
  } | {
    "#conjugado_numero_complexo": null
  } | {
    "#conjugado_numero_real": null
  } | {
    "#consumo_de_energia": null
  } | {
    "#contra_forca_eletromotriz": null
  } | {
    "#densidade": null
  } | {
    "#determinante_2x2": null
  } | {
    "#determinante_3x3": null
  } | {
    "#diagrama_venn_2_grupos": null
  } | {
    "#diagrama_venn_3_grupos": null
  } | {
    "#diagrama_venn_4_grupos": null
  } | {
    "#diagrama_venn_5_grupos": null
  } | {
    "#diagrama_venn_6_grupos": null
  } | {
    "#dilatacao_linear": null
  } | {
    "#dilatacao_superficial": null
  } | {
    "#dilatacao_volumetrica": null
  } | {
    "#escala_geografica": null
  } | {
    "#indice_de_desenvolvimento_humano": null
  } | {
    "#gini": null
  } | {
    "#indice_de_massa_corporea": null
  } | {
    "#densidade_populacional": null
  } | {
    "#efeito_fotoeletrico": null
  } | {
    "#efeito_joule": null
  } | {
    "#empuxo_hidroestatica_hidrodinamica": null
  } | {
    "#escala_geografica": null
  } | {
    "#energia_cinetica": null
  } | {
    "#energia_potencial_elastica": null
  } | {
    "#energia_potencial_gravitacional": null
  } | {
    "#energia_potencial_magnética": null
  } | {
    "#espaço": null
  } | {
    "#fatorial": null
  } | {
    "#força_eletromotriz": null
  } | {
    "#forca_gravitacional": null
  } | {
    "#frequencia": null
  } | {
    "#juros_compostos": null
  } | {
    "#juros_simples": null
  } | {
    "#lancamento_horizontal": null
  } | {
    "#lei_de_coulomb": null
  } | {
    "#lei_de_lenz": null
  } | {
    "#lei_de_ohm": null
  } | {
    "#lei_geral_dos_gases": null
  } | {
    "#leis_de_newton": null
  } | {
    "#numeros_complexos": null
  } | {
    "#periodo": null
  } | {
    "#peso_aparente_hidroestatica_hidrodinamica": null
  } | {
    "#plano_inclinado_com_atrito": null
  } | {
    "#plano_inclinado_sem_atrito": null
  } | {
    "#soma_polinomios": null
  } | {
    "#subtracao_polinomios": null
  } | {
    "#multiplicacao_polinomios": null
  } | {
    "#divisao_polinomios": null
  } | {
    "#potencia_polinomios": null
  } | {
    "#potencial_elastico": null
  } | {
    "#potencial_mecanico": null
  } | {
    "#potencias_de_i": null
  } | {
    "#principio_fundamental_hidroestatica_hidrodinamica": null
  } | {
    "#probabilidade": null
  } | {
    "#quadrado_de_punnet_extendido": null
  } | {
    "#quadrado_de_punnet": null
  } | {
    "#regra_de_tres_composta": null
  } | {
    "#regra_de_tres_simples": null
  } | {
    "#relacao_euler": null
  } | {
    "#rendimento": null
  } | {
    "#sinalizacao_octantes": null
  } | {
    "#sinalizacao_quadrantes": null
  } | {
    "#sistema_de_equacoes": null
  } | {
    "#sistema_de_inequacoes": null
  } | {
    "#sistemas_lineares": null
  } | {
    "#tempo": null
  } | {
    "#titulacao": null
  } | {
    "#torricelli_movimento_circular_uniformente_variado": null
  } | {
    "#trabalho": null
  } | {
    "#velocidade_angular_movimento_circular_uniforme": null
  } | {
    "#velocidade_linear_movimento_circular_uniforme": null
  } | {
    "#velocidade": null
  } | {
    "#eq_horaria_aceleracao_movimento_harmonico_simples": null
  } | {
    "#eq_horaria_aceleracao": null
  } | {
    "#eq_horaria_espaco_movimento_circular_uniformente_variado": null
  } | {
    "#eq_horaria_espaco": null
  } | {
    "#eq_horaria_forca": null
  } | {
    "#eq_horaria_velocidade": null
  } | {
    "#eq_lagrange": null
  } | {
    "#eq_torricelli": null
  } | {
    "#teo_boltzmann": null
  } | {
    "#teo_coulomb": null
  } | {
    "#teo_girard": null
  } | {
    "#teo_pascal": null
  } | {
    "#teo_pitagoras": null
  } | {
    "#teo_plank": null
  } | {
    "#teo_stevin": null
  } | {
    "#teo_stirling": null
  } | {
    "#teo_tales_mileto": null



    // geometricos
  } | {  
    "#area_triangulo_qualquer": null
  } | {
    "#apotema_triangulo_qualquer": null
  } | {
    "#area_quadrado_qualquer": null
  } | {
    "#area_retangulo_qualquer": null
  } | {
    "#area_circulo_qualquer": null
  } | {
    "#area_elipse_qualquer": null
  } | {
    "#area_piramide_qualquer": null
  } | {
    "#area_cilindro_qualquer": null
  } | {
    "#area_cone_qualquer": null
  } | {
    "#area_trapezio_qualquer": null
  } | {
    "#area_lozango_qualquer": null
  } | {
    "#area_superficie_qualquer": null
  } | {
    "#volume_superficie_qualquer": null
  } | {
    "#area_esfera_qualquer": null
  } | {
    "#area_poligono_qualquer": null
  } | {
    "#volume_poligono_formato_lozango_qualquer": null
  } | {
    "#volume_poligono_formato_trapezio_qualquer": null
  } | {
    "#area_paralelogramo_qualquer": null
  } | {
    "#area_lateral_prisma_qualquer": null
  } | {
    "#volume_prisma_qualquer": null
  } | {
    "#volume_cubo_qualquer": null
  } | {
    "#volume_paralelogramo_qualquer": null
  } | {
    "#volume_piramide_qualquer": null
  } | {
    "#volume_tetraedro_qualquer": null
  } | {
    "#volume_hexaedro_qualquer": null
  } | {
    "#volume_octaedro_qualquer": null
  } | {
    "#volume_dodecaedro_qualquer": null
  } | {
    "#volume_icosaedro_qualquer": null
  } | {
    "#volume_cone_qualquer": null
  } | {
    "#volume_cilindro_qualquer": null
  } | {
    "#volume_esfera_qualquer": null
  } | {
    "#volume_romb_qualquer": null
  } | {
    "#area_circunferencia_qualquer": null
  } | {
    "#area_lateral_cilindro_qualquer": null
  } | {
    "#soma_matrizes": null
  } | {
    "#subtracao_matrizes": null
  } | {
    "#divisao_matrizes": null
  } | {
    "#multiplicacao_matrizes": null
  } | {
    "#numeros_pares": null
  } | {
    "#numeros_impares": null
  } | {
    "#numeros_primos": null
  } | {
    "#conjuntos": null
  } | {
    "#porcentagem": null
  } | {
    "#porcentagem_por_1000": null
  } | {
    "#porcentagem_por_10000": null
  } | {
    "#porcentagem_por_100000": null
  } | {
    "#porcentagem_por_qualquer_numero": null
  } | {
    "#celsius_para_fahrenheit": null
  } | {
    "#celsius_para_kelvin": null
  } | {
    "#fahrenheit_para_celsius": null
  } | {
    "#fahrenheit_para_kelvin": null
  } | {
    "#kelvin_para_celsius": null
  } | {
    "#kelvin_para_fahrenheit": null

  }

} export var ArithmSetups: IASetups;

/**
 *
 * *geometricos
 * 
    case "#areaPiramideQualquer":
      attrs = tipo[1]; 
      resultado = (attrs.base * attrs.altura) / 3; break;
    case "#areaCilindroQualquer":
      attrs = tipo[1]; 
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2) * attrs.altura; break;
    case "#areaConeQualquer":
      attrs = tipo[1]; 
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2) * (attrs.altura / 3); break;
    case "#areaTrapezioQualquer":
      attrs = tipo[1];
      resultado = (attrs.baseMaior + attrs.baseMenor * attrs.altura) / 2; break; 
    case "#areaLozangoQualquer":
      attrs = tipo[1];
      resultado = (attrs.diagonalMaior * attrs.diagonalMenor) / 2; break; 
    case "#areaSuperficieQualquer":
      attrs = tipo[1];
      resultado = attrs.comprimento * attrs.largura; break;
    case "#volumeSuperficieQualquer":
      attrs = tipo[1]; 
      resultado = attrs.area * attrs.comprimento * attrs.largura; break;
    case "#areaEsferaQualquer":
      attrs = tipo[1];
      resultado = 4 * Component_math_corebase_pi_constant * (attrs.raio ** 2) / 2; break; 
    case "#areaPoligonoQualquer":
      attrs = tipo[1];
      resultado = attrs.comprimento == attrs.largura ? attrs.nLados * ((attrs.comprimento * attrs.comprimento * Component_math_corebase_sqrt_method(3)) / 4) : attrs.nLados * (attrs.comprimento * attrs.largura / 2); break;
    case "#volumePoligonoFormatoLozangoQualquer":
      attrs = tipo[1];
      resultado = ((attrs.diagonalMaior * attrs.diagonalMenor) / 2 ) * attrs.altura; break;
    case "#volumePoligonoFormatoTrapezioQualquer":
      attrs = tipo[1];
      resultado = (attrs.baseMaior + attrs.baseMenor * attrs.altura) / 2; break;
    case "#areaParalelogramoQualquer":
      attrs = tipo[1];
      resultado = attrs.lado * attrs.altura; break;
    case "#areaLateralPrismaQualquer":
      attrs = tipo[1];
      resultado = attrs.nLados * (attrs.comprimento * attrs.largura); break;
    case "#volumePrismaQualquer":
      attrs = tipo[1];
      resultado = attrs.area * attrs.comprimento * attrs.largura; break;
    case "#volumeCuboQualquer":
      attrs = tipo[1];
      resultado = attrs.aresta * attrs.aresta * attrs.aresta; break;
    case "#volumeParalelogramoQualquer":
      attrs = tipo[1];
      resultado = attrs.comprimento * attrs.largura * attrs.altura; break; 
    case "#volumePiramideQualquer": 
      attrs = tipo[1];
      resultado = (attrs.base * attrs.altura) / 3; break;
    case "#volumeTetraedroQualquer":
      attrs = tipo[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 4; break; 
    case "#volumeHexaedroQualquer":
      attrs = tipo[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 6; break;
    case "#volumeOctaedroQualquer":
      attrs = tipo[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 8; break;
    case "#volumeDodecaedroQualquer":
      attrs = tipo[1]; 
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 12; break;
    case "#volumeIcosaedroQualquer":
      attrs = tipo[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 20; break;
    case "#volumeConeQualquer":
      attrs = tipo[1];
      resultado = (Component_math_corebase_pi_constant * (attrs.raio ** 2) * attrs.altura) / 3; break; 
    case "#volumeCilindroQualquer":
      attrs = tipo[1];
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2) * attrs.altura; break; 
    case "#volumeEsferaQualquer":
      attrs = tipo[1];
      resultado = (4 * Component_math_corebase_pi_constant * (attrs.raio ** 3)) / 3; break; 
    case "#volumeRombQualquer":
      attrs = tipo[1];
      resultado = (attrs.aresta * attrs.aresta) / 2; break; 
    case "#areaCircunferenciaQualquer":
      attrs = tipo[1];
      resultado = Component_math_corebase_pi_constant * (attrs.raio * 2); break; 
    case "#areaLateralCilindroQualquer":
      attrs = tipo[1];
      resultado = 2 * Component_math_corebase_pi_constant * attrs.raio * attrs.altura;
 * 
 * *matrizes
 * 
 *         case "#plus":
          resultado[i][j] = matriz.m1[i][j] + matriz.m2[i][j]; break;
        case "#minus":
          resultado[i][j] = matriz.m1[i][j] - matriz.m2[i][j]; break;
        case "#multip":
          if(matriz.m1[0][j] != matriz.m2[i][j]){ new Error("Calc Error"); }
          resultado[i][j] = matriz.m1[i][j] * matriz.m2[i][j]; break;
        case "#divisor":
          resultado[i][j] = matriz.m1[i][j] / matriz.m2[i][j]; break;
 *
 * *numericos
 * 
 *     case "#numerosPares":
      attrs = tipo[1];
      resultado = attrs.numero / 2;
      if(resultado % 2 === 0) { console.info(1) }
      else { console.info(0) }; break;
    case "#numerosImpares":
      attrs = tipo[1];
      resultado = attrs.numero / 3;
      if(resultado % 3 === 0) { console.info(1) }
      else { console.info(0) }; break;
    case "#numerosPrimos":
      attrs = tipo[1];
      resultado = [];
      for(let i = 0; i < attrs.numerosPesquisados; i++) {
        if(i % 2 !== 0) {
          resultado.push(i);
        }
      }; break;
    case "#conjuntos":
      attrs = tipo[1];
      resultado = 2 ** attrs.elementos; break;
 *
 * *porcentagem
 * 
 *     case "#10E2":
      resultado = variavel[1].value / 10 ** 2; break;
    case "#10E3":
      resultado = variavel[1].value / 10 ** 3; break;
    case "#10E4":
      resultado = variavel[1].value / 10 ** 4; break;
    case "#10E5":
      resultado = variavel[1].value / 10 ** 5; break;
    case "#anyNumber":  
      resultado = variavel[1].value / variavel[1].valueTotal; break;
 *
 * *temperatura
 * 
 *     case "#celsiusFahrenheit":
      resultado = (1.8 * valor) + 32; break;
    case "#celsiusKelvin":
      resultado = valor - 273; break;
    case "#fahrenheitCelsius":
      resultado = (valor - 32) / 1.8; break;
    case "#fahrenheitKelvin":
      resultado = ((valor - 32) * 5) / 9 + 273; break;
    case "#kelvinCelsius":
      resultado = valor + 273; break;
    case "#kelvinFahrenheit":
      resultado = (valor - 273) * 1.8 + 32; break;
 *
 */
