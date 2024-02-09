/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef POTENCIADEPOTENCIA_HPP
#define POTENCIADEPOTENCIA_HPP

#include "../../defs/wtsfy-tipos.hpp"

f32t potencia_de_potencia(f32t x, f32t y, f32t z) 
{
  return pow(pow(x, y), z);
}

#endif // POTENCIADEPOTENCIA_HPP
