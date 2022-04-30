/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
 describe("Módulo do Logarítmo Natural Mais 1", function() {

  it("deve fazer o log natural de 2 + 1", function() {

    var a = [2];

    var exe = new LogNaturalMais1();

    expect(exe.uso(a)).toEqual(1.0986122886681096);

  });

  
  it("deve fazer o log natural de 4 + 1", function() {

    var a = [4];

    var exe = new LogNaturalMais1();

    expect(exe.uso(a)).toEqual(1.6094379124341003);

  });

  it("deve fazer o log natural de 6 + 1", function() {

    var a = [6];

    var exe = new LogNaturalMais1();

    expect(exe.uso(a)).toEqual(1.9459101490553132);

  });

  it("deve fazer o log natural de 8 + 1", function() {

    var a = [8];

    var exe = new LogNaturalMais1();

    expect(exe.uso(a)).toEqual(2.1972245773362196);

  });

  it("deve fazer o log natural de 10 + 1", function() {

    var a = [10];

    var exe = new LogNaturalMais1();

    expect(exe.uso(a)).toEqual(2.3978952727983707);

  });
});