/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
describe("Módulo de Conversão de Bits em Zettabytes", function() {

  it("deve converter 8 Bits em 1 Zettabyte", function() {

    var a = [8];

    var exe = new ConverBitsZBytes();

    expect(exe.uso(a)).toEqual(8.271806125530277e-25);

  });

  it("deve converter 80 Bits em 10 Zettabytes", function() {

    var a = [80];

    var exe = new ConverBitsZBytes();

    expect(exe.uso(a)).toEqual(8.271806125530277e-24);

  });
  
  it("deve converter 800 Bits em 100 Zettabytes", function() {

    var a = [800];

    var exe = new ConverBitsZBytes();

    expect(exe.uso(a)).toEqual(8.271806125530277e-23);

  });
  
  it("deve converter 8000 Bits em 1000 Zettabytes", function() {

    var a = [8000];

    var exe = new ConverBitsZBytes();

    expect(exe.uso(a)).toEqual(8.271806125530277e-22);

  });

});
