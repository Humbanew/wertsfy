/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COLOGARITMOBASE10MENOS1_HPP
#define COLOGARITMOBASE10MENOS1_HPP

#include "defs/wtsfy-tipos.hpp"
#include "private/logaritmobase.hpp"

f32t cologaritmo_base_10_menos_1(f32t x)
{
  return -1 * (logaritmo_base(10, x) - 1);
}

#endif // COLOGARITMOBASE10MENOS1_HPP
