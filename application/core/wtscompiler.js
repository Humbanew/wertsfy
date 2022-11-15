import shelljs from "shelljs";

function nomeDiretorio() { return prompt("Insira o nome do diretório de destino: "); }
const compile = shelljs.exec(`npx tsc --outDir ${nomeDiretorio()}`);

export default compile;
