/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef LOGARITMOBASENATURALMENOS1_HPP
#define LOGARITMOBASENATURALMENOS1_HPP

#include "../../core-arithm.hpp"
#include "../private/logaritmobase.hpp"

f32t logaritmo_base_natural_menos_1(f32t x)
{
  return logaritmo_base(Aritmeticos().EULER, x-1);
}

#endif // LOGARITMOBASENATURALMENOS1_HPP
