import { Conversores } from "./Conversores.class";
import { Geometricos } from "./Geometricos.class";
import { ISModules } from "./modules";

export abstract class Supremos implements ISModules {
  public geometricos: Geometricos;
  public conversores: Conversores;
}
