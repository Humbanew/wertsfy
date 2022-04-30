/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
 describe("Módulo do Logarítmo na Base 10", function() {

  it("deve fazer o log de 2", function() {

    var a = [2];

    var exe = new LogBase10();

    expect(exe.uso(a)).toEqual(0.3010299956639812);

  });

  
  it("deve fazer o log de 4", function() {

    var a = [4];

    var exe = new LogBase10();

    expect(exe.uso(a)).toEqual(0.6020599913279624);

  });

  it("deve fazer o log de 6", function() {

    var a = [6];

    var exe = new LogBase10();

    expect(exe.uso(a)).toEqual(0.7781512503836436);

  });

  it("deve fazer o log de 8", function() {

    var a = [8];

    var exe = new LogBase10();

    expect(exe.uso(a)).toEqual(0.9030899869919435);

  });

  it("deve fazer o log de 10", function() {

    var a = [10];

    var exe = new LogBase10();

    expect(exe.uso(a)).toEqual(1);

  });
});