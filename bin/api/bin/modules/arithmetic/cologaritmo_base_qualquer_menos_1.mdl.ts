import { _logaritmoBase } from "./private/logaritmo.private.mdl"

export var cologaritmoBaseQualquerMenos1 = (base: number, x: number): number => {
  return (-1 * _logaritmoBase(base, x)) - 1;
};
