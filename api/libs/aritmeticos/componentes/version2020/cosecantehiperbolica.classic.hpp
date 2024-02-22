/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COSECANTEHIPERBOLICA_CLASSIC_HPP
#define COSECANTEHIPERBOLICA_CLASSIC_HPP

#include "../../core-arithm.hpp"
#include <cmath>

f32t cosecantehiperbolica_classic(f32t a) {
  return 1 / sinh(a);
}

#endif // COSECANTEHIPERBOLICA_CLASSIC_HPP
