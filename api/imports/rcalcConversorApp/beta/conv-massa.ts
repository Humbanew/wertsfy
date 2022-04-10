import { Numero } from "./lib/conv-manifests";

// # Chaves
export const $ChavesDeMassa = {

  base: {

    grama: "grama",

  },

  multiplos: {

    decagrama: "decâgrama",

    hectograma: "hectôgrama",

    quilograma: "quilôgrama",

    megagrama: "megagrama",

    gigagrama: "gigagrama",

    teragrama: "teragrama",

    petagrama: "petagrama",

    exagrama: "exagrama",

    zetaograma: "zetagrama",

    iotagrama: "iotagrama"

  },

  submultiplos: {

    decigrama: "decigrama",

    centigrama: "centigrama",

    miligrama: "miligrama",

    micrograma: "micrograma",

    nanograma: "nanograma",

    picograma: "picograma",

    femtograma: "femtograma",

    attograma: "attograma",

    zeptograma: "zeptograma",

    yoctograma: "yoctograma"

  }

};

// # Formulas
export const $FormulasDeMassa = {

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