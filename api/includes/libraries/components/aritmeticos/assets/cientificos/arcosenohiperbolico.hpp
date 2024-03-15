/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ARCOSENOHIPERBOLICO_HPP
#define ARCOSENOHIPERBOLICO_HPP

#include "../../hub_aritmeticos.hpp"

f32t arco_seno_hiperbolico(f32t x) 
{
  return 1 / ((((2 * Aritmeticos().PI * 1) / 4) / 90) * x);
}

#endif // ARCOSENOHIPERBOLICO_HPP
