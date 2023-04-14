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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
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
   * @argument x ***[typeof: number]***
   * 
   */
  export const sech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sech"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do cosecante de um número. [_Returns the cosecant value of a number._]
   * 
   * ______________________________________
   * 
   * @argument x ***[typeof: number]***
   * 
   */
  export const cosec: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosec"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const cosech: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosech"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const cotan: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cotan"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const cotanh: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cotanh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const pow: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.pow"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const powofpow: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.powofpow"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const min: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.min"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const max: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.max"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const random: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.random"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const log: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const logm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const logp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const log2: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const log2m1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2m1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const log2p1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2p1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const logx: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logx"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const logxm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logxm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const logxp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logxp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const ln: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.ln"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const lnm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.lnm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const lnp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.lnp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const exp: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.exp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expm1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.expm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expp1: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.expp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const round: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.round"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const fround: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.fround"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const floor: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.floor"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const ceil: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.ceil"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const imul: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.imul"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const sign: WComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sign"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
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
   * @comentaryDescription
   * 
   * 
   */
  export const common: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.common"]; 

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const advanced: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.advanced"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expTeoBoltzmann: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.boltzmann"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expTeoCoulomb: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.coulomb"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expTeoGirard: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.girard"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expTeoPascal: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.pascal"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expTeoPitagoras: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.pitagoras"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expTeoPlank: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.plank"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expTeoStevin: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.stevin"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expTeoStirling: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.stirling"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expTeoTalesDeMileto: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.tales_mileto"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcHorariaTempo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcHorariaEspaco: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_espaco"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcHorariaVelocidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_velocidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcHorariaAceleracao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_acel"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcHorariaForca: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_forca"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcHorariaEspacoTempo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo_espaco"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcHorariaTempoMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo_movi_circ_unif_var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcHorariaEspacoMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_espaco_movi_circ_unif_var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcHorariaPosicaoMovimentoHarmonicoSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_posicao_movi_harm_simp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcHorariaVelocidadeMovimentoHarmonicoSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_velocidade_movi_harm_simp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcHorariaAceleracaoMovimentoHarmonicoSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_acel_movi_harm_simp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcTorricelli: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.torricelli"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expEqcLagrange: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.lagrange"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcFatorial: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.fatorial"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcCombinacao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.combinacao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcArranjo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.arranjo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcProbabilidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.probabilidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcConjugadoNumeroComplexo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.conjugado_num_complex"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcRelacaoEuler: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.relacao_euler"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcPotenciasDeI: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencias_de_i"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcPorcentagem: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.porcentagem"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcDeterminante: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.determinante"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcPolinomios: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.polinomios"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcMatrizes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.matrizes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcVelocidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.velocidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcEspaco: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.espaco"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcTempo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.tempo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcAceleracao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.aceleracao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcEnergiaCinetica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_cinetica"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcEnergiaPotencialElastica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_potencial_elas"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcEnergiaPotencialGravitacional: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_potencial_grav"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcPotencialMecanico: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencial_mecanico"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcPotencialElastico: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencial_elastico"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcPlanoInclinadoSemAtrito: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.plano_incl_sem_atrito"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcPlanoInclinadoComAtrito: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.plano_incl_com_atrito"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcAceleracaoPlanoInclinadoEixoX: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_plan_incl_eixo_x"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcAceleracaoPlanoInclinadoEixoY: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_plan_incl_eixo_y"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcLancamentoHorizontal: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lancamento_horizontal"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcAlturaMaxLancamentoVertical: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alt_max_lanc_vert"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcAlcanceLancamentoVertical: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alc_lanc_vert"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcAlcanceMaxLancamentoVertical: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alc_max_lanc_vert"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcCalorSensivel: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.calor_sensivel"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcCalorLatente: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.calor_latente"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcLeisDeNewton: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.leis_de_newton"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcTrabalho: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.trabalho"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcConsumoDeEnergia: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.consumo_de_energia"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcForcaGravitacional: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.forca_gravitacional"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcAceleracaoCentripetaMovimentoCircularUniforme: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_centrip_mcu"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcVelocidadeAngularMovimentoCircularUniforme: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.veloc_ang_movi_circ_unif"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcVelocidadeLinearMovimentoCircularUniforme: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.veloc_linear_movi_circ_unif"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcTorricelliMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.torricelli-movi-circ-unif-var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcAceleracaoAngularMovimentoCircularUniformenteVariado: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc_acel_ang_movi_circ_var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcfrequencia: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.frequencia"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcPeriodo: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.periodo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcTemperatura: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.temperatura"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcDilatacaoLinear: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_linear"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcDilatacaoSuperficial: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_superficial"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcDilatacaoVolumetrica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_volumetrica"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcPrincipioFundamentalHidroestaticaHidrodinamica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.principio_fund_hidroest_hidrodinam"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcEmpuxoHidroestaticaHidrodinamica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.empuxo_hidroes_hidrodinam"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcPesoAparenteHidroestaticaHidrodinamica: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.peso_aparente_hidroest_hidrodinam"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcAtrito: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.atrito"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcLeiDeCoulomb: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_coulomb"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcLeideOhm: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_ohm"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcEfeitoJoule: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.efeito_joule"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcLeiDeLenz: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_lenz"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcForcaEletromotriz: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.forca_eletromotriz"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcContraForcaEletromotriz: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.contra_forca_eletromotriz"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcEfeitoFotoeletrico: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.efeito_fotoeletrico"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcDensidade: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.densidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcTitulacao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.titulacao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcConcentracao: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.concentracao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcRendimento: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.rendimento"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcLeiDosGases: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_geral_dos_gases"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcRegraDeTresSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.regra_de_tres_simples"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcRegraDeTresComposta: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.regra_de_tres_composta"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcSistemaDeEquacoes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistema_de_equacoes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcSistemaDeInequacoes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistema_de_inequacoes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcSistemasLineares: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistemas_lineares"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcNumerosComplexos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.numeros_complex"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcJurosSimples: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.juros_simples"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcJurosCompostos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.juros_compostos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcSinalizacaoQuadrantes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sinalizacao_quadrantes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcSinalizacaoOctantes: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sinalizacao_octantes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcQuadradoDePunnet: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.quadrado_de_punnet"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcQuadradoDePunnetExtendido: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.quadrado_de_punnet_extendido"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcDiversos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.diversos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcNumericos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.numericos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcDiagramaVenn: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.diagrama_venn"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcCartesianos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.cartesianos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * @comentaryDescription
   * 
   * 
   */
  export const expClcGeometricos: WComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.geometricos"];

}
