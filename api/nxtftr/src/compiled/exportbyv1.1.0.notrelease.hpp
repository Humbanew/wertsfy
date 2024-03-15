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

  } 

}

#endif // EXPORTBYV1_1_0_NOTRELEASE_HPP
