/** **Function** Ceil() */
/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */
export let ArrendondaParaCima = (x: number): number => {
  return x > parseInt(x.toString())+0.5 ? parseInt(x.toString()) + 1 : parseInt(x.toString());
};
