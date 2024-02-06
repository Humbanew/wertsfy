#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "exponencial.h"

float exp1dec;
float retorno11;

void ui32() {
	printf("\nVoce esta realizando uma funcao exponencial na base E com numeros decimais ;]\n"
		"Insira o valor da potencia:\n");
	scanf("%f", &exp1dec);
	retorno11 = expf(exp1dec);
	printf("\nResultado:%.4f\n", retorno11);
}