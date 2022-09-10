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

      get sqrt() 
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

      get cbrt()
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

      abs(x: number): number 
      {
        return x < 0 ? -1 * x : x;
      }

    }


  }

  // Abstração de toda a Aplicação para o mundo externo
  public wertsfy= 
  {

    math:
    {

      Pi: new this.wtsy_lib.prototype.Math().pi,

      Euler: new this.wtsy_lib.prototype.Math().euler,
      
      Plank: new this.wtsy_lib.prototype.Math().plank,

      Avogadro: new this.wtsy_lib.prototype.Math().avogadro,

      Newton: new this.wtsy_lib.prototype.Math().newton,

      Testa: new this.wtsy_lib.prototype.Math().tesla,

      Sqrt: new this.wtsy_lib.prototype.Math().sqrt,

      Cbrt: new this.wtsy_lib.prototype.Math().cbrt,

      Ln2: new this.wtsy_lib.prototype.Math().ln2,

      Ln10: new this.wtsy_lib.prototype.Math().ln10,

      Log2e: new this.wtsy_lib.prototype.Math().log2e,

      Log10e: new this.wtsy_lib.prototype.Math().log10e,

      Maxvalue: new this.wtsy_lib.prototype.Math().maxvalue,

      Minvalue: new this.wtsy_lib.prototype.Math().minvalue,

      abs: (x: number) => new this.wtsy_lib.prototype.Math().abs(x) 

    }


  }


}

new WBoard().wertsfy;
