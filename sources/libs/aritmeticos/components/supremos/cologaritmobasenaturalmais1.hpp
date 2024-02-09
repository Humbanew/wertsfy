/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COLOGARITMOBASENATURALMAIS1_HPP
#define COLOGARITMOBASENATURALMAIS1_HPP

#include "../../../defs/wtsfy-tipos.hpp"
#include "../private/logaritmobase.hpp"
#include "aritmeticos/core-arithm.hpp"

f32t cologaritmo_base_natural_mais_1(f32t x)
{
  return -1 * (logaritmo_base(Aritmeticos().EULER, x) + 1);
}

#endif // COLOGARITMOBASENATURALMAIS1_HPP
