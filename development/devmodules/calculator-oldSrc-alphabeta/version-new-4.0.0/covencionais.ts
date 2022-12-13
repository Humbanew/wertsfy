import { WMath } from "wertsfy";

class Covencionais {

  /** @description realiza soma entre os números. */
  public funcao_soma(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }
 
  /** @description realiza subtração entre os números. */
  public funcao_subtracao(numero1: number, numero2: number): number {
    return numero1 - numero2;
  }

  /** @description realiza multiplicação entre os números. */
  public funcao_multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
  }

  /** @description realiza divisão entre os números. */
  public funcao_divisao(numero1: number, numero2: number): number {
    return numero1 / numero2;
  }

  /** @description realiza o cálculo do resto de uma divisão. */
  public funcao_resto(numero1: number, numero2: number): number {
    return numero1 % numero2;
  }

  /** @description realiza o cálculo da potência de um número. */
  public funcao_potencia(numero1: number, numero2: number): number {
    return WMath.pow(numero1, numero2);
  }

  /** @description realiza o cálculo da potência de potência de um número. */
  public funcao_potencia_de_potencia(numero1: number, numero2: number, numero3: number[]): number {
    return WMath.powOfPow(numero1, numero2, numero3);
  }

  /** @description realiza o cálculo da raiz quadrada de um número. */
  public funcao_raiz_quadrada(numero: number): number {
    return WMath.sqrt(numero);
  }

  /** @description realiza o cálculo da raiz cúbica de um número. */
  public funcao_raiz_cubica(numero: number): number {
    return WMath.cbrt(numero);
  }

} export var covencionais = new Covencionais();
