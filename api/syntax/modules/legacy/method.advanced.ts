/// <reference path="../../.declarations/warch.prototype.d.ts" />
/// <reference path="../wcconnection.d.ts" />

import { WertsfyPrototipos } from "../../.declarations/warch.prototype";
import { WertsfyComponents } from "../wcconnection";

export const Component_math_calculator_advanced_method = (operation: WertsfyPrototipos.Logicos["Core"]["TAvancados"], ...numbers: number[]): number[] => {

  let resultado: number[] = [];

  for(let i = 0; i < numbers.length; i++) {
    
    switch(operation["modelo"]) {
      case "#sqrt":
        resultado.push(
          WertsfyComponents.source.math["method.sqrt"](numbers[i])
        ); break;
      case "#cbrt":
        resultado.push(
          WertsfyComponents.source.math["method.cbrt"](numbers[i])
        ); break;
      case "#quart":
        resultado.push(
          WertsfyComponents.source.math["method.quart"](numbers[i])
        ); break;
      case "#quirt":
        resultado.push(
          WertsfyComponents.source.math["method.quirt"](numbers[i])
        ); break;
      case "#sexrt":
        resultado.push(
          WertsfyComponents.source.math["method.sexrt"](numbers[i])
        ); break;
      case "#seprt":
        resultado.push(
          WertsfyComponents.source.math["method.seprt"](numbers[i])
        ); break;
      case "#octrt":
        resultado.push(
          WertsfyComponents.source.math["method.octrt"](numbers[i])
        ); break;
      case "#nonrt":
        resultado.push(
          WertsfyComponents.source.math["method.nonrt"](numbers[i])
        ); break;
      case "#decrt":
        resultado.push(
          WertsfyComponents.source.math["method.decrt"](numbers[i])
        ); break;
      case "#sin":
        resultado.push(
          WertsfyComponents.source.math["method.sin"](numbers[i])
        ); break;
      case "#cos":
        resultado.push(
          WertsfyComponents.source.math["method.cos"](numbers[i])
        ); break;
      case "#tan":
        resultado.push(
          WertsfyComponents.source.math["method.tan"](numbers[i])
        ); break;
      case "#sec":
        resultado.push(
          WertsfyComponents.source.math["method.sec"](numbers[i])
        ); break;
      case "#cosec":
        resultado.push(
          WertsfyComponents.source.math["method.cosec"](numbers[i])
        ); break;
      case "#cotan":
        resultado.push(
          WertsfyComponents.source.math["method.cotan"](numbers[i])
        ); break;
      case "#sinh":
        resultado.push(
          WertsfyComponents.source.math["method.sinh"](numbers[i])
        ); break;
      case "#cosh":
        resultado.push(
          WertsfyComponents.source.math["method.cosh"](numbers[i])
        ); break;
      case "#tanh":
        resultado.push(
          WertsfyComponents.source.math["method.tanh"](numbers[i])
        ); break;
      case "#sech":
        resultado.push(
          WertsfyComponents.source.math["method.sech"](numbers[i])
        ); break;
      case "#cosech":
        resultado.push(
          WertsfyComponents.source.math["method.cosech"](numbers[i])
        ); break;
      case "#cotanh":
        resultado.push(
          WertsfyComponents.source.math["method.cotanh"](numbers[i])
        ); break;
      case "#arcsin":
        resultado.push(
          WertsfyComponents.source.math["method.arcsin"](numbers[i])
        ); break;
      case "#arccos":
        resultado.push(
          WertsfyComponents.source.math["method.arccos"](numbers[i])
        ); break;
      case "#arctan":
        resultado.push(
          WertsfyComponents.source.math["method.arctan"](numbers[i])
        ); break;
      case "#arcsec":
        resultado.push(
          WertsfyComponents.source.math["method.arcsec"](numbers[i])
        ); break;
      case "#arccosec":
        resultado.push(
          WertsfyComponents.source.math["method.arccosec"](numbers[i])
        ); break;
      case "#arccotan":
        resultado.push(
          WertsfyComponents.source.math["method.arccotan"](numbers[i])
        ); break;
      case "#arcsinh":
        resultado.push(
          WertsfyComponents.source.math["method.arcsinh"](numbers[i])
        ); break;
      case "#arccosh":
        resultado.push(
          WertsfyComponents.source.math["method.arccosh"](numbers[i])
        ); break;
      case "#arctanh":
        resultado.push(
          WertsfyComponents.source.math["method.arctanh"](numbers[i])
        ); break;
      case "#arcsech":
        resultado.push(
          WertsfyComponents.source.math["method.arcsec"](numbers[i])
        ); break;
      case "#arccosech":
        resultado.push(
          WertsfyComponents.source.math["method.arccosech"](numbers[i])
        ); break;
      case "#arccotanh":
        resultado.push(
          WertsfyComponents.source.math["method.arccotanh"](numbers[i])
        ); break;
      case "#ln":
        resultado.push(
          WertsfyComponents.source.math["method.ln"](numbers[i])
        ); break;
      case "#lnm1":
        resultado.push(
          WertsfyComponents.source.math["method.lnm1"](numbers[i])
        ); break;
      case "#lnp1":
        resultado.push(
          WertsfyComponents.source.math["method.lnp1"](numbers[i])
        ); break;
      case "#coln":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.ln"](numbers[i])
        ); break;
      case "#colnm1":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.lnm1"](numbers[i])
        ); break;
      case "#colnp1":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.lnp1"](numbers[i])
        ); break;
      case "#antiln":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.ln"](numbers[i])
        ); break;
      case "#antilnm1":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.lnm1"](numbers[i])
        ); break;
      case "#antilnp1":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.lnp1"](numbers[i])
        ); break;
      case "#log2":
        resultado.push(
          WertsfyComponents.source.math["method.log2"](numbers[i])
        ); break;
      case "#log2m1":
        resultado.push(
          WertsfyComponents.source.math["method.log2m1"](numbers[i])
        ); break;
      case "#log2p1":
        resultado.push(
          WertsfyComponents.source.math["method.log2p1"](numbers[i])
        ); break;
      case "#colog2":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.log2"](numbers[i])
        ); break;
      case "#colog2m1":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.log2m1"](numbers[i])
        ); break;
      case "#colog2p1":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.log2p1"](numbers[i])
        ); break;
      case "#antilog2":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.log2"](numbers[i])
        ); break;
      case "#antilog2m1":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.log2m1"](numbers[i])
        ); break;
      case "#antilog2p1":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.log2p1"](numbers[i])
        ); break;
      case "#log10":
        resultado.push(
          WertsfyComponents.source.math["method.log"](numbers[i])
        ); break;
      case "#log10m1":
        resultado.push(
          WertsfyComponents.source.math["method.logm1"](numbers[i])
        ); break;
      case "#log10p1":
        resultado.push(
          WertsfyComponents.source.math["method.logp1"](numbers[i])
        ); break;
      case "#colog10":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.log"](numbers[i])
        ); break;
      case "#colog10m1":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.logm"](numbers[i])
        ); break;
      case "#colog10p1":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.logp1"](numbers[i])
        ); break;
      case "#antilog10":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.log"](numbers[i])
        ); break;
      case "#antilog10m1":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.logm"](numbers[i])
        ); break;
      case "#antilog10p1":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.logp1"](numbers[i])
        ); break;
      case "#logx":
        resultado.push(
          WertsfyComponents.source.math["method.logx"](numbers[i], numbers[i+1])
        ); i++; break;
      case "#logxm1":
        resultado.push(
          WertsfyComponents.source.math["method.logxm1"](numbers[i], numbers[i+1])
        ); i++; break;
      case "#logxp1":
        resultado.push(
          WertsfyComponents.source.math["method.logxp1"](numbers[i], numbers[i+1])
        ); i++; break;          
      case "#cologx":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.logx"](numbers[i], numbers[i+1])
        ); i++; break;
      case "#cologxm1":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.logxm1"](numbers[i], numbers[i+1])
        ); i++; break;
      case "#cologxp1":
        resultado.push(
          -1 * WertsfyComponents.source.math["method.logxp1"](numbers[i], numbers[i+1])
        ); i++; break;          
      case "#antilogx":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.logx"](numbers[i], numbers[i+1])
        ); i++; break;
      case "#antilogxm1":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.logxm1"](numbers[i], numbers[i+1])
        ); i++; break;
      case "#antilogxp1":
        resultado.push(
          1 ** WertsfyComponents.source.math["method.logxp1"](numbers[i], numbers[i+1])
        ); i++; break;
      case "#exp":
        resultado.push(
          WertsfyComponents.source.math["method.exp"](numbers[i], numbers[i+1])
        ); i++; break;          
      case "#expm1":
        resultado.push(
          WertsfyComponents.source.math["method.expm1"](numbers[i], numbers[i+1])
        ); i++; break;          
      case "#expp1":
        resultado.push(
          WertsfyComponents.source.math["method.expp1"](numbers[i], numbers[i+1])
        ); i++; break;     
             
    }
  
  }

  return resultado;

};
