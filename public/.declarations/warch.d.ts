declare interface WComponentNumber {
  src: number;
}

declare interface WComponentString {
  src: string;
}

// vulnerabilidade encontrada: qualquer tipo de função pode ser usada pelo componente.
declare interface WComponentFunction { 
  src: Function;
}

declare interface WComponentObject {
  src: { collections: { sqrt_cbrt?: WConstSqrtCbrtCollectionObject, shortcuts?: WConstShortcutsCollectionObject } };
}

declare type WConstSqrtCbrtCollectionObject = { 
  Of01_02: number, Of01_04: number, Of01_06: number, Of01_08: number, Of01: number, Of02: number, Of03: number, Of04: number, Of05: number, Of06: number, Of07: number, Of09: number, Of10: number  
}

declare type WConstShortcutsCollectionObject = {
  Pi: number, Euler: number, Log2: number, Log2e: number, Log10: number, Log10e: number
}

/** @emits Not Implemented */
declare interface WImportConstructor { }
