/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
 describe("Módulo de Conversão de Brontobytes em Bits", function() {

  it("deve converter 1 Brontobyte em 9.903520314283042e+27 Bits", function() {

    var a = [1];

    var exe = new ConverBrBytesBits();

    expect(exe.uso(a)).toEqual(9.903520314283042e+27);

  });

  it("deve converter 10 Brontobytes em 9.903520314283042e+28 Bits", function() {

    var a = [10];

    var exe = new ConverBrBytesBits();

    expect(exe.uso(a)).toEqual(9.903520314283042e+28);

  });
  
  it("deve converter 100 Brontobytes em 9.903520314283042e+29 Bits", function() {

    var a = [100];

    var exe = new ConverBrBytesBits();

    expect(exe.uso(a)).toEqual(9.903520314283042e+29);

  });
  
  it("deve converter 1000 Brontobytes em 9.903520314283042e+30 Bits", function() {

    var a = [1000];

    var exe = new ConverBrBytesBits();

    expect(exe.uso(a)).toEqual(9.903520314283042e+30);

  });

});
