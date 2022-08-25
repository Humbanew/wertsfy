import { Command } from "commander";

// Interfaces para a criação de libs
interface conteiner_funcao { id_conteiner: string|number, conteudoBloco: [] }
interface colecao_tipos { nome_colecao: string, tipos: string[] }
interface registro_constante { nome: string, valor: string, descricao: string }
interface registro_nomenclatura { nome: string, formato: string }
interface tokens_gerador { tipo: string, formato: string, conteudo: string }
interface tokens_autenticador { tipo: string, formato: string, token_ligacao: string }

class Architectureboard {

  public wertsfy_command_line_interface = class WCLI {

    public CLI = new Command();
    public cli_name = this.CLI.name('Wertsfy CLI');
    public cli_version = this.CLI.version('v0.0.1-B');

  };

  public wertsfy_mathematics = class WMath { };
  public wertsfy_terminal = class WTerminal { };
  public wertsfy_spectrals = class WSpectrals { };
  public wertsfy_lydroc = class WLydroc { };
  public wertsfy_karzok = class WKarzok { };
  public wersfty_blogmk = class WBlogmk { };


} export var architectureboard = new Architectureboard();
