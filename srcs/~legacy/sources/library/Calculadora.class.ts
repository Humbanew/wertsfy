/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */
import Aritmeticos from "./Aritmeticos.class";

type TTamMemoria = 2|3|4;
type TCasasDecimais = 2|4|6|8|10;
type TModo = 'base'|'cientifica'|'conversor'|'programador'|'especialista';

export default class Calculadora extends Aritmeticos {

  protected modo_atual: TModo = 'base';
  protected slots_memoria: number[];
  protected casas_decimais: TCasasDecimais;

  protected modulos = {
    constantes: {
      lista: [
        {
          nome: 'avogadro',
          categoria: 'cientifica',
          ativo: false,
          componente: 
            this.AVOGADRO
        },
        {
          nome: 'cbrt_01b02',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_01B02
        },
        {
          nome: 'cbrt_01b04',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_01B04
        },
        {
          nome: 'cbrt_01b06',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_01B06
        },
        {
          nome: 'cbrt_01b08',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_01B08
        },
        {
          nome: 'cbrt_01',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_01
        },
        {
          nome: 'cbrt_02',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_02
        },
        {
          nome: 'cbrt_03',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_03
        },
        {
          nome: 'cbrt_04',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_04
        },
        {
          nome: 'cbrt_05',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_05
        },
        {
          nome: 'cbrt_06',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_06
        },
        {
          nome: 'cbrt_07',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_07
        },
        {
          nome: 'cbrt_08',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_08
        },
        {
          nome: 'cbrt_09',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_09
        },
        {
          nome: 'cbrt_10',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.CBRT_10
        },
        {
          nome: 'coulomb',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.COULOMB
        },
        {
          nome: 'euler',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.EULER
        },
        {
          nome: 'log2',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.LOG2
        },
        {
          nome: 'log2e',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.LOG2E
        },
        {
          nome: 'log10',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.LOG10
        },
        {
          nome: 'log10e',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.LOG10E
        },
        {
          nome: 'maxvalue',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.MAXVALUE
        },
        {
          nome: 'minvalue',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.MINVALUE
        },
        {
          nome: 'newton',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.NEWTON
        },
        {
          nome: 'pi',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.PI
        },
        {
          nome: 'plank',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.PLANK
        },
        {
          nome: 'sqrt_01b02',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_01B02
        },
        {
          nome: 'sqrt_01b04',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_01B04
        },
        {
          nome: 'sqrt_01b06',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_01B06
        },
        {
          nome: 'sqrt_01b08',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_01B08
        },
        {
          nome: 'sqrt_01',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_01
        },
        {
          nome: 'sqrt_02',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_02
        },
        {
          nome: 'sqrt_03',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_03
        },
        {
          nome: 'sqrt_04',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_04
        },
        {
          nome: 'sqrt_05',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_05
        },
        {
          nome: 'sqrt_06',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_06
        },
        {
          nome: 'sqrt_07',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_07
        },
        {
          nome: 'sqrt_08',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_08
        },
        {
          nome: 'sqrt_09',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_09
        },
        {
          nome: 'sqrt_10',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.SQRT_10
        },
        {
          nome: 'tesla',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.TESLA
        },
        {
          nome: 'zero',
          categoria: 'cientifica',
          ativo: false,
          componente:
            this.ZERO
        }
      ]
    },
    metodos: {
      lista: [
        {
          nome: 'soma',
          categoria: 'base',
          ativo: false,
          componente: 
            this.soma
        },
        {
          nome: 'subtração',
          categoria: 'base',
          ativo: false,
          componente: 
            this.subtracao
        },
        {
          nome: 'multiplicação',
          categoria: 'base',
          ativo: false,
          componente: 
            this.multiplicacao
        },
        {
          nome: 'divisão',
          categoria: 'base',
          ativo: false,
          componente: 
            this.divisao
        },
        {
          nome: 'resto',
          categoria: 'base',
          ativo: false,
          componente: 
            this.resto
        },
        {
          nome: 'potência',
          categoria: 'base',
          ativo: false,
          componente:
            this.potencia
        },
        {
          nome: 'potência de potência',
          categoria: 'base',
          ativo: false,
          componente:
            this.potencia_de_potencia
        },
        {
          nome: 'raiz quadrada',
          categoria: 'base',
          ativo: false,
          componente:
            this.raiz_quadrada
        },
        {
          nome: 'raiz cúbica',
          categoria: 'base',
          ativo: false,
          componente:
            this.raiz_cubica
        },
        {
          nome: 'raiz enésima',
          categoria: 'base',
          ativo: false,
          componente:
            this.raiz_enesima
        },
        {
          nome: 'absoluto',
          categoria: 'base',
          ativo: false,
          componente:
            this.absoluto
        }
      ]
    },
  }

  // por padrão sempre habilitará as 10 funções elementares, 
  // soma, subtração, multiplicação, divisão, resto, variacoes de potencia e raizes.
  public constructor(memoria: TTamMemoria, num_casas_decimais: TCasasDecimais) {
    super();
    this.slots_memoria.length = memoria;
    this.casas_decimais = num_casas_decimais;
    for(let j=0; j < this.modulos.constantes.lista.length; j++) {
      if(this.modulos.constantes.lista[j].categoria == 'base') {
        this.modulos.constantes.lista[j].ativo = true;
      }
    }
    for(let i=0; i < 10; i++) {
      this.modulos.metodos.lista[i].ativo = true;
    }
  }

  private CTemplate = class CalculadoraEmBranco {}
  private set modoAtivo(modo: TModo) { this.modo_atual = modo; }
  private get modoAtivo(): string { return this.modo_atual; }

}
