import { Models } from "./components/xcolors-components";

export const xcolorsCore = {

  metodoPassivo: {

    rgby: {

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 1) */
      int01: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i01"),

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 2) */
      int02: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i02"),

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 3) */
      int03: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i03"),

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 4) */
      int04: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i04"),

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 5) */
      int05: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i05"),

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 6) */
      int06: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i06"),

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 7) */
      int07: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i07"),

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 8) */
      int08: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i08"),

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 9) */
      int09: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i09"),

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 10) */
      int10: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i10"),

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 11) */
      int11: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i11"),

      /** @description Gera as cores das camadas de montagem do rgby ou rgbya passivo (intensidade 12) */
      int12: new Models.XColorsRGBY((valorHex: string): string => {return valorHex;}).montador("@i12")

    }

  },

  metodoAtivo: { }

};
