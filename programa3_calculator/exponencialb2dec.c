#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "exponencialb2dec.h"

float expbdoisdec;
float retorno9;

void ui30() {
	printf("\nVoce esta realizando uma funcao exponencial na base 2 com numeros decimais ;]\n"
		"Insira o valor da potencia:\n");
	scanf("%f", &expbdoisdec);
	retorno9 = exp2f(expbdoisdec);
	printf("\nResultado:%.4f\n", retorno9);
}