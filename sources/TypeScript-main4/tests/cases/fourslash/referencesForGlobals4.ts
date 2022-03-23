/// <reference path='fourslash.ts'/>

// Global module reference.

// @Filename: referencesForGlobals_1.ts
////[|module [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 0 |}globalModule|] {
////     export f() { };
////}|]

// @Filename: referencesForGlobals_2.ts
////var m = [|globalModule|];

verify.singleReferenceGroup("namespace globalModule", "globalModule");
