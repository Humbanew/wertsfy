import { Antilogaritmos } from "./Antilogaritmos.class";
import { ArcosTrigonometricos } from "./ArcosTrigonometricos.class";
import { Cologaritmos } from "./Cologaritmos.class";
import { Exponenciais } from "./Exponenciais.class";
import { Logaritmos } from "./Logaritmos.class";
import { Trigonometricos } from "./Trigonometricos.class";
import { ICModules } from "./modulesDeclares";

export abstract class Cientificos implements ICModules {
  public trigonometricos: Trigonometricos;
  public arcosTrigonometricos: ArcosTrigonometricos;
  public logaritmos: Logaritmos;
  public antilogaritmos: Antilogaritmos;
  public cologaritmos: Cologaritmos;
  public exponenciais: Exponenciais;
}
