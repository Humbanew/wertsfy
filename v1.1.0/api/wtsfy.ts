export const wtsfy = {};

type TTamMemoria = 3|4|5|6;
enum ETipagem {'standard', 'scientific', 'programmer', 'extreme'};
type TTipagem = ETipagem;

interface IDocumentObjectModel {}
interface IJasmine {}
interface ICLI {}

abstract class Calculator {
    protected tipagem: TTipagem;
    protected memoria: Array<number>;
    protected analisador: string|RegExp = '/^((\d+)([\+\-\*\/\^\sqrt\cbrt])(\d+))+$/gi';

    constructor(tipagem: TTipagem, tam_memoria: TTamMemoria) {
        this.tipagem = tipagem;
        this.memoria = new Array(tam_memoria);
    }

    parseTree(): void {}
}

class Aritmeticos {}
class Conversores {}
class Karzok {}
class Azusa {}
