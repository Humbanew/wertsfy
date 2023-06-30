import { WConstSqrtCbrtCollectionObject, WConstShortcutsCollectionObject } from "./warch.type";

/**
 * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
 * 
 * **``Interface de Definição [Definition Interface] | Component``**
 * 
 * É a definição de um componente, podendo ser categorizado de diversas naturezas distintas. [_It is the definition of a component and can be categorized of several distinct natures._]
 */
export declare interface IWComponent {
  
  /**  
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Arquitetura de Componente [Component Architecture] | Base``**
   */
  src: {
    
    /**  
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Arquitetura de Componente [Component Architecture] | Number``**
     */
    number?: number

    /**  
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Arquitetura de Componente [Component Architecture] | String``**
     */
    string?: string

    /**  
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Arquitetura de Componente [Component Architecture] | Function``**
     */
    function?: Function

    /**  
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Arquitetura de Componente [Component Architecture] | Object``**
     */
    object?: {
      
      /**  
       * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
       * 
       * **``Arquitetura de Componente [Component Architecture] | Object - Collections``**
       */
      collections: {
        
        /**  
         * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
         * 
         * **``Arquitetura de Componente [Component Architecture] | Object - Collections - Sqrt & Cbrt``**
         */
        sqrt_cbrt?: WConstSqrtCbrtCollectionObject

        /**  
         * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
         * 
         * **``Arquitetura de Componente [Component Architecture] | Object - Collections - Shortcuts``**
         */
        shortcuts?: WConstShortcutsCollectionObject 
      }
    }

  };

}
