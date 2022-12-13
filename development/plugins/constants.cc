#include <stdio.h>
#include <stdlib.h>
#include "dependencies/v8lib/v8.h"

using namespace v8;

namespace ColorsPallet {

  char* AQUAMARINE = "aquamarine";

}

void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "pallet", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
