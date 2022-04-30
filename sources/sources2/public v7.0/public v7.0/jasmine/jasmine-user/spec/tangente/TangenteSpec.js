describe("Módulo da Tangente", function() {

  describe("Ângulos Comuns", function() {

    it("deve fazer a tangente de 30º", function() {

      var a = [30];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(0.57735027);

    });

    it("deve fazer a tangente de 45º", function() {

      var a = [45];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(1);

    });

    it("deve fazer a tangente de 60º", function() {

      var a = [60];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(1.73205081);

    });

    it("deve fazer a tangente de 90º", function() {

      var a = [90];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(16331239353195370);

    });

    it("deve fazer a tangente de 120º", function() {

      var a = [120];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(-1.73205081);

    });

    it("deve fazer a tangente de 135º", function() {

      var a = [135];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(-1);

    });

    it("deve fazer a tangente de 150º", function() {

      var a = [150];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(-0.57735027);

    });

    it("deve fazer a tangente de 180º", function() {

      var a = [180];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(-0);

    });

    it("deve fazer a tangente de 210º", function() {

      var a = [210];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(0.57735027);

    });

    it("deve fazer a tangente de 225º", function() {

      var a = [225];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(1);

    });

    it("deve fazer a tangente de 240º", function() {

      var a = [240];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(1.73205081);

    });

    it("deve fazer a tangente de 270º", function() {

      var a = [270];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(5443746451065123);

    });

    it("deve fazer a tangente de 300º", function() {

      var a = [300];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(-1.73205081);

    });

    it("deve fazer a tangente de 315º", function() {

      var a = [315];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(-1);

    });

    it("deve fazer a tangente de 330º", function() {

      var a = [330];

      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(-0.57735027);

    });
  });

  describe("Ângulos Diferentes", function() {

    it("deve fazer a tangente de 420º", function() {

      var a = [420];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(1.73205081);
  
    });

    it("deve fazer a tangente de 600º", function() {

      var a = [600];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(1.73205081);
  
    });

    it("deve fazer a tangente de 720º", function() {

      var a = [720];
  
      var exe = new Tangente();

      expect(exe.uso(a)).toEqual(-0);
  
    });

    it("deve fazer a tangente de 900º", function() {

      var a = [900];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(-0);
  
    });

    it("deve fazer a tangente de 1490º", function() {

      var a = [1490];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(1.19175359);
  
    });

    it("deve fazer a tangente de 1800º", function() {

      var a = [1800];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(-0);
  
    });
  });
  
  describe("Ângulos Decimais", function() {

    it("deve fazer o tangente de 30.125º", function() {

      var a = [30.25];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(0.58318276);
  
    });

    it("deve fazer o tangente de 30.25º", function() {

      var a = [30.25];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(0.58318276);
  
    });

    it("deve fazer o tangente de 30.5º", function() {

      var a = [30.5];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(0.58904502);
  
    });
    
    it("deve fazer o tangente de 30.75º", function() {

      var a = [30.25];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(0.58318276);
  
    });
  });

  
  describe("Ângulos Negativos", function() {

    it("deve fazer o tangente de -30º", function() {

      var a = [-30];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(-0.57735027);
  
    });

    it("deve fazer o tangente de -40º", function() {

      var a = [-40];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(-0.83909963);
  
    });
    
    it("deve fazer o tangente de -50º", function() {

      var a = [-50];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(-1.19175359);
  
    });
    
    it("deve fazer o tangente de -60º", function() {

      var a = [-60];
  
      var exe = new Tangente();
  
      expect(exe.uso(a)).toEqual(-1.73205081);
  
    });
  });
});