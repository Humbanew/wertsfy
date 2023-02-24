import { Component_math_corebase_pi_constant } from "../math/constant.pi";
import { Component_math_corebase_sqrt_method } from "../math/method.sqrt";

const calculoGeometricos = () => { };




const formulaAreaTrianguloQualquer = (lado: number): number => { 
  return lado * lado * Component_math_corebase_sqrt_method(3) / 4; 
}

const formulaApotemaDeUmTrianguloQualquer = (lado: number): number => {
  return lado * lado * Component_math_corebase_sqrt_method(3) / 2;
}

const formulaAreaQuadradoQualquer = (lado: number): number => { 
  return lado * lado; 
}

const formulaAreaRetanguloQualquer = (comp: number, larg: number): number => { 
  return comp * larg; 
}

const formulaAreaCirculoQualquer = (raio: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2); 
}

const formulaAreaElipseQualquer = (raio: number, altura: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2) * altura; 
}

const formulaAreaPiramideQualquer = (base: number, altura: number): number => { 
  return (base * altura) / 3; 
}

const formulaAreaCilindroQualquer = (raio: number, altura: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2) * altura; 
}

const formulaAreaConeQualquer = (raio: number, altura: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2) * (altura / 3); 
}

const formulaAreaTrapezioQualquer = (baseMaior: number, baseMenor: number, altura: number): number => { 
  return (baseMaior + baseMenor) * altura / 2; 
}

const formulaAreaLozangoQualquer = (diagonalMaior: number, diagonalMenor: number, altura: number): number => { 
  return (diagonalMaior + diagonalMenor) / 2; 
}

const formulaAreaDeUmaSuperficieQualquer = (comp: number, larg: number): number => {
  return comp * larg;
}

const formulaVolumeDeUmaSuperficieQualquer = (area: number, comp: number, larg: number): number => {
  return area * comp * larg;
}

const formulaAreaEsferaQualquer = (raio: number): number => { 
  return 4 * Component_math_corebase_pi_constant * (raio ** 2) / 2; 
}

const formulaAreaDeUmPoligonoQualquer = (comp: number, larg: number, nLados: number): number => {
  return comp == larg ? nLados * ((comp * comp * Component_math_corebase_sqrt_method(3)) / 4) : nLados * (comp * larg / 2);
}

const formulaVolumeDeUmPoligonoFormatoLozangoQualquer = (diagonalMaior: number, diagonalMenor: number, altura: number): number => {
  return (diagonalMaior + diagonalMenor) / 2 * altura;
}

const formulaVolumeDeUmPoligonoFormatoTrapezioQualquer = (baseMaior: number, baseMenor: number, altura: number): number => {
  return (baseMaior + baseMenor) / 2 * altura;
}

const formulaAreaDeUmParalelogramoQualquer = (lado: number, altura: number): number => { 
  return lado * altura; 
}

const formulaAreaLateralDeUmPrismaQualquer = (comp: number, larg: number, nLados: number): number => {
  return nLados * (comp * larg);
}

const formulaVolumeDeUmPrismaQualquer = (area: number, comp: number, larg: number): number => {
  return area * comp * larg;
}

const formulaVolumeDeUmCuboQualquer = (aresta: number): number => { 
  return aresta * aresta * aresta; 
}

const formulaVolumeDeUmParalelogramoQualquer = (comprimento: number, largura: number, altura: number): number => { 
  return comprimento * largura * altura; 
}

const formulaVolumeDeUmaPiramideQualquer = (base: number, altura: number): number => { 
  return (base * altura) / 3; 
}

const formulaVolumeDeUmTetraedroQualquer = (aresta: number): number => { 
  return (aresta * aresta * aresta) / 4; 
}

const formulaVolumeDeUmHexaedroQualquer = (aresta: number): number => { 
  return (aresta * aresta * aresta) / 6; 
}

const formulaVolumeDeUmOctaedroQualquer = (aresta: number): number => { 
  return (aresta * aresta * aresta) / 8; 
}

const formulaVolumeDeUmDodecaedroQualquer = (aresta: number): number => { 
  return (aresta * aresta * aresta) / 12; 
}

const formulaVolumDeUmIcosaedroQualquer = (aresta: number): number => { 
  return (aresta * aresta * aresta) / 20; 
}

const formulaVolumeDeUmConeQualquer = (raio: number, altura: number): number => { 
  return (Component_math_corebase_pi_constant * (raio ** 2) * altura) / 3; 
}

const formulaVolumeDeUmCilindroQualquer = (raio: number, altura: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2) * altura; 
}

const formulaVolumeDeUmEsferaQualquer = (raio: number): number => { 
  return (4 * Component_math_corebase_pi_constant * (raio ** 3)) / 3; 
}

const formulaVolumeDeUmRombQualquer = (aresta: number): number => { 
  return (aresta * aresta) / 2; 
}

const formulaAreaCircunferenciaQualquer = (raio: number): number => { 
  return Component_math_corebase_pi_constant * (raio * 2); 
}

const formulaAreaLateralDeUmCilindroQualquer = (raio: number, altura: number) => {
  return 2 * Component_math_corebase_pi_constant * raio * altura;
}
