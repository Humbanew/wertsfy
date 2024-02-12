/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef LOGARITMOBASENATURAL_HPP
#define LOGARITMOBASENATURAL_HPP

#include "../../core-arithm.hpp"
#include "../private/logaritmobase.hpp"

f32t logaritmo_base_natural(f32t x)
{
  return logaritmo_base(Aritmeticos().EULER, x);
}

#endif // LOGARITMOBASENATURAL_HPP
