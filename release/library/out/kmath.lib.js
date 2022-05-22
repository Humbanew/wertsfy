"use strict";
exports.__esModule = true;
exports.kMath = void 0;
var KMath = /** @class */ (function () {
    function KMath() {
        /** @description Constante de Arquimedes ou número de Ludoph. */
        this.PI = 3.141592653589793;
        /** @description Constante de Euler. */
        this.E = 2.718281828459045;
        /** @description Constante da Raiz de um. */
        this.SQRT1 = 1.0;
        /** @description Constante da Raiz de dois. */
        this.SQRT2 = 1.414213562373095;
        /** @description Constante da Raiz de tres. */
        this.SQRT3 = 1.732050807568877;
        /** @description Constante da Raiz de quatro. */
        this.SQRT4 = 2.0;
        /** @description Constante da Raiz de cinco. */
        this.SQRT5 = 2.23606797749979;
        /** @description Constante da Raiz de seis. */
        this.SQRT6 = 2.449489742783178;
        /** @description Constante da Raiz de sete. */
        this.SQRT7 = 2.64575131106459;
        /** @description Constante da Raiz de oito. */
        this.SQRT8 = 2.82842712474619;
        /** @description Constante da Raiz de nove. */
        this.SQRT9 = 3.0;
        /** @description Constante da Raiz de dez. */
        this.SQRT10 = 3.16227766016838;
        /** @description Constante da Raiz Cúbica de um. */
        this.CBRT1 = 1.0;
        /** @description Constante da Raiz Cúbica de dois. */
        this.CBRT2 = 1.25992104989487;
        /** @description Constante da Raiz Cúbica de tres. */
        this.CBRT3 = 1.5874010519682;
        /** @description Constante da Raiz Cúbica de quatro. */
        this.CBRT4 = 1.99999999999999;
        /** @description Constante da Raiz Cúbica de cinco. */
        this.CBRT5 = 2.23606797749979;
        /** @description Constante da Raiz Cúbica de seis. */
        this.CBRT6 = 2.58198889747161;
        /** @description Constante da Raiz Cúbica de sete. */
        this.CBRT7 = 2.91293118277239;
        /** @description Constante da Raiz Cúbica de oito. */
        this.CBRT8 = 3.26249509498958;
        /** @description Constante da Raiz Cúbica de nove. */
        this.CBRT9 = 3.62449963442055;
        /** @description Constante da Raiz Cúbica de dez. */
        this.CBRT10 = 3.99999999999999;
        /** @description Constante de Logaritmo Natural de dois. */
        this.LN2 = 0.6931471805599453;
        /** @description Constante de Logaritmo Natural de dez. */
        this.LN10 = 2.302585092994046;
        /** @description Constante de Logaritmo de 2. */
        this.LOG2E = 1.4426950408889634;
        /** @description Constante de Logaritmo de 10. */
        this.LOG10E = 0.4342944819032518;
        // /** @description Retorna o valor do logaritmo natural de um número, porém negado. */
        // public lnNeg(x: number): number {
        //   return -1 * (x % this.E);
        // }
        // /** @description Retorna o valor do logaritmo de um número. */
        // public log(x: number, y:number): number {
        //   return x % y;
        // }
        // /** @description Retorna o valor do logaritmo de um número, porém negado. */
        // public logNeg(x: number, y:number): number {
        //   return -1 * (x % y);
        // }
        // /** @description Retorna o valor do logaritmo na base 10 de um número. */
        // public log10(x: number): number {
        //   return x % 10;
        // }
        // /** @description Retorna o valor do logaritmo na base 10 de um número, porém negado. */
        // public log10Neg(x: number): number {
        //   return -1 * (x % 10);
        // }
        // /** @description Retorna o valor do logaritmo na base 2 de um número. */
        // public log2(x: number): number {
        //   return x % 2;
        // }
        // /** @description Retorna o valor do logaritmo na base 2 de um número, porém negado. */
        // public log2Neg(x: number): number {
        //   return -1 * (x % 2);
        // }
    }
    /** @description Retorna o valor absoluto de um número. */
    KMath.prototype.abs = function (x) {
        return x < 0 ? -1 * x : x;
    };
    /** @description Retorna o valor absoluto de um número, porém negado. */
    KMath.prototype.absNeg = function (x) {
        return -1 * x;
    };
    /** @description Retorna o valor da raiz quadrada de um número. */
    KMath.prototype.sqrt = function (x) {
        return Math.pow(x, (1 / 2));
    };
    /** @description Retorna o valor da raiz cúbica de um número. */
    KMath.prototype.cbrt = function (x) {
        return Math.pow(x, (1 / 3));
    };
    /** @description Retorna o valor da raiz à quarta potência de um número. */
    KMath.prototype.quart = function (x) {
        return Math.pow(x, (1 / 4));
    };
    /** @description Retorna o valor da raiz à quinta potência de um número. */
    KMath.prototype.quint = function (x) {
        return Math.pow(x, (1 / 5));
    };
    /** @description Retorna o valor da raiz à sexta potência de um número. */
    KMath.prototype.sext = function (x) {
        return Math.pow(x, (1 / 6));
    };
    /** @description Retorna o valor da raiz à sétima potência de um número. */
    KMath.prototype.sept = function (x) {
        return Math.pow(x, (1 / 7));
    };
    /** @description Retorna o valor da raiz à oitava potência de um número. */
    KMath.prototype.oct = function (x) {
        return Math.pow(x, (1 / 8));
    };
    /** @description Retorna o valor da raiz à nona potência de um número. */
    KMath.prototype.non = function (x) {
        return Math.pow(x, (1 / 9));
    };
    /** @description Retorna o valor da raiz à décima potência de um número. */
    KMath.prototype.dec = function (x) {
        return Math.pow(x, (1 / 10));
    };
    /** @description Retorna o valor da potência de um número. */
    KMath.prototype.pow = function (x, y) {
        return Math.pow(x, y);
    };
    /** @description Retorna o valor da potência de dois. */
    KMath.prototype.pow2 = function (x) {
        return Math.pow(2, x);
    };
    /** @description Retorna o valor da potência de três. */
    KMath.prototype.pow3 = function (x) {
        return Math.pow(3, x);
    };
    /** @description Retorna o valor da potência de quatro. */
    KMath.prototype.pow4 = function (x) {
        return Math.pow(4, x);
    };
    /** @description Retorna o valor da potência de cinco. */
    KMath.prototype.pow5 = function (x) {
        return Math.pow(5, x);
    };
    /** @description Retorna o valor da potência de um número, porém negada. */
    KMath.prototype.powNeg = function (x, y) {
        return -1 * (Math.pow(x, y));
    };
    /** @description Retorna o valor da potência de potência um número. */
    KMath.prototype.powOfPow = function (x, y, z) {
        var l = 0;
        for (var i = 0; i < z.length; i++) {
            l += z[i];
        }
        return Math.pow(x, (Math.pow(y, l)));
    };
    /** @description Retorna o valor da potência de potência um número, porém negada. */
    KMath.prototype.powOfPowNeg = function (x, y, z) {
        var l = 0;
        for (var i = 0; i < z.length; i++) {
            l += z[i];
        }
        return -1 * (Math.pow(x, (Math.pow(y, l))));
    };
    /** @description Retorna o valor do logaritmo natural de um número. */
    KMath.prototype.ln = function (x) {
        var log = 0;
        while (x > 0) {
            var i = 0;
            x = x / this.E;
            i++;
            if (x < 0) {
                log = i;
            }
            return log;
        }
    };
    return KMath;
}());
exports.kMath = new KMath();
