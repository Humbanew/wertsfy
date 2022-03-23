//// [mappedTypeWithAny.ts]
type Item = { value: string };
type ItemMap<T> = { [P in keyof T]: Item };

declare let x0: keyof any;
declare let x1: { [P in any]: Item };
declare let x2: { [P in string]: Item };
declare let x3: { [P in keyof any]: Item };
declare let x4: ItemMap<any>;

// Repro from #19152

type Data = {
  value: string;
}

type StrictDataMap<T> = {
  [P in keyof T]: Data
}

declare let z: StrictDataMap<any>;
for (let id in z) {
  let data = z[id];
  let x = data.notAValue;  // Error
}


//// [mappedTypeWithAny.js]
"use strict";
for (var id in z) {
    var data = z[id];
    var x = data.notAValue; // Error
}


//// [mappedTypeWithAny.d.ts]
declare type Item = {
    value: string;
};
declare type ItemMap<T> = {
    [P in keyof T]: Item;
};
declare let x0: keyof any;
declare let x1: {
    [P in any]: Item;
};
declare let x2: {
    [P in string]: Item;
};
declare let x3: {
    [P in keyof any]: Item;
};
declare let x4: ItemMap<any>;
declare type Data = {
    value: string;
};
declare type StrictDataMap<T> = {
    [P in keyof T]: Data;
};
declare let z: StrictDataMap<any>;
