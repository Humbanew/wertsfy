/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */

export default class Aritmeticos {

  /**
   * Módulo da Constante de Avogadro
   */
  public AVOGADRO: number = 6.022e23;

  /**
   * Módulo da Constante da Raiz Cúbica de 1/2
   */
  public CBRT_01B02: number = 0.707106;

  /**
   * Módulo da Constante da Raiz Cúbica de 1/4
   */
  public CBRT_O1B04: number = 0.500000;

  /**
   * Módulo da Constante da Raiz Cúbica de 1/6
   */
  public CBRT_01B06: number = 0.408248;

  /**
   * Módulo da Constante da Raiz Cúbica de 1/8
   */
  public CBRT_01B08: number = 0.353553;

  /**
   * Módulo da Constante da Raiz Cúbica de 1
   */
  public CBRT_01: number = 1.000000;

  /**
   * Módulo da Constante da Raiz Cúbica de 2
   */
  public CBRT_02: number = 1.259921;

  /**
   * Módulo da Constante da Raiz Cúbica de 3
   */
  public CBRT_03: number = 1.587401;

  /**
   * Módulo da Constante da Raiz Cúbica de 4
   */
  public CBRT_04: number = 1.999999;

  /**
   * Módulo da Constante da Raiz Cúbica de 5
   */
  public CBRT_05: number = 2.236067;

  /**
   * Módulo da Constante da Raiz Cúbica de 6
   */
  public CBRT_06: number = 2.581988;

  /**
   * Módulo da Constante da Raiz Cúbica de 7
   */
  public CBRT_07: number = 2.912931;

  /**
   * Módulo da Constante da Raiz Cúbica de 8
   */
  public CBRT_08: number = 3.262495;

  /**
   * Módulo da Constante da Raiz Cúbica de 9
   */
  public CBRT_09: number = 3.624499;

  /**
   * Módulo da Constante da Raiz Cúbica de 10
   */
  public CBRT_10: number = 3.999999;

  /**
   * Módulo da Constante de Coulomb
   */
  public COULOMB: number = 1.601e-19;

  /**
   * Módulo da Constante de Euler
   */
  public EULER: number = 2.718281;

  /**
   * Módulo da Constante do Logarítmo de 2
   */
  public LOG2: number = 0.693147;

  /**
   * Módulo da Constante do Logarítmo de 2 na base Euler
   */
  public LOG2E: number = 1.442695;

  /**
   * Módulo da Constante do Logarítmo de 10
   */
  public LOG10: number = 2.302585;

  /**
   * Módulo da Constante do Logarítmo de 10 na base Euler
   */
  public LOG10E: number = 0.434294;

  /**
   * Módulo da Constante de Valor Máximo
   */
  public MAXVALUE: number = 999999;

  /**
   * Módulo da Constante do Valor Mínimo
   */
  public MINVALUE: number = -999999;

  /**
   * Módulo da Constante de Newton
   */
  public NEWTON: number = 6.674e-11;

  /**
   * Módulo da Constante de Pi
   */
  public PI: number = 3.141592;

  /**
   * Módulo da Constante de Plank
   */
  public PLANK: number = 6.626e-34;

  /**
   * Módulo da Constante da Raiz Quadrada de 1/2
   */
  public SQRT_01B02: number = 0.793700;

  /**
   * Módulo da Constante da Raiz Quadrada de 1/4
   */
  public SQRT_01B04: number = 0.629960;

  /**
   * Módulo da Constante da Raiz Quadrada de 1/6
   */
  public SQRT_01B06: number = 0.550321;

  /**
   * Módulo da Constante da Raiz Quadrada de 1/8
   */
  public SQRT_01B08: number = 0.500000;

  /**
   * Módulo da Constante da Raiz Quadrada de 1
   */
  public SQRT_01: number = 1.000000;

  /**
   * Módulo da Constante da Raiz Quadrada de 2
   */
  public SQRT_02: number = 1.414213;

  /**
   * Módulo da Constante da Raiz Quadrada de 3
   */
  public SQRT_03: number = 1.732050;

  /**
   * Módulo da Constante da Raiz Quadrada de 4
   */
  public SQRT_04: number = 2.000000;

  /**
   * Módulo da Constante da Raiz Quadrada de 5
   */
  public SQRT_05: number = 2.236067;

  /**
   * Módulo da Constante da Raiz Quadrada de 6
   */
  public SQRT_06: number = 2.449489;

  /**
   * Módulo da Constante da Raiz Quadrada de 7
   */
  public SQRT_07: number = 2.645751;

  /**
   * Módulo da Constante da Raiz Quadrada de 8
   */
  public SQRT_08: number = 2.828427;

  /**
   * Módulo da Constante da Raiz Quadrada de 9
   */
  public SQRT_09: number = 3.000000;

  /**
   * Módulo da Constante da Raiz Quadrada de 10
   */
  public SQRT_10: number = 3.162277;

  /**
   * Módulo da Constante de Tesla
   */
  public TESLA: number = 1.602e-19;

  /**
   * Módulo da Constante Zero
   */
  public ZERO: number = 0.000000;

  /**
   * Módulo de Soma Numérica
   * @param a valor 1
   * @param b valor 2
   * @returns o valor da soma de dois números inteiros ou decimais.
   */
  public soma(
    a: number, 
    b: number
  ): number {
    return a+b;
  }

