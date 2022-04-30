/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Bytes em Bits", function() {

  it("deve converter 1 Byte em 8 Bits", function() {

    var a = [1];

    var exe = new ConverBytesBits();

    expect(exe.uso(a)).toEqual(8);

  });

  it("deve converter 10 Bytes em 80 Bits", function() {

    var a = [10];

    var exe = new ConverBytesBits();

    expect(exe.uso(a)).toEqual(80);

  });
  
  it("deve converter 100 Bytes em 800 Bits", function() {

    var a = [100];

    var exe = new ConverBytesBits();

    expect(exe.uso(a)).toEqual(800);

  });
  
  it("deve converter 1000 Bytes em 8000 Bits", function() {

    var a = [1000];

    var exe = new ConverBytesBits();

    expect(exe.uso(a)).toEqual(8000);

  });

});
