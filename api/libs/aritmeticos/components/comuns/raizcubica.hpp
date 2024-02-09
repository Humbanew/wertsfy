/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef RAIZCUBICA_HPP
#define RAIZCUBICA_HPP

#include "../../defs/wtsfy-tipos.hpp"
#include "potencia.hpp"

f32t raiz_cubica(f32t x) 
{ 
  return potencia(x, 1 / 3); 
}

#endif // RAIZCUBICA_HPP
