import Aritmeticos from "../Aritmeticos.class";

export abstract class Geometricos {
  /**
   * Módulo da Área do Quadrado
   * @param l valor real do lado.
   * @returns retorna o valor da área do quadrado.
   */
  public area_quadrado(l: number): number {
    return l ** 2;
  }

  /**
   * Módulo da Área do Retângulo
   * @param l valor real da largura.
   * @param c valor real do comprimento.
   * @returns retorna o valor da área do retângulo.
   */
  public area_retangulo(l: number, c: number): number {
    return l * c;
  }

  /**
   * Módulo da Área da Circunferência
   * @param r valor do raio da circunferência.
   * @returns retorna o valor da área da circunferência.
   */
  public area_circunferencia(r: number): number {
    return 2 * Aritmeticos.prototype.PI * r;
  }

  /**
   * Módulo da Área do Círculo
   * @param r valor do raio do círculo.
   * @returns retorna o valor da área do círculo.
   */
  public area_circulo(r: number): number {
    return Aritmeticos.prototype.PI * r ** 2;
  }

  /**
   * Módulo da Área do Triângulo
   * @param b valor real da base.
   * @param h valor real da altura.
   * @returns retorna o valor da área do triângulo.
   */
  public area_triangulo(b: number, h: number) {
    return (b * h) / 2;
  }

  /**
   * Módulo da Área do Triângulo Equilátero
   * @param l valor real do lado.
   * @returns retorna o valor da área do triângulo equilátero.
   */
  public area_triangulo_equilatero(l: number) {
    return (l ** 2 * Aritmeticos.prototype.SQRT_03) / 4;
  }

  /**
   * Módulo do Apótema do Triângulo Equilátero
   * @param l valor real do lado.
   * @returns retorna o valor do apótema do triângulo equilátero.
   */
  public apotema_triangulo_equilatero(l: number) {
    return (l * Aritmeticos.prototype.SQRT_03) / 2;
  }

  /**
   * Módulo da Área da Esfera
   * @param r valor real do raio.
   * @returns retorna o valor da área da esfera.
   */
  public area_esfera(r: number): number {
    return (4 * Aritmeticos.prototype.PI * r ** 2) / 2;
  }

  /**
   * Módulo do Volume da Esfera
   * @param r valor real do raio.
   * @returns retorna o valor do volume da esfera.
   */
  public volume_esfera(r: number): number {
    return (4 * Aritmeticos.prototype.PI * r ** 3) / 3;
  }

  /**
   * Módulo do Volume do Cubo
   * @param l valor real do lado.
   * @returns retorna o valor do volume do cubo.
   */
  public volume_cubo(l: number): number {
    return l ** 3;
  }

  /**
   * Módulo do Volume do Paralelepípedo
   * @param l valor real da largura.
   * @param h valor real da altura.
   * @param c valor real do comprimento.
   * @returns retorna o valor do volume do paralelepípedo.
   */
  public volume_paralelepipedo(l: number, h: number, c: number): number {
    return l * h * c;
  }

  /**
   * Módulo da Área do Losango
   * @param D valor real da diagonal maior.
   * @param d valor real da diagonal menor.
   * @returns retorna o valor da área do losango.
   */
  public area_lozango(D: number, d: number): number {
    return (D * d) / 2;
  }

  /**
   * Módulo da Área do Trapézio
   * @param B valor real da base maior.
   * @param b valor real da base menor.
   * @param h valor real da altura.
   * @returns retorna o valor da área do trapézio.
   */
  public area_trapezio(B: number, b: number, h: number): number {
    return ((B + b) * h) / 2;
  }

  /**
   * Módulo da Área do Cilindro
   * @param r valor real do raio.
   * @param h valor real da altura.
   * @returns retorna o valor da área do cilindro.
   */ 
  public area_cilindro(r: number, h: number): number {
    return (2 * Aritmeticos.prototype.PI * r * h) + this.area_circulo(r);
  };

  /**
   * Módulo do Volume do Cone e/ou da Pirâmide
   * @param b valor real da base.
   * @param h valor real da altura.
   * @returns retorna o valor do volume do cone e/ou pirâmide.
   */
  public cone_piramide(b: number, h: number): number {
    return (b * h) / 3;
  };

  /**
   * Módulo do Polígono Regular Enésimo
   * @param n valor real da quantidade de lados.
   * @param l valor real do lado.
   * @returns retorna o valor da área do polígono regular.
   */
  public poligono_enesimo(n: number, l: number): number {
    return n * this.area_triangulo_equilatero(l);
  };
  
  // métodos em estudo de implementação
  private superficie_poligonal(): null { return null };
  private prisma_base_triangular(): null { return null };
  private prisma_base_quadrangular(): null { return null };
  private prisma_base_poligono_enesimo(): null { return null };
  private piramide_base_triangular(): null { return null };
  private piramide_base_quadrangular(): null { return null };
  private piramide_base_poligono_enesimo(): null { return null };
  private tronco_cone(): null { return null };
  private tronco_piramide(): null { return null };
  private tronco_piramide_base_triangular(): null { return null };
  private tronco_piramide_base_quadrangular(): null { return null };
  private tronco_piramide_base_poligono_enesimo(): null { return null };
}
