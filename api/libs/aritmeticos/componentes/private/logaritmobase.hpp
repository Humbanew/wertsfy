/**
 * @author Humbanew Project ©️ 2019-2024. Todos os direitos reservados.
 */  

#ifndef LOGARITMOBASE_HPP
#define LOGARITMOBASE_HPP

f32t logaritmo_base(f32t expo, f32t x) 
{
  f32t exp = expo;
  int $a = exp, $b = x;
  int scan = $b % $a;

  while(scan != 0) {
    scan = scan % $a;

    if(pow(expo, exp) != x) {   
      if(pow(expo, exp) != x) {
        if (pow(expo, exp) != x) {
          exp += 0.0001;
        }
        exp += 0.001;
      }
      exp += 0.01; 
    } 
    exp += 0.1;
  }
  return exp;
};

#endif // LOGARITMOBASE_HPP
