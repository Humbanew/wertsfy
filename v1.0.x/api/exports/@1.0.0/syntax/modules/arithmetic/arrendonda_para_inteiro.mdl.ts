/** **Function** Round() */
export var arrendondaParaInteiro = (x: number): number => {
  const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
  let resultado: any;
  resultado = verificador.exec(x.toString());
  return parseInt(resultado[0]+1);
};
