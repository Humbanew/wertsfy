/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

import { RaizDecima } from "./components/cientificos/raiz_decima";
import { RaizNona } from "./components/cientificos/raiz_nona";
import { RaizOitava } from "./components/cientificos/raiz_oitava";
import { RaizQuarta } from "./components/cientificos/raiz_quarta";
import { RaizQuinta } from "./components/cientificos/raiz_quinta";
import { RaizSetima } from "./components/cientificos/raiz_setima";
import { RaizSexta } from "./components/cientificos/raiz_sexta";
import { Absoluto } from "./components/comuns/absoluto";
import { ArrendondaParaBaixo } from "./components/comuns/arrendonda_para_baixo";
import { ArrendondaParaCima } from "./components/comuns/arrendonda_para_cima";
import { ArrendondaParaDecimal32Bits } from "./components/comuns/arrendonda_para_decimal_32bits";
import { Divisao } from "./components/comuns/divisao";
import { Multiplicacao } from "./components/comuns/multiplicacao";
import { Porcentagem } from "./components/comuns/porcentagem";
import { PorcentagemPor1000 } from "./components/comuns/porcentagem_por_1000";
import { PorcentagemPor10000 } from "./components/comuns/porcentagem_por_10000";
import { PorcentagemPor100000 } from "./components/comuns/porcentagem_por_100000";
import { Potencia } from "./components/comuns/potencia";
import { PotenciaDePotencia } from "./components/comuns/potencia_de_potencia";
import { PotenciaDePotenciaMais1 } from "./components/comuns/potencia_de_potencia_mais_1";
import { PotenciaDePotenciaMenos1 } from "./components/comuns/potencia_de_potencia_menos_1";
import { PotenciaMais1 } from "./components/comuns/potencia_mais_1";
import { PotenciaMenos1 } from "./components/comuns/potencia_menos_1";
import { RaizBicubica } from "./components/comuns/raiz_bicubica";
import { RaizBiquadrada } from "./components/comuns/raiz_biquadrada";
import { RaizCubica } from "./components/comuns/raiz_cubica";
import { RaizQuadrada } from "./components/comuns/raiz_quadrada";
import { Resto } from "./components/comuns/resto";
import { Soma } from "./components/comuns/soma";
import { Subtracao } from "./components/comuns/subtracao";

interface Comuns {
  absoluto: typeof Absoluto;
  soma: typeof Soma;
  subtracao: typeof Subtracao;
  multiplicacao: typeof Multiplicacao;
  divisao: typeof Divisao;
  resto: typeof Resto;
  potencia: typeof Potencia;
  potencia_mais_1: typeof PotenciaMais1;
  potencia_menos_1: typeof PotenciaMenos1;
  potencia_de_potencia: typeof PotenciaDePotencia;
  potencia_de_potencia_mais_1: typeof PotenciaDePotenciaMais1;
  potencia_de_potencia_menos_1: typeof PotenciaDePotenciaMenos1;
  arrendonda_para_cima: typeof ArrendondaParaCima;
  arrendonda_para_baixo: typeof ArrendondaParaBaixo;
  arrendonda_para_decimal_32bits: typeof ArrendondaParaDecimal32Bits;
  porcentagem: typeof Porcentagem;
  porcentagem_por_1000: typeof PorcentagemPor1000;
  porcentagem_por_10000: typeof PorcentagemPor10000;
  porcentagem_por_100000: typeof PorcentagemPor100000;
  raiz_quadrada: typeof RaizQuadrada;
  raiz_cubica: typeof RaizCubica;
  raiz_biquadrada: typeof RaizBiquadrada;
  raiz_bicubica: typeof RaizBicubica;
}

interface Cientificos {
  raiz_quarta: typeof RaizQuarta;
  raiz_quinta: typeof RaizQuinta;
  raiz_sexta: typeof RaizSexta;
  raiz_setima: typeof RaizSetima;
  raiz_oitava: typeof RaizOitava;
  raiz_nona: typeof RaizNona;
  raiz_decima: typeof RaizDecima;
}

