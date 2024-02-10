/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef LOGARITMOBASEQUALQUERMENOS1_HPP
#define LOGARITMOBASEQUALQUERMENOS1_HPP

#include "defs/wtsfy-tipos.hpp"
#include "private/logaritmobase.hpp"

f32t logaritmo_base_qualquer_menos_1(f32t x, f32t base)
{
  return logaritmo_base(base, x-1);
}

#endif // LOGARITMOBASEQUALQUERMENOS1_HPP
