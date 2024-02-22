#ifndef COTANGENTEHIPERBOLICA_CLASSIC_HPP
#define COTANGENTEHIPERBOLICA_CLASSIC_HPP

#include "../../core-arithm.hpp"
#include <cmath>

f64t cotangentehiperbolica_classic(f64t x) {
  return 1 / tanh(x);
}

#endif // COTANGENTEHIPERBOLICA_CLASSIC_HPP
