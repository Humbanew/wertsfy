/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
 describe("Módulo do Logarítmo Natural", function() {

  it("deve fazer o log natural de 2", function() {

    var a = [2];

    var exe = new LogNatural();

    expect(exe.uso(a)).toEqual(0.6931471805599453);

  });

  
  it("deve fazer o log natural de 4", function() {

    var a = [4];

    var exe = new LogNatural();

    expect(exe.uso(a)).toEqual(1.3862943611198906);

  });

  it("deve fazer o log natural de 6", function() {

    var a = [6];

    var exe = new LogNatural();

    expect(exe.uso(a)).toEqual(1.791759469228055);

  });

  it("deve fazer o log natural de 8", function() {

    var a = [8];

    var exe = new LogNatural();

    expect(exe.uso(a)).toEqual(2.0794415416798357);

  });

  it("deve fazer o log natural de 10", function() {

    var a = [10];

    var exe = new LogNatural();

    expect(exe.uso(a)).toEqual(2.302585092994046);

  });
});