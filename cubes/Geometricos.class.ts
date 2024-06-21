import Aritmeticos from "../Aritmeticos.class";

export abstract class Geometricos {
  /**
   * Módulo da Área do Quadrado
   * @param x valor real do lado.
   * @returns retorna o valor da área do quadrado.
   */
  public quadrado(x: number): number {
    return x ** 2;
  }

  /**
   * Módulo da Área do Retângulo
   * @param x valor real da largura.
   * @param y valor real do comprimento.
   * @returns retorna o valor da área do retângulo.
   */
  public retangulo(x: number, y: number): number {
    return x * y;
  }

  /**
   * Módulo da Área da Circunferência
   * @param x valor do raio da circunferência.
   * @returns retorna o valor da área da circunferência.
   */
  public circunferencia(x: number): number {
    return 2 * Aritmeticos.prototype.PI * x;
  }

  /**
   * Módulo da Área do Círculo
   * @param x valor do raio do círculo.
   * @returns retorna o valor da área do círculo.
   */
  public circulo(x: number): number {
    return Aritmeticos.prototype.PI * x ** 2;
  }

  /**
   * Módulo da Área do Triângulo
   * @param x valor real da base.
   * @param y valor real da altura.
   * @returns retorna o valor da área do triângulo.
   */
  public triangulo(x: number, y: number) {
    return (x * y) / 2;
  }

  /**
   * Módulo da Área do Triângulo Equilátero
   * @param x valor real do lado.
   * @returns retorna o valor da área do triângulo equilátero.
   */
  public triangulo_equilatero(x: number) {
    return (x ** 2 * Aritmeticos.prototype.SQRT_03) / 4;
  }

  /**
   * Módulo do Apótema do Triângulo Equilátero
   * @param x valor real do lado.
   * @returns retorna o valor do apótema do triângulo equilátero.
   */
  public apotema_triangulo_equilatero(x: number) {
    return (x * Aritmeticos.prototype.SQRT_03) / 2;
  }

  /**
   * Módulo da Área da Esfera
   * @param x valor real do raio.
   * @returns retorna o valor da área da esfera.
   */
  public esfera(x: number): number {
    return (4 * Aritmeticos.prototype.PI * x ** 2) / 2;
  }

  /**
   * Módulo do Volume da Esfera
   * @param x valor real do raio.
   * @returns retorna o valor do volume da esfera.
   */
  public esfera_volume(x: number): number {
    return (4 * Aritmeticos.prototype.PI * x ** 3) / 3;
  }

  /**
   * Módulo do Volume do Cubo
   * @param x valor real do lado.
   * @returns retorna o valor do volume do cubo.
   */
  public cubo(x: number): number {
    return x ** 3;
  }

  /**
   * Módulo do Volume do Paralelepípedo
   * @param x valor real da largura.
   * @param y valor real da altura.
   * @param z valor real do comprimento.
   * @returns retorna o valor do volume do paralelepípedo.
   */
  public paralelepipedo(x: number, y: number, z: number): number {
    return x * y * z;
  }

  /**
   * Módulo da Área do Losango
   * @param x valor real da diagonal maior.
   * @param y valor real da diagonal menor.
   * @returns retorna o valor da área do losango.
   */
  public lozango(x: number, y: number): number {
    return (x * y) / 2;
  }

  /**
   * Módulo da Área do Trapézio
   * @param x valor real da base maior.
   * @param y valor real da base menor.
   * @param z valor real da altura.
   * @returns retorna o valor da área do trapézio.
   */
  public trapezio(x: number, y: number, z: number): number {
    return ((x + y) * z) / 2;
  }

  protected cilindro(){};
  protected cone_piramide(){};
  protected superficie_poligonal(){};
  protected poligono_enesimo(){};
  protected prisma_base_triangular(){};
  protected prisma_base_quadrangular(){};
  protected prisma_base_poligono_enesimo(){};
  protected piramide_base_triangular(){};
  protected piramide_base_quadrangular(){};
  protected piramide_base_poligono_enesimo(){};
  protected tronco_cone(){};
  protected tronco_piramide(){};
  protected tronco_piramide_base_triangular(){};
  protected tronco_piramide_base_quadrangular(){};
  protected tronco_piramide_base_poligono_enesimo(){};
}
