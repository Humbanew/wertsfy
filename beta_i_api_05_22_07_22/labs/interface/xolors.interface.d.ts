/**
 * @description Define as camadas de um esquema de cores.
 */
export interface Camada {
  /**
   * @description identificador da camada.
   */ 
  id: number;

  /**
   * @description nome da camada.
   */
  nome: string;
  
  /**
   * @description cores da camada.
   */
  cor: string[];
}

/**
 * @description Define o esquema de cores.
 */
export interface Esquema {
  /**
   * @description identificador do esquema.
   */
  id: number;
  
  /**
   * @description nome do esquema.
   */
  nome: string;
  
  /**
   * @description camadas do esquema.
   */
  camadas: Camada[];
}
