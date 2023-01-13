import { Macro_math_calculator_exp_teo_girard_method } from "./expressions/teo-girard";
import { Macro_math_calculator_exp_teo_pitagoras_method } from "./expressions/teo-pitagoras";
import { Macro_math_calculator_exp_teo_tales_mileto_method } from "./expressions/teo-tales-mileto";

interface ExpressionsArch {

  teoGirard: typeof Macro_math_calculator_exp_teo_girard_method;
  teoTalesMileto: typeof Macro_math_calculator_exp_teo_tales_mileto_method;
  teoPitagoras: typeof Macro_math_calculator_exp_teo_pitagoras_method;
  
} export var Macro_math_calculator_expressions_arch: ExpressionsArch;
