/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Bits em Brontobytes", function() {

  it("deve converter 8 Bits em 1 Brontobyte", function() {

    var a = [8];

    var exe = new ConverBitsBrBytes();

    expect(exe.uso(a)).toEqual(8.077935669463161e-28);

  });

  it("deve converter 80 Bits em 10 Brontobytes", function() {

    var a = [80];

    var exe = new ConverBitsBrBytes();

    expect(exe.uso(a)).toEqual(8.077935669463161e-27);

  });
  
  it("deve converter 800 Bits em 100 Brontobytes", function() {

    var a = [800];

    var exe = new ConverBitsBrBytes();

    expect(exe.uso(a)).toEqual(8.077935669463161e-26);

  });
  
  it("deve converter 8000 Bits em 1000 Bytes", function() {

    var a = [8000];

    var exe = new ConverBitsBrBytes();

    expect(exe.uso(a)).toEqual(8.077935669463161e-25);

  });

});
