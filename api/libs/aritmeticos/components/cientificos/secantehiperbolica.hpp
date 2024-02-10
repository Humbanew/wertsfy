/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef SECANTEHIPERBOLICA_HPP
#define SECANTEHIPERBOLICA_HPP

#include "defs/wtsfy-tipos.hpp"
#include "cosseno.hpp"

f32t secante_hiperbolica(f32t x)
{
  return 1 / (1 / cosseno(x)); 
}

#endif // SECANTEHIPERBOLICA_HPP
