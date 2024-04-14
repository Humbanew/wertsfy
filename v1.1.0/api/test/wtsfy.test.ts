// testando expressoes regulares e criando modelo de input para calculadora
let expressao = /([\[\]\{\}\(\)]{1,})?(\d+)([\[\]\{\}\(\)]{1,})?([\+\-\/\*\^\%\$]|#dblsqrt|#dblcbrt|#sqrt|#cbrt|#sin|#cos|#tan|#sec|#cosec|#cotan([\[\]\{\}\(\)]{1,})?(\d+)([\[\]\{\}\(\)]{1,})?)?/gmi;

let input = '(2+2)-5*8/6';
let result = input.match(expressao);

let separaTokens = (input: string, regex: RegExp) => {
  let result = input.match(regex);
  let tokens = [];
  console.log(result);
  result.forEach((element) => {
    for(let i = 0; i < element.length; i++) {
      tokens.push(element.slice(i, i+1));
    }
  });
  console.log(tokens);
}
separaTokens(input, expressao);


