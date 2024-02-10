/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ARCOTANGENTEHIPERBOLICA_HPP
#define ARCOTANGENTEHIPERBOLICA_HPP

#include "defs/wtsfy-tipos.hpp"
#include "arcosenohiperbolico.hpp"
#include "arcocossenohiperbolico.hpp"

f32t arco_tangente_hiperbolica(f32t x) 
{
  return arco_seno_hiperbolico(x) / arco_cosseno_hiperbolico(x);
}

#endif // ARCOTANGENTE_HPP
