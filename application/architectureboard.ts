const cmd = require('commander'), shell = require('shelljs'), fs = require('fs');

// Interfaces para a criação de libs
interface conteiner_funcao { id_conteiner: string|number, conteudoBloco: [] }
interface colecao_tipos { nome_colecao: string, tipos: string[] }
interface registro_constante { nome: string, valor: string, descricao: string }
interface registro_nomenclatura { nome: string, formato: string }
interface tokens_gerador { tipo: string, formato: string, conteudo: string }
interface tokens_autenticador { tipo: string, formato: string, token_ligacao: string }

class Architectureboard {

  protected command_line_interface = [ ];

} export var architectureboard = new Architectureboard();
