#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "exponencialm1dec.h"

float expm_um_dec;
float retorno10;

void ui31() {
	printf("\nVoce esta realizando uma funcao exponencial na base E menos um com numeros decimais ;]\n"
		"Insira o valor da potencia:\n");
	scanf("%f", &expm_um_dec);
	retorno10 = expm1f(expm_um_dec);
	printf("\nResultado:%.4f\n", retorno10);
}