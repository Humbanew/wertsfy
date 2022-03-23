//// [tests/cases/conformance/declarationEmit/libReferenceDeclarationEmit.ts] ////

//// [file1.ts]
/// <reference lib="dom" />
export declare const elem: HTMLElement;

//// [file2.ts]
/// <reference lib="dom" />
export {}
declare const elem: HTMLElement;

//// [file1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//// [file2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [file1.d.ts]
/// <reference lib="dom" />
export declare const elem: HTMLElement;
//// [file2.d.ts]
/// <reference lib="dom" />
export {};
