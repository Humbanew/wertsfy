describe("Módulo de Raiz Bicúbica", function() {

  describe("Elementos Positivos", function() {

    it("deve realizar a raiz de 512", function() {

      var a = [512];

      var exe = new RaizBicubica();

      expect(exe.uso(a)).toEqual(2);

    });
    
    it("deve realizar a raiz de 19683", function() {

      var a = [19683];

      var exe = new RaizBicubica();

      expect(exe.uso(a)).toEqual(3);

    });

    it("deve realizar a raiz de 262144", function() {

      var a = [262144];

      var exe = new RaizBicubica();

      expect(exe.uso(a)).toEqual(4);

    });
    
    it("deve realizar a raiz de 1953125", function() {

      var a = [1953125];

      var exe = new RaizBicubica();

      expect(exe.uso(a)).toEqual(5);

    });
    
    it("deve realizar a raiz de 10077696", function() {

      var a = [10077696];

      var exe = new RaizBicubica();

      expect(exe.uso(a)).toEqual(6);

    });
  });

  describe("Elementos Decimais", function() {

    it("deve realizar de uma raiz decimal (1 / 3)", function() {

      var a = [16.88];

      var exe = new RaizBicubica();

      expect(exe.uso(a)).toEqual(1.36890943);

    });

    it("deve realizar de uma raiz decimal (2 / 3)", function() {

      var a = [81.44];

      var exe = new RaizBicubica();

      expect(exe.uso(a)).toEqual(1.63047937);

    });
    
    it("deve realizar de uma raiz decimal (3 / 3)", function() {

      var a = [16.6];

      var exe = new RaizBicubica();

      expect(exe.uso(a)).toEqual(1.36636763);

    });
  });
});