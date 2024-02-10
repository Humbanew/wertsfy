/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef EXPONENCIALMAIS1_HPP
#define EXPONENCIALMAIS1_HPP

#include "defs/wtsfy-tipos.hpp"
#include "logaritmobasequalquer.hpp"

f32t exponencial_mais_1(f32t base, f32t x)
{
  if(base == 0) { return 1; }
  return (base * (logaritmo_base_qualquer(x, base) * logaritmo_base_qualquer(x, base))) + 1;
}

#endif // EXPONENCIALMAIS1_HPP
