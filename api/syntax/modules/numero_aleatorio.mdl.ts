import { memoryUsage } from "process";

export var numeroAleatorio = (): number => {
  return memoryUsage().arrayBuffers / 1024 / 1024 / 10;  
};

let a = numeroAleatorio();
console.log(a);
