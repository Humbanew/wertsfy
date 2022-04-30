describe("Módulo da Potência", function() {

  describe("Elementos Positivos", function() {

    describe("Expoente 1", function() {

      it("deve potenciar a Base 1 (array primário) com o Expoente 1 (array secundário) ", function() {

        var a = [1];

        var b = [1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(1);
      });
      
      it("deve potenciar a Base 2 (array primário) com o Expoente 1 (array secundário) ", function() {

        var a = [2];

        var b = [1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(2);
      });

      it("deve potenciar a Base 3 (array primário) com o Expoente 1 (array secundário) ", function() {

        var a = [3];

        var b = [1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(3);
      });

      it("deve potenciar a Base 4 (array primário) com o Expoente 1 (array secundário) ", function() {

        var a = [4];

        var b = [1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(4);
      });

      it("deve potenciar a Base 5 (array primário) com o Expoente 1 (array secundário) ", function() {

        var a = [5];

        var b = [1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(5);
      });

      it("deve potenciar a Base 6 (array primário) com o Expoente 1 (array secundário) ", function() {

        var a = [6];

        var b = [1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(6);
      });
    });

    describe("Expoente 2", function() {

      it("deve potenciar a Base 1 (array primário) com o Expoente 2 (array secundário) ", function() {

        var a = [1];

        var b = [2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(1);
      });
      
      it("deve potenciar a Base 2 (array primário) com o Expoente 2 (array secundário) ", function() {

        var a = [2];

        var b = [2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(4);
      });

      it("deve potenciar a Base 3 (array primário) com o Expoente 2 (array secundário) ", function() {

        var a = [3];

        var b = [2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(9);
      });

      it("deve potenciar a Base 4 (array primário) com o Expoente 2 (array secundário) ", function() {

        var a = [4];

        var b = [2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(16);
      });

      it("deve potenciar a Base 5 (array primário) com o Expoente 2 (array secundário) ", function() {

        var a = [5];

        var b = [2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(25);
      });

      it("deve potenciar a Base 6 (array primário) com o Expoente 2 (array secundário) ", function() {

        var a = [6];

        var b = [2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(36);
      });
    });

    describe("Expoente 3", function() {

      it("deve potenciar a Base 1 (array primário) com o Expoente 3 (array secundário) ", function() {

        var a = [1];

        var b = [3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(1);
      });
      
      it("deve potenciar a Base 2 (array primário) com o Expoente 3 (array secundário) ", function() {

        var a = [2];

        var b = [3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(8);
      });

      it("deve potenciar a Base 3 (array primário) com o Expoente 3 (array secundário) ", function() {

        var a = [3];

        var b = [3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(27);
      });

      it("deve potenciar a Base 4 (array primário) com o Expoente 3 (array secundário) ", function() {

        var a = [4];

        var b = [3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(64);
      });

      it("deve potenciar a Base 5 (array primário) com o Expoente 3 (array secundário) ", function() {

        var a = [5];

        var b = [3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(125);
      });

      it("deve potenciar a Base 6 (array primário) com o Expoente 3 (array secundário) ", function() {

        var a = [6];

        var b = [3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(216);
      });
    });
  });

  describe("Elementos Negativos", function() {

    describe("Expoente 1", function() {

      it("deve potenciar a Base -1 (array primário) com o Expoente -1 (array secundário) ", function() {

        var a = [-1];

        var b = [-1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-1);
      });
      
      it("deve potenciar a Base -2 (array primário) com o Expoente -1 (array secundário) ", function() {

        var a = [-2];

        var b = [-1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-0.5);
      });

      it("deve potenciar a Base -3 (array primário) com o Expoente -1 (array secundário) ", function() {

        var a = [-3];

        var b = [-1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-0.33333333);
      });

      it("deve potenciar a Base -4 (array primário) com o Expoente -1 (array secundário) ", function() {

        var a = [-4];

        var b = [-1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-0.25);
      });

      it("deve potenciar a Base -5 (array primário) com o Expoente -1 (array secundário) ", function() {

        var a = [-5];

        var b = [-1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-0.2);
      });

      it("deve potenciar a Base -6 (array primário) com o Expoente -1 (array secundário) ", function() {

        var a = [-6];

        var b = [-1];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-0.16666667);
      });
    });

    describe("Expoente 2", function() {

      it("deve potenciar a Base -1 (array primário) com o Expoente -2 (array secundário) ", function() {

        var a = [-1];

        var b = [-2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(1);
      });
      
      it("deve potenciar a Base -2 (array primário) com o Expoente -2 (array secundário) ", function() {

        var a = [-2];

        var b = [-2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(0.25);
      });

      it("deve potenciar a Base -3 (array primário) com o Expoente -2 (array secundário) ", function() {

        var a = [-3];

        var b = [-2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(0.11111111);
      });

      it("deve potenciar a Base -4 (array primário) com o Expoente -2 (array secundário) ", function() {

        var a = [-4];

        var b = [-2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(0.0625);
      });

      it("deve potenciar a Base -5 (array primário) com o Expoente -2 (array secundário) ", function() {

        var a = [-5];

        var b = [-2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(0.04);
      });

      it("deve potenciar a Base -6 (array primário) com o Expoente -2 (array secundário) ", function() {

        var a = [-6];

        var b = [-2];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(0.02777778);
      });
    });

    describe("Expoente 3", function() {

      it("deve potenciar a Base -1 (array primário) com o Expoente -3 (array secundário) ", function() {

        var a = [-1];

        var b = [-3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-1);
      });
      
      it("deve potenciar a Base -2 (array primário) com o Expoente -3 (array secundário) ", function() {

        var a = [-2];

        var b = [-3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-0.125);
      });

      it("deve potenciar a Base -3 (array primário) com o Expoente -3 (array secundário) ", function() {

        var a = [-3];

        var b = [-3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-0.03703704);
      });

      it("deve potenciar a Base -4 (array primário) com o Expoente -3 (array secundário) ", function() {

        var a = [-4];

        var b = [-3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-0.015625);
      });

      it("deve potenciar a Base -5 (array primário) com o Expoente -3 (array secundário) ", function() {

        var a = [-5];

        var b = [-3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-0.008);
      });

      it("deve potenciar a Base -6 (array primário) com o Expoente -3 (array secundário) ", function() {

        var a = [-6];

        var b = [-3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-0.00462963);
      });
    });
  });

  describe("Elementos Decimais", function() {

    describe("Expoentes Positivos e Negativos Decimais", function() {

      it("deve potenciar os diversos elementos decimais (1 / 3)", function() {

        var a = [2.11]; 
        
        var b = [3.42];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(12.85422795);

      });

      it("deve potenciar os diversos elementos decimais (2 / 3)", function() {

        var a = [2.51]; 
        
        var b = [3.82];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(33.63207138);

      });

      it("deve potenciar os diversos elementos decimais (3 / 3)", function() {

        var a = [2.91]; 
        
        var b = [3.992];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(71.09856118);

      });
    });
  });

  describe("Elementos Variados", function() {

    describe("Expoentes Positivos e Bases Negativas", function() {

      it("deve potenciar a Base -6 (array primário) com o Expoente 3 (array secundário) ", function() {

        var a = [-6];

        var b = [3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(-216);
      });
      
    });

    describe("Expoentes Negativos e Bases Positivas", function() {

      it("deve potenciar a Base 6 (array primário) com o Expoente -3 (array secundário) ", function() {

        var a = [6];

        var b = [-3];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(0.00462963);
      });

    });

    describe("Expoentes Neutros e Bases Positivas", function() {

      it("deve potenciar a Base 6 (array primário) com o Expoente 0 (array secundário) ", function() {

        var a = [6];

        var b = [0];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(1);
      });

    });

    describe("Expoentes Neutros e Bases Negativas", function() {

      it("deve potenciar a Base -6 (array primário) com o Expoente 0 (array secundário) ", function() {

        var a = [-6];

        var b = [0];

        var exe = new Potencia();

        expect(exe.uso(a, b)).toEqual(1);
      });

    });

  });
});