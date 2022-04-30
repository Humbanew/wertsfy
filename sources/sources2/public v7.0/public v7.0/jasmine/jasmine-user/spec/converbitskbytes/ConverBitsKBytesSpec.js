/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Bits em Kilobytes", function() {

  it("deve converter 8 Bits em 1 Kilobyte", function() {

    var a = [8];

    var exe = new ConverBitsKBytes();

    expect(exe.uso(a)).toEqual(0.0009765625);

  });

  it("deve converter 80 Bits em 10 Kilobytes", function() {

    var a = [80];

    var exe = new ConverBitsKBytes();

    expect(exe.uso(a)).toEqual(0.009765625);

  });
  
  it("deve converter 800 Bits em 100 Kilobytes", function() {

    var a = [800];

    var exe = new ConverBitsKBytes();

    expect(exe.uso(a)).toEqual(0.09765625);

  });
  
  it("deve converter 8000 Bits em 1000 Kilobytes", function() {

    var a = [8000];

    var exe = new ConverBitsKBytes();

    expect(exe.uso(a)).toEqual(0.9765625);

  });

});
