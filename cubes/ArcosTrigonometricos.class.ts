import { Trigonometricos } from "./Trigonometricos.class";

export abstract class ArcosTrigonometricos extends Trigonometricos {
  /**
   * Módulo do Arco Seno
   * @param x valor real numérico.
   * @returns retorna o valor do arco seno entre 0 e 1.
   */
  public arco_seno(x: number): number {
    return 1 / this.seno(x);
  }

  /**
   * Módulo do Arco Cosseno
   * @param x valor real numérico.
   * @returns retorna o valor do arco cosseno entre 0 e 1.
   */
  public arco_cosseno(x: number): number {
    return 1 / this.cosseno(x);
  }

  /**
   * Módulo do Arco Tangente
   * @param x valor real numérico.
   * @returns retorna o valor do arco tangente entre 0 e 1.
   */
  public arco_tangente(x: number): number {
    return 1 / this.tangente(x);
  }

  /**
   * Módulo do Arco Secante
   * @param x valor real numérico.
   * @returns retorna o valor do arco secante entre 0 e 1.
   */
  public arco_secante(x: number): number {
    return 1 / this.secante(x);
  }

  /**
   * Módulo do Arco Cosecante
   * @param x valor real numérico.
   * @returns retorna o valor do arco cosecante entre 0 e 1.
   */
  public arco_cosecante(x: number): number {
    return 1 / this.cosecante(x);
  }

  /**
   * Módulo do Arco Cotangente
   * @param x valor real numérico.
   * @returns retorna o valor do arco cotangente entre 0 e 1.
   */
  public arco_cotangente(x: number): number {
    return 1 / this.cotangente(x);
  }

  /**
   * Módulo do Arco Seno Hiperbólico
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_seno_hiperbolico = undefined;

  /**
   * Módulo do Arco Seno Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_seno_inverso = undefined;

  /**
   * Módulo do Arco Seno Hiperbólico Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_seno_hiperbolico_inverso = undefined;
  
  /**
   * Módulo do Arco Cosseno Hiperbólico
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_cosseno_hiperbolico = undefined;

  /**
   * Módulo do Arco Cosseno Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_cosseno_inverso = undefined;

  /**
   * Módulo do Arco Cosseno Hiperbólico Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_cosseno_hiperbolico_inverso = undefined;

  /**
   * Módulo do Arco Tangente Hiperbólico
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_tangente_hiperbolico = undefined;

  /**
   * Módulo do Arco Tangente Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_tangente_inverso = undefined;

  /**
   * Módulo do Arco Tangente Hiperbólico Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_tangente_hiperbolico_inverso = undefined;

  /**
   * Módulo do Arco Secante Hiperbólico
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_secante_hiperbolico = undefined;

  /**
   * Módulo do Arco Secante Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_secante_inverso = undefined;

  /**
   * Módulo do Arco Secante Hiperbólico Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_secante_hiperbolico_inverso = undefined;

  /**
   * Módulo do Arco Cosecante Hiperbólico
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_cosecante_hiperbolico = undefined;

  /**
   * Módulo do Arco Cosecante Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_cosecante_inverso = undefined;

  /**
   * Módulo do Arco Cosecante Hiperbólico Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_cosecante_hiperbolico_inverso = undefined;

  /**
   * Módulo do Arco Cotangente Hiperbólico
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_cotangente_hiperbolico = undefined;

  /**
   * Módulo do Arco Cotangente Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_cotangente_inverso = undefined;

  /**
   * Módulo do Arco Cotangente Hiperbólico Inverso
   * | *Ainda em construção*
   * @returns `undefined`
   */
  public arco_cotangente_hiperbolico_inverso = undefined;
}
