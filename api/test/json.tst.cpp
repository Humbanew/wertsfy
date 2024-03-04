#include <cstdio>
#include <cstdlib>
#include <iostream>

#include "../defs/wtsfy-tipos.hpp"

// Template de estrutura JSON
typedef struct JSON {
  private:
  typedef union ValueTypes
  {
    i8t a;
    i16t a_1;
    i32t a_2;
    i64t a_3;
    f32t b;
    f64t b_1;
    char* z;
    struct JSON *x;
  } valuetyp;

  public:
  string key;
  valuetyp value;
} json;

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
