describe("Módulo de Raiz Cúbica", function() {

  describe("Elementos Positivos", function() {

    it("deve realizar a raiz de 8", function() {

      var a = [8];

      var exe = new RaizCubica();

      expect(exe.uso(a)).toEqual(2);

    });
    
    it("deve realizar a raiz de 27", function() {

      var a = [27];

      var exe = new RaizCubica();

      expect(exe.uso(a)).toEqual(3);

    });

    it("deve realizar a raiz de 64", function() {

      var a = [64];

      var exe = new RaizCubica();

      expect(exe.uso(a)).toEqual(4);

    });
    
    it("deve realizar a raiz de 125", function() {

      var a = [125];

      var exe = new RaizCubica();

      expect(exe.uso(a)).toEqual(5);

    });
    
    it("deve realizar a raiz de 216", function() {

      var a = [216];

      var exe = new RaizCubica();

      expect(exe.uso(a)).toEqual(6);

    });
  });

  describe("Elementos Decimais", function() {

    it("deve realizar de uma raiz decimal (1 / 3)", function() {

      var a = [2.8];

      var exe = new RaizCubica();

      expect(exe.uso(a)).toEqual(1.40945975);

    });

    it("deve realizar de uma raiz decimal (2 / 3)", function() {

      var a = [3.2];

      var exe = new RaizCubica();

      expect(exe.uso(a)).toEqual(1.47361260);

    });
    
    it("deve realizar de uma raiz decimal (3 / 3)", function() {

      var a = [4.6];

      var exe = new RaizCubica();

      expect(exe.uso(a)).toEqual(1.66310350);

    });
  });
});