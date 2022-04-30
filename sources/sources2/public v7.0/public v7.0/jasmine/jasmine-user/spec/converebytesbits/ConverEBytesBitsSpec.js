/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
 describe("Módulo de Conversão de Exabytes em Bits", function() {

  it("deve converter 1 Exabyte em 9223372036854776000 Bits", function() {

    var a = [1];

    var exe = new ConverEBytesBits();

    expect(exe.uso(a)).toEqual(9223372036854776000);

  });

  it("deve converter 10 Exabytes em 92233720368547760000 Bits", function() {

    var a = [10];

    var exe = new ConverEBytesBits();

    expect(exe.uso(a)).toEqual(92233720368547760000);

  });
  
  it("deve converter 100 Exabytes em 922337203685477600000 Bits", function() {

    var a = [100];

    var exe = new ConverEBytesBits();

    expect(exe.uso(a)).toEqual(922337203685477600000);

  });
  
  it("deve converter 1000 Exabytes em 9223372036854776000000 Bits", function() {

    var a = [1000];

    var exe = new ConverEBytesBits();

    expect(exe.uso(a)).toEqual(9223372036854776000000);

  });

});
