import Aritmeticos from "./Aritmeticos.class";

const next_modules_03062024 = {

  modulos_aritmeticos: {

    trigonometricos: {

      seno: function (x: number): number 
        { return (((2 * Aritmeticos.prototype.PI * 1) / 4) / 90) * x; },

      cosseno: function (x: number): number 
        { return -1 * ((((2 * Aritmeticos.prototype.PI * 1) / 4) / 90) * x); },

      tangente: function (x: number): number 
        { return this.seno(x) / this.cosseno(x); },

      secante: function (x: number): number 
        { return 1 / this.cosseno(x); },

      cosecante: function (x: number): number 
        { return 1 / this.seno(x); },

      cotangente: function (x: number): number 
        { return 1 / this.tangente(x); }
    },

    arcos_trigonometricos: {

      arco_seno: function (x: number): number 
        { return 1 / this.seno(x); },

      arco_cosseno: function (x: number): number 
        { return 1 / this.cosseno(x); },

      arco_tangente: function (x: number): number 
        { return 1 / this.tangente(x); },

      arco_secante: function (x: number): number 
        { return 1 / this.secante(x); },

      arco_cosecante: function (x: number): number 
        { return 1 / this.cosecante(x); },

      arco_cotangente: function (x: number): number 
        { return 1 / this.cotangente(x); }

    },

    // senx = cosx
    // cosx = -senx
    // tgx = sec2x
    // secx = secxtgx
    // cosecx = cosecxcotgx
    // cotgx = cosec2x
    // arcsenx = 1/sqrt(1 - x2)
    // arccosx = -1/sqrt(1 - x2)
    // arctgx = 1/1 + x2
    // arccotgx = -1/1 + x2
    // arcsecx = 1/|x|sqrt(x2-1)
    // arccosecx = -1/|x|sqrt(x2-1)
    // lnx = 1/x
    // logx = x ln a
    // nx**n-1
    derivadas: {},

    // x**n+1/n+1
    integrais: {},

    geometricos: {

      quadrado: function (x: number): number 
        { return x ** 2; },

      retangulo: function (x: number, y: number): number 
        { return x * y; },

      circunferencia: function (x: number): number 
        { return 2 * Aritmeticos.prototype.PI * x; },

      circulo: function (x: number): number 
        { return Aritmeticos.prototype.PI * x ** 2; },

      triangulo: function (x: number, y: number) 
        { return (x * y) / 2; },

      triangulo_equilatero: function (x: number) 
        { return (x ** 2 * Aritmeticos.prototype.SQRT_03) / 4; },

      apotema_triangulo_equilatero: function (x: number) 
        { return (x * Aritmeticos.prototype.SQRT_03) / 2; },

      esfera: function (x: number): number 
        { return 4 * Aritmeticos.prototype.PI * x ** 2 / 2; },

      esfera_volume: function (x: number): number 
        { return 4 * Aritmeticos.prototype.PI * x ** 3 / 3; },

      cubo: function (x: number): number 
        { return x ** 3; },

      paralelepipedo: function (x: number, y: number, z: number): number 
        { return x * y * z; },

      lozango: function (x: number, y: number): number
        { return x * y / 2; },

      trapezio: function (x: number, y: number, z: number): number
        { return (x + y) * z / 2; },

    },

    exponenciais: {

      exponencial_mais_1: function(base: number, x: number): number 
      {
        if(base == 0) { return 1; }
        return base ** this.logaritmo_base_qualquer(x, base) + 1;
      },

      exponencial_menos_1: function(base: number, x: number): number 
      {
        if(base == 0) { return 1; }
        return base ** this.logaritmo_base_qualquer(x, base) - 1;
      },

      exponencial: function(base: number, x: number): number 
      {
        if(base == 0) { return 1; }
        return base ** this.logaritmo_base_qualquer(x, base);
      },

    },

    logaritmos: {

      logaritmo_base: function (expo: number, x: number): number 
      {
        let exp = expo, scan = x % exp;
        while (scan != 0) {
          scan = scan % exp;
          if(expo**exp!=x){if(expo**exp!=x){if(expo**exp!=x){exp+=0.0001} exp+=0.001} exp+=0.01} exp+=0.1;
        }
        return exp;
      },
      
      logaritmo_base_2_mais_1: function (x: number): number 
      { return this.logaritmo_base(2, x+1); },

      logaritmo_base_2_menos_1: function (x: number): number
      { return this.logaritmo_base(2, x-1); },

      logaritmo_base_2: function (x: number): number
      { return this.logaritmo_base(2, x); },

      logaritmo_base_10_mais_1: function (x: number): number 
      { return this.logaritmo_base(10, x+1); },

      logaritmo_base_10_menos_1: function (x: number): number
      { return this.logaritmo_base(10, x-1); },

      logaritmo_base_10: function (x: number): number
      { return this.logaritmo_base(10, x); },

      logaritmo_base_natural_mais_1: function (x: number): number 
      { return this.logaritmo_base(Aritmeticos.prototype.EULER, x+1); },

      logaritmo_base_natural_menos_1: function (x: number): number
      { return this.logaritmo_base(Aritmeticos.prototype.EULER, x-1); },

      logaritmo_base_natural: function (x: number): number
      { return this.logaritmo_base(Aritmeticos.prototype.EULER, x); },

      logaritmo_base_qualquer_mais_1: function (base: number, x: number): number {
        return this.logaritmo_base(base, x+1);
      },

      logaritmo_base_qualquer_menos_1: function (base: number, x: number): number {
        return this.logaritmo_base(base, x+1);
      },

      logaritmo_base_qualquer: function (base: number, x: number): number {
        return this.logaritmo_base(base, x+1);
      }

    },

    cologaritmos: {

      cologaritmo_base_2_mais_1: function (x: number): number 
      { return -1 * this.logaritmo_base(2, x+1); },

      cologaritmo_base_2_menos_1: function (x: number): number
      { return -1 * this.logaritmo_base(2, x-1); },

      cologaritmo_base_2: function (x: number): number
      { return -1 * this.logaritmo_base(2, x); },

      cologaritmo_base_10_mais_1: function (x: number): number 
      { return -1 * this.logaritmo_base(10, x+1); },

      cologaritmo_base_10_menos_1: function (x: number): number
      { return -1 * this.logaritmo_base(10, x-1); },

      cologaritmo_base_10: function (x: number): number
      { return -1 * this.logaritmo_base(10, x); },

      cologaritmo_base_natural_mais_1: function (x: number): number 
      { return -1 * this.logaritmo_base(Aritmeticos.prototype.EULER, x+1); },

      cologaritmo_base_natural_menos_1: function (x: number): number
      { return -1 * this.logaritmo_base(Aritmeticos.prototype.EULER, x-1); },

      cologaritmo_base_natural: function (x: number): number
      { return -1 * this.logaritmo_base(Aritmeticos.prototype.EULER, x); },

      cologaritmo_base_qualquer_mais_1: function (base: number, x: number): number {
        return -1 * this.logaritmo_base(base, x+1);
      },

      cologaritmo_base_qualquer_menos_1: function (base: number, x: number): number {
        return -1 * this.logaritmo_base(base, x+1);
      },

      cologaritmo_base_qualquer: function (base: number, x: number): number {
        return -1 * this.logaritmo_base(base, x+1);
      }

    },

    antilogaritmos: {

      antilogaritmo_base_2_mais_1: function (x: number): number 
      { return 1 ** this.logaritmo_base(2, x+1); },

      antilogaritmo_base_2_menos_1: function (x: number): number
      { return 1 ** this.logaritmo_base(2, x-1); },

      antilogaritmo_base_2: function (x: number): number
      { return 1 ** this.logaritmo_base(2, x); },

      antilogaritmo_base_10_mais_1: function (x: number): number 
      { return 1 ** this.logaritmo_base(10, x+1); },

      antilogaritmo_base_10_menos_1: function (x: number): number
      { return 1 ** this.logaritmo_base(10, x-1); },

      antilogaritmo_base_10: function (x: number): number
      { return 1 ** this.logaritmo_base(10, x); },

      antilogaritmo_base_natural_mais_1: function (x: number): number 
      { return 1 ** this.logaritmo_base(Aritmeticos.prototype.EULER, x+1); },

      antilogaritmo_base_natural_menos_1: function (x: number): number
      { return 1 ** this.logaritmo_base(Aritmeticos.prototype.EULER, x-1); },

      antilogaritmo_base_natural: function (x: number): number
      { return 1 ** this.logaritmo_base(Aritmeticos.prototype.EULER, x); },

      antilogaritmo_base_qualquer_mais_1: function (base: number, x: number): number {
        return 1 ** this.logaritmo_base(base, x+1);
      },

      antilogaritmo_base_qualquer_menos_1: function (base: number, x: number): number {
        return 1 ** this.logaritmo_base(base, x+1);
      },

      antilogaritmo_base_qualquer: function (base: number, x: number): number {
        return 1 ** this.logaritmo_base(base, x+1);
      }

    },

  },

};

const LibModules: Object = {
  
  arit_seno: function (x: number): number { return (((2 * Aritmeticos.prototype.PI * 1) / 4) / 90) * x; }
  ,arit_cosseno: function (x: number): number { return -1 * (((2 * Aritmeticos.prototype.PI * 1) / 4) / 90) * x; }
  ,arit_tangente: function (x: number): number { return this.arit_seno(x) / this.arit_cosseno(x); }
  ,arit_secante: function (x: number): number { return 1 / this.arit_cosseno(x); }
  ,arit_cosecante: function (x: number): number { return 1 / this.arit_seno(x); }
  ,arit_cotangente: function (x: number): number { return 1 / this.arit_tangente(x); }


};
