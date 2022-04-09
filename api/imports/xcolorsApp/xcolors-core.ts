import { Espectros } from "./@defines/xcolors.config";

const EspectrosAmarelos: Espectros.espectroDeUmaCor = { 
  cor: [
    [
      "#FFFF0000"
    ], 
    [
      "#FFFF0011"
    ], 
    [
      "#FFFF0022"
    ], 
    [
      "#FFFF0033"
    ], 
    [
      "#FFFF0044"
    ], 
    [
      "#FFFF0055"
    ], 
    [
      "#FFFF0066"
    ], 
    [
      "#FFFF0077"
    ], 
    [
      "#FFFF0088"
    ],
    [
      "#FFFF0099"
    ], 
    [
      "#FFFF00AA"
    ], 
    [
      "#FFFF00BB"
    ], 
    [
      "#FFFF00CC"
    ]
  ] 
}

const EspectrosCinzas: Espectros.espectroDeUmaCor = { 
  cor: [
    [
      "#33333300"
    ], 
    [
      "#33333311"
    ], 
    [
      "#33333322"
    ], 
    [
      "#33333333"
    ], 
    [
      "#33333344"
    ], 
    [
      "#33333355"
    ], 
    [
      "#33333366"
    ], 
    [
      "#33333377"
    ],
    [
      "#33333388"
    ], 
    [
      "#33333399"
    ],
    [
      "#333333AA"
    ],
    [
      "#333333BB"
    ],
    [
      "#333333CC"
    ]
  ] 
}

const EspectrosLaranjas: Espectros.espectroDeUmaCor = { 
  cor: [
    [
      "#FF990000"
    ],
    [
      "#FF990011"
    ],
    [
      "#FF990022"
    ],
    [
      "#FF990033"
    ],
    [
      "#FF990044"
    ],
    [
      "#FF990055"
    ],
    [
      "#FF990066"
    ],
    [
      "#FF990077"
    ],
    [
      "#FF990088"
    ],
    [
      "#FF990099"
    ],
    [
      "#FF9900AA"
    ],
    [
      "#FF9900BB"
    ],
    [
      "#FF9900CC"
    ]
  ] 
}

const EspectrosRoxos: Espectros.espectroDeUmaCor = { 
  cor: [
    [
      "#66006600"
    ],
    [
      "#66006611"
    ],
    [
      "#66006622"
    ],
    [
      "#66006633"
    ],
    [
      "#66006644"
    ],
    [
      "#66006655"
    ],
    [
      "#66006666"
    ],
    [
      "#66006677"
    ],
    [
      "#66006688"
    ],
    [
      "#66006699"
    ],
    [
      "#660066AA"
    ],
    [
      "#660066BB"
    ],
    [
      "#660066CC"
    ]
  ] 
}

const EspectrosMarroms: Espectros.espectroDeUmaCor = { 
  cor: [
    [
      "#99663300"
    ],
    [
      "#99663311"
    ],
    [
      "#99663322"
    ],
    [
      "#99663333"
    ],
    [
      "#99663344"
    ],
    [
      "#99663355"
    ],
    [
      "#99663366"
    ],
    [
      "#99663377"
    ],
    [
      "#99663388"
    ],
    [
      "#99663399"
    ],
    [
      "#996633AA"
    ],
    [
      "#996633BB"
    ],
    [
      "#996633CC"
    ]
  ] 
}

const EspectrosPretos: Espectros.espectroDeUmaCor = { 
  cor: [
    [
      "#00000000"
    ],
    [
      "#00000011"
    ],
    [
      "#00000022"
    ],
    [
      "#00000033"
    ],
    [
      "#00000044"
    ],
    [
      "#00000055"
    ],
    [
      "#00000066"
    ],
    [
      "#00000077"
    ],
    [
      "#00000088"
    ],
    [
      "#00000099"
    ],
    [
      "#000000AA"
    ],
    [
      "#000000BB"
    ],
    [
      "#000000CC"
    ]
  ] 
}

const EspectrosBeges: Espectros.espectroDeUmaCor = { 
  cor: [
    [
      "#FFFF9900"
    ],
    [
      "#FFFF9911"
    ],
    [
      "#FFFF9922"
    ],
    [
      "#FFFF9933"
    ],
    [
      "#FFFF9944"
    ],
    [
      "#FFFF9955"
    ],
    [
      "#FFFF9966"
    ],
    [
      "#FFFF9977"
    ],
    [
      "#FFFF9988"
    ],
    [
      "#FFFF9999"
    ],
    [
      "#FFFF99AA"
    ],
    [
      "#FFFF99BB"
    ],
    [
      "#FFFF99CC"
    ]
  ] 
}

const EspectrosMagentas: Espectros.espectroDeUmaCor = { 
  cor: [
    [
      "#99006600"
    ],
    [
      "#99006611"
    ],
    [
      "#99006622"
    ],
    [
      "#99006633"
    ],
    [
      "#99006644"
    ],
    [
      "#99006655"
    ],
    [
      "#99006666"
    ],
    [
      "#99006677"
    ],
    [
      "#99006688"
    ],
    [
      "#99006699"
    ],
    [
      "#990066AA"
    ],
    [
      "#990066BB"
    ],
    [
      "#990066CC"
    ]
  ] 
}


export const xcolorsCore = {

  passivoRGBY: {

    camadaInferior: (cor: string) => { return cor; },

    camadaSuperior: {

      cores: {

        nvls: { 
        
          nvl01: EspectrosAmarelos.cor[0][0],

          nvl02: EspectrosAmarelos.cor[0][1],

          nvl03: EspectrosAmarelos.cor[0][2],

          nvl04: EspectrosAmarelos.cor[0][3],

          nvl05: EspectrosAmarelos.cor[0][4],

          nvl06: EspectrosAmarelos.cor[0][5],

          nvl07: EspectrosAmarelos.cor[0][6],

          nvl08: EspectrosAmarelos.cor[0][7],

          nvl09: EspectrosAmarelos.cor[0][8],

          nvl10: EspectrosAmarelos.cor[0][9],

          nvl11: EspectrosAmarelos.cor[0][10],

          nvl12: EspectrosAmarelos.cor[0][11],

          nvl13: EspectrosAmarelos.cor[0][12],
        
        },

      }

    }


  
  }

};
