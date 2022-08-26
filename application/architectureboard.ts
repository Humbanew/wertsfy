import { Command } from "commander";

// Interfaces para a criação de libs
interface conteiner_funcao { id_conteiner: string|number, conteudoBloco: [] }
interface colecao_tipos { nome_colecao: string, tipos: string[] }
interface registro_constante { nome: string, valor: string|number }
interface registro_nomenclatura { nome: string, formato: string }
interface tokens_gerador { tipo: string, formato: string, conteudo: string }
interface tokens_autenticador { tipo: string, formato: string, token_ligacao: string }

class Architectureboard {

  public wertsfy_command_line_interface = class WCLI {

    public CLI = new Command();
    public cli_name = this.CLI.name('Wertsfy CLI');
    public cli_version = this.CLI.version('v0.0.1-B');
    
    public cli_export_ts = this.CLI.command('export').action( () => { } );
    public cli_export_ts_description = this.cli_export_ts.description("Exporta código Typescript.");
    
    public cli_parser = this.CLI.parse();

  };

  public wertsfy_mathematics = class WMath {

    pi: registro_constante = { nome: "PI Constant", valor: 3.141592653589793 }
    euler: registro_constante = { nome: "Euler Constant", valor: 2.7182818284590452353602874713527 };

  };
  public wertsfy_terminal = class WTerminal { };
  public wertsfy_spectrals = class WSpectrals { };
  public wertsfy_lydroc = class WLydroc { };
  public wertsfy_karzok = class WKarzok { };
  public wersfty_blogmk = class WBlogmk { };


} export var architectureboard = new Architectureboard();

new architectureboard.wertsfy_command_line_interface().cli_parser;

console.log("[Wertsfy ArchitectureBoard] Testing finished!");
