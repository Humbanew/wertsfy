export default class Aritmeticos {

  public soma(
    a: number, 
    b: number
  ): number {
    return a+b;
  }

  public subtracao(
    a: number, 
    b: number
  ): number {
    return a-b;
  }

  public multiplicacao(
    a: number, 
    b: number
  ): number {
    return a*b;
  }

  public divisao(
    a: number, 
    b: number
  ): number {
    return a/b;
  }

  public resto(
    a: number, 
    b: number
  ): number {
    return a%b;
  }

  public potencia(
    a: number, 
    b: number,
    M1?: boolean,
    m1?: boolean
  ): number {
    if(M1 == true) return (a**b)+1;
    if(m1 == true) return (a**b)-1;
    return a**b;
  }

  public potencia_de_potencia(
    a: number=1,
    b: number[],
    M1?: boolean,
    m1?: boolean
  ): number {
    let i: number=0, r: number=0;
    while(i < b.length) {
      if(M1 == true) r = (a**b[i])+1; i++;
      if(m1 == true) r = (a**b[i])-1; i++;
      r = a**b[i]; i++;
    }
    return r;
  }

  public raiz_quadrada(
    a: number
  ): number {
    return a**(1/2);
  }

  public raiz_cubica(
    a: number
  ): number {
    return a**(1/3);
  }

  public raiz_enesima(
    a: number, 
    n: number
  ): number {
    return a**(1/n);
  }
}
