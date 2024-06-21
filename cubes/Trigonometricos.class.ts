import Aritmeticos from "../Aritmeticos.class";

export abstract class Trigonometricos {
  /**
   * Módulo do Seno
   * @param x valor real numérico.
   * @returns retorna o valor do seno da entrada submetida.
   */
  public seno(x: number): number {
    return ((2 * Aritmeticos.prototype.PI * 1) / 4 / 90) * x;
  }

  /**
   * Módulo do Cosseno
   * @param x valor real numérico.
   * @returns retorna o valor do cosseno da entrada submetida.
   */
  public cosseno(x: number): number {
    return -1 * (((2 * Aritmeticos.prototype.PI * 1) / 4 / 90) * x);
  }

  /**
   * Módulo da Tangente
   * @param x valor real numérico.
   * @returns retorna o valor da tangente da entrada submetida.
   */
  public tangente(x: number): number {
    return this.seno(x) / this.cosseno(x);
  }

  /**
   * Módulo da Secante
   * @param x valor real numérico.
   * @returns retorna o valor da secante da entrada submetida.
   */
  public secante(x: number): number {
    return 1 / this.cosseno(x);
  }

  /**
   * Módulo da Cosecante
   * @param x valor real numérico.
   * @returns retorna o valor da cosecante da entrada submetida.
   */
  public cosecante(x: number): number {
    return 1 / this.seno(x);
  }

  /**
   * Módulo da Cotangente
   * @param x valor real numérico.
   * @returns retorna o valor da cotangente da entrada submetida.
   */
  public cotangente(x: number): number {
    return 1 / this.tangente(x);
  }

  /**
   * Módulo do Seno Hiperbólico
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public seno_hiperbolico = undefined;

  /**
   * Módulo do Seno Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public seno_inverso = undefined;

  /**
   * Módulo do Seno Hiperbólico Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public seno_hiperbolico_inverso = undefined;

  /**
   * Módulo do Cosseno Hiperbólico
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public cosseno_hiperbolico = undefined;

  /**
   * Módulo do Cosseno Inverso
   * | *Ainda em construção*
   * @returns `undefined` 
   */
  public cosseno_inverso = undefined;

  /**
   * Módulo do Cosseno Hiperbólico Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public cosseno_hiperbolico_inverso = undefined;

  /**
   * Módulo da Tangente Hiperbólica
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public tangente_hiperbolica = undefined;

  /**
   * Módulo da Tangente Inversa
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public tangente_inversa = undefined;

  /**
   * Módulo da Tangente Hiperbólica Inversa
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public tangente_hiperbolica_inversa = undefined;

  /**
   * Módulo da Secante Hiperbólica
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public secante_hiperbolica = undefined;

  /**
   * Módulo da Secante Inversa
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public secante_inversa = undefined;

  /**
   * Módulo da Secante Hiperbólica Inversa
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public secante_hiperbolica_inversa = undefined;

  /**
   * Módulo da Cosecante Hiperbólica
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public cosecante_hiperbolica = undefined;
  
  /**
   * Módulo da Cosecante Inversa
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public cosecante_inversa = undefined;
  
  /**
   * Módulo da Cosecante Hiperbólica Inversa
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public cosecante_hiperbolica_inversa = undefined;
  
  /**
   * Módulo da Cotangente Hiperbólica
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public cotangente_hiperbolica = undefined;
  
  /**
   * Módulo da Cotangente Inversa
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public cotangente_inversa = undefined;
  
  /**
   * Módulo da Cotangente Hiperbólica Inversa
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public cotangente_hiperbolica_inversa = undefined;
}
