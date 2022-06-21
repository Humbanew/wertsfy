declare interface Basicas { 
 
  soma: ( n1: number, n2: number ) => number;
  
  subtracao: ( n1: number, n2: number ) => number;
  
  multiplicacao: ( n1: number, n2: number ) => number;
  
  divisao: ( n1: number, n2: number ) => number;
  
  potencia: ( n1: number, n2: number ) => number;

  potencia2: ( n1: number ) => number;

  potencia3: ( n1: number ) => number;
  
  potenciaDePotencia: ( n1: number, n2: number, n3: number[] ) => number;

}