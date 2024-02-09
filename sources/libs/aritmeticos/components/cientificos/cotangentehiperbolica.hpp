/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COTANGENTEHIPERBOLICA_HPP
#define COTANGENTEHIPERBOLICA_HPP

#include "../../defs/wtsfy-tipos.hpp"
#include "seno.hpp"
#include "cosseno.hpp"

f32t cotangente_hiperbolica(f32t x)
{
  return 1 / (1 / (cosseno(x) / seno(x)));
}

#endif // COTANGENTEHIPERBOLICA_HPP
