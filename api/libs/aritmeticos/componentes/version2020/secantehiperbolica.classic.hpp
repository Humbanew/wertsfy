#ifndef SECANTEHIPERBOLICA_CLASSIC_HPP
#define SECANTEHIPERBOLICA_CLASSIC_HPP

#include "../../../../defs/wtsfy-tipos.hpp"
#include <cmath>

f32t secantehiperbolica_classic(f32t a) {
  return 1 / cosh(a);
}

#endif // SECANTEHIPERBOLICA_CLASSIC_HPP
