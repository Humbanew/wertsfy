/// <reference path='fourslash.ts' />

//// function foo(a: /*a*/{ a: number | string, b: string } & { b: number } & { d: boolean }/*b*/) { }

goTo.select("a", "b");
verify.not.refactorAvailable("Extract type", "Extract to interface")