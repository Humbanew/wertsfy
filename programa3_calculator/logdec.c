#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "logdec.h"

float lognatd;
float resposta1;

void ui26() {
	printf("\nVoce esta realizando um logaritmo natural com numeros decimais ;]\n"
		"Insira o valor do logaritmo natural:\n");
	scanf("%f", &lognatd);
	resposta1 = logf(lognatd);
	printf("\nResultado:%.4f\n", resposta1);
}