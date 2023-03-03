export declare namespace WertsfyPrototipos {

  export namespace Logicos { 

    export interface TComuns {

      formatos(modelo: "#plus" | "#minus" | "#divisor" | "#multip" | "#power"): string;
  
    }

    export interface TAvancados {

      formatos(modelo: "#sqrt" | "#cbrt" | "#quart" | "#quirt" | "#sexrt" | "#seprt" | "#octrt" | "#nonrt" | "#decrt" | "#sin" | "#cos" | "#tan" | "#sec" | "#cosec" | "#cotan" | "#sinh" | "#cosh" | "#tanh" | "#sech" | "#cosech" | "#cotanh" | "#arcsin" | "#arccos" | "#arctan" | "#arcsec" | "#arccosec" | "#arccotan" | "#arcsinh" | "#arccosh" | "#arctanh" | "#arcsech" | "#arccosech" | "#arccotanh" | "#exp" | "#expm1" | "#expp1" | "#logx" | "#logxm1" | "#logxp1" | "#log2" | "#log2m1" | "#log2p1" | "#log10" | "#log10m1" | "#log10p1" | "#ln" | "#lnm1" | "#lnp1" | "#cologx" | "#cologxm1" | "#cologxp1" | "#colog2" | "#colog2m1" | "#colog2p1" | "#colog10" | "#colog10m1" | "#colog10p1" | "#coln" | "#colnm1" | "#colnp1" | "#antilogx" | "#antilogxm1" | "#antilogxp1" | "#antilog2" | "#antilog2m1" | "#antilog2p1" | "#antilog10" | "#antilog10m1" | "#antilog10p1" | "#antiln" | "#antilnm1" | "#antilnp1"): string;

    }

    export interface TExpressoes {
      
      determinantes(modelo: [ "#d2x2", { a00: number, a01: number, a10: number, a11: number }]|[ "#d3x3", { a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number }]): string;

      funcoesCartesianas(modelo: "#grade1" | "#grade2" | "#grade3" | "#grade4" | "#grade5" | "#grade6" | "#grade7" | "#grade8"): string;
      
      operacoesComuns(modelo: "#plus" | "#minus" | "#divisor" | "#multip"): string;
      
      porcentagem(modelo: [ "#10E2", { value: number }]|[ "#10E3", { value: number }]|[ "#10E4", { value: number }]|[ "#10E5", { value: number }]|[ "#AnyNumber", { value: number, valueTotal: number }]): string;
      
      triangulosPitagoricos(modelo: [ "#classic(a and b)", { a: number, b: number }]|[ "#t1(m and n)", { m: number, n: number }]|[ "#t2(a and n)", { a: number, n: number }]|[ "#t3(b, c and h)", { b: number, c: number, h: number }]): string;

      variaveisDePascal(modelo: "#forca1Null" | "#forca2Null" | "#area1Null" | "#area2Null"): string;

      variaveisDeTemperatura(modelo: "#celsiusFahrenheit" | "#celsiusKelvin" | "#fahrenheitCelsius" | "#fahrenheitKelvin" | "#kelvinCelsius" | "#kelvinFahrenheit"): string;

      variaveisDeTitulacao(modelo: "#massaBaseNull" | "#massaAcidoNull" | "#volumeBaseNull" | "#volumeAcidoNull"): string;

      // bagunçado, organizar.
      operacoesVetores(modelo: [
        "distanciaVetorEntreDoisPontos",
        [
          "r2",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number
          }
        ]
        |
        [
          "r3",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number,
            z1: number,
            z2: number
          }
        ]
      ]
      |
      [
        "modulo",
        [
          "r2",
          {
            x: number,
            y: number
          }
        ]
        |
        [
          "r3",
          {
            x: number,
            y: number,
            z: number
          }
        ]
      ]
      |
      [
        "versor",
        [
          "r2",
          {
            x: number,
            y: number
          }
        ]
        |
        [
          "r3",
          {
            x: number,
            y: number,
            z: number
          }
        ]
      ]
      |
      [
        "projecaoVetorSobreOutroVetor",
        [
          "r2",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number
          }
        ]
        |
        [
          "r3",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number,
            z1: number,
            z2: number
          }
        ]
      ]
      |
      [
        "soma",
        [
          "r2",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number
          }
        ]
        |
        [
          "r3",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number,
            z1: number,
            z2: number
          }
        ]
      ]
      |
      [
        "subtracao",
        [
          "r2",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number
          }
        ]
        |
        [
          "r3",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number,
            z1: number,
            z2: number
          }
        ]
      ]
      |
      [
        "produtoEscalar",
        [
          "r2",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number
          }
        ]
        |
        [
          "r3",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number,
            z1: number,
            z2: number
          }
        ]
      ]
      |
      [
        "divisao",
        [
          "r2",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number
          }
        ]
        |
        [
          "r3",
          {
            x1: number,
            x2: number,
            y1: number,
            y2: number,
            z1: number,
            z2: number
          }
        ]
      ]
      |
      [
        "pontoMedio",
        [
          "r2",
          {
            x: number,
            y: number
          }
        ]
        |
        [
          "r3",
          {
            x: number,
            y: number,
            z: number
          }
        ]
      ]
      |
      [
        "cossenosDiretores",
        [
          "r2",
          {
            x: number,
            y: number
          }
        ]
        |
        [
          "r3",
          {
            x: number,
            y: number
          }
        ]
      ]): string;

    }
   
    /** @deprecated No use this. @description Behind Module */
    class WMCalcConv { readonly conversores = 0; }

  }

  export namespace Karzok { }

}

