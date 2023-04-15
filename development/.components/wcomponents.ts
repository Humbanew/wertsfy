/// <reference path="../.declarations/warch.d.ts" />
/// <reference path="wcconnection.d.ts" />

import { WComponent } from "../.declarations/warch";
import { WertsfyComponents } from "./wcconnection";

export namespace LibraryMathematic {

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de avogadro. [_Returns the value of avogadro._]
   */
  export const Avogadro: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.avogadro"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de euler. [_Returns the value of euler._]
   */
  export const Euler: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.euler"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 2. [_Returns the value of the logarithm of 2._]
   */
  export const Logarithm2: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm2"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 2 na base euler. [_Returns the logarithm value of 2 at the Euler base._]
   */
  export const Logarithm2e: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm2e"];
  
  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 10. [_Returns the value of the logarithm of 10._]
   */
  export const Logarithm10: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm10"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 10 na base euler. [_Returns the logarithm value of 10 at the Euler base._]
   */
  export const Logarithm10e: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm10e"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor máximo. [_Returns the max value._]
   */
  export const Maxvalue: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.maxvalue"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor mínimo. [_Returns the min value._]
   */
  export const Minvalue: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.minvalue"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de newton. [_Returns the value of newton._]
   */
  export const Newton: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.newton"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de pi. [_Returns the value of pi._]
   */
  export const Pi: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.pi"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de plank. [_Returns the value of plank._]
   */
  export const Plank: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.plank"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de tesla. [_Returns the value of tesla._]
   */
  export const Tesla: WComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.tesla"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Coleção de Constante [Constant Collection]``**
   *  
   * Retorna a lista de constantes de raízes quadradas. [_Returns the list of square roots constants._]
   */
  export const SquareRoot: WComponent["src"]["object"]["collections"]["sqrt_cbrt"]=
    WertsfyComponents.source.math["constant.collection.sqrt"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Coleção de Constante [Constant Collection]``**
   *  
   * Retorna a lista de constantes de raízes cúbicas. [_Returns the list of cubic roots constants._]
   */
  export const CubicRoot: WComponent["src"]["object"]["collections"]["sqrt_cbrt"]=
    WertsfyComponents.source.math["constant.collection.cbrt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor absoluto de um número. [_Returns the absolute value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const abs: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.abs"]; 

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco seno de um número. [_Returns the sine arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arcsin: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsin"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco seno hiperbólico de um número. [_Returns the hiperbolic sine arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arcsinh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsinh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cosseno de um número. [_Returns the cosine arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccos: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cosseno hiperbólico de um número. [_Returns the hiperbolic cosine arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccosh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco tangente de um número. [_Returns the tangent arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arctan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arctan"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco tangente hiperbólico de um número. [_Returns the hiperbolic tangent arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arctanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arctanh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco secante de um número. [_Returns the secant arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arcsec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsec"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco secante hiperbólico de um número. [_Returns the hiperbolic secant arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arcsech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsech"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cosecante de um número. [_Returns the cosecant arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccosec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosec"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cosecante hiperbólico de um número. [_Returns the hiperbolic cosecant arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccosech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosech"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cotangente de um número. [_Returns the cotangent arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccotan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccotan"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cotangente hiperbólico de um número. [_Returns the hiperbolic cotangent arc value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccotanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccotanh"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz quadrada de um número. [_Returns the square root value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sqrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sqrt"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz cúbica de um número. [_Returns the cubic root value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cbrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cbrt"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à quarta potência de um número. [_Returns the value of the root to the fourth power of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const quart: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.quart"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à quinta potência de um número. [_Returns the value of the root to the fifth power of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const quirt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.quirt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à sexta potência de um número. [_Returns the value of the root to the sixth power of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sexrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sexrt"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à sétima potência de um número. [_Returns the value of the root to the seventh power of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const seprt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.seprt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à oitava potência de um número. [_Returns the value of the root to the eighth power of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const octrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.octrt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à nona potência de um número. [_Returns the value of the root to the ninth power of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const nonrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.nonrt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à décima potência de um número. [_Returns the value of the root to the tenth power of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const decrt: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.decrt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do seno de um número. [_Returns the sine value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sin: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sin"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do seno hiperbólico de um número. [_Returns the hiperbolic sine value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sinh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sinh"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do cosseno de um número. [_Returns the cossine value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cos: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do cosseno hiperbólico de um número. [_Returns the hiperbolic cossine value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cosh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da tangente de um número. [_Returns the tangent value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const tan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.tan"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da tangente hiperbólica de um número. [_Returns the hiperbolic tangent value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const tanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.tanh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da secante de um número. [_Returns the secant value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sec"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da secante hiperbólica de um número. [_Returns the hiperbolic secant value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sech"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da cosecante de um número. [_Returns the cosecant value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cosec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosec"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da cosecante hiperbólica de um número. [_Returns the hiperbolic cosecant value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cosech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosech"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da cotangente de um número. [_Returns the cotangent value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cotan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cotan"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da cotangente hiperbólica de um número. [_Returns the hiperbolic cotangent value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cotanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cotanh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna a potência de um número elevado por um valor. [_Returns the power of a high number by a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ {base}
   * 
   * @argument y ***typeof: number*** ⁝ {exponent} 
   * 
   */
  export const pow: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.pow"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna a potência de um número elevado por um valor, este elevado por uma sequência de outras potências. [_Returns the power of a high number by a value, this raised by a sequence of other powers._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ {base}
   * 
   * @argument y ***typeof: number*** ⁝ {exponent} 
   * 
   * @argument z ***typeof: number[]*** ⁝ {exponent of exponent} 
   * 
   */
  export const powofpow: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.powofpow"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o menor valor numérico de uma sequência. [_Returns the lowest numerical value of a sequence._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number[]***
   * 
   */
  export const min: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.min"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o maior valor numérico de uma sequência. [_Returns the highest numerical value of a sequence._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number[]***
   * 
   */
  export const max: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.max"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna um valor numérico aleátorio. [_Returns an rawn numerical value._]
   * 
   */
  export const random: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.random"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 10 de um valor. [_Returns the base logarithm 10 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const log: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 10 menos 1 de um valor. [_Returns the base logarithm 10 minus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const logm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 10 mais 1 de um valor. [_Returns the base logarithm 10 plus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const logp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 2 de um valor. [_Returns the base logarithm 2 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const log2: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 2 menos 1 de um valor. [_Returns the base logarithm 2 minus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const log2m1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2m1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 2 mais 1 de um valor. [_Returns the base logarithm 2 plus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const log2p1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2p1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base qualquer de um valor. [_Returns the base logarithm any of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value }
   * 
   * @argument y ***typeof: number*** ⁝ { base }
   * 
   */
  export const logx: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logx"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base qualquer menos 1 de um valor. [_Returns the base logarithm any minus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value }
   * 
   * @argument y ***typeof: number*** ⁝ { base }
   * 
   */
  export const logxm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logxm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base qualquer mais 1 de um valor. [_Returns the base logarithm any plus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value }
   * 
   * @argument y ***typeof: number*** ⁝ { base }
   * 
   */
  export const logxp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logxp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo natural de um valor. [_Returns the natural logarithm of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const ln: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.ln"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo natural menos 1 de um valor. [_Returns the natural logarithm minus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const lnm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.lnm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo natural mais 1 de um valor. [_Returns the natural logarithm plus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const lnp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.lnp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o exponencial de um valor. [_Returns the exponential of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { base }
   * 
   * @argument y ***typeof: number*** ⁝ { value }
   * 
   */
  export const exp: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.exp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o exponencial menos 1 de um valor. [_Returns the exponential minus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { base }
   * 
   * @argument y ***typeof: number*** ⁝ { value }
   * 
   */
  export const expm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.expm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o exponencial mais 1 de um valor. [_Returns the exponential plus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { base }
   * 
   * @argument y ***typeof: number*** ⁝ { value }
   * 
   */
  export const expp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.expp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor arredondado de um número. [_Returns the rounded value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const round: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.round"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor arredondado de um número de ponto flutuante e/ou decimal. [_Returns the rounded value of a floating and/or decimal point number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const fround: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.fround"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor arredondado pra cima de um número. [_Returns the rounded value on a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const floor: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.floor"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor arredondado pra baixo de um número. [_Returns the rounded value below a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const ceil: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.ceil"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da multiplicação de inteiros de 32-bits. [_Returns the value of 32-bit multiplication._]
   * 
   * ______________________________________
   * 
   * @argument x, y ***typeof: number***
   * 
   */
  export const imul: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.imul"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do sinal de número. [_Returns the value of the number signal._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sign: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sign"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna a parte inteira de um valor decimal. [_Returns the entire part of a decimal value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const trunc: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.trunc"];

}

export namespace LibraryCalculator {

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Coleção de Constante [Constant Collection]``**
   *  
   * Retorna a lista de constantes de atalho da calculadora. [_Returns the list of calculator shortcut constants._]
   */
  export const Shortcuts: WComponent["src"]["object"]["collections"]["shortcuts"]=
    WertsfyComponents.source.calc["constant.shortcuts"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação selecionada. [_Returns the result of the selected operation._]
   * 
   * ______________________________________
   * 
   * @argument operation ***typeof: TComuns***
   * 
   * @argument numbers ***typeof: number[]***
   * 
   */
  export const common: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.common"]; 

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação selecionada. [_Returns the result of the selected operation._]
   * 
   * ______________________________________
   * 
   * @argument operation ***typeof: TAvancados***
   * 
   * @argument numbers ***typeof: number[]***
   * 
   */
  export const advanced: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.advanced"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Boltzmann. [_Returns the result of the operation of Boltzmann's theorem._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { temperature }
   * 
   * @argument y ***typeof: number*** ⁝ { constant }
   * 
   */
  export const expTeoBoltzmann: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.boltzmann"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Coulomb. [_Returns the result of the operation of Coulomb's theorem._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { electric current }
   * 
   * @argument y ***typeof: number*** ⁝ { distance }
   * 
   */
  export const expTeoCoulomb: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.coulomb"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Girard. [_Returns the result of the operation of Girard's theorem._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: string*** ⁝ { expression }
   * 
   */
  export const expTeoGirard: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.girard"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Pascal. [_Returns the result of the operation of Pascal's theorem._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.variaveisDePascal*** ⁝ { operation constructor object }
   * 
   * @argument y ***typeof: number*** ⁝ { force"1" }
   * 
   * @argument z ***typeof: number*** ⁝ { force"2" }
   * 
   * @argument w ***typeof: number*** ⁝ { area"1" }
   * 
   * @argument k ***typeof: number*** ⁝ { area"2" }
   * 
   */
  export const expTeoPascal: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.pascal"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Pitagoras. [_Returns the result of the operation of Pitagoras's theorem._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.triangulosPitagoricos*** ⁝ { operation constructor object }
   * 
   */
  export const expTeoPitagoras: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.pitagoras"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Plank. [_Returns the result of the operation of Plank's theorem._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: string*** ⁝ { energy }
   * 
   * @argument y ***typeof: string*** ⁝ { constant }
   * 
   */
  export const expTeoPlank: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.plank"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Stevin. [_Returns the result of the operation of Stevin's theorem._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { density }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { start height, final height }
   * 
   */
  export const expTeoStevin: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.stevin"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Stirling. [_Returns the result of the operation of Stirling's theorem._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const expTeoStirling: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.stirling"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Tales de Mileto. [_Returns the result of the operation of Tales de Mileto's theorem._]
   * 
   * ______________________________________
   * 
   * @argument x, y, z ***typeof: number***
   * 
   */
  export const expTeoTalesDeMileto: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.tales_mileto"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária do tempo. [_Returns the result of the operation of the time schedule equation._]
   * 
   * ______________________________________
   * 
   * @argument x: { x1, x2 } ***typeof: object: { number, number }*** ⁝ { start time, final time }
   * 
   * @argument y ***typeof: number*** ⁝ { speed }
   * 
   * @argument z ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expEqcHorariaTempo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária do espaço. [_Returns the result of the operation of the space schedule equation._]
   * 
   * ______________________________________
   * 
   * @argument x: { x1, x2 } ***typeof: object: { number, number }*** ⁝ { start space, final space }
   * 
   * @argument y ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expEqcHorariaEspaco: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_espaco"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da velocidade. [_Returns the result of the operation of the speed schedule equation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y ***typeof: number*** ⁝ { time }
   * 
   * @argument z ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expEqcHorariaVelocidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_velocidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da aceleração. [_Returns the result of the operation of the acceleration schedule equation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { acceleration }
   * 
   * @argument y ***typeof: number*** ⁝ { time }
   * 
   * @argument z ***typeof: number*** ⁝ { speed }
   * 
   */
  export const expEqcHorariaAceleracao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_acel"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da força. [_Returns the result of the operation of the force schedule equation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { force }
   * 
   * @argument y ***typeof: number*** ⁝ { time }
   * 
   * @argument z ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expEqcHorariaForca: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_forca"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária do espaco e tempo. [_Returns the result of the operation of the space and time schedule equation._]
   * 
   * ______________________________________
   * 
   * @argument x: { x1, x2 } ***typeof: object: { number, number }*** ⁝ { start time, final time }
   * 
   * @argument y: { y1: y2 } ***typeof: object: { number, number }*** ⁝ { start space, final space }
   * 
   * @argument z ***typeof: number*** ⁝ { speed }
   * 
   * @argument w ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expEqcHorariaEspacoTempo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo_espaco"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária do tempo em um movimento circular uniformente variado. [_Returns the result of the operation of the time schedule of time in a uniformly varied circular motion._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial angular speed }
   * 
   * @argument y ***typeof: number*** ⁝ { angular acceleration }
   * 
   * @argument z ***typeof: number*** ⁝ { time }
   * 
   */
  export const expEqcHorariaTempoMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo_movi_circ_unif_var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária do espaço em um movimento circular uniformente variado. [_Returns the result of the operation of the space equation of space in a uniformly varied circular motion._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial angular position }
   * 
   * @argument y ***typeof: number*** ⁝ { initial angular speed }
   * 
   * @argument z ***typeof: number*** ⁝ { angular acceleration }
   * 
   * @argument w ***typeof: number*** ⁝ { time }
   * 
   */
  export const expEqcHorariaEspacoMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_espaco_movi_circ_unif_var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da posição do movimento harmônico simples. [_Returns the result of the operation of the time of the simple harmonic movement position._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { angular speed }
   * 
   * @argument y ***typeof: number*** ⁝ { amplitude }
   * 
   * @argument z ***typeof: number*** ⁝ { time }
   * 
   * @argument w ***typeof: number*** ⁝ { start level }
   * 
   */
  export const expEqcHorariaPosicaoMovimentoHarmonicoSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_posicao_movi_harm_simp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da velocidade do movimento harmônico simples. [_Returns the result of the operation of the time of the simple harmonic movement speed._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { angular speed }
   * 
   * @argument y ***typeof: number*** ⁝ { amplitude }
   * 
   * @argument z ***typeof: number*** ⁝ { time }
   * 
   * @argument w ***typeof: number*** ⁝ { start level }
   * 
   */
  export const expEqcHorariaVelocidadeMovimentoHarmonicoSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_velocidade_movi_harm_simp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da aceleração do movimento harmônico simples. [_Returns the result of the operation of the time of the simple harmonic movement acceleration._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { angular speed }
   * 
   * @argument y ***typeof: number*** ⁝ { amplitude }
   * 
   * @argument z ***typeof: number*** ⁝ { time }
   * 
   * @argument w ***typeof: number*** ⁝ { start level }
   * 
   */
  export const expEqcHorariaAceleracaoMovimentoHarmonicoSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_acel_movi_harm_simp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação de Torricelli. [_Returns the result of the operation of the Torricelli equation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial speed }
   * 
   * @argument y ***typeof: number*** ⁝ { acceleration }
   * 
   * @argument z ***typeof: object: { number, number }*** ⁝ { start space, final space }
   * 
   */
  export const expEqcTorricelli: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.torricelli"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação de Lagrange. [_Returns the result of the operation of the Lagrange Equation._]
   * 
   * ______________________________________
   * 
   * @argument x, y, xi, yi, xii, yii, xiii, yiii ***typeof: number***
   * 
   */
  export const expEqcLagrange: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.lagrange"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do fatorial de um valor. [_Returns the result of the factorial of a value._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const expClcFatorial: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.fatorial"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da combinação de dois valores. [_Returns the result of the combination of two values._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { total }
   * 
   * @argument y ***typeof: number*** ⁝ { divisor }
   * 
   */
  export const expClcCombinacao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.combinacao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do arranjo de dois valores. [_Returns the result of the arrangement of two values._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { total }
   * 
   * @argument y ***typeof: number*** ⁝ { divisor }
   * 
   */
  export const expClcArranjo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.arranjo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da probabilidade de dois valores. [_Returns the result of the probability of two values._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value }
   * 
   * @argument y ***typeof: number*** ⁝ { total value }
   * 
   */
  export const expClcProbabilidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.probabilidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do conjugado de um número complexo. [_Returns the result of the conjugate of a complex number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: string*** ⁝ { expression }
   * 
   */
  export const expClcConjugadoNumeroComplexo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.conjugado_num_complex"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da relação de euler. [_Returns the result of the operation of Euler's relationship._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { vertices }
   * 
   * @argument y ***typeof: number*** ⁝ { edges }
   * 
   * @argument z ***typeof: number*** ⁝ { faces }
   * 
   */
  export const expClcRelacaoEuler: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.relacao_euler"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do representante da potenciação de i, do número complexo. [_Returns the result of the representative of the power of I, of the complex number._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const expClcPotenciasDeI: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencias_de_i"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo de porcentagem. [_Returns the result of the percentage calculation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.porcentagem*** ⁝ { operation constructor object }
   * 
   */
  export const expClcPorcentagem: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.porcentagem"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da determinante. [_Returns the result of the determinant calculation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.determinantes*** ⁝ { operation constructor object }
   * 
   */
  export const expClcDeterminante: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.determinante"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo entre polinômios. [_Returns the result of the calculation between polynomials._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.operacoesComuns*** ⁝ { operation constructor object }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { polynomials sentence 1, polynomials sentence 2 }
   * 
   */
  export const expClcPolinomios: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.polinomios"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo entre matrizes. [_Returns the result of the calculation between arrays._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.operacoesComuns*** ⁝ { operation constructor object }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number[][], number[][] }*** ⁝ { matrix sentence 1, matrix sentence 2 }
   * 
   */
  export const expClcMatrizes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.matrizes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da velocidade. [_Returns the result of the speed calculation._]
   * 
   * ______________________________________
   * 
   * @argument x: { x1: x2 } ***typeof: object: { number, number }*** ⁝ { initial space, final space }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcVelocidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.velocidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do espaço. [_Returns the result of the space calculation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcEspaco: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.espaco"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do tempo. [_Returns the result of the time calculation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial space, final space }
   * 
   */
  export const expClcTempo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.tempo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da aceleração. [_Returns the result of the acceleration calculation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcAceleracao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.aceleracao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da energia cinética. [_Returns the result of the calculation of kinetic energy._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { speed }
   * 
   */
  export const expClcEnergiaCinetica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_cinetica"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da energia potencial elástica. [_Returns the result of the calculation of elastic potential energy._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { elastic constant }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial distance, final distance }
   * 
   */
  export const expClcEnergiaPotencialElastica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_potencial_elas"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da energia potencial gravitacional. [_Returns the result of the calculation of gravitational potential energy._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { height }
   * 
   */
  export const expClcEnergiaPotencialGravitacional: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_potencial_grav"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do potencial mecânico. [_Returns the result of the calculation of mecanic potential._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y ***typeof: number*** ⁝ { elastical constant }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial distance, final distance }
   * 
   * @argument w ***typeof: number*** ⁝ { massa }
   * 
   * @argument k ***typeof: number*** ⁝ { gravity }
   * 
   * @argument t ***typeof: number*** ⁝ { height }
   * 
   * @argument r ***typeof: boolean*** ⁝ { elastic potential energy exists }
   * 
   * @argument s ***typeof: boolean*** ⁝ { gravitational potential energy exists }
   * 
   */
  export const expClcPotencialMecanico: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencial_mecanico"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do potencial elástico. [_Returns the result of the calculation of elastic potential._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { elastic constant }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial distance, final distance }
   * 
   */
  export const expClcPotencialElastico: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencial_elastico"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do plano inclinado sem atrito. [_Returns the result of the calculation of frictionless inclined plan._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   */
  export const expClcPlanoInclinadoSemAtrito: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.plano_incl_sem_atrito"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do plano inclinado com atrito. [_Returns the result of the calculation of frictionful inclined plan._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { friction force }
   * 
   * @argument y ***typeof: number*** ⁝ { massa }
   * 
   * @argument z ***typeof: number*** ⁝ { gravity }
   * 
   * @argument w ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcPlanoInclinadoComAtrito: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.plano_incl_com_atrito"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da aceleração do plano inclinado no eixo x. [_Returns the result of calculating the tilted plane acceleration on the x axis._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcAceleracaoPlanoInclinadoEixoX: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_plan_incl_eixo_x"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da aceleração do plano inclinado no eixo y. [_Returns the result of calculating the tilted plane acceleration on the y axis._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcAceleracaoPlanoInclinadoEixoY: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_plan_incl_eixo_y"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do lançamento horizontal. [_Returns the result of the horizontal release calculation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { gravity }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcLancamentoHorizontal: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lancamento_horizontal"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da altura máxima de um lançamento vertical. [_Returns the result of the maximum height calculation of a vertical release._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial speed }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcAlturaMaxLancamentoVertical: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alt_max_lanc_vert"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do alcance de um lançamento vertical. [_Returns the result of the scope calculation of a vertical release._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   * @argument z ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcAlcanceLancamentoVertical: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alc_lanc_vert"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do alcance máximo de um lançamento vertical. [_Returns the result of the maximum scope calculation of a vertical release._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcAlcanceMaxLancamentoVertical: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alc_max_lanc_vert"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do calor sensível. [_Returns the result of the sensitive heat calculation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { specific heat }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial temperature, final temperature }
   * 
   */
  export const expClcCalorSensivel: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.calor_sensivel"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do calor latente. [_Returns the result of the latent heat calculation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { quantifier of heat }
   * 
   * @argument y ***typeof: number*** ⁝ { massa }
   * 
   */
  export const expClcCalorLatente: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.calor_latente"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo das leis de newton. [_Returns the result of the calculation of Newton Laws._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expClcLeisDeNewton: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.leis_de_newton"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do trabalho. [_Returns the result of the work calculation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { height }
   * 
   */
  export const expClcTrabalho: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.trabalho"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do consumo de energia. [_Returns the result of the calculation of energy consumption._]
   * 
   * ______________________________________
   * 
   * @argument x: {x1, x2} ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   * @argument y ***typeof: number*** ⁝ { electric current }
   * 
   * @argument z ***typeof: number*** ⁝ { ddp }
   * 
   */
  export const expClcConsumoDeEnergia: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.consumo_de_energia"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da força gravitacional. [_Returns the result of the calculation of gravitational force._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { gravitational force }
   * 
   * @argument y ***typeof: number*** ⁝ { planet massa }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial distance, final distance }
   * 
   */
  export const expClcForcaGravitacional: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.forca_gravitacional"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da aceleração centripeta de um movimento circular uniforme. [_Returns the result of the centripetal acceleration calculation of a uniform circular motion._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y ***typeof: number*** ⁝ { ray }
   * 
   */
  export const expClcAceleracaoCentripetaMovimentoCircularUniforme: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_centrip_mcu"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da velocidade angular de um movimento circular uniforme. [_Returns the result of the angle speed calculation of a uniform circular motion._]
   * 
   * ______________________________________
   * 
   * @argument x: { x1, x2 } ***typeof: object: { number, number }*** ⁝ { initial angle, final angle }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcVelocidadeAngularMovimentoCircularUniforme: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.veloc_ang_movi_circ_unif"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da velocidade linear de um movimento circular uniforme. [_Returns the result of the linear speed calculation of a uniform circular motion._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { frequence }
   * 
   * @argument y ***typeof: number*** ⁝ { ray }
   * 
   */
  export const expClcVelocidadeLinearMovimentoCircularUniforme: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.veloc_linear_movi_circ_unif"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo de torricelli de um movimento circular uniformente variado. [_Returns the result of the Torricelli calculation of a uniformly varied circular movement._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial angle speed }
   * 
   * @argument y ***typeof: number*** ⁝ { angle acceleration }
   * 
   * @argument z: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial angular displacement, final angular displacement }
   * 
   */
  export const expClcTorricelliMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.torricelli-movi-circ-unif-var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da aceleração angular de um movimento circular uniformente variado. [_Returns the result of the calculation of the angular acceleration of a uniformly varied circular motion._]
   * 
   * ______________________________________
   * 
   * @argument x: { x1, x2 } ***typeof: object: { number, number }*** ⁝ { initial angle speed, final angle speed }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcAceleracaoAngularMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc_acel_ang_movi_circ_var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da frequência. [_Returns the result of the frequence._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { period }
   * 
   */
  export const expClcFrequencia: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.frequencia"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do período. [_Returns the result of the period._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { frequence }
   * 
   */
  export const expClcPeriodo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.periodo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da temperatura. [_Returns the result of the temperature._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.variaveisDeTemperatura*** ⁝ { operation constructor object }
   * 
   * @argument y ***typeof: number*** ⁝ { value }
   * 
   */
  export const expClcTemperatura: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.temperatura"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da dilatação linear. [_Returns the result of linear dilation._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial length }
   * 
   * @argument y ***typeof: number*** ⁝ { linear dilation coeficient }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial temperature, final temperature }
   * 
   */
  export const expClcDilatacaoLinear: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_linear"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcDilatacaoSuperficial: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_superficial"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcDilatacaoVolumetrica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_volumetrica"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcPrincipioFundamentalHidroestaticaHidrodinamica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.principio_fund_hidroest_hidrodinam"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcEmpuxoHidroestaticaHidrodinamica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.empuxo_hidroes_hidrodinam"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcPesoAparenteHidroestaticaHidrodinamica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.peso_aparente_hidroest_hidrodinam"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcAtrito: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.atrito"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcLeiDeCoulomb: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_coulomb"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcLeideOhm: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_ohm"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcEfeitoJoule: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.efeito_joule"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcLeiDeLenz: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_lenz"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcForcaEletromotriz: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.forca_eletromotriz"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcContraForcaEletromotriz: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.contra_forca_eletromotriz"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcEfeitoFotoeletrico: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.efeito_fotoeletrico"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcDensidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.densidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcTitulacao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.titulacao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcConcentracao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.concentracao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcRendimento: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.rendimento"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcLeiDosGases: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_geral_dos_gases"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcRegraDeTresSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.regra_de_tres_simples"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcRegraDeTresComposta: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.regra_de_tres_composta"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcSistemaDeEquacoes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistema_de_equacoes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcSistemaDeInequacoes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistema_de_inequacoes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcSistemasLineares: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistemas_lineares"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcNumerosComplexos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.numeros_complex"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcJurosSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.juros_simples"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcJurosCompostos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.juros_compostos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcSinalizacaoQuadrantes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sinalizacao_quadrantes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcSinalizacaoOctantes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sinalizacao_octantes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcQuadradoDePunnet: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.quadrado_de_punnet"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcQuadradoDePunnetExtendido: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.quadrado_de_punnet_extendido"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcDiversos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.diversos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcNumericos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.numericos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcDiagramaVenn: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.diagrama_venn"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcCartesianos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.cartesianos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   */
  export const expClcGeometricos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.geometricos"];

}
