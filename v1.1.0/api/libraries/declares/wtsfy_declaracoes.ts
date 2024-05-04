/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

// Comuns
import { Absoluto } from '../components/aritmeticos/comuns/absoluto';
import { Divisao } from '../components/aritmeticos/comuns/divisao';
import { Multiplicacao } from '../components/aritmeticos/comuns/multiplicacao';
import { Porcentagem } from '../components/aritmeticos/comuns/porcentagem';
import { PorcentagemPor1000 } from '../components/aritmeticos/comuns/porcentagem_por_1000';
import { PorcentagemPor10000 } from '../components/aritmeticos/comuns/porcentagem_por_10000';
import { PorcentagemPor100000 } from '../components/aritmeticos/comuns/porcentagem_por_100000';
import { Potencia } from '../components/aritmeticos/comuns/potencia';
import { PotenciaDePotencia } from '../components/aritmeticos/comuns/potencia_de_potencia';
import { PotenciaDePotenciaMais1 } from '../components/aritmeticos/comuns/potencia_de_potencia_mais_1';
import { PotenciaDePotenciaMenos1 } from '../components/aritmeticos/comuns/potencia_de_potencia_menos_1';
import { PotenciaMais1 } from '../components/aritmeticos/comuns/potencia_mais_1';
import { PotenciaMenos1 } from '../components/aritmeticos/comuns/potencia_menos_1';
import { RaizBicubica } from '../components/aritmeticos/comuns/raiz_bicubica';
import { RaizBiquadrada } from '../components/aritmeticos/comuns/raiz_biquadrada';
import { RaizCubica } from '../components/aritmeticos/comuns/raiz_cubica';
import { RaizQuadrada } from '../components/aritmeticos/comuns/raiz_quadrada';
import { Resto } from '../components/aritmeticos/comuns/resto';
import { Soma } from '../components/aritmeticos/comuns/soma';
import { Subtracao } from '../components/aritmeticos/comuns/subtracao';

// Cientificos 
import { RaizQuarta } from '../components/aritmeticos/cientificos/raiz_quarta';
import { RaizQuinta } from '../components/aritmeticos/cientificos/raiz_quinta';
import { RaizSexta } from '../components/aritmeticos/cientificos/raiz_sexta';
import { RaizSetima } from '../components/aritmeticos/cientificos/raiz_setima';
import { RaizOitava } from '../components/aritmeticos/cientificos/raiz_oitava';
import { RaizNona } from '../components/aritmeticos/cientificos/raiz_nona';
import { RaizDecima } from '../components/aritmeticos/cientificos/raiz_decima';

interface IModuleDefine {
  nome: string;
  tipo: 'constante'|'método';
  ativo: boolean;
  assinatura: any;
}

export namespace NFAritmeticos {

  export const Avogadro: IModuleDefine = {
    nome: 'Avogadro',
    tipo: 'constante',
    ativo: false,
    assinatura: 6.022e23
  }
  
  export const Cbrtof01b02: IModuleDefine = {
    nome: 'Raiz cúbica de 1/2',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.707106
  }
  
  export const Cbrtof01b04: IModuleDefine = {
    nome: 'Raiz cúbica de 1/4',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.500000
  }
  
  export const Cbrtof01b06: IModuleDefine = {
    nome: 'Raiz cúbica de 1/6',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.408248
  }
  
  export const Cbrtof01b08: IModuleDefine = {
    nome: 'Raiz cúbica de 1/8',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.353553
  }
  
  export const Cbrtof01: IModuleDefine = {
    nome: 'Raiz cúbica de 1',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.000000
  }
  
  export const Cbrtof02: IModuleDefine = {
    nome: 'Raiz cúbica de 2',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.259921
  }
  
  export const Cbrtof03: IModuleDefine = {
    nome: 'Raiz cúbica de 3',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.587401
  }
  
  export const Cbrtof04: IModuleDefine = {
    nome: 'Raiz cúbica de 4',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.999999
  }
  
  export const Cbrtof05: IModuleDefine = {
    nome: 'Raiz cúbica de 5',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.236067
  }
  
  export const Cbrtof06: IModuleDefine = {
    nome: 'Raiz cúbica de 6',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.581988
  }
  
  export const Cbrtof07: IModuleDefine = {
    nome: 'Raiz cúbica de 7',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.912931
  }
  
