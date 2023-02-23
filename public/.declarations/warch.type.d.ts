export declare namespace WMathOperation {

  export interface common {

    formats: "plus" | "minus" | "divisor" | "multip" | "power"

  }

  export interface advanced {

    formats: "sqrt" | "cbrt" | "quart" | "quirt" | "sexrt" | "seprt" | "octrt" | "nonrt" | "decrt" | "sin" | "cos" | "tan" | "sec" | "cosec" | "cotan" | "sinh" | "cosh" | "tanh" | "sech" | "cosech" | "cotanh" | "arcsin" | "arccos" | "arctan" | "arcsec" | "arccosec" | "arccotan" | "arcsinh" | "arccosh" | "arctanh" | "arcsech" | "arccosech" | "arccotanh" | "exp" | "expm1" | "expp1" | "logx" | "logxm1" | "logxp1" | "log2" | "log2m1" | "log2p1" | "log10" | "log10m1" | "log10p1" | "ln" | "lnm1" | "lnp1" | "cologx" | "cologxm1" | "cologxp1" | "colog2" | "colog2m1" | "colog2p1" | "colog10" | "colog10m1" | "colog10p1" | "coln" | "colnm1" | "colnp1" | "antilogx" | "antilogxm1" | "antilogxp1" | "antilog2" | "antilog2m1" | "antilog2p1" | "antilog10" | "antilog10m1" | "antilog10p1" | "antiln" | "antilnm1" | "antilnp1"

  }

  export namespace expressions {

    interface TrianguloPitagoras {

      formats: [
        "classic(a and b)",
        {
          a: number,
          b: number
        }
      ]
      |
      [
        "t1(m and n)",
        {
          m: number,
          n: number
        }
      ]
      |
      [
        "t2(a and n)",
        {
          a: number,
          n: number
        }
      ]
      |
      [
        "t3(b, c and h)",
        {
          b: number,
          c: number,
          h: number
        }
      ]

    }

    interface OperacoesClassicas {

      formats: "plus" | "minus" | "divisor" | "multip"

    }

    interface NumerosComplexos {

      formats: "plus" | "minus" | 'divisor' | "multip" | "power"

    }

    interface Porcentagem {

      formats: [
        "10E2",
        {
          value: number
        }
      ]
      |
      [
        "10E3",
        {
          value: number
        }
      ]
      |
      [
        "10E4",
        {
          value: number
        }
      ]
      |
      [
        "10E5",
        {
          value: number
        }
      ]
      |
      [
        "AnyNumber",
        {
          value: number,
          valueTotal: number
        }
      ]

    }

    interface FuncoesCartesianas {

      formats: "grade1" | "grade2" | "grade3" | "grade4" | "grade5" | "grade6" | "grade7" | "grade8"

    }

    interface Determinante {

      formats: [
        "d2x2",
        {
          a00: number,
          a01: number,
          a10: number,
          a11: number
        }
      ]
      |
      [
        "d3x3",
        {
          a00: number,
          a01: number,
          a02: number,
          a10: number,
          a11: number,
          a12: number,
          a20: number,
          a21: number,
          a22: number
        }
      ]

    }

    interface VariaveisDePascal {

      formats: "forca1Null" | "forca2Null" | "area1Null" | "area2Null"

    }

    interface VariaveisDeTemperatura {

      formats: "celsiusFahrenheit" | "celsiusKelvin" | "fahrenheitCelsius" | "fahrenheitKelvin" | "kelvinCelsius" | "kelvinFahrenheit"

    }

    interface VariaveisDeTitulacao {

      formats: "massaBaseNull" | "massaAcidoNull" | "volumeBaseNull" | "volumeAcidoNull"

    }

    interface OperacoesVetores {

      formats: [
        "distanciaVetorEntreDoisPontosR2",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number
        }
      ] 
      |
      [
        "distanciaVetorEntreDoisPontosR3",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number,
          z1: number,
          z2: number
        }
      ]
      |
      [
        "moduloR2",
        {
          x: number,
          y: number
        }
      ]
      |
      [
        "moduloR3",
        {
          x: number,
          y: number,
          z: number
        }
      ]
      |
      [
        "versorR2",
        {
          x: number,
          y: number
        }
      ]
      |
      [
        "versorR3",
        {
          x: number,
          y: number,
          z: number
        }
      ]
      |
      [
        "projecaoVetorSobreOutroVetorR2",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number
        }
      ]
      |
      [
        "projecaoVetorSobreOutroVetorR3",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number,
          z1: number,
          z2: number
        }
      ]
      |
      [
        "somaR2",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number
        }
      ]
      |
      [
        "somaR3",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number,
          z1: number,
          z2: number
        }
      ]
      |
      [
        "subtracaoR2",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number
        }
      ]
      |
      [
        "subtracaoR3",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number,
          z1: number,
          z2: number
        }
      ]
      |
      [
        "produtoEscalarR2",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number
        }
      ]
      |
      [
        "produtoEscalarR3",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number,
          z1: number,
          z2: number
        }
      ]
      |
      [
        "divisaoR2",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number
        }
      ]
      |
      [
        "divisaoR3",
        {
          x1: number,
          x2: number,
          y1: number,
          y2: number,
          z1: number,
          z2: number
        }
      ]
      |
      [
        "pontoMedioR2",
        {
          x: number,
          y: number
        }
      ]
      |
      [
        "pontoMedioR3",
        {
          x: number,
          y: number,
          z: number
        }
      ]
      |
      [
        "cossenosDiretoresR2",
        {
          x: number,
          y: number
        }
      ]
      |
      [
        "cossenosDiretoresR3",
        {
          x: number,
          y: number,
          z: number
        }
      ]

    }

  }

} 

/** @emits Not Implemented */
declare namespace WKarzokOperation { }

/** @emits Not Implemented */
declare namespace WSpectralsTerminalOperation { }

/** @emits Not Implemented */
declare namespace WLydrocOperation { }


// export var WTCMathCommon: WMathOperation.common;
// export var WTCMathAdvanced: WMathOperation.advanced;
// export var WTCMathTrianguloPitagoras: WMathOperation.expressions.TrianguloPitagoras;
// export var WTCMathOperacoesClassicas: WMathOperation.expressions.OperacoesClassicas;