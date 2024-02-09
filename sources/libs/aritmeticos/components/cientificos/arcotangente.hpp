/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ARCOTANGENTE_HPP
#define ARCOTANGENTE_HPP

#include "../../defs/wtsfy-tipos.hpp"
#include "arcoseno.hpp"
#include "arcocosseno.hpp"

f32t arco_tangente(f32t x) 
{
  return arco_seno(x) / arco_cosseno(x);
}

#endif // ARCOTANGENTE_HPP
