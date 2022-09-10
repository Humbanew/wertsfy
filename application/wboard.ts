'use strict'

// Quadro base de arquitetura
class WBoard {

  // bloco de implementação do Command Line Interface
  protected wtsy_cli = class WCLI { }

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

      dec: (x: number, neg?: boolean) => this.rdcmath.dec(x, neg)

    }


  }


}

new WBoard().wertsfy;
