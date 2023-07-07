/** 
 * 
 *
*/
let teste: number = 0;

interface ISeletor {

  opcoes:
// [*] => funções inexistentes 
  // Calc - Common
  "#soma" | "#subtracao" | "#divisao" | "#multiplicacao" | "#potencia"

  // Calc - Expressions

  // Math - 0letra-a
  | "#abs" | "#arcsin" | "#arcsinh" | "#arccos" | "#arccosh" | "#arctan" | "#arctanh" | "#arcsec" | "#arcsech" | "#arccosec" | "#arccosech" | "#arccotan" | "#arccotanh" 

  // Math - 0letra-c
  | "#cbrt" | "#ceil"

  // Math - 0letra-d
  | "#decrt"

  // Math - 0letra-e
  | "#exp" | "#expm1" | "#expp1"

  // Math - 0letra-f
  | "#floor" | "#fround"

  // Math - 0letra-i
  | "#imul"

  // Math - 0letra-l
  | "#ln" | "#lnm1" | "#lnp1" | "#log" | "#logm1" | "#logp1" | "#log2" | "#log2m1" | "#log2p1" | "#logx" | "#logxm1" | "#logxp1"

  // Math - 0letra-m
  | "max" | "min"

  // Math - 0letra-n
  | "#nonrt"

  // Math - 0letra-o
  | "octrt"

  // Math - 0letra-p
  | "#pow" | "*#powm1" | "*#powp1" | "#powofpow" | "*#powofpowm1" | "*#powofpowp1"

  // Math - 0letra-q
  | "#quart" | "#quirt"

  // Math - 0letra-r
  | "#random" | "#round"

  // Math - 0letra-s
  | "#sec" | "#sech" | "#seprt" | "#sexrt" | "#sign" | "#sin" | "#sinh" | "#sqrt"

  // Math - 0letra-t
  | "#tan" | "#tanh" | "#trunc"


} var Seletor: ISeletor["opcoes"];

interface IFabricator {

  returns: Function | ClassMemberDecoratorContext;

} var Fabricator: IFabricator["returns"];

interface IException {

  message: string;

} var Exception: IException["message"];

