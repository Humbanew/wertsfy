#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "logm1dec.h"

float logbm1d;
float retorno6;

void ui27() {
	printf("\nVoce esta realizando um logaritmo natural mais 1 com numeros decimais ;]\n"
		"Insira o valor do logaritmo natural:\n");
	scanf("%f", &logbm1d);
	retorno6 = log1pf(logbm1d);
	printf("\nResultado:%.4f\n", retorno6);
}