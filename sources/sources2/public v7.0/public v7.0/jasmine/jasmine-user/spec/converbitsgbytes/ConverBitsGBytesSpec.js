/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Bits em Gigabytes", function() {

  it("deve converter 8 Bits em 1 Gigabyte", function() {

    var a = [8];

    var exe = new ConverBitsGBytes();

    expect(exe.uso(a)).toEqual(9.313225746154785e-10);

  });

  it("deve converter 80 Bits em 10 Gigabytes", function() {

    var a = [80];

    var exe = new ConverBitsGBytes();

    expect(exe.uso(a)).toEqual(9.313225746154785e-9);

  });
  
  it("deve converter 800 Bits em 100 Gigabytes", function() {

    var a = [800];

    var exe = new ConverBitsGBytes();

    expect(exe.uso(a)).toEqual(9.313225746154785e-8);

  });
  
  it("deve converter 8000 Bits em 1000 Gigabytes", function() {

    var a = [8000];

    var exe = new ConverBitsGBytes();

    expect(exe.uso(a)).toEqual(9.313225746154785e-7);

  });

});
