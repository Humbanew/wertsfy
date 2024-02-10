#ifndef ARCOCOTANGENTE_HIPERBOLICA_CLASSIC_HPP
#define ARCOCOTANGENTE_HIPERBOLICA_CLASSIC_HPP

#include "defs/wtsfy-tipos.hpp"
#include <cmath>

f32t arcocotangentehiperbolica_classic(f32t a) {
  return 1 / atanh(a);
}

#endif // ARCOCOTANGENTE_HIPERBOLICA_CLASSIC_HPP
