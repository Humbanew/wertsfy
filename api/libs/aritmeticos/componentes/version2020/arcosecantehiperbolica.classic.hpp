#ifndef ARCOSECANTEHIPERBOLICA_CLASSIC_HPP
#define ARCOSECANTEHIPERBOLICA_CLASSIC_HPP

#include "../../../../defs/wtsfy-tipos.hpp"
#include <cmath>

f32t arcosecantehiperbolica_classic(f32t a) {
  return 1 / acosh(a);
}

#endif // ARCOSECANTEHIPERBOLICA_CLASSIC_HPP
