/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COTANGENTEHIPERBOLICA_HPP
#define COTANGENTEHIPERBOLICA_HPP

#include "../../hub_aritmeticos.hpp"
#include "senohiperbolico.hpp"
#include "cossenohiperbolico.hpp"

f32t cotangente_hiperbolica(f32t x)
{
  return 1 / (cosseno_hiperbolico(x) / seno_hiperbolico(x));
}

#endif // COTANGENTEHIPERBOLICA_HPP
