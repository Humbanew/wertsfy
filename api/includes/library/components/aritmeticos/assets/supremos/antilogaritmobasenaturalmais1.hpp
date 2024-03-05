/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ANTILOGARITMOBASENATURALMAIS1_HPP
#define ANTILOGARITMOBASENATURALMAIS1_HPP

#include "../../hub_aritmeticos.hpp"
#include "../private/logaritmobase.hpp"

f32t antilogaritmo_base_natural_mais_1(f32t x)
{
  return 1 * (logaritmo_base(Aritmeticos().EULER, x) * logaritmo_base(Aritmeticos().EULER, x) + 1);
}

#endif // ANTILOGARITMOBASENATURALMAIS1_HPP
