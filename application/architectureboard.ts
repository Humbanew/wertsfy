'use strict'

// Modelo de objetos descritiva herdada do PHP.
  // Declaração das chaves.
    // Objetivo - facilitar o entendimento em grande escala.


import { Command } from 'commander';

// Interfaces de token de biblioteca
interface token_chave { idtoken: string, token: string };

// Tipos de biblioteca
type PaletaCores= 
  { 
    schemas:
    {
    
      "#web": { },

      "#bash": { },

      "#custom": { }
    
    }   
  
  };

type CatalogoGrandezas={ };


class Architectureboard {

  protected wertsfy_modo_kernel = class WModoKernel { };

  protected wertsfy_nikko = class WNikko { };

  public wertsfy_command_line_interface = class WCLI {

    public CLI = new Command();
    public cli_name = this.CLI.name('wertsfycli');
    public cli_version = this.CLI.version('v0.0.1-B');
    
    public cli_export_ts = this.CLI.command('export').action( () => { } );
    public cli_export_ts_description = this.cli_export_ts.description("export ts code");
    public cli_export_ts_arguments = [
      { 
        outdir: this.CLI
          .command('export')
          .option("-od|--outDir")
          .argument("DIRECTORY")
          .description("export directory")
      }
    ]
    
    public cli_parser = this.CLI.parse();

  };

  private wertsfy_core_functions = {

    maths: 
    { 
      
      logaritmo: (expo: number, x: number): number => 
      {

        let exp = expo , scan = x % exp;

        while(scan != 0) {
          scan = scan % exp;
    
          if(expo ** exp != x) {   
            if(expo ** exp != x) {
              if (expo ** exp != x) {
                exp += 0.0001;
              }
              exp += 0.001;
            }
            exp += 0.01; 
          } 
          exp += 0.1;
        }
        return exp;

      } 
    
    }

  };

