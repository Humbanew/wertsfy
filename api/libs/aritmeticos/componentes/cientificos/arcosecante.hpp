/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ARCOSECANTE_HPP
#define ARCOSECANTE_HPP

#include "../../core-arithm.hpp"

f32t arco_secante(f32t x)
{
  return 1 / arco_cosseno(x);
}

#endif // ARCOSECANTE_HPP
