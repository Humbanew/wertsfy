import { CalculatorManifests } from "./calculator-manifests";

const numero = 0;

const ConversoresComprimento: CalculatorManifests.Arquitetura = {
  chaves: [
    [
      [
        "metro"
      ],
    ],
    [
      [
        "milha", 
        numero * 1609, 
        numero / 1609
      ],
    ],
    [
      [
        "milha-nautica", 
        numero * 1852, 
        numero / 1852
      ],
    ],
    [
      [
        "polegada", 
        (numero * 2.54) / 100, 
        (numero / 2.54) / 100, 
        [
          "polegada-metro", 
          numero * 2.54, 
          numero / 2.54
        ]
      ],
    ],
    [
      [
        "pe", 
        (numero * 30.48) / 100, 
        (numero / 30.48) / 100, 
        [
          "pe-metro", 
          numero * 30.48, 
          numero / 30.48
        ]
      ],
    ],
    [
      [
        "jarda", 
        (numero * 91.44) / 100, 
        (numero / 91.44) / 100, 
        [
          "jarda-metro", 
          numero * 91.44, 
          numero / 91.44
        ]
      ],
    ],
    [
      [
        "palmo", 
        (numero * 22.86) / 100, 
        (numero / 22.86) / 100, 
        [
          "palmo-metro", 
          numero * 22.86, 
          numero / 22.86
        ]
      ],
    ],
    [
      [
        "braça", 
        (numero * 2.2) / 100, 
        (numero / 2.2) / 100, 
        [
          "braça-metro", 
          numero * 2.2, 
          numero / 2.2
        ]
      ],
    ],
    [
      [
        "vara", 
        (numero * 2.96) / 100, 
        (numero / 2.96) / 100, 
        [
          "vara-metro", 
          numero * 2.96, 
          numero / 2.96
        ]
      ],
    ],
    [
      [
        "corrente", 
        numero * 20.11, 
        numero / 20.11
      ],
    ],
    [
      [
        "furlong", 
        numero * 201.168, 
        numero / 201.168
      ],
    ],
    [
      [
        "rod", 
        numero * 5.029, 
        numero / 5.029
      ],
    ],
    [
      [
        "ano-luz", 
        numero * 9460730472580800, 
        numero / 9460730472580800
      ],
    ],
    [
      [
        "parsec", 
        numero * 3085677581491392, 
        numero / 3085677581491392
      ],
    ],
    [
      [
        "unidade-astronomica", 
        numero * 149597870700, 
        numero / 149597870700
      ],
    ],
    [
      [
        "angstrom", 
        numero * 1.0e-10, 
        numero / 1.0e-10
      ],
    ],
    [
      [
        "decimetro", 
        "decâmetro", 
        numero / 10 ** 1, 
        numero * 10 ** 1
      ],
      [
        "centimetro", 
        "hectômetro", 
        numero / 10 ** 2, 
        numero * 10 ** 2
      ],
      [
        "milimetro", 
        "quilômetro", 
        numero / 10 ** 3, 
        numero * 10 ** 3
      ],
      [
        "micrometro", 
        "megametro", 
        numero / 10 ** 6, 
        numero * 10 ** 6
      ],
      [
        "nanometro", 
        "gigametro", 
        numero / 10 ** 9, 
        numero * 10 ** 9
      ],
      [
        "picometro", 
        "terametro", 
        numero / 10 ** 12, 
        numero * 10 ** 12
      ],
      [
        "femtometro", 
        "petametro", 
        numero / 10 ** 15, 
        numero * 10 ** 15
      ],
      [
        "attometro", 
        "exametro", 
        numero / 10 ** 18, 
        numero * 10 ** 18
      ],
      [
        "zeptometro", 
        "zetametro", 
        numero / 10 ** 21, 
        numero * 10 ** 21
      ],
      [
        "yoctometro", 
        "iotametro", 
        numero / 10 ** 24, 
        numero * 10 ** 24
      ],
    ],
  ]
};

