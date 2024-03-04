#include <cstdio>
#include <cstdlib>
#include <iostream>

#include "../defs/wtsfy-tipos.hpp"

int labo() { 

  json a;
  a.key = "a";
  a.value.x->key = "b";
  a.value.x->value.a = 1;
  a.value.x->value.x->key = "c";
  a.value.x->value.x->value.a = 2;
  a.value.x->value.x->value.x->key = "d";
  a.value.x->value.x->value.x->value.a = 3;

  return 0;

}
