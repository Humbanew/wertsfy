/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COSECANTEHIPERBOLICA_HPP
#define COSECANTEHIPERBOLICA_HPP

#include "defs/wtsfy-tipos.hpp"
#include "seno.hpp"

f32t cosecante_hiperbolica(f32t x)
{
  return 1 / (1 / seno(x));
}

#endif // COSECANTEHIPERBOLICA_HPP
