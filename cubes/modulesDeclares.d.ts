import { Antilogaritmos } from "./Antilogaritmos.class";
import { ArcosTrigonometricos } from "./ArcosTrigonometricos.class";
import { Cientificos } from "./Cientificos.class";
import { Cologaritmos } from "./Cologaritmos.class";
import { Comuns } from "./Comuns.class";
import { Conversores } from "./Conversores.class";
import { Exponenciais } from "./Exponenciais.class";
import { Geometricos } from "./Geometricos.class";
import { Logaritmos } from "./Logaritmos.class";
import { Supremos } from "./Supremos.class";
import { Trigonometricos } from "./Trigonometricos.class";

export declare interface IModules {
  /**
   * Funções modulares de natureza comum
   */
  comuns: Comuns;

  /**
   * Funções modulares de natureza científica
   */
  cientificos: Cientificos;

  /**
   * Funções modulares de natureza suprema
   */
  supremos: Supremos;
}

export declare interface ICModules {
  /**
   * Funções modulares de natureza cienfífica trigonométrica
   */
  trigonometricos: Trigonometricos

  /**
   * Funções modulares de natureza científica dos arcos trigonométricos
   */
  arcosTrigonometricos: ArcosTrigonometricos

  /**
   * Funções modulares de natureza científica logarítmica
   */
  logaritmos: Logaritmos

  /**
   * Funções modulares de natureza científica antilogarítmica
   */
  antilogaritmos: Antilogaritmos

  /**
   * Funções modulares de natureza científica cologarítmica
   */
  cologaritmos: Cologaritmos

  /**
   * Funções modulares de natureza científica exponencial
   */
  exponenciais: Exponenciais
}

export declare interface ISModules {
  /**
   * Funções modulares de natureza suprema geométricos
   */
  geometricos: Geometricos

  /**
   * Funções modulares de natureza suprema conversoras
   */
  conversores: Conversores
}
