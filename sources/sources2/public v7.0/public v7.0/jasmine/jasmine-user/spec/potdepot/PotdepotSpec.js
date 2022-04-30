describe("Módulo da Potência de Potência", function() {

  describe("Elementos Positivos", function() {

    describe("Expoente Primário sendo 1", function() {

      describe("Expoente Secundário sendo 1", function() {

        it("deve potenciar a Base 1 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [1];

          var b = [1];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base 2 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [2];

          var b = [1];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(2);

        });
        
        it("deve potenciar a Base 3 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [3];

          var b = [1];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(3);

        });
        
        it("deve potenciar a Base 4 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [4];

          var b = [1];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(4);

        });
        
        it("deve potenciar a Base 5 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [5];

          var b = [1];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(5);

        });

        it("deve potenciar a Base 6 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [6];

          var b = [1];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(6);

        });
      });

      describe("Expoente Secundário sendo 2", function() {
      
        it("deve potenciar a Base 1 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [1];

          var b = [1];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base 2 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [2];

          var b = [1];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(4);

        });
        
        it("deve potenciar a Base 3 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [3];

          var b = [1];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(9);

        });
        
        it("deve potenciar a Base 4 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [4];

          var b = [1];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(16);

        });
        
        it("deve potenciar a Base 5 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [5];

          var b = [1];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(25);

        });

        it("deve potenciar a Base 6 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [6];

          var b = [1];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(36);

        });
      });

      describe("Expoente Secundário sendo 3", function() {
        
        it("deve potenciar a Base 1 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [1];

          var b = [1];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base 2 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [2];

          var b = [1];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(8);

        });
        
        it("deve potenciar a Base 3 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [3];

          var b = [1];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(27);

        });
        
        it("deve potenciar a Base 4 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [4];

          var b = [1];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(64);

        });
        
        it("deve potenciar a Base 5 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [5];

          var b = [1];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(125);

        });

        it("deve potenciar a Base 6 (array primário) com o Expoente Primário 1 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [6];

          var b = [1];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(216);

        });
      });

    });

    describe("Expoente Primário sendo 2", function() {
      
      describe("Expoente Secundário sendo 1", function() {
        it("deve potenciar a Base 1 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [1];

          var b = [2];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base 2 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [2];

          var b = [2];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(4);

        });
        
        it("deve potenciar a Base 3 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [3];

          var b = [2];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(9);

        });
        
        it("deve potenciar a Base 4 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [4];

          var b = [2];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(16);

        });
        
        it("deve potenciar a Base 5 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [5];

          var b = [2];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(25);

        });

        it("deve potenciar a Base 6 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [6];

          var b = [2];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(36);

        });
      });

      describe("Expoente Secundário sendo 2", function() {
        it("deve potenciar a Base 1 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [1];

          var b = [2];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base 2 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [2];

          var b = [2];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(16);

        });
        
        it("deve potenciar a Base 3 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [3];

          var b = [2];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(81);

        });
        
        it("deve potenciar a Base 4 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [4];

          var b = [2];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(256);

        });
        
        it("deve potenciar a Base 5 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [5];

          var b = [2];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(625);

        });

        it("deve potenciar a Base 6 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [6];

          var b = [2];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1296);

        });
      });

      describe("Expoente Secundário sendo 3", function() {
        it("deve potenciar a Base 1 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [1];

          var b = [2];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base 2 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [2];

          var b = [2];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(64);

        });
        
        it("deve potenciar a Base 3 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [3];

          var b = [2];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(729);

        });
        
        it("deve potenciar a Base 4 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [4];

          var b = [2];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(4096);

        });
        
        it("deve potenciar a Base 5 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [5];

          var b = [2];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(15625);

        });

        it("deve potenciar a Base 6 (array primário) com o Expoente Primário 2 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [6];

          var b = [2];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(46656);

        });
      });

    });

    describe("Expoente Primário sendo 3", function() {
      
      describe("Expoente Secundário sendo 1", function() {
        it("deve potenciar a Base 1 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [1];

          var b = [3];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base 2 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [2];

          var b = [3];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(8);

        });
        
        it("deve potenciar a Base 3 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [3];

          var b = [3];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(27);

        });
        
        it("deve potenciar a Base 4 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [4];

          var b = [3];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(64);

        });
        
        it("deve potenciar a Base 5 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [5];

          var b = [3];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(125);

        });

        it("deve potenciar a Base 6 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

          var a = [6];

          var b = [3];

          var c = [1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(216);

        });
      });

      describe("Expoente Secundário sendo 2", function() {
        it("deve potenciar a Base 1 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [1];

          var b = [3];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base 2 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [2];

          var b = [3];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(64);

        });
        
        it("deve potenciar a Base 3 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [3];

          var b = [3];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(729);

        });
        
        it("deve potenciar a Base 4 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [4];

          var b = [3];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(4096);

        });
        
        it("deve potenciar a Base 5 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [5];

          var b = [3];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(15625);

        });

        it("deve potenciar a Base 6 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 2 (array terciário)", function() {

          var a = [6];

          var b = [3];

          var c = [2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(46656);

        });
      });

      describe("Expoente Secundário sendo 3", function() {
        it("deve potenciar a Base 1 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [1];

          var b = [3];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base 2 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [2];

          var b = [3];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(512);

        });
        
        it("deve potenciar a Base 3 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [3];

          var b = [3];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(19683);

        });
        
        it("deve potenciar a Base 4 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [4];

          var b = [3];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(262144);

        });
        
        it("deve potenciar a Base 5 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [5];

          var b = [3];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1953125);

        });

        it("deve potenciar a Base 6 (array primário) com o Expoente Primário 3 (array secundário) com o Expoente Secundário 3 (array terciário)", function() {

          var a = [6];

          var b = [3];

          var c = [3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(10077696);

        });
      });
    });
  });
  
  describe("Elementos Negativos", function() {

    describe("Expoente Primário sendo -1", function() {

      describe("Expoente Secundário sendo -1", function() {

        it("deve potenciar a Base -1 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-1];

          var b = [-1];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-1);

        });
        
        it("deve potenciar a Base -2 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-2];

          var b = [-1];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-2);

        });
        
        it("deve potenciar a Base -3 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-3];

          var b = [-1];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-3);

        });
        
        it("deve potenciar a Base -4 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-4];

          var b = [-1];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-4);

        });
        
        it("deve potenciar a Base -5 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-5];

          var b = [-1];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-5);

        });

        it("deve potenciar a Base -6 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-6];

          var b = [-1];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-6);

        });
      });

      describe("Expoente Secundário sendo -2", function() {
      
        it("deve potenciar a Base -1 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-1];

          var b = [-1];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base -2 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-2];

          var b = [-1];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(4);

        });
        
        it("deve potenciar a Base -3 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-3];

          var b = [-1];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(9);

        });
        
        it("deve potenciar a Base -4 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-4];

          var b = [-1];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(16);

        });
        
        it("deve potenciar a Base -5 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-5];

          var b = [-1];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(25);

        });

        it("deve potenciar a Base -6 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-6];

          var b = [-1];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(36);

        });
      });

      describe("Expoente Secundário sendo -3", function() {
        
        it("deve potenciar a Base -1 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-1];

          var b = [-1];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-1);

        });
        
        it("deve potenciar a Base -2 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-2];

          var b = [-1];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-8);

        });
        
        it("deve potenciar a Base -3 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-3];

          var b = [-1];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-27);

        });
        
        it("deve potenciar a Base -4 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-4];

          var b = [-1];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-64);

        });
        
        it("deve potenciar a Base -5 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-5];

          var b = [-1];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-125);

        });

        it("deve potenciar a Base -6 (array primário) com o Expoente Primário -1 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-6];

          var b = [-1];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-216);

        });
      });

    });

    describe("Expoente Primário sendo -2", function() {
      
      describe("Expoente Secundário sendo -1", function() {
        it("deve potenciar a Base -1 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-1];

          var b = [-2];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base -2 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-2];

          var b = [-2];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(4);

        });
        
        it("deve potenciar a Base -3 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-3];

          var b = [-2];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(9);

        });
        
        it("deve potenciar a Base -4 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-4];

          var b = [-2];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(16);

        });
        
        it("deve potenciar a Base -5 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-5];

          var b = [-2];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(25);

        });

        it("deve potenciar a Base -6 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-6];

          var b = [-2];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(36);

        });
      });

      describe("Expoente Secundário sendo -2", function() {
        it("deve potenciar a Base -1 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-1];

          var b = [-2];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base -2 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-2];

          var b = [-2];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(16);

        });
        
        it("deve potenciar a Base -3 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-3];

          var b = [-2];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(81);

        });
        
        it("deve potenciar a Base -4 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-4];

          var b = [-2];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(256);

        });
        
        it("deve potenciar a Base -5 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-5];

          var b = [-2];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(625);

        });

        it("deve potenciar a Base -6 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-6];

          var b = [-2];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1296);

        });
      });

      describe("Expoente Secundário sendo -3", function() {
        it("deve potenciar a Base -1 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-1];

          var b = [-2];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base -2 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-2];

          var b = [-2];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(64);

        });
        
        it("deve potenciar a Base -3 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-3];

          var b = [-2];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(729);

        });
        
        it("deve potenciar a Base -4 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-4];

          var b = [-2];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(4096);

        });
        
        it("deve potenciar a Base -5 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-5];

          var b = [-2];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(15625);

        });

        it("deve potenciar a Base -6 (array primário) com o Expoente Primário -2 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-6];

          var b = [-2];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(46656);

        });
      });

    });

    describe("Expoente Primário sendo -3", function() {
      
      describe("Expoente Secundário sendo -1", function() {
        it("deve potenciar a Base -1 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-1];

          var b = [-3];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-1);

        });
        
        it("deve potenciar a Base -2 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-2];

          var b = [-3];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-8);

        });
        
        it("deve potenciar a Base -3 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-3];

          var b = [-3];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-27);

        });
        
        it("deve potenciar a Base -4 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-4];

          var b = [-3];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-64);

        });
        
        it("deve potenciar a Base -5 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-5];

          var b = [-3];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-125);

        });

        it("deve potenciar a Base -6 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

          var a = [-6];

          var b = [-3];

          var c = [-1];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-216);

        });
      });

      describe("Expoente Secundário sendo -2", function() {
        it("deve potenciar a Base -1 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-1];

          var b = [-3];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(1);

        });
        
        it("deve potenciar a Base -2 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-2];

          var b = [-3];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(64);

        });
        
        it("deve potenciar a Base -3 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-3];

          var b = [-3];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(729);

        });
        
        it("deve potenciar a Base -4 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-4];

          var b = [-3];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(4096);

        });
        
        it("deve potenciar a Base -5 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-5];

          var b = [-3];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(15625);

        });

        it("deve potenciar a Base -6 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -2 (array terciário)", function() {

          var a = [-6];

          var b = [-3];

          var c = [-2];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(46656);

        });
      });

      describe("Expoente Secundário sendo -3", function() {
        it("deve potenciar a Base -1 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-1];

          var b = [-3];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-1);

        });
        
        it("deve potenciar a Base -2 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-2];

          var b = [-3];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-512);

        });
        
        it("deve potenciar a Base -3 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-3];

          var b = [-3];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-19683);

        });
        
        it("deve potenciar a Base -4 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-4];

          var b = [-3];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-262144);

        });
        
        it("deve potenciar a Base -5 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-5];

          var b = [-3];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-1953125);

        });

        it("deve potenciar a Base -6 (array primário) com o Expoente Primário -3 (array secundário) com o Expoente Secundário -3 (array terciário)", function() {

          var a = [-6];

          var b = [-3];

          var c = [-3];

          var exe = new Potdepot();

          expect(exe.uso(a, b, c)).toEqual(-10077696);

        });
      });
    });
  });

  describe("Elementos Decimais", function() {

    describe("Expoentes Positivos e Negativos Decimais", function() {

      it("deve potenciar os diversos elementos decimais (1 / 3)", function() {

        var a = [2.11]; 
        
        var b = [3.42];

        var c = [4.2];

        var exe = new Potdepot();

        expect(exe.uso(a, b, c)).toEqual(45498.09235140);

      });

      it("deve potenciar os diversos elementos decimais (2 / 3)", function() {

        var a = [2.51]; 
        
        var b = [3.82];

        var c = [4.4];

        var exe = new Potdepot();

        expect(exe.uso(a, b, c)).toEqual(5220545.80553033);

      });

      it("deve potenciar os diversos elementos decimais (3 / 3)", function() {

        var a = [2.91]; 
        
        var b = [3.992];

        var c = [4.6];

        var exe = new Potdepot();

        expect(exe.uso(a, b, c)).toEqual(330034799.662281);

      });
    });
  });

  describe("Elementos Variados", function() {

    describe("Base Potencial sendo 1", function() {

      describe("Expoente Primário sendo 0", function() {

        describe("Expoente Secundário sendo 0", function() {

          it("deve potenciar a Base 1 (array primário) com o Expoente Primário 0 (array secundário) com o Expoente Secundário 0 (array terciário)", function() {

            var a = [1];
  
            var b = [0];
  
            var c = [0];
  
            var exe = new Potdepot();
  
            expect(exe.uso(a, b, c)).toEqual(1);
  
          });
        });

        describe("Expoente Secundário sendo 1", function() {

          it("deve potenciar a Base 1 (array primário) com o Expoente Primário 0 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

            var a = [1];
  
            var b = [0];
  
            var c = [1];
  
            var exe = new Potdepot();
  
            expect(exe.uso(a, b, c)).toEqual(1);
  
          });
        });

        describe("Expoente Secundário sendo -1", function() {

          it("deve potenciar a Base 1 (array primário) com o Expoente Primário 0 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

            var a = [1];
  
            var b = [0];
  
            var c = [-1];
  
            var exe = new Potdepot();
  
            expect(exe.uso(a, b, c)).toEqual(1);
  
          });
        });

      });
    });

    describe("Base Potencial sendo 2", function() {

      describe("Expoente Primário sendo 0", function() {

        describe("Expoente Secundário sendo 0", function() {

          it("deve potenciar a Base 2 (array primário) com o Expoente Primário 0 (array secundário) com o Expoente Secundário 0 (array terciário)", function() {

            var a = [2];
  
            var b = [0];
  
            var c = [0];
  
            var exe = new Potdepot();
  
            expect(exe.uso(a, b, c)).toEqual(1);
  
          });
        });

        describe("Expoente Secundário sendo 1", function() {

          it("deve potenciar a Base 2 (array primário) com o Expoente Primário 0 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

            var a = [2];
  
            var b = [0];
  
            var c = [0];
  
            var exe = new Potdepot();
  
            expect(exe.uso(a, b, c)).toEqual(1);
  
          });
        });

        describe("Expoente Secundário sendo -1", function() {

          it("deve potenciar a Base 2 (array primário) com o Expoente Primário 0 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

            var a = [2];
  
            var b = [0];
  
            var c = [-1];
  
            var exe = new Potdepot();
  
            expect(exe.uso(a, b, c)).toEqual(1);
  
          });
        });

      });
    });

    describe("Base Potencial sendo 3", function() {

      describe("Expoente Primário sendo 0", function() {

        describe("Expoente Secundário sendo 0", function() {

          it("deve potenciar a Base 3 (array primário) com o Expoente Primário 0 (array secundário) com o Expoente Secundário 0 (array terciário)", function() {

            var a = [3];
  
            var b = [0];
  
            var c = [0];
  
            var exe = new Potdepot();
  
            expect(exe.uso(a, b, c)).toEqual(1);
  
          });
        });

        describe("Expoente Secundário sendo 1", function() {

          it("deve potenciar a Base 3 (array primário) com o Expoente Primário 0 (array secundário) com o Expoente Secundário 1 (array terciário)", function() {

            var a = [3];
  
            var b = [0];
  
            var c = [1];
  
            var exe = new Potdepot();
  
            expect(exe.uso(a, b, c)).toEqual(1);
  
          });
        });

        describe("Expoente Secundário sendo -1", function() {

          it("deve potenciar a Base 3 (array primário) com o Expoente Primário 0 (array secundário) com o Expoente Secundário -1 (array terciário)", function() {

            var a = [3];
  
            var b = [0];
  
            var c = [-1];
  
            var exe = new Potdepot();
  
            expect(exe.uso(a, b, c)).toEqual(1);
  
          });
        });
      });
    });
  });
});