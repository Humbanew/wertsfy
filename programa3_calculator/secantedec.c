#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "secantedec.h"

float angulo16;
float resposta_19;

void ui50() {
	printf("\nVoce esta realizando uma secante com numeros decimais ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%f", &angulo16);

	resposta_19 = 1/ cos(angulo16);

	printf("\nResultado:%.4f\n", resposta_19);
}