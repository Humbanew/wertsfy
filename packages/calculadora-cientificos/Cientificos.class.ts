import { Antilogaritmos } from "./Antilogaritmos.class";
import { ArcosTrigonometricos } from "./ArcosTrigonometricos.class";
import { Cologaritmos } from "./Cologaritmos.class";
import { Essenciais } from "./Essenciais.class";
import { Exponenciais } from "./Exponenciais.class";
import { Logaritmos } from "./Logaritmos.class";
import { Trigonometricos } from "./Trigonometricos.class";

interface IFLogaritmos
{
  "@logarítmos": Antilogaritmos & Cologaritmos
}

interface IFArcosTrigonometricos
{
  "@arcosTrigonométricos": ArcosTrigonometricos
}


interface IFExponenciais
{
  "@exponenciais": Exponenciais
}

interface IFTrigonometricos
{
  "@trigonométricos": Trigonometricos
}

interface IFEssenciais
{
  "@essenciais": Essenciais
}

export class Cientificos implements IFLogaritmos, IFArcosTrigonometricos, IFExponenciais, IFLogaritmos, IFTrigonometricos, IFEssenciais 
{
  "@logarítmos": Antilogaritmos & Cologaritmos;
  "@arcosTrigonométricos": ArcosTrigonometricos;
  "@exponenciais": Exponenciais;
  "@trigonométricos": Trigonometricos;
  "@essenciais": Essenciais;
} 
