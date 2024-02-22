/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef TANGENTE_HPP
#define TANGENTE_HPP

#include "../../core-arithm.hpp"

f32t tangente(f32t x)
{
  return seno(x) / cosseno(x);
}

#endif // TANGENTE_HPP
