describe("Módulo da Divisão", function() {

  describe("Elementos Positivos", function() {

    describe("Array primário com 1 elemento", function() {

      it("deve dividir o array primário do secundário, ambos com 1 elemento", function() {
        var a = [1000];

        var b = [23];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(43.47826087);
      });

      it("deve dividir o array primário com 1 elemento do secundário com 2 elementos", function() {
        var a = [1000];

        var b = [23, 20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(23.25581395);
      });

      it("deve dividir o array primário com 1 elemento do secundário com 3 elementos", function() {
        var a = [1000];

        var b = [23, 20, 20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(15.87301587);
      });
    });

    describe("Array primário com 2 elementos", function() {

      it("deve dividir o array primário com 2 elementos do secundário com 1 elemento", function() {
        var a = [1000, 200];

        var b = [23];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(52.17391304);
      });

      it("deve dividir o array primário com 2 elementos do secundário com 2 elementos", function() {
        var a = [1000, 200];

        var b = [23, 20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(27.90697674);
      });

      it("deve dividir o array primário com 2 elementos do secundário com 3 elementos", function() {
        var a = [1000, 200];

        var b = [23, 20, 20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(19.04761905);
      });
    });

    describe("Array primário com 3 elementos", function() {

      it("deve dividir o array primário com 3 elementos do secundário com 1 elemento", function() {
        var a = [1000, 200, 10];

        var b = [23];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(52.60869565);
      });

      it("deve dividir o array primário com 3 elementos do secundário com 2 elementos", function() {
        var a = [1000, 200, 10];

        var b = [23, 20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(28.13953488);
      });

      it("deve dividir o array primário com 3 elementos do secundário com 3 elementos", function() {
        var a = [1000, 200, 10];

        var b = [23, 20, 20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(19.20634921);
      });
    });
  });

  describe("Elementos Negativos", function() {

    describe("Array primário com 1 elemento", function() {

      it("deve dividir o array primário do secundário, ambos com 1 elemento", function() {
        var a = [-1000];

        var b = [-23];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(43.47826087);
      });

      it("deve dividir o array primário com 1 elemento do secundário com 2 elementos", function() {
        var a = [-1000];

        var b = [-23, -20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(23.25581395);
      });

      it("deve dividir o array primário com 1 elemento do secundário com 3 elementos", function() {
        var a = [-1000];

        var b = [-23, -20, -20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(15.87301587);
      });
    });

    describe("Array primário com 2 elementos", function() {

      it("deve dividir o array primário com 2 elementos do secundário com 1 elemento", function() {
        var a = [-1000, -200];

        var b = [-23];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(52.17391304);
      });

      it("deve dividir o array primário com 2 elementos do secundário com 2 elementos", function() {
        var a = [-1000, -200];

        var b = [-23, -20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(27.90697674);
      });

      it("deve dividir o array primário com 2 elementos do secundário com 3 elementos", function() {
        var a = [-1000, -200];

        var b = [-23, -20, -20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(19.04761905);
      });
    });

    describe("Array primário com 3 elementos", function() {

      it("deve dividir o array primário com 3 elementos do secundário com 1 elemento", function() {
        var a = [-1000, -200, -10];

        var b = [-23];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(52.60869565);
      });

      it("deve dividir o array primário com 3 elementos do secundário com 2 elementos", function() {
        var a = [-1000, -200, -10];

        var b = [-23, -20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(28.13953488);
      });

      it("deve dividir o array primário com 3 elementos do secundário com 3 elementos", function() {
        var a = [-1000, -200, -10];

        var b = [-23, -20, -20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(19.20634921);
      });
    });
  });

  describe("Elementos Positivos e Negativos", function() {

    describe("Array primário com 1 elemento", function() {

      it("deve dividir o array primário do secundário, ambos com 1 elemento", function() {
        var a = [-1000, 800];

        var b = [-23, 30];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(-28.57142857);
      });

      it("deve dividir o array primário com 1 elemento do secundário com 2 elementos", function() {
        var a = [-1000, 800];

        var b = [-23, -20, 30, 10];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(66.66666667);
      });

      it("deve dividir o array primário com 1 elemento do secundário com 3 elementos", function() {
        var a = [-1000, 800];

        var b = [-23, -20, -20, 10, 10, 20];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(8.69565217);
      });
    });

    describe("Array primário com 2 elementos", function() {

      it("deve dividir o array primário com 2 elementos do secundário com 1 elemento", function() {
        var a = [-1000, -200, 800, 100];

        var b = [-23, 10];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(23.07692308);
      });
      
      it("deve dividir o array primário com 2 elementos do secundário com 2 elementos", function() {
        var a = [-1000, -200, 800, 100];

        var b = [-23, -20, 10, 10];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(13.04347826);
      });
    
      it("deve dividir o array primário com 2 elementos do secundário com 3 elementos", function() {
        var a = [-1000, -200, 800, 100];

        var b = [-23, -20, -20, 10, 10, 10];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(9.09090909);
      });
    });

    describe("Array primário com 3 elementos", function() {
      
      it("deve dividir o array primário com 3 elementos do secundário com 1 elemento", function() {
        var a = [-1000, -200, -10, 800, 100, 50];

        var b = [-23, 10];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(20);
      });
      
      it("deve dividir o array primário com 3 elementos do secundário com 2 elementos", function() {
        var a = [-1000, -200, -10, 800, 100, 50];

        var b = [-23, -20, 10, 60];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(-9.62962963);
      });

      it("deve dividir o array primário com 3 elementos do secundário com 3 elementos", function() {
        var a = [-1000, -200, -10, 800, 100, 50];

        var b = [-23, -20, -20, 10, 10, 10];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(7.87878788);
      });
    });
  });

  describe("Elementos Positivos Decimais", function() {

    describe("Array primário com 1 elemento decimal", function() {

      it("deve dividir o array primário do secundário, ambos com 1 elemento decimal", function() {
        var a = [1000.2];

        var b = [23.1];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(43.2987013);
      });

      it("deve dividir o array primário com 1 elemento decimal do secundário com 2 elementos decimais", function() {
        var a = [1000.4];

        var b = [23.1, 20.2];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(23.1039261);
      });

      it("deve dividir o array primário com 1 elemento decimal do secundário com 3 elementos decimais", function() {
        var a = [1000.6];

        var b = [23.1, 20.1, 20.3];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(15.75748031);
      });
    });

    describe("Array primário com 2 elementos decimais", function() {

      it("deve dividir o array primário com 2 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [1000.1, 200.1];

        var b = [23.1];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(51.95670996);
      });

      it("deve dividir o array primário com 2 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [1000.1, 200.1];

        var b = [23.3, 20.4];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(27.46453089);
      });

      it("deve dividir o array primário com 2 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [1000.1, 200.1];

        var b = [23.2, 20.2, 20.2];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(18.87106918);
      });
    });

    describe("Array primário com 3 elementos decimais", function() {

      it("deve dividir o array primário com 3 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [1000.1, 200.1, 10.1];

        var b = [23.5];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(51.50212766);
      });

      it("deve dividir o array primário com 3 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [1000.1, 200.1, 10.2];

        var b = [23.4, 20.5];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(27.57175399);
      });

      it("deve dividir o array primário com 3 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [1000.6, 200.3, 10.2];

        var b = [23.1, 20.1, 20.1];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(19.13270142);
      });
    });
  });

  describe("Elementos Negativos Decimais", function() {

    describe("Array primário com 1 elemento decimal", function() {

      it("deve dividir o array primário do secundário, ambos com 1 elemento decimal", function() {
        var a = [-1000.1];

        var b = [-23.3];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(42.92274678);
      });

      it("deve dividir o array primário com 1 elemento decimal do secundário com 2 elementos decimais", function() {
        var a = [-1000.2];

        var b = [-23.1, -20.4];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(22.99310345);
      });

      it("deve dividir o array primário com 1 elemento decimal do secundário com 3 elementos decimais", function() {
        var a = [-1000.4];

        var b = [-23.2, -20.3, -20.4];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(15.65571205);
      });
    });

    describe("Array primário com 2 elementos decimais", function() {

      it("deve dividir o array primário com 2 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [-1000.1, -200.2];

        var b = [-23.3];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(51.51502146);
      });

      it("deve dividir o array primário com 2 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [-1000.2, -200.1];

        var b = [-23.2, -20.4];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(27.52981651);
      });

      it("deve dividir o array primário com 2 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [-1000.3, -200.1];

        var b = [-23.2, -20.4, -20.2];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(18.81504702);
      });
    });

    describe("Array primário com 3 elementos decimais", function() {

      it("deve dividir o array primário com 3 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [-1000.1, -200.1, -10.1];

        var b = [-23.3];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(51.94420601);
      });

      it("deve dividir o array primário com 3 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [-1000.2, -200.1, -10.1];

        var b = [-23.3, -20.1];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(27.88940092);
      });

      it("deve dividir o array primário com 3 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [-1000.1, -200.1, -10.1];

        var b = [-23.1, -20.1, -20.1];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(19.12006319);
      });
    });
  });

  describe("Elementos Positivos e Negativos Decimais", function() {

    describe("Array primário com 1 elemento decimal", function() {

      it("deve dividir o array primário do secundário, ambos com 1 elemento decimal", function() {
        var a = [-1000.1, 800.1];

        var b = [-23.1, 30.1];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(-28.57142857);
      });

      it("deve dividir o array primário com 1 elemento decimal do secundário com 2 elementos decimais", function() {
        var a = [-1000.2, 800.2];

        var b = [-23.1, -20.1, 30.1, 10.1];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(66.66666667);
      });

      it("deve dividir o array primário com 1 elemento decimal do secundário com 3 elementos decimais", function() {
        var a = [-1000.3, 800.3];

        var b = [-23.1, -20.1, -20.1, 10.1, 10.1, 20.1];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(8.69565217);
      });
    });

    describe("Array primário com 2 elementos decimais", function() {

      it("deve dividir o array primário com 2 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [-1000.1, -200.1, 800.1, 100.1];

        var b = [-23.2, 10.2];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(23.07692308);
      });
      
      it("deve dividir o array primário com 2 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [-1000.1, -200.1, 800.1, 100.1];

        var b = [-23.1, -20.1, 10.1, 10.1];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(13.04347826);
      });
    
      it("deve dividir o array primário com 2 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [-1000.1, -200.2, 800.1, 100.2];

        var b = [-23.1, -20.1, -20.1, 10.1, 10.1, 10.1];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(9.09090909);
      });
    });

    describe("Array primário com 3 elementos decimais", function() {
      
      it("deve dividir o array primário com 3 elementos decimais do secundário com 1 elemento decimal", function() {
        var a = [-1000.1, -200.1, -10.1, 800.1, 100.1, 50.1];

        var b = [-23.3, 10.3];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(20);
      });
      
      it("deve dividir o array primário com 3 elementos decimais do secundário com 2 elementos decimais", function() {
        var a = [-1000.1, -200.1, -10.1, 800.1, 100.1, 50.1];

        var b = [-23.2, -20.2, 10.2, 60.2];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(-9.62962963);
      });

      it("deve dividir o array primário com 3 elementos decimais do secundário com 3 elementos decimais", function() {
        var a = [-1000.1, -200.1, -10.1, 800.1, 100.1, 50.1];

        var b = [-23.1, -20.1, -20.1, 10.1, 10.1, 10.1];

        var exe = new Divisao();

        expect(exe.uso(a, b)).toEqual(7.87878788);
      });
    });
  });

  describe("Elementos Nulos", function() {

    it("deve dividir um array com 0", function() {

      var a = [25, 0, 0, 12];

      var b = [22];

      var exe = new Divisao();

      exe.uso(a, b);

      expect(exe.uso(a, b)).toEqual(1.68181818);

    });

    it("deve dividir um array com 0.0", function() {

      var a = [25, 0.0, 0.0, 12];

      var b = [22.4];

      var exe = new Divisao();

      exe.uso(a, b);

      expect(exe.uso(a, b)).toEqual(1.65178571);

    });

    it("deve dividir um array por 0", function() {

      var a = [25, 0, 0, 12];

      var b = [0];

      var exe = new Divisao();

      exe.uso(a, b);

      expect(exe.uso(a, b)).toEqual(0);

    });

    it("deve dividir um array por 0.0", function() {

      var a = [25, 0.0, 0.0, 16];

      var b = [0.0];

      var exe = new Divisao();

      exe.uso(a, b);

      expect(exe.uso(a, b)).toEqual(0.0);

    });
  });
});