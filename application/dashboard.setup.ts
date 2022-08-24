/** @copyright Copyright 2021-2022 */
const cmd = require('commander'), shell = require('shelljs');

// Interfaces para a criação de libs
interface constant_register { name: string, value: string, description: string }
interface function_container { conteiner_id: string|number, contentBlock: [] }
