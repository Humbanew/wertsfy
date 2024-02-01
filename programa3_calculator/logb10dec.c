#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "logb10dec.h"

float logbdezdec;
float retorno7;

void ui28() {
	printf("\nVoce esta realizando um logaritmo na base 10 com numeros decimais ;]\n"
		"Insira o valor do logaritmo:\n");
	scanf("%f", &logbdezdec);
	retorno7 = log10f(logbdezdec);
	printf("\nResultado:%.4f\n", retorno7);
}