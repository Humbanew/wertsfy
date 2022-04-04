import { CalculatorManifests } from "./@defines/calculator-manifests";

const numero = 0;

const ConversoresAnguloPlano: CalculatorManifests.Arquitetura = { 
  chaves: [
    [
      [
        "radiano", 
        "grau", 
        numero / 360, 
        numero * 360, 
        numero / 180, 
        numero * 180
      ], 
    ],
    [
      [
        "deciradiano", 
        "decâradiano", 
        numero / 10 ** 1, 
        numero * 10 ** 1
      ], 
      [
        "centiradiano", 
        "hectôradiano", 
        numero / 10 ** 2, 
        numero * 10 ** 2
      ], 
      [
        "miliradiano",
        "quilôradiano", 
        numero / 10 ** 3, 
        numero * 10 ** 3
      ], 
      [
        "microradiano", 
        "megaradiano", 
        numero / 10 ** 6, 
        numero * 10 ** 6
      ], 
      [
        "nanoradiano", 
        "gigaradiano", 
        numero / 10 ** 9, 
        numero * 10 ** 9
      ], 
      [
        "picoradiano", 
        "teraradiano", 
        numero / 10 ** 12, 
        numero * 10 ** 12
      ], 
      [
        "femtoradiano", 
        "petaradiano", 
        numero / 10 ** 15, 
        numero * 10 ** 15
      ], 
      [
        "attoradiano", 
        "exaradiano", 
        numero / 10 ** 18, 
        numero * 10 ** 18
      ], 
      [
        "zeptoradiano", 
        "zetaradiano", 
        numero / 10 ** 21, 
        numero * 10 ** 21
      ], 
      [
        "yoctoradiano", 
        "iotaradiano", 
        numero / 10 ** 24, 
        numero * 10 ** 24
      ],
    ],
  ] 
};

const ConversoresAnguloSolido: CalculatorManifests.Arquitetura = {
  chaves: [
    [
      [
        "esterradiano", 
        "grau", 
        numero / 360, 
        numero * 360, 
        numero / 180, 
        numero * 180
      ],
    ],
    [
      [
        "deciesterradiano",
        "decâesterradiano", 
        numero / 10 ** 1, 
        numero * 10 ** 1
      ],
      [
        "centiesterradiano",
        "hectôesterradiano", 
        numero / 10 ** 2, 
        numero * 10 ** 2
      ],
      [
        "miliesterradiano",
        "quilôesterradiano", 
        numero / 10 ** 3, 
        numero * 10 ** 3
      ],
      [
        "microesterradiano",
        "megaesterradiano", 
        numero / 10 ** 6, 
        numero * 10 ** 6
      ],
      [
        "nanoesterradiano", 
        "gigaesterradiano", 
        numero / 10 ** 9, 
        numero * 10 ** 9
      ],
      [
        "picoesterradiano",
        "teraesterradiano",
        numero / 10 ** 12, 
        numero * 10 ** 12
      ],
      [
        "femtoesterradiano", 
        "petaesterradiano", 
        numero / 10 ** 15, 
        numero * 10 ** 15
      ],
      [
        "attoesterradiano", 
        "exaesterradiano", 
        numero / 10 ** 18, 
        numero * 10 ** 18
      ],
      [
        "zeptoesterradiano", 
        "zetaesterradiano", 
        numero / 10 ** 21, 
        numero * 10 ** 21
      ],
      [
        "yoctoesterradiano",
        "iotaesterradiano",
        numero / 10 ** 24, 
        numero * 10 ** 24
      ],
    ],
  ]
};

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

