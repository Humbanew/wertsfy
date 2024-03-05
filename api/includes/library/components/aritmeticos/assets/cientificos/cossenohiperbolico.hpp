/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef COSSENOHIPERBOLICO_HPP
#define COSSENOHIPERBOLICO_HPP

#include "../../hub_aritmeticos.hpp"

f32t cosseno_hiperbolico(f32t x)
{
  return 1 / (-1 * ((2 * Aritmeticos().PI * 1) / 4) / 90) * x; 
}

#endif // COSSENOHIPERBOLICO_HPP
