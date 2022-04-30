describe("Módulo de Raiz Biquadrática", function() {

  describe("Elementos Positivos", function() {

    it("deve realizar a raiz de 16", function() {

      var a = [16];

      var exe = new RaizBiquadratica();

      expect(exe.uso(a)).toEqual(2);

    });
    
    it("deve realizar a raiz de 81", function() {

      var a = [81];

      var exe = new RaizBiquadratica();

      expect(exe.uso(a)).toEqual(3);

    });

    it("deve realizar a raiz de 256", function() {

      var a = [256];

      var exe = new RaizBiquadratica();

      expect(exe.uso(a)).toEqual(4);

    });
    
    it("deve realizar a raiz de 625", function() {

      var a = [625];

      var exe = new RaizBiquadratica();

      expect(exe.uso(a)).toEqual(5);

    });
    
    it("deve realizar a raiz de 1296", function() {

      var a = [1296];

      var exe = new RaizBiquadratica();

      expect(exe.uso(a)).toEqual(6);

    });
  });

  describe("Elementos Decimais", function() {

    it("deve realizar de uma raiz decimal (1 / 3)", function() {

      var a = [16.88];

      var exe = new RaizBiquadratica();

      expect(exe.uso(a)).toEqual(2.02695035);

    });

    it("deve realizar de uma raiz decimal (2 / 3)", function() {

      var a = [81.44];

      var exe = new RaizBiquadratica();

      expect(exe.uso(a)).toEqual(3.00406580);

    });
    
    it("deve realizar de uma raiz decimal (3 / 3)", function() {

      var a = [16.6];

      var exe = new RaizBiquadratica();

      expect(exe.uso(a)).toEqual(2.01849195);

    });
  });
});