const ConversoresVolume: CalculatorManifests.Arquitetura = {
  chaves: [
    [
      [
        "metro³"
      ],
    ],
    [
      [
        "tonel", 
        numero * 957.6, 
        numero / 957.6, 
        [
          "tonel-litro", 
          (numero * 957.6) / 1000, 
          (numero / 957.6) / 1000, 
          (numero * 957.6) * 1000, 
          (numero / 957.6) * 1000
        ]
      ],
    ],
    [
      [
        "pipa", 
        numero * 550, 
        numero / 550, 
        [
          "pipa-litro", 
          (numero * 550) / 1000, 
          (numero / 550) / 1000, 
          (numero * 550) * 1000, 
          (numero / 550) * 1000
        ]
      ],
    ],
    [
      [
        "almude", 
        numero * 1.05, 
        numero / 1.05, 
        [
          "almude-litro", 
          (numero * 1.05) / 1000, 
          (numero / 1.05) / 1000, 
          (numero * 1.05) * 1000, 
          (numero / 1.05) * 1000
        ],
        [
          [
            "almude-arabe", 
            numero * 0.7, 
            numero / 0.7,
            [
              "almude-arabe-litro", 
              (numero * 0.7) / 1000, 
              (numero / 0.7) / 1000, 
              (numero * 0.7) * 1000, 
              (numero / 0.7) * 1000
            ]
          ],
          [
            "almude-condadoPortucalense", 
            numero * 6.7, 
            numero / 6.7,
            [
              "almude-condadoPortucalense-alqueire", 
              (numero * 6.7) / 2, 
              (numero / 6.7) / 2, 
              (numero * 6.7) * 2, 
              (numero / 6.7) * 2
            ],
            [
              "almude-condadoPortucalense-litro", 
              (numero * 6.7) / 1000, 
              (numero / 6.7) / 1000, 
              (numero * 6.7) * 1000, 
              (numero / 6.7) * 1000
            ],
            [
              "almude-condadoPortucalense-alqueire-litro", 
              ((numero * 6.7) * 2) / 1000, 
              ((numero * 6.7) / 2) / 1000, 
              ((numero * 6.7) * 2) * 1000, 
              ((numero * 6.7) / 2) * 1000,
              ((numero / 6.7) * 2) / 1000,
              ((numero / 6.7) / 2) / 1000,
              ((numero / 6.7) * 2) * 1000,
              ((numero / 6.7) / 2) * 1000
            ]
          ],
          [
            "almude-domAfonsoHenriques", 
            numero * 8.7, 
            numero / 8.7,
            [
              "almude-domAfonsoHenriques-alqueire",
              (numero * 8.7) / 1, 
              (numero / 8.7) / 1,
              (numero * 8.7) * 1,
              (numero / 8.7) * 1
            ],
            [
              "almude-domAfonsoHenriques-litro", 
              (numero * 8.7) / 1000, 
              (numero / 8.7) / 1000,
              (numero * 8.7) * 1000,
              (numero / 8.7) * 1000
            ],
            [
              "almude-domAfonsoHenriques-alqueire-litro", 
              ((numero * 8.7) * 1) / 1000, 
              ((numero * 8.7) / 1) / 1000,
              ((numero * 8.7) * 1) * 1000,
              ((numero * 8.7) / 1) * 1000,
              ((numero / 8.7) * 1) / 1000,
              ((numero / 8.7) / 1) / 1000,
              ((numero / 8.7) * 1) * 1000,
              ((numero / 8.7) / 1) * 1000
            ]
          ],
          [
            "almude-domPedroI", 
            numero * 19.7, 
            numero / 19.7,
            [
              "almude-domPedroI-alqueire", 
              (numero * 19.7) / 2, 
              (numero / 19.7) / 2,
              (numero * 19.7) * 2,
              (numero / 19.7) * 2
            ],
            [
              "almude-domPedroI-litro", 
              (numero * 19.7) / 1000, 
              (numero / 19.7) / 1000,
              (numero * 19.7) * 1000,
              (numero / 19.7) * 1000
            ],
            [
              "almude-domPedroI-alqueire-litro", 
              ((numero * 19.7) * 2) / 1000, 
              ((numero * 19.7) / 2) / 1000,
              ((numero * 19.7) * 2) * 1000,
              ((numero * 19.7) / 2) * 1000,
              ((numero / 19.7) * 2) / 1000,
              ((numero / 19.7) / 2) / 1000,
              ((numero / 19.7) * 2) * 1000,
              ((numero / 19.7) / 2) * 1000
            ]
          ],
          [
            "almude-domPedroII", 
            numero * 9.7, 
            numero / 9.7,
            [
              "almude-domPedroII-alqueire", 
              (numero * 9.7) / 1, 
              (numero / 9.7) / 1,
              (numero * 9.7) * 1,
              (numero / 9.7) * 1
            ],
            [
              "almude-domPedroII-litro", 
              (numero * 9.7) / 1000, 
              (numero / 9.7) / 1000,
              (numero * 9.7) * 1000,
              (numero / 9.7) * 1000
            ],
            [
              "almude-domPedroII-alqueire-litro", 
              ((numero * 9.7) * 1) / 1000,
              ((numero * 9.7) / 1) / 1000,
              ((numero * 9.7) * 1) * 1000,
              ((numero * 9.7) / 1) * 1000,
              ((numero / 9.7) * 1) / 1000,
              ((numero / 9.7) / 1) / 1000,
              ((numero / 9.7) * 1) * 1000,
              ((numero / 9.7) / 1) * 1000
            ]
          ],
          [
            "almude-domManuelI", 
            numero * 16.8, 
            numero / 16.8,
            [
              "almude-domManuelI-alqueire", 
              (numero * 16.8) * 2, 
              (numero * 16.8) / 2,
              (numero / 16.8) * 2,
              (numero / 16.8) / 2
            ],
            [
              "almude-domManuelI-litro", 
              (numero * 16.8) * 1000, 
              (numero * 16.8) / 1000,
              (numero / 16.8) * 1000,
              (numero / 16.8) / 1000
            ],
            [
              "almude-domManuelI-alqueire-litro", 
              ((numero * 16.8) * 2) / 1000, 
              ((numero * 16.8) / 2) / 1000,
              ((numero * 16.8) * 2) * 1000,
              ((numero * 16.8) / 2) * 1000,
              ((numero / 16.8) * 2) / 1000,
              ((numero / 16.8) / 2) / 1000,
              ((numero / 16.8) * 2) * 1000,
              ((numero / 16.8) / 2) * 1000
            ]
          ],
          [
            "almude-conselhoSantoTirsoRioAve", 
            numero * 15, 
            numero / 15,
            [
              "almude-conselhoSantoTirsoRioAve-litro", 
              (numero * 15) * 1000, 
              (numero * 15) / 1000,
              (numero / 15) * 1000,
              (numero / 15) / 1000
            ]
          ],
          [
            "almude-conselhoSantoTirsoValeDoLeca", 
            numero * 25, 
            numero / 25,
            [
              "almude-conselhoSantoTirsoValeDoLeca-litro", 
              (numero * 25) * 1000, 
              (numero * 25) / 1000,
              (numero / 25) * 1000,
              (numero / 25) / 1000
            ]
          ],
          [
            "almude-coimbra-vinho", 
            numero * 20, 
            numero / 20,
            [
              "almude-coimbra-vinho-litro", 
              (numero * 20) * 1000, 
              (numero * 20) / 1000,
              (numero / 20) * 1000,
              (numero / 20) / 1000
            ]
          ],
          [
            "almude-coimbra-azeite", 
            numero * 10, 
            numero / 10,
            [
              "almude-coimbra-azeite-litro", 
              (numero * 10) / 1000, 
              (numero / 10) / 1000,
              (numero * 10) * 1000,
              (numero / 10) * 1000
            ]
          ]
        ]
      ]
    ],
    [ //S voltar aqui #9999ff
      [
        "galao-liquido", 
        numero * 3.785411784, 
        numero / 3.785411784,
        [
          "galao-liquido-litro", 
          (numero * 3.785411784) / 1000, 
          (numero / 3.785411784) / 1000,
          (numero * 3.785411784) * 1000,
          (numero / 3.785411784) * 1000
        ],
        [
          "galao-liquido-barris-estadunidenses", 
          numero * 0.0238095238095240, 
          numero / 0.0238095238095240
        ],
        [
          "galao-liquido-barris-estadunidenses-litro", 
          (numero * 0.0238095238095240) / 1000, 
          (numero / 0.0238095238095240) / 1000,
          (numero * 0.0238095238095240) * 1000,
          (numero / 0.0238095238095240) * 1000
        ],
        [
          "galao-liquido-quartos-estadunidenses", 
          numero * 4, 
          numero / 4
        ],
        [
          "galao-liquido-quartos-estadunidenses-litro", 
          (numero * 4) / 1000, 
          (numero / 4) / 1000,
          (numero * 4) * 1000,
          (numero / 4) * 1000
        ],
        [
          "galao-liquido-quartilhos-estadunidenses", 
          numero * 8, 
          numero / 8
        ],
        [
          "galao-liquido-quartilhos-estadunidenses-litro", 
          (numero * 8) / 1000, 
          (numero / 8) / 1000,
          (numero * 8) * 1000,
          (numero / 8) * 1000
        ], [], [], [], []
      ], [], [] 
    ],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],
    [
      [
        "decimetro³", 
        "decâmetro³", 
        numero / 10 ** 1, 
        numero * 10 ** 1
      ],
      [
        "centimetro³", 
        "hectômetro³", 
        numero / 10 ** 2, 
        numero * 10 ** 2
      ],
      [
        "milimetro³", 
        "quilômetro³", 
        numero / 10 ** 3, 
        numero * 10 ** 3
      ],
      [
        "micrometro³", 
        "megametro³", 
        numero / 10 ** 6, 
        numero * 10 ** 6
      ],
      [
        "nanometro³", 
        "gigametro³", 
        numero / 10 ** 9, 
        numero * 10 ** 9
      ],
      [
        "picometro³", 
        "terametro³", 
        numero / 10 ** 12, 
        numero * 10 ** 12
      ],
      [
        "femtometro³", 
        "petametro³", 
        numero / 10 ** 15, 
        numero * 10 ** 15
      ],
      [
        "attometro³", 
        "exametro³", 
        numero / 10 ** 18, 
        numero * 10 ** 18
      ],
      [
        "zeptometro³", 
        "zetametro³", 
        numero / 10 ** 21, 
        numero * 10 ** 21
      ],
      [
        "yoctometro³",
        "iotametro³", 
        numero / 10 ** 24, 
        numero * 10 ** 24
      ],
    ],
    [
      [
        "litro", 
        numero / 1000, 
        numero * 1000
      ],
    ],
    [
      [
        "decilitro", 
        "decâlitro", 
        numero / 10 ** 1, 
        numero * 10 ** 1
      ],
      [
        "centilitro", 
        "hectôlitro", 
        numero / 10 ** 2, 
        numero * 10 ** 2
      ],
      [
        "mililitro", 
        "quilôlitro", 
        numero / 10 ** 3, 
        numero * 10 ** 3
      ],
      [
        "microlitro", 
        "megalitro", 
        numero / 10 ** 6, 
        numero * 10 ** 6
      ],
      [
        "nanolitro", 
        "gigalitro", 
        numero / 10 ** 9, 
        numero * 10 ** 9
      ],
      [
        "picolitro", 
        "teralitro", 
        numero / 10 ** 12, 
        numero * 10 ** 12
      ],
      [
        "femtolitro", 
        "petalitro", 
        numero / 10 ** 15, 
        numero * 10 ** 15
      ],
      [
        "attolitro", 
        "exalitro", 
        numero / 10 ** 18, 
        numero * 10 ** 18
      ],
      [
        "zeptolitro", 
        "zetalitro", 
        numero / 10 ** 21, 
        numero * 10 ** 21
      ],
      [
        "yoctolitro", 
        "iotalitro", 
        numero / 10 ** 24, 
        numero * 10 ** 24
      ],
    ],
  ]
};

