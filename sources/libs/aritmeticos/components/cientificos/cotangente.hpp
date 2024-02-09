/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COTANGENTE_HPP
#define COTANGENTE_HPP

#include "../../defs/wtsfy-tipos.hpp"
#include "seno.hpp"
#include "cosseno.hpp"

f32t cotangente(f32t x)
{
  return 1 / (cosseno(x) / seno(x));
}

#endif // COTANGENTE_HPP
