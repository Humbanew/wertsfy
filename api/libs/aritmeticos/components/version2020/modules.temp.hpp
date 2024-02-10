#ifndef MODULES_TEMP_HPP
#define MODULES_TEMP_HPP

#include <cmath>

// seno [header]
float seno(float a) {
  return sin(a);
}

// cosseno [header]
float cosseno(float a) {
  return cos(a);
}

// tangente [header]
float tangente(float a) {
  return tan(a);
}

// secante [header]
float secante(float a) {
  return 1 / cos(a);
}

// cosecante [header]
float cosecante(float a) {
  return 1 / sin(a);
}

// cotangente [header]
float cotangente(float a) {
  return 1 / tan(a);
}

// seno_hiperbolico [header]
float seno_hiperbolico(float a) {
  return sinh(a);
}

// cosseno_hiperbolico [header]
float cosseno_hiperbolico(float a) {
  return cosh(a);
}

// tangente_hiperbolica [header]
float tangente_hiperbolica(float a) {
  return tanh(a);
}

// secante_hiperbolica [header]
float secante_hiperbolica(float a) {
  return 1 / cosh(a);
}

// cossecante_hiperbolica [header]
float cossecante_hiperbolica(float a) {
  return 1 / sinh(a);
}

// cotangente_hiperbolica [header]
float cotangente_hiperbolica(float a) {
  return 1 / tanh(a);
}

// arco_seno [header]
float arco_seno(float a) {
  return asin(a);
}

// arco_cosseno [header]
float arco_cosseno(float a) {
  return acos(a);
}

// arco_tangente [header]
float arco_tangente(float a) {
  return atan(a);
}

// arco_secante [header]
float arco_secante(float a) {
  return acos(1 / a);
}

// arco_cossecante [header]
float arco_cossecante(float a) {
  return asin(1 / a);
}

// arco_cotangente [header]
float arco_cotangente(float a) {
  return atan(1 / a);
}

// arco_seno_hiperbolico [header]
float arco_seno_hiperbolico(float a) {
  return asinh(a);
}

// arco_cosseno_hiperbolico [header]
float arco_cosseno_hiperbolico(float a) {
  return acosh(a);
}

// arco_tangente_hiperbolica [header]
float arco_tangente_hiperbolica(float a) {
  return atanh(a);
}

// arco_secante_hiperbolica [header]
float arco_secante_hiperbolica(float a) {
  return acosh(1 / a);
}

// arco_cossecante_hiperbolica [header]
float arco_cossecante_hiperbolica(float a) {
  return asinh(1 / a);
}

// arco_cotangente_hiperbolica [header]
float arco_cotangente_hiperbolica(float a) {
  return atanh(1 / a);
}

#endif // MODULES_TEMP_HPP
