#ifndef POTENCIADEPOTENCIA_DECIMAL_CLASSIC_HPP
#define POTENCIADEPOTENCIA_DECIMAL_CLASSIC_HPP

#include "defs/wtsfy-tipos.hpp"
#include <cmath>

f32t potenciadepotencia_classic_decimal(f32t a, f32t b, f32t c) {
  return pow(a, pow(b, c));
}

#endif // POTENCIADEPOTENCIA_DECIMAL_CLASSIC_HPP
