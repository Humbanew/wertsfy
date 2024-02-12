/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ANTILOGARITMOBASEQUALQUERMENOS1_HPP
#define ANTILOGARITMOBASEQUALQUERMENOS1_HPP

#include "../../core-arithm.hpp"
#include "../private/logaritmobase.hpp"

f32t antilogaritmo_base_qualquer_menos_1(f32t x)
{
  return 1 * (logaritmo_base(1, x) * logaritmo_base(1, x) - 1);
}

#endif // ANTILOGARITMOBASEQUALQUERMENOS1_HPP
