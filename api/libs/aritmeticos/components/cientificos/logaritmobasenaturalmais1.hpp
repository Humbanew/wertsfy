/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef LOGARITMOBASENATURALMAIS1_HPP
#define LOGARITMOBASENATURALMAIS1_HPP

#include "defs/wtsfy-tipos.hpp"
#include "aritmeticos/core-arithm.hpp"
#include "private/logaritmobase.hpp"

f32t logaritmo_base_natural_mais_1(f32t x)
{
  return logaritmo_base(Aritmeticos().EULER, x+1);
}

#endif // LOGARITMOBASENATURALMAIS1_HPP
