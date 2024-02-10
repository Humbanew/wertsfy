/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ANTILOGARITMOBASENATURALMENOS1_HPP
#define ANTILOGARITMOBASENATURALMENOS1_HPP

#include "defs/wtsfy-tipos.hpp"
#include "private/logaritmobase.hpp"
#include "aritmeticos/core-arithm.hpp"

f32t antilogaritmo_base_natural_menos_1(f32t x)
{
  return 1 * (logaritmo_base(Aritmeticos().EULER, x) * logaritmo_base(Aritmeticos().EULER, x) - 1);
}

#endif // ANTILOGARITMOBASENATURALMENOS1_HPP
