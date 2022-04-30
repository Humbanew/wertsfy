describe("Módulo da Soma", function () {

  describe("Elementos Positivos", function() {

    it("deve somar um array de 1 elemento", function() {

      var a = [12];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(12);

    });
  
    it("deve somar um array de 2 elementos", function() {

      var a = [34, 34];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(68);

    });

    it("deve somar um array de 3 elementos", function() {

      var a = [22, 22, 22];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(66);

    });
  });

  describe("Elementos Negativos", function() {

    it("deve somar um array de 1 elemento", function() {

      var a = [-25];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(-25);

    });

    it("deve somar um array de 2 elementos", function() {

      var a = [-25, -25];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(-50);

    });

    it("deve somar um array de 3 elementos", function() {

      var a = [-25, -50, -50];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(-125);

    });
  });

  describe("Elementos Negativos e Positivos", function() {

    it("deve somar um array de 1 elemento", function() {

      var a = [-25, 35];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(10);

    });

    it("deve somar um array de 2 elementos", function() {

      var a = [-25, -50, 35, 65];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(25);

    });

    it("deve somar um array de 3 elementos", function() {

      var a = [-25, -50, -10, 35, 65, 5];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(20);

    });
  });

  describe("Elementos Positivos Decimais", function() {

    it("deve somar um array de 1 elemento decimal", function() {

      var a = [25.2];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(25.2);

    });

    it("deve somar um array de 2 elementos decimais", function() {

      var a = [34.4, 34.5];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(68.9);

    });

    it("deve somar um array de 3 elementos decimais", function() {

      var a = [22.4, 22.6, 22.2];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(67.2);

    });
  });

  describe("Elementos Negativos Decimais", function() {

    it("deve somar um array de 1 elemento decimal", function() {

      var a = [-25.88];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(-25.88);

    });

    it("deve somar um array de 2 elementos decimais", function() {

      var a = [-25.8, -25.2];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(-51);

    });

    it("deve somar um array de 3 elemento decimais", function() {

      var a = [-25.3, -50.2, -50.1];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(-125.6);

    });
  });

  describe("Elementos Negativos e Positivos Decimais", function() {

    it("deve somar um array de 1 elemento decimal", function() {

      var a = [-25.1, 35.2];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(10.1);

    });

    it("deve somar um array de 2 elementos decimais", function() {

      var a = [-25.2, -50.8, 35.2, 65.9];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(25.1);

    });

    it("deve somar um array de 3 elementos decimais", function() {

      var a = [-25.4, -50.3, -10.2, 35.1, 65.4, 5.3];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(19.9);

    });
  });  
  
  describe("Elementos Nulos", function() {

    it("deve somar um array com 0", function() {

      var a = [25, 0, 0, 12];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(37);

    });

    it("deve somar um array com 0.0", function() {

      var a = [25, 0.0, 0.0, 12];

      var exe = new Soma();

      exe.uso(a);

      expect(exe.uso(a)).toEqual(37);

    });
  });
});