  /**
   * Módulo de Subtração Numérica
   * @param a valor 1
   * @param b valor 2
   * @returns o valor da subtração de dois números inteiros ou decimais.
   */
  public subtracao(
    a: number, 
    b: number
  ): number {
    return a-b;
  }

  /**
   * Módulo de Multiplicação Numérica
   * @param a valor 1
   * @param b valor 2
   * @returns o valor da multiplicação de dois números inteiros ou decimais.
   */
  public multiplicacao(
    a: number, 
    b: number
  ): number {
    return a*b;
  }

  /**
   * Módulo de Divisão Numérica
   * @param a valor 1
   * @param b valor 2
   * @returns o valor da divisão de dois números inteiros ou decimais.
   */
  public divisao(
    a: number, 
    b: number
  ): number {
    return a/b;
  }

  /**
   * Módulo do Resto Numérico
   * @param a valor 1
   * @param b valor 2
   * @returns o valor do resto de dois números inteiros ou decimais.
   */
  public resto(
    a: number, 
    b: number
  ): number {
    return a%b;
  }

  /**
   * Módulo da Potência Numérica
   * @param a valor 1 - base
   * @param b valor 2 - expoente
   * @param M1 habilita a potência usando mais 1 no resultado
   * @param m1 habilita a potência usando menos 1 no resultado
   * @returns retorna o valor da potência de um número.
   * @see Não usar ``m1`` e ``M1`` ao mesmo tempo, retornará um erro caso ocorra.
   */
  public potencia(
    a: number, 
    b: number,
    M1?: boolean,
    m1?: boolean
  ): number {
    if(M1 == true && m1 == true) 
      throw new Error('Não é possível habilitar ambos ao mesmo tempo [M1] e [m1]');
    if(M1 == true) return (a**b)+1;
    if(m1 == true) return (a**b)-1;
    return a**b;
  }

  /**
   * Módulo da Potência de Potência Numérica
   * @param a valor 1 - base
   * @param b valor 2 - sequência de expoentes
   * @param M1 habilita a potência usando mais 1 no resultado
   * @param m1 habilita a potência usando menos 1 no resultado
   * @returns retorna o valor da potência de um número.
   * @see Não usar ``m1`` e ``M1`` ao mesmo tempo, retornará um erro caso ocorra.
   */
  public potencia_de_potencia(
    a: number=1,
    b: number[],
    M1?: boolean,
    m1?: boolean
  ): number {
    let i: number=0, r: number=0;
    while(i < b.length) {
      if(M1 == true && m1 == true) 
        throw new Error('Não é possível habilitar ambos ao mesmo tempo [M1] e [m1]');  
      if(M1 == true) r = (a**b[i])+1; i++;
      if(m1 == true) r = (a**b[i])-1; i++;
      r = a**b[i]; i++;
    }
    return r;
  }

  /**
   * Módulo da Raiz Quadrada Numérica
   * @param a valor
   * @returns retorna o valor da raiz quadrada numérica.
   */
  public raiz_quadrada(
    a: number
  ): number {
    return a**(1/2);
  }

  /**
   * Módulo da Raiz Cúbica Numérica
   * @param a valor
   * @returns retorna o valor da raiz cúbica numérica.
   */
  public raiz_cubica(
    a: number
  ): number {
    return a**(1/3);
  }

  /**
   * Módulo da Raiz Enésima Numérica
   * @param a valor
   * @param n valor do índice da raiz
   * @returns retorna o valor da raiz enésima numérica.
   */
  public raiz_enesima(
    a: number, 
    n: number
  ): number {
    return a**(1/n);
  }

  /**
   * Módulo do Valor Absoluto Numérico
   * @param x valor
   * @returns retorna o valor absoluto.
   */
  public absoluto(
    x: number
  ): number {
    return x < 0 ? -1 * x : x;
  }

  // classe da versao de 2020 dos aritmeticos
  private Aritmeticos2020 = class Aritmeticos2020 {
    /**
     * módulos presentes nessa época:
     * - arcocosecante
     * - arcocosecante hiperbolica
     * - arcocosseno
     * - arcocosseno hiperbolico
     * - arcocotangente
     * - arcocotangente hiperbolica
     * - arcosecante
     * - arcosecante hiperbolica
     * - arcoseno
     * - arcoseno hiperbolico
     * - arcotangente
     * - arcotangente hiperbolica
     * - cosecante
     * - cosecante hiperbolica
     * - cosseno
     * - cosseno hiperbolico
     * - cotangente
     * - cotangente hiperbolica
     * - divisao
     * - divisao decimal
     * - exponencial
     * - exponencial decimal
     * - logaritmo
     * - logaritmo decimal
     * - logaritmo base 2
     * - logaritmo base 2 decimal
     * - logaritmo base 10
     * - logaritmo base 10 decimal
     * - media aritmetica
     * - media aritmetica decimal
     * - multiplicacao
     * - multiplicacao decimal
     * - potenciacao
     * - potenciacao decimal
     * - potenciacao por 2
     * - potenciacao por 2 decimal
     * - potenciacao por 10
     * - potenciacao por 10 decimal
     * - potencia de potencia 
     * - potencia de potencia decimal
     * - radiciacao por 2
     * - radiciacao por 2 decimal
     * - radiciacao por 3
     * - radiciacao por 3 decimal
     * - secante
     * - secante hiperbolica
     * - seno
     * - seno hiperbolico
     * - soma
     * - soma decimal
     * - subtracao
     * - subtracao decimal
     * - tangente
     * - tangente hiperbolica
     */
  }

}
