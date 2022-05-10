/** @namespace Modelos de geração de cores extra-rgb e extra-rgba */
export namespace Models {
  
  export class XColorsRGBY {

    espectros: {

      i01: "#ff01",
      i02: "#ff02",
      i03: "#ff03",
      i04: "#ff04",
      i05: "#ff05",
      i06: "#ff06",
      i07: "#ff07",
      i08: "#ff08",
      i09: "#ff09",
      i10: "#ff0a",
      i11: "#ff0b",
      i12: "#ff0c",
    };

    camadaSubposta: string;

    /** @class Criador de cores rgby e rgbya */
    constructor(camadaSubposta: any|string) {

      this.camadaSubposta = camadaSubposta;

    }    

    /** @method Monta uma cor rgby ou rgbya de forma passiva */
    montador(intensidade: "@i01"|"@i02"|"@i03"|"@i04"|"@i05"|"@i06"|"@i07"|"@i08"|"@i09"|"@i10"|"@i11"|"@i12"): {} {

      let hexReduzida: RegExp = /^\#[0-9a-f]{3}$/i;
      let hexReduzidaO: RegExp = /^\#[0-9a-f]{4}$/i;
      let hexCompleta: RegExp = /^\#[0-9a-f]{6}$/i;
      let hexCompletaO: RegExp = /^\#[0-9a-f]{8}$/i;
      
      switch (this.camadaSubposta.length) {
        case 3:
          let $d: string = hexReduzida.exec(this.camadaSubposta).toString();
          break;
        case 4:
          let $dO: string = hexReduzidaO.exec(this.camadaSubposta).toString();
          break;
        case 6:
          let $c: string = hexCompleta.exec(this.camadaSubposta).toString();
          break;
        case 8:
          let $cO: string = hexCompletaO.exec(this.camadaSubposta).toString();
          break;
        default:
          console.error("Erro: Não foi possível montar a cor");
          break;
      }

      switch (intensidade) {
        case "@i01":
          this.espectros.i01;
          break;
        case "@i02":
          this.espectros.i02;
          break;
        case "@i03":
          this.espectros.i03;
          break;
        case "@i04":
          this.espectros.i04;
          break;
        case "@i05":
          this.espectros.i05;
          break;
        case "@i06":
          this.espectros.i06;
          break;
        case "@i07":
          this.espectros.i07;
          break;
        case "@i08":
          this.espectros.i08;
          break;
        case "@i09":
          this.espectros.i09;
          break;
        case "@i10":
          this.espectros.i10;
          break;
        case "@i11":
          this.espectros.i11;
          break;
        case "@i12":
          this.espectros.i12;
          break;
      }

      let montadores = {

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 1 */
        wIntensidade01: () => {
          return [this.espectros.i01, this.camadaSubposta];
        },

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 2 */
        wIntensidade02: () => {
          return [this.espectros.i02, this.camadaSubposta];
        },

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 3 */
        wIntensidade03: () => {
          return [this.espectros.i03, this.camadaSubposta];
        },

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 4 */
        wIntensidade04: () => {
          return [this.espectros.i04, this.camadaSubposta];
        },

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 5 */
        wIntensidade05: () => {
          return [this.espectros.i05, this.camadaSubposta];
        },

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 6 */
        wIntensidade06: () => {
          return [this.espectros.i06, this.camadaSubposta];
        },

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 7 */
        wIntensidade07: () => {
          return [this.espectros.i07, this.camadaSubposta];
        },

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 8 */
        wIntensidade08: () => {
          return [this.espectros.i08, this.camadaSubposta];
          
        },

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 9 */
        wIntensidade09: () => {
          return [this.espectros.i09, this.camadaSubposta];
          
        },

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 10 */
        wIntensidade10: () => {
          return [this.espectros.i10, this.camadaSubposta];
          
        },

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 11 */
        wIntensidade11: () => {
          return [this.espectros.i11, this.camadaSubposta];
          
        },

        /** @function Monta uma cor rgby ou rgbya de forma passiva com intensidade 12 */
        wIntensidade12: () => {
          return [this.espectros.i12, this.camadaSubposta];
          
        }

      }

      return montadores;

    }

  };

};
