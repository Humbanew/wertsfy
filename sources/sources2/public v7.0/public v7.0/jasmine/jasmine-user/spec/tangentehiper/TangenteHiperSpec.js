describe("Módulo do Tangente Hiperbólica", function() {

  describe("Ângulos Comuns", function() {

    it("deve fazer a tangente hiperbólica de 30º", function() {

      var a = [30];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(2.08128336);

    });

    it("deve fazer a tangente hiperbólica de 45º", function() {

      var a = [45];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.52486862);

    });

    it("deve fazer a tangente hiperbólica de 60º", function() {

      var a = [60];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.28087807);

    });

    it("deve fazer a tangente hiperbólica de 90º", function() {

      var a = [90];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.09033141);

    });

    it("deve fazer a tangente hiperbólica de 120º", function() {

      var a = [120];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.03079625);

    });

    it("deve fazer a tangente hiperbólica de 135º", function() {

      var a = [135];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.01812944);

    });

    it("deve fazer a tangente hiperbólica de 150º", function() {

      var a = [150];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.01070007);

    });

    it("deve fazer a tangente hiperbólica de 180º", function() {

      var a = [180];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.00374187);

    });

    it("deve fazer a tangente hiperbólica de 210º", function() {

      var a = [210];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.0013115);

    });

    it("deve fazer a tangente hiperbólica de 225º", function() {

      var a = [225];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.00077671);

    });

    it("deve fazer a tangente hiperbólica de 240º", function() {

      var a = [240];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.00046004);

    });

    it("deve fazer a tangente hiperbólica de 270º", function() {

      var a = [270];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.00016141);

    });

    it("deve fazer a tangente hiperbólica de 300º", function() {

      var a = [300];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.00005664);

    });

    it("deve fazer a tangente hiperbólica de 315º", function() {

      var a = [315];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.00003355);

    });

    it("deve fazer a tangente hiperbólica de 330º", function() {

      var a = [330];

      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1.00001988);

    });
  });

  describe("Ângulos Diferentes", function() {

    it("deve fazer a tangente hiperbólica de 420º", function() {

      var a = [420];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(1.00000086);
  
    });

    it("deve fazer a tangente hiperbólica de 600º", function() {

      var a = [600];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(1);
  
    });

    it("deve fazer a tangente hiperbólica de 720º", function() {

      var a = [720];
  
      var exe = new TangenteHiper();

      expect(exe.uso(a)).toEqual(1);
  
    });

    it("deve fazer a tangente hiperbólica de 900º", function() {

      var a = [900];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(1);
  
    });

    it("deve fazer a tangente hiperbólica de 1490º", function() {

      var a = [1490];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(1);
  
    });

    it("deve fazer a tangente hiperbólica de 1800º", function() {

      var a = [1800];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(1);
  
    });
  });

  describe("Ângulos Decimais", function() {

    it("deve fazer a tangente hiperbólica de 30.125º", function() {

      var a = [30.25];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(2.06687683);
  
    });

    it("deve fazer a tangente hiperbólica de 30.25º", function() {

      var a = [30.25];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(2.06687683);
  
    });

    it("deve fazer a tangente hiperbólica de 30.5º", function() {

      var a = [30.5];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(2.05272781);
  
    });
    
    it("deve fazer a tangente hiperbólica de 30.75º", function() {

      var a = [30.25];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(2.06687683);
  
    });
  });

  describe("Ângulos Negativos", function() {

    it("deve fazer a tangente hiperbólica de -30º", function() {

      var a = [-30];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(-2.08128336);
  
    });

    it("deve fazer a tangente hiperbólica de -40º", function() {

      var a = [-40];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(-1.65787838);
  
    });
    
    it("deve fazer a tangente hiperbólica de -50º", function() {

      var a = [-50];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(-1.4230309);
  
    });
    
    it("deve fazer a tangente hiperbólica de -60º", function() {

      var a = [-60];
  
      var exe = new TangenteHiper();
  
      expect(exe.uso(a)).toEqual(-1.28087807);
  
    });
  });
});