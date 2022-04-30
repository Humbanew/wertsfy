/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo da Cossecante Hiperbólica", function() {

  describe("Ângulos Comuns", function() {

    it("deve fazer a cossecante hiperbólica de 30º", function() {

      var a = [30];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(1718.87328843);

    });

    it("deve fazer a cossecante hiperbólica de 45º", function() {

      var a = [45];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(2578.31001345);

    });

    it("deve fazer a cossecante hiperbólica de 60º", function() {

      var a = [60];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(3437.7467223);

    });

    it("deve fazer a cossecante hiperbólica de 90º", function() {

      var a = [90];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(5156.62012386);

    });

    it("deve fazer a cossecante hiperbólica de 120º", function() {

      var a = [120];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(6875.49351733);

    });

    it("deve fazer a cossecante hiperbólica de 135º", function() {

      var a = [135];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(7734.93021272);

    });

    it("deve fazer a cossecante hiperbólica de 150º", function() {

      var a = [150];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(8594.36690757);

    });

    it("deve fazer a cossecante hiperbólica de 180º", function() {

      var a = [180];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(10313.24029619);

    });

    it("deve fazer a cossecante hiperbólica de 210º", function() {

      var a = [210];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(12032.1136839);

    });

    it("deve fazer a cossecante hiperbólica de 225º", function() {

      var a = [225];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(12891.55037752);

    });

    it("deve fazer a cossecante hiperbólica de 240º", function() {

      var a = [240];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(13750.98707102);

    });

    it("deve fazer a cossecante hiperbólica de 270º", function() {

      var a = [270];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(15469.86045776);

    });

    it("deve fazer a cossecante hiperbólica de 300º", function() {

      var a = [300];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(17188.73384423);

    });

    it("deve fazer a cossecante hiperbólica de 315º", function() {

      var a = [315];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(18048.17053739);

    });

    it("deve fazer a cossecante hiperbólica de 330º", function() {

      var a = [330];

      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(18907.6072305);

    });
  });

  describe("Ângulos Diferentes", function() {

    it("deve fazer a cossecante hiperbólica de 420º", function() {

      var a = [420];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(24064.22738857);
  
    });

    it("deve fazer a cossecante hiperbólica de 600º", function() {

      var a = [600];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(34377.467703);
  
    });

    it("deve fazer a cossecante hiperbólica de 720º", function() {

      var a = [720];
  
      var exe = new CossecanteHiper();

      expect(exe.uso(a)).toEqual(41252.96124538);
  
    });

    it("deve fazer a cossecante hiperbólica de 900º", function() {

      var a = [900];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(51566.20155854);
  
    });

    it("deve fazer a cossecante hiperbólica de 1490º", function() {

      var a = [1490];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(85370.71147254);
  
    });

    it("deve fazer a cossecante hiperbólica de 1800º", function() {

      var a = [1800];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(103132.40312193);
  
    });
  });

  describe("Ângulos Decimais", function() {

    it("deve fazer a cossecante hiperbólica de 30.125º", function() {

      var a = [30.25];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(1733.19723411);
  
    });

    it("deve fazer a cossecante hiperbólica de 30.25º", function() {

      var a = [30.25];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(1733.19723411);
  
    });

    it("deve fazer a cossecante hiperbólica de 30.5º", function() {

      var a = [30.5];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(1747.52117978);
  
    });
    
    it("deve fazer a cossecante hiperbólica de 30.75º", function() {

      var a = [30.25];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(1733.19723411);
  
    });
  });

  describe("Ângulos Negativos", function() {

    it("deve fazer a cossecante hiperbólica de -30º", function() {

      var a = [-30];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(-1718.87328843);
  
    });

    it("deve fazer a cossecante hiperbólica de -40º", function() {

      var a = [-40];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(-2291.8311078);
  
    });
    
    it("deve fazer a cossecante hiperbólica de -50º", function() {

      var a = [-50];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(-2864.78891748);
  
    });
    
    it("deve fazer a cossecante hiperbólica de -60º", function() {

      var a = [-60];
  
      var exe = new CossecanteHiper();
  
      expect(exe.uso(a)).toEqual(-3437.7467223);
  
    });
  });
});