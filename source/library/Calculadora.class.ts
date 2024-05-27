import Aritmeticos from "./Aritmeticos.class";

export default class Calculadora {

  protected slots_memoria: number[];

  protected modulos = {
    lista: [
      {
        nome: 'soma',
        categoria: 'base',
        ativo: false,
        componente: 
          Aritmeticos.prototype.soma
      },
      {
        nome: 'subtração',
        categoria: 'base',
        ativo: false,
        componente: 
          Aritmeticos.prototype.subtracao
      },
      {
        nome: 'multiplicação',
        categoria: 'base',
        ativo: false,
        componente: 
          Aritmeticos.prototype.multiplicacao
      },
      {
        nome: 'divisão',
        categoria: 'base',
        ativo: false,
        componente: 
          Aritmeticos.prototype.divisao
      },
      {
        nome: 'resto',
        categoria: 'base',
        ativo: false,
        componente: 
          Aritmeticos.prototype.resto
      },
      {
        nome: 'potência',
        categoria: 'base',
        ativo: false,
        componente:
          Aritmeticos.prototype.potencia
      },
      {
        nome: 'potência de potência',
        categoria: 'base',
        ativo: false,
        componente:
          Aritmeticos.prototype.potencia_de_potencia
      },
      {
        nome: 'raiz quadrada',
        categoria: 'base',
        ativo: false,
        componente:
          Aritmeticos.prototype.raiz_quadrada
      },
      {
        nome: 'raiz cúbica',
        categoria: 'base',
        ativo: false,
        componente:
          Aritmeticos.prototype.raiz_cubica
      },
      {
        nome: 'raiz enésima',
        categoria: 'base',
        ativo: false,
        componente:
          Aritmeticos.prototype.raiz_enesima
      }
    ]
  }

  // por padrão sempre habilitará as 10 funções elementares, 
  // soma, subtração, multiplicação, divisão, resto, variacoes de potencia e raizes.
  public constructor(memoria: number) {
    this.slots_memoria.length = memoria;
    for(let i=0; i < 10; i++) {
      this.modulos.lista[i].ativo = true;
    }
  }

}
