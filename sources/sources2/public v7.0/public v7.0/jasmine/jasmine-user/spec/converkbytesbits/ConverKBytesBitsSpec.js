/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
 describe("Módulo de Conversão de Kilobytes em Bits", function() {

  it("deve converter 1 Kilobyte em 8192 Bits", function() {

    var a = [1];

    var exe = new ConverKBytesBits();

    expect(exe.uso(a)).toEqual(8192);

  });

  it("deve converter 10 Kilobytes em 81920 Bits", function() {

    var a = [10];

    var exe = new ConverKBytesBits();

    expect(exe.uso(a)).toEqual(81920);

  });
  
  it("deve converter 100 Kilobytes em 819200 Bits", function() {

    var a = [100];

    var exe = new ConverKBytesBits();

    expect(exe.uso(a)).toEqual(819200);

  });
  
  it("deve converter 1000 Kilobytes em 8192000 Bits", function() {

    var a = [1000];

    var exe = new ConverKBytesBits();

    expect(exe.uso(a)).toEqual(8192000);

  });

});
