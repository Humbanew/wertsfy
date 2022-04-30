/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
 describe("Módulo de Conversão de Bits em Bytes", function() {

  it("deve converter 8 Bits em 1 Byte", function() {

    var a = [8];

    var exe = new ConverBitsBytes();

    expect(exe.uso(a)).toEqual(1);

  });

  it("deve converter 80 Bits em 10 Bytes", function() {

    var a = [80];

    var exe = new ConverBitsBytes();

    expect(exe.uso(a)).toEqual(10);

  });
  
  it("deve converter 800 Bits em 100 Bytes", function() {

    var a = [800];

    var exe = new ConverBitsBytes();

    expect(exe.uso(a)).toEqual(100);

  });
  
  it("deve converter 8000 Bits em 1000 Bytes", function() {

    var a = [8000];

    var exe = new ConverBitsBytes();

    expect(exe.uso(a)).toEqual(1000);

  });

});
