import Aritmeticos from "../Aritmeticos.class";
import { Logaritmos } from "./Logaritmos.class";

export abstract class Antilogaritmos extends Logaritmos {
  /**
   * Módulo do Antilogaritmo na Base 2 mais 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base 2.
   */
  public antilogaritmo_base_2_mais_1(x: number): number {
    return 1 ** this.logaritmo_base(2, x + 1);
  }

  /**
   * Módulo do Antilogaritmo na Base 2 menos 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base 2.
   */
  public antilogaritmo_base_2_menos_1(x: number): number {
    return 1 ** this.logaritmo_base(2, x - 1);
  }

  /**
   * Módulo do Antilogaritmo na Base 2
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base
   */
  public antilogaritmo_base_2(x: number): number {
    return 1 ** this.logaritmo_base(2, x);
  }

  /**
   * Módulo do Antilogaritmo na Base 10 mais 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base 2.
   */
  public antilogaritmo_base_10_mais_1(x: number): number {
    return 1 ** this.logaritmo_base(10, x + 1);
  }

  /**
   * Módulo do Antilogaritmo na Base 10 menos 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base 2.
   */
  public antilogaritmo_base_10_menos_1(x: number): number {
    return 1 ** this.logaritmo_base(10, x - 1);
  }

  /**
   * Módulo do Antilogaritmo na Base 10
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base
   */
  public antilogaritmo_base_10(x: number): number {
    return 1 ** this.logaritmo_base(10, x);
  }

  /**
   * Módulo do Antilogaritmo na Base Natural mais 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base 2.
   */
  public antilogaritmo_base_natural_mais_1(x: number): number {
    return 1 ** this.logaritmo_base(Aritmeticos.prototype.EULER, x + 1);
  }

  /**
   * Módulo do Antilogaritmo na Base Natural menos 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base 2.
   */
  public antilogaritmo_base_natural_menos_1(x: number): number {
    return 1 ** this.logaritmo_base(Aritmeticos.prototype.EULER, x - 1);
  }

  /**
   * Módulo do Antilogaritmo na Base Natural
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base
   */
  public antilogaritmo_base_natural(x: number): number {
    return 1 ** this.logaritmo_base(Aritmeticos.prototype.EULER, x);
  }

  /**
   * Módulo do Antilogaritmo na Base Qualquer mais 1
   * @param base valor real da base logaritmica
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base selecionada.
   */
  public antilogaritmo_base_qualquer_mais_1(base: number, x: number): number {
    return 1 ** this.logaritmo_base(base, x + 1);
  }

  /**
   * Módulo do Antilogaritmo na Base Qualquer menos 1
   * @param base valor real da base logaritmica
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base selecionada.
   */
  public antilogaritmo_base_qualquer_menos_1(base: number, x: number): number {
    return 1 ** this.logaritmo_base(base, x + 1);
  }

  /**
   * Módulo do Antilogaritmo na Base Qualquer
   * @param base valor real da base logaritmica
   * @param x valor real do logaritimando.
   * @returns retorna o valor do antilogaritmo encontrado com a base selecionada.
   */
  public antilogaritmo_base_qualquer(base: number, x: number): number {
    return 1 ** this.logaritmo_base(base, x + 1);
  }
}