const Conversores4Dimensoes: CalculatorManifests.Arquitetura = {
    chaves: [
    [
      [
        "metro⁴"
      ],
    ],
    [
      [
        "decimetro⁴", 
        "decâmetro⁴", 
        numero / 10 ** 1, 
        numero * 10 ** 1
      ],
      [
        "centimetro⁴", 
        "hectômetro⁴", 
        numero / 10 ** 2, 
        numero * 10 ** 2
      ],
      [
        "milimetro⁴", 
        "quilômetro⁴", 
        numero / 10 ** 3, 
        numero * 10 ** 3
      ],
      [
        "micrometro⁴", 
        "megametro⁴", 
        numero / 10 ** 6, 
        numero * 10 ** 6
      ],
      [
        "nanometro⁴", 
        "gigametro⁴", 
        numero / 10 ** 9, 
        numero * 10 ** 9
      ],
      [
        "picometro⁴", 
        "terametro⁴", 
        numero / 10 ** 12, 
        numero * 10 ** 12
      ],
      [
        "femtometro⁴", 
        "petametro⁴", 
        numero / 10 ** 15, 
        numero * 10 ** 15
      ],
      [
        "attometro⁴", 
        "exametro⁴", 
        numero / 10 ** 18, 
        numero * 10 ** 18
      ],
      [
        "zeptometro⁴", 
        "zetametro⁴", 
        numero / 10 ** 21, 
        numero * 10 ** 21
      ],
      [
        "yoctometro⁴", 
        "iotametro⁴", 
        numero / 10 ** 24, 
        numero * 10 ** 24
      ],
    ],
  ]
}