  export const Cbrtof08: IModuleDefine = {
    nome: 'Raiz cúbica de 8',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.262495
  }
  
  export const Cbrtof09: IModuleDefine = {
    nome: 'Raiz cúbica de 9',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.624499
  }
  
  export const Cbrtof10: IModuleDefine = {
    nome: 'Raiz cúbica de 10',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.999999
  }
  
  export const Coulomb: IModuleDefine = {
    nome: 'Coulomb',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.60e-19
  }
  
  export const Euler: IModuleDefine = {
    nome: 'Euler',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.718281
  }
  
  export const Logarithm2: IModuleDefine = {
    nome: 'Logaritmo de 2',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.693147
  }
  
  export const Logarithm2E: IModuleDefine = {
    nome: 'Logaritmo de 2 na base E',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.442695
  }
  
  export const Logarithm10: IModuleDefine = {
    nome: 'Logaritmo de 10',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.302585
  }
  
  export const Logarithm10E: IModuleDefine = {
    nome: 'Logaritmo de 10 na base E',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.434294
  }
  
  export const MaxValue: IModuleDefine = {
    nome: 'Valor máximo',
    tipo: 'constante',
    ativo: false,
    assinatura: 999999
  }
  
  export const MinValue: IModuleDefine = {
    nome: 'Valor mínimo',
    tipo: 'constante',
    ativo: false,
    assinatura: -999999
  }
  
  export const Newton: IModuleDefine = {
    nome: 'Newton',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.693147
  }
  
  export const Pi: IModuleDefine = {
    nome: 'Pi',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.141592
  }
  
  export const Planck: IModuleDefine = {
    nome: 'Planck',
    tipo: 'constante',
    ativo: false,
    assinatura: 6.626e-34
  }
  
  export const Sqrtof01b02: IModuleDefine = {
    nome: 'Raiz quadrada de 1/2',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.793700
  }
  
  export const Sqrtof01b04: IModuleDefine = {
    nome: 'Raiz quadrada de 1/4',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.629960
  }
  
  export const Sqrtof01b06: IModuleDefine = {
    nome: 'Raiz quadrada de 1/6',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.550321
  }
  
  export const Sqrtof01b08: IModuleDefine = {
    nome: 'Raiz quadrada de 1/8',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.500000
  }
  
  export const Sqrtof01: IModuleDefine = {
    nome: 'Raiz quadrada de 1',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.000000
  }
  
  export const Sqrtof02: IModuleDefine = {
    nome: 'Raiz quadrada de 2',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.414213
  }
  
  export const Sqrtof03: IModuleDefine = {
    nome: 'Raiz quadrada de 3',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.732050
  }
  
  export const Sqrtof04: IModuleDefine = {
    nome: 'Raiz quadrada de 4',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.000000
  }
  
  export const Sqrtof05: IModuleDefine = {
    nome: 'Raiz quadrada de 5',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.236067
  }
  
  export const Sqrtof06: IModuleDefine = {
    nome: 'Raiz quadrada de 6',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.449489
  }
  
  export const Sqrtof07: IModuleDefine = {
    nome: 'Raiz quadrada de 7',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.645751
  }
  
  export const Sqrtof08: IModuleDefine = {
    nome: 'Raiz quadrada de 8',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.828427
  }
  
  export const Sqrtof09: IModuleDefine = {
    nome: 'Raiz quadrada de 9',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.000000
  }
  
  export const Sqrtof10: IModuleDefine = {
    nome: 'Raiz quadrada de 10',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.162277
  }
  
  export const Tesla: IModuleDefine = {
    nome: 'Tesla',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.602e-19
  }
  
  export const Zero: IModuleDefine = {
    nome: 'Zero',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.000000
  }

  // Métodos
  export const absoluto: IModuleDefine = {
    nome: 'Absoluto',
    tipo: 'método',
    ativo: false,
    assinatura: Absoluto
  }

  export const soma: IModuleDefine = {
    nome: 'Soma',
    tipo: 'método',
    ativo: false,
    assinatura: Soma
  }

  export const subtracao: IModuleDefine = {
    nome: 'Subtração',
    tipo: 'método',
    ativo: false,
    assinatura: Subtracao
  }

