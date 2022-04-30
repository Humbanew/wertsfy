/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
 describe("Módulo de Conversão de Zettabytes em Bits", function() {

  it("deve converter 1 Zettabyte em 9.671406556917033e+24 Bits", function() {

    var a = [1];

    var exe = new ConverZBytesBits();

    expect(exe.uso(a)).toEqual(9.671406556917033e+24);

  });

  it("deve converter 10 Zettabytes em 9.671406556917033e+25 Bits", function() {

    var a = [10];

    var exe = new ConverZBytesBits();

    expect(exe.uso(a)).toEqual(9.671406556917033e+25);

  });
  
  it("deve converter 100 Zettabytes em 9.671406556917033e+26 Bits", function() {

    var a = [100];

    var exe = new ConverZBytesBits();

    expect(exe.uso(a)).toEqual(9.671406556917033e+26);

  });
  
  it("deve converter 1000 Zettabytes em 9.671406556917033e+27 Bits", function() {

    var a = [1000];

    var exe = new ConverZBytesBits();

    expect(exe.uso(a)).toEqual(9.671406556917033e+27);

  });

});
