describe("Módulo do Cosseno Hiperbólico", function() {

  describe("Ângulos Comuns", function() {

    it("deve fazer o cosseno hiperbólico de 30º", function() {

      var a = [30];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.87700964);

    });

    it("deve fazer o cosseno hiperbólico de 45º", function() {

      var a = [45];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.75493971);

    });

    it("deve fazer o cosseno hiperbólico de 60º", function() {

      var a = [60];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.62488797);

    });

    it("deve fazer o cosseno hiperbólico de 90º", function() {

      var a = [90];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.39853682);

    });

    it("deve fazer o cosseno hiperbólico de 120º", function() {

      var a = [120];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.24261033);

    });

    it("deve fazer o cosseno hiperbólico de 135º", function() {

      var a = [135];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.18787273);

    });

    it("deve fazer o cosseno hiperbólico de 150º", function() {

      var a = [150];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.14512583);

    });

    it("deve fazer o cosseno hiperbólico de 180º", function() {

      var a = [180];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.08626674);

    });

    it("deve fazer o cosseno hiperbólico de 210º", function() {

      var a = [210];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.05116501);

    });

    it("deve fazer o cosseno hiperbólico de 225º", function() {

      var a = [225];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.03939045);

    });

    it("deve fazer o cosseno hiperbólico de 240º", function() {

      var a = [240];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.03032227);

    });

    it("deve fazer o cosseno hiperbólico de 270º", function() {

      var a = [270];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.01796513);

    });

    it("deve fazer o cosseno hiperbólico de 300º", function() {

      var a = [300];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.01064283);

    });

    it("deve fazer o cosseno hiperbólico de 315º", function() {

      var a = [315];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.00819151);

    });

    it("deve fazer o cosseno hiperbólico de 330º", function() {

      var a = [330];

      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.00630477);

    });
  });

  describe("Ângulos Diferentes", function() {

    it("deve fazer o cosseno hiperbólico de 420º", function() {

      var a = [420];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0.00131064);
  
    });

    it("deve fazer o cosseno hiperbólico de 600º", function() {

      var a = [600];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0.00005664);
  
    });

    it("deve fazer o cosseno hiperbólico de 720º", function() {

      var a = [720];
  
      var exe = new CossenoHiper();

      expect(exe.uso(a)).toEqual(0.00000697);
  
    });

    it("deve fazer o cosseno hiperbólico de 900º", function() {

      var a = [900];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(3e-7);
  
    });

    it("deve fazer o cosseno hiperbólico de 1490º", function() {

      var a = [1490];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0);
  
    });

    it("deve fazer o cosseno hiperbólico de 1800º", function() {

      var a = [1800];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0);
  
    });
  });

  describe("Ângulos Decimais", function() {

    it("deve fazer o cosseno hiperbólico de 30.125º", function() {

      var a = [30.25];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0.87516655);
  
    });

    it("deve fazer o cosseno hiperbólico de 30.25º", function() {

      var a = [30.25];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0.87516655);
  
    });

    it("deve fazer o cosseno hiperbólico de 30.5º", function() {

      var a = [30.5];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0.87331461);
  
    });
    
    it("deve fazer o cosseno hiperbólico de 30.75º", function() {

      var a = [30.25];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0.87516655);
  
    });
  });

  describe("Ângulos Negativos", function() {

    it("deve fazer o cosseno hiperbólico de -30º", function() {

      var a = [-30];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0.87700964);
  
    });

    it("deve fazer o cosseno hiperbólico de -40º", function() {

      var a = [-40];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0.79760468);
  
    });
    
    it("deve fazer o cosseno hiperbólico de -50º", function() {

      var a = [-50];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0.71146115);
  
    });
    
    it("deve fazer o cosseno hiperbólico de -60º", function() {

      var a = [-60];
  
      var exe = new CossenoHiper();
  
      expect(exe.uso(a)).toEqual(0.62488797);
  
    });
  });
});