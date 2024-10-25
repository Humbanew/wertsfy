export var teoremaDeStevin = (densidade: number, gravidade: number, altura: {inicial: number, final: number}): number => {
  return densidade * gravidade * (altura.final - altura.inicial);
};