const ConversoresArea: CalculatorManifests.Arquitetura = {
  chaves: [
    [
      [
        "metro²"
      ],
    ],
    [
      [
        "acre", 
        numero * 4042, 
        numero / 4042
      ],
    ],
    [
      [
        "rood", 
        numero * 1012, 
        numero / 1012
      ],
    ],
    [
      [
        "homestead", 
        numero * 646.720, 
        numero / 646.720
      ],
    ],
    [
      [
        "decimetro²", 
        "decâmetro²", 
        numero / 10 ** 1, 
        numero * 10 ** 1
      ],
      [
        "centimetro²", 
        "hectômetro²", 
        numero / 10 ** 2, 
        numero * 10 ** 2
      ],
      [
        "milimetro²",
        "quilômetro²", 
        numero / 10 ** 3, 
        numero * 10 ** 3
      ],
      [
        "micrometro²", 
        "megametro²", 
        numero / 10 ** 6, 
        numero * 10 ** 6
      ],
      [
        "nanometro²", 
        "gigametro²", 
        numero / 10 ** 9, 
        numero * 10 ** 9
      ],
      [
        "picometro²", 
        "terametro²", 
        numero / 10 ** 12, 
        numero * 10 ** 12
      ],
      [
        "femtometro²", 
        "petametro²", 
        numero / 10 ** 15, 
        numero * 10 ** 15
      ],
      [
        "attometro²", 
        "exametro²", 
        numero / 10 ** 18, 
        numero * 10 ** 18
      ],
      [
        "zeptometro²", 
        "zetametro²", 
        numero / 10 ** 21, 
        numero * 10 ** 21
      ],
      [
        "yoctometro²", 
        "iotametro²", 
        numero / 10 ** 24, 
        numero * 10 ** 24
      ],
    ],
  ]
};

const ConversoresQuantidade: CalculatorManifests.Arquitetura = {
  chaves: [
    [
      "dúzia",
      numero * 12,
      numero / 12
    ],
    [
      "grosa",
      numero * 144,
      numero / 144
    ],
    [
      "mol"
    ],
    [
      [
        "decimol",
        "decâmol",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centimol",
        "hectômol",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "milimol",
        "quilômol",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "micromol",
        "megamol",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanomol",
        "gigamol",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picomol",
        "teramol",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtomol",
        "petamol",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attomol",
        "examol",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptomol",
        "zetamol",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctomol",
        "iotamol",
        numero / 10 ** 24,
        numero * 10 ** 24
      ],
    ]
  ]
};

const ConversoresPressao: CalculatorManifests.Arquitetura = {
  chaves: [

  ]
};

const ConversoresSom: CalculatorManifests.Arquitetura = {
  chaves: [

  ]
};

const ConversoresLuz: CalculatorManifests.Arquitetura = {
  chaves: [
    [
      [
        "lux"
      ],
    ],
    [
      [
        "decilux",
        "decâlux",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centilux",
        "hectôlux",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "mililux",
        "quilôlux",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microlux",
        "megalux",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanolux",
        "gigalux",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picolux",
        "teralux",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtolux",
        "petalux",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attolux",
        "exalux",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptolux",
        "zetalux",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctolux",
        "iotalux",
        numero / 10 ** 24,
        numero * 10 ** 24
      ],
    ],
    [
      [
        [
          "lumen"
        ],
      ],
      [
        [
          "decilumen",
          "decâlumen",
          numero / 10 ** 1,
          numero * 10 ** 1
        ],
        [
          "centilumen",
          "hectôlumen",
          numero / 10 ** 2,
          numero * 10 ** 2
        ],
        [
          "mililumen",
          "quilôlumen",
          numero / 10 ** 3,
          numero * 10 ** 3
        ],
        [
          "microlumen",
          "megalumen",
          numero / 10 ** 6,
          numero * 10 ** 6
        ],
        [
          "nanolumen",
          "gigalumen",
          numero / 10 ** 9,
          numero * 10 ** 9
        ],
        [
          "picolumen",
          "teralumen",
          numero / 10 ** 12,
          numero * 10 ** 12
        ],
        [
          "femtolumen",
          "petalumen",
          numero / 10 ** 15,
          numero * 10 ** 15
        ],
        [
          "attolumen",
          "exalumen",
          numero / 10 ** 18,
          numero * 10 ** 18
        ],
        [
          "zeptolumen",
          "zetalumen",
          numero / 10 ** 21,
          numero * 10 ** 21
        ],
        [
          "yoctolumen",
          "iotalumen",
          numero / 10 ** 24,
          numero * 10 ** 24
        ],
      ],
    ]
  ]
};

