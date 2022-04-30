/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo do Arco Seno", ()=>{

  describe("Arcos Senos Positivos", ()=>{
    it("deve retornar o valor do Arco Seno de 1", () => {
      let calc = new ArcoSeno();
      expect(calc.calcular(1)).toEqual(1.57079632);
    });

    it("deve retornar o valor do Arco Seno de 0.1", () => {
      let calc = new ArcoSeno();
      expect(calc.calcular(0.1)).toEqual(0.10016742);
    });
  });

  describe("Arcos Senos Negativos", ()=>{

    it("deve retornar o valor do Arco Seno de -0.1", () => {
      let calc = new ArcoSeno();
      expect(calc.calcular(-0.1)).toEqual(-0.10016742);
    });

    it("deve retornar o valor do Arco Seno de -1", () => {
      let calc = new ArcoSeno();
      expect(calc.calcular(-1)).toEqual(-1.57079632);
    });
  });

  describe("Arcos Senos Neutros", ()=>{

    it("deve retornar o valor do Arco Seno de 0", () => {
      let calc = new ArcoSeno();
      expect(calc.calcular(0)).toEqual(0);
    });
  });
});