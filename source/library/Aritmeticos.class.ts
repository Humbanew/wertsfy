export default class Aritmeticos {

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

  // possiveis novos modulos base
  protected porcentagem() {}
  protected porcentagem1000() {}
  protected porcentagem10000() {}
  protected porcentagem100000() {}
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
