/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ANTILOGARITMOBASE2MENOS1_HPP
#define ANTILOGARITMOBASE2MENOS1_HPP

#include "../../core-arithm.hpp"
#include "../private/logaritmobase.hpp"

f32t antilogaritmo_base_2_menos_1(f32t x)
{
  return 1 * (logaritmo_base(2, x) * logaritmo_base(2, x) - 1);
}

#endif // ANTILOGARITMOBASE2MENOS1_HPP
