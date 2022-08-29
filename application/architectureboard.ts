'use strict'

import { Command } from "commander";

// Tipos para a criação de libs
  // Nada adicionado aqui.

// Interfaces para a criação de libs
interface conteiner_funcao { id_conteiner: string|number, conteudoBloco: [] }
interface colecao_tipos { nome_colecao: string, tipos: [{}] }
interface colecao_constantes { colecao: [{}] }
interface registro_constante { valor: string|number }
interface registro_nomenclatura { nome: string, formato: string }
interface tokens_gerador { tipo: string, formato: string, conteudo: string }
interface tokens_autenticador { tipo: string, formato: string, token_ligacao: string }

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
        od: this.CLI.command('xpt').argument('-outdir').description("export directory")
      }
    ]
    
    public cli_parser = this.CLI.parse();

  };

  public wertsfy_mathematics = class WMath {

    PI: registro_constante = { 
      valor: 3.141592653589793 
    };
    EULER: registro_constante = {
      valor: 2.7182818284590452353602874713527 
    };
    PLANK: registro_constante = {
      valor: 6.62606896e-34 
    };
    NA: registro_constante = {
      valor: 6.022140857e23 
    };
    NEWTON: registro_constante = { 
      valor: 0.6931471805599453 
    };
    TESLA: registro_constante = {
      valor: 1.6021766208e-19 
    };
    SQRT1: registro_constante = { 
      valor: 1.0 
    };
    SQRT2: registro_constante = {
      valor: 1.414213562373095
    };
    SQRT3: registro_constante = {
      valor: 1.732050807568877
    };
    SQRT4: registro_constante = {
      valor: 2.0
    };
    SQRT5: registro_constante = {
      valor: 2.23606797749979
    };
    SQRT6: registro_constante = {
      valor: 2.449489742783178
    };
    SQRT7: registro_constante = {
      valor: 2.64575131106459
    };
    SQRT8: registro_constante = {
      valor: 2.82842712474619
    };
    SQRT9: registro_constante = {
      valor: 3.0
    };
    SQRT10: registro_constante = {
      valor: 3.16227766016838
    };
    CBRT1: registro_constante = {
      valor: 1.0
    };
    CBRT2: registro_constante = {
      valor: 1.25992104989487
    };
    CBRT3: registro_constante = {
      valor: 1.5874010519682
    };
    CBRT4: registro_constante = {
      valor: 1.99999999999999
    };
    CBRT5: registro_constante = {
      valor: 2.23606797749979
    };
    CBRT6: registro_constante = {
      valor: 2.58198889747161
    };
    CBRT7: registro_constante = {
      valor: 2.91293118277239
    };
    CBRT8: registro_constante = {
      valor: 3.26249509498958
    };
    CBRT9: registro_constante = {
      valor: 3.62449963442055
    };
    CBRT10: registro_constante = {
      valor: 3.99999999999999
    };

    public funcs: conteiner_funcao = { 
      id_conteiner: "#wmath", 
      conteudoBloco: [] 
    }

  };
  public wertsfy_terminal = class WTerminal { };
  public wertsfy_spectrals = class WSpectrals { };
  public wertsfy_lydroc = class WLydroc { };
  public wertsfy_karzok = class WKarzok { };
  public wersfty_blogmk = class WBlogmk { };


} export var architectureboard = new Architectureboard();

console.log(new architectureboard.wertsfy_mathematics().PI);
console.log("[Wertsfy ArchitectureBoard] Testing finished!");

console.log("\n\n");

new architectureboard.wertsfy_command_line_interface().cli_parser;
