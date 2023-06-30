export interface ITExpressoes {
  
  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Determinantes``**
   * 
   * _______________________________
   * 
   * 1) ``#d2x2`` ⇒ definição de marcação de determinante dois por dois [_definition of determinant marking two by two_]
   * _______________________________
   * 
   * 2) ``#d3x3`` ⇒ definição de marcação de determinante trés por trés [_definition of determinant marking three by three_]
   * 
   **/
  determinantes: [
    "#d2x2",
    {
      a00: number,
      a01: number,
      a10: number,
      a11: number
    }
  ] | [
    "#d3x3",
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

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Funções Cartesianas``**
   * 
   * _______________________________
   * 
   * 1) ``#grade1`` ⇒ definição de marcação de função cartesiana de grau 1 [_function cartesian of grade 1_]
   * _______________________________
   * 
   * 2) ``#grade2`` ⇒ definição de marcação de função cartesiana de grau 2 [_function cartesian of grade 2_]
   * _______________________________
   * 
   * 3) ``#grade3`` ⇒ definição de marcação de função cartesiana de grau 3 [_function cartesian of grade 3_]
   * _______________________________
   * 
   * 4) ``#grade4`` ⇒ definição de marcação de função cartesiana de grau 4 [_function cartesian of grade 4_]
   * _______________________________
   * 
   * 5) ``#grade5`` ⇒ definição de marcação de função cartesiana de grau 5 [_function cartesian of grade 5_]
   * _______________________________
   * 
   * 6) ``#grade6`` ⇒ definição de marcação de função cartesiana de grau 6 [_function cartesian of grade 6_]
   * _______________________________
   * 
   * 7) ``#grade7`` ⇒ definição de marcação de função cartesiana de grau 7 [_function cartesian of grade 7_]
   * _______________________________
   * 
   * 8) ``#grade8`` ⇒ definição de marcação de função cartesiana de grau 8 [_function cartesian of grade 8_]
   * 
   **/
  funcoesCartesianas:
  "#grade1"
  | "#grade2"
  | "#grade3"
  | "#grade4"
  | "#grade5"
  | "#grade6"
  | "#grade7"
  | "#grade8"

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Operações Comuns``**
   * 
   * _______________________________
   * 
   * 1) ``#plus`` ⇒ definição de marcação de adição [_Definition of addition marking_]
   * _______________________________
   * 
   * 2) ``#minus`` ⇒ definição de marcação de subtração [_Definition of subtraction marking_]
   * _______________________________
   * 
   * 3) ``#divisor`` ⇒ definição de marcação de divisão [_Definition of division marking_]
   * _______________________________
   * 
   * 4) ``#multip`` ⇒ definição de marcação de multiplicação [_Definition of multiplication marking_]
   * 
   **/
  operacoesComuns:
  "#plus"
  | "#minus"
  | "#divisor"
  | "#multip"

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Operações Diversos``**
   * 
   * _______________________________
   * 
   * 1) ``#escalaGeografica`` ⇒ definição de marcação de escala geográfica [_Definition of scale geographical marking_]
   * _______________________________
   * 
   * 2) ``#idh`` ⇒ definição de marcação de Indice de Desenvolvimento Humano [_Definition of Index of Development Human_]
   * _______________________________
   * 
   * 3) ``#gini`` ⇒ definição de marcação de Gini [_Definition of Gini_]
   * _______________________________
   * 
   * 4) ``#imc`` ⇒ definição de marcação de Indice de Massa Corporal [_Definition of Index of Mass Corporal_]
   * _______________________________
   * 
   * 5) ``#densidadePopulacional`` ⇒ definição de marcação de Densidade Populacional [_Definition of Population density_]
   * 
   **/
  operacoesDiversos: [
    "#escalaGeografica",
    {
      tamanhoReal: number,
      tamanhoFicticio: number
    }
  ] | [
    "#idh",
    {
      saude: number,
      educacao: number,
      renda: number,
      populacao: number,
      rpc: number
    }
  ] | [
    "#gini",
    {
      pnb: number,
      populacao: number
    }
  ] | [
    "#imc",
    {
      peso: number,
      altura: number
    }
  ] | [
    "#densidadePopulacional",
    {
      espaco: number,
      populacao: number
    }
  ]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Operações Numéricos``**
   * 
   * _______________________________
   * 
   * 1) ``#numerosPares`` ⇒ definição de marcação de nÚmeros pares [_Definition of even numbers marking_]
   * _______________________________
   * 
   * 2) ``#numerosImpares`` ⇒ definição de marcação de nÚmeros Ímpares [_Definition of odd numbers marking_]
   * _______________________________
   * 
   * 3) ``#numerosPrimos`` ⇒ definição de marcação de nÚmeros Primos [_Definition of prime numbers marking_]
   * _______________________________
   * 
   * 4) ``#conjuntos`` ⇒ definição de marcação de conjuntos [_Definition of sets marking_]
   * 
   **/
  operacoesNumericos: [
    "#numerosPares",
    {
      numero: number
    }
  ] | [
    "#numerosImpares",
    {
      numero: number
    }
  ] | [
    "#numerosPrimos",
    {
      numerosPesquisados: number
    }
  ] | [
    "#conjuntos",
    {
      elementos: number
    }
  ]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Operações Diagrama de Venn``**
   * 
   * _______________________________
   * 
   * 1) ``#venn2Grupos`` ⇒ definição de marcação de diagramas Venn 2 Grupos [_Definition of Venn 2 Groups marking_]
   * _______________________________
   * 
   * 2) ``#venn3Grupos`` ⇒ definição de marcação de diagramas Venn 3 Grupos [_Definition of Venn 3 Groups marking_]
   * _______________________________
   * 
   * 3) ``#venn4Grupos`` ⇒ definição de marcação de diagramas Venn 4 Grupos [_Definition of Venn 4 Groups marking_]
   * 
   **/
  operacoesDiagramaVenn: [
    "#venn2Grupos",
    {
      numerosGrupoUmNucleo: number[],
      numerosGrupoDoisNucleos: number
    }
  ] | [
    "#venn3Grupos",
    {
      numerosGrupoUmNucleo: number[],
      numerosGrupoDoisNucleos: number[],
      numerosGrupoTresNucleos: number
    }
  ] | [
    "#venn4Grupos",
    {
      numerosGrupoUmNucleo: number[],
      numerosGrupoDoisNucleos: number[],
      numerosGrupoTresNucleos: number[],
      numerosGrupoQuatroNucleos: number
    }
  ]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Operações Geométricos``**
   * 
   * _______________________________
   * 
   * 1) ``#areaTrianguloQualquer`` ⇒ definição de marcação de área de triângulo qualquer [_Definition of area of any triangle marking_]
   * _______________________________
   * 
   * 2) ``#apotemaTrianguloQualquer`` ⇒ definição de marcação de apotema de triângulo qualquer [_Definition of apothem of any triangle marking_]
   * _______________________________
   * 
   * 3) ``#areaQuadradoQualquer`` ⇒ definição de marcação de área de quadrado qualquer [_Definition of area of any square marking_]
   * _______________________________
   * 
   * 4) ``#areaRetanguloQualquer`` ⇒ definição de marcação de área de retângulo qualquer [_Definition of area of any rectangle marking_]
   * _______________________________
   * 
   * 5) ``#areaCirculoQualquer`` ⇒ definição de marcação de área de círculo qualquer [_Definition of area of any circle marking_]
   * _______________________________
   * 
   * 6) ``#areaElipseQualquer`` ⇒ definição de marcação de área de elipse qualquer [_Definition of area of any ellipse marking_]
   * _______________________________
   * 
   * 7) ``#areaPiramideQualquer`` ⇒ definição de marcação de área de pirâmide qualquer [_Definition of area of any pyramid marking_]
   * _______________________________
   *  
   * 8) ``#areaConeQualquer`` ⇒ definição de marcação de área de cone qualquer [_Definition of area of any cone marking_]
   * _______________________________
   * 
   * 9) ``#areaCilindroQualquer`` ⇒ definição de marcação de área de cilindro qualquer [_Definition of area of any cylinder marking_]
   * _______________________________
   * 
   * 10) ``#areaTrapezioQualquer`` ⇒ definição de marcação de área de trapézio qualquer [_Definition of area of any trapezium marking_]
   * _______________________________
   * 
   * 11) ``#areaLozangoQualquer`` ⇒ definição de marcação de área de lozango qualquer [_Definition of area of any lozenge marking_]
   * _______________________________
   * 
   * 12) ``#areaEsferaQualquer`` ⇒ definição de marcação de área de esfera qualquer [_Definition of area of any sphere marking_]
   * _______________________________
   * 
   * 13) ``#areaSuperficieQualquer`` ⇒ definição de marcação de área de superfície qualquer [_Definition of area of any surface marking_]
   * _______________________________
   * 
   * 14) ``#volumeSuperficieQualquer`` ⇒ definição de marcação de volume de superfície qualquer [_Definition of volume of any surface marking_]
   * _______________________________
   * 
   * 15) ``#areaPoligonoQualquer`` ⇒ definição de marcação de área de polígono qualquer [_Definition of area of any polygon marking_]
   * _______________________________
   * 
   * 16) ``#areaPoligonoFormatoLozangoQualquer`` ⇒ definição de marcação de área de polígono qualquer [_Definition of area of any polygon marking_]
   * _______________________________
   * 
   * 17) ``#areaPoligonoFormatoTrianguloQualquer`` ⇒ definição de marcação de área de polígono qualquer [_Definition of area of any polygon marking_]
   * _______________________________
   * 
   * 18) ``#areaParalelogramoQualquer`` ⇒ definição de marcação de área de paralelogramo qualquer [_Definition of area of any polygon marking_]
   * _______________________________
   * 
   * 19) ``#areaLateralPrismaQualquer`` ⇒ definição de marcação de área lateral de prisma qualquer [_Definition of area of any polygon marking_]
   * _______________________________
   * 
   * 20) ``#volumePrismaQualquer`` ⇒ definição de marcação de volume de prisma qualquer [_Definition of volume of any polygon marking_]
   * _______________________________
   * 
   * 21) ``#volumeCuboQualquer`` ⇒ definição de marcação de volume de cubo qualquer [_Definition of volume of any cube marking_]
   * _______________________________
   * 
   * 22) ``#volumeParalelogramoQualquer`` ⇒ definição de marcação de volume de paralelogramo qualquer [_Definition of volume of any polygon marking_]
   * _______________________________
   * 
   * 23) ``#volumePiramideQualquer`` ⇒ definição de marcação de volume de pirâmide qualquer [_Definition of volume of any pyramid marking_]
   * _______________________________
   * 
   * 24) ``#volumeTetraedroQualquer`` ⇒ definição de marcação de volume de tetraedro qualquer [_Definition of volume of any tetrahedron marking_]
   * _______________________________
   * 
   * 25) ``#volumeHexaedroQualquer`` ⇒ definição de marcação de volume de hexaedro qualquer [_Definition of volume of any hexahedron marking_]
   * _______________________________
   * 
   * 26) ``#volumeOctaedroQualquer`` ⇒ definição de marcação de volume de octaedro qualquer [_Definition of volume of any octahedron marking_]
   * _______________________________
   * 
   * 27) ``#volumeDodecaedroQualquer`` ⇒ definição de marcação de volume de dodecaedro qualquer [_Definition of volume of any dodecahedron marking_]
   * _______________________________
   * 
   * 28) ``#volumeIsocaedroQualquer`` ⇒ definição de marcação de volume de isocaedro qualquer [_Definition of volume of any icosahedron marking_]
   * _______________________________
   * 
   * 29) ``#volumeConeQualquer`` ⇒ definição de marcação de volume de cone qualquer [_Definition of volume of any cone marking_]
   * _______________________________
   * 
   * 30) ``#volumeCilindroQualquer`` ⇒ definição de marcação de volume de cilindro qualquer [_Definition of volume of any cylinder marking_]
   * _______________________________
   * 
   * 31) ``#volumeEsferaQualquer`` ⇒ definição de marcação de volume de esfera qualquer [_Definition of volume of any sphere marking_]
   * _______________________________
   * 
   * 32) ``#volumeRombQualquer`` ⇒ definição de marcação de volume de romb qualquer [_Definition of volume of any rhombus marking_]
   * _______________________________
   * 
   * 33) ``#areaCircunferenciaQualquer`` ⇒ definição de marcação de área de circunferância qualquer [_Definition of area of any circumference marking_]
   * _______________________________
   * 
   * 34) ``#areaLateralCilindroQualquer`` ⇒ definição de marcação de área lateral de cilindro qualquer [_Definition of area of any cylinder marking_]
   * 
   **/
  operacoesGeometricos: [
    "#areaTrianguloQualquer",
    {
      lado: number
    }
  ] | [
    "#apotemaTrianguloQualquer",
    {
      lado: number
    }
  ] | [
    "#areaQuadradoQualquer",
    {
      lado: number
    }
  ] | [
    "#areaRetanguloQualquer",
    {
      comprimento: number,
      largura: number
    }
  ] | [
    "#areaCirculoQualquer",
    {
      raio: number
    }
  ] | [
    "#areaElipseQualquer",
    {
      raio: number,
      altura: number
    }
  ] | [
    "#areaPiramideQualquer",
    {
      base: number,
      altura: number
    }
  ] | [
    "#areaConeQualquer",
    {
      raio: number,
      altura: number
    }
  ] | [
    "#areaCilindroQualquer",
    {
      raio: number,
      altura: number
    }
  ] | [
    "#areaTrapezioQualquer",
    {
      baseMaior: number,
      baseMenor: number,
      altura: number
    }
  ] | [
    "#areaLozangoQualquer",
    {
      diagonalMaior: number,
      diagonalMenor: number
    }
  ] | [
    "#areaEsferaQualquer",
    {
      raio: number
    }
  ] | [
    "#areaSuperficieQualquer",
    {
      comprimento: number,
      largura: number
    }
  ] | [
    "#volumeSuperficieQualquer",
    {
      area: number,
      comprimento: number,
      largura: number
    }
  ] | [
    "#areaPoligonoQualquer",
    {
      comprimento: number,
      largura: number,
      nLados: number
    }
  ] | [
    "#volumePoligonoFormatoLozangoQualquer",
    {
      diagonalMaior: number,
      diagonalMenor: number,
      altura: number
    }
  ] | [
    "#volumePoligonoFormatoTrapezioQualquer",
    {
      baseMaior: number,
      baseMenor: number,
      altura: number
    }
  ] | [
    "#areaParalelogramoQualquer",
    {
      lado: number,
      altura: number
    }
  ] | [
    "#areaLateralPrismaQualquer",
    {
      comprimento: number,
      largura: number,
      nLados: number
    }
  ] | [
    "#volumePrismaQualquer",
    {
      area: number,
      comprimento: number,
      largura: number
    }
  ] | [
    "#volumeCuboQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeParalelogramoQualquer",
    {
      comprimento: number,
      largura: number,
      altura: number
    }
  ] | [
    "#volumePiramideQualquer",
    {
      base: number,
      altura: number
    }
  ] | [
    "#volumeTetraedroQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeHexaedroQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeOctaedroQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeDodecaedroQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeIcosaedroQualquer",
    {
      aresta: number
    }
  ] | [
    "#volumeConeQualquer",
    {
      raio: number,
      altura: number
    }
  ] | [
    "#volumeCilindroQualquer",
    {
      raio: number,
      altura: number
    }
  ] | [
    "#volumeEsferaQualquer",
    {
      raio: number
    }
  ] | [
    "#volumeRombQualquer",
    {
      aresta: number
    }
  ] | [
    "#areaCircunferenciaQualquer",
    {
      raio: number
    }
  ] | [
    "#areaLateralCilindroQualquer",
    {
      raio: number,
      altura: number
    }
  ]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Operações Cartesianos``**
   * 
   * _______________________________
   * 
   * 1) ``#primeiroGrau`` ⇒ definição de marcação de primeiro grau [_definition of first degree marking_]
   * _______________________________
   * 
   * 2) ``#segundoGrau`` ⇒ definição de marcação de segundo grau [_definition of second degree marking_]
   * _______________________________
   * 
   * 3) ``#terceiroGrau`` ⇒ definição de marcação de terceiro grau [_definition of third degree marking_]
   * _______________________________
   * 
   * 4) ``#quartoGrau`` ⇒ definição de marcação de quarto grau [_definition of fourth degree marking_]
   *
   **/
  operacoesCartesianos: [
    "#primeiroGrau",
    {
      exp: any
    }
  ] | [
    "#segundoGrau",
    {
      a: number,
      b: number,
      c: number
    }
  ] | [
    "#terceiroGrau",
    {
      a: number,
      b: number,
      c: number
    }
  ] | [
    "#quartoGrau",
    {
      a: number,
      b: number,
      c: number
    }
  ]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Porcentagem``**
   * 
   * _______________________________
   * 
   * 1) ``#10E2`` ⇒ definição de marcação de porcentagem por 100 [_Definition of percentage marking per 100_]
   * _______________________________
   * 
   * 2) ``#10E3`` ⇒ definição de marcação de porcentagem por 1000 [_Definition of percentage marking per 1000_]
   * _______________________________
   * 
   * 3) ``#10E4`` ⇒ definição de marcação de porcentagem por 10000 [_Definition of percentage marking per 10000_]
   * _______________________________
   * 
   * 4) ``#10E5`` ⇒ definição de marcação de porcentagem por 100000 [_Definition of percentage marking per 100000_]
   * _______________________________
   * 
   * 5) ``#anyNumber`` ⇒ definição de marcação de porcentagem por qualquer valor [_Definition of percentage marking per any value_]
   * 
   **/
  porcentagem: [
    "#10E2",
    {
      value: number
    }
  ] | [
    "#10E3",
    {
      value: number
    }
  ] | [
    "#10E4",
    {
      value: number
    }
  ] | [
    "#10E5",
    {
      value: number
    }
  ] | [
    "#anyNumber",
    {
      value: number,
      valueTotal: number
    }
  ]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Triângulos Pitagâticos``**
   * 
   * _______________________________
   * 
   * 1) ``#classic(a and b)`` ⇒ definição de marcação de triângulo pitagótico clássico [_Classic triangle pitagoric definition marking_]
   * _______________________________
   * 
   * 2) ``#t1(m and n)`` ⇒ definição de marcação de triângulo pitagótico 1 [_Triangle pitagoric definition marking 1_]
   * _______________________________
   * 
   * 3) ``#t2(a and n)`` ⇒ definição de marcação de triângulo pitagótico 2 [_Triangle pitagoric definition marking 2_]
   * _______________________________
   * 
   * 4) ``#t3(b, c and h)`` ⇒ definição de marcação de triângulo pitagótico 3 [_Triangle pitagoric definition marking 3_]
   *
   **/
  triangulosPitagoricos: [
    "#classic(a and b)",
    {
      a: number,
      b: number
    }
  ] | [
    "#t1(m and n)",
    {
      m: number,
      n: number
    }
  ] | [
    "#t2(a and n)",
    {
      a: number,
      n: number
    }
  ] | [
    "#t3(b, c and h)",
    {
      b: number,
      c: number,
      h: number
    }
  ]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Variáveis de Pascal``**
   * 
   * _______________________________
   * 
   * 1) ``#forca1Null`` ⇒ definição de marcação de força 1 inexistente [_forces 1 not existing marking_]
   * _______________________________
   * 
   * 2) ``#forca2Null`` ⇒ definição de marcação de força 2 inexistente [_forces 2 not existing marking_]
   * _______________________________
   * 
   * 3) ``#area1Null`` ⇒ definição de marcação de área 1 inexistente [_area 1 not existing marking_]
   * _______________________________
   * 
   * 4) ``#area2Null`` ⇒ definição de marcação de área 2 inexistente [_area 2 not existing marking_]
   *
   **/
  variaveisDePascal:
  "#forca1Null"
  | "#forca2Null"
  | "#area1Null"
  | "#area2Null"

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Variáveis de Temperatura``**
   * 
   * _______________________________
   * 
   * 1) ``#celsiusFahrenheit`` ⇒ definição de marcação de temperatura em graus Celsius para Fahrenheit [_temperature in Celsius to Fahrenheit definition marking_]
   * _______________________________
   * 
   * 2) ``#celsiusKelvin`` ⇒ definição de marcação de temperatura em graus Celsius para Kelvin [_temperature in Celsius to Kelvin definition marking_]
   * _______________________________
   * 
   * 3) ``#fahrenheitCelsius`` ⇒ definição de marcação de temperatura em graus Fahrenheit para Celsius [_temperature in Fahrenheit to Celsius definition marking_]
   * _______________________________
   * 
   * 4) ``#fahrenheitKelvin`` ⇒ definição de marcação de temperatura em graus Fahrenheit para Kelvin [_temperature in Fahrenheit to Kelvin definition marking_]
   * _______________________________
   * 
   * 5) ``#kelvinCelsius`` ⇒ definição de marcação de temperatura em graus Kelvin para Celsius [_temperature in Kelvin to Celsius definition marking_]
   * _______________________________
   * 
   * 6) ``#kelvinFahrenheit`` ⇒ definição de marcação de temperatura em graus Kelvin para Fahrenheit [_temperature in Kelvin to Fahrenheit definition marking_]
   * 
   **/  
  variaveisDeTemperatura:
  "#celsiusFahrenheit"
  | "#celsiusKelvin"
  | "#fahrenheitCelsius"
  | "#fahrenheitKelvin"
  | "#kelvinCelsius"
  | "#kelvinFahrenheit"

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Tipos Matemáticos Expressoes [Expresions Mathematic Types] | Variáveis de Titulação``**
   * 
   * _______________________________
   * 
   * 1) ``#massaBaseNull`` ⇒ definição de marcação de massa da base inexistente [_base mass not existing marking_]
   * _______________________________
   * 
   * 2) ``#massaAcidoNull`` ⇒ definição de marcação de massa do ácido inexistente [_acid mass not existing marking_]
   * _______________________________
   * 
   * 3) ``#volumeBaseNull`` ⇒ definição de marcação de volume da base inexistente [_base volume not existing marking_]
   * _______________________________
   * 
   * 4) ``#volumeAcidoNull`` ⇒ definição de marcação de volume do ácido inexistente [_acid volume not existing marking_]
   *
   **/
  variaveisDeTitulacao:
  "#massaBaseNull"
  | "#massaAcidoNull"
  | "#volumeBaseNull"
  | "#volumeAcidoNull"

}