// bagunçado, organizar. [ Código Legado 'warch.type.d.ts' ]
interface OperacoesDiversos {

  formats: [
    "escalaGeografica",
    {
      tamanhoReal: number,
      tamanhoFicticio: number
    }
  ]
  |
  [
    "idh",
    {
      saude: number,
      educacao: number,
      renda: number,
      populacao: number,
      rpc: number
    }
  ]
  |
  [
    "gini",
    {
      pnb: number,
      populacao: number
    }
  ]
  |
  [
    "imc",
    {
      peso: number,
      altura: number
    }
  ]
  |
  [
    "densidadePopulacional",
    {
      espaco: number,
      populacao: number
    }
  ]

}

interface OperacoesNumericos {

  formats: [
    "numerosPares",
    {
      numero: number
    }
  ]
  |
  [
    "numerosImpares",
    {
      numero: number
    }
  ]
  |
  [
    "numerosPrimos",
    {
      numerosPesquisados: number
    }
  ]
  |
  [
    "conjuntos",
    {
      elementos: number
    }
  ]

}

interface OperacoesDiagramaVenn {

  formats: [
    "venn2Grupos",
    {
      numerosGrupoUmNucleo: number[],
      numerosGrupoDoisNucleos: number
    }
  ]
  |
  [
    "venn3Grupos",
    {
      numerosGrupoUmNucleo: number[],
      numerosGrupoDoisNucleos: number[],
      numerosGrupoTresNucleos: number
    }
  ]
  |
  [
    "venn4Grupos",
    {
      numerosGrupoUmNucleo: number[],
      numerosGrupoDoisNucleos: number[],
      numerosGrupoTresNucleos: number[],
      numerosGrupoQuatroNucleos: number
    }
  ]

}

interface OperacoesGeometricos {

