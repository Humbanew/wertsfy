/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef SENOHIPERBOLICO_HPP
#define SENOHIPERBOLICO_HPP

#include "../../defs/wtsfy-tipos.hpp"
#include "aritmeticos/core-arithm.hpp"

f32t seno_hiperbolico(f32t x)
{
  return 1 / (((2 * Aritmeticos().PI * 1) / 4) / 90) * x;
}

#endif // SENOHIPERBOLICO_HPP
