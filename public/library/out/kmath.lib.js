exports.__esModule = true;
exports.kMath = void 0;
var KMath = /** @class */ (function () {
    function KMath() {
        /** @description Constante de Arquimedes ou número de Ludoph. */
        this.PI = 3.141592653589793;
        /** @description Constante de Euler. */
        this.E = 2.7182818284590452353602874713527;
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
    /** @description Retorna o valor da raiz quadrada de um número, porém negado. */
    KMath.prototype.sqrtNeg = function (x) {
        return -1 * (Math.pow(x, (1 / 2)));
    };
    /** @description Retorna o valor da raiz cúbica de um número. */
    KMath.prototype.cbrt = function (x) {
        return Math.pow(x, (1 / 3));
    };
    /** @description Retorna o valor da raiz cúbica de um número, porém negado. */
    KMath.prototype.cbrtNeg = function (x) {
        return -1 * (Math.pow(x, (1 / 3)));
    };
    /** @description Retorna o valor da raiz à quarta potência de um número. */
    KMath.prototype.quart = function (x) {
        return Math.pow(x, (1 / 4));
    };
    /** @description Retorna o valor da raiz à quarta potência de um número, porém negado. */
    KMath.prototype.quartNeg = function (x) {
        return -1 * (Math.pow(x, (1 / 4)));
    };
    /** @description Retorna o valor da raiz à quinta potência de um número. */
    KMath.prototype.quint = function (x) {
        return Math.pow(x, (1 / 5));
    };
    /** @description Retorna o valor da raiz à quinta potência de um número, porém negado. */
    KMath.prototype.quintNeg = function (x) {
        return -1 * (Math.pow(x, (1 / 5)));
    };
    /** @description Retorna o valor da raiz à sexta potência de um número. */
    KMath.prototype.sext = function (x) {
        return Math.pow(x, (1 / 6));
    };
    /** @description Retorna o valor da raiz à sexta potência de um número, porém negado. */
    KMath.prototype.sextNeg = function (x) {
        return -1 * (Math.pow(x, (1 / 6)));
    };
    /** @description Retorna o valor da raiz à sétima potência de um número. */
    KMath.prototype.sept = function (x) {
        return Math.pow(x, (1 / 7));
    };
    /** @description Retorna o valor da raiz à sétima potência de um número, porém negado. */
    KMath.prototype.septNeg = function (x) {
        return -1 * (Math.pow(x, (1 / 7)));
    };
    /** @description Retorna o valor da raiz à oitava potência de um número. */
    KMath.prototype.oct = function (x) {
        return Math.pow(x, (1 / 8));
    };
    /** @description Retorna o valor da raiz à oitava potência de um número, porém negado. */
    KMath.prototype.octNeg = function (x) {
        return -1 * (Math.pow(x, (1 / 8)));
    };
    /** @description Retorna o valor da raiz à nona potência de um número. */
    KMath.prototype.non = function (x) {
        return Math.pow(x, (1 / 9));
    };
    /** @description Retorna o valor da raiz à nona potência de um número, porém negado. */
    KMath.prototype.nonNeg = function (x) {
        return -1 * (Math.pow(x, (1 / 9)));
    };
    /** @description Retorna o valor da raiz à décima potência de um número. */
    KMath.prototype.dec = function (x) {
        return Math.pow(x, (1 / 10));
    };
    /** @description Retorna o valor da raiz à décima potência de um número, porém negado. */
    KMath.prototype.decNeg = function (x) {
        return -1 * (Math.pow(x, (1 / 10)));
    };
    /** @description Retorna o valor da potência de um número. */
    KMath.prototype.pow = function (x, y) {
        return Math.pow(x, y);
    };
    /** @description Retorna o valor da potência de um número, porém negada. */
    KMath.prototype.powNeg = function (x, y) {
        return -1 * (Math.pow(x, y));
    };
    /** @description Retorna o valor da potência de dois. */
    KMath.prototype.pow2 = function (x) {
        return Math.pow(2, x);
    };
    /** @description Retorna o valor da potência de dois, porém negada. */
    KMath.prototype.pow2Neg = function (x) {
        return -1 * (Math.pow(2, x));
    };
    /** @description Retorna o valor da potência de três. */
    KMath.prototype.pow3 = function (x) {
        return Math.pow(3, x);
    };
    /** @description Retorna o valor da potência de três, porém negada. */
    KMath.prototype.pow3Neg = function (x) {
        return -1 * (Math.pow(3, x));
    };
    /** @description Retorna o valor da potência de quatro. */
    KMath.prototype.pow4 = function (x) {
        return Math.pow(4, x);
    };
    /** @description Retorna o valor da potência de quatro, porém negada. */
    KMath.prototype.pow4Neg = function (x) {
        return -1 * (Math.pow(4, x));
    };
    /** @description Retorna o valor da potência de cinco. */
    KMath.prototype.pow5 = function (x) {
        return Math.pow(5, x);
    };
    /** @description Retorna o valor da potência de cinco, porém negada. */
    KMath.prototype.pow5Neg = function (x) {
        return -1 * (Math.pow(5, x));
    };
    /** @description Retorna o valor da potência de seis. */
    KMath.prototype.pow6 = function (x) {
        return Math.pow(6, x);
    };
    /** @description Retorna o valor da potência de seis, porém negada. */
    KMath.prototype.pow6Neg = function (x) {
        return -1 * (Math.pow(6, x));
    };
    /** @description Retorna o valor da potência de sete. */
    KMath.prototype.pow7 = function (x) {
        return Math.pow(7, x);
    };
    /** @description Retorna o valor da potência de sete, porém negada. */
    KMath.prototype.pow7Neg = function (x) {
        return -1 * (Math.pow(7, x));
    };
    /** @description Retorna o valor da potência de oito. */
    KMath.prototype.pow8 = function (x) {
        return Math.pow(8, x);
    };
    /** @description Retorna o valor da potência de oito, porém negada. */
    KMath.prototype.pow8Neg = function (x) {
        return -1 * (Math.pow(8, x));
    };
    /** @description Retorna o valor da potência de nove. */
    KMath.prototype.pow9 = function (x) {
        return Math.pow(9, x);
    };
    /** @description Retorna o valor da potência de nove, porém negada. */
    KMath.prototype.pow9Neg = function (x) {
        return -1 * (Math.pow(9, x));
    };
    /** @description Retorna o valor da potência de dez. */
    KMath.prototype.pow10 = function (x) {
        return Math.pow(10, x);
    };
    /** @description Retorna o valor da potência de dez, porém negada. */
    KMath.prototype.pow10Neg = function (x) {
        return -1 * (Math.pow(10, x));
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
    /** @description Retorna o maior número de uma sequência. */
    KMath.prototype.max = function (x) {
        var max = x[0];
        for (var i = 1; i < x.length; i++) {
            if (x[i] > max) {
                max = x[i];
            }
        }
        return max;
    };
    /** @description Retorna o menor número de uma sequência. */
    KMath.prototype.min = function (x) {
        var min = x[0];
        for (var i = 1; i < x.length; i++) {
            if (x[i] < min) {
                min = x[i];
            }
        }
        return min;
    };
    /** @description Retorna o valor do arrendodamento de um número. */
    KMath.prototype.round = function (x) { };
    /** @description Retorna o valor do arrendodamento de um número, porém negado. */
    KMath.prototype.roundNeg = function (x) { };
    /** @description Retorna o valor do arrendodamento de um número para cima. */
    KMath.prototype.ceil = function (x) { };
    /** @description Retorna o valor do arrendodamento de um número para cima, porém negado. */
    KMath.prototype.ceilNeg = function (x) { };
    /** @description Retorna o valor do arrendodamento de um número para baixo. */
    KMath.prototype.floor = function (x) { };
    /** @description Retorna o valor do arrendodamento de um número para baixo, porém negado. */
    KMath.prototype.floorNeg = function (x) { };
    /** @description Retorna o valor do logaritmo natural de um número. */
    KMath.prototype.ln = function (x) { };
    /** @description Retorna o valor do logaritmo de base 2 de um número. */
    KMath.prototype.log2 = function (x) { };
    //? log de 5 na base 2
    // 2**2=4
    // 2**2.1=4.2870938501451726569
    // 2**2.2=4.5947934199881400272
    // 2**2.3=4.924577653379665138
    // 2**2.31=4.9588307997559462464
    // 2**2.32=4.9933221956064476944
    // 2**2.321=4.9967845026135068021
    // 2**2.322=5.0002492103408362096 (valor encontrado) [precisão de 3 casas decimais]
    // 2**2.33=5.0280534980873134087 (valor encontrado) [precisão de 2 casas decimais]
    /** @description Retorna o valor do logaritmo de base 10 de um número. */
    KMath.prototype.log10 = function (x) { };
    /** @description Retorna o valor do seno de um número. */
    KMath.prototype.sin = function (x) { };
    /** @description Retorna o valor do seno de um número, porém negado. */
    KMath.prototype.sinNeg = function (x) { };
    /** @description Retorna o valor do cosseno de um número. */
    KMath.prototype.cos = function (x) { };
    /** @description Retorna o valor do cosseno de um número, porém negado. */
    KMath.prototype.cosNeg = function (x) { };
    /** @description Retorna o valor da tangente de um número. */
    KMath.prototype.tan = function (x) { };
    /** @description Retorna o valor da tangente de um número, porém negado. */
    KMath.prototype.tanNeg = function (x) { };
    /** @description Retorna o valor da secante de um número. */
    KMath.prototype.sec = function (x) { };
    /** @description Retorna o valor da secante de um número, porém negado. */
    KMath.prototype.secNeg = function (x) { };
    /** @description Retorna o valor da cosecante de um número. */
    KMath.prototype.cossec = function (x) { };
    /** @description Retorna o valor da cosecante de um número, porém negado. */
    KMath.prototype.cossecNeg = function (x) { };
    /** @description Retorna o valor da cotangente de um número. */
    KMath.prototype.cotan = function (x) { };
    /** @description Retorna o valor da cotangente de um número, porém negado. */
    KMath.prototype.cotanNeg = function (x) { };
    /** @description Retorna o valor da arcoseno de um número. */
    KMath.prototype.arcsin = function (x) { };
    /** @description Retorna o valor da arcoseno de um número, porém negado. */
    KMath.prototype.arcsinNeg = function (x) { };
    /** @description Retorna o valor da arccosseno de um número. */
    KMath.prototype.arccos = function (x) { };
    /** @description Retorna o valor da arccosseno de um número, porém negado. */
    KMath.prototype.arccosNeg = function (x) { };
    /** @description Retorna o valor da arctangente de um número. */
    KMath.prototype.arctan = function (x) { };
    /** @description Retorna o valor da arctangente de um número, porém negado. */
    KMath.prototype.arctanNeg = function (x) { };
    /** @description Retorna o valor da arcsecante de um número. */
    KMath.prototype.arcsec = function (x) { };
    /** @description Retorna o valor da arcsecante de um número, porém negado. */
    KMath.prototype.arcsecNeg = function (x) { };
    /** @description Retorna o valor da arccosecante de um número. */
    KMath.prototype.arccossec = function (x) { };
    /** @description Retorna o valor da arccosecante de um número, porém negado. */
    KMath.prototype.arccossecNeg = function (x) { };
    /** @description Retorna o valor da arccotangente de um número. */
    KMath.prototype.arccotan = function (x) { };
    /** @description Retorna o valor da arccotangente de um número, porém negado. */
    KMath.prototype.arccotanNeg = function (x) { };
    /** @description Retorna o valor do seno hiperbólico de um número. */
    KMath.prototype.sinh = function (x) { };
    /** @description Retorna o valor do seno hiperbólico de um número, porém negado. */
    KMath.prototype.sinhNeg = function (x) { };
    /** @description Retorna o valor do cosseno hiperbólico de um número. */
    KMath.prototype.cosh = function (x) { };
    /** @description Retorna o valor do cosseno hiperbólico de um número, porém negado. */
    KMath.prototype.coshNeg = function (x) { };
    /** @description Retorna o valor da tangente hiperbólica de um número. */
    KMath.prototype.tanh = function (x) { };
    /** @description Retorna o valor da tangente hiperbólica de um número, porém negado. */
    KMath.prototype.tanhNeg = function (x) { };
    /** @description Retorna o valor da secante hiperbólica de um número. */
    KMath.prototype.sech = function (x) { };
    /** @description Retorna o valor da secante hiperbólica de um número, porém negado. */
    KMath.prototype.sechNeg = function (x) { };
    /** @description Retorna o valor da cosecante hiperbólica de um número. */
    KMath.prototype.cossech = function (x) { };
    /** @description Retorna o valor da cosecante hiperbólica de um número, porém negado. */
    KMath.prototype.cossechNeg = function (x) { };
    /** @description Retorna o valor da cotangente hiperbólica de um número. */
    KMath.prototype.cotanh = function (x) { };
    /** @description Retorna o valor da cotangente hiperbólica de um número, porém negado. */
    KMath.prototype.cotanhNeg = function (x) { };
    /** @description Retorna o valor da arcoseno hiperbólico de um número. */
    KMath.prototype.arcsinh = function (x) { };
    /** @description Retorna o valor da arcoseno hiperbólico de um número, porém negado. */
    KMath.prototype.arcsinhNeg = function (x) { };
    /** @description Retorna o valor da arccosseno hiperbólico de um número. */
    KMath.prototype.arccosh = function (x) { };
    /** @description Retorna o valor da arccosseno hiperbólico de um número, porém negado. */
    KMath.prototype.arccoshNeg = function (x) { };
    /** @description Retorna o valor da arctangente hiperbólica de um número. */
    KMath.prototype.arctanh = function (x) { };
    /** @description Retorna o valor da arctangente hiperbólica de um número, porém negado. */
    KMath.prototype.arctanhNeg = function (x) { };
    /** @description Retorna o valor da arcsecante hiperbólica de um número. */
    KMath.prototype.arcsech = function (x) { };
    /** @description Retorna o valor da arcsecante hiperbólica de um número, porém negado. */
    KMath.prototype.arcsechNeg = function (x) { };
    /** @description Retorna o valor da arccosecante hiperbólica de um número. */
    KMath.prototype.arccossech = function (x) { };
    /** @description Retorna o valor da arccosecante hiperbólica de um número, porém negado. */
    KMath.prototype.arccossechNeg = function (x) { };
    /** @description Retorna o valor da arccotangente hiperbólica de um número. */
    KMath.prototype.arccotanh = function (x) { };
    /** @description Retorna o valor da arccotangente hiperbólica de um número, porém negado. */
    KMath.prototype.arccotanhNeg = function (x) { };
    return KMath;
}());
exports.kMath = new KMath();
