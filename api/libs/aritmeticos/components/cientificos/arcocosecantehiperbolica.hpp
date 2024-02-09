/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ARCOCOSECANTEHIPERBOLICA_HPP
#define ARCOCOSECANTEHIPERBOLICA_HPP

#include "../../defs/wtsfy-tipos.hpp"
#include "arcosenohiperbolico.hpp"

f32t arco_cosecante_hiperbolica(f32t x) 
{
  return 1 / arco_seno_hiperbolico(x);
}

#endif // ARCOCOSECANTEHIPERBOLICA_HPP
