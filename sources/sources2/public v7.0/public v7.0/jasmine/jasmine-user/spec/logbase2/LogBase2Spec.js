/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo do Logarítmo na Base 2", function() {

  it("deve fazer o log de 2", function() {

    var a = [2];

    var exe = new LogBase2();

    expect(exe.uso(a)).toEqual(1);

  });

  
  it("deve fazer o log de 4", function() {

    var a = [4];

    var exe = new LogBase2();

    expect(exe.uso(a)).toEqual(2);

  });

  it("deve fazer o log de 6", function() {

    var a = [6];

    var exe = new LogBase2();

    expect(exe.uso(a)).toEqual(2.584962500721156);

  });

  it("deve fazer o log de 8", function() {

    var a = [8];

    var exe = new LogBase2();

    expect(exe.uso(a)).toEqual(3);

  });

  it("deve fazer o log de 10", function() {

    var a = [10];

    var exe = new LogBase2();

    expect(exe.uso(a)).toEqual(3.321928094887362);

  });
});