export const Aritmeticos =
{

  Consts: {

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor de avogadro. [_Returns the value of avogadro._]

     * @return { Number }
     * 
     */
    c_avogadro: 6.022140857e23,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 1/2. [_Returns the cubic root of 1/2._]
     * 
     * @return { Number }
     * 
     */
    c_cbrt_of01_02: 0.7071067811865476,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 1/4. [_Returns the cubic root of 1/4._]

     * @return { Number }
     * 
     */
    c_cbrt_of01_04: 0.50000000000000,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 1/6. [_Returns the cubic root of 1/6._]

     * @return { Number }
     * 
     */
    c_cbrt_of01_06: 0.408248290463863,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 1/8. [_Returns the cubic root of 1/8._]

     * @return { Number }
     * 
     */
    c_cbrt_of01_08: 0.3535533905932738,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 1. [_Returns the cubic root of 1._]

     * @return { Number }
     * 
     */
    c_cbrt_of01: 1.00000000000000,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 2. [_Returns the cubic root of 2._]
     * 
     * @return { Number }
     * 
     */
    c_cbrt_of02: 1.25992104989487,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 3. [_Returns the cubic root of 3._]
     * 
     * @return { Number }
     * 
     */
    c_cbrt_of03: 1.5874010519682,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 4. [_Returns the cubic root of 4._]
     * 
     * @return { Number }
     * 
     */
    c_cbrt_of04: 1.99999999999999,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 5. [_Returns the cubic root of 5._]
     * 
     * @return { Number }
     * 
     */
    c_cbrt_of05: 2.23606797749979,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 6. [_Returns the cubic root of 6._]
     * 
     * @return { Number }
     * 
     */
    c_cbrt_of06: 2.58198889747161,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 7. [_Returns the cubic root of 7._]
     * 
     * @return { Number }
     * 
     */
    c_cbrt_of07: 2.91293118277239,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 8. [_Returns the cubic root of 8._]
     * 
     * @return { Number }
     * 
     */
    c_cbrt_of08: 3.26249509498958,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 9. [_Returns the cubic root of 9._]
     * 
     * @return { Number }
     * 
     */
    c_cbrt_of09: 3.62449963442055,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz cúbica de 10. [_Returns the cubic root of 10._]
     * 
     * @return { Number }
     * 
     */
    c_cbrt_of10: 3.99999999999999,

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor de coulomb. [_Returns the value of coulomb._]

     * @return { Number }
     * 
     */
    c_coulomb: 1.60217657e-19,

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor de euler. [_Returns the value of euler._]

     * @return { Number }
     * 
     */
    c_euler: 2.7182818284590452353602874713527,

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor do logaritmo de 2. [_Returns the value of the logarithm of 2._]

     * @return { Number }
     * 
     */
    c_logarithm2: 0.6931471805599453,

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor do logaritmo de 2 na base euler. [_Returns the logarithm value of 2 at the Euler base._]

     * @return { Number }
     * 
     */
    c_logarithm2e: 1.4426950408889634,

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor do logaritmo de 10. [_Returns the value of the logarithm of 10._]

     * @return { Number }
     * 
     */
    c_logarithm10: 2.302585092994046,

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor do logaritmo de 10 na base euler. [_Returns the logarithm value of 10 at the Euler base._]

     * @return { Number }
     * 
     */
    c_logarithm10e: 0.43429448190325183,

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor máximo. [_Returns the max value._]

     * @return { Number }
     * 
     */
    c_maxvalue: 999999999999999,

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor mínimo. [_Returns the min value._]

     * @return { Number }
     * 
     */
    c_minvalue: -999999999999999,

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor de newton. [_Returns the value of newton._]

     * @return { Number }
     * 
     */
    c_newton: 0.6931471805599453,

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor de pi. [_Returns the value of pi._]

     * @return { Number }
     * 
     */
    c_pi: 3.141592653589793,


    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor de plank. [_Returns the value of plank._]

     * @return { Number }
     * 
     */
    c_plank: 6.62606957e-34,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 1/2. [_Returns the square root of 1/2._]

     * @return { Number }
     * 
     */
    c_sqrt_of01_02: 0.7937005259840998,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 1/4. [_Returns the square root of 1/4._]

     * @return { Number }
     * 
     */
    c_sqrt_of01_04: 0.6299605249474366,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 1/6. [_Returns the square root of 1/6._]

     * @return { Number }
     * 
     */
    c_sqrt_of01_06: 0.5503212081491045,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 1/8. [_Returns the square root of 1/8._]

     * @return { Number }
     * 
     */
    c_sqrt_of01_08: 0.500000000000000,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 1. [_Returns the square root of 1._]

     * @return { Number }
     * 
     */
    c_sqrt_of01: 1.00000000000000,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 2. [_Returns the square root of 2._]

     * @return { Number }
     * 
     */
    c_sqrt_of02: 1.414213562373095,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 3. [_Returns the square root of 3._]

     * @return { Number }
     * 
     */
    c_sqrt_of03: 1.732050807568877,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 4. [_Returns the square root of 4._]

     * @return { Number }
     * 
     */
    c_sqrt_of04: 2.00000000000000,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 5. [_Returns the square root of 5._]

     * @return { Number }
     * 
     */
    c_sqrt_of05: 2.23606797749979,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 6. [_Returns the square root of 6._]

     * @return { Number }
     * 
     */
    c_sqrt_of06: 2.449489742783178,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 7. [_Returns the square root of 7._]

     * @return { Number }
     * 
     */
    c_sqrt_of07: 2.64575131106459,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 8. [_Returns the square root of 8._]

     * @return { Number }
     * 
     */
    c_sqrt_of08: 2.82842712474619,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 9. [_Returns the square root of 9._]

     * @return { Number }
     * 
     */
    c_sqrt_of09: 3.00000000000000,

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor da raiz quadrada de 10. [_Returns the square root of 10._]

     * @return { Number }
     * 
     */
    c_sqrt_of10: 3.16227766016838,

    /** 
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Constante [Constant]``**
     *  
     * Retorna o valor de tesla. [_Returns the value of tesla._]

     * @return { Number }
     * 
     */
    c_tesla: 1.60217657e-19

  },

  Metodo: (S: typeof Seletor, ...Nmbs: number[] | object[]) => { }

};
