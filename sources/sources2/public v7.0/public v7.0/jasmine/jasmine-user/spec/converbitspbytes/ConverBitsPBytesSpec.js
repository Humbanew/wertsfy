/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Bits em Petabytes", function() {

  it("deve converter 8 Bits em 1 Petabyte", function() {

    var a = [8];

    var exe = new ConverBitsPBytes();

    expect(exe.uso(a)).toEqual(8.881784197001252e-16);

  });

  it("deve converter 80 Bits em 10 Petabytes", function() {

    var a = [80];

    var exe = new ConverBitsPBytes();

    expect(exe.uso(a)).toEqual(8.881784197001252e-15);

  });
  
  it("deve converter 800 Bits em 100 Petabytes", function() {

    var a = [800];

    var exe = new ConverBitsPBytes();

    expect(exe.uso(a)).toEqual(8.881784197001252e-14);

  });
  
  it("deve converter 8000 Bits em 1000 Petabytes", function() {

    var a = [8000];

    var exe = new ConverBitsPBytes();

    expect(exe.uso(a)).toEqual(8.881784197001252e-13);

  });

});
