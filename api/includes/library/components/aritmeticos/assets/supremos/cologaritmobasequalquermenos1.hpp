/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COLOGARITMOBASEQUALQUERMENOS1_HPP
#define COLOGARITMOBASEQUALQUERMENOS1_HPP

#include "../../hub_aritmeticos.hpp"
#include "../private/logaritmobase.hpp"

f32t cologaritmo_base_qualquer_menos_1(f32t base, f32t x)
{
  return -1 * (logaritmo_base(base, x) - 1);
}

#endif // COLOGARITMOBASEQUALQUERMENOS1_HPP
