/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Bits em Exabytes", function() {

  it("deve converter 8 Bits em 1 Exabyte", function() {

    var a = [8];

    var exe = new ConverBitsEBytes();

    expect(exe.uso(a)).toEqual(8.673617379884035e-19);

  });

  it("deve converter 80 Bits em 10 Exabytes", function() {

    var a = [80];

    var exe = new ConverBitsEBytes();

    expect(exe.uso(a)).toEqual(8.673617379884035e-18);

  });
  
  it("deve converter 800 Bits em 100 Exabytes", function() {

    var a = [800];

    var exe = new ConverBitsEBytes();

    expect(exe.uso(a)).toEqual(8.673617379884035e-17);

  });
  
  it("deve converter 8000 Bits em 1000 Exabytes", function() {

    var a = [8000];

    var exe = new ConverBitsEBytes();

    expect(exe.uso(a)).toEqual(8.673617379884035e-16);

  });

});
