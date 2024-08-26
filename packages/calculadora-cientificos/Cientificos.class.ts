import { Antilogaritmos } from "./Antilogaritmos.class";
import { ArcosTrigonometricos } from "./ArcosTrigonometricos.class";
import { Cologaritmos } from "./Cologaritmos.class";
import { Essenciais } from "./Essenciais.class";
import { Exponenciais } from "./Exponenciais.class";
import { Logaritmos } from "./Logaritmos.class";
import { Trigonometricos } from "./Trigonometricos.class";

interface IFAntilogaritmos
{
  "@antilogarítmos": Antilogaritmos
}

interface IFArcosTrigonometricos
{
  "@arcosTrigonométricos": ArcosTrigonometricos
}

interface IFCologaritmos
{
  "@cologarítmos": Cologaritmos
}

interface IFExponenciais
{
  "@exponenciais": Exponenciais
}

interface IFLogaritmos
{
  "@logarítmos": Logaritmos
}

interface IFTrigonometricos
{
  "@trigonométricos": Trigonometricos
}

interface IFEssenciais
{
  "@essenciais": Essenciais
}

export class Cientificos implements IFAntilogaritmos, IFArcosTrigonometricos, IFCologaritmos, IFExponenciais, IFLogaritmos, IFTrigonometricos, IFEssenciais 
{
  "@antilogarítmos": Antilogaritmos;
  "@arcosTrigonométricos": ArcosTrigonometricos;
  "@cologarítmos": Cologaritmos;
  "@exponenciais": Exponenciais;
  "@logarítmos": Logaritmos;
  "@trigonométricos": Trigonometricos;
  "@essenciais": Essenciais;
} 
