import { Component_math_corebase_pi_constant } from "../math/constant.pi";
import { Component_math_corebase_sqrt_method } from "../math/method.sqrt";

const formulaCalculoDaEscalaGeografica = (tamanhoReal: number, tamanhoFicticio: number): number => {
  let resultado = tamanhoReal / tamanhoFicticio;
  return resultado;
}

const formulaCalculoDeIDH = (saude: number, educacao: number, renda: number, populacao: number, ppc: number): number => {
  let resultado = (saude + educacao + renda) / (populacao + ppc);
  return resultado;
}

const formulaCalculoDeGINI = (pnb: number, populacao: number): number => {
  let resultado = pnb / populacao;
  return resultado;
}

const formulaCalculoDeIMC = (peso: number, altura: number): number => {
  let resultado = peso / altura ** 2;
  return resultado;
}

const formulaCalculoDeDensidadePopulacional = (espaco: number, populacao: number): number => {
  let resultado = espaco / populacao;
  return resultado;
}

const formulaCalculoDosNumerosPares = (numero: number): number => {
  let resultado = numero / 2;
  if(resultado % 2 === 0) { console.info("eh par.") }
  else { console.info("eh impar.") }
  return resultado;
}

const formulaCalculoDosNumerosImpares = (numero: number): number => {
  let resultado = numero / 3;
  if(resultado % 3 === 0) { console.info("eh impar.") }
  else { console.info("eh par.") }
  return resultado;
}

const formulaNumeroDeConjuntos = (elementos: number): number => {
  let resultado = 2 ** elementos;
  return resultado;
}

const formulaCalculoDoDiagramaDeVennDe2Grupos = (numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number): object => {
  let resultados = { 
    intecessao: numerosGrupoDoisNucleos, 
    nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoDoisNucleos, 
    nucleoDois: numerosGrupoUmNucleo[1] - numerosGrupoDoisNucleos 
  };
  return resultados;
}

const formulaCalculoDoDiagramaDeVennDe3Grupos = (numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number): object => {
  let resultados = { 
    intecessao: numerosGrupoTresNucleos, 
    nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoTresNucleos, 
    nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoTresNucleos, 
    nucleoTres: numerosGrupoUmNucleo[1] - numerosGrupoTresNucleos 
  };
  return resultados;
}

const formulaCalculoDoDiagramaDeVennDe4Grupos = (numerosGrupoUmNucleo: number[], numerosGrupoDoisNucleos: number[], numerosGrupoTresNucleos: number[], numerosGrupoQuatroNucleos: number): object => {
  let resultados = { 
    intecessao: numerosGrupoQuatroNucleos, 
    nucleoUm: numerosGrupoUmNucleo[0] - numerosGrupoQuatroNucleos, 
    nucleoDois: numerosGrupoDoisNucleos[0] - numerosGrupoQuatroNucleos, 
    nucleoTres: numerosGrupoTresNucleos[0] - numerosGrupoQuatroNucleos, 
    nucleoQuatro: numerosGrupoUmNucleo[1] - numerosGrupoQuatroNucleos 
  };
  return resultados;
}

const formulaCalculoDosNumerosPrimos = (numeroPesquisados: number): Array<number> => {
  let numerosPrimos: number[] = [];
  for(let i = 0; i < numeroPesquisados; i++) {
    if(i % 2 !== 0) {
      numerosPrimos.push(i);
    }
  }
  return numerosPrimos;
}

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

const formulaAreaCilindroQualquer = (raio: number, altura: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2) * altura; 
}

const formulaAreaConeQualquer = (raio: number, altura: number): number => { 
  return Component_math_corebase_pi_constant * (raio ** 2) * (altura / 3); 
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

const formulaVolumeDeUmParalelepipedoQualquer = (comprimento: number, largura: number, altura: number): number => { 
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
        
const formulaCalculoPrimeiroGrau = (exp) => { 
  let res = 0;
  let verif = /([0-9]+(\.[0-9]+)?x((\-)?(\+)?)[0-9]+(\.[0-9]+)?=[0-9]+(\.[0-9]+)?)/gi; 
  let p1 = /([0-9]+(\.[0-9]+)?x)/gi;
  let p2 = /(((\-)?(\+)?)[0-9]+(\.[0-9]+)?)/gi; 
  let p3 = /(=[0-9]+(\.[0-9]+)?)/gi; 
  
  if (exp.match(verif) == null) { 
    return console.error("A expressão inserida não é uma função do 1º Grau!"); 
  } else { 
    res = (parseFloat(exp.match(p2)) - parseFloat(exp.match(p3))) / parseFloat(exp.match(p1)); 
  } 
  
  return res; 
}

const formulaCalculoSegundoGrau = (a: number, b: number, c: number) => { 
  let res = [0]; 
  let delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, x2]; 
  
  return res; 
}

const formulaCalculoTerceiroGrau = (a: number, b: number, c: number) => { 
  let res = [0]; 
  let delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, x2, 0]; 
  
  return res; 
}

const formulaCalculoQuartoGrau = (a: number, b: number, c: number) => { 
  let res = [0];
  let delta = (b ** 2) - (4 * a * c); 
  let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
  let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
  res = [x1, -1 * x1, x2, -1 * x2]; 
  
  return res; 
}
