/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

class ArcoSeno {

  calcular(_valorDoArcoSeno=0){
    if(_valorDoArcoSeno == typeof([0])) return;
    let _arco = Math.fround(Math.asin(_valorDoArcoSeno) * 100000000) / 100000000;
    return _arco;
  }
}