/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

class ArcoCosseno {

  calcular(_valorDoArcoCosseno=0){
    if(_valorDoArcoCosseno == typeof([0])) return;
    let _arco = Math.fround(Math.acos(_valorDoArcoCosseno) * 100000000) / 100000000;
    return _arco;
  }
}