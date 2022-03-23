//// [tests/cases/compiler/unusedImports3.ts] ////

//// [file1.ts]
export class Calculator {
    handleChar() {}
}

export function test() {

}

export function test2() {

}

//// [file2.ts]
import {Calculator, test, test2} from "./file1"

test();
test2();

//// [file1.js]
"use strict";
exports.__esModule = true;
exports.test2 = exports.test = exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.handleChar = function () { };
    return Calculator;
}());
exports.Calculator = Calculator;
function test() {
}
exports.test = test;
function test2() {
}
exports.test2 = test2;
//// [file2.js]
"use strict";
exports.__esModule = true;
var file1_1 = require("./file1");
(0, file1_1.test)();
(0, file1_1.test2)();
