export const wtsfy = {};

type TTamMemoria = 3|4|5|6;
enum ETipagem {'standard', 'scientific', 'programmer', 'extreme'};
type TTipagem = ETipagem;

interface IDocumentObjectModel {}
interface IJasmine {}

interface ICLI {
    root: string;
    args: Array<string>;
}

abstract class Calculator {
    protected tipagem: TTipagem;
    protected memoria: Array<number>;
    protected analisador: string = '/(([\(\)\{\}\[\]])?(\d+)([\+\^\-\*\/\%]|#sqrt|#cbrt|#sin|#cos|#tan|#sec|#cossec|#cotan)(\d+)([\(\)\{\}\[\]])?)|(([\(\)\{\}\[\]])?([\+\^\-\*\/\%]|#sqrt|#cbrt|#sin|#cos|#tan|#sec|#cossec|#cotan)(\d+)([\(\)\{\}\[\]])?)|(([\(\)\{\}\[\]])?(([\+\^\-\*\/\%])(#sqrt|#cbrt|#sin|#cos|#tan|#sec|#cossec|#cotan))(\d+)([\(\)\{\}\[\]])?)/gmiv';

    constructor(tipagem: TTipagem, tam_memoria: TTamMemoria) {
        this.tipagem = tipagem;
        this.memoria = new Array(tam_memoria);
    }

    parseTree(): void {
        const filtro: Array<String> = RegExp.prototype.exec(this.analisador);
        const listaProcedencia = [];
    }

    parseFunctions(): void {

        if(this.tipagem == 0) { }
        if(this.tipagem == 1) { }
        if(this.tipagem == 2) { }
        if(this.tipagem == 3) { }

    }

}

class Aritmeticos extends Calculator {}
class Conversores {}
class Karzok {}
class Azusa {}
