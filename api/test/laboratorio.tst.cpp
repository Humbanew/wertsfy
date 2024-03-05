#include <cstdio>
#include <cstdlib>
#include <cassert>
// #include <concepts>
#include <iostream>
#include <memory>

#include "../defs/wtsfy-tipos.hpp"

// Template de estrutura JSON
typedef struct JSON
{ 
  private:
  // template<typename X> concept mdl = std::integral
  template<typename W> class A{};

  public:
  chrt* key;
  struct JSON *value;
} json;

vdt labo() { 
  json *modelo;
}

int main(vdt) {
  labo();
  decltype(memory_order_consume) memoria();
  cout << memoria << endl;
  return 0;
}
