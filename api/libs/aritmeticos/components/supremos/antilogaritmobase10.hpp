/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ANTILOGARITMOBASE10_HPP
#define ANTILOGARITMOBASE10_HPP

#include "../../../defs/wtsfy-tipos.hpp"
#include "../private/logaritmobase.hpp"

f32t antilogaritmo_base_10(f32t x)
{
  return 1 * (logaritmo_base(10, x) * logaritmo_base(10, x));
}

#endif // ANTILOGARITMOBASE10_HPP
