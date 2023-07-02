#include <stdio.h>
#include <stdlib.h>

#include "./nv8/node.h"
#include "./nv8/node_api.h"
#include "./nv8/node_api_types.h"
#include "./nv8/node_version.h"
#include "./nv8/js_native_api.h"
#include "./nv8/v8.h"
#include "./cppgc/common.h"

int main (void) { 

  printf("%d", v8::Isolate::GarbageCollectionType::kMinorGarbageCollection);

}