const Conversores5Dimensoes: CalculatorManifests.Arquitetura = {
    chaves: [
    [
      [
        "metro⁵"
      ],
    ],
    [
      [
        "decimetro⁵", 
        "decâmetro⁵", 
        numero / 10 ** 1, 
        numero * 10 ** 1
      ],
      [
        "centimetro⁵", 
        "hectômetro⁵", 
        numero / 10 ** 2, 
        numero * 10 ** 2
      ],
      [
        "milimetro⁵", 
        "quilômetro⁵", 
        numero / 10 ** 3, 
        numero * 10 ** 3
      ],
      [
        "micrometro⁵", 
        "megametro⁵", 
        numero / 10 ** 6, 
        numero * 10 ** 6
      ],
      [
        "nanometro⁵", 
        "gigametro⁵", 
        numero / 10 ** 9, 
        numero * 10 ** 9
      ],
      [
        "picometro⁵", 
        "terametro⁵", 
        numero / 10 ** 12, 
        numero * 10 ** 12
      ],
      [
        "femtometro⁵", 
        "petametro⁵", 
        numero / 10 ** 15, 
        numero * 10 ** 15
      ],
      [
        "attometro⁵", 
        "exametro⁵", 
        numero / 10 ** 18, 
        numero * 10 ** 18
      ],
      [
        "zeptometro⁵", 
        "zetametro⁵", 
        numero / 10 ** 21, 
        numero * 10 ** 21
      ],
      [
        "yoctometro⁵", 
        "iotametro⁵", 
        numero / 10 ** 24, 
        numero * 10 ** 24
      ],
    ],
  ]
}

