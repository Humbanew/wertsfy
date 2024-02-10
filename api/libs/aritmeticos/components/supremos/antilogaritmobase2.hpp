/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ANTILOGARITMOBASE2_HPP
#define ANTILOGARITMOBASE2_HPP

#include "defs/wtsfy-tipos.hpp"
#include "private/logaritmobase.hpp"

f32t antilogaritmo_base_2(f32t x)
{
  return 1 * (logaritmo_base(2, x) * logaritmo_base(2, x));
}

#endif // ANTILOGARITMOBASE2_HPP
