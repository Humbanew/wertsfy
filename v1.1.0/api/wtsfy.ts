import { Aritmeticos } from "./libraries/Aritmeticos";
import { Calculator } from "./libraries/Calculator";
import { Cli } from "./libraries/Cli";
import { Conversor } from "./libraries/Conversor";

export const wtsfy = {
  "@humbanew": {
    "@aritmeticos": Aritmeticos,
    "@conversor": Conversor,
    "@calculator": Calculator, 
    "@cli": Cli
  },
  "@third-party": {}, 
};
