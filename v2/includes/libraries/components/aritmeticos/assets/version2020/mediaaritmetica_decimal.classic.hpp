/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef MEDIAARITMETICA_DECIMAL_CLASSIC_HPP
#define MEDIAARITMETICA_DECIMAL_CLASSIC_HPP

#include "../../hub_aritmeticos.hpp"

f32t media_aritmetica_classic_decimal(f32t *a, f32t b) {
  f32t resultado;
  for(i64t i = 0; i < b; i++) {
    resultado += a[i];
  }
  resultado /= b;
  return resultado;
}

#endif // MEDIAARITMETICA_DECIMAL_CLASSIC_HPP
