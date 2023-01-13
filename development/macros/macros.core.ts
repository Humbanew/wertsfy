import { Macro_math_calculator_advanced_method } from "./math-calculator/advanced.method";
import { Macro_math_calculator_common_method } from "./math-calculator/common.method";
import { Macro_math_calculator_expressions_arch } from "./math-calculator/expressions.arch";
import { Macro_math_calculator_shortcuts_constant } from "./math-calculator/shortcuts.constant";
import { Macro_math_corebase_arch } from "./math-corebase/corebase.arch";


export namespace Macros {

  export const math_corebase = Macro_math_corebase_arch;

  export const math_calculator = {

    shortcuts_constant: Macro_math_calculator_shortcuts_constant,
    common_method: Macro_math_calculator_common_method,
    advanced_method: Macro_math_calculator_advanced_method,
    expressions_arch: Macro_math_calculator_expressions_arch,

  }

};
