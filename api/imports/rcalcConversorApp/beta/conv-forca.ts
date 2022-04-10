import { Numero } from "./lib/conv-manifests";

// # Chaves
export const $ChavesDeForca = {

  base: {

    newton: "newton",

  },

  multiplos: {

    decanewton: "decânewton",

    hectonewton: "hectônewton",

    quilonewton: "quilônewton",

    meganewton: "meganewton",

    giganewton: "giganewton",

    teranewton: "teranewton",

    petanewton: "petanewton",

    exanewton: "exanewton",

    zetaonewton: "zetanewton",

    iotanewton: "iotanewton"

  },

  submultiplos: {

    decinewton: "decinewton",

    centinewton: "centinewton",

    milinewton: "milinewton",

    micronewton: "micronewton",

    nanonewton: "nanonewton",

    piconewton: "piconewton",

    femtonewton: "femtonewton",

    attonewton: "attonewton",

    zeptonewton: "zeptonewton",

    yoctonewton: "yoctonewton"

  }

};

// # Formulas
export const $FormulasDeForca = {

  core: {

    multiploNvl1: {

      normal: Numero * 10 ** 1,

      alter: Numero / 10 ** 1

    },

    multiploNvl2: {

      normal: Numero * 10 ** 2,

      alter: Numero / 10 ** 2

    },

    multiploNvl3: {

      normal: Numero * 10 ** 3,

      alter: Numero / 10 ** 3

    },

    multiploNvl4: {

      normal: Numero * 10 ** 6,

      alter: Numero / 10 ** 6

    },

    multiploNvl5: {

      normal: Numero * 10 ** 9,

      alter: Numero / 10 ** 9

    },

    multiploNvl6: {

      normal: Numero * 10 ** 12,

      alter: Numero / 10 ** 12

    },

    multiploNvl7: {

      normal: Numero * 10 ** 15,

      alter: Numero / 10 ** 15

    },

    multiploNvl8: {

      normal: Numero * 10 ** 18,

      alter: Numero / 10 ** 18

    },

    multiploNvl9: {

      normal: Numero * 10 ** 21,

      alter: Numero / 10 ** 21

    },

    multiploNvl10: {

      normal: Numero * 10 ** 24,

      alter: Numero / 10 ** 24

    }

  }

};