  formats: [
    "areaTrianguloQualquer",
    {
      lado: number
    }
  ]
  |
  [
    "apotemaTrianguloQualquer",
    {
      lado: number
    }
  ]
  |
  [
    "areaQuadradoQualquer",
    {
      lado: number
    }
  ]
  |
  [
    "areaRetanguloQualquer",
    {
      comprimento: number,
      largura: number
    }
  ]
  |
  [
    "areaCirculoQualquer",
    {
      raio: number
    }
  ]
  |
  [
    "areaElipseQualquer",
    {
      raio: number,
      altura: number
    }
  ]
  |
  [
    "areaPiramideQualquer",
    {
      base: number,
      altura: number
    }
  ]
  |
  [
    "areaConeQualquer",
    {
      raio: number,
      altura: number
    }
  ]
  |
  [
    "areaCilindroQualquer",
    {
      raio: number,
      altura: number
    }
  ]
  |
  [
    "areaTrapezioQualquer",
    {
      baseMaior: number,
      baseMenor: number,
      altura: number
    }
  ]
  |
  [
    "areaLozangoQualquer",
    {
      diagonalMaior: number,
      diagonalMenor: number
    }
  ]
  |
  [
    "areaEsferaQualquer",
    {
      raio: number
    }
  ]
  |
  [
    "areaSuperficieQualquer",
    {
      comprimento: number,
      largura: number
    }
  ]
  |
  [
    "volumeSuperficieQualquer",
    {
      area: number,
      comprimento: number,
      largura: number
    }
  ]
  |
  [
    "areaPoligonoQualquer",
    {
      comprimento: number,
      largura: number,
      nLados: number
    }
  ]
  |
  [
    "volumePoligonoFormatoLozangoQualquer",
    {
      diagonalMaior: number,
      diagonalMenor: number,
      altura: number
    }
  ]
  |
  [
    "volumePoligonoFormatoTrapezioQualquer",
    {
      baseMaior: number,
      baseMenor: number,
      altura: number
    }
  ]
  |
  [
    "areaParalelogramoQualquer",
    {
      lado: number,
      altura: number
    }
  ]
  |
  [
    "areaLateralPrismaQualquer",
    {
      comprimento: number,
      largura: number,
      nLados: number
    }
  ]
  |
  [
    "volumePrismaQualquer",
    {
      area: number,
      comprimento: number,
      largura: number
    }
  ]
  |
  [
    "volumeCuboQualquer",
    {
      aresta: number
    }
  ]
  |
  [
    "volumeParalelogramoQualquer",
    {
      comprimento: number,
      largura: number,
      altura: number
    }
  ]
  |
  [
    "volumePiramideQualquer",
    {
      base: number,
      altura: number
    }
  ]
  |
  [
    "volumeTetraedroQualquer",
    {
      aresta: number
    }
  ]
  |
  [
    "volumeHexaedroQualquer",
    {
      aresta: number
    }
  ]
  |
  [
    "volumeOctaedroQualquer",
    {
      aresta: number
    }
  ]
  |
  [
    "volumeDodecaedroQualquer",
    {
      aresta: number
    }
  ]
  |
  [
    "volumeIcosaedroQualquer",
    {
      aresta: number
    }
  ]
  |
  [
    "volumeConeQualquer",
    {
      raio: number,
      altura: number
    }
  ]
  |
  [
    "volumeCilindroQualquer",
    {
      raio: number,
      altura: number
    }
  ]
  |
  [
    "volumeEsferaQualquer",
    {
      raio: number
    }
  ]
  |
  [
    "volumeRombQualquer",
    {
      aresta: number
    }
  ]
  |
  [
    "areaCircunferenciaQualquer",
    {
      raio: number
    }
  ]
  |
  [
    "areaLateralCilindroQualquer",
    {
      raio: number,
      altura: number
    }
  ]

}

interface OperacoesCartesianos {

  formats: [
    "primeiroGrau",
    {
      exp: any
    }
  ]
  |
  [
    "segundoGrau",
    {
      a: number,
      b: number,
      c: number
    }
  ]
  |
  [
    "terceiroGrau",
    {
      a: number,
      b: number,
      c: number
    }
  ]
  |
  [
    "quartoGrau",
    {
      a: number,
      b: number,
      c: number
    }
  ]

}
