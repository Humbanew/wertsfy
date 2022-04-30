describe("Módulo da Secante Hiperbólica", function() {

  describe("Ângulos Comuns", function() {

    it("deve fazer a secante hiperbólica de 30º", function() {

      var a = [30];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(0.99999983);

    });

    it("deve fazer a secante hiperbólica de 45º", function() {

      var a = [45];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(0.99999992);

    });

    it("deve fazer a secante hiperbólica de 60º", function() {

      var a = [60];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(0.99999996);

    });

    it("deve fazer a secante hiperbólica de 90º", function() {

      var a = [90];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(0.99999998);

    });

    it("deve fazer a secante hiperbólica de 120º", function() {

      var a = [120];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(0.99999999);

    });

    it("deve fazer a secante hiperbólica de 135º", function() {

      var a = [135];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(0.99999999);

    });

    it("deve fazer a secante hiperbólica de 150º", function() {

      var a = [150];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(0.99999999);

    });

    it("deve fazer a secante hiperbólica de 180º", function() {

      var a = [180];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(1);

    });

    it("deve fazer a secante hiperbólica de 210º", function() {

      var a = [210];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(1);

    });

    it("deve fazer a secante hiperbólica de 225º", function() {

      var a = [225];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(1);

    });

    it("deve fazer a secante hiperbólica de 240º", function() {

      var a = [240];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(1);

    });

    it("deve fazer a secante hiperbólica de 270º", function() {

      var a = [270];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(1);

    });

    it("deve fazer a secante hiperbólica de 300º", function() {

      var a = [300];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(1);

    });

    it("deve fazer a secante hiperbólica de 315º", function() {

      var a = [315];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(1);

    });

    it("deve fazer a secante hiperbólica de 330º", function() {

      var a = [330];

      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(1);

    });
  });

  describe("Ângulos Diferentes", function() {

    it("deve fazer a secante hiperbólica de 420º", function() {

      var a = [420];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(1);
  
    });

    it("deve fazer a secante hiperbólica de 600º", function() {

      var a = [600];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(1);
  
    });

    it("deve fazer a secante hiperbólica de 720º", function() {

      var a = [720];
  
      var exe = new SecanteHiper();

      expect(exe.uso(a)).toEqual(1);
  
    });

    it("deve fazer a secante hiperbólica de 900º", function() {

      var a = [900];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(1);
  
    });

    it("deve fazer a secante hiperbólica de 1490º", function() {

      var a = [1490];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(1);
  
    });

    it("deve fazer a secante hiperbólica de 1800º", function() {

      var a = [1800];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(1);
  
    });
  });

  describe("Ângulos Decimais", function() {

    it("deve fazer a secante hiperbólica de 30.125º", function() {

      var a = [30.25];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(0.99999983);
  
    });

    it("deve fazer a secante hiperbólica de 30.25º", function() {

      var a = [30.25];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(0.99999983);
  
    });

    it("deve fazer a secante hiperbólica de 30.5º", function() {

      var a = [30.5];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(0.99999984);
  
    });
    
    it("deve fazer a secante hiperbólica de 30.75º", function() {

      var a = [30.25];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(0.99999983);
  
    });
  });

  describe("Ângulos Negativos", function() {

    it("deve fazer a secante hiperbólica de -30º", function() {

      var a = [-30];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(0.99999983);
  
    });

    it("deve fazer a secante hiperbólica de -40º", function() {

      var a = [-40];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(0.9999999);
  
    });
    
    it("deve fazer a secante hiperbólica de -50º", function() {

      var a = [-50];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(0.99999994);
  
    });
    
    it("deve fazer a secante hiperbólica de -60º", function() {

      var a = [-60];
  
      var exe = new SecanteHiper();
  
      expect(exe.uso(a)).toEqual(0.99999996);
  
    });
  });
});