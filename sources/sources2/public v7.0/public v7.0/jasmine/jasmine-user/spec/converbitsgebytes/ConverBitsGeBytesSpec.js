/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Bits em Geopbytes", function() {

  it("deve converter 8 Bits em 1 Geopbyte", function() {

    var a = [8];

    var exe = new ConverBitsGeBytes();

    expect(exe.uso(a)).toEqual(7.888609052210118e-31);

  });

  it("deve converter 80 Bits em 10 Geopbytes", function() {

    var a = [80];

    var exe = new ConverBitsGeBytes();

    expect(exe.uso(a)).toEqual(7.888609052210118e-30);

  });
  
  it("deve converter 800 Bits em 100 Geopbytes", function() {

    var a = [800];

    var exe = new ConverBitsGeBytes();

    expect(exe.uso(a)).toEqual(7.888609052210118e-29);

  });
  
  it("deve converter 8000 Bits em 1000 Bytes", function() {

    var a = [8000];

    var exe = new ConverBitsGeBytes();

    expect(exe.uso(a)).toEqual(7.888609052210118e-28);

  });

});
