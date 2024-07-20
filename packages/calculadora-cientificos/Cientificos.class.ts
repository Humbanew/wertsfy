import { Antilogaritmos } from "./Antilogaritmos.class";
import { ArcosTrigonometricos } from "./ArcosTrigonometricos.class";
import { Cologaritmos } from "./Cologaritmos.class";
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

export class Cientificos implements IFAntilogaritmos, IFArcosTrigonometricos, IFCologaritmos, IFExponenciais, IFLogaritmos, IFTrigonometricos 
{
  "@antilogarítmos": Antilogaritmos;
  "@arcosTrigonométricos": ArcosTrigonometricos;
  "@cologarítmos": Cologaritmos;
  "@exponenciais": Exponenciais;
  "@logarítmos": Logaritmos;
  "@trigonométricos": Trigonometricos;
} 
