declare interface WComponent {
  src: { number?: number, string?: string, function?: Function, object?: { collections: { sqrt_cbrt?: WConstSqrtCbrtCollectionObject, shortcuts?: WConstShortcutsCollectionObject } }, regex?: undefined, html?: undefined };
}

declare type WConstSqrtCbrtCollectionObject = { 
  Of01_02: number, Of01_04: number, Of01_06: number, Of01_08: number, Of01: number, Of02: number, Of03: number, Of04: number, Of05: number, Of06: number, Of07: number, Of09: number, Of10: number  
}

declare type WConstShortcutsCollectionObject = {
  Pi: number, Euler: number, Log2: number, Log2e: number, Log10: number, Log10e: number
}

/** @emits Not Implemented */
declare interface WImportConstructor { }
