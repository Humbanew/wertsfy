/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ARCOCOSSENOHIPERBOLICO_HPP
#define ARCOCOSSENOHIPERBOLICO_HPP

#include "../../defs/wtsfy-tipos.hpp"
#include "aritmeticos/core-arithm.hpp"

f32t arco_cosseno_hiperbolico(f32t x) 
{
  return 1 / ((-1 * ((2 * Aritmeticos().PI * 1) / 4) / 90) * x);
}

#endif // ARCOCOSSENOHIPERBOLICO_HPP
