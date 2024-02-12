/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COLOGARITMOBASEQUALQUERMAIS1_HPP
#define COLOGARITMOBASEQUALQUERMAIS1_HPP

#include "../../core-arithm.hpp"
#include "../private/logaritmobase.hpp"

f32t cologaritmo_base_qualquer_mais_1(f32t x, f32t base)
{
  return -1 * (logaritmo_base(base, x) + 1);
}

#endif // COLOGARITMOBASEQUALQUERMAIS1_HPP
