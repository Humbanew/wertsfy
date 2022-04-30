/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
 describe("Módulo de Conversão de Megabytes em Bits", function() {

  it("deve converter 1 Megabyte em 8388608 Bits", function() {

    var a = [1];

    var exe = new ConverMBytesBits();

    expect(exe.uso(a)).toEqual(8388608);

  });

  it("deve converter 10 Megabytes em 83886080 Bits", function() {

    var a = [10];

    var exe = new ConverMBytesBits();

    expect(exe.uso(a)).toEqual(83886080);

  });
  
  it("deve converter 100 Megabytes em 838860800 Bits", function() {

    var a = [100];

    var exe = new ConverMBytesBits();

    expect(exe.uso(a)).toEqual(838860800);

  });
  
  it("deve converter 1000 Megabytes em 8388608000 Bits", function() {

    var a = [1000];

    var exe = new ConverMBytesBits();

    expect(exe.uso(a)).toEqual(8388608000);

  });

});
