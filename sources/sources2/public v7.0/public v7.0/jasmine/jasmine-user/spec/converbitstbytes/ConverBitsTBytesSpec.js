/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Bits em Terrabytes", function() {

  it("deve converter 8 Bits em 1 Terrabyte", function() {

    var a = [8];

    var exe = new ConverBitsTBytes();

    expect(exe.uso(a)).toEqual(9.094947017729282e-13);

  });

  it("deve converter 80 Bits em 10 Terrabytes", function() {

    var a = [80];

    var exe = new ConverBitsTBytes();

    expect(exe.uso(a)).toEqual(9.094947017729282e-12);

  });
  
  it("deve converter 800 Bits em 100 Terrabytes", function() {

    var a = [800];

    var exe = new ConverBitsTBytes();

    expect(exe.uso(a)).toEqual(9.094947017729282e-11);

  });
  
  it("deve converter 8000 Bits em 1000 Terrabytes", function() {

    var a = [8000];

    var exe = new ConverBitsTBytes();

    expect(exe.uso(a)).toEqual(9.094947017729282e-10);

  });

});
