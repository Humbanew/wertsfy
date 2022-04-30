/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Bits em Yottabytes", function() {

  it("deve converter 8 Bits em 1 Yottabyte", function() {

    var a = [8];

    var exe = new ConverBitsYBytes();

    expect(exe.uso(a)).toEqual(8.470329472543003e-22);

  });

  it("deve converter 80 Bits em 10 Yottabytes", function() {

    var a = [80];

    var exe = new ConverBitsYBytes();

    expect(exe.uso(a)).toEqual(8.470329472543003e-21);

  });
  
  it("deve converter 800 Bits em 100 Yottabytes", function() {

    var a = [800];

    var exe = new ConverBitsYBytes();

    expect(exe.uso(a)).toEqual(8.470329472543003e-20);

  });
  
  it("deve converter 8000 Bits em 1000 Bytes", function() {

    var a = [8000];

    var exe = new ConverBitsYBytes();

    expect(exe.uso(a)).toEqual(8.470329472543003e-19);

  });

});
