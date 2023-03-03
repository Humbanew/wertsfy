export declare namespace WertsfyPrototipos {

  export namespace Logicos { 

    export interface TComuns {

      formatos(modelo: "#plus" | "#minus" | "#divisor" | "#multip" | "#power"): string;
  
    }

    export interface TAvancados {

      formatos(modelo: "#sqrt" | "#cbrt" | "#quart" | "#quirt" | "#sexrt" | "#seprt" | "#octrt" | "#nonrt" | "#decrt" | "#sin" | "#cos" | "#tan" | "#sec" | "#cosec" | "#cotan" | "#sinh" | "#cosh" | "#tanh" | "#sech" | "#cosech" | "#cotanh" | "#arcsin" | "#arccos" | "#arctan" | "#arcsec" | "#arccosec" | "#arccotan" | "#arcsinh" | "#arccosh" | "#arctanh" | "#arcsech" | "#arccosech" | "#arccotanh" | "#exp" | "#expm1" | "#expp1" | "#logx" | "#logxm1" | "#logxp1" | "#log2" | "#log2m1" | "#log2p1" | "#log10" | "#log10m1" | "#log10p1" | "#ln" | "#lnm1" | "#lnp1" | "#cologx" | "#cologxm1" | "#cologxp1" | "#colog2" | "#colog2m1" | "#colog2p1" | "#colog10" | "#colog10m1" | "#colog10p1" | "#coln" | "#colnm1" | "#colnp1" | "#antilogx" | "#antilogxm1" | "#antilogxp1" | "#antilog2" | "#antilog2m1" | "#antilog2p1" | "#antilog10" | "#antilog10m1" | "#antilog10p1" | "#antiln" | "#antilnm1" | "#antilnp1"): string;

    }

    export interface TExpressoes {
      
      determinantes(modelo: [ "#d2x2", { a00: number, a01: number, a10: number, a11: number }]|[ "#d3x3", { a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number }]): string;

      funcoesCartesianas(modelo: "#grade1" | "#grade2" | "#grade3" | "#grade4" | "#grade5" | "#grade6" | "#grade7" | "#grade8"): string;
      
      operacoesComuns(modelo: "#plus" | "#minus" | "#divisor" | "#multip"): string;
      
      porcentagem(modelo: [ "#10E2", { value: number }]|[ "#10E3", { value: number }]|[ "#10E4", { value: number }]|[ "#10E5", { value: number }]|[ "#AnyNumber", { value: number, valueTotal: number }]): string;
      
      triangulosPitagoricos(modelo: [ "#classic(a and b)", { a: number, b: number }]|[ "#t1(m and n)", { m: number, n: number }]|[ "#t2(a and n)", { a: number, n: number }]|[ "#t3(b, c and h)", { b: number, c: number, h: number }]): string;

      variaveisDePascal(modelo: "#forca1Null" | "#forca2Null" | "#area1Null" | "#area2Null"): string;

      variaveisDeTemperatura(modelo: "#celsiusFahrenheit" | "#celsiusKelvin" | "#fahrenheitCelsius" | "#fahrenheitKelvin" | "#kelvinCelsius" | "#kelvinFahrenheit"): string;

      variaveisDeTitulacao(modelo: "#massaBaseNull" | "#massaAcidoNull" | "#volumeBaseNull" | "#volumeAcidoNull"): string;

    }
   
    /** @deprecated No use this. @description Behind Module */
    class WMCalcConv { readonly conversores = 0; }

  }

  export namespace Karzok { }

}
