'use strict'

import { Command } from 'commander';

// Interfaces de token de biblioteca
interface token_key { idtoken: string, token: string };

// Tipos de biblioteca
type complex_group_web_colors=unknown;
type complex_group_bash_colors=unknown;
type complex_group_custom_colors=unknown;


class Architectureboard {

  protected wertsfy_kernel_mode = class WKernelMode { };

  protected wertsfy_nikko_module_hint = class WNikkoModHint { };

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

  public wertsfy_mathematics = class WMath {

    public mathematics_square = {
    
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
