import { MathematicDefines } from "../../../wdefines";
import { mathematic_corebase } from "../../../wertsfy";

export const Macro_math_calculator_advanced_method = (operation: MathematicDefines["advanced"], ...numbers: number[]): number[] => {

  let resultado: number[] = [];

  for(let i = 0; i < numbers.length; i++) {
    
    switch(operation) {
      case "sqrt":
        resultado.push(mathematic_corebase.sqrt(numbers[i])); break;
      case "cbrt":
        resultado.push(mathematic_corebase.cbrt(numbers[i])); break;
      case "quart":
        resultado.push(mathematic_corebase.quart(numbers[i])); break;
      case "quirt":
        resultado.push(mathematic_corebase.quirt(numbers[i])); break;
      case "sexrt":
        resultado.push(mathematic_corebase.sexrt(numbers[i])); break;
      case "seprt":
        resultado.push(mathematic_corebase.seprt(numbers[i])); break;
      case "octrt":
        resultado.push(mathematic_corebase.octrt(numbers[i])); break;
      case "nonrt":
        resultado.push(mathematic_corebase.nonrt(numbers[i])); break;
      case "decrt":
        resultado.push(mathematic_corebase.decrt(numbers[i])); break;
      case "sin":
        resultado.push(mathematic_corebase.sin(numbers[i])); break;
      case "cos":
        resultado.push(mathematic_corebase.cos(numbers[i])); break;
      case "tan":
        resultado.push(mathematic_corebase.tan(numbers[i])); break;
      case "sec":
        resultado.push(mathematic_corebase.sec(numbers[i])); break;
      case "cosec":
        resultado.push(mathematic_corebase.cosec(numbers[i])); break;
      case "cotan":
        resultado.push(mathematic_corebase.cotan(numbers[i])); break;
      case "sinh":
        resultado.push(mathematic_corebase.sinh(numbers[i])); break;
      case "cosh":
        resultado.push(mathematic_corebase.cosh(numbers[i])); break;
      case "tanh":
        resultado.push(mathematic_corebase.tanh(numbers[i])); break;
      case "sech":
        resultado.push(mathematic_corebase.sech(numbers[i])); break;
      case "cosech":
        resultado.push(mathematic_corebase.cosech(numbers[i])); break;
      case "cotanh":
        resultado.push(mathematic_corebase.cotanh(numbers[i])); break;
      case "arcsin":
        resultado.push(mathematic_corebase.arcsin(numbers[i])); break;
      case "arccos":
        resultado.push(mathematic_corebase.arccos(numbers[i])); break;
      case "arctan":
        resultado.push(mathematic_corebase.arctan(numbers[i])); break;
      case "arcsec":
        resultado.push(mathematic_corebase.arcsec(numbers[i])); break;
      case "arccosec":
        resultado.push(mathematic_corebase.arccosec(numbers[i])); break;
      case "arccotan":
        resultado.push(mathematic_corebase.arccotan(numbers[i])); break;
      case "arcsinh":
        resultado.push(mathematic_corebase.arcsinh(numbers[i])); break;
      case "arccosh":
        resultado.push(mathematic_corebase.arccosh(numbers[i])); break;
      case "arctanh":
        resultado.push(mathematic_corebase.arctanh(numbers[i])); break;
      case "arcsech":
        resultado.push(mathematic_corebase.arcsech(numbers[i])); break;
      case "arccosech":
        resultado.push(mathematic_corebase.arccosech(numbers[i])); break;
      case "arccotanh":
        resultado.push(mathematic_corebase.arccotanh(numbers[i])); break;
      case "ln":
        resultado.push(mathematic_corebase.ln(numbers[i])); break;
      case "lnm1":
        resultado.push(mathematic_corebase.lnm1(numbers[i])); break;
      case "lnp1":
        resultado.push(mathematic_corebase.lnp1(numbers[i])); break;
      case "coln":
        resultado.push(-1 * mathematic_corebase.ln(numbers[i])); break;
      case "colnm1":
        resultado.push(-1 * mathematic_corebase.lnm1(numbers[i])); break;
      case "colnp1":
        resultado.push(-1 * mathematic_corebase.lnp1(numbers[i])); break;
      case "antiln":
        resultado.push(1 ** mathematic_corebase.ln(numbers[i])); break;
      case "antilnm1":
        resultado.push(1 ** mathematic_corebase.lnm1(numbers[i])); break;
      case "antilnp1":
        resultado.push(1 ** mathematic_corebase.lnp1(numbers[i])); break;
      case "log2":
        resultado.push(mathematic_corebase.log2(numbers[i])); break;
      case "log2m1":
        resultado.push(mathematic_corebase.log2m1(numbers[i])); break;
      case "log2p1":
        resultado.push(mathematic_corebase.log2p1(numbers[i])); break;
      case "colog2":
        resultado.push(-1 * mathematic_corebase.log2(numbers[i])); break;
      case "colog2m1":
        resultado.push(-1 * mathematic_corebase.log2m1(numbers[i])); break;
      case "colog2p1":
        resultado.push(-1 * mathematic_corebase.log2p1(numbers[i])); break;
      case "antilog2":
        resultado.push(1 ** mathematic_corebase.log2(numbers[i])); break;
      case "antilog2m1":
        resultado.push(1 ** mathematic_corebase.log2m1(numbers[i])); break;
      case "antilog2p1":
        resultado.push(1 ** mathematic_corebase.log2p1(numbers[i])); break;
      case "log10":
        resultado.push(mathematic_corebase.log(numbers[i])); break;
      case "log10m1":
        resultado.push(mathematic_corebase.logm1(numbers[i])); break;
      case "log10p1":
        resultado.push(mathematic_corebase.logp1(numbers[i])); break;
      case "colog10":
        resultado.push(-1 * mathematic_corebase.log(numbers[i])); break;
      case "colog10m1":
        resultado.push(-1 * mathematic_corebase.logm1(numbers[i])); break;
      case "colog10p1":
        resultado.push(-1 * mathematic_corebase.logp1(numbers[i])); break;
      case "antilog10":
        resultado.push(1 ** mathematic_corebase.log(numbers[i])); break;
      case "antilog10m1":
        resultado.push(1 ** mathematic_corebase.logm1(numbers[i])); break;
      case "antilog10p1":
        resultado.push(1 ** mathematic_corebase.logp1(numbers[i])); break;
      case "logx":
        resultado.push(mathematic_corebase.logx(numbers[i], numbers[i+1])); i++; break;
      case "logxm1":
        resultado.push(mathematic_corebase.logxm1(numbers[i], numbers[i+1])); i++; break;
      case "logxp1":
        resultado.push(mathematic_corebase.logxp1(numbers[i], numbers[i+1])); i++; break;          
      case "cologx":
        resultado.push(-1 * mathematic_corebase.logx(numbers[i], numbers[i+1])); i++; break;
      case "cologxm1":
        resultado.push(-1 * mathematic_corebase.logxm1(numbers[i], numbers[i+1])); i++; break;
      case "cologxp1":
        resultado.push(-1 * mathematic_corebase.logxp1(numbers[i], numbers[i+1])); i++; break;          
      case "antilogx":
        resultado.push(1 ** mathematic_corebase.logx(numbers[i], numbers[i+1])); i++; break;
      case "antilogxm1":
        resultado.push(1 ** mathematic_corebase.logxm1(numbers[i], numbers[i+1])); i++; break;
      case "antilogxp1":
        resultado.push(1 ** mathematic_corebase.logxp1(numbers[i], numbers[i+1])); i++; break;
      case "exp":
        resultado.push(mathematic_corebase.exp(numbers[i], numbers[i+1])); i++; break;          
      case "expm1":
        resultado.push(mathematic_corebase.expp1(numbers[i], numbers[i+1])); i++; break;          
      case "expp1":
        resultado.push(mathematic_corebase.expm1(numbers[i], numbers[i+1])); i++; break;          
    }
  
  }

  return resultado;

};
