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
        b: number
    ): number {
        return a**b;
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

}
