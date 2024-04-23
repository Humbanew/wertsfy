// testando expressoes regulares e criando modelo de input para calculadora
let expressao = /([\+\-\/\*\^\$\%]|\^\^)?([\{\}\[\]\(\)]{1,})?((\d+)([\+\-\/\*\^\$\%]|\^\^)?(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?)([\{\}\[\]\(\)]{1,})?|(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?(\d+)/gmi;
let unificador = /(\#[a-z]+)/gmi;

let input = '[(3+5)*5]';
let result = input.match(expressao);

let valorResultado = undefined;

let separaTokens = (input: string, regex: RegExp): Array<string> => {
  let result = input.match(regex);
  let tokens = [];
  result.forEach((element) => {
    for(let i = 0; i < element.length; i++) {
      if(element.slice(i, i+1) === "#") {
        tokens.push(element.match(unificador).toString());
        return;
      }
      tokens.push(element.slice(i, i+1));
    }
  });
  return tokens;
}

// funções ainda não implementadas na classe Calculator #f00
type TTamMemoria = 3|4|5|6;
type TTipagem = 'standard'|'scientific'|'conversor'|'programmer'|'extreme';

let parseArvoreTokens = (token: Array<string>): Object => { 
  let arvore: Object = {};
  const listaProcedencia = [
    ['+', '-'], // nivel de procedência '0'
    ['*', '/'], // nivel de procedência '1'
    ['^', '$'], // nivel de procedência '2'
    ['#sin', '#cos', '#tan', '#sec', '#cosec', '#cotan', '#sqrt', '#cbrt'], // nivel de procedência '3'
    ['(', ')'], // nivel de procedência '4'
    ['[', ']'], // nivel de procedência '5'
    ['{', '}'], // maior nível de procedência '6'
  ];

  // 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> null

  for(let i = 0; i < token.length; i++) {

    if(token[i] === '{') { }
    if(token[i] === '[') { }
    if(token[i] === '(') { }

  }

  console.log(token);
  console.log(arvore);

  return arvore;
}

function parseFuncionalidades(active: TTipagem): void {

  if (active === 'standard') { }
  if (active === 'scientific') { }

}

parseArvoreTokens( separaTokens( input, expressao ) );
