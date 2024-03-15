/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef LOGARITMOBASEQUALQUERMAIS1_HPP
#define LOGARITMOBASEQUALQUERMAIS1_HPP

#include "../../hub_aritmeticos.hpp"
#include "../private/logaritmobase.hpp"

f32t logaritmo_base_qualquer_mais_1(f32t x, f32t base)
{
  return logaritmo_base(base, x+1);
}

#endif // LOGARITMOBASEQUALQUERMAIS1_HPP
