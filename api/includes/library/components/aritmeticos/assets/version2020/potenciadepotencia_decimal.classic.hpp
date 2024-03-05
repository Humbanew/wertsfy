/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef POTENCIADEPOTENCIA_DECIMAL_CLASSIC_HPP
#define POTENCIADEPOTENCIA_DECIMAL_CLASSIC_HPP

#include "../../hub_aritmeticos.hpp"
#include <cmath>

f32t potenciadepotencia_classic_decimal(f32t a, f32t b, f32t c) {
  return pow(a, pow(b, c));
}

#endif // POTENCIADEPOTENCIA_DECIMAL_CLASSIC_HPP
