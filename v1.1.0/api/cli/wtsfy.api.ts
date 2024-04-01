abstract class Calculator {

  typer: string;
  memory_slots: Array<number>;

  constructor(typer: "dflut"|"scien"|"expcd", memorySlots: number) {
    this.typer = typer;
    this.memory_slots = new Array(memorySlots);
  }

};

export let wtsfy = { 

  // depois colocar em uma arquitetura de pastas
  Aritmeticos: class Aritmeticos {

    soma(x: number, y: number): number { return x + y; }
    subtracao(x: number, y: number): number { return x - y; }
    multiplicacao(x: number, y: number): number { return x * y; }
    divisao(x: number, y: number): number { return x / y; }
    potenciacao(x: number, y: number): number { return x ** y; }
    raizQuadrada(x: number): number { return x ** 1/2; }
    raizCubica(x: number): number { return x ** 1/3; }
    resto(x: number, y: number): number { return x % y; }

  }

};
