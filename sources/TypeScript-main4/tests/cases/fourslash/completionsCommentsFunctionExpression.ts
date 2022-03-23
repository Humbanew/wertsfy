/// <reference path='fourslash.ts' />

// test arrow doc comments
/////** lambdaFoo var comment*/
////var lambdaFoo = /** this is lambda comment*/ (/**param a*/a: number, /**param b*/b: number) => /*2*/a + b;
////var lambddaNoVarComment = /** this is lambda multiplication*/ (/**param a*/a: number, /**param b*/b: number) => a * b;
/////*4*/lambdaFoo(10, 20);

// test nested arrow doc comments
////function anotherFunc(a: number) {
////    /** documentation
////        @param b {string} inner parameter */
////    var lambdaVar = /** inner docs */(b: string) => {
////        var localVar = "Hello ";
////        return localVar + b;
////    }
////    return lambdaVar("World") + a;
////}

// test function expression doc comments
/////**
//// * On variable
//// * @param s the first parameter!
//// * @returns the parameter's length
//// */
////var assigned = /**
////                * Summary on expression
////                * @param s param on expression
////                * @returns return on expression
////                */function(/** On parameter */s: string) {
////  return /*15*/s.length;
////}
////assigned/*17*/("hey");

verify.baselineCompletions()
