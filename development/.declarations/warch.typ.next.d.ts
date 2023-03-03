export declare namespace WertsfyPrototipos {

  export namespace Logicos { 

    export interface TComuns {

      formatos: "plus" | "minus" | "divisor" | "multip" | "power"
  
    }

    export interface TAvancados {

      formatos: "sqrt" | "cbrt" | "quart" | "quirt" | "sexrt" | "seprt" | "octrt" | "nonrt" | "decrt" | "sin" | "cos" | "tan" | "sec" | "cosec" | "cotan" | "sinh" | "cosh" | "tanh" | "sech" | "cosech" | "cotanh" | "arcsin" | "arccos" | "arctan" | "arcsec" | "arccosec" | "arccotan" | "arcsinh" | "arccosh" | "arctanh" | "arcsech" | "arccosech" | "arccotanh" | "exp" | "expm1" | "expp1" | "logx" | "logxm1" | "logxp1" | "log2" | "log2m1" | "log2p1" | "log10" | "log10m1" | "log10p1" | "ln" | "lnm1" | "lnp1" | "cologx" | "cologxm1" | "cologxp1" | "colog2" | "colog2m1" | "colog2p1" | "colog10" | "colog10m1" | "colog10p1" | "coln" | "colnm1" | "colnp1" | "antilogx" | "antilogxm1" | "antilogxp1" | "antilog2" | "antilog2m1" | "antilog2p1" | "antilog10" | "antilog10m1" | "antilog10p1" | "antiln" | "antilnm1" | "antilnp1"
  
    }

  }

  export namespace Karzok { }

}

export declare var wertsfyTipos: {
   
  seletor: { 
    
    logicos: { 
    
      comuns: WertsfyPrototipos.Logicos.TComuns    
      avancados: WertsfyPrototipos.Logicos.TAvancados 
    
    }
  
  }

}