const Conversores6Dimensoes: CalculatorManifests.Arquitetura = {
    chaves: [
    [
      [
        "metro⁶"
      ],
    ],
    [
      [
        "decimetro⁶", 
        "decâmetro⁶", 
        numero / 10 ** 1, 
        numero * 10 ** 1
      ],
      [
        "centimetro⁶", 
        "hectômetro⁶", 
        numero / 10 ** 2, 
        numero * 10 ** 2
      ],
      [
        "milimetro⁶", 
        "quilômetro⁶", 
        numero / 10 ** 3, 
        numero * 10 ** 3
      ],
      [
        "micrometro⁶", 
        "megametro⁶", 
        numero / 10 ** 6, 
        numero * 10 ** 6
      ],
      [
        "nanometro⁶", 
        "gigametro⁶", 
        numero / 10 ** 9, 
        numero * 10 ** 9
      ],
      [
        "picometro⁶", 
        "terametro⁶", 
        numero / 10 ** 12, 
        numero * 10 ** 12
      ],
      [
        "femtometro⁶", 
        "petametro⁶", 
        numero / 10 ** 15, 
        numero * 10 ** 15
      ],
      [
        "attometro⁶", 
        "exametro⁶", 
        numero / 10 ** 18, 
        numero * 10 ** 18
      ],
      [
        "zeptometro⁶", 
        "zetametro⁶", 
        numero / 10 ** 21, 
        numero * 10 ** 21
      ],
      [
        "yoctometro⁶", 
        "iotametro⁶", 
        numero / 10 ** 24, 
        numero * 10 ** 24
      ],
    ],
  ]
}

const ConversoresMassa: CalculatorManifests.Arquitetura = {
  chaves: []
};

const ConversoresTemperatura: CalculatorManifests.Arquitetura = {
  chaves: []
};

const ConversoresVelocidade: CalculatorManifests.Arquitetura = {
  chaves: []
};

const ConversoresForca: CalculatorManifests.Arquitetura = {
  chaves: []
};

const ConversoresTempo: CalculatorManifests.Arquitetura = {
  chaves: []
};

const ConversoresQuantidade: CalculatorManifests.Arquitetura = {
  chaves: []
};

const ConversoresPressao: CalculatorManifests.Arquitetura = {
  chaves: []
};

const ConversoresSom: CalculatorManifests.Arquitetura = {
  chaves: []
};

const ConversoresLuz: CalculatorManifests.Arquitetura = {
  chaves: []
};

const ConversoresEnergia: CalculatorManifests.Arquitetura = {
  chaves: []
};

const ConversoresTech: CalculatorManifests.Arquitetura = {
  chaves: []
};

