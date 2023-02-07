export declare namespace WMathOperation {

  export interface common {

    formats: "plus"|"minus"|"divisor"|"multip"|"power"

  }

  export interface advanced {

    formats: "sqrt"|"cbrt"|"quart"|"quirt"|"sexrt"|"seprt"|"octrt"|"nonrt"|"decrt"|"sin"|"cos"|"tan"|"sec"|"cosec"|"cotan"|"sinh"|"cosh"|"tanh"|"sech"|"cosech"|"cotanh"|"arcsin"|"arccos"|"arctan"|"arcsec"|"arccosec"|"arccotan"|"arcsinh"|"arccosh"|"arctanh"|"arcsech"|"arccosech"|"arccotanh"|"exp"|"expm1"|"expp1"|"logx"|"logxm1"|"logxp1"|"log2"|"log2m1"|"log2p1"|"log10"|"log10m1"|"log10p1"|"ln"|"lnm1"|"lnp1"|"cologx"|"cologxm1"|"cologxp1"|"colog2"|"colog2m1"|"colog2p1"|"colog10"|"colog10m1"|"colog10p1"|"coln"|"colnm1"|"colnp1"|"antilogx"|"antilogxm1"|"antilogxp1"|"antilog2"|"antilog2m1"|"antilog2p1"|"antilog10"|"antilog10m1"|"antilog10p1"|"antiln"|"antilnm1"|"antilnp1"

  }

  export namespace expressions {

    interface TrianglePitagoras {
      
      formats: ["classic(a and b)", {a: number, b: number}]|["t1(m and n)", {m: number, n: number}]|["t2(a and n)", {a: number, n: number}]|["t3(b, c and h)", {b: number, c: number, h: number}]
    
    }

    interface ClassicOperations { 
      
      formats: "plus"|"minus"|"divisor"|"multip" 
    
    }

    interface ComplexNumbers { 
      
      formats: "plus"|"minus"|'divisor'|"multip"|"power" 
    
    }

    interface Porcentage {

      formats: ["10E2", {value: number}]|["10E3", {value: number}]|["10E4", {value: number}]|["10E5", {value: number}]|["AnyNumber", {value: number, valueTotal: number}]

    }

    interface CartesianFunction { 
      
      formats: "grade1"|"grade2"|"grade3"|"grade4"|"grade5"|"grade6"|"grade7"|"grade8" 
    
    }

    interface Determinant { 
    
      formats: ["d2x2", {a00: number, a01: number, a10: number, a11: number}]|["d3x3", {a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number}]
    
    }

    interface PascalVariables { 
      
      formats: "forca1Null"|"forca2Null"|"area1Null"|"area2Null" 
    
    }

    interface TemperatureVariables { 
      
      formats: "celsiusFahrenheit"|"celsiusKelvin"|"fahrenheitCelsius"|"fahrenheitKelvin"|"kelvinCelsius"|"kelvinFahrenheit" 
    
    }

    interface TitrationVariables { 
      
      formats: "massaBaseNull"|"massaAcidoNull"|"volumeBaseNull"|"volumeAcidoNull"
    
    } 

  }

}
