import { Conversores } from "./Conversores.class";
import { Geometricos } from "./Geometricos.class";
import { ISModules } from "./modulesDeclares";

export abstract class Supremos implements ISModules {
  public geometricos: Geometricos;
  public conversores: Conversores;
}