  export const multiplicacao: IModuleDefine = {
    nome: 'Multiplicação',
    tipo: 'método',
    ativo: false,
    assinatura: Multiplicacao
  }

  export const divisao: IModuleDefine = {
    nome: 'Divisão',
    tipo: 'método',
    ativo: false,
    assinatura: Divisao
  }

  export const resto: IModuleDefine = {
    nome: 'Resto',
    tipo: 'método',
    ativo: false,
    assinatura: Resto
  }

  export const potencia: IModuleDefine = {
    nome: 'Potência',
    tipo: 'método',
    ativo: false,
    assinatura: Potencia
  }

  export const potenciaMais1: IModuleDefine = {
    nome: 'Potência mais 1',
    tipo: 'método',
    ativo: false,
    assinatura: PotenciaMais1
  }

  export const potenciaMenos1: IModuleDefine = {
    nome: 'Potência menos 1',
    tipo: 'método',
    ativo: false,
    assinatura: PotenciaMenos1
  }

  export const potenciaDePotencia: IModuleDefine = {
    nome: 'Potência de potência',
    tipo: 'método',
    ativo: false,
    assinatura: PotenciaDePotencia
  }

  export const potenciaDePotenciaMais1: IModuleDefine = {
    nome: 'Potência de potência mais 1',
    tipo: 'método',
    ativo: false,
    assinatura: PotenciaDePotenciaMais1
  }

  export const potenciaDePotenciaMenos1: IModuleDefine = {
    nome: 'Potência de potência menos 1',
    tipo: 'método',
    ativo: false,
    assinatura: PotenciaDePotenciaMenos1
  }

  export const porcentagem: IModuleDefine = {
    nome: 'Porcentagem',
    tipo: 'método',
    ativo: false,
    assinatura: Porcentagem
  }

  export const porcentagemPor1000: IModuleDefine = {
    nome: 'Porcentagem por 1000',
    tipo: 'método',
    ativo: false,
    assinatura: PorcentagemPor1000
  }

  export const porcentagemPor10000: IModuleDefine = {
    nome: 'Porcentagem por 10000',
    tipo: 'método',
    ativo: false,
    assinatura: PorcentagemPor10000
  }

  export const porcentagemPor100000: IModuleDefine = {
    nome: 'Porcentagem por 100000',
    tipo: 'método',
    ativo: false,
    assinatura: PorcentagemPor100000
  }

  export const raizQuadrada: IModuleDefine = {
    nome: 'Raiz quadrada',
    tipo: 'método',
    ativo: false,
    assinatura: RaizQuadrada
  }

  export const raizBiquadrada: IModuleDefine = {
    nome: 'Raiz Biquadrada',
    tipo: 'método',
    ativo: false,
    assinatura: RaizBiquadrada
  }

  export const raizCubica: IModuleDefine = {
    nome: 'Raiz cúbica',
    tipo: 'método',
    ativo: false,
    assinatura: RaizCubica
  }

  export const raizBicubica: IModuleDefine = {
    nome: 'Raiz Bicúbica',
    tipo: 'método',
    ativo: false,
    assinatura: RaizBicubica
  }

  export const raizQuarta: IModuleDefine = {
    nome: 'Raiz quarta',
    tipo: 'método',
    ativo: false,
    assinatura: RaizQuarta
  }

  export const raizQuinta: IModuleDefine = {
    nome: 'Raiz quinta',
    tipo: 'método',
    ativo: false,
    assinatura: RaizQuinta
  }

  export const raizSexta: IModuleDefine = {
    nome: 'Raiz sexta',
    tipo: 'método',
    ativo: false,
    assinatura: RaizSexta
  }

  export const raizSetima: IModuleDefine = {
    nome: 'Raiz sétima',
    tipo: 'método',
    ativo: false,
    assinatura: RaizSetima
  }

  export const raizOitava: IModuleDefine = {
    nome: 'Raiz oitava',
    tipo: 'método',
    ativo: false,
    assinatura: RaizOitava
  }

  export const raizNona: IModuleDefine = {
    nome: 'Raiz nona',
    tipo: 'método',
    ativo: false,
    assinatura: RaizNona
  }

  export const raizDecima: IModuleDefine = {
    nome: 'Raiz décima',
    tipo: 'método',
    ativo: false,
    assinatura: RaizDecima
  }

}

namespace FuncTransition {}
