/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef RAIZQUADRADA_HPP
#define RAIZQUADRADA_HPP

#include "defs/wtsfy-tipos.hpp"
#include "potencia.hpp"

f32t raiz_quadrada(f32t x) 
{ 
  return potencia(x, 1 / 2); 
}

#endif // RAIZQUADRADA_HPP
