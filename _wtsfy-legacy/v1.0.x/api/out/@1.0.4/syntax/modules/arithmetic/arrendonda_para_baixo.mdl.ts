/** **Function** Floor() */
export var arrendondaParaBaixo = (x: number): number => {
  let v: number;
  if (x > x + 0.5) { v = parseInt(x.toString()); }
  return v;
};