const ConversoresEnergia: CalculatorManifests.Arquitetura = {
  chaves: [
    [
      "caloria",
      numero * 4184,
      numero / 4184
    ],
    [
      "kiloCaloria",
      numero * (4184 * 1000),
      numero / (4184 * 1000) 
    ],
    [
      [
        "volt"
      ],
    ],
    [
      [
        "decivolt",
        "decâvolt",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centivolt",
        "hectôvolt",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "milivolt",
        "quilôvolt",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microvolt",
        "megavolt",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanovolt",
        "gigavolt",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picovolt",
        "teravolt",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtovolt",
        "petavolt",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attovolt",
        "exavolt",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptovolt",
        "zetavolt",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctovolt",
        "iotavolt",
        numero / 10 ** 24,
        numero * 10 ** 24
      ]
    ],
    [
      [
        "eletron-volt"
      ],
    ],
    [
      [
        "decieletron-volt",
        "decâeletron-volt",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centieletron-volt",
        "hectôeletron-volt",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "milieletron-volt",
        "quilôeletron-volt",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microeletron-volt",
        "megaeletron-volt",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanoeletron-volt",
        "gigaeletron-volt",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picoeletron-volt",
        "teraeletron-volt",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtoeletron-volt",
        "petaeletron-volt",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attoeletron-volt",
        "exaeletron-volt",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptoeletron-volt",
        "zetaeletron-volt",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctoeletron-volt",
        "iotaeletron-volt",
        numero / 10 ** 24,
        numero * 10 ** 24
      ],
    ],
    [
      [
        "ampere"
      ],
    ],
    [
      [
        "deciampere",
        "decâampere",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centiampere",
        "hectôampere",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "miliampere",
        "quilôampere",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microampere",
        "megaampere",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanoampere",
        "gigaampere",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picoampere",
        "teraampere",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtoampere",
        "petaampere",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attoampere",
        "exaampere",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptoampere",
        "zetaampere",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctoampere",
        "iotaampere",
        numero / 10 ** 24,
        numero * 10 ** 24
      ]
    ],
    [
      [
        "farad"
      ],
    ],
    [
      [
        "decifarad",
        "decâfarad",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centifarad",
        "hectôfarad",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "milifarad",
        "quilôfarad",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microfarad",
        "megafarad",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanofarad",
        "gigafarad",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picofarad",
        "terafarad",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtofarad",
        "petafarad",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attofarad",
        "exafarad",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptofarad",
        "zetafarad",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctofarad",
        "iotafarad",
        numero / 10 ** 24,
        numero * 10 ** 24
      ]
    ],
    [
      [
        "joule"
      ],
    ],
    [
      [
        "decijoule",
        "decâjoule",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centijoule",
        "hectôjoule",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "milijoule",
        "quilôjoule",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microjoule",
        "megajoule",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanojoule",
        "gigajoule",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picojoule",
        "terajoule",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtojoule",
        "petajoule",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attojoule",
        "exajoule",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptojoule",
        "zetajoule",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctojoule",
        "iotajoule",
        numero / 10 ** 24,
        numero * 10 ** 24
      ],
    ],
    [
      "erg",
      numero * 10 ** -7,
      numero / 10 ** -7
    ],
    [
      [
        "gray"
      ],
    ],
    [
      [
        "decigray",
        "decâgray",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centigray",
        "hectôgray",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "miligray",
        "quilôgray",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microgray",
        "megagray",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanogray",
        "gigagray",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picogray",
        "teragray",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtogray",
        "petagray",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attogray",
        "exagray",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptogray",
        "zetagray",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctogray",
        "iotagray",
        numero / 10 ** 24,
        numero * 10 ** 24
      ]
    ],
    [
      [
        "henry"
      ],
    ],
    [
      [
        "decihenry",
        "decâhenry",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centihenry",
        "hectôhenry",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "milihenry",
        "quilôhenry",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microhenry",
        "megahenry",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanohenry",
        "gigahenry",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picohenry",
        "terahenry",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtohenry",
        "petahenry",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attohenry",
        "exahenry",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptohenry",
        "zetahenry",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctohenry",
        "iotahenry",
        numero / 10 ** 24,
        numero * 10 ** 24
      ]
    ],
    [
      [
        "watt"
      ],
    ],
    [
      [
        "deciwatt",
        "decâwatt",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centiwatt",
        "hectôwatt",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "miliwatt",
        "quilôwatt",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microwatt",
        "megawatt",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanowatt",
        "gigawatt",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picowatt",
        "terawatt",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtowatt",
        "petawatt",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attowatt",
        "exawatt",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptowatt",
        "zetawatt",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctowatt",
        "iotawatt",
        numero / 10 ** 24,
        numero * 10 ** 24
      ]
    ],
    [
      [
        "siemens"
      ],
    ],
    [
      [
        "decisiemens",
        "decâsiemens",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centisiemens",
        "hectôsiemens",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "milisiemens",
        "quilôsiemens",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microsiemens",
        "megasiemens",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanosiemens",
        "gigasiemens",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picosiemens",
        "terasiemens",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtosiemens",
        "petasiemens",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attosiemens",
        "exasiemens",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptosiemens",
        "zetasiemens",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctosiemens",
        "iotasiemens",
        numero / 10 ** 24,
        numero * 10 ** 24
      ]
    ],
    [
      [
        "ohm"
      ],
    ],
    [
      [
        "deciohm",
        "decâohm",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centiohm",
        "hectôohm",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "miliohm",
        "quilôohm",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microohm",
        "megaohm",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanoohm",
        "gigaohm",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picoohm",
        "teraohm",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtoohm",
        "petaohm",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attoohm",
        "exaohm",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptoohm",
        "zetaohm",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctoohm",
        "iotaohm",
        numero / 10 ** 24,
        numero * 10 ** 24
      ]
    ],
    [
      [
        "mho"
      ],
    ],
    [
      [
        "decimho",
        "decâmho",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centimho",
        "hectômho",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "milimho",
        "quilômho",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "micromho",
        "megamho",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanomho",
        "gigamho",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picomho",
        "teramho",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtomho",
        "petamho",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attomho",
        "examho",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptomho",
        "zetamho",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctomho",
        "iotamho",
        numero / 10 ** 24,
        numero * 10 ** 24
      ]
    ],
    [
      [
        "weber"
      ],
    ],
    [
      [
        "deciweber",
        "decâweber",
        numero / 10 ** 1,
        numero * 10 ** 1
      ],
      [
        "centiweber",
        "hectôweber",
        numero / 10 ** 2,
        numero * 10 ** 2
      ],
      [
        "miliweber",
        "quilôweber",
        numero / 10 ** 3,
        numero * 10 ** 3
      ],
      [
        "microweber",
        "megaweber",
        numero / 10 ** 6,
        numero * 10 ** 6
      ],
      [
        "nanoweber",
        "gigaweber",
        numero / 10 ** 9,
        numero * 10 ** 9
      ],
      [
        "picoweber",
        "teraweber",
        numero / 10 ** 12,
        numero * 10 ** 12
      ],
      [
        "femtoweber",
        "petaweber",
        numero / 10 ** 15,
        numero * 10 ** 15
      ],
      [
        "attoweber",
        "exaweber",
        numero / 10 ** 18,
        numero * 10 ** 18
      ],
      [
        "zeptoweber",
        "zetaweber",
        numero / 10 ** 21,
        numero * 10 ** 21
      ],
      [
        "yoctoweber",
        "iotaweber",
        numero / 10 ** 24,
        numero * 10 ** 24
      ]
    ]
  ]
};

