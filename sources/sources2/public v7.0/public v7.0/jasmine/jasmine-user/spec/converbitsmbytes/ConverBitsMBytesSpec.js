/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Bits em Megabytes", function() {

  it("deve converter 8 Bits em 1 Megabyte", function() {

    var a = [8];

    var exe = new ConverBitsMBytes();

    expect(exe.uso(a)).toEqual(9.5367431640625e-7);

  });

  it("deve converter 80 Bits em 10 Megabytes", function() {

    var a = [80];

    var exe = new ConverBitsMBytes();

    expect(exe.uso(a)).toEqual(0.0000095367431640625);

  });
  
  it("deve converter 800 Bits em 100 Megabytes", function() {

    var a = [800];

    var exe = new ConverBitsMBytes();

    expect(exe.uso(a)).toEqual(0.000095367431640625);

  });
  
  it("deve converter 8000 Bits em 1000 Megabytes", function() {

    var a = [8000];

    var exe = new ConverBitsMBytes();

    expect(exe.uso(a)).toEqual(0.00095367431640625);

  });

});
