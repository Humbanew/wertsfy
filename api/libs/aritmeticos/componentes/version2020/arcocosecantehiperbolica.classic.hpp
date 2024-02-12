#ifndef ARCOCOSECANTEHIPERBOLICA_CLASSIC_HPP
#define ARCOCOSECANTEHIPERBOLICA_CLASSIC_HPP

#include "../../../../defs/wtsfy-tipos.hpp"
#include <cmath>

f32t arcocosecantehiperbolica_classic(f32t a) {
  return 1 / asinh(a);
}

#endif // ARCOCOSECANTEHIPERBOLICA_CLASSIC_HPP
