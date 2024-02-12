#ifndef POTENCIADEPOTENCIA_CLASSIC_HPP
#define POTENCIADEPOTENCIA_CLASSIC_HPP

#include "../../../../defs/wtsfy-tipos.hpp"
#include <cmath>

i64t potenciadepotencia_classic(i64t a, i64t b, i64t c) {
  return pow(a, pow(b, c));
}

#endif // POTENCIADEPOTENCIA_CLASSIC_HPP
