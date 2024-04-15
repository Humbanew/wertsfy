/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 *  
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

import { Absoluto } from '../components/aritmeticos/comuns/absoluto';
import { Divisao } from '../components/aritmeticos/comuns/divisao';
import { Multiplicacao } from '../components/aritmeticos/comuns/multiplicacao';
import { Soma } from '../components/aritmeticos/comuns/soma';
import { Subtracao } from '../components/aritmeticos/comuns/subtracao';

type TAbsoluto = typeof Absoluto;

export namespace NFAritmeticos {

  // Aritmeticos
  export const Avogadro = {
    nome: 'Avogadro',
    tipo: 'constante',
    ativo: false,
    assinatura: 6.022e23
  }
  
  export const Cbrtof01b02 = {
    nome: 'Raiz Cúbica de 1/2',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.707106
  }
  
  export const Cbrtof01b04 = {
    nome: 'Raiz Cúbica de 1/4',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.500000
  }
  
  export const Cbrtof01b06 = {
    nome: 'Raiz Cúbica de 1/6',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.408248
  }
  
  export const Cbrtof01b08 = {
    nome: 'Raiz Cúbica de 1/8',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.353553
  }
  
  export const Cbrtof01 = {
    nome: 'Raiz Cúbica de 1',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.000000
  }
  
  export const Cbrtof02 = {
    nome: 'Raiz Cúbica de 2',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.259921
  }
  
  export const Cbrtof03 = {
    nome: 'Raiz Cúbica de 3',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.587401
  }
  
  export const Cbrtof04 = {
    nome: 'Raiz Cúbica de 4',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.999999
  }
  
  export const Cbrtof05 = {
    nome: 'Raiz Cúbica de 5',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.236067
  }
  
  export const Cbrtof06 = {
    nome: 'Raiz Cúbica de 6',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.581988
  }
  
  export const Cbrtof07 = {
    nome: 'Raiz Cúbica de 7',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.912931
  }
  
  export const Cbrtof08 = {
    nome: 'Raiz Cúbica de 8',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.262495
  }
  
  export const Cbrtof09 = {
    nome: 'Raiz Cúbica de 9',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.624499
  }
  
  export const Cbrtof10 = {
    nome: 'Raiz Cúbica de 10',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.999999
  }
  
  export const Coulomb = {
    nome: 'Coulomb',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.60e-19
  }
  
  export const Euler = {
    nome: 'Euler',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.718281
  }
  
  export const Logarithm2 = {
    nome: 'Logaritmo de 2',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.693147
  }
  
  export const Logarithm2E = {
    nome: 'Logaritmo de 2 na base E',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.442695
  }
  
  export const Logarithm10 = {
    nome: 'Logaritmo de 10',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.302585
  }
  
  export const Logarithm10E = {
    nome: 'Logaritmo de 10 na base E',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.434294
  }
  
  export const MaxValue = {
    nome: 'Valor Máximo',
    tipo: 'constante',
    ativo: false,
    assinatura: 999999
  }
  
  export const MinValue = {
    nome: 'Valor Mínimo',
    tipo: 'constante',
    ativo: false,
    assinatura: -999999
  }
  
  export const Newton = {
    nome: 'Newton',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.693147
  }
  
  export const Pi = {
    nome: 'Pi',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.141592
  }
  
  export const Planck = {
    nome: 'Planck',
    tipo: 'constante',
    ativo: false,
    assinatura: 6.626e-34
  }
  
  export const Sqrtof01b02 = {
    nome: 'Raiz Quadrada de 1/2',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.793700
  }
  
  export const Sqrtof01b04 = {
    nome: 'Raiz Quadrada de 1/4',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.629960
  }
  
  export const Sqrtof01b06 = {
    nome: 'Raiz Quadrada de 1/6',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.550321
  }
  
  export const Sqrtof01b08 = {
    nome: 'Raiz Quadrada de 1/8',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.500000
  }
  
  export const Sqrtof01 = {
    nome: 'Raiz Quadrada de 1',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.000000
  }
  
  export const Sqrtof02 = {
    nome: 'Raiz Quadrada de 2',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.414213
  }
  
  export const Sqrtof03 = {
    nome: 'Raiz Quadrada de 3',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.732050
  }
  
  export const Sqrtof04 = {
    nome: 'Raiz Quadrada de 4',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.000000
  }
  
  export const Sqrtof05 = {
    nome: 'Raiz Quadrada de 5',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.236067
  }
  
  export const Sqrtof06 = {
    nome: 'Raiz Quadrada de 6',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.449489
  }
  
  export const Sqrtof07 = {
    nome: 'Raiz Quadrada de 7',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.645751
  }
  
  export const Sqrtof08 = {
    nome: 'Raiz Quadrada de 8',
    tipo: 'constante',
    ativo: false,
    assinatura: 2.828427
  }
  
  export const Sqrtof09 = {
    nome: 'Raiz Quadrada de 9',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.000000
  }
  
  export const Sqrtof10 = {
    nome: 'Raiz Quadrada de 10',
    tipo: 'constante',
    ativo: false,
    assinatura: 3.162277
  }
  
  export const Tesla = {
    nome: 'Tesla',
    tipo: 'constante',
    ativo: false,
    assinatura: 1.602e-19
  }
  
  export const Zero = {
    nome: 'Zero',
    tipo: 'constante',
    ativo: false,
    assinatura: 0.000000
  }

  // Métodos
  export const absoluto = {
    nome: 'Absoluto',
    tipo: 'método',
    ativo: false,
    assinatura: Absoluto
  }

  export const soma = {
    nome: 'Soma',
    tipo: 'método',
    ativo: false,
    assinatura: Soma
  }

  export const subtracao = {
    nome: 'Subtração',
    tipo: 'método',
    ativo: false,
    assinatura: Subtracao
  }

  export const multiplicacao = {
    nome: 'Multiplicação',
    tipo: 'método',
    ativo: false,
    assinatura: Multiplicacao
  }

  export const divisao = {
    nome: 'Divisão',
    tipo: 'método',
    ativo: false,
    assinatura: Divisao
  }

}
