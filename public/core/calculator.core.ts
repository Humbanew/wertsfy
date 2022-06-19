import { wMath } from "../library/wmath.lib";

const m01: Basicas["soma"] = (n1: number, n2: number) => { return n1 + n2; }

const m02: Basicas["subtracao"] = (n1: number, n2: number) => { return n1 - n2; }

const m03: Basicas["multiplicacao"] = (n1: number, n2: number) => { return n1 * n2; }

const m04: Basicas["divisao"] = (n1: number, n2: number) => { return n1 / n2; }

const m05: Basicas["potencia"] = (n1: number, n2: number) => { return wMath.pow(n1, n2); }