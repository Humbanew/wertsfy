import { RaizQuadrada } from "./raiz_quadrada";

/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 */
export let RaizBiquadrada = (x: number): number => {
  return RaizQuadrada(RaizQuadrada(x));  
};
