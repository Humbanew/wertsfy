/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ANTILOGARITMOBASE10MENOS1_HPP
#define ANTILOGARITMOBASE10MENOS1_HPP

#include "../../core-arithm.hpp"
#include "../private/logaritmobase.hpp"

f32t antilogaritmo_base_10_menos_1(f32t x)
{
  return 1 * (logaritmo_base(10, x) * logaritmo_base(10, x) - 1);
}

#endif // ANTILOGARITMOBASE10MENOS1_HPP
