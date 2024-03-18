#ifndef EXPORTBYV1_1_0_NOTRELEASE_HPP
#define EXPORTBYV1_1_0_NOTRELEASE_HPP

#include <iostream>
// Nova Arquitetura de Pastas
#include "includes/core/wtsfy_tipos.hpp"

namespace Wtsfy 
{ 
  
  namespace Alpha 
  { 

    i64t Absoluto(i64t x) {
      return x < 0 ? -1 * x : x;
    };

    f32t ArrendondaParaCima(f32t x) {
      return x > (i64t)x+0.5 ? (i64t)x + 1 : (i64t)x;
    };

    f32t ArrendondaParaBaixo(f32t x) {
      return x = (i64t)x; 
    };

    i32t ArrendondaParaDecimal32Bits(f32t x) {
      return (i32t)x;
    };

    i64t ArrendondaParaDecimal64Bits(f32t x) {
      return (i64t)x;
    };

    f32t RaizBiquadrada(f32t x) {
      return sqrt(sqrt(x));
    };

    f32t RaizBicubica(f32t x) {
      return cbrt(cbrt(x));
    };

  } 

}

#endif // EXPORTBYV1_1_0_NOTRELEASE_HPP
