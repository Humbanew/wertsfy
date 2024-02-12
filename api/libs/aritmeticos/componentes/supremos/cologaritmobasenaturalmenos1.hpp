/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COLOGARITMOBASENATURALMENOS1_HPP
#define COLOGARITMOBASENATURALMENOS1_HPP

#include "../../core-arithm.hpp"
#include "../private/logaritmobase.hpp"

f32t cologaritmo_base_natural_menos_1(f32t x)
{
  return -1 * (logaritmo_base(Aritmeticos().EULER, x) - 1);
}

#endif // COLOGARITMOBASENATURALMENOS1_HPP
