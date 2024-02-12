/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COLOGARITMOBASENATURAL_HPP
#define COLOGARITMOBASENATURAL_HPP

#include "../../core-arithm.hpp"
#include "../private/logaritmobase.hpp"

f32t cologaritmo_base_natural(f32t x)
{
  return -1 * logaritmo_base(Aritmeticos().EULER, x);
}

#endif // COLOGARITMOBASENATURAL_HPP
