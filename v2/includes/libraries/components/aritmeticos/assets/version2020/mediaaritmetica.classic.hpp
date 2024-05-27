/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef MEDIAARITMETICA_CLASSIC_HPP
#define MEDIAARITMETICA_CLASSIC_HPP

#include "../../hub_aritmeticos.hpp"

i64t media_aritmetica_classic(i64t *a, i64t b) {
  i64t resultado;
  for(i64t i = 0; i < b; i++) {
    resultado += a[i];
  }
  resultado /= b;
  return resultado;
}

#endif // MEDIAARITMETICA_CLASSIC_HPP
