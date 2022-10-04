"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = require("shelljs");
const compile = shelljs_1.default.exec("npx tsc");
exports.default = compile;
//# sourceMappingURL=wtscompiler.js.map