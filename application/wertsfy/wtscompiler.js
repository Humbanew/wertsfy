import shelljs from "shelljs";
const compile = shelljs.exec("npx tsc");
export default compile;
