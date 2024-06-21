/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */

import { Cientificos } from "./cubes/Cientificos.class";
import { Comuns } from "./cubes/Comuns.class";
import { Supremos } from "./cubes/Supremos.class";
import { IModules } from "./cubes/modulesDeclares";

export default class Aritmeticos implements IModules {
  public comuns: Comuns;
  public cientificos: Cientificos;
  public supremos: Supremos;

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
  public CBRT_01B04: number = 0.500000;

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

};