interface Supremos { la: 0; }
interface Expressoes { lb: 0; }

export class Aritmeticos implements Comuns, Cientificos{
  raiz_quarta: (x: number) => number;
  raiz_quinta: (x: number) => number;
  raiz_sexta: (x: number) => number;
  raiz_setima: (x: number) => number;
  raiz_oitava: (x: number) => number;
  raiz_nona: (x: number) => number;
  raiz_decima: (x: number) => number;
  // funcionalidades comuns
  porcentagem: (x: number) => number;
  porcentagem_por_1000: (x: number) => number;
  porcentagem_por_10000: (x: number) => number;
  porcentagem_por_100000: (x: number) => number;
  arrendonda_para_cima: (x: number) => number;
  arrendonda_para_baixo: (x: number) => number;
  arrendonda_para_decimal_32bits: (x: number) => string;
  absoluto: (x: number) => number;
  subtracao: (x: number, y: number) => number;
  soma: (x: number, y: number) => number;
  multiplicacao: (x: number, y: number) => number;
  divisao: (x: number, y: number) => number;
  resto: (x: number, y: number) => number;
  potencia: (x: number, y: number) => number;
  potencia_mais_1: (x: number, y: number) => number;
  potencia_menos_1: (x: number, y: number) => number;
  potencia_de_potencia: (x: number, y: number[]) => number;
  potencia_de_potencia_mais_1: (x: number, y: number[]) => number;
  potencia_de_potencia_menos_1: (x: number, y: number[]) => number;
  raiz_quadrada: (x: number) => number;
  raiz_cubica: (x: number) => number;
  raiz_biquadrada: (x: number) => number;
  raiz_bicubica: (x: number) => number;

  // constantes
  AVOGADRO= 
    6.022e23;

  CBRTOF01B02= 
    0.707106;

  CBRTOF01B04= 
    0.500000;

  CBRTOF01B06= 
    0.408248;

  CBRTOF01B08= 
    0.353553;

  CBRTOF01= 
    1.000000;

  CBRTOF02= 
    1.259921;

  CBRTOF03= 
    1.587401;

  CBRTOF04= 
    1.999999;

  CBRTOF05= 
    2.236067;

  CBRTOF06= 
    2.581988;

  CBRTOF07= 
    2.912931;

  CBRTOF08= 
    3.262495;

  CBRTOF09= 
    3.624499;

  CBRTOF10= 
    3.999999;

  COULOMB= 
    1.60e-19;

  EULER= 
    2.718281;

  LOGARITHM2= 
    0.693147;

  LOGARITHM2E= 
    1.442695;

  LOGARITHM10= 
    2.302585;

  LOGARITHM10E= 
    0.434294;

  MAXVALUE= 
    999999;

  MINVALUE= 
    -999999;

  NEWTON= 
    0.693147;

  PI= 
    3.141592;

  PLANCK= 
    6.626e-34;

  SQRTOF01B02= 
    0.793700;
  
  SQRTOF01B04= 
    0.629960;
  
  SQRTOF01B06= 
    0.550321;
  
  SQRTOF01B08= 
    0.500000;

  SQRTOF01= 
    1.000000;

  SQRTOF02= 
    1.414213;
  
  SQRTOF03= 
    1.732050;

  SQRTOF04= 
    2.000000;

  SQRTOF05= 
    2.236067;

  SQRTOF06= 
    2.449489;

  SQRTOF07= 
    2.645751;

  SQRTOF08= 
    2.828427;
  
  SQRTOF09= 
    3.000000;

  SQRTOF10= 
    3.162277;
  
  TESLA= 
    1.602e-19;

  ZERO= 
    0.000000;

};

export class Aritmeticos2020 { };

let aritm = new Aritmeticos();
