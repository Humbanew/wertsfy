/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef ARCOSECANTEHIPERBOLICA_HPP
#define ARCOSECANTEHIPERBOLICA_HPP

#include "../../hub_aritmeticos.hpp"
#include "arcocossenohiperbolico.hpp"

f32t arco_secante_hiperbolica(f32t x) 
{
  return 1 / arco_cosseno_hiperbolico(x);
}

#endif // ARCOSECANTEHIPERBOLICA_HPP
