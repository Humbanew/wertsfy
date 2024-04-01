/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */
export let PotenciaDePotencia = (x: number, y: number[]): number => {
  let rest: any;
  if(y != null) {
    let l = 0; for (let i = 0; i < y.length; i++) { l += y[i]; }
    return rest = x ** l;
  }
  return rest;
};
