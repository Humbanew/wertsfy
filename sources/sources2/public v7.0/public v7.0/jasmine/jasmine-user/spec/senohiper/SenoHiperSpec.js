describe("Módulo do Seno Hiperbólico", function() {

  describe("Ângulos Comuns", function() {

    it("deve fazer o seno hiperbólico de 30º", function() {

      var a = [30];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(1.82530557);

    });

    it("deve fazer o seno hiperbólico de 45º", function() {

      var a = [45];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(1.15118387);

    });

    it("deve fazer o seno hiperbólico de 60º", function() {

      var a = [60];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.80040529);

    });

    it("deve fazer o seno hiperbólico de 90º", function() {

      var a = [90];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.43453721);

    });

    it("deve fazer o seno hiperbólico de 120º", function() {

      var a = [120];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.25008182);

    });

    it("deve fazer o seno hiperbólico de 135º", function() {

      var a = [135];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.19127876);

    });

    it("deve fazer o seno hiperbólico de 150º", function() {

      var a = [150];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.14667868);

    });

    it("deve fazer o seno hiperbólico de 180º", function() {

      var a = [180];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.08658954);

    });

    it("deve fazer o seno hiperbólico de 210º", function() {

      var a = [210];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.05123211);

    });

    it("deve fazer o seno hiperbólico de 225º", function() {

      var a = [225];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.03942105);

    });

    it("deve fazer o seno hiperbólico de 240º", function() {

      var a = [240];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.03033622);

    });

    it("deve fazer o seno hiperbólico de 270º", function() {

      var a = [270];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.01796803);

    });

    it("deve fazer o seno hiperbólico de 300º", function() {

      var a = [300];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.01064343);

    });

    it("deve fazer o seno hiperbólico de 315º", function() {

      var a = [315];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.00819179);

    });

    it("deve fazer o seno hiperbólico de 330º", function() {

      var a = [330];

      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.00630489);

    });
  });

  describe("Ângulos Diferentes", function() {

    it("deve fazer o seno hiperbólico de 420º", function() {

      var a = [420];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(0.00131065);
  
    });

    it("deve fazer o seno hiperbólico de 600º", function() {

      var a = [600];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(0.00005664);
  
    });

    it("deve fazer o seno hiperbólico de 720º", function() {

      var a = [720];
  
      var exe = new SenoHiper();

      expect(exe.uso(a)).toEqual(0.00000697);
  
    });

    it("deve fazer o seno hiperbólico de 900º", function() {

      var a = [900];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(3e-7);
  
    });

    it("deve fazer o seno hiperbólico de 1490º", function() {

      var a = [1490];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(0);
  
    });

    it("deve fazer o seno hiperbólico de 1800º", function() {

      var a = [1800];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(0);
  
    });
  });

  describe("Ângulos Decimais", function() {

    it("deve fazer o seno hiperbólico de 30.125º", function() {

      var a = [30.25];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(1.80886147);
  
    });

    it("deve fazer o seno hiperbólico de 30.25º", function() {

      var a = [30.25];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(1.80886147);
  
    });

    it("deve fazer o seno hiperbólico de 30.5º", function() {

      var a = [30.5];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(1.79267718);
  
    });
    
    it("deve fazer o seno hiperbólico de 30.75º", function() {

      var a = [30.25];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(1.80886147);
  
    });
  });

  describe("Ângulos Negativos", function() {

    it("deve fazer o seno hiperbólico de -30º", function() {

      var a = [-30];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(-1.82530557);
  
    });

    it("deve fazer o seno hiperbólico de -40º", function() {

      var a = [-40];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(-1.32233155);
  
    });
    
    it("deve fazer o seno hiperbólico de -50º", function() {

      var a = [-50];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(-1.0124312);
  
    });
    
    it("deve fazer o seno hiperbólico de -60º", function() {

      var a = [-60];
  
      var exe = new SenoHiper();
  
      expect(exe.uso(a)).toEqual(-0.80040529);
  
    });
  });
});