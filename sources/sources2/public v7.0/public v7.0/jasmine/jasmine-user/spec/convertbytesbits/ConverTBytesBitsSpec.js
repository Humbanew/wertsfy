/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Terrabytes em Bits", function() {

  it("deve converter 1 Terrabyte em 8796093022208 Bits", function() {

    var a = [1];

    var exe = new ConverTBytesBits();

    expect(exe.uso(a)).toEqual(8796093022208);

  });

  it("deve converter 10 Terrabytes em 87960930222080 Bits", function() {

    var a = [10];

    var exe = new ConverTBytesBits();

    expect(exe.uso(a)).toEqual(87960930222080);

  });
  
  it("deve converter 100 Terrabytes em 879609302220800 Bits", function() {

    var a = [100];

    var exe = new ConverTBytesBits();

    expect(exe.uso(a)).toEqual(879609302220800);

  });
  
  it("deve converter 1000 Terrabytes em 8796093022208000 Bits", function() {

    var a = [1000];

    var exe = new ConverTBytesBits();

    expect(exe.uso(a)).toEqual(8796093022208000);

  });

});
