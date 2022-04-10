import { Numero } from "./lib/conv-manifests";

// # Chaves
export const $ChavesDoAnguloPlano = {

  base: {

    grau: "grau",

    radiano: "radiano",

  },

  multiplos: {

    decaradiano: "decâradiano",

    hectoradiano: "hectôradiano",

    quiloradiano: "quilôradiano",

    megaradiano: "megaradiano",

    gigaradiano: "gigaradiano",

    teraradiano: "teraradiano",

    petaradiano: "petaradiano",

    exaradiano: "exaradiano",

    zetaoradiano: "zetaradiano",

    iotaradiano: "iotaradiano"

  },

  submultiplos: {

    deciradiano: "deciradiano",

    centiradiano: "centiradiano",

    miliradiano: "miliradiano",

    microradiano: "microradiano",

    nanoradiano: "nanoradiano",

    picoradiano: "picoradiano",

    femtoradiano: "femtoradiano",

    attoradiano: "attoradiano",

    zeptoradiano: "zeptoradiano",

    yoctoradiano: "yoctoradiano"

  }

};

// # Formulas
export const $FormulasDoAnguloPlano = {

  core: {

    normal: Numero * 180,

    alter: Numero / 180,

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