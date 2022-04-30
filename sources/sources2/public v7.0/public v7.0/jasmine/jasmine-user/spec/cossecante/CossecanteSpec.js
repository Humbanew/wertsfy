/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo da Cossecante", function() {

  describe("Ângulos Comuns", function() {

    it("deve fazer a cossecante de 30º", function() {

      var a = [30];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00058178);

    });

    it("deve fazer a cossecante de 45º", function() {

      var a = [45];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00038785);

    });

    it("deve fazer a cossecante de 60º", function() {

      var a = [60];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00029089);

    });

    it("deve fazer a cossecante de 90º", function() {

      var a = [90];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00019393);

    });

    it("deve fazer a cossecante de 120º", function() {

      var a = [120];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00014544);

    });

    it("deve fazer a cossecante de 135º", function() {

      var a = [135];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00012928);

    });

    it("deve fazer a cossecante de 150º", function() {

      var a = [150];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00011636);

    });

    it("deve fazer a cossecante de 180º", function() {

      var a = [180];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00009696);

    });

    it("deve fazer a cossecante de 210º", function() {

      var a = [210];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00008311);

    });

    it("deve fazer a cossecante de 225º", function() {

      var a = [225];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00007757);

    });

    it("deve fazer a cossecante de 240º", function() {

      var a = [240];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00007272);

    });

    it("deve fazer a cossecante de 270º", function() {

      var a = [270];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00006464);

    });

    it("deve fazer a cossecante de 300º", function() {

      var a = [300];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00005818);

    });

    it("deve fazer a cossecante de 315º", function() {

      var a = [315];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00005541);

    });

    it("deve fazer a cossecante de 330º", function() {

      var a = [330];

      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00005289);

    });
  });

  describe("Ângulos Diferentes", function() {

    it("deve fazer a cossecante de 420º", function() {

      var a = [420];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(0.00004156);
  
    });

    it("deve fazer a cossecante de 600º", function() {

      var a = [600];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(0.00002909);
  
    });

    it("deve fazer a cossecante de 720º", function() {

      var a = [720];
  
      var exe = new Cossecante();

      expect(exe.uso(a)).toEqual(0.00002424);
  
    });

    it("deve fazer a cossecante de 900º", function() {

      var a = [900];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(0.00001939);
  
    });

    it("deve fazer a cossecante de 1490º", function() {

      var a = [1490];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(0.00001171);
  
    });

    it("deve fazer a cossecante de 1800º", function() {

      var a = [1800];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(0.0000097);
  
    });
  });
  
  describe("Ângulos Decimais", function() {

    it("deve fazer a cossecante de 30.125º", function() {

      var a = [30.25];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(0.00057697);
  
    });

    it("deve fazer a cossecante de 30.25º", function() {

      var a = [30.25];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(0.00057697);
  
    });

    it("deve fazer a cossecante de 30.5º", function() {

      var a = [30.5];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(0.00057224);
  
    });
    
    it("deve fazer a cossecante de 30.75º", function() {

      var a = [30.25];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(0.00057697);
  
    });
  });

  
  describe("Ângulos Negativos", function() {

    it("deve fazer a cossecante de -30º", function() {

      var a = [-30];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(-0.00058178);
  
    });

    it("deve fazer a cossecante de -40º", function() {

      var a = [-40];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(-0.00043633);
  
    });
    
    it("deve fazer a cossecante de -50º", function() {

      var a = [-50];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(-0.00034907);
  
    });
    
    it("deve fazer a cossecante de -60º", function() {

      var a = [-60];
  
      var exe = new Cossecante();
  
      expect(exe.uso(a)).toEqual(-0.00029089);
  
    });
  });
});