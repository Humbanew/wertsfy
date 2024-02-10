/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ANTILOGARITMOBASENATURAL_HPP
#define ANTILOGARITMOBASENATURAL_HPP

#include "defs/wtsfy-tipos.hpp"
#include "private/logaritmobase.hpp"
#include "aritmeticos/core-arithm.hpp"

f32t antilogaritmo_base_natural(f32t x)
{
  return 1 * (logaritmo_base(Aritmeticos().EULER, x) * logaritmo_base(Aritmeticos().EULER, x));
}

#endif // ANTILOGARITMOBASENATURAL_HPP
