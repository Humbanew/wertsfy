/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
 describe("Módulo de Conversão de Petabytes em Bits", function() {

  it("deve converter 1 Petabyte em 9007199254740992 Bits", function() {

    var a = [1];

    var exe = new ConverPBytesBits();

    expect(exe.uso(a)).toEqual(9007199254740992);

  });

  it("deve converter 10 Petabytes em 90071992547409920 Bits", function() {

    var a = [10];

    var exe = new ConverPBytesBits();

    expect(exe.uso(a)).toEqual(90071992547409920);

  });
  
  it("deve converter 100 Petabytes em 900719925474099200 Bits", function() {

    var a = [100];

    var exe = new ConverPBytesBits();

    expect(exe.uso(a)).toEqual(900719925474099200);

  });
  
  it("deve converter 1000 Petabytes em 9007199254740992000 Bits", function() {

    var a = [1000];

    var exe = new ConverPBytesBits();

    expect(exe.uso(a)).toEqual(9007199254740992000);

  });

});
