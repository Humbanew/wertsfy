/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ANTILOGARITMOBASEQUALQUERMAIS1_HPP
#define ANTILOGARITMOBASEQUALQUERMAIS1_HPP

#include "../../hub_aritmeticos.hpp"
#include "../private/logaritmobase.hpp"

f32t antilogaritmo_base_qualquer_mais_1(f32t x, f32t base)
{
  return 1 * (logaritmo_base(base, x) * logaritmo_base(base, x) + 1);
}

#endif // ANTILOGARITMOBASEQUALQUERMAIS1_HPP
