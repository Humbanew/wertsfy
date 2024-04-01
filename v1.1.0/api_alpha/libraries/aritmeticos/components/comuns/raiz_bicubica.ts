import { RaizCubica } from "./raiz_cubica";

/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */
export let RaizBicubica = (x: number): number => {
  return RaizCubica(RaizCubica(x));  
};
