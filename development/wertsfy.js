"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wertsfy = void 0;
const wcomponents_1 = require("./.components/wcomponents");
const wexport_1 = require("./.declarations/wexport");
/**
 * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
 *
 * **``Base [Root]``**
 *
 * A aplicação de programa de interface extensível. _[The application of an extensible interface program.]_
 */
exports.wertsfy = {
    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     *
     * **``Biblioteca [Library]``**|**``Mathematic``**
     *
     * A releitura da biblioteca de matemática. _[The rereading of the Mathematics Library.]_
     */
    libmath: wcomponents_1.LibraryMathematic,
    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     *
     * **``Biblioteca [Library]``**|**``Calculator``**
     *
     * A biblioteca da Calculadora. _[The Calculator Library.]_
     */
    libcalc: wcomponents_1.LibraryCalculator,
    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     *
     * **``Biblioteca de Tipos [Types Library]``**
     *
     */
    libtypes: wexport_1.WertsfyTypes
};
// Testador
console.log(exports.wertsfy.libmath.Avogadro, exports.wertsfy.libcalc.common(exports.wertsfy.libtypes.Logicos.comum.modelo = "#plus", 5, 6));