  public wertsfy_mathematics = class WMath {

    mathematics_square = {
    
      constante: 
      { 

        PI:
        {
          valor: 3.141592653589793
        },

        EULER:
        {
          valor: 2.7182818284590452353602874713527
        },

        PLANK: 
        {
          valor: 6.62606896e-34 
        },
        
        NA: 
        {
          valor: 6.022140857e23 
        },
    
        NEWTON: 
        { 
          valor: 0.6931471805599453 
        },
    
        TESLA: 
        {
          valor: 1.6021766208e-19 
        },

        SQRT1: 
        { 
          valor: 1.0 
        },

        SQRT2: 
        {
          valor: 1.414213562373095
        },

        SQRT3: 
        {
          valor: 1.732050807568877
        },

        SQRT4: 
        {
          valor: 2.0
        },

        SQRT5: 
        {
          valor: 2.23606797749979
        },

        SQRT6: 
        {
          valor: 2.449489742783178
        },

        SQRT7: 
        {
          valor: 2.64575131106459
        },

        SQRT8: 
        {
          valor: 2.82842712474619
        },

        SQRT9: 
        {
          valor: 3.0
        },

        SQRT10: 
        {
          valor: 3.16227766016838
        },

        CBRT1: 
        {
          valor: 1.0
        },

        CBRT2: 
        {
          valor: 1.25992104989487
        },

        CBRT3: 
        {
          valor: 1.5874010519682
        },

        CBRT4: 
        {
          valor: 1.99999999999999
        },

        CBRT5: 
        {
          valor: 2.23606797749979
        },

        CBRT6: 
        {
          valor: 2.58198889747161
        },

        CBRT7: 
        {
          valor: 2.91293118277239
        },

        CBRT8: 
        {
          valor: 3.26249509498958
        },

        CBRT9: 
        {
          valor: 3.62449963442055
        },

        CBRT10: 
        {
          valor: 3.99999999999999
        },

        LN2: 
        { 
          valor: 0.6931471805599453
        },

        LN10: 
        {  
          valor: 2.302585092994046
        },
        
        LOG2E: 
        {
          valor: 1.4426950408889634
        },
        
        LOG10E: 
        {
          valor: 0.4342944819032518
        },
      
        MAX_VALUE: 
        {
          valor: 999999999999999
        },
      
        MIN_VALUE: 
        {
          valor: -999999999999999
        }

      },
      
      funcoes:
      {
        
        abs: 
        (x: number): number => {
          return x < 0 ? -1 * x : x;
        },

        absNeg:
        (x: number): number => {
          return -1 * (x < 0 ? -1 * x : x);
        },

        sqrt:
        (x: number): number => {
          return x ** (1 / 2);
        },
      
        sqrtNeg:
        (x: number): number => {
          return -1 * (x ** (1 / 2));
        },

        cbrt:
        (x: number): number => {
          return x ** (1 / 3);
        },
      
        cbrtNeg:
        (x: number): number => {
          return -1 * (x ** (1 / 3));
        },

        quart:
        (x: number): number => {
          return x ** (1 / 4);
        },

        quartNeg:
        (x: number): number => {
          return -1 * (x ** (1 / 4));
        },

        quint:
        (x: number): number => {
          return x ** (1 / 5);
        },

        quintNeg:
        (x: number): number => {
          return -1 * (x ** (1 / 5));
        },

        sext:
        (x: number): number => {
          return x ** (1 / 6);
        },

        sextNeg:
        (x: number): number => {
          return -1 * (x ** (1 / 6));
        },

        sept:
        (x: number): number => {
          return x ** (1 / 7);
        },

        septNeg:
        (x: number): number => {
          return -1 * (x ** (1 / 7));
        },

        oct:
        (x: number): number => {
          return x ** (1 / 8);
        },

        octNeg:
        (x: number): number => {
          return -1 * (x ** (1 / 8));
        },

        non:
        (x: number): number => {
          return x ** (1 / 9);
        },

        nonNeg:
        (x: number): number => {
          return -1 * (x ** (1 / 9));
        },

        dec:
        (x: number): number => {
          return x ** (1 / 10);
        },

        decNeg:
        (x: number): number => {
          return -1 * (x ** (1 / 10));
        },

        pow:
        (x: number, y: number): number => {
          return x ** y;
        },

        powNeg:
        (x: number, y: number): number => {
          return -1 * (x ** y);
        },

        pow2:
        (x: number): number => {
          return 2 ** x;
        },

        pow2Neg:
        (x: number): number => {
          return -1 * (2 ** x);
        },

        pow3:
        (x: number): number => {
          return 3 ** x;
        },

        pow3Neg:
        (x: number): number => {
          return -1 * (3 ** x);
        },

        pow4:
        (x: number): number => {
          return 4 ** x;
        },

        pow4Neg:
        (x: number): number => {
          return -1 * (4 ** x);
        },

        pow5:
        (x: number): number => {
          return 5 ** x;
        },

        pow5Neg:
        (x: number): number => {
          return -1 * (5 ** x);
        },

        pow6:
        (x: number): number => {
          return 6 ** x;
        },

        pow6Neg:
        (x: number): number => {
          return -1 * (6 ** x);
        },

        pow7:
        (x: number): number => {
          return 7 ** x;
        },

        pow7Neg:
        (x: number): number => {
          return -1 * (7 ** x);
        },

        pow8:
        (x: number): number => {
          return 8 ** x;
        },

        pow8Neg:
        (x: number): number => {
          return -1 * (8 ** x);
        },

        pow9:
        (x: number): number => {
          return 9 ** x;
        },

        pow9Neg:
        (x: number): number => {
          return -1 * (9 ** x);
        },

        pow10:
        (x: number): number => {
          return 10 ** x;
        },
        
        pow10Neg:
        (x: number): number => {
          return -1 * (10 ** x);
        },

  powOfPow(x: number, y: number, z?: number[]): number {
    let rest;
    if(z != null) {
      let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
      return rest = x ** (y ** l);
    }
    return rest;
  },

  powOfPowNeg(x: number, y: number, z?: number[]): number {
    let rest;
    if(z != null) {
      let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
      return rest = -1 * x ** (y ** l);
    }
    return rest;
  },

  max(x: number[]): number {
    let max = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] > max) { max = x[i]; }
    }
    return max;
  },

  min(x: number[]): number {
    let min = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] < min) { min = x[i]; }
    }
    return min;
  }


      }
    
    };

  };
  public wertsfy_terminal = class WTerminal { };
  public wertsfy_spectrals = class WSpectrals { };
  public wertsfy_lydroc = class WLydroc { };
  public wertsfy_karzok = class WKarzok { };
  public wersfty_blogmk = class WBlogmk { };


} export var architectureboard = new Architectureboard();

console.log(new architectureboard.wertsfy_mathematics().mathematics_square.constante.PI);
console.log("[Wertsfy ArchitectureBoard] Testing finished!");

console.log("\n\n");

new architectureboard.wertsfy_command_line_interface().cli_parser;
