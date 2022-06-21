import { wMath } from "../library/wmath.lib";

export const m001: Basicas["soma"] = ( n1: number, n2: number ): number => { 
  return n1 + n2; 
};

export const m002: Basicas["subtracao"] = ( n1: number, n2: number ): number => { 
  return n1 - n2; 
};

export const m003: Basicas["multiplicacao"] = ( n1: number, n2: number ): number => { 
  return n1 * n2; 
};

export const m004: Basicas["divisao"] = ( n1: number, n2: number ): number => { 
  return n1 / n2; 
};

export const m005: Basicas["potencia"] = ( n1: number, n2: number ): number => { 
  return wMath.pow( n1, n2 ); 
};

export const m006: Basicas["potencia2"] = ( n1: number ): number => {
  return wMath.pow2( n1 );
}

export const m007: Basicas["potencia3"] = ( n1: number ): number => {
  return wMath.pow3( n1 );
}

export const m020: Basicas["potenciaDePotencia"] = ( n1: number, n2: number, n3: number[] ): number => { 
  return wMath.powOfPow( n1, n2, n3 ); 
};
