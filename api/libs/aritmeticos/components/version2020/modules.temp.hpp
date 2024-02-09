#ifndef MODULES_TEMP_HPP
#define MODULES_TEMP_HPP

#include <cmath>
#include <cstdlib>

// soma [header]
int soma(int a, int b) {
  return a + b;
}

// soma_decimal [header]
float soma_decimal(float a, float b) {
  return a + b;
}

// subtracao [header]
int subtracao(int a, int b) {
  return a - b;
}

// subtracao_decimal [header]
float subtracao_decimal(float a, float b) {
  return a - b;
}

// multiplicacao [header]
int multiplicacao(int a, int b) {
  return a * b;
}

// multiplicacao_decimal [header]
float multiplicacao_decimal(float a, float b) {
  return a * b;
}

// divisao [header]
int divisao(int a, int b) {
  return a / b;
}

// divisao_decimal [header]
float divisao_decimal(float a, float b) {
  return a / b;
}

// potenciacao [header]
int potenciacao(int a, int b) {
  return pow(a, b);
}

// potenciacao_decimal [header]
float potenciacao_decimal(float a, float b) {
  return pow(a, b);
}

// potencia_de_potencia [header]
int potencia_de_potencia(int a, int b, int c) {
  return pow(a, pow(b, c));
}

// potencia_de_potencia_decimal [header]
float potencia_de_potencia_decimal(float a, float b, float c) {
  return pow(a, pow(b, c));
}

// potenciacao_por2 [header]
int potenciacao_por2(int a) {
  return pow(a, 2);
}

// potenciacao_por2_decimal [header]
float potenciacao_por2_decimal(float a) {
  return pow(a, 2);
}

// radiciacao_2 [header]
int radiciacao_2(int a) {
  return sqrt(a);
}

// radiciocao_2_decimal [header]
float radiciacao_2_decimal(float a) {
  return sqrt(a);
}

// radiciacao_3 [header]
int radiciacao_3(int a) {
  return cbrt(a);
}

// radiciacao_3_decimal [header]
float radiciacao_3_decimal(float a) {
  return cbrt(a);
}

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

// logaritmo [header]
int logaritmo(int a, int b) {
  return log(a);
}

// logaritmo_decimal [header]
float logaritmo_decimal(float a, float b) {
  return log(a);
}

// logaritmo_de2 [header]
int logaritmo_2(int a) {
  return log2(a);
}

// logaritmo_de2_decimal [header]
float logaritmo_2_decimal(float a) {
  return log2(a);
}

// logaritmo_de10 [header]
int logaritmo_10(int a) {
  return log10(a);
}

// logaritmo_de10_decimal [header]
float logaritmo_10_decimal(float a) {
  return log10(a);
}

// media_aritmetica [header]
int media_aritmetica(int a, int b) {
  return (a + b) / 2;
}

// media_aritmetica_decimal [header]
float media_aritmetica_decimal(float a, float b) {
  return (a + b) / 2;
}

// exponencial [header]
float exponencial(int a) {
  return exp(a);
}

// exponencial mais 1 [header]
float exponencial_menos1(int a) {
  return expm1(a);
}

// logaritmo base 10 menos 1 [header]
float logaritmo_menos1(int a) {
  return log1p(a);
}

// quadrante seno [header]
int quadrante_seno(float a) {
  if (a > 0 && a < 90) {
    return 1;
  } else if (a > 90 && a < 180) {
    return 2;
  } else if (a > 180 && a < 270) {
    return 3;
  } else if (a > 270 && a < 360) {
    return 4;
  } else {
    return 0;
  }
}

// quadrante cosseno [header]
int quadrante_cosseno(float a) {
  if (a > 0 && a < 90) {
    return 4;
  } else if (a > 90 && a < 180) {
    return 3;
  } else if (a > 180 && a < 270) {
    return 2;
  } else if (a > 270 && a < 360) {
    return 1;
  } else {
    return 0;
  }
}

// quadrante tangente [header]
int quadrante_tangente(float a) {
  if (a > 0 && a < 90) {
    return 1;
  } else if (a > 90 && a < 180) {
    return 2;
  } else if (a > 180 && a < 270) {
    return 3;
  } else if (a > 270 && a < 360) {
    return 4;
  } else {
    return 0;
  }
}

#endif // MODULES_TEMP_HPP
