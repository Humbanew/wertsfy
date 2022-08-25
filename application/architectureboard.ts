const cmd = require('commander'), shell = require('shelljs'), fs = require('fs');

// Interfaces para a criação de libs
interface conteiner_funcao { id_conteiner: string|number, conteudoBloco: [] }
interface registro_constante { nome: string, valor: string, descricao: string }
interface registro_nomenclatura { nome: string, formato: string }
