//// [tests/cases/compiler/pathMappingInheritedBaseUrl.ts] ////

//// [tsconfig.base.json]
{
  "compilerOptions": {
    "baseUrl": "."
  }
}

//// [index.ts]
export const p1 = 0;

//// [index.ts]
import { p1 } from "p1";


//// [index.js]
"use strict";
exports.__esModule = true;
exports.p1 = void 0;
exports.p1 = 0;
//// [index.js]
"use strict";
exports.__esModule = true;
