describe("Módulo da Subtração", function() {

  describe("Elementos Positivos", function() {

    describe("Array primário com 1 elemento", function() {

      it("deve subtrair o array primário do secundário, ambos com 1 elemento", function() {
        var a = [1000];

        var b = [23];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(977);
      });

      it("deve subtrair o array primário com 1 elemento do secundário com 2 elementos", function() {
        var a = [1000];

        var b = [23, 20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(957);
      });

      it("deve subtrair o array primário com 1 elemento do secundário com 3 elementos", function() {
        var a = [1000];

        var b = [23, 20, 20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(937);
      });
    });

    describe("Array primário com 2 elementos", function() {

      it("deve subtrair o array primário com 2 elementos do secundário com 1 elemento", function() {
        var a = [1000, 200];

        var b = [23];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1177);
      });

      it("deve subtrair o array primário com 2 elementos do secundário com 2 elementos", function() {
        var a = [1000, 200];

        var b = [23, 20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1157);
      });

      it("deve subtrair o array primário com 2 elementos do secundário com 3 elementos", function() {
        var a = [1000, 200];

        var b = [23, 20, 20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1137);
      });
    });

    describe("Array primário com 3 elementos", function() {

      it("deve subtrair o array primário com 3 elementos do secundário com 1 elemento", function() {
        var a = [1000, 200, 10];

        var b = [23];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1187);
      });

      it("deve subtrair o array primário com 3 elementos do secundário com 2 elementos", function() {
        var a = [1000, 200, 10];

        var b = [23, 20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1167);
      });

      it("deve subtrair o array primário com 3 elementos do secundário com 3 elementos", function() {
        var a = [1000, 200, 10];

        var b = [23, 20, 20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1147);
      });
    });
  });

  describe("Elementos Negativos", function() {

    describe("Array primário com 1 elemento", function() {

      it("deve subtrair o array primário do secundário, ambos com 1 elemento", function() {
        var a = [-1000];

        var b = [-23];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-977);
      });

      it("deve subtrair o array primário com 1 elemento do secundário com 2 elementos", function() {
        var a = [-1000];

        var b = [-23, -20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-957);
      });

      it("deve subtrair o array primário com 1 elemento do secundário com 3 elementos", function() {
        var a = [-1000];

        var b = [-23, -20, -20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-937);
      });
    });

    describe("Array primário com 2 elementos", function() {

      it("deve subtrair o array primário com 2 elementos do secundário com 1 elemento", function() {
        var a = [-1000, -200];

        var b = [-23];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1177);
      });

      it("deve subtrair o array primário com 2 elementos do secundário com 2 elementos", function() {
        var a = [-1000, -200];

        var b = [-23, -20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1157);
      });

      it("deve subtrair o array primário com 2 elementos do secundário com 3 elementos", function() {
        var a = [-1000, -200];

        var b = [-23, -20, -20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1137);
      });
    });

    describe("Array primário com 3 elementos", function() {

      it("deve subtrair o array primário com 3 elementos do secundário com 1 elemento", function() {
        var a = [-1000, -200, -10];

        var b = [-23];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1187);
      });

      it("deve subtrair o array primário com 3 elementos do secundário com 2 elementos", function() {
        var a = [-1000, -200, -10];

        var b = [-23, -20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1167);
      });

      it("deve subtrair o array primário com 3 elementos do secundário com 3 elementos", function() {
        var a = [-1000, -200, -10];

        var b = [-23, -20, -20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1147);
      });
    });
  });

  describe("Elementos Positivos e Negativos", function() {

    describe("Array primário com 1 elemento", function() {

      it("deve subtrair o array primário do secundário, ambos com 1 elemento", function() {
        var a = [-1000, 800];

        var b = [-23, 30];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-207);
      });

      it("deve subtrair o array primário com 1 elemento do secundário com 2 elementos", function() {
        var a = [-1000, 800];

        var b = [-23, -20, 30, 10];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-197);
      });

      it("deve subtrair o array primário com 1 elemento do secundário com 3 elementos", function() {
        var a = [-1000, 800];

        var b = [-23, -20, -20, 10, 10, 20];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-177);
      });
    });

    describe("Array primário com 2 elementos", function() {

      it("deve subtrair o array primário com 2 elementos do secundário com 1 elemento", function() {
        var a = [-1000, -200, 800, 100];

        var b = [-23, 10];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-287);
      });
      
      it("deve subtrair o array primário com 2 elementos do secundário com 2 elementos", function() {
        var a = [-1000, -200, 800, 100];

        var b = [-23, -20, 10, 10];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-277);
      });
    
      it("deve subtrair o array primário com 2 elementos do secundário com 3 elementos", function() {
        var a = [-1000, -200, 800, 100];

        var b = [-23, -20, -20, 10, 10, 10];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-267);
      });
    });

    describe("Array primário com 3 elementos", function() {
      
      it("deve subtrair o array primário com 3 elementos do secundário com 1 elemento", function() {
        var a = [-1000, -200, -10, 800, 100, 50];

        var b = [-23, 10];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-247);
      });
      
      it("deve subtrair o array primário com 3 elementos do secundário com 2 elementos", function() {
        var a = [-1000, -200, -10, 800, 100, 50];

        var b = [-23, -20, 10, 60];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-287);
      });

      it("deve subtrair o array primário com 3 elementos do secundário com 3 elementos", function() {
        var a = [-1000, -200, -10, 800, 100, 50];

        var b = [-23, -20, -20, 10, 10, 10];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-227);
      });
    });
  });

  describe("Elementos Positivos Decimais", function() {

    describe("Array primário com 1 elemento decimal", function() {

      it("deve subtrair o array primário do secundário, ambos com 1 elemento decimal", function() {
        var a = [1000.2];

        var b = [23.1];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(977.1);
      });

      it("deve subtrair o array primário com 1 elemento decimal do secundário com 2 elementos decimais", function() {
        var a = [1000.4];

        var b = [23.1, 20.2];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(957.1);
      });

      it("deve subtrair o array primário com 1 elemento decimal do secundário com 3 elementos decimais", function() {
        var a = [1000.6];

        var b = [23.1, 20.1, 20.3];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(937.1);
      });
    });

    describe("Array primário com 2 elementos decimais", function() {

      it("deve subtrair o array primário com 2 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [1000.1, 200.1];

        var b = [23.1];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1177.1);
      });

      it("deve subtrair o array primário com 2 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [1000.1, 200.1];

        var b = [23.3, 20.4];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1156.5);
      });

      it("deve subtrair o array primário com 2 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [1000.1, 200.1];

        var b = [23.2, 20.2, 20.2];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1136.6);
      });
    });

    describe("Array primário com 3 elementos decimais", function() {

      it("deve subtrair o array primário com 3 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [1000.1, 200.1, 10.1];

        var b = [23.5];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1186.8);
      });

      it("deve subtrair o array primário com 3 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [1000.1, 200.1, 10.2];

        var b = [23.4, 20.5];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1166.5);
      });

      it("deve subtrair o array primário com 3 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [1000.6, 200.3, 10.2];

        var b = [23.1, 20.1, 20.1];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(1147.8);
      });
    });
  });

  describe("Elementos Negativos Decimais", function() {

    describe("Array primário com 1 elemento decimal", function() {

      it("deve subtrair o array primário do secundário, ambos com 1 elemento decimal", function() {
        var a = [-1000.1];

        var b = [-23.3];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-976.8);
      });

      it("deve subtrair o array primário com 1 elemento decimal do secundário com 2 elementos decimais", function() {
        var a = [-1000.2];

        var b = [-23.1, -20.4];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-956.7);
      });

      it("deve subtrair o array primário com 1 elemento decimal do secundário com 3 elementos decimais", function() {
        var a = [-1000.4];

        var b = [-23.2, -20.3, -20.4];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-936.5);
      });
    });

    describe("Array primário com 2 elementos decimais", function() {

      it("deve subtrair o array primário com 2 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [-1000.1, -200.2];

        var b = [-23.3];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1177);
      });

      it("deve subtrair o array primário com 2 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [-1000.2, -200.1];

        var b = [-23.2, -20.4];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1156.7);
      });

      it("deve subtrair o array primário com 2 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [-1000.3, -200.1];

        var b = [-23.2, -20.4, -20.2];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1136.6);
      });
    });

    describe("Array primário com 3 elementos decimais", function() {

      it("deve subtrair o array primário com 3 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [-1000.1, -200.1, -10.1];

        var b = [-23.3];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1187);
      });

      it("deve subtrair o array primário com 3 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [-1000.2, -200.1, -10.1];

        var b = [-23.3, -20.1];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1167);
      });

      it("deve subtrair o array primário com 3 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [-1000.1, -200.1, -10.1];

        var b = [-23.1, -20.1, -20.1];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-1147);
      });
    });
  });

  describe("Elementos Positivos e Negativos Decimais", function() {

    describe("Array primário com 1 elemento decimal", function() {

      it("deve subtrair o array primário do secundário, ambos com 1 elemento decimal", function() {
        var a = [-1000.1, 800.1];

        var b = [-23.1, 30.1];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-207);
      });

      it("deve subtrair o array primário com 1 elemento decimal do secundário com 2 elementos decimais", function() {
        var a = [-1000.2, 800.2];

        var b = [-23.1, -20.1, 30.1, 10.1];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-197);
      });

      it("deve subtrair o array primário com 1 elemento decimal do secundário com 3 elementos decimais", function() {
        var a = [-1000.3, 800.3];

        var b = [-23.1, -20.1, -20.1, 10.1, 10.1, 20.1];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-177);
      });
    });

    describe("Array primário com 2 elementos decimais", function() {

      it("deve subtrair o array primário com 2 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [-1000.1, -200.1, 800.1, 100.1];

        var b = [-23.2, 10.2];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-287);
      });
      
      it("deve subtrair o array primário com 2 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [-1000.1, -200.1, 800.1, 100.1];

        var b = [-23.1, -20.1, 10.1, 10.1];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-277);
      });
    
      it("deve subtrair o array primário com 2 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [-1000.1, -200.2, 800.1, 100.2];

        var b = [-23.1, -20.1, -20.1, 10.1, 10.1, 10.1];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-267);
      });
    });

    describe("Array primário com 3 elementos decimais", function() {
      
      it("deve subtrair o array primário com 3 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [-1000.1, -200.1, -10.1, 800.1, 100.1, 50.1];

        var b = [-23.3, 10.3];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-247);
      });
      
      it("deve subtrair o array primário com 3 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [-1000.1, -200.1, -10.1, 800.1, 100.1, 50.1];

        var b = [-23.2, -20.2, 10.2, 60.2];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-287);
      });

      it("deve subtrair o array primário com 3 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [-1000.1, -200.1, -10.1, 800.1, 100.1, 50.1];

        var b = [-23.1, -20.1, -20.1, 10.1, 10.1, 10.1];

        var exe = new Subtracao();

        expect(exe.uso(a, b)).toEqual(-227);
      });
    });
  });

  describe("Elementos Nulos", function() {

    it("deve subtrair um array com 0", function() {

      var a = [25, 0, 0, 12];

      var b = [22];

      var exe = new Subtracao();

      exe.uso(a, b);

      expect(exe.uso(a, b)).toEqual(15);

    });

    it("deve subtrair um array com 0.0", function() {

      var a = [25, 0.0, 0.0, 12];

      var b = [22.4];

      var exe = new Subtracao();

      exe.uso(a, b);

      expect(exe.uso(a, b)).toEqual(14.6);

    });
  });
});