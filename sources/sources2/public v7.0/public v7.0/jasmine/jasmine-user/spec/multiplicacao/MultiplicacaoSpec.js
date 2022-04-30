describe("Módulo da Multiplicação", function() {

  describe("Elementos Positivos", function() {

    it("deve multiplicar o array de 1 elemento", function() {

      var a = [23];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(23);

    });

    it("deve multiplicar o array de 2 elementos", function() {

      var a = [23, 2];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(46);

    });

    it("deve multiplicar o array de 3 elementos", function() {

      var a = [23, 2, 10];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(460);

    });
  });

  describe("Elementos Negativos", function() {

    it("deve multiplicar o array de 1 elemento", function() {

      var a = [-23];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(-23);

    });

    it("deve multiplicar o array de 2 elementos", function() {

      var a = [-23, -2];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(46);

    });

    it("deve multiplicar o array de 3 elementos", function() {

      var a = [-23, -2, -10];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(-460);

    });
  });

  describe("Elementos Positivos e Negativos", function() {

    it("deve multiplicar o array de 1 elemento", function() {

      var a = [23, -2];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(-46);

    });

    it("deve multiplicar o array de 2 elementos", function() {

      var a = [23, 2, -10, -2];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(920);

    });

    it("deve multiplicar o array de 3 elementos", function() {

      var a = [23, 2, 10, -3, -10, -2];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(-27600);

    });
  });

  describe("Elementos Positivos Decimais", function() {

    it("deve multiplicar o array de 1 elemento decimal", function() {

      var a = [23.1];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(23.1);

    });

    it("deve multiplicar o array de 2 elementos decimais", function() {

      var a = [23.2, 2.1];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(48.72);

    });

    it("deve multiplicar o array de 3 elementos decimais", function() {

      var a = [23.1, 2.1, 10.2];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(494.802);

    });

  });

  describe("Elementos Negativos Decimais", function() {
    
    it("deve multiplicar o array de 1 elemento decimal", function() {

      var a = [-23.1];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(-23.1);

    });

    it("deve multiplicar o array de 2 elementos decimais", function() {

      var a = [-23.2, -2.1];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(48.72);

    });

    it("deve multiplicar o array de 3 elementos decimais", function() {

      var a = [-23.3, -2.1, -10.2];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(-499.086);

    });
  });

  describe("Elementos Positivos e Negativos Decimais", function() {
    
    it("deve multiplicar o array de 1 elemento decimal", function() {

      var a = [23.1, -2.1];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(-48.51);

    });

    it("deve multiplicar o array de 2 elementos decimais", function() {

      var a = [23.1, 2.1, -10.1, -2.2];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(1077.8922);

    });

    it("deve multiplicar o array de 3 elementos decimais", function() {

      var a = [23.1, 2.2, 10.3, -3.1, -10.2, -2.1];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(-34757.861292);

    });
  });

  describe("Elementos Nulos", function() {

    it("deve multiplicar um array com 0", function() {

      var a = [0, 20];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(0);

    });

    it("deve multiplicar um array com 0.0", function() {

      var a = [0.0, 21,4];

      var exe = new Multiplicacao();

      expect(exe.uso(a)).toEqual(0.0);

    });
  });
});