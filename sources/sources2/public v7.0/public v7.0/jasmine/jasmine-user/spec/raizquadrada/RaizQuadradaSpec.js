describe("Módulo de Raiz Quadrada", function() {

  describe("Elementos Positivos", function() {

    it("deve realizar a raiz de 2", function() {

      var a = [2];

      var exe = new RaizQuadrada();

      expect(exe.uso(a)).toEqual(1.41421356);

    });
    
    it("deve realizar a raiz de 3", function() {

      var a = [3];

      var exe = new RaizQuadrada();

      expect(exe.uso(a)).toEqual(1.73205081);

    });

    it("deve realizar a raiz de 4", function() {

      var a = [4];

      var exe = new RaizQuadrada();

      expect(exe.uso(a)).toEqual(2);

    });
    
    it("deve realizar a raiz de 5", function() {

      var a = [5];

      var exe = new RaizQuadrada();

      expect(exe.uso(a)).toEqual(2.23606798);

    });
    
    it("deve realizar a raiz de 6", function() {

      var a = [6];

      var exe = new RaizQuadrada();

      expect(exe.uso(a)).toEqual(2.44948974);

    });
  });

  describe("Elementos Decimais", function() {

    it("deve realizar de uma raiz decimal (1 / 3)", function() {

      var a = [2.8];

      var exe = new RaizQuadrada();

      expect(exe.uso(a)).toEqual(1.67332005);

    });

    it("deve realizar de uma raiz decimal (2 / 3)", function() {

      var a = [3.2];

      var exe = new RaizQuadrada();

      expect(exe.uso(a)).toEqual(1.78885438);

    });
    
    it("deve realizar de uma raiz decimal (3 / 3)", function() {

      var a = [4.6];

      var exe = new RaizQuadrada();

      expect(exe.uso(a)).toEqual(2.14476106);

    });
  });
});