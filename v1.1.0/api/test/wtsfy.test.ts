// testando expressoes regulares e criando modelo de input para calculadora
let expressao = /([\{\}\[\]\(\)]{1,})?((\d+)([\+\-\/\*\^\$\%])?(#sqrt)?(#cbrt)?(#sin)?(#cos)?(#tan)?(#sec)?(#cosec)?(#cotan)?)([\{\}\[\]\(\)]{1,})?/gmi;
let unificador = /(\#[a-z]+)/gmi;

let input = '(2+2)-5*8/6+#sqrt5+3';
let result = input.match(expressao);

let valorResultado = undefined;

let separaTokens = (input: string, regex: RegExp) => {
  let result = input.match(regex);
  let result2 = input.match(unificador);
  let tokens = [];
  console.log(result);
  console.log("\x1b[34;1m"+result2+"\x1b[0m");
  result.forEach((element) => {
    for(let i = 0; i < element.length; i++) {
      if(element.slice(i, i+1) === "#") {
        tokens.push(element.match(unificador).toString());
        return;
      }
      tokens.push(element.slice(i, i+1));
    }
  });
  console.log(tokens);
}
separaTokens(input, expressao);

let montaArvoreTokens = () => { }

let realizaOperacoes = (token: Array<string>): number => { 
  return 0; 
}
