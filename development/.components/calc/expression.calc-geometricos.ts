import { WertsfyPrototipos } from "../../.declarations/warch.type.nxt";
import { Component_math_corebase_pi_constant } from "../math/constant.pi";
import { Component_math_corebase_sqrt_method } from "../math/method.sqrt";

const calculoGeometricos = (tipo: WertsfyPrototipos.Logicos.TExpressoes): number => {

  let resultado = 0, attrs = undefined, variavel = tipo.operacoesGeometricos;

  switch(variavel[0]) {
    case "#areaTrianguloQualquer":
      attrs = variavel[1];
      resultado = attrs.lado * attrs.lado * Component_math_corebase_sqrt_method(3) / 4; break;
    case "#apotemaTrianguloQualquer":
      attrs = variavel[1];
      resultado = attrs.lado * attrs.lado * Component_math_corebase_sqrt_method(3) / 2; break;
    case "#areaQuadradoQualquer":
      attrs = variavel[1];  
      resultado = attrs.lado * attrs.lado; break;
    case "#areaRetanguloQualquer":
      attrs = variavel[1];
      resultado = attrs.comprimento * attrs.largura; break;
    case "#areaCirculoQualquer":
      attrs = variavel[1]; 
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2); break; 
    case "#areaElipseQualquer":
      attrs = variavel[1]; 
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2) * attrs.altura; break;
    case "#areaPiramideQualquer":
      attrs = variavel[1]; 
      resultado = (attrs.base * attrs.altura) / 3; break;
    case "#areaCilindroQualquer":
      attrs = variavel[1]; 
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2) * attrs.altura; break;
    case "#areaConeQualquer":
      attrs = variavel[1]; 
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2) * (attrs.altura / 3); break;
    case "#areaTrapezioQualquer":
      attrs = variavel[1];
      resultado = (attrs.baseMaior + attrs.baseMenor * attrs.altura) / 2; break; 
    case "#areaLozangoQualquer":
      attrs = variavel[1];
      resultado = (attrs.diagonalMaior * attrs.diagonalMenor) / 2; break; 
    case "#areaSuperficieQualquer":
      attrs = variavel[1];
      resultado = attrs.comprimento * attrs.largura; break;
    case "#volumeSuperficieQualquer":
      attrs = variavel[1]; 
      resultado = attrs.area * attrs.comprimento * attrs.largura; break;
    case "#areaEsferaQualquer":
      attrs = variavel[1];
      resultado = 4 * Component_math_corebase_pi_constant * (attrs.raio ** 2) / 2; break; 
    case "#areaPoligonoQualquer":
      attrs = variavel[1];
      resultado = attrs.comprimento == attrs.largura ? attrs.nLados * ((attrs.comprimento * attrs.comprimento * Component_math_corebase_sqrt_method(3)) / 4) : attrs.nLados * (attrs.comprimento * attrs.largura / 2); break;
    case "#volumePoligonoFormatoLozangoQualquer":
      attrs = variavel[1];
      resultado = ((attrs.diagonalMaior * attrs.diagonalMenor) / 2 ) * attrs.altura; break;
    case "#volumePoligonoFormatoTrapezioQualquer":
      attrs = variavel[1];
      resultado = (attrs.baseMaior + attrs.baseMenor * attrs.altura) / 2; break;
    case "#areaParalelogramoQualquer":
      attrs = variavel[1];
      resultado = attrs.lado * attrs.altura; break;
    case "#areaLateralPrismaQualquer":
      attrs = variavel[1];
      resultado = attrs.nLados * (attrs.comprimento * attrs.largura); break;
    case "#volumePrismaQualquer":
      attrs = variavel[1];
      resultado = attrs.area * attrs.comprimento * attrs.largura; break;
    case "#volumeCuboQualquer":
      attrs = variavel[1];
      resultado = attrs.aresta * attrs.aresta * attrs.aresta; break;
    case "#volumeParalelogramoQualquer":
      attrs = variavel[1];
      resultado = attrs.comprimento * attrs.largura * attrs.altura; break; 
    case "#volumePiramideQualquer": 
      attrs = variavel[1];
      resultado = (attrs.base * attrs.altura) / 3; break;
    case "#volumeTetraedroQualquer":
      attrs = variavel[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 4; break; 
    case "#volumeHexaedroQualquer":
      attrs = variavel[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 6; break;
    case "#volumeOctaedroQualquer":
      attrs = variavel[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 8; break;
    case "#volumeDodecaedroQualquer":
      attrs = variavel[1]; 
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 12; break;
    case "#volumeIcosaedroQualquer":
      attrs = variavel[1];
      resultado = (attrs.aresta * attrs.aresta * attrs.aresta) / 20; break;
    case "#volumeConeQualquer":
      attrs = variavel[1];
      resultado = (Component_math_corebase_pi_constant * (attrs.raio ** 2) * attrs.altura) / 3; break; 
    case "#volumeCilindroQualquer":
      attrs = variavel[1];
      resultado = Component_math_corebase_pi_constant * (attrs.raio ** 2) * attrs.altura; break; 
    case "#volumeEsferaQualquer":
      attrs = variavel[1];
      resultado = (4 * Component_math_corebase_pi_constant * (attrs.raio ** 3)) / 3; break; 
    case "#volumeRombQualquer":
      attrs = variavel[1];
      resultado = (attrs.aresta * attrs.aresta) / 2; break; 
    case "#areaCircunferenciaQualquer":
      attrs = variavel[1];
      resultado = Component_math_corebase_pi_constant * (attrs.raio * 2); break; 
    case "#areaLateralCilindroQualquer":
      attrs = variavel[1];
      resultado = 2 * Component_math_corebase_pi_constant * attrs.raio * attrs.altura;
  }

  return resultado;
  
}; export { calculoGeometricos as Component_math_calculator_exp_calc_geometricos_method }
