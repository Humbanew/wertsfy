/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */
export let PotenciaDePotencia = (x: number, y: number[]): number => {
  let rest: number, potency: number = 1;
  if(y != null) {
    for(let i = 0; i < y.length; i++) {
      potency = potency * y[i];
    }
  }
  rest = x ** potency;
  return rest;
};
