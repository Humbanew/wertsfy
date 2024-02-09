/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef EXPONENCIALMENOS1_HPP
#define EXPONENCIALMENOS1_HPP

#include "../../defs/wtsfy-tipos.hpp"
#include "logaritmobasequalquer.hpp"

f32t exponencial_menos_1(f32t base, f32t x)
{
  if(base == 0) { return 1; }
  return (base * (logaritmo_base_qualquer(x, base) * logaritmo_base_qualquer(x, base))) - 1;
}

#endif // EXPONENCIALMENOS1_HPP
