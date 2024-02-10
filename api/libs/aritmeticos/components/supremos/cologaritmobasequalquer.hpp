/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COLOGARITMOBASEQUALQUER_HPP
#define COLOGARITMOBASEQUALQUER_HPP

#include "defs/wtsfy-tipos.hpp"
#include "private/logaritmobase.hpp"

f32t cologaritmo_base_qualquer(f32t base, f32t x)
{
  return -1 * logaritmo_base(base, x);
}

#endif // COLOGARITMOBASEQUALQUER_HPP
