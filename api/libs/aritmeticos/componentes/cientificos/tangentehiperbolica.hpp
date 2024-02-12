/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef TANGENTEHIPERBOLICA_HPP
#define TANGENTEHIPERBOLICA_HPP

f32t tangente_hiperbolica(f32t x)
{
  return 1 / (seno(x) / cosseno(x));
}

#endif // TANGENTEHIPERBOLICA_HPP
