/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Gigabytes em Bits", function() {

  it("deve converter 1 Gigabyte em 8589934592 Bits", function() {

    var a = [1];

    var exe = new ConverGBytesBits();

    expect(exe.uso(a)).toEqual(8589934592);

  });

  it("deve converter 10 Gigabytes em 85899345920 Bits", function() {

    var a = [10];

    var exe = new ConverGBytesBits();

    expect(exe.uso(a)).toEqual(85899345920);

  });
  
  it("deve converter 100 Gigabytes em 858993459200 Bits", function() {

    var a = [100];

    var exe = new ConverGBytesBits();

    expect(exe.uso(a)).toEqual(858993459200);

  });
  
  it("deve converter 1000 Gigabytes em 8589934592000 Bits", function() {

    var a = [1000];

    var exe = new ConverGBytesBits();

    expect(exe.uso(a)).toEqual(8589934592000);

  });

});