const ConversoresTech: CalculatorManifests.Arquitetura = {
  chaves: [
    [
      "bits",
      numero * 8,
      numero / 8
    ],
    [
      "bytes",
      numero * 1024,
      numero / 1024
    ],
    [
      "kilobytes",
      numero * 1024 ** 2,
      numero / 1024 ** 2
    ],
    [
      "megabytes",
      numero * 1024 ** 3,
      numero / 1024 ** 3
    ],
    [
      "gigabytes",
      numero * 1024 ** 4,
      numero / 1024 ** 4
    ],
    [
      "terabytes",
      numero * 1024 ** 5,
      numero / 1024 ** 5
    ],
    [
      "petabytes",
      numero * 1024 ** 6,
      numero / 1024 ** 6
    ],
    [
      "exabytes",
      numero * 1024 ** 7,
      numero / 1024 ** 7
    ],
    [
      "zettabytes",
      numero * 1024 ** 8,
      numero / 1024 ** 8
    ],
    [
      "yottabytes",
      numero * 1024 ** 9,
      numero / 1024 ** 9
    ],
    [
      "brontobytes",
      numero * 1024 ** 10,
      numero / 1024 ** 10
    ],
    [
      "geopbytes",
      numero * 1024 ** 11,
      numero / 1024 ** 11
    ],
    [
      "jotabytes",
      numero * 1024 ** 12,
      numero / 1024 ** 12
    ]
  ]
};

