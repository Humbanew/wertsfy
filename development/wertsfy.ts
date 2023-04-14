import { LibraryCalculator, LibraryMathematic } from "./.components/wcomponents";
import { WertsfyTypes } from "./.declarations/wexport";

/**
 * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
 * 
 * **``Base [Root]``**
 * 
 * A aplicação de programa de interface extensível. _[The application of an extensible interface program.]_
 */
export let wertsfy=
{
  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Biblioteca [Library]``**|**``Mathematic``**
   * 
   * A releitura da biblioteca de matemática. _[The rereading of the Mathematics Library.]_
   */
  libmath: LibraryMathematic,

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Biblioteca [Library]``**|**``Calculator``**
   * 
   * A biblioteca da Calculadora. _[The Calculator Library.]_
   */
  libcalc: LibraryCalculator,

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Biblioteca de Tipos [Types Library]``**
   * 
   */
  libtypes: WertsfyTypes

};

// Testador
console.log(
  wertsfy.libmath.Avogadro,
  wertsfy.libcalc.common(wertsfy.libtypes.Logicos.comum.modelo = "#plus", 5, 6)
);
