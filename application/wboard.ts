'use strict'

// Quadro base de arquitetura
class WBoard {

  // bloco de implementação do Command Line Interface
  protected wtsy_cli = class WCLI { }

  // bloco de implementação de Testes
  protected wtsy_nkk = class WNikko { }

  // bloco de implementação de Transcompilação
  protected wtsy_tscp = class WTscp { }

  // bloco de implementação das Bibliotecas
  protected wtsy_lib = class WLib {

    // bloco de implementação da Biblioteca "Math"
    public Math = class WMath {

      get pi()
      { 
        return 3.141592653589793; 
      }

      get euler()
      { 
        return 2.7182818284590452353602874713527; 
      }

      get plank()
      { 
        return 6.62606896e-34; 
      }

      get avogadro()
      {
        return 6.022140857e23;
      }

      get newton()
      {
        return 0.6931471805599453;
      }

      get tesla()
      {
        return 1.6021766208e-19;
      }

      get sqrtd() 
      {
        
        return (
          
          {

            of01: 1.0,

            of02: 1.414213562373095,

            of03: 1.732050807568877,

            of04: 2.0,

            of05: 2.23606797749979,

            of06: 2.449489742783178,

            of07: 2.64575131106459,

            of08: 2.82842712474619,

            of09: 3.0,

            of10: 3.16227766016838

          }
        
        );
    
      }

      get cbrtd()
      {
        
        return (
          
          {

            of01: 1.0,

            of02: 1.25992104989487,

            of03: 1.5874010519682,

            of04: 1.99999999999999,

            of05: 2.23606797749979,

            of06: 2.58198889747161,

            of07: 2.91293118277239,

            of08: 3.26249509498958,

            of09: 3.62449963442055,

            of10: 3.99999999999999

          }
          
        );
      
      }

      get ln2()
      {
        return 0.6931471805599453;
      }

      get ln10()
      {
        return 2.302585092994046;
      }

      get log2e()
      {
        return 1.4426950408889634;
      }

      get log10e()
      {
        return 0.4342944819032518;
      }

      get maxvalue()
      {
        return 999999999999999;
      }

      get minvalue()
      {
        return -999999999999999;
      }

      abs(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x < 0 ? -1 * x : x);
        return x < 0 ? -1 * x : x;
      }

      sqrt(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 2));
        return x ** (1 / 2);
      }

      cbrt(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 3));
        return x ** (1 / 3);
      }

      quart(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 4));
        return x ** (1 / 4);
      }

      quint(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 5));
        return x ** (1 / 5);
      }

      sext(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 6));
        return x ** (1 / 6);
      }

      sept(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 7));
        return x ** (1 / 7);
      }

      oct(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 8));
        return x ** (1 / 8);
      }

      non(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 9));
        return x ** (1 / 9);
      }

      dec(x: number, neg?: boolean): number 
      {
        if(neg == true) return -1 * (x ** (1 / 10));
        return x ** (1 / 10);
      }

      pow(x: number, y: number, neg?: boolean): number {
        if(neg == true) return -1 * (x ** y);
        return x ** y;
      }

      pow2(y: number, neg?: boolean): number {
        if(neg == true) return -1 * (2 ** y);
        return 2 ** y;
      }

      pow3(y: number, neg?: boolean): number {
        if(neg == true) return -1 * (3 ** y);
        return 3 ** y;
      }

      pow4(y: number, neg?: boolean): number {
        if(neg == true) return -1 * (4 ** y);
        return 4 ** y;
      }

      pow5(y: number, neg?: boolean): number {
        if(neg == true) return -1 * (5 ** y);
        return 5 ** y;
      }

      pow6(y: number, neg?: boolean): number {
        if(neg == true) return -1 * (6 ** y);
        return 6 ** y;
      }

      pow7(y: number, neg?: boolean): number {
        if(neg == true) return -1 * (7 ** y);
        return 7 ** y;
      }

      pow8(y: number, neg?: boolean): number {
        if(neg == true) return -1 * (8 ** y);
        return 8 ** y;
      }

      pow9(y: number, neg?: boolean): number {
        if(neg == true) return -1 * (9 ** y);
        return 9 ** y;
      }

      pow10(y: number, neg?: boolean): number {
        if(neg == true) return -1 * (2 ** y);
        return 10 ** y;
      }

      powOfPow(x: number, y: number, z?: number[], neg?: boolean): number {
        let rest;
        if(z != null) {
          let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
          return rest = x ** (y ** l);
        }
        if(neg == true) return -1 * rest;
        return rest;
      }

      max(x: number[]): number {
        let max = x[0];
        for (let i = 1; i < x.length; i++) {
          if (x[i] > max) { max = x[i]; }
        }
        return max;
      }

      min(x: number[]): number {
        let min = x[0];
        for (let i = 1; i < x.length; i++) {
          if (x[i] < min) { min = x[i]; }
        }
        return min;
      }

      round(x: number): number {
        const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
        let resultado = undefined;
        resultado = verificador.exec(x.toString());
        return parseInt(resultado[0]);
      }

      fround(x: number): number {
        const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
        let resultado = undefined;
        resultado = verificador.exec(x.toString());
        if (parseFloat(resultado[1]) >= 0.5) {
          return parseInt(resultado[0] + 1);
        }
        return parseInt(resultado[0]);
      }

      sign(x: number): number {
        let v = undefined;
        if (x > 0) { return v = 1; }
        if (x < 0) { return v = -1; }
        return v;
      }

      trunc(x: number): number {
        return parseInt(x.toString());
      }

      imul(x: number, y: number): number {
        return x * y;
      }

      ceil(x: number): number {
        let v = undefined;
        if (x < x + 0.5) { v = parseInt(x.toString()); }
        return v;
      }

      floor(x: number): number {
        let v = undefined;
        if (x > x + 0.5) { v = parseInt(x.toString()); }
        return v;
      }


    }


  }

  protected rdcmath = new this.wtsy_lib.prototype.Math();

  // Abstração de toda a Aplicação para o mundo externo
  public wertsfy= 
  {

    math:
    {

      Pi: this.rdcmath.pi,

      Euler: this.rdcmath.euler,
      
      Plank: this.rdcmath.plank,

      Avogadro: this.rdcmath.avogadro,

      Newton: this.rdcmath.newton,

      Testa: this.rdcmath.tesla,

      Sqrt: this.rdcmath.sqrtd,

      Cbrt: this.rdcmath.cbrtd,

      Ln2: this.rdcmath.ln2,

      Ln10: this.rdcmath.ln10,

      Log2e: this.rdcmath.log2e,

      Log10e: this.rdcmath.log10e,

      Maxvalue: this.rdcmath.maxvalue,

      Minvalue: this.rdcmath.minvalue,

      abs: (x: number, neg?: boolean) => this.rdcmath.abs(x, neg),

      sqrt: (x: number, neg?: boolean) => this.rdcmath.sqrt(x, neg),

      cbrt: (x: number, neg?: boolean) => this.rdcmath.cbrt(x, neg),

      quart: (x: number, neg?: boolean) => this.rdcmath.quart(x, neg),

      quint: (x: number, neg?: boolean) => this.rdcmath.quint(x, neg),

      sext: (x: number, neg?: boolean) => this.rdcmath.sext(x, neg),

      sept: (x: number, neg?: boolean) => this.rdcmath.sept(x, neg),

      oct: (x: number, neg?: boolean) => this.rdcmath.oct(x, neg),

      non: (x: number, neg?: boolean) => this.rdcmath.non(x, neg),

      dec: (x: number, neg?: boolean) => this.rdcmath.dec(x, neg),

      pow: (x: number, y: number, neg?: boolean) => this.rdcmath.pow(x, y, neg),

      pow2: (y: number, neg?: boolean) => this.rdcmath.pow2(y, neg),
      
      pow3: (y: number, neg?: boolean) => this.rdcmath.pow3(y, neg),
      
      pow4: (y: number, neg?: boolean) => this.rdcmath.pow4(y, neg),
      
      pow5: (y: number, neg?: boolean) => this.rdcmath.pow5(y, neg),
      
      pow6: (y: number, neg?: boolean) => this.rdcmath.pow6(y, neg),
      
      pow7: (y: number, neg?: boolean) => this.rdcmath.pow7(y, neg),
      
      pow8: (y: number, neg?: boolean) => this.rdcmath.pow8(y, neg),
      
      pow9: (y: number, neg?: boolean) => this.rdcmath.pow9(y, neg),
      
      pow10: (y: number, neg?: boolean) => this.rdcmath.pow10(y, neg),

      powOfPow: (x: number, y: number, z?: number[], neg?: boolean) => this.rdcmath.powOfPow(x, y, z, neg),

      max: (x: number[]) => this.rdcmath.max(x),

      min: (x: number[]) => this.rdcmath.min(x),

      round: (x: number) => this.rdcmath.round(x),

      fround: (x: number) => this.rdcmath.fround(x),

      sign: (x: number) => this.rdcmath.sign(x),

      trunc: (x: number) => this.rdcmath.trunc(x),

      imul: (x: number, y: number) => this.rdcmath.imul(x, y),

      ceil: (x: number) => this.rdcmath.ceil(x),

      floor: (x: number) => this.rdcmath.floor(x)

    }


  }


}

let abstraction = new WBoard().wertsfy;
