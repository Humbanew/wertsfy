/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef TANGENTEHIPERBOLICA_HPP
#define TANGENTEHIPERBOLICA_HPP

#include "../../hub_aritmeticos.hpp"
#include "senohiperbolico.hpp"
#include "cossenohiperbolico.hpp"

f32t tangente_hiperbolica(f32t x)
{
  return (seno_hiperbolico(x) / cosseno_hiperbolico(x));
}

#endif // TANGENTEHIPERBOLICA_HPP
