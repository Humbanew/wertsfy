/**
 * @description Define o tamanho do jogo que será criado.
 */
declare interface TamanhoJogo {
  /** 
   * @description número de casas n² 
   */
  quantidade: number;
}

/** 
 * @description Define o modo de jogo a ser configurado. 
 */
declare interface ModoJogo {
  /** 
   * @description nome do modo de jogo. 
   */
  modo: string;
}

/** 
 * @description Define o esquema de cores a ser configurado. 
 */
declare interface EsquemaDeCores {
  /**
   * @description nome do esquema. 
   */
  nome: string;
  
  /**
   * @description cores do esquema. 
   */
  cores: string[];

  /**
   * @description identificador do esquema. 
   */
  identificador: string;
}

/** 
 * @description Define a pontuação de um bloco do jogo a ser configurado. 
 */
declare interface PontuacaoBloco { 
  /** 
   * @description valor da pontuação do bloco. 
   */
  valor: number,
  
  /**
   * @description cor da pontuação do bloco. 
   */
  corBackground: string 
}

/** 
 * @description Define a pontuação do jogo a ser configurado. 
 */
declare interface PontuacaoTotal {
 /** 
  * @description valor da pontuação. 
  */
  valor: number
}

/** 
 * @description Define o rank de jogo a ser configurado. 
 */
declare interface Rank { 
  /**
  * @description valor do rank. 
  */
  valor: string 
}