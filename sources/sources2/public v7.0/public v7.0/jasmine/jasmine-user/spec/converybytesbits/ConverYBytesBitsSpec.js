/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Yottabytes em Bits", function() {

  it("deve converter 1 Yottabyte em 9.44473296573929e+21 Bits", function() {

    var a = [1];

    var exe = new ConverYBytesBits();

    expect(exe.uso(a)).toEqual(9.44473296573929e+21);

  });

  it("deve converter 10 Yottabytes em 9.44473296573929e+22 Bits", function() {

    var a = [10];

    var exe = new ConverYBytesBits();

    expect(exe.uso(a)).toEqual(9.44473296573929e+22);

  });
  
  it("deve converter 100 Yottabytes em 9.44473296573929e+23 Bits", function() {

    var a = [100];

    var exe = new ConverYBytesBits();

    expect(exe.uso(a)).toEqual(9.44473296573929e+23);

  });
  
  it("deve converter 1000 Yottabytes em 9.44473296573929e+24 Bits", function() {

    var a = [1000];

    var exe = new ConverYBytesBits();

    expect(exe.uso(a)).toEqual(9.44473296573929e+24);

  });

});
