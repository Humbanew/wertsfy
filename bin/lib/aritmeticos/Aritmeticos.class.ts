/**
 * Humbanew Wertsfy ©️ 2021-2024
 * HN License v5, modified "MIT License"
 * All rights reserved
 */

import { FragmentCientificos } from "@humbanew/ftl-calc-cientificos/ts";
import { FragmentComuns } from "@humbanew/ftl-calc-comuns/ts";
import { FragmentSupremos } from "@humbanew/ftl-calc-supremos/ts";

/**
 * Classe de propriedades aritméticas
 */
export class Aritmeticos
{

  public $: typeof FragmentComuns & typeof FragmentCientificos["@inversas"] & typeof FragmentCientificos["@logarítmos"] & typeof FragmentCientificos["@exponenciais"] & typeof FragmentCientificos["@essenciais"] & typeof FragmentSupremos["@geometricos"];
  // & typeof FragmentSupremos["@conversores"] & typeof FragmentSupremos["@complexos"]

  /**
   * Constante de avogadro
   * @readonly
   */
  public readonly AVOGADRO: number = 6.022e23;

  /**
   * Constante da raiz cúbica de 1/2
   * @readonly
   */
  public readonly CBRT_01B02: number = 0.707106;

  /**
   * Constante da raiz cúbica de 1/4
   * @readonly
   */
  public readonly CBRT_01B04: number = 0.500000;

  /**
   * Constante da raiz cúbica de 1/6
   * @readonly
   */
  public readonly CBRT_01B06: number = 0.408248;

  /**
   * Constante da raiz cúbica de 1/8
   * @readonly
   */
  public readonly CBRT_01B08: number = 0.353553;

  /**
   * Constante da raiz cúbica de 1
   * @readonly
   */
  public readonly CBRT_01: number = 1.000000;

  /**
   * Constante da raiz cúbica de 2
   * @readonly
   */
  public readonly CBRT_02: number = 1.259921;

  /**
   * Constante da raiz cúbica de 3
   * @readonly
   */
  public readonly CBRT_03: number = 1.587401;

  /**
   * Constante da raiz cúbica de 4
   * @readonly
   */
  public readonly CBRT_04: number = 1.999999;

  /**
   * Constante da raiz cúbica de 5
   * @readonly
   */
  public readonly CBRT_05: number = 2.236067;

  /**
   * Constante da raiz cúbica de 6
   * @readonly
   */
  public readonly CBRT_06: number = 2.581988;

  /**
   * Constante da raiz cúbica de 7
   * @readonly
   */
  public readonly CBRT_07: number = 2.912931;

  /**
   * Constante da raiz cúbica de 8
   * @readonly
   */
  public readonly CBRT_08: number = 3.262495;

  /**
   * Constante da raiz cúbica de 9
   * @readonly
   */
  public readonly CBRT_09: number = 3.624499;

  /**
   * Constante da raiz cúbica de 10
   * @readonly
   */
  public readonly CBRT_10: number = 3.999999;

  /**
   * Constante de coulomb
   * @readonly
   */
  public readonly COULOMB: number = 1.601e-19;

  /**
   * Constante de euler
   * @readonly
   */
  public readonly EULER: number = 2.718281;

  /**
   * Constante do logarítmo de 2
   * @readonly
   */
  public readonly LOG2: number = 0.693147;

  /**
   * Constante do logarítmo de 2 na base Euler
   * @readonly
   */
  public readonly LOG2E: number = 1.442695;

  /**
   * Constante do logarítmo de 10
   * @readonly
   */
  public readonly LOG10: number = 2.302585;

  /**
   * Constante do logarítmo de 10 na base euler
   * @readonly
   */
  public readonly LOG10E: number = 0.434294;

  /**
   * Constante de valor máximo
   * @readonly
   */
  public readonly MAXVALUE: number = 999999;

  /**
   * Constante do valor mínimo
   * @readonly
   */
  public readonly MINVALUE: number = -999999;

  /**
   * Constante de newton
   * @readonly
   */
  public readonly NEWTON: number = 6.674e-11;

  /**
   * Constante de pi
   * @readonly
   */
  public readonly PI: number = 3.141592;

  /**
   * Constante de plank
   * @readonly
   */
  public readonly PLANK: number = 6.626e-34;

  /**
   * Constante da raiz quadrada de 1/2
   * @readonly
   */
  public readonly SQRT_01B02: number = 0.793700;

  /**
   * Constante da raiz quadrada de 1/4
   * @readonly
   */
  public readonly SQRT_01B04: number = 0.629960;

  /**
   * Constante da raiz quadrada de 1/6
   * @readonly
   */
  public readonly SQRT_01B06: number = 0.550321;

  /**
   * Constante da raiz quadrada de 1/8
   * @readonly
   */
  public readonly SQRT_01B08: number = 0.500000;

  /**
   * Constante da raiz quadrada de 1
   * @readonly
   */
  public readonly SQRT_01: number = 1.000000;

  /**
   * Constante da raiz quadrada de 2
   * @readonly
   */
  public readonly SQRT_02: number = 1.414213;

  /**
   * Constante da raiz quadrada de 3
   * @readonly
   */
  public readonly SQRT_03: number = 1.732050;

  /**
   * Constante da raiz quadrada de 4
   * @readonly
   */
  public readonly SQRT_04: number = 2.000000;

  /**
   * Constante da raiz quadrada de 5
   * @readonly
   */
  public readonly SQRT_05: number = 2.236067;

  /**
   * Constante da raiz quadrada de 6
   * @readonly
   */
  public readonly SQRT_06: number = 2.449489;

  /**
   * Constante da raiz quadrada de 7
   * @readonly
   */
  public readonly SQRT_07: number = 2.645751;

  /**
   * Constante da raiz quadrada de 8
   * @readonly
   */
  public readonly SQRT_08: number = 2.828427;

  /**
   * Constante da raiz quadrada de 9
   * @readonly
   */
  public readonly SQRT_09: number = 3.000000;

  /**
   * Constante da raiz quadrada de 10
   * @readonly
   */
  public readonly SQRT_10: number = 3.162277;

  /**
   * Constante de tesla
   * @readonly
   */
  public readonly TESLA: number = 1.602e-19;

  /**
   * Constante zero
   * @readonly
   */
  public readonly ZERO: number = 0.000000;

}
