/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ANTILOGARITMOBASEQUALQUER_HPP
#define ANTILOGARITMOBASEQUALQUER_HPP

#include "../../core-arithm.hpp"
#include "../private/logaritmobase.hpp"

f32t antilogaritmo_base_qualquer(f32t x, f32t base)
{
  return 1 * (logaritmo_base(base, x) * logaritmo_base(base, x));
}

#endif // ANTILOGARITMOBASEQUALQUER_HPP
