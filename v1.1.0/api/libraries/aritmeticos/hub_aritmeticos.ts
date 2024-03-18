/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
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
import { Porcentagem } from "./components/comuns/porcentagem.mdl";
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
import { Soma } from "./components/comuns/soma";
import { Subtracao } from "./components/comuns/subtracao";



export class Aritmeticos {

  // constantes
  AVOGADRO= 6.022e23;

  CBRTOF01B02= 0.707106;

  CBRTOF01B04= 0.500000;

  CBRTOF01B06= 0.408248;

  CBRTOF01B08= 0.353553;

  CBRTOF01= 1.000000;

  CBRTOF02= 1.259921;

  CBRTOF03= 1.587401;

  CBRTOF04= 1.999999;

  CBRTOF05= 2.236067;

  CBRTOF06= 2.581988;

  CBRTOF07= 2.912931;

  CBRTOF08= 3.262495;

  CBRTOF09= 3.624499;

  CBRTOF10= 3.999999;

  COULOMB= 1.60e-19;

  EULER= 2.718281;

  LOGARITHM2= 0.693147;

  LOGARITHM2E= 1.442695;

  LOGARITHM10= 2.302585;

  LOGARITHM10E= 0.434294;

  MAXVALUE= 999999;

  MINVALUE= -999999;

  NEWTON= 0.693147;

  PI= 3.141592;

  PLANCK= 6.626e-34;

  SQRTOF01B02= 0.793700;
  
  SQRTOF01B04= 0.629960;
  
  SQRTOF01B06= 0.550321;
  
  SQRTOF01B08= 0.500000;

  SQRTOF01= 1.000000;

  SQRTOF02= 1.414213;
  
  SQRTOF03= 1.732050;

  SQRTOF04= 2.000000;

  SQRTOF05= 2.236067;

  SQRTOF06= 2.449489;

  SQRTOF07= 2.645751;

  SQRTOF08= 2.828427;
  
  SQRTOF09= 3.000000;

  SQRTOF10= 3.162277;
  
  TESLA= 1.602e-19;

  ZERO= 0;


};

let aritm = new Aritmeticos();
