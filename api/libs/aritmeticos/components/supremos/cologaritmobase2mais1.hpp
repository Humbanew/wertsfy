/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COLOGARITMOBASE2MAIS1_HPP
#define COLOGARITMOBASE2MAIS1_HPP

#include "defs/wtsfy-tipos.hpp"
#include "private/logaritmobase.hpp"

f32t cologaritmo_base_2_mais_1(f32t x)
{
  return (-1 * logaritmo_base(2, x)) + 1;
}

#endif // COLOGARITMOBASE2MAIS1_HPP
