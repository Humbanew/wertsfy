/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
 describe("Módulo de Conversão de Geopbytes em Bits", function() {

  it("deve converter 1 Geopbyte em 1.0141204801825835e+31 Bits", function() {

    var a = [1];

    var exe = new ConverGeBytesBits();

    expect(exe.uso(a)).toEqual(1.0141204801825835e+31);

  });

  it("deve converter 10 Geopbytes em 1.0141204801825835e+32 Bits", function() {

    var a = [10];

    var exe = new ConverGeBytesBits();

    expect(exe.uso(a)).toEqual(1.0141204801825835e+32);

  });
  
  it("deve converter 100 Geopbytes em 1.0141204801825835e+33 Bits", function() {

    var a = [100];

    var exe = new ConverGeBytesBits();

    expect(exe.uso(a)).toEqual(1.0141204801825835e+33);

  });
  
  it("deve converter 1000 Geopbytes em 1.0141204801825835e+34 Bits", function() {

    var a = [1000];

    var exe = new ConverGeBytesBits();

    expect(exe.uso(a)).toEqual(1.0141204801825835e+34);

  });